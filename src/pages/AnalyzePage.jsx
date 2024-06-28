import styled from "styled-components";
import Button from "../components/ui/Button";

function AnalyzePage() {
	return (
		<Main>
			<SubTitle>AI 꿈 분석으로 당신의 꿈을 탐험해 보세요.</SubTitle>
			<InputBG>
				<InputBox>
					<NameBox>
						<NameTitle>사용자 이름 : </NameTitle>
						<NameInput type="text" />
					</NameBox>
					<ContentBox></ContentBox>
				</InputBox>
			</InputBG>
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
	width: 100rem;
	min-width: 10rem;
	padding: 5px;
	border: 2px solid white;
	color: white;
	font-size: 24px;
	font-family: "PretendardM";
`;

const ContentBox = styled.div``;
