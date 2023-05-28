import { mudConfig } from "@latticexyz/world/register";

// table documentation: https://latticexyz.notion.site/Store-930ed995c2b14782ae9a949e1e3c8fe9
// we should use fileSelector soon:
// fileSelector (optional) only used with the World framework: a string: where to create the table in the namespace.

// why not use uint256 when uint64 can be more than enough to store most values (ie.. block types)
// because we are building an AW, it's easier for random people to just get a random ID than to organize a list of IDs (to fit some arbitrary limit)
// it's also 2023, so we can use 256 bits without worrying about storage costs.
export default mudConfig({
  tables: {
    Counter: {
      keySchema: {},
      schema: "uint32",
    },
    Position: {
      schema: {
        x: "int32",
        y: "int32",
        z: "int32"
      }
    },
    Item: "uint128", // maps uint256 -> VoxelCoord
  },
  enums: {
    BlockDirection: ["None", "Up", "Down", "North", "South", "East", "West"]
  }
});
