import type {FormattersInitializer} from 'typesafe-i18n';
import {date} from 'typesafe-i18n/formatters';

import type {Locales, Formatters} from './i18n-types';

export const initFormatters: FormattersInitializer<Locales, Formatters> = (
  locale,
) => {
  const formatters: Formatters = {
    longDateTime: date(locale, {
      dateStyle: 'medium',
      timeStyle: 'medium',
    }),
    mediumDateTime: date(locale, {
      dateStyle: 'medium',
      timeStyle: 'medium',
    }),
  };
  return formatters;
};
