import React from 'react';

import { useLocation } from 'react-router-dom';

import Header from '../../layouts/Header/Header';

import { formatPhoneNumber } from '../../helpers/registerHelpers';

import { ReactComponent as MessageIcon } from '../../assets/images/message.svg';

import * as Style from './style';

const RegistrationInfo = () => {
  const location: any = useLocation();

  const { firstName, phoneNumber, email } = location?.state?.data?.data;

  return (
    <Style.Container>
      <Header />
      <Style.MessageHeader>
        <Style.MessageIconWrapper>
          <MessageIcon />
        </Style.MessageIconWrapper>
        <Style.MessageHeaderContent>
          <p>
            Thanks,
            {firstName}
            !
          </p>
          <p> We’ve received your application</p>
        </Style.MessageHeaderContent>
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
