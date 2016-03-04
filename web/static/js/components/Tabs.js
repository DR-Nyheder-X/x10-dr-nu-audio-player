import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './Tabs.css'
import classname from 'classname'

export default function Tabs ({ path }) {
  const cls = classname('Tabs', {
    'is-firstTabActive': path === '/',
    'is-secondTabActive': path === '/categories'
  })

  return <div className={cls}>
    <div className='Tabs-inner'>
      <Link to='/' className='Tabs-tab Tabs-tab--first'>
        Nyheder
      </Link>
      <Link to='/categories' className='Tabs-tab Tabs-tab--second'>
        Emner
      </Link>
      <div className='Tabs-highlighter'></div>
    </div>
  </div>
}

Tabs.propTypes = {
  path: PropTypes.string.isRequired
}
