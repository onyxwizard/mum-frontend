import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";

const App = () => (
	<BrowserRouter>
		<div className="app-container">
			<AppRoutes />
		</div>
	</BrowserRouter>
);

export default App;
