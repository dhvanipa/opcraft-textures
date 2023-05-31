import { createClientComponents } from "./createClientComponents";
import { createSystemCalls } from "./createSystemCalls";
import { setupNetwork } from "./setupNetwork";
import {boot} from "../boot";

export type SetupResult = Awaited<ReturnType<typeof setup>>;

export async function setup(setLayers: any) {
  console.log("Starting setup");
  const network = await setupNetwork();
  console.log("Finished setup network");
  const components = createClientComponents(network);
  console.log("Finished setup components");
  const systemCalls = createSystemCalls(network, components);

  boot(network, setLayers);

  console.log("Finished setup");

  return {
    network,
    components,
    systemCalls,
  };
}
