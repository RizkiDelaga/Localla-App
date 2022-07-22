import React, { Fragment } from 'react';

import Navbar from '../../components/Navbar/Navbar';

import Error404_Icon from '../../assets/images/404_Icon.png';

function PageNotFound() {
  React.useEffect(() => {
    document.title = 'Page Not Found';
  }, []);

  return (
    <Fragment>
      <Navbar logo={true} search={true} mobileMenu={true} desktopMenu={true} />

      <div
        className="text-center"
        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
      >
        <h1>Error</h1>
        <img src={Error404_Icon} alt="" className="w-100" style={{ maxWidth: '400px' }} />
        <h1>Page Not Found</h1>
      </div>
    </Fragment>
  );
}

export default PageNotFound;
