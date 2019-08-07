// flow-typed signature: 3ccee4f71e596a04a801bf58b369e08b
// flow-typed version: c6154227d1/react-visibility-sensor_v5.x.x/flow_>=v0.104.x

declare module 'react-visibility-sensor' {
  declare export type Rect = {
    top?: number,
    left?: number,
    bottom?: number,
    right?: number,
    ...
  };

  declare export type VisibilitySensorProps = {
    active?: boolean,
    partialVisibility?: boolean,
    offset?: Rect,
    minTopValue?: number,
    intervalCheck?: boolean,
    intervalDelay?: number,
    scrollCheck?: boolean,
    scrollDelay?: number,
    scrollThrottle?: number,
    resizeCheck?: boolean,
    resizeDelay?: number,
    resizeThrottle?: number,
    containment?: any,
    delayedCall?: boolean,
    onChange: (isVisible: boolean, visibilityRect?: Rect) => void,
    ...
  };

  declare export default class VisibilitySensor extends React$Component<VisibilitySensorProps> {}
}
