import styled, { keyframes } from "styled-components";
import Button from "../components/ui/Button";
import { useRef, useState } from "react";
import { PostDream } from "../service/api";
import { useAtom } from "jotai";
import { responseAtom } from "../constant/atom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DigGame from "../components/game/DigGame";
import ReactGame from "../components/game/ReactGame";

function AnalyzePage() {
	const [name, setName] = useState("");
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useAtom(responseAtom);
	const navigate = useNavigate();

	const cInputRef = useRef(null);
	const LBoxRef = useRef(null);
	const lContainerRef = useRef(null);

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
						<NameTitle>탐험가 이름</NameTitle>
						<NameInput
							type="text"
							placeholder="이름을 적어주세요!"
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
							initial={{ boxShadow: "0px 0px 0px 0px rgba(0, 0, 0, 0)" }}
							whileFocus={{
								boxShadow: "0px 0px 10px 3px rgba(255, 255, 255, 0.3)",
							}}
							transition={{ duration: 0.3 }}
						/>
					</NameBox>
					<ContentBox>
						<ContentTitle>꿈 내용을 입력하세요!</ContentTitle>
						<ContentInput
							placeholder="꿈 내용을 적어주세요!"
							ref={cInputRef}
							onChange={(e) => {
								setContent(e.target.value);
								// console.log(e.target.value);
							}}
							required
							initial={{ borderTop: "0px solid rgba(0, 0, 0, 0)" }}
							whileFocus={{
								borderTop: "4px solid #8e8e8e",
							}}
							transition={{ duration: 0.3 }}
						/>
					</ContentBox>
				</InputBox>
			</InputBG>
			<RButton
				onClick={async () => {
					console.log("눌렀어");
					// if (name === "" || content === "") {
					// 	alert("내용을 적어주세요!");
					// 	return;
					// }
					setLoading(true);
					try {
						// const res = await PostDream(name, content);
						// setLoading(false);
						navigate(`/result/${res.id}`);
					} catch (e) {
						console.log(e);
					}
				}}
			>
				분석하기
			</RButton>
			{loading ? (
				<LoadingBox ref={LBoxRef}>
					<LoadingTitle
						drag
						dragConstraints={LBoxRef}
						whileTap={{ scale: 0.8 }}
						defaultValue="로딩중..."
						maxLength={14}
					/>
					<ContainerBox>
						<DragContainer
							whileTap={{ scale: 0.8 }}
							drag
							dragConstraints={LBoxRef}
						>
							<DigGame />
						</DragContainer>
						<DragContainer
							drag
							dragConstraints={LBoxRef}
							ref={lContainerRef}
							whileTap={{ scale: 0.8 }}
						>
							<DragCircle
								animate={{
									rotateZ: [
										0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180,
										195, 210, 225, 240, 255, 270, 285, 300, 315, 330, 345, 360,
									],
								}}
								transition={{ repeat: Infinity }}
								drag
								dragConstraints={lContainerRef}
							></DragCircle>
						</DragContainer>
						<DragContainer
							drag
							dragConstraints={LBoxRef}
							whileTap={{ scale: 0.8 }}
						>
							<ReactGame />
						</DragContainer>
					</ContainerBox>

					<LoadingSubTitle
						drag
						dragConstraints={LBoxRef}
						whileTap={{ scale: 0.8 }}
					>
						그거 아시나요? 꿈 속에서는 무엇이든 할 수 있답니다.
					</LoadingSubTitle>
					<LoadingSubTitle
						drag
						dragConstraints={LBoxRef}
						whileTap={{ scale: 0.8 }}
					>
						로딩은 40~50초 걸립니다.
					</LoadingSubTitle>
				</LoadingBox>
			) : null}
		</Main>
	);
}

export default AnalyzePage;

const LoadingBox = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	z-index: 1;
	top: 0px;
	background-color: rgba(75, 75, 75, 0.7);
`;

const LoadingTitle = styled(motion.input)`
	width: 40rem;
	height: 5rem;
	text-align: center;
	outline: none;
	border: none;
	resize: none;
	font-size: 3rem;
	font-family: "SbAggroM";
	background-color: transparent;
	color: white;
	cursor: pointer;
`;

const LoadingSubTitle = styled(motion.p)`
	font-size: 2.4rem;
	font-family: "SbAggroM";
	user-select: none;
`;

const ContainerBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
`;

const DragContainer = styled(motion.div)`
	width: 30rem;
	height: 30rem;
	border-radius: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: linear-gradient(135deg, #e9c2ec, #a6c0ee);
	overflow: hidden;
`;

const DragCircle = styled(motion.div)`
	width: 10rem;
	height: 10rem;
	border: 15px solid #e3e3e3;
	border-bottom: 15px solid #002a71;
	border-radius: 50%;
	mix-blend-mode: soft-light;
	cursor: pointer;
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
	height: 80%;
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
	font-size: 32px;
	font-family: "PretendardB";
`;

const NameInput = styled(motion.input)`
	width: 100%;
	min-width: 10rem;
	padding: 8px;
	/* border-bottom: 2px solid transparent; */
	border-right: 0px;
	border-left: 0px;
	color: white;
	font-size: 30px;
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
	font-size: 40px;
	font-family: "PretendardB";
`;

const ContentInput = styled(motion.textarea)`
	width: 100%;
	height: 100%;
	min-width: 10rem;
	padding: 8px 0px;
	border: none;
	/* border-top: 2px solid #cbcbcb;
	border-bottom: 2px solid #cbcbcb; */
	outline: none;
	background-color: transparent;
	color: white;
	font-size: 30px;
	font-family: "PretendardM";
	resize: none;
`;
