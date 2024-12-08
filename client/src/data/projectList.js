import Proj1 from "../assets/projectImages/Voice-based-Chat-room-App.png";
import Proj2 from "../assets/projectImages/Youtube-Bookmark-extension.png";
import Proj3 from "../assets/projectImages/Coding-contest-Calendar.png";
import Proj4 from "../assets/projectImages/Google-Docs-Clone.png";


export const ProjectList = [
    {
        id: "1",
        name: "Voice-based Chat-room App",
        image: Proj1,
        skills: ["React","Redux","Node", "Security", "webRTC"],
        summary: "basic summary here Lorem ipsum dolor sit",
        details: "Developed a React.JS and Node.JS based real-time voice conferencing application leveraging WebRTC Technology, Implemented MongoDB Schemas to store and manage data related to the chat room, user profiles, and access tokens. Integrated OTP verification system and implemented JWT tokens for secure user authentication and account activation, leveraging SHA-256 (Secure Hash Algorithms) for encryption.",
        link:"https://github.com/sntsh-chouhan/Live-Voice-ChatRoom",
    },
    {
        id: "2",
        name: "Coding-contest Calendar",
        image: Proj3,
        skills: ["Node","API","web scraping", "HTTP", "Data sync"],
        summary: "basic summary here Lorem ipsum dolor sit",
        details: "Engineered a competitive programming contest aggregator using web scraping techniques with https requests to extract contest data from various platforms like Codeforces, LeetCode etc Designed platform-specific APIs to fetch contest data efficiently and used MongoDB to create a unified API service. Deployed a React-based Chrome extension where users can filter data by platform and contest duration.",
        link:"https://github.com/sntsh-chouhan/coding-contest-calendar-2.0",
    },
    {
        id: "3",
        name: "Youtube Bookmark extension",
        image: Proj2,
        skills: ["chrome extention","DOM manupilation","Cache", "JavaScript"],
        summary: "basic summary here Lorem ipsum dolor sit",
        details: "Developed a chrome extension which adds a bookmark button to the YouTube player window. Capture the desired timestamp, return to that timestamp or delete the timestamp. Technologies used HTML, CSS and JavaScript",
        link:"https://github.com/sntsh-chouhan/youtubeBookmark-chrome-extension",
    },
    {
        id: "4",
        name: "Google Docs Clone",
        image: Proj4,
        skills: ["React.JS","Quill.JS","Socket.IO"],
        summary: "basic summary here Lorem ipsum dolor sit",
        details: "Hosted a server with Socket.IO handling WebSocket connections, ensuring low latency communication between users. Utilized a NoSQL database (MongoDB) for storage, enabling persistent backup of edits and real-time data synchronization",
        link:"https://github.com/sntsh-chouhan/Google-Docs-clone",
    },
  ];