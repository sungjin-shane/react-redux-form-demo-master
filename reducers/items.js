const items = (items = [], action) => {
  switch (action.type) {
    case 'GET_ITEMS':
      return action.items

    case 'ADD_ITEM':
      return [...items, action.item]

    case 'EDIT_ITEM':
      return items.map(r => r.id === action.id ? {...r, isEditing: true} : r)

    case 'STOP_EDITING':
      return items.map(r => r.isEditing ? {...r, isEditing: false} : r)

    case 'SAVE_ITEM':
      return items.map(r => r.id === action.id ? action.item : r)

    case 'DELETE_ITEM':
      return items.filter(r => r.id !== action.id)

    default:
      return items
  }
}

export default items
