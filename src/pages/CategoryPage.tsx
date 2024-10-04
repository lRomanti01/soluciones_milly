import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";

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

  const items = [
    // Materiales Didacticos - Category ID: 1
    {
      id: "1",
      name: "Juego de Letras Magnéticas",
      description:
        "Set de letras magnéticas ideal para enseñar a los niños el alfabeto de manera divertida.",
      imgs: ["https://dojiw2m9tvv09.cloudfront.net/17766/product/240084.jpg"],
      price: 9.99,
      category_id: 1,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Set de letras magnéticas ideal para enseñar a los niños el alfabeto de manera divertida.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Incluye letras en mayúsculas y minúsculas, imanes fuertes y colores vibrantes.",
        },
      ],
    },
    {
      id: "2",
      name: "Tablero de Escritura para Niños",
      description:
        "Tablero de escritura reutilizable para que los niños puedan practicar sus habilidades.",
      imgs: [
        "https://usercontent.one/wp/www.asistronic.com/wp-content/uploads/2021/11/Tablero-guia-para-escribir-las-letras-herramienta-de-trazado-del-alfabeto-de-doble-cara-para-aprender-a-escribir-el-abecedario.jpg",
      ],
      price: 15.99,
      category_id: 1,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Tablero de escritura reutilizable para que los niños puedan practicar sus habilidades.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Superficie blanca, incluye marcadores y borrador, fácil de limpiar.",
        },
      ],
    },
    {
      id: "3",
      name: "Puzzle de Madera 3D",
      description:
        "Puzzle de madera en 3D que estimula el desarrollo cognitivo y la creatividad de los niños.",
      imgs: ["https://w4.giffitsstatic.com/pics/c504/465797_2.jpg"],
      price: 12.99,
      category_id: 1,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Puzzle de madera en 3D que estimula el desarrollo cognitivo y la creatividad de los niños.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Incluye 20 piezas, fabricado en madera de alta calidad, pintado a mano.",
        },
      ],
    },
    {
      id: "4",
      name: "Libro Interactivo para Colorear",
      description:
        "Libro para colorear con páginas interactivas y actividades que ayudan al desarrollo motor.",
      imgs: [
        "https://m.media-amazon.com/images/I/61saRVWoKfL._AC_UF350,350_QL80_.jpg",
      ],
      price: 6.99,
      category_id: 1,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Libro para colorear con páginas interactivas y actividades que ayudan al desarrollo motor.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "48 páginas, incluye stickers y actividades adicionales.",
        },
      ],
    },
    {
      id: "5",
      name: "Ábaco de Colores",
      description:
        "Clásico ábaco de madera para enseñar a los niños matemáticas de forma visual y divertida.",
      imgs: ["https://jugandoaprendemos.co/wp-content/uploads/2022/03/53.jpg"],
      price: 8.99,
      category_id: 1,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Clásico ábaco de madera para enseñar a los niños matemáticas de forma visual y divertida.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Material: Madera, dimensiones: 30 x 20 cm, incluye 10 filas de cuentas de colores.",
        },
      ],
    },
    {
      id: "16",
      name: "Lápiz",
      description:
        "Lápiz de grafito de alta calidad, ideal para escribir y dibujar.",
      imgs: [
        "https://i0.wp.com/metropolis.com.do/wp-content/uploads/2020/04/detalle-lapices-dibujo-staedtler-tradition-varios-grados-papeleria-metropolis.jpg",
      ],
      price: 0.99,
      category_id: 1,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Lápiz de grafito de alta calidad, ideal para escribir y dibujar.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Grado: HB, longitud: 17.5 cm, material: madera.",
        },
      ],
    },
    {
      id: "17",
      name: "Cuaderno",
      description:
        "Cuaderno de 100 hojas rayado, perfecto para tomar notas y hacer tareas.",
      imgs: ["https://cdn.asi.do/lkenmo0k82icyg1gr89x4z4hxs1q"],
      price: 3.49,
      category_id: 1,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Cuaderno de 100 hojas rayado, perfecto para tomar notas y hacer tareas.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Tamaño: A4, papel de 80g, encuadernación en espiral.",
        },
      ],
    },
    {
      id: "18",
      name: "Sacapuntas",
      description:
        "Sacapuntas de plástico con depósito para recolectar virutas.",
      imgs: [
        "https://www.gotticlub.ec/wp-content/uploads/gotticlub-Escolar-sacapuntas-2-servicio.jpg",
      ],
      price: 1.49,
      category_id: 1,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Sacapuntas de plástico con depósito para recolectar virutas.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Material: Plástico, incluye depósito, diseño compacto.",
        },
      ],
    },

    // Ferretería - Category ID: 2
    {
      id: "6",
      name: "Taladro Inalámbrico",
      description:
        "Potente taladro inalámbrico de 20V para trabajos de bricolaje y construcción.",
      imgs: [
        "https://www.milwaukeetool.com/es/-/media/Products/Power-Tools/Cordless/Drills/37512_2602-20-lg.jpg",
      ],
      price: 45.99,
      category_id: 2,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Potente taladro inalámbrico de 20V para trabajos de bricolaje y construcción.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Batería: 20V, torque: 450 in-lbs, incluye cargador.",
        },
      ],
    },
    {
      id: "7",
      name: "Sierra Circular",
      description:
        "Sierra circular de alta precisión para cortes en madera y otros materiales.",
      imgs: [
        "https://totaltools.com.do/cdn/shop/products/114_UTS1141856_1024x_a8116d50-bab3-47ae-aaf0-2a20025f148f.webp",
      ],
      price: 85.99,
      category_id: 2,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Sierra circular de alta precisión para cortes en madera y otros materiales.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: 'Diámetro de hoja: 7.25", velocidad: 5000 RPM, incluye guía de corte.',
        },
      ],
    },
    {
      id: "8",
      name: "Caja de Herramientas 150 Piezas",
      description:
        "Completo set de herramientas de 150 piezas, ideal para trabajos de reparación en el hogar.",
      imgs: ["https://www.ochoa.com.do/media/product/R99-150LA_7.jpg"],
      price: 99.99,
      category_id: 2,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Completo set de herramientas de 150 piezas, ideal para trabajos de reparación en el hogar.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Incluye destornilladores, llaves, alicates y más.",
        },
      ],
    },
    {
      id: "9",
      name: "Pistola de Calor",
      description:
        "Pistola de calor versátil para secar pinturas, soldar plásticos y más.",
      imgs: [
        "https://jumbo.com.do/pub/media/catalog/product/cache/5d91a1aa0232de6a069aae492eab5701/3/5/3594628-a.jpg",
      ],
      price: 34.99,
      category_id: 2,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Pistola de calor versátil para secar pinturas, soldar plásticos y más.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Temperaturas: 50-650 °C, incluye boquillas intercambiables.",
        },
      ],
    },
    {
      id: "10",
      name: "Lijadora Orbital",
      description:
        "Lijadora orbital eléctrica para acabados suaves y precisos en madera y metal.",
      imgs: ["https://www.ochoa.com.do/media/product/SS24-B3_2_(1).jpg"],
      price: 59.99,
      category_id: 2,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Lijadora orbital eléctrica para acabados suaves y precisos en madera y metal.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Potencia: 240W, diámetro de disco: 125 mm, incluye papel de lija.",
        },
      ],
    },

    // Electrónica - Category ID: 3
    {
      id: "11",
      name: "Auriculares Inalámbricos",
      description:
        "Auriculares inalámbricos con cancelación de ruido y hasta 20 horas de batería.",
      imgs: [
        "https://www.shopper.com.gt/wp-content/uploads/2022/09/i12-TWS-1000X1000-1-1.jpg",
      ],
      price: 49.99,
      category_id: 3,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Auriculares inalámbricos con cancelación de ruido y hasta 20 horas de batería.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Conectividad: Bluetooth 5.0, rango de 10 metros.",
        },
      ],
    },
    {
      id: "12",
      name: "Cámara de Seguridad",
      description:
        "Cámara de seguridad WiFi con visión nocturna y detección de movimiento.",
      imgs: [
        "https://www.sistrond.com/wp-content/uploads/2019/03/productos-camaras-de-seguridad-02.jpg",
      ],
      price: 99.99,
      category_id: 3,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Cámara de seguridad WiFi con visión nocturna y detección de movimiento.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Resolución: 1080p, ángulo de visión: 120°, almacenamiento en la nube.",
        },
      ],
    },
    {
      id: "13",
      name: "Smartwatch",
      description:
        "Smartwatch con monitoreo de frecuencia cardíaca y notificaciones inteligentes.",
      imgs: ["https://shopmundo.com.do/images/detailed/156/WEC388CUA.jpg"],
      price: 69.99,
      category_id: 3,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Smartwatch con monitoreo de frecuencia cardíaca y notificaciones inteligentes.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Conectividad: Bluetooth, batería de hasta 7 días.",
        },
      ],
    },
    {
      id: "14",
      name: "Proyector Mini",
      description:
        "Proyector mini portátil con resolución HD y conectividad WiFi.",
      imgs: [
        "https://i0.wp.com/portatilshoprd.com/wp-content/uploads/2022/09/83003ee0d25f791a446c74dee101b95c.jpg",
      ],
      price: 129.99,
      category_id: 3,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Proyector mini portátil con resolución HD y conectividad WiFi.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Resolución: 1280 x 720, brillo: 3000 lumens.",
        },
      ],
    },
    {
      id: "15",
      name: "Power Bank",
      description:
        "Power bank de 10000mAh con carga rápida para dispositivos móviles.",
      imgs: [
        "https://ventiontech.com/cdn/shop/files/b8421501ceee8ed8defa49d79fc692df_ddd4c553-4ab3-4d68-9b04-058fa7b894f9.jpg?v=1706582155",
      ],
      price: 24.99,
      category_id: 3,
      data: [
        {
          label: "Descripción",
          value: "desc",
          desc: "Power bank de 10000mAh con carga rápida para dispositivos móviles.",
        },
        {
          label: "Especificaciones",
          value: "specs",
          desc: "Salidas: 2 USB, compatible con carga rápida QC 3.0.",
        },
      ],
    },
  ];

