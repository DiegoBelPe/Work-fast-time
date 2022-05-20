import React, { createContext, useState } from 'react';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
  const [user, setUser] = useState(true);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user, setUser }}>
      {children}

    </UserContext.Provider>

  );
}

export default UserProvider;
