import React from 'react';
import Header from './components/Header';
import LandingSection from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
	return (
		<div>
			<Header />
			<LandingSection />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
