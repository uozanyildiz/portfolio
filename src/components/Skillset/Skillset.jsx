import React from 'react';
import { Container } from '../Shared/Shared.styled';
import { Card, CardContainer, Heading } from './Skillset.styled';

const getAllTechIcons = () => {
	const images = require.context(
		'../../assets/tech-icons',
		false,
		/\.(png|jpe?g|svg)$/
	);
	return images.keys().map(images);
};

const getTechIconNames = (iconPaths) => {
	return iconPaths.map((path) => {
		return path.split('-')[1].split('.')[0];
	});
};

const List = () => {
	const techIcons = getAllTechIcons();
	const techIconsNames = getTechIconNames(techIcons);
	const cardList = techIcons.map((path, i) => (
		<Card key={i}>
			<img src={path} alt={techIconsNames[i]} />
			<span>{techIconsNames[i]}</span>
		</Card>
	));
	return cardList;
};

const Skills = () => {
	return (
		<Container bgPrimary>
			<Heading>my skillset</Heading>
			Here are some technologies i learned since starting of my front-end
			development path. I am constantly trying to learn new libraries and
			frameworks, as front-end development is always improving and evolving.
			<CardContainer>
				<List />
			</CardContainer>
		</Container>
	);
};

export default Skills;
