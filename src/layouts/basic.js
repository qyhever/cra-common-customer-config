import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import styles from './basic.module.less'

export default class BasicLayout extends Component {
  render() {
    return (
      <div className={styles.basicLayout}>
        <header className={styles.header}>
          <ul className={styles.navs}>
            <li className={styles.navItem}>
              <NavLink to="/home">home</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="/about">about</NavLink>
            </li>
          </ul>
        </header>
        {renderRoutes(this.props.route.routes)}
      </div>
    )
  }
}
