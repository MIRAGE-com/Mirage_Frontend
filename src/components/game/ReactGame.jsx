import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

function ReactGame() {
	const [gameStarted, setGameStarted] = useState(false);
	const [showShape, setShowShape] = useState(false);
	const [startTime, setStartTime] = useState(0);
	const [reactionTime, setReactionTime] = useState(0);

	useEffect(() => {
		if (gameStarted) {
			const timeout = setTimeout(() => {
				setShowShape(true);
				setStartTime(Date.now());
			}, Math.random() * 3000 + 1000);
			return () => clearTimeout(timeout);
		}
	}, [gameStarted]);

	const handleShapeClick = () => {
		if (showShape) {
			const endTime = Date.now();
			setReactionTime(endTime - startTime);
			setShowShape(false);
			setGameStarted(false);
		}
	};

	const handleStartGame = () => {
		setGameStarted(true);
		setReactionTime(0);
	};

	return (
		<Container>
			{!gameStarted && (
				<StartButton onClick={handleStartGame}>반응속도 게임 시작</StartButton>
			)}
			{gameStarted && (
				<GameArea>
					{showShape && (
						<Shape
							onClick={handleShapeClick}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						/>
					)}
				</GameArea>
			)}
			{reactionTime > 0 && <Result>반응 속도: {reactionTime}ms</Result>}
		</Container>
	);
}

export default ReactGame;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	height: 100vh;
`;

const StartButton = styled.button`
	padding: 10px 20px;
	font-size: 18px;
	background-color: #007bff;
	color: white;
	border: none;
	cursor: pointer;
	outline: none;
`;

const GameArea = styled.div`
	width: 200px;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Shape = styled(motion.div)`
	width: 100px;
	height: 100px;
	background-color: #28a745;
	cursor: pointer;
`;

const Result = styled.div`
	font-size: 24px;
`;
