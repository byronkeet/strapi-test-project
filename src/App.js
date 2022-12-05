import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";
import SiteHeader from "./components/SiteHeader";

function App() {
	return (
		<Router>
			<div className="App">
				<SiteHeader />
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/details/:id" element={<ReviewDetails />} />
					<Route path="/category/:id" element={<Category />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
