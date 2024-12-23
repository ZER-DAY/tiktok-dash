/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/delegation/route";
exports.ids = ["app/api/delegation/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("pg");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdelegation%2Froute&page=%2Fapi%2Fdelegation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdelegation%2Froute.ts&appDir=C%3A%5CUsers%5CBahaa%5CDesktop%5Ctiktok-dash%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBahaa%5CDesktop%5Ctiktok-dash&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdelegation%2Froute&page=%2Fapi%2Fdelegation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdelegation%2Froute.ts&appDir=C%3A%5CUsers%5CBahaa%5CDesktop%5Ctiktok-dash%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBahaa%5CDesktop%5Ctiktok-dash&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Bahaa_Desktop_tiktok_dash_src_app_api_delegation_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/delegation/route.ts */ \"(rsc)/./src/app/api/delegation/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/delegation/route\",\n        pathname: \"/api/delegation\",\n        filename: \"route\",\n        bundlePath: \"app/api/delegation/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Bahaa\\\\Desktop\\\\tiktok-dash\\\\src\\\\app\\\\api\\\\delegation\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Bahaa_Desktop_tiktok_dash_src_app_api_delegation_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZkZWxlZ2F0aW9uJTJGcm91dGUmcGFnZT0lMkZhcGklMkZkZWxlZ2F0aW9uJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZGVsZWdhdGlvbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNCYWhhYSU1Q0Rlc2t0b3AlNUN0aWt0b2stZGFzaCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQmFoYWElNUNEZXNrdG9wJTVDdGlrdG9rLWRhc2gmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzJCO0FBQ3hHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxCYWhhYVxcXFxEZXNrdG9wXFxcXHRpa3Rvay1kYXNoXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGRlbGVnYXRpb25cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2RlbGVnYXRpb24vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9kZWxlZ2F0aW9uXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9kZWxlZ2F0aW9uL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcQmFoYWFcXFxcRGVza3RvcFxcXFx0aWt0b2stZGFzaFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxkZWxlZ2F0aW9uXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdelegation%2Froute&page=%2Fapi%2Fdelegation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdelegation%2Froute.ts&appDir=C%3A%5CUsers%5CBahaa%5CDesktop%5Ctiktok-dash%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBahaa%5CDesktop%5Ctiktok-dash&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/delegation/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/delegation/route.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n// مثال باستخدام PostgreSQL (pg)\n\n\nasync function POST(req) {\n    const client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client({\n        user: \"postgres.nccfsxzzipnnvbgmcjpn\",\n        host: \"aws-0-eu-central-1.pooler.supabase.com\",\n        database: \"postgres\",\n        password: \"AL-ASIL\",\n        port: 6543\n    });\n    try {\n        await client.connect();\n        // قراءة البيانات المرسلة من العميل\n        const formData = await req.json();\n        const { email, tiktok_userID, age, country, phone, how_found_us, sub_agent_name, other_text } = formData;\n        // استعلام لإدخال البيانات في جدول 'delegations'\n        const query = `\n      INSERT INTO delegations (email, tiktok_userID, age, country, phone, how_found_us, sub_agent_name, other_text)\n      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)\n    `;\n        const values = [\n            email,\n            tiktok_userID,\n            age,\n            country,\n            phone,\n            how_found_us,\n            sub_agent_name,\n            other_text\n        ];\n        await client.query(query, values);\n        // إرجاع استجابة ناجحة\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"تم إرسال البيانات بنجاح\"\n        }, {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error processing data:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"حدث خطأ أثناء إرسال البيانات\"\n        }, {\n            status: 500\n        });\n    } finally{\n        await client.end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9kZWxlZ2F0aW9uL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxnQ0FBZ0M7QUFDSjtBQUM0QjtBQUVqRCxlQUFlRSxLQUFLQyxHQUFnQjtJQUN6QyxNQUFNQyxTQUFTLElBQUlKLHNDQUFNQSxDQUFDO1FBQ3hCSyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxVQUFVO1FBQ1ZDLE1BQU07SUFDUjtJQUVBLElBQUk7UUFDRixNQUFNTCxPQUFPTSxPQUFPO1FBRXBCLG1DQUFtQztRQUNuQyxNQUFNQyxXQUFXLE1BQU1SLElBQUlTLElBQUk7UUFDL0IsTUFBTSxFQUNKQyxLQUFLLEVBQ0xDLGFBQWEsRUFDYkMsR0FBRyxFQUNIQyxPQUFPLEVBQ1BDLEtBQUssRUFDTEMsWUFBWSxFQUNaQyxjQUFjLEVBQ2RDLFVBQVUsRUFDWCxHQUFHVDtRQUVKLGdEQUFnRDtRQUNoRCxNQUFNVSxRQUFRLENBQUM7OztJQUdmLENBQUM7UUFDRCxNQUFNQyxTQUFTO1lBQ2JUO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1lBQ0FDO1NBQ0Q7UUFDRCxNQUFNaEIsT0FBT2lCLEtBQUssQ0FBQ0EsT0FBT0M7UUFFMUIsc0JBQXNCO1FBQ3RCLE9BQU9yQixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtZQUFFVyxTQUFTO1FBQTBCLEdBQ3JDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9DLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLDBCQUEwQkE7UUFDeEMsT0FBT3hCLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO1lBQUVXLFNBQVM7UUFBK0IsR0FDMUM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCLFNBQVU7UUFDUixNQUFNcEIsT0FBT3VCLEdBQUc7SUFDbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxCYWhhYVxcRGVza3RvcFxcdGlrdG9rLWRhc2hcXHNyY1xcYXBwXFxhcGlcXGRlbGVnYXRpb25cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vINmF2KvYp9mEINio2KfYs9iq2K7Yr9in2YUgUG9zdGdyZVNRTCAocGcpXHJcbmltcG9ydCB7IENsaWVudCB9IGZyb20gXCJwZ1wiO1xyXG5pbXBvcnQgeyBOZXh0UmVxdWVzdCwgTmV4dFJlc3BvbnNlIH0gZnJvbSBcIm5leHQvc2VydmVyXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XHJcbiAgY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XHJcbiAgICB1c2VyOiBcInBvc3RncmVzLm5jY2ZzeHp6aXBubnZiZ21janBuXCIsIC8vINi22Lkg2KfYs9mFINin2YTZhdiz2KrYrtiv2YUg2KfZhNiu2KfYtSDYqNmC2KfYudiv2Kkg2KfZhNio2YrYp9mG2KfYqlxyXG4gICAgaG9zdDogXCJhd3MtMC1ldS1jZW50cmFsLTEucG9vbGVyLnN1cGFiYXNlLmNvbVwiLFxyXG4gICAgZGF0YWJhc2U6IFwicG9zdGdyZXNcIixcclxuICAgIHBhc3N3b3JkOiBcIkFMLUFTSUxcIiwgLy8g2LbYuSDZg9mE2YXYqSDYp9mE2YXYsdmI2LEg2KfZhNiu2KfYtdipINio2YLYp9i52K/YqSDYp9mE2KjZitin2YbYp9iqXHJcbiAgICBwb3J0OiA2NTQzLFxyXG4gIH0pO1xyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgY2xpZW50LmNvbm5lY3QoKTtcclxuXHJcbiAgICAvLyDZgtix2KfYodipINin2YTYqNmK2KfZhtin2Kog2KfZhNmF2LHYs9mE2Kkg2YXZhiDYp9mE2LnZhdmK2YRcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgZW1haWwsXHJcbiAgICAgIHRpa3Rva191c2VySUQsXHJcbiAgICAgIGFnZSxcclxuICAgICAgY291bnRyeSxcclxuICAgICAgcGhvbmUsXHJcbiAgICAgIGhvd19mb3VuZF91cyxcclxuICAgICAgc3ViX2FnZW50X25hbWUsXHJcbiAgICAgIG90aGVyX3RleHQsXHJcbiAgICB9ID0gZm9ybURhdGE7XHJcblxyXG4gICAgLy8g2KfYs9iq2LnZhNin2YUg2YTYpdiv2K7Yp9mEINin2YTYqNmK2KfZhtin2Kog2YHZiiDYrNiv2YjZhCAnZGVsZWdhdGlvbnMnXHJcbiAgICBjb25zdCBxdWVyeSA9IGBcclxuICAgICAgSU5TRVJUIElOVE8gZGVsZWdhdGlvbnMgKGVtYWlsLCB0aWt0b2tfdXNlcklELCBhZ2UsIGNvdW50cnksIHBob25lLCBob3dfZm91bmRfdXMsIHN1Yl9hZ2VudF9uYW1lLCBvdGhlcl90ZXh0KVxyXG4gICAgICBWQUxVRVMgKCQxLCAkMiwgJDMsICQ0LCAkNSwgJDYsICQ3LCAkOClcclxuICAgIGA7XHJcbiAgICBjb25zdCB2YWx1ZXMgPSBbXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICB0aWt0b2tfdXNlcklELFxyXG4gICAgICBhZ2UsXHJcbiAgICAgIGNvdW50cnksXHJcbiAgICAgIHBob25lLFxyXG4gICAgICBob3dfZm91bmRfdXMsXHJcbiAgICAgIHN1Yl9hZ2VudF9uYW1lLFxyXG4gICAgICBvdGhlcl90ZXh0LFxyXG4gICAgXTtcclxuICAgIGF3YWl0IGNsaWVudC5xdWVyeShxdWVyeSwgdmFsdWVzKTtcclxuXHJcbiAgICAvLyDYpdix2KzYp9i5INin2LPYqtis2KfYqNipINmG2KfYrNit2KlcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBtZXNzYWdlOiBcItiq2YUg2KXYsdiz2KfZhCDYp9mE2KjZitin2YbYp9iqINio2YbYrNin2K1cIiB9LFxyXG4gICAgICB7IHN0YXR1czogMjAwIH1cclxuICAgICk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBwcm9jZXNzaW5nIGRhdGE6XCIsIGVycm9yKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcclxuICAgICAgeyBtZXNzYWdlOiBcItit2K/YqyDYrti32KMg2KPYq9mG2KfYoSDYpdix2LPYp9mEINin2YTYqNmK2KfZhtin2KpcIiB9LFxyXG4gICAgICB7IHN0YXR1czogNTAwIH1cclxuICAgICk7XHJcbiAgfSBmaW5hbGx5IHtcclxuICAgIGF3YWl0IGNsaWVudC5lbmQoKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNsaWVudCIsIk5leHRSZXNwb25zZSIsIlBPU1QiLCJyZXEiLCJjbGllbnQiLCJ1c2VyIiwiaG9zdCIsImRhdGFiYXNlIiwicGFzc3dvcmQiLCJwb3J0IiwiY29ubmVjdCIsImZvcm1EYXRhIiwianNvbiIsImVtYWlsIiwidGlrdG9rX3VzZXJJRCIsImFnZSIsImNvdW50cnkiLCJwaG9uZSIsImhvd19mb3VuZF91cyIsInN1Yl9hZ2VudF9uYW1lIiwib3RoZXJfdGV4dCIsInF1ZXJ5IiwidmFsdWVzIiwibWVzc2FnZSIsInN0YXR1cyIsImVycm9yIiwiY29uc29sZSIsImVuZCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/delegation/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fdelegation%2Froute&page=%2Fapi%2Fdelegation%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fdelegation%2Froute.ts&appDir=C%3A%5CUsers%5CBahaa%5CDesktop%5Ctiktok-dash%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CBahaa%5CDesktop%5Ctiktok-dash&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();