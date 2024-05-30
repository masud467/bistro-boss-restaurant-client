import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const PaymentHistory = () => {
    const {user}=useAuth()
    const axiosSecure= useAxiosSecure()

    const{data:payments=[]}=useQuery({
        queryKey:['payment',user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/payment/${user?.email}`)
            return res.data
        }
    })
    return (
        <div>
            <h1 className="text-4xl pb-8 text-center font-bold">Total Payments:{payments.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Price</th>
        <th>Transaction Id</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {payments.map((payment,index) => <tr key={payment._id}>
        <th>{index+1}</th>
        <td>${payment.price}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.status}</td>
      </tr>)}
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;