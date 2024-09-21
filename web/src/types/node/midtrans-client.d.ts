eclare module "midtrans-client" {
  export interface TransactionDetails {
    order_id: string;
    gross_amount: number;
  }

  export interface ItemDetails {
    id: string;
    name: string;
    price: number;
    quantity: number;
  }

  export interface Parameter {
    transaction_details: TransactionDetails;
    item_details: ItemDetails[];
  }

  export class Snap {
    constructor(config: {
      isProduction: boolean;
      serverKey: string;
      clientKey: string;
    });
    createTransactionToken(parameter: Parameter): Promise<string>;
  }

  export default Snap;
}
