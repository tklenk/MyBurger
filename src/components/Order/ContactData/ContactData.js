import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import './ContactData.css'
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Contry'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            },
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
                this.props.history.push('/')
            } )
            .catch( error => {
                this.setState( { loading: false } );
            } );
    }

    render () {
        let form = (
            <form>
                <Input elementType="" elementConfig="" value="" />
                <Input inputtype="input" type="email" name="name" placeholder="Your Email" />
                <Input inputtype="input" type="text" name="name" placeholder="Street" />
                <Input inputtype="input" type="text" name="name" placeholder="Postal code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData