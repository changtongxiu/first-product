(function(window){var svgSprite='<svg><symbol id="icon-fanhui" viewBox="0 0 1024 1024"><path d="M749.136842 1024 237.136842 512 746.442105 0l37.726316 37.726316L309.894737 512l476.968421 474.273684L749.136842 1024zM749.136842 1024"  ></path></symbol><symbol id="icon-fanhui1" viewBox="0 0 1024 1024"><path d="M129.465 495.738c-11.408 11.408-11.408 29.855 0 41.142l351.952 351.952c11.408 11.408 29.855 11.408 41.142 0 5.703-5.703 8.496-13.107 8.496-20.631s-2.791-14.928-8.496-20.631l-302.194-302.194h650.627c16.142 0 29.127-12.986 29.127-29.127s-12.986-29.127-29.127-29.127h-650.627l302.194-302.194c5.703-5.703 8.496-13.107 8.496-20.631s-2.791-14.928-8.496-20.631c-11.408-11.408-29.855-11.408-41.142 0l-351.952 352.074z" fill="" ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)