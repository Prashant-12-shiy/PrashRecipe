import {Header} from "./components"
import './App.css';
import {AllRoutes } from "./routes/AllRoutes";

function App() {

  return (
    <>
     <div className="App">
      <Header/>
      <main>
        <AllRoutes/>
      </main>
    </div>
    </>
  )
}

export default App
