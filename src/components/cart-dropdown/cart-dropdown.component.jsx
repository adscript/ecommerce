import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'


export default function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items"/>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}
