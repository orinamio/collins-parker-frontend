// @flow
import * as React from 'react';

import { Group, Label } from '../Input/style';
import { SelectStyle, Option } from './style';

type Props = {
  id: string,
  defaultSelectOptionText?: string,
  options: Array<{ [key: string]: string }>,
  disabled?: boolean,
  width?: number
};

type ExtraProps = Props & {
  label: string
};

const select = ({
  defaultSelectOptionText = 'Select option',
  options,
  ...props
}: Props) => (
  <SelectStyle {...props}>
    <Option value="">{defaultSelectOptionText}</Option>
    {options.map(({ value, text }) => (
      <Option key={value} value={value}>
        {text}
      </Option>
    ))}
  </SelectStyle>
);

export default (props: Props) => select(props);

export const LabeledSelect = ({ label = 'Select', ...props }: ExtraProps) => (
  <Group>
    {label && <Label htmlFor={props.id}>{label} </Label>}
    {select(props)}
  </Group>
);
