import { useState, useRef, useEffect } from 'react';
/* import ScrollToTop from '../components/ScrollToTop/ScrollToTop'; */

export default function App() {
	/* const [aboutOpen, setAboutOpen] = useState(false);
	const [projectOpen, setProjectOpen] = useState(false);
	const [contactOpen, setContactOpen] = useState(false); */
	const [showBtn, setShowBtn] = useState(false);

	const about = useRef(null);
	const projects = useRef(null);
	const contact = useRef(null);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 300) {
				setShowBtn(true);
			}
			else {
				setShowBtn(false);
			}
		})
	}, []);

	const scrollToSection = (sectionRef) => {
		window.scrollTo({
			top: sectionRef.current.offsetTop,
			behavior: "smooth",
		});
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	/* const handleOpenAbout = () => {
		setAboutOpen(!aboutOpen);
	};

	const handleOpenProject = () => {
		setProjectOpen(!projectOpen);
	};

	const handleOpenContact = () => {
		setContactOpen(!contactOpen);
	}; */

	const handleLinkClick = (url) => {
		window.open(url, "_blank", "noreferrer")
	}

	return (
		<div className="App">
			<div className="menu">
				<div onClick={() => scrollToSection(about)}>ABOUT ME</div>
				<div onClick={() => scrollToSection(projects)}>PROJECTS</div>
				<div onClick={() => scrollToSection(contact)}>CONTACT</div>
			</div>
			{/* <img
				className="homePic"
				src="https://i.imgur.com/GWVaGQO.jpg"
				alt="Barcelonnette Field"
			/> */}
			<div className="imageContainer">
				<h1>LAURA COHEN</h1>
				<h3>SOFTWARE ENGINEER</h3>
			</div>
			<div ref={about} className="header">ABOUT ME</div>
			<div className="about">
				<img
					src="https://i.imgur.com/nNaRrX4.jpg"
					alt="me"
				/>
				<div>
					I am a Musician and Administrator turned Front End Engineer,
					leveraging my creativity and organizational skills to prioritize an
					aesthetically pleasing design and easy-to-read code. My proofreading
					and editing experience has transferred to a knack for debugging, and
					my time-management skills enable me to plan projects effectively. I
					am both a lifelong learner and natural teacher, so I am always eager
					to collaborate with others.
				</div>
			</div>
			<div ref={projects} className="header">PROJECTS</div>
			<div className="projects">
				<div className="project">
					<div className="projectText">
						<h4>MASTERMIND GAME</h4>
						<h5>BUILT WITH</h5>
						<div className="normText">
							HTML, CSS, and Javascript
						</div>
						<h5>DESCRIPTION</h5>
						<div className="normText">
							Guess the Secret Code
						</div>
						<h5>LINKS</h5>
						<div
							className="link"
							onClick={() => handleLinkClick('https://github.com/lcohen730/Mastermind_Game_GA_Unit_1_Project')}
						>
							GitHub Repository
						</div>
						<div
							className="link"
							onClick={() => handleLinkClick('https://stately-gumdrop-33cd7c.netlify.app/')}
						>
							Deployed Link
						</div>
						<br />
					</div>
					<img
						src="https://i.imgur.com/TzPThGo.png"
						alt="mastermind"
					/>
				</div>
				<div className="project">
					<div className="projectText">
						<h4>SHOPPING CART API</h4>
						<h5>BUILT WITH</h5>
						<div className="normText">
							Javascript (Node.js, Express, Mongoose, and Jest)
						</div>
						<h5>DESCRIPTION</h5>
						<div className="normText">
							RESTful API with CRUD Functionality for Users, Items, and Shopping Cart
						</div>
						<h5>LINKS</h5>
						<div
							className="link"
							onClick={() => handleLinkClick('https://github.com/lcohen730/shopping-cart-api')}
						>
							GitHub Repository
						</div>
					</div>
					<img
						src="https://i.imgur.com/7Ud3DbK.png"
						alt="shopping cart"
					/>
					<br />
				</div>
				<div className="project">
					<div className="projectText">
						<h4>CURIOSITY SHOPPE</h4>
						<h5>BUILT WITH</h5>
						<div className="normText">
							React, Javascript (ES6), SCSS, Gulp, and Webpack
						</div>
						<h5>DESCRIPTION</h5>
						<div className="normText">
							Fullstack E-Commerce Application Implementing User Authentication and CRUD Functionality
						</div>
						<h5>LINKS</h5>
						<div
							className="link"
							onClick={() => handleLinkClick('https://github.com/lcohen730/ye-olde-curiosity-shoppe')}
						>
							Github Repository
						</div>
						<div
							className="link"
							onClick={() => handleLinkClick('https://curiosity.lauracohen.me/')}
						>
							Deployed Link
						</div>
					</div>
					<img
						src="https://i.imgur.com/c7vvcn0.png"
						alt="curiosity shoppe"
					/>
				</div>
				<div className="project">
					<div className="projectText">
						<h4>BUCKETS AND BEYOND</h4>
						<h5>BUILT WITH</h5>
						<div className="normText">
							React, Javascript (ES6), SCSS, Gulp, and Webpack
						</div>
						<h5>DESCRIPTION</h5>
						<div className="normText">
							<div>Eight-Person Team Project Inspired by Home Depot</div>
							<div>Fullstack E-Commerce Application Implementing User Authentication and CRUD Functionality</div>
							<div>My Roles: Lead Designer, Front-End Development, Wireframes, Documenter, Proofreader</div>
						</div>
						<h5>LINKS</h5>
						<div
							className="link"
							onClick={() => handleLinkClick('https://github.com/jillianguerra/home-depot')}
						>
							Github Repository
						</div>
						<div
							className="link"
							onClick={() => handleLinkClick('https://buckets-and-beyond.tech/home')}
						>
							Deployed Link
						</div>
					</div>
					<img
						src="https://i.imgur.com/RESat2z.png"
						alt="buckets and beyond"
					/>
				</div>
			</div>
			<div ref={contact} className="header">CONTACT</div>
			<div className="contact">
				<div className="contactItem">
					{/* <h4>EMAIL</h4> */}
					<h4>
						<img
							src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Email-256.png"
							alt="email logo"
						/>
					</h4>
					<div className="normText">
						lcohen730@gmail.com
					</div>
				</div>
				<div className="contactItem">
					<h4
						className="link"
						onClick={() => handleLinkClick('https://www.linkedin.com/in/lauracohen2/')}
					>
						{/* LINKEDIN */}
						<img
							src="https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-256.png"
							alt="linkedin logo"
						/>
					</h4>
				</div>
				{/* <div className="lineBreak"></div> */}
				<div className="contactItem">
					<h4
						className="link"
						onClick={() => handleLinkClick('https://docs.google.com/document/d/11KKygqRKxsN13hDYA7mDdjUkZBifjNct45Z8mqoT6Nc/edit?usp=sharing')}
					>
						{/* RESUME */}
						<img
							src="https://cdn2.iconfinder.com/data/icons/business-and-finance-383/30/resume_business_cv_work_job_curriculum-_49-256.png"
							alt="resume logo"
						/>
					</h4>
				</div>
			</div>
			{/* <h1>LAURA COHEN</h1>
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
							<div className="normText">
								HTML, CSS, and Javascript
							</div>
							<h5>DESCRIPTION</h5>
							<div className="normText">
								Guess the Secret Code
							</div>
							<h5>LINKS</h5>
							<div
								className="link"
								onClick={() => handleLinkClick('https://github.com/lcohen730/Mastermind_Game_GA_Unit_1_Project')}
							>
								GitHub Repository
							</div>
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
							<div className="normText">
								Javascript (Node.js, Express, Mongoose, and Jest)
							</div>
							<h5>DESCRIPTION</h5>
							<div className="normText">
								RESTful API with CRUD Functionality for Users, Items, and Shopping Cart
							</div>
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
							<div className="normText">
								React, Javascript (ES6), SCSS, Gulp, and Webpack
							</div>
							<h5>DESCRIPTION</h5>
							<div className="normText">
								Fullstack E-Commerce Application Implementing User Authentication and CRUD Functionality
							</div>
							<h5>LINKS</h5>
							<div
								className="link"
								onClick={() => handleLinkClick('https://github.com/lcohen730/ye-olde-curiosity-shoppe')}
							>
								Github Repository
							</div>
							<div
								className="link"
								onClick={() => handleLinkClick('https://curiosity.lauracohen.me/')}
							>
								Deployed Link
							</div>
						</div>
						<div className="project">
							<h4>BUCKETS AND BEYOND</h4>
							<h5>BUILT WITH</h5>
							<div className="normText">
								React, Javascript (ES6), SCSS, Gulp, and Webpack
							</div>
							<h5>DESCRIPTION</h5>
							<div className="normText">
								<div>Eight-Person Team Project Inspired by Home Depot</div>
								<div>Fullstack E-Commerce Application Implementing User Authentication and CRUD Functionality</div>
								<div>My Roles: Lead Designer, Front-End Development, Wireframes, Documenter, Proofreader</div>
							</div>
							<h5>LINKS</h5>
							<div
								className="link"
								onClick={() => handleLinkClick('https://github.com/jillianguerra/home-depot')}
							>
								Github Repository
							</div>
							<div
								className="link"
								onClick={() => handleLinkClick('https://buckets-and-beyond.tech/home')}
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
						<div className="normText">
							(860) 559-9574
						</div>
						<h4>EMAIL</h4>
						<div className="normText">
							lcohen730@gmail.com
						</div>
						<h4
							className="link"
							onClick={() => handleLinkClick('https://www.linkedin.com/in/lauracohen2/')}
						>
							LINKEDIN
						</h4>
						<div className="lineBreak"></div>
						<h4
							className="link"
							onClick={() => handleLinkClick('https://docs.google.com/document/d/11KKygqRKxsN13hDYA7mDdjUkZBifjNct45Z8mqoT6Nc/edit?usp=sharing')}
						>
							RESUME
						</h4>
					</div>
				) : (
					""
				)}
			</div> */}
			{/* <ScrollToTop className="scrollBtnPosition" /> */}
			{/* {showBtn && <div className="scrollToTopBtn" onClick={scrollToTop}>^</div>} */}
			{
				showBtn &&
				<img
					src="https://cdn3.iconfinder.com/data/icons/arrow-outline-8/32/up-256.png"
					alt="up arrow"
					className="scrollToTopBtn"
					onClick={scrollToTop}
				/>
			}
		</div>
	);
}
