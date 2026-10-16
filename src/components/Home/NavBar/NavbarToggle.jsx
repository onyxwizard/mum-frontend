const NavbarToggle = ({ isOpen, onClick }) => {
	return (
		<button
			type="button"
			className="navbarToggle"
			onClick={onClick}
			aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
			aria-expanded={isOpen}
			aria-controls="mum-main-navigation"
		>
			{/* Keep your existing SVG unchanged */}
			<svg
				className="navbarToggleIcon"
				viewBox="0 0 48 28"
				width="48"
				height="28"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-hidden="true"
			>
				<line
					className="navbarToggleLine"
					x1="2"
					y1="7"
					x2="46"
					y2="7"
					stroke="currentColor"
					strokeWidth="2"
				/>

				<line
					className="navbarToggleLine"
					x1="2"
					y1="21"
					x2="46"
					y2="21"
					stroke="currentColor"
					strokeWidth="2"
				/>
			</svg>
		</button>
	);
};

export default NavbarToggle;
