import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => (
	<div className={styles.mainContainer}>
		<Link to="/admin">Admin</Link>
	</div>
);

export default Home;
