import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<footer className="bg-black text-white py-4">
			<div className="container">
				<div className="row g-4 align-items-start">
					<div className="col-md-8">
						<Link
							to="/"
							className="text-white text-decoration-none fs-2 fw-bold"
						>
							mum<span className="text-info">.</span>
						</Link>

						<p className="text-white-50 small mt-2 mb-0">
							Digital strategy, creative design and marketing.
						</p>
					</div>

					<div className="col-md-4">
						<p className="text-white-50 small mb-2">
							Have a question or a project?
						</p>

						<Link to="/contact" className="link-info">
							Let&apos;s talk ↗
						</Link>
					</div>
				</div>

				<hr className="border-secondary my-4" />

				<div className="d-flex flex-column flex-md-row justify-content-between gap-2">
					<small className="text-white-50">
						© MUM Digital Agency · Homepage recreation
					</small>
					<small className="text-white-50">AK</small>
				</div>
			</div>
		</footer>
	);
}
