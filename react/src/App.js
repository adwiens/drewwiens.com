import React from 'react';
import './App.scss';
import TopBar from './TopBar';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Cards from './Cards';
import Badge from './Badge';
import { Toolbar, ToolbarRow } from '@rmwc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';
import { videos, articles, speaking } from './posts.js';
import { Button } from '@rmwc/button';
import '@rmwc/button/styles';

export default function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="app-main">
        <Badge />
        <Route path="/" exact={true}>
          <Redirect to="/videos" />
        </Route>
        <Route path="/videos">
          <Cards posts={videos} />
        </Route>
        <Route path="/articles">
          <Cards posts={articles} />
        </Route>
        <Route path="/speaking">
          <Cards posts={speaking} />
        </Route>
      </div>
      <Toolbar>
        <ToolbarRow className="footer">
          <nav>
            <Button tag="a" href="http://www.github.com/adwiens">GitHub</Button>
            <Button tag="a" href="http://www.stackblitz.com/@adwiens">StackBlitz</Button>
            <Button tag="a" href="https://scholar.google.com/citations?user=_N2X7KwAAAAJ">Google Scholar</Button>
            <Button tag="a" href="http://www.twitter.com/adwiens">Twitter</Button>
            <Button tag="a" href="https://www.linkedin.com/in/drew-wiens-59859038/">LinkedIn</Button>
          </nav>
          <span class="small">Powered by React and Express</span>
        </ToolbarRow>
      </Toolbar>
    </BrowserRouter>
  );
}
