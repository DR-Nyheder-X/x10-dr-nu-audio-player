import React, { Component } from 'react'
import Card from './Card'
import Tabs from './Tabs'
import Toggle from './Toggle'

export default class KitchensinkPage extends Component {
  render () {
    return <div>

      <Tabs path='/' />
      <Card big>Hvorfor er du ikke startet til palæo-yoghurt endnu?</Card>
      <Card>Hvorfor er du ikke startet til palæo-yoga endnu?</Card>
      <Toggle checked>Boobs</Toggle>
      <Toggle checked={false}>Tofu</Toggle>
      <Toggle>Spaceships</Toggle>
    </div>
  }
}

module.exports = KitchensinkPage
