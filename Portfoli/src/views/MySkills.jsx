import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
	const isAboveMediumScreens = useMediaQuery("min-width: 1060px");

	return (
		<section id="skills" className="pt-10 pb-24">
			{/* HEADER & IMAGE SECTION */}
			<div className="md:flex md:justify-between md:gap-16 mt-32">
				<motion.div
					className="md:w-1/3"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className="font-playfair font-semibold text-4xl mb-5">
						MY <span className="text-red"> SKILLS</span>
					</p>
					<LineGradient width="w-1/3" />
					<p className="mt-10 mb-7">
						I'm a curious coder and expert learner; eager to try my hand at new and emerging software technologies, with a growing list of proficiencies across platforms, languages and libraries. Here are just a few:
					</p>
				</motion.div>

				<div className="mt-16 md:mt-0">
					{isAboveMediumScreens ? (
						<div
							className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
						>
							<img
								src="../assets/skills-image.png"
								alt="skills"
								className="z-10"
							/>
						</div>
					) : (
						<img
							src="../assets/skills-image.png"
							alt="skills"
							className="z-10"
						/>
					)}
				</div>
			</div>

			{/* SKILLS */}
			<div className="md:flex md:justify-between mt-16 gap-32">
				{/* EXPERIENCE */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10">
							<p className="font-playfair font-semibold text-5xl">01</p>
							<p className="font-playfair font-semibold text-3xl mt-3">
								Front-End
							</p>
						</div>
						<div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
					</div>
					<p className="mt-5 flex">
						<ul>
							<li>Tailwind</li>
							<li>Vite</li>
							<li>ReactJS</li>
							
						</ul>
            
            <ul className="pl-20">
				<li>React Router</li>
				<li>CSS</li>
				<li>HTML</li>
            </ul>
					</p>
				</motion.div>

				{/* INNOVATIVE */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10">
							<p className="font-playfair font-semibold text-5xl">02</p>
							<p className="font-playfair font-semibold text-3xl mt-3">
								Back-End
							</p>
						</div>
						<div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
					</div>
					<p className="mt-5 flex">
						<ul>
							<li>Nodejs</li>
							<li>Express</li>
							<li>Mongo DB</li>
							<li>SQL</li>
						</ul>{" "}

            <ul className="pl-20">
              {/* <li>MongoDB</li>
							<li>Swagger</li>
							<li>Spring Boot</li>
							<li>Jest</li> */}
            </ul>
					</p>
				</motion.div>

				{/* IMAGINATIVE */}
				<motion.div
					className="md:w-1/3 mt-10"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className="relative h-32">
						<div className="z-10">
							<p className="font-playfair font-semibold text-5xl">03</p>
							<p className="font-playfair font-semibold text-3xl mt-3">Tools</p>
						</div>
						<div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
					</div>
					<p className="mt-5 flex">
						<ul>
							<li>Python</li>
							<li>C</li>
							<li>JavaScript</li>
							<li>Docker</li>
							<li>GDScript</li>
						</ul>

            <ul className="pl-20">
							<li>Git</li>
							<li>Jira</li>
							<li>Zoom</li>
							<li>Slack</li>
							<li>Command Line</li>
            </ul>
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default MySkills;
