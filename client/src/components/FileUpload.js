import React, { Fragment } from 'react';

const FileUpload = () => {
    return (
        <Fragment>
            <form>
                <div className='custom-file'>
                    <input
                        type='file'
                        className='custom-file-input'
                        id='customFile'
                    />
                    <label className='custom-file-label' for='customFile'>
                        Choose file
                    </label>
                </div>
            </form>
        </Fragment>
    );
};

export default FileUpload;
