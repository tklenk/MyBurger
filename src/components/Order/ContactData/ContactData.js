import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button'
import './ContactData.css'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        }
    }
    render () {
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className="Input" type="text" name="name" placeholder="Your Name" />
                    <input className="Input" type="email" name="name" placeholder="Your Email" />
                    <input className="Input" type="text" name="name" placeholder="Street" />
                    <input className="Input" type="text" name="name" placeholder="Postal code" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData