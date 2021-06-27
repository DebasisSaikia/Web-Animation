import React from 'react';
import {Container, Content} from './InfoBar.styles';
import {calcTime, convertMoney} from '../../helpers';

const InfoBar = ({time, budget, revenue}) => {
  return (
    <Container>
      <Content>
        <div className="column">
          <p>Duration : {calcTime (time)}</p>
        </div>
        <div className="column">
          <p>Budget: {convertMoney (budget)}</p>
        </div>

        <div className="column">
          <p>Revenue:{convertMoney (revenue)}</p>
        </div>

      </Content>
    </Container>
  );
};

export default InfoBar;
