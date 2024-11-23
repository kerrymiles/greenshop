import BlogPost from "./BlogPost";
import img1 from "../../../../public/blogs_img/01.png"
import img2 from "../../../../public/blogs_img/02.png"
import img3 from "../../../../public/blogs_img/03.png"
import img4 from "../../../../public/blogs_img/04.png"

export default function BlogSection() {
    return (
        <section className="flex flex-col justify-center gap-3 mt-24">
            <div className="flex flex-col justify-center text-center">
                <h2 className="text-4xl">Our Blog Posts</h2>
                <p className="mt-5 text-xl">We are an online plant shop offering a wide range of cheap and trendy plants.</p>
            </div>
            <div className="flex gap-12 justify-center">
                <BlogPost
                    title="Cactus & Succulent Care Tips"
                    date="September 12"
                    content="Cacti are succulents are easy care plants for any home or patio."
                    image={img1}
                    link="/blog/why-cacti-is-cool"
                />
                <BlogPost
                    title="Top 10 Succulents for Your Home"
                    date="September 13"
                    content="Best in hanging baskets. Prefers medium to high light."
                    image={img2}
                    link="/blog/top-10-succulents-2024"
                />
                <BlogPost
                    title="Cacti & Succulent Care Tips"
                    date="September 15"
                    content="Cacti and succulents thrive in containers and because most are.."
                    image={img3}
                    link="/blog/cacti-care-tips"
                />
                <BlogPost
                    title="Best Houseplants Room by Room"
                    date="September 15"
                    content="The benefits of houseplants are endless. In addition to.."
                    image={img4}
                    link="/blog/best-houseplants-for-your-room"
                />
            </div>
        </section>
    );
}