import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetDreamList } from "../service/api";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function DreamList() {
	const [dreamListData, setDreamListData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchDreamList = async () => {
			try {
				setLoading(true);
				const data = await GetDreamList();
				setDreamListData(data);
				setLoading(false);
			} catch (e) {
				console.log(e);
				setLoading(false);
			}
		};

		fetchDreamList();
	}, []);

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

	if (loading) return <p>Loading...</p>;

	return (
		<Main variants={container} initial="initial" animate="animate" exit="exit">
			<SubTitle>꿈 리스트</SubTitle>
			<BoxBG>
				<BoxContainer>
					{dreamListData.map((e, index) => {
						return (
							<ContentElement
								bgUrl={e.imageUrl}
								key={index}
								to={`/result/${e._id}`}
							>
								<CElementCover>
									<CETitle>{e.title}</CETitle>
									<CESummary>{e.summary}</CESummary>
								</CElementCover>
							</ContentElement>
						);
					})}
				</BoxContainer>
			</BoxBG>
		</Main>
	);
}

export default DreamList;

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

const BoxBG = styled.div`
	width: 100%;
	height: 520px;
	padding-top: 1rem;
	border: 2px solid transparent;
	background-image: linear-gradient(#111, #000),
		linear-gradient(90deg, #e9c2ec, #a6c0ee);
	background-origin: border-box;
	background-clip: content-box, border-box;
`;

const BoxContainer = styled.div`
	width: 100%;
	height: 100%;
	padding: 1.6rem;
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	overflow-y: scroll;
`;

const ContentElement = styled(Link)`
	width: 22rem;
	height: 27rem;
	border: 2px solid transparent;
	border-radius: 8px;
	position: relative;
	background-image: ${(props) => {
		return props.bgUrl
			? `url(${props.bgUrl}), linear-gradient(90deg, #e9c2ec, #a6c0ee)`
			: `transparent, linear-gradient(90deg, #e9c2ec, #a6c0ee)`;
	}};
	background-size: cover;
	background-position: top center;
	background-repeat: no-repeat;
	background-origin: border-box;
	background-clip: content-box, border-box;
`;

const CElementCover = styled.div`
	width: 100%;
	height: 33%;
	padding: 12px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2px;
	position: absolute;
	bottom: 0;
	background-image: linear-gradient(90deg, #e9c2ec, #a6c0ee);
	color: black;
	opacity: 0.85;
`;

const CETitle = styled.h3`
	font-size: 30px;
`;

const CESummary = styled.p`
	width: 100%;
	padding-top: 2px;
	font-size: 20px;
	font-family: "SbAggroL";
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
`;
