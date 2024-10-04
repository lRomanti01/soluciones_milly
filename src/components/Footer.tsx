import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className=" bg-white border-t border-gray-200 p-5 pt-7 mt-10 flex flex-col items-start justify-between gap-8 lg:flex-row">
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-center lg:text-start text-md">
          SOLUCIONES MILLY
        </span>
        <span className="text-center lg:text-start text-sm">
          Somos una empresa dedicada a ofrecer soluciones de cualquier tipo, no
          solo nos dedicamos a ventas si no que hacemos todo tipo de
          reparaciones tecnológicas, también hacemos levantamiento de escuelas y
          hogares, manejando toda área requerida solo para buscar soluciones
          cualquier tipo de problema.{" "}
        </span>
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-center lg:text-start text-md">SERVICIOS</span>
        <div className="flex flex-col gap-3 text-sm">
          <span>Venta de articulos</span>
          <span>Reparación de dispositivos</span>
          <span>Mantenimiento de plomeria electricidad</span>
          <span>Pintura en el hogar</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 h-full flex-1">
        <span className="text-center lg:text-start text-md">CONTACTOS</span>
        <div className="flex flex-col gap-3 text-sm">
          <div className="text-center flex gap-2">
            <MdEmail className="w-5 h-5" />
            <a
              href="mailto:solucionesmillybd@gmail.com"
              className="hover:underline"
            >
              solucionesmillybd@gmail.com
            </a>
          </div>
          <div className="text-center flex gap-2">
            <FaPhoneAlt className="w-5 h-5" />
            <a
              target="_blank"
              href="https://wa.me/18299773751"
              className="hover:underline"
            >
              +1 (829) 977-3751
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 text-sm flex-1">
        <span className="text-center lg:text-start text-md">UBICACIÓN</span>

        <div className="flex gap-2">
          <FaLocationDot className="w-5 h-5" />
          <span>Calle Sánchez #115, Villa Mella, Santo Domingo Norte.</span>
        </div>
      </div>
    </div>
  );
}
