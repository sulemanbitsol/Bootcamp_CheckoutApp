import React from 'react'

const Invoice = ({ products = [] }) => {
  const getTotalPrice = () => {
    const initialValue = 0;
    const totalPrice = products.reduce((total, {price, pieces}) => 
       total + price * pieces, initialValue)
    return totalPrice;
  }

  const handleSubmit = () => {
    alert("Thankyou for shopping with us! Come back again.")
  }

  return (
    <>
      <p className="fs-5">Invoice</p>
      <hr />
      <div className="d-flex flex-column mt-4">
        {
          products.map(product => (
            <div className="d-flex flex-row justify-content-between">
              <p>{product.name}</p>
              <p>{product.price * product.pieces}</p>
            </div>
          ))
        }
        <hr/>
        <div className="d-flex flex-row justify-content-between">
          <p> Total Cost of Products</p>
          <p>{getTotalPrice()}</p>
        </div>
        <button className="btn btn-primary mt-3" onClick={handleSubmit}>
            Checkout
        </button>
      </div>
    </>
  )
}

export default Invoice