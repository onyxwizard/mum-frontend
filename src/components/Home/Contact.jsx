import { useState } from "react";
import { Link } from "react-router-dom";
import { UserPage } from "../../pages/UserPage/UserPage";

export default function Contact() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	return (
		<div className="bg-light min-vh-100">
			{/* Header */}
			<header className="bg-dark text-white py-3">
				<div className="container d-flex justify-content-between align-items-center">
					<Link to="/" className="text-white text-decoration-none fs-2 fw-bold">
						mum<span className="text-info">.</span>
					</Link>

					<nav className="d-flex gap-2">
						<Link to="/" className="btn btn-outline-light btn-sm">
							← Back to Home
						</Link>
						<Link to="/admin" className="btn btn-outline-light btn-sm">
							Admin
						</Link>
					</nav>
				</div>
			</header>

			<main className="container py-5">
				{isSubmitted ? (
					/* Success screen */
					<section className="text-center py-5" role="status">
						<div className="display-4 text-success mb-3">✓</div>

						<h1 className="fw-bold">Thank you!</h1>

						<p className="text-secondary fs-5">
							Your message has been submitted successfully.
						</p>

						<Link to="/" className="btn btn-dark mt-3">
							Back to Home
						</Link>
					</section>
				) : (
					/* Contact form */
					<div className="row g-5">
						<div className="col-lg-5">
							<p className="small text-uppercase text-secondary fw-semibold">
								Get in touch
							</p>

							<h1 className="display-5 fw-bold">
								Let&apos;s talk about your project.
							</h1>

							<p className="text-secondary fs-5 mt-3">
								Tell us about your idea and how we can help.
							</p>
						</div>

						<div className="col-lg-7">
							<div className="bg-white border p-3 p-md-4">
								<UserPage onSuccess={() => setIsSubmitted(true)} />
							</div>
						</div>
					</div>
				)}
			</main>
		</div>
	);
}
