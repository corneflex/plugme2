import React from 'react';

import { ComponentsContainer } from './containers/ComponentsContainer';

export const Text: React.FC<any> = (props: any) => (
  <div style={{ color: 'black' }}>Hello world!</div>
);

export * from './components/Core';
export * from './containers/ComponentsContainer';
export * from './components/ComponentComposer';

ComponentsContainer.register('Text', Text);
