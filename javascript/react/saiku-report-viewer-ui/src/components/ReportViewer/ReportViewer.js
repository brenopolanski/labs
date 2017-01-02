/**
 *   Copyright 2017 OSBI Ltd
 *
 *   Licensed under the Apache License, Version 2.0 (the "License");
 *   you may not use this file except in compliance with the License.
 *   You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   Unless required by applicable law or agreed to in writing, software
 *   distributed under the License is distributed on an "AS IS" BASIS,
 *   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *   See the License for the specific language governing permissions and
 *   limitations under the License.
 */

import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';
import style from './ReportViewer.styl';

var Pdf = require('react-pdfjs');

class ReportViewer extends Component {
  static displayName = 'ReportViewer';

  onDocumentComplete(numPages) {
    console.log(numPages);
  }

  render() {
    return (
      <div className={style.ReportViewer}>
        <Grid>
          <Row>
            <Col md={10} mdOffset={1}>
              <div className={style.ReportViewer_canvas}>
                <Pdf
                  file="http://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf"
                  page={2}
                  content="Breno Polanski"
                  onDocumentComplete={this.onDocumentComplete}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ReportViewer;
