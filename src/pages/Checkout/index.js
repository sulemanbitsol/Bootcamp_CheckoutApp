import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row } from "reactstrap"

import { getProductList } from '../../redux/actions/product.action'
import { ProductCard } from '../../components'
import Invoice from './Invoice'

const Checkout = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products)

  useEffect(() => {
    dispatch(getProductList())
  }, [])

  return (
    <Container className="mt-4">
      <p className="fs-4">Checkout</p>
      <Row>
        <Col md="8">
          <div className="d-flex flex-column gap-3">
            {
              products.map(product => (
                <ProductCard {...product} />
              ))
            }
          </div>
        </Col>
        <Col md="4">
          <Invoice products={products} />
        </Col>
      </Row>
    </Container>
  )
}

export default Checkout