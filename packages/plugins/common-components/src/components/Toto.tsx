import React, { useEffect } from 'react';
import { ComponentsContainer } from '@corneflex/core';

const Toto: React.FC<any> = () => <div>I'm the common components!</div>;

export interface CoreProps {
  onLoaded: (loaded: boolean) => void;
}
const Core: React.FC<CoreProps> = ({ onLoaded }) => {
  useEffect(() => {
    onLoaded(true);
  }, []);
  return null;
};

export default Toto;

ComponentsContainer.register('Text2', Toto);
