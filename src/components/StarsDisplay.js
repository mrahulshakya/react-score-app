import React from 'react';
import { utils } from "./utils";
// STAR MATCH - V9
export const StarsDisplay = props => (<>
  {utils.range(1, props.count).map(starId => (<div key={starId} className="star" />))}
</>);
