import { BrowserRouter, Routes, Route } from "react-router-dom";
import RendingPage from "./pages/RendingPage";
import Layout from "./Layout";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<RendingPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
