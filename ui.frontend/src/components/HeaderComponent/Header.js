import React from 'react'
import {MapTo} from "@adobe/aem-react-editable-components"
import {TextoHeader} from "./Header.styled"

const Header = (props) => {
  return (
    <TextoHeader>{props.text ? props.text : "Example"}</TextoHeader>
  )
}

export default MapTo("reactapp/components/header-component")(Header)