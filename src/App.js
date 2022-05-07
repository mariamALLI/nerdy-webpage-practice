import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Section from './components/Section';
import Job from './components/Job';
import Industry from './components/Industry';
import TalentPipeLine from './components/TalentPipeLine';
import Success from './components/Success';
import Network from './components/Network';

function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <Section/>
     <Job/>
     <Industry/>
     <TalentPipeLine/>
     <Success/>
     <Network/>
    </div>
  );
}

export default App;
