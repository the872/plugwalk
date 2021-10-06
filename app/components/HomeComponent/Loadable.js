/**
 *
 * Asynchronously loads the component for HomeComponent
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));
