import styled from "styled-components";
import Button from "../components/ui/Button";

function AnalyzePage() {
	return (
		<Main>
			<SubTitle>AI 꿈 분석으로 당신의 꿈을 탐험해 보세요.</SubTitle>
			<InputBox></InputBox>
			<RButton>분석하기</RButton>
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

const InputBox = styled.form`
	width: 100%;
	height: 520px;
	border: 2px solid transparent;
	background-image: linear-gradient(#111, #000),
		linear-gradient(90deg, #e9c2ec, #a6c0ee);
	background-origin: border-box;
	background-clip: content-box, border-box;
`;

const RButton = styled(Button)`
	align-self: flex-end;
`;
