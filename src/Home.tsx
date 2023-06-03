function Home() {
  return (
    <main>
      <header className="container">
        <div>
          <img alt="my profile pic" src={require("./images/profile_pic_square.jpg")} />
        </div>
        <div className="header-text">
          <h1>
            Hi, my name is <br /> Martti Leskinen
          </h1>
        </div>
      </header>

      <div className="container">
        <section id="profile">
          <div className="h1-margin">
            <h1>Personal Profile</h1>
          </div>
          <p>
            I am a test automation trainee with a strong interest in web and game development. I have a good understanding of Java concepts and best
            practices, allowing me to create robust and efficient applications. My coursework has given me exposure to different programming paradigms
            and problem-solving techniques, contributing to my ability to think critically and approach challenges from multiple angles.
            <div className="space" />
            While my current role as a test automation trainee focuses on ensuring software quality, my enthusiasm for web and game development
            extends beyond my job responsibilities. I am continuously learning and exploring these areas, eager to apply my skills and contribute to
            creating captivating digital experiences. As a test automation trainee, I understand the importance of attention to detail and the ability
            to work within a team. I am a dedicated and collaborative individual, always ready to contribute my insights and support my colleagues. I
            am comfortable working in Agile environments and familiar with tools such as JIRA and Jenkins.
          </p>
          <br />
        </section>

        <section id="experience">
          <div className="h1-margin">
            <h1>Work Experience</h1>
          </div>
          <h6 className="blue">Test Automation Trainee</h6>
          <h6>Airbus Defence and Space Oy</h6>
          <h6>4.4.2022 -</h6>
          <p>- Regression testing for the UI, API and End-to-End</p>
          <br />
          <h6 className="blue">Mail Processor</h6>
          <h6>Posti Oy</h6>
          <h6>2019-2021 Christmases</h6>
          <p>- Operated a letter sorting machine</p>
          <p>- Sorted mail manually</p>
          <br />
          <h6 className="blue">Maintenance Worker</h6>
          <h6>Nurminen Logistics Oy</h6>
          <h6>20.5. - 31.8.2019</h6>
          <p>- Responsible for the upkeep of the warehouses.</p>
          <br />
          <h6 className="blue">Mover</h6>
          <h6>Niemi Palvelut Oy</h6>
          <h6>6.9. - 31.12.2017</h6>
          <p>- Moved clients movables safely to the new location.</p>
          <br />
        </section>

        <section id="education">
          <div className="h1-margin">
            <h1>Academic History</h1>
          </div>
          <h6 className="blue">Metropolia University of Applied Sciences</h6>
          <h6>Information and Communication Technology | 9.1.2020 -</h6>
          <br />
          <h6 className="blue">Töölö Coeducational School, Upper Secondary School for Adults</h6>
          <h6>matriculation examination 3.6.2017</h6>
          <p>- Awarded a scholarship for good school performance by Yrjö Jahnsson Foundation</p>
          <br />
        </section>

        <section id="skills">
          <div className="h1-margin">
            <h1>Skills</h1>
          </div>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Java</li>
            <li>C# & .NET</li>
            <li>SQL</li>
            <li>GIT & Gerrit</li>
            <li>CI/CD</li>
            <li>Agile & Scrum</li>
            <li>TDD</li>
            <li>Windows OS</li>
            <li>Linux OS & Bash</li>
            <li>Office 365</li>
          </ul>
        </section>

        <section className="no-border-bottom">
          <div className="h1-margin">
            <h1>Military Service</h1>
          </div>
          <h6 className="blue">Finnish Defence Forces, Guard Jaeger Regiment</h6>
          <h6>Non-commissioned officer | 2018</h6>
          <p>- Aerial reconnaissance course 2.3 - 21.6.2018</p>
          <p>- Generator course 15. -17.10.2018</p>
          <p>- Quad bike course 9/2018</p>
          <br />
        </section>
      </div>

      <footer>
        <div className="container">
          <div id="contact" className="card-row">
            <div className="card-column">
              <div className="card-content">
                <p>Address</p>
                <hr />
                <p>Lokipolku 3</p>
              </div>
            </div>

            <div className="card-column">
              <div className="card-content">
                <p>Email</p>
                <hr />
                <p>martti.leskinen@airbus.com</p>
              </div>
            </div>

            <div className="card-column">
              <div className="card-content">
                <p>Phone</p>
                <hr />
                <p>+358 40 764 5884</p>
              </div>
            </div>

            <div className="card-column">
              <div className="card-content">
                <p>LinkedIn</p>
                <hr />
                <p>
                  <a href="https://www.linkedin.com/in/martti-leskinen">martti-leskinen</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div>© 2022 Martti Leskinen</div>
      </footer>
    </main>
  )
}

export default Home
