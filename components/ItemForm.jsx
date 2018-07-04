import React from 'react'
import {connect} from 'react-redux'
import {actions, Control, Errors, Form} from 'react-redux-form'

import itemColors from '../itemColors'
import {addItem} from '../actions/items'
import ColorChooser from './ColorChooser'

class ItemForm extends React.Component {
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
      <Form model='item' onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <Control.text model='.name'
          className='u-full-width' validateOn='blur'
          validators={{isRequired: name => name && name.length}}
        />
        <Errors model=".name" className="error" show='touched'
          messages={{isRequired: 'Please provide a name.'}}
        />

        <label>Description:</label>
        <Control.textarea model='.description' className='u-full-width' />

        <ColorChooser colors={itemColors} />

        <button type='submit' className='button-primary'>Add</button>
      </Form>
    )
  }
}

export default connect()(ItemForm)
