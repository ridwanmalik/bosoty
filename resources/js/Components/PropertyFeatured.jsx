const PropertyFeatured = ({ number }) => {
    return (
        <div className="h-92 flex flex-col gap-3">
            <div className="grow relative">
                <img
                    src={`https://picsum.photos/500?random=${number}`}
                    alt="featured"
                    className="w-full h-full object-cover rounded"
                />
                <div className="absolute bottom-0 left-0 rounded bg-theme text-white py-1 px-2 m-2">
                    <p className="font-bold">৳ 25,000</p>
                </div>
            </div>
            <h3 className="text-lg font-bold">3 Bedroom Apartment</h3>
        </div>
    );
};
export default PropertyFeatured;
