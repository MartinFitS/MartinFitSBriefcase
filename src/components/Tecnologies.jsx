import React from "react";
import "../static/styles/stylesTecnologies.css";

const logos = {
  nestjsLogo : "https://nestjs.com/img/logo-small.svg",

  prisma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
};

const Tecnologies = () => {
  return (
    <div className="skillsSection">
      <h1>T E C N O L O G I E S</h1>
      <div className="imagesTecnologies">
        <ul>
          <li><img src={logos.nestjsLogo} alt="NestJS" /><p>NestJS</p></li>
          <li><img src={logos.prisma} alt="Prisma" /><p>Prisma</p></li>
          <li><img src={logos.fastapi} alt="FastAPI" /><p>FastAPI</p></li>
          <li><img src={logos.javascript} alt="JavaScript" /><p>JavaScript</p></li>
          <li><img src={logos.react} alt="React JS" /><p>React JS</p></li>
          <li><img src={logos.nodejs} alt="Node JS" /><p>Node JS</p></li>
          <li><img src={logos.python} alt="Python" /><p>Python</p></li>
          <li><img src={logos.mongodb} alt="MongoDB" /><p>MongoDB</p></li>
          <li><img src={logos.mysql} alt="MySQL" /><p>MySQL</p></li>
          <li><img src={logos.firebase} alt="Firebase" /><p>Firebase</p></li>
        </ul>
      </div>
    </div>
  );
};

export default Tecnologies;



