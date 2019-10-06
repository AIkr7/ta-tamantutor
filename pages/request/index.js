import React from 'react';

import Navbar from '../../components/Navbar';

export default function Request() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: 70 }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdB77W1SV-BhXXcQqGHW3r5TGPv1RtqK2KhtAZimxevpM9AgA/viewform?embedded=true"
          width="100%"
          height="720"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          ...loading
        </iframe>
      </div>
    </>
  );
}
