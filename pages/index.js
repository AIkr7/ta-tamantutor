import React from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import {
  makeStyles,
  Text,
  Container,
  Button,
  Box,
} from '../components/Material';
import Link from '../components/Link';
import { useMediaQuery } from '../components/MediaQuery';
import Footer from '../components/Footer';

import TamanTutorLogo from '../static/tamantutor-logo.webp';
import TamanTutorLogoAlt from '../static/tamantutor-logo_alt.webp';
import TamanTutorStudy1 from '../static/tamantutor-study1.webp';
import TamanTutorStudy2 from '../static/tamantutor-study2.webp';
import TamanTutorStudy3 from '../static/tamantutor-study3.webp';

export default function Home() {
  const classes = useStyles();

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Head>
        <title>HOME | Taman Siswa</title>
      </Head>
      <Navbar />
      <div className={classes.hero}>
        <Container className={classes.containerHero}>
          <img
            className={classes.tamanTutorImg}
            src={TamanTutorLogo}
            alt="Taman Tutor"
          />
          <Text className={classes.textHeroDescription} color="textSecondary">
            Learn with the tutor who cares about you.
          </Text>
          <Text className={classes.textHeroDescription} color="textSecondary">
            Start your meaningful study group.
          </Text>
          <Text className={classes.textHeroDescription} color="textSecondary">
            Pay collectively, worry less about money.
          </Text>
        </Container>
        <div className={classes.study1}>
          <img
            className={classes.imgStudy1}
            src={TamanTutorStudy1}
            alt="Taman Tutor"
          />
        </div>
      </div>
      <Container>
        <div className={classes.introduction}>
          <Text variant="h4">Introducing</Text>
          <img
            className={classes.tamanTutorAltImg}
            src={TamanTutorLogoAlt}
            alt="Taman Tutor"
          />
          <Text className={classes.textIntroDescription} variant="body1">
            The First Students-to-Students Real-Time Tutoring
          </Text>
          <Text variant="body1">
            Service in Indonesia with Collective Payments
          </Text>
        </div>
      </Container>
      <Container className={classes.reasonTuteeContainer}>
        <div className={classes.reasonTutee}>
          <img
            className={classes.tamanTutorStudy2Img}
            src={TamanTutorStudy2}
            alt="Taman Tutor Study"
          />
          {!isMobile && <div style={{ flex: 1 }} />}
          <div
            className={`${classes.listReason} ${classes.listReasonBg}`}
            style={{ flex: 1 }}
          >
            <Text variant="h4">Why you should be our Tutee</Text>
            <ul>
              <li>
                <Text>Get the tutor who cares about you</Text>
              </li>
              <li>
                <Text>Achieve a stronger study group than ever before</Text>
              </li>
              <li>
                <Text>Worry less about money</Text>
              </li>
            </ul>
            <Box mt={2}>
              <Button
                component={Link}
                href="/request"
                variant="outlined"
                color="inherit"
              >
                Order Tutor Now
              </Button>
            </Box>
          </div>
        </div>
      </Container>
      <Container className={classes.reasonTutorContainer}>
        <div className={classes.reasonTutor}>
          <div className={classes.listReason}>
            <Text variant="h4">​​Why you should be our Tutor</Text>
            <ul>
              <li>
                <Text>Drive real impacts on education</Text>
              </li>
              <li>
                <Text>
                  Be a better tutor with our Peer-to-Peer Tutor Development
                  System
                </Text>
              </li>
              <li>
                <Text>Earn up to 1M monthly</Text>
              </li>
            </ul>
            <Box mt={2}>
              <Button
                component={Link}
                href="https://forms.gle/nntGELuK2YDkJqKM9"
                variant="outlined"
                color="inherit"
              >
                Join as Tutor
              </Button>
            </Box>
          </div>
        </div>
        <img
          className={classes.tamanTutorStudy3Img}
          src={TamanTutorStudy3}
          alt="Taman Tutor Study"
        />
      </Container>
      <Footer />
    </>
  );
}

const useStyles = makeStyles(({ palette, breakpoints }) => ({
  hero: {
    background: palette.common.black,
    position: 'relative',
    height: 'calc(100vh / 1.5)',
    [breakpoints.down('sm')]: {
      height: 'calc(100vh)',
    },
  },

  containerHero: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
    zIndex: 1,
  },

  tamanTutorImg: {
    objectFit: 'contain',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  textHeroDescription: {
    paddingLeft: 64,
    fontSize: 24,
    fontWeight: 700,
    [breakpoints.down('sm')]: {
      paddingLeft: 90,
    },
    [breakpoints.down('xs')]: {
      paddingLeft: 42,
      fontSize: 18,
    },
  },

  study1: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 0,
  },

  imgStudy1: {
    height: '100%',
    objectFit: 'contain',
    [breakpoints.down('xs')]: {
      width: '100%',
      height: 'auto',
    },
  },

  introduction: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    paddingTop: 160,
    paddingBottom: 140,
  },

  tamanTutorAltImg: {
    marginTop: 80,
    objectFit: 'contain',
    [breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  textIntroDescription: {
    marginTop: 64,
  },

  reasonTuteeContainer: {
    [breakpoints.down('sm')]: {
      padding: 0,
    },
  },

  reasonTutee: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: 640,
    width: '100%',
  },

  tamanTutorStudy2Img: {
    bottom: 0,
    left: 0,
    height: '90%',
    objectFit: 'cover',
    position: 'absolute',
    [breakpoints.down('sm')]: {
      bottom: 0,
      left: 0,
      objectPosition: 'left',
    },
  },

  listReason: {
    zIndex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [breakpoints.down('sm')]: {
      width: '100%',
      paddingLeft: 64,
      paddingRight: 20,
    },
  },

  listReasonBg: {
    [breakpoints.down('sm')]: {
      background: 'rgba(255,255,255, 0.75)',
    },
  },

  reasonTutorContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },

  reasonTutor: {
    zIndex: 1,
    paddingTop: 128,
    paddingBottom: 128,
  },

  tamanTutorStudy3Img: {
    width: '100%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    objectFit: 'cover',
    [breakpoints.down('sm')]: {
      height: '100%',
      objectPosition: 'right',
    },
  },
}));
