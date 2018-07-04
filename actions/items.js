import * as localDb from '../localDb'

export const addItem = item => ({
  type: 'ADD_ITEM',
  item: localDb.addItem(item)
})

export const getItems = () => {
  return {
    type: 'GET_ITEMS',
    items: localDb.getItems()
  }
}

export const editItem = id => ({
  type: 'EDIT_ITEM',
  id
})

export const stopEditing = () => ({
  type: 'STOP_EDITING'
})

export const saveItem = (item) => {
  localDb.saveItem(item)
  return {
    type: 'SAVE_ITEM',
    item
  }
}

export const deleteItem = id => {
  localDb.deleteItem(id)
  return {
    type: 'DELETE_ITEM',
    id
  }
}
