import React, { Component } from 'react';
import { Grid, Row, Col, Button, Glyphicon, Image } from 'react-bootstrap';

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.images = [];
    this.currentPage = 1;

    this.uploadClick.bind(this);
  }

  uploadClick() {
    if (this.currentPage <= 4) {
      this.images.push(`/page_${this.currentPage}.jpg`);
      this.currentPage++;
      this.setState({images: this.images})
    }
  }

  render() {
    return (
      <Grid>
        <Row className="form-group">
        <Col xs={6}>
            <Button bsStyle="primary" bsSize="large" block className="action-button" onClick={() => this.uploadClick()}>
              <Glyphicon glyph="camera"/><br />
              Upload image
            </Button>
          </Col>
          <Col xs={6}>
            <Button bsSize="large" block className="action-button" disabled={this.state.images.length === 0}>
              <Glyphicon glyph="forward"/><br />
              Next
            </Button>
          </Col>
        </Row>
        <Row>
          {this.state.images.map((src, i) => <Col xs={3} key={i}><Image src={src} responsive/></Col>)}
        </Row>
      </Grid>
    )
  }
}

export default Upload;