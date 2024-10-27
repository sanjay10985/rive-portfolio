import FireSkullAnimation from "@/components/riv/fire-skull";
import ProjectIntroAnimation from "@/components/riv/project-intro";

export default function Home() {
  return (
    <div className="w-full h-screen relative">
      <FireSkullAnimation />

      <ProjectIntroAnimation />
    </div>
  );
}
