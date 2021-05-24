import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mytime from './timepick';
import Mydate from './datepick';
import Autocom from './Autocom';
import App1 from './Table';



function App() {
  return (
    <div class ="bg">
      <div>
        <nav class="navbar navbar-default navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#dp">DATE PICKER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tp">TIME PICKER</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Table">TABLE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#Auto">AUTO COMPLETE</a>
            </li>
          </ul>
        </div>
      </nav>
      </div>
      <div class="container">
      <div class="row">
      <div class = "col text-info box" align="center" id="dp">  
      <h3 class="w3-wide">DATE PICKER</h3>
        <Mydate/>
      </div>
      <div class = "col text-info box" align="center" id="tp">
      <h3 class="w3-wide">TIME PICKER</h3>
        <Mytime/>
      </div> 
      </div>
      </div>
      <h3 class="container text-info" align="center" id="Table">TABLE</h3>
      <div class = "container text-info box1" align="center">
      <App1/>
      </div> 
      <div class = "container w3-border-bottom text-info box" align="center" id="Auto">
      <h3 class="w3-wide">AUTO COMPLETE</h3>
        <Autocom/> 
      </div>
    </div>
  );
}


export default App;
