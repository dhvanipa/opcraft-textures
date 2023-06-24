import {AbsoluteBorder, Crafting} from "./common";
import {range} from "@latticexyz/utils";
import React from "react";
import styled from "styled-components";
import {Layers} from "../../../types";
import {NetworkLayer} from "../../network";

export const CreativeInventory = (layers: any )  => {


return (
	<AbsoluteBorder borderColor={"#999999"} borderWidth={3}>
		<ActionBarWrapper>
			<div>hi</div>
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

