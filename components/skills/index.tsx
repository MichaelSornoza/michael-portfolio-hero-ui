import React from "react";
import { Card, CardBody } from "@heroui/card";

const Skills = () => {
  return (
    <section
      className="flex flex-col md:flex-row flex-wrap justify-between gap-6 my-16"
      id="skills"
    >
      {[
        // Frontend
        { skill: "React.js", color: "bg-blue-500" },
        { skill: "Next.js", color: "bg-gray-800" },
        { skill: "Redux", color: "bg-purple-600" },
        { skill: "Zustand", color: "bg-green-500" },
        { skill: "TypeScript", color: "bg-blue-600" },
        { skill: "Vue.js", color: "bg-green-400" },
        { skill: "TailwindCSS", color: "bg-teal-500" },
        { skill: "Material UI", color: "bg-blue-700" },
        { skill: "Hero UI", color: "bg-indigo-600" },
        { skill: "SSR / ISR", color: "bg-yellow-500" },

        // Backend
        { skill: "NestJS", color: "bg-orange-500" },
        { skill: "Express.js", color: "bg-gray-700" },
        { skill: "Django", color: "bg-green-700" },
        { skill: "Node.js", color: "bg-green-600" },
        { skill: "GraphQL", color: "bg-pink-600" },
        { skill: "REST APIs", color: "bg-blue-600" },
        { skill: "Microservices", color: "bg-red-600" },
        { skill: "Prisma", color: "bg-indigo-500" },
        { skill: "Mongoose", color: "bg-teal-400" },

        // Bases de datos
        { skill: "PostgreSQL", color: "bg-blue-900" },
        { skill: "MongoDB", color: "bg-green-800" },
        { skill: "MySQL", color: "bg-blue-600" },

        // DevOps & Cloud
        { skill: "Docker", color: "bg-cyan-500" },
        { skill: "Kubernetes", color: "bg-purple-700" },
        { skill: "AWS", color: "bg-yellow-400" },
        { skill: "CI/CD", color: "bg-red-500" },
        { skill: "Vercel", color: "bg-gray-500" },
        { skill: "Railway", color: "bg-purple-500" },

        // Otras herramientas
        { skill: "Flutter", color: "bg-blue-400" },
        { skill: "Figma", color: "bg-pink-400" },
        { skill: "Jest", color: "bg-green-500" },
        { skill: "Cypress", color: "bg-cyan-600" },
        { skill: "Vitest", color: "bg-indigo-500" },
        { skill: "TDD", color: "bg-teal-600" },
        { skill: "Headless CMS", color: "bg-yellow-500" },
        { skill: "AI Integration", color: "bg-purple-600" },
      ].map(({ skill, color }) => (
        <Card
          key={skill}
          isBlurred
          isHoverable
          isPressable
          className={`w-40 shadow-md rounded-xl ${color}`}
        >
          <CardBody className="text-center text-white font-semibold text-lg p-4">
            {skill}
          </CardBody>
        </Card>
      ))}
    </section>
  );
};

export default Skills;
