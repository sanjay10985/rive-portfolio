"use client";

import { useRive, useStateMachineInput } from "rive-react";
import { useCallback, useEffect } from "react";

export default function ProjectIntroAnimation() {
  const STATE_MACHINE_NAME = "State Machine 1"; // Replace with your state machine name if different
  const INPUT_NAME = "hover"; // Replace with your input name if different

  const { rive, RiveComponent } = useRive({
    src: "/map-loading-screen.riv", // Replace with the path to your .riv file
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const hoverInput = useStateMachineInput(rive, STATE_MACHINE_NAME, INPUT_NAME);

  const onMouseEnter = useCallback(() => {
    hoverInput?.fire();
  }, [hoverInput]);

  useEffect(() => {
    if (rive && !hoverInput) {
      console.log("Rive file or hover input not loaded");
    }
  }, [rive, hoverInput]);

  return (
    <div className="w-full h-full z-1" onMouseEnter={onMouseEnter}>
      <RiveComponent />
    </div>
  );
}
