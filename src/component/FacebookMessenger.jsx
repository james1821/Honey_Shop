
import { FacebookProvider, CustomChat } from 'react-facebook';

function FacebookMessenger() {
  return (
    <div>
      <FacebookProvider appId="342145981684727" chatSupport>
        <CustomChat pageId="105637449200736" minimized={true} />
      </FacebookProvider>
    </div>
  );
}

export default FacebookMessenger;
