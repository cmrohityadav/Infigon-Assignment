import type { Meta, StoryObj } from '@storybook/react';

import  CourseSection from '../components/CourseSection';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'CourseSection',
  component: CourseSection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof CourseSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const side: Story = {
  args: {
    primary: true,
    label: 'course Card',
  },
};

export const mobile: Story = {
  args: {
    label: 'course Card',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'course Card',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
