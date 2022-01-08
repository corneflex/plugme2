import { ComponentsContainer } from './containers/ComponentsContainer';

export const Text: React.FC<any> = (props:any) => <div>{props.children}</div>

export * from './components/Core';
export * from './containers/ComponentsContainer';
export * from './components/ComponentComposer';

ComponentsContainer.register('Text',Text)