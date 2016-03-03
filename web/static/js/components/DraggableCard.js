import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import Card from './Card'

const cardSource = {
  beginDrag (props) {
    return { ...props }
  }
}

const cardTarget = {
  hover (props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.index

    if (dragIndex === hoverIndex) {
      return
    }

    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
    const clientOffset = monitor.getClientOffset()
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    props.moveCard(dragIndex, hoverIndex)

    monitor.getItem().index = hoverIndex
  }
}

class DraggableCard extends Component {
  static propTypes = {
    ...Card.propTypes,
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    connectDragPreview: PropTypes.func.isRequired
  }

  render () {
    const {
      isDragging,
      connectDragSource,
      connectDropTarget,
      connectDragPreview
    } = this.props

    return connectDragSource(
      connectDropTarget(
        connectDragPreview(
          <div className='DraggableCard' style={{opacity: isDragging ? 0.5 : 1}}>
            <Card {...this.props} />
          </div>
        )
      )
    )
  }
}

const source = DragSource('CARD', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  connectDragPreview: connect.dragPreview(),
  isDragging: monitor.isDragging()
}))

const target = DropTarget('CARD', cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver()
}))

export default source(target(DraggableCard))
