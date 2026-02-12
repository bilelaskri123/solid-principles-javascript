class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    return `User: ${this.name}, Email: ${this.email}`;
  }
}

class EmailService {
  sendEmail(user, message) {
    console.log(`Sending email to ${user.email}: ${message}`);
  }
}

const user = new User("Bilel", "bilel@example.com");
const emailService = new EmailService();

console.log(user.getUserInfo()); // User: Bilel, Email: bilel@example.com
emailService.sendEmail(user, "Welcome to our platform!"); // Sending email to bilel@example.com: Welcome to our platform!
