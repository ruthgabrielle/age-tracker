import { GlobalStyle } from './styles/global';
import {InfoProvider } from './hooks/InfoContext';
import Infos from './pages/infos';


export function App() {
  return (
    <InfoProvider>
     <Infos />
     <GlobalStyle />
    </InfoProvider>
  );
}
