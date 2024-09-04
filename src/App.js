import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DataList from './components/DataList';
import SearchBar from './components/SearchBar';
import { FlexboxGrid } from 'rsuite';

const App = () => {
  const [defaultData, setDefaultData] = useState([]);
  const [data, setData] = useState([]);

  const handleUpload = (uploadedData) => {
    setDefaultData(uploadedData);
    setData(uploadedData);
  };

  return (
    <FlexboxGrid justify='center'>
      <div style={{width:'50%'}}>
        <h3>CSV Uploader</h3>
        <br></br>
        <FileUpload onUpload={handleUpload} />
        <br></br>
        <SearchBar data={defaultData} onSearch={setData} />
        <br></br>
        <DataList data={data} />
      </div>
    </FlexboxGrid>
  );
};

export default App;
