const path = require('path')
const project = path.resolve(__dirname, "../")
const webpack_path = {
    project: project,
    build: path.resolve(project, "./dist"),
    node_modules: path.resolve(project, "./node_modules"),
    source: path.resolve(project, "./src")
}
module.exports= webpack_path