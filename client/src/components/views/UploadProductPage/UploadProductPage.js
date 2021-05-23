import React from 'react';
import './UploadProductPage.css';

function UploadProductPage() {

    
    return (
        <div className='upload'>
            <div className='heading'>
                <h2>Upload Travel Product</h2>
            </div>

            <form>

                <br />
                <br />

                <label>Title</label>
                <input
                    onChange={onTitleChange}
                    value={title}
                />
                
                <br />
                <br />

                <label>Description</label>
                <textarea
                    onChange
                    value
                />
                
                <br />
                <br />

                <label>Price($)</label>
                <input
                    onChange
                    value
                    type='number'
                />

                <select>
                    <option key value>

                    </option>
                </select>
                
                <br />
                <br />
                <button
                    onClick
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default UploadProductPage;
