declare module "midtrans-client" {
  interface TransactionDetails {
    order_id: string;
    gross_amount: number;
  }

  interface ItemDetails {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }

  interface TransactionParameter {
    transaction_details: TransactionDetails;
    item_details: ItemDetails[];
  }

  class Snap {
    constructor(config: {
      isProduction: boolean;
      serverKey: string;
      clientKey: string;
    });
    createTransactionToken(parameter: TransactionParameter): Promise<string>;
  }

  export default Snap;
}
