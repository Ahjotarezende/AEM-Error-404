import React from 'react';
import {MapTo} from "@adobe/aem-react-editable-components";
import {Texto} from "./Text.styled"

const Text = (props) => {
    const defaultText = "Example";
  return (
    <Texto>{props.text ? props.text : defaultText}</Texto>
  )
};

export default MapTo("reactapp/components/text-component")(Text)