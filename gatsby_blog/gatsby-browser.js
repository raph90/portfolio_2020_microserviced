const React = require("react")
require("./src/utils/global_styles.css")
const Layout = require("./src/components/Layout/layout.component").default

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
