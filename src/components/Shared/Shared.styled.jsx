import styled from 'styled-components';
import { device } from '../device';

export const Link = styled.a`
	transition: 0.1s ease-in;
	color: ${({ theme }) => theme.colors.secondaryDark};
	font-weight: bold;

	&:visited {
		text-decoration: none;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

export const Highlight = styled.span`
	color: ${({ theme }) => theme.colors.secondaryDark};
`;

export const Container = styled.div`
	background-color: ${(props) =>
		props.bgPrimary
			? props.theme.colors.primary
			: props.theme.colors.background};
	padding: 20px 40px;
	font-size: 1rem;

	@media ${device.mobile} {
		padding: 40px 60px;
		font-size: 1.25rem;
	}

	@media ${device.tablet} {
		padding: 60px 80px;
	}
`;
