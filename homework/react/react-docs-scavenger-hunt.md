# React Documentation Scavenger Hunt

[React Docs](https://facebook.github.io/react/docs/hello-world.html)

### Post answers (and links to where you found them) for each of the questions below:

1. Can we use `npm` with React or do we have to use `yarn`?
We can use both npm and Yarn: https://facebook.github.io/react/docs/installation.html

2. We are using JSX to write HTML inside of our React. Are we required to use JSX with React? Are there any alternatives?
We are not required to use JSX with React. The alternative would be using this: React.createElement(component, props, ...children)
https://facebook.github.io/react/docs/react-without-jsx.html

3. Does React re-render the entire component when one part of it changes?
Only the elements that changed will re-render: https://facebook.github.io/react/docs/rendering-elements.html

4. Should we ever change `props` (or parameters) inside of a component? 
No. All react components must act like pure functions with respect to their props: https://facebook.github.io/react/docs/components-and-props.html

5. Are all components classes? 
No, they can also be a function: https://facebook.github.io/react/blog/2015/12/18/react-components-elements-and-instances.html

6. List five "Synthetic Events" provided by React:
Clipboard events
Composition events
Keyboard events
Focus events
Form events

https://facebook.github.io/react/docs/events.html

7. Do we have to use ES6 syntax with React?
No: https://facebook.github.io/react/docs/react-without-es6.html

8. Where can I go to check out React's built-in Accessibility features?
https://facebook.github.io/react/docs/accessibility.html

9. List five React Component Lifecycle Methods:
constructor()
componentWillMount()
render()
componentDidMount()
componentWillReceiveProps()

https://facebook.github.io/react/docs/react-component.html#the-component-lifecycle

10. Where would I go to check out React's built-in testing tools?
https://facebook.github.io/react/docs/accessibility.html

### Turning in:

* Post a link to this file on Github to Schoology.
