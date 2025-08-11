import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
/* import ScrollToTop from '../components/ScrollToTop/ScrollToTop'; */

export default function App() {
	const [showBtn, setShowBtn] = useState(false);
	const [msgSubmitted, setMsgSubmitted] = useState(false);

	const about = useRef(null);
	const projects = useRef(null);
	const contact = useRef(null);
	const form = useRef();

	const serviceId = process.env.EMAILJS_SERVICE_ID;
	const templateId = process.env.EMAILJS_TEMPLATE_ID;
	const publicKey = process.env.EMAILJS_PUBLIC_KEY;

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

	const handleLinkClick = (url) => {
		window.open(url, "_blank", "noreferrer")
	}

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(serviceId, templateId, form.current, publicKey)
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});

		setMsgSubmitted(true);
	};

	const newForm = () => {
		setMsgSubmitted(false);
	}

	return (
		<div className="App">
			<div className="menu">
			{/* <div className={showBtn ? "menuScroll" : "menu"}> */}
				<div onClick={() => scrollToSection(about)}>ABOUT ME</div>
				<div onClick={() => scrollToSection(projects)}>PROJECTS</div>
				<div onClick={() => scrollToSection(contact)}>CONTACT</div>
			</div>
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
						<div className="normText">
							Guess the Secret Code
						</div>
						<h5>BUILT WITH</h5>
						{/* <div className="normText">
							HTML, CSS, and Javascript */}
						<div className="skills">
							<div className="skillContainer">
								<img
									src="https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/HTML5-256.png"
									alt="html5 logo"
								/>
								<p>HTML</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://cdn0.iconfinder.com/data/icons/logos-21/40/CSS3-256.png"
									alt="css3 logo"
								/>
								<p>CSS</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png"
									alt="js logo"
								/>
								<p>Javascript</p>
							</div>
						</div>
						<h5>LINKS</h5>
						<div className="links">
							<img
								src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png"
								alt="github logo"
								onClick={() => handleLinkClick('https://github.com/lcohen730/Mastermind_Game_GA_Unit_1_Project')}
							/>
							<img
								src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/website-256.png"
								alt="deployed website logo"
								onClick={() => handleLinkClick('https://stately-gumdrop-33cd7c.netlify.app/')}
							/>
						</div>
						{/* <h5>BUILT WITH</h5>
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
						</div> */}
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
						<div className="normText">
							RESTful API with CRUD Functionality for Users, Items, and Shopping Cart
						</div>
						<h5>BUILT WITH</h5>
						<div className="skills">
							<div className="skillContainer">
								<img
									src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png"
									alt="js logo"
								/>
								<p>Javascript</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/node-js-256.png"
									alt="node js logo"
								/>
								<p>Node JS</p>
							</div>
							{/* <div className="skillContainer">
								<img
									src="https://expressjs.com/images/express-facebook-share.png"
									alt="express logo"
								/>
							</div> */}
							<div className="skillContainer">
								<img
									src="https://cdn4.iconfinder.com/data/icons/logos-3/512/mongodb-2-256.png"
									alt="mongo db logo"
								/>
								<p>Mongo DB</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/jest-256.png"
									alt="jest logo"
								/>
								<p>Jest</p>
							</div>
						</div>
						{/* <div className="normText">
							Javascript (Node.js, Express, Mongoose, and Jest)
						</div> */}
						<h5>LINKS</h5>
						<div className="links">
							<img
								src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png"
								alt="github logo"
								onClick={() => handleLinkClick('https://github.com/lcohen730/shopping-cart-api')}
							/>
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
						<div className="normText">
							Fullstack E-Commerce Application Implementing User Authentication and CRUD Functionality
						</div>
						<h5>BUILT WITH</h5>
						<div className="skills">
							<div className="skillContainer">
								<img
									src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/react-256.png"
									alt="react logo"
								/>
								<p>React</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png"
									alt="js logo"
								/>
								<p>Javascript</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://sass-lang.com/assets/img/styleguide/seal-black.png"
									alt="scss logo"
								/>
								<p>SCSS</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/gulp-256.png"
									alt="gulp logo"
								/>
								<p>Gulp</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/webpack-256.png"
									alt="webpack logo"
								/>
								<p>Webpack</p>
							</div>
						</div>
						{/* <div className="normText">
							React, Javascript, SCSS, Gulp, and Webpack
						</div> */}
						<h5>LINKS</h5>
						<div className="links">
							<img
								src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png"
								alt="github logo"
								onClick={() => handleLinkClick('https://github.com/lcohen730/ye-olde-curiosity-shoppe')}
							/>
							<img
								src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/website-256.png"
								alt="deployed website logo"
								onClick={() => handleLinkClick('https://curiosity.lauracohen.live/')}
							/>
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
						<ul className="normText">
							<li>Eight-Person Team Project Inspired by Home Depot</li>
							<li>Fullstack E-Commerce Application Implementing User Authentication and CRUD Functionality</li>
							<li>My Roles: Lead Designer, Front-End Development, Wireframes, Documenter, Proofreader</li>
						</ul>
						<h5>BUILT WITH</h5>
						<div className="skills">
							<div className="skillContainer">
								<img
									src="https://cdn3.iconfinder.com/data/icons/font-awesome-brands/512/react-256.png"
									alt="react logo"
								/>
								<p>React</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-javascript-256.png"
									alt="js logo"
								/>
								<p>Javascript</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://sass-lang.com/assets/img/styleguide/seal-black.png"
									alt="scss logo"
								/>
								<p>SCSS</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/gulp-256.png"
									alt="gulp logo"
								/>
								<p>Gulp</p>
							</div>
							<div className="skillContainer">
								<img
									src="https://cdn3.iconfinder.com/data/icons/teenyicons-solid-vol-3/15/webpack-256.png"
									alt="webpack logo"
								/>
								<p>Webpack</p>
							</div>
						</div>
						{/* <div className="normText">
							React, Javascript, SCSS, Gulp, and Webpack
						</div> */}
						<h5>LINKS</h5>
						<div className="links">
							<img
								src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png"
								alt="github logo"
								onClick={() => handleLinkClick('https://github.com/jillianguerra/home-depot')}
							/>
							{/* <img
								src="https://cdn2.iconfinder.com/data/icons/picol-vector/32/website-256.png"
								alt="deployed website logo"
								onClick={() => handleLinkClick('https://buckets-and-beyond.tech/home')}
							/> */}
						</div>
					</div>
					<img
						src="https://i.imgur.com/RESat2z.png"
						alt="buckets and beyond"
					/>
				</div>
			</div>
			<div ref={contact} className="header">CONTACT</div>
			{msgSubmitted ?
				<div className="emailForm">
					<p>MESSAGE SUBMITTED</p>
					<button onClick={newForm} className="formBtn">SEND ANOTHER MESSAGE</button>
				</div>
				:
				<form ref={form} onSubmit={sendEmail} className="emailForm">
					<label>NAME </label>
					<input type="text" name="user_name" /><br />
					<label>EMAIL </label>
					<input type="email" name="user_email" /><br />
					<div className="message">
						<label>MESSAGE </label>
						<textarea name="message" />
					</div>
					<input type="submit" value="SEND" className="formBtn" />
				</form>
			}
			<div className="contact">
				{/* <div className="contactItem"> */}
				{/* <h4>EMAIL</h4> */}
				{/* <h4>
						<img
							src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Email-256.png"
							alt="email logo"
						/>
					</h4>
					<div className="normText">
						lcohen730@gmail.com
					</div> */}
				{/* </div> */}
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
			{/* <ScrollToTop className="scrollBtnPosition" /> */}
			{/* {showBtn && <div className="scrollToTopBtn" onClick={scrollToTop}>^</div>} */}
			{
				showBtn &&
				<img
					src="https://cdn4.iconfinder.com/data/icons/essential-app-2/16/up-menu-arrow-botton-256.png"
					alt="up arrow"
					className="scrollToTopBtn"
					onClick={scrollToTop}
				/>
			}
		</div>
	);
}
