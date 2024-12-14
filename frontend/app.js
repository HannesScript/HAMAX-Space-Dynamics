
////////////////////////////////////////
// DO NOT REMOVE ANY COMMENTS 
// THAT CONTAIN :wolf- OR !wolf-
// OTHERWISE, THE CLI WILL NOT
// WORK AS EXPECTED
// AND A WOLF WILL EAT YOU
////////////////////////////////////////

import { App } from 'https://cdn.jsdelivr.net/npm/wolf-framework@1.0.2';

// :wolf-imports
import "./src/pages/grundlagen/grundlagen.js";
import "./src/pages/tests/tests.js";
import "./src/layout.js";
import "./src/pages/home.js";
// !wolf-imports

App.setRoutes({
    // :wolf-routes
    "/tests/grundlagen": "grundlagen",
    "/tests": "tests",
    "/": "home",
    // !wolf-routes
});

App.setLayout("layout");

App.mount("#app");