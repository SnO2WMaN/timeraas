import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCalendarDay,
  faClock,
  faEdit,
  faFire,
  faListUl,
  faPlus,
  faPlusCircle,
  faSignature,
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

export const IconPlus: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon icon={faPlus} fixedWidth {...props} />
);
export const IconList: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon icon={faListUl} fixedWidth {...props} />
);

export const IconTitle: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon fixedWidth icon={faSignature} {...props} />
);
export const IconDate: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon fixedWidth icon={faCalendarDay} {...props} />
);
export const IconTime: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon fixedWidth icon={faClock} {...props} />
);
export const IconAdd = IconPlus;

export const IconMore: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon fixedWidth icon={faPlusCircle} {...props} />
);

export const IconIgniteAt: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon fixedWidth icon={faFire} {...props} />
);
export const IconCreatedAt: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon fixedWidth icon={faPlusCircle} {...props} />
);
export const IconUpdatedAt: React.VFC<{className?: string}> = (props) => (
  <FontAwesomeIcon fixedWidth icon={faEdit} {...props} />
);
