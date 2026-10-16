function HeroTagline({ word }) {
	return (
		<div className="hero-tagline">
			<span>Nous rendons</span>
			<span>votre marketing</span>
			<span className="hero-changing-word" key={word}>
				{word}
			</span>
		</div>
	);
}

export default HeroTagline;
