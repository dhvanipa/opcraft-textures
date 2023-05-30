// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.0;
import { IWorld } from "../codegen/world/IWorld.sol";
import { getAddressById, addressToEntity } from "solecs/utils.sol";
import { AirID, GrassID, DirtID, LogID, StoneID, SandID, WaterID, CobblestoneID, CoalID, CraftingID, IronID, GoldID, DiamondID, LeavesID, PlanksID, RedFlowerID, GrassPlantID, OrangeFlowerID, MagentaFlowerID, LightBlueFlowerID, LimeFlowerID, PinkFlowerID, GrayFlowerID, LightGrayFlowerID, CyanFlowerID, PurpleFlowerID, BlueFlowerID, GreenFlowerID, BlackFlowerID, KelpID, WoolID, SnowID, ClayID, BedrockID } from "../prototypes/Blocks.sol";
import { VoxelCoord } from "../types.sol";
import { System } from "@latticexyz/world/src/System.sol";

uint256 constant ID = uint256(keccak256("system.Occurrence"));

// This system is used to check whether a given block occurs at a given location.
// For blocks added after deployment of the core contracts, a new contract with a function
// returning the occurrence of that block can be deployed and linked with the block's Occurrence component.
contract OccurrenceSystem is System {
  IWorld private world;
  constructor() {
    world = IWorld(_world());
  }

  function execute(bytes memory arguments) public pure returns (bytes memory) {
    (uint256 blockType, VoxelCoord memory coord) = abi.decode(arguments, (uint256, VoxelCoord));

    if (blockType == GrassID) return abi.encode(world.Grass(coord));
    if (blockType == DirtID) return abi.encode(world.Dirt(coord));
    if (blockType == LogID) return abi.encode(world.Log(coord));
    if (blockType == StoneID) return abi.encode(world.Stone(coord));
    if (blockType == SandID) return abi.encode(world.Sand(coord));
    if (blockType == WaterID) return abi.encode(world.Water(coord));
    if (blockType == DiamondID) return abi.encode(world.Diamond(coord));
    if (blockType == CoalID) return abi.encode(world.Coal(coord));
    if (blockType == LeavesID) return abi.encode(world.Leaves(coord));
    if (blockType == RedFlowerID) return abi.encode(world.RedFlower(coord));
    if (blockType == GrassPlantID) return abi.encode(world.GrassPlant(coord));
    if (blockType == OrangeFlowerID) return abi.encode(world.OrangeFlower(coord));
    if (blockType == MagentaFlowerID) return abi.encode(world.MagentaFlower(coord));
    if (blockType == LightBlueFlowerID) return abi.encode(world.LightBlueFlower(coord));
    if (blockType == LimeFlowerID) return abi.encode(world.LimeFlower(coord));
    if (blockType == PinkFlowerID) return abi.encode(world.PinkFlower(coord));
    if (blockType == GrayFlowerID) return abi.encode(world.GrayFlower(coord));
    if (blockType == LightGrayFlowerID) return abi.encode(world.LightGrayFlower(coord));
    if (blockType == CyanFlowerID) return abi.encode(world.CyanFlower(coord));
    if (blockType == PurpleFlowerID) return abi.encode(world.PurpleFlower(coord));
    if (blockType == BlueFlowerID) return abi.encode(world.BlueFlower(coord));
    if (blockType == GreenFlowerID) return abi.encode(world.GreenFlower(coord));
    if (blockType == BlackFlowerID) return abi.encode(world.BlackFlower(coord));
    if (blockType == KelpID) return abi.encode(world.Kelp(coord));
    if (blockType == WoolID) return abi.encode(world.Wool(coord));
    if (blockType == SnowID) return abi.encode(world.Snow(coord));
    if (blockType == ClayID) return abi.encode(world.Clay(coord));
    if (blockType == BedrockID) return abi.encode(world.Bedrock(coord));
    return abi.encode(uint256(0));
  }

  function executeTyped(uint256 blockType, VoxelCoord memory coord) public pure returns (uint256) {
    return abi.decode(execute(abi.encode(world.blockType, coord)), (uint256));
  }

  // Occurence functions

//  function Grass(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Grass(coord);
//  }
//
//  function Dirt(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Dirt(coord);
//  }
//
//  function Log(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Structure(coord);
//  }
//
//  function Stone(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Stone(coord);
//  }
//
//  function Sand(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Sand(coord);
//  }
//
//  function Water(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Water(coord);
//  }
//
//  function Diamond(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Diamond(coord);
//  }
//
//  function Coal(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Coal(coord);
//  }
//
//  function Leaves(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Structure(coord);
//  }
//
//  function RedFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function GrassPlant(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function OrangeFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function MagentaFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function LightBlueFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function LimeFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function PinkFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function GrayFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function LightGrayFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function CyanFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function PurpleFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function BlueFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function GreenFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function BlackFlower(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function Kelp(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.SmallPlant(coord);
//  }
//
//  function Wool(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Structure(coord);
//  }
//
//  function Snow(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Snow(coord);
//  }
//
//  function Clay(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Clay(coord);
//  }
//
//  function Bedrock(VoxelCoord memory coord) public pure returns (uint256) {
//    return world.Bedrock(coord);
//  }
}
