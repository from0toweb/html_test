/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var emailInput = document.querySelector('[type=\"email\"]');\nvar passwordInput = document.querySelector('[type=\"password\"]');\nvar form = document.querySelector(\"form\");\nvar error = document.querySelector(\".login__error\");\nvar card = document.querySelector(\".card-wrap\");\nvar successMessage = document.querySelector(\".main__message\");\n\nvar validation = function validation(e) {\n  var target = e.target; // eslint-disable-next-line max-len\n\n  var regexp = /^([A-Z|a-z|0-9](\\.|_){0,1})+[A-Z|a-z|0-9]\\@([A-Z|a-z|0-9])+((\\.){0,1}[A-Z|a-z|0-9]){2}\\.[a-z]{2,3}$/gm;\n\n  if (regexp.test(target.value)) {\n    target.style.border = \"2px solid green\";\n    passwordInput.removeAttribute(\"disabled\");\n  } else {\n    if (!passwordInput.getAttribute(\"disabled\")) {\n      passwordInput.setAttribute(\"disabled\", \"disabled\");\n    }\n\n    target.style.border = \"2px solid tomato\";\n  }\n};\n\nvar submit = function submit(e) {\n  e.preventDefault();\n\n  if (!emailInput.value.trim() || !passwordInput.value.trim()) {\n    error.style.display = \"block\";\n  } else {\n    form.reset();\n    error.style.display = \"none\";\n    card.classList.add(\"card-wrap--success\");\n    var timer = setTimeout(function () {\n      card.style.display = \"none\";\n      successMessage.style.display = \"block\";\n      clearTimeout(timer);\n    }, 600);\n  }\n};\n\nemailInput.addEventListener(\"focus\", validation);\nemailInput.addEventListener(\"input\", validation);\nform.addEventListener(\"submit\", submit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJlbWFpbElucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFzc3dvcmRJbnB1dCIsImZvcm0iLCJlcnJvciIsImNhcmQiLCJzdWNjZXNzTWVzc2FnZSIsInZhbGlkYXRpb24iLCJlIiwidGFyZ2V0IiwicmVnZXhwIiwidGVzdCIsInZhbHVlIiwic3R5bGUiLCJib3JkZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJkaXNwbGF5IiwicmVzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBdEI7QUFDQSxJQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUcsS0FBSyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZDtBQUNBLElBQU1JLElBQUksR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWI7QUFDQSxJQUFNSyxjQUFjLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBdkI7O0FBRUEsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0QsQ0FBQyxDQUFDQyxNQUFqQixDQUR3QixDQUV4Qjs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsdUdBQWY7O0FBRUEsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLENBQVlGLE1BQU0sQ0FBQ0csS0FBbkIsQ0FBSixFQUErQjtBQUM3QkgsVUFBTSxDQUFDSSxLQUFQLENBQWFDLE1BQWIsR0FBc0IsaUJBQXRCO0FBQ0FaLGlCQUFhLENBQUNhLGVBQWQsQ0FBOEIsVUFBOUI7QUFDRCxHQUhELE1BR087QUFDTCxRQUFJLENBQUNiLGFBQWEsQ0FBQ2MsWUFBZCxDQUEyQixVQUEzQixDQUFMLEVBQTZDO0FBQzNDZCxtQkFBYSxDQUFDZSxZQUFkLENBQTJCLFVBQTNCLEVBQXVDLFVBQXZDO0FBQ0Q7O0FBQ0RSLFVBQU0sQ0FBQ0ksS0FBUCxDQUFhQyxNQUFiLEdBQXNCLGtCQUF0QjtBQUNEO0FBQ0YsQ0FkRDs7QUFnQkEsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ1YsQ0FBRCxFQUFPO0FBQ3BCQSxHQUFDLENBQUNXLGNBQUY7O0FBQ0EsTUFBSSxDQUFDcEIsVUFBVSxDQUFDYSxLQUFYLENBQWlCUSxJQUFqQixFQUFELElBQTRCLENBQUNsQixhQUFhLENBQUNVLEtBQWQsQ0FBb0JRLElBQXBCLEVBQWpDLEVBQTZEO0FBQzNEaEIsU0FBSyxDQUFDUyxLQUFOLENBQVlRLE9BQVosR0FBc0IsT0FBdEI7QUFDRCxHQUZELE1BRU87QUFDTGxCLFFBQUksQ0FBQ21CLEtBQUw7QUFDQWxCLFNBQUssQ0FBQ1MsS0FBTixDQUFZUSxPQUFaLEdBQXNCLE1BQXRCO0FBQ0FoQixRQUFJLENBQUNrQixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsb0JBQW5CO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUM3QnJCLFVBQUksQ0FBQ1EsS0FBTCxDQUFXUSxPQUFYLEdBQXFCLE1BQXJCO0FBQ0FmLG9CQUFjLENBQUNPLEtBQWYsQ0FBcUJRLE9BQXJCLEdBQStCLE9BQS9CO0FBQ0FNLGtCQUFZLENBQUNGLEtBQUQsQ0FBWjtBQUNELEtBSnVCLEVBSXJCLEdBSnFCLENBQXhCO0FBS0Q7QUFDRixDQWREOztBQWVBMUIsVUFBVSxDQUFDNkIsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUNyQixVQUFyQztBQUNBUixVQUFVLENBQUM2QixnQkFBWCxDQUE0QixPQUE1QixFQUFxQ3JCLFVBQXJDO0FBQ0FKLElBQUksQ0FBQ3lCLGdCQUFMLENBQXNCLFFBQXRCLEVBQWdDVixNQUFoQyIsImZpbGUiOiIuL3NyYy9qcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cImVtYWlsXCJdJyk7XHJcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInBhc3N3b3JkXCJdJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKTtcclxuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luX19lcnJvclwiKTtcclxuY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZC13cmFwXCIpO1xyXG5jb25zdCBzdWNjZXNzTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9fbWVzc2FnZVwiKTtcclxuXHJcbmNvbnN0IHZhbGlkYXRpb24gPSAoZSkgPT4ge1xyXG4gIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXHJcbiAgY29uc3QgcmVnZXhwID0gL14oW0EtWnxhLXp8MC05XShcXC58Xyl7MCwxfSkrW0EtWnxhLXp8MC05XVxcQChbQS1afGEtenwwLTldKSsoKFxcLil7MCwxfVtBLVp8YS16fDAtOV0pezJ9XFwuW2Etel17MiwzfSQvZ207XHJcblxyXG4gIGlmIChyZWdleHAudGVzdCh0YXJnZXQudmFsdWUpKSB7XHJcbiAgICB0YXJnZXQuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgZ3JlZW5cIjtcclxuICAgIHBhc3N3b3JkSW5wdXQucmVtb3ZlQXR0cmlidXRlKFwiZGlzYWJsZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICghcGFzc3dvcmRJbnB1dC5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkge1xyXG4gICAgICBwYXNzd29yZElucHV0LnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiZGlzYWJsZWRcIik7XHJcbiAgICB9XHJcbiAgICB0YXJnZXQuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgdG9tYXRvXCI7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0ID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgaWYgKCFlbWFpbElucHV0LnZhbHVlLnRyaW0oKSB8fCAhcGFzc3dvcmRJbnB1dC52YWx1ZS50cmltKCkpIHtcclxuICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGZvcm0ucmVzZXQoKTtcclxuICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmQtd3JhcC0tc3VjY2Vzc1wiKTtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICBzdWNjZXNzTWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgfSwgNjAwKTtcclxuICB9XHJcbn07XHJcbmVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIHZhbGlkYXRpb24pO1xyXG5lbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCB2YWxpZGF0aW9uKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHN1Ym1pdCk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });