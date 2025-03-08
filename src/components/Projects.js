import projectImage from "../assets/project_images/bulusanlakeweb.png";
import ighImage from "../assets/project_images/Subheading (9).pnghh.png";
import paubraImage from "../assets/project_images/pubra_project.png";

export const projectData = [
  {
    id: 1,
    name: "PAUBRA",
    developer: "Ian Castillo",
    description: `Paubra is a web platform designed to connect skilled workers in Bulusan with individuals and businesses in need of their expertise. Whether you're looking for a reliable plumber, carpenter, electrician, or any other skilled professional, Paubra makes it easy to find the right person for the job.
       For workers, Paubra serves as a digital marketplace to showcase their skills, reach potential clients, and grow their business. By creating a profile, workers can list their expertise, share their experience, and connect with customers looking for their services.`,
    image: paubraImage,
    features: ["Appointment System", "Hospital News Update"],
    techStack: ["Node.Js", "MySql", "ReactJs", "SCSS", "PHP Mailer"],
  },
  {
    id: 2,
    name: "Bulusan Lake Explorer",
    developer: "Ian Castillo",
    description:
      "Bulusan Lake Explorer is a web app with a self-learningchatbot, virtual tour, biodiversity search, real-time weather updates, and a booking system.",
    image: projectImage,
    features: [
      "Self Learning Chatbot",
      "Lake Virtual Tour",
      "Biodiversity Search",
      "Lake Advanced weather update",
      "Bulusan Lake Feed",
      "Booking System",
    ],
    techStack: ["NodeJs", "MySql", "ReactJs", "SCSS", "PHP Mailer", "Panoee"],
  },

  {
    id: 3,
    name: "IGH Appointment System",
    developer: "Ian Castillo",
    description:
      "Irosin General Hospital Appointment System is a web app with an appointment system and hospital updates for a seamless healthcare experience.",
    image: ighImage,
    features: ["Appointment System", "Hospital News Update"],
    techStack: ["PHP", "MySql", "ReactJs", "SCSS", "PHP Mailer"],
  },
];
