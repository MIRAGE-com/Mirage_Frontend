import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import RendingPage from "./pages/RendingPage";
import Layout from "./Layout";
import AnalyzePage from "./pages/AnalyzePage";
import ResultPage from "./pages/ResultPage";
import DreamList from "./pages/DreamList";
import { AnimatePresence } from "framer-motion";

const AnimationRoutes = () => {
	const location = useLocation();
	console.log(location.pathname);

	return (
		<AnimatePresence mode="wait">
			<Routes location={location} key={location.pathname}>
				<Route element={<Layout />}>
					<Route path="/" element={<RendingPage />} />
					<Route path="/analyze" element={<AnalyzePage />} />
					<Route path="/result/:id" element={<ResultPage />} />
					<Route path="/list" element={<DreamList />} />
				</Route>
			</Routes>
		</AnimatePresence>
	);
};

function App() {
	return (
		<BrowserRouter>
			<AnimationRoutes />
		</BrowserRouter>
	);
}

export default App;
