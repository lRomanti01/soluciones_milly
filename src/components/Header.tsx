import { useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Logo from "/src/assets/soluciones.jpeg";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full flex bg-white items-center p-2 justify-between">
      <img
        onClick={() => navigate("/")}
        src={Logo}
        className="w-[70px] cursor-pointer"
      />

      <div className="flex gap-5">
        <div className="flex items-center font-semibold gap-2 cursor-pointer">
          <FaShoppingCart className="w-7 h-7" />
          <span className="text-sm">Mi carrito</span>
        </div>
        <div className="flex items-center font-semibold gap-2 cursor-pointer">
          <span className="text-sm">Mi cuenta</span>
          <FaUser className="w-7 h-7" />
        </div>
      </div>
    </header>
  );
}
