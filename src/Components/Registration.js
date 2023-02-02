import React from 'react'
import '../Styles/Registration.css'

const Registration = () => {
  return (
    <div className='registration-container'>
        <h2>Early Registration</h2>
        <p>Great value & special deals for early registration!</p>

        <div className='registration-form'>
            <form action='/'>
                <label htmlFor='Name'>Name</label>
                <input type='text' placeholder='Name' name='Name' required/>

                <label htmlFor='Email'>Email</label>
                <input type='email' placeholder='Email' name='Email' required />

                <label htmlFor='Contact'>Contact Number</label>
                <input type='tel' placeholder='Contact Number' name='Contact' required />

                <label htmlFor='Location'>Location</label>
                <select name='Location' id='Location' required>
                    <option value=''>Select Location</option>
                    <option value='Puncak Jalil'>Puchong</option>
                    <option value='Puchong'>Selangor</option>
                    <option value='Seri Kembangan'>Kuala Lumpur</option>
                    <option value='Other'>Other</option>
                </select>

                <section className='i-agree'>
                    <input type='checkbox' id='checkbox' name='checkbox-agree' required />
                    <span htmlFor='checkbox-agree'>
                        By ticking this box, I hereby confirm that I understand & accept your Privacy Policy and Terms and Conditions of use of the website. I hereby agree and give consent to Union United Sdn Bhd. and/or the subsidiary companies within ("Union United Sdn. Bhd.") to collect my personal data provided in this Form for the purpose of communicating to me your products and services.
                    </span>
                </section>

                <input type="submit" value="Submit"  id='submit'/>
            </form>
        </div>
    </div>
  )
}

export default Registration