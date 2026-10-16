import { useEffect, useRef } from "react";
import "./GoalsSection.css";

const goals = [
	{
		label: "Visibility",
		title: "More visibility",
		description:
			"Strong brand image, strengthened reputation & a head start on your competitors.",
		icon: "/images/visibility.svg",
	},
	{
		label: "Growth",
		title: "Acquisition of customers",
		description:
			"Good prospects, new value-added customers, sustainable growth.",
		icon: "/images/growth.svg",
	},
	{
		label: "Recruiting",
		title: "Winning Recruitment",
		description:
			"An attractive employer brand and campaigns that attract the best talent.",
		icon: "/images/recruiting.svg",
	},
	{
		label: "Efficiency",
		title: "Digital Agility",
		description:
			"More efficiency thanks to smart tools and AI that accelerate your daily life.",
		icon: "/images/efficiency.svg",
	},
];

function GoalsSection({ sectionRef }) {
	const scrollWrapperRef = useRef(null);
	const viewportRef = useRef(null);
	const trackRef = useRef(null);

	// Reveal intro and heading elements as they enter view.
	useEffect(() => {
		const elements = document.querySelectorAll(".mum-scroll-reveal");

		if (!("IntersectionObserver" in window)) {
			elements.forEach((element) => element.classList.add("is-visible"));
			return;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
						observer.unobserve(entry.target);
					}
				});
			},
			{
				threshold: 0.15,
				rootMargin: "0px 0px -8% 0px",
			},
		);

		elements.forEach((element) => observer.observe(element));

		return () => observer.disconnect();
	}, []);

	// Pin the horizontal card row during desktop scrolling.
	useEffect(() => {
		const wrapper = scrollWrapperRef.current;
		const viewport = viewportRef.current;
		const track = trackRef.current;

		if (!wrapper || !viewport || !track) return;

		let ticking = false;
		let frameId;

		const updateScroll = () => {
			if (window.innerWidth <= 992) {
				wrapper.style.height = "auto";
				track.style.transform = "none";
				return;
			}

			const distance = Math.max(0, track.scrollWidth - viewport.clientWidth);

			wrapper.style.height = `${window.innerHeight + distance}px`;

			const wrapperTop = wrapper.getBoundingClientRect().top + window.scrollY;

			const progress = distance
				? Math.min(Math.max((window.scrollY - wrapperTop) / distance, 0), 1)
				: 0;

			track.style.transform = `translate3d(${-distance * progress}px, 0, 0)`;
		};

		const handleScroll = () => {
			if (ticking) return;

			ticking = true;
			frameId = requestAnimationFrame(() => {
				updateScroll();
				ticking = false;
			});
		};

		updateScroll();

		window.addEventListener("scroll", handleScroll, {
			passive: true,
		});
		window.addEventListener("resize", updateScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", updateScroll);
			cancelAnimationFrame(frameId);

			wrapper.style.height = "";
			track.style.transform = "";
		};
	}, []);

	return (
		<section className="mum-goals bg-white" id="mum-goals" ref={sectionRef}>
			<div className="mum-goals__container">
				<div className="mum-goals__intro mum-scroll-reveal">
					<p>
						Hand in hand with our clients, our <strong>agency</strong> carries
						out powerful <strong>marketing projects</strong> and implements
						high-performance <strong>advertising strategies</strong>. All this
						thanks to a dynamic team with 25+ years of experience.
					</p>
				</div>

				<div className="mum-goals__sectionlead">
					<h2 className="mum-goals__statement mum-scroll-reveal">
						<span>Your goals,</span>
						<span>Our mission!</span>
					</h2>

					<div className="mum-goals__sectionlead-text mum-scroll-reveal">
						<p>
							We understand your challenges and provide complete, intelligent,
							digital and proven solutions.
						</p>

						<h3>Why our digital marketing?</h3>
					</div>
				</div>
			</div>

			<div className="mum-horizontal-scroll" ref={scrollWrapperRef}>
				<div className="mum-horizontal-scroll__viewport" ref={viewportRef}>
					<div className="mum-goalslist" ref={trackRef}>
						{goals.map((goal) => (
							<article className="mum-goalslist__item" key={goal.label}>
								<span className="mum-goalslist__hash">{goal.label}</span>

								<h3
									className="mum-goalslist__title"
									style={{ "--goal-icon": `url("${goal.icon}")` }}
								>
									{goal.title}
								</h3>

								<p>{goal.description}</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default GoalsSection;
