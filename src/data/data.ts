export const headerItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Shop",
        link: "/shop",
    },
    {
        name: "Plant Care",
        link: "/plant-care",
    },
    {
        name: "Blogs",
        link: "/blog"
    }
]

export const asideCatalogHome = {
    header: "Categories",
    items: [
        "House Plants",
        "Potter Plants",
        "Seeds",
        "Small Plants",
        "Big Plants",
        "Succulents",
        "Trerrariums",
        "Gardening",
        "Accessories",
    ]
}

export const plants = [
    {
        id: 1,
        name: "Barberton Daisy",
        imgLink: "/img_items/barberton_daisy.webp",
        category: "House Plants",
        size: "Medium",
        price: "$119.00",
        onSale: false,
    },
    {
        id: 2,
        name: "Angel Wing Begonia",
        imgLink: "/img_items/angel_wing_begonia.webp",
        size: "Medium",
        category: "House Plants",
        price: "$169.00",
        onSale: false,
    },
    {
        id: 3,
        name: "African Violet",
        imgLink: "/img_items/african_violet.webp",
        size: "Medium",
        category: "House Plants",
        price: "$229.00",
        onSale: true,
        newPrice: "$199.00",
        discount: "13%"
    },
    {
        id: 4,
        name: "Blushing Bromeliad",
        imgLink: "/img_items/blushing_bromeliad.webp",
        size: "Medium",
        category: "House Plants",
        price: "$139.00",
        onSale: false,
    },
    {
        id: 5,
        name: "Aluminium Plant",
        imgLink: "/img_items/aluminium_plant.webp",
        size: "Medium",
        category: "House Plants",
        price: "$179.00",
        onSale: false,
    },
    {
        id: 6,
        name: "Bird's Nest Fern",
        imgLink: "/img_items/birds_nest_fern.webp",
        size: "Medium",
        category: "House Plants",
        price: "$99.00",
        onSale: false,
    },
    {
        id: 7,
        name: "Broadleaf Lady Palm",
        imgLink: "/img_items/broadleaf_lady_palm.webp",
        size: "Medium",
        category: "House Plants",
        price: "$59.00",
        onSale: false,
    },
    {
        id: 8,
        name: "Chinese Evergreen",
        imgLink: "/img_items/chinese_evergreen.webp",
        size: "Medium",
        category: "House Plants",
        price: "$39.00",
        onSale: false,
    },
]

export const sizes = {
    header: 'Sizes',
    items: [
        "Small",
        "Medium",
        "Large",
    ]
}

export interface BannerContent {
    title: string;
    subtitle: string;
    description: string;
    highlight: string;
    button: string;
    href: string;
}

export const bannerData: BannerContent[] = [
    {
        title: "Welcome to GreenShop",
        subtitle: "Let's make a<br>better <span class='text-green'>planet</span>",
        description: "We are an online plant shop offering a wide range of<br>cheap and trendy plants. Use our plants to create an<br>unique Urban Jungle. Order your favorite plants!",
        highlight: "better",
        href: "/shop",
        button: "Shop now"
    },
    {
        title: "Discover Exotic Plants",
        subtitle: "Bring <span class='text-green'>nature</span> <br> into your home",
        description: "Find exotic and rare plants that will transform your<br>living space into a natural paradise. We provide all<br>you need to care for them.",
        highlight: "nature",
        href: "/plant-care",
        button: "Discover"
    },
    {
        title: "Save the Planet",
        subtitle: "Join the <br> <span class='text-green'>Green Movement</span>",
        description: "Every purchase supports reforestation projects and<br>environmental initiatives. Let's plant a greener<br>tomorrow together.",
        highlight: "Green Movement",
        href: "/blog",
        button: "Save planet"
    },
];


export const footerList1 = [
    'My Account',
    'Our Stories',
    'Contact us',
    'Career',
    'Specials',
]


export const footerList2 = [
    'Help Center',
    'How to Buy',
    'Shipping & Delivery',
    'Product Policy',
    'How to Return',
]

export const footerList3 = [
    'House Plants',
    'Potter Plants',
    'Seeds',
    'Small Plants',
    'Big Plants',
    'Accessories',
]