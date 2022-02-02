import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
	const [isScrolling, setIsScrolling] = useState(false);

	const changeBackground = () => {
		window.scrollY > 20 ? setIsScrolling(true) : setIsScrolling(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeBackground);
		return () => {
			window.removeEventListener('scroll', changeBackground);
		};
	}, []);

	return (
		<Nav isScrolling={isScrolling}>
			<NavHeading>uozanyildiz.dev</NavHeading>
			<NavLinkContainer isScrolling={isScrolling}>
				<NavItem to='/'>Home</NavItem>
				<NavItem to='/projects'>Projects</NavItem>
				<NavItem to='/resume'>Resume</NavItem>
				<NavItem to='/github'>Github</NavItem>
			</NavLinkContainer>
		</Nav>
	);
};

const NavHeading = styled.span`
	font-size: 2rem;
`;

const Nav = styled.nav`
	position: sticky;
	top: 0px;
	padding: 20px 0px;
	margin-bottom: 16px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: ${(props) =>
		props.isScrolling
			? props.theme.colors.secondary + 'a3'
			: props.theme.colors.background};
	backdrop-filter: blur(5px);
	transition: all 0.3s ease-out;
`;

const NavLinkContainer = styled.ul`
	font-weight: 400;
	font-size: 1.25rem;
	list-style-type: none;
	display: flex;
	gap: 48px;
	letter-spacing: 0.05rem;

	& a::after {
		background-color: ${(props) =>
			props.isScrolling
				? props.theme.colors.background
				: props.theme.colors.secondaryDark};
	}
`;

const NavItem = styled(NavLink)`
	& {
		position: relative;
		text-decoration: none;
		color: ${(props) => props.theme.colors.white};
	}

	&::after {
		height: 3px;
		width: 0%;
		content: '';
		transition: all 0.3s ease 0s;
		position: absolute;
		left: 0;
		bottom: -5px;
	}

	&:hover::after {
		width: 100%;
	}

	&.active {
		&::after {
			width: 100%;
		}
	}
`;

export default Navbar;
