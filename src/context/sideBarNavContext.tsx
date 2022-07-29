import { createContext, ReactNode, useState } from 'react';

interface ISideBarNavContext {
  isColapsed: boolean;
  setIsColapsed: (isColapsed: boolean) => void;
}

interface ISideBarNavProvider {
  children: ReactNode;
}

export const SideBarNavContext = createContext<ISideBarNavContext>(
  {} as ISideBarNavContext);

export function SideBarNavProvider({ children }: ISideBarNavProvider) {
  const [isColapsed, setIsColapsed] = useState(true);

  return (
    <>
  <SideBarNavContext.Provider value={{ isColapsed, setIsColapsed }}>
      {children}
    </SideBarNavContext.Provider>
    </>
  );
}
