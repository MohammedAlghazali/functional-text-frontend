import React, { useEffect } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import Header from '../../layouts/Header/Header';
import { Heading } from '../../components/Typography';

import { formatPhoneNumber } from '../../helpers/registerHelpers';
import { HOME_PAGE_URL } from '../../constants/url.constants';

import { ReactComponent as MessageIcon } from '../../assets/images/message.svg';

import * as Style from './style';

const RegistrationInfo = () => {
  const location: any = useLocation();
  const navigate = useNavigate();

  const { firstName, phoneNumber, email } = location?.state?.data?.data || {};

  useEffect(() => {
    if (!firstName || !phoneNumber || !email) {
      navigate(HOME_PAGE_URL);
    }
  }, []);

  return (
    <Style.Container>
      <Header />
      <Style.MessageHeader>
        <Style.MessageIconWrapper>
          <MessageIcon />
        </Style.MessageIconWrapper>
        <Heading>
          <p>
            Thanks,
            {firstName}
            !
          </p>
          <p> We’ve received your application</p>
        </Heading>
      </Style.MessageHeader>
      <Style.MessageContent>
        <p>
          We’ll process your application as soon as possible and send you a
          decision within 30 days to
          {' '}
          {phoneNumber?.includes('(') ? phoneNumber : formatPhoneNumber(phoneNumber)}
          {' '}
          or
          {' '}
          {email}
          . We
          will contact you in case more information is needed.
        </p>
        <p>
          While we’re reviewing your application, please don’t submit another
          application for the uPet’s breeder program.
        </p>
      </Style.MessageContent>
    </Style.Container>
  );
};

export default RegistrationInfo;
