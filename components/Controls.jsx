import React from 'react'

const Controls = ({id, isEditing, editItem, deleteItem, submitItem}) => {
  if (isEditing) {
    return (
      <td className="item-controls">
        <button className="button-primary" onClick={() => submitItem(id)}>OK</button>
      </td>
    )
  }
  return (
    <td className="item-controls">
      <button className="button-primary edit-button" onClick={() => editItem(id)}>Edit</button>
      <button className="button-warning delete-button" onClick={() => deleteItem(id)}>Delete</button>
    </td>
  )
}

export default Controls
