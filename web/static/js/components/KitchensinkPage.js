import React, { Component } from 'react'
import Card from './Card'
import Tabs from './Tabs'
import Toggle from './Toggle'

export default class KitchensinkPage extends Component {
  render () {

    return <div>
      <Tabs />
      <Card>Hvor er Assens?</Card>
      <Card>Hvorfor er du ikke startet til palæo-yoga endnu?</Card>
      <Card>Hvad er meningen med livet, og hvorfor har du ikke lyst til at vide det?</Card>
      <Toggle>Boobs</Toggle>
      <Toggle>Tofu</Toggle>
      <Toggle>Spaceships</Toggle>
    </div>
  }
}

module.exports = KitchensinkPage
