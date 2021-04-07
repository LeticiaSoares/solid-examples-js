import { RewardsCard } from  './classes/RewardsCard'
import { CreditCard } from  './classes/CreditCard'
import { PaymentProcessor } from  './classes/PaymentProcessor'
import { PaymentGatewayHandler } from  './classes/PaymentGatewayHandler'
import { BankCardBasicValidator } from  './classes/BankCardBasicValidator'
import { ThirdPartyFraudChecker } from  './classes/ThirdPartyFraudChecker'

export const getRewardsCardPayment = () =>{
    const card = new RewardsCard('Teste', '1234');
    console.log('card',card)
    const paymentProcessor = new PaymentProcessor()
    paymentProcessor.process(card);
}

export const getCreditPayment = () =>{
    const name = 'mastecard'
    const cardNum = '951856'
    const code = '123'
    const expiryDate = '22/02/2022'

    const gatewayHandler =
        new PaymentGatewayHandler();

    const validator =
        new BankCardBasicValidator();

    const fraudChecker =
        new ThirdPartyFraudChecker();

    const credit =
        new CreditCard(
            name,
            cardNum,
            code,
            expiryDate,
            validator,
            fraudChecker,
            gatewayHandler);

    console.log('CreditCard',credit)
    const paymentProcessor = new PaymentProcessor()
    paymentProcessor.process(credit);
}
