import { rubik } from "@/lib/fonts";
import Section from "../base/Section";

export default function Cover() {
  return (
    <Section name={"Cover"} className="flex items-center justify-center">
      <div className="max-w-[600px] space-y-2 font-medium">
        <p className="text-lg text-subtle">Hey, I am</p>
        <h2 className={`${rubik.className} text-7xl font-bold tracking-wide text-primary dark:text-secondary`}>SHINJITH P R</h2>
        <p className="text-3xl text-subtle">Web Developer,</p>
        <p className="text-sm font-normal text-muted sm:text-base">
          Who specializes in creating pixel-perfect, engaging, and accessible digital experiences. Currently, I'm concentrating on developing visually
          appealing, useful web projects and learning new things.
        </p>
      </div>
    </Section>
  );
}
