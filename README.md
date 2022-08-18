
* The `Dashboard` and `Car` components need the exact same setup so follow the same instructions for them. Create files for them in the `containers` folder. You can copy/paste from the `Home` container but make sure to change `Home` to reference the appropriate component.

* Make the switch for `Dashboard` and `Car` in the `Router.js` file just like we did for `Home`. Make sure to use `props.cars` in these components as well and remove the import to `cars.json`.

* Everything look good so far? If not, ask the instructor.

* Navigate to the `Dashboard` component and see the text, "Welcome, Name". Let's change that. To do that we are going to add a user to our global state and then pull it into the `Dashboard` component. 

* Go to the `redux/state.js` file and add a property called "user" above cars. Give it the following value:
```
{
    username: 'test-user-1',
    email: 'test-user@example.com'
}
```

* Now, go back to the Dashboard _container_ and add this user in the `mapStateToProps` function.

* Finally, in the Dashboard _component_, reference `props.user.username` to show the username instead of the word "NAME". Whenever another component needs access to the user, they can simply add it in their mapStateToProps function as well.

* Good work!
