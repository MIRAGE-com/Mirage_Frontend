import React from "react";
import styled from "styled-components";

function ResultPage() {
	const dummy = {
		name: "황현민",
		dreamContent:
			"하늘을 날았는데 갑자기 학교에 간거에요 근데 거기서 폭탄이 생겨서 갑자기 배가 고파졌어요 그래서 급식실을 갔는데 급식 아주머니가 칼을 들고 달려와 그래서 놀래서 도망가 그리고 꿈에서 빠져나와",
		summary:
			"황현민 님의 꿈은 하늘을 나는 자유로움에서 불안과 위협을 느끼는 상황으로 전환됩니다. 이는 현재의 스트레스, 불안, 그리고 복잡한 감정을 나타낼 수 있습니다.",
		mainElements: {
			flying:
				"하늘을 나는 것은 자유, 통제 욕구를 나타내며 목표 성취의 열망을 의미합니다. 현실에서 벗어나고 싶은 욕구를 반영하기도 합니다.",
			school:
				"학교는 배움과 사회적 상호작용을 상징합니다. 이는 현재 느끼는 사회적 압박이나 학습에 대한 부담을 나타낼 수 있습니다.",
			bomb: "폭탄은 긴급성과 위협을 상징합니다. 이는 현재 겪고 있는 극심한 압박감과 불안을 나타낼 수 있습니다.",
			hunger:
				"배고픔은 충족되지 않은 욕구나 필요를 상징합니다. 이는 현재 삶에서 무언가가 부족하다는 느낌을 의미할 수 있습니다.",
			lunchLadyWithKnife:
				"급식 아주머니가 칼을 들고 다가오는 것은 공포와 위협을 상징합니다. 이는 외부로부터의 위협이나 신뢰 문제를 반영할 수 있습니다.",
		},
		pastEvents:
			"과거에 학업이나 사회적 관계에서 스트레스나 불안을 경험했을 가능성이 큽니다. 이러한 경험이 현재의 감정과 꿈에 영향을 미쳤을 수 있습니다.",
		futureEvents:
			"앞으로 이런 불안과 스트레스를 해결하고 자신의 욕구를 충족시킬 방법을 찾아야 합니다. 사회적 갈등을 해결하거나, 필요를 충족하기 위한 노력이 필요할 것입니다.",
		overallInterpretation:
			"황현민 님의 꿈은 현재의 스트레스와 불안, 그리고 충족되지 않은 욕구를 반영합니다. 여러 요소들이 혼재되는 이 꿈은 복잡한 감정 상태를 나타내며, 이를 해결하고 보다 긍정적이고 안정적인 방향으로 나아가야 함을 시사합니다. 긍정적이고 실질적인 접근을 통해 현재의 어려움을 극복해 나가는 것이 중요합니다.",
	};

	return (
		<Main>
			<SubTitle>결과</SubTitle>
			<InputBG>
				<ResultBox>
					<CBox>
						<Box></Box>
						<Box>
							<BoxTitle>과거</BoxTitle>
							<BoxContent>{dummy.pastEvents}</BoxContent>
						</Box>
					</CBox>
					<CBox>
						<Box>
							<BoxTitle>키워드</BoxTitle>
							<BoxContent>바보, 멍청이</BoxContent>
						</Box>
						<Box>
							<BoxTitle>미래</BoxTitle>
							<BoxContent>{dummy.futureEvents}</BoxContent>
						</Box>
					</CBox>
					<CBox>
						<LongBox>
							<BoxTitle>종합 분석</BoxTitle>
							<BoxContent>{dummy.overallInterpretation}</BoxContent>
						</LongBox>
						<ShortBox>
							<BoxTitle>요약</BoxTitle>
							<BoxContent>{dummy.summary}</BoxContent>
						</ShortBox>
					</CBox>
				</ResultBox>
			</InputBG>
		</Main>
	);
}

export default ResultPage;

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

const InputBG = styled.div`
	width: 100%;
	height: 560px;
	border: 2px solid transparent;
	background-image: linear-gradient(#111, #000),
		linear-gradient(90deg, #e9c2ec, #a6c0ee);
	background-origin: border-box;
	background-clip: content-box, border-box;
`;

const ResultBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

// 샤샤샷샷샤샤샤샤 카드가 돌아가는 느낌? 뭔말알?
const CBox = styled.div`
	width: 33%;
	height: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const Box = styled.div`
	height: 45%;
	padding: 12px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	background-color: #9e9e9e;
	font-size: 24px;
	overflow: scroll;
`;

const LongBox = styled(Box)`
	height: 55%;
	font-size: 20px;
`;

const ShortBox = styled(Box)`
	height: 35%;
	font-size: 20px;
`;

const BoxTitle = styled.h3`
	padding-bottom: 4px;
	border-bottom: 2px solid white;
	font-size: 30px;
	font-family: "SbAggroM";
`;

const BoxContent = styled.p`
	font-family: "SbAggroL";
	line-height: 1.2;
`;

// ======================================== //
