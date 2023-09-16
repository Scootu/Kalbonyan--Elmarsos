import { Outlet, useLoaderData, useSubmit } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import { useEffect } from 'react';
import { getTokenDuration } from '../util/auth';

function RootLayout() {
  // const navigation = useNavigation();

  const token = useLoaderData();
  const submit = useSubmit();
  useEffect(() => {

    if (!token) { // check the token if existe 
      return;
    }
    if (token === 'EXPIRED') { // Check the time limit of one hour. 
      submit(null, { action: '/logout', method: 'POST' })
      return;
    }
    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);
    // this is the important function will perform 
    // an navigation based in the time of tokenDuration
    setTimeout(() => {
      submit(null, { action: '/logout', method: 'POST' })
    }, tokenDuration);
  }, [token, submit])
  return (
    <>
      <MainNavigation />
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
