import { Link } from "react-router-dom";
import { UserPage } from "../../pages/UserPage/UserPage";
import Footer from "../../components/Home/Footer";

export default function Contact() {
	return (
		<div className="min-vh-100 bg-light">
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

			{/* Contact content */}
			<main className="container py-5">
				<div className="row g-5">
					<section className="col-lg-5">
						<p className="small text-uppercase text-secondary fw-semibold">
							Get in touch
						</p>

						<h1 className="display-4 fw-bold">
							Let&apos;s talk about your project.
						</h1>

						<p className="fs-5 text-secondary mt-4">
							Tell us about your idea, your goals and how we can help. Our team
							will get back to you.
						</p>
					</section>

					<section className="col-lg-7">
						<div className="bg-white border p-3 p-md-4">
							<UserPage />
						</div>
					</section>
				</div>
			</main>

			<Footer />
		</div>
	);
}
