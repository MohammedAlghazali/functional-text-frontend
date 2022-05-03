import { styled } from '@mui/material/styles';

export const Heading = styled('div')(() => ({
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

export const Paragraph = styled('div')(({ theme }) => ({
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
  },
}));
