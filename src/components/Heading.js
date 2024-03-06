import avatar from '../public/Me-modified.png'
const Heading = () => {
    return (
        <div id="Heading">
            <img className = 'Avatar' src = {avatar} alt = 'My avatar'/>
            <h1 className='Introduction'>Hi, I'm Scott Robison</h1>
            <p style = {{fontSize: 18}}>
                 Self-starting and resourceful software engineer experienced in implementing production level front-end and back-end code
            </p>
            <a href="scottrobison_2024.pdf" class="Resume-Button" download="scottrobison_2024.pdf">Download Resume</a>
        </div>
    );
}

export default Heading