import React from 'react';
import '../styles/Projects.css';

const projectsList = [
	{
		title: 'Calculator',
		description:
			'A simple calculator application built with JavaScript.',
		imageUrl: 'https://i.imgur.com/KV7mTAK.png',
		technologies: 'HTML, CSS, JavaScript',
		githubUrl:
			'https://github.com/davesheinbein/calculator',
	},
	{
		title: 'Fun Functionalities',
		description:
			'A collection of experimental functionalities and animations.',
		imageUrl: 'https://i.imgur.com/l19QzZ6.png',
		technologies: 'HTML, CSS, JavaScript, React, Framer',
		githubUrl:
			'https://github.com/davesheinbein/fun-functionalities',
	},
	{
		title: 'Netflix Clone',
		description:
			'A Netflix clone application built with React.',
		imageUrl: 'https://i.imgur.com/13EPwv3.png',
		technologies: 'HTML, CSS, JavaScript, React, Firebase',
		githubUrl:
			'https://github.com/davesheinbein/netflix-clone-ds',
	},
	{
		title: 'Spotify Clone',
		description:
			'A front-end UI Spotify clone utilizing React.',
		imageUrl: 'https://i.imgur.com/gkDm6Sp.png',
		technologies:
			'HTML, CSS, JavaScript, React, Spotify API',
		githubUrl:
			'https://github.com/davesheinbein/spotify-clone',
	},
];

const Projects = () => {
	return (
		<section id='projects' className='projects'>
			<h2>Featured Projects</h2>
			<div className='projects-container'>
				{projectsList.map((project, index) => (
					<div className='project-card' key={index}>
						<img
							src={project.imageUrl}
							alt={project.title}
						/>
						<div className='project-info'>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
							<a
								href={project.githubUrl}
								className='see-more'
								target='_blank'
								rel='noopener noreferrer'
							>
								See more &rarr;
							</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Projects;
