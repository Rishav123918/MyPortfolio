import fitness_low from "./images/fitness-low.jpeg";
import blog_low from "./images/blog-low.jpeg";
import budget_low from "./images/budget-low.jpeg";
import schedule_low from "./images/schedule-low.jpeg";
import weather_low from "./images/weather-low.jpeg";
import team_low from "./images/team-low.jpeg";
import employee_low from "./images/employee-low.jpeg";
import shopping_low from "./images/shopping-low.jpeg";
import note_low from "./images/note-low.jpeg";
import programming_low from "./images/programming-low.jpeg";
import password_low from "./images/password-low.jpeg";
import quiz_low from "./images/quiz-low.jpeg";
import book_low from "./images/book-low.jpeg";
import backend_low from "./images/backend-low.jpeg";
import microsoft_low from "./images/microsoft.jpeg";
import music_low from "./images/music-trivia-logo.png";
import portfolio_low from "./images/sitelogowhite.png";

import fitness from "./images/fitness.jpg";
import blog from "./images/blog.jpg";
import budget from "./images/budget.jpg";
import schedule from "./images/schedule.jpg";
import weather from "./images/weather.jpg";
import team from "./images/team.jpg";
import employee from "./images/employee.jpg";
import shopping from "./images/shopping.jpg";
import note from "./images/note.jpg";
import programming from "./images/programming.jpg";
import password from "./images/password.jpg";
import quiz from "./images/quiz.jpg";
import book from "./images/book.jpg";
import backend from "./images/backend-low.jpeg";
import microsoft from "./images/microsoft.jpeg";
import music from "./images/music-trivia-logo.png";
import portfolio from "./images/sitelogowhite.png";
import mediciLogo from "./images/mediciLogo.png";
import scaleLogo from "./images/scaleLogo.png";
import mrSushiLogo from "./images/mrSushiLogo.png";

