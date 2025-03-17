import React from "react";
import { Image } from "@heroui/image";

import { subtitle, title } from "../primitives";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around gap-8">
      <div className="">
        <Image
          isBlurred
          alt="Michael Sornoza"
          className="rounded-full w-full max-w-xl"
          radius="full"
          shadow="lg"
          src={"/michael.jpeg"}
        />
      </div>
      <div>
        <h2
          className={title({
            fullWidth: true,
            size: "md",
          })}
        >
          MICHAEL SORNOZA
        </h2>
        <h3
          className={title({
            size: "sm",
            className: "font-light",
          })}
        >
          Senior Full-Stack Developer
        </h3>
        <p className={subtitle()}>Over 6 years of experience</p>
      </div>
    </section>
  );
};

export default Hero;
