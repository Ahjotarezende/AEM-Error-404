import React from 'react'
import {MapTo} from "@adobe/aem-react-editable-components"
import { TextFooter } from './Footer.styled'

const Footer = (props) => {
  return (
    <TextFooter>created by {props.text ? props.text : "username"} - devChallenges.io</TextFooter>
  )
}

export default MapTo("reactapp/components/footer-component")(Footer)