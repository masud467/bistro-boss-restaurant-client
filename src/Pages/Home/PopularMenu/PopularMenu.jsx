
import SectionTitle from "../../../Components/SectionTitle";
import MenuItemsCard from "../../../Shared/MenuItems/MenuItemsCard";
import useMenu from "../../../Hooks/useMenu/useMenu";


const PopularMenu = ({heading,subHeading}) => {
    const [menu] = useMenu()
    const popular = menu.filter(item=>item.category==="popular")
    // const [menu,setMenu] = useState([])
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems = data.filter(item=>item.category==="popular")
    //         setMenu(popularItems)
    //     })
    // },[])
    return (
        <div className="mb-12">
            <SectionTitle
            subHeading= {'Check it out'}
            heading={'From Our Menu'}
            >

            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">  
                {
                    popular.map(item=> <MenuItemsCard 
                    key={item._id}
                    item={item}
                    ></MenuItemsCard>)
                }
            </div>
        </div>
    );
};

export default PopularMenu;