import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/HeaderSection'


function AboutFamilySection(props) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <AboutFamilySection
        title="Section 1"
      />
      <AboutFamilySection
        title="Section 2"
      />

      <div>
        <p>Hello </p>
        <h3>HHHH</h3> 
        <p>Please work </p>

      </div>
    </div>
  );
}

export default App;
