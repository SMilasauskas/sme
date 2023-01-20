import styled, { css } from 'styled-components';

export const LogoWrapper = styled.div`
  grid-column: 1/3;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-column: 1/5;
  }
`;

export const HeaderContentWrapper = styled.div`
  grid-column: 4/10;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-column: 5/12;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    grid-column: 1/9;
  }
`;

export const HeaderTitle = styled.span`
  font-size: 28px;
  line-height: 58px;
  color: ${(props) => props.theme.colors.black};
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  line-height: 60px;
  color: ${(props) => props.theme.colors.blueColor};
`;

export const StyledLayout = css`
  grid-template-rows: 80px;
  padding: 0;

  @media (max-width: 767px) {
    grid-template-rows: repeat(2, 40px);
  }
`;

export const LogoText = styled.span`
  font-size: 35px;
  color: ${(props) => props.theme.colors.blueColor};
  line-height: 75px;
  font-weight: 600;
`;

export const LogoIcon = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

export const LogoIconTop = styled.div`
  background: ${(props) => props.theme.colors.blueColor};
  width: 20px;
  height: 7px;
`;

export const LogoIconMiddle = styled.div`
  background: ${(props) => props.theme.colors.blueColor};
  width: 10px;
  height: 7px;
`;

export const LogoIconBottom = styled.div`
  background: ${(props) => props.theme.colors.blueColor};
  width: 7px;
  height: 7px;
  border-radius: 50%;
`;
