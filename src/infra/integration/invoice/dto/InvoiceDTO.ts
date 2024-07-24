import EPaymentStatus from '@domain/adapter/global/model/EPaymentStatus';
import DateUtil from '@infra/integration/util/DateUtil';
import StatusHandlerUtil from '@infra/integration/util/StatusHandlerUtil';
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

  constructor(data: IInvoiceExternal, paymentData?: IInvoicePaymentExternal) {
    this.id = data.erpInvoiceId;
    this.planId = data.erpContractId;
    this.status = StatusHandlerUtil.getStatus(data.status);
    this.dueDate = DateUtil.formatToIso(data.dueDate);
    this.value = `${data.amount}`;
    this.paidAt = null;
    this.billet = paymentData?.invoicePDFURL || null;
    this.billetCode = paymentData?.billetDigitableLine || null;
    this.pixQRCode = paymentData?.pixCode || null;
  }
}