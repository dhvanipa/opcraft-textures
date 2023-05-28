import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";

export const App = () => {
  const {
    components: { },
    systemCalls: { increment },
    network: { singletonEntity },
  } = useMUD();

  return (
    <>
      <p>T1</p>
    </>
  );
};
