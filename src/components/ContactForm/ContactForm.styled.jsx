import styled from 'styled-components';

export const PhonebookForm = styled.form`
  margin-top: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.green};
  border-radius: ${p => p.theme.radius.normal};
`;

export const PhonebookFormButton = styled.button`
  width: 150px;
  margin-right: 20px;
  padding: 12px;

  font: inherit;
  cursor: pointer;
  outline: none;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radius.normal};

  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.indigo};
`;

export const PhonebookFormLabel = styled.label`
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.black};
`;

export const PhonebookFormInput = styled.input`
  margin-bottom: 30px;
`;
