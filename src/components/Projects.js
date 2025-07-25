import projectImage from "../assets/project_images/bulusanlakeweb.png";
import ighImage from "../assets/project_images/Subheading (9).pnghh.png";
import paubraImage from "../assets/project_images/pubra_project.png";
import sheep from "../assets/project_images/sheepproj.png";
import vetcare from "../assets/project_images/vetcare4.png";

export const projectData = [
  {
    id: 1,
    name: "VetCare",
    developer: "Ian Castillo",
    description:
      "VerCare is a complete online appointment and management system tailored for veterinary clinics with an integrated animal medicine and tools shop. It provides an efficient platform for scheduling pet appointments while offering a seamless experience for both veterinarians and shop owners. Veterinarians have their own dashboard where they can view their appointments for the day, track pending appointments, and stay organized throughout their schedule.For shop owners, VerCare includes a powerful admin panel with graphical analytics that provide detailed insights into product sales, profit trends, and appointment statistics—displayed weekly, monthly, and yearly for easy comparison. The system also features automated notifications for medicines that are low in stock or nearing expiration, ensuring that the inventory is always well-maintained and up to date.Additionally, the platform includes an announcement section for important updates, SMS notifications for appointment reminders and system alerts, and a secure online payment option for client convenience. VerCare is designed to enhance productivity, improve customer service, and simplify day-to-day operations for veterinary professionals and business owners alike.",
    image: vetcare,
    features: [
      "Veterinary appointment scheduling system",
      "Veterinarian dashboard for daily and pending appointments",
      "Built-in animal medicine and tools shop",
      "Admin panel with sales and profit analytics",
      "Appointment charts (weekly, monthly, yearly)",
      "Low stock and expiring medicine alerts",
      "Announcements and updates section",
      "SMS notifications for reminders and alerts",
      "Secure online payment support",
    ],
    techStack: ["PHP", "MySql", "React", "SCSS", "PHP Mailer", "ClickSend"],
    url: "https://vetcare4.unaux.com",
  },
  {
    id: 2,
    name: "Bulusan Lake Explorer",
    developer: "Ian Castillo",
    description:
      "Bulusan Lake Explorer is a web app featuring a virtual tour, biodiversity search, a 5-day advanced weather forecast, a feed from Bulusan Lake visitors, an adaptive chatbot, and a booking system.",
    image: projectImage,
    features: [
      "Lake Virtual Tour",
      "Biodiversity Search",
      "Lake Advanced weather update",
      "Bulusan Lake Feed",
      "Adaptive Chatbot",
      "Booking System",
      "Booking charts (weekly, monthly, yearly)",
      "Secure online payment support",
    ],
    techStack: ["Node.Js", "MySql", "React", "SCSS", "PHP Mailer", "Panoee"],
    url: "https://bulusanlakeexplorer.kesug.com",
  },
  {
    id: 3,
    name: "PAUBRA",
    developer: "Ian Castillo",
    description: `Paubra is a web platform designed to connect skilled workers in Bulusan with individuals and businesses in need of their expertise. Whether you're looking for a reliable plumber, carpenter, electrician, or any other skilled professional, Paubra makes it easy to find the right person for the job.
       For workers, Paubra serves as a digital marketplace to showcase their skills, reach potential clients, and grow their business. By creating a profile, workers can list their expertise, share their experience, and connect with customers looking for their services.`,
    image: paubraImage,
    features: [
      " Job Board ",
      " Search & Filter",
      " Worker Profiles",
      "Ratings & Reviews",
      "Location-Based Matching",
      " Favorites List ",
    ],
    techStack: ["Node.Js", "MySql", "React", "SCSS", "PHP Mailer"],
    url: "",
  },

  {
    id: 4,
    name: "SHEEP",
    developer: "Ian Castillo",
    description:
      "SHEEP is a social media platform designed for Christians, providing a space to share faith-based stories, testimonies, and connect with fellow believers. With features like a news feed, chat system, verse sharing, and church group interactions, it fosters a supportive online Christian community.",
    image: sheep,
    features: [
      "News Feed",
      "Chat System",
      "Verse Story",
      "Testimony",
      "Friend Suggestion",
      "Event",
      "Church Group",
    ],
    techStack: ["Node.Js", "MySql", "React", "SCSS", "PHP Mailer"],
    url: "",
  },
  {
    id: 5,
    name: "IGH Appointment System",
    developer: "Ian Castillo",
    description:
      "Irosin General Hospital Appointment System is a web app with an appointment system and hospital updates for a seamless healthcare experience.",
    image: ighImage,
    features: ["Appointment System", "Hospital News Update"],
    techStack: ["PHP", "MySql", "React", "SCSS", "PHP Mailer"],
    url: "",
  },
];
