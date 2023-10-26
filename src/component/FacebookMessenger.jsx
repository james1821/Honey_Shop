import { FacebookProvider, CustomChat } from 'react-facebook';

function FacebookMessenger() {
  return (
    <div>
      <FacebookProvider appId={process.env.VITE_REACT_APP_FACEBOOK_APP_ID} chatSupport>
        <CustomChat pageId={process.env.VITE_REACT_APP_FACEBOOK_PAGE_ID} minimized={true} />
      </FacebookProvider>
    </div>
  );
}

export default FacebookMessenger;
