import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const container = {
	hidden: {},
	visible: {
		transition: { staggerChildren: 0.2 },
	},
};

const projectVariant = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, blurb, github, demo }) => {
	const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
	const projectTitle = title.split(" ").join("-").toLowerCase();

	return (
		<motion.div variants={projectVariant} className="relative">
			<div className={overlayStyles}>
				<p className="2xl font-playfair">
					{title ? title : "Work in Progress..."}
				</p>
				<p className="mt-7">{blurb ? blurb : "Coming soon!"}</p>
				<br />
				<br />
				{github && (<a
				href={github}
				target="blank"
				rel="nonreferrer"
			>
				<FontAwesomeIcon icon={faGithub} size="2x" />
			</a>)}
			{demo && (
				<a
					href={demo}
					target="blank"
					rel="nonreferrer"
				>
					<FontAwesomeIcon icon={faGlobe} size="2x" style={{ color: 'red' }} />
				</a>
			)}			</div>
			<img
				src={projectTitle ? `../assets/${projectTitle}.jpeg` : ""}
				alt={projectTitle ? projectTitle : "Work in Progress..."}
			/>
		</motion.div>
	);
};

const Projects = () => {
	return (
		<section id="projects" className="pt-48 pb-48">
			{/* HEADINGS */}
			<motion.div
				className="md:w-2/4 mx-auto text-center"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.5 }}
				variants={{
					hidden: { opacity: 0, y: -50 },
					visible: { opacity: 1, y: 0 },
				}}
			>
				<div>
					<p className="font-playfair font-semibold text-4xl">
						MY <span className="text-red"> PRO</span>JECTS
					</p>
					<div className="flex justify-center mt-5">
						<LineGradient width="1/3" />
					</div>
				</div>
				<div>
					<p className="mt-10 mb-7">
						A selection of my recent projects, with links to live demos or
						codebases coming soon! You can see the technologies I employed in my
						builds on my{" "}
						<a
							href="https://www.github.com/matt-arofin"
							target="_blank"
							rel="noreferrer"
							className="text-red"
						>
							{" "}
							Github{" "}
						</a>
						.
					</p>
				</div>
			</motion.div>

			{/* PROJECTS */}
			<div className="flex justify-center">
				<motion.div
					className="sm:grid sm:grid-cols-3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={container}
				>
					{/* ROW 1 */}
					<div
						className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px]
          text-2xl font-playfair font-semibold"
					>
						BEAUTIFUL USER INTERFACES
					</div>
					<Project
						title="Project 1"
						blurb="FE: Responsive Portfolio Website"
						github="http://www.github.com/matt-arofin/portfolio"
					/>
					<Project
						title="Project 2"
						blurb="FE: Fashion Line Website"
						github="https://github.com/Teetwothefirst/Younass"
					/>

					{/* ROW 2 */}
					<Project title="Project 3" 
					blurb="FE: Founder's Friday Clone"
					github="https://github.com/Teetwothefirst/foundersFriday"
					/>
					<Project title="Project 4" />
					{/* <Project title="Project 5" /> */}

					{/* ROW 3 */}
					{/* <Project title="Project 6" />
					<Project title="Project 7" /> */}

					<div
						className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px]
          text-2xl font-playfair font-semibold"
					>
						SMOOTH USER EXPERIENCE
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Projects;
