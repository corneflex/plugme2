import React from 'react';
import { ComponentsContainer } from '../containers/ComponentsContainer';
import { useFederatedComponent } from '../System';

export interface ComponentComposerProps {
  components: Component[];
}

export interface Component {
  plugin: {
    name: string;
    url: string;
    module: string;
  };
  props?: any;
  components?: Component[];
}

export const ComponentComposer: React.FC<ComponentComposerProps> = ({
  components,
}) => {
  const reactComponents = components.map((component, index) => {
    //const comp = ComponentsContainer.getComponent(component.type);

    const { Component: Comp, errorLoading } = useFederatedComponent(
      component.plugin.url,
      component.plugin.name,
      component.plugin.module,
    );

    return errorLoading ? null : Comp && <Comp />;
  });

  return <>{reactComponents}</>;
};
