'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var postscribe = _interopDefault(require('postscribe'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var PentahoStore = function (_React$Component) {
    inherits(PentahoStore, _React$Component);

    function PentahoStore() {
        classCallCheck(this, PentahoStore);
        return possibleConstructorReturn(this, (PentahoStore.__proto__ || Object.getPrototypeOf(PentahoStore)).apply(this, arguments));
    }

    createClass(PentahoStore, null, [{
        key: 'add',
        value: function add(id, obj) {
            var _temp = {};
            _temp[id] = obj;
            PentahoStore.dashboards = _extends({}, PentahoStore.dashboards, _temp);
        }
    }, {
        key: 'get',
        value: function get$$1(id) {
            return this.dashboards[id];
        }
    }, {
        key: 'has',
        value: function has(id) {
            console.log(PentahoStore.dashboards);
            return PentahoStore.get(id) !== undefined;
        }
    }]);
    return PentahoStore;
}(React.Component);

PentahoStore.dashboards = {};

var containerStyles = {
    height: 'calc(100vh - 120px)',
    width: '100%',
    border: 0
};

var PentahoPlaceHolder = function (_React$Component) {
    inherits(PentahoPlaceHolder, _React$Component);

    function PentahoPlaceHolder() {
        classCallCheck(this, PentahoPlaceHolder);
        return possibleConstructorReturn(this, (PentahoPlaceHolder.__proto__ || Object.getPrototypeOf(PentahoPlaceHolder)).apply(this, arguments));
    }

    createClass(PentahoPlaceHolder, [{
        key: 'render',
        value: function render() {
            console.log("1. PlaceHolder render", this.props);
            var url = this.props.url;
            var pentahoUrl = this.props.pentahoUrl;
            console.log('bla bla bla bla')
            if (this.props.type === 'iframe') {
                return React.createElement('iframe', {
                    title: 'Pentaho Embedded Artifact',
                    style: containerStyles,
                    src: pentahoUrl + url });
            } else if (this.props.type === 'requirejs') {
                console.log("2. Renderizando DIV");
                return React.createElement('div', { id: 'pentahoArtifactPlaceholder' });
            } else {
                return "Type must be either iframe or requirejs";
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {

            console.log("x. didupdate");
            //this.requirejsHandler();
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log("3. STARTING componentDidMount");
            //this.requirejsHandler();
        }
    }, {
        key: 'callDashRender',
        value: function callDashRender() {
            var Dashboard = PentahoStore.get(this.props.id);
            var Instance = new Dashboard('pentahoArtifactPlaceholder');
            Instance.render();
        }
    }, {
        key: 'requirejsHandler',
        value: function requirejsHandler() {
            var _this2 = this;

            var _isRequire = this.props.type === 'requirejs';
            var _hasDash = PentahoStore.has(this.props.id);

            if (_isRequire && !_hasDash) {
                console.log("4. NOT FOUND");
                var url = this.props.url;
                var module = this.props.pentahoUrl + 'plugin/pentaho-cdf-dd/api/renderer/getDashboard?path=' + url;
                window.require([module], function (Dash) {
                    console.log('5. Got Dashboard');
                    PentahoStore.add(_this2.props.id, Dash);
                    _this2.callDashRender();
                }, function (err) {
                    console.log('5. Error loading module:');
                    console.log(err.requireModules);
                    console.log(err);
                });
            } else if (_isRequire && _hasDash) {
                console.log("4. FOUND!!! YAAYY");
                console.log("5. renderizando", document.getElementById("pentahoArtifactPlaceholder"));
                if (document.getElementById("pentahoArtifactPlaceholder")) {
                    this.callDashRender();
                }
            } else {
                console.log("4. elsezao", document.getElementById("pentahoArtifactPlaceholder"));
            }
        }
    }]);
    return PentahoPlaceHolder;
}(React.Component);

var params = function params(jsonObj) {

    var outputString = "";
    try {
        outputString = Object.keys(jsonObj).map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(jsonObj[k]);
        }).join('&');
    } catch (err) {
        console.log("Error parsing object to url encoded string", jsonObj);
        console.log(err);
    }

    return outputString;
};

