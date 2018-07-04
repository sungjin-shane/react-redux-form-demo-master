# React Redux Form (RRF) Demo

Form handling with RRF. Note that there is a repo with examples of non-Redux form handling at https://github.com/dev-academy-challenges/react-form-demo.


## Install & run

```shell
yarn
yarn start
```


## Things to look at

Notice that the `combineReducers` call in `reducers/index.js` now contains forms defined in `reducers/forms.js` using the function `combineForms`, passing it a model object. It can take as many of these as you have forms.

```js
import {createForms} from 'react-redux-form'

import items from './items'

export const item = {
  name: '',
  description: '',
  appearance: {
    color: 'aliceblue'
  }
}

export default createForms({item, items})
```

The initial model object is mostly just a bunch of empty string properties, though they can get more complex. The `appearance` object is handled by a `Fieldset` component, kept in `components/ColorChooser.jsx`.

RRF provides its own form components, and associates each with a model:

```js
import {actions, Control, Form} from 'react-redux-form'

class MyComponent extends React.Component{
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (item) {
    const {dispatch} = this.props
    dispatch(addItem(item))
    dispatch(actions.reset('item'))
  }

  render () {
    return (
      <Form model="item" onSubmit={this.handleSubmit}>

        <label>Name:</label>
        <Control.text model=".name" />

        <label>Description:</label>
        <Control.textarea model=".description" />

        <ColorChooser colors={itemColors} />

        <button type="submit">Add</button>
      </Form>
    )
  }
}
```

In the function called by `onSubmit`, any number of dispatch calls can be made. We can make API calls and update the form state depending on the server response (for example, rejecting an image that was too large).


## Boilerplate

There's a _little_ extra boilerplate, but not too much (mainly `combineForms`). If the form isn't the target component of the `connect` call (a child component, for example) we might need to explicitly connect the component to make `dispatch` available as a prop:

```js
  import {connect} from 'react-redux'

  class ItemForm extends React.Component {
    // ...
  }

  export default connect()(ItemForm)
```
