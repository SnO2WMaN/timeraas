import {zonedTimeToUtc} from 'date-fns-tz';

export const formatDate = ({
  date,
  time,
  timeZone,
}: {
  date: string;
  time: string;
  timeZone: string;
}): Date => zonedTimeToUtc(`${date} ${time}`, timeZone);
