import { PaymentResponse } from '../classes/PaymentResponse'

export interface PaymentInstrument{
    validate() : void
    collectPayment() : PaymentResponse
}

