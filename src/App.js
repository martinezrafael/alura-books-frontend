import Header from "./components/Header";

import styled from "styled-components";

const AppContainer = styled.div`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}

export default App;
