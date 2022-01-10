import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useFederatedComponent } from './System';

function App() {
  const [loadded, setLoaded] = useState(false);

  const { Component: ComponentComposer, errorLoading } = useFederatedComponent(
    'http://localhost:3004/remoteEntry.js',
    'CorePlugin',
    './Toto',
  );

  return (
    <div className="App">
      <React.Suspense fallback={null}>
        {errorLoading
          ? null
          : ComponentComposer && (
              <ComponentComposer
                components={[
                  {
                    plugin: {
                      url: 'http://localhost:3003/remoteEntry.js',
                      name: 'CommonComponents',
                      module: './Toto',
                      import: '@rakuten-plugin/common-components',
                    },
                    props: {},
                  },
                  {
                    plugin: {
                      url: 'http://localhost:3004/remoteEntry.js',
                      name: 'CorePlugin',
                      module: './Text',
                      import: '@rakuten-plugin/common-components',
                    },
                    props: {},
                  },
                ]}
              />
            )}
      </React.Suspense>
    </div>
  );
}

export default App;
