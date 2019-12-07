import React from 'react';
import FileUploader from './components/FileUpload'
import './App.css';

const App = () => (
    <div className='container mt-4'>
        <h4 className='display-4 text-center mb-4'>
            <i className='fa fa-arrow-up' /> File Uploader
        </h4>
        <FileUploader/>
    </div>
);
export default App;
