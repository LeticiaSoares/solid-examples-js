import { PaymentInstrument } from '../interfaces/PaymentInstrument'

export class PaymentProcessor {
    process(paymentInstrument : PaymentInstrument){
        console.log('PaymentProcessor paymentInstrument',paymentInstrument)
        console.log('PaymentProcessor validate')
        paymentInstrument.validate()
        const response = paymentInstrument.collectPayment()
        console.log('PaymentProcessor collectPayment',response)
        this.saveToDatabase(response.getIdentifier)
    }
    saveToDatabase(identifier: string){
        console.info('Save in Database with sucess!',identifier)
    }
}
