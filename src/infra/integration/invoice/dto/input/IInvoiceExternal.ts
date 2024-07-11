export default interface IInvoiceExternal {
  erpInvoiceId: string;
  uniqueId: string;
  dueDate: string;
  formatedDueDate: string;
  amount: number;
  formatedAmount: string;
  competence: string;
  reference: string;
  charges: null,
  status: 0; // check other possibly status and their meaning
  erpContractId: string;
}