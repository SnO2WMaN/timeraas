import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSignInAlt,
  faSignOutAlt,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';

export const IconLoading: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon icon={faSpinner} fixedWidth spin {...props} />
);
export const IconSignin: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon icon={faSignInAlt} fixedWidth {...props} />
);
export const IconSignout: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon icon={faSignOutAlt} fixedWidth {...props} />
);