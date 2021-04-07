export class PaymentGatewayResponse {
    fingerprint : string;
    constructor(fingerprint) {
        this.fingerprint = fingerprint;
    }
    get getFingerPrint(){
        return this.fingerprint
    }
}
