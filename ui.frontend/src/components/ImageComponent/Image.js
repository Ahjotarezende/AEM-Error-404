import React from 'react'
import {MapTo} from "@adobe/aem-react-editable-components"
import { ImageComp } from './Image.styled'

const Image = ({image}) => {
  return (
    <ImageComp src={image.src} alt="Error Image"/>
  )
}

export default MapTo("reactapp/components/image-component")(Image)