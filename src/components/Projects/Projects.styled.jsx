import styled from 'styled-components';
import { device } from '../device';

export const Heading = styled.h2`
	font-size: 2rem;
	text-transform: lowercase;
	text-align: center;
	margin-bottom: 20px;
	color: ${(props) => props.theme.colors.secondaryDark};

	@media ${device.mobile} {
		margin-bottom: 30px;
		font-size: 3rem;
	}

	@media ${device.tablet} {
		margin-bottom: 40px;
		font-size: 3.5rem;
	}
`;

export const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	height: 60vh;
	margin: 0 auto;
	text-align: center;
	margin-bottom: 64px;

	&::before {
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url(${(props) => props.bgImage});
		background-size: cover;
		position: absolute;
		content: '';
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		filter: blur(4px);
		transition: all 0.25s ease-in-out;
	}

	&:hover {
		&::before {
			filter: blur(2px);
		}
	}

	& > h3,
	div {
		position: relative;
		transition: all 0.25s ease-in-out;
	}
`;

export const ProjectTitle = styled.h3`
	margin-top: 16px;
	font-size: 1.5rem;
	color: ${(props) => props.theme.colors.white};

	@media ${device.mobile} {
		font-size: 1.75rem;
	}

	@media ${device.tablet} {
		font-size: 2rem;
	}
`;

export const ProjectDescription = styled.div`
	margin: 36px 32px;
	font-size: 1rem;

	@media ${device.tablet} {
		font-size: 1.25rem;
	}

	@media ${device.laptop} {
		font-size: 1.5rem;
	}
`;

export const Chip = styled.div`
	& > ul {
		list-style-type: none;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 16px;
		gap: 8px;
		flex-wrap: wrap;

		/* @media ${device.tablet} {
			flex-direction: row;
		} */

		li {
			background-color: ${(props) => props.theme.colors.primary};
			border-radius: 16px;
			padding: 6px 12px;
			font-size: 1rem;
			min-width: fit-content;

			@media ${device.tablet} {
				font-size: 1.25rem;
			}
		}
	}
`;

export const ProjectButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 16px;
`;

export const ProjectButton = styled.a`
	all: unset;
	cursor: pointer;
	padding: 4px;
	background-color: ${(props) => props.theme.colors.primary};
	border-radius: 12px;
	letter-spacing: 0.15rem;
	text-transform: uppercase;
	font-size: 0.75rem;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;

	& > * {
		vertical-align: middle;
		margin: 4px;
	}

	@media ${device.mobile} {
		font-size: 1rem;
		padding: 8px;
	}

	@media ${device.tablet} {
		font-size: 1.25rem;
	}
`;
