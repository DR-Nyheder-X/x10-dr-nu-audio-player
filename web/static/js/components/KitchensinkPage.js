import React, { Component } from 'react'
import Card from './Card'
import Tabs from './Tabs'
import Toggle from './Toggle'
import Progress from './Progress'

export default class KitchensinkPage extends Component {
  render () {
    return <div>
      <Tabs path='/' />
      <Card>Hvorfor er du ikke startet til palæo-yoghurt endnu?</Card>
      <Card big>Hvorfor er du ikke startet til palæo-yoghurt endnu?</Card>
      <Progress>2 min</Progress>
      <Progress percent={34}>6 yrs</Progress>
      <Progress percent={100}>2:34</Progress>
      <Toggle checked>Boobs</Toggle>
      <Toggle checked={false}>Tofu</Toggle>
      <Toggle>Spaceships</Toggle>
    </div>
  }
}

module.exports = KitchensinkPage
