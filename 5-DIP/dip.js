class PaymentProcessor {
  processPayment(amount) {
    throw new Error("This method must be overridden!");
  }
}

class PayPalPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} via PayPal.`);
  }
}

class CreditCardPayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} via Credit Card.`);
  }
}
class StripePayment extends PaymentProcessor {
  processPayment(amount) {
    console.log(`Processing payment of $${amount} via Stripe.`);
  }
}

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseItem(amount) {
    this.paymentProcessor.processPayment(amount);
  }
}

const paypalPayment = new PayPalPayment();
const creditCardPayment = new CreditCardPayment();
const stripePayment = new StripePayment();

// const storeWithPaypal = new Store(paypalPayment);
// storeWithPaypal.purchaseItem(100);

// const storeWithCreditCard = new Store(creditCardPayment);
// storeWithCreditCard.purchaseItem(200);

const storeWithStripe = new Store(stripePayment);
storeWithStripe.purchaseItem(500);
