import React from 'react'
import { Card, CardBody, CardText, CardTitle, Col, Row } from 'reactstrap'

const ProductCard = ({ name = "", price = 0, pieces = 1 }) => {
  return (
    <Row>
      <Col>
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              {name}
            </CardTitle>
            <CardText>
              Price: {price} x {pieces}
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}

export default ProductCard