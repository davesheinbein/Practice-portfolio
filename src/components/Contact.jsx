import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		enquiry: '',
		message: '',
	});
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState('');

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const validateForm = () => {
		let errors = {};
		if (!formData.name) errors.name = 'Required';
		if (!formData.email) errors.email = 'Required';
		else if (!/\S+@\S+\.\S+/.test(formData.email))
			errors.email = 'Invalid email address';
		if (!formData.message) errors.message = 'Required';
		else if (formData.message.length < 25)
			errors.message = 'Must be at least 25 characters';
		setErrors(errors);
		return Object.keys(errors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		setStatus('loading');
		setTimeout(() => {
			if (Math.random() > 0.5) {
				setStatus('success');
				alert(
					`All good! Thanks for your submission ${formData.name}`
				);
				setFormData({
					name: '',
					email: '',
					enquiry: '',
					message: '',
				});
			} else {
				setStatus('error');
				alert(
					'Oops! Something went wrong, please try again later'
				);
			}
		}, 1000);
	};

	return (
		<section id='contact' className='contact'>
			<h2>Contact Me</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						name='name'
						placeholder='Name'
						value={formData.name}
						onChange={handleChange}
						className={errors.name ? 'error' : ''}
					/>
				</div>
				<div>
					{errors.name && <small>{errors.name}</small>}
				</div>
				<div>
					<input
						type='email'
						name='email'
						placeholder='Email'
						value={formData.email}
						onChange={handleChange}
						className={errors.email ? 'error' : ''}
					/>
				</div>
				<div>
					{errors.email && <small>{errors.email}</small>}
				</div>
				<div>
					<select
						name='enquiry'
						value={formData.enquiry}
						onChange={handleChange}
					>
						<option value=''>Select an enquiry type</option>
						<option value='general'>General</option>
						<option value='project'>Project</option>
					</select>
				</div>
				<div>
					<textarea
						name='message'
						placeholder='Your message'
						value={formData.message}
						onChange={handleChange}
						className={errors.message ? 'error' : ''}
					/>
				</div>
				<div>
					{errors.message && (
						<small>{errors.message}</small>
					)}
				</div>
				<button type='submit' className='submit-button'>
					{status === 'loading' ? 'Loading...' : 'Submit'}
				</button>
			</form>
		</section>
	);
};

export default Contact;
