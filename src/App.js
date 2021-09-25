import Ages from './components/infos';
import { GlobalStyle } from './styles/global';
import { makeServer } from './services/server';
import {InfoProvider } from './InfoContext';

makeServer()

export function App() {
  return (
    <InfoProvider>
     <Ages />
     <GlobalStyle />
    </InfoProvider>
  );
}
