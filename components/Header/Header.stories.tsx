import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Header from "./Header";

export default {
  title: "Common/Header",
  component: Header,
} as Meta;

export const header = () => <Header />;
