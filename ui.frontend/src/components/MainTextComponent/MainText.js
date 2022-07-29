import React from 'react'
import {MapTo} from "@adobe/aem-react-editable-components"
import {TextMain} from "./MainText.styled"

const MainText = (props) => {
  return (
    <TextMain>{props.text ? props.text : "Example"}</TextMain>
  )
}

export default MapTo("reactapp/components/maintext-component")(MainText)