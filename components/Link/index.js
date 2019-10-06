import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import MuiLink from '@material-ui/core/Link';

const NextComposed = React.forwardRef(
  ({ as, href, prefetch, ...other }, ref) => (
    <NextLink href={href} prefetch={prefetch} as={as}>
      <a ref={ref} {...other} />
    </NextLink>
  ),
);

NextComposed.propTypes = {
  as: PropTypes.string,
  href: PropTypes.string,
  prefetch: PropTypes.bool,
};

// A styled version of the Next.js Link component:
// https://nextjs.org/docs/#with-link
const Link = React.forwardRef((props, ref) => {
  const {
    activeClassName,
    className: classNameProps,
    shouldUseAnchor,
    ...other
  } = props;
  const router = useRouter();

  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === props.href && activeClassName,
  });

  if (shouldUseAnchor) {
    return (
      <MuiLink
        component={NextComposed}
        className={className}
        ref={ref}
        {...other}
      />
    );
  }

  return <NextComposed className={className} ref={ref} {...other} />;
});

Link.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  prefetch: PropTypes.bool,
  shouldUseAnchor: PropTypes.bool,
};

Link.defaultProps = {
  activeClassName: 'active',
  as: undefined,
  className: null,
  onClick: () => null,
  prefetch: false,
  shouldUseAnchor: false,
};

export default Link;
