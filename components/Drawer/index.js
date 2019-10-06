import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'next/router';

import {
  makeStyles,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Text,
} from '../Material';
import { Home as HomeIcon, Info as InfoIcon } from '../Icon';
import Link from '../Link';

import TamanSiswaLogo from '../../static/tamansiswa-logo.svg';

const K_LIST_ITEMS = [
  {
    title: 'Home',
    uri: '/',
    Icon: HomeIcon,
  },
  {
    title: 'About',
    uri: '/about',
    Icon: InfoIcon,
  },
];

function Drawer({ onToggle, open, router }) {
  const classes = useStyles();

  let iOS = false;
  if (navigator.userAgent) {
    iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    onToggle(open, event);
  };

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <div className={classes.logo}>
          <TamanSiswaLogo width={132} />
        </div>
        <List>
          {K_LIST_ITEMS.map((item) => (
            <ListItem
              component={Link}
              href={item.uri}
              key={item.title}
              selected={item.uri === router.pathname}
            >
              <ListItemIcon>{item.Icon && <item.Icon />}</ListItemIcon>
              <ListItemText
                disableTypography
                primary={
                  <Text style={{ color: '#333' }} type="body2">
                    {item.title}
                  </Text>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
      <div className={classes.companyName}>
        <Text style={{ fontWeight: 700 }}>Taman Siswa Project</Text>
        <Text className={classes.year}>{new Date().getFullYear()}</Text>
      </div>
    </SwipeableDrawer>
  );
}

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  router: PropTypes.shape().isRequired,
};

const useStyles = makeStyles({
  list: {
    width: 250,
  },

  year: {
    marginTop: 4,
  },

  logo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24,
  },

  companyName: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    padding: 8,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default withRouter(Drawer);
