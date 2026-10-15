import { Link } from "react-router-dom";

const navItems = ["Agency", "Services", "Projects", "Clients", "Insights"];

export default function Header() {
	return (
		<header className="bg-dark text-white py-3">
			<div className="container d-flex align-items-center justify-content-between gap-3">
				{/* Logo */}
				<Link
					to="/"
					className="navbar-brand fw-bold fs-2 text-white text-decoration-none"
				>
					mum<span className="text-info">.</span>
				</Link>

				{/* Static navigation */}
				<nav
					className="d-none d-lg-flex align-items-center gap-4 small"
					aria-label="Main navigation"
				>
					{navItems.map((item) => (
						<span key={item} className="text-white-50">
							{item}
						</span>
					))}
				</nav>

				{/* Contact button */}
				<Link
					to="/contact"
					className="btn btn-outline-light btn-sm text-nowrap"
				>
					Let&apos;s talk ↗
				</Link>
			</div>
		</header>
	);
}
