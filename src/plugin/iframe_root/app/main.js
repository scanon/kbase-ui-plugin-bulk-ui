System.register(['@angular/platform-browser-dynamic', './app.module', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, app_module_1, core_1;
    var Launcher;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_module_1_1) {
                app_module_1 = app_module_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Launcher = class Launcher {
                launch(data) {
                    core_1.enableProdMode();
                    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
                }
            };
            exports_1("Launcher", Launcher);
        }
    }
});
//# sourceMappingURL=main.js.map