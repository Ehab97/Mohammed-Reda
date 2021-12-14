import { useEffect, useState } from 'react'
import './App.css'
import AddFile from './components/AddFile';
import Table from './components/Table';

function App() {
  const [files, setFiles] = useState([]);
  const [dataTable,setData]=useState([])
  useEffect(() => {
    console.log('data',dataTable);
    
  },[dataTable])
  return (
    <div className="App container">
      <AddFile setData={setData}/>
      <Table dataTable={dataTable}/>
    </div>
  )
}

export default App
