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

import React, { Component, PropTypes } from 'react';
import {
  Navbar
} from 'react-bootstrap';
import style from './Topbar.styl';

class Topbar extends Component {
  static displayName = 'Topbar';

  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    const {
      title
    } = this.props;

    return (
      <div className={style.Topbar}>
        <div className={style.Topbar_title}>
          <div className="text-center">
            <a href="#" className={style.Topbar_appTitle}>{title}</a>
          </div>
        </div>

        <Navbar
          className={style.Topbar_navbar}
          role="navigation" />
      </div>
    );
  }
}

export default Topbar;
