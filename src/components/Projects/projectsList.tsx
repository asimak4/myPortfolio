export const projects = [
  // {
  //   title: 'Salonbud.com',
  //   description: 'Developed a comprehensive management system for small businesses, currently in use by a salon. Features include daily cost tracking, revenue management, product inventory tracking, and streamlined day-to-day operations. This solution helps businesses digitize their operations and make data-driven decisions.',
  //   techUsed: 'React Native, Expo, AWS',
  //   link: 'https://github.com/abaytler/salonbud'
  // },
  {
    title: 'Joint Living',
    description: 'Joint is a mobile application designed for couples to manage their shared life together. Built with React Native and Expo, it provides a platform for sharing memories, managing events, and keeping track of important dates, tasks and expenses.',
    techUsed: 'React Native, Expo, Firebase',
    links: {
      // github: 'https://github.com/abaytler/joint',
      android: 'https://play.google.com/store/apps/details?id=com.jointapp.joint&pli=1',
      ios: 'https://apps.apple.com/us/app/joint-living/id6744906828'
    }
  },
  {
    title: 'Packet Hunter',
    description: 'An interactive educational game that teaches networking concepts through hands-on challenges. Users solve real-world networking problems in a gamified environment, covering topics like packet analysis, network protocols, and troubleshooting.',
    techUsed: 'React Native, Expo',
    links: {
      // github: 'https://github.com/abaytler/PacketHunterApp',
      android: 'https://play.google.com/store/apps/details?id=packethunter.com.PacketHunter',
      ios: 'https://apps.apple.com/us/app/packet-hunter/id6739217678'
    }
  },  
  {
        title: 'Forevision',
        description: 'Developed a Golf GPS application that utilizes AWS services and IoT devices to seamlessly track golf carts on the course using live data. Developed the applications frontend using React JS and integrated advanced technologies such as WebSockets, AWS Lambda, DynamoDB, and S3 Buckets for the backend.',
        techUsed: 'AWS, Javascript', 
        // link: 'https://github.com/rmccarthy2017/ForeVision/tree/main/fore_vision'
    },
    {
        title: 'Purposeful Minds LLC',
        description: 'Designed, built, and continuously maintain a responsive web presence for a private speech-language pathology practice. Focused on creating an intuitive user experience for clients and modern web standards to drive business growth.',
        techUsed: 'React, Javascript',
        link: 'https://www.purposefulmindsllc.com/',
        links:{
          github: 'https://github.com/asimak4/julia_purposeful_minds'
        } 
    },
    {
        title: 'Last Chance Performance & Recovery',
        description: 'Designed, built, and manage a high-performance web presence for a personal training and athletic recovery brand. Created a sleek, dynamic user interface to showcase training methodologies to drive client leads and consultations.',
        techUsed: 'React, Javascript, Vite', 
        link: 'https://www.lastchanceprwellness.com/',
        links:{
          github: 'https://github.com/asimak4/LastChancePT_Josh_Mendoza'
        } 
    },
    // {
    //     title: 'Natalie Simak Acupuncture',
    //     description: 'Designed, developed, and maintain a responsive web presence for a private acupuncture practice. Developed a calming, intuitive user interface to establish brand trust.',
    //     techUsed: 'React, Javascript', 
    //     link: 'https://natalie-simak-acupuncture-v2.vercel.app/',
    //     links:{
    //       github: 'https://github.com/asimak4/natalie_simak_acupuncture_v2'
    //     } 
    // },
    {
        title: 'Reach Language & Learning',
        description: 'Designed, built, and continuously maintain a responsive web presence for a private speech-language pathology practice. Focused on creating an intuitive, accessible user experience for clients to drive business growth.',
        techUsed: 'React, Javascript', 
        link: 'https://www.reachlanguageandlearning.com/',
        links:{
          github: 'https://github.com/asimak4/GabyReachWebsite'
        } 
    }, 
    {
      title: 'Car Scraping Tool',
      description: 'Developed a Python web scraper using BeautifulSoup to automatically filter and extract cars from Cars.com based on specific criteria. The scraper updates a CSV file with new results and sends email notifications, saving time in the car selection process.',
      techUsed: 'Python', 
      link: 'https://github.com/asimak4/FunProjects/blob/master/Small%20Practice%20Programs/scrapingCars.py',
    },
    {
        title: 'Everybody Eats',
        description: 'Developed an iOS app using Swift that replicates the core functionality of Uber Eats. Features include direct messaging between users, adding items to a cart, and a seamless ordering experience. This project showcases app development skills and user interface design.',
        techUsed: 'Swift',
        link: 'https://github.com/asimak4/FunProjects/tree/master/EverybodyEatsApp', // Update with the actual GitHub repository link if available
    },      
    {
      title: 'Connect4 AI with Minimax',
      description: 'Created a Connect4 game with an AI opponent using the Minimax algorithm. The AI strategically minimizes the maximum potential loss in each move. Players can compete against the AI or play with another person in a console-based interface.',
      techUsed: 'Python', 
      link: 'https://github.com/asimak4/FunProjects/blob/master/AI%20and%20ML%20Practice/Minimaxconnect4.py',
    },
    // {
    //   title: 'Workout Tracking App',
    //   description: "A React Native app that allows users to track workouts, including sets, weights, reps, and RPE. Features include a dynamic calendar, workout plan uploads from JSON or Excel files, and integration with a backend API for saving and retrieving data.",
    //   techUsed: "TypeScript, React Native, Supabase, Node.js",
    //   link: 'https://github.com/asimak4/WorkoutPro' 
    // },
    {
      title: 'Chess',
      description: 'Developed a Chess game in C with functionality for validating moves, checking for checkmate, and a CPU opponent with random move generation. This console-based game includes a design document explaining the implementation.',
      techUsed: 'C', 
      link: 'https://github.com/asimak4/FunProjects/tree/master/Chess%20Module',
    },
    // { 
    //   title: 'Online Portfolio',
    //   description: 'Developed an online portfolio using React and Material-UI. The portfolio features sections for projects, skills, and contact information, showcasing a range of personal and professional projects with responsive design.',
    //   techUsed: 'TypeScript',
    //   link: 'https://github.com/asimak4/myPortfolio'
    // },
      {
        title: 'Tic Tac Toe',
        description: 'Implemented a Tic Tac Toe game in C with options for two players or CPU opponents. The program includes mutex locking and basic OS requirements, with a console-based UI for easy playability.',
        techUsed: 'C', 
        link: 'https://github.com/asimak4/FunProjects/tree/master/Tic%20Tac%20Toe%20Module',
    },
    {
      title: 'Classification with Random Forest',
      description: 'Applied Random Forest Classification on census data to predict income levels over or under $50k. Implemented machine learning techniques to analyze and train models on real-world data, contributing to classification tasks.',
      techUsed: 'Python, Jupyter Notebook', 
      link: 'https://github.com/asimak4/FunProjects/blob/master/AI%20and%20ML%20Practice/multilabelClassification.ipynb',
    },
    {
      title: 'Image Classification (Dogs vs Cats)',
      description: 'Built an image classifier using Keras to distinguish between images of dogs and cats. The project introduces computer vision concepts and neural networks, demonstrating the use of supervised learning for image recognition.',
      techUsed: 'Python, Jupyter Notebook', 
      link: 'https://github.com/asimak4/FunProjects/blob/master/AI%20and%20ML%20Practice/ImageClassification-%20Alex%20Simak.ipynb',
    },
    {
      title: 'Database Management System',
      description: 'Collaborated on developing a database for faculty members using SQL and Python. Created a simple interface for users to query and update the database, ensuring efficient data management and user interaction with SQL tables.',
      techUsed: 'Python, SQL', 
    },
    {
      title: 'Sally Forth Compiler in C++',
      description: 'Built a simple compiler handling arithmetic operations, variables, loops, and conditional statements using Reverse Polish Notation (RPN). This project demonstrates the basics of language parsing and stack-based computation.',
      techUsed: 'C++', 
    }
  ];
  