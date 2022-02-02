import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';

const Layout = (props) => {
	return (
		<>
			<Navbar />
			<Container>{props.children}</Container>
		</>
	);
};

const Container = styled.div`
	margin-top: 120px;
	min-height: 100%;
`;

export default Layout;
