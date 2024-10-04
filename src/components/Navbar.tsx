import { useParams } from "react-router-dom";

export default function Navbar() {
  const { id } = useParams<{ id: string }>();

  const navbarItems = [
    {
      id: 1,
      title: "Materiales didacticos",
    },
    {
      id: 2,
      title: "Ferreteria",
    },
    {
      id: 3,
      title: "Tecnología",
    },
  ];

  return (
    <nav className="w-full flex bg-gray-200 items-center justify-between md:justify-center md:gap-16">
      {navbarItems.map((item) => (
        <a
          href={`/${item.id}`}
          key={item.id}
          className={`hover:bg-gray-500 hover:text-white p-3 px-4 cursor-pointer font-semibold text-sm md:text-md text-center ${item.id.toString() == id && "bg-gray-500 text-white"}`}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}
