import { BrowserRouter, Routes, Route } from "react-router-dom";
import RendingPage from "./pages/RendingPage";
import Layout from "./Layout";
import AnalyzePage from "./pages/AnalyzePage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<RendingPage />} />
					<Route path="/analyze" element={<AnalyzePage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
