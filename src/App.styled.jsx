import styled from 'styled-components';

export const PhonebookTitle = styled.h1`
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;

  color: ${p => p.theme.colors.black};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ContactsTitle = styled.h2`
  margin-top: 30px;
  margin-bottom: 10px;
  text-align: center;

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
`;
