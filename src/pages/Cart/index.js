import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { Container } from "reactstrap"

import { ProductCard } from '../../components'
import { getProductList } from '../../redux/actions/product.action'

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getProductList())
  },[])

  return (
    <Container>
      <p className="fs-4">Products List</p>
      <div className="d-flex flex-column gap-3">
      {
        products?.map(product => (
          <ProductCard key={product.id} {...product} />
          ))
        }
        </div>
    </Container>
  )
}

export default Cart;