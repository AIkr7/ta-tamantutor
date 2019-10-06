import React from 'react';

import { makeStyles, Container } from '../Material';

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Container>Footer</Container>
    </div>
  );
}

const useStyles = makeStyles(({ palette }) => ({
  container: {
    position: 'relative',
    background: palette.common.darkGrey,
    zIndex: 1,
    height: 360,
  },
}));
