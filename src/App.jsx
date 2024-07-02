import { BrowserRouter, Routes, Route } from "react-router-dom";
import RendingPage from "./pages/RendingPage";
import Layout from "./Layout";
import AnalyzePage from "./pages/AnalyzePage";
import { Provider } from "jotai/react";
import ResultPage from "./pages/ResultPage";
import DreamList from "./pages/DreamList";

function App() {
	return (
		<Provider>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<RendingPage />} />
						<Route path="/analyze" element={<AnalyzePage />} />
						<Route path="/result/:id" element={<ResultPage />} />
						<Route path="/list" element={<DreamList />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
