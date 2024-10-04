import { products } from "../types/product";
import { FaRegCreditCard } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

export default function Card({ id, name, description, img, price }: products) {
  return (
    <div className="max-w-xs bg-gray-100 border border-gray-200 rounded-lg shadow cursor-pointer">
      <a href={`/product/${id}`}>
        <img
          className="rounded-t-lg w-full min-h-60 max-h-64"
          src={img}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href={`/product/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-500">{description}</p>
        <p className="font-bold text-black">${price}</p>

        <div className="flex items-center justify-between mt-2 gap-2">
          <a
            href="https://wa.me/18099773751"
            className="w-[50%] flex justify-between items-center px-3 py-2  rounded-lg bg-black hover:bg-gray-800"
          >
            <span className="text-white text-md font-medium text-center">
              Comprar
            </span>
            <FaRegCreditCard className="w-5 h-5 fill-white" />
          </a>
          <a
            href={`/product/${id}`}
            className="w-[50%] flex justify-between items-center px-3 py-2 rounded-lg bg-white hover:bg-gray-200 border border-gray-300"
          >
            <span className="text-black text-md font-medium text-center">
              Carrito
            </span>
            <FaShoppingCart className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
