import React, { forwardRef } from "react"

import { Container } from "reactstrap"

const Home = forwardRef((props, ref) => {
  const { ref1, ref2, ref3, ref4, ref5 } = ref.current
  return (
    <main>
      <header>
        <div>
          <img alt="my profile pic" src={require("./images/profile_pic_square.jpg")} />
        </div>
        <div className="header-text">
          <h1>Hi,</h1>
          <h1>I am Martti Leskinen</h1>
        </div>
      </header>

      <Container>
        <section ref={ref1}>
          <div className="h1-margin">
            <h1>Personal Profile</h1>
          </div>
          <p>
            I am a friendly and considered person. I work well in a team as well as independently. I enjoy learning and trying new things and I am a
            fast learner. If I start something I always see it through.
          </p>
          <br />
        </section>

        <section ref={ref3}>
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

        <section ref={ref2}>
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

        <section ref={ref4}>
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
      </Container>

      <div className="bottom">
        <Container>
          <div ref={ref5} className="card-row">
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
                <p>martti.leskinen@hotmail.fi</p>
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
        </Container>
        <footer>© 2022 Martti Leskinen</footer>
      </div>
    </main>
  )
})

export default Home
