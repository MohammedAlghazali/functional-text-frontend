import { styled } from '@mui/material/styles';

export const Container = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 auto',
  maxWidth: '414px',
  padding: '0 24px',
}));

export const FormContainer = styled('div')(({ theme }) => ({
  width: '100%',
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    '.MuiFilledInput-root': {
      background: theme.palette.common.white,
      border: `1px solid ${theme.palette.grey[100]}`,
      borderRadius: 2,
      input: {
        color: theme.palette.grey[900],
      },
    },
    '.validation-error': {
      '.MuiFilledInput-root': {
        borderColor: theme.palette.error.main,
      },
    },
    '.MuiInputLabel-root': {
      fontSize: '16px',
      lineHeight: '22px',
    },
    '.MuiInputLabel-root:not(.Mui-focused):not(.Mui-error)': {
      color: theme.palette.grey[400],
    },
    '>div:nth-of-type(1), >:not(style):nth-of-type(2)': {
      width: 'calc(50% - 8px)',
      marginTop: '12px',
    },
    '>div:nth-of-type(3)': {
      label: {
        paddingLeft: '8px',
      },
      '.MuiFilledInput-root': {
        paddingLeft: '19px',
      },
      input: {
        paddingLeft: '15px',
      },
      '.MuiInputLabel-root': {
        marginLeft: '49px',
      },
    },
    '.MuiLoadingButton-root': {
      height: '60px',
      color: theme.palette.common.white,
      backgroundColor: theme.palette.primary.main,
      fontFamily: 'RawLine-Medium',
      fontSize: '14px',
      lineHeight: '19.35px',
      marginTop: '21px',
      '.MuiLoadingButton-loadingIndicator': {
        color: theme.palette.common.white,
      },
    },
  },
}));

export const ValidationError = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
  marginTop: 0,
  textAlign: 'left',
}));

export const NameValidationContainer = styled('p')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
