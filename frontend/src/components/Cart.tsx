import React from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { Link } from "react-router-dom";

// If you are expecting any props, you can define the type here. 
// Currently, this is an empty props type.
interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  return (
    <div className="flex items-center justify-between bg-black border-black p-4 shadow-md text-white uppercase">
      <div className="flex flex-row">
        <Link
          to="/"
          className="text-white py-2 px-6 rounded-md mr-4 transition ease-in-out hover:-translate-y-1 hover:scale-110  duration-300"
        >
          <RiArrowGoBackFill size={24} />
        </Link>

        <p className="mt-2"> Please Log in to Proceed</p>
      </div>
    </div>
  );
};

export default Cart;
