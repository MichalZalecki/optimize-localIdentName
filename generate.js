const faker = require("faker");
const fs = require("fs");
const randomcolor = require("randomcolor");

console.log("generating...");

const CSS = [...Array(1000)]
  .map(() => {
    const className = faker.helpers.slugify(faker.company.companyName()).replace(/-/g, "_");
    return [`.${className}::before {
      content: "${faker.commerce.productName()}";
      color: ${randomcolor()};\n}
    `, className];
  });

const styles = CSS.map(([css]) => css).join("\n");
const classes = CSS.map(([_css, className]) => className);

fs.writeFileSync("./src/App.css", styles);

console.log("Done: App.css");

const App = `
import React from "react";

import cls from "./App.css";

const App = () => (
  <div>
    <ul>
${classes.map(cls => `      <li className={cls.${cls}} />`).join("\n")}
    </ul>
  </div>
);

export default App;
`;

fs.writeFileSync("./src/App.jsx", App);

console.log("Done: App.jsx");
