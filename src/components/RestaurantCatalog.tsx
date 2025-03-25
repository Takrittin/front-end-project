import Link from "next/link";
import Card from "./Card";

export default async function RestaurantCatalog({ restaurantJson }: { restaurantJson: Object }) {
    const restaurantJsonReady = await restaurantJson;

    return (
        <>
            <div className="text-black text-2xl font-semibold mb-6 mt-5">
                Explore {restaurantJson.count} restaurants in our catalog
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
                {
                    restaurantJsonReady.data.map((restaurantItem: any) => (
                        <Link key={restaurantItem.id} href={`/restaurant/${restaurantItem.id}`} className="flex justify-center">
                            <Card 
                                restaurantName={restaurantItem.name} 
                                imgSrc={restaurantItem.picture} 
                            />
                        </Link>
                    ))
                }
            </div>
        </>
    );
}