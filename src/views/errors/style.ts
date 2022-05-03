import { styled } from '@mui/material/styles';

export const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
  color: theme.palette.primary.main,
}));

export const Title = styled('h1')(() => ({
  marginTop: 0,
}));

export const Message = styled('h2')(() => ({
  marginTop: 0,
}));
