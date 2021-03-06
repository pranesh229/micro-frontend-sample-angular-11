/**
 * @license Angular v11.1.1
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@angular/elements', ['exports', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.elements = {}), global.ng.core, global.rxjs, global.rxjs.operators));
}(this, (function (exports, core, rxjs, operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * Provide methods for scheduling the execution of a callback.
     */
    var scheduler = {
        /**
         * Schedule a callback to be called after some delay.
         *
         * Returns a function that when executed will cancel the scheduled function.
         */
        schedule: function (taskFn, delay) {
            var id = setTimeout(taskFn, delay);
            return function () { return clearTimeout(id); };
        },
        /**
         * Schedule a callback to be called before the next render.
         * (If `window.requestAnimationFrame()` is not available, use `scheduler.schedule()` instead.)
         *
         * Returns a function that when executed will cancel the scheduled function.
         */
        scheduleBeforeRender: function (taskFn) {
            // TODO(gkalpak): Implement a better way of accessing `requestAnimationFrame()`
            //                (e.g. accounting for vendor prefix, SSR-compatibility, etc).
            if (typeof window === 'undefined') {
                // For SSR just schedule immediately.
                return scheduler.schedule(taskFn, 0);
            }
            if (typeof window.requestAnimationFrame === 'undefined') {
                var frameMs = 16;
                return scheduler.schedule(taskFn, frameMs);
            }
            var id = window.requestAnimationFrame(taskFn);
            return function () { return window.cancelAnimationFrame(id); };
        },
    };
    /**
     * Convert a camelCased string to kebab-cased.
     */
    function camelToDashCase(input) {
        return input.replace(/[A-Z]/g, function (char) { return "-" + char.toLowerCase(); });
    }
    /**
     * Create a `CustomEvent` (even on browsers where `CustomEvent` is not a constructor).
     */
    function createCustomEvent(doc, name, detail) {
        var bubbles = false;
        var cancelable = false;
        // On IE11, `CustomEvent` is not a constructor.
        if (typeof CustomEvent !== 'function') {
            var event = doc.createEvent('CustomEvent');
            event.initCustomEvent(name, bubbles, cancelable, detail);
            return event;
        }
        return new CustomEvent(name, { bubbles: bubbles, cancelable: cancelable, detail: detail });
    }
    /**
     * Check whether the input is an `Element`.
     */
    function isElement(node) {
        return !!node && node.nodeType === Node.ELEMENT_NODE;
    }
    /**
     * Check whether the input is a function.
     */
    function isFunction(value) {
        return typeof value === 'function';
    }
    /**
     * Convert a kebab-cased string to camelCased.
     */
    function kebabToCamelCase(input) {
        return input.replace(/-([a-z\d])/g, function (_, char) { return char.toUpperCase(); });
    }
    var _matches;
    /**
     * Check whether an `Element` matches a CSS selector.
     * NOTE: this is duplicated from @angular/upgrade, and can
     * be consolidated in the future
     */
    function matchesSelector(el, selector) {
        if (!_matches) {
            var elProto = Element.prototype;
            _matches = elProto.matches || elProto.matchesSelector || elProto.mozMatchesSelector ||
                elProto.msMatchesSelector || elProto.oMatchesSelector || elProto.webkitMatchesSelector;
        }
        return el.nodeType === Node.ELEMENT_NODE ? _matches.call(el, selector) : false;
    }
    /**
     * Test two values for strict equality, accounting for the fact that `NaN !== NaN`.
     */
    function strictEquals(value1, value2) {
        return value1 === value2 || (value1 !== value1 && value2 !== value2);
    }
    /** Gets a map of default set of attributes to observe and the properties they affect. */
    function getDefaultAttributeToPropertyInputs(inputs) {
        var attributeToPropertyInputs = {};
        inputs.forEach(function (_a) {
            var propName = _a.propName, templateName = _a.templateName;
            attributeToPropertyInputs[camelToDashCase(templateName)] = propName;
        });
        return attributeToPropertyInputs;
    }
    /**
     * Gets a component's set of inputs. Uses the injector to get the component factory where the inputs
     * are defined.
     */
    function getComponentInputs(component, injector) {
        var componentFactoryResolver = injector.get(core.ComponentFactoryResolver);
        var componentFactory = componentFactoryResolver.resolveComponentFactory(component);
        return componentFactory.inputs;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function extractProjectableNodes(host, ngContentSelectors) {
        var nodes = host.childNodes;
        var projectableNodes = ngContentSelectors.map(function () { return []; });
        var wildcardIndex = -1;
        ngContentSelectors.some(function (selector, i) {
            if (selector === '*') {
                wildcardIndex = i;
                return true;
            }
            return false;
        });
        for (var i = 0, ii = nodes.length; i < ii; ++i) {
            var node = nodes[i];
            var ngContentIndex = findMatchingIndex(node, ngContentSelectors, wildcardIndex);
            if (ngContentIndex !== -1) {
                projectableNodes[ngContentIndex].push(node);
            }
        }
        return projectableNodes;
    }
    function findMatchingIndex(node, selectors, defaultIndex) {
        var matchingIndex = defaultIndex;
        if (isElement(node)) {
            selectors.some(function (selector, i) {
                if ((selector !== '*') && matchesSelector(node, selector)) {
                    matchingIndex = i;
                    return true;
                }
                return false;
            });
        }
        return matchingIndex;
    }

    /** Time in milliseconds to wait before destroying the component ref when disconnected. */
    var DESTROY_DELAY = 10;
    /**
     * Factory that creates new ComponentNgElementStrategy instance. Gets the component factory with the
     * constructor's injector's factory resolver and passes that factory to each strategy.
     *
     * @publicApi
     */
    var ComponentNgElementStrategyFactory = /** @class */ (function () {
        function ComponentNgElementStrategyFactory(component, injector) {
            this.componentFactory =
                injector.get(core.ComponentFactoryResolver).resolveComponentFactory(component);
        }
        ComponentNgElementStrategyFactory.prototype.create = function (injector) {
            return new ComponentNgElementStrategy(this.componentFactory, injector);
        };
        return ComponentNgElementStrategyFactory;
    }());
    /**
     * Creates and destroys a component ref using a component factory and handles change detection
     * in response to input changes.
     *
     * @publicApi
     */
    var ComponentNgElementStrategy = /** @class */ (function () {
        function ComponentNgElementStrategy(componentFactory, injector) {
            this.componentFactory = componentFactory;
            this.injector = injector;
            // Subject of `NgElementStrategyEvent` observables corresponding to the component's outputs.
            this.eventEmitters = new rxjs.ReplaySubject(1);
            /** Merged stream of the component's output events. */
            this.events = this.eventEmitters.pipe(operators.switchMap(function (emitters) { return rxjs.merge.apply(void 0, __spread(emitters)); }));
            /** Reference to the component that was created on connect. */
            this.componentRef = null;
            /** Reference to the component view's `ChangeDetectorRef`. */
            this.viewChangeDetectorRef = null;
            /**
             * Changes that have been made to component inputs since the last change detection run.
             * (NOTE: These are only recorded if the component implements the `OnChanges` interface.)
             */
            this.inputChanges = null;
            /** Whether changes have been made to component inputs since the last change detection run. */
            this.hasInputChanges = false;
            /** Whether the created component implements the `OnChanges` interface. */
            this.implementsOnChanges = false;
            /** Whether a change detection has been scheduled to run on the component. */
            this.scheduledChangeDetectionFn = null;
            /** Callback function that when called will cancel a scheduled destruction on the component. */
            this.scheduledDestroyFn = null;
            /** Initial input values that were set before the component was created. */
            this.initialInputValues = new Map();
            /**
             * Set of component inputs that have not yet changed, i.e. for which `recordInputChange()` has not
             * fired.
             * (This helps detect the first change of an input, even if it is explicitly set to `undefined`.)
             */
            this.unchangedInputs = new Set(this.componentFactory.inputs.map(function (_a) {
                var propName = _a.propName;
                return propName;
            }));
            /** Service for setting zone context. */
            this.ngZone = this.injector.get(core.NgZone);
            /** The zone the element was created in or `null` if Zone.js is not loaded. */
            this.elementZone = (typeof Zone === 'undefined') ? null : this.ngZone.run(function () { return Zone.current; });
        }
        /**
         * Initializes a new component if one has not yet been created and cancels any scheduled
         * destruction.
         */
        ComponentNgElementStrategy.prototype.connect = function (element) {
            var _this = this;
            this.runInZone(function () {
                // If the element is marked to be destroyed, cancel the task since the component was
                // reconnected
                if (_this.scheduledDestroyFn !== null) {
                    _this.scheduledDestroyFn();
                    _this.scheduledDestroyFn = null;
                    return;
                }
                if (_this.componentRef === null) {
                    _this.initializeComponent(element);
                }
            });
        };
        /**
         * Schedules the component to be destroyed after some small delay in case the element is just
         * being moved across the DOM.
         */
        ComponentNgElementStrategy.prototype.disconnect = function () {
            var _this = this;
            this.runInZone(function () {
                // Return if there is no componentRef or the component is already scheduled for destruction
                if (_this.componentRef === null || _this.scheduledDestroyFn !== null) {
                    return;
                }
                // Schedule the component to be destroyed after a small timeout in case it is being
                // moved elsewhere in the DOM
                _this.scheduledDestroyFn = scheduler.schedule(function () {
                    if (_this.componentRef !== null) {
                        _this.componentRef.destroy();
                        _this.componentRef = null;
                        _this.viewChangeDetectorRef = null;
                    }
                }, DESTROY_DELAY);
            });
        };
        /**
         * Returns the component property value. If the component has not yet been created, the value is
         * retrieved from the cached initialization values.
         */
        ComponentNgElementStrategy.prototype.getInputValue = function (property) {
            var _this = this;
            return this.runInZone(function () {
                if (_this.componentRef === null) {
                    return _this.initialInputValues.get(property);
                }
                return _this.componentRef.instance[property];
            });
        };
        /**
         * Sets the input value for the property. If the component has not yet been created, the value is
         * cached and set when the component is created.
         */
        ComponentNgElementStrategy.prototype.setInputValue = function (property, value) {
            var _this = this;
            this.runInZone(function () {
                if (_this.componentRef === null) {
                    _this.initialInputValues.set(property, value);
                    return;
                }
                // Ignore the value if it is strictly equal to the current value, except if it is `undefined`
                // and this is the first change to the value (because an explicit `undefined` _is_ strictly
                // equal to not having a value set at all, but we still need to record this as a change).
                if (strictEquals(value, _this.getInputValue(property)) &&
                    !((value === undefined) && _this.unchangedInputs.has(property))) {
                    return;
                }
                // Record the changed value and update internal state to reflect the fact that this input has
                // changed.
                _this.recordInputChange(property, value);
                _this.unchangedInputs.delete(property);
                _this.hasInputChanges = true;
                // Update the component instance and schedule change detection.
                _this.componentRef.instance[property] = value;
                _this.scheduleDetectChanges();
            });
        };
        /**
         * Creates a new component through the component factory with the provided element host and
         * sets up its initial inputs, listens for outputs changes, and runs an initial change detection.
         */
        ComponentNgElementStrategy.prototype.initializeComponent = function (element) {
            var childInjector = core.Injector.create({ providers: [], parent: this.injector });
            var projectableNodes = extractProjectableNodes(element, this.componentFactory.ngContentSelectors);
            this.componentRef = this.componentFactory.create(childInjector, projectableNodes, element);
            this.viewChangeDetectorRef = this.componentRef.injector.get(core.ChangeDetectorRef);
            this.implementsOnChanges = isFunction(this.componentRef.instance.ngOnChanges);
            this.initializeInputs();
            this.initializeOutputs(this.componentRef);
            this.detectChanges();
            var applicationRef = this.injector.get(core.ApplicationRef);
            applicationRef.attachView(this.componentRef.hostView);
        };
        /** Set any stored initial inputs on the component's properties. */
        ComponentNgElementStrategy.prototype.initializeInputs = function () {
            var _this = this;
            this.componentFactory.inputs.forEach(function (_a) {
                var propName = _a.propName;
                if (_this.initialInputValues.has(propName)) {
                    // Call `setInputValue()` now that the component has been instantiated to update its
                    // properties and fire `ngOnChanges()`.
                    _this.setInputValue(propName, _this.initialInputValues.get(propName));
                }
            });
            this.initialInputValues.clear();
        };
        /** Sets up listeners for the component's outputs so that the events stream emits the events. */
        ComponentNgElementStrategy.prototype.initializeOutputs = function (componentRef) {
            var eventEmitters = this.componentFactory.outputs.map(function (_a) {
                var propName = _a.propName, templateName = _a.templateName;
                var emitter = componentRef.instance[propName];
                return emitter.pipe(operators.map(function (value) { return ({ name: templateName, value: value }); }));
            });
            this.eventEmitters.next(eventEmitters);
        };
        /** Calls ngOnChanges with all the inputs that have changed since the last call. */
        ComponentNgElementStrategy.prototype.callNgOnChanges = function (componentRef) {
            if (!this.implementsOnChanges || this.inputChanges === null) {
                return;
            }
            // Cache the changes and set inputChanges to null to capture any changes that might occur
            // during ngOnChanges.
            var inputChanges = this.inputChanges;
            this.inputChanges = null;
            componentRef.instance.ngOnChanges(inputChanges);
        };
        /**
         * Marks the component view for check, if necessary.
         * (NOTE: This is required when the `ChangeDetectionStrategy` is set to `OnPush`.)
         */
        ComponentNgElementStrategy.prototype.markViewForCheck = function (viewChangeDetectorRef) {
            if (this.hasInputChanges) {
                this.hasInputChanges = false;
                viewChangeDetectorRef.markForCheck();
            }
        };
        /**
         * Schedules change detection to run on the component.
         * Ignores subsequent calls if already scheduled.
         */
        ComponentNgElementStrategy.prototype.scheduleDetectChanges = function () {
            var _this = this;
            if (this.scheduledChangeDetectionFn) {
                return;
            }
            this.scheduledChangeDetectionFn = scheduler.scheduleBeforeRender(function () {
                _this.scheduledChangeDetectionFn = null;
                _this.detectChanges();
            });
        };
        /**
         * Records input changes so that the component receives SimpleChanges in its onChanges function.
         */
        ComponentNgElementStrategy.prototype.recordInputChange = function (property, currentValue) {
            // Do not record the change if the component does not implement `OnChanges`.
            if (!this.implementsOnChanges) {
                return;
            }
            if (this.inputChanges === null) {
                this.inputChanges = {};
            }
            // If there already is a change, modify the current value to match but leave the values for
            // `previousValue` and `isFirstChange`.
            var pendingChange = this.inputChanges[property];
            if (pendingChange) {
                pendingChange.currentValue = currentValue;
                return;
            }
            var isFirstChange = this.unchangedInputs.has(property);
            var previousValue = isFirstChange ? undefined : this.getInputValue(property);
            this.inputChanges[property] = new core.SimpleChange(previousValue, currentValue, isFirstChange);
        };
        /** Runs change detection on the component. */
        ComponentNgElementStrategy.prototype.detectChanges = function () {
            if (this.componentRef === null) {
                return;
            }
            this.callNgOnChanges(this.componentRef);
            this.markViewForCheck(this.viewChangeDetectorRef);
            this.componentRef.changeDetectorRef.detectChanges();
        };
        /** Runs in the angular zone, if present. */
        ComponentNgElementStrategy.prototype.runInZone = function (fn) {
            return (this.elementZone && Zone.current !== this.elementZone) ? this.ngZone.run(fn) : fn();
        };
        return ComponentNgElementStrategy;
    }());

    /**
     * Implements the functionality needed for a custom element.
     *
     * @publicApi
     */
    var NgElement = /** @class */ (function (_super) {
        __extends(NgElement, _super);
        function NgElement() {
            var _this = _super.apply(this, __spread(arguments)) || this;
            /**
             * A subscription to change, connect, and disconnect events in the custom element.
             */
            _this.ngElementEventsSubscription = null;
            return _this;
        }
        return NgElement;
    }(HTMLElement));
    /**
     *  @description Creates a custom element class based on an Angular component.
     *
     * Builds a class that encapsulates the functionality of the provided component and
     * uses the configuration information to provide more context to the class.
     * Takes the component factory's inputs and outputs to convert them to the proper
     * custom element API and add hooks to input changes.
     *
     * The configuration's injector is the initial injector set on the class,
     * and used by default for each created instance.This behavior can be overridden with the
     * static property to affect all newly created instances, or as a constructor argument for
     * one-off creations.
     *
     * @see [Angular Elements Overview](guide/elements "Turning Angular components into custom elements")
     *
     * @param component The component to transform.
     * @param config A configuration that provides initialization information to the created class.
     * @returns The custom-element construction class, which can be registered with
     * a browser's `CustomElementRegistry`.
     *
     * @publicApi
     */
    function createCustomElement(component, config) {
        var inputs = getComponentInputs(component, config.injector);
        var strategyFactory = config.strategyFactory || new ComponentNgElementStrategyFactory(component, config.injector);
        var attributeToPropertyInputs = getDefaultAttributeToPropertyInputs(inputs);
        var NgElementImpl = /** @class */ (function (_super) {
            __extends(NgElementImpl, _super);
            function NgElementImpl(injector) {
                var _this = _super.call(this) || this;
                _this.injector = injector;
                return _this;
            }
            Object.defineProperty(NgElementImpl.prototype, "ngElementStrategy", {
                get: function () {
                    var _this = this;
                    // NOTE:
                    // Some polyfills (e.g. `document-register-element`) do not call the constructor, therefore
                    // it is not safe to set `ngElementStrategy` in the constructor and assume it will be
                    // available inside the methods.
                    //
                    // TODO(andrewseguin): Add e2e tests that cover cases where the constructor isn't called. For
                    // now this is tested using a Google internal test suite.
                    if (!this._ngElementStrategy) {
                        var strategy_1 = this._ngElementStrategy =
                            strategyFactory.create(this.injector || config.injector);
                        // Re-apply pre-existing input values (set as properties on the element) through the
                        // strategy.
                        inputs.forEach(function (_a) {
                            var propName = _a.propName;
                            if (!_this.hasOwnProperty(propName)) {
                                // No pre-existing value for `propName`.
                                return;
                            }
                            // Delete the property from the instance and re-apply it through the strategy.
                            var value = _this[propName];
                            delete _this[propName];
                            strategy_1.setInputValue(propName, value);
                        });
                    }
                    return this._ngElementStrategy;
                },
                enumerable: false,
                configurable: true
            });
            NgElementImpl.prototype.attributeChangedCallback = function (attrName, oldValue, newValue, namespace) {
                var propName = attributeToPropertyInputs[attrName];
                this.ngElementStrategy.setInputValue(propName, newValue);
            };
            NgElementImpl.prototype.connectedCallback = function () {
                // For historical reasons, some strategies may not have initialized the `events` property
                // until after `connect()` is run. Subscribe to `events` if it is available before running
                // `connect()` (in order to capture events emitted suring inittialization), otherwise
                // subscribe afterwards.
                //
                // TODO: Consider deprecating/removing the post-connect subscription in a future major version
                //       (e.g. v11).
                var subscribedToEvents = false;
                if (this.ngElementStrategy.events) {
                    // `events` are already available: Subscribe to it asap.
                    this.subscribeToEvents();
                    subscribedToEvents = true;
                }
                this.ngElementStrategy.connect(this);
                if (!subscribedToEvents) {
                    // `events` were not initialized before running `connect()`: Subscribe to them now.
                    // The events emitted during the component initialization have been missed, but at least
                    // future events will be captured.
                    this.subscribeToEvents();
                }
            };
            NgElementImpl.prototype.disconnectedCallback = function () {
                // Not using `this.ngElementStrategy` to avoid unnecessarily creating the `NgElementStrategy`.
                if (this._ngElementStrategy) {
                    this._ngElementStrategy.disconnect();
                }
                if (this.ngElementEventsSubscription) {
                    this.ngElementEventsSubscription.unsubscribe();
                    this.ngElementEventsSubscription = null;
                }
            };
            NgElementImpl.prototype.subscribeToEvents = function () {
                var _this = this;
                // Listen for events from the strategy and dispatch them as custom events.
                this.ngElementEventsSubscription = this.ngElementStrategy.events.subscribe(function (e) {
                    var customEvent = createCustomEvent(_this.ownerDocument, e.name, e.value);
                    _this.dispatchEvent(customEvent);
                });
            };
            return NgElementImpl;
        }(NgElement));
        // Work around a bug in closure typed optimizations(b/79557487) where it is not honoring static
        // field externs. So using quoted access to explicitly prevent renaming.
        NgElementImpl['observedAttributes'] = Object.keys(attributeToPropertyInputs);
        // Add getters and setters to the prototype for each property input.
        inputs.forEach(function (_a) {
            var propName = _a.propName;
            Object.defineProperty(NgElementImpl.prototype, propName, {
                get: function () {
                    return this.ngElementStrategy.getInputValue(propName);
                },
                set: function (newValue) {
                    this.ngElementStrategy.setInputValue(propName, newValue);
                },
                configurable: true,
                enumerable: true,
            });
        });
        return NgElementImpl;
    }

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    /**
     * @publicApi
     */
    var VERSION = new core.Version('11.1.1');

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    // This file only reexports content of the `src` folder. Keep it that way.

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgElement = NgElement;
    exports.VERSION = VERSION;
    exports.createCustomElement = createCustomElement;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=elements.umd.js.map