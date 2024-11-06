import React from 'react';
import '../styles/Landing.css';

const Landing = () => {
	return (
		<section className='landing'>
			<a
				href='https://i.imgur.com/XMrVQmC.jpg'
				target='_blank'
				rel='noopener noreferrer'
			>
				<img
					src='https://i.imgur.com/XMrVQmC.jpg'
					alt='Avatar'
					className='avatar'
				/>
			</a>
			<h1>Hello, I am Pete!</h1>
			<p>A frontend developer specialized in React</p>
		</section>
	);
};

export default Landing;
