import { htmlIcon, cssIcon, jsIcon, reactIcon, reduxIcon, socketIOIcon, nodeJSIcon, mongoDBIcon } from './smallIcons';
import * as titles from './ProjectTitles/ProjectTitles';
import breyoPic from '../../assets/imgs/breyoPic.png';
import simplifyPic from '../../assets/imgs/simplifyPic.png';
import notelyPic from '../../assets/imgs/notelyPic.png';
import guitarPic from '../../assets/imgs/guitarPic.png';
import pvnPic from '../../assets/imgs/pvnPic.png';

const breyo = {
  icons: [
    jsIcon,
    cssIcon,
    reactIcon,
    reduxIcon,
    socketIOIcon,
    nodeJSIcon,
    mongoDBIcon
  ],
  text: [
    `Provides kanban-style boards, lists, and cards to manage you or your team's workflow and tasks, with the UI/UX inspired by Trello`,
    `Offers features like tracking of board member activity, member permissions and admins, Gantt charts, and more`,
    'Utilizes socket.IO to send real-time updates to other users connected to the same board',
    'Front end built with React, with React Router used to create multi-page functionality and Redux for state management',
    'RESTful API created using Node.js and MongoDB'
  ],
  siteLink: 'https://breyo.herokuapp.com',
  ghLink: 'https://github.com/BrennanWilkins/breyo',
  title: titles.BreyoTitle,
  pic: breyoPic,
  alt: 'Breyo'
};

const simplify = {
  icons: [
    jsIcon,
    cssIcon,
    reactIcon,
    reduxIcon,
    nodeJSIcon,
    mongoDBIcon
  ],
  text: [
    'Helps users organize and simplify their finances by tracking their budget, goals, investments, and net worth, and providing financial visualization tools',
    'Combines data from 5+ APIs to provide real-time stock and cryptocurrency prices, financial news, stock analyses, and historical data',
    'Front end built with React, with React Router used to create multi-page functionality and Redux for state management',
    'RESTful API created using Node.js and MongoDB'
  ],
  siteLink: 'https://www.simplify-finance.com',
  ghLink: 'https://github.com/BrennanWilkins/Simplify',
  title: titles.SimplifyTitle,
  pic: simplifyPic,
  alt: 'Simplify'
};

const guitarTrainer = {
  icons: [
    jsIcon,
    cssIcon,
    reactIcon,
    reduxIcon,
    nodeJSIcon,
    mongoDBIcon
  ],
  text: [
    'Helps you learn guitar with three game modes designed to improve note, chord, and interval identification',
    'Provides customized practice and daily goals based on your tracked stats',
    'Front end built with React, with React Router used to create multi-page functionality and Redux for state management',
    'RESTful API created using Node.js and MongoDB'
  ],
  siteLink: 'https://guitar-trainer.herokuapp.com',
  ghLink: 'https://github.com/BrennanWilkins/guitarTrainer',
  title: titles.GuitarTitle,
  pic: guitarPic,
  alt: 'Guitar Trainer'
};

const notely = {
  icons: [
    jsIcon,
    cssIcon,
    reactIcon,
    reduxIcon,
    socketIOIcon,
    nodeJSIcon,
    mongoDBIcon
  ],
  text: [
    'A collaborative rich note-taking app built with React/Redux, Node.js, and MongoDB',
    'Allows users to easily invite others to collaborate on a note, utilizing WebSockets to sync note edits and cursors between collaborators',
    'Simple and responsive UI with note shortcuts, tags, text search, rich text editing using Slate.js, and a customizable editor with dark mode',
    'Allows users to publish their notes with a unique link for others to view it',
  ],
  siteLink: 'https://notely-app.herokuapp.com',
  ghLink: 'https://github.com/BrennanWilkins/Notely2.0',
  title: titles.NotelyTitle,
  pic: notelyPic,
  alt: 'Notely'
};

const pvn = {
  icons: [
    htmlIcon,
    cssIcon,
    jsIcon
  ],
  text: [
    'Strategy game based on chess with several game modes, battle animations, sound effects, and other features',
    'Supports single and multiplayer with an AI with a customizable difficulty setting',
    'Created on a team of three using HTML, CSS, and JavaScript (Phaser3 engine)',
    'Received a scholarship from the Longhorn Creators Foundation for its complexity and creativity'
  ],
  siteLink: 'https://brennanwilkins.github.io/piratesvsninjas/',
  ghLink: 'https://github.com/BrennanWilkins/piratesvsninjas',
  title: titles.PVNTitle,
  pic: pvnPic,
  alt: 'PvN Strategy Game'
};

const projects = [breyo, notely, simplify, guitarTrainer, pvn];

export default projects;
