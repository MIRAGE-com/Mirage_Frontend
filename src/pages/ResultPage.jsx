import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GetDream } from "../service/api";

function ResultPage() {
	const [dreamData, setDreamData] = useState(null);
	const [loading, setLoading] = useState(true);
	const params = useParams();

	useEffect(() => {
		const fetchDream = async () => {
			try {
				setLoading(true);
				const data = await GetDream(params.id);

				setDreamData(data);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		};

		fetchDream();
	}, [params.id]);

	if (loading) return <p>Loading...</p>; // 로딩 중일 때 보여줄 UI

	return (
		<Main>
			<SubTitle>{dreamData.title}</SubTitle>
			<InputBG>
				<ResultBox>
					<LeftBox>
						<LDevideBox>
							<LDInBox>
								<Name>탐험가 {dreamData.name}</Name>
								<Img src="https://mblogthumb-phinf.pstatic.net/MjAyMjAxMjVfMjAy/MDAxNjQzMTAyOTk2NjE0.gw_H_jjBM64svaftcnheR6-mHHlmGOyrr6htAuxPETsg.8JJSQNEA5HX2WmrshjZ-VjmJWqhmgE40Qm5csIud9VUg.JPEG.minziminzi128/IMG_7374.JPG?type=w800" />
							</LDInBox>
							<LDInBox>
								<BoxTitle>키워드</BoxTitle>
								<Keywords>
									{Object.keys(dreamData.keywords).map((key, index) => (
										<Keyword key={index}>{key}</Keyword>
									))}
								</Keywords>
							</LDInBox>
						</LDevideBox>
						<LDevideBox_BT>
							<LDInBox>
								<BoxTitle>과거</BoxTitle>
								<BoxContent>{dreamData.past_event}</BoxContent>
							</LDInBox>
							<LDInBox>
								<BoxTitle>미래</BoxTitle>
								<BoxContent>{dreamData.future_event}</BoxContent>
							</LDInBox>
						</LDevideBox_BT>
					</LeftBox>
					<RightBox>
						<RInBox>
							<BoxTitle>종합 분석</BoxTitle>
							<BoxContent>{dreamData.overall_interpretation}</BoxContent>
						</RInBox>
						<RInBox>
							<BoxTitle>요약</BoxTitle>
							<BoxContent>{dreamData.summary}</BoxContent>
						</RInBox>
					</RightBox>
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
	justify-content: center;
`;

const LeftBox = styled.div`
	width: 66%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const LDevideBox = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	gap: 10px;
`;

const LDevideBox_BT = styled(LDevideBox)`
	border-top: 2px solid white;
	padding-top: 8px;
`;

const LDInBox = styled.div`
	width: 50%;
	height: 100%;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	overflow: scroll;
`;

const RightBox = styled.div`
	width: 33%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-left: 2px solid white;
`;

const RInBox = styled.div`
	width: 100%;
	height: 50%;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	overflow: scroll;
	p {
		font-size: 20px;
	}
`;

const BoxTitle = styled.h3`
	padding-bottom: 4px;
	border-bottom: 2px solid white;
	font-size: 30px;
	font-family: "SbAggroM";
`;

const BoxContent = styled.p`
	font-size: 24px;
	font-family: "SbAggroL";
	line-height: 1.2;
`;

const Name = styled.h2`
	height: 10%;
	font-size: 20px;
	text-align: center;
`;

const Img = styled.img`
	height: 85%;
	border: 2px solid white;
	object-fit: contain;
`;

const Keywords = styled(BoxContent)`
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
`;

const Keyword = styled.h3`
	padding: 4px;
	border: 2px solid white;
	background-color: #6b6b6b;
	font-size: 30px;
	font-family: "SbAggroM";
`;

// ======================================== //
