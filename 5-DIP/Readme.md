# Dependency Inversion Principle

The Dependency Inversion Principle (DIP) states that high-level modules should not depend on low-level modules; both should depend on absractions (interfaces).

It also dictates that abstractions should not depend on details, but details should depend on abstractions. This approach decouples software components, improving maintainability, flexibility and testability.

## Key Concepts of IDP

- **Decoupling**: High-level logic (e.g BusinessService) depends on an interface (e.g IDataRepository) rather that a concrete implmentation (e.g SQLDatabase).

- **Inversion**: Instead of top-level code directing lower-level code, the dependency direction is "inverted" by forcing both to conform to a shared abstraction.

- **Components**: High-level modules manage core business logic, while low-level modules handle specific, often changing details like database operations or external API calls.

## Example Implementation

Instead of a PasswordService class directly instantiating a MySQLConnection class (high-level depending on low-level), the PasswordService constructor accepts an IDatabase interface. The MySQLConnection class then implements IDatabase

## Benefits

- **Easier Testing**: Concrete, low-level dependencies can be replaced with mock objects for unit testing.

- **Flexibility**: Changes to low-level implementation details (e.g., changing from MySQL to MongoDB) do not require changes to the high-level business logic.

- **Reduced Fragility**: Limits the rippling effect of changes across the codebase.
