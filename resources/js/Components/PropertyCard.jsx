import { Icon } from "./Icon";

const PropertyCard = ({ number }) => {
    return (
        <div className="bg-white shadow-card">
            <div className="overlay relative">
                <img
                    src={`https://picsum.photos/500?random=${number}`}
                    alt="img1"
                    className="w-full h-56 object-cover rounded-t"
                />
                <div className="absolute top-0 left-0 w-full h-full p-4 flex flex-col justify-end bg-gradient-to-t from-black/50 to-transparent text-white">
                    <p className="font-bold">৳ 25,000</p>
                    <h4 className="text-xl font-bold">
                        Villa with Amazing View
                    </h4>
                    {/* <p>Banaroshi Polli, Mirpur-10</p> */}
                </div>
            </div>
            <div className="p-4">
                <div className="grid grid-cols-3">
                    <div className="flex flex-col items-center">
                        <Icon name="bed" className="text-3xl" />
                        <p>3 Beds</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Icon name="bath" className="text-3xl" />
                        <p>4 Baths</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Icon name="area" className="text-3xl" />
                        <p>
                            198 m<sup>2</sup>
                        </p>
                    </div>
                </div>
                <div className="p-4">
                    <div className="flex">
                        <div className="info grow mb-1">
                            <h4 className="text-xl font-bold">
                                Villa with Amazing View
                            </h4>
                        </div>
                        <p className="text-theme font-bold">৳ 25,000</p>
                    </div>
                    <p className="mb-2">Banaroshi Polli, Mirpur-10</p>

                    <p className="text-justify h-12 overflow-hidden text-ellipsis">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Ex, voluptatibus temporibus sapiente repudiandae
                        dicta sunt quaerat voluptates molestiae fugiat molestias
                        nesciunt ipsam laboriosam minima in odio voluptatum!
                        Hic, magni ducimus.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default PropertyCard;
