import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { device } from './components/device';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Skillset from './components/Skillset/Skillset';

ReactGA.initialize('G-RG2VSGT5B0');

const App = () => {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname + window.location.search);
	}, []);

	return (
		<Container>
			<Home />
			<Skillset />
			<Projects />
		</Container>
	);
};

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
