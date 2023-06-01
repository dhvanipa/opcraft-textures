import { BigNumber } from "ethers";
// this function was originally from import { formatEntityID } from "@latticexyz/network";
// I derived it by looking at the definition in the opcraft repo (it was there in mud1)
export const formatEntityID = (entityID:string) => {
  if (BigNumber.isBigNumber(entityID) || entityID.substring(0, 2) === "0x"){
    return BigNumber.from(entityID).toHexString();
  }
  return entityID;
}

// we need to convert the address to a 256 bit-long string when doing a query
// since queries look for 0x0000002kj32klj4, but this string won't match the address if we pass just the rightmost 42 chars of the eth address
// since a hex value takes 4 bits to represent, the final address is 64 characters long
export const toQueryAddress = (hexAddress: string | undefined) => {
  if (!hexAddress) {
    console.error("trying to run a query on an undefined address");
    return undefined;
  }
  const address = hexAddress.substring(2);
  return "0x" + address.padStart(64, "0");
}
