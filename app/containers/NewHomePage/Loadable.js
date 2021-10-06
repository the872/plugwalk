/**
 *
 * Asynchronously loads the component for NewHomePage
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));
