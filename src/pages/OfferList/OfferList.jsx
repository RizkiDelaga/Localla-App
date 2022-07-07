import React, { Fragment } from 'react';
import ProductOfferList from '../../components/ProductOfferList/ProductOfferList';
import { Container, Card } from 'react-bootstrap';
import style from './OfferList.module.css'
import Navbar from '../../components/Navbar/Navbar';
import CardUser from '../../components/CardUser/CardUser';


function OfferList() {

    React.useEffect(() => {
        document.title = "Daftar Penawar";
    }, []);

    return (
        <Fragment>
            <Navbar logo={true} backButton="/productlist" normalTitle="Info Penawar" />
            <Container className='d-flex justify-content-center' style={{height: '1200px', marginTop: '100px'}}>
                    <div style={{maxWidth: '800px'}}>
                        <CardUser />
                        <div className="diva">
                            <h6 className={`fw-bold my-4`}>Daftar Produkmu yang Ditawar</h6>
                            <ProductOfferList />
                            <hr />
                            <ProductOfferList />
                            <hr />
                        </div>
                    </div>
            </Container>
        </Fragment>
    );
}

export default OfferList;