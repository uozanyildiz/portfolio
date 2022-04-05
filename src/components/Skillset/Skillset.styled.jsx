import styled from 'styled-components';
import { device } from '../device';

export const Heading = styled.h2`
	font-size: 1.5rem;
	text-transform: lowercase;
	text-align: center;
	margin-bottom: 20px;

	@media ${device.mobile} {
		margin-bottom: 30px;
		font-size: 2rem;
	}

	@media ${device.tablet} {
		margin-bottom: 40px;
		font-size: 3rem;
	}
`;

export const Card = styled.div`
	display: flex;
	background-color: ${(props) => props.theme.colors.secondaryDark};
	border-radius: 8px;
	padding: 8px;
	align-items: center;

	& > img {
		margin-right: 8px;
		width: 20%;
		height: 40px;
	}

	& > span {
		width: 80%;
	}
`;

export const CardContainer = styled.div`
	display: grid;
	margin-top: 32px;
	grid-template-columns: auto auto;
	gap: 16px;

	@media ${device.tablet} {
		grid-template-columns: auto auto auto;
	}

	@media ${device.laptop} {
		grid-template-columns: auto auto auto auto;
	}
`;
