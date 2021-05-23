import React, {useState} from 'react';
import './UploadProductPage.css';

const Continents = [
    { key: 1, value: "Africa" },
    { key: 2, value: "Europe" },
    { key: 3, value: "Asia" },
    { key: 4, value: "North America" },
    { key: 5, value: "South America" },
    { key: 6, value: "Australia" },
    { key: 7, value: "Antarctica" }
]

function UploadProductPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [continent, setContinent] = useState(1);

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
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
                
                <br />
                <br />

                <label>Description</label>
                <textarea
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />
                
                <br />
                <br />

                <label>Price($)</label>
                <input
                    onChange={e => setPrice(e.target.value)}
                    value={price}
                    type='number'
                />

                <select
                    onChange={e => setContinent(e.target.value)}
                >
                    {Continents.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                    
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
