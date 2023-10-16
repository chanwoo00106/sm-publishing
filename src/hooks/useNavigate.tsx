import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { SCREENS } from '@src/constant'
import { RootStackParamList } from '@src/screens/type'

type ScreenType = typeof SCREENS
type ScreenValueType = ScreenType[keyof ScreenType]

const useNavigate = () => {
  type ScreenProp = NativeStackNavigationProp<
    RootStackParamList,
    ScreenValueType
  >

  const navigation = useNavigation<ScreenProp>()

  return navigation.navigate
}

export default useNavigate
