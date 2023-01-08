import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { Button, TextField, Typography } from "@mui/material";

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
        city: "",
        region: "",
        zip: "",
        country: "",
        description: "",
        image: "",
        type: "",
        status: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
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
                    <form onSubmit={createProperty}>
                        <TextField
                            id="name"
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            margin="dense"
                            helperText={errors.name ? errors.name : null}
                        />
                        <TextField
                            id="address"
                            label="Address"
                            variant="outlined"
                            fullWidth
                            value={data.address}
                            onChange={(e) => setData("address", e.target.value)}
                            margin="dense"
                            helperText={errors.address ? errors.address : null}
                        />
                        <div className="flex gap-3">
                            <TextField
                                id="city"
                                label="City"
                                variant="outlined"
                                fullWidth
                                value={data.city}
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                                margin="dense"
                                helperText={errors.city ? errors.city : null}
                            />

                            <TextField
                                id="region"
                                label="Region"
                                variant="outlined"
                                fullWidth
                                value={data.region}
                                onChange={(e) =>
                                    setData("region", e.target.value)
                                }
                                margin="dense"
                                helperText={
                                    errors.region ? errors.region : null
                                }
                            />
                        </div>
                        <div className="flex gap-3">
                            <TextField
                                id="zip"
                                label="Zip"
                                variant="outlined"
                                fullWidth
                                value={data.zip}
                                onChange={(e) => setData("zip", e.target.value)}
                                margin="dense"
                                helperText={errors.zip ? errors.zip : null}
                            />

                            <TextField
                                id="country"
                                label="Country"
                                variant="outlined"
                                fullWidth
                                value={data.country}
                                onChange={(e) =>
                                    setData("country", e.target.value)
                                }
                                margin="dense"
                                helperText={
                                    errors.country ? errors.country : null
                                }
                            />
                        </div>
                        <TextField
                            id="description"
                            label="Description"
                            variant="outlined"
                            fullWidth
                            multiline
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            margin="dense"
                            helperText={
                                errors.description ? errors.description : null
                            }
                            rows={2}
                        />
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
export default Create;
