import './App.css';
import Sidebar from './components/Sidebar.js';
import Heading from './components/Heading.js';
import Timeline from './components/Timeline.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Contact from './components/Contact.js';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className = 'App' id="Top">     
        <Row>
         <Col md = {2} style={{ backgroundColor: 'rgb(29, 29, 29)'}}>
            <Sidebar/>
         </Col>
          <Col md = {10}>
            <Row>
              <header className = 'App-Header'>
                <Heading/>
              </header>
            </Row>
            <Row>
              <Timeline/>
            </Row>
            <Row>
              <Skills/>
            </Row>
            <Row>
              <Projects/>
            </Row>
            <Row>
              <Contact/>
            </Row>
          </Col>
        </Row>      
    </div>
  );
}

export default App;
