// Load environment variables from .env file if available
require('dotenv').load();

var config = {
    env:  'prod',

    host: '0.0.0.0',
    port: process.env.PORT || 3000,

    // Available themes:
    // + bordeau
    // + harlequin
    // + light-grey
    // + light-yellow
    // + night-blue
    // + snow
    // + yellow
    theme: 'snow',

    // clients configs
    api: {
        aws: {
            region: 'eu-west-1'
        },
        jenkins: {
            baseUrl: 'http://165.227.60.240:8080/',
            basicAuthUser: 'admin',
            basicAuthPassword: '5043658a11ceb720aead7ae44317f387'
        }
    },

    // define duration between each dashboard rotation (ms)
    rotationDuration: 8000,

    // define the interval used by Mozaïk Bus to call registered APIs
    apisPollInterval: 15000,

    dashboards: [

        // first dashboard
        {
            // 2 x 2 dashboard
            columns: 2,
            rows:    2,
            widgets: [
                {
                    type: 'jenkins.job_builds',
                    job: 'testing',
                    columns: 1, rows: 1,
                    x: 0, y: 0
                },
                {
                    type: 'jenkins.job_status',
                    job: 'testing',
                    layout: 'bold',
                    columns: 1, rows: 1,
                    x: 1, y: 0
                },
                {
                    type: 'jenkins.job_builds_histogram',
                    job: 'testing',
                    columns: 2, rows: 1,
                    x: 0, y: 1
                }
            ]
        }
    ]
};

module.exports = config;
