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
  Navbar,
  ButtonToolbar,
  ButtonGroup,
  FormControl,
  Button
} from 'react-bootstrap';
import Icon from '../Icon';
import style from './Toolbar.styl';

class Toolbar extends Component {
  static displayName = 'Toolbar';

  render() {
    return (
      <div className={style.Toolbar}>
        <Navbar className={style.Toolbar_navbar} fluid role="navigation">
          <Navbar.Form pullLeft>
            <ButtonToolbar>
              <ButtonGroup>
                <Button><Icon name="print" /></Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button><Icon name="angle-double-left" /></Button>
                <Button><Icon name="angle-left" /></Button>
                <Button><Icon name="angle-right" /></Button>
                <Button><Icon name="angle-double-right" /></Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button><Icon name="search-minus" /></Button>
                <Button><Icon name="search-plus" /></Button>
              </ButtonGroup>
              <ButtonGroup>
                <FormControl componentClass="select" placeholder="select">
                  <option value="select">select</option>
                  <option value="other">...</option>
                </FormControl>
              </ButtonGroup>
            </ButtonToolbar>
          </Navbar.Form>
          <Navbar.Form pullRight>
            <ButtonToolbar>
              <ButtonGroup>
                <Button><Icon name="angle-double-down" /></Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Navbar.Form>
        </Navbar>
      </div>
    );
  }
}

export default Toolbar;
