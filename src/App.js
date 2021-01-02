import './App.css';
import requests from './requests';
import Row from './Rows';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      {/*nav bar*/}
      <Nav />
      {/*banner*/}
      <Banner />
      <Row 
      title="Bijapur Originals" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow 
      />
      <Row title="Trendings" fetchUrl={requests.fetchTrending}/>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Comedies" fetchUrl={requests.fetchComedyMovie}/>
      <Row title="Action" fetchUrl={requests.fetchActionMovie}/>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovie}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovie}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
