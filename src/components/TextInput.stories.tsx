import { Meta, StoryObj } from "@storybook/react";
import {
  TextInput,
  TextInputInputProps,
  TextInputRootProps,
} from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    childreen: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your email" />,
    ],
  },
  argTypes: {
    childreen: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {};

export const WhithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    childreen: [<TextInput.Input placeholder="Type your email" />],
  },
};
