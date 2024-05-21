import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import bannerImg from "../../../assets/menu/banner3.jpg"
import dessertImg from "../../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../assets/menu/pizza-bg.jpg"
import saladImg from "../../../assets/menu/salad-bg.jpg"
import soupImg from "../../../assets/menu/soup-bg.jpg"
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/useMenu/useMenu";
import MenuCategory from "../../../Shared/MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] =useMenu()
    const offered=menu.filter(item=>item.category==="offered")
    const dessert =menu.filter(item=>item.category==="dessert")
    const pizza =menu.filter(item=>item.category==="pizza")
    const salad =menu.filter(item=>item.category==="salad")
    const soup =menu.filter(item=>item.category==="soup")
  return (
    <div className="mb-10">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={bannerImg} title={"Our menu"}></Cover>
      <SectionTitle subHeading={"Don't miss"} heading={"Today's Offer"}></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>
     <MenuCategory
     items={dessert}
      title={"dessert"}
      img={dessertImg}
      ></MenuCategory>
     <MenuCategory
     items={pizza}
      title={"pizza"}
      img={pizzaImg}
      ></MenuCategory>
     <MenuCategory
     items={salad}
      title={"salad"}
      img={saladImg}
      ></MenuCategory>
      
     <MenuCategory
     items={soup}
      title={"soup"}
      img={soupImg}
      ></MenuCategory>
      
    </div>
  );
};

export default Menu;
