import { mudConfig } from "@latticexyz/world/register";
import { resolveTableId } from "@latticexyz/config";

// table documentation: https://latticexyz.notion.site/Store-930ed995c2b14782ae9a949e1e3c8fe9
// we should use fileSelector soon:
// fileSelector (optional) only used with the World framework: a string: where to create the table in the namespace.

export default mudConfig({
  tables: {
    Item: "bytes32",
    ItemPrototype: "bool",
    Name: "string", // This is a shortcut for { schema: "string" }
    // note: occurance is omitted, since it is a functionBare component. This is just a weird implementation. We'll change it
    OwnedBy: "bytes32",
    Position: {
      schema: { // voxelcoord is removed in mud2, so we need to manually specify x,y,z
        x: "int32",
        y: "int32",
        z: "int32"
      }
    },
    Recipe: "bytes32",
    Stake: "uint32",
    Claim: {
      schema: {
        stake: "uint32",
        claimer: "bytes32",
      }
    },
  },
  // systems: {
  //   LibTerrainSystem: {
  //     name: "LibTerrainSystem",
  //     openAccess: true,
  //   },
  //   OccurrenceSystem: {
  //     name: "OccurrenceSystem",
  //     openAccess: true,
  //   },
  //   PerlinSystem: {
  //     name: "PerlinSystem",
  //     openAccess: true,
  //   },
  // },
  enums: {
    BlockDirection: ["None", "Up", "Down", "North", "South", "East", "West"]
  },
  // https://v2.mud.dev/ecs: Note: we recommend adding the UniqueEntityModule to your World. It allows system to request a fresh entity ID that hasn't been used before. It is useful when creating new entities dynamically.
  modules: [
    {
      name: "UniqueEntityModule",
      root: true,
      args: [],
    },
    {
      name: "KeysWithValueModule",
      root: true,
      args: [resolveTableId("MyTable")],
    },
  ],
});
