!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){i(2),e.exports=i(1)},function(e,t,i){},function(e,t,i){"use strict";function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}i.r(t);var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.language=null,this.view=null,this.specialKeys=null,this.characterKeys=null,this.isCapsLockOn=!1,this.isUpperCase=!1,this.numberOfKeys=64,this.line="",this.cursorPosition=0}var t,i,a;return t=e,(i=[{key:"init",value:function(e){this.view=e,this.language=localStorage.language||"en",this.specialKeys=JSON.parse('{"Backspace":{"id":13,"value":"backspace","width":"double_quarter"},"Tab":{"id":14,"value":"tab","width":"one_quarter"},"Delete":{"id":28,"value":"del","width":"plus_quarter"},"CapsLock":{"id":29,"value":"caps-lock","width":"one_half"},"Enter":{"id":41,"value":"enter","width":"double_quarter"},"ShiftLeft":{"id":42,"value":"shift","width":"double_quarter"},"ShiftRight":{"id":53,"value":"shift","width":"double_half"},"ControlLeft":{"id":54,"value":"ctrl","width":"one"},"MetaLeft":{"id":55,"value":"win","width":"one"},"AltLeft":{"id":56,"value":"alt","width":"one"},"Space":{"id":57,"value":"space","width":"seven"},"AltRight":{"id":58,"value":"alt","width":"one"},"ControlRight":{"id":59,"value":"ctrl","width":"plus_quarter"},"ArrowLeft":{"id":60,"value":"←","width":"one"},"ArrowUp":{"id":61,"value":"↑","width":"one_quarter_slim"},"ArrowDown":{"id":62,"value":"↓","width":"one_quarter_slim"},"ArrowRight":{"id":63,"value":"→","width":"one"}}'),this.characterKeys=JSON.parse('{"Backquote":{"id":0,"value":{"en":["`","~"],"ru":["ё","Ё"]}},"Digit1":{"id":1,"value":{"en":["1","!"],"ru":["1","!"]}},"Digit2":{"id":2,"value":{"en":["2","@"],"ru":["2","\\""]}},"Digit3":{"id":3,"value":{"en":["3","#"],"ru":["3","№"]}},"Digit4":{"id":4,"value":{"en":["4","$"],"ru":["4",";"]}},"Digit5":{"id":5,"value":{"en":["5","%"],"ru":["5","%"]}},"Digit6":{"id":6,"value":{"en":["6","^"],"ru":["6",":"]}},"Digit7":{"id":7,"value":{"en":["7","&"],"ru":["7","?"]}},"Digit8":{"id":8,"value":{"en":["8","*"],"ru":["8","*"]}},"Digit9":{"id":9,"value":{"en":["9","("],"ru":["9","("]}},"Digit0":{"id":10,"value":{"en":["0",")"],"ru":["0",")"]}},"Minus":{"id":11,"value":{"en":["-","_"],"ru":["-","_"]}},"Equal":{"id":12,"value":{"en":["=","+"],"ru":["=","+"]}},"KeyQ":{"id":15,"value":{"en":["q","Q"],"ru":["й","Й"]}},"KeyW":{"id":16,"value":{"en":["w","W"],"ru":["ц","Ц"]}},"KeyE":{"id":17,"value":{"en":["e","E"],"ru":["у","У"]}},"KeyR":{"id":18,"value":{"en":["r","R"],"ru":["к","К"]}},"KeyT":{"id":19,"value":{"en":["t","T"],"ru":["е","Е"]}},"KeyY":{"id":20,"value":{"en":["y","Y"],"ru":["н","Н"]}},"KeyU":{"id":21,"value":{"en":["u","U"],"ru":["г","Г"]}},"KeyI":{"id":22,"value":{"en":["i","I"],"ru":["ш","Ш"]}},"KeyO":{"id":23,"value":{"en":["o","O"],"ru":["щ","Щ"]}},"KeyP":{"id":24,"value":{"en":["p","P"],"ru":["з","З"]}},"BracketLeft":{"id":25,"value":{"en":["[","{"],"ru":["х","Х"]}},"BracketRight":{"id":26,"value":{"en":["]","}"],"ru":["ъ","Ъ"]}},"Backslash":{"id":27,"value":{"en":["\\\\","|"],"ru":["\\\\","/"]}},"KeyA":{"id":30,"value":{"en":["a","A"],"ru":["ф","Ф"]}},"KeyS":{"id":31,"value":{"en":["s","S"],"ru":["ы","Ы"]}},"KeyD":{"id":32,"value":{"en":["d","D"],"ru":["в","В"]}},"KeyF":{"id":33,"value":{"en":["f","F"],"ru":["а","А"]}},"KeyG":{"id":34,"value":{"en":["g","G"],"ru":["п","П"]}},"KeyH":{"id":35,"value":{"en":["h","H"],"ru":["р","Р"]}},"KeyJ":{"id":36,"value":{"en":["j","J"],"ru":["о","О"]}},"KeyK":{"id":37,"value":{"en":["k","K"],"ru":["л","Л"]}},"KeyL":{"id":38,"value":{"en":["l","L"],"ru":["д","Д"]}},"Semicolon":{"id":39,"value":{"en":[";",":"],"ru":["ж","Ж"]}},"Quote":{"id":40,"value":{"en":["\'","\\""],"ru":["э","Э"]}},"KeyZ":{"id":43,"value":{"en":["z","Z"],"ru":["я","Я"]}},"KeyX":{"id":44,"value":{"en":["x","X"],"ru":["ч","Ч"]}},"KeyC":{"id":45,"value":{"en":["c","C"],"ru":["с","С"]}},"KeyV":{"id":46,"value":{"en":["v","V"],"ru":["м","М"]}},"KeyB":{"id":47,"value":{"en":["b","B"],"ru":["и","И"]}},"KeyN":{"id":48,"value":{"en":["n","N"],"ru":["т","Т"]}},"KeyM":{"id":49,"value":{"en":["m","M"],"ru":["ь","Ь"]}},"Comma":{"id":50,"value":{"en":[",","<"],"ru":["б","Б"]}},"Period":{"id":51,"value":{"en":[".",">"],"ru":["ю","Ю"]}},"Slash":{"id":52,"value":{"en":["/","?"],"ru":[".",","]}}}'),this.update()}},{key:"update",value:function(){this.view.drawKeyboard(this.numberOfKeys,this.specialKeys),this.updateCharacterKeys()}},{key:"updateCharacterKeys",value:function(){this.view.updateCharacters(this.characterKeys,this.language,this.isUpperCase,this.isCapsLockOn)}},{key:"changeLine",value:function(e){var t=this.line.slice(0,this.cursorPosition),i=this.line.slice(this.cursorPosition,this.line.length);this.line=t+e+i,this.cursorPosition+=e.length,this.view.updateText()}},{key:"addCharacterToLine",value:function(e){var t=this.characterKeys[e].value[this.language][this.isUpperCase?1:0];this.isCapsLockOn&&(t=t.toUpperCase()),this.changeLine(t)}},{key:"addTabToLine",value:function(){this.changeLine("\t")}},{key:"addSpaceToLine",value:function(){this.changeLine(" ")}},{key:"goToNewLine",value:function(){this.changeLine("\n")}},{key:"removeCharacter",value:function(e){var t="",i="";"before"===e?(t=this.line.slice(0,this.cursorPosition-1),i=this.line.slice(this.cursorPosition,this.line.length),this.cursorPosition-=1):(t=this.line.slice(0,this.cursorPosition),i=this.line.slice(this.cursorPosition+1,this.line.length)),this.line=t+i,this.view.updateText()}},{key:"toggleCapsLock",value:function(){this.isCapsLockOn=!this.isCapsLockOn,this.updateCharacterKeys()}},{key:"toggleUpperCase",value:function(e){this.isUpperCase=e,this.updateCharacterKeys()}},{key:"toggleLanguage",value:function(){this.language="en"===this.language?"ru":"en",localStorage.language=this.language,this.updateCharacterKeys()}},{key:"moveCursore",value:function(e){if("number"==typeof e)this.cursorPosition=e;else switch(e){case"left":this.cursorPosition>0&&(this.cursorPosition-=1);break;case"right":this.cursorPosition<this.line.length&&(this.cursorPosition+=1);break;case"up":this.cursorPosition-=88,this.cursorPosition-88<0&&(this.cursorPosition=0);break;default:this.cursorPosition+=88,this.cursorPosition>this.line.length&&(this.cursorPosition=this.line.length)}this.view.updateText()}}])&&n(t.prototype,i),a&&n(t,a),e}();function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=null,this.container=null}var t,i,n;return t=e,(i=[{key:"init",value:function(e,t,i){this.model=e,this.textarea=t,this.container=i}},{key:"drawKeyboard",value:function(e,t){var i=this,n=document.createElement("div");n.classList.add("up-down-arrows");for(var a=function(e){var a=document.createElement("div");a.classList.add("key"),Object.keys(t).forEach((function(i){t[i].id===e&&(a.classList.add("special_key","special_key-".concat(t[i].width)),a.setAttribute("data-code",i),a.innerText=t[i].value)})),"ArrowUp"===a.getAttribute("data-code")?n.append(a):"ArrowDown"===a.getAttribute("data-code")?(n.append(a),i.container.append(n)):i.container.append(a)},r=0;r<e;r+=1)a(r)}},{key:"updateCharacters",value:function(e,t,i,n){var a=this.container.querySelectorAll(".key")||null;Object.keys(e).forEach((function(r){a[e[r].id].setAttribute("data-code",r);var o=e[r].value[t][i?1:0];n&&(o=o.toUpperCase()),a[e[r].id].innerText=o}))}},{key:"updateText",value:function(){var e=this;this.textarea.value=this.model.line,this.textarea.selectionStart=this.model.cursorPosition,this.textarea.selectionEnd=this.model.cursorPosition,setTimeout((function(){return e.textarea.focus()}),10)}}])&&r(t.prototype,i),n&&r(t,n),e}();function s(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=null,this.container=null,this.isShiftLeftOn=!1,this.isShiftRightOn=!1,this.isAltLeftOn=!1,this.isAltRightOn=!1,this.isControlLeftOn=!1,this.isControlRightOn=!1}var t,i,n;return t=e,(i=[{key:"init",value:function(e,t){this.model=e,this.container=t,this.addListeners()}},{key:"addListeners",value:function(){var e=this;document.addEventListener("keydown",(function(t){return e.keyAction(t)})),document.addEventListener("keyup",(function(t){return e.keyAction(t)})),document.addEventListener("mousedown",(function(t){return e.mouseAction(t)})),document.addEventListener("mouseup",(function(t){return e.mouseAction(t)}))}},{key:"keyAction",value:function(e){var t=this;e.preventDefault(),this.container.querySelectorAll(".key").forEach((function(i){i.getAttribute("data-code")===e.code&&("keydown"===e.type?t.keyDownAction(i):t.keyUpAction(i))}))}},{key:"mouseAction",value:function(e){var t=this;if(e.target.classList.contains("key")&&"mousedown"===e.type&&this.keyDownAction(e.target,e),"mouseup"===e.type&&this.container.querySelectorAll(".key").forEach((function(e){t.keyUpAction(e)})),e.target.classList.contains("text-field")){var i=e.target.selectionStart;this.model.moveCursore(i)}}},{key:"keyDownAction",value:function(e){"CapsLock"!==e.dataset.code?e.classList.add("active"):e.classList.toggle("active"),e.classList.contains("special_key")?this.specialKeyDownAction(e):this.model.addCharacterToLine(e.dataset.code)}},{key:"keyUpAction",value:function(e){"CapsLock"!==e.dataset.code&&e.classList.remove("active"),e.classList.contains("special_key")&&this.specialKeyUpAction(e)}},{key:"specialKeyDownAction",value:function(e){switch(e.dataset.code){case"Backspace":this.model.removeCharacter("before");break;case"Tab":this.model.addTabToLine();break;case"Delete":this.model.removeCharacter("after");break;case"CapsLock":this.model.toggleCapsLock();break;case"Enter":this.model.goToNewLine();break;case"ShiftLeft":this.isShiftLeftOn=!0,this.changeLanguageCheck(),this.model.toggleUpperCase(!0);break;case"ShiftRight":this.model.toggleUpperCase(!0),this.isShiftRightOn=!0;break;case"ControlLeft":this.isControlLeftOn=!0,this.changeLanguageCheck();break;case"ControlRight":this.isControlRightOn=!0;break;case"AltLeft":case"AltRight":this.isAltLeftOn=!0;break;case"Space":this.model.addSpaceToLine();break;case"ArrowLeft":this.model.moveCursore("left");break;case"ArrowRight":this.model.moveCursore("right");break;case"ArrowUp":this.model.moveCursore("up");break;case"ArrowDown":this.model.moveCursore("down");break;default:return-1}return-1}},{key:"specialKeyUpAction",value:function(e){switch(e.dataset.code){case"ShiftLeft":this.isShiftLeftOn=!1,this.model.toggleUpperCase(!1);break;case"ShiftRight":this.isShiftRightOn=!1,this.model.toggleUpperCase(!1);break;case"ControlLeft":this.isControlLeftOn=!1;break;case"ControlRight":this.isControlRightOn=!1;break;case"AltLeft":case"AltRight":this.isAltLeftOn=!1;break;default:return-1}return-1}},{key:"changeLanguageCheck",value:function(){this.isShiftLeftOn&&this.isControlLeftOn&&this.model.toggleLanguage()}}])&&s(t.prototype,i),n&&s(t,n),e}();function l(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.model=new a,this.view=new o,this.controller=new u}var t,i,n;return t=e,(i=[{key:"init",value:function(e,t,i){this.view.init(this.model,t,i),this.model.init(this.view),this.controller.init(this.model,e)}}])&&l(t.prototype,i),n&&l(t,n),e}();window.onload=function(){var e=document.createElement("div");e.classList.add("wrapper"),document.body.prepend(e),e.insertAdjacentHTML("afterbegin","<h1>Virtual keyboard</h1>");var t=document.createElement("textarea");t.classList.add("text-field"),e.append(t);var i=document.createElement("div");i.classList.add("keyboard","keyboard_wrapper"),e.append(i);var n=document.createElement("p");n.innerText="Change language - left Ctrl + Shift",e.append(n),(new c).init(e,t,i)}}]);