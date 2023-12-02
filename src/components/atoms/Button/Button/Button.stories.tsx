// eslint-disable-next-line import/no-extraneous-dependencies
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Atoms/Button",
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: "select", options: ["slate", "white", "yellow"] },
    variant: { control: "select", options: ["solid", "outline"] },
    className: {
      name: "className",
      type: { name: "string", required: false },
      defaultValue: "",
      description: "additional class name",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Hello" },
      },
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Test</Button>;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: "yellow",
  variant: "solid",
};
//
export const Secondary = Template.bind({});
Secondary.args = {
  color: "slate",
  variant: "solid",
};
