// @flow
import * as React from 'react';
import { Group, Label, InputStyle, Prepend, Append } from './style';

type Props = {
  prepend?: React.Node | string | number,
  append?: React.Node | string | number,
  id?: string,
  label?: string,
  placeholder?: string,
  type: string,
  onChange?: any => void,
  disabled?: boolean,
  width?: number
};

export default (props: Props) => (
  <Group>
    {props.prepend && <Prepend>{props.prepend}</Prepend>}
    <InputStyle {...props} />
    {props.append && <Append>{props.append}</Append>}
  </Group>
);

export const LabeledInput = ({ label = 'Default label', ...props }: Props) => (
  <Group>
    {label && <Label htmlFor={props.id}>{label} </Label>}
    <Group>
      {props.prepend && <Prepend>{props.prepend}</Prepend>}
      <InputStyle {...props} />
      {props.append && <Append>{props.append}</Append>}
    </Group>
  </Group>
);
