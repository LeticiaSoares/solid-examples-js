import { PaymentGatewayHandler as PaymentGatewayHandlerInterface} from  '../interfaces/PaymentGatewayHandler'
import { PaymentGatewayResponse} from  '../classes/PaymentGatewayResponse'

export class PaymentGatewayHandler implements PaymentGatewayHandlerInterface {
    // members omitted
    handlePayment(){
        // send details to payment gateway (PG), set the fingerprint
        // received from PG on a PaymentGatewayResponse and return
        const paymentGatewayResponse = new PaymentGatewayResponse('fingerprint')
        console.info('PaymentGatewayHandler handlePayment',paymentGatewayResponse)
        return paymentGatewayResponse
    }
}
