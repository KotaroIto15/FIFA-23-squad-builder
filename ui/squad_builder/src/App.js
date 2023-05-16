import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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
  const [squadName, setSquadName] = useState("");

  const saveSquad = () => {
    const requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: squadName,
        squads: JSON.stringify(players)
      })
    }

    fetch("http://localhost:9000/apis/data/save", requestOptions)
    .then((response) => response.json())
    .then((data) => {console.log(data);})
    .catch((err)=> {console.log(err.message);});

    setSquadName("");
  }

  const loadSquad = () => {
    const name = squadName.replaceAll(" ", "-");
    const url = "http://localhost:9000/apis/data/load/" + name;

    console.log(url);

    fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setPlayers(JSON.parse(data.squad));
    });

    setSquadName("");
  }

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
              <Row className='name-box'>
                <Col xs={12}>
                  <TextField
                    id="squad-name"
                    className='squad-name'
                    label="Squad Name"
                    value={squadName}
                    sx={{
                      label: {
                        color: "#02ab86",
                        fontStyle: "italic",
                        fontWeight: "bold"
                      },
                      input: {
                        color: "#02ab86",
                        fontStyle: "italic",
                        fontWeight: "bold"
                      }
                    }}
                    onChange={(e)=>{setSquadName(e.target.value);}}
                    fullWidth
                  />
                </Col>
              </Row>
              <Row className='buttons'>
                <Col xs={6}>
                  <Button 
                    variant='contained'
                    size='large'
                    onClick={()=>{
                      if(squadName === "") alert("Squad name is empty!!");
                      else saveSquad();
                    }}
                  >
                    Save
                  </Button>
                </Col>
                <Col xs={6}>
                  <Button 
                    variant='contained'
                    size='large'
                    onClick={()=>{
                      if(squadName === "") alert("Squad name is empty!!");
                      else loadSquad();
                    }}
                  >
                    Load
                  </Button>
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
