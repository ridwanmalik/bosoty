import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/inertia-react";
import { Button, Typography } from "@mui/material";

const Create = (props) => {
    const { auth, errors: propsErrors } = props;
    const {
        data,
        setData,
        post,
        errors,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        name: "",
        address: "",
        type: "",
        price: "",
        status: "",
        area: "",
    });

    const createProperty = (e) => {
        e.preventDefault();
        post(route("properties.store"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            errors={propsErrors}
            header={
                <div className="flex justify-between items-center">
                    <Typography variant="h5">Create Property</Typography>
                    <Link href={route("dashboard")}>
                        <Button
                            variant="contained"
                            size="small"
                            color="secondary"
                        >
                            Back
                        </Button>
                    </Link>
                </div>
            }
        >
            <Head title="Create Property" />
            <div className="container flex flex-col py-12">
                <div className="grow">
                    {/* Create Property Form */}
                    <form onSubmit={createProperty}></form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
export default Create;
