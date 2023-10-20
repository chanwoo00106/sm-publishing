import { Close } from '@src/assets/svgs'
import useNavigate from '@src/hooks/useNavigate'
import { interestArtistStore } from '@src/store'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'

const RightHeader = () => {
  const { pop } = useNavigate()
  const { clearCheckList } = interestArtistStore()

  const MoveToMenu = () => {
    pop()
    clearCheckList()
  }

  return (
    <TouchableOpacity onPress={MoveToMenu}>
      <WithLocalSvg width={32} height={32} asset={Close} />
    </TouchableOpacity>
  )
}

export default RightHeader
