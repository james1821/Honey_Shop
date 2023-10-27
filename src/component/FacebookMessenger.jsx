import React from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

function FacebookMessenger() {
  return (
    <div>
      <FacebookProvider appId="342145981684727" chatSupport>
        <CustomChat
          pageId="105637449200736"
          minimized={true}
          greetingDialogDisplay="hide"
          greetingDialogDelay="30"
        >
          <div>
            <div>
              <p>I'm interested</p>
            </div>
          </div>
        </CustomChat>
      </FacebookProvider>
    </div>
  );
}

export default FacebookMessenger;
