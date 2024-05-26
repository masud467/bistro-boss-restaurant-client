import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";

const image_hosting_key=import.meta.env.VITE_image_hosting_key
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const UpdateItem = () => {
    const {name,category,price,recipe,_id} = useLoaderData()
    

      
  const { register, handleSubmit,reset } = useForm();
  const axiosPublic = useAxiosPublic()
  const axiosSecure= useAxiosSecure()
  const onSubmit = async(data) => {
    console.log(data);
    // image upload to imgbb and then get url
    const imageFile ={image:data.image[0]}
    const res=await axiosPublic.post(image_hosting_api,imageFile,{
        headers:{
           " content-type":"multipart/form-data"
        }
      
    })
    if(res.data.success){
      const menuItem = {
        name:data.name,
        category:data.category,
        price:parseFloat(data.price),
        recipe:data.recipe,
        image:res.data.data.display_url
      }
      const menuRes= await axiosSecure.patch(`/menu/${_id}`,menuItem)
      console.log(menuRes.data)
      if(menuRes.data.modifiedCount>0){
        // reset()
        // show success popUp
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 2000
        });
      }
    }

    // console.log(res.data)
}
    return (
        <div>
            <SectionTitle heading="update item"></SectionTitle>
            <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full py-5 ">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              type="text"
              defaultValue={name}
              placeholder="Recipe name"
              {...register("name",{required:true})}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-5">
            {/* category */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue={category}
                
                {...register("category",{required:true})}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            {/* price */}
            <div className="form-control w-full ">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                type="number"
                defaultValue={price}
                placeholder="price"
                {...register("price",{required:true})}
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <label className="form-control py-5">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
            {...register('recipe')}
            defaultValue={recipe} 
              className="textarea textarea-bordered h-24"
              placeholder="recipe details"
            ></textarea>
          </label>
          <div className="form-control w-full py-5 ">
          <input {...register('image',{required:true})} type="file" className="file-input w-full max-w-xs" />
          </div>

          <button className="btn">
            Update Menu Item 
          </button>
        </form>
      </div>
        </div>
    );
};

export default UpdateItem;