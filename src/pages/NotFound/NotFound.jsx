import React, { Fragment, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';

import Error404_Icon from '../../assets/images/404_Icon.png';

function NotFound() {

  React.useEffect(() => {
    document.title = "Page Not Found";
  }, []);

  return (
    <Fragment>
        <Navbar logo={true} search={true} mobileMenu={true} login={true} desktopMenu={true} />

        <div className="text-center" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <h1>Error</h1>
            <img src={Error404_Icon} alt="" className='w-100' style={{maxWidth: '400px'}} />
            <h1>Not Found</h1>
        </div>
    </Fragment>
  );
}

export default NotFound;
