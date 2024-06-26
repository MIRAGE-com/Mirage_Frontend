import React from "react";
import styled from "styled-components";

function DreamList() {
	return (
		<Main>
			<SubTitle>꿈 리스트</SubTitle>
			<BoxBG>
				<BoxContainer>
					<ContentElement>
						<CElementCover>
							<CETitle>귀신 꿈</CETitle>
							<CESummary>귀신을 먹어버렸...</CESummary>
						</CElementCover>
					</ContentElement>
					<ContentElement>
						<CElementCover>
							<CETitle>귀신 꿈</CETitle>
							<CESummary>귀신을 먹어버렸...</CESummary>
						</CElementCover>
					</ContentElement>
					<ContentElement>
						<CElementCover>
							<CETitle>귀신 꿈</CETitle>
							<CESummary>귀신을 먹어버렸...</CESummary>
						</CElementCover>
					</ContentElement>
				</BoxContainer>
			</BoxBG>
		</Main>
	);
}

export default DreamList;

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

const ContentElement = styled.div`
	width: 22rem;
	height: 27rem;
	border: 2px solid transparent;
	border-radius: 8px;
	position: relative;
	background-image: url("data:image/jpeg;base64,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"),
		linear-gradient(90deg, #e9c2ec, #a6c0ee);
	background-size: cover;
	background-position: top center;
	background-repeat: no-repeat;
	background-origin: border-box;
	background-clip: content-box, border-box;
`;

const CElementCover = styled.div`
	width: 100%;
	height: 30%;
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
	opacity: 0.7;
`;

const CETitle = styled.h3`
	font-size: 30px;
`;

const CESummary = styled.p`
	font-size: 20px;
	font-family: "SbAggroL";
`;
