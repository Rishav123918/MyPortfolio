import fitness from "./images/fitness-low.jpeg";
import blog from "./images/blog-low.jpeg";
import budget from "./images/budget-low.jpeg";
import schedule from "./images/schedule-low.jpeg";
import weather from "./images/weather-low.jpeg";
import team from "./images/team-low.jpeg";
import employee from "./images/employee-low.jpeg";
import shopping from "./images/shopping-low.jpeg";
import note from "./images/note-low.jpeg";
import programming from "./images/programming-low.jpeg";
import password from "./images/password-low.jpeg";
import quiz from "./images/quiz-low.jpeg";
import book from "./images/book-low.jpeg";
import backend from "./images/backend-low.jpeg";
import microsoft from "./images/microsoft.jpeg";
import music from "./images/music-trivia-logo.png";
import portfolio from "./images/sitelogo.png";

const projects = [
    {
        name: "Music Trivia",
        description:
            "Create a music trivia quiz, so when you login you can pick the amount of questions and enter an artist and based on the artist’s album cover art you will select the song that was on that album. You are then able to view a leaderboard and your profile and see how many games you’ve played, the correct answers you’ve made, and your high score.",
        date: "January 2022",
        repoUrl: "https://bit.ly/music-trivia-3-repo",
        deployUrl: "https://bit.ly/music-trivia-3",
        img: music,
    },
    {
        name: "React Portfolio",
        description:
            "In this project, I built my own react portfolio that showcases the projects I have created, skills I have acquired, and provide multiple points of contact.",
        date: "January 2022",
        repoUrl: "https://bit.ly/jimmy-zheng-repo",
        deployUrl: "https://bit.ly/jimmy-zheng",
        img: portfolio,
    },
    {
        name: "J-Zhopping",
        description:
            "An e-commerce platform that can allow the user to create an account and add items into their cart for checkout. The user can likewise remove items later on from their shopping cart. The user can checkout the items in their shopping cart with Stripe and see their previous orders in the order history tab.",
        date: "January 2022",
        repoUrl: "https://bit.ly/redux-store-repo",
        deployUrl: "https://bit.ly/z-shopping",
        img: shopping,
    },

    {
        name: "Book Search Engine",
        description:
            "A book search engine that can allow the user to create an account and save books they like into their own library. The user can likewise remove books later on from their library. The user can also login from any other device with the same credentials.",
        date: "January 2022",
        repoUrl: "https://bit.ly/book-search-repo",
        deployUrl: "https://bit.ly/book-search-engine",
        img: book,
    },
    {
        name: "Progressive Budget Tracker",
        description:
            "This app will allow the user to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.",
        date: "December 2021",
        repoUrl: "https://bit.ly/3K7rH55",
        deployUrl: "https://bit.ly/3qlxf4a",
        img: budget,
    },
    {
        name: "Fitness Tracker",
        description:
            "This project is a workout tracker that can log multiple exercises in a workout. When tracking a workout you can choose from two categories resistance or cardio, for a resistance exercise you can track the name, type, weight, sets, reps, and duration. For a cardio exercise, you can track the distance.",
        date: "November 2021",
        repoUrl: "https://bit.ly/3A7XjDr",
        deployUrl: "https://bit.ly/3njmtJJ",
        img: fitness,
    },
    {
        name: "The Tech Blog",
        description:
            "This project is a CMS-style blog website, it can be used to create blog posts and comment on other posts. My motivation for creating this project was to allow users to share their ideas somewhere since writing about tech can be just as important as making it.",
        date: "November 2021",
        repoUrl: "https://bit.ly/tech-blog-repo",
        deployUrl: "https://bit.ly/the-tech-blog",
        img: blog,
    },
    {
        name: "Note Taker",
        description:
            "This project is a note taking app, users can write notes down to be saved for later reference. My motivation for this project was to make something that can be used to takes notes and be referred back to with any device. The problem this solves is it can be used by muliptle people and the notes will be linked to a single database so everyone will have the same notes. Which can be convient for team projects or as a shopping list for a household.",
        date: "October 2021",
        repoUrl: "https://bit.ly/3tpKe6W",
        deployUrl: "https://bit.ly/33xxtMz",
        img: note,
    },
    {
        name: "E-Commerce Back End",
        description:
            "This project is an e-commerce back end, it can view categories, tags, and products inside the database. It can also add additional categories, tags, products. As well as update, delete, or find by id for any of the sections. My motivation for creating this project was to hone my skills with API routes and using sequalize. The problem this helps with is companies can use this to manage their back end keep track of products.",
        date: "October 2021",
        repoUrl: "https://bit.ly/e-commerce-repo",
        deployUrl: "",
        img: backend,
    },
    {
        name: "Employee Management System",
        description:
            "This project is an employee management system, it can view all employees, roles, and departments inside the database. It can also add additional employees, roles, and departments. My motivation for creating this project was to help users manager their employees, roles, and department within their company in a simple interface. The problem this helps with is companies can have an easier time keeping track of their employees, which department they're in, what is their role is and who their managers is.",
        date: "October 2021",
        repoUrl: "https://bit.ly/3fqDi0Z",
        deployUrl: "",
        img: employee,
    },
    {
        name: "Team Profile Generator",
        description:
            "This project is a team profile generator, it takes in user inputs with inquirer and creates an HTML page with all their team's information. My motivation for this project was to create something that can help people who work in large teams keep track of their team information. The problem this solves is it can help team members easily find information on their teammates at a glance.",
        date: "October 2021",
        repoUrl: "https://bit.ly/Team-Profile-Generator-Repo",
        deployUrl: "",
        img: team,
    },
    {
        name: "Weather Dashboard",
        description:
            "This project lets the user search up any city and it will display the cities current weather and its 5-day forecast. The current weather conditions will be displayed up top as a large block. The 5-day forecast will be displayed underneath.",
        date: "September 2021",
        repoUrl: "https://bit.ly/Weather-Dashboard-Repo",
        deployUrl: "https://bit.ly/Weather-Dashboard",
        img: weather,
    },
    {
        name: "Work Day Scheduler",
        description:
            "This project helps the user organize their workday by creating these hour blocks that the user can edit. Each block has a save button that can save the text they wrote so when the page is refreshed the text will be saved. The time blocks are also color-coded to help the user easily distinguish between past, present, and future.",
        date: "September 2021",
        repoUrl: "https://bit.ly/31Ur7Xp",
        deployUrl: "https://bit.ly/3nmTC7x",
        img: schedule,
    },
    {
        name: "Code Quiz",
        description:
            "This project was a quiz that tests users on operators. The user will be scored on how much time they have left after answering all the questions. Each incorrect answer will penalize their time by 10 seconds. After the user finishes the quiz they would be prompted to fill in their initials for the leaderboard.",
        date: "August 2021",
        repoUrl: "https://bit.ly/3qo7LmO",
        deployUrl: "https://bit.ly/33uRF1I",
        img: quiz,
    },
    {
        name: "Password Generator",
        description:
            "This project is a password generator, it takes in user inputs such as the length, if they want lowercase, uppercase, numbers, or special characters and generates a password based on those criteria.",
        date: "August 2021",
        repoUrl: "https://bit.ly/3qmZzDh",
        deployUrl: "https://bit.ly/34OnaVd",
        img: password,
    },
    {
        name: "Command Line Interface Themed Portfolio",
        description:
            "My personal portfolio themed after a command line interface.",
        date: "May 2021",
        repoUrl: "",
        deployUrl: "https://bytesizeerror.github.io/",
        img: programming,
    },
    {
        name: "Microsoft's DCCD Charitable Givings App Prototype",
        description: "(Private Repo)",
        date: "August 2020",
        repoUrl: "https://bit.ly/dccd-repo",
        deployUrl: "",
        img: microsoft,
    },
];

export default projects;
