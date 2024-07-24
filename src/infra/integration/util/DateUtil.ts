import { formatISO } from 'date-fns';

export default class DateUtil {
  public static formatToIso(date: string): string {
    return formatISO(date, { representation: 'date' });
  }
}