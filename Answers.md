1. What problem does the context API help solve?

    • Context API helps reduce the need for prop drilling because data can now be imported directly to the component.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    • Actions - are triggered once the user has triggered an event in the view/UI. Actions are a list of functions that communicate with pieces of logic inside a reducer file.

    •  Reducers - help manage state by holding the initalState & state logic in the store. 

    • Store - stores all moving parts for manipulating, managing, & storing state.

    • In Redux apps, when your Redux is a single source of truth, that means that the only way to change your data in the UI is to dispatch redux action which will change the state within redux reducer.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    • Application State is global, & Component State is local. Libraries like Redux, use what is called "stores" to hold app state. That means any component, anywhere in the app can access it (like a database) as long as they hook into it.

        Component state lives in a specific component, it can only be updated within that component & passed down to its children via props.

    • When you have a lot of components it can be cumbersome, so in this case it would be more useful to use Application State.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    • Redux Thunk is a middleware that lets us call upon action creators that will return functions instead of an action object. That function receives a store's dispatch method, which is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous operations have been completed.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    • I really enjoy Redux because it has more clean and concise way of producing code in components, which in turn makes for cleaner and more formatted code.