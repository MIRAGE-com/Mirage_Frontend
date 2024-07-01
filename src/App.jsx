import { BrowserRouter, Routes, Route } from "react-router-dom";
import RendingPage from "./pages/RendingPage";
import Layout from "./Layout";
import AnalyzePage from "./pages/AnalyzePage";
import { Provider } from "jotai/react";
import ResultPage from "./pages/ResultPage";

function App() {
	return (
		<Provider>
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<RendingPage />} />
						<Route path="/analyze" element={<AnalyzePage />} />
						<Route path="/result" element={<ResultPage />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
