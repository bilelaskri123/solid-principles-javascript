class PayPalPayment {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} via PayPal.`);
  }
}

class CreditCardPayment {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} via Credit Card.`);
  }
}
class StripePayment {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} via Credit Card.`);
  }
}

class Store {
  constructor() {
    this.paymentPayPalProcessor = new PayPalPayment(); // direct dependency
    this.paymentCreditCardProcessor = new CreditCardPayment(); // direct dependency
  }

  purchaseItem(amount, paymentMethod) {
    if (paymentMethod === "PayPal") {
      this.paymentPayPalProcessor.processPayment(amount);
    } else if (paymentMethod === "CreditCard") {
      this.paymentCreditCardProcessor.processPayment(amount);
    }
  }
}

const store = new Store();
store.purchaseItem(100, "PayPal");
