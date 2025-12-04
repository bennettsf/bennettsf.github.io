import React, { createContext, useContext, useState } from 'react';

interface SelectedTilesContextType {
  selectedTiles: { key: string; letter: string; points: number }[];
  setSelectedTiles: React.Dispatch<
    React.SetStateAction<{ key: string; letter: string; points: number }[]>
  >;
}

const SelectedTilesContext = createContext<SelectedTilesContextType | undefined>(undefined);

export const SelectedTilesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTiles, setSelectedTiles] = useState<
    { key: string; letter: string; points: number }[]
  >([]);
  return (
    <SelectedTilesContext.Provider value={{ selectedTiles, setSelectedTiles }}>
      {children}
    </SelectedTilesContext.Provider>
  );
};

export const useSelectedTiles = (): SelectedTilesContextType => {
  const context = useContext(SelectedTilesContext);
  if (!context) {
    throw new Error('useSelectedTiles must be used within a SelectedTilesProvider');
  }
  return context;
};
