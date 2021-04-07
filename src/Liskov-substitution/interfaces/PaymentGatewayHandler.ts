import { PaymentGatewayResponse } from '../classes/PaymentGatewayResponse'

export interface PaymentGatewayHandler{
    handlePayment(): PaymentGatewayResponse
}
