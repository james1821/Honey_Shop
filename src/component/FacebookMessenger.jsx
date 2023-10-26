"use client";
import { FacebookProvider, CustomChat } from 'react-facebook';

function FacebookMessenger() {
  return (
    <div>
        <FacebookProvider appId="123456789" chatSupport>
        <CustomChat pageId="123456789" minimized={false}/>
      </FacebookProvider>    
    </div>
  )
}

export default FacebookMessenger