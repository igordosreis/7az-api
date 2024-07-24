import EPaymentStatus from '@domain/adapter/global/model/EPaymentStatus';

interface IInvoiceDetail {
  id: string;
  planId: string;
  status: EPaymentStatus;
  dueDate: string;
  value: string;
  paidAt: string | null;
  billet: string | null;
  billetCode: string | null;
  pixQRCode: string | null;
}

export default IInvoiceDetail;
