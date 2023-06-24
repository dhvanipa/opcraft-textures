import {AbsoluteBorder, Crafting, Slot} from "./common";
import {range} from "@latticexyz/utils";
import React, {useEffect} from "react";
import styled from "styled-components";
import {Layers} from "../../../types";
import {NetworkLayer} from "../../network";
import { useComponentValue } from "@latticexyz/react";
import {getEntitiesWithValue} from "../../../../../../../mud/packages/recs";

const NUM_COLS = 9;
const NUM_ROWS = 4;
export const CreativeInventory = (layers: any )  => {

	const {
		components: { ItemPrototype , Items},
	} = layers.layers.network;

const [ItemSlots, setItemSlots] = React.useState<React.ReactElement[]>([]);
useEffect(() => {
	const voxelTypes = getEntitiesWithValue(ItemPrototype, { value: true });
	console.log("creative voxelTypes", voxelTypes);
	// const slots = ItemSlots.
}, [ItemPrototype])


return (
	<AbsoluteBorder borderColor={"#999999"} borderWidth={3}>
		<ActionBarWrapper>
				{[...range(NUM_COLS * NUM_ROWS)]
				.map((i) => i + NUM_COLS)
				.map((i) => ItemSlots[i])
			}
		</ActionBarWrapper>
	</AbsoluteBorder>
)}
const ActionBarWrapper = styled.div`
  background-color: rgb(0 0 0 / 40%);
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  align-items: center;
  pointer-events: all;
  border: 5px lightgray solid;
  z-index: 10;
  position: relative;
`;

