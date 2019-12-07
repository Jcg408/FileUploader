import React, { Fragment, useState } from 'react';


const FileUpload = () => {
    const [file, setFile] = useState(' ');
    const [filename, setFilename] = useState('Choose File');

    const handleChange = event => {
        setFile(event.target.files[0]);
        setFilename(event.target.files[0].name);
    };

    const handleSubmit = async  event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
       
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
        </Fragment>
    );
};

export default FileUpload;
