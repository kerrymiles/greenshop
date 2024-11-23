import Header from "@/components/Header";
import Banner from "@/components/banner/Banner";
import Catalog from "@/components/catalog/Catalog";
import Cards from "@/components/cards/Cards";
import BlogSection from "@/components/blog/blog_section/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<section>
			<Banner />
			<Catalog />
			<Cards />
			<BlogSection />
		</section>
	)
}
