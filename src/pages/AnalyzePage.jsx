import styled from "styled-components";
import Button from "../components/ui/Button";
import { useRef, useState } from "react";
import { PostDream } from "../service/api";
import { useAtom } from "jotai";
import { responseAtom } from "../constant/atom";

function AnalyzePage() {
	const [name, setName] = useState("");
	const [content, setContent] = useState("");
	const cInputRef = useRef(null);

	return (
		<Main>
			<SubTitle>AI 꿈 분석으로 당신의 꿈을 탐험해 보세요.</SubTitle>
			<InputBG>
				<InputBox>
					<NameBox>
						<NameTitle>탐험가 이름 : </NameTitle>
						<NameInput
							type="text"
							onChange={(e) => {
								setName(e.target.value);
								console.log(e.target.value);
							}}
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									e.preventDefault();
									cInputRef.current.focus();
								}
							}}
						/>
					</NameBox>
					<ContentBox>
						<ContentTitle>꿈 내용을 입력하세요!</ContentTitle>
						<ContentInput
							ref={cInputRef}
							onChange={(e) => {
								setContent(e.target.value);
								console.log(e.target.value);
							}}
						/>
					</ContentBox>
				</InputBox>
			</InputBG>
			<RButton
				onClick={() => {
					console.log("눌렀어");
					PostDream(name, content);
				}}
			>
				분석하기
			</RButton>
		</Main>
	);
}

export default AnalyzePage;

const Main = styled.main`
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
