import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import binary from '../public/binary.jpg';
import code from '../public/laptop_code.jpg';
import pixel from '../public/pixel.jpg';

function Projects() {
  return (
    <div className = 'Projects' id="Projects">
        <h1>Projects</h1>
        <CardGroup>
        <Card>
            <Card.Img variant="top" src={code} />
            <Card.Body>
            <Card.Title>Compiler 2022</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Java, ANTLR, DOT Language</Card.Subtitle>
            <Card.Text>
                Compiles .kxi (Java-inspired language) files into assembly code by creating and
                manipulating a series of abstract syntax trees and symbol tables
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={binary} />
            <Card.Body>
            <Card.Title>Assembler/Virtual Machine 2021</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">C++, Assembly, CMake</Card.Subtitle>
            <Card.Text>
                Compiles .asm files into bytecode that is then read and executed by the
                virtual machine.
            </Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src={pixel} />
            <Card.Body>
            <Card.Title>Ms. Barry (Python)</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Python</Card.Subtitle>
            <Card.Text>
                For a company hackathon at nCino, I created a video game starring the company 
                mascot, Ms. Barry. The goal is to squash as many bugs as possible and get
                a high score!
            </Card.Text>
            </Card.Body>
        </Card>
        </CardGroup>
    </div>
  );
}

export default Projects;