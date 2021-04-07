import { FraudChecker  } from '../interfaces/FraudChecker'

export class ThirdPartyFraudChecker implements FraudChecker {
    // members omitted
    runChecks(){
        console.info('runChecks',this)
    }
}
