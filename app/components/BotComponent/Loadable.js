/**
 *
 * Asynchronously loads the component for BotComponent
 *
 */

import loadable from "loadable-components";

export default loadable(() => import("./index"));
