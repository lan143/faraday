(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();var de,k,_r,Y,us,br,$r,$e,Zt,Nt,vr,Ie,Pe,Ce,re={},ie=[],fi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ce=Array.isArray;function J(e,t){for(var s in t)e[s]=t[s];return e}function Oe(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function mi(e,t,s){var r,i,n,a={};for(n in t)n=="key"?r=t[n]:n=="ref"?i=t[n]:a[n]=t[n];if(arguments.length>2&&(a.children=arguments.length>3?de.call(arguments,2):s),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)a[n]===void 0&&(a[n]=e.defaultProps[n]);return Yt(e,a,r,i,null)}function Yt(e,t,s,r,i){var n={type:e,props:t,key:s,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++_r,__i:-1,__u:0};return i==null&&k.vnode!=null&&k.vnode(n),n}function q(e){return e.children}function Gt(e,t){this.props=e,this.context=t}function mt(e,t){if(t==null)return e.__?mt(e.__,e.__i+1):null;for(var s;t<e.__k.length;t++)if((s=e.__k[t])!=null&&s.__e!=null)return s.__e;return typeof e.type=="function"?mt(e):null}function gi(e){if(e.__P&&e.__d){var t=e.__v,s=t.__e,r=[],i=[],n=J({},t);n.__v=t.__v+1,k.vnode&&k.vnode(n),Le(e.__P,n,t,e.__n,e.__P.namespaceURI,32&t.__u?[s]:null,r,s??mt(t),!!(32&t.__u),i),n.__v=t.__v,n.__.__k[n.__i]=n,Er(r,n,i),t.__e=t.__=null,n.__e!=s&&yr(n)}}function yr(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),yr(e)}function ps(e){(!e.__d&&(e.__d=!0)&&Y.push(e)&&!ne.__r++||us!=k.debounceRendering)&&((us=k.debounceRendering)||br)(ne)}function ne(){try{for(var e,t=1;Y.length;)Y.length>t&&Y.sort($r),e=Y.shift(),t=Y.length,gi(e)}finally{Y.length=ne.__r=0}}function wr(e,t,s,r,i,n,a,d,o,h,u){var p,c,f,b,A,g,m=r&&r.__k||ie,y=t.length;for(o=_i(s,t,m,o,y),p=0;p<y;p++)(f=s.__k[p])!=null&&(c=f.__i!=-1&&m[f.__i]||re,f.__i=p,g=Le(e,f,c,i,n,a,d,o,h,u),b=f.__e,f.ref&&c.ref!=f.ref&&(c.ref&&qe(c.ref,null,f),u.push(f.ref,f.__c||b,f)),A==null&&b!=null&&(A=b),4&f.__u?(o=Ar(f,o,e),c.__e&&(c.__e=null)):typeof f.type=="function"&&g!==void 0?o=g:b&&(o=b.nextSibling),f.__u&=-7);return s.__e=A,o}function _i(e,t,s,r,i){var n,a,d,o,h,u=s.length,p=u,c=0;for(e.__k=new Array(i),n=0;n<i;n++)(a=t[n])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[n]=Yt(null,a,null,null,null):ce(a)?a=e.__k[n]=Yt(q,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[n]=Yt(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[n]=a,o=n+c,a.__=e,a.__b=e.__b+1,d=null,(h=a.__i=bi(a,s,o,p))!=-1&&(p--,(d=s[h])&&(d.__u|=2)),d==null||d.__v==null?(h==-1&&(i>u?c--:i<u&&c++),typeof a.type!="function"&&(a.__u|=4)):h!=o&&(h==o-1?c--:h==o+1?c++:(h>o?c--:c++,a.__u|=4))):e.__k[n]=null;if(p)for(n=0;n<u;n++)(d=s[n])!=null&&(2&d.__u)==0&&(d.__e==r&&(r=mt(d)),xr(d,d));return r}function Ar(e,t,s){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=Ar(r[i],t,s));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=mt(e)),t=s.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function bi(e,t,s,r){var i,n,a,d=e.key,o=e.type,h=t[s],u=h!=null&&(2&h.__u)==0;if(h===null&&d==null||u&&d==h.key&&o==h.type)return s;if(r>(u?1:0)){for(i=s-1,n=s+1;i>=0||n<t.length;)if((h=t[a=i>=0?i--:n++])!=null&&(2&h.__u)==0&&d==h.key&&o==h.type)return a}return-1}function fs(e,t,s){t[0]=="-"?e.setProperty(t,s??""):e[t]=s==null?"":typeof s!="number"||fi.test(t)?s:s+"px"}function Jt(e,t,s,r,i){var n,a;t:if(t=="style")if(typeof s=="string")e.style.cssText=s;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)s&&t in s||fs(e.style,t,"");if(s)for(t in s)r&&s[t]==r[t]||fs(e.style,t,s[t])}else if(t[0]=="o"&&t[1]=="n")n=t!=(t=t.replace(vr,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=s,s?r?s[Nt]=r[Nt]:(s[Nt]=Ie,e.addEventListener(t,n?Ce:Pe,n)):e.removeEventListener(t,n?Ce:Pe,n);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=s??"";break t}catch{}typeof s=="function"||(s==null||s===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&s==1?"":s))}}function ms(e){return function(t){if(this.l){var s=this.l[t.type+e];if(t[Zt]==null)t[Zt]=Ie++;else if(t[Zt]<s[Nt])return;return s(k.event?k.event(t):t)}}}function Le(e,t,s,r,i,n,a,d,o,h){var u,p,c,f,b,A,g,m,y,$,C,D,E,I,et,K,O=t.type;if(t.constructor!==void 0)return null;128&s.__u&&(o=!!(32&s.__u),n=[d=t.__e=s.__e]),(u=k.__b)&&u(t);t:if(typeof O=="function"){p=a.length;try{if(y=t.props,$=O.prototype&&O.prototype.render,C=(u=O.contextType)&&r[u.__c],D=u?C?C.props.value:u.__:r,s.__c?m=(c=t.__c=s.__c).__=c.__E:($?t.__c=c=new O(y,D):(t.__c=c=new Gt(y,D),c.constructor=O,c.render=vi),C&&C.sub(c),c.state||(c.state={}),c.__n=r,f=c.__d=!0,c.__h=[],c._sb=[]),$&&c.__s==null&&(c.__s=c.state),$&&O.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=J({},c.__s)),J(c.__s,O.getDerivedStateFromProps(y,c.__s))),b=c.props,A=c.state,c.__v=t,f)$&&O.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),$&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if($&&O.getDerivedStateFromProps==null&&y!==b&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(y,D),t.__v==s.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(y,c.__s,D)===!1){t.__v!=s.__v&&(c.props=y,c.state=c.__s,c.__d=!1),t.__e=s.__e,t.__k=s.__k,t.__k.some(function(B){B&&(B.__=t)}),ie.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&a.push(c),d=mt(s);break t}c.componentWillUpdate!=null&&c.componentWillUpdate(y,c.__s,D),$&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(b,A,g)})}if(c.context=D,c.props=y,c.__P=e,c.__e=!1,E=k.__r,I=0,$)c.state=c.__s,c.__d=!1,E&&E(t),u=c.render(c.props,c.state,c.context),ie.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,E&&E(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++I<25);c.state=c.__s,c.getChildContext!=null&&(r=J(J({},r),c.getChildContext())),$&&!f&&c.getSnapshotBeforeUpdate!=null&&(g=c.getSnapshotBeforeUpdate(b,A)),et=u!=null&&u.type===q&&u.key==null?kr(u.props.children):u,d=wr(e,ce(et)?et:[et],t,s,r,i,n,a,d,o,h),c.base=t.__e,t.__u&=-161,c.__h.length&&a.push(c),m&&(c.__E=c.__=null)}catch(B){if(a.length=p,t.__v=null,o||n!=null){if(B.then){for(t.__u|=o?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;n!=null&&(n[n.indexOf(d)]=null),t.__e=d}else if(n!=null)for(K=n.length;K--;)Oe(n[K])}else t.__e=s.__e;t.__k==null&&(t.__k=s.__k||[]),B.then||Sr(t),k.__e(B,t,s)}}else n==null&&t.__v==s.__v?(t.__k=s.__k,t.__e=s.__e):d=t.__e=$i(s.__e,t,s,r,i,n,a,o,h);return(u=k.diffed)&&u(t),128&t.__u?void 0:d}function Sr(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Sr))}function Er(e,t,s){for(var r=0;r<s.length;r++)qe(s[r],s[++r],s[++r]);k.__c&&k.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(n){n.call(i)})}catch(n){k.__e(n,i.__v)}})}function kr(e){return typeof e!="object"||e==null||e.__b>0?e:ce(e)?e.map(kr):e.constructor!==void 0?null:J({},e)}function $i(e,t,s,r,i,n,a,d,o){var h,u,p,c,f,b,A,g=s.props||re,m=t.props,y=t.type;if(y=="svg"?i="http://www.w3.org/2000/svg":y=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((f=n[h])&&"setAttribute"in f==!!y&&(y?f.localName==y:f.nodeType==3)){e=f,n[h]=null;break}}if(e==null){if(y==null)return document.createTextNode(m);e=document.createElementNS(i,y,m.is&&m),d&&(k.__m&&k.__m(t,n),d=!1),n=null}if(y==null)g===m||d&&e.data==m||(e.data=m);else{if(n=y=="textarea"&&m.defaultValue!=null?null:n&&de.call(e.childNodes),!d&&n!=null)for(g={},h=0;h<e.attributes.length;h++)g[(f=e.attributes[h]).name]=f.value;for(h in g)f=g[h],h=="dangerouslySetInnerHTML"?p=f:h=="children"||h in m||h=="value"&&"defaultValue"in m||h=="checked"&&"defaultChecked"in m||Jt(e,h,null,f,i);for(h in m)f=m[h],h=="children"?c=f:h=="dangerouslySetInnerHTML"?u=f:h=="value"?b=f:h=="checked"?A=f:d&&typeof f!="function"||g[h]===f||Jt(e,h,f,g[h],i);if(u)d||p&&(u.__html==p.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(p&&(e.innerHTML=""),wr(t.type=="template"?e.content:e,ce(c)?c:[c],t,s,r,y=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,a,n?n[0]:s.__k&&mt(s,0),d,o),n!=null)for(h=n.length;h--;)Oe(n[h]);d&&y!="textarea"||(h="value",y=="progress"&&b==null?e.removeAttribute("value"):b!=null&&(b!==e[h]||y=="progress"&&!b||y=="option"&&b!=g[h])&&Jt(e,h,b,g[h],i),h="checked",A!=null&&A!=e[h]&&Jt(e,h,A,g[h],i))}return e}function qe(e,t,s){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){k.__e(i,s)}}function xr(e,t,s){var r,i;if(k.unmount&&k.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||qe(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){k.__e(n,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&xr(r[i],t,s||typeof e.type!="function");s||Oe(e.__e),e.__c=e.__=e.__e=void 0}function vi(e,t,s){return this.constructor(e,s)}function yi(e,t,s){var r,i,n,a;t==document&&(t=document.documentElement),k.__&&k.__(e,t),i=(r=!1)?null:t.__k,n=[],a=[],Le(t,e=t.__k=mi(q,null,[e]),i||re,re,t.namespaceURI,i?null:t.firstChild?de.call(t.childNodes):null,n,i?i.__e:t.firstChild,r,a),Er(n,e,a),e.props.children=null}de=ie.slice,k={__e:function(e,t,s,r){for(var i,n,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(d){e=d}throw e}},_r=0,Gt.prototype.setState=function(e,t){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=J({},this.state),typeof e=="function"&&(e=e(J({},s),this.props)),e&&J(s,e),e!=null&&this.__v&&(t&&this._sb.push(t),ps(this))},Gt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ps(this))},Gt.prototype.render=q,Y=[],br=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,$r=function(e,t){return e.__v.__b-t.__v.__b},ne.__r=0,$e=Math.random().toString(8),Zt="__d"+$e,Nt="__a"+$e,vr=/(PointerCapture)$|Capture$/i,Ie=0,Pe=ms(!1),Ce=ms(!0);var wi=0;function l(e,t,s,r,i,n){t||(t={});var a,d,o=t;if("ref"in o)for(d in o={},t)d=="ref"?a=t[d]:o[d]=t[d];var h={type:e,props:o,key:s,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--wi,__i:-1,__u:0,__source:i,__self:n};if(typeof e=="function"&&(a=e.defaultProps))for(d in a)o[d]===void 0&&(o[d]=a[d]);return k.vnode&&k.vnode(h),h}var Lt,T,ve,gs,qt=0,Pr=[],M=k,_s=M.__b,bs=M.__r,$s=M.diffed,vs=M.__c,ys=M.unmount,ws=M.__;function ze(e,t){M.__h&&M.__h(T,e,qt||t),qt=0;var s=T.__H||(T.__H={__:[],__h:[]});return e>=s.__.length&&s.__.push({}),s.__[e]}function v(e){return qt=1,Ai(Tr,e)}function Ai(e,t,s){var r=ze(Lt++,2);if(r.t=e,!r.__c&&(r.__=[Tr(void 0,t),function(d){var o=r.__N?r.__N[0]:r.__[0],h=r.t(o,d);o!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=T,!T.__f)){var i=function(d,o,h){if(!r.__c.__H)return!0;var u=!1,p=r.__c.props!==d;if(r.__c.__H.__.some(function(f){if(f.__N){u=!0;var b=f.__[0];f.__=f.__N,f.__N=void 0,b!==f.__[0]&&(p=!0)}}),n){var c=n.call(this,d,o,h);return u?c||p:c}return!u||p};T.__f=!0;var n=T.shouldComponentUpdate,a=T.componentWillUpdate;T.componentWillUpdate=function(d,o,h){if(this.__e){var u=n;n=void 0,i(d,o,h),n=u}a&&a.call(this,d,o,h)},T.shouldComponentUpdate=i}return r.__N||r.__}function W(e,t){var s=ze(Lt++,3);!M.__s&&Cr(s.__H,t)&&(s.__=e,s.u=t,T.__H.__h.push(s))}function he(e){return qt=5,We(function(){return{current:e}},[])}function We(e,t){var s=ze(Lt++,7);return Cr(s.__H,t)&&(s.__=e(),s.__H=t,s.__h=e),s.__}function N(e,t){return qt=8,We(function(){return e},t)}function Si(){for(var e;e=Pr.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Xt),t.__h.some(Te),t.__h=[]}catch(s){t.__h=[],M.__e(s,e.__v)}}}M.__b=function(e){T=null,_s&&_s(e)},M.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ws&&ws(e,t)},M.__r=function(e){bs&&bs(e),Lt=0;var t=(T=e.__c).__H;t&&(ve===T?(t.__h=[],T.__h=[],t.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(t.__h.some(Xt),t.__h.some(Te),t.__h=[],Lt=0)),ve=T},M.diffed=function(e){$s&&$s(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Pr.push(t)!==1&&gs===M.requestAnimationFrame||((gs=M.requestAnimationFrame)||Ei)(Si)),t.__H.__.some(function(s){s.u&&(s.__H=s.u,s.u=void 0)})),ve=T=null},M.__c=function(e,t){t.some(function(s){try{s.__h.some(Xt),s.__h=s.__h.filter(function(r){return!r.__||Te(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],M.__e(r,s.__v)}}),vs&&vs(e,t)},M.unmount=function(e){ys&&ys(e);var t,s=e.__c;s&&s.__H&&(s.__H.__.some(function(r){try{Xt(r)}catch(i){t=i}}),s.__H=void 0,t&&M.__e(t,s.__v))};var As=typeof requestAnimationFrame=="function";function Ei(e){var t,s=function(){clearTimeout(r),As&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(s,35);As&&(t=requestAnimationFrame(s))}function Xt(e){var t=T,s=e.__c;typeof s=="function"&&(e.__c=void 0,s()),T=t}function Te(e){var t=T;e.__c=e.__(),T=t}function Cr(e,t){return!e||e.length!==t.length||t.some(function(s,r){return s!==e[r]})}function Tr(e,t){return typeof t=="function"?t(e):t}const F="Device returned an empty response.",Fe="Could not reach the device. Check that you are connected to its network and try again.",ki={},_={mqtt:{hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[9600,19200,38400,57600,115200],addressMin:1,addressMax:247},meter:{ctRatioMin:0,ctRatioMax:65535,syncMin:0}};function Be(){return{ok:!1,message:Fe}}function xi(e){try{const t=JSON.parse(e);if(t&&typeof t=="object"&&"message"in t){const s=t.message;if(typeof s=="string"&&s)return s}}catch{}}async function je(e){let t=`Request failed (HTTP ${e.status}).`;try{const s=await e.text();s&&(t=xi(s)??t)}catch{}return{ok:!1,status:e.status,message:t}}async function $t(e,t){let s;try{s=await fetch(e,{headers:{Accept:"application/json"}})}catch{return Be()}if(!s.ok)return je(s);let r;try{r=await s.text()}catch{return{ok:!1,status:s.status,message:Fe}}if(!r.trim())return{ok:!1,status:s.status,message:t};try{return{ok:!0,data:JSON.parse(r)}}catch{return{ok:!1,status:s.status,message:t}}}async function Mr(e,t){let s;try{s=await fetch(e,t)}catch{return Be()}if(!s.ok)return je(s);try{await s.text()}catch{}return{ok:!0,data:ki}}function Pi(e,t){return Mr(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()})}async function Ve(e,t,s){let r;try{r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)})}catch{return Be()}if(!r.ok)return je(r);let i;try{i=await r.text()}catch{return{ok:!1,status:r.status,message:Fe}}if(!i.trim())return{ok:!1,status:r.status,message:s};try{return{ok:!0,data:JSON.parse(i)}}catch{return{ok:!1,status:r.status,message:s}}}function Ur(){return $t("/api/status",F)}function Nr(){return $t("/healthcheck/healty",F)}function Ci(){return $t("/healthcheck/ready",F)}function Ti(){return Mr("/api/reboot",{method:"POST"})}function Mi(){return $t("/api/settings",F)}function st(e,t,s,r=!1){if(typeof e!="string")throw new Error(`${t} is required.`);if(!r&&e.length===0)throw new Error(`${t} must not be empty.`);if(e.length>s)throw new Error(`${t} must be at most ${s} characters.`);return e}function Ui(e){const t=st(e.host,"MQTT host",_.mqtt.hostMax);if(typeof e.port!="number"||!Number.isInteger(e.port)||e.port<1||e.port>65535)throw new Error("MQTT port must be an integer between 1 and 65535.");const s=st(e.login,"MQTT login",_.mqtt.loginMax,!0),r=st(e.password,"MQTT password",_.mqtt.passwordMax,!0),i=st(e.haDiscoveryPrefix,"HA discovery prefix",_.mqtt.haDiscoveryPrefixMax);if(typeof e.mqttIsHADiscovery!="boolean")throw new Error("HA discovery flag must be true or false.");const n=st(e.stateTopic,"State topic",_.mqtt.topicMax),a=st(e.commandTopic,"Command topic",_.mqtt.topicMax),d=st(e.statusTopic,"Status topic",_.mqtt.topicMax),o=new URLSearchParams;return o.set("host",t),o.set("port",String(e.port)),o.set("login",s),o.set("password",r),o.set("haDiscoveryPrefix",i),o.set("mqttIsHADiscovery",e.mqttIsHADiscovery?"true":"false"),o.set("stateTopic",n),o.set("commandTopic",a),o.set("statusTopic",d),Pi("/api/settings/mqtt",o)}function Ni(){return $t("/api/settings/modbus",F)}function Ri(e){if(!_.modbus.speeds.includes(e.modbusSpeed))throw new Error(`Modbus speed must be one of ${_.modbus.speeds.join(", ")}.`);if(!Number.isInteger(e.map12eAddress)||e.map12eAddress<_.modbus.addressMin||e.map12eAddress>_.modbus.addressMax)throw new Error(`MAP12E address must be an integer between ${_.modbus.addressMin} and ${_.modbus.addressMax}.`);return Ve("/api/settings/modbus",{modbusSpeed:e.modbusSpeed,map12eAddress:e.map12eAddress},F)}function Ss(){return $t("/api/settings/meter",F)}function Es(e){const t={};if(e.ct1Ratio!==void 0){if(!Number.isInteger(e.ct1Ratio)||e.ct1Ratio<_.meter.ctRatioMin||e.ct1Ratio>_.meter.ctRatioMax)throw new Error(`CT ratio must be an integer between ${_.meter.ctRatioMin} and ${_.meter.ctRatioMax}.`);t.ct1Ratio=e.ct1Ratio}if(e.energySyncValue!==void 0){if(!Number.isFinite(e.energySyncValue)||e.energySyncValue<_.meter.syncMin)throw new Error("Energy sync value must be a number greater than or equal to 0.");t.energySyncValue=e.energySyncValue}if(t.ct1Ratio===void 0&&t.energySyncValue===void 0)throw new Error("ct1Ratio or energySyncValue required.");return Ve("/api/settings/meter",t,F)}function ks(){return $t("/api/controls",F)}function Hi(e){const t={};if(e.ventilation!==void 0){if(typeof e.ventilation!="boolean")throw new Error("Ventilation must be true or false.");t.ventilation=e.ventilation}if(e.light!==void 0){if(typeof e.light!="boolean")throw new Error("Light must be true or false.");t.light=e.light}if(t.ventilation===void 0&&t.light===void 0)throw new Error("ventilation or light required.");return Ve("/api/controls",t,F)}function Di({tabs:e,active:t,onSelect:s}){return l("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:e.map(r=>l("button",{type:"button",role:"tab",id:`tab-${r.id}`,"aria-selected":r.id===t,"aria-controls":`panel-${r.id}`,class:r.id===t?"active":void 0,onClick:()=>s(r.id),children:r.label},r.id))})}function P({kind:e="info",message:t,onClose:s}){return l("div",{class:`banner banner-${e}`,role:"status",children:[l("span",{children:t}),s?l("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:s,children:"×"}):null]})}function Ii(e){switch(e){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function H({children:e,variant:t="default",type:s="button",disabled:r,title:i,onClick:n}){return l("button",{type:s,class:Ii(t),disabled:r,title:i,onClick:n,children:e})}function Oi(e){return l(H,{...e,variant:"danger"})}function z({title:e,children:t,class:s}){return l("section",{class:s?`card ${s}`:"card",children:[e?l("h2",{children:e}):null,t]})}const ye=2e3,Li=12e4;function qi(){const[e,t]=v("idle"),s=he(0);W(()=>{if(e!=="rebooting")return;let a=!1,d;const o=()=>{Nr().then(h=>{if(!a){if(h.ok){t("ready");return}if(s.current+=1,s.current*ye>=Li){t("timeout");return}d=window.setTimeout(o,ye)}})};return d=window.setTimeout(o,ye),()=>{a=!0,d!==void 0&&window.clearTimeout(d)}},[e]);const r=N(()=>{s.current=0,t("rebooting")},[]),i=N(()=>t("idle"),[]),n=N(()=>{s.current=0,t("rebooting")},[]);return We(()=>({phase:e,start:r,dismiss:i,retry:n}),[e,r,i,n])}function zi({flow:e}){return e.phase==="idle"?null:l("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:l("div",{class:"reboot-dialog card",children:[l("h2",{children:"Device is rebooting"}),e.phase==="rebooting"?l(q,{children:[l("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),l("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,e.phase==="ready"?l(q,{children:[l(P,{kind:"success",message:"The device is back online."}),l("div",{class:"form-actions",children:l(H,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,e.phase==="timeout"?l(q,{children:[l(P,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),l("div",{class:"form-actions",children:[l(H,{onClick:e.retry,children:"Keep waiting"}),l(H,{onClick:e.dismiss,children:"Dismiss"})]})]}):null]})})}const Wi=1e4;function Fi(e){const t=Math.max(0,Math.floor(e)),s=Math.floor(t/86400),r=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),n=t%60,a=[];return s&&a.push(`${s}d`),(s||r)&&a.push(`${r}h`),(s||r||i)&&a.push(`${i}m`),a.push(`${n}s`),a.join(" ")}function Bi(e){return Number.isFinite(e)?`${Math.round(e/1024)} KB (${Math.round(e)} bytes)`:String(e)}function ji(){const[e,t]=v(null),[s,r]=v(null),[i,n]=v(!1),[a,d]=v(null),[o,h]=v(null),[u,p]=v(!0),[c,f]=v(null),[b,A]=v(!1),g=qi(),m=N(async()=>{const E=await Ur();E.ok?(t(E.data),r(null)):r(E.message),n(!0)},[]),y=N(async()=>{p(!0);const[E,I]=await Promise.all([Nr(),Ci()]);d(E),h(I),p(!1)},[]);W(()=>{m();const E=window.setInterval(()=>{m()},Wi);return()=>window.clearInterval(E)},[m]),W(()=>{y()},[y]);const $=N(async()=>{if(!window.confirm("Reboot the device now? It will be offline for about 20-60 seconds."))return;f(null),A(!0);const I=await Ti();A(!1),I.ok?g.start():f(I.message)},[g.start]),C=u&&!a?l("p",{class:"muted",children:"Checking device health…"}):a?a.ok?l(P,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):l(P,{kind:"error",message:a.message}):null,D=o?o.ok?l(P,{kind:o.data.ready?"success":"info",message:o.data.ready?"All registered services are ready.":`Not ready: ${o.data.message}`}):o.status===500?l(P,{kind:"info",message:`Not ready: ${o.message}`}):l(P,{kind:"error",message:o.message}):null;return l("div",{class:"stack",children:[l(z,{title:"Device",children:[i?s?l(q,{children:[l(P,{kind:"error",message:s}),l("div",{class:"form-actions",children:l(H,{onClick:()=>{m()},children:"Retry"})})]}):e?l("dl",{class:"kv",children:[l("dt",{children:"Firmware"}),l("dd",{children:e.fwVersion??"—"}),l("dt",{children:"Free heap"}),l("dd",{children:Bi(e.freeHeap)}),l("dt",{children:"Uptime"}),l("dd",{children:Fi(e.uptime)}),l("dt",{children:"Last reset reason"}),l("dd",{children:e.lastResetReason})]}):null:l("p",{class:"muted",children:"Loading status…"}),l("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),l(z,{title:"Health",children:[C,D,l("div",{class:"form-actions",children:l(H,{onClick:()=>{y()},disabled:u,children:u?"Checking…":"Refresh health"})})]}),l(z,{title:"Maintenance",children:[l("p",{class:"muted",children:"A reboot briefly interrupts the device. Configuration changes saved on the other tabs only take effect after a reboot."}),c?l(P,{kind:"error",message:c,onClose:()=>f(null)}):null,l("div",{class:"form-actions",children:l(Oi,{onClick:()=>{$()},disabled:b||g.phase!=="idle",children:"Reboot device"})})]}),l(zi,{flow:g})]})}function Vi({label:e,hint:t,checked:s,disabled:r,pending:i,unknown:n,onChange:a}){return l("div",{class:`toggle${n?" toggle-unknown":""}${i?" toggle-pending":""}`,children:l("button",{type:"button",role:"switch","aria-checked":s,class:"toggle-control",disabled:r||i,title:n?"State unknown":void 0,onClick:()=>a(!s),children:[l("span",{class:"toggle-track","aria-hidden":"true",children:l("span",{class:"toggle-knob"})}),l("span",{class:"toggle-text",children:[l("span",{class:"toggle-label",children:e}),t?l("span",{class:"toggle-hint",children:t}):null]})]})})}const Ji={ventilation:{value:!1,unknown:!0},light:{value:!1,unknown:!0}},Ki=[{key:"ventilation",label:"Ventilation"},{key:"light",label:"Light"}];function we(e,t){return typeof t.enabled=="boolean"?{value:t.enabled,unknown:!1}:e}function Qi(){const[e,t]=v(!1),[s,r]=v(null),[i,n]=v(Ji),[a,d]=v({ventilation:!1,light:!1}),[o,h]=v(null),[u,p]=v(!1),c=N(g=>{n(m=>({ventilation:we(m.ventilation,g.ventilation),light:we(m.light,g.light)}))},[]),f=N(async()=>{r(null);const g=await ks();g.ok?c(g.data):r(g.message),t(!0)},[c]);W(()=>{f()},[f]);const b=N(async()=>{p(!0),r(null);const g=await ks();g.ok?c(g.data):r(g.message),p(!1)},[c]),A=N(async(g,m)=>{if(a[g])return;const y=i[g];h(null),n($=>({...$,[g]:{value:m,unknown:!1}})),d($=>({...$,[g]:!0}));try{const $=await Hi({[g]:m});$.ok?n(C=>({...C,[g]:we(C[g],$.data[g])})):(n(C=>({...C,[g]:y})),h($.message))}catch($){n(C=>({...C,[g]:y})),h($ instanceof Error?$.message:String($))}finally{d($=>({...$,[g]:!1}))}},[a,i]);return e?l("div",{class:"stack",children:[s?l(q,{children:[l(P,{kind:"error",message:s}),l("div",{class:"form-actions",children:l(H,{onClick:()=>{f()},children:"Retry"})})]}):null,l(z,{title:"Controls",children:[o?l(P,{kind:"error",message:o,onClose:()=>h(null)}):null,Ki.map(({key:g,label:m})=>l(Vi,{label:m,checked:i[g].value,unknown:i[g].unknown,pending:a[g],onChange:y=>{A(g,y)}},g)),l("div",{class:"form-actions",children:l(H,{onClick:()=>{b()},disabled:u,children:u?"Refreshing…":"Refresh"})})]})]}):l(z,{title:"Controls",children:l("p",{class:"muted",children:"Loading controls…"})})}function Zi(){const e=he(null);return W(()=>{const t=document.createElement("edn-network-page");return e.current?.append(t),()=>t.remove()},[]),l("div",{ref:e})}const Yi={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:"",statusTopic:""};function Gi(e){const t={};e.host.trim().length===0?t.host="Host is required.":e.host.length>_.mqtt.hostMax&&(t.host=`At most ${_.mqtt.hostMax} characters.`);const s=Number(e.port);return e.port.trim()===""?t.port="Port is required.":(!Number.isInteger(s)||s<1||s>65535)&&(t.port="Port must be an integer between 1 and 65535."),e.login.length>_.mqtt.loginMax&&(t.login=`At most ${_.mqtt.loginMax} characters.`),e.password.length>_.mqtt.passwordMax&&(t.password=`At most ${_.mqtt.passwordMax} characters.`),e.haDiscoveryPrefix.trim().length===0?t.haDiscoveryPrefix="Discovery prefix is required.":e.haDiscoveryPrefix.length>_.mqtt.haDiscoveryPrefixMax&&(t.haDiscoveryPrefix=`At most ${_.mqtt.haDiscoveryPrefixMax} characters.`),e.stateTopic.trim().length===0?t.stateTopic="Required - the device crashes if the state topic is missing.":e.stateTopic.length>_.mqtt.topicMax&&(t.stateTopic=`At most ${_.mqtt.topicMax} characters.`),e.commandTopic.trim().length===0?t.commandTopic="Required - the device crashes if the command topic is missing.":e.commandTopic.length>_.mqtt.topicMax&&(t.commandTopic=`At most ${_.mqtt.topicMax} characters.`),e.statusTopic.trim().length===0?t.statusTopic="Status topic is required.":e.statusTopic.length>_.mqtt.topicMax&&(t.statusTopic=`At most ${_.mqtt.topicMax} characters.`),t}function Xi(e){return Object.keys(e).length>0}function Z({label:e,value:t,onInput:s,type:r="text",min:i,max:n,maxLength:a,autoComplete:d,error:o,help:h}){return l("label",{class:"field",children:[l("span",{class:"field-label",children:e}),l("input",{type:r,value:t,min:i,max:n,maxLength:a,autoComplete:d,"aria-invalid":o?!0:void 0,onInput:u=>s(u.currentTarget.value)}),h&&!o?l("span",{class:"field-help",children:h}):null,o?l("span",{class:"field-error",children:o}):null]})}function tn({label:e,value:t,onInput:s,maxLength:r,error:i}){const[n,a]=v(!1);return l("div",{class:"password-field",children:[l(Z,{label:e,value:t,onInput:s,type:n?"text":"password",maxLength:r,autoComplete:"new-password",error:i}),l("button",{type:"button",class:"btn reveal-toggle","aria-pressed":n,onClick:()=>a(d=>!d),children:n?"Hide":"Show"})]})}function en({label:e,checked:t,onChange:s}){return l("div",{class:"checkbox-field",children:l("label",{class:"checkbox-label",children:[l("input",{type:"checkbox",checked:t,onChange:r=>s(r.currentTarget.checked)}),l("span",{children:e})]})})}function sn(){const[e,t]=v(!1),[s,r]=v(null),[i,n]=v(Yi),[a,d]=v({}),[o,h]=v(!1),[u,p]=v(null),[c,f]=v(null),b=N(async()=>{r(null);const m=await Mi();m.ok?n({host:m.data.mqttHost,port:String(m.data.mqttPort),login:m.data.mqttLogin,password:m.data.mqttPassword,haDiscoveryPrefix:m.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:m.data.mqttIsHADiscovery,stateTopic:m.data.mqttStateTopic,commandTopic:m.data.mqttCommandTopic,statusTopic:m.data.mqttStatusTopic}):r(m.message),t(!0)},[]);W(()=>{b()},[b]);const A=m=>n(y=>({...y,...m})),g=N(async m=>{m.preventDefault();const y=Gi(i);if(d(y),p(null),f(null),!Xi(y)){h(!0);try{const $=await Ui({host:i.host,port:Number(i.port),login:i.login,password:i.password,haDiscoveryPrefix:i.haDiscoveryPrefix,mqttIsHADiscovery:i.mqttIsHADiscovery,stateTopic:i.stateTopic,commandTopic:i.commandTopic,statusTopic:i.statusTopic});$.ok?p("MQTT settings saved to flash."):f($.message)}catch($){f($ instanceof Error?$.message:String($))}h(!1)}},[i]);return e?l("div",{class:"stack",children:[l(P,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."}),s?l(q,{children:[l(P,{kind:"error",message:s}),l("div",{class:"form-actions",children:l(H,{onClick:()=>{b()},children:"Retry"})})]}):null,l(z,{title:"MQTT",children:l("form",{onSubmit:g,children:[l(Z,{label:"Host",value:i.host,onInput:m=>A({host:m}),maxLength:_.mqtt.hostMax,autoComplete:"off",error:a.host}),l(Z,{label:"Port",value:i.port,onInput:m=>A({port:m}),type:"number",min:1,max:65535,error:a.port}),l(Z,{label:"Login",value:i.login,onInput:m=>A({login:m}),maxLength:_.mqtt.loginMax,autoComplete:"off",error:a.login}),l(tn,{label:"Password",value:i.password,onInput:m=>A({password:m}),maxLength:_.mqtt.passwordMax,error:a.password}),l(Z,{label:"HA discovery prefix",value:i.haDiscoveryPrefix,onInput:m=>A({haDiscoveryPrefix:m}),maxLength:_.mqtt.haDiscoveryPrefixMax,autoComplete:"off",error:a.haDiscoveryPrefix}),l(en,{label:"Enable Home Assistant discovery",checked:i.mqttIsHADiscovery,onChange:m=>A({mqttIsHADiscovery:m})}),l(Z,{label:"State topic",value:i.stateTopic,onInput:m=>A({stateTopic:m}),maxLength:_.mqtt.topicMax,autoComplete:"off",error:a.stateTopic,help:"Must not be empty: the device crashes on a missing state topic."}),l(Z,{label:"Command topic",value:i.commandTopic,onInput:m=>A({commandTopic:m}),maxLength:_.mqtt.topicMax,autoComplete:"off",error:a.commandTopic,help:"Must not be empty: the device crashes on a missing command topic."}),l(Z,{label:"Топик статуса электричества",value:i.statusTopic,onInput:m=>A({statusTopic:m}),maxLength:_.mqtt.topicMax,autoComplete:"off",error:a.statusTopic,help:"По умолчанию: faraday/<chipID>/status."}),u?l(P,{kind:"success",message:u,onClose:()=>p(null)}):null,c?l(P,{kind:"error",message:c,onClose:()=>f(null)}):null,l("div",{class:"form-actions",children:l(H,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save MQTT"})})]})})]}):l(z,{title:"MQTT",children:l("p",{class:"muted",children:"Loading MQTT settings…"})})}const rn={modbusSpeed:String(_.modbus.speeds[0]),map12eAddress:""};function nn(e){const t={};if(e.map12eAddress.trim()==="")t.map12eAddress="Address is required.";else{const s=Number(e.map12eAddress);(!Number.isInteger(s)||s<_.modbus.addressMin||s>_.modbus.addressMax)&&(t.map12eAddress=`Address must be an integer between ${_.modbus.addressMin} and ${_.modbus.addressMax}.`)}return t}function an(e){return Object.keys(e).length>0}function on({label:e,value:t,onInput:s,type:r="text",min:i,max:n,error:a,help:d}){return l("label",{class:"field",children:[l("span",{class:"field-label",children:e}),l("input",{type:r,value:t,min:i,max:n,"aria-invalid":a?!0:void 0,onInput:o=>s(o.currentTarget.value)}),d&&!a?l("span",{class:"field-help",children:d}):null,a?l("span",{class:"field-error",children:a}):null]})}function ln({label:e,value:t,options:s,onChange:r}){return l("label",{class:"field",children:[l("span",{class:"field-label",children:e}),l("select",{value:t,onChange:i=>r(i.currentTarget.value),children:s.map(i=>l("option",{value:String(i),children:[i," baud"]},i))})]})}function dn(){const[e,t]=v(!1),[s,r]=v(null),[i,n]=v(rn),[a,d]=v({}),[o,h]=v(null),[u,p]=v(!1),[c,f]=v(null),[b,A]=v(null),g=N(async()=>{r(null);const $=await Ni();$.ok?(n({modbusSpeed:String($.data.modbusSpeed),map12eAddress:String($.data.map12eAddress)}),h($.data.map12eAddress)):r($.message),t(!0)},[]);W(()=>{g()},[g]);const m=$=>n(C=>({...C,...$})),y=N(async $=>{$.preventDefault();const C=nn(i);if(d(C),f(null),A(null),an(C))return;const D=Number(i.map12eAddress);p(!0);try{const E=await Ri({modbusSpeed:Number(i.modbusSpeed),map12eAddress:D});if(E.ok){n({modbusSpeed:String(E.data.modbusSpeed),map12eAddress:String(E.data.map12eAddress)});const I=D!==o;h(E.data.map12eAddress),f(I?"Modbus settings saved. The new speed is applied now; the address takes effect only after a reboot.":"Modbus settings saved. The new speed is applied now.")}else A(E.message)}catch(E){A(E instanceof Error?E.message:String(E))}p(!1)},[i,o]);return e?l("div",{class:"stack",children:[s?l(q,{children:[l(P,{kind:"error",message:s}),l("div",{class:"form-actions",children:l(H,{onClick:()=>{g()},children:"Retry"})})]}):null,l(z,{title:"Modbus",children:l("form",{onSubmit:y,children:[l(ln,{label:"RS-485 speed",value:i.modbusSpeed,options:_.modbus.speeds,onChange:$=>m({modbusSpeed:$})}),l(on,{label:"WB-MAP12E address",value:i.map12eAddress,onInput:$=>m({map12eAddress:$}),type:"number",min:_.modbus.addressMin,max:_.modbus.addressMax,error:a.map12eAddress,help:`Modbus unit id ${_.modbus.addressMin}-${_.modbus.addressMax}.`}),c?l(P,{kind:"success",message:c,onClose:()=>f(null)}):null,b?l(P,{kind:"error",message:b,onClose:()=>A(null)}):null,l("div",{class:"form-actions",children:l(H,{type:"submit",variant:"primary",disabled:u,children:u?"Saving…":"Save Modbus"})})]})})]}):l(z,{title:"Modbus",children:l("p",{class:"muted",children:"Loading Modbus settings…"})})}const cn="—";function xs(e){return e===null||!Number.isFinite(e)?cn:`${e.toFixed(2)} kWh`}function Ps(e){return Object.keys(e).length>0}function Cs({label:e,value:t,onInput:s,type:r="text",min:i,max:n,step:a,error:d,help:o}){return l("label",{class:"field",children:[l("span",{class:"field-label",children:e}),l("input",{type:r,value:t,min:i,max:n,step:a,"aria-invalid":d?!0:void 0,onInput:h=>s(h.currentTarget.value)}),o&&!d?l("span",{class:"field-help",children:o}):null,d?l("span",{class:"field-error",children:d}):null]})}function hn(){const[e,t]=v(!1),[s,r]=v(null),[i,n]=v(null),[a,d]=v(""),[o,h]=v({}),[u,p]=v(!1),[c,f]=v(null),[b,A]=v(null),[g,m]=v(""),[y,$]=v({}),[C,D]=v(!1),[E,I]=v(null),[et,K]=v(null),[O,B]=v(!1),be=N(async()=>{r(null);const L=await Ss();L.ok?(n(L.data),d(String(L.data.energySyncValue)),m(String(L.data.ct1Ratio))):r(L.message),t(!0)},[]);W(()=>{be()},[be]);const hi=N(async()=>{B(!0);const L=await Ss();L.ok?(n(L.data),r(null)):r(L.message),B(!1)},[]),ui=N(async L=>{L.preventDefault(),f(null),A(null);const j={},Q=Number(a);if(a.trim()===""?j.sync="Supplier reading is required.":(!Number.isFinite(Q)||Q<_.meter.syncMin)&&(j.sync="Must be a number greater than or equal to 0."),h(j),!Ps(j)){p(!0);try{const R=await Es({energySyncValue:Q});R.ok?(n(R.data),d(String(R.data.energySyncValue)),f("Sync saved. Future readings continue from the entered value; the meter counter itself is not reset.")):A(R.message)}catch(R){A(R instanceof Error?R.message:String(R))}p(!1)}},[a]),pi=N(async L=>{L.preventDefault(),I(null),K(null);const j={},Q=Number(g);if(g.trim()===""?j.ratio="CT ratio is required.":(!Number.isInteger(Q)||Q<_.meter.ctRatioMin||Q>_.meter.ctRatioMax)&&(j.ratio=`Must be an integer between ${_.meter.ctRatioMin} and ${_.meter.ctRatioMax}.`),$(j),!Ps(j)){D(!0);try{const R=await Es({ct1Ratio:Q});R.ok?(n(R.data),m(String(R.data.ct1Ratio)),I("CT ratio written to the meter and applied immediately. Re-sync the supplier energy afterwards.")):K(R.message)}catch(R){K(R instanceof Error?R.message:String(R))}D(!1)}},[g]);return e?l("div",{class:"stack",children:[s?l(q,{children:[l(P,{kind:"error",message:s}),l("div",{class:"form-actions",children:l(H,{onClick:()=>{be()},children:"Retry"})})]}):null,l(z,{title:"Supplier energy sync",children:[l("dl",{class:"kv",children:[l("dt",{children:"Meter energy"}),l("dd",{children:xs(i?.meterEnergy??null)}),l("dt",{children:"Supplier energy"}),l("dd",{children:xs(i?.supplierEnergy??null)})]}),l("p",{class:"muted mt",children:"Meter counters are read-only and cannot be reset by the firmware. A sync stores the entered supplier kWh reading together with the device counter at that moment, so Home Assistant reports the entered value plus consumption since the sync."}),l("form",{onSubmit:ui,class:"mt",children:[l(Cs,{label:"Supplier reading, kWh",value:a,onInput:d,type:"number",min:_.meter.syncMin,step:"0.01",error:o.sync}),c?l(P,{kind:"success",message:c,onClose:()=>f(null)}):null,b?l(P,{kind:"error",message:b,onClose:()=>A(null)}):null,l("div",{class:"form-actions",children:[l(H,{type:"submit",variant:"primary",disabled:u,children:u?"Syncing…":"Sync"}),l(H,{onClick:()=>{hi()},disabled:O,children:O?"Refreshing…":"Refresh"})]})]})]}),l(z,{title:"Current transformer",children:l("form",{onSubmit:pi,children:[l(Cs,{label:"CT1 ratio",value:g,onInput:m,type:"number",min:_.meter.ctRatioMin,max:_.meter.ctRatioMax,error:y.ratio,help:"Integer 0-65535. 0 disables the ratio (direct measurement)."}),l("p",{class:"muted",children:"The ratio is written to the meter immediately and applied by the meter itself to current, power and energy. Re-sync the supplier energy after changing it."}),E?l(P,{kind:"success",message:E,onClose:()=>I(null)}):null,et?l(P,{kind:"error",message:et,onClose:()=>K(null)}):null,l("div",{class:"form-actions",children:l(H,{type:"submit",variant:"primary",disabled:C,children:C?"Saving…":"Save ratio"})})]})})]}):l(z,{title:"Meter",children:l("p",{class:"muted",children:"Loading meter settings…"})})}const un="Download a zip of everything the device has stored: config.bin. It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e faraday -t uploadfs) ERASE LittleFS, so /config.bin is gone.",pn="Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.",fn="Uploading this archive REPLACES config.bin on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",mn="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function gn(){const e=he(null);return W(()=>{const t=document.createElement("edc-config-backup-page");return t.setAttribute("device-name","Faraday"),t.setAttribute("archive-file-name","faraday-config.zip"),t.setAttribute("zip-notes",un),t.setAttribute("bin-notes",pn),t.setAttribute("zip-confirm-text",fn),t.setAttribute("bin-confirm-text",mn),e.current?.append(t),()=>t.remove()},[]),l("div",{ref:e})}function _n(){const e=he(null);return W(()=>{const t=document.createElement("edu-log-settings-page");return t.setAttribute("device-name","Faraday"),e.current?.append(t),()=>t.remove()},[]),l("div",{ref:e})}const bn=[{id:"status",label:"Status"},{id:"controls",label:"Controls"},{id:"network",label:"Network"},{id:"mqtt",label:"MQTT"},{id:"modbus",label:"Modbus"},{id:"meter",label:"Meter"},{id:"config",label:"Config"},{id:"logger",label:"Log"}];function $n(e){switch(e){case"status":return l(ji,{});case"controls":return l(Qi,{});case"network":return l(Zi,{});case"mqtt":return l(sn,{});case"modbus":return l(dn,{});case"meter":return l(hn,{});case"config":return l(gn,{});case"logger":return l(_n,{})}}function vn(){const[e,t]=v("status"),[s,r]=v(null);return W(()=>{let i=!0;return Ur().then(n=>{i&&n.ok&&n.data.fwVersion&&r(n.data.fwVersion)}),()=>{i=!1}},[]),l(q,{children:[l("header",{class:"app-header",children:l("div",{class:"brand",children:[l("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:l("path",{fill:"currentColor",d:"M13 2 4.5 13.2h5.2L8 22l9-12.1h-5.4z"})}),l("h1",{children:"Faraday"})]})}),l(Di,{tabs:bn,active:e,onSelect:t}),l("main",{class:"tab-content",id:`panel-${e}`,role:"tabpanel","aria-labelledby":`tab-${e}`,children:$n(e)}),l("footer",{class:"app-footer",children:l("div",{class:"versions",children:[l("span",{class:"hint",children:"offline device panel"}),l("span",{class:"hint version",children:["FW ",s??"—"]}),l("span",{class:"hint version",children:["UI ","e3fd38e-dirty"]})]})})]})}function yn(e){if(e&&typeof e=="object"&&"error"in e){let t=e.error;if(typeof t=="string"&&t.length>0)return t}}function Rr(e={}){let t=e.baseUrl??"",s=e.headers??{};async function r(i,n){let a;try{a=await fetch(`${t}${i}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...s}})}catch(u){return n?.signal?.aborted===!0||typeof u=="object"&&u&&u.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let d=await a.text().catch(()=>""),o,h=!1;if(d.length>0)try{o=JSON.parse(d),h=!0}catch{h=!1}if(!a.ok){let u=yn(o);return{ok:!1,status:a.status,message:u??`Request failed with HTTP ${a.status}.`}}return h?{ok:!0,data:o}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(i){return r("/api/network/settings",{signal:i})},saveSettings(i,n){return r("/api/network/settings",{method:"POST",body:JSON.stringify(i),signal:n})},getStatus(i){return r("/api/network/status",{signal:i})},wifiList(i){return r("/api/wifi/list",{signal:i})}}}var te=globalThis,Je=te.ShadowRoot&&(te.ShadyCSS===void 0||te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ke=Symbol(),Ts=new WeakMap,Hr=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==Ke)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o,s=this.t;if(Je&&t===void 0){let r=s!==void 0&&s.length===1;r&&(t=Ts.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ts.set(s,t))}return t}toString(){return this.cssText}},wn=e=>new Hr(typeof e=="string"?e:e+"",void 0,Ke),Qe=(e,...t)=>new Hr(e.length===1?e[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,Ke),An=(e,t)=>{if(Je)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let r=document.createElement("style"),i=te.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},Ms=Je?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let r of t.cssRules)s+=r.cssText;return wn(s)})(e):e,{is:Sn,defineProperty:En,getOwnPropertyDescriptor:kn,getOwnPropertyNames:xn,getOwnPropertySymbols:Pn,getPrototypeOf:Cn}=Object,ue=globalThis,Us=ue.trustedTypes,Tn=Us?Us.emptyScript:"",Mn=ue.reactiveElementPolyfillSupport,Rt=(e,t)=>e,Me={toAttribute(e,t){switch(t){case Boolean:e=e?Tn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Dr=(e,t)=>!Sn(e,t),Ns={attribute:!0,type:String,converter:Me,reflect:!1,useDefault:!1,hasChanged:Dr};Symbol.metadata??=Symbol("metadata"),ue.litPropertyMetadata??=new WeakMap;var vt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Ns){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,s);i!==void 0&&En(this.prototype,t,i)}}static getPropertyDescriptor(t,s,r){let{get:i,set:n}=kn(this.prototype,t)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){let d=i?.call(this);n?.call(this,a),this.requestUpdate(t,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ns}static _$Ei(){if(this.hasOwnProperty(Rt("elementProperties")))return;let t=Cn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Rt("properties"))){let s=this.properties,r=[...xn(s),...Pn(s)];for(let i of r)this.createProperty(i,s[i])}let t=this[Symbol.metadata];if(t!==null){let s=litPropertyMetadata.get(t);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let s=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)s.unshift(Ms(i))}else t!==void 0&&s.push(Ms(t));return s}static _$Eu(t,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return An(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute===void 0?Me:r.converter).toAttribute(s,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,s){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Me:n.converter;this._$Em=i;let d=a.fromAttribute(s,n.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(t,s,r,i=!1,n){if(t!==void 0){let a=this.constructor;if(i===!1&&(n=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??Dr)(n,s)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??s??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:a}=n,d=this[i];a!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,n,d)}}let t=!1,s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(t){}firstUpdated(t){}};vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},vt[Rt("elementProperties")]=new Map,vt[Rt("finalized")]=new Map,Mn?.({ReactiveElement:vt}),(ue.reactiveElementVersions??=[]).push("2.1.2");var Ze=globalThis,Rs=e=>e,ae=Ze.trustedTypes,Hs=ae?ae.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ir="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Or="?"+G,Un=`<${Or}>`,gt=document,zt=()=>gt.createComment(""),Wt=e=>e===null||typeof e!="object"&&typeof e!="function",Ye=Array.isArray,Nn=e=>Ye(e)||typeof e?.[Symbol.iterator]=="function",Ae=`[ 	
\f\r]`,Ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ds=/-->/g,Is=/>/g,rt=RegExp(`>|${Ae}(?:([^\\s"'>=/]+)(${Ae}*=${Ae}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Os=/'/g,Ls=/"/g,Lr=/^(?:script|style|textarea|title)$/i,w=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),At=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),qs=new WeakMap,at=gt.createTreeWalker(gt,129);function qr(e,t){if(!Ye(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Hs===void 0?t:Hs.createHTML(t)}var Rn=(e,t)=>{let s=e.length-1,r=[],i,n=t===2?"<svg>":t===3?"<math>":"",a=Ct;for(let d=0;d<s;d++){let o=e[d],h,u,p=-1,c=0;for(;c<o.length&&(a.lastIndex=c,u=a.exec(o),u!==null);)c=a.lastIndex,a===Ct?u[1]==="!--"?a=Ds:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=rt):(Lr.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=rt):a=Is:a===rt?u[0]===">"?(a=i??Ct,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?rt:u[3]==='"'?Ls:Os):a===Ls||a===Os?a=rt:a===Ds||a===Is?a=Ct:(a=rt,i=void 0);let f=a===rt&&e[d+1].startsWith("/>")?" ":"";n+=a===Ct?o+Un:p>=0?(r.push(h),o.slice(0,p)+Ir+o.slice(p)+G+f):o+G+(p===-2?d:f)}return[qr(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},Ue=class zr{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,d=t.length-1,o=this.parts,[h,u]=Rn(t,s);if(this.el=zr.createElement(h,r),at.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=at.nextNode())!==null&&o.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Ir)){let c=u[a++],f=i.getAttribute(p).split(G),b=/([.?@])?(.*)/.exec(c);o.push({type:1,index:n,name:b[2],strings:f,ctor:b[1]==="."?Dn:b[1]==="?"?In:b[1]==="@"?On:pe}),i.removeAttribute(p)}else p.startsWith(G)&&(o.push({type:6,index:n}),i.removeAttribute(p));if(Lr.test(i.tagName)){let p=i.textContent.split(G),c=p.length-1;if(c>0){i.textContent=ae?ae.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],zt()),at.nextNode(),o.push({type:2,index:++n});i.append(p[c],zt())}}}else if(i.nodeType===8)if(i.data===Or)o.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(G,p+1))!==-1;)o.push({type:7,index:n}),p+=G.length-1}n++}}static createElement(t,s){let r=gt.createElement("template");return r.innerHTML=t,r}};function St(e,t,s=e,r){if(t===At)return t;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Wt(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(t=St(e,i._$AS(e,t.values),i,r)),t}var Hn=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:s},parts:r}=this._$AD,i=(t?.creationScope??gt).importNode(s,!0);at.currentNode=i;let n=at.nextNode(),a=0,d=0,o=r[0];for(;o!==void 0;){if(a===o.index){let h;o.type===2?h=new Ge(n,n.nextSibling,this,t):o.type===1?h=new o.ctor(n,o.name,o.strings,this,t):o.type===6&&(h=new Ln(n,this,t)),this._$AV.push(h),o=r[++d]}a!==o?.index&&(n=at.nextNode(),a++)}return at.currentNode=gt,i}p(t){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(t[s]):(r._$AI(t,r,s),s+=r.strings.length-2)),s++}},Ge=class Wr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=St(this,t,s),Wt(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==At&&this._(t):t._$litType$===void 0?t.nodeType===void 0?Nn(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==S&&Wt(this._$AH)?this._$AA.nextSibling.data=t:this.T(gt.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ue.createElement(qr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new Hn(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(t){let s=qs.get(t.strings);return s===void 0&&qs.set(t.strings,s=new Ue(t)),s}k(t){Ye(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of t)i===s.length?s.push(r=new Wr(this.O(zt()),this.O(zt()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let r=Rs(t).nextSibling;Rs(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,i,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(t,s=this,r,i){let n=this.strings,a=!1;if(n===void 0)t=St(this,t,s,0),a=!Wt(t)||t!==this._$AH&&t!==At,a&&(this._$AH=t);else{let d=t,o,h;for(t=n[0],o=0;o<n.length-1;o++)h=St(this,d[r+o],s,o),h===At&&(h=this._$AH[o]),a||=!Wt(h)||h!==this._$AH[o],h===S?t=S:t!==S&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}a&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Dn=class extends pe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}},In=class extends pe{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}},On=class extends pe{constructor(t,s,r,i,n){super(t,s,r,i,n),this.type=5}_$AI(t,s=this){if((t=St(this,t,s,0)??S)===At)return;let r=this._$AH,i=t===S&&r!==S||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==S&&(r===S||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Ln=class{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){St(this,t)}},qn=Ze.litHtmlPolyfillSupport;qn?.(Ue,Ge),(Ze.litHtmlVersions??=[]).push("3.3.3");var zn=(e,t,s)=>{let r=s?.renderBefore??t,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new Ge(t.insertBefore(zt(),n),n,void 0,s??{})}return i._$AI(e),i},Xe=globalThis,dt=class extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zn(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return At}};dt._$litElement$=!0,dt.finalized=!0,Xe.litElementHydrateSupport?.({LitElement:dt});var Wn=Xe.litElementPolyfillSupport;Wn?.({LitElement:dt}),(Xe.litElementVersions??=[]).push("4.2.2");var Fn={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function Bn(e){return e===void 0||Number.isNaN(e)?"Unknown":e>=-55?"Excellent":e>=-67?"Good":e>=-75?"Fair":"Weak"}function jn(e){return e===1?"Full":e===0?"Half":`Unknown (${e})`}function Vn(e){let t=s=>String(s).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}var ct,Jn=(ct=class extends dt{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(t){t.has("pollIntervalMs")&&this.startPolling();let s=t.get("baseUrl");t.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let t=this.status;return w`
      <div class="card">
        <header class="head">
          ${t?w`<span class="badge badge-${t.mode}">${Fn[t.mode]}</span>`:w`<span class="badge badge-unknown">Unknown</span>`}
          ${t?w`<span class="state ${t.connected?"state-up":"state-down"}">
                ${t.connected?"Connected":"Disconnected"}
              </span>`:S}
          ${this.loading?w`<span class="muted loading">Refreshing…</span>`:S}
        </header>

        ${t?.fallbackAP?w`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:S}
        ${this.errorMessage?w`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:S}
        ${t?this.renderSections(t):w`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?w`Updated ${Vn(this.lastUpdated)}`:w`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(t){switch(t.mode){case"wifi":return this.renderWifi(t);case"wifi_ap":return this.renderAp(t);case"ethernet":return this.renderEthernet(t)}}renderWifi(t){return w`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",t.ssid)}
          ${this.row("Signal",t.rssi===void 0?void 0:`${t.rssi} dBm (${Bn(t.rssi)})`)}
          ${this.row("IP address",t.ip)} ${this.row("MAC address",t.mac)}
        </dl>
      </section>
    `}renderAp(t){let s=t.ap;return w`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",s?.ssid)} ${this.row("IP address",s?.ip)}
          ${this.row("Stations",s?.stations)}
        </dl>
      </section>
    `}renderEthernet(t){let s=t.eth;return w`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",s?.ip)} ${this.row("MAC address",s?.mac)}
          ${this.row("Link",s===void 0?void 0:s.linkUp?"Up":"Down")}
          ${this.row("Speed",s===void 0?void 0:`${s.speed} Mbps`)}
          ${this.row("Duplex",s===void 0?void 0:jn(s.duplex))}
        </dl>
      </section>
    `}row(t,s){return s===void 0||s===""?S:w`<dt>${t}</dt>
          <dd>${s}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Rr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let t=++this.refreshSeq;this.loading=!0;let s=await this.ensureClient().getStatus();if(t===this.refreshSeq){if(this.loading=!1,s.ok){this.status=s.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=s.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:s.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let t=Number(this.pollIntervalMs);!Number.isFinite(t)||t<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},t))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},ct.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},ct.styles=Qe`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_danger: var(--edn-danger, #dc2626);
      --_muted: var(--edn-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      max-width: 28rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    .head {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .badge {
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.03em;
      padding: 0.15rem 0.5rem;
      border-radius: 999px;
      background: #eef2ff;
      color: var(--_accent);
    }

    .badge-ethernet {
      background: #e0f2fe;
      color: #0369a1;
    }

    .badge-wifi_ap {
      background: #fef3c7;
      color: #b45309;
    }

    .badge-unknown {
      background: #f3f4f6;
      color: var(--_muted);
    }

    .state {
      font-size: 0.85rem;
      font-weight: 600;
    }

    .state-up {
      color: #15803d;
    }

    .state-down {
      color: var(--_muted);
    }

    .loading {
      font-size: 0.8rem;
      margin-left: auto;
    }

    .banner {
      margin-top: 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
    }

    .banner-warn {
      background: #fffbeb;
      border: 1px solid #fde68a;
      color: #92400e;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    section {
      margin-top: 1rem;
    }

    h2 {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin: 0 0 0.5rem;
    }

    .rows {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0.35rem 0.75rem;
      margin: 0;
    }

    dt {
      color: var(--_muted);
      font-size: 0.85rem;
    }

    dd {
      margin: 0;
      font-size: 0.9rem;
      word-break: break-word;
    }

    .muted {
      color: var(--_muted);
    }

    .foot {
      margin-top: 1rem;
      font-size: 0.75rem;
    }

    button {
      font: inherit;
      font-size: 0.8rem;
      padding: 0.25rem 0.6rem;
      border-radius: 6px;
      border: 1px solid currentColor;
      background: transparent;
      color: var(--_accent);
      cursor: pointer;
    }

    button:hover {
      background: rgba(37, 99, 235, 0.08);
    }
  `,ct);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",Jn);var Kt=32,Tt=64,Se=8,Kn=5e3,Qn=new TextEncoder;function Qt(e){return Qn.encode(e).length}function zs(e){return e.isAPMode?"ap":"station"}var ht,Zn=(ht=class extends dt{constructor(...t){super(...t),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=s=>{this.draftWifiSSID=s.target.value},this.handleWifiPasswordInput=s=>{this.draftWifiPassword=s.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=s=>{this.draftApSSID=s.target.value},this.handleApPasswordInput=s=>{this.draftApPassword=s.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=s=>{this.draftApHasPassword=s.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=s=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=s,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=s=>{s.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(t){let s=t.get("baseUrl");t.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let t=this.settings;return w`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?w`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:S}
        ${this.successMessage?w`<div class="banner banner-success" role="status">${this.successMessage}</div>`:S}
        ${t?w`${this.renderForm(t)} ${this.renderScan()}`:this.loading?w`<p class="status">Loading settings…</p>`:w`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(t){return w`
      <form @submit=${this.handleSubmit}>
        <fieldset>
          <legend>Mode</legend>
          <div class="segmented" role="group" aria-label="Network mode">
            <button
              type="button"
              class="seg ${this.draftMode==="station"?"active":""}"
              aria-pressed=${this.draftMode==="station"}
              @click=${()=>this.setMode("station")}
            >
              Station
            </button>
            <button
              type="button"
              class="seg ${this.draftMode==="ap"?"active":""}"
              aria-pressed=${this.draftMode==="ap"}
              @click=${()=>this.setMode("ap")}
            >
              Access Point
            </button>
          </div>
        </fieldset>

        ${this.draftMode==="station"?this.renderStation(t):this.renderAccessPoint(t)}

        <div class="actions">
          <button class="primary" type="submit" ?disabled=${this.submitting||!this.dirty}>
            ${this.submitting?"Saving…":"Save"}
          </button>
          ${this.dirty?w`<span class="muted">Unsaved changes</span>`:S}
        </div>
      </form>
    `}renderStation(t){return w`
      <section class="group">
        <h2>Station</h2>
        <label>
          Wi-Fi name
          <input
            name="wifiSSID"
            type="text"
            autocomplete="off"
            .value=${this.draftWifiSSID}
            @input=${this.handleWifiSSIDInput}
          />
        </label>
        ${this.renderFieldError("wifiSSID")}
        <label>
          Wi-Fi password
          <input
            name="wifiPassword"
            type="password"
            autocomplete="new-password"
            placeholder=${t.hasWifiPassword?"Leave blank to keep saved password":"No password set"}
            .value=${this.draftWifiPassword}
            @input=${this.handleWifiPasswordInput}
          />
        </label>
        ${t.hasWifiPassword?w`<p class="hint">Password saved •••• (leave blank to keep)</p>`:S}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(t){return w`
      <section class="group">
        <h2>Access point</h2>
        <label>
          Access point name
          <input
            name="wifiAPSSID"
            type="text"
            autocomplete="off"
            .value=${this.draftApSSID}
            @input=${this.handleApSSIDInput}
          />
        </label>
        ${this.renderFieldError("wifiAPSSID")}
        <label class="check">
          <input
            type="checkbox"
            .checked=${this.draftApHasPassword}
            @change=${this.handleApHasPasswordChange}
          />
          Require password
        </label>
        ${this.draftApHasPassword?w`
              <label>
                Access point password
                <input
                  name="wifiAPPassword"
                  type="password"
                  autocomplete="new-password"
                  placeholder=${t.hasWifiAPPassword?"Leave blank to keep saved password":"At least 8 characters"}
                  .value=${this.draftApPassword}
                  @input=${this.handleApPasswordInput}
                />
              </label>
              ${t.hasWifiAPPassword?w`<p class="hint">Password saved •••• (leave blank to keep)</p>`:S}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:S}
      </section>
    `}renderScan(){return w`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?w`<div class="banner banner-error" role="alert">${this.scanError}</div>`:S}
        ${this.scanResults.length>0?w`<ul class="networks">
              ${this.scanResults.map(t=>this.renderNetwork(t))}
            </ul>`:S}
      </section>
    `}renderNetwork(t){return w`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(t.ssid)}>
          <span class="ssid">${t.ssid}</span>
          <span class="meta">
            ${t.encrypted?w`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:S}
            ${t.rssi} dBm · Ch ${t.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(t){let s=this.fieldErrors[t];return s?w`<p class="field-error" role="alert">${s}</p>`:S}renderPasswordClearWarning(t){return(t==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?w`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:S}get dirty(){let t=this.settings;return t?this.draftMode!==zs(t)||this.draftWifiSSID!==t.wifiSSID||this.draftApSSID!==t.wifiAPSSID||this.draftApHasPassword!==t.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Rr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let t=++this.loadToken;this.loading=!0;let s=await this.ensureClient().getSettings();if(t!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,s.ok){this.applyServerSettings(s.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=s.message,this.emitError(s.message)}applyServerSettings(t){this.settings=t,this.settingsBaseUrl=this.baseUrl,this.draftMode=zs(t),this.draftWifiSSID=t.wifiSSID,this.draftApSSID=t.wifiAPSSID,this.draftApHasPassword=t.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let t=this.settings,s={};if(!t)return s;let r=this.draftMode==="ap";if(Qt(this.draftWifiSSID)>Kt&&(s.wifiSSID=`Wi-Fi name must be ${Kt} characters or fewer.`),Qt(this.draftApSSID)>Kt&&(s.wifiAPSSID=`Access point name must be ${Kt} characters or fewer.`),r?this.draftApSSID.length===0&&(s.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(s.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&Qt(this.draftWifiPassword)>Tt&&(s.wifiPassword=`Wi-Fi password must be ${Tt} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let i=Qt(this.draftApPassword);(i<Se||i>Tt)&&(s.wifiAPPassword=`Access point password must be ${Se}–${Tt} characters.`)}else t.hasWifiAPPassword||(s.wifiAPPassword=`Enter an access point password (${Se}–${Tt} characters).`);return s}buildPatch(){let t=this.settings,s={};if(!t)return s;let r=this.draftMode==="ap";return r!==t.isAPMode&&(s.isAPMode=r),this.draftWifiSSID!==t.wifiSSID&&(s.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(s.wifiPassword=this.draftWifiPassword),this.draftApSSID!==t.wifiAPSSID&&(s.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==t.wifiAPHasPassword&&(s.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(s.wifiAPPassword=this.draftApPassword),s}async handleSave(){if(this.submitting||!this.settings)return;let t=this.validate();if(this.fieldErrors=t,Object.keys(t).length>0)return;let s=this.buildPatch();if(Object.keys(s).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let r=await this.ensureClient().saveSettings(s);if(this.submitting=!1,r.ok){this.applyServerSettings(r.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:r.data,bubbles:!0,composed:!0}));return}let i=r.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":r.message;this.errorMessage=i,this.emitError(i)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let t=new AbortController;this.scanController=t;let s,r=new Promise(n=>{s=setTimeout(()=>{t.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},Kn)}),i=await Promise.race([this.ensureClient().wifiList(t.signal),r]);if(s!==void 0&&clearTimeout(s),this.scanController===t&&(this.scanController=void 0),this.scanning=!1,i.ok){this.scanResults=[...i.data.networks].sort((n,a)=>a.rssi-n.rssi);return}i.message!=="Request aborted."&&(this.scanError=i.message,this.emitError(i.message))}emitError(t){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:t},bubbles:!0,composed:!0}))}setMode(t){this.draftMode!==t&&(this.draftMode=t,this.fieldErrors={})}},ht.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},ht.styles=Qe`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_danger: var(--edn-danger, #dc2626);
      --_muted: var(--edn-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      max-width: 30rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h1 {
      font-size: 1rem;
      margin: 0 0 0.75rem;
    }

    h2 {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin: 0 0 0.5rem;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: space-between;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-success {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #15803d;
    }

    fieldset {
      border: 0;
      padding: 0;
      margin: 0 0 0.75rem;
    }

    legend {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
      margin-bottom: 0.35rem;
    }

    .segmented {
      display: inline-flex;
      border: 1px solid var(--_border);
      border-radius: 8px;
      overflow: hidden;
    }

    .seg {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.35rem 0.85rem;
      border: 0;
      background: transparent;
      color: var(--_muted);
      cursor: pointer;
    }

    .seg.active {
      background: var(--_accent);
      color: #ffffff;
    }

    .group {
      border-top: 1px solid var(--_border);
      padding-top: 0.75rem;
      margin-bottom: 0.75rem;
    }

    label {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.6rem;
    }

    input[type='text'],
    input[type='password'] {
      display: block;
      width: 100%;
      box-sizing: border-box;
      margin-top: 0.25rem;
      font: inherit;
      font-size: 0.9rem;
      padding: 0.4rem 0.55rem;
      border: 1px solid var(--_border);
      border-radius: 6px;
      background: #fff;
      color: inherit;
    }

    input[type='text']:focus,
    input[type='password']:focus {
      outline: 2px solid color-mix(in srgb, var(--_accent) 45%, transparent);
      outline-offset: 1px;
      border-color: var(--_accent);
    }

    .check {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.85rem;
    }

    .hint {
      font-size: 0.78rem;
      color: var(--_muted);
      margin: -0.3rem 0 0.5rem;
    }

    .field-error {
      font-size: 0.78rem;
      color: var(--_danger);
      margin: -0.3rem 0 0.6rem;
    }

    .clear-warning {
      font-size: 0.78rem;
      color: var(--_danger);
      margin: -0.3rem 0 0.6rem;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      border-top: 1px solid var(--_border);
      padding-top: 0.75rem;
    }

    button {
      font: inherit;
      font-size: 0.8rem;
      padding: 0.3rem 0.7rem;
      border-radius: 6px;
      border: 1px solid currentColor;
      background: transparent;
      color: var(--_accent);
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      background: rgba(37, 99, 235, 0.08);
    }

    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    .primary:hover:not(:disabled) {
      background: color-mix(in srgb, var(--_accent) 88%, #000);
    }

    .scan-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
    }

    .scan-head h2 {
      margin: 0;
    }

    ul.networks {
      list-style: none;
      margin: 0.5rem 0 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
    }

    .network {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;
      width: 100%;
      text-align: left;
      border: 1px solid var(--_border);
      border-radius: 6px;
      padding: 0.35rem 0.55rem;
      color: inherit;
    }

    .network .ssid {
      font-size: 0.85rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .network .meta {
      font-size: 0.75rem;
      color: var(--_muted);
      white-space: nowrap;
    }

    .lock {
      color: var(--_muted);
    }

    .muted {
      color: var(--_muted);
    }

    .status {
      font-size: 0.85rem;
      color: var(--_muted);
    }
  `,ht);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Zn);var Yn=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],ut,Gn=(ut=class extends dt{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return w`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Yn.map(t=>w`
            <button
              type="button"
              role="tab"
              id="tab-${t.id}"
              aria-controls="panel-${t.id}"
              aria-selected=${this.activeTab===t.id}
              @click=${()=>this.selectTab(t.id)}
            >
              ${t.label}
            </button>
          `)}
      </div>
      <div class="panel" id="panel-${this.activeTab}" role="tabpanel">
        ${this.renderActive()}
      </div>
    `}renderActive(){return this.activeTab==="settings"?w`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:w`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(t){this.activeTab!==t&&(this.activeTab=t,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:t},bubbles:!0,composed:!0})))}},ut.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},ut.styles=Qe`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edn-accent, #2563eb);
      --_border: #e2e5ea;
    }

    .tabs {
      display: flex;
      gap: 0.25rem;
      border-bottom: 1px solid var(--_border);
      max-width: 30rem;
    }

    [role='tab'] {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.8rem;
      border: 0;
      border-bottom: 2px solid transparent;
      background: transparent;
      color: var(--edn-muted, #6b7280);
      cursor: pointer;
      margin-bottom: -1px;
    }

    [role='tab'][aria-selected='true'] {
      color: var(--_accent);
      border-bottom-color: var(--_accent);
      font-weight: 600;
    }

    .panel {
      margin-top: 1rem;
    }
  `,ut);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",Gn);var Fr="Network request failed. Check the device connection and try again.",Xn={};function ta(e){if(e&&typeof e=="object"&&"message"in e){let t=e.message;if(typeof t=="string"&&t.length>0)return t}}function ea(e,t){return t?.aborted===!0||typeof e=="object"&&!!e&&e.name==="AbortError"}function Br(e,t){return ea(e,t)?{ok:!1,message:"Request aborted."}:{ok:!1,message:Fr}}async function jr(e,t){let s=t;try{let r=await e.text();if(r.length>0)try{s=ta(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:e.status,message:s}}async function Ws(e,t,s,r,i,n){let a;try{a=await fetch(e,{headers:{Accept:t,...i},signal:n})}catch(o){return Br(o,n)}if(!a.ok)return jr(a,a.status===404?r:`Request failed with HTTP ${a.status}.`);let d;try{d=new Uint8Array(await a.arrayBuffer())}catch{return{ok:!1,status:a.status,message:Fr}}return d.byteLength===0?{ok:!1,status:a.status,message:s}:{ok:!0,data:d}}async function Fs(e,t,s,r,i){if(t.byteLength===0)return{ok:!1,message:s};let n=new ArrayBuffer(t.byteLength);new Uint8Array(n).set(t);let a;try{a=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...r},body:n,signal:i})}catch(d){return Br(d,i)}return a.ok?(await a.text().catch(()=>""),{ok:!0,data:Xn}):jr(a,`Upload failed with HTTP ${a.status}.`)}function sa(e={}){let t=e.baseUrl??"",s=e.backupPath??"/api/config/backup",r=e.configPath??"/api/config",i=e.headers??{},n=`${t}${s}`,a=`${t}${r}`;return{downloadBackup(d){return Ws(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",i,d)},downloadConfig(d){return Ws(a,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",i,d)},uploadBackup(d,o){return Fs(n,d,"Cannot upload an empty archive.",i,o)},uploadConfig(d,o){return Fs(a,d,"Cannot upload an empty config file.",i,o)}}}var ee=globalThis,ts=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,es=Symbol(),Bs=new WeakMap,Vr=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==es)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o,s=this.t;if(ts&&t===void 0){let r=s!==void 0&&s.length===1;r&&(t=Bs.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Bs.set(s,t))}return t}toString(){return this.cssText}},ra=e=>new Vr(typeof e=="string"?e:e+"",void 0,es),ia=(e,...t)=>new Vr(e.length===1?e[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,es),na=(e,t)=>{if(ts)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let r=document.createElement("style"),i=ee.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},js=ts?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let r of t.cssRules)s+=r.cssText;return ra(s)})(e):e,{is:aa,defineProperty:oa,getOwnPropertyDescriptor:la,getOwnPropertyNames:da,getOwnPropertySymbols:ca,getPrototypeOf:ha}=Object,fe=globalThis,Vs=fe.trustedTypes,ua=Vs?Vs.emptyScript:"",pa=fe.reactiveElementPolyfillSupport,Ht=(e,t)=>e,Ne={toAttribute(e,t){switch(t){case Boolean:e=e?ua:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Jr=(e,t)=>!aa(e,t),Js={attribute:!0,type:String,converter:Ne,reflect:!1,useDefault:!1,hasChanged:Jr};Symbol.metadata??=Symbol("metadata"),fe.litPropertyMetadata??=new WeakMap;var yt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Js){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,s);i!==void 0&&oa(this.prototype,t,i)}}static getPropertyDescriptor(t,s,r){let{get:i,set:n}=la(this.prototype,t)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){let d=i?.call(this);n?.call(this,a),this.requestUpdate(t,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Js}static _$Ei(){if(this.hasOwnProperty(Ht("elementProperties")))return;let t=ha(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ht("properties"))){let s=this.properties,r=[...da(s),...ca(s)];for(let i of r)this.createProperty(i,s[i])}let t=this[Symbol.metadata];if(t!==null){let s=litPropertyMetadata.get(t);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let s=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)s.unshift(js(i))}else t!==void 0&&s.push(js(t));return s}static _$Eu(t,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return na(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute===void 0?Ne:r.converter).toAttribute(s,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,s){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Ne:n.converter;this._$Em=i;let d=a.fromAttribute(s,n.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(t,s,r,i=!1,n){if(t!==void 0){let a=this.constructor;if(i===!1&&(n=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??Jr)(n,s)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??s??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:a}=n,d=this[i];a!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,n,d)}}let t=!1,s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(t){}firstUpdated(t){}};yt.elementStyles=[],yt.shadowRootOptions={mode:"open"},yt[Ht("elementProperties")]=new Map,yt[Ht("finalized")]=new Map,pa?.({ReactiveElement:yt}),(fe.reactiveElementVersions??=[]).push("2.1.2");var ss=globalThis,Ks=e=>e,oe=ss.trustedTypes,Qs=oe?oe.createPolicy("lit-html",{createHTML:e=>e}):void 0,Kr="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,Qr="?"+X,fa=`<${Qr}>`,_t=document,Ft=()=>_t.createComment(""),Bt=e=>e===null||typeof e!="object"&&typeof e!="function",rs=Array.isArray,ma=e=>rs(e)||typeof e?.[Symbol.iterator]=="function",Ee=`[ 	
\f\r]`,Mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zs=/-->/g,Ys=/>/g,it=RegExp(`>|${Ee}(?:([^\\s"'>=/]+)(${Ee}*=${Ee}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Gs=/'/g,Xs=/"/g,Zr=/^(?:script|style|textarea|title)$/i,V=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),Et=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),tr=new WeakMap,ot=_t.createTreeWalker(_t,129);function Yr(e,t){if(!rs(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qs===void 0?t:Qs.createHTML(t)}var ga=(e,t)=>{let s=e.length-1,r=[],i,n=t===2?"<svg>":t===3?"<math>":"",a=Mt;for(let d=0;d<s;d++){let o=e[d],h,u,p=-1,c=0;for(;c<o.length&&(a.lastIndex=c,u=a.exec(o),u!==null);)c=a.lastIndex,a===Mt?u[1]==="!--"?a=Zs:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=it):(Zr.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=it):a=Ys:a===it?u[0]===">"?(a=i??Mt,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?it:u[3]==='"'?Xs:Gs):a===Xs||a===Gs?a=it:a===Zs||a===Ys?a=Mt:(a=it,i=void 0);let f=a===it&&e[d+1].startsWith("/>")?" ":"";n+=a===Mt?o+fa:p>=0?(r.push(h),o.slice(0,p)+Kr+o.slice(p)+X+f):o+X+(p===-2?d:f)}return[Yr(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},Re=class Gr{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,d=t.length-1,o=this.parts,[h,u]=ga(t,s);if(this.el=Gr.createElement(h,r),ot.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=ot.nextNode())!==null&&o.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Kr)){let c=u[a++],f=i.getAttribute(p).split(X),b=/([.?@])?(.*)/.exec(c);o.push({type:1,index:n,name:b[2],strings:f,ctor:b[1]==="."?ba:b[1]==="?"?$a:b[1]==="@"?va:me}),i.removeAttribute(p)}else p.startsWith(X)&&(o.push({type:6,index:n}),i.removeAttribute(p));if(Zr.test(i.tagName)){let p=i.textContent.split(X),c=p.length-1;if(c>0){i.textContent=oe?oe.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],Ft()),ot.nextNode(),o.push({type:2,index:++n});i.append(p[c],Ft())}}}else if(i.nodeType===8)if(i.data===Qr)o.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(X,p+1))!==-1;)o.push({type:7,index:n}),p+=X.length-1}n++}}static createElement(t,s){let r=_t.createElement("template");return r.innerHTML=t,r}};function kt(e,t,s=e,r){if(t===Et)return t;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Bt(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(t=kt(e,i._$AS(e,t.values),i,r)),t}var _a=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:s},parts:r}=this._$AD,i=(t?.creationScope??_t).importNode(s,!0);ot.currentNode=i;let n=ot.nextNode(),a=0,d=0,o=r[0];for(;o!==void 0;){if(a===o.index){let h;o.type===2?h=new is(n,n.nextSibling,this,t):o.type===1?h=new o.ctor(n,o.name,o.strings,this,t):o.type===6&&(h=new ya(n,this,t)),this._$AV.push(h),o=r[++d]}a!==o?.index&&(n=ot.nextNode(),a++)}return ot.currentNode=_t,i}p(t){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(t[s]):(r._$AI(t,r,s),s+=r.strings.length-2)),s++}},is=class Xr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=kt(this,t,s),Bt(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==Et&&this._(t):t._$litType$===void 0?t.nodeType===void 0?ma(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&Bt(this._$AH)?this._$AA.nextSibling.data=t:this.T(_t.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Re.createElement(Yr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new _a(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(t){let s=tr.get(t.strings);return s===void 0&&tr.set(t.strings,s=new Re(t)),s}k(t){rs(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of t)i===s.length?s.push(r=new Xr(this.O(Ft()),this.O(Ft()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let r=Ks(t).nextSibling;Ks(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},me=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(t,s=this,r,i){let n=this.strings,a=!1;if(n===void 0)t=kt(this,t,s,0),a=!Bt(t)||t!==this._$AH&&t!==Et,a&&(this._$AH=t);else{let d=t,o,h;for(t=n[0],o=0;o<n.length-1;o++)h=kt(this,d[r+o],s,o),h===Et&&(h=this._$AH[o]),a||=!Bt(h)||h!==this._$AH[o],h===x?t=x:t!==x&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}a&&!i&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ba=class extends me{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}},$a=class extends me{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}},va=class extends me{constructor(t,s,r,i,n){super(t,s,r,i,n),this.type=5}_$AI(t,s=this){if((t=kt(this,t,s,0)??x)===Et)return;let r=this._$AH,i=t===x&&r!==x||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==x&&(r===x||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ya=class{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){kt(this,t)}},wa=ss.litHtmlPolyfillSupport;wa?.(Re,is),(ss.litHtmlVersions??=[]).push("3.3.3");var Aa=(e,t,s)=>{let r=s?.renderBefore??t,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new is(t.insertBefore(Ft(),n),n,void 0,s??{})}return i._$AI(e),i},ns=globalThis,Dt=class extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Aa(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Et}};Dt._$litElement$=!0,Dt.finalized=!0,ns.litElementHydrateSupport?.({LitElement:Dt});var Sa=ns.litElementPolyfillSupport;Sa?.({LitElement:Dt}),(ns.litElementVersions??=[]).push("4.2.2");var er=2e3,Ea=12e4,sr="Unsupported file type. Choose a .zip full backup or a .bin config file.";function ke(e){let t=e.toLowerCase();return t.endsWith(".zip")?"archive":t.endsWith(".bin")?"config":null}function ka(e,t){if(typeof URL.createObjectURL!="function")return;let s=new ArrayBuffer(e.byteLength);new Uint8Array(s).set(e);let r=new Blob([s],{type:"application/octet-stream"}),i=URL.createObjectURL(r),n=document.createElement("a");n.href=i,n.download=t,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),0)}var pt,xa=(pt=class extends Dt{constructor(...t){super(...t),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return V`
      <div class="stack">
        <section class="card" aria-labelledby="edc-download-heading">
          <h2 id="edc-download-heading">Download backup</h2>
          ${this.renderNotice(this.downloadNotice)}
          <div class="download-row">
            <div class="download-copy">
              <strong>Full backup (.zip)</strong>
              <p class="muted">${this.effectiveZipNotes}</p>
            </div>
            <button
              type="button"
              class="primary"
              data-action="download-backup"
              ?disabled=${this.downloading||this.phase!=="idle"}
              @click=${()=>{this.handleDownload("archive")}}
            >
              ${this.downloading?"Downloading…":"Download full backup (.zip)"}
            </button>
          </div>
          <div class="download-row">
            <div class="download-copy">
              <strong>${this.binFileName} only</strong>
              <p class="muted">${this.effectiveBinNotes}</p>
            </div>
            <button
              type="button"
              data-action="download-config"
              ?disabled=${this.downloading||this.phase!=="idle"}
              @click=${()=>{this.handleDownload("config")}}
            >
              Download ${this.binFileName} only
            </button>
          </div>
        </section>

        <section class="card" aria-labelledby="edc-restore-heading">
          <h2 id="edc-restore-heading">Restore from file</h2>
          <p class="muted">
            Restore a previously downloaded .zip full backup, or a single .bin
            config file. The device validates size, version and CRC and, for a
            full archive, commits all members atomically before rebooting. A
            rejected file changes nothing.
          </p>
          <label class="field" for="edc-restore-file">
            <span class="field-label">Backup file</span>
            <input
              id="edc-restore-file"
              type="file"
              accept=".zip,.bin,application/octet-stream"
              ?disabled=${this.busy}
              @change=${t=>this.handleFileChange(t)}
            />
            ${this.fileError?V`<span class="field-error" role="alert">${this.fileError}</span>`:x}
          </label>
          ${this.selectedFile&&!this.fileError?V`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${ke(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:x}
          ${this.uploadError?V`<div class="banner banner-error" role="alert">
                ${this.uploadError}
              </div>`:x}
          <div class="form-actions">
            <button
              type="button"
              class="danger"
              data-action="upload"
              ?disabled=${!this.selectedFile||!!this.fileError||this.busy}
              @click=${()=>{this.handleUpload()}}
            >
              ${this.uploading?"Uploading…":"Upload & reboot device"}
            </button>
          </div>
        </section>
      </div>
      ${this.renderRebootOverlay()}
    `}renderNotice(t){return t?V`<div
      class="banner banner-${t.kind}"
      role=${t.kind==="error"?"alert":"status"}
    >
      ${t.message}
    </div>`:x}renderRebootOverlay(){return this.phase==="idle"?x:V`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?V`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:x}
          ${this.phase==="ready"?V`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:x}
          ${this.phase==="timeout"?V`
                <div class="banner banner-error" role="alert">
                  No response after about two minutes. Check the power and
                  network, then keep waiting or dismiss.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.retryReboot()}>
                    Keep waiting
                  </button>
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:x}
        </div>
      </div>
    `}createClient(){return sa({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(t){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let s=this.createClient(),r=t==="archive"?await s.downloadBackup():await s.downloadConfig();if(!r.ok){this.downloadNotice={kind:"error",message:r.message};return}let i=t==="archive"?this.archiveFileName:this.binFileName;ka(r.data,i),this.downloadNotice={kind:"info",message:t==="archive"?`Full backup downloaded as ${i}.`:`Config downloaded as ${i}.`}}finally{this.downloading=!1}}}handleFileChange(t){let s=t.currentTarget,r=s.files&&s.files[0]?s.files[0]:null;this.selectedFile=r,this.uploadError=null,this.fileError=r?r.size===0?"The selected file is empty.":r.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:ke(r.name)?null:sr:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let t=ke(this.selectedFile.name);if(!t)this.uploadError=sr;else if(window.confirm(t==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let s;try{s=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let r=this.createClient(),i=t==="archive"?await r.uploadBackup(s):await r.uploadConfig(s);if(!i.ok){this.uploadError=i.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:t},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let t=this.renderRoot.querySelector("#edc-restore-file");t&&(t.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},er)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let t=!1;try{let s=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(s.ok){let r=await s.json();t=!!r&&typeof r=="object"&&r.healty===!0}}catch{t=!1}this.isConnected&&this.phase==="rebooting"&&(t?this.phase="ready":(this._attempts+=1,this._attempts*er>=Ea?this.phase="timeout":this.schedulePoll()))}},pt.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},pt.styles=ia`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edc-accent, #2563eb);
      --_danger: var(--edc-danger, #dc2626);
      --_muted: var(--edc-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .stack {
      display: grid;
      gap: 1rem;
      max-width: 34rem;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h2 {
      font-size: 1rem;
      margin: 0 0 0.5rem;
    }

    p {
      margin: 0 0 0.75rem;
      font-size: 0.875rem;
      line-height: 1.45;
    }

    .muted {
      color: var(--_muted);
    }

    .form-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .download-row {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
      padding: 0.75rem 0;
      border-top: 1px solid var(--_border);
    }

    .download-row:first-of-type {
      border-top: 0;
      padding-top: 0;
    }

    .download-row:last-of-type {
      padding-bottom: 0;
    }

    .download-copy {
      min-width: 0;
    }

    .download-copy p {
      margin-bottom: 0;
    }

    .download-copy strong {
      display: block;
      font-size: 0.85rem;
      margin-bottom: 0.2rem;
    }

    button {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.85rem;
      border-radius: 8px;
      border: 1px solid var(--_border);
      background: var(--_surface);
      color: inherit;
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      border-color: var(--_accent);
    }

    button.primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    button.danger {
      background: var(--_danger);
      border-color: var(--_danger);
      color: #ffffff;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .field {
      display: grid;
      gap: 0.35rem;
      margin-bottom: 0.75rem;
    }

    .field-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
    }

    input[type='file'] {
      font: inherit;
      font-size: 0.85rem;
      max-width: 100%;
    }

    .field-error {
      color: var(--_danger);
      font-size: 0.8rem;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-info {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
    }

    .banner-success {
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      color: #15803d;
    }

    .reboot-overlay {
      position: fixed;
      inset: 0;
      z-index: 50;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1rem;
      background: rgba(15, 23, 42, 0.55);
    }

    .reboot-dialog {
      width: min(26rem, 100%);
      background: var(--_surface);
      border-radius: 12px;
      padding: 1.25rem;
      box-shadow: 0 20px 50px rgba(15, 23, 42, 0.35);
    }

    .spinner {
      width: 1.5rem;
      height: 1.5rem;
      border: 3px solid var(--_border);
      border-top-color: var(--_accent);
      border-radius: 50%;
      animation: edc-spin 0.9s linear infinite;
    }

    @keyframes edc-spin {
      to {
        transform: rotate(360deg);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .spinner {
        animation: none;
      }
    }
  `,pt);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",xa);var rr="Invalid settings response.";function Pa(e){if(e&&typeof e=="object"&&"message"in e){let t=e.message;if(typeof t=="string"&&t.length>0)return t}}function Ca(e,t){return t?.aborted===!0||typeof e=="object"&&!!e&&e.name==="AbortError"}function ti(e,t){return Ca(e,t)?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}async function ei(e,t){let s=t;try{let r=await e.text();if(r.length>0)try{s=Pa(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:e.status,message:s}}function Ta(e){if(!e||typeof e!="object")return;let{host:t,uri:s,port:r,enabled:i}=e;if(typeof t=="string"&&typeof s=="string"&&typeof r=="number"&&Number.isFinite(r)&&typeof i=="boolean")return{host:t,uri:s,port:r,enabled:i}}async function si(e){let t;try{t=await e.json()}catch{return{ok:!1,status:e.status,message:rr}}let s=Ta(t);return s?{ok:!0,data:s}:{ok:!1,status:e.status,message:rr}}async function Ma(e,t,s){let r;try{r=await fetch(e,{headers:{Accept:"application/json",...t},signal:s})}catch(i){return ti(i,s)}return r.ok?si(r):ei(r,"Could not load the logger settings from the device.")}async function Ua(e,t,s,r){let i;try{i=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...s},body:JSON.stringify(t),signal:r})}catch(n){return ti(n,r)}return i.ok?si(i):ei(i,"The device rejected the logger settings.")}function Na(e={}){let t=e.baseUrl??"",s=e.settingsPath??"/api/log/settings",r=e.headers??{},i=`${t}${s}`;return{getSettings(n){return Ma(i,r,n)},saveSettings(n,a){return Ua(i,n,r,a)}}}var se=globalThis,as=se.ShadowRoot&&(se.ShadyCSS===void 0||se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,os=Symbol(),ir=new WeakMap,ri=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==os)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(as&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=ir.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&ir.set(t,e))}return e}toString(){return this.cssText}},Ra=e=>new ri(typeof e=="string"?e:e+"",void 0,os),Ha=(e,...t)=>new ri(e.length===1?e[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,os),Da=(e,t)=>{if(as)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let r=document.createElement("style"),i=se.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},nr=as?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let r of t.cssRules)s+=r.cssText;return Ra(s)})(e):e,{is:Ia,defineProperty:Oa,getOwnPropertyDescriptor:La,getOwnPropertyNames:qa,getOwnPropertySymbols:za,getPrototypeOf:Wa}=Object,ge=globalThis,ar=ge.trustedTypes,Fa=ar?ar.emptyScript:"",Ba=ge.reactiveElementPolyfillSupport,It=(e,t)=>e,He={toAttribute(e,t){switch(t){case Boolean:e=e?Fa:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},ii=(e,t)=>!Ia(e,t),or={attribute:!0,type:String,converter:He,reflect:!1,useDefault:!1,hasChanged:ii};Symbol.metadata??=Symbol("metadata"),ge.litPropertyMetadata??=new WeakMap;var wt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=or){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Oa(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){let{get:r,set:i}=La(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){let a=r?.call(this);i?.call(this,n),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??or}static _$Ei(){if(this.hasOwnProperty(It("elementProperties")))return;let e=Wa(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(It("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(It("properties"))){let t=this.properties,s=[...qa(t),...za(t)];for(let r of s)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(nr(r))}else e!==void 0&&t.push(nr(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Da(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute===void 0?He:s.converter).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute===void 0?He:i.converter;this._$Em=r;let a=n.fromAttribute(t,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,s,r=!1,i){if(e!==void 0){let n=this.constructor;if(r===!1&&(i=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??ii)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:i},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:n}=i,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};wt.elementStyles=[],wt.shadowRootOptions={mode:"open"},wt[It("elementProperties")]=new Map,wt[It("finalized")]=new Map,Ba?.({ReactiveElement:wt}),(ge.reactiveElementVersions??=[]).push("2.1.2");var ls=globalThis,lr=e=>e,le=ls.trustedTypes,dr=le?le.createPolicy("lit-html",{createHTML:e=>e}):void 0,ni="$lit$",tt=`lit$${Math.random().toFixed(9).slice(2)}$`,ai="?"+tt,ja=`<${ai}>`,bt=document,jt=()=>bt.createComment(""),Vt=e=>e===null||typeof e!="object"&&typeof e!="function",ds=Array.isArray,Va=e=>ds(e)||typeof e?.[Symbol.iterator]=="function",xe=`[ 	
\f\r]`,Ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,cr=/-->/g,hr=/>/g,nt=RegExp(`>|${xe}(?:([^\\s"'>=/]+)(${xe}*=${xe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ur=/'/g,pr=/"/g,oi=/^(?:script|style|textarea|title)$/i,fr=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),xt=Symbol.for("lit-noChange"),U=Symbol.for("lit-nothing"),mr=new WeakMap,lt=bt.createTreeWalker(bt,129);function li(e,t){if(!ds(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return dr===void 0?t:dr.createHTML(t)}var Ja=(e,t)=>{let s=e.length-1,r=[],i,n=t===2?"<svg>":t===3?"<math>":"",a=Ut;for(let d=0;d<s;d++){let o=e[d],h,u,p=-1,c=0;for(;c<o.length&&(a.lastIndex=c,u=a.exec(o),u!==null);)c=a.lastIndex,a===Ut?u[1]==="!--"?a=cr:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=nt):(oi.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=nt):a=hr:a===nt?u[0]===">"?(a=i??Ut,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?nt:u[3]==='"'?pr:ur):a===pr||a===ur?a=nt:a===cr||a===hr?a=Ut:(a=nt,i=void 0);let f=a===nt&&e[d+1].startsWith("/>")?" ":"";n+=a===Ut?o+ja:p>=0?(r.push(h),o.slice(0,p)+ni+o.slice(p)+tt+f):o+tt+(p===-2?d:f)}return[li(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},De=class di{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,d=t.length-1,o=this.parts,[h,u]=Ja(t,s);if(this.el=di.createElement(h,r),lt.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=lt.nextNode())!==null&&o.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(ni)){let c=u[a++],f=i.getAttribute(p).split(tt),b=/([.?@])?(.*)/.exec(c);o.push({type:1,index:n,name:b[2],strings:f,ctor:b[1]==="."?Qa:b[1]==="?"?Za:b[1]==="@"?Ya:_e}),i.removeAttribute(p)}else p.startsWith(tt)&&(o.push({type:6,index:n}),i.removeAttribute(p));if(oi.test(i.tagName)){let p=i.textContent.split(tt),c=p.length-1;if(c>0){i.textContent=le?le.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],jt()),lt.nextNode(),o.push({type:2,index:++n});i.append(p[c],jt())}}}else if(i.nodeType===8)if(i.data===ai)o.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(tt,p+1))!==-1;)o.push({type:7,index:n}),p+=tt.length-1}n++}}static createElement(t,s){let r=bt.createElement("template");return r.innerHTML=t,r}};function Pt(e,t,s=e,r){if(t===xt)return t;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Vt(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(t=Pt(e,i._$AS(e,t.values),i,r)),t}var Ka=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??bt).importNode(t,!0);lt.currentNode=r;let i=lt.nextNode(),n=0,a=0,d=s[0];for(;d!==void 0;){if(n===d.index){let o;d.type===2?o=new cs(i,i.nextSibling,this,e):d.type===1?o=new d.ctor(i,d.name,d.strings,this,e):d.type===6&&(o=new Ga(i,this,e)),this._$AV.push(o),d=s[++a]}n!==d?.index&&(i=lt.nextNode(),n++)}return lt.currentNode=bt,r}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(e[t]):(s._$AI(e,s,t),t+=s.strings.length-2)),t++}},cs=class ci{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=U,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Pt(this,t,s),Vt(t)?t===U||t==null||t===""?(this._$AH!==U&&this._$AR(),this._$AH=U):t!==this._$AH&&t!==xt&&this._(t):t._$litType$===void 0?t.nodeType===void 0?Va(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==U&&Vt(this._$AH)?this._$AA.nextSibling.data=t:this.T(bt.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=De.createElement(li(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new Ka(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(t){let s=mr.get(t.strings);return s===void 0&&mr.set(t.strings,s=new De(t)),s}k(t){ds(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of t)i===s.length?s.push(r=new ci(this.O(jt()),this.O(jt()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let r=lr(t).nextSibling;lr(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},_e=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=U,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=U}_$AI(e,t=this,s,r){let i=this.strings,n=!1;if(i===void 0)e=Pt(this,e,t,0),n=!Vt(e)||e!==this._$AH&&e!==xt,n&&(this._$AH=e);else{let a=e,d,o;for(e=i[0],d=0;d<i.length-1;d++)o=Pt(this,a[s+d],t,d),o===xt&&(o=this._$AH[d]),n||=!Vt(o)||o!==this._$AH[d],o===U?e=U:e!==U&&(e+=(o??"")+i[d+1]),this._$AH[d]=o}n&&!r&&this.j(e)}j(e){e===U?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Qa=class extends _e{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===U?void 0:e}},Za=class extends _e{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==U)}},Ya=class extends _e{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=Pt(this,e,t,0)??U)===xt)return;let s=this._$AH,r=e===U&&s!==U||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==U&&(s===U||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ga=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){Pt(this,e)}},Xa=ls.litHtmlPolyfillSupport;Xa?.(De,cs),(ls.litHtmlVersions??=[]).push("3.3.3");var to=(e,t,s)=>{let r=s?.renderBefore??t,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new cs(t.insertBefore(jt(),n),n,void 0,s??{})}return i._$AI(e),i},hs=globalThis,Ot=class extends wt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=to(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xt}};Ot._$litElement$=!0,Ot.finalized=!0,hs.litElementHydrateSupport?.({LitElement:Ot});var eo=hs.litElementPolyfillSupport;eo?.({LitElement:Ot}),(hs.litElementVersions??=[]).push("4.2.2");var ft,so=(ft=class extends Ot{constructor(...t){super(...t),this.baseUrl="",this.settingsPath="/api/log/settings",this.deviceName="logger",this.maxHostLength=63,this.formHost="",this.formUri="",this.formPort="",this.formEnabled=!1,this.loading=!1,this.saving=!1,this.notice=null,this.loaded=!1,this._loadStarted=!1}connectedCallback(){super.connectedCallback(),this.load()}firstUpdated(){this._loadStarted||this.load()}render(){return fr`
      <div class="stack">
        <section class="card" aria-labelledby="edu-log-heading">
          <h2 id="edu-log-heading">${this.deviceName} settings</h2>
          <p class="muted">
            Configure the network logger on the ${this.deviceName}. Changes apply
            immediately; persistence depends on the device firmware.
          </p>
          ${this.renderNotice(this.notice)}
          <label class="field" for="edu-log-host">
            <span class="field-label">Host</span>
            <input
              id="edu-log-host"
              type="text"
              .value=${this.formHost}
              maxlength=${this.maxHostLength}
              ?disabled=${this.loading||this.saving}
              @input=${t=>this.handleHostInput(t)}
            />
          </label>
          <label class="field" for="edu-log-uri">
            <span class="field-label">URI</span>
            <input
              id="edu-log-uri"
              type="text"
              .value=${this.formUri}
              maxlength=${this.maxHostLength}
              ?disabled=${this.loading||this.saving}
              @input=${t=>this.handleUriInput(t)}
            />
          </label>
          <label class="field" for="edu-log-port">
            <span class="field-label">Port</span>
            <input
              id="edu-log-port"
              type="number"
              min="1"
              max="65535"
              inputmode="numeric"
              .value=${this.formPort}
              ?disabled=${this.loading||this.saving}
              @input=${t=>this.handlePortInput(t)}
            />
          </label>
          <label class="checkbox-row" for="edu-log-enabled">
            <input
              id="edu-log-enabled"
              type="checkbox"
              .checked=${this.formEnabled}
              ?disabled=${this.loading||this.saving}
              @change=${t=>this.handleEnabledChange(t)}
            />
            <span>Enabled</span>
          </label>
          <div class="form-actions">
            <button
              type="button"
              class="primary"
              data-action="save"
              ?disabled=${this.loading||this.saving}
              @click=${()=>{this.handleSave()}}
            >
              ${this.saving?"Saving…":"Save"}
            </button>
            <button
              type="button"
              data-action="reload"
              ?disabled=${this.loading||this.saving}
              @click=${()=>{this.load()}}
            >
              ${this.loading?"Loading…":"Reload"}
            </button>
          </div>
        </section>
      </div>
    `}renderNotice(t){return t?fr`<div
      class="banner banner-${t.kind}"
      role=${t.kind==="error"?"alert":"status"}
    >
      ${t.text}
    </div>`:U}createClient(){return Na({baseUrl:this.baseUrl,settingsPath:this.settingsPath})}async load(){if(!(this.loading||this.saving)){this._loadStarted=!0,this.loading=!0,this.notice=null;try{let t=await this.createClient().getSettings();if(!t.ok){this.notice={kind:"error",text:t.message};return}this.applySettings(t.data),this.loaded=!0}finally{this.loading=!1}}}applySettings(t){this.formHost=t.host,this.formUri=t.uri,this.formPort=String(t.port),this.formEnabled=t.enabled}handleHostInput(t){this.formHost=t.currentTarget.value}handleUriInput(t){this.formUri=t.currentTarget.value}handlePortInput(t){this.formPort=t.currentTarget.value}handleEnabledChange(t){this.formEnabled=t.currentTarget.checked}validate(){let t=this.formHost.trim(),s=this.formUri.trim();if(t.length===0)return"Host is required.";if(t.length>this.maxHostLength)return`Host must be ${this.maxHostLength} characters or fewer.`;if(s.length===0)return"URI is required.";if(s.length>this.maxHostLength)return`URI must be ${this.maxHostLength} characters or fewer.`;let r=this.formPort.trim();if(!/^\d+$/.test(r))return"Port must be a whole number between 1 and 65535.";let i=Number(r);return!Number.isInteger(i)||i<1||i>65535?"Port must be a whole number between 1 and 65535.":{host:t,uri:s,port:i,enabled:this.formEnabled}}async handleSave(){if(this.loading||this.saving)return;let t=this.validate();if(typeof t=="string")this.notice={kind:"error",text:t};else{this.saving=!0,this.notice=null;try{let s=await this.createClient().saveSettings(t);if(!s.ok){this.notice={kind:"error",text:s.message};return}this.applySettings(s.data),this.loaded=!0,this.notice={kind:"info",text:"Settings saved."},this.dispatchEvent(new CustomEvent("edu-log-saved",{detail:s.data,bubbles:!0,composed:!0}))}finally{this.saving=!1}}}},ft.properties={baseUrl:{type:String,attribute:"base-url"},settingsPath:{type:String,attribute:"settings-path"},deviceName:{type:String,attribute:"device-name"},maxHostLength:{type:Number,attribute:"max-host-length"},formHost:{state:!0},formUri:{state:!0},formPort:{state:!0},formEnabled:{state:!0},loading:{state:!0},saving:{state:!0},notice:{state:!0},loaded:{state:!0}},ft.styles=Ha`
    :host {
      display: block;
      font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
      color: #1f2430;
      --_accent: var(--edu-accent, #2563eb);
      --_danger: var(--edu-danger, #dc2626);
      --_muted: var(--edu-muted, #6b7280);
      --_border: #e2e5ea;
      --_surface: #ffffff;
    }

    .stack {
      display: grid;
      gap: 1rem;
      max-width: 34rem;
    }

    .card {
      background: var(--_surface);
      border: 1px solid var(--_border);
      border-radius: 10px;
      padding: 1rem 1.25rem;
      box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    }

    h2 {
      font-size: 1rem;
      margin: 0 0 0.5rem;
    }

    p {
      margin: 0 0 0.75rem;
      font-size: 0.875rem;
      line-height: 1.45;
    }

    .muted {
      color: var(--_muted);
    }

    .field {
      display: grid;
      gap: 0.35rem;
      margin-bottom: 0.75rem;
    }

    .field-label {
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: var(--_muted);
    }

    input[type='text'],
    input[type='number'] {
      font: inherit;
      font-size: 0.875rem;
      padding: 0.45rem 0.6rem;
      border: 1px solid var(--_border);
      border-radius: 8px;
      background: var(--_surface);
      color: inherit;
      max-width: 100%;
    }

    input:focus {
      outline: 2px solid var(--_accent);
      outline-offset: 1px;
    }

    .checkbox-row {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
      margin-bottom: 0.75rem;
    }

    .form-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    button {
      font: inherit;
      font-size: 0.85rem;
      padding: 0.45rem 0.85rem;
      border-radius: 8px;
      border: 1px solid var(--_border);
      background: var(--_surface);
      color: inherit;
      cursor: pointer;
    }

    button:hover:not(:disabled) {
      border-color: var(--_accent);
    }

    button.primary {
      background: var(--_accent);
      border-color: var(--_accent);
      color: #ffffff;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.55;
    }

    .banner {
      margin: 0 0 0.75rem;
      padding: 0.5rem 0.75rem;
      border-radius: 8px;
      font-size: 0.85rem;
    }

    .banner-error {
      background: #fef2f2;
      border: 1px solid #fecaca;
      color: var(--_danger);
    }

    .banner-info {
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      color: #1d4ed8;
    }
  `,ft);typeof customElements<"u"&&!customElements.get("edu-log-settings-page")&&customElements.define("edu-log-settings-page",so);const gr=document.getElementById("app");gr&&yi(l(vn,{}),gr);
