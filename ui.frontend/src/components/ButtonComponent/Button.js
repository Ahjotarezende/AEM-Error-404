import React from 'react'
import {MapTo} from "@adobe/aem-react-editable-components"
import {ButtonComp} from "./Button.styled"

const Button = (props) => {
  return (
     <ButtonComp>{props.text ? props.text : "Example"}</ButtonComp>
  )
}

export default MapTo("reactapp/components/button-component")(Button)