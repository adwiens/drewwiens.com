import React from 'react';
import './Badge.scss';

export default function Badge() {
  const odLink = <a href="http://oasis.digital/">Oasis Digital</a>;
  return (
    <div class="badge">
      <img src="images/me.PNG" />
      <span>
        My name is Drew Wiens. I'm a software engineer and consultant
        at {odLink}. Electrical engineer. Skiier.
      </span>
    </div>
  );
}