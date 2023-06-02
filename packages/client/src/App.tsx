import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import {Engine} from "./layers/react/engine";
import { Layers } from "./types";


const mountReact: { current: (mount: boolean) => void } = { current: () => undefined};
export const App = () => {
  const {
    components: { },
    systemCalls: { increment },
    network: { singletonEntity },
    game: { layers },
  } = useMUD();

  return (
    <>
      <Engine layers={layers} mountReact={mountReact} />
    </>
  );
};
