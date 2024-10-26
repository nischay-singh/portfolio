export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    title: "BrewLab's Blog",
    desc: "BrewLab's Blog is an interactive blog all about coffee, tea and other comforting beverages. Users can log in and like and comment on their favorite posts. The website also features an admin dashboard that allows the admin to edit and delete posts, users, and commments.",
    subdesc:
      "Built using the MERN stack, Tailwind CSS, and Redux for complex state management.",
    href: "https://blog-dashboard-la6s.onrender.com/",
    texture: "/textures/project/project1.mov",
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Node.js",
        path: "/assets/nodejs.jpg",
      },
      {
        id: 4,
        name: "Express.js",
        path: "/assets/expressjs.png",
      },
      {
        id: 5,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
    ],
  },
  {
    title: "Tomato",
    desc: "Tomato is a full-stack web application that allows users to view and review restaurants from all around the world. The website supports authentication and cookies and also allows restauranteers to add their restaurants to the application",
    subdesc:
      "Built using EJS, Node.js, Express.js, and Passport for authentication. ",
    href: "https://tomato-qrgo.onrender.com/",
    texture: "/textures/project/project2.mov",
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/nodejs.jpg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "assets/expressjs.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
      {
        id: 4,
        name: "Bootstrap",
        path: "/assets/bootstrap.png",
      },
    ],
  },
  {
    title: "MealFinder",
    desc: "MealFinder is your one stop shop to find your next meal. The application exposes its users to thousands of incredible recipes online, with the ability to filter based on ingredients, caloric limits, cuisines etc. If you're feeling lucky, you can also just choose a random meal!",
    subdesc:
      "Built using the Spoonacular API, Bootstrap, Node.js and Express.js.",
    href: "https://meal-finder-sw2l.onrender.com/",
    texture: "/textures/project/project3.mov",
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/nodejs.jpg",
      },
      {
        id: 2,
        name: "Express.js",
        path: "assets/expressjs.png",
      },
      {
        id: 3,
        name: "MongoDB",
        path: "/assets/mongodb.svg",
      },
      {
        id: 4,
        name: "Bootstrap",
        path: "/assets/bootstrap.png",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 3 : isMobile ? 4.8 : 5.5,
    deskPosition: isSmall
      ? [-0.3, -3, -3.5]
      : isMobile
      ? [-0.3, -3, -3.5]
      : isTablet
      ? [-0.3, -8, -3.5]
      : [-0.3, -6, -3.5],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [7, -5, 0]
      : isTablet
      ? [10, -9, 0]
      : [10, -6.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 6, 0]
      : isTablet
      ? [7, 1, 0]
      : [8, 3, 0],
    ringPosition: isSmall
      ? [-7, 7, 0]
      : isMobile
      ? [-10, 12, 0]
      : isTablet
      ? [-18, 3, 0]
      : [-20, 6, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -9, -10]
      : isTablet
      ? [-13, -13, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "CME Group",
    pos: "Software Engineering Intern",
    duration: "May 2024 - Aug 2024",
    title:
      "• Created a liquidity injector that used real-time market data to place orders in CME's test trading environment to train trading bots. Improved training performance by 14%.<br />• Worked on Application Network Graph (ANG) - an internal tool to visualize connectivity among different components. Added operations to clip nodes, reveal upstream and downstream trees, and download and upload graphs.<br />• Optimized ANG's code base and added test coverage, raising performance by 21%",
    icon: "/assets/cmegroup.jpg",
  },
  {
    id: 2,
    name: "University of Illinois, Urbana-Champaign",
    pos: "Undergraduate Research Assistant",
    duration: "Aug 2024 - Present",
    title:
      "• Researching the autonomous navigation of drones under Professor Timothy Bretl.<br />• Building a deep learning model to detect fiducial markers using thermal imaging using YOLO v8, corner regression, and decoders.",
    icon: "/assets/uiuc.png",
  },
  {
    id: 3,
    name: "Prepbytes",
    pos: "Doubt Mentor Intern",
    duration: "May 2021 - Aug 2021",
    title:
      "• Taught 1000+ undergraduate students concepts of Data Structures and Algorithms in various programming languages while in high school.<br />• Responsible for solving other students' doubts on problems in the numerous courses offered on the company's website",
    icon: "/assets/prepbytes.jpeg",
  },
];
