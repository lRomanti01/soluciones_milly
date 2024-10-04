import { useState } from "react";
import Card from "../components/Card";

function Home() {
const [menu] = useState([
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
    id: "6",
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
    id: "7",
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
    id: "8",
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
  {
    id: "9",
    name: "Papel Construcción",
    description: "Papel de construcción resistente para proyectos artísticos.",
    imgs: [
      "https://m.media-amazon.com/images/I/71iXtRd9wfL._AC_UF894,1000_QL80_.jpg",
    ],
    price: 2.49,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Papel de construcción resistente para proyectos artísticos.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Paquete de 10 hojas, colores surtidos.",
      },
    ],
  },
  {
    id: "10",
    name: "Foami",
    description: "Foami en varios colores para uso escolar y manualidades.",
    imgs: [
      "https://almacen.do/wp-content/uploads/2021/06/Foami-Bambary-Front-1.jpg",
    ],
    price: 0.99,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Foami en varios colores para uso escolar y manualidades.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Tamaño carta, colores surtidos.",
      },
    ],
  },
  {
    id: "11",
    name: "Cartulina",
    description:
      "Cartulina resistente en varios colores para proyectos escolares.",
    imgs: [
      "https://i0.wp.com/metropolis.com.do/wp-content/uploads/2019/06/cartulina-vivaldi-colores-papeleria-metropolis.jpg",
    ],
    price: 1.49,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Cartulina resistente en varios colores para proyectos escolares.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Tamaño estándar, colores surtidos.",
      },
    ],
  },
  {
    id: "12",
    name: "Crayones",
    description: "Set de crayones en colores vibrantes para colorear.",
    imgs: [
      "https://d2j6dbq0eux0bg.cloudfront.net/images/15233581/2367251958.jpg",
    ],
    price: 2.99,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Set de crayones en colores vibrantes para colorear.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Paquete de 12 crayones, colores surtidos.",
      },
    ],
  },
  {
    id: "13",
    name: "Pizarras",
    description: "Pizarra blanca ideal para enseñanza escolar.",
    imgs: [
      "https://lamirotil.com/1323-large_default/pizarra-blanca-con-marco-y-repisa-de-madera-serie-basic-board-infantil.jpg",
    ],
    price: 10.99,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Pizarra blanca ideal para enseñanza escolar.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Incluye marcador y borrador.",
      },
    ],
  },
  {
    id: "14",
    name: "Hoja Maquinilla",
    description: "Paquete de hojas maquinilla para impresión.",
    imgs: ["https://cdn.asi.do/z6nc76vgocoj5ao0ud9ca5hd4xao"],
    price: 4.99,
    category_id: 1,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Paquete de hojas maquinilla para impresión.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Paquete de 100 hojas, tamaño A4.",
      },
    ],
  },

  // Ferretería - Category ID: 2
  {
    id: "15",
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
    id: "16",
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
    id: "17",
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
    id: "18",
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
    id: "19",
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
  {
    id: "20",
    name: "Materiales de Plomería",
    description: "Varios materiales esenciales para trabajos de plomería.",
    imgs: [
      "https://ferreteriascasper.com/images/thumbs/0000014_tuberia-y-conexiones_450.png",
    ],
    price: 45.0,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Materiales esenciales para trabajos de plomería, incluyendo tubos, accesorios y más.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Incluye PVC, cobre y accesorios para instalación.",
      },
    ],
  },
  {
    id: "21",
    name: "Cables Eléctricos",
    description:
      "Cables eléctricos de alta calidad, ideales para instalaciones seguras.",
    imgs: [
      "https://cablesfb.com/wp-content/uploads/elementor/thumbs/NOTA2-q34qcwhzbb3zmpaelqxm0ql7g510mv0d92vql0y3rc.jpeg",
    ],
    price: 30.5,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Cables eléctricos de diferentes calibres para instalaciones eléctricas.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Calibres disponibles: 14, 12, 10. Longitudes de 50m y 100m.",
      },
    ],
  },
  {
    id: "22",
    name: "Escaleras",
    description:
      "Escalera de aluminio ligera y resistente, ideal para trabajos en altura.",
    imgs: ["https://ochoa.com.do/media/product/04-63-33581.jpg"],
    price: 80.0,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Escalera de aluminio, fácil de transportar y almacenar.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Altura: 2.5 m, capacidad: 150 kg, peso: 5 kg.",
      },
    ],
  },
  {
    id: "23",
    name: "Picos",
    description:
      "Pico de acero forjado, perfecto para cavar y realizar trabajos de jardinería.",
    imgs: ["https://chayto.com.ar/fotos/pico-punta-y-pala.jpg"],
    price: 15.99,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Pico de acero forjado, ideal para cavar en terrenos duros.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Longitud: 1.2 m, peso: 2 kg.",
      },
    ],
  },
  {
    id: "24",
    name: "Cascos de Seguridad",
    description:
      "Casco de seguridad, ideal para proteger la cabeza durante trabajos de construcción.",
    imgs: [
      "https://proinvalsafety.com/wp-content/uploads/2022/06/cascos-de-colores.jpg",
    ],
    price: 25.0,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Casco de seguridad ligero y resistente, cumple con normas de seguridad.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Material: polietileno, ajuste: tamaño ajustable.",
      },
    ],
  },
  {
    id: "25",
    name: "Cemento",
    description:
      "Cemento Portland de alta resistencia, ideal para construcción y reparaciones.",
    imgs: [
      "https://http2.mlstatic.com/D_NQ_NP_924741-MEC72385247057_102023-O.webp",
    ],
    price: 10.5,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Cemento Portland, utilizado para construcción general.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Presentación: bolsa de 50 kg.",
      },
    ],
  },
  {
    id: "26",
    name: "Pegatod",
    description:
      "Pegamento fuerte y duradero, adecuado para diversos materiales.",
    imgs: [
      "https://assets.gomarket.com.do/rails/active_storage/representations/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBd2hrR2c9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--58f15e53c4e20887a0aba8be470e5e7e3e8562e4/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaDdDam9MWm05eWJXRjBTU0lJY0c1bkJqb0dSVlE2QzNKbGMybDZaVWtpRGpFd01EQjRNVEF3TUFZN0JsUTZDMlY0ZEdWdWRFQUhPZ3huY21GMmFYUjVTU0lMUTJWdWRHVnlCanNHVkRvSlkzSnZjRWtpRWpFd01EQjRNVEF3TUNzd0t6QUdPd1pVIiwiZXhwIjpudWxsLCJwdXIiOiJ2YXJpYXRpb24ifX0=--a9b079b0a724a66cf318e59ad9752536efd1d6e4/PEGATOD.png",
    ],
    price: 5.75,
    category_id: 2,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Pegamento multipropósito ideal para manualidades y reparaciones.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Contenido: 100 ml.",
      },
    ],
  },

  // Electrónica - Category ID: 3
  {
    id: "27",
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
    id: "28",
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
    id: "29",
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
    id: "30",
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
    id: "31",
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
  {
    id: "32",
    name: "Laptop OMEN",
    description:
      "Laptops de alto rendimiento, ideales para trabajo y entretenimiento.",
    imgs: [
      "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08523987.png",
    ],
    price: 599.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Laptops potentes con procesadores de última generación.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: 'Pantalla: 15.6", RAM: 16GB, Almacenamiento: 512GB SSD.',
      },
    ],
  },
  {
    id: "33",
    name: "Teclados gaming",
    description:
      "Teclados mecánicos y de membrana, perfectos para todo tipo de usuarios.",
    imgs: [
      "https://deepgaming.es/wp-content/uploads/2022/11/DG-TEC65-RGB-deepgaming-teclados-ratones-teclado-mini-tm065-01.jpg",
    ],
    price: 49.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Teclados ergonómicos y resistentes, ideales para uso prolongado.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Tipo: mecánico, retroiluminación: RGB.",
      },
    ],
  },
  {
    id: "34",
    name: "CPU",
    description:
      "Unidades centrales de procesamiento, esenciales para cualquier configuración de PC.",
    imgs: ["https://m.media-amazon.com/images/I/51saxT83YWL.jpg"],
    price: 199.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "CPUs de alto rendimiento para gaming y productividad.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Núcleos: 6, Hilos: 12, Velocidad: 3.6 GHz.",
      },
    ],
  },
  {
    id: "35",
    name: "Monitores",
    description:
      "Monitores de alta definición para una experiencia visual superior.",
    imgs: [
      "https://image.benq.com/is/image/benqco/home-herobanner-m-1?$ResponsivePreset$&fmt=png-alpha",
    ],
    price: 249.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Monitores con calidad de imagen nítida y colores vibrantes.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: 'Tamaño: 24", Resolución: 1920x1080.',
      },
    ],
  },
  {
    id: "36",
    name: "UPS",
    description:
      "Fuentes de alimentación ininterrumpida para proteger tus dispositivos electrónicos.",
    imgs: ["https://valdes.com.sv/wp-content/uploads/2022/11/BVX900L-LM-2.jpg"],
    price: 89.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "UPS confiables para mantener tu equipo funcionando durante cortes de energía.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Capacidad: 600 VA, tiempo de respaldo: 30 minutos.",
      },
    ],
  },
  {
    id: "37",
    name: "Mouse gaming",
    description:
      "Mouse gaming, ergonómicos y precisos, ideales para gaming y uso diario.",
    imgs: [
      "https://m.media-amazon.com/images/I/51+E-eoAKBL._AC_UF894,1000_QL80_.jpg",
    ],
    price: 29.99,
    category_id: 3,
    data: [
      {
        label: "Descripción",
        value: "desc",
        desc: "Mouse con diseño gaming y botones programables.",
      },
      {
        label: "Especificaciones",
        value: "specs",
        desc: "Conexión: inalámbrica, DPI: ajustable hasta 3200.",
      },
    ],
  },
]);

  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full justify-center flex gap-5 flex-wrap mt-5">
        <span className="w-full text-white text-2xl md:text-4xl text-center font-bold">
          Soluciones Milly
        </span>

        <span className="w-full text-white text-xl md:text-2xl font-bold ml-16">
          Productos
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

export default Home;
