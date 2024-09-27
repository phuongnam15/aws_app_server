const { env } = require("process");

module.exports = {
    apps: [
        {
            name: "aws-app",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
                ENV_VAR1: "environment-variable"
            }
        }
    ]
}