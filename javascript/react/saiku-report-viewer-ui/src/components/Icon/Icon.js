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
import { elementType } from 'react-prop-types';
import classNames from 'classnames';

class Icon extends Component {
  static displayName = 'Icon';

  static propTypes = {
    componentClass: elementType,
    className: PropTypes.string,
    style: PropTypes.object,
    faClass: PropTypes.string,
    name: PropTypes.string.isRequired,
    fixed: PropTypes.bool,
    spin: PropTypes.bool,
    pulse: PropTypes.bool,
    size: PropTypes.oneOf(['lg', '2x', '3x', '4x', '5x']),
    rotate: PropTypes.oneOf(['45', '90', '135', '180', '225', '270', '315']),
    flip: PropTypes.oneOf(['horizontal', 'vertical'])
  };

  static defaultProps = {
    componentClass: 'i',
    faClass: 'fa',
    fixed: false,
    spin: false,
    pulse: false
  };

  render() {
    const {
      componentClass: ComponentClass,
      faClass,
      name,
      fixed,
      spin,
      pulse,
      size,
      rotate,
      flip,
      style,
      ...props
    } = this.props;
    let className = classNames(this.props.className, {
      [faClass]: true,
      [`fa-${name}`]: true
    });

    if (fixed) {
      className = `${className} fa-fw`;
    }

    if (spin) {
      className = `${className} fa-spin`;
    }

    if (pulse) {
      className = `${className} fa-pulse`;
    }

    if (size) {
      className = `${className} fa-${size}`;
    }

    if (rotate) {
      className = `${className} fa-rotate-${rotate}`;
    }

    if (flip) {
      className = `${className} fa-flip-${flip}`;
    }

    return (
      <ComponentClass
        {...props}
        className={className}
        style={style}
      />
    );
  }
}

export default Icon;
