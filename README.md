# DDD in Javascript

### Based on

A refactored version of https://github.com/dfvalero/DDD-in-Javascript
using Factory Functions instead of Class

#### Why factory functions

- easier refactoring
- easier to read.
- no more dangerous instanceof

 
Learn more from Eric Elliott at [JavaScript Factory Functions vs Constructor Functions vs Classes](https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)


### Explanation

This repository is to share my DDD (Domain Driven Design) Knowledge while reading the book "Domain Driven Design in PHP" by [Carlos Buenosvinos](https://github.com/carlosbuenosvinos), [Christian Soronellas](https://github.com/theUniC) and [Keyvan Akbary](https://github.com/keyvanakbary).

I started with Immutable Value Objects, there are two easy Value Objects for now (Money and Currency).

Things learned:

- I'm more confident with my objects now.
- Looks hard to break your app with side effects.
- Not that hard to code more things (not only Value Objects) in my app using immutability.
- Really easy to test. That means, easy to do TDD while coding.
- Can't say anything about refactoring for now.


### How to test it

After Cloning the repo, you have to run:

```
npm install
npm run test
```
