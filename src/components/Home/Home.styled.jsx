import styled from 'styled-components';
import { device } from '../device';

export const HomeAbout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const HomeTitle = styled.h1`
	padding: 20px;
	font-size: 2rem;
	text-transform: lowercase;
	text-align: center;

	@media ${device.mobile} {
		font-size: 3rem;
	}

	@media ${device.tablet} {
		font-size: 4rem;
	}
`;

export const HomeDescription = styled.div`
	padding: 40px;
	font-size: 1.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 80px;

	@media ${device.mobile} {
		padding: 60px;
	}

	@media ${device.tablet} {
		flex-direction: row;
		padding: 80px;
	}
`;

export const HomeDescriptionText = styled.div`
	font-size: 1rem;

	@media ${device.mobile} {
		font-size: 1.25rem;
	}

	@media ${device.tablet} {
		font-size: 1.5rem;
	}
`;

export const HomeDescriptionImage = styled.img`
	max-width: 75%;
	display: block;
	height: auto;

	@media ${device.tablet} {
		max-width: 25%;
	}
`;

export const HomeButtonContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 24px;
	padding: 32px;

	& svg {
		width: 32px;
		height: 32px;

		@media ${device.mobile} {
			width: 64px;
			height: 64px;
		}

		@media ${device.tablet} {
			width: 64px;
			height: 64px;
		}
	}
`;
