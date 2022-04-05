import React from 'react';
import styled from 'styled-components';
import { device } from './components/device';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skillset from './components/Skillset/Skillset';
const App = () => {
	return (
		<Container>
			<Home />
			<Skillset />
			<Projects />
		</Container>
	);
};

//TODO: fix project button for responsive
//TODO: fix chips for responsive (let them collapse) // grid

const Container = styled.div`
	margin-top: 30px;

	@media ${device.mobile} {
		margin-top: 60px;
	}

	@media ${device.tablet} {
		margin-top: 90px;
	}
`;

export default App;
