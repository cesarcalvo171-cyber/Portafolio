import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
const SkillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 70 },
      { name: "HTML/CSS", level: 90 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootsrap", level: 90 },
      { name: "React Bootstrap", level: 90 },
      { name: "Shadcn/ui", level: 50 },
    ],
  },
  {
    name: "Herramientas",
    skills: [
      { name: "Github", level: 70 },
      { name: "VS Code", level: 90 },
      { name: "Figma", level: 50 },
      { name: "npm/yarn", level: 70 },
      { name: "Vite", level: 70 },
      { name: "Yup", level: 70 },
      { name: "Formik", level: 70 },
    ],
  },
  {
    name: "Otros",
    skills: [
      { name: "Node.js", level: 50 },
      { name: "REST APIs", level: 70 },
      { name: "PostgreSQL", level: 50 },
      { name: "Mysql", level: 70 },
      { name: "MysqLite", level: 70 },
    ],
  },
];
export function Tool() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  return (
    <>
      <section id="Herramientas" className=" py-24 px-6 bg-slate-800 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-emerald-400 font-mono">02.</span>
            <h2 className=" text-white text-2xl md:text-3xl font-bold ">
              Herramientas y Habilidades
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0">
              {SkillCategories.map((category, index) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(index)}
                  className={`px-4 py-3 text-left text-sm font-medium whitespace-nowrap transition-all border-b-2 md:border-b-0 md:border-l-2 ${
                    selectedCategory === index
                      ? "text-emerald-400 border-primary bg-white"
                      : "text-muted-foreground border-transparent hover:text-emerald-400 hover:bg-white"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <div className="md:col-span-3">
              <div className="grid sm:grid-cols-2 gap-6 ">
                {SkillCategories[selectedCategory].skills.map((skill) => (
                  <div key={skill.name} className="space-y-2 ">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-white font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-black rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-400 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-8">
            {[
              {
                name: "React",
                icon: <FaReact size={30} className="text-blue-400" />,
              },
              {
                name: "JavaScript",
                icon: (
                  <IoLogoJavascript size={30} className="text-yellow-400" />
                ),
              },
              {
                name: "Tailwind",
                icon: <RiTailwindCssFill size={30} className="text-blue-400" />,
              },
              {
                name: "Github",
                icon: <FaGithub size={30} className="text-white" />,
              },
              {
                name: "Figma",
                icon: <IoLogoFigma size={30} className="text-red-700" />,
              },
              {
                name: "Bootsrap",
                icon: <FaBootstrap size={30} className="text-blue-700" />,
              },
            ].map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-gray-800 hover:bg-white transition-colors group hover:text-white"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {tech.icon}
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
