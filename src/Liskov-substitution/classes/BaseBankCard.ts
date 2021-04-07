import { PaymentInstrument  } from '../interfaces/PaymentInstrument'
import { PaymentInstrumentValidator  } from '../interfaces/PaymentInstrumentValidator'
import { FraudChecker  } from '../interfaces/FraudChecker'
import { PaymentGatewayHandler  } from '../interfaces/PaymentGatewayHandler'

import { PaymentResponse  } from '../classes/PaymentResponse'



export abstract class BaseBankCard implements PaymentInstrument {
    // members like name, cardNumber etc. omitted
    // below dependencies will be injected at runtime
    name : string
    cardNum : string
    code : string
    expiryDate : string

    basicValidator : PaymentInstrumentValidator;
    fraudChecker : FraudChecker;
    gatewayHandler: PaymentGatewayHandler;

    constructor(
        name: string,
        cardNum: string,
        code: string,
        expiryDate: string,
        basicValidator :PaymentInstrumentValidator,
        fraudChecker: FraudChecker,
        gatewayHandler: PaymentGatewayHandler
    ) {
        this.name = name;
        this.cardNum = cardNum;
        this.code = code;
        this.expiryDate = expiryDate;
        this.basicValidator=basicValidator;
        this.fraudChecker=fraudChecker;
        this.gatewayHandler=gatewayHandler;

    }

    validate(){
        console.info('BaseBankCard Validate',this)
        this.basicValidator.validate();
    }

    collectPayment() {
        const response = new PaymentResponse();
        console.info('BaseBankCard collectPayment',response)
        try {
            this.fraudChecker.runChecks();
            const pgResponse = this.gatewayHandler.handlePayment();
            response.setIdentifier=pgResponse.getFingerPrint
        } catch {
            // exception handling
        }
        return response;
    }
}
