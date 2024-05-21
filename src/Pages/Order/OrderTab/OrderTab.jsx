import FoodOrderCard from "../../../Components/FoodOrderCard/FoodOrderCard";


const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                items.map(item=> <FoodOrderCard 
                    key={item._id}
                    item={item}
                    ></FoodOrderCard>)
            }
            </div>
    );
};

export default OrderTab;