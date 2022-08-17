import React, { createContext, useState } from 'react';

type UserData = {
  showForm: boolean;
};

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const UserContext = createContext<UserData | any>(undefined);
const UserDispatchContext = createContext<any>(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context

const UserProvider = ({ children }: { children: any }) => {
  const [userData, setUserData] = useState<UserData>({
    showForm: true,
  });

  return (
    <UserContext.Provider value={userData}>
      <UserDispatchContext.Provider value={setUserData}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext, UserDispatchContext };
