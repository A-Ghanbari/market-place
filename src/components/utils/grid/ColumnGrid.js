import { Col, Row } from "components/utils/grid"

export function ColumnGrid({ col, children }) {
  return (
    <Row
      style={{ marginBottom: 16 }}
    >
      {children.length ?
        children.map((item, index) => (
          <Col key={index} {...col}>
            {item}
          </Col>
        ))
        :
        <Col {...col}>
          {children}
        </Col>}
    </Row>
  )
}
