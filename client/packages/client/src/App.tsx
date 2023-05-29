import { useComponentValue } from "@latticexyz/react";
import { useMUD } from "./MUDContext";
import {Engine} from "./layers/react/engine";


const mountReact: { current: (mount: boolean) => void } = { current: () => undefined};
const setLayers: { current: (layers: Layers) => void } = { current: () => undefined };
export const App = () => {
  const {
    components: { },
    systemCalls: { increment },
    network: { singletonEntity },
  } = useMUD();

  return (
    <>
      <Engine setLayers={setLayers} mountReact={mountReact} />
    </>
  );
};
