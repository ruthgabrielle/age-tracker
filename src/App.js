import { GlobalStyle } from './styles/global';
import { makeServer } from './services/server';
import {InfoProvider } from './hooks/InfoContext';
import Infos from './pages/infos';


export function App() {
  
  makeServer()

  return (
    <InfoProvider>
     <Infos />
     <GlobalStyle />
    </InfoProvider>
  );
}
