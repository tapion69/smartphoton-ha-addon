module.exports = {
    flowFile: 'flows.json',
    userDir: '/data/nodered/',
    nodesDir: '/usr/lib/node_modules/node-red/nodes',
    uiPort: process.env.PORT || 1880,
    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    debugMaxLength: 1000,
    functionGlobalContext: {},
    logging: {
        console: {
            level: "info",
            metrics: false,
            audit: false
        }
    },
    exportGlobalContextKeys: false,
    externalModules: {},
    editorTheme: {
        projects: {
            enabled: false
        }
    },
// adminAuth: {
//     type: "credentials",
//     users: [{
//         username: "admin",
//         password: "$2a$08$zZWtXTja0fB1pzD4sHCMyOCMYz2Z6dNbM6tl8sJogENOMcxWV9DN.",
//         permissions: "*"
//     }]
// },
    httpAdminRoot: '/',
    httpNodeRoot: '/api',
    ui: { path: "ui" },
    diagnostics: {
        enabled: true,
        ui: true
    },
    runtimeState: {
        enabled: false,
        ui: false
    }
};
