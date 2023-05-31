// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0;

import "forge-std/Test.sol";
import { MudV2Test } from "@latticexyz/std-contracts/src/test/MudV2Test.t.sol";

import { IWorld } from "../../codegen/world/IWorld.sol";
import { Item, OwnedBy } from "../../codegen/Tables.sol";

import { SandID } from "../../prototypes/Blocks.sol";
import { addressToEntityKey } from "../../utils.sol";
import { VoxelCoord } from "../../types.sol";
import { Utilities } from "@latticexyz/std-contracts/src/test/Utilities.sol";
import { console } from "forge-std/console.sol";

contract MineSystemTest is MudV2Test {
   IWorld private world;
   Utilities internal immutable utils = new Utilities();

   address payable internal alice;

    function setUp() public override {
        super.setUp();
        world = IWorld(worldAddress);

        alice = utils.getNextUserAddress();
    }

  function testMineTerrain() public {
    VoxelCoord memory coord = VoxelCoord({ x: -1598, y: 10, z: 4650 }); // Sand
    console.log("testMineTerrain");

    bytes32 minedEntity = world.mine(coord, SandID);
    console.logBytes32(minedEntity);
    console.logBytes32(Item.get(minedEntity));

    // assertEq(Item.get(minedEntity), SandID);
    // assertEq(OwnedBy.get(minedEntity), addressToEntityKey(alice));
  }

}
