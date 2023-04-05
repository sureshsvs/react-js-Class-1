import * as React from 'react';
import { Container, Row, Col,Card,CardTitle,CardText, Button } from 'reactstrap';

class ServicesSection extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              {this.props.startServices.length > 0 &&
                this.props.startServices.map((item: any, index: any) => {
                  return (
                    <React.Fragment>
                      <div
                        key={index}
                        className="col-lg-3 col-sm-6 wow fadeInUp"
                        data-wow-delay="0.1s"
                      >
                        <div className="service-item rounded pt-3">
                          <div className="p-4">
                            <i
                              className={
                                'fa fa-3x ' + item.icon + ' text-primary mb-4'
                              }
                            ></i>
                            <h5>{item.serviceTitle}</h5>
                            <p>{item.Desc}</p>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  );
                })}
            </div>
               
            <Row>
            {this.props.startServices.length > 0 &&
                this.props.startServices.map((item: any, index: any) => {
                  return (
        <Col sm="6">
        <Card body>
          <CardTitle>{item.serviceTitle}</CardTitle>
          <CardText>{item.Desc}</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
                  )})
  }
      </Row>


          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default ServicesSection;
