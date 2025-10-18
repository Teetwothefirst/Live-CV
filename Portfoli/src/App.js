import Navbar from "./views/Navbar";
import DotGroup from "./views/DotGroup";
import Landing from "./views/Landing";
import MySkills from "./views/MySkills";
import Projects from "./views/Projects";
import Experience from "./views/Experience";
import Contact from "./views/Contact";
import Footer from "./views/Footer";
import { useState, useEffect } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
	const [selectedPage, setSelectedPage] = useState("home");
	const [isTopOfPage, setIsTopOfPage] = useState(true);
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) setIsTopOfPage(true);
			if (window.scrollY !== 0) setIsTopOfPage(false);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="app bg-deep-blue">
			<Navbar
				isTopOfPage={isTopOfPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<div className="w-5/6 mx-auto md:h-full">
				{isAboveMediumScreens && (
					<DotGroup
						selectedPage={selectedPage}
						setSelectedPage={setSelectedPage}
					/>
				)}
        <Landing setSelectedPage={setSelectedPage} />
			</div>
			<LineGradient />
			<div className="w-5/6 mx-auto md:h-full md:mb-60">
				<MySkills />
			</div>
			<LineGradient />
			<div className="w-5/6 mx-auto">
				<Projects />
			</div>
			{/* Replacing Testimonials section with work experience - maybe just use quick summaries of key roles and accomplishments on projects */}
			<LineGradient />
			<div className="w-5/6 mx-auto">
				<Experience />
			</div>
			<LineGradient />
			<div className="w-5/6 mx-auto">
				<Contact />
			</div>
			<Footer />
		</div>
	);
}

export default App;
