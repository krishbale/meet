

"use client"
import { JaaSMeeting } from "@jitsi/react-sdk"
const page = () => {

  return (

<JaaSMeeting 
roomName = "now"

appId = "vpaas-magic-cookie-ffb816e74be8464abdf3a4032af480b4"

configOverwrite = {{
    disableThirdPartyRequests: true,
    disableLocalVideoFlip: true,
    backgroundAlpha: 0.5,
    
      brandingRoomAlias: 'now'
 
}}
interfaceConfigOverwrite = {{
    VIDEO_LAYOUT_FIT: 'nocrop',
    MOBILE_APP_PROMO: false,
    TILE_VIEW_MAX_COLUMNS: 4
}}

getIFrameRef = { (iframeRef) => { iframeRef.style.height = '100vh'; } }
/> 
    
      
       
      
     


    
  )
}
export default page

