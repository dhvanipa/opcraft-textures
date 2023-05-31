import { BigNumber } from "ethers";
// this function was originally from import { formatEntityID } from "@latticexyz/network";
// I derived it by looking at the definition in the opcraft repo (it was there in mud1)
export const formatEntityID = (entityID:string) => {
  if (BigNumber.isBigNumber(entityID) || entityID.substring(0, 2) === "0x"){
    return BigNumber.from(entityID).toHexString();
  }
  return entityID;
}