/* eslint-disable react/prop-types */

const Product = ({product}) => {
    const {title, description,brand,category,images} =product
    return (
        <div className="border p-6 ">
                <img src={images} alt="" />
                <h1>title:{title}</h1>
                <h1>brand:{brand}</h1>
                <h2>Category:{category}</h2>
                <p>description:{description}</p>
                <div className="text-center my-5">
                <button className=" bg-lime-500 px-5 py-3" >Add</button>
                </div>
            </div>
 
    );
};

export default Product;