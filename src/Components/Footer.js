import React from 'react'
import '../Styles/FooterDesktop.css'

const Footer = () => {


    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('testing')
    }

    

    return( 
        <div className='footer-color'>
            <form 
                className='search-form'
                onSubmit={handleSubmit}>
                
                <input 
                id='input'
                type='text'
                value='Colorado'
                // what is this name parameter again..? 
                name="">
                </input>

                <input 
                type='submit'
                value='🔍'>
                </input>
            </form>
        </div>
    )
};

export default Footer