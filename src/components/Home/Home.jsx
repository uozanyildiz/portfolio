import React from 'react';
import { Highlight, Link } from '../Shared/Shared.styled';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import {
	HomeAbout,
	HomeButtonContainer,
	HomeDescription,
	HomeDescriptionImage,
	HomeDescriptionText,
	HomeTitle,
} from './Home.styled';

const linkedInURL = process.env.REACT_APP_LINKEDIN_URL;
const githubURL = process.env.REACT_APP_GITHUB_URL;
const mailAddress = `mailto:${process.env.REACT_APP_MAIL_ADDRESS}`;

const Home = () => {
	return (
		<HomeAbout>
			<HomeTitle>
				hello, i'm <Highlight>ozan</Highlight>. it's nice to meet you!
			</HomeTitle>
			<HomeDescription>
				<HomeDescriptionImage
					src='img/me.png'
					alt='Me, when building some very important web sites in 2003 :)'
				/>
				<HomeDescriptionText>
					I'm a passionate front-end developer looking to gather more experience
					and put my skills to use in a professional environment.
					<br />
					<br />I spent my last year working on front-end web development and
					building personal projects. I like to bring ideas from scratch and
					turn them into fully working applications. I specialize in front-end
					development, but I also have a basic understanding of back-end
					development as well.
					<HomeButtonContainer>
						<Link target='_blank' rel='noreferrer' href={linkedInURL}>
							<FaLinkedin />
						</Link>
						<Link target='_blank' rel='noreferrer' href={githubURL}>
							<FaGithubSquare />
						</Link>
						<Link target='_blank' rel='noreferrer' href={mailAddress}>
							<AiFillMail />
						</Link>
					</HomeButtonContainer>
				</HomeDescriptionText>
			</HomeDescription>
		</HomeAbout>
	);
};

export default Home;
