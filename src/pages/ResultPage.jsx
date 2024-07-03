import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GetDream } from "../service/api";
import { delay, motion } from "framer-motion";

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

	const borderTop = {
		initial: {
			borderTop: "0px solid rgba(0, 0, 0, 0)",
		},
		whileHover: {
			borderTop: "4px solid #d3d3d3",
		},
		transition: {
			duration: 0.3,
		},
	};

	const init = {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,
			transition: {
				delay: 1,
				duration: 1,
			},
		},
	};

	if (loading) return <p>Loading...</p>;

	return (
		<Main variants={container} initial="initial" animate="animate" exit="exit">
			<SubTitle>{dreamData.title}</SubTitle>
			<InputBG>
				<ResultBox variants={init}>
					<LeftBox>
						<LDInFullBox>
							<Name
								initial={{ textShadow: "0px 0px 0px #e9c2ec" }}
								animate={{
									textShadow: "0px 0px 15px #e9c2ec",
									fontSize: "30px",
								}}
								transition={{ duration: 0.5, delay: 1.5 }}
							>
								탐험가 {dreamData.name}
							</Name>
							<Img
								whileHover={{
									scale: 1.1,
								}}
								src={dreamData.imageUrl}
							/>
							<KeywordDiv>
								<KeywordTitle>키워드</KeywordTitle>
								<Keywords>
									{Object.keys(dreamData.keywords).map((key, index) => (
										<Keyword key={index}>{key}</Keyword>
									))}
								</Keywords>
							</KeywordDiv>
						</LDInFullBox>
						<LDevideBox_BT>
							<LDInBox>
								<BoxTitle>과거</BoxTitle>
								<BoxContent
									variants={borderTop}
									initial="initial"
									whileHover="whileHover"
									transition="transition"
								>
									{dreamData.past_event}
								</BoxContent>
							</LDInBox>
							<LDInBox>
								<BoxTitle>미래</BoxTitle>
								<BoxContent
									variants={borderTop}
									initial="initial"
									whileHover="whileHover"
									transition="transition"
								>
									{dreamData.future_event}
								</BoxContent>
							</LDInBox>
						</LDevideBox_BT>
					</LeftBox>
					<RightBox>
						<RInLongBox>
							<BoxTitle>종합 분석</BoxTitle>
							<BoxContent
								variants={borderTop}
								initial="initial"
								whileHover="whileHover"
								transition="transition"
							>
								{dreamData.overall_interpretation}
							</BoxContent>
						</RInLongBox>
						<RInShortBox>
							<BoxTitle>요약</BoxTitle>
							<BoxContent
								variants={borderTop}
								initial="initial"
								whileHover="whileHover"
								transition="transition"
							>
								{dreamData.summary}
							</BoxContent>
						</RInShortBox>
					</RightBox>
				</ResultBox>
			</InputBG>
		</Main>
	);
}

export default ResultPage;

const Main = styled(motion.main)`
	width: 100%;
	height: 85%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
`;

const SubTitle = styled.h3`
	font-size: 3rem;
`;

const InputBG = styled(motion.div)`
	width: 100%;
	height: 85%;
	border: 2px solid transparent;
	background-image: linear-gradient(#111, #000),
		linear-gradient(90deg, #e9c2ec, #a6c0ee);
	background-origin: border-box;
	background-clip: content-box, border-box;
`;

const ResultBox = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`;

const LeftBox = styled(motion.div)`
	width: 66%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const LDevideBox = styled(motion.div)`
	width: 100%;
	height: 50%;
	display: flex;
	gap: 10px;
`;

const LDevideBox_BT = styled(LDevideBox)`
	border-top: 2px solid white;
	padding-top: 8px;
`;

const LDInFullBox = styled(motion.div)`
	width: 100%;
	height: 50%;
	padding: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 12px;
	overflow: hidden;
`;

const LDInBox = styled(motion.div)`
	width: 50%;
	height: 100%;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	overflow: scroll;
`;

const RightBox = styled(motion.div)`
	width: 33%;
	height: 100%;
	display: flex;
	flex-direction: column;
	border-left: 2px solid white;
`;

const RInBox = styled(motion.div)`
	width: 100%;
	height: 50%;
	padding: 16px;
	display: flex;
	flex-direction: column;
	gap: 12px;
	overflow: scroll;
	p {
		font-size: 24px;
	}
`;

const RInLongBox = styled(RInBox)`
	height: 70%;
`;
const RInShortBox = styled(RInBox)`
	height: 30%;
`;

const BoxTitle = styled(motion.h3)`
	font-size: 32px;
	font-family: "SbAggroM";
`;

const BoxContent = styled(motion.p)`
	padding-top: 8px;
	font-size: 24px;
	font-family: "SbAggroL";
	line-height: 1.2;
`;

const Name = styled(motion.h3)`
	width: 25%;
	font-size: 26px;
	text-align: center;
	word-break: keep-all;
`;

const Img = styled(motion.img)`
	width: 25.6rem;
	height: 25.6rem;
	cursor: pointer;
	/* border-left: 2px solid white;
	border-right: 2px solid white; */
`;

const KeywordDiv = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: scroll;
`;

const KeywordTitle = styled(BoxTitle)`
	padding-top: 4px;
`;

const Keywords = styled(BoxContent)`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 10px;
`;

const Keyword = styled.span`
	padding: 4px;
	/* border: 2px solid white; */
	background-color: #6b6b6b;
	font-size: 30px;
	font-family: "SbAggroM";
`;
