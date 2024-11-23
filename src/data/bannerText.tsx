// bannerData.tsx
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
