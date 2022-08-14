import React from 'react';
import App from './App';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';

const mainTheme = {
	breakpoints: {
		mobile: '480px',
		tablet: '768px',
		laptop: '1024px',
		desktop: '1200px',
	},
	colors: {
		primary: '#6E3CBC',
		secondary: '#6E3CBC',
		secondaryDark: '#7267CB',
		background: '#0F0E0E',
		lightBackground: '#4E4E4E',
		secondaryBackground: '#6E3CBC',
		white: '#fff',
	},
};

//Global style for project
const GlobalTheme = createGlobalStyle`
	* {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	vertical-align: baseline;
	scroll-behavior: smooth;
	}


	html, body {
		font-family: 'Raleway', sans-serif;
		background-color: #0F0E0E;
		color: white;
	}
`;

ReactDOM.render(
	<React.StrictMode>
		<GlobalTheme />
		<ThemeProvider theme={mainTheme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
