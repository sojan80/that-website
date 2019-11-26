import React from 'react';
import styled from 'styled-components';

import ContentSection from '../shared/ContentSection';
import LinkButton from '../shared/LinkButton';

import { DEFAULT_WIP_PAGE } from '../../utilities';

const Main = styled(ContentSection)`
  margin-bottom: 15rem;
`;

const TalkIdeasText = styled.div`
  width: 90rem;
  margin: auto;
  text-align: center;
  font-size: 2.8rem;
  color: ${({ theme }) => theme.colors.fonts.dark};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const TalkIdeasButtons = styled.div`
  text-align: center;
  div {
    text-align: center;
    display: inline-block !important;

    &:first-child {
      margin-right: 2rem;
    }
  }
`;

const TalkIdeasButton = styled(LinkButton)`
  text-align: center;
  display: inline-block;
`;

const TalkIdeas = props => {
  return (
    <Main>
      <TalkIdeasText>
        Looking For Talk Ideas? Check Out A Select List of Previous Years
        Sessions. Need More Ideas For workshops? Then This List Is For You!
      </TalkIdeasText>
      <TalkIdeasButtons>
        <TalkIdeasButton
          href={`/${DEFAULT_WIP_PAGE}`}
          borderColor="thatBlue"
          color="thatBlue"
          backgroundColor="white"
          label="Past Sessions"
        />
        <TalkIdeasButton
          href={`/${DEFAULT_WIP_PAGE}`}
          borderColor="thatBlue"
          color="thatBlue"
          backgroundColor="white"
          label="Past Workshops"
        />
      </TalkIdeasButtons>
    </Main>
  );
};

export default TalkIdeas;