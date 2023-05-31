import ReactDOM from "react-dom/client";
import { mount as mountDevTools } from "@latticexyz/dev-tools";
import { App } from "./App";
import { setup } from "./mud/setup";
import { MUDProvider } from "./MUDContext";
import { Layers } from "./types";

const rootElement = document.getElementById("react-root");
if (!rootElement) throw new Error("React root not found");
const root = ReactDOM.createRoot(rootElement);

const setLayers: { current: (layers: Layers) => void } = { current: () => undefined };

// TODO: figure out if we actually want this to be async or if we should render something else in the meantime
setup(setLayers).then((result) => {
  root.render(
    <MUDProvider value={result}>
      <App setLayers={setLayers} />
    </MUDProvider>
  );
  mountDevTools();
});
