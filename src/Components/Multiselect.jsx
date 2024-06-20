import React, { useState } from 'react'

const Multiselect = () => {
    const [selected, setSelected] = useState([]);

    const handleChange = (event) => {
        const { value, checked } = event.target;
        console.log(value, checked);
        if (checked) {
            setSelected([...selected, value]);
        } else {
            setSelected(selected.filter((item) => item !== value));
        }
    };

    const options = ['Honda', 'Pulsar', 'OLA', 'Duke', 'Bullet', 'Hero'];

    const handledropdown = () => {
        const dropdown = document.getElementById('dropdown');
        if (dropdown.style.display === 'none') {
            dropdown.style.display = 'flex';
            dropdown.style.flexDirection = 'column';
        } else {
            dropdown.style.display = 'none';
        }
    };
    return (
        <div className='App'>
            <div
                className='container'
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <p
                    id='tags'
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    {' '}
                    Tags:{' '}
                    {selected.map((item) => (
                        <span
                            style={{
                                border: '1px solid black',
                                gap: '55px',
                                display: 'flex',
                                margin: '5px',
                                padding: '5px',
                                borderRadius: '5px',
                            }}
                            key={item}
                        >
                            {item}{' '}
                        </span>
                    ))}
                </p>
                <button onClick={handledropdown}>Select</button>
                <div
                    style={{
                        display: 'none',
                        flexDirection: 'column',

                        alignItems: 'start',
                        border: '1px solid black',
                        borderRadius: '5px',
                    }}
                    id='dropdown'
                >
                    {options.map((option) => (
                        <label key={option}>
                            <input
                                type='checkbox'
                                value={option}
                                onChange={handleChange}
                                checked={selected.includes(option)}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Multiselect
