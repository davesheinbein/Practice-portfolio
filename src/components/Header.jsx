import React, { useEffect, useState } from 'react';
import '../styles/Header.css';

const Header = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
	const [visible, setVisible] = useState(true);

	const socialLinks = [
		{ name: 'GitHub', url: 'https://github.com' },
		{ name: 'LinkedIn', url: 'https://linkedin.com' },
		{ name: 'X', url: 'https://x.com' },
		{ name: 'Instagram', url: 'https://instagram.com' },
		{ name: 'Facebook', url: 'https://facebook.com' },
	];

	const handleScroll = () => {
		const currentScrollPos = window.pageYOffset;
		setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
		setPrevScrollPos(currentScrollPos);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, visible, handleScroll]);

	return (
		<header style={{ top: visible ? '0' : '-60px' }}>
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
