import React from 'react';
import './Badge.scss';

export default function Badge() {
  const odLink = <a href="http://oasis.digital/">Oasis Digital Solutions</a>;
  const abcLink = <a href="http://www.angularbootcamp.com/">Angular Boot Camp</a>;
  return (
    <div class="badge">
      <img src="images/me.PNG" />
      <span>
        My name is Drew Wiens. I'm a software developer and consultant
        at {odLink}. Electrical engineer. {abcLink} instructor.
      </span>
    </div>
  );
}