import Image from "../assets/photo-me-greyscale.png";

function Homepage() {
  return (
    <>
      <div id="main-div">
        <div id="left-div">
          <img id="photo-me" alt="A photo of Keiran Bunyan" src={Image}></img>
        </div>
        <div id="center-div">
          <div id="title"> About Me</div>
          <div id="content">
            <p>
              Hello, my name is Keiran Bunyan. I am a passionate web developer
              who loves programming and problem-solving. I thrive on the
              challenge of turning problems into elegant, functional solutions.
            </p>
            <p>
              I have recently graduated with a Bachelor's degree in 'Computer
              Science'. My academic journey provided me with a comprehensive
              foundation of software development, data structures & algorithms.
            </p>
            <p>
              I am committed to continuously enhancing my knowledge and
              deepening my interest in web technologies.
            </p>
            <p>
              My goal is to stay of the forefront of industry trends and
              continually improve my skills to create innovative and effective
              web solutions.
            </p>
          </div>
        </div>
        <div id="right-div">
          <div id="inner-div">
            <div id="title">Skills</div>
            <div id="content">
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
              <ul>
                <li>Git/GitHub</li>
                <li>CI/CD</li>
                <li>Testing</li>
                <li>Linux</li>
              </ul>
            </div>
          </div>
          <div id="inner-div">
            <div id="links">
              <div id="title">Links</div>
              <div id="content">
                <ul id="link-ul">
                  <a href="mailto:bunyan.keiran@gmail.com">Email</a>
                  <a href="https://github.com/Klon3r">GitHub</a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
