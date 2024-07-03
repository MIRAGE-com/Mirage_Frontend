import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/layout/Header";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

function Layout() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}
export default Layout;
