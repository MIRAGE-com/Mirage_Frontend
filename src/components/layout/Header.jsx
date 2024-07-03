import styled from "styled-components";
import Logo from "../../assets/svg/mirageLogo.svg?react";
// import UserImg from "../../assets/svg/user.svg?react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
	return (
		<MainHeader>
			<LogoLink whileHover={{ scale: 1.2 }} to="/">
				<Logo />
			</LogoLink>
			<SubTitle whileHover={{ scale: 1.2 }} to="/list">
				꿈 리스트
			</SubTitle>
		</MainHeader>
	);
}

export default Header;

const MainHeader = styled.header`
	width: 100%;
	height: 15%;
	position: sticky;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
`;

const LogoLink = styled(motion(Link))``;

const SubTitle = styled(motion(Link))`
	font-size: 20px;
`;
