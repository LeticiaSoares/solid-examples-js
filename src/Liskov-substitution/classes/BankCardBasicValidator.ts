import {PaymentInstrumentValidator  } from '../interfaces/PaymentInstrumentValidator'

export class BankCardBasicValidator implements PaymentInstrumentValidator {
    // members like name, cardNumber etc. omitted
    validate() {
        console.info('BankCardBasic Validate',this)
    }
    // other basic validations
}
