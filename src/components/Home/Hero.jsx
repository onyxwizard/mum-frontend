import { Link } from "react-router-dom";

const qualities = [
	"Simple",
	"Attractive",
	"Effective",
	"Innovative",
	"Measurable",
	"Sustainable",
];

export default function Hero() {
	return (
		<section className="bg-dark text-white py-5">
			<div className="container py-lg-5">
				<div className="row">
					<div className="col-lg-10" data-aos="fade-up">
						<p className="small text-info fw-semibold mb-4">
							MUM DIGITAL AGENCY · LUXEMBOURG
						</p>

						<h1 className="display-2 fw-bold lh-1 mb-4">
							Digital marketing
							<br />
							<span className="text-info">agency.</span>
						</h1>

						<p className="fs-3 mb-4">We make your marketing</p>

						<div className="d-flex flex-wrap gap-2 mb-4">
							{qualities.map((word) => (
								<span
									key={word}
									className="border border-secondary rounded-pill px-3 py-2 small"
								>
									{word}
								</span>
							))}
						</div>

						<Link
							to="/contact"
							className="btn btn-info rounded-pill px-4 py-3 fw-semibold"
						>
							Let&apos;s talk ↗
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
