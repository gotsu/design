import React, { Component } from 'react'
// import { IconBookmark } from 'react-gotsu-icons'
import { IconBookmark, IconPencil, IconBookmark2, IconChat, IconHome, IconSearch, IconUser } from '../../../lib'

export default class MainPage extends Component {


  render() {
    return (
      <section>
        <IconBookmark width="100px" />
        <IconPencil width="50px" fill="red" />
        <IconBookmark2 width="50px" />
        <IconChat width="50px" />
        <IconHome width="40px" />
        <IconSearch width="40px" />
        <IconUser width="40px" />
      </section>
    )
  }
}