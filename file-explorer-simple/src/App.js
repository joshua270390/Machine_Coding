import './App.css';
import FileExplorer from './Components/FileExplorer';
import data from "./data.json"

function App() {


  return (
     <FileExplorer dataFolder={data} />
  );
}

export default App;
