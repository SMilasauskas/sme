import styled from 'styled-components';

export default styled.div`
  width: 100%;

  .errorMessage {
    padding: 0 5px 8px 20px;
    display: block;
    color: ${(props) => props.theme.colors.red};
    font-size: 12px;
  }
`;

export const customDropdownStyles = {
  control: (styles: any, state: any) => ({
    ...styles,
    height: 65,
    borderRadius: '8px',
    borderWidth: 1,
    borderColor: state.hover ? '#B2B2B2' : '#B2B2B2',
    marginBottom: '10px',
  }),
  option: (styles: any) => ({ ...styles, backgroundColor: 'white', color: '#000000' }),
  singleValue: (styles: any) => ({ ...styles, color: '#000000' }),
  menu: (styles: any) => ({ ...styles, color: '#000000' }),
};
