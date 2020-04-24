import * as React from 'react';
import { IRobot } from '../containers/App';

/*
const Card = (robot: IRobot) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${robot.id}?200x200`} />
      <div>
        <h2>{robot.name}</h2>
        <p>{robot.email}</p>
      </div>
    </div>
  );
};
*/

const Card: React.SFC<IRobot> = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;