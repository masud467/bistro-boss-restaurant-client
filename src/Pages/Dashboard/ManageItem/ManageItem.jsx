import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";
import useMenu from "../../../Hooks/useMenu/useMenu";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageItem = () => {
  const [menu,loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = async(item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // loading()
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        console.log(res.data)
        if (res.data.deletedCount > 0) {
         
          refetch();
         
          Swal.fire({
            title: "Deleted!",
            text: `${item.name} has been deleted`,
            icon: "success",
          });
        }
      }
    });
  };

  // const handleUpdateItem=item=>{

  // }
  return (
    <div>
      <SectionTitle
        heading="manage all items"
        subHeading="Hurry up!"
      ></SectionTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td className="text-right">${item.price}</td>
                  <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}><button className="btn  btn-md bg-[#D1A054]">
                      <FaEdit className="text-white"></FaEdit>
                    </button></Link>
                    
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn  btn-md bg-red-600"
                    >
                      <FaTrashAlt className="text-white"></FaTrashAlt>
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItem;
