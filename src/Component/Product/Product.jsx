/* eslint-disable react/prop-types */

const Product = ({product}) => {
    // eslint-disable-next-line no-unused-vars
    const {title, description,brand,category,images} =product
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img src={images} alt="" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 text-center">
          <button className="bg-lime-600 px-3 py-2 rounded-lg">Add me</button>
        </div>
      </div>
 
    );
};

export default Product;