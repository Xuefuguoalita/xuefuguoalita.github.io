import {
  ProjectInfoSection,
  ProjectSwitch,
} from "../../../components/projectInfoSection";
// import Image from "next/image";
import TitleLine from "../../../components/TitleLine";
import BackToTop from "@/components/BackToTop";
import Slideshow from "@/components/Slideshow";

const projectName = "Eclipse Tracer";
const imgs = [
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 234327.png", description: "" },
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 234353.png", description: "" },
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 234527.png", description: "" },
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 234619.png", description: "" },
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 234644.png", description: "" },
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 234707.png", description: "" },
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 234730.png", description: "" },
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 234753.png", description: "" },
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 234833.png", description: "" },
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 235000.png", description: "" },
  { image: "/imgs/eclipse-tracer/Screenshot 2024-03-18 235021.png", description: "" },
];

export default function Main() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 min-h-screen m-4">
      <div className="col-span-1 md:col-span-4 lg:col-span-5">
        <TitleLine />
      </div>
      <aside className="col-span-1">
        <ProjectInfoSection projectName={projectName} />
      </aside>
      <main className="col-span-1 md:col-span-3 p-4 mb-8">
        <div className="relative w-full pb-[56.25%] mb-8">
          <iframe
            width="full"
            height="auto"
            src="https://www.youtube.com/embed/nXr15_67Gpo?si=IhUSmGMsyatRb5qT"
            title="Eclipse Tracer Screen recording on YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
        <Slideshow slides={imgs}/>
      </main>
      <div className="col-span-1 sm:hidden md:block lg:hidden"></div>
      <aside className="col-span-1 md:col-span-3 lg:col-span-1">
        <ProjectSwitch projectName={projectName} />
        <BackToTop />
      </aside>
    </div>
  );
}
