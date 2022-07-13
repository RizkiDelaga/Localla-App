import React, { Fragment, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import style from './RegisterSeller.module.css';

import Navbar from '../../components/Navbar/Navbar';

import Plus_Icon from '../../assets/icon/Plus_Icon.png';
import fi_eye from '../../assets/icons/fi_eye.png';
import Google_Icon from '../../assets/icons/Google_Icon.png';

function RegisterSeller() {
  const [shopName, setShopName] = useState('');

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append('nameShop', shopName);
    formData.append('image', files[0]);

    try {
      const res = await axios({
        method: 'PUT',
        url: 'https://localla-api.herokuapp.com/api/v1/seller',
        data: formData,
        headers: {
          'content-type': 'multipart/form-data',
          authorization: `${localStorage.getItem('access_token')}`,
        },
      });
      if (res.status === 200) {
        console.log('Register Successfully!');
      }
    } catch (error) {
      console.log('error..  ', error);
    }
  };

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxFiles: 1,
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

  const deleteImageItem = (file) => {
    setFiles(files.filter((item) => item !== file));
  };

  const filesName = files.map((file) => (
    <li>
      <div className="d-flex mb-2">
        <p className={`m-0 ${style['text-ellipsis']}`}>
          {console.log('file.. ', typeof file)}
          {typeof file === 'string' ? file : file.path}
        </p>
        <Button variant="danger" className={`ms-3 py-0`} onClick={() => deleteImageItem(file)}>
          Delete
        </Button>
      </div>
    </li>
  ));

  const thumbs = files.map((file) => (
    <div className={`${style['thumb']}`} key={file.name}>
      <div className={`${style['thumb-inner']}`}>
        <img
          src={typeof file === 'string' ? file : file.preview}
          className={`${style['img-preview']}`}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
          alt=""
        />
      </div>
    </div>
  ));

  return (
    <Fragment>
      <Navbar logo={true} backButton="/productlist" normalTitle="Buka Toko" />

      <Container className={`d-flex justify-content-center`} style={{ marginTop: '100px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <Form
            className={`px-3 ${style['']}`}
            onSubmit={(event) => {
              event.preventDefault();
              //   submitHandler();
            }}
          >
            <h4 className={`mb-5 text-center`}>Informasi Toko</h4>
            <Form.Group className="mb-3">
              <Form.Label>Nama Toko</Form.Label>
              <Form.Control
                className={`${style['input-field']}`}
                type="text"
                placeholder="Shop Name"
                value={shopName}
                onChange={(e) => {
                  setShopName(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Foto Toko</Form.Label>

              <div
                {...getRootProps({ className: 'dropzone' })}
                className={`d-flex justify-content-center align-items-center ${style['dropzone-box']}`}
              >
                <input {...getInputProps()} required />
                <div className={`p-2 text-center text-secondary ${style['dropzone-area']}`}>
                  <img src={Plus_Icon} className={`mb-3`} style={{ width: '40%' }} alt="" />
                  <p>Tambah Foto</p>
                </div>
              </div>
              <Form.Text className="text-muted d-block m-0">Maksimal 4 foto</Form.Text>
              <aside className={`d-block ${style['thumbs-container']}`}>
                {files ? (
                  <>
                    {thumbs}
                    <ul>{filesName}</ul>
                  </>
                ) : null}
              </aside>
            </Form.Group>

            <button
              type="submit"
              className={`mt-3 ${style['register-button']}`}
              onClick={() => {
                console.log(shopName, '   data file.. ', files);
                submitHandler();
              }}
            >
              Buka Toko
            </button>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
}

export default RegisterSeller;
