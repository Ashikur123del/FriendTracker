import React, { createContext, useState, useContext } from 'react';

export const FriendContext = createContext();

export const FriendProvider = ({ children }) => {
  const [callLogs, setCallLogs] = useState([]);
  const [textLogs, setTextLogs] = useState([]);
  const [videoLogs, setVideoLogs] = useState([]);


  const syncInteractions = (type, data) => {
    if (type === 'Call') setCallLogs(data);
    else if (type === 'Text') setTextLogs(data);
    else if (type === 'Video') setVideoLogs(data);
  };

  return (
    <FriendContext.Provider value={{ 
      callLogs, textLogs, videoLogs, syncInteractions 
    }}>
      {children}
    </FriendContext.Provider>
  );
};

export const useFriends = () => {
  const context = useContext(FriendContext);
  if (!context) throw new Error("useFriends must be used within a FriendProvider");
  return context;
};