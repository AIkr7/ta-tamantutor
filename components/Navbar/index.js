import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  makeStyles,
  AppBar,
  Toolbar,
  Text,
  Button,
  IconButton,
} from '../Material';
import { Menu as MenuIcon } from '../Icon';
import Link from '../Link';
import { useMediaQuery } from '../MediaQuery';
import Drawer from '../Drawer';

import TamanSiswaLogo from '../../static/tamansiswa-logo.svg';

export default function Navbar({ title }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      {isMobile && <Drawer open={open} onToggle={(val) => setOpen(val)} />}
      <AppBar position="fixed">
        <Toolbar>
          {isMobile && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => setOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Link href="/">
            <TamanSiswaLogo height="100%" width={132} />
          </Link>
          <Text variant="h6" className={classes.title}>
            {title}
          </Text>
          {!isMobile && (
            <>
              <Button component={Link} href="/" color="inherit">
                Home
              </Button>
              <Button component={Link} href="/about" color="inherit">
                About
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: '',
};

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
