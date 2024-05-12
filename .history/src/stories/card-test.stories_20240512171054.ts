import type { Meta, StoryObj } from '@storybook/react';
import { CardWithForm } from '../components/card-test';

const meta = {
  title: 'Example/CardWithForm',
  component: CardWithForm,
  tags: ['autodocs'],
} satisfies Meta<typeof CardWithForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};