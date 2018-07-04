import {connect} from 'react-redux'

import Items from '../components/Items'
import {deleteItem, editItem} from '../actions/items'

const mapStateToProps = ({items}) => {
  return {
    items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteItem: id => dispatch(deleteItem(id)),
    editItem: id => dispatch(editItem(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Items)
