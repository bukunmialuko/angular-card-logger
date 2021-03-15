export class Card {
    name: String;
    number: String;
    expiry: String;
    cvc: String;

    constructor(name: String, number: String, expiry: String, cvc: String) {
        this.name = name;
        this.number = number;
        this.expiry = expiry;
        this.cvc = cvc;
    }
    format() {
        return `NAME: ${this.name} \n NUMBER: ${this.number} \n EXPIRY: ${this.expiry} \n CVC: ${this.cvc}`;
    }

    getCardType(): String {
        if (this.number.charAt(0) === "5") {
            return "MASTER ";
        }
        else if (this.number.charAt(0) === "4") {
            return "VISA";
        }
        else {
            return "CUSTOM";
        }
    }
}
