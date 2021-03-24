import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import ButtonLink from "./ButtonLink";

export default {
  title: "Common/ButtonLink",
  component: ButtonLink,
} as Meta;

export const Start = () => <ButtonLink href="#">Start</ButtonLink>;
export const Tabelle = () => <ButtonLink href="#">Tabelle</ButtonLink>;
export const Multiple = () => (
  // only for storybook preview
  <div style={{ display: "grid", gridRowGap: "0.5em" }}>
    <ButtonLink href="#">Start</ButtonLink>
    <ButtonLink href="#">Tabelle</ButtonLink>
    <ButtonLink href="#">Spieltag</ButtonLink>
    <ButtonLink href="#">Momentum</ButtonLink>
    <ButtonLink href="#">Beschreibung</ButtonLink>
  </div>
);
