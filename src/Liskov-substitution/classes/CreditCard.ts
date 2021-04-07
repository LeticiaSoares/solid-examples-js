import { BaseBankCard  } from '../classes/BaseBankCard'

export class CreditCard extends BaseBankCard {
    validate() {
        super.validate();
        console.info('Creditcard validate ')
    }
}
