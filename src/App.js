import "./App.css";
import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];
//just config your endpoint to return 2d array of strings

function App() {
  return (
    <div className="App">
      Hello Vase!
      <button>
        <CSVLink filename={"kurec.csv"} data={csvData}>
          Download me
        </CSVLink>
      </button>
    </div>
  );
}

export default App;
