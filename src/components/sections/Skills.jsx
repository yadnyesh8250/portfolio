import {
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDigitalOcean
} from "react-icons/fa6";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { CgVercel } from "react-icons/cg";
import { DiGithubAlt, DiMongodb } from "react-icons/di";
import {
  SiExpress,
  SiTailwindcss,
  SiPostman,
  SiC,
  SiCplusplus,
  SiR
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { TbBrandNextjs } from "react-icons/tb"; // Using as placeholder for Render

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      <h4 className="text-4xl font-bold text-center mt-20 dark:text-white">
        Technologies I Use.
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
        {[ 
          { Icon: FaHtml5, name: "HTML" },
          { Icon: FaCss3Alt, name: "CSS" },
          { Icon: IoLogoJavascript, name: "JavaScript" },
          { Icon: FaPython, name: "Python" },
          { Icon: FaReact, name: "React" },
          { Icon: SiExpress, name: "Express" },
          { Icon: FaNodeJs, name: "NodeJS" },
          { Icon: SiTailwindcss, name: "Tailwind" },
          { Icon: CgVercel, name: "Vercel" },
          { Icon: FaGitAlt, name: "Git" },
          { Icon: DiGithubAlt, name: "Github" },
          { Icon: IoLogoFirebase, name: "Firebase" },
          { Icon: SiPostman, name: "Postman" },
          { Icon: FaDigitalOcean, name: "DigitalOcean" },
          { Icon: TbBrandNextjs, name: "Render" },
          { Icon: DiMongodb, name: "MongoDB" },
          { Icon: BiLogoPostgresql, name: "SQL" },
          { Icon: FaJava, name: "Java" },
          { Icon: SiC, name: "C" },
          { Icon: SiCplusplus, name: "C++" },
          { Icon: SiR, name: "R Lang" },
          { Icon: GrMysql, name: "MySQL" },
        ].map(({ Icon, name }, i) => (
          <span
            key={i}
            className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500"
          >
            <Icon className="text-2xl" /> {name}
          </span>
        ))}
      </div>
    </section>
  );
}

export default Skills;