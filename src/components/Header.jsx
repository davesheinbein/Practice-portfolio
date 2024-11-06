import React from 'react';
import '../styles/Header.css';

const Header = () => {
	const socialLinks = [
		{ name: 'GitHub', url: 'https://github.com' },
		{ name: 'LinkedIn', url: 'https://linkedin.com' },
		{ name: 'X', url: 'https://x.com' },
		{ name: 'Instagram', url: 'https://instagram.com' },
		{ name: 'Facebook', url: 'https://facebook.com' },
	];

	return (
		<header>
			<nav>
				<ul className='social-links'>
					{socialLinks.map((link, index) => (
						<li key={index}>
							<a
								href={link.url}
								target='_blank'
								rel='noopener noreferrer'
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
				<ul className='internal-links'>
					<li>
						<a href='#projects'>Projects</a>
					</li>
					<li>
						<a href='#contact'>Contact Me</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
