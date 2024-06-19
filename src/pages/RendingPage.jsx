import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

function RendingPage() {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.6,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<Main variants={container} initial="hidden" animate="show">
			<Title variants={item}>
				당신의 미래와 내면의 심연을 <br />
				<TitleExplore variants={item}>탐험하</TitleExplore>고 싶으신가요?
			</Title>
			<Detail variants={item}>AI 꿈 분석으로 당신의 꿈을 탐험해 보세요.</Detail>
			<ExploreBtn variants={item}>
				<Link to="">탐험하기</Link>
			</ExploreBtn>
		</Main>
	);
}

export default RendingPage;

const Main = styled(motion.main)`
	height: 100%;
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

const ExploreBtn = styled(motion.div)`
	width: 140px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	border: 2px solid transparent;
	border-radius: 100px;
	background-image: linear-gradient(#000, #000),
		linear-gradient(90deg, #dffbc2, #e9c2ec);
	background-origin: border-box;
	background-clip: content-box, border-box;
	color: white;
	a {
		padding: 18px;
	}
`;
