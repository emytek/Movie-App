import React, { createContext, useContext, useState, ReactNode } from "react";

interface MovieContextProps {
  children: ReactNode;
}

interface MovieContextData {
  selectedMovieID: string | null;
  setMovieID: (id: string) => void;
}

const MovieContext = createContext<MovieContextData | undefined>(undefined);

export const MovieProvider: React.FC<MovieContextProps> = ({ children }) => {
  const [selectedMovieID, setSelectedMovieID] = useState<string | null>(null);

  const setMovieID = (id: string) => {
    setSelectedMovieID(id);
  };

  return (
    <MovieContext.Provider value={{ selectedMovieID, setMovieID }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = (): MovieContextData => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
