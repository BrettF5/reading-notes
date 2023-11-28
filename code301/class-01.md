## Readings: Introduction to React and Components:

---

### Component-Based Architecture:
I'm using the informatoin from www.tutorialspoint.com "Component-Based Architecture" as I have a hard time explaining without being able to use it or see it yet.  

Component-based architecture focuses on the decomposition of the design into individual functional or logical components that represent well-defined communication interfaces containing methods, events, and properties. It provides a higher level of abstraction and divides the problem into sub-problems, each associated with component partitions. The primary objective of component-based architecture is to ensure component reusability.

#### Reusable software component or module for Java:
- JavaBean
- COM/DCOM
- EJB
- CORBA
- .NET

/1. What is a “component”?
A component in Component-Based Architecture is a modular, portable, replacable and reusable of well-defined functionality that encapsulates its implementation and exporting it as a higher-level interface

/2. What are the characteristics of a component?
Characteristics of Components from website www.tutorialspoint.com as it explains it better than I can understand this concept right now. Better for my notes for me right now. 
- Reusability − Components are usually designed to be reused in different situations in different applications. However, some components may be designed for a specific task.
- Replaceable − Components may be freely substituted with other similar components.
Not context specific − Components are designed to operate in different environments and contexts.
- Extensible − A component can be extended from existing components to provide new behavior.
- Encapsulated − A A component depicts the interfaces, which allow the caller to use its functionality, and do not expose details of the internal processes or any internal variables or state.
- Independent − Components are designed to have minimal dependencies on other components.

/3. What are the advantages of using component-based architecture?

- Ease of deployment − As new compatible versions become available, it is easier to replace existing versions with no impact on the other components or the system as a whole.

- Reduced cost − The use of third-party components allows you to spread the cost of development and maintenance.

- Ease of development − Components implement well-known interfaces to provide defined functionality, allowing development without impacting other parts of the system.

- Reusable − The use of reusable components means that they can be used to spread the development and maintenance cost across several applications or systems.

- Modification of technical complexity − A component modifies the complexity through the use of a component container and its services.

- Reliability − The overall system reliability increases since the reliability of each individual component enhances the reliability of the whole system via reuse.

- System maintenance and evolution − Easy to change and update the implementation without affecting the rest of the system.

- Independent − Independency and flexible connectivity of components. Independent development of components by different group in parallel. Productivity for the software development and future software development.

["Reading Component-Based Architecture for the above"](https://www.tutorialspoint.com/software_architecture_design/component_based_architecture.htm)

--- 

### What is Props and How to Use it in React
React is a user interface libarary.

/1. What is “props” short for?
Prop stands for "Properties".

It is a keyword in React that is used for passing data from one component to another.  It is a uni-directional flow, data flows one way from parent to child and it is read-only.  

/2. How are props used in React?
It is an object which is used for passing data in a Uni-directional flow and its read-only

/3. What is the flow of props?
Uni-directional flow (parent to child)

--- 

["React Tutorial through ‘Passing Data Through Props"](https://react.dev/learn/tutorial-tic-tac-toe)

["React Docs - Hello world"](https://legacy.reactjs.org/docs/hello-world.html)

["React Docs - Introducing JSX"](https://legacy.reactjs.org/docs/introducing-jsx.html)

["React Docs - Rendering elements"](https://legacy.reactjs.org/docs/rendering-elements.html)

["React Docs - Components and props"](https://legacy.reactjs.org/docs/components-and-props.html)
