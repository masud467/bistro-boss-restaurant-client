import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg"
import './featured.css'


const Featured = () => {
    return (
        <div className="feature-item bg-fixed text-white">
            <SectionTitle
            heading="Featured Items"
            subHeading="check it out"
            ></SectionTitle>
            <div className="md:flex justify-center items-center bg-opacity-60 bg-slate-500 pb-20 pt-12 px-32 md:gap-10">
                <div >
                    <img src={featuredImg} alt="" />
                </div>
                <div className="space-y-2">
                    <p>May 19, 2024</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis harum laudantium qui ad. Perferendis, omnis. Nam reiciendis quis ipsa consectetur maxime vel, nostrum fugit excepturi quidem exercitationem! Quaerat dolore vero ipsa tempore totam est delectus. Eligendi possimus tempore obcaecati.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;