import React, { Fragment } from 'react';

import No_Data_Image from '../../assets/images/No_Data_Image.png';

function NoDataFound() {
  return (
    <Fragment>
      <div className="text-center">
        <img src={No_Data_Image} alt="" className="w-100" style={{ maxWidth: '400px' }} />
      </div>
    </Fragment>
  );
}

export default NoDataFound;
