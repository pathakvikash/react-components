import React from 'react'
// import Vbutton from './Vbutton'
const Multistepform = () => {
    const [count, setCount] = React.useState(0)
    return (
        <div className='flex flex-col items-center gap-6 h-screen p-6'>
            <label className='absolute top-0' htmlFor="">Form</label>
            {count === 0 ? <>
                <div className="col">

                    <label htmlFor="">First Name</label>
                    <input type="text" placeholder='first name' />
                </div>
                <div className="col">
                    <label htmlFor="">Last Name</label>
                    <input type="text" placeholder='last name' />
                </div>
                <div className="col">
                    <label htmlFor="">Email</label>

                    <input type="text" placeholder='email' />
                </div>
            </> : ''
            }
            {count === 1 ? <>
                <div className="col">
                    <label htmlFor="">Address</label>
                    <input type="text" placeholder='address' />
                </div>
                <div className="col">
                    <label htmlFor="">City</label>
                    <input type="text" placeholder='city' />
                </div>
            </> : ''
            }
            <div className="flex justify-between w-screen p-3">
                <button onClick={() => setCount(count !== 0 ? count - 1 : 0)}>Prev</button>
                <button onClick={() => setCount(count !== 2 ? count + 1 : count)}>Next</button>

            </div>
        </div>
    )
}

export default Multistepform
