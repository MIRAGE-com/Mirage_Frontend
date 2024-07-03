import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const NUM_HOLES = 9;

function DigGame() {
	const [score, setScore] = useState(0);
	const [activeHole, setActiveHole] = useState(null);

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveHole(
				Math.random() < 0.5 ? Math.floor(Math.random() * NUM_HOLES) : null,
			);
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const handleMoleClick = () => {
		setScore(score + 1);
		setActiveHole(null);
	};

	return (
		<Container>
			<Score>점수: {score}</Score>
			<GameArea>
				{Array.from({ length: NUM_HOLES }).map((_, index) => (
					<Hole key={index}>
						{activeHole === index && (
							<Mole
								onClick={handleMoleClick}
								initial={{ y: 50 }}
								animate={{ y: 0 }}
								exit={{ y: 50 }}
							/>
						)}
					</Hole>
				))}
			</GameArea>
		</Container>
	);
}

export default DigGame;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
`;

const Score = styled.div`
	font-size: 24px;
	margin-bottom: 20px;
`;

const GameArea = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 10px;
`;

const Hole = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: #654321;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
`;

const Mole = styled(motion.div)`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #000;
	cursor: pointer;
	position: absolute;
	bottom: 0;
`;
