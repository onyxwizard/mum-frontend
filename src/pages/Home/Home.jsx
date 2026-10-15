import styles from "./Home.module.css";
import Header from "../../components/Home/Header";
import Hero from "../../components/Home/Hero";
import Intro from "../../components/Home/Intro";
import Benefits from "../../components/Home/Benefits";
import Services from "../../components/Home/Services";
import Projects from "../../components/Home/Projects";
import Testimonial from "../../components/Home/Testimonial";
import Insights from "../../components/Home/Insights";
import About from "../../components/Home/About";
import ContactCTA from "../../components/Home/ContactCTA";
import Footer from "../../components/Home/Footer";

export default function Home() {
	return (
		<main className={styles.home}>
			<Header />
			<Hero />
			<Intro />
			<Benefits />
			<Services />
			<Projects />
			<Testimonial />
			<Insights />
			<About />
			<ContactCTA />
			<Footer />
		</main>
	);
}
