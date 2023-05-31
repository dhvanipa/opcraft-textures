import React from "react";
import { LayerContext, EngineContext } from "./context";
import { EngineStore } from "./store";
import { BootScreen, MainWindow } from "./components";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useState } from "react";
import { Layers } from "../../../types";

export const Engine: React.FC<{
  setLayers: { current: (layers: Layers) => void };
  mountReact: { current: (mount: boolean) => void };
  customBootScreen?: React.ReactElement;
}> = observer(({ mountReact, setLayers, customBootScreen }) => {
  const [mounted, setMounted] = useState(true);
  const [layers, _setLayers] = useState<Layers | undefined>();

  useEffect(() => {
    // mountReact.current = (mounted: boolean) => setMounted(mounted);
    console.log(layers);
    setLayers.current = (layers: Layers) => _setLayers(layers);
  }, []);

  console.log("Engine 1");
  console.log(layers);

  if (!mounted || !layers) return customBootScreen || <BootScreen />;

  console.log("Engine 2");

  return (
    <LayerContext.Provider value={layers}>
      <EngineContext.Provider value={EngineStore}>
        <MainWindow />
      </EngineContext.Provider>
    </LayerContext.Provider>
  );
});
