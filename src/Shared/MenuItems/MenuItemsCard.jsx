

const MenuItemsCard = ({item}) => {
    const {name,image,recipe,price} = item
    return (
        <div className="flex space-x-4">
           <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[120px] h-[104px] " src={image} alt="" /> 
           <div>
            <p className="uppercase">{name}----------------</p>
            <p>{recipe}</p>
           </div>
           <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default MenuItemsCard;