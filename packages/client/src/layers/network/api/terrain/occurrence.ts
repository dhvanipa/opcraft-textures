import { Entity } from "@latticexyz/recs";
import { BlockType } from "../../constants";
import { STRUCTURE_CHUNK, Biome } from "./constants";
import { getStructureBlock, WoolTree, Tree } from "./structures";
import { TerrainState } from "./types";
import { accessState } from "./utils";

export function Air({ coord: { y }, height }: TerrainState): Entity | undefined {
  if (y >= 21) return BlockType.Air;
}

export function Bedrock({ coord: { y } }: TerrainState): Entity | undefined {
  if (y <= -63) return BlockType.Bedrock;
}


export function Grass( state: TerrainState): Entity | undefined {
  const {
    coord: { y },
  } = state;
  if (y == 20) return BlockType.Grass;
}

export function Dirt( state: TerrainState): Entity | undefined {
  const {
    coord: { y },
  } = state;
  if (y < 20 && y > -63) return BlockType.Dirt;
}