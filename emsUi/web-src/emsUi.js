/**
 * @author , Pier Puccini
 */

import angular from 'angular';

import monitoringOverview from './pages/monitoringOverview/monitoringOverview';

import './emsUi.css';

const emsUiModule = angular.module('emsUiModule', ['maUiApp']);

emsUiModule.component('emsMonitoringOverview', monitoringOverview);

emsUiModule.config([
    'maUiMenuProvider',
    (maUiMenuProvider) => {
        maUiMenuProvider.registerMenuItems([
            {
                url: '/monitoring-overview',
                name: 'ui.monitoringOverview',
                template: '<ems-monitoring-overview></ems-monitoring-overview>',
                menuHidden: false,
                menuText: 'Fleet overview',
                menuIcon: 'language',
                params: {
                    noPadding: true,
                    hideFooter: true,
                    dateBar: {
                        rollupControls: true
                    }
                },
                permission: ['anonymous'],
                weight: 1
            }
        ]);
    }
]);

export default emsUiModule;
