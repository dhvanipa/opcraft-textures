// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

import { addressToEntity } from "solecs/utils.sol";
import { System } from "@latticexyz/world/src/System.sol";
import { VoxelCoord } from "../types.sol";
import { OwnedBy } from "../codegen/Tables.sol";

contract BuildSystem is System {

  function build(uint256 blockEntity, VoxelCoord memory coord) public returns (uint32) {

    // Require block to be owned by caller
    require(OwnedBy.get(blockEntity) == addressToEntity(_msgSender()), "block is not owned by player");

    // Require no other ECS blocks at this position except Air

    return blockEntity;
  }

}