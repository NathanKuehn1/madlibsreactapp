import React, { Component } from 'react';
import {
    Col,
    Row
} from 'reactstrap';

class Madlibform extends Component {
    
    handleChange = function() {
        console.log('Trying to handle change');
    }

    render() {
      return (
          <Row style={{TextAlign: 'center', color: 'white'}} >
              <Col md="3" className='ImputWrapper'>
                  <Row>
                       <Col md="2">
                            <label className='colorLabel'>1</label>
                        </Col>
                        <Col md="10">
                            <input placeholder= 'Color' type='text' onChange={this.handleChange}/>
                        </Col>
                    </Row>
             </Col>
             <Col md="3" className='ImputWrapper'>
                  <Row>
                       <Col md="2">
                            <label className='colorLabel'>1</label>
                        </Col>
                        <Col md="10">
                            <input placeholder= 'Color' type='text' onChange={this.handleChange}/>
                        </Col>
                    </Row>
             </Col>
                <Col md="3" className='ImputWrapper'>
                  <Row>
                       <Col md="2">
                            <label className='colorLabel'>1</label>
                        </Col>
                        <Col md="10">
                            <input placeholder= 'Color' type='text' onChange={this.handleChange}/>
                        </Col>
                    </Row>
             </Col>
                <Col md="3" className='ImputWrapper'>
                  <Row>
                       <Col md="2">
                            <label className='colorLabel'>1</label>
                        </Col>
                        <Col md="10">
                            <input placeholder= 'Color' type='text' onChange={this.handleChange}/>
                        </Col>
                    </Row>
             </Col>
          </Row>
      );
    }
  }

  export default Madlibform;