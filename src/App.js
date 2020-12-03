import React, { Fragment, Component } from "react";
import {Route, Switch, Redirect, HashRouter} from "react-router-dom";
import 'video-react/dist/video-react.css';
import './App.css';

// Components
import MainNavigation from "./components/Navigation/MainNavigation";
import MainHeader from "./components/Main Page/MainHeader";
import AboutMe from "./components/Main Page/AboutMe";
import RecentProjects from "./components/Main Page/Project";
import ContactForm from "./components/Main Page/ContactMe/contact";
import ResumeNavigation from "./components/Navigation/ResumeNavigation";
import ResumeHeader from "./components/Resume Page/ResumeHeader";
import Education from "./components/Resume Page/education";
import Skills from "./components/Resume Page/skills";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

// Pages
import SubmitPage from "./pages/submit"
import NotFoundPage from "./pages/404";

const Main = () =>  (
  <Fragment>
    <MainNavigation />
    <MainHeader />
    <AboutMe />
    <RecentProjects />
    <ContactForm />
    <Footer />
  </Fragment>
);

const Submit = () =>  (
  <Fragment>
    <SubmitPage />
    <Footer />
  </Fragment>
);

const ResumePage = () =>  (
  <Fragment>
    <ResumeNavigation />
    <ResumeHeader />
    <Education />
    <Skills />
    <Footer />
  </Fragment>
);

const NotFound = () =>  (
  <Fragment>
    <NotFoundPage />
    <Footer />
  </Fragment>
);

class App extends Component {
  render() {
    return (
      <HashRouter basename={"#"}>
        <ScrollTop />
        <Switch>
          <Route exact path = "/" component={Main} />
          <Route exact path="/submit" component={Submit} />
          <Route exact path="/resume" component={ResumePage} />
          <Route exact path="/404" component={NotFound} />
          <Redirect to="/404"/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
