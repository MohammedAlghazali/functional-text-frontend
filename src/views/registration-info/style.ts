import { styled } from '@mui/material/styles';

export const Container = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 auto',
  maxWidth: '414px',
  padding: '0 24px',
}));

export const MessageHeader = styled('div')(() => ({
  display: 'flex',
  height: '78px',
  alignItems: 'center',
  marginTop: '4px',
  marginBottom: '27px',
  letterSpacing: '0.8px',
}));

export const MessageHeaderContent = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  fontSize: '22px',
  lineHeight: '29px',
  p: {
    width: '95%',
    margin: '0',
    textAlign: 'left',
  },
}));

export const MessageIconWrapper = styled('div')(() => ({
  marginRight: '18px',
  height: '100%,',
  display: 'flex',
  alignItems: 'center',
}));

export const MessageContent = styled('div')(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  p: {
    color: theme.palette.grey[400],
    fontSize: '15px',
    lineHeight: '21px',
    textAlign: 'left',
    marginBottom: '6px',
    maxWidth: '395px',
    letterSpacing: '0.8px',
    marginTop: '0',
    width: '100%',
    '&:nth-child(2)': {
      maxWidth: '400px',
      marginTop: '15px',
    },
  },
}));
