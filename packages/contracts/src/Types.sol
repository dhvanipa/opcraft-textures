// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

struct Coord {
    int32 x;
    int32 y;
}

// I don't want to import it from the library because it imports other things that I think are mud1, which makes it not compile
import { VoxelCoord } from "@latticexyz/std-contracts/src/components/VoxelCoordComponent.sol";
//struct VoxelCoord {
//    int32 x;
//    int32 y;
//    int32 z;
//}

struct Tuple {
    int128 x;
    int128 y;
}

