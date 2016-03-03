import React, { Component } from 'react'
import { DragLayer } from 'react-dnd'
import Card from './Card'

function getItemStyles (currentOffset) {
  if (!currentOffset) {
    return { display: 'none' }
  }

  var x = currentOffset.x
  var y = currentOffset.y
  var transform = `translate(${x}px, ${y}px)`

  return {
    pointerEvents: 'none',
    transform, WebkitTransform: transform
  }
}

class DraggableCardPreview extends Component {
  static propTypes = {
    ...Card.propTypes,
    currentOffset: React.PropTypes.shape({
      x: React.PropTypes.number,
      y: React.PropTypes.number
    }),
    isDragging: React.PropTypes.bool
  };

  render () {
    if (!this.props.isDragging) {
      return <div></div>
    }

    console.log(getItemStyles(this.props.currentOffset))
    return <div style={getItemStyles(this.props.currentOffset)}>
      <Card {...this.props} />
    </div>
  }
}

export default DragLayer((monitor) => {
  const item = monitor.getItem()
  return {
    id: item && item.id,
    episode: item && item.episode,
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging()
  }
})(DraggableCardPreview)
