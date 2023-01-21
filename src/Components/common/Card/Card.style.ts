import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 10px 40px ${(props) => props.theme.colors.greyBoxShadow};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-bottom: 30px;
  }
`;
