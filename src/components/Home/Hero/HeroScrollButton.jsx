function HeroScrollButton({ goalsSectionRef }) {
	const handleClick = () => {
		goalsSectionRef?.current?.scrollIntoView({
			behavior: "smooth",
		});
	};

	return (
		<button
			type="button"
			className="mum-hero__scrolldown"
			onClick={handleClick}
		>
			<span>Discover</span>

			<span className="mum-hero__scroll-arrow" aria-hidden="true">
				→
			</span>
		</button>
	);
}

export default HeroScrollButton;
