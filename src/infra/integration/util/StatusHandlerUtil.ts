import EPaymentStatus from '@domain/adapter/global/model/EPaymentStatus';

export default class StatusHandlerUtil {
  public static getStatus(status: number): EPaymentStatus {
    const statusHandler: Record<number, EPaymentStatus> = {
      0: EPaymentStatus.waiting,
      91: EPaymentStatus.canceled, // check other possibly status and their meaning
      92: EPaymentStatus.paid, // check other possibly status and their meaning
      93: EPaymentStatus.expired, // check other possibly status and their meaning
    };

    return statusHandler[status];
  }
}
