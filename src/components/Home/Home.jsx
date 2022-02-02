import React from 'react';
import styled from 'styled-components';
import Avatar from '../../assets/me.png';

const getAllTechIcons = () => {
	const images = require.context(
		'../../assets/tech-icons',
		false,
		/\.(png|jpe?g|svg)$/
	);
	return images.keys().map(images);
};

const Home = () => {
	const techIcons = getAllTechIcons();
	const linkedInURL = process.env.REACT_APP_LINKEDIN_URL;
	const githubURL = process.env.REACT_APP_GITHUB_URL;
	const mailAddress = `mailto:${process.env.REACT_APP_MAIL_ADDRESS}`;
	return (
		<>
			<HomeAbout>
				<HomeTitle>
					hello, i'm <Highlight>ozan</Highlight>. it's nice to meet you!
				</HomeTitle>
				<HomeDescription>
					<HomeDescriptionImage src={Avatar} alt='' />
					<HomeDescriptionText>
						I'm a passionate front-end developer looking to gather more
						experience and put my skills to use in a professional environment.
						<br />
						<br />I spent my last year working on front-end web development and
						building personal projects. I like to bring ideas from scratch and
						turn them into fully working applications. I specialize in front-end
						development, but I also have a basic understanding of back-end
						development as well.
						<br />
						<br />
						<br />
						You can reach out to me with{' '}
						<Link target='_blank' rel='noreferrer' href={linkedInURL}>
							LinkedIn
						</Link>
						,{' '}
						<Link target='_blank' rel='noreferrer' href={githubURL}>
							GitHub
						</Link>{' '}
						or{' '}
						<Link target='_blank' rel='noreferrer' href={mailAddress}>
							e-mail
						</Link>
						.
					</HomeDescriptionText>
				</HomeDescription>
			</HomeAbout>
			<TechContainer>
				<span>My tech stack:</span>
				{techIcons.map((icon) => (
					<TechIcon src={icon}></TechIcon>
				))}
			</TechContainer>
		</>
	);
};

const Link = styled.a`
	transition: 0.1s ease-in;
	color: ${({ theme }) => theme.colors.secondaryDark};
	font-weight: bold;

	&:link {
		text-decoration: underline;
	}

	&:visited {
		text-decoration: none;
	}

	&:hover {
		color: ${({ theme }) => theme.colors.secondary};
	}
`;

const HomeAbout = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 128px;
`;

const HomeTitle = styled.h2`
	font-size: 4rem;
	text-transform: lowercase;
	text-align: center;
`;

const Highlight = styled.span`
	color: ${({ theme }) => theme.colors.secondaryDark};
`;

const HomeDescription = styled.div`
	padding: 80px 80px;
	font-size: 1.5rem;
	display: flex;
	justify-content: center;
	gap: 80px;
`;

const HomeDescriptionText = styled.p``;

const HomeDescriptionImage = styled.img`
	max-width: 25%;
	height: 25%;
`;

const TechContainer = styled.div`
	width: 100%;
	height: 13vh;
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 48px;
	background-color: #6e3cbc;
	font-size: 1.5rem;
`;

const TechIcon = styled.img`
	height: 64px;
	transition: 0.3s ease-in-out;

	&:hover {
		transform: translateY(-16px);
		filter: brightness(1.2);
	}
`;

export default Home;
