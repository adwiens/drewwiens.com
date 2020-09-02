import React from 'react';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarFixedAdjust } from '@rmwc/top-app-bar';
import '@rmwc/top-app-bar/styles';
import { Button } from '@rmwc/button';
import '@rmwc/button/styles';
import './TopBar.scss';
import { Link } from 'react-router-dom';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export default function TopBar() {
  const classes = useStyles();
  return (
    <>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection className="top-bar">
            <span>
              <a href="/ng">
                <Avatar className={classes.large} variant="square" src="images/react-logo.png" />
              </a>
            </span>
            <nav className="main-nav">
              <Button unelevated label="Videos" tag={Link} to="/videos" />
              <Button unelevated label="Articles" tag={Link} to="/articles" />
              <Button unelevated label="Speaking" tag={Link} to="/speaking" />
            </nav>
            <nav className="right-nav">
              <Button unelevated label="GitHub" tag="a" href="http://github.com/adwiens" />
            </nav>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
    </>
  );
}
