import React from 'react'
import { Container, Row, Col, Card ,Button} from "react-bootstrap";
const Product = () => {

 const productDetails=[
    {
        productImg : 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.webp?b=1&s=170667a&w=0&k=20&c=iJp6e2C-l2lRmyG3ColHMpXe0QYrPnrfQQc2O6PsYC4=',
        productTitle : 'AI',
        productText :'AI to solve real-world problems is key for business growth. AI will help power intelligent decisions at the DNA level of every enterprise.'
    },
    {
        productImg : 'https://5.imimg.com/data5/SELLER/Default/2020/11/WQ/LY/JD/116128987/statistical-data-analysis-and-interpretation-500x500.jpg',
        productTitle : 'Data Analytics',
        productText : 'Our cloud data platform and analytics database simplify data management helping to transform business.'
    },
    {
        productImg : 'https://media.istockphoto.com/id/1357049047/photo/big-data-and-cloud-computing-3d-rendering.webp?b=1&s=170667a&w=0&k=20&c=TSAgrCOQjeEx84cH5ziJROcQ2Py74ocY3PZMUWbpqGE=',
        productTitle : 'Cloud Offerings',
        productText : 'We help you achieve comprehensive cloud services based on transformation & drive success through  innovation.'
    },
    {
        productImg : 'https://5.imimg.com/data5/SELLER/Default/2022/12/FV/OU/ZP/180410647/cloud-security-service-500x500.jpg',
        productTitle : 'Enterprise Security',
        productText : 'Our security, IT operations and Secure DevOps solutions help protect your software, whether you build it - or buy it.'
    }
 ]

  return (
    <div className='product p-5'>    
    <Container style={{textAlign : 'center'}}>
        <h1><u>Products</u></h1>
        <Row>
            {productDetails.map((product)=>(
            <Col className="d-flex pt-5 ">
                <Card style={{ width: '18rem' }} className='productCard'>
                    <Card.Img variant="top" src={product.productImg} className='productCard' />
                    <Card.Body className='productCard'>
                        <Card.Title>{product.productTitle}</Card.Title>
                        <Card.Text>
                            {product.productText}
                        </Card.Text>
                        <Button variant="outline-info" >Learn more </Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    </Container>
    </div>
  )
}

export default Product