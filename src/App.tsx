import React, { Suspense, useEffect } from 'react';
import { onGetExperience } from './store/reducers/experienceReducer';
import { loadProject, onGetProject } from './store/reducers/projectReducer';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Timeline from './containers/Timeline/Timeline';
import { onGetSkills } from './store/reducers/skillsReducer';
import Skillset from './containers/Skillset/Skillset';
import Intro from './containers/Intro/Intro';
import Header from './components/Header/Header';
import Projects from './containers/Projects/Projects';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

function App() {
  const dispatch = useDispatch()
  const projectsLoader = useSelector(loadProject)
  useEffect(() => {
    dispatch(onGetExperience())
    dispatch(onGetProject())
    dispatch(onGetSkills())
  }, [dispatch])
  if (!projectsLoader) {
    return (
      <Suspense fallback={Loader}>
        <div className="App">
          <Header />
          <div className="HeaderBlock"></div>
          <Intro />
          <Skillset />
          <Timeline />
          <Projects />
          <Footer />
        </div>
      </Suspense>
    );
  } else {
    return null
  }
}

export default App;
