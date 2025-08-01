export type YooKassaPaymentResponse = {
  id: string;
  status: "pending" | "waiting_for_capture" | "succeeded" | "canceled";
  amount: {
    value: string;
    currency: string;
  };
  description: string;
  recipient: {
    account_id: string;
    gateway_id: string;
  };
  created_at: string;
  confirmation: {
    type: "redirect" | string;
    confirmation_url: string;
  };
  test: boolean;
  paid: boolean;
  refundable: boolean;
  metadata: Record<string, unknown>;
};
export type YooKassaPaymentRequest = number;
