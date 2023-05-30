import { mudConfig } from "@latticexyz/world/register";

// table documentation: https://latticexyz.notion.site/Store-930ed995c2b14782ae9a949e1e3c8fe9
// we should use fileSelector soon:
// fileSelector (optional) only used with the World framework: a string: where to create the table in the namespace.

// why not use uint256 when uint64 can be more than enough to store most values (ie.. block types)
// because we are building an AW, it's easier for random people to just get a random ID than to organize a list of IDs (to fit some arbitrary limit)
// it's also 2023, so we can use 256 bits without worrying about storage costs.
export default mudConfig({
  tables: {
    Item: "uint256",
    ItemPrototype: "bool",
    Name: "string", // This is a shortcut for { schema: "string" }
    // note: occurance is omitted, since it is a functionBare component. This is just a weird implementation. We'll change it
    OwnedBy: "uint256",
    Position: {
      schema: { // voxelcoord is removed in mud2, so we need to manually specify x,y,z
        x: "int32",
        y: "int32",
        z: "int32"
      }
    },
    Recipe: "uint256",
    Stake: "uint32",
    Claim: {
      schema: {
        stake: "uint32",
        claimer: "uint256",
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
  ],
});
