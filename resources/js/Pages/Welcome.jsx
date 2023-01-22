import { Icon } from "@/Components/Icon";
import Navbar from "@/Components/Navbar";
import PropertyCard from "@/Components/PropertyCard";
import PropertyFeatured from "@/Components/PropertyFeatured";
import { Head, Link } from "@inertiajs/inertia-react";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <header id="header" className="relative h-[90vh]">
                <Navbar />
                <div className="absolute h-full w-full flex -z-20">
                    <div className="bg-background w-7/10"></div>
                    <div className="w-3/10"></div>
                </div>
                <div className="absolute h-full w-full flex -z-10">
                    <div className="w-6/10"></div>
                    <div className="w-4/10 flex items-center">
                        <img
                            src="https://images.unsplash.com/photo-1451153378752-16ef2b36ad05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=100"
                            alt="hero"
                            className="h-7/10 w-full object-cover object-left"
                        />
                    </div>
                </div>
                <div className="container h-full flex items-center">
                    <div className="w-6/10 lg:w-1/2">
                        <h2 className="text-2xl lg:text-6xl font-bold text-heading mb-3 md:mb-5">
                            Find your next Perfect home in Dhaka
                        </h2>
                        <p className="text-text-light md:text-lg">
                            Through our proprietary platform, Bosoty is changing
                            how brokers and customers go about buying or selling
                            a home.
                        </p>
                    </div>
                </div>
            </header>
            <section id="properties" className="py-20">
                <div className="container">
                    <div className="relative">
                        <div className="absolute top-0 right-full px-8 text-sm font-medium tracking-widest">
                            <div className="flex items-center gap-3 writing-mode rotate-180">
                                <div className="hr bg-theme w-0.5 h-10"></div>
                                PROPERTIES
                            </div>
                        </div>
                        <div className="md:w-2/3 xl:w-4/10 2xl:w-1/3">
                            <h3 className="text-3xl font-semibold mb-8">
                                Discover the latest properties available today
                                in your area
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <PropertyCard number={1} />
                            <PropertyCard number={2} />
                            <PropertyCard number={3} />
                            <PropertyCard number={4} />
                            <PropertyCard number={5} />
                            <PropertyCard number={6} />
                        </div>
                        <div className="flex items-center justify-center pt-8">
                            <Link
                                href={route("home")}
                                className="inline-flex items-center gap-2 px-8 py-3 bg-theme text-white rounded-md hover:bg-theme-dark transition duration-300"
                            >
                                <Icon name="arrow-right" />
                                View All Properties
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section id="who-we-are" className="bg-background py-20">
                <div className="container">
                    <div className="relative">
                        <div className="absolute top-0 right-full px-8 text-sm font-medium tracking-widest">
                            <div className="flex items-center gap-3 writing-mode rotate-180">
                                <div className="hr bg-theme w-0.5 h-10"></div>
                                WHO WE ARE
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-8 md:gap-20">
                            <div className="">
                                <img
                                    src="https://convergementor.org/wp-content/uploads/2021/02/iStock-1218611634-768x1152.jpg"
                                    alt="hero"
                                    className="w-full object-cover rounded"
                                />
                            </div>
                            <div className="lg:col-span-2">
                                <div className="lg:w-6/10 xl:w-1/2 2xl:w-4/10 mb-3 md:mb-8">
                                    <h3 className="text-2xl md:text-4xl font-bold">
                                        We help clients buy and sell houses
                                    </h3>
                                </div>
                                <div className="text-text-light text-sm md:text-lg">
                                    <p className="text-justify mb-3">
                                        Bosoty is a small but dynamic real
                                        estate company that is dedicated to
                                        helping our clients find the perfect
                                        property for their needs. We are a team
                                        of experienced professionals who have a
                                        deep understanding of the local real
                                        estate market and are committed to
                                        providing excellent service to our
                                        clients.
                                    </p>
                                    <p className="text-justify mb-3">
                                        Our mission is to provide our clients
                                        with the best possible experience when
                                        buying, selling, or renting a property.
                                        We take pride in our ability to listen
                                        to our clients' needs and to provide
                                        them with the knowledge and resources
                                        they need to make informed decisions
                                        about their real estate transactions.
                                    </p>
                                    <p className="text-justify mb-3">
                                        We understand that buying or selling a
                                        property can be a stressful experience,
                                        and we are here to guide you every step
                                        of the way. Whether you're a first-time
                                        home buyer, an experienced investor, or
                                        a landlord looking for a new tenant, we
                                        have the expertise to help you achieve
                                        your goals.
                                    </p>
                                    <p className="text-justify mb-3">
                                        We are passionate about real estate and
                                        are always looking for new and
                                        innovative ways to help our clients. We
                                        stay up-to-date on the latest market
                                        trends and use the latest technology to
                                        make the process as easy and efficient
                                        as possible.
                                    </p>
                                    <p className="text-justify mb-3">
                                        Thank you for considering Bosoty for
                                        your real estate needs. We look forward
                                        to working with you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="featured" className="py-20">
                <div className="container">
                    <div className="relative">
                        <div className="absolute top-0 right-full px-8 text-sm font-medium tracking-widest">
                            <div className="flex items-center gap-3 writing-mode rotate-180">
                                <div className="hr bg-theme w-0.5 h-10"></div>
                                FEATURED
                            </div>
                        </div>
                        <div className="md:w-2/3 lg:w-6/10 xl:w-4/10">
                            <h3 className="text-3xl font-semibold mb-8">
                                Explore the featured properties in our list to
                                find your perfect home
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-5">
                            <PropertyFeatured number={1} />
                            <PropertyFeatured number={2} />
                            <PropertyFeatured number={3} />
                            <PropertyFeatured number={4} />
                            <PropertyFeatured number={5} />
                        </div>
                    </div>
                </div>
            </section>
            <footer id="footer" className="bg-footer">
                <div className="container py-20">
                    <div className="flex flex-col md:flex-row gap-10">
                        <div className="w-full md:w-1/3">
                            <h3 className="text-lg font-bold mb-6">Bosoty</h3>
                            <p className="text-heading text-sm text-justify mb-5">
                                Bosoty is a small but dynamic real estate
                                company that is dedicated to helping our clients
                                find the perfect property for their needs. We
                                are a team of experienced professionals who have
                                a deep understanding of the local real estate
                                market and are committed to providing excellent
                                service to our clients.
                            </p>
                            <div className="flex gap-3">
                                <Link
                                    to="/"
                                    className="bg-white shadow rounded hover:bg-theme hover:text-white transition duration-300 p-3"
                                >
                                    <Icon name="facebook" />
                                </Link>
                                <Link
                                    to="/"
                                    className="bg-white shadow rounded hover:bg-theme hover:text-white transition duration-300 p-3"
                                >
                                    <Icon name="twitter" />
                                </Link>
                                <Link
                                    to="/"
                                    className="bg-white shadow rounded hover:bg-theme hover:text-white transition duration-300 p-3"
                                >
                                    <Icon name="linkedin" />
                                </Link>
                                <Link
                                    to="/"
                                    className="bg-white shadow rounded hover:bg-theme hover:text-white transition duration-300 p-3"
                                >
                                    <Icon name="youtube" />
                                </Link>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h3 className="text-lg font-bold mb-6">
                                Contact Us
                            </h3>
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <Icon name="phone" />
                                    <p className="text-heading text-sm">
                                        01755-532407
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Icon name="mail" />
                                    <p className="text-heading text-sm">
                                        admin@bosoty.com
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Icon name="location" />
                                    <p className="text-heading text-sm">
                                        Rampura Dhaka-1219, Bangladesh
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3">
                            <h3 className="text-lg font-bold mb-6">
                                Quick Links
                            </h3>
                            <div className="flex flex-col gap-2 text-sm">
                                <Link to="/" className="text-heading">
                                    Home
                                </Link>
                                <Link to="/" className="text-heading">
                                    About Us
                                </Link>
                                <Link to="/" className="text-heading">
                                    Properties
                                </Link>
                                <Link to="/" className="text-heading">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-200 py-4">
                    <div className="container">
                        <p className="text-heading text-sm font-medium">
                            Copyright WP Estate. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
