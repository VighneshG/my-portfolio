# Portfolio Website - Vignesh Kumar

This is a personal portfolio website for **Vignesh Kumar** showcasing professional experience, skills, and projects. Built using modern web development technologies such as **Next.js**, **React**, and **Framer Motion**, this website provides a smooth, interactive experience for users while being optimized for both light and dark themes.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Customization](#customization)
- [Future Improvements](#future-improvements)

## Demo

Check out the live demo of the portfolio [here](https://vighneshg.github.io/my-portfolio/) (Link to the deployed version of the portfolio).

## Features

- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Smooth Animations**: Interactive elements use **Framer Motion** for smooth animations, such as text transitions.
- **Dynamic Role Display**: Rotates through predefined roles with a typing animation.
- **Resume Download**: A customizable "Download Resume" button that provides a direct download link to the resume.
- **Light/Dark Theme Support**: Automatically adapts based on system preferences (light or dark mode).

## Technologies Used

- **Next.js**: A React-based framework with server-side rendering for improved performance and SEO.
- **React.js**: The core library for building the user interface components.
- **Framer Motion**: Used for creating smooth animations and transitions.
- **Tailwind CSS**: A utility-first CSS framework for quickly building custom designs.
- **TypeScript**: Ensures type safety and improves code quality and maintainability.
- **Node.js**: Used as the backend environment for Next.js.
- **Git**: For version control.
  
## Project Structure

The project is structured in a simple way, ensuring modularity and ease of development:


### Key Components:

1. **HomePage (`index.tsx`)**:
   - Displays the welcome message with animated text using **Framer Motion**.
   - Includes the smooth role transition effect showing different roles like "Software Engineer" and "Lifelong Learner."
   - Provides a "Download Resume" button with cool styling and a download feature.

2. **Layout Component (`Layout.tsx`)**:
   - Wraps pages with consistent layout elements like the navigation bar.
   
3. **Navbar Component (`Navbar.tsx`)**:
   - A responsive navigation menu, styled with Tailwind CSS, and adapted for both light and dark themes.

### Styling:
The application is styled using **Tailwind CSS** along with custom utility classes. There’s a `globals.css` file that contains base styles and manages color variables for light and dark modes.

## Installation and Setup

To run this project locally, follow these steps:

### Prerequisites

- **Node.js**: Ensure that you have Node.js installed (version 14 or later recommended).
- **npm or yarn**: Package manager to install dependencies.

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-portfolio-repo.git
   ```
2. **Navigate to the project directory**:
    ```bash
    cd your-portfolio-repo
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Run the development server**:
    ```bash
    npm run dev
    ```
5. **Open your browser and navigate to http://localhost:3000 to view the website locally.**

### Building for Production
To create an optimized production build:
    ```bash
    npm run build
    ```
This command generates a `/.next` directory with an optimized build that can be deployed.

#### Deployment
The project can be deployed on any platform that supports Node.js applications, including Vercel (recommended for Next.js apps), Netlify, or your custom hosting environment.

## Customization

### Updating the Roles
To update the roles that are animated on the homepage:

1. Open `app/page.tsx`.
2. Modify the roles array to include your custom roles:
    ```bash
    const roles = ["a Full Stack Developer", "an Open Source Contributor", "a Teacher"];
    ```

### Updating the Resume

1. Replace the resume file in `public/files/Vignesh_Resume.pdf` with your own file.
2. Ensure that the `href` attribute in the "Download Resume" button points to the correct file name.

### Modifying the Theme

If you want to adjust the color scheme of the website (background, text colors, etc.), you can modify the CSS variables in `globals.css`:

    ```bash
    :root {
        --background: #ffffff;  /* Light background */
        --foreground: #171717;  /* Dark text */
        --navbar: #000000;      /* Navbar background */
        --link-hover: #E5E5E5;  /* Hover color for links */
    }
    ```
For dark mode, modify the colors under:

    ```bash
    @media (prefers-color-scheme: dark) {
        :root {
            --background: #0a0a0a;
            --foreground: #ededed;
        }
    }
    ```

## Future Improvements

* Blog Section: Add a blog section to share technical articles and experiences.
* Project Showcase: Expand the portfolio with detailed project showcases, including case studies and code snippets.
* Contact Form: Include a contact form for users to reach out directly from the website.
* SEO Improvements: Enhance SEO with proper meta tags and descriptions.

## Contributing

Contributions are welcome! If you would like to suggest improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
