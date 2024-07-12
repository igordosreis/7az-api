import EPaymentStatus from '@domain/adapter/global/model/EPaymentStatus';
import DateUtil from '@infra/integration/util/DateUtil';
import IInvoiceExternal from './input/IInvoiceExternal';
import IInvoicePaymentExternal from './input/IInvoicePaymentExternal';

export default class InvoiceDTO {
  id: string;
  planId: string;
  status: EPaymentStatus;
  dueDate: string;
  value: string;
  paidAt: string | null;
  billet: string | null;
  billetCode: string | null;
  pixQRCode: string | null;

  private _statusHandler: Record<number, EPaymentStatus> = {
    0: EPaymentStatus.waiting,
    91: EPaymentStatus.canceled, // check other possibly status and their meaning
    92: EPaymentStatus.paid, // check other possibly status and their meaning
    93: EPaymentStatus.expired, // check other possibly status and their meaning
  };

  constructor(data: IInvoiceExternal, paymentData?: IInvoicePaymentExternal) {
    this.id = data.erpInvoiceId;
    this.planId = data.erpContractId;
    this.status = this._statusHandler[data.status];
    this.dueDate = DateUtil.formatToIso(data.dueDate);
    this.value = `${data.amount}`;
    this.paidAt = null;
    this.billet = paymentData?.invoicePDFURL || null;
    this.billetCode = paymentData?.billetDigitableLine || null;
    this.pixQRCode = paymentData?.pixCode || null;
  }
}