function CategoryPage() {
    const { id } = useParams<{ id: string }>();
  const [category, setCategory]: any = useState({})
const [menu, setMenu] = useState([
  // Materiales Didacticos - Category ID: 1
  {
    id: "1",
    name: "Juego de Letras Magnéticas",
    description:
      "Set de letras magnéticas ideal para enseñar a los niños el alfabeto de manera divertida.",
    imgs: ["https://dojiw2m9tvv09.cloudfront.net/17766/product/240084.jpg"],
    price: 9.99,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Set de letras magnéticas ideal para enseñar a los niños el alfabeto de manera divertida.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Incluye letras en mayúsculas y minúsculas, imanes fuertes y colores vibrantes.",
      },
    ],
  },
  {
    id: "2",
    name: "Tablero de Escritura para Niños",
    description:
      "Tablero de escritura reutilizable para que los niños puedan practicar sus habilidades.",
    imgs: [
      "https://usercontent.one/wp/www.asistronic.com/wp-content/uploads/2021/11/Tablero-guia-para-escribir-las-letras-herramienta-de-trazado-del-alfabeto-de-doble-cara-para-aprender-a-escribir-el-abecedario.jpg",
    ],
    price: 15.99,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Tablero de escritura reutilizable para que los niños puedan practicar sus habilidades.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Superficie blanca, incluye marcadores y borrador, fácil de limpiar.",
      },
    ],
  },
  {
    id: "3",
    name: "Puzzle de Madera 3D",
    description:
      "Puzzle de madera en 3D que estimula el desarrollo cognitivo y la creatividad de los niños.",
    imgs: ["https://w4.giffitsstatic.com/pics/c504/465797_2.jpg"],
    price: 12.99,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Puzzle de madera en 3D que estimula el desarrollo cognitivo y la creatividad de los niños.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Incluye 20 piezas, fabricado en madera de alta calidad, pintado a mano.",
      },
    ],
  },
  {
    id: "4",
    name: "Libro Interactivo para Colorear",
    description:
      "Libro para colorear con páginas interactivas y actividades que ayudan al desarrollo motor.",
    imgs: [
      "https://m.media-amazon.com/images/I/61saRVWoKfL._AC_UF350,350_QL80_.jpg",
    ],
    price: 6.99,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Libro para colorear con páginas interactivas y actividades que ayudan al desarrollo motor.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "48 páginas, incluye stickers y actividades adicionales.",
      },
    ],
  },
  {
    id: "5",
    name: "Ábaco de Colores",
    description:
      "Clásico ábaco de madera para enseñar a los niños matemáticas de forma visual y divertida.",
    imgs: ["https://jugandoaprendemos.co/wp-content/uploads/2022/03/53.jpg"],
    price: 8.99,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Clásico ábaco de madera para enseñar a los niños matemáticas de forma visual y divertida.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Material: Madera, dimensiones: 30 x 20 cm, incluye 10 filas de cuentas de colores.",
      },
    ],
  },
  {
    id: "16",
    name: "Lápiz",
    description:
      "Lápiz de grafito de alta calidad, ideal para escribir y dibujar.",
    imgs: [
      "https://i0.wp.com/metropolis.com.do/wp-content/uploads/2020/04/detalle-lapices-dibujo-staedtler-tradition-varios-grados-papeleria-metropolis.jpg",
    ],
    price: 0.99,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Lápiz de grafito de alta calidad, ideal para escribir y dibujar.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Grado: HB, longitud: 17.5 cm, material: madera.",
      },
    ],
  },
  {
    id: "17",
    name: "Cuaderno",
    description:
      "Cuaderno de 100 hojas rayado, perfecto para tomar notas y hacer tareas.",
    imgs: ["https://cdn.asi.do/lkenmo0k82icyg1gr89x4z4hxs1q"],
    price: 3.49,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Cuaderno de 100 hojas rayado, perfecto para tomar notas y hacer tareas.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Tamaño: A4, papel de 80g, encuadernación en espiral.",
      },
    ],
  },
  {
    id: "18",
    name: "Sacapuntas",
    description: "Sacapuntas de plástico con depósito para recolectar virutas.",
    imgs: [
      "https://www.gotticlub.ec/wp-content/uploads/gotticlub-Escolar-sacapuntas-2-servicio.jpg",
    ],
    price: 1.49,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Sacapuntas de plástico con depósito para recolectar virutas.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Material: Plástico, incluye depósito, diseño compacto.",
      },
    ],
  },

  // Ferretería - Category ID: 2
  {
    id: "6",
    name: "Taladro Inalámbrico",
    description:
      "Potente taladro inalámbrico de 20V para trabajos de bricolaje y construcción.",
    imgs: [
      "https://www.milwaukeetool.com/es/-/media/Products/Power-Tools/Cordless/Drills/37512_2602-20-lg.jpg",
    ],
    price: 45.99,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Potente taladro inalámbrico de 20V para trabajos de bricolaje y construcción.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Batería: 20V, torque: 450 in-lbs, incluye cargador.",
      },
    ],
  },
  {
    id: "7",
    name: "Sierra Circular",
    description:
      "Sierra circular de alta precisión para cortes en madera y otros materiales.",
    imgs: [
      "https://totaltools.com.do/cdn/shop/products/114_UTS1141856_1024x_a8116d50-bab3-47ae-aaf0-2a20025f148f.webp",
    ],
    price: 85.99,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Sierra circular de alta precisión para cortes en madera y otros materiales.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: 'Diámetro de hoja: 7.25", velocidad: 5000 RPM, incluye guía de corte.',
      },
    ],
  },
  {
    id: "8",
    name: "Caja de Herramientas 150 Piezas",
    description:
      "Completo set de herramientas de 150 piezas, ideal para trabajos de reparación en el hogar.",
    imgs: ["https://www.ochoa.com.do/media/product/R99-150LA_7.jpg"],
    price: 99.99,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Completo set de herramientas de 150 piezas, ideal para trabajos de reparación en el hogar.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Incluye destornilladores, llaves, alicates y más.",
      },
    ],
  },
  {
    id: "9",
    name: "Pistola de Calor",
    description:
      "Pistola de calor versátil para secar pinturas, soldar plásticos y más.",
    imgs: [
      "https://jumbo.com.do/pub/media/catalog/product/cache/5d91a1aa0232de6a069aae492eab5701/3/5/3594628-a.jpg",
    ],
    price: 34.99,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Pistola de calor versátil para secar pinturas, soldar plásticos y más.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Temperaturas: 50-650 °C, incluye boquillas intercambiables.",
      },
    ],
  },
  {
    id: "10",
    name: "Lijadora Orbital",
    description:
      "Lijadora orbital eléctrica para acabados suaves y precisos en madera y metal.",
    imgs: ["https://www.ochoa.com.do/media/product/SS24-B3_2_(1).jpg"],
    price: 59.99,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Lijadora orbital eléctrica para acabados suaves y precisos en madera y metal.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Potencia: 240W, diámetro de disco: 125 mm, incluye papel de lija.",
      },
    ],
  },

  // Electrónica - Category ID: 3
  {
    id: "11",
    name: "Auriculares Inalámbricos",
    description:
      "Auriculares inalámbricos con cancelación de ruido y hasta 20 horas de batería.",
    imgs: [
      "https://www.shopper.com.gt/wp-content/uploads/2022/09/i12-TWS-1000X1000-1-1.jpg",
    ],
    price: 49.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Auriculares inalámbricos con cancelación de ruido y hasta 20 horas de batería.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Conectividad: Bluetooth 5.0, rango de 10 metros.",
      },
    ],
  },
  {
    id: "12",
    name: "Cámara de Seguridad",
    description:
      "Cámara de seguridad WiFi con visión nocturna y detección de movimiento.",
    imgs: [
      "https://www.sistrond.com/wp-content/uploads/2019/03/productos-camaras-de-seguridad-02.jpg",
    ],
    price: 99.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Cámara de seguridad WiFi con visión nocturna y detección de movimiento.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Resolución: 1080p, ángulo de visión: 120°, almacenamiento en la nube.",
      },
    ],
  },
  {
    id: "13",
    name: "Smartwatch",
    description:
      "Smartwatch con monitoreo de frecuencia cardíaca y notificaciones inteligentes.",
    imgs: ["https://shopmundo.com.do/images/detailed/156/WEC388CUA.jpg"],
    price: 69.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Smartwatch con monitoreo de frecuencia cardíaca y notificaciones inteligentes.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Conectividad: Bluetooth, batería de hasta 7 días.",
      },
    ],
  },
  {
    id: "14",
    name: "Proyector Mini",
    description:
      "Proyector mini portátil con resolución HD y conectividad WiFi.",
    imgs: [
      "https://i0.wp.com/portatilshoprd.com/wp-content/uploads/2022/09/83003ee0d25f791a446c74dee101b95c.jpg",
    ],
    price: 129.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Proyector mini portátil con resolución HD y conectividad WiFi.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Resolución: 1280 x 720, brillo: 3000 lumens.",
      },
    ],
  },
  {
    id: "15",
    name: "Power Bank",
    description:
      "Power bank de 10000mAh con carga rápida para dispositivos móviles.",
    imgs: [
      "https://ventiontech.com/cdn/shop/files/b8421501ceee8ed8defa49d79fc692df_ddd4c553-4ab3-4d68-9b04-058fa7b894f9.jpg?v=1706582155",
    ],
    price: 24.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Power bank de 10000mAh con carga rápida para dispositivos móviles.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Salidas: 2 USB, compatible con carga rápida QC 3.0.",
      },
    ],
  },
]);

  useEffect(() => {
    setCategory(navbarItems.find((item) => item.id == Number(id)));
    setMenu(items.filter((item) => item.category_id == Number(id)));
  }, [])

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full justify-center flex gap-5 flex-wrap mt-5">
        <span className="w-full text-white text-2xl md:text-4xl text-center font-bold my-5">
          {category?.title}
        </span>

        {menu.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            img={item.imgs[0]}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
