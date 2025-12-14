import { createContext, useContext, useState } from 'react';

interface SelectedTagsContextType {
  selectedTags: string[];
  setSelectedTags: (tags: string[]) => void;
}

const SelectedTagsContext = createContext<SelectedTagsContextType | undefined>(undefined);

export const SelectedTagsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['All']);
  return (
    <SelectedTagsContext.Provider value={{ selectedTags, setSelectedTags }}>
      {children}
    </SelectedTagsContext.Provider>
  );
};
export const useSelectedTags = (): SelectedTagsContextType => {
  const context = useContext(SelectedTagsContext);
  if (!context) {
    throw new Error('useSelectedTags must be used within a SelectedTagsProvider');
  }
  return context;
};
