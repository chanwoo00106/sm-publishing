import { Close } from '@src/assets/svgs'
import { SCREENS } from '@src/constant'
import useNavigate from '@src/hooks/useNavigate'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'

const RightHeader = () => {
  const navigate = useNavigate()

  const MoveToMenu = () => navigate(SCREENS.menu)

  return (
    <TouchableOpacity onPress={MoveToMenu}>
      <WithLocalSvg width={32} height={32} asset={Close} />
    </TouchableOpacity>
  )
}

export default RightHeader
