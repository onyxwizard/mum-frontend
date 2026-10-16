import { useEffect, useState } from "react";
import HeroHeading from "./HeroHeading";
import HeroTagline from "./HeroTagline";
import "./Hero.css";
import HeroVideoReel from "./HeroVideoReel";

const words = [
	"simple",
	"attrayant",
	"efficace",
	"innovant",
	"compréhensible",
	"authentique",
	"compatible IA",
	"mesurable",
	"durable",
	"pérenne",
];

function Hero({ goalsSectionRef }) {
	const [wordIndex, setWordIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setWordIndex((currentIndex) =>
				currentIndex === words.length - 1 ? 0 : currentIndex + 1,
			);
		}, 1800);

		return () => clearInterval(timer);
	}, []);

	function handleDiscoverClick() {
		goalsSectionRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	}

	return (
		<section className="hero-section">
			<div className="hero">
				<div className="hero-content">
					<HeroHeading />

					<HeroTagline word={words[wordIndex]} />

					<button
						className="hero-scroll-button"
						type="button"
						onClick={handleDiscoverClick}
					>
						Discover <span>↓</span>
					</button>
				</div>
			</div>

			<HeroVideoReel goalsSectionRef={goalsSectionRef} />
		</section>
	);
}

export default Hero;
