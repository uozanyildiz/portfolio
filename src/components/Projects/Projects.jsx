import React from 'react';
import { Container } from '../Shared/Shared.styled';
import { FaCode, FaEye } from 'react-icons/fa';
import {
	Chip,
	Heading,
	ProjectButton,
	ProjectButtonContainer,
	ProjectCard,
	ProjectDescription,
	ProjectTitle,
} from './Projects.styled';
import { PROJECTS } from '../../assets/projects';

const ProjectChips = ({ className, chipList }) => {
	return (
		<Chip className={className}>
			<ul>
				{chipList.map((keyword, i) => (
					<li key={i}>{keyword}</li>
				))}
			</ul>
		</Chip>
	);
};

const Projects = () => {
	const projectList = PROJECTS.map(
		({ title, img, chips, description, website, source }) => {
			return (
				<ProjectCard key={title} bgImage={img}>
					<ProjectTitle>{title}</ProjectTitle>
					<ProjectChips chipList={chips} />
					<ProjectDescription>{description}</ProjectDescription>
					<ProjectButtonContainer>
						<ProjectButton href={website} target='_blank' rel='noreferrer'>
							<FaEye />
							<span>Project website</span>
						</ProjectButton>
						<ProjectButton href={source} target='_blank' rel='noreferrer'>
							<FaCode />
							<span>View source</span>
						</ProjectButton>
					</ProjectButtonContainer>
				</ProjectCard>
			);
		}
	);

	return (
		<Container>
			<Heading>Projects</Heading>
			{projectList}
		</Container>
	);
};

export default Projects;
