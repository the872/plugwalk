/**
 *
 * Asynchronously loads the component for ChatViewComponent
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));