var PentahoArtifact = function (_React$Component) {
    inherits(PentahoArtifact, _React$Component);

    function PentahoArtifact(props) {
        classCallCheck(this, PentahoArtifact);

        var _this = possibleConstructorReturn(this, (PentahoArtifact.__proto__ || Object.getPrototypeOf(PentahoArtifact)).call(this, props));

        _this.pentahoUrl = 'http://localhost:8080/pentaho/';
        // _this.pentahoUrl = 'https://crossorigin.me/http://localhost:8080/pentaho/';
        // _this.pentahoUrl = 'https://crossorigin.me/https://otv.spicule.co.uk/pentaho/';
        var hasDependencies = undefined !== window.requireCfg;
        _this.state = { hasDependencies: hasDependencies };
        _this.dispatchSciptImport();
        return _this;
    }

    createClass(PentahoArtifact, [{
        key: 'writeScriptTag',
        value: function writeScriptTag() {
            var _self = this;
            postscribe('#root', '<script src="' + this.pentahoUrl + 'plugin/pentaho-cdf-dd/api/renderer/cde-embed.js"></script>', { done: this.scriptLoadedHandler.bind(_self) });
        }
    }, {
        key: 'scriptLoadedHandler',
        value: function scriptLoadedHandler() {
            window.require.config({
                config: {
                    text: {
                        useXhr: function useXhr(url, protocol, hostname, port) {
                            // allow cross-domain requests
                            // remote server allows CORS
                            return true;
                        }
                    }
                }
            });

            this.setState({ hasDependencies: true });
        }
    }, {
        key: 'dispatchSciptImport',
        value: function dispatchSciptImport() {
            var _this2 = this;

            fetch(this.pentahoUrl + 'Home', {
                mode: 'cors',
                credentials: 'include'
            }).then(function (isAuthRes) {

                //logged in
                if (isAuthRes.status === 200 && isAuthRes.url.endsWith('/Home')) {
                    _this2.writeScriptTag(_this2.pentahoUrl);

                    // need to login
                } else {
                    _this2.authenticateAndInsert();
                }
            })

            // need to login
            .catch(function (err) {
                _this2.authenticateAndInsert();
            });
        }
    }, {
        key: 'authenticateAndInsert',
        value: function authenticateAndInsert() {
            var _this3 = this;

            var login = {
                j_username: 'admin',
                j_password: 'password'
            };

            fetch(this.pentahoUrl + 'j_spring_security_check', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                body: params(login),
                mode: 'cors',
                credentials: 'include'
            }).then(function (response) {
                var statusOK = response.status === 200;
                var successfulLogin = !response.url.includes('?login_error=');

                if (statusOK && successfulLogin) {
                    _this3.writeScriptTag(_this3.pentahoUrl);
                } else {
                    console.log("error logging in", response, window.requireCfg);
                }
            }).catch(function (error) {
                console.error(error);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            if (!this.state.hasDependencies) {
                return React.createElement(
                    'div',
                    null,
                    'Loading...'
                );
            } else {
                var match = this.props.match;


                // var id = match.params.id;
                // var decodedID = atob(id).split('||');
                // console.log('===============');
                // console.log(decodedID);
                // console.log('===============');
                // var type = decodedID[0];
                // var url = decodedID[1];

                // var id = 'requirejs||dash!/public/plugin-samples/pentaho-cdf-dd/pentaho-cdf-dd-require/embeddedSample/dashboard/sample.wcdf';
                // var id = 'iframe||api/repos/public/plugin-samples/pentaho-cdf-dd/pentaho-cdf-dd-require/embeddedSample/dashboard/sample.wcdf/generatedContent';

                // var id = 'requirejs||/public/Steel Wheels/Dashboards/CTools_dashboard.wcdf';

                var id = 'iframe||api/repos/%3Apublic%3ASteel%20Wheels%3ADashboards%3ACTools_dashboard.wcdf/generatedContent';
                // var id = 'requirejs||/public/Steel Wheels/Dashboards/CTools_dashboard.wcdf';

                var decodedID = id.split('||');
                var type = decodedID[0];
                var url = decodedID[1];



                var childProps = { type: type, url: url, id: id, pentahoUrl: this.pentahoUrl };
                return React.createElement(PentahoPlaceHolder, childProps);
            }
        }
    }]);
    return PentahoArtifact;
}(React.Component);

exports.PentahoArtifact = PentahoArtifact;
