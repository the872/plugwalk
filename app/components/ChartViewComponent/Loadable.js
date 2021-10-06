/**
 *
 * Asynchronously loads the component for ChartViewComponent
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));
