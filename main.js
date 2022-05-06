(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var t=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e}var n,a;return n=t,(a=[{key:"createKeyboard",value:function(){return"<div id='".concat(this.id,"'></div>")}}])&&e(n.prototype,a),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var a=function(){function e(t){var n=t.name,a=t.ru,i=t.en,r=t.enShift,s=t.ruShift;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=n,this.ru=a,this.en=i,this.enShift=r,this.ruShift=s}var t,a;return t=e,(a=[{key:"className",value:function(){this.className="button","Backspace"!==this.name&&"Tab"!==this.name&&"CapsLock"!==this.name&&"CapsLock"!==this.name&&"Enter"!==this.name&&"ShiftLeft"!==this.name&&"ShiftRight"!==this.name&&"Space"!==this.name&&(this.className+=" button-squared"),"Backspace"===this.name&&(this.className+=" button-backspace"),"Tab"===this.name&&(this.className+=" button-tab"),"Delete"===this.name&&(this.className+=" button-delete"),"Enter"===this.name&&(this.className+=" button-enter"),"CapsLock"===this.name&&(this.className+=" button-capslock"),"ShiftLeft"===this.name&&(this.className+=" button-shiftLeft"),"ShiftRight"===this.name&&(this.className+=" button-shiftRight"),"Space"===this.name&&(this.className+=" button-space")}}])&&n(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}(),i=[];[{name:"Backquote",ru:"ё",en:"`",ruShift:"~",enShift:"~"},{name:"Digit1",ru:"1",en:"1",ruShift:"!",enShift:"!"},{name:"Digit2",ru:"2",en:"2",ruShift:'"',enShift:"@"},{name:"Digit3",ru:"3",en:"3",ruShift:"№",enShift:"#"},{name:"Digit4",ru:"4",en:"4",ruShift:";",enShift:"$"},{name:"Digit5",ru:"5",en:"5",ruShift:"%",enShift:"%"},{name:"Digit6",ru:"6",en:"6",ruShift:":",enShift:"^"},{name:"Digit7",ru:"7",en:"7",ruShift:"?",enShift:"&"},{name:"Digit8",ru:"8",en:"8",ruShift:"*",enShift:"*"},{name:"Digit9",ru:"9",en:"9",ruShift:"(",enShift:"("},{name:"Digit0",ru:"0",en:"0",ruShift:")",enShift:")"},{name:"Minus",ru:"-",en:"-",ruShift:"_",enShift:"_"},{name:"Equal",ru:"=",en:"=",ruShift:"+",enShift:"+"},{name:"Backspace",ru:"Backspace",en:"Backspace"},{name:"Tab",ru:"Tab",en:"Tab"},{name:"KeyQ",ru:"й",en:"q"},{name:"KeyW",ru:"ц",en:"w"},{name:"KeyE",ru:"у",en:"e"},{name:"KeyR",ru:"к",en:"r"},{name:"KeyT",ru:"е",en:"t"},{name:"KeyY",ru:"н",en:"y"},{name:"KeyU",ru:"г",en:"u"},{name:"KeyI",ru:"ш",en:"i"},{name:"KeyO",ru:"щ",en:"o"},{name:"KeyP",ru:"з",en:"p"},{name:"BracketLeft",ru:"х",en:"[",enShift:"{"},{name:"BracketRight",ru:"ъ",en:"]",enShift:"}"},{name:"Backslash",ru:"\\",en:"\\",ruShift:"/",enShift:"|"},{name:"Delete",ru:"Delete",en:"Delete"},{name:"CapsLock",ru:"CapsLock",en:"CapsLock"},{name:"KeyA",ru:"ф",en:"a"},{name:"KeyS",ru:"ы",en:"s"},{name:"KeyD",ru:"в",en:"d"},{name:"KeyF",ru:"а",en:"f"},{name:"KeyG",ru:"п",en:"g"},{name:"KeyH",ru:"р",en:"h"},{name:"KeyJ",ru:"о",en:"j"},{name:"KeyK",ru:"л",en:"k"},{name:"KeyL",ru:"д",en:"l"},{name:"Semicolon",ru:"ж",en:";",enShift:":"},{name:"Quote",ru:"э",en:"''",enShift:'"'},{name:"Enter",ru:"Enter",en:"Enter"},{name:"ShiftLeft",ru:"Shift",en:"Shift"},{name:"KeyZ",ru:"я",en:"z"},{name:"KeyX",ru:"ч",en:"x"},{name:"KeyC",ru:"с",en:"c"},{name:"KeyV",ru:"м",en:"v"},{name:"KeyB",ru:"и",en:"b"},{name:"KeyN",ru:"т",en:"n"},{name:"KeyM",ru:"ь",en:"m"},{name:"Comma",ru:"б",en:",",enShift:"<"},{name:"Period",ru:"ю",en:".",enShift:">"},{name:"Slash",ru:".",en:"/",ruShift:",",enShift:"?"},{name:"ArrowUp",ru:"&#8593;",en:"&#8593;"},{name:"ShiftRight",ru:"Shift",en:"Shift"},{name:"ControlLeft",ru:"Ctrl",en:"Ctrl"},{name:"MetaLeft",ru:"Win",en:"Win"},{name:"AltLeft",ru:"Alt",en:"Alt"},{name:"Space",ru:"",en:""},{name:"AltRight",ru:"Alt",en:"Alt"},{name:"ArrowLeft",ru:"&#8592;",en:"&#8592;"},{name:"ArrowDown",ru:"&#8595;",en:"&#8595;"},{name:"ArrowRight",ru:"&#8594;",en:"&#8594;"},{name:"ControlRight",ru:"Ctrl",en:"Ctrl"}].forEach((function(e){var t=new a(e);t.className(),i.push(t)}));const r=i;var s="en";window.addEventListener("beforeunload",(function(){localStorage.setItem("lang",s)})),window.addEventListener("load",(function(){localStorage.getItem("lang")&&(s=localStorage.getItem("lang")),o(r)})),["<h1>Virtual Keyboard</h1>",'<textarea class="input" autofocus></textarea>',new t("keyboard").createKeyboard(),"<p>This keyboard is created in Windows.<br> To swicth languages use <b>LeftShift + LeftCtrl</b></p>"].forEach((function(e){return t=e,void(document.querySelector("body").innerHTML+=t);var t}));var u=document.querySelector("#keyboard");function o(e,t){if("shift"===t){var n="".concat(s,"Shift");u.innerHTML="",e.forEach((function(e){u.innerHTML+='<div class="'.concat(e.className,'" data-name=').concat(e.name,">").concat(e[n]?e[n]:e.name.startsWith("Key")?e[s].toUpperCase():e[s],"</div>")}))}else"capslock"===t?(u.innerHTML="",e.forEach((function(e){u.innerHTML+='<div class="'.concat(e.className,'" data-name=').concat(e.name,">").concat(e.name.startsWith("Key")||e.name.startsWith("Backquote")?e[s].toUpperCase():e[s],"</div>")}))):(u.innerHTML="",e.forEach((function(e){u.innerHTML+='<div class="'.concat(e.className,'" data-name=').concat(e.name,">").concat(e[s],"</div>")})))}var c=document.querySelector(".input");c.value="";var m=null,f=!1,l=!1;function h(e){if(e.classList.add("button-active"),"Space"===e.dataset.name){var t=c.value.split(""),n=c.selectionStart;t.splice(n,0," "),c.value=t.join(""),c.focus(),c.setSelectionRange(n+1,n+1)}else if("Enter"===e.dataset.name){var a=c.value.split(""),i=c.selectionStart;a.splice(i,0,"\r\n"),c.value=a.join(""),c.focus(),c.setSelectionRange(i+1,i+1)}else if("Backspace"===e.dataset.name){var u=c.value.split(""),m=c.selectionStart;m>0&&(u.splice(m-1,1),c.value=u.join(""),c.focus(),c.setSelectionRange(m-1,m-1))}else if("Delete"===e.dataset.name){var h=c.value.split(""),d=c.selectionStart;d<h.length&&(h.splice(d,1),c.value=h.join(""),c.focus(),c.setSelectionRange(d,d))}else if("Tab"===e.dataset.name){var S=c.value.split(""),p=c.selectionStart;S.splice(p,0,"\t"),c.value=S.join(""),c.focus(),c.setSelectionRange(p+1,p+1)}else if("ShiftLeft"===e.dataset.name||"ShiftRight"===e.dataset.name)"ShiftLeft"===e.dataset.name&&(f=!0),o(r,"shift");else if("ControlLeft"===e.dataset.name&&f)s="ru"===s?"en":"ru",l?o(r,"capslock"):o(r);else if("CapsLock"===e.dataset.name)l?(l=!1,o(r)):(l=!0,o(r,"capslock"));else if("ControlLeft"!==e.dataset.name&&"ShiftLeft"!==e.dataset.name&&"MetaLeft"!==e.dataset.name&&"ControlRight"!==e.dataset.name&&"ShiftRight"!==e.dataset.name&&"AltLeft"!==e.dataset.name&&"AltRight"!==e.dataset.name){var v=c.value.split(""),y=c.selectionStart;v.splice(y,0,e.innerText),c.value=v.join(""),c.focus(),c.setSelectionRange(y+1,y+1)}}function d(e){e.classList.remove("button-active"),"ShiftLeft"!==e.dataset.name&&"ShiftRight"!==e.dataset.name||("ShiftLeft"===e.dataset.name&&(f=!1),l?o(r,"capslock"):o(r))}u.addEventListener("mousedown",(function(e){e.target.hasAttribute("data-name")&&h(m=e.target)})),u.addEventListener("mouseup",(function(){d(m)})),document.addEventListener("keydown",(function(e){e.preventDefault(),h(Array.from(document.querySelectorAll("div[data-name]")).find((function(t){return t.dataset.name===e.code})))})),document.addEventListener("keyup",(function(e){d(Array.from(document.querySelectorAll("div[data-name]")).find((function(t){return t.dataset.name===e.code})))}))})();