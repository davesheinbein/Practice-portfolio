# Practice Portfolio (Contact Form)

A fully functional contact form built with React, styled with SCSS, and designed for use in a portfolio or personal website. This form allows users to submit their contact details, including name, email, inquiry type, and message, with real-time validation and error handling.

## Features

- **User-Friendly Interface**: Easy-to-use form fields for name, email, inquiry type, and message.
- **Real-Time Validation**: Fields are validated in real time with error messages for invalid or missing inputs.
- **Loading State**: A loading spinner is shown when the form is being submitted.
- **Success/Error Feedback**: Displays success or error messages after form submission.
- **Responsive Design**: The form is styled to be responsive across various screen sizes.
- **Styled Components**: The contact form and button are styled using SCSS for easy customization.

## Technologies Used

- **React**: Frontend JavaScript library for building user interfaces.
- **SCSS**: SASS CSS preprocessor used for styling the components.
- **JavaScript (ES6)**: For handling form logic and validation.
- **CSS Flexbox**: Used for centering elements and making the layout responsive.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/davesheinbein/practice-portfolio.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd practice-portfolio
   ```

3. **Install dependencies:**

   Make sure you have [Node.js](https://nodejs.org/) installed, then run the following:

   ```bash
   npm install
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   Your app should now be running at `http://localhost:3000`.

## How to Use

1. Fill in the fields with your name, email, inquiry type, and message.
2. Submit the form.
3. If the form submission is successful, you'll see a success message. If there's an error, an error message will be displayed.
4. The form validates input fields in real-time, ensuring that required fields are filled out correctly before submission.

## Form Validation

The contact form validates the following fields:

- **Name**: Must be filled in (required).
- **Email**: Must be a valid email address.
- **Message**: Must be at least 25 characters long.

## Error and Success Messages

- **Error**: If there is an issue with the form submission, the error message will be shown in a red box.
- **Success**: If the form submission is successful, a green success message is displayed.

## Folder Structure

- `src/`
  - `components/`
    - `Contact.js`: The main contact form component.
    - `Contact.scss`: SCSS file for styling the form.
  - `App.js`: Main app component where `Contact.js` is rendered.
  - `index.js`: The entry point of the React application.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
