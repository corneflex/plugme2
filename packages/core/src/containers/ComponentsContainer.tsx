import React, { FunctionComponent } from 'react';

class ComponentsContainerSingleton {
  private static instance: ComponentsContainerSingleton;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {}

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): ComponentsContainerSingleton {
    if (!ComponentsContainerSingleton.instance) {
      ComponentsContainerSingleton.instance =
        new ComponentsContainerSingleton();
    }

    return ComponentsContainerSingleton.instance;
  }

  private _componentsContainer: { [type: string]: FunctionComponent } = {};

  register(key: string, component: FunctionComponent) {
    this._componentsContainer[key] = component;
  }

  getComponent(key: string): FunctionComponent {
    return this._componentsContainer[key];
  }
}

export const ComponentsContainer = ComponentsContainerSingleton.getInstance();
