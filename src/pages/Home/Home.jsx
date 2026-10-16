import { useRef } from "react";
import Hero from "../../components/Home/Hero/Hero";
import Navbar from "../../components/Home/NavBar/Navbar";
import GoalSection from "../../components/Home/GoalsSection/GoalSection";

export default function Home() {
	const goalsSectionRef = useRef(null);
	return (
		<>
			<Navbar />
			<main className="main">
				<Hero goalsSectionRef={goalsSectionRef} />
				<GoalSection />
			</main>
		</>
	);
}
