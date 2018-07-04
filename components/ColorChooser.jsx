import React from 'react'
import {Control, Errors, Fieldset} from 'react-redux-form'

// Here's an example of separating a component or group of components
// so that it can be re-used in other forms. Notice that the Fieldset has a
// `model` prop of ".appearance". This means that our items will gain a
// property that looks like:
//
//   appearance: {
//     color: 'cornflowerblue'
//   }
//
// We could also add other form elements to the fieldset, like a checkbox
// that determines if the item is highlighted, or a slider for opacity.

const ColorChooser = ({colors}) => (
  <Fieldset model=".appearance">
    <label>Colour:</label>

    <Control.select model=".color" className="u-full-width"
      validators={{isChartreuse: color => color !== 'chartreuse'}}>
      {colors.map(color => <option key={color} value={color}>{color}</option>)}
    </Control.select>

    <Errors model='.color' className='error' show="touched"
      messages={{isChartreuse: 'Nobody likes chartreuse.'}}
    />
  </Fieldset>
)

export default ColorChooser
