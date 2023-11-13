
import weather_low from "./images/weather-low.jpeg";
import chat_low from "./images/chat-low.jpeg";
import book_low from "./images/book-low.jpeg";
import hotel_low from "./images/music-trivia-logo.png";
import portfolio_low from "./images/sitelogowhite.png";


import weather from "./images/weather.jpg";
import chat from "./images/chat.jpeg";
import book from "./images/book.jpg";
import hotel from "./images/hotel.jpeg";
import portfolio from "./images/sitelogowhite.png";

const projects = [
    {
        name: "Hotel-Booking System",
        description:
            "The Hotel Booking System focuses on maintaining an accurate, real-time inventory of available rooms and their current statuses to prevent overbooking. By synchronizing the booking system with the actual room availability, the risk of double bookings or unavailable rooms is minimized. The system's reservation management features empower users to easily make reservations for specific dates and durations. Built this application using with Context API, JWT, custom hooks, and a React calendar, ensuring a seamless user experience. Implemented enhanced security measures for password storage and utilized technologies including React, Node.js, and MongoDB.",
        date: "May 2023",
        repoUrl: "https://github.com/Rishav123918/Hotel-Booking",
        // deployUrl: "",
        img: hotel,
        img_low: hotel_low,
    },
    {
        name: "React Portfolio",
        description:
            "In this project, I built my own react portfolio that showcases the projects I have created, skills I have acquired, and provide multiple points of contact.",
        date: "Nov 2023",
        repoUrl: "",
        deployUrl: "",
        img: portfolio,
        img_low: portfolio_low,
    },
    {
        name: "Chat-Application",
        description:
            "Facilitate real-time communication with an intuitive interface, supporting multimedia sharing and group conversations. Prioritize security, user authentication, and scalability using technologies such as React, Firebase, and CSS..",
        date: "July 2023",
        repoUrl: "https://github.com/Rishav123918/Chat-Application",
         deployUrl: "",
        img: chat,
        img_low: chat_low,
    },

    {
        name: "Finding k-Nearest-Neighbors ",
        description:
            "To find K-nearest points without using libraries like Scikit-learn, implement a custom k-nearest neighbors algorithm using Python in Machine Learning.",
        date: "April 2023",
        repoUrl: "",
        deployUrl: "",
        img: book,
        img_low: book_low,
    },
    // {
    //     name: "E-Commerce Back End",
    //     description:
    //         "This project is an e-commerce back end, it can view categories, tags, and products inside the database. It can also add additional categories, tags, products. As well as update, delete, or find by id for any of the sections. My motivation for creating this project was to hone my skills with API routes and using sequalize. ",
    //     date: "October 2021",
    //     repoUrl: "https://bit.ly/e-commerce-repo",
    //     deployUrl: "",
    //     img: backend,
    //     img_low: backend_low,
    // },
   
    {
        name: "Weather Dashboard",
        description:
            "This project lets the user search up any city and it will display the cities current weather . The current weather conditions will be displayed up top as a large block.",
        date: "September 2021",
        repoUrl: "https://bit.ly/Weather-Dashboard-Repo",
        deployUrl: "https://bit.ly/Weather-Dashboard",
        img: weather,
        img_low: weather_low,
    },
   
];

export default projects;
