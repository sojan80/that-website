import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import ContentSection from '../shared/ContentSection';
import LinkButton from '../shared/LinkButton';

import { below, DEFAULT_WIP_PAGE } from '../../utilities';

const _ = require('lodash');

const AccentColor = '#05d69e';

const Main = styled(ContentSection)`
  margin-top: 10rem;
  padding-top: 1rem;
  height: 80rem;
`;

const SectionHeading = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 100;
  font-size: 15rem;
  color: ${({ theme }) => theme.colors.fonts.light};
`;

const Moose = styled.img`
  max-height: 57rem;
  max-width: 46.2rem;
  float: right;
  margin-top: -48.5rem;
  margin-right: -13rem;
`;

const TicketCountdown = styled.div`
  text-align: center;
  margin-top: 2rem;
  font-size: 2.4rem;
  color: ${({ theme }) => theme.colors.fonts.light};

  span {
    color: ${AccentColor};
  }
`;

const GrabTickets = styled(LinkButton)`
  margin-top: 7.5rem;
`;

const Timeline = styled.section`
  margin-top: 15rem;
  text-align: center;
  white-space: nowrap;
  overflow-x: hidden;
`;

const Marker = styled.span`
  height: 2.5rem;
  width: 2.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  display: inline-block;

  &.past {
    background-color: ${AccentColor};
  }
`;

const Line = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  width: 4rem;
  height: 0.1rem;
  margin-bottom: 1rem;

  &.past {
    border-color: ${AccentColor};
    background-color: ${AccentColor};
  }
`;

const Detail = styled.span`
  color: ${({ theme }) => theme.colors.fonts.light};
  text-align: center;
  position: absolute;
  display: inline-block;
  height: auto;
  word-wrap: break-word;
  overflow: hidden;
  white-space: normal;
  line-height: 1.5;
  font-weight: bold;
`;

const Name = styled(Detail)`
  margin-top: 3rem;
  margin-left: -5rem;
  width: 7.5rem;
`;

const Date = styled(Detail)`
  margin-top: -2rem;
  width: 4rem;
  margin-left: -1rem;
  color: ${({ theme }) => theme.colors.fonts.light};
`;

const TimelineSection = ({ event, className }) => {
  const milestones = _(event.milestones)
    .map(m => {
      const momentDue = moment(m.dueDate);
      return {
        title: m.title,
        due: momentDue.format('MM/YY'),
        state: momentDue < moment() ? 'past' : 'future',
      };
    })
    .orderBy('due')
    .value();

  const DaysLeft = 23;

  return (
    <Main backgroundColor="primary" className={className} hasTrees="true">
      <SectionHeading>Grab Your Tickets</SectionHeading>
      <TicketCountdown>
        Only <span>{DaysLeft} Days</span> left to grab your tickets to THAT
        Conference
      </TicketCountdown>
      <GrabTickets
        href={DEFAULT_WIP_PAGE}
        label="Grab your Tickets!"
        backgroundColor="primary"
        borderColor="white"
        color="white"
      />
      <Timeline>
        {milestones.map((m, index, all) => (
          <>
            {index !== 0 && <Line className={m.state} />}
            <Date className={m.state}>{m.due}</Date>
            <Marker className={m.state} />
            <Name>{m.title}</Name>
            {index !== all.length - 1 && <Line className={m.state} />}
          </>
        ))}
      </Timeline>
      <Moose src="/images/moose_with_lantern.png" />
    </Main>
  );
};

export default styled(TimelineSection)``;
