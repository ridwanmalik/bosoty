import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";

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
            <div className="container flex flex-col py-8">
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
                        <div className="mt-3 mb-5">
                            <InputLabel htmlFor="image" className="mb-2">
                                Upload Image
                            </InputLabel>
                            <input
                                id="image"
                                type="file"
                                className="block w-full"
                                name="image"
                                onChange={(e) => {
                                    console.log("===", e.target.files);
                                    setData("image", e.target.files[0]);
                                }}
                            />
                        </div>
                        <InputError message={errors.image} className="mt-2" />
                        <FormControl fullWidth className="mt-3">
                            <InputLabel id="property-type-label">
                                Property Type
                            </InputLabel>
                            <Select
                                labelId="property-type-label"
                                id="property-type"
                                value={data.type}
                                label="Property Type"
                                onChange={(e) =>
                                    setData("type", e.target.value)
                                }
                            >
                                <MenuItem value="residential">
                                    Residential
                                </MenuItem>
                                <MenuItem value="commercial">
                                    Commercial
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <div className="flex gap-3 mt-3">
                            <TextField
                                type="number"
                                id="price"
                                label="Price"
                                variant="outlined"
                                fullWidth
                                value={data.price}
                                onChange={(e) =>
                                    setData("price", e.target.value)
                                }
                                margin="dense"
                                helperText={errors.price ? errors.price : null}
                            />
                            <TextField
                                type="number"
                                id="area"
                                label="Area"
                                variant="outlined"
                                fullWidth
                                value={data.area}
                                onChange={(e) =>
                                    setData("area", e.target.value)
                                }
                                margin="dense"
                                helperText={errors.area ? errors.area : null}
                            />
                        </div>
                        <div className="flex gap-3 mt-3">
                            <TextField
                                type="number"
                                id="bedrooms"
                                label="Bedrooms"
                                variant="outlined"
                                fullWidth
                                value={data.bedrooms}
                                onChange={(e) =>
                                    setData("bedrooms", e.target.value)
                                }
                                margin="dense"
                                helperText={
                                    errors.bedrooms ? errors.bedrooms : null
                                }
                            />
                            <TextField
                                type="number"
                                id="bathrooms"
                                label="Bathrooms"
                                variant="outlined"
                                fullWidth
                                value={data.bathrooms}
                                onChange={(e) =>
                                    setData("bathrooms", e.target.value)
                                }
                                margin="dense"
                                helperText={
                                    errors.bathrooms ? errors.bathrooms : null
                                }
                            />
                        </div>
                        <div className="py-5">
                            <Button
                                variant="contained"
                                color="primary"
                                className="mt-3"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
export default Create;
