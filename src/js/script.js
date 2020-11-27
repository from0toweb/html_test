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

eval("var emailInput = document.querySelector('[type=\"email\"]');\nvar passwordInput = document.querySelector('[type=\"password\"]');\nvar form = document.querySelector('form');\nvar error = document.querySelector('.login__error');\nvar card = document.querySelector('.card-wrap');\nvar successMessage = document.querySelector('.main__message');\n\nvar validation = function validation(e) {\n  var target = e.target; // eslint-disable-next-line max-len\n\n  var regexp = /^([A-Z|a-z|0-9](\\.|_){0,1})+[A-Z|a-z|0-9]\\@([A-Z|a-z|0-9])+((\\.){0,1}[A-Z|a-z|0-9]){2}\\.[a-z]{2,3}$/gm;\n\n  if (regexp.test(target.value)) {\n    target.style.border = '2px solid green';\n    passwordInput.removeAttribute('disabled');\n  } else {\n    if (!passwordInput.getAttribute('disabled')) {\n      passwordInput.setAttribute('disabled', 'disabled');\n    }\n\n    target.style.border = '2px solid tomato';\n  }\n};\n\nvar submit = function submit(e) {\n  e.preventDefault();\n\n  if (!emailInput.value.trim() || !passwordInput.value.trim()) {\n    error.style.display = 'block';\n  } else {\n    form.reset();\n    error.style.display = 'none';\n    card.classList.add('card-wrap--success');\n    var timer = setTimeout(function () {\n      card.style.display = 'none';\n      successMessage.style.display = 'block';\n      clearTimeout(timer);\n    }, 600);\n  }\n};\n\nemailInput.addEventListener('input', validation);\nform.addEventListener('submit', submit);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanM/N2JhNSJdLCJuYW1lcyI6WyJlbWFpbElucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFzc3dvcmRJbnB1dCIsImZvcm0iLCJlcnJvciIsImNhcmQiLCJzdWNjZXNzTWVzc2FnZSIsInZhbGlkYXRpb24iLCJlIiwidGFyZ2V0IiwicmVnZXhwIiwidGVzdCIsInZhbHVlIiwic3R5bGUiLCJib3JkZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJzdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInRyaW0iLCJkaXNwbGF5IiwicmVzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBbkI7QUFDQSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBdEI7QUFDQSxJQUFNRSxJQUFJLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUcsS0FBSyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZDtBQUNBLElBQU1JLElBQUksR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQWI7QUFDQSxJQUFNSyxjQUFjLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBdkI7O0FBRUEsSUFBTU0sVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQUMsQ0FBQyxFQUFJO0FBQ3BCLE1BQU1DLE1BQU0sR0FBR0QsQ0FBQyxDQUFDQyxNQUFqQixDQURvQixDQUVwQjs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsdUdBQWY7O0FBRUEsTUFBSUEsTUFBTSxDQUFDQyxJQUFQLENBQVlGLE1BQU0sQ0FBQ0csS0FBbkIsQ0FBSixFQUErQjtBQUMzQkgsVUFBTSxDQUFDSSxLQUFQLENBQWFDLE1BQWIsR0FBc0IsaUJBQXRCO0FBQ0FaLGlCQUFhLENBQUNhLGVBQWQsQ0FBOEIsVUFBOUI7QUFDSCxHQUhELE1BR087QUFDSCxRQUFJLENBQUNiLGFBQWEsQ0FBQ2MsWUFBZCxDQUEyQixVQUEzQixDQUFMLEVBQTZDO0FBQ3pDZCxtQkFBYSxDQUFDZSxZQUFkLENBQTJCLFVBQTNCLEVBQXVDLFVBQXZDO0FBQ0g7O0FBQ0RSLFVBQU0sQ0FBQ0ksS0FBUCxDQUFhQyxNQUFiLEdBQXNCLGtCQUF0QjtBQUNIO0FBQ0osQ0FkRDs7QUFnQkEsSUFBTUksTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQVYsQ0FBQyxFQUFJO0FBQ2hCQSxHQUFDLENBQUNXLGNBQUY7O0FBQ0EsTUFBSSxDQUFDcEIsVUFBVSxDQUFDYSxLQUFYLENBQWlCUSxJQUFqQixFQUFELElBQTRCLENBQUNsQixhQUFhLENBQUNVLEtBQWQsQ0FBb0JRLElBQXBCLEVBQWpDLEVBQTZEO0FBQ3pEaEIsU0FBSyxDQUFDUyxLQUFOLENBQVlRLE9BQVosR0FBc0IsT0FBdEI7QUFDSCxHQUZELE1BRU87QUFDSGxCLFFBQUksQ0FBQ21CLEtBQUw7QUFDQWxCLFNBQUssQ0FBQ1MsS0FBTixDQUFZUSxPQUFaLEdBQXNCLE1BQXRCO0FBQ0FoQixRQUFJLENBQUNrQixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsb0JBQW5CO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQyxVQUFVLENBQUMsWUFBTTtBQUMzQnJCLFVBQUksQ0FBQ1EsS0FBTCxDQUFXUSxPQUFYLEdBQXFCLE1BQXJCO0FBQ0FmLG9CQUFjLENBQUNPLEtBQWYsQ0FBcUJRLE9BQXJCLEdBQStCLE9BQS9CO0FBQ0FNLGtCQUFZLENBQUNGLEtBQUQsQ0FBWjtBQUNILEtBSnVCLEVBSXJCLEdBSnFCLENBQXhCO0FBS0g7QUFDSixDQWREOztBQWdCQTFCLFVBQVUsQ0FBQzZCLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDckIsVUFBckM7QUFDQUosSUFBSSxDQUFDeUIsZ0JBQUwsQ0FBc0IsUUFBdEIsRUFBZ0NWLE1BQWhDIiwiZmlsZSI6Ii4vc3JjL2pzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwiZW1haWxcIl0nKTtcclxuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwicGFzc3dvcmRcIl0nKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcclxuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW5fX2Vycm9yJyk7XHJcbmNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC13cmFwJyk7XHJcbmNvbnN0IHN1Y2Nlc3NNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX21lc3NhZ2UnKTtcclxuXHJcbmNvbnN0IHZhbGlkYXRpb24gPSBlID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1sZW5cclxuICAgIGNvbnN0IHJlZ2V4cCA9IC9eKFtBLVp8YS16fDAtOV0oXFwufF8pezAsMX0pK1tBLVp8YS16fDAtOV1cXEAoW0EtWnxhLXp8MC05XSkrKChcXC4pezAsMX1bQS1afGEtenwwLTldKXsyfVxcLlthLXpdezIsM30kL2dtO1xyXG5cclxuICAgIGlmIChyZWdleHAudGVzdCh0YXJnZXQudmFsdWUpKSB7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgZ3JlZW4nO1xyXG4gICAgICAgIHBhc3N3b3JkSW5wdXQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIXBhc3N3b3JkSW5wdXQuZ2V0QXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XHJcbiAgICAgICAgICAgIHBhc3N3b3JkSW5wdXQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXQuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCB0b21hdG8nO1xyXG4gICAgfVxyXG59O1xyXG5cclxuY29uc3Qgc3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoIWVtYWlsSW5wdXQudmFsdWUudHJpbSgpIHx8ICFwYXNzd29yZElucHV0LnZhbHVlLnRyaW0oKSkge1xyXG4gICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3JtLnJlc2V0KCk7XHJcbiAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQtd3JhcC0tc3VjY2VzcycpO1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgIH1cclxufTtcclxuXHJcbmVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB2YWxpZGF0aW9uKTtcclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzdWJtaXQpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/index.js\n");

/***/ })

/******/ });