const projects = [
    {
        name: "Contract Software Engineer @ Medici",
        description: `I developed an NFT generator tool that allows for the production and customization of large batches of tokens. This tool was created to streamline the process of creating and distributing NFTs. In order to make the tool more user-friendly, I collaborated with the design team to implement a visually appealing and easy-to-use interface. Additionally, I utilized TypeScript to improve code reliability and maintainability by preventing runtime errors. This not only improves the overall performance of the tool, but also allows for easy identification and correction of any errors that may occur.`,
        date: "November 2022 - Present",
        repoUrl: "",
        deployUrl: "",
        img: mediciLogo,
        img_low: "",
    },
    {
        name: "Software Engineer / Mentor @ SCALE Pathways",
        description: `To enhance the user experience on the front end, I incorporated React and Ant Design into the program. This not only improved the usability but also provided a more visually appealing interface. My full-stack web development skills were instrumental in boosting overall performance and functionality of the project. Furthermore, I had the opportunity to mentor senior design students and share my knowledge and experience with them. This not only helped them to improve their skills but also helped me to see the project from different perspectives and learn from their ideas.`,
        date: "January 2022 - Present",
        repoUrl: "",
        deployUrl: "",
        img: scaleLogo,
        img_low: "",
    },
    {
        name: "Full-Stack Developer @ Mr. Sushi",
        description: `I developed an ordering system for tabletop kiosks and QR scans, that included an invoice tracking feature. This system improved the overall efficiency of restaurants by 30% by allowing customers to place their orders from their mobile devices. The focus was on mobile-first design to ensure a seamless experience for customers across all device sizes. This way, customers could easily place their order at the restaurant, therefore allowing the servers to allocate more time for other tasks, and the restaurant could easily track the customer's orders and invoices.`,
        date: "November 2021 - October 2022",
        repoUrl: "",
        deployUrl: "",
        img: mrSushiLogo,
        img_low: "",
    },
    {
        name: "Music Trivia",
        description:
            "Create a music trivia quiz, so when you login you can pick the amount of questions and enter an artist and based on the artist’s album cover art you will select the song that was on that album. You are then able to view a leaderboard and your profile and see how many games you’ve played, the correct answers you’ve made, and your high score.",
        date: "January 2022",
        repoUrl: "https://bit.ly/music-trivia-3-repo",
        deployUrl: "https://bit.ly/music-trivia-3",
        img: music,
        img_low: music_low,
    },
    {
        name: "React Portfolio",
        description:
            "In this project, I built my own react portfolio that showcases the projects I have created, skills I have acquired, and provide multiple points of contact.",
        date: "January 2022",
        repoUrl: "https://bit.ly/jimmy-zheng-repo",
        deployUrl: "https://bit.ly/jimmy-zheng",
        img: portfolio,
        img_low: portfolio_low,
    },
    {
        name: "J-Zhopping",
        description:
            "An e-commerce platform that can allow the user to create an account and add items into their cart for checkout. The user can likewise remove items later on from their shopping cart. The user can checkout the items in their shopping cart with Stripe and see their previous orders in the order history tab.",
        date: "January 2022",
        repoUrl: "https://bit.ly/redux-store-repo",
        deployUrl: "https://bit.ly/z-shopping",
        img: shopping,
        img_low: shopping_low,
    },

    {
        name: "Book Search Engine",
        description:
            "A book search engine that can allow the user to create an account and save books they like into their own library. The user can likewise remove books later on from their library. The user can also login from any other device with the same credentials.",
        date: "January 2022",
        repoUrl: "https://bit.ly/book-search-repo",
        deployUrl: "https://bit.ly/book-search-engine",
        img: book,
        img_low: book_low,
    },
    {
        name: "Progressive Budget Tracker",
        description:
            "This app will allow the user to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.",
        date: "December 2021",
        repoUrl: "https://bit.ly/3K7rH55",
        deployUrl: "https://bit.ly/3qlxf4a",
        img: budget,
        img_low: budget_low,
    },
    {
        name: "Fitness Tracker",
        description:
            "This project is a workout tracker that can log multiple exercises in a workout. When tracking a workout you can choose from two categories resistance or cardio, for a resistance exercise you can track the name, type, weight, sets, reps, and duration. For a cardio exercise, you can track the distance.",
        date: "November 2021",
        repoUrl: "https://bit.ly/3A7XjDr",
        deployUrl: "https://bit.ly/3njmtJJ",
        img: fitness,
        img_low: fitness_low,
    },
    {
        name: "The Tech Blog",
        description:
            "This project is a CMS-style blog website, it can be used to create blog posts and comment on other posts. My motivation for creating this project was to allow users to share their ideas somewhere since writing about tech can be just as important as making it.",
        date: "November 2021",
        repoUrl: "https://bit.ly/tech-blog-repo",
        deployUrl: "https://bit.ly/the-tech-blog",
        img: blog,
        img_low: blog_low,
    },
    {
        name: "Note Taker",
        description:
            "This project is a note taking app, users can write notes down to be saved for later reference. My motivation for this project was to make something that can be used to takes notes and be referred back to with any device. The problem this solves is it can be used by multiple people and the notes will be linked to a single database so everyone will have the same notes.",
        date: "October 2021",
        repoUrl: "https://bit.ly/3tpKe6W",
        deployUrl: "https://bit.ly/33xxtMz",
        img: note,
        img_low: note_low,
    },
    {
        name: "E-Commerce Back End",
        description:
            "This project is an e-commerce back end, it can view categories, tags, and products inside the database. It can also add additional categories, tags, products. As well as update, delete, or find by id for any of the sections. My motivation for creating this project was to hone my skills with API routes and using sequalize. ",
        date: "October 2021",
        repoUrl: "https://bit.ly/e-commerce-repo",
        deployUrl: "",
        img: backend,
        img_low: backend_low,
    },
    {
        name: "Employee Management System",
        description:
            "This project is an employee management system, it can view all employees, roles, and departments inside the database. It can also add additional employees, roles, and departments. My motivation for creating this project was to help users manager their employees, roles, and department within their company in a simple interface. ",
        date: "October 2021",
        repoUrl: "https://bit.ly/3fqDi0Z",
        deployUrl: "",
        img: employee,
        img_low: employee_low,
    },
    {
        name: "Team Profile Generator",
        description:
            "This project is a team profile generator, it takes in user inputs with inquirer and creates an HTML page with all their team's information. My motivation for this project was to create something that can help people who work in large teams keep track of their team information. ",
        date: "October 2021",
        repoUrl: "https://bit.ly/Team-Profile-Generator-Repo",
        deployUrl: "",
        img: team,
        img_low: team_low,
    },
    {
        name: "Weather Dashboard",
        description:
            "This project lets the user search up any city and it will display the cities current weather and its 5-day forecast. The current weather conditions will be displayed up top as a large block. The 5-day forecast will be displayed underneath.",
        date: "September 2021",
        repoUrl: "https://bit.ly/Weather-Dashboard-Repo",
        deployUrl: "https://bit.ly/Weather-Dashboard",
        img: weather,
        img_low: weather_low,
    },
    {
        name: "Work Day Scheduler",
        description:
            "This project helps the user organize their workday by creating these hour blocks that the user can edit. Each block has a save button that can save the text they wrote so when the page is refreshed the text will be saved. The time blocks are also color-coded to help the user easily distinguish between past, present, and future.",
        date: "September 2021",
        repoUrl: "https://bit.ly/31Ur7Xp",
        deployUrl: "https://bit.ly/3nmTC7x",
        img: schedule,
        img_low: schedule_low,
    },
    {
        name: "Code Quiz",
        description:
            "This project was a quiz that tests users on operators. The user will be scored on how much time they have left after answering all the questions. Each incorrect answer will penalize their time by 10 seconds. After the user finishes the quiz they would be prompted to fill in their initials for the leaderboard.",
        date: "August 2021",
        repoUrl: "https://bit.ly/3qo7LmO",
        deployUrl: "https://bit.ly/33uRF1I",
        img: quiz,
        img_low: quiz_low,
    },
    {
        name: "Password Generator",
        description:
            "This project is a password generator, it takes in user inputs such as the length, if they want lowercase, uppercase, numbers, or special characters and generates a password based on those criteria.",
        date: "August 2021",
        repoUrl: "https://bit.ly/3qmZzDh",
        deployUrl: "https://bit.ly/34OnaVd",
        img: password,
        img_low: password_low,
    },
    {
        name: "Command Line Interface Themed Portfolio",
        description:
            "My personal portfolio themed after a command line interface.",
        date: "May 2021",
        repoUrl: "",
        deployUrl: "https://bytesizeerror.github.io/",
        img: programming,
        img_low: programming_low,
    },
    {
        name: "Microsoft's DCCD Charitable Givings App Prototype",
        description:
            "This project was for my Senior Design Project, our team was awarded 3rd place on our web application for Microsoft’s charitable giving prototype by a panel of judges from the industry. (Private Repo)",
        date: "August 2020",
        repoUrl: "https://bit.ly/dccd-repo",
        deployUrl: "",
        img: microsoft,
        img_low: microsoft_low,
    },
];

export default projects;
