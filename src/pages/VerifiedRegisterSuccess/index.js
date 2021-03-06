/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ICVerified } from '../../assets/Icons';
import { BrandLogo, Button } from '../../components/atoms';
import { customMedia } from '../../components/Layouts';
import { Axios } from '../../config';
import { showLoading, userSessionActive } from '../../redux/actions';
import { decodeJwtToken, typeRedux } from '../../utils';

const VerifiedRegisterSuccess = () => {
  const { token } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [dataVerified, setDataVerified] = useState({
    isExists: false,
    data: {},
    token: '',
  });
  useEffect(() => {
    document.title = 'Wellcome';
  });
  useEffect(() => {
    decodeJwtToken(token).then((resultDecode) => {
      setDataVerified(resultDecode);
      document.title = `${resultDecode.decode.name} | Verified Success`;
      Axios.get(`/users/${resultDecode.decode.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      }).then((resultGetUser) => {
        const dataUser = resultGetUser.data.data[0];
        // console.log(resultGetUser);
        const verified = {
          ...dataUser,
          verified: 1,
        };
        dispatch(showLoading(false));
        dispatch(userSessionActive(dataUser));
        Axios.post(`/users/${resultDecode.decode.id}`, verified, {
          headers: { Authorization: `Bearer ${token}` },
        })
          .then((res) => {
            // console.log('res update', res);
            dispatch({ type: typeRedux.setUserLogin, value: verified });
            dispatch(showLoading(false));
          })
          .catch((err) => {
            console.log('err', err.response);
          });
      });
    });
  }, []);

  const actionButton = () => {
    dispatch(showLoading(true));
    history.push('/');
  };

  if (!dataVerified.isExists) {
    return null;
  }

  return (
    <Wrapper>
      <div className="content">
        <div className="body">
          <BrandLogo />
          <h1 className="title">
            Congratulation {dataVerified.decode.name}! <br /> Your account has
            been successfully activated
          </h1>
          <div className="image-wrapper">
            <img src={ICVerified} alt="success" />
          </div>
          <div className="paragraph">
            <p>
              Now you can enjoy all the features of Blanja.com. Click the button
              below to start the adventure
            </p>
          </div>
          <Button primary onClick={actionButton}>
            START JOURNEY
          </Button>
        </div>

        <div className="footer"></div>
      </div>
    </Wrapper>
  );
};

export default VerifiedRegisterSuccess;

const Wrapper = styled.div`
  background-color: #f0f5f9;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content {
    max-width: 600px;
    ${customMedia.lessThan('751px')`
      width: 90%; 
    `}
    .body {
      background-color: white;
      box-sizing: content-box;
      padding: 2rem 3rem;
      border-radius: 1rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        text-align: center;
        color: #253757;
        text-align: center;
        margin: 1rem 0;

        ${customMedia.lessThan('751px')`
          font-size: 22px;
        `}
      }
      .paragraph {
        margin: 1rem;
        text-align: center;
        font-style: normal;
        font-weight: 300;
        font-size: 14px;
        line-height: 21px;
        text-align: center;

        color: #46505c;
      }
    }

    .footer {
      background-color: #df4538;
      border-radius: 0px 0px 20px 20px;
      height: 1rem;
      width: 100%;
    }
  }
`;
