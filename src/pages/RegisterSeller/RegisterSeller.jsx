import React, { Fragment, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getMyProfile } from '../../redux/Actions/ProfileAction';
import style from './RegisterSeller.module.css';

import Navbar from '../../components/Navbar/Navbar';

import Plus_Icon from '../../assets/icon/Plus_Icon.png';

function RegisterSeller() {
  const dispatch = useDispatch();
  const [shopName, setShopName] = useState('');
  const [files, setFiles] = useState([]);
  const [error, setError] = useState('');
  // const [backgroundImage, setBackgroundImage] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxFiles: 1,
    maxSize: 10000,
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles, fileRejections) => {
      console.log('fileRejections..  ', fileRejections);
      if (fileRejections.length) {
        return setError('(File type not supported or file size too large)');
      }
      setError('');
      console.log('acceptedFiles..  ', acceptedFiles);
      return setFiles([
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });
  const { isLoading: loadingDataMyProfile, data: dataMyProfile } = useSelector((state) => state.myProfile);

  React.useEffect(() => {
    document.title = 'Registrasi Seller';
    dispatch(getMyProfile());
    loadingDataMyProfile ? console.log('loadingDataMyProfile') : refreshForm();

    console.log('dataMyProfile.. register', dataMyProfile);
  }, [loadingDataMyProfile]);

  const refreshForm = () => {
    console.log('refreshForm', dataMyProfile);
    if (dataMyProfile && dataMyProfile.nameShop && dataMyProfile.imageShop) {
      setShopName(dataMyProfile.nameShop);
      setFiles([dataMyProfile.imageShop]);
      // setBackgroundImage([dataMyProfile.imageBackground]);
    } else {
      setShopName('');
      setFiles([]);
    }
  };

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append('nameShop', shopName);
    // formData.append('imageBackground', backgroundImage);
    if (files[0] !== dataMyProfile.imageShop) {
      formData.append('image', files[0]);
    }

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

  const filesName = files.map((file) => (
    <li>
      <div className="d-flex mb-2">
        <p className={`m-0 ${style['text-ellipsis']}`}>
          {console.log('file.. ', typeof file)}
          {typeof file === 'string' ? file : file.path}
        </p>
        <Button
          variant="danger"
          className={`ms-3 py-0`}
          onClick={() => {
            setFiles(files.filter((item) => item !== file));
          }}
        >
          Delete
        </Button>
      </div>
    </li>
  ));

  const imagePreview = files.map((file) => (
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
      <Navbar logo={true} backButton="/productlist" desktopMenu={true} />

      <Container className={`d-flex justify-content-center`} style={{ marginTop: '100px' }}>
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <h5 className={`mb-5 text-center`}>Informasi Toko</h5>
          <div className="d-flex justify-content-end">
            <button className={`d-flex align-items-center ${style['refresh-button']}`} onClick={() => refreshForm()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="20"
                fill="currentColor"
                class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16"
              >
                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
              </svg>
              <p className="m-0 ms-1">Refresh</p>
            </button>
          </div>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Nama Toko</Form.Label>
              <Form.Control
                className={`${style['input-field']}`}
                type="text"
                placeholder="Nama Toko"
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
              <Form.Text className="text-muted d-block m-0">
                Maksimal 5 MB <strong className="text-danger">{error}</strong>
              </Form.Text>
              <aside className={`d-block ${style['thumbs-container']}`}>
                {files ? (
                  <>
                    {imagePreview}
                    <ul>{filesName}</ul>
                  </>
                ) : null}
              </aside>
            </Form.Group>

            {/* <input
              type="file"
              onChange={(e) => {
                console.log('e.. ', e.target.files[0]);

                setBackgroundImage(e.target.value);
              }}
            /> */}

            <button
              type="submit"
              className={`mt-3 ${style['register-button']}`}
              onClick={() => {
                console.log(shopName, '   data file.. ', files);
                submitHandler();
              }}
            >
              {dataMyProfile.nameShop && dataMyProfile.imageShop ? 'Edit Toko' : 'Buka Toko'}
            </button>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
}

export default RegisterSeller;
