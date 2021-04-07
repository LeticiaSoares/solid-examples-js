//The role of abstract classes is to serve as a base class for subclasses which
// do implement all the abstract members.
// When a class doesn’t have any abstract members, it is said to be concrete.
abstract class PaymentInstrumentWrong {
  name : string;
  carNumber : number;
  expiryDate: Date;
  validate(){
    // basic validation on name, expiryDate etc.
  }
  runFraudChecks(){
    // run checks against a third-party system
  }
  sendToPaymentGateway(){
    // send details to payment gateway (PG) and set fingerprint from
    // the payment gateway response
  }
}

class CreditCardWrong extends PaymentInstrumentWrong{
  validate(){
    super.validate()
    // additional validations for credit cards
  }
  // other credit card-specific code
}

class DebitCardWrong extends PaymentInstrumentWrong {
  // debit card-specific code
}

class PaymentProcessor {
  process(paymentInstrument :PaymentInstrumentWrong){
      paymentInstrument.validate();
      paymentInstrument.runFraudChecks();
      paymentInstrument.sendToPaymentGateway();
  }
}

class RewardsCardWrong extends PaymentInstrumentWrong{
  //in this case the rewards payment doesnt need the runFraudChecks() and sendToPaymentGateway
  //In this case the Liskov principle is violated and this would still break the application.
}




