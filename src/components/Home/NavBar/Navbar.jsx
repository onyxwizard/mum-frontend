import { useEffect, useState } from "react";

import NavbarBrand from "./NavbarBrand";
import NavbarMark from "./NavbarMark";
import NavbarToggle from "./NavbarToggle";
import NavbarMenu from "./NavbarMenu";
import "./Navbar.css";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		document.documentElement.classList.toggle("shownav", isMenuOpen);
	}, [isMenuOpen]);

	useEffect(() => {
		const closeOnEscape = (event) => {
			if (event.key === "Escape") {
				setIsMenuOpen(false);
			}
		};

		if (isMenuOpen) {
			document.addEventListener("keydown", closeOnEscape);
		}

		return () => {
			document.removeEventListener("keydown", closeOnEscape);
		};
	}, [isMenuOpen]);

	const toggleMenu = () => {
		setIsMenuOpen((current) => !current);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<header className="header mainNavbarContainer">
			<div className="logoslogan left-side wrapper">
				<NavbarBrand />
			</div>

			<div className="right-side wrapper">
				<NavbarMark />

				<NavbarToggle isOpen={isMenuOpen} onClick={toggleMenu} />
			</div>

			{/* The menu must be outside the right-side wrapper */}
			<NavbarMenu isOpen={isMenuOpen} onClose={closeMenu} />
		</header>
	);
};

export default Navbar;
