import styled from "styled-components";
import Logo from "../assets/svg/mirageLogo.svg?react";
import UserImg from "../assets/svg/user.svg?react";

function Header() {
	return (
		<MainHeader>
			<Logo />
			<UserImg />
		</MainHeader>
	);
}

export default Header;

const MainHeader = styled.header`
	width: 100%;
	padding: 40px 200px;
	position: fixed;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;
