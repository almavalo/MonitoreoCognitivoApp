import { useEffect, useState } from "react"
import { PERMISSIONS, request, RESULTS } from "react-native-permissions"
import { isIOS } from "../utils/constants"

export default () => {
  const [hasPermission,setHasPermission] = useState('LOADING')

  const requestAndroidPermissions = async () => {
    try {
        const result = await request(PERMISSIONS.ANDROID.CAMERA)
        if(result === RESULTS.GRANTED) setHasPermission('GRANTED')
        else setHasPermission('DENIED')
    } catch (error) {
        console.log('error:', error)
        setHasPermission('ERROR')
    }
  }

  const requestIOSPermissions = async () => {
    try {
        const result = await request(PERMISSIONS.IOS.CAMERA)
        if(result === RESULTS.GRANTED) setHasPermission('GRANTED')
        else if(result === RESULTS.DENIED) setHasPermission('DENIED')
        else if(result === RESULTS.BLOCKED) setHasPermission('BLOCKED')
    } catch (error) {
        console.log('error:', error)
        setHasPermission('ERROR')
    }
  }

  const requestPermissions = () => {
    if(isIOS) requestIOSPermissions();
    else requestAndroidPermissions();
  }

  useEffect(() => {
    setTimeout(() => {
        requestPermissions();
    }, 2000)
  }, [])


  return{
    hasPermission,
    requestPermissions
  }
}


