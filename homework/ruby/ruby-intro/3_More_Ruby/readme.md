[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# HW Reading: Practical Object-Oriented Design in Ruby

[POODR](http://www.poodr.com/) (pronounced "pooder") explains object-oriented design (OOD) in Ruby. Javascript is an object-oriented language but it is not class-based like it is in Ruby, Java, C++, C, etc.. POODR was written by Sandi Metz, a software developer and author focused on writing flexible object-oriented code in Ruby and Rails.

## Exercise Objectives

- have fun reading material on programmatic thinking and design
- gain insight to programming languages from a design standpoint
- gain an intermediate level of understanding Ruby as a class-based language
- start thinking about the differences in Javascript and Ruby

## Directions

Read the first 3 chapters of POODR [available as a PDF here](https://github.com/edenzik/cs105b/blob/master/books/Practical%20Object-Oriented%20Design%20in%20Ruby.pdf) and answer the questions below.


### Short Answer Questions:

Answer should be no more than a couple of sentences. Refer to the reading.

1. According to Metz, what is Object-oriented design about?

```
It's about designing an app where the objects sponteneously interact with each other.
```

2. What does SOLID stand for?

```
Single responsibility, Open-closed, Liskov Substitution, Interface Segregation, Dependency Inversion
```

3. Ruby is a class-based object-oriented language. What does that mean?

```
The objects in Ruby contain both, data and bahavior. Objects invoke one another's bahavior by sending each other messages.
```

4. Where are methods defined in Ruby?

```
Methods get invoked in response to messages.
```

5. Why does single Responsibility matter?

```
Because apps are easier to use and maintain when they contain classes that contain well-defined behavior and its responsibilities are just entagled within the class.
```

6. What does `attr_reader` do?

```
It's an easy way to create the encapsulating methods.
```

7. What are 4 benefits Metz outlines for methods that have a single responsibility?

```
Expose previously hidden qualities, avoid the need for comments, encourage reuse, are easy to move to another class.
```

8. What are 4 things an object knows when it has a dependency?

```
the name of another class, the name of a message that it intends to send to someone other than self, the arguments that a message require, the order of those arguments
```

9. Dependency management is core to creating future-proof applications. What does injecting dependencies and isolating dependencies do? What are their benefits?

```
Your Answer Here
```
