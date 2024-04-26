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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__controller_WhatsappController__ = __webpack_require__(1);


window.app = new __WEBPACK_IMPORTED_MODULE_0__controller_WhatsappController__["a" /* WhatsAppController */]();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_Format__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CameraController__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DocumentPreviewController__ = __webpack_require__(4);




class WhatsAppController {
  constructor() {
    this.elementsProtoType();
    this.loadElements();
    this.initEvents();
  }
  //carregando elementos 
  loadElements() {

    this.el = {};

    document.querySelectorAll('[id]').forEach(element => {

      this.el[__WEBPACK_IMPORTED_MODULE_0__util_Format__["a" /* Format */].getCamelcase(element.id)] = element;

    });

  }

  //usando ProtoType -  criação de um obj atraves de um modelo original
  elementsProtoType() {

    Element.prototype.hide = function () {
      this.style.display = 'none';
      return this;
    }

    Element.prototype.show = function () {
      this.style.display = 'block';
      return this;
    }

    Element.prototype.toggle = function () {
      if (this.style.display === 'none') {
        this.show();
      } else {
        this.hide();
      }
      return this;
    }

    Element.prototype.on = function (events, fn) {

      events.split(' ').forEach(event => {

        this.addEventListener(event, fn);

      });
      return this;
    }

    Element.prototype.css = function (styles) {
      for (let name in styles) {
        this.style[name] = styles[name];

      }
      return this;
    }

    Element.prototype.addClass = function (name) {
      this.classList.add(name);
      return this;
    }

    Element.prototype.removeClass = function (name) {
      this.classList.remove(name);
      return this;
    }

    Element.prototype.toggleClass = function (name) {
      this.classList.toggle(name);
      return this;
    }

    Element.prototype.hasClass = function (name) {
      return this.classList.contains(name);
    }

    HTMLFormElement.prototype.getForm = function () {
      return new FormData(this);
    }

    HTMLFormElement.prototype.toJSON = function () {
      let json = {};

      this.getForm().forEach((value, key) => {
        json[key] = value;
      });

      return json;
    }
  }



