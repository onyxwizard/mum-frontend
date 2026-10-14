import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import AdminPage from "../pages/AdminPage/AdminPage";
import NotFound from "../pages/NotFound/NotFound";

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/admin" element={<AdminPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}
