

"use client"
import { JaaSMeeting } from "@jitsi/react-sdk"
const page = () => {

  return (

<JaaSMeeting 
appId = "vpaas-magic-cookie-ffb816e74be8464abdf3a4032af480b4"
roomName = "Balkrishna Universe"

configOverwrite = {{
    disableThirdPartyRequests: true,
    disableLocalVideoFlip: true,
    backgroundAlpha: 0.5
}}
interfaceConfigOverwrite = {{
    VIDEO_LAYOUT_FIT: 'nocrop',
    MOBILE_APP_PROMO: false,
    TILE_VIEW_MAX_COLUMNS: 4
}}

onApiReady = { (externalApi) => {  } }
getIFrameRef = { (iframeRef) => { iframeRef.style.height = '100vh'; } }
/> 
    
      
       
      
     


    
  )
}
export default page

