import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

function FacebookMessenger() {



  
  return (
    <div>
      <FacebookProvider appId="853016633028406" chatSupport>
        <CustomChat pageId="102364352769089" minimized={true} />
      </FacebookProvider>
    </div>
    
  );
}

export default FacebookMessenger;
