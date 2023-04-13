import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  HStack,
  Code,
  Grid,
  theme,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import NewAccount from './pages/NewAccount';
import NewAccountWithmnemonic from './pages/NewAccountWithmnemonic';
import NewAddress from './pages/NewAddress';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/newaccount" element={<NewAccount/>}/>
      <Route exact path="/newaccountwmnemonic" element={<NewAccountWithmnemonic/>}/>
      <Route exact path="/newAddress" element={<NewAddress/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
