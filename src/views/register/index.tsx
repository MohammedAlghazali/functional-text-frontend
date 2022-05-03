import React, { useState, useEffect } from 'react';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import InputAdornment from '@mui/material/InputAdornment';
import { toast } from 'react-toastify';
import Header from '../../layouts/Header/Header';

import createUserApi from '../../api/createUser';
import registerSchema from '../../validation/registerSchema';
import {
  capitalizeFirstCharacter,
  formatPhoneNumber,
  clearPhoneNumberFormatting,
} from '../../helpers/registerHelpers';
import { REGISTRATION_INFO_URL } from '../../constants/url.constants';

import { ReactComponent as UsFlag } from '../../assets/images/us-flag.svg';

import * as Style from './style';

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState({ message: '', isValid: false });

  const [shrink, setShrink] = React.useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const phoneLength = phoneNumber.length;
    if (phoneLength < 11 && phoneLength >= 1) {
      setPhoneNumberError({ isValid: false, message: 'Phone number should be 10 numbers' });
    } else {
      setPhoneNumberError({ message: '', isValid: false });
    }
  }, [phoneNumber]);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver<yup.AnyObjectSchema>(registerSchema),
  });

  const firstName = watch('firstName');
  const lastName = watch('lastName');
  const email = watch('email');

  const submitHandler = async (values: any) => {
    try {
      setLoading(true);
      const response = await createUserApi({ ...values, phoneNumber });
      if (response.status === 201) {
        reset();
        navigate(REGISTRATION_INFO_URL, {
          state: { data: response.data },
        });
      }
    } catch (error: any) {
      const errorMessage = error.response.data.error === 'duplicate key error';
      toast.error(
        errorMessage
          ? 'Account With This Email is Already Exists'
          : 'Something Went Wrong',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Style.Container>
      <Header />
      <Style.FormContainer>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { mb: '15px', width: '100%' },
          }}
        >
          <TextField
            {...register('firstName')}
            className={`${errors.firstName ? 'validation-error' : ''}`}
            error={errors.firstName}
            InputProps={{ disableUnderline: true }}
            color="primary"
            label="First name"
            variant="filled"
            value={capitalizeFirstCharacter(firstName)}
          />
          <TextField
            {...register('lastName')}
            className={`${errors.lastName ? 'validation-error' : ''}`}
            error={errors.lastName}
            InputProps={{ disableUnderline: true }}
            label="Last name"
            variant="filled"
            value={capitalizeFirstCharacter(lastName)}
          />
          {(errors.firstName || errors.lastName) && (
            <Style.NameValidationContainer>
                {errors.firstName && (
                  <Style.ValidationError>
                    {errors.firstName.message}
                  </Style.ValidationError>
                )}
                {errors.lastName && (
                  <Style.ValidationError>
                    {errors.lastName.message}
                  </Style.ValidationError>
                )}
            </Style.NameValidationContainer>
          )}
          <TextField
            className={`${phoneNumberError.isValid ? 'validation-error' : ''}`}
            error={phoneNumberError.isValid}
            InputLabelProps={{ shrink }}
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment sx={{ marginBottom: '16px' }} position="start">
                  <UsFlag />
                </InputAdornment>
              ),
            }}
            onFocus={() => setShrink(true)}
            onBlur={(e) => {
              if (!e.target.value) {
                setShrink(false);
              }
            }}
            label="Phone number"
            variant="filled"
            onKeyDown={(event) => {
              const isBackspaceKey = event.key === 'Backspace';
              if (isBackspaceKey) {
                event.preventDefault();
                setPhoneNumber(phoneNumber?.substring(0, phoneNumber.length - 1));
              }
            }}
            onChange={(e) => {
              const unFormattedNumber = clearPhoneNumberFormatting(e.target.value);
              setPhoneNumber(unFormattedNumber);
            }}
            value={formatPhoneNumber(phoneNumber)}
          />
          {phoneNumberError.message && (
            <Style.ValidationError>
              {phoneNumberError.message}
            </Style.ValidationError>
          )}
          <TextField
            {...register('email')}
            className={`${errors.email ? 'validation-error' : ''}`}
            error={errors.email}
            InputProps={{ disableUnderline: true }}
            label="Email"
            variant="filled"
            value={email ? email.toLowerCase() : ''}
          />
          {errors.email && (
            <Style.ValidationError>
              {errors.email.message}
            </Style.ValidationError>
          )}
          <TextField
            {...register('password')}
            className={`${errors.password ? 'validation-error' : ''}`}
            error={errors.password}
            InputProps={{ disableUnderline: true }}
            label="Password"
            type="password"
            variant="filled"
          />
          {errors.password && (
            <Style.ValidationError>
              {errors.password.message}
            </Style.ValidationError>
          )}
          <LoadingButton
            disabled={!isValid && !phoneNumberError.isValid}
            sx={{ opacity: !isValid ? '50%' : '' }}
            loadingIndicator={<CircularProgress color="inherit" size={21} />}
            onClick={handleSubmit(submitHandler)}
            loading={loading}
            variant="outlined"
          >
            {!loading && 'NEXT'}
          </LoadingButton>
        </Box>
      </Style.FormContainer>
    </Style.Container>
  );
};

export default Register;
