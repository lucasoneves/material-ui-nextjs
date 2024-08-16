"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/uuid4";
exports.ids = ["vendor-chunks/uuid4"];
exports.modules = {

/***/ "(ssr)/./node_modules/uuid4/index.js":
/*!*************************************!*\
  !*** ./node_modules/uuid4/index.js ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\n\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\"),\n  uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;\n\nexports = module.exports = genUUID;\nexports.valid = isUUID;\n\nfunction genUUID(callback) {\n  if (typeof callback !== \"function\") {\n    var rnd = crypto.randomBytes(16);\n    rnd[6] = (rnd[6] & 0x0f) | 0x40;\n    rnd[8] = (rnd[8] & 0x3f) | 0x80;\n    rnd = rnd.toString(\"hex\").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);\n    rnd.shift();\n    return rnd.join(\"-\");\n  }\n  crypto.randomBytes(16, function(err, rnd) {\n    if (err) return callback(err);\n    try {\n      rnd[6] = (rnd[6] & 0x0f) | 0x40;\n      rnd[8] = (rnd[8] & 0x3f) | 0x80;\n      rnd = rnd.toString(\"hex\").match(/(.{8})(.{4})(.{4})(.{4})(.{12})/);\n      rnd.shift();\n      return callback(null, rnd.join(\"-\"));\n    } catch (err2) {\n      return callback(err2);\n    }\n  });\n}\n\nfunction isUUID(uuid) {\n  return uuidPattern.test(uuid);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXVpZDQvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsYUFBYSxtQkFBTyxDQUFDLHNCQUFRO0FBQzdCLDJCQUEyQixFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxHQUFHOztBQUVyRjtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksR0FBRztBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHO0FBQ3JFO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXRlcmlhbC11aS1uZXh0anMvLi9ub2RlX21vZHVsZXMvdXVpZDQvaW5kZXguanM/NzcwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNyeXB0byA9IHJlcXVpcmUoXCJjcnlwdG9cIiksXG4gIHV1aWRQYXR0ZXJuID0gL15bMC05YS1mXXs4fS1bMC05YS1mXXs0fS00WzAtOWEtZl17M30tWzg5YWJdWzAtOWEtZl17M30tWzAtOWEtZl17MTJ9JC87XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGdlblVVSUQ7XG5leHBvcnRzLnZhbGlkID0gaXNVVUlEO1xuXG5mdW5jdGlvbiBnZW5VVUlEKGNhbGxiYWNrKSB7XG4gIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBybmQgPSBjcnlwdG8ucmFuZG9tQnl0ZXMoMTYpO1xuICAgIHJuZFs2XSA9IChybmRbNl0gJiAweDBmKSB8IDB4NDA7XG4gICAgcm5kWzhdID0gKHJuZFs4XSAmIDB4M2YpIHwgMHg4MDtcbiAgICBybmQgPSBybmQudG9TdHJpbmcoXCJoZXhcIikubWF0Y2goLyguezh9KSguezR9KSguezR9KSguezR9KSguezEyfSkvKTtcbiAgICBybmQuc2hpZnQoKTtcbiAgICByZXR1cm4gcm5kLmpvaW4oXCItXCIpO1xuICB9XG4gIGNyeXB0by5yYW5kb21CeXRlcygxNiwgZnVuY3Rpb24oZXJyLCBybmQpIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICB0cnkge1xuICAgICAgcm5kWzZdID0gKHJuZFs2XSAmIDB4MGYpIHwgMHg0MDtcbiAgICAgIHJuZFs4XSA9IChybmRbOF0gJiAweDNmKSB8IDB4ODA7XG4gICAgICBybmQgPSBybmQudG9TdHJpbmcoXCJoZXhcIikubWF0Y2goLyguezh9KSguezR9KSguezR9KSguezR9KSguezEyfSkvKTtcbiAgICAgIHJuZC5zaGlmdCgpO1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIHJuZC5qb2luKFwiLVwiKSk7XG4gICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKGVycjIpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGlzVVVJRCh1dWlkKSB7XG4gIHJldHVybiB1dWlkUGF0dGVybi50ZXN0KHV1aWQpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/uuid4/index.js\n");

/***/ })

};
;