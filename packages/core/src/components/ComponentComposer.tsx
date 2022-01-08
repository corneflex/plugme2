import React from 'react';
import { ComponentsContainer } from '../containers/ComponentsContainer';

export interface ComponentComposerProps {
  components: Component[];
}

export interface Component {
  type: string;
  props: any;
  components: Component[];
}

export const ComponentComposer: React.FC<ComponentComposerProps> = ({
  components,
}) => {
  const reactComponents = components.map((component) => {
    React.createElement(ComponentsContainer.getComponent(component.type));
  });

  return <>{reactComponents}</>;
};
