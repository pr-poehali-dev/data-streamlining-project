import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">ВИДЕОПРОДАКШН</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Ваши победы <br />
          заслуживают <i className="font-light">кино</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[520px] mx-auto">
          Помогаю брендам, спортсменам и предпринимателям рассказывать истории так, чтобы их запоминали и хотели быть частью. От сценария до финального кадра.
        </p>

        <a className="contents max-sm:hidden" href="#contact">
          <Button
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Обсудить проект]
          </Button>
        </a>
        <a className="contents sm:hidden" href="#contact">
          <Button
            size="sm"
            className="mt-14"
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            [Обсудить проект]
          </Button>
        </a>
      </div>
    </div>
  );
}