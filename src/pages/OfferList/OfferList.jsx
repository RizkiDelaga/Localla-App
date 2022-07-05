import React, { Fragment } from 'react';
import ProductOfferList from '../../components/ProductOfferList/ProductOfferList';
import { Container, Card } from 'react-bootstrap';
import style from './OfferList.module.css'
import Navbar from '../../components/Navbar/Navbar';


function OfferList() {

    React.useEffect(() => {
        document.title = "Daftar Penawar";
    }, []);

    return (
        <Fragment>
            <Navbar logo={true} backButton="/productlist" normalTitle="Info Penawar" />
            <Container style={{height: '2200px'}}>
                <div className={`d-flex justify-content-center`}>
                    <div style={{maxWidth: '800px', margin: '0 50px'}}>
                        <div className={`${style.btnBack}`}>
                            <button className={`p-2`} style={{color: 'black', backgroundColor: 'white', border: 'none'}}><i className={`fa fa-solid fa-arrow-left fa-lg`} /></button>
                        </div>
                        <Card>
                            <Card.Body>This is some text within a card body.</Card.Body>
                        </Card>
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