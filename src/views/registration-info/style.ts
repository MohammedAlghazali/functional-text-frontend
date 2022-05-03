import { styled } from '@mui/material/styles';
import { Paragraph } from '../../components/Typography';

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

export const MessageIconWrapper = styled('div')(() => ({
  marginRight: '18px',
  height: '100%,',
  display: 'flex',
  alignItems: 'center',
}));

export const MessageContent = styled(Paragraph)(() => ({
  p: {
    '&:nth-child(2)': {
      maxWidth: '400px',
      marginTop: '15px',
    },
  },
}));
