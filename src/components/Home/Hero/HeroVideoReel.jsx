import { useEffect, useRef } from "react";

function HeroVideoReel({ goalsSectionRef }) {
	const ratioRef = useRef(null);
	const videoRef = useRef(null);

	useEffect(() => {
		const ratio = ratioRef.current;
		const video = videoRef.current;

		if (!ratio || !video) return;

		function resetVideo() {
			video.style.width = "";
			video.style.height = "";
			video.style.transform = "";
			document.body.classList.remove("fixed-container");
		}

		function moveVideo() {
			if (window.innerWidth <= 992) {
				resetVideo();
				return;
			}

			const progress = Math.min(window.scrollY / ratio.offsetHeight, 1);

			const width = 600 + (ratio.offsetWidth - 600) * progress;
			const height = 337 + (ratio.offsetHeight - 337) * progress;

			video.style.width = `${width}px`;
			video.style.height = `${height}px`;
			video.style.transform = `translateY(${-400 + 400 * progress}px)`;

			const goals = goalsSectionRef?.current;

			if (goals) {
				const videoTop = video.getBoundingClientRect().top;
				const goalsTop = goals.getBoundingClientRect().top;

				document.body.classList.toggle(
					"fixed-container",
					progress === 1 && videoTop <= 0 && goalsTop > 0,
				);
			}
		}

		moveVideo();

		window.addEventListener("scroll", moveVideo);
		window.addEventListener("resize", moveVideo);

		return () => {
			window.removeEventListener("scroll", moveVideo);
			window.removeEventListener("resize", moveVideo);
			resetVideo();
		};
	}, [goalsSectionRef]);

	return (
		<div className="hero-reel">
			<div className="hero-reel-inner">
				<div className="ratio ratio-16x9" ref={ratioRef}>
					<div className="hero-video" ref={videoRef}>
						<video autoPlay muted loop playsInline>
							<source
								src="https://www.mum.lu/videos/mum-intro-25.mp4"
								type="video/mp4"
							/>
						</video>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroVideoReel;
