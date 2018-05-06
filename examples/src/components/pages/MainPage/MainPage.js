import React, { Component } from 'react'
// import { IconBookmark } from 'react-gotsu-icons'
import { IconBookmark, IconPencil } from '../../../lib'

export default class MainPage extends Component {


  render() {
    return (
      <section>
        <IconBookmark width="100px" />
        <IconPencil width="50px" fill="red" />
      </section>
    )
  }
}