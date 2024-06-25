import styled from "styled-components";
import Logo from "../assets/svg/mirageLogo.svg?react";
import UserImg from "../assets/svg/user.svg?react";
import { Link } from "react-router-dom";

function Header() {
	return (
		<MainHeader>
			<Link to="/">
				<Logo />
			</Link>
			<UserImg />
		</MainHeader>
	);
}

export default Header;

const MainHeader = styled.header`
	width: 100%;
	height: 15%;
	padding: 40px 200px;
	position: sticky;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;
