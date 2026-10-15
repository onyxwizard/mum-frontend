import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AdminPage from "../pages/AdminPage/AdminPage";
import NotFound from "../pages/NotFound/NotFound";
import Contact from "../components/Home/Contact";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/admin" element={<AdminPage />} />
			<Route path="/contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
