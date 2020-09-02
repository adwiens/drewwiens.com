import React from 'react';
import './Cards.scss';
import '@rmwc/card/styles';
import '@rmwc/typography/styles';
import { Card, CardPrimaryAction, CardMedia, CardActions, CardActionButtons, CardActionButton, CardActionIcons, CardActionIcon } from '@rmwc/card';
import { Typography } from '@rmwc/typography';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },
}));

export default function Cards(props) {
  const classes = useStyles();
  return (
    <div className="container">{
      props.posts.map(post => (
        <Card style={{ width: '21rem' }}>
          <CardPrimaryAction tag="a" href={post.link}>
            {
              post.imageFilename ? <CardMedia
                sixteenByNine
                style={{
                  backgroundImage: `url(images/${post.imageFilename})`
                }}
              /> : undefined
            }
            <div style={{ padding: '0 1rem 1rem 1rem' }}>
              <div className="heading">
                <Avatar
                  src={`images/${post.avatarFilename}`}
                  variant="square"
                  className={classes.large}
                />
                <div className="title">
                  <Typography use="headline6" tag="h2">
                    {post.title}
                  </Typography>
                  <Typography
                    use="subtitle2"
                    tag="h3"
                    theme="textSecondaryOnBackground"
                    style={{ marginTop: '-1rem' }}
                  >
                    {post.date}
                  </Typography>
                </div>
              </div>
              <Typography
                use="body1"
                tag="div"
                theme="textSecondaryOnBackground"
              >
                {post.description}
              </Typography>
            </div>
          </CardPrimaryAction>
          {
            post.extraLinks ? (
              <CardActions>
                <CardActionButtons>
                  {post.extraLinks.map(link => (
                    <CardActionButton tag="a" href={link.link}>{link.label}</CardActionButton>
                  ))}
                </CardActionButtons>
              </CardActions>
            ) : undefined
          }
        </Card>
      ))
    }</div>
  );
}