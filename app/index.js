import Home from './home';
import Loading from './components/loading';
import Login from './(auth)/login';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from 'react';


export default function Page()  {
    
    const auth = getAuth();
    const [initializing, setInitializing] = React.useState(true);
    const [user, setUser] = React.useState(null);

    // Handle user state changes
    const onAuthStateChangedHandler = (user) => {
        setUser(user);
        if (initializing) {
        setInitializing(false);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, onAuthStateChangedHandler);
    
        return unsubscribe;
      }, []);
    
      if (initializing) {
        return (
          <Loading />
        );
      }

    return (
        <>

        {user ? <Home />  :  <Login />}  
        
        </>
    )
}
