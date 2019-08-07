import * as React from 'react';

import { PageOverlay as PageOverlayStyle } from './style';

import { useSidePanelState } from '../../context/sidePanelState';

export default function PageOverlay() {
  const [sidePanelState] = useSidePanelState();
  return <PageOverlayStyle menuIsOpen={sidePanelState} />;
}
