import React from "react";
import { LayerContext, EngineContext } from "./context";
import { EngineStore } from "./store";
import { BootScreen, MainWindow } from "./components";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useState } from "react";
import { Layers } from "../../../types";

export const Engine: React.FC<{
  layers: any;
  mountReact: { current: (mount: boolean) => void };
  customBootScreen?: React.ReactElement;
}> = observer(({ mountReact, layers, customBootScreen }) => {
  const [mounted, setMounted] = useState(true);
  // const [layers, _setLayers] = useState<Layers | undefined>();

  // useEffect(() => {
  //   // mountReact.current = (mounted: boolean) => setMounted(mounted);
  //   // console.log(layers);
  //   // setLayers.current = (layers: Layers) => _setLayers(layers);
  // }, []);

  if (!mounted || !layers) return customBootScreen || <BootScreen />;

  return (
    <LayerContext.Provider value={layers}>
      <EngineContext.Provider value={EngineStore}>
        <MainWindow />
      </EngineContext.Provider>
    </LayerContext.Provider>
  );
});
