# Interface Segregation Principle (ISP)

The Interface Segregation Principle (ISP) states that no client should be forced to depend on methods it does not use.

It promotes breaking large, "fat" interfaces into smaller, more specific ones so that implementing classes only need to know about the methods relevant to them.

This reduces coupling and improves code maintainability.

## Key Concepts of ISP

- **Clients/Classes**: These are the code entities implementing an interface.

- **"Fat" Interfaces**: Large, monotholic interfaces that contain methods for 3 multiple unrelated functionalities, causing unnecessary dependencies.

- **Role Interfaces**: Smaller, focused interfaces that define specific behaviors (IFlyable, IScannable) rather that a general one (IMachine)

## Benefits of Following ISP

- **Decoupled Code**: Systems become easier to refactor, change and redeploy because changes to one method don't affect unrelated clients.

- **Reduced Unnecessary Dependencies**: Classes are not forced to implement methods they don't need.

- **Improved Maintainability**: Cleaner, more readable, and easier-to-understand code.
