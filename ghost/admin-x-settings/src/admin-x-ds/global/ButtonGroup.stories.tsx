import type {Meta, StoryObj} from '@storybook/react';

import ButtonGroup from './ButtonGroup';
import {ButtonColors} from './Button';

const ButtonGroupMeta = {
    title: 'Global / Button Group',
    component: ButtonGroup,
    tags: ['autodocs']
} satisfies Meta<typeof ButtonGroup>;

export default ButtonGroupMeta;

type Story = StoryObj<typeof ButtonGroupMeta>;

const defaultButtons = [
    {
        label: 'Cancel',
        key: 'cancel',
        color: ButtonColors.Clear
    },
    {
        label: 'Save',
        key: 'save',
        color: ButtonColors.Black
    }
];

export const Default: Story = {
    args: {
        buttons: defaultButtons,
        link: false
    }
};

const linkButtons = [
    {
        label: 'Cancel',
        key: 'cancel',
        color: ButtonColors.Clear
    },
    {
        label: 'Save',
        key: 'save',
        color: ButtonColors.Green
    }
];

export const LinkButtons: Story = {
    args: {
        buttons: linkButtons,
        link: true
    }
};