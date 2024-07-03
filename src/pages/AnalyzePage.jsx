import styled from "styled-components";
import Button from "../components/ui/Button";
import { useRef, useState } from "react";
import { PostDream } from "../service/api";
import { useAtom } from "jotai";
import { responseAtom } from "../constant/atom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function AnalyzePage() {
	const [name, setName] = useState("");
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(true);
	const cInputRef = useRef(null);
	const [response, setResponse] = useAtom(responseAtom);
	const navigate = useNavigate();

	const container = {
		initial: { scale: 0 },
		animate: {
			scale: 1,
			transition: {
				type: "spring",
				duration: 0.5,
				bounce: 0.1,
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

	return (
		<Main variants={container} initial="initial" animate="animate" exit="exit">
			<SubTitle>AI 꿈 분석으로 당신의 꿈을 탐험해 보세요.</SubTitle>
			<InputBG>
				<InputBox>
					<NameBox>
						<NameTitle>탐험가 이름 : </NameTitle>
						<NameInput
							type="text"
							onChange={(e) => {
								setName(e.target.value);
								// console.log(e.target.value);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									e.preventDefault();
									cInputRef.current.focus();
								}
							}}
							required
						/>
					</NameBox>
					<ContentBox>
						<ContentTitle>꿈 내용을 입력하세요!</ContentTitle>
						<ContentInput
							ref={cInputRef}
							onChange={(e) => {
								setContent(e.target.value);
								// console.log(e.target.value);
							}}
							required
						/>
					</ContentBox>
				</InputBox>
			</InputBG>
			<RButton
				onClick={async () => {
					console.log("눌렀어");
					setLoading(true);
					try {
						const res = await PostDream(name, content);
						setLoading(false);
						navigate(`/result/${res.id}`);
					} catch (e) {
						console.log(e);
					}
				}}
			>
				분석하기
			</RButton>
			{/* {loading ? <LoadingBox></LoadingBox> : null} */}
		</Main>
	);
}

export default AnalyzePage;

const LoadingBox = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1;
	top: 0px;
	background-color: rgba(142, 142, 142, 0.9);
`;

const Main = styled(motion.main)`
	width: 100%;
	height: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const SubTitle = styled.h3`
	font-size: 2rem;
`;

const RButton = styled(Button)`
	align-self: flex-end;
	cursor: pointer;
`;

const InputBG = styled.form`
	width: 100%;
	height: 520px;
	border: 2px solid transparent;
	background-image: linear-gradient(#111, #000),
		linear-gradient(90deg, #e9c2ec, #a6c0ee);
	background-origin: border-box;
	background-clip: content-box, border-box;
`;

const InputBox = styled.div`
	width: 100%;
	height: 100%;
	padding: 30px;
	display: flex;
	flex-direction: column;
	gap: 20px;
	color: white;
`;

const NameBox = styled.div`
	display: flex;
	align-items: center;
`;

const NameTitle = styled.h3`
	width: 16rem;
	min-width: 17rem;
	font-size: 30px;
	font-family: "PretendardB";
`;

const NameInput = styled.input`
	width: 100%;
	min-width: 10rem;
	padding: 5px;
	border-top: 2px solid #cbcbcb;
	border-bottom: 2px solid #cbcbcb;
	border-right: 0px;
	border-left: 0px;
	color: white;
	font-size: 24px;
	font-family: "PretendardM";
`;

const ContentBox = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const ContentTitle = styled.h3`
	width: 100%;
	min-width: 17rem;
	font-size: 30px;
	font-family: "PretendardB";
`;

const ContentInput = styled.textarea`
	width: 100%;
	height: 100%;
	min-width: 10rem;
	padding: 5px;
	border-top: 2px solid #cbcbcb;
	border-bottom: 2px solid #cbcbcb;
	border-right: 0px;
	border-left: 0px;
	outline: none;
	background-color: transparent;
	color: white;
	font-size: 24px;
	font-family: "PretendardM";
`;
