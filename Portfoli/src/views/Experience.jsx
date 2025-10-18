import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const Experience = () => {
	const experienceStyles = "mx-auto relative max-w-[400px] h-[350px] flex flex-col flex-1 justify-start p-16 mt-48 before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 flex-1";

	return (
		<section id="experience" className="pt-32 pb-16">
			{/* HEADING */}
			<motion.div
				className="md:w-1/3 text-center md:text-left"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.5 }}
				transition={{ duration: 0.6 }}
				variants={{
					hidden: { opacity: 0, x: -50 },
					visible: { opacity: 1, x: 0 },
				}}
			>
				<p className="font-playfair font-semibold text-4xl mb-5">
					MY <span className="text-red"> EXPERIENCE</span>
				</p>
				<LineGradient width="mx-auto w-2/5" />
				<p className="mt-10">
					2+ years of development experience building, testing, deploying, scaling and maintaining projects from dynamic and responsive single page web applications to RESTful API servers with fully secured and implemented CRUD functionality.
				</p>
			</motion.div>
        {/* Add a button to download my resume? this section should be more concise so leave out wordy details */}

        {/* EXPERIENCES */}
        <div className="md:flex md:justify-between md:mx-auto gap-8">
          <motion.div
            className={`bg-blue ${experienceStyles}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-center text-4xl">Meticulous</p>
            <p className="text-center text-3/4xl">Detail-oriented approach that focuses on efficiently scoping and meeting project needs through effective communication and collaboration.
            </p>
          </motion.div>

          <motion.div
            className={`bg-red ${experienceStyles}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-center text-4xl">Innovative</p>
            <p className="text-center text-3/4xl">Excited to explore emerging technologies, passionate about building and learning in new areas of interest and rediscovering creative, efficient applications of existing resources.
            </p>
          </motion.div>

          <motion.div
            className={`bg-yellow ${experienceStyles}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="font-playfair text-center text-4xl">Collaborative</p>
            <p className="text-center text-3/4xl">Through a communicative, people-centered approach to development, I leverage agile methodology facilitated through technology to maximise outputs/deliverables on my teams.
            </p>
          </motion.div>
        </div>
		</section>
	);
};

export default Experience;
