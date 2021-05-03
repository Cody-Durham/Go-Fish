import React from 'react'

const Footer = () => {


    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('testing')
    }

    

    return( 
        <form 
            className='search-form'
            onSubmit={handleSubmit}>
            
            <input 
            type='text'
            value='Colorado / Placeholder'
            // what is this name parameter again..? 
            name="">
            </input>

            <input 
            type='submit'
            value='submit'>
            </input>
        </form>
    )
};

export default Footer