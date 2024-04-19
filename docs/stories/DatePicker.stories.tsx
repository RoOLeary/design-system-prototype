import * as React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { DatePicker, Flex, Button, DatePickerProps } from '@strapi/design-system';

const meta: Meta<typeof DatePicker> = {
  title: 'Design System/Components/DatePicker',
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Base = {
  render: () => {
    const [error, toggleError] = React.useState<string>();
    const [disabled, toggleDisabled] = React.useState(false);

    return (
      <Flex direction="column" alignItems="stretch" gap={11}>
        <DatePicker label="Your birthday" error={error} disabled={disabled} />
        <Flex gap={2} justifyContent="center">
          <Button variant="danger-light" onClick={() => toggleError((s) => (s ? undefined : "That's not a birthday!"))}>
            {`${error ? 'Hide' : 'Show'} the error state`}
          </Button>
          <Button variant="tertiary" onClick={() => toggleDisabled((s) => !s)}>
            {`${disabled ? 'Hide' : 'Show'} the disabled state`}
          </Button>
        </Flex>
      </Flex>
    );
  },

  name: 'base',
} satisfies Story;

export const Controlled = {
  render: () => {
    const [date, setDate] = React.useState<undefined | Date>(new Date('1990-01-01'));

    return (
      <DatePicker onChange={setDate} selectedDate={date} label="Your birthday" onClear={() => setDate(undefined)} />
    );
  },

  name: 'controlled',
} satisfies Story;

export const MinMaxDate = {
  render: () => {
    const [date, setDate] = React.useState<Date>();

    return (
      <DatePicker
        onChange={setDate}
        selectedDate={date}
        label="Favourite day of 2022"
        minDate={new Date('2022-01-01')}
        maxDate={new Date('2022-12-31')}
        onClear={() => setDate(undefined)}
      />
    );
  },

  name: 'min/max date',
} satisfies Story;

export const Locale = {
  render: () => {
    const [date, setDate] = React.useState<Date>();

    return (
      <DatePicker
        onChange={setDate}
        selectedDate={date}
        label="German date picker"
        locale="de-DE"
        onClear={() => setDate(undefined)}
      />
    );
  },

  name: 'locale',
} satisfies Story;

export const Sizing = {
  render: () => {
    const [size, setSize] = React.useState<DatePickerProps['size']>('S');

    return (
      <Flex direction="column" alignItems="stretch" gap={11}>
        <DatePicker required size={size} label={size === 'S' ? 'Small date picker' : 'Medium date picker'} />
        <Flex justifyContent="center">
          <Button variant="default" onClick={() => setSize((s) => (s === 'S' ? 'M' : 'S'))}>
            {size === 'S' ? `Show medium size` : `Show small size`}
          </Button>
        </Flex>
      </Flex>
    );
  },

  name: 'sizing',
} satisfies Story;
