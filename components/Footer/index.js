// @flow
import * as React from 'react';
import IconSnapchat from '../Icons/social/Snapchat';
import IconPinterest from '../Icons/social/Pinterest';
import IconFacebook from '../Icons/social/Facebook';
import IconTwitter from '../Icons/social/Twitter';
import { H6 } from '../Typography';

import {
  Footer,
  Social,
  SocialChannel,
  SocialChannelItem,
  SiteNavigation,
  SiteNavigationColumm,
  SiteNavigationColummTitle,
  SiteNavigationColummList,
  SiteNavigationColummItem,
  Copyright,
  CopyrightText,
  CopyrightRight
} from './style';

const copyright = (
  <Copyright>
    <CopyrightText transform="uppercase">2019 Collins Parker</CopyrightText>
    <CopyrightRight>
      <CopyrightText transform="uppercase">Sitemap</CopyrightText>|
      <CopyrightText transform="uppercase">All rights reserved</CopyrightText>
    </CopyrightRight>
  </Copyright>
);

export const BaseFooter = () => (
  <Footer>
    <Social>
      <H6 transform="uppercase">Connect with Collins Parker:</H6>
      <SocialChannel>
        <SocialChannelItem href="/">
          <IconSnapchat />
        </SocialChannelItem>
        <SocialChannelItem href="/">
          <IconPinterest />
        </SocialChannelItem>
        <SocialChannelItem href="/">
          <IconFacebook />
        </SocialChannelItem>
        <SocialChannelItem href="/">
          <IconTwitter />
        </SocialChannelItem>
      </SocialChannel>
    </Social>
    <SiteNavigation>
      <SiteNavigationColumm>
        <SiteNavigationColummTitle transform="uppercase">
          More Info
        </SiteNavigationColummTitle>
        <SiteNavigationColummList>
          <SiteNavigationColummItem>Contests</SiteNavigationColummItem>
          <SiteNavigationColummItem>Privacy</SiteNavigationColummItem>
          <SiteNavigationColummItem>Security</SiteNavigationColummItem>
          <SiteNavigationColummItem>
            Terms & Conditions
          </SiteNavigationColummItem>
          <SiteNavigationColummItem>Login</SiteNavigationColummItem>
          <SiteNavigationColummItem>Ad Choices</SiteNavigationColummItem>
        </SiteNavigationColummList>
      </SiteNavigationColumm>

      <SiteNavigationColumm>
        <SiteNavigationColummTitle transform="uppercase">
          Information
        </SiteNavigationColummTitle>
        <SiteNavigationColummList>
          <SiteNavigationColummItem>Contact Us</SiteNavigationColummItem>
          <SiteNavigationColummItem>
            Returns & Exchanges
          </SiteNavigationColummItem>
          <SiteNavigationColummItem>
            Shipping & Tax Information
          </SiteNavigationColummItem>
          <SiteNavigationColummItem transform="uppercase">
            FAQ
          </SiteNavigationColummItem>
          <SiteNavigationColummItem>How to Order</SiteNavigationColummItem>
          <SiteNavigationColummItem>Volume Discounts</SiteNavigationColummItem>
          <SiteNavigationColummItem>Blog</SiteNavigationColummItem>
        </SiteNavigationColummList>
      </SiteNavigationColumm>

      <SiteNavigationColumm>
        <SiteNavigationColummTitle transform="uppercase">
          About Collins Parker
        </SiteNavigationColummTitle>
        <SiteNavigationColummList>
          <SiteNavigationColummItem>About Us</SiteNavigationColummItem>
          <SiteNavigationColummItem>Careers at CP</SiteNavigationColummItem>
          <SiteNavigationColummItem>
            Coporate Responsibility
          </SiteNavigationColummItem>
          <SiteNavigationColummItem>Investors Site</SiteNavigationColummItem>
        </SiteNavigationColummList>
      </SiteNavigationColumm>

      <SiteNavigationColumm>
        <SiteNavigationColummTitle transform="uppercase">
          More from Collins parker
        </SiteNavigationColummTitle>
        <SiteNavigationColummList>
          <SiteNavigationColummItem>
            Mobile and CP apps
          </SiteNavigationColummItem>
          <SiteNavigationColummItem>Cp Marketplace</SiteNavigationColummItem>
        </SiteNavigationColummList>
      </SiteNavigationColumm>
    </SiteNavigation>
    {copyright}
  </Footer>
);

export const AuthFooter = () => <Footer>{copyright}</Footer>;
