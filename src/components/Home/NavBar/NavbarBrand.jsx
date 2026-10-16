import { Link } from "react-router-dom";

const NavbarBrand = () => {
	return (
		<Link
			className="navbarBrand"
			to="/"
			title="MUM digital agency"
			aria-label="MUM digital agency homepage"
		>
			<strong>MUM</strong> digital agency
		</Link>
	);
};

export default NavbarBrand;
