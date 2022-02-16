/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Erika Lotome",
  title: "Hi all, I'm Erika",
  subTitle: emoji(
    "An avid Data Engineer/Scientist 🚀 skilled in ETL & ELT, Data Pipelining, Exploratory Data Analysis, Machine Learning, Web-Scraping, Data Visualization, Batch Processing and Statistical Modelling who is also an AWS Certified Cloud Practitioner and experienced with Data Technology."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1l2s_y--iNS8BKqC1CNrzraxYcuAgVhSt/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/johnlotome",
  linkedin: "https://www.linkedin.com/in/john-lotome-107991144/",
  gmail: "lotomej12@gmail.com",
  gitlab: "https://gitlab.com/johnlotome",
  kaggle: "https://www.kaggle.com/lotomej",
  medium: "https://medium.com/@lotomej12",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY DATA PERSON WHO WANTS TO EXPLORE EVERY DATA TECH STACK",
  skills: [
    emoji(
      "⚡ Data Engineering and Orchestration"
    ),
    emoji("⚡ Perform Exploratory Data Analysis and Feature Engineering"),
    emoji(
      "⚡ Model Deployment with Docker / AWS / Heruko"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Scikit-Learn",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "GCP",
      fontAwesomeClassname: "fab fa-google"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Data Talk Club",
      logo: require("./assets/images/dtc.png"),
      subHeader: "Data Engineering Zoomcamp",
      duration: "January 2022 - Present",
      desc: "Learn Fundamental of Data Engineering.",
      descBullets: [
        "Workflow Orchestration - Airflow",
        "Data Warehouse - Big Query",
        "Analytics engineering - DTB",
        "Streaming and Batch Processing - Spark/Kafka/Flink"
      ]
    },
    {
      schoolName: "Udacity",
      logo: require("./assets/images/udacity.png"),
      subHeader: "AWS Machine Learning Scholarship program",
      duration: "June 2021 - October 2021",
      desc: "Learnt Fundamentals of Machine Learning.",
      descBullets: [
        "Software Engineering, OOP",
        "Generative AI, Reinforcement learning, and Computer Vision"
      ]
    },
    {
      schoolName: "Azubi Africa",
      logo: require("./assets/images/azubi.png"),
      subHeader: "AWS Certified Cloud Practioner",
      duration: "May 2021 - August 2021",
      desc: "Learnt Fundamental of AWS Cloud Platform and technology.",
      descBullets: [
        "Cloud Concept",
        "AWS Cloud Technology",
        "Security and Compliance in AWS",
        "Billing and Pricing in AWS"
      ]
    },
    {
      schoolName: "10Academy",
      logo: require("./assets/images/10academy.png"),
      subHeader: "AWS Certified Cloud Practioner",
      duration: "July 2020 - November 2020",
      desc: "Learnt Data Science.",
      descBullets: [
        "Modelling",
        "programming in Python & SQL",
        "Data Visualization in Tableau & Power BI",
        "Extract, Transform and Load (ETL)",
        "Deployment in AWS and Flask"
      ]
    },
    {
      schoolName: "Technical University of Mombasa",
      logo: require("./assets/images/tum.png"),
      subHeader: "Bachelor of Science in Mathematics and Computer Science",
      duration: "September 2016 - November 2020",
      desc: "Graduated in Second Class(Upper Division)"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "AWS",
      progressPercentage: "60%"
    },
    {
      Stack: "SQL",
      progressPercentage: "80%"
    },
    {
      Stack: "Tableau",
      progressPercentage: "85%"
    },
    {
      Stack: "Logi Analytics",
      progressPercentage: "70%"
    },
    {
      Stack: "R",
      progressPercentage: "60%"
    },
    {
      Stack: "Docker",
      progressPercentage: "60%"
    },
    {
      Stack: "Airflow",
      progressPercentage: "60%"
    },
    {
      Stack: "Scikit-Learn",
      progressPercentage: "85%"
    },
    {
      Stack: "Spark",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Associate",
      company: "Ajua",
      companylogo: require("./assets/images/ajua.png"),
      date: "August 2021 – Present",
      desc: "Data Visualization, Reporting, Model Deployment, ETL.",
      descBullets: [
        "Tech Stach: Python, Tensorflow, Numpy, Matplotlib, SQL, R",
        "Data Analytics and Reporting",
        "Building dashboards for BI using Logi Analytics",
        "Model Deployment"
      ]
    },
    {
      role: "Data Analyst Intern",
      company: "Ultra Eureka Farm",
      companylogo: require("./assets/images/ultra.png"),
      date: "April 2020 – July 2020",
      desc: "Used Microsoft Excel to perform data analysis."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Top Data Science Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/spec.png"),
      projectName: "Change-Point-Analysis-of-Covid19-policy-Interventions-Bayesian-Inference-SIR-model",
      projectDesc: "Change point analysis to quantify the impact of African government policy interventions to slow the spread of COVID-19",
      footerLink: [
        {
          name: "Github Repo Link",
          url: "https://github.com/johnlotome/Change-Point-Analysis-of-Covid19-policy-Interventions-Bayesian-Inference-SIR-model"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/spec.png"),
      projectName: "African influencers: Twitter users segmentation",
      projectDesc: "The objective of this project was to identify top twitter influencer and most influential government official accounts on Twitter. The findings from this analysis was used to recommend Nike Inc, line of Action in its proposed expansion to Africa and the Marketing Campaign. The acquired web scrapping skills, working with beautiful soup and APIs.",
      footerLink: [
        {
          name: "Github Repo link",
          url: "https://github.com/johnlotome/NIKE-CAMPAIGN-"
        },
        {
          name: "Medium Blog",
          url: "https://towardsdatascience.com/african-influencers-twitter-users-segmentation-40753ee0a0bd"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love Public Learning by writing and teaching others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/towards-data-science/bank-institution-term-deposit-predictive-model-9f0b7c2fd38f",
      title: "Bank Institution Term Deposit Predictive Model",
      description:
        "Comparing different machine learning models for predicting subscription to bank term deposit."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254-707610667",
  email_address: "lotomej12@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "lotome_john", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
