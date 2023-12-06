import logo from './logo.svg';
import './App.css';
import MyDocument from "./Page/MyDocument";
import {PDFViewer} from "@react-pdf/renderer";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Controllbar>
        <FunctionalBtn>텍스트</FunctionalBtn>
        <FunctionalBtn>이미지</FunctionalBtn>
      </Controllbar>
      <PdfContainer>
        <PDFViewer style={{width: '100%', height:'100%'}}>
          <MyDocument/>
        </PDFViewer>
        <InputCotainer />
      </PdfContainer>
    </Container>
  );
}

const FunctionalBtn = styled.button`
  width: 100px;
  height: 100%;
`;
const InputCotainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.5);
`;
const Controllbar = styled.div`
  width: 45%;
  height: 6vh;
  background-color: blue;
  display: flex;
  gap: 20px;
`;
const PdfContainer = styled.div`
  position: relative;
  width: 45%;
  height: 93vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export default App;
