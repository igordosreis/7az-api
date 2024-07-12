import EPaymentStatus from '@domain/adapter/global/model/EPaymentStatus';

interface IInvoice {
  id: string;
  planId: string;
  status: EPaymentStatus;
  dueDate: string;
  value: string;
}

export default IInvoice;
