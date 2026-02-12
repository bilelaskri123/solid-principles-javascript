# Open Closed Principle (OCP)

The Open-Closed Principle (OCP) states that software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

This means you should be able to add new functionality to a system without changing the existing, tested source code.

It is achieved through polymorphism, abstractions (interfaces), and inheritance.

### Key Aspects of the Open-Closed Principle:

- **Closed for modification**: Once a module, class, or function is developed and tested, its source code should not be changed to add new bahavior.

- **Open for Extension**: The behavior of a module can be extended to accomodate new requirements by adding new code, such as inheriting from a base class or implementing an interface.

- **Goal**: To minimize the risk of introducing new bugs into stable, production-ready code.

- **Implementation**: Use interfaces or abstract classes to define a stable, unchanging interface for a feature, while allowing multiple, distinct implementations to be created.
