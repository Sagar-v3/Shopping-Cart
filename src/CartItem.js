import React from 'react'

class CartItem extends React.Component {

    increaseQuantitity = () => {

        //  setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState form 2
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQuantitity = () => {

        const { qty } = this.state;

        if(qty === 0) {
            return;
        }

        this.setState((prevState) => {
            
                return {
                    qty: prevState.qty - 1
                }
        });
    }

    render() {
        const {title, price, qty} = this.props.product;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{fontSize: 25}}>{title}</div>
                    <div style={{color: '#777'}}>{price}</div>
                    <div style={{color: '#777'}}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
    
                        <img 
                            alt='decrease' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/128/992/992683.png'
                            onClick={this.decreaseQuantitity}
                        />
                        <img 
                            alt='increase' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/128/992/992651.png'
                            onClick={this.increaseQuantitity}
                        />
                        <img 
                            alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png'
                        />
                    </div>
                </div>

               
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;