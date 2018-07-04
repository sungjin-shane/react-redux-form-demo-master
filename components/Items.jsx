import React from 'react'

import EditItemForm from './EditItemForm'
import ItemForm from './ItemForm'

class Items extends React.Component {
  deleteItem (evt, id) {
    evt.preventDefault()
    this.props.deleteItem(id)
  }

  getItem (item) {
    const {id, name, description, appearance} = item
    return (
      <tr key={id} className="item" onClick={() => this.props.editItem(id)} onContextMenu={(evt) => this.deleteItem(evt, id)}>
        <td className="item-name">{name}</td>
        <td className="item-description">{description}</td>
        <td className="item-color" style={{backgroundColor: appearance.color}}></td>
      </tr>
    )
  }

  render () {
    const editing = this.props.items.find(item => item.isEditing)
    return (
      <div className="row">
        <div className="two-thirds column">
          <h1>Items</h1>

          <p>Left-click to edit, right-click to delete. (Probably not the best UX for a production app!)</p>
          <p>Notice that when you edit an item, the item on the list updates in place. If you didn&apos;t want this behaviour, you&apos;d have to provide a temporary object of some sort for the form to use, only saving it to the store when it was validated.</p>
          <p>The &quot;Save&quot; button triggers a validation check prior to changing the record in local storage. The &quot;Cancel&quot; button effectively discards the changes by reloading the items from local storage.</p>

          <table className="u-full-width">
            <thead>
              <tr>
                <th className="item-name">Name</th>
                <th className="item-description">Description</th>
                <th className="item-color">Colour</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map(item => this.getItem(item))}
            </tbody>
          </table>
        </div>

        <div className="one-third column">
          <h2>{editing ? 'Edit' : 'Add an'} item</h2>
          {editing ? (<EditItemForm />) : (<ItemForm />)}

          <p>Above component is <strong>&lt;{editing ? 'Edit' : ''}ItemForm /&gt;</strong>. The colour chooser is in the Fieldset component <strong>&lt;ColorChooser /&gt;</strong></p>
        </div>
      </div>
    )
  }
}

export default Items
