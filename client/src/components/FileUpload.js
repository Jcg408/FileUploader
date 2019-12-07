import React, { Fragment, useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [file, setFile] = useState(' ');
    const [filename, setFilename] = useState('Choose File');
    const [uploaded, setUploaded] = useState({});

    const handleChange = event => {
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].name);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const { fileName, filePath } = res.data;
            setUploaded({ fileName, filePath });
        } catch (err) {
            if (err.response.status === 500) {
                console.log('Error with server');
            } else {
                console.log(err.response.data.msg);
            }
        }
    };
    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div className='custom-file mb-4'>
                    <input
                        type='file'
                        className='custom-file-input'
                        id='customFile'
                        onChange={handleChange}
                    />
                    <label className='custom-file-label' htmlFor='customFile'>
                        {filename}
                    </label>
                </div>
                <input
                    type='submit'
                    value='Upload'
                    className='btn btn-primary btn-block mt-4'
                />
            </form>
            {uploaded ? (
                <div className='row mt-5'>
                    <div className='col-md-6 m-auto'>
                        <h3 className='text-center'> {uploaded.fileName}</h3>
                        <img
                            style={{ width: '80%' }}
                            src={uploaded.filePath}
                            alt=''
                        />
                    </div>
                </div>
            ) : null}
        </Fragment>
    );
};

export default FileUpload;
