// @flow
import * as React from 'react';

import CategoryList from '../pagesSrc/Index/components/CategoryList';
import Image from '../components/Image';
import Link from '../components/Link';
import Page from '../components/Page';
import { H2, H5, H6 } from '../components/Typography';

import {
  PageContent,
  Banner,
  MainContainer,
  LandingContainer,
  LandingContent,
  LandingContentDescription,
  LandingActions,
  LandingActionButton,
  CategoriesContainer,
  Picks,
  Pick,
  PickButtonContainer,
  PickButton
} from '../pagesSrc/Index/style';
import { Main } from '../pagesSrc/sharedStyle';

export default function Index() {
  return (
    <Page>
      <PageContent>
        <Banner>
          <H6 transform="uppercase">
            Student discount available on checkout: use code - STU5050
          </H6>
        </Banner>
        <MainContainer>
          <LandingContainer>
            <LandingContent>
              <H2 fontWeight="heavy" color="white" align="center">
                Same day delivery across Country
              </H2>
              <LandingContentDescription color="white">
                On orders above $100
              </LandingContentDescription>
              <LandingActions>
                <Link href="/search?gender=female">
                  <LandingActionButton title="Shop Women" />
                </Link>
                <Link href="/search?gender=female">
                  <LandingActionButton title="Shop Men" />
                </Link>
              </LandingActions>
            </LandingContent>
          </LandingContainer>
          <CategoriesContainer>
            <H5 transform="capitalize" fontWeight="heavy">
              Categories
            </H5>
            <CategoryList />
          </CategoriesContainer>
          <Picks>
            <Link href="/picks">
              <Pick>
                <Image
                  imageProps={{
                    src:
                      'static/images/landing/courtney-clayton-353912-unsplash@2x.png',

                    alt: 'landing image'
                  }}
                />
                <PickButtonContainer>
                  <PickButton title="Collin's Picks" type="secondary" />
                </PickButtonContainer>
              </Pick>
            </Link>
            <Link href="/picks">
              <Pick>
                <Image
                  imageProps={{
                    src:
                      'static/images/landing/courtney-clayton-353912-unsplash_2@2x.png',
                    alt: 'landing image'
                  }}
                />
                <PickButtonContainer>
                  <PickButton title="Editor's Picks" type="secondary" />
                </PickButtonContainer>
              </Pick>
            </Link>
          </Picks>
        </MainContainer>
      </PageContent>
    </Page>
  );
}
