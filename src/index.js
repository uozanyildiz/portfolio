import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Projects from './components/Projects/Projects';

const mainTheme = {
	colors: {
		primary: '#6E3CBC',
		secondary: '#6E3CBC',
		secondaryDark: '#7267CB',
		background: '#0F0E0E',
		secondaryBackground: '#6E3CBC',
		white: '#fff',
	},
};

//Global style for project
const GlobalTheme = createGlobalStyle`
	* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
	}


	body {
		font-family: 'Raleway', sans-serif;
		background-color: #0F0E0E;
		color: white;
	}

	#root{
		margin: 0;
		width: 100%;
	}
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalTheme />
		<Router>
			<ThemeProvider theme={mainTheme}>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path='/projects' element={<Projects />} />
				</Routes>
			</ThemeProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
