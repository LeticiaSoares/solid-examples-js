export class PaymentResponse {
    identifier : string;

    get getIdentifier(){
        return this.identifier;
    }
    set setIdentifier(value: string){
        this.identifier = value;
    }
}
