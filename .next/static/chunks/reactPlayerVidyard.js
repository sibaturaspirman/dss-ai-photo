"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerVidyard"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/Vidyard.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-player/lib/players/Vidyard.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {\n        enumerable: true,\n        configurable: true,\n        writable: true,\n        value\n    }) : obj[key] = value;\nvar __export = (target, all)=>{\n    for(var name in all)__defProp(target, name, {\n        get: all[name],\n        enumerable: true\n    });\n};\nvar __copyProps = (to, from, except, desc)=>{\n    if (from && typeof from === \"object\" || typeof from === \"function\") {\n        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {\n            get: ()=>from[key],\n            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable\n        });\n    }\n    return to;\n};\nvar __toESM = (mod, isNodeMode, target)=>(target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM\n    // file that has been converted to a CommonJS file using a Babel-\n    // compatible transform (i.e. \"__esModule\" has not been set), then set\n    // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n    isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", {\n        value: mod,\n        enumerable: true\n    }) : target, mod));\nvar __toCommonJS = (mod)=>__copyProps(__defProp({}, \"__esModule\", {\n        value: true\n    }), mod);\nvar __publicField = (obj, key, value)=>{\n    __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n    return value;\n};\nvar Vidyard_exports = {};\n__export(Vidyard_exports, {\n    default: ()=>Vidyard\n});\nmodule.exports = __toCommonJS(Vidyard_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://play.vidyard.com/embed/v4.js\";\nconst SDK_GLOBAL = \"VidyardV4\";\nconst SDK_GLOBAL_READY = \"onVidyardAPI\";\nclass Vidyard extends import_react.Component {\n    componentDidMount() {\n        this.props.onMount && this.props.onMount(this);\n    }\n    load(url) {\n        const { playing, config, onError, onDuration } = this.props;\n        const id = url && url.match(import_patterns.MATCH_URL_VIDYARD)[1];\n        if (this.player) {\n            this.stop();\n        }\n        (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY).then((Vidyard2)=>{\n            if (!this.container) return;\n            Vidyard2.api.addReadyListener((data, player)=>{\n                if (this.player) {\n                    return;\n                }\n                this.player = player;\n                this.player.on(\"ready\", this.props.onReady);\n                this.player.on(\"play\", this.props.onPlay);\n                this.player.on(\"pause\", this.props.onPause);\n                this.player.on(\"seek\", this.props.onSeek);\n                this.player.on(\"playerComplete\", this.props.onEnded);\n            }, id);\n            Vidyard2.api.renderPlayer({\n                uuid: id,\n                container: this.container,\n                autoplay: playing ? 1 : 0,\n                ...config.options\n            });\n            Vidyard2.api.getPlayerMetadata(id).then((meta)=>{\n                this.duration = meta.length_in_seconds;\n                onDuration(meta.length_in_seconds);\n            });\n        }, onError);\n    }\n    play() {\n        this.callPlayer(\"play\");\n    }\n    pause() {\n        this.callPlayer(\"pause\");\n    }\n    stop() {\n        window.VidyardV4.api.destroyPlayer(this.player);\n    }\n    seekTo(amount) {\n        let keepPlaying = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;\n        this.callPlayer(\"seek\", amount);\n        if (!keepPlaying) {\n            this.pause();\n        }\n    }\n    setVolume(fraction) {\n        this.callPlayer(\"setVolume\", fraction);\n    }\n    setPlaybackRate(rate) {\n        this.callPlayer(\"setPlaybackSpeed\", rate);\n    }\n    getDuration() {\n        return this.duration;\n    }\n    getCurrentTime() {\n        return this.callPlayer(\"currentTime\");\n    }\n    getSecondsLoaded() {\n        return null;\n    }\n    render() {\n        const { display } = this.props;\n        const style = {\n            width: \"100%\",\n            height: \"100%\",\n            display\n        };\n        return /* @__PURE__ */ import_react.default.createElement(\"div\", {\n            style\n        }, /* @__PURE__ */ import_react.default.createElement(\"div\", {\n            ref: this.ref\n        }));\n    }\n    constructor(){\n        super(...arguments);\n        __publicField(this, \"callPlayer\", import_utils.callPlayer);\n        __publicField(this, \"mute\", ()=>{\n            this.setVolume(0);\n        });\n        __publicField(this, \"unmute\", ()=>{\n            if (this.props.volume !== null) {\n                this.setVolume(this.props.volume);\n            }\n        });\n        __publicField(this, \"ref\", (container)=>{\n            this.container = container;\n        });\n    }\n}\n__publicField(Vidyard, \"displayName\", \"Vidyard\");\n__publicField(Vidyard, \"canPlay\", import_patterns.canPlay.vidyard);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvVmlkeWFyZC5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsSUFBSUEsV0FBV0MsT0FBT0MsTUFBTTtBQUM1QixJQUFJQyxZQUFZRixPQUFPRyxjQUFjO0FBQ3JDLElBQUlDLG1CQUFtQkosT0FBT0ssd0JBQXdCO0FBQ3RELElBQUlDLG9CQUFvQk4sT0FBT08sbUJBQW1CO0FBQ2xELElBQUlDLGVBQWVSLE9BQU9TLGNBQWM7QUFDeEMsSUFBSUMsZUFBZVYsT0FBT1csU0FBUyxDQUFDQyxjQUFjO0FBQ2xELElBQUlDLGtCQUFrQixDQUFDQyxLQUFLQyxLQUFLQyxRQUFVRCxPQUFPRCxNQUFNWixVQUFVWSxLQUFLQyxLQUFLO1FBQUVFLFlBQVk7UUFBTUMsY0FBYztRQUFNQyxVQUFVO1FBQU1IO0lBQU0sS0FBS0YsR0FBRyxDQUFDQyxJQUFJLEdBQUdDO0FBQzFKLElBQUlJLFdBQVcsQ0FBQ0MsUUFBUUM7SUFDdEIsSUFBSyxJQUFJQyxRQUFRRCxJQUNmcEIsVUFBVW1CLFFBQVFFLE1BQU07UUFBRUMsS0FBS0YsR0FBRyxDQUFDQyxLQUFLO1FBQUVOLFlBQVk7SUFBSztBQUMvRDtBQUNBLElBQUlRLGNBQWMsQ0FBQ0MsSUFBSUMsTUFBTUMsUUFBUUM7SUFDbkMsSUFBSUYsUUFBUSxPQUFPQSxTQUFTLFlBQVksT0FBT0EsU0FBUyxZQUFZO1FBQ2xFLEtBQUssSUFBSVosT0FBT1Qsa0JBQWtCcUIsTUFDaEMsSUFBSSxDQUFDakIsYUFBYW9CLElBQUksQ0FBQ0osSUFBSVgsUUFBUUEsUUFBUWEsUUFDekMxQixVQUFVd0IsSUFBSVgsS0FBSztZQUFFUyxLQUFLLElBQU1HLElBQUksQ0FBQ1osSUFBSTtZQUFFRSxZQUFZLENBQUVZLENBQUFBLE9BQU96QixpQkFBaUJ1QixNQUFNWixJQUFHLEtBQU1jLEtBQUtaLFVBQVU7UUFBQztJQUN0SDtJQUNBLE9BQU9TO0FBQ1Q7QUFD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QUFhSixPQUFPLENBQUNvRSxhQUFhLENBQUMsT0FBTztZQUFFQyxLQUFLLElBQUksQ0FBQ0EsR0FBRztRQUFDO0lBQ3hKO0lBeEZBQyxhQUFjO1FBQ1osS0FBSyxJQUFJQztRQUNUekUsY0FBYyxJQUFJLEVBQUUsY0FBY1EsYUFBYTBDLFVBQVU7UUFDekRsRCxjQUFjLElBQUksRUFBRSxRQUFRO1lBQzFCLElBQUksQ0FBQzBELFNBQVMsQ0FBQztRQUNqQjtRQUNBMUQsY0FBYyxJQUFJLEVBQUUsVUFBVTtZQUM1QixJQUFJLElBQUksQ0FBQ2UsS0FBSyxDQUFDMkQsTUFBTSxLQUFLLE1BQU07Z0JBQzlCLElBQUksQ0FBQ2hCLFNBQVMsQ0FBQyxJQUFJLENBQUMzQyxLQUFLLENBQUMyRCxNQUFNO1lBQ2xDO1FBQ0Y7UUFDQTFFLGNBQWMsSUFBSSxFQUFFLE9BQU8sQ0FBQytCO1lBQzFCLElBQUksQ0FBQ0EsU0FBUyxHQUFHQTtRQUNuQjtJQUNGO0FBMkVGO0FBQ0EvQixjQUFjRyxTQUFTLGVBQWU7QUFDdENILGNBQWNHLFNBQVMsV0FBV00sZ0JBQWdCa0UsT0FBTyxDQUFDQyxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvVmlkeWFyZC5qcz8xZGMzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2NyZWF0ZSA9IE9iamVjdC5jcmVhdGU7XG52YXIgX19kZWZQcm9wID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIF9fZ2V0T3duUHJvcERlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xudmFyIF9fZ2V0T3duUHJvcE5hbWVzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXM7XG52YXIgX19nZXRQcm90b09mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xudmFyIF9faGFzT3duUHJvcCA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19leHBvcnQgPSAodGFyZ2V0LCBhbGwpID0+IHtcbiAgZm9yICh2YXIgbmFtZSBpbiBhbGwpXG4gICAgX19kZWZQcm9wKHRhcmdldCwgbmFtZSwgeyBnZXQ6IGFsbFtuYW1lXSwgZW51bWVyYWJsZTogdHJ1ZSB9KTtcbn07XG52YXIgX19jb3B5UHJvcHMgPSAodG8sIGZyb20sIGV4Y2VwdCwgZGVzYykgPT4ge1xuICBpZiAoZnJvbSAmJiB0eXBlb2YgZnJvbSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgZm9yIChsZXQga2V5IG9mIF9fZ2V0T3duUHJvcE5hbWVzKGZyb20pKVxuICAgICAgaWYgKCFfX2hhc093blByb3AuY2FsbCh0bywga2V5KSAmJiBrZXkgIT09IGV4Y2VwdClcbiAgICAgICAgX19kZWZQcm9wKHRvLCBrZXksIHsgZ2V0OiAoKSA9PiBmcm9tW2tleV0sIGVudW1lcmFibGU6ICEoZGVzYyA9IF9fZ2V0T3duUHJvcERlc2MoZnJvbSwga2V5KSkgfHwgZGVzYy5lbnVtZXJhYmxlIH0pO1xuICB9XG4gIHJldHVybiB0bztcbn07XG52YXIgX190b0VTTSA9IChtb2QsIGlzTm9kZU1vZGUsIHRhcmdldCkgPT4gKHRhcmdldCA9IG1vZCAhPSBudWxsID8gX19jcmVhdGUoX19nZXRQcm90b09mKG1vZCkpIDoge30sIF9fY29weVByb3BzKFxuICAvLyBJZiB0aGUgaW1wb3J0ZXIgaXMgaW4gbm9kZSBjb21wYXRpYmlsaXR5IG1vZGUgb3IgdGhpcyBpcyBub3QgYW4gRVNNXG4gIC8vIGZpbGUgdGhhdCBoYXMgYmVlbiBjb252ZXJ0ZWQgdG8gYSBDb21tb25KUyBmaWxlIHVzaW5nIGEgQmFiZWwtXG4gIC8vIGNvbXBhdGlibGUgdHJhbnNmb3JtIChpLmUuIFwiX19lc01vZHVsZVwiIGhhcyBub3QgYmVlbiBzZXQpLCB0aGVuIHNldFxuICAvLyBcImRlZmF1bHRcIiB0byB0aGUgQ29tbW9uSlMgXCJtb2R1bGUuZXhwb3J0c1wiIGZvciBub2RlIGNvbXBhdGliaWxpdHkuXG4gIGlzTm9kZU1vZGUgfHwgIW1vZCB8fCAhbW9kLl9fZXNNb2R1bGUgPyBfX2RlZlByb3AodGFyZ2V0LCBcImRlZmF1bHRcIiwgeyB2YWx1ZTogbW9kLCBlbnVtZXJhYmxlOiB0cnVlIH0pIDogdGFyZ2V0LFxuICBtb2RcbikpO1xudmFyIF9fdG9Db21tb25KUyA9IChtb2QpID0+IF9fY29weVByb3BzKF9fZGVmUHJvcCh7fSwgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSksIG1vZCk7XG52YXIgX19wdWJsaWNGaWVsZCA9IChvYmosIGtleSwgdmFsdWUpID0+IHtcbiAgX19kZWZOb3JtYWxQcm9wKG9iaiwgdHlwZW9mIGtleSAhPT0gXCJzeW1ib2xcIiA/IGtleSArIFwiXCIgOiBrZXksIHZhbHVlKTtcbiAgcmV0dXJuIHZhbHVlO1xufTtcbnZhciBWaWR5YXJkX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KFZpZHlhcmRfZXhwb3J0cywge1xuICBkZWZhdWx0OiAoKSA9PiBWaWR5YXJkXG59KTtcbm1vZHVsZS5leHBvcnRzID0gX190b0NvbW1vbkpTKFZpZHlhcmRfZXhwb3J0cyk7XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGltcG9ydF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBpbXBvcnRfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5jb25zdCBTREtfVVJMID0gXCJodHRwczovL3BsYXkudmlkeWFyZC5jb20vZW1iZWQvdjQuanNcIjtcbmNvbnN0IFNES19HTE9CQUwgPSBcIlZpZHlhcmRWNFwiO1xuY29uc3QgU0RLX0dMT0JBTF9SRUFEWSA9IFwib25WaWR5YXJkQVBJXCI7XG5jbGFzcyBWaWR5YXJkIGV4dGVuZHMgaW1wb3J0X3JlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImNhbGxQbGF5ZXJcIiwgaW1wb3J0X3V0aWxzLmNhbGxQbGF5ZXIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJtdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuc2V0Vm9sdW1lKDApO1xuICAgIH0pO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJ1bm11dGVcIiwgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJvcHMudm9sdW1lICE9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuc2V0Vm9sdW1lKHRoaXMucHJvcHMudm9sdW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicmVmXCIsIChjb250YWluZXIpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gIH1cbiAgbG9hZCh1cmwpIHtcbiAgICBjb25zdCB7IHBsYXlpbmcsIGNvbmZpZywgb25FcnJvciwgb25EdXJhdGlvbiB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBpZCA9IHVybCAmJiB1cmwubWF0Y2goaW1wb3J0X3BhdHRlcm5zLk1BVENIX1VSTF9WSURZQVJEKVsxXTtcbiAgICBpZiAodGhpcy5wbGF5ZXIpIHtcbiAgICAgIHRoaXMuc3RvcCgpO1xuICAgIH1cbiAgICAoMCwgaW1wb3J0X3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCwgU0RLX0dMT0JBTF9SRUFEWSkudGhlbigoVmlkeWFyZDIpID0+IHtcbiAgICAgIGlmICghdGhpcy5jb250YWluZXIpXG4gICAgICAgIHJldHVybjtcbiAgICAgIFZpZHlhcmQyLmFwaS5hZGRSZWFkeUxpc3RlbmVyKChkYXRhLCBwbGF5ZXIpID0+IHtcbiAgICAgICAgaWYgKHRoaXMucGxheWVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuICAgICAgICB0aGlzLnBsYXllci5vbihcInJlYWR5XCIsIHRoaXMucHJvcHMub25SZWFkeSk7XG4gICAgICAgIHRoaXMucGxheWVyLm9uKFwicGxheVwiLCB0aGlzLnByb3BzLm9uUGxheSk7XG4gICAgICAgIHRoaXMucGxheWVyLm9uKFwicGF1c2VcIiwgdGhpcy5wcm9wcy5vblBhdXNlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIub24oXCJzZWVrXCIsIHRoaXMucHJvcHMub25TZWVrKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIub24oXCJwbGF5ZXJDb21wbGV0ZVwiLCB0aGlzLnByb3BzLm9uRW5kZWQpO1xuICAgICAgfSwgaWQpO1xuICAgICAgVmlkeWFyZDIuYXBpLnJlbmRlclBsYXllcih7XG4gICAgICAgIHV1aWQ6IGlkLFxuICAgICAgICBjb250YWluZXI6IHRoaXMuY29udGFpbmVyLFxuICAgICAgICBhdXRvcGxheTogcGxheWluZyA/IDEgOiAwLFxuICAgICAgICAuLi5jb25maWcub3B0aW9uc1xuICAgICAgfSk7XG4gICAgICBWaWR5YXJkMi5hcGkuZ2V0UGxheWVyTWV0YWRhdGEoaWQpLnRoZW4oKG1ldGEpID0+IHtcbiAgICAgICAgdGhpcy5kdXJhdGlvbiA9IG1ldGEubGVuZ3RoX2luX3NlY29uZHM7XG4gICAgICAgIG9uRHVyYXRpb24obWV0YS5sZW5ndGhfaW5fc2Vjb25kcyk7XG4gICAgICB9KTtcbiAgICB9LCBvbkVycm9yKTtcbiAgfVxuICBwbGF5KCkge1xuICAgIHRoaXMuY2FsbFBsYXllcihcInBsYXlcIik7XG4gIH1cbiAgcGF1c2UoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGF1c2VcIik7XG4gIH1cbiAgc3RvcCgpIHtcbiAgICB3aW5kb3cuVmlkeWFyZFY0LmFwaS5kZXN0cm95UGxheWVyKHRoaXMucGxheWVyKTtcbiAgfVxuICBzZWVrVG8oYW1vdW50LCBrZWVwUGxheWluZyA9IHRydWUpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZWVrXCIsIGFtb3VudCk7XG4gICAgaWYgKCFrZWVwUGxheWluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgIH1cbiAgfVxuICBzZXRWb2x1bWUoZnJhY3Rpb24pIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRWb2x1bWVcIiwgZnJhY3Rpb24pO1xuICB9XG4gIHNldFBsYXliYWNrUmF0ZShyYXRlKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0UGxheWJhY2tTcGVlZFwiLCByYXRlKTtcbiAgfVxuICBnZXREdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kdXJhdGlvbjtcbiAgfVxuICBnZXRDdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYWxsUGxheWVyKFwiY3VycmVudFRpbWVcIik7XG4gIH1cbiAgZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkaXNwbGF5IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHN0eWxlID0ge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGRpc3BsYXlcbiAgICB9O1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gaW1wb3J0X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IHN0eWxlIH0sIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgcmVmOiB0aGlzLnJlZiB9KSk7XG4gIH1cbn1cbl9fcHVibGljRmllbGQoVmlkeWFyZCwgXCJkaXNwbGF5TmFtZVwiLCBcIlZpZHlhcmRcIik7XG5fX3B1YmxpY0ZpZWxkKFZpZHlhcmQsIFwiY2FuUGxheVwiLCBpbXBvcnRfcGF0dGVybnMuY2FuUGxheS52aWR5YXJkKTtcbiJdLCJuYW1lcyI6WyJfX2NyZWF0ZSIsIk9iamVjdCIsImNyZWF0ZSIsIl9fZGVmUHJvcCIsImRlZmluZVByb3BlcnR5IiwiX19nZXRPd25Qcm9wRGVzYyIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9fZ2V0T3duUHJvcE5hbWVzIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsIl9fZ2V0UHJvdG9PZiIsImdldFByb3RvdHlwZU9mIiwiX19oYXNPd25Qcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJfX2RlZk5vcm1hbFByb3AiLCJvYmoiLCJrZXkiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXhwb3J0IiwidGFyZ2V0IiwiYWxsIiwibmFtZSIsImdldCIsIl9fY29weVByb3BzIiwidG8iLCJmcm9tIiwiZXhjZXB0IiwiZGVzYyIsImNhbGwiLCJfX3RvRVNNIiwibW9kIiwiaXNOb2RlTW9kZSIsIl9fZXNNb2R1bGUiLCJfX3RvQ29tbW9uSlMiLCJfX3B1YmxpY0ZpZWxkIiwiVmlkeWFyZF9leHBvcnRzIiwiZGVmYXVsdCIsIlZpZHlhcmQiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW1wb3J0X3JlYWN0IiwicmVxdWlyZSIsImltcG9ydF91dGlscyIsImltcG9ydF9wYXR0ZXJucyIsIlNES19VUkwiLCJTREtfR0xPQkFMIiwiU0RLX0dMT0JBTF9SRUFEWSIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50IiwicHJvcHMiLCJvbk1vdW50IiwibG9hZCIsInVybCIsInBsYXlpbmciLCJjb25maWciLCJvbkVycm9yIiwib25EdXJhdGlvbiIsImlkIiwibWF0Y2giLCJNQVRDSF9VUkxfVklEWUFSRCIsInBsYXllciIsInN0b3AiLCJnZXRTREsiLCJ0aGVuIiwiVmlkeWFyZDIiLCJjb250YWluZXIiLCJhcGkiLCJhZGRSZWFkeUxpc3RlbmVyIiwiZGF0YSIsIm9uIiwib25SZWFkeSIsIm9uUGxheSIsIm9uUGF1c2UiLCJvblNlZWsiLCJvbkVuZGVkIiwicmVuZGVyUGxheWVyIiwidXVpZCIsImF1dG9wbGF5Iiwib3B0aW9ucyIsImdldFBsYXllck1ldGFkYXRhIiwibWV0YSIsImR1cmF0aW9uIiwibGVuZ3RoX2luX3NlY29uZHMiLCJwbGF5IiwiY2FsbFBsYXllciIsInBhdXNlIiwid2luZG93IiwiVmlkeWFyZFY0IiwiZGVzdHJveVBsYXllciIsInNlZWtUbyIsImFtb3VudCIsImtlZXBQbGF5aW5nIiwic2V0Vm9sdW1lIiwiZnJhY3Rpb24iLCJzZXRQbGF5YmFja1JhdGUiLCJyYXRlIiwiZ2V0RHVyYXRpb24iLCJnZXRDdXJyZW50VGltZSIsImdldFNlY29uZHNMb2FkZWQiLCJyZW5kZXIiLCJkaXNwbGF5Iiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImNyZWF0ZUVsZW1lbnQiLCJyZWYiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsInZvbHVtZSIsImNhblBsYXkiLCJ2aWR5YXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/Vidyard.js\n"));

/***/ })

}]);