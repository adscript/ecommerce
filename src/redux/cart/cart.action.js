import CardActionTypes from './cart.types'

export const toggleCartHidden = () => ({
    type: CardActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type: CardActionTypes.ADD_ITEM,
    payload: item
})