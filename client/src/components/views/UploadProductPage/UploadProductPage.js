import React, {useState} from 'react';
import './UploadProductPage.css';
import { Typography, Button, Form, message, Input, Icon } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

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
                <Title>Upload Travel Product</Title>
            </div>

            <Form>

                <br />
                <br />

                <label>Title</label>
                <Input
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
                
                <br />
                <br />

                <label>Description</label>
                <TextArea
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />
                
                <br />
                <br />

                <label>Price($)</label>
                <Input
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
                <Button
                    onClick
                >
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default UploadProductPage;
