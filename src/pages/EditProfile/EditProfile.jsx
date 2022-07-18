import React, { Fragment, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './EditProfile.module.css';

import Navbar from '../../components/Navbar/Navbar';

import Plus_Icon from '../../assets/icon/Plus_Icon.png';

import { useDropzone } from 'react-dropzone';
import { getMyProfile } from '../../redux/Actions/ProfileAction';
import axios from 'axios';
import { listArea } from '../../utils/listArea';

function EditProfile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [inputImageError, setInputImageError] = useState('');
  const [dataProfile, setDataProfile] = useState({
    name: '',
    province: '',
    city: '',
    phone: '',
    address: '',
  });

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    maxFiles: 1,
    maxSize: 1000000,
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles, fileRejections) => {
      console.log('fileRejections..  ', fileRejections);
      if (fileRejections.length) {
        return setInputImageError('(Harus berupa gambar & ukuran maksimal 5MB)');
      }
      setInputImageError('');
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

  const imagePreview = files.map((file) => (
    <div className={`d-flex align-items-end`} style={{ cursor: 'pointer' }} key={file.name}>
      {console.log('file.. ', file)}
      <img
        src={typeof file === 'string' ? file : file.preview}
        className={`d-block ${style['profile-photo']}`}
        alt=""
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="100%"
        fill="currentColor"
        class="bi bi-camera-fill"
        viewBox="0 0 16 16"
        style={{ position: 'relative', left: '-30px', marginRight: '-30px', fontWeight: 'bold' }}
      >
        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0z" />
      </svg>
    </div>
  ));

  React.useEffect(() => {
    document.title = 'Edit Profile';
    dispatch(getMyProfile());
    loadingDataMyProfile ? console.log('loadingDataMyProfile') : refreshForm();
  }, [loadingDataMyProfile]);

  const refreshForm = () => {
    console.log('refreshForm', dataMyProfile);
    if (dataMyProfile) {
      setDataProfile({
        name: dataMyProfile.name,
        province: dataMyProfile.province,
        city: dataMyProfile.city,
        phone: dataMyProfile.phone,
        address: dataMyProfile.address,
      });
      if (dataMyProfile.image !== null) {
        console.log('dataMyProfile.image', dataMyProfile.image);
        setFiles([dataMyProfile.image]);
      } else {
        setFiles([Plus_Icon]);
      }
      // setBackgroundImage([dataMyProfile.imageBackground]);
    } else {
      setDataProfile({
        name: '',
        province: '',
        city: '',
        phone: '',
        address: '',
      });
      // setFiles([]);
    }
  };

  const submitHandler = async () => {
    const formData = new FormData();
    formData.append('name', dataProfile.name);
    formData.append('province', dataProfile.province);
    formData.append('city', dataProfile.city);
    formData.append('phone', dataProfile.phone);
    formData.append('address', dataProfile.address);
    if (files[0] !== dataMyProfile.image) {
      formData.append('image', files[0]);
    }

    try {
      const res = await axios({
        method: 'PUT',
        url: 'https://localla-api.herokuapp.com/api/v1/user',
        data: formData,
        headers: {
          'content-type': 'multipart/form-data',
          authorization: `${localStorage.getItem('access_token')}`,
        },
      });
      if (res.status === 200) {
        console.log('Register Successfully!');
        navigate('/profile');
      }
    } catch (error) {
      console.log('error..  ', error);
    }
  };

  const disableButtonCondition = () => {
    if (
      dataMyProfile.name === dataProfile.name &&
      dataMyProfile.province === dataProfile.province &&
      dataMyProfile.city === dataProfile.city &&
      dataMyProfile.phone === dataProfile.phone &&
      dataMyProfile.address === dataProfile.address &&
      (dataMyProfile.image === files[0] || files[0] === Plus_Icon)
    ) {
      return true;
    }
    if (
      dataProfile.name === '' &&
      dataProfile.province === '' &&
      dataProfile.city === '' &&
      dataProfile.phone === '' &&
      dataProfile.address === '' &&
      dataProfile.image === '' &&
      (files.length === 0 || files[0] === Plus_Icon)
    ) {
      return true;
    }
    return false;
  };

  return (
    <Fragment>
      <Navbar logo={true} backButton="/profile" />
      <Container fluid className={`d-flex justify-content-center`} style={{ marginTop: '100px' }}>
        <section style={{ width: '100%', maxWidth: '800px' }}>
          <h5 className={`mb-5 text-center`}>Edit Profil</h5>

          <Form
            onSubmit={(event) => {
              event.preventDefault();
              submitHandler();
            }}
          >
            <Form.Group className="mb-3 d-flex flex-column justify-content-center align-items-center">
              <div {...getRootProps({ className: 'dropzone' })}>
                {imagePreview}
                <input {...getInputProps()} required />
              </div>
              <Form.Text className="text-muted d-block m-0">
                <strong className="text-danger">{inputImageError}</strong>
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nama Lengkap"
                className={`${style['input-form-style']}`}
                value={dataProfile.name}
                onChange={(e) => {
                  setDataProfile({ ...dataProfile, name: e.target.value });
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" style={{ width: '100% !important' }}>
              <Form.Label>Provinsi</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className={`text-secondary ${style['input-form-style']}`}
                value={dataProfile.province}
                onChange={(e) => {
                  setDataProfile({ ...dataProfile, province: e.target.value });
                }}
                required
              >
                <option hidden>Pilih Provinsi</option>
                {listArea.map((province) => (
                  <option value={province.province}>{province.province}</option>
                ))}
              </Form.Select>
            </Form.Group>
            {console.log('dataProfile.province', dataProfile.province)}

            <Form.Group className="mb-3" style={{ width: '100% !important' }}>
              <Form.Label>Kota</Form.Label>
              <Form.Select
                aria-label="Default select example"
                className={`text-secondary ${style['input-form-style']}`}
                value={dataProfile.city}
                onChange={(e) => {
                  setDataProfile({ ...dataProfile, city: e.target.value });
                }}
                disabled={dataProfile.province === undefined}
                required
              >
                <option hidden>Pilih Kota</option>
                {listArea
                  .filter((item) => {
                    return item.province === dataProfile.province;
                  })
                  .map((province) => province.city.map((city) => <option value={city}>{city}</option>))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Alamat</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Contoh: Jalan Ikan Hiu 33"
                className={`${style['input-form-style']}`}
                value={dataProfile.address}
                onChange={(e) => {
                  setDataProfile({ ...dataProfile, address: e.target.value });
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>No Handphone</Form.Label>
              <Form.Control
                type="text"
                placeholder="contoh: +628123456789"
                className={`${style['input-form-style']}`}
                controlId="exampleForm.ControlInput1"
                value={dataProfile.phone}
                onChange={(e) => {
                  setDataProfile({ ...dataProfile, phone: e.target.value });
                }}
                required
              />
            </Form.Group>
          </Form>
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
              <p className="m-0 ms-1">Reset</p>
            </button>
          </div>

          <div className="d-flex mt-4">
            <Button
              className={`${style['btn-decision']}`}
              disabled={disableButtonCondition()}
              onClick={() => {
                // navigate('/profile');
                console.log(dataProfile);
                console.log(files);
                submitHandler();
              }}
            >
              Simpan
            </Button>
          </div>
        </section>
      </Container>
    </Fragment>
  );
}

export default EditProfile;
