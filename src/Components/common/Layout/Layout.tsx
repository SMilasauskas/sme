import React from 'react';
import { FlattenSimpleInterpolation } from 'styled-components';
import { LayoutContent } from './Layout.style';

type LayoutT = {
  styles?: FlattenSimpleInterpolation;
  children: React.ReactElement | Array<React.ReactElement>;
};

export type PageContentT = Omit<LayoutT, 'children'>;

const Layout = ({ children, styles }: LayoutT) => {
  return <LayoutContent styles={styles}>{children}</LayoutContent>;
};

export default Layout;
