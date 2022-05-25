import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../utils/firebase';

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
function UserProvider({ children }) {
  const [user, setUser] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('user:', user);
      if (user) {
        const { email, photoURL, displayName, uid } = user;
        setUser({ email, photoURL, displayName, uid });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  const registerUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const loginUser = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const logoutUser = () => signOut(auth);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user, setUser, registerUser, loginUser, logoutUser }}>
      {children}

    </UserContext.Provider>

  );
}

export default UserProvider;
