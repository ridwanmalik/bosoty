import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from "@inertiajs/inertia-react";
import { Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function Dashboard(props) {
    console.log(`Log | file: Dashboard.jsx:5 | props`, props);
    const {
        properties: { data: properties },
        auth,
        errors,
    } = props;

    console.log(`Log | file: Dashboard.jsx:9 | properties`, properties);
    const columns = [
        { field: "name", headerName: "Name", width: 130 },
        { field: "address", headerName: "Address", width: 130 },
        { field: "type", headerName: "Type", width: 130 },
        { field: "price", headerName: "Price", width: 130 },
        { field: "status", headerName: "Status", width: 130 },
        // { field: "area", headerName: "Area", width: 130 },

        // actions
        {
            field: "actions",
            headerName: "Actions",
            width: 170,
            renderCell: (params) => {
                return (
                    <div className="flex items-center gap-3">
                        <Button variant="contained" size="small">
                            Edit
                        </Button>
                        <Button variant="contained" size="small" color="error">
                            Delete
                        </Button>
                    </div>
                );
            },
        },
    ];
    return (
        <AuthenticatedLayout
            auth={auth}
            errors={errors}
            header={
                <div className="flex justify-between items-center">
                    <Typography variant="h5">Properties</Typography>
                    <Link href={route("properties.create")}>
                        <Button
                            variant="contained"
                            size="small"
                            color="primary"
                        >
                            Add
                        </Button>
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />
            <div className="container flex flex-col py-12">
                <div className="grow">
                    <DataGrid
                        rows={properties}
                        columns={columns}
                        pageSize={10}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
