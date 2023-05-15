import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Field from "./Field";
import Star from "./Star";
import Formation from "./Formation";
import Search from './Search';

function App() {

  const [showSearch, setShowSearch] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState("FourThreeThree");
  const [index, setIndex] = useState(new Map([
    ["name", ""],
    ["number", -1],
  ]));
  const [players, setPlayers] = useState(new Array(11));

  return (
    <div className="App">
      <header>
        <h1 className="app-title">FIFA23 SQUAD BUILDER</h1>
      </header>

      <Container fluid>
        <Row>
          <Col xs={12} md={8}>
            <Field selectedFormation = {selectedFormation} showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} players = {players} />
          </Col>
          <Col xs={12} md={4}>
            <Container>
              <Row className="star-formation">
                <Col xs={6}>
                  <Formation selectedFormation = {selectedFormation} setSelectedFormation = {setSelectedFormation} />
                </Col>
                <Col xs={6}>
                  <Star players = {players} />
                </Col>
              </Row>
              <Row className='search-box'>
                <Col xs={12}>
                  {showSearch ? <Search players = {players} setPlayers = {setPlayers} index = {index} /> : null}
                </Col>
              </Row>
            </Container>
            
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
