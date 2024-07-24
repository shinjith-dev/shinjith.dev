"use client";
import React, { HTMLAttributes, ReactNode, useContext, useEffect, useRef } from "react";
import { SectionContext, TSection } from "../contexts/SectionContext";
import { cn } from "@/lib/utils/cn";
import { rubik } from "@/lib/fonts";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  name: TSection;
  withoutTitle?: boolean;
  condensed?: boolean;
  subHeading?: string
}

export default function Section({ name, withoutTitle = false, condensed = false, subHeading, className, children, ...props }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setSection } = useContext(SectionContext);

  useEffect(() => {
    const onScroll = () => {
      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        if (window.scrollY > window.scrollY + top - 400 && window.scrollY < window.scrollY + bottom - 400) setSection(name);
        // else setSection(null)
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionRef.current]);

  return (
    <section id={name?.toLowerCase()} ref={sectionRef} className={cn("min-h-screen w-full", condensed ? "py-0" : "py-24", className)} {...props}>
      {!withoutTitle && <h4 className={`${rubik.className} ${subHeading ? "mb-1" : "mb-4"} pr-6 text-end text-4xl font-bold uppercase tracking-widest text-subtle`}>{name}</h4>}
      {subHeading && <p className="text-end pr-7 w-full max-w-80 ml-auto text-muted mb-4">{subHeading}</p>}
      {children}
    </section>
  );
}
