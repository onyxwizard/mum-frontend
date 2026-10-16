const NavbarMark = () => {
	return (
		<svg
			className="navbarMark"
			viewBox="0 0 100 100"
			width="75"
			height="75"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			role="img"
			aria-labelledby="navbar-mark-title"
		>
			<title id="navbar-mark-title">MUM digital agency logo</title>

			{/* Outer circular ring */}
			<circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="2" />

			{/* Inner circular ring */}
			<circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" />

			{/* Stylized M */}
			<path
				d="M30 67V33L50 53L70 33V67"
				stroke="currentColor"
				strokeWidth="7"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default NavbarMark;
