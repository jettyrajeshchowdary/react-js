import React, { Fragment } from 'react'
class Product extends React.Component{
    state = { 
         product:{
            product_Name:'Realme 7',
            price:15999,
            image:"https://rukminim2.flixcart.com/image/416/416/keiuxzk0/mobile/z/h/3/realme-7-rmx2151-original-imafv7fzhnxkmdhx.jpeg?q=70&crop=false",
            qty:1
         }
          
    }
      incrHandler = ()=>{
        this.setState({product:{...this.state.product,qty:this.state.product.qty +1}})
      }
      decrHandler = ()=>{
         this.setState({
           
        })
      }

    render(){
        return <Fragment>
           <div className="container">
            <div className="row">
                <div className="col-md-10">
                    <table className='table'>
                        <thead>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product.product_Name}</td>
                                <td><img src={this.state.product.image} height={"100px"} alt="" /></td>
                                <td>{this.state.product.price}</td>
                                <td><i className='fa fa-minus-circle' onClick={this.decrHandler}></i>{this.state.product.qty} <i className='fa fa-plus-circle' onClick={this.incrHandler}></i></td>
                                <td>{this.state.product.price *  this.state.product.qty}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
           </div>
        </Fragment>
    }
}
export default Product