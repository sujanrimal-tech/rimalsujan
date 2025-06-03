/* Basic Reset and Box-sizing */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif; /* Choose a professional font */
    line-height: 1.6;
    color: #333; /* Dark grey for readability */
    background-color: #f4f4f4; /* Light grey background */
    scroll-behavior: smooth; /* Smooth scrolling for anchor links */
}

.container {
    max-width: 1100px; /* Max width for content */
    margin: 0 auto; /* Center the container */
    padding: 0 20px; /* Add some padding on the sides */
}

/* Header & Navigation */
header {
    background-color: #2c3e50; /* Dark professional color */
    color: #fff;
    padding: 1rem 0;
    position: sticky; /* Makes the header stick to the top */
    top: 0;
    z-index: 1000; /* Ensures it stays above other content */
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
}

header .container {
    display: flex;
    justify-content: space-between; /* Puts name on one side, nav on the other */
    align-items: center;
}

header h1 {
    margin: 0;
    font-size: 1.8rem;
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-left: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease; /* Smooth transition for hover */
}

nav ul li a:hover {
    color: #3498db; /* A professional blue for hover */
}

/* Hero Section */
.hero {
    background: #3498db; /* Professional blue background */
    color: #fff;
    text-align: center;
    padding: 80px 0; /* Adjust padding as needed */
}

.hero h2 {
    font-size: 2.5rem;
    margin-bottom: 15px;
}

.hero p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.profile-photo {
    width: 150px; /* Size for the photo */
    height: 150px;
    border-radius: 50%; /* Makes it round */
    object-fit: cover;
    margin-bottom: 20px;
    border: 5px solid #fff; /* White border */
}


/* Section Styling */
.section {
    padding: 60px 0; /* Padding for top and bottom of each section */
    background-color: #fff; /* White background for content sections */
    margin-bottom: 20px; /* Space between sections */
    box-shadow: 0 0 10px rgba(0,0,0,0.05);
}

/* Alternating background for sections (optional) */
.section:nth-of-type(odd) {
     background-color: #f9f9f9; /* Slightly different background for odd sections */
}


.section h2 {
    text-align: center;
    margin-bottom: 40px;
    font-size: 2rem;
    color: #2c3e50; /* Match header color */
}

/* Button Style */
.cta-button {
    display: inline-block; /* Allows padding and margin */
    background-color: #e74c3c; /* A contrasting color (e.g., red/orange) */
    color: #fff;
    padding: 12px 25px;
    text-decoration: none;
    border-radius: 5px;
    font-size: 1.1rem;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #c0392b; /* Darken on hover */
}


/* Projects Section */
.project-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive grid */
    gap: 30px; /* Space between grid items */
}

.project-item {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex; /* Use flex for content alignment inside item */
    flex-direction: column;
}

.project-item h3 {
    margin-top: 0;
    margin-bottom: 10px;
    color: #3498db; /* Match blue accent */
}

.project-item img {
    max-width: 100%;
    height: auto;
    border-radius: 5px;
    margin-bottom: 15px;
}

.project-item p {
    margin-bottom: 15px;
    flex-grow: 1; /* Allows description to take available space */
}

.project-item .technologies {
    font-style: italic;
    font-size: 0.9em;
    color: #555;
    margin-top: auto; /* Pushes this and the link to the bottom */
    margin-bottom: 10px;
}

.project-link {
    display: inline-block;
    color: #2c3e50; /* Dark link color */
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

.project-link:hover {
    color: #3498db; /* Blue on hover */
    text-decoration: underline;
}


/* Skills Section */
.skills-list {
    display: grid;
     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsive grid for categories */
    gap: 30px;
}

.skill-category h3 {
    color: #3498db; /* Blue accent */
    margin-bottom: 10px;
    border-bottom: 2px solid #eee; /* Subtle separator */
    padding-bottom: 5px;
}

.skill-category ul {
    list-style: disc; /* Use bullet points */
    margin-left: 20px; /* Indent the list */
}

.skill-category ul li {
    margin-bottom: 5px;
}


/* Contact Section */
.contact p {
    text-align: center;
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.contact a {
    color: #3498db; /* Blue link color */
    text-decoration: none;
    transition: color 0.3s ease;
}

.contact a:hover {
    text-decoration: underline;
    color: #2980b9; /* Darker blue on hover */
}


/* Footer */
footer {
    background-color: #2c3e50; /* Match header color */
    color: #fff;
    text-align: center;
    padding: 20px 0;
    margin-top: 40px;
    font-size: 0.9rem;
}

footer p {
    margin: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
    header .container {
        flex-direction: column; /* Stack name and nav vertically */
        text-align: center;
    }

    header h1 {
        margin-bottom: 10px;
    }

    nav ul {
        flex-direction: column; /* Stack nav items vertically */
        padding: 0;
    }

    nav ul li {
        margin: 5px 0; /* Space out stacked items */
    }

    .hero {
        padding: 60px 0;
    }

    .hero h2 {
        font-size: 2rem;
    }

    .hero p {
        font-size: 1rem;
    }

    .section {
        padding: 40px 0;
    }

    .section h2 {
        font-size: 1.8rem;
        margin-bottom: 30px;
    }

     /* Project grid minmax adjustment for smaller screens */
    .project-grid {
         grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }

    /* Skills grid minmax adjustment */
     .skills-list {
         grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
}
