import React, { Component, PropTypes } from 'react'
import Toggle from './Toggle'

const categories = ['Twix', 'Mars', 'Snickers', 'Milkyway', 'Mælkesnitte']

export default class CategoriesPage extends Component {
  static propTypes = {
  };

  render () {
    return <div className='CategoriesPage'>
      {categories.map((c) => <Category key={c} category={c} />)}
    </div>
  }
}

function Category ({ category }) {
  return <Toggle>{category}</Toggle>
}
