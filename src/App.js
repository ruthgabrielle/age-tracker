import { GlobalStyle } from './styles/global';
import { makeServer } from './services/server';
import {InfoProvider } from './hooks/InfoContext';
import Infos from './pages/infos';

makeServer()

export function App() {
  return (
    <InfoProvider>
     <Infos />
     <GlobalStyle />
    </InfoProvider>
  );
}
