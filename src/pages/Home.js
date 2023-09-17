import { useState } from 'react';

export default function App() {
	const [aboutOpen, setAboutOpen] = useState(false);
	const [projectOpen, setProjectOpen] = useState(false);
	const [contactOpen, setContactOpen] = useState(false);

	const handleOpenAbout = () => {
		setAboutOpen(!aboutOpen);
	};

	const handleOpenProject = () => {
		setProjectOpen(!projectOpen);
	};

	const handleOpenContact = () => {
		setContactOpen(!contactOpen);
	};

	const handleLinkClick = (url) => {
		window.open(url, "_blank", "noreferrer")
	}

	return (
		<div className="App">
			<h1>LAURA COHEN</h1>
			<h3>SOFTWARE ENGINEER</h3>
			<div className="sections">
				<button className="aboutBtn" onClick={handleOpenAbout}>
					ABOUT ME
				</button>
				{aboutOpen ? (
					<div className="about">
						I am a Musician and Administrator turned Front End Engineer,
						leveraging my creativity and organizational skills to prioritize an
						aesthetically pleasing design and easy-to-read code. My proofreading
						and editing experience has transferred to a knack for debugging, and
						my time-management skills enable me to plan projects effectively. I
						am both a lifelong learner and natural teacher, so I am always eager
						to collaborate with others.
					</div>
				) : (
					""
				)}
				<button className="projectsBtn" onClick={handleOpenProject}>
					PROJECTS
				</button>
				{projectOpen ? (
					<div className="projects">
						<div className="project">
							<h4>MASTERMIND GAME</h4>
							<h5>BUILT WITH</h5>
							<div>HTML, CSS, and Javascript</div>
							<h5>DESCRIPTION</h5>
							<div>Guess the Secret Code</div>
							<h5>LINKS</h5>
							<div
								className="link"
								onClick={() => handleLinkClick('https://github.com/lcohen730/Mastermind_Game_GA_Unit_1_Project')}
							>
								GitHub Repository
							</div>
							<br />
							<div
								className="link"
								onClick={() => handleLinkClick('https://stately-gumdrop-33cd7c.netlify.app/')}
							>
								Deployed Link
							</div>
							<br />
						</div>
						<div className="project">
							<h4>SHOPPING CART API</h4>
							<h5>BUILT WITH</h5>
							<div>Javascript (Node.js, Express, Mongoose, and Jest)</div>
							<h5>DESCRIPTION</h5>
							<div>RESTful API with CRUD Functionality for Users, Items, and Shopping</div>
							<div>Cart</div>
							<h5>LINKS</h5>
							<div
								className="link"
								onClick={() => handleLinkClick('https://github.com/lcohen730/shopping-cart-api')}
							>
								GitHub Repository
							</div>
							<br />
						</div>
						<div className="project">
							<h4>CURIOSITY SHOPPE</h4>
							<h5>BUILT WITH</h5>
							React, Javascript (ES6), SCSS, Gulp, and Webpack
							<h5>DESCRIPTION</h5>
							Fullstack E-Commerce Application Implementing User Authentication
							and CRUD Functionality
							<h5>LINKS</h5>
							<div
								className="link"
								onClick={() => handleLinkClick('https://github.com/lcohen730/ye-olde-curiosity-shoppe')}
							>
								Github Repository
							</div>
							<br />
							<div
								className="link"
								onClick={() => handleLinkClick('https://curiosity.lauracohen.me/')}
							>
								Deployed Link
							</div>
						</div>
					</div>
				) : (
					""
				)}
				<button className="contactBtn" onClick={handleOpenContact}>
					CONTACT
				</button>
				{contactOpen ? (
					<div className="contact">
						<h4>PHONE</h4>
						(860) 559-9574
						<h4>EMAIL</h4>
						lcohen730@gmail.com
						<h4
							className="link"
							onClick={() => handleLinkClick('https://www.linkedin.com/in/lauracohen2/')}

						>
							LINKEDIN
						</h4>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
}
