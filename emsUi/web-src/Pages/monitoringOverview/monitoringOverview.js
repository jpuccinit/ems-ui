/**
 * @copyright 2020 {@link http://Radixiot.com|Radix IOT,LLC.} All rights reserved.
 * @author Jose Puccini
 */

import monitoringTemplate from './monitoringOverview.html';
import './monitoringOverview.css';

class MonitoringOverviewController {
    static get $$ngIsClass() {
        return true;
    }

    static get $inject() {
        return [];
    }

    constructor() {}

    $onInit() {}
}

export default {
    bindings: {},
    controller: MonitoringOverviewController,
    template: monitoringTemplate
};
