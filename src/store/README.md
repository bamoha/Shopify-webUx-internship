# Store

This folder shows the redux setup of the entire application. The files are described as follows.

- It has an actions file that declares some actions like **fetchMovies**. An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.

- It has the reducer file that declares the store reducers. A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: `(state, action) => newState`

- It has the store file that is used to declare the store. The store is created by passing in a reducer, and has a method called getState that returns the current state value. The store has a combination of the reducers and it also has a thunk middleware declared.

- It has a types file that is used to declare the types of the application. The types are strings that gives this action a descriptive name.

## Sample Reducer

```js
const fetchMovies = (
  state = { loading: false, data: [], err: null },
  action
) => {
  switch (action.type) {
    case types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        err: null
      };

    case types.FETCH_MOVIES_PENDING:
      return {
        ...state,
        loading: true,
        err: null
      };

    case types.FETCH_MOVIES_FAILED:
      return {
        ...state,
        err: action.err,
        loading: false
      };

    default:
      return state;
  }
};
```