  //elementos de inicializacao
  initEvents() {
    this.el.myPhoto.on('click', e => {
      this.closeAllLeftPanel();
      this.el.panelAddContact.hide();
      this.el.panelEditProfile.show();
      setTimeout(() => {
        this.el.panelEditProfile.addClass('open');
      }, 300);
    });
    //////
    //////
    this.el.btnNewContact.on('click', e => {
      this.closeAllLeftPanel();
      this.el.panelAddContact.show();
      setTimeout(() => {
        this.el.panelAddContact.addClass('open');
      }, 300);
    });
    //////
    //////
    this.el.btnClosePanelEditProfile.on('click', e => {
      this.el.panelEditProfile.show();
      this.el.panelEditProfile.removeClass('open');
    });
    //////
    //////
    this.el.btnClosePanelAddContact.on('click', event => {
      this.el.panelAddContact.removeClass('open');
      setTimeout(() => {
        this.el.panelAddContact.hide();
      }, 300);
    });

    //Edit Profile
    this.el.photoContainerEditProfile.on('click', e => {
      this.el.inputProfilePhoto.click();
    });

    //Input Name change
    this.el.inputNamePanelEditProfile.on('keypress', e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        this.el.btnSavePanelEditProfile.click();
      }
    });

    //Save Name
    this.el.btnSavePanelEditProfile.on('click', e => {
      console.log(this.el.inputNamePanelEditProfile.innerHTML);
    });

    //Add Contact
    this.el.formPanelAddContact.on('submit', e => {
      e.preventDefault();

      let formData = new FormData(this.el.formPanelAddContact);
    });

    //Open Contact Box
    this.el.contactsMessagesList.querySelectorAll('.contact-item').forEach(item => {
      item.on('click', e => {

        this.el.main.hide();
        this.el.main.css({
          display: 'flex'
        });
      });
    });

    //Open Menu in Contact Box
    this.el.btnAttach.on('click', e => {
      e.stopPropagation();
      this.el.menuAttach.addClass('open');
      document.addEventListener('click', this.closeMenuAttach.bind(this));
    });

    //photo
    this.el.btnAttachPhoto.on('click', e => {
      this.el.inputPhoto.click();
    });

    this.el.inputPhoto.on('change', e => {
      console.log(this.el.inputPhoto.files);
      this.el.inputPhoto.files.forEach(file => {
        console.log(file);
      });
    });

    //camera
    this.el.btnAttachCamera.on('click', e => {
      this.el.panelMessagesContainer.hide();
      this.el.panelCamera.addClass('open');
      this.el.panelCamera.style.height = 'calc(120% - 100px)';
      this._camera = new __WEBPACK_IMPORTED_MODULE_1__CameraController__["a" /* CameraController */](this.el.videoCamera);
    });

    this.el.btnClosePanelCamera.on('click', e => {
      this.closeAllMainPanel();
      this.el.panelMessagesContainer.show();
      this._camera.stop();
    });

    this.el.btnTakePicture.on('click', e => {
      let dataUrl = this._camera.takePicture();

      this.el.pictureCamera.src = dataUrl;
      this.el.pictureCamera.show();
      this.el.videoCamera.hide();
      this.el.btnReshootPanelCamera.show();
      this.el.containerTakePicture.hide();
      this.el.containerSendPicture.show();
    });

    this.el.btnReshootPanelCamera.on('click', e => {

      this.el.pictureCamera.hide();
      this.el.videoCamera.show();
      this.el.btnReshootPanelCamera.hide();
      this.el.containerTakePicture.show();
      this.el.containerSendPicture.hide();
    });

    this.el.btnSendPicture.on('click', e => {
      console.log(this.el.pictureCamera.src);
    });

    //document
    this.el.btnAttachDocument.on('click', e => {
      this.closeAllMainPanel();
      this.el.panelDocumentPreview.addClass('open');
      this.el.panelDocumentPreview.style.height = 'calc(120% - 100px)';
      this.el.inputDocument.click();
    });

    this.el.inputDocument.on('change', e => {
      if (this.el.inputDocument.files.length) {
        let file = this.el.inputDocument.files[0];
        this._documentPreviewController = new __WEBPACK_IMPORTED_MODULE_2__DocumentPreviewController__["a" /* DocumentPreviewController */](file);

        this._documentPreviewController.getPreviewData().then(result => {
          this.el.imagePanelDocumentPreview.src = result.src;
          this.el.infoPanelDocumentPreview.innerHTML = result.info;
          this.el.imagePanelDocumentPreview.show();
          this.el.filePanelDocumentPreview.hide();
        }).catch(err => {

          console.log(file.type);

          switch (file.type) {
            case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
            case 'application/msword':
              this.el.iconPanelDocumentPreview.classList.value = 'jcxhw icon-doc-doc';
              break;

            case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
            case 'application/vnd.ms-excel':
              this.el.iconPanelDocumentPreview.classList.value = 'jcxhw icon-doc-xls';
              break;

            case 'application/vnd.ms-powerpoint':
            case 'application/vnd.openxmlformats-officedocument.presentationml.presentation':
              this.el.iconPanelDocumentPreview.classList.value = 'jcxhw icon-doc-ppt';
              break;

            default:
              this.el.iconPanelDocumentPreview.classList.value = 'jcxhw icon-doc-generic';
          }
          this.el.filePanelDocumentPreview.show();
          this.el.imagePanelDocumentPreview.hide();

          this.el.filenamePanelDocumentPreview.innerHTML = file.name;
        })
      }
    });

    this.el.btnClosePanelDocumentPreview.on('click', e => {
      this.closeAllMainPanel();
      this.el.panelMessagesContainer.show();
    });

    this.el.btnSendDocument.on('click', e => {
      console.log('send document');
    })

    //contact
    this.el.btnAttachContact.on('click', e => {
      this.el.modalContacts.show();
    });

    this.el.btnCloseModalContacts.on('click', e => {
      this.el.modalContacts.hide();
    });

    //microfone
    this.el.btnSendMicrophone.on('click', e => {
      this.el.recordMicrophone.show();
      this.el.btnSendMicrophone.hide();
      this.startRecordMicrophoneTime();
    });

    this.el.btnCancelMicrophone.on('click', e => {
      this.closeRecordMicrophone();
    });

    this.el.btnFinishMicrophone.on('click', e => {
      this.closeRecordMicrophone();
    });

    //Text

    this.el.inputText.on('keypress', e => {
      if (e.key === 'Enter' && !e.ctrlKey) {
        e.preventDefault();
        this.el.btnSend.click();
      }
    });

    this.el.inputText.on('keyup', e => {
      if (this.el.inputText.innerHTML.length) {
        this.el.inputPlaceholder.hide();
        this.el.btnSendMicrophone.hide();
        this.el.btnSend.show();
      } else {
        this.el.inputPlaceholder.show();
        this.el.btnSendMicrophone.show();
        this.el.btnSend.hide();
      }
    });

    // btn send msg
    this.el.btnSend.on('click', e => {
      console.log(this.el.inputText.innerHTML);
    });

    //emoji
    this.el.btnEmojis.on('click', e => {
      this.el.panelEmojis.toggleClass('open');
    });

    this.el.panelEmojis.querySelectorAll('.emojik').forEach(emoji => {
      emoji.on('click', e => {
        console.log(emoji.dataset.unicode);

        let img = this.el.imgEmojiDefault.cloneNode();
        img.style.cssText = emoji.style.cssText;
        img.dataset.unicode = emoji.dataset.unicode;
        img.alt = emoji.dataset.unicode;

        emoji.classList.forEach(name => {
          img.classList.add(name);
        });
        this.el.inputText.appendChild(img);

        let cursor = window.getSelection();
        if (!cursor.focusNode || !cursor.focusNode.id == 'input-text') {
          this.el.inputText.focus();
          cursor = window.getSelection();
        }

        let range = document.createRange();
        range = range.cursor.getRangeAt(0);
        range.deleteContents();

        let frag = document.createDocumentFragment();
        frag.appendChild(img);
        range.insertNode(frag);
        range.setStartAfter(img);

        this.el.inputText.dispatchEvent(new Event('keyup'));

      });
    })

  }

  startRecordMicrophoneTime() {
    let start = Date.now();
    this._recordMicrophoneInterval = setInterval(() => {
      this.el.recordMicrophoneTimer.innerHTML = __WEBPACK_IMPORTED_MODULE_0__util_Format__["a" /* Format */].toTime(Date.now() - start);
    }, 100);
  }

  closeRecordMicrophone() {
    this.el.recordMicrophone.hide();
    this.el.btnSendMicrophone.show();
    clearInterval(this._recordMicrophoneInterval);
  }

  //fechar todos os paneis
  closeAllMainPanel() {
    this.el.panelMessagesContainer.hide();
    this.el.panelDocumentPreview.removeClass('open');
    this.el.panelCamera.removeClass('open');
  }

  //fechar painel
  closeMenuAttach(e) {
    document.removeEventListener('click', this.closeMenuAttach);
    console.log('remove menu');
  }

  //evento de fechar paneis esquerdos
  closeAllLeftPanel() {
    this.el.panelAddContact.hide();
    this.el.panelEditProfile.hide();
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = WhatsAppController;



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Format {
  static getCamelcase(text) {

    let div = document.createElement('div');

    div.innerHTML = `<div data-${text}="id"></div>`;

    return Object.keys(div.firstChild.dataset)[0];

  }

  static toTime(duration) {
    let seconds = parseInt((duration / 1000) % 60);
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Format;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class CameraController {
  constructor(videoEl) {
    this._videoEl = videoEl;

    navigator.mediaDevices.getUserMedia({
      video: true
    }).then(stream => {
      this._stream = stream;
      let mediaStream = new MediaStream(stream);
      this._videoEl.srcObject = mediaStream;
      this._videoEl.play();
    }).catch(err => {
      console.error(err);
    });
  }
  stop() {
    stream.getTracks().forEach(track => {
      track.stop();
    })
  }

  takePicture(mimeType = 'image/png'){
    let canvas = document.createElement('canvas');
    canvas.setAttribute('height', this._videoEl.videoHeight);
    canvas.setAttribute('width', this._videoEl.videoWidth);

    let context = canvas.getContext('2d');
    context.drawImage(this._videoEl, 0, 0, canvas.width, canvas.height );
    return canvas.toDataURL(mimeType);
  }
  
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CameraController;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {var pdfjsLib = __webpack_require__(5);
var path = __webpack_require__(6);

pdfjsLib.GlobalWorkerOptions.workerSrc = path.resolve(__dirname,
 '../../dist/pdf.worker.bundle.js');

class DocumentPreviewController {
  constructor(file) {
    this._file = file;
  }
  getPreviewData() {
    return new Promise((s, f) => {
      switch (this._file.Type) {
        case 'image/png':
        case 'image/jpeg':
        case 'image/jpg':
        case 'image/gif':
          let reader = new FileReader();
          reader.onload = e => {
            s({
              src: reader.result,
              info: this._file.name
            });
          }
          reader.onerror = e => {
            f(e);
          }
          reader.readAsDataURL(this._file);
          break;

        case 'application/pdf':

          break;

        default:
          f();

      }
    });
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = DocumentPreviewController;

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "/"))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: C:\\Users\\lucas\\Desktop\\JS-WhatsAppClone-\\node_modules\\pdfjs-dist\\build\\pdf.mjs Unexpected character '#' (181:2)\nYou may need an appropriate loader to handle this file type.\n| }\n| class AnnotationElement {\n|   #hasBorder = false;\n|   constructor(parameters, {\n|     isRenderable = false,");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);