const products = [
  {
    id: 1,
    name: "ErGear Height Adjustable Electric Standing Desk",
    description:
      "48 x 24 Inches Sit Stand up Desk, Memory Computer Home Office Desk (Black)",
    price: 399.99,

    image: "product-1.jpg",
  },
  {
    id: 2,
    name: "SMUG Standing Desk",
    description:
      "Adjustable Height Electric Sit Stand Up Down Computer Table, 40x24 Inch Ergonomic Rising Desks for Work Office Home, Modern Lift Motorized Gaming Desktop Workstation, White",
    price: 349.99,
    discount: 40,
    image: "product-2.jpg",
    caption:
      "SMUG Standing Desk, Adjustable Height Electric Sit Stand Up Down Computer Table. This desk helps blood flow better by allowing you to switch from sitting to standing easily.",
  },
  {
    id: 3,
    name: "Marsail Electric Standing Desk Adjustable Height",
    description:
      "48 * 24 Inch Sit Stand up Desk for Home Office Furniture Computer Desk with 3 Memory Presets, Headphone Hook, Black",
    price: 199.99,

    image: "product-3.jpg",
  },
  {
    id: 4,
    name: "GTRACING 55 Inch Gaming Desk",
    description:
      "Computer Gamer Desk with Monitor Stand, Ergonomic Carbon Fiber Surface Gaming Table with Power Outlet and Mouse Pad for Home Office, RGB",
    price: 499.99,
    discount: 20,
    image: "product-4.jpg",
    caption:
      "GTRACING 55 Inch Gaming Desk, Computer Gamer Desk with Monitor Stand. This desk can help burn more calories which lower the risk of weight gain.",
  },
  {
    id: 5,
    name: "Whole Piece Electric Standing Desk",
    image: "product-5.jpg",
    description:
      "Height Adjustable Stand up Desk, Sit to Stand Desk with Wheels for Home Office & Computer Workstation",
    price: 149.99,
    discount: 30,
    caption:
      "63 x 24 Inches Standing Desk Adjustable Height with Splice Board- Stand Up Desk. This desk can reduce pain in joints by letting you set the height that feels best.",
  },
  {
    id: 6,
    image: "computer-desk.jpg",
    name: "Realspace® P20 Standing Desk",
    image: "product-6.jpg",
    description:
      'Realspace® P20 Standing Desk Converter With USB And Keyboard Tray, 19-3/10"H x 35-2/5"W x 23-1/5"D, Black',
    price: 429.99,
  },
  {
    id: 7,
    name: "Rocelco 32 Height Adjustable Standing Desk Converter",
    description:
      "Quick Sit Stand Up Dual Monitor Riser - Gas Spring Assist Tabletop Computer Workstation - Large Retractable Keyboard Tray - Black (R ADRB)",
    price: 459.99,
    discount: 50,
    image: "product-7.jpg",
    caption:
      "Marsail Standing Desk Adjustable Height Home Office Desk. This desk reduces muscle stiffness by allowing you to standing up without changing whole desk setup.",
  },
  {
    id: 8,
    name: "Rtisgunpro 55x24inch Adjustable Desk",
    description:
      "Stand up Desk Electric Standing Desk Adjustable Height Sit Stand Home Office Desk Including Splice Table Plate",
    price: 399.99,
    image: "product-8.jpg",
  },
  {
    id: 9,
    name: "Realspace® Electric Standing Desk",
    description:
      'Realspace® Electric 48"W Height-Adjustable Standing Desk, Black',
    price: 599.99,
    image: "product-9.jpg",
  },
  {
    id: 10,
    name: "JOY worker Mobile Standing Desk",
    description:
      "Height Adjustable Table, 60° Tiltable Rolling Laptop Desk, Portable Sit Stand Desk with Wheels Cup Holder for Bed Couch Hospital, Holds Up to 22lbs, Black",
    price: 479.99,
    image: "product-10.jpg",
    discount: 30,
    caption:
      "ErGear Height Adjustable Electric Standing Desk. This desk helps you stand straight, that can reduce back pain.",
  },
];

let baskets = getBasketsFromLocalStorage();

function getBasketsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("baskets")) || [];
}

function saveBasketsToLocalStorage() {
  localStorage.setItem("baskets", JSON.stringify(baskets));
}
