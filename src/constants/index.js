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
    title: "Multiplayer Poker",
    desc: "Welcome to Poker Night - an online poker website where you and your friends can play, without the risk of entering any payment information. I felt the need to create this website because my friends and I spent many hours looking for a way to play online without entering our credit card information. At Poker Night, one can simply create a lobby, share the game code and play classic Texas Hold'em poker.",
    subdesc: "Built using the MERN stack, Tailwind CSS, Redux, and Socket.io.",
    href: "https://multiplayer-poker.onrender.com/",
    texture: "/textures/project/project4.mov",
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
      {
        id: 6,
        name: "Socket.io",
        path: "/assets/socketio.png",
      },
    ],
  },
  {
    title: "BrewLab's Blog",
    desc: "BrewLab's Blog is an interactive blog all about coffee, tea and other comforting beverages. Users can log in and like and comment on their favorite posts. The website also features an admin dashboard that allows the admin to edit and delete posts, users, and commments.",
    subdesc:
      "Built using the MERN stack, Tailwind CSS, and Redux for complex state management.",
    href: "https://blog-dashboard-la6s.onrender.com/",
    texture: "/textures/project/project1.mov",
    spotlight: "/assets/spotlight2.png",
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
  {
    title: "MealFinder",
    desc: "MealFinder is your one stop shop to find your next meal. The application exposes its users to thousands of incredible recipes online, with the ability to filter based on ingredients, caloric limits, cuisines etc. If you're feeling lucky, you can also just choose a random meal!",
    subdesc:
      "Built using the Spoonacular API, Bootstrap, Node.js and Express.js.",
    href: "https://meal-finder-sw2l.onrender.com/",
    texture: "/textures/project/project3.mov",
    spotlight: "/assets/spotlight4.png",
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
      "• Created a liquidity injector by simulating real-time market orders for clients in CME’s test environment.<br />• Developed a Java-based subroutine on Google Cloud Kubernetes Engine (GKE) to sync internal and real-time order books and used Kafka for data injection.<br />• Built a graph visualizer using Vue.js to map system connectivity between business components, enabling improved analysis and troubleshooting of interdependencies.",
    icon: "/assets/cmegroup.jpg",
  },
  {
    id: 2,
    name: "Bretl Research Group at University of Illinois, Urbana-Champaign",
    pos: "Undergraduate Research Assistant",
    duration: "Aug 2024 - Present",
    title:
      "• Developed a deep learning model to detect fiducial markers in thermal imaging, leveraging YOLO v8 and corner regression to enhance accuracy in autonomous drone navigation.<br />• Optimized pose estimation inference time by 50% while maintaining 96% precision and recall, improving real-time performance.",
    icon: "/assets/uiuc.png",
  },
  {
    id: 3,
    name: "University of Illinois, Urbana-Champaign ",
    pos: "Course Assistant",
    duration: "Aug 2024 - Present",
    title:
      "• Mentored students of CS 222 (Software Design Lab) through full software development lifecycle of ideation, design, implementation and deployment.<br />• Guided students in applying core software engineering principles, including version control, design patterns, and code quality, to real-world projects.<br />•Reviewed and provided feedback on project deliverables and provided technical support on project development.",
    icon: "/assets/uiuc.png",
  },
  {
    id: 4,
    name: "Prepbytes",
    pos: "Doubt Mentor Intern",
    duration: "May 2021 - Aug 2021",
    title:
      "• Solved students' doubts about Data Structures and Algorithms across various courses offered by PrepBytes.<br />• Taught students topics ranging from trees, graphs to dynamic programming in Java, Python, and C/C++.",
    icon: "/assets/prepbytes.jpeg",
  },
];
