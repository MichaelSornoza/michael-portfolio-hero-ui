import { Image } from "@heroui/image";
import React from "react";
import { Progress } from "@heroui/progress";

import { title } from "../primitives";

const About = () => {
  return (
    <section
      className="flex flex-col md:flex-row justify-around gap-8 my-16"
      id="about"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h2
            className={title({
              fullWidth: true,
              size: "sm",
            })}
          >
            I AM A FULL-STACK DEVELOPER
          </h2>
          <p className="text-gray-400">
            Full-Stack Developer with over six years of experience in React.js,
            Next.js, and NestJS, specializing in scalable, high-performance
            applications. Expert in frontend and backend development, ensuring
            seamless integration between UI, APIs, and databases. Strong focus
            on performance optimization, state management with Redux, Zustand,
            and TypeScript, and rendering techniques such as SSR, ISR, and
            Server Components.
          </p>
        </div>
        <div className="w-3/4 flex flex-col gap-4">
          <Progress
            showValueLabel
            color="success"
            label="React.js"
            size="sm"
            value={100}
          />
          <Progress
            showValueLabel
            color="success"
            label="Next.js"
            size="sm"
            value={100}
          />
          <Progress
            showValueLabel
            color="success"
            label="TypeScript"
            size="sm"
            value={100}
          />
          <Progress
            showValueLabel
            color="success"
            label="NestJS"
            size="sm"
            value={90}
          />
          <Progress
            showValueLabel
            color="success"
            label="Docker"
            size="sm"
            value={80}
          />
          <Progress
            showValueLabel
            color="success"
            label="Django"
            size="sm"
            value={70}
          />
          <Progress
            showValueLabel
            color="success"
            label="Flutter"
            size="sm"
            value={65}
          />
        </div>
      </div>
      <div className="w-full min-w-fit max-w-xl">
        <Image
          isBlurred
          alt="Michael Sornoza"
          className="rounded-full w-full max-w-xl"
          radius="full"
          shadow="lg"
          src={"/michael.jpeg"}
        />
      </div>
    </section>
  );
};

export default About;
