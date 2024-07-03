import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "../components/ui/Button";

function RendingPage() {
	const container = {
		initial: { scale: 0 },
		animate: {
			scale: 1,
			transition: {
				type: "spring",
				duration: 0.5,
				bounce: 0.1,
				// delayChildren: 0.5,
				staggerChildren: 0.6,
			},
		},
		exit: {
			scale: 0,
			transition: {
				duration: 0.5,
				type: "spring",
				bounce: 0.1,
			},
		},
	};

	const item = {
		initial: { opacity: 0, y: 20 },
		animate: { opacity: 1, y: 0 },
	};

	return (
		<Main variants={container} initial="initial" animate="animate" exit="exit">
			<Title variants={item}>
				당신의 미래와 내면의 심연을 <br />
				<TitleExplore variants={item}>탐험하</TitleExplore>고 싶으신가요?
			</Title>
			<Detail variants={item}>AI 꿈 분석으로 당신의 꿈을 탐험해 보세요.</Detail>
			<Button variants={item}>
				<Link to="/analyze">탐험하기</Link>
			</Button>
		</Main>
	);
}

export default RendingPage;

const Main = styled(motion.main)`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 35px;
`;

const Title = styled(motion.h2)`
	background: linear-gradient(90deg, #fbc2eb, #a6c0ee);
	background-clip: text;
	font-size: 7rem;
	text-align: center;
	line-height: 1.2;
	color: transparent;
	word-break: keep-all;
`;

const TitleExplore = styled(motion.span)`
	background: linear-gradient(90deg, #dffbc2, #e9c2ec);
	background-clip: text;
	font-size: 7rem;
	line-height: 1.2;
	color: transparent;
`;

const Detail = styled(motion.p)`
	color: white;
	font-size: 2rem;
	font-family: "SbAggroL";
`;
