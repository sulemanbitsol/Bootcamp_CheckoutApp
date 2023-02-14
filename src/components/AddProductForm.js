import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { Form, FormGroup, Label, Input } from "reactstrap"

import { addProduct } from '../redux/actions/product.action'

const AddProductForm = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    pieces: 1,
  })

  const handleChange = (e) => {
    setProduct(prevProduct => ({ ...prevProduct, [e.target.name]: e.target.value }));
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submittedValues: ", product);
    dispatch(addProduct(product))
  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex flex-column w-50">
      <FormGroup>
        <Label for="exampleName">
          Product Name
        </Label>
        <Input name="name" value={product.name} placeholder="Product Name" onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleprice">
          Product Price
        </Label>
        <Input type="number" name="price" placeholder="Enter product Price" value={product.price} onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleprice">
          Product Quantity
        </Label>
        <Input type="number" name="pieces" placeholder="Enter product Quantity" value={product.quantity} onChange={handleChange} />
      </FormGroup>
      <button type="submit" className='btn btn-primary'>
        Submit
      </button>
    </Form>
  )
}

export default AddProductForm