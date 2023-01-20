import Layout from 'Components/common/Layout';
import {
  StyledLayout,
  LogoWrapper,
  LogoText,
  LogoIcon,
  LogoIconTop,
  LogoIconMiddle,
  LogoIconBottom,
  HeaderContentWrapper,
  HeaderTitle,
  HeaderLink,
} from './Header.style';

const Header = () => {
  return (
    <Layout styles={StyledLayout}>
      <LogoWrapper>
        <LogoText>smeGo</LogoText>

        <LogoIcon>
          <LogoIconTop />
          <LogoIconMiddle />
          <LogoIconBottom />
        </LogoIcon>
      </LogoWrapper>

      <HeaderContentWrapper>
        <HeaderTitle>Application</HeaderTitle>
        <HeaderLink href="/">Fill in later</HeaderLink>
      </HeaderContentWrapper>
    </Layout>
  );
};

export default Header;
