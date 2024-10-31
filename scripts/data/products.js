const products = [
  {
    id: 1,
    name: "Premium Adjustable Standing Desk",
    description:
      "A sleek and modern standing desk with adjustable height settings and a sturdy frame.",
    price: 399.99,
    image: "computer-desk.jpg",
    imageUrl: "https://example.com/images/premium-adjustable-standing-desk.jpg",
    features: [
      "Electric height adjustment",
      "Spacious work surface",
      "Built-in cable management",
      "Heavy-duty steel frame",
      "Easy assembly",
    ],
    keywords: [
      "adjustable standing desk",
      "electric standing desk",
      "modern office furniture",
      "height adjustable desk",
    ],
  },
  {
    id: 2,
    name: "Eco-Friendly Bamboo Standing Desk",
    description:
      "A stylish standing desk made from sustainable bamboo, perfect for eco-conscious users.",
    price: 349.99,
    image: "computer-desk.jpg",
    imageUrl:
      "https://example.com/images/eco-friendly-bamboo-standing-desk.jpg",
    features: [
      "Natural bamboo finish",
      "Manual height adjustment",
      "Durable and eco-friendly materials",
      "Minimalist design",
      "Lightweight and portable",
    ],
    keywords: [
      "bamboo standing desk",
      "eco-friendly desk",
      "sustainable furniture",
      "green office",
    ],
  },
  {
    id: 3,
    name: "Compact Folding Standing Desk",
    description:
      "An ideal standing desk for small spaces, featuring a foldable design for easy storage.",
    price: 199.99,

    image: "product-3.jpg",
    imageUrl: "https://example.com/images/compact-folding-standing-desk.jpg",
    features: [
      "Foldable for easy storage",
      "Lightweight design",
      "Simple height adjustment",
      "Ideal for home offices",
      "Sturdy construction",
    ],
    keywords: [
      "folding standing desk",
      "compact desk",
      "small space furniture",
      "portable standing desk",
    ],
  },
  {
    id: 4,
    name: "L-Shaped Corner Standing Desk",
    description:
      "Maximize your workspace with this L-shaped standing desk, perfect for multitasking.",
    price: 499.99,
    image: "product-2.png",
    imageUrl: "https://example.com/images/l-shaped-corner-standing-desk.jpg",
    features: [
      "Electric height adjustment",
      "Spacious L-shaped surface",
      "Sturdy metal frame",
      "Cable management system",
      "Modern aesthetic",
    ],
    keywords: [
      "L-shaped desk",
      "corner standing desk",
      "multitasking furniture",
      "ergonomic office desk",
    ],
  },
  {
    id: 5,
    name: "Ergonomic Sit-Stand Desk Converter",
    image: "product-3.jpg",
    description:
      "Transform any desk into a standing desk with this easy-to-use sit-stand converter.",
    price: 149.99,
    imageUrl:
      "https://example.com/images/ergonomic-sit-stand-desk-converter.jpg",
    features: [
      "Adjustable height settings",
      "Compact and lightweight",
      "Fits on any desk",
      "Easy to set up",
      "Enhances productivity",
    ],
    keywords: [
      "desk converter",
      "sit-stand converter",
      "ergonomic desk",
      "standing desk accessories",
    ],
  },
  {
    id: 6,
    image: "computer-desk.jpg",
    name: "Electric Height Adjustable Standing Desk",
    image: "product-5.webp",
    description:
      "A versatile standing desk with electric height adjustment for seamless transitions between sitting and standing.",
    price: 429.99,
    imageUrl:
      "https://example.com/images/electric-height-adjustable-standing-desk.jpg",
    features: [
      "Programmable height settings",
      "Sturdy frame with anti-collision technology",
      "Wide range of height adjustments",
      "Sleek and modern design",
      "Easy to operate",
    ],
    keywords: [
      "electric height adjustable desk",
      "smart standing desk",
      "programmable desk",
      "modern workspace",
    ],
  },
  {
    id: 7,
    name: "Sit-Stand Desk with Memory Settings",
    description:
      "This sit-stand desk features memory settings for quick height adjustments, making it perfect for shared workspaces.",
    price: 459.99,
    imageUrl:
      "https://example.com/images/sit-stand-desk-with-memory-settings.jpg",
    features: [
      "Three programmable height presets",
      "Smooth electric lift system",
      "Durable and stylish finish",
      "Easy to assemble",
      "Robust design",
    ],
    keywords: [
      "memory sit-stand desk",
      "adjustable height desk",
      "electric desk with presets",
      "shared workspace desk",
    ],
  },
  {
    id: 8,
    name: "Height Adjustable Standing Desk with Drawer",
    description:
      "A practical standing desk featuring a storage drawer, ideal for keeping your workspace organized.",
    price: 399.99,
    imageUrl:
      "https://example.com/images/height-adjustable-standing-desk-with-drawer.jpg",
    features: [
      "Electric height adjustment",
      "Integrated storage drawer",
      "Stylish and functional design",
      "Sturdy construction",
      "Perfect for home offices",
    ],
    keywords: [
      "standing desk with drawer",
      "height adjustable desk",
      "functional office furniture",
      "storage desk",
    ],
  },
  {
    id: 9,
    name: "Smart Standing Desk with App Control",
    description:
      "This innovative standing desk can be controlled via a mobile app, allowing for personalized height settings and reminders.",
    price: 599.99,
    imageUrl:
      "https://example.com/images/smart-standing-desk-with-app-control.jpg",
    features: [
      "Mobile app connectivity",
      "Personalized height settings",
      "Health reminder notifications",
      "Sleek modern design",
      "Robust and stable structure",
    ],
    keywords: [
      "smart desk",
      "app-controlled desk",
      "height adjustable desk with app",
      "modern office technology",
    ],
  },
  {
    id: 10,
    name: "Adjustable Standing Desk with LED Lighting",
    description:
      "A unique standing desk that features built-in LED lighting to create a vibrant workspace.",
    price: 479.99,
    imageUrl:
      "https://example.com/images/adjustable-standing-desk-with-led-lighting.jpg",
    features: [
      "Electric height adjustment",
      "Integrated LED lighting",
      "Sleek and stylish design",
      "Easy assembly",
      "Durable frame",
    ],
    keywords: [
      "standing desk with LED lights",
      "adjustable desk with lighting",
      "modern workspace",
      "creative office furniture",
    ],
  },
];

let baskets = getBasketsFromLocalStorage();

function getBasketsFromLocalStorage() {
  return JSON.parse(localStorage.getItem("baskets")) || [];
}

function saveBasketsToLocalStorage() {
  localStorage.setItem("baskets", JSON.stringify(baskets));
}
