import { Link } from "react-router-dom";
import Cover from "../Cover/Cover";
import MenuItemsCard from "../MenuItems/MenuItemsCard";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className="">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItemsCard key={item._id} item={item}></MenuItemsCard>
        ))}
      </div>
      <Link to={`/order/${title}`}><button className="btn btn-outline border-0 border-b-4 mb-5">Order Now</button></Link>
    </div>
  );
};

export default MenuCategory;
