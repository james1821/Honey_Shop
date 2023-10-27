import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

function FacebookMessenger() {

  const appId = process.env.APP_ID;
  const pageId = process.env.PAGE_ID;

  return (
    <div>
      <FacebookProvider appId={appId} chatSupport>
        <CustomChat pageId={pageId} minimized={true} />
      </FacebookProvider>
    </div>
  );
}

export default FacebookMessenger;
