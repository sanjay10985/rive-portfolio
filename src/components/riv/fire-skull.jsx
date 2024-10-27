"use client";

import { useRive, useStateMachineInput } from "rive-react";
import { useCallback, useEffect } from "react";

export default function FireSkullAnimation() {
  const STATE_MACHINE_NAME = "State Machine 1"; // Replace with your state machine name if different
  const INPUT_NAME = "hover"; // Replace with your input name if different

  const { rive, RiveComponent } = useRive({
    src: "/fire-skull.riv", // Replace with the path to your .riv file
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
    <div
      className="w-full h-full absolute top-0 left-0 -z-10"
      onMouseEnter={onMouseEnter}
    >
      <RiveComponent />
    </div>
  );
}
