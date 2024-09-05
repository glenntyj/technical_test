import React, { useState, useRef } from 'react';
import { Button, FlexboxGrid, Uploader } from 'rsuite';

const FileUpload = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const uploader = useRef();

  const onFileChange = (file) => {
    setFile(file);
  };

  return (
    <div>
      <Uploader 
        fileList={file} 
        onChange={onFileChange} 
        autoUpload={false} 
        action="http://localhost:5000/api/files/upload"
        onSuccess={(data)=> {
          onUpload(data);
          setFile([]);
          setUploading(false);
        }}
        onError={(error)=>console.log('Error uploading file:', error)}
        ref={uploader} 
        draggable
      >
        <div style={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span>Click or Drag files to this area to upload</span>
        </div>
      </Uploader>
      <br></br>
      <FlexboxGrid justify='end'>
        <Button 
          appearance='primary'
          onClick={()=>{
            uploader.current.start();
            setUploading(true);
          }} 
          disabled={uploading}
        >
          {uploading ? 'Uploading...' : 'Upload'}
        </Button>
      </FlexboxGrid>
    </div>
  );
};

export default FileUpload;
