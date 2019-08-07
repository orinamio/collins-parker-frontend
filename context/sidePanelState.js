import * as React from 'react';

const SidePanelStateContext = React.createContext();

function useSidePanelState() {
  const context = React.useContext(SidePanelStateContext);
  if (!context) {
    throw new Error(
      `useSidePanelState must be used within a SidePanelProvider`
    );
  }
  return context;
}

function SidePanelProvider(props) {
  const [sidePanelState, setSidePanelState] = React.useState(false);
  const value = React.useMemo(() => [sidePanelState, setSidePanelState], [
    sidePanelState
  ]);

  return <SidePanelStateContext.Provider value={value} {...props} />;
}

export { SidePanelProvider, useSidePanelState };
