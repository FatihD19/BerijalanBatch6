import {Text as TextView} from 'react-native'
import React from 'react'
import { Fonts } from '../../assets/style';

const Text = ({children,fontSize=14,regular = true,bold= false,
    semiBold =false,
    style,...props}) => {
  return (
   <TextView {...props}
   style={[
    style,
    {fontSize:fontSize},
    regular && {fontFamily:Fonts.Nunito.Regular},
    bold && {fontFamily:Fonts.Nunito.Bold},
    semiBold && {fontFamily:Fonts.Nunito.BoldItalic},
    ]}>
   
   {children}</TextView>
  )
}

export default Text;
