import { PaymentInstrument  } from '../interfaces/PaymentInstrument'
import { PaymentResponse  } from '../classes/PaymentResponse'

export class RewardsCard implements PaymentInstrument {
    name : string;
    cardNumber : string;

    constructor(name: string, cardNumber: string) {
        this.name = name;
        this.cardNumber = cardNumber
    }

    validate(){
        console.info('Validate payment',this.name)
    }

    collectPayment()  {
        const response = new PaymentResponse();
        // Steps related to rewards card payment like getting current
        // rewards balance, updating balance etc.
        response.setIdentifier= this.cardNumber;
        console.info('CollectPayment',response)
        return response;
    }
}
