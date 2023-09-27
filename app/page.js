"use client"
import { JaaSMeeting } from "@jitsi/react-sdk"
export default function Home() {
  return (
    
       <JaaSMeeting 
    appId = { process.env.APPID }
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
