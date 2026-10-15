import { Link } from "react-router-dom";

export default function ContactCTA() {
	return (
		<section className="bg-dark text-white py-5">
			<div className="container py-lg-4" data-aos="fade-up">
				<p className="small text-info fw-semibold text-uppercase">
					Have a project in mind?
				</p>

				<h2 className="display-3 fw-bold">Let&apos;s make it happen.</h2>

				<Link
					to="/contact"
					className="btn btn-info rounded-pill px-4 py-3 mt-3 fw-semibold"
				>
					Contact us ↗
				</Link>
			</div>
		</section>
	);
}
