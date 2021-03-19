import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import StartButton from "./StartButton";

export default {
  title: "Common/StartButton",
  component: StartButton,
} as Meta;

export const Start = () => <StartButton />;
