import styled from 'styled-components';
import { PageContentT } from './Layout';

export const LayoutContent = styled.div<PageContentT>`
  align-items: center;
  max-width: 1560px;
  padding: 0 80px;
  height: calc(100vh - 92px);
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 50px;
  grid-template-rows: max-content;
  ${(props) => props.styles};

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    grid-column-gap: 30px;
    padding: 0 40px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    max-width: 991px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    max-width: auto;
    padding: 0 20px;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 30px;
  }

  // @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
  //   align-items: baseline;
  // }
`;

export const HeaderWrapper = styled.div`
  height: 92px;
  grid-column: 1/13;
  align-self: flex-start;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    margin-top: 15px;
    grid-column: 1/9;
  }
`;
