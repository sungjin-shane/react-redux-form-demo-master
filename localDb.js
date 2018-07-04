import {item as itemModel} from './reducers/forms'

// http://stackoverflow.com/a/2117523/122643, more or less...
const generateUUID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  const r = Math.random() * 16 | 0
  const v = c === 'x' ? r : (r & 0x3 | 0x8)
  return v.toString(16)
})

export const addItem = item => {
  const newItem = {
    id: generateUUID(),
    ...item
  }
  const storage = JSON.parse(localStorage.getItem('_eda_items') || '[]')
  storage.push(newItem)
  localStorage.setItem('_eda_items', JSON.stringify(storage))
  return newItem
}

export const getItems = () => JSON.parse(localStorage.getItem('_eda_items') || '[]')

export const saveItem = (item) => {
  // Strip anything which isn't an id or not in the model
  const newItem = Object.keys(item).reduce((acc, key) => {
    if (itemModel.hasOwnProperty(key) || key === 'id') {
      acc[key] = item[key]
    }
    return acc
  }, {})
  const items = JSON.parse(localStorage.getItem('_eda_items') || '[]')
  localStorage.setItem(
    '_eda_items',
    JSON.stringify(items.map(i => i.id === item.id ? newItem : i))
  )
}

export const deleteItem = id => {
  const items = JSON.parse(localStorage.getItem('_eda_items'))
  localStorage.setItem('_eda_items', JSON.stringify(items.filter(r => r.id !== id)))
}
