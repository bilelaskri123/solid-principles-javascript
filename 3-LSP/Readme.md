# Liskov Substitution Principle (LSP)

The Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects
of its subclasses without breaking the application's correctness. It ensures that derived classes extend, rather than replace base class behavior, maintaining, expected functionality.

## Key Aspects of LSP

- **Behavioral Consistency**: Subclasses must adhere to the contract established by the superclass (if a base method calculates area, a subclass cannot delete it or return a value that breaks dependent code).

- **Input/Output Rules**: Subclasses should not impose stricter validation on input parameters (contravariance) and must apply at least the same rules to output parameters (covariance) as the parent class.

- **Why It Matters**: Adhering to LSP prevents bugs, ensures code reusability, and makes systems more maintainable.
