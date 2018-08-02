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
            baseUrl: '',
            basicAuthUser: '',
            basicAuthPassword: ''
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
            columns: 3,
            rows:    3,
            widgets: [
                // {
                //     type: 'jenkins.job_builds',
                //     job: 'testing',
                //     columns: 1, rows: 1,
                //     x: 0, y: 0
                // },
                // {
                //     type: 'jenkins.job_status',
                //     job: 'testing',
                //     layout: 'bold',
                //     columns: 1, rows: 1,
                //     x: 1, y: 0
                // },
                // {
                //     type: 'jenkins.job_builds_histogram',
                //     job: 'testing',
                //     columns: 2, rows: 1,
                //     x: 0, y: 1
                // }
                {
                    type: 'jenkins.view',
                    view: 'Cedar',
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
                    type: 'jenkins.view',
                    view: 'Cedar',
                    columns: 1, rows: 1,
                    x: 2, y: 0
                },

                {
                    type: 'jenkins.view',
                    view: 'Cedar',
                    columns: 2, rows: 2,
                    x: 0, y: 0
                },
                {
                    type: 'jenkins.view',
                    view: 'Cedar',
                    columns: 2, rows: 2,
                    x: 1, y: 0
                },
                {
                    type: 'jenkins.view',
                    view: 'Cedar',
                    columns: 2, rows: 2,
                    x: 2, y: 0
                },

                // {
                //     type: 'jenkins.view',
                //     view: 'all',
                //     columns: 1, rows: 1,
                //     x: 1, y: 0
                // }
            ]
        }
    ]
};

module.exports = config;
