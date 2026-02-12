// violate principle
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    return `User ${this.name}, email ${this.email}`;
  }

  sendEmail(message) {
    console.log(`Sending email to ${this.email}: ${message}`);
  }
}

const user = new User("Bilel", "bilel@example.com");
console.log(user.getUserInfo()); // User: Bilel, Email: bilel@example.com
user.sendEmail("Welcome to our platform!"); // Sending email to bilel@example.com: Welcome to our platform!
