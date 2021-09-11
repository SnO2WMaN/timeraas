const icons = [
  require('./icons/1.png'),
  require('./icons/2.png'),
  require('./icons/3.png'),
  require('./icons/4.png'),
  require('./icons/5.png'),
  require('./icons/6.png'),
  require('./icons/7.png'),
];

export const icon = (seed = 0) => icons[seed % icons.length];
