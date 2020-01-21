import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import './ContactData.css'
import axios from '../../../axios-orders';


class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault()
        // console.log(this.props.ingredients)
        this.setState( { loading: true } );
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Lila Nowak',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '90898',
                    country: 'Poland'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }
        axios.post( '/orders.json', order )
            .then( response => {
                this.setState( { loading: false } );
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
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
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
    }
}

export default ContactData