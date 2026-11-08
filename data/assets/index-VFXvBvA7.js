(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();var se,v,ei,I,ss,si,ii,fe,Ft,St,ri,Ue,we,Ae,Zt={},Gt=[],Yi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ie=Array.isArray;function R(e,t){for(var s in t)e[s]=t[s];return e}function Me(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Xi(e,t,s){var i,r,n,o={};for(n in t)n=="key"?i=t[n]:n=="ref"?r=t[n]:o[n]=t[n];if(arguments.length>2&&(o.children=arguments.length>3?se.call(arguments,2):s),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)o[n]===void 0&&(o[n]=e.defaultProps[n]);return Bt(e,o,i,r,null)}function Bt(e,t,s,i,r){var n={type:e,props:t,key:s,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++ei,__i:-1,__u:0};return r==null&&v.vnode!=null&&v.vnode(n),n}function N(e){return e.children}function jt(e,t){this.props=e,this.context=t}function nt(e,t){if(t==null)return e.__?nt(e.__,e.__i+1):null;for(var s;t<e.__k.length;t++)if((s=e.__k[t])!=null&&s.__e!=null)return s.__e;return typeof e.type=="function"?nt(e):null}function tr(e){if(e.__P&&e.__d){var t=e.__v,s=t.__e,i=[],r=[],n=R({},t);n.__v=t.__v+1,v.vnode&&v.vnode(n),Ne(e.__P,n,t,e.__n,e.__P.namespaceURI,32&t.__u?[s]:null,i,s??nt(t),!!(32&t.__u),r),n.__v=t.__v,n.__.__k[n.__i]=n,di(i,n,r),t.__e=t.__=null,n.__e!=s&&ni(n)}}function ni(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),ni(e)}function is(e){(!e.__d&&(e.__d=!0)&&I.push(e)&&!Yt.__r++||ss!=v.debounceRendering)&&((ss=v.debounceRendering)||si)(Yt)}function Yt(){try{for(var e,t=1;I.length;)I.length>t&&I.sort(ii),e=I.shift(),t=I.length,tr(e)}finally{I.length=Yt.__r=0}}function oi(e,t,s,i,r,n,o,a,l,h,u){var p,d,f,m,w,A,_=i&&i.__k||Gt,$=t.length;for(l=er(s,t,_,l,$),p=0;p<$;p++)(f=s.__k[p])!=null&&(d=f.__i!=-1&&_[f.__i]||Zt,f.__i=p,A=Ne(e,f,d,r,n,o,a,l,h,u),m=f.__e,f.ref&&d.ref!=f.ref&&(d.ref&&He(d.ref,null,f),u.push(f.ref,f.__c||m,f)),w==null&&m!=null&&(w=m),4&f.__u?(l=ai(f,l,e),d.__e&&(d.__e=null)):typeof f.type=="function"&&A!==void 0?l=A:m&&(l=m.nextSibling),f.__u&=-7);return s.__e=w,l}function er(e,t,s,i,r){var n,o,a,l,h,u=s.length,p=u,d=0;for(e.__k=new Array(r),n=0;n<r;n++)(o=t[n])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=e.__k[n]=Bt(null,o,null,null,null):ie(o)?o=e.__k[n]=Bt(N,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[n]=Bt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[n]=o,l=n+d,o.__=e,o.__b=e.__b+1,a=null,(h=o.__i=sr(o,s,l,p))!=-1&&(p--,(a=s[h])&&(a.__u|=2)),a==null||a.__v==null?(h==-1&&(r>u?d--:r<u&&d++),typeof o.type!="function"&&(o.__u|=4)):h!=l&&(h==l-1?d--:h==l+1?d++:(h>l?d--:d++,o.__u|=4))):e.__k[n]=null;if(p)for(n=0;n<u;n++)(a=s[n])!=null&&(2&a.__u)==0&&(a.__e==i&&(i=nt(a)),ci(a,a));return i}function ai(e,t,s){var i,r;if(typeof e.type=="function"){for(i=e.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=e,t=ai(i[r],t,s));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=nt(e)),t=s.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function sr(e,t,s,i){var r,n,o,a=e.key,l=e.type,h=t[s],u=h!=null&&(2&h.__u)==0;if(h===null&&a==null||u&&a==h.key&&l==h.type)return s;if(i>(u?1:0)){for(r=s-1,n=s+1;r>=0||n<t.length;)if((h=t[o=r>=0?r--:n++])!=null&&(2&h.__u)==0&&a==h.key&&l==h.type)return o}return-1}function rs(e,t,s){t[0]=="-"?e.setProperty(t,s??""):e[t]=s==null?"":typeof s!="number"||Yi.test(t)?s:s+"px"}function zt(e,t,s,i,r){var n,o;t:if(t=="style")if(typeof s=="string")e.style.cssText=s;else{if(typeof i=="string"&&(e.style.cssText=i=""),i)for(t in i)s&&t in s||rs(e.style,t,"");if(s)for(t in s)i&&s[t]==i[t]||rs(e.style,t,s[t])}else if(t[0]=="o"&&t[1]=="n")n=t!=(t=t.replace(ri,"$1")),o=t.toLowerCase(),t=o in e||t=="onFocusOut"||t=="onFocusIn"?o.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=s,s?i?s[St]=i[St]:(s[St]=Ue,e.addEventListener(t,n?Ae:we,n)):e.removeEventListener(t,n?Ae:we,n);else{if(r=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=s??"";break t}catch{}typeof s=="function"||(s==null||s===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&s==1?"":s))}}function ns(e){return function(t){if(this.l){var s=this.l[t.type+e];if(t[Ft]==null)t[Ft]=Ue++;else if(t[Ft]<s[St])return;return s(v.event?v.event(t):t)}}}function Ne(e,t,s,i,r,n,o,a,l,h){var u,p,d,f,m,w,A,_,$,P,B,H,T,j,Lt,pe,M=t.type;if(t.constructor!==void 0)return null;128&s.__u&&(l=!!(32&s.__u),n=[a=t.__e=s.__e]),(u=v.__b)&&u(t);t:if(typeof M=="function"){p=o.length;try{if($=t.props,P=M.prototype&&M.prototype.render,B=(u=M.contextType)&&i[u.__c],H=u?B?B.props.value:u.__:i,s.__c?_=(d=t.__c=s.__c).__=d.__E:(P?t.__c=d=new M($,H):(t.__c=d=new jt($,H),d.constructor=M,d.render=rr),B&&B.sub(d),d.state||(d.state={}),d.__n=i,f=d.__d=!0,d.__h=[],d._sb=[]),P&&d.__s==null&&(d.__s=d.state),P&&M.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=R({},d.__s)),R(d.__s,M.getDerivedStateFromProps($,d.__s))),m=d.props,w=d.state,d.__v=t,f)P&&M.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),P&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(P&&M.getDerivedStateFromProps==null&&$!==m&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps($,H),t.__v==s.__v||!d.__e&&d.shouldComponentUpdate!=null&&d.shouldComponentUpdate($,d.__s,H)===!1){t.__v!=s.__v&&(d.props=$,d.state=d.__s,d.__d=!1),t.__e=s.__e,t.__k=s.__k,t.__k.some(function(dt){dt&&(dt.__=t)}),Gt.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&o.push(d),a=nt(s);break t}d.componentWillUpdate!=null&&d.componentWillUpdate($,d.__s,H),P&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(m,w,A)})}if(d.context=H,d.props=$,d.__P=e,d.__e=!1,T=v.__r,j=0,P)d.state=d.__s,d.__d=!1,T&&T(t),u=d.render(d.props,d.state,d.context),Gt.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,T&&T(t),u=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++j<25);d.state=d.__s,d.getChildContext!=null&&(i=R(R({},i),d.getChildContext())),P&&!f&&d.getSnapshotBeforeUpdate!=null&&(A=d.getSnapshotBeforeUpdate(m,w)),Lt=u!=null&&u.type===N&&u.key==null?hi(u.props.children):u,a=oi(e,ie(Lt)?Lt:[Lt],t,s,i,r,n,o,a,l,h),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),_&&(d.__E=d.__=null)}catch(dt){if(o.length=p,t.__v=null,l||n!=null){if(dt.then){for(t.__u|=l?160:128;a&&a.nodeType==8&&a.nextSibling;)a=a.nextSibling;n!=null&&(n[n.indexOf(a)]=null),t.__e=a}else if(n!=null)for(pe=n.length;pe--;)Me(n[pe])}else t.__e=s.__e;t.__k==null&&(t.__k=s.__k||[]),dt.then||li(t),v.__e(dt,t,s)}}else n==null&&t.__v==s.__v?(t.__k=s.__k,t.__e=s.__e):a=t.__e=ir(s.__e,t,s,i,r,n,o,l,h);return(u=v.diffed)&&u(t),128&t.__u?void 0:a}function li(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(li))}function di(e,t,s){for(var i=0;i<s.length;i++)He(s[i],s[++i],s[++i]);v.__c&&v.__c(t,e),e.some(function(r){try{e=r.__h,r.__h=[],e.some(function(n){n.call(r)})}catch(n){v.__e(n,r.__v)}})}function hi(e){return typeof e!="object"||e==null||e.__b>0?e:ie(e)?e.map(hi):e.constructor!==void 0?null:R({},e)}function ir(e,t,s,i,r,n,o,a,l){var h,u,p,d,f,m,w,A=s.props||Zt,_=t.props,$=t.type;if($=="svg"?r="http://www.w3.org/2000/svg":$=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((f=n[h])&&"setAttribute"in f==!!$&&($?f.localName==$:f.nodeType==3)){e=f,n[h]=null;break}}if(e==null){if($==null)return document.createTextNode(_);e=document.createElementNS(r,$,_.is&&_),a&&(v.__m&&v.__m(t,n),a=!1),n=null}if($==null)A===_||a&&e.data==_||(e.data=_);else{if(n=$=="textarea"&&_.defaultValue!=null?null:n&&se.call(e.childNodes),!a&&n!=null)for(A={},h=0;h<e.attributes.length;h++)A[(f=e.attributes[h]).name]=f.value;for(h in A)f=A[h],h=="dangerouslySetInnerHTML"?p=f:h=="children"||h in _||h=="value"&&"defaultValue"in _||h=="checked"&&"defaultChecked"in _||zt(e,h,null,f,r);for(h in _)f=_[h],h=="children"?d=f:h=="dangerouslySetInnerHTML"?u=f:h=="value"?m=f:h=="checked"?w=f:a&&typeof f!="function"||A[h]===f||zt(e,h,f,A[h],r);if(u)a||p&&(u.__html==p.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(p&&(e.innerHTML=""),oi(t.type=="template"?e.content:e,ie(d)?d:[d],t,s,i,$=="foreignObject"?"http://www.w3.org/1999/xhtml":r,n,o,n?n[0]:s.__k&&nt(s,0),a,l),n!=null)for(h=n.length;h--;)Me(n[h]);a&&$!="textarea"||(h="value",$=="progress"&&m==null?e.removeAttribute("value"):m!=null&&(m!==e[h]||$=="progress"&&!m||$=="option"&&m!=A[h])&&zt(e,h,m,A[h],r),h="checked",w!=null&&w!=e[h]&&zt(e,h,w,A[h],r))}return e}function He(e,t,s){try{if(typeof e=="function"){var i=typeof e.__u=="function";i&&e.__u(),i&&t==null||(e.__u=e(t))}else e.current=t}catch(r){v.__e(r,s)}}function ci(e,t,s){var i,r;if(v.unmount&&v.unmount(e),(i=e.ref)&&(i.current&&i.current!=e.__e||He(i,null,t)),(i=e.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){v.__e(n,t)}i.base=i.__P=i.__n=null}if(i=e.__k)for(r=0;r<i.length;r++)i[r]&&ci(i[r],t,s||typeof e.type!="function");s||Me(e.__e),e.__c=e.__=e.__e=void 0}function rr(e,t,s){return this.constructor(e,s)}function nr(e,t,s){var i,r,n,o;t==document&&(t=document.documentElement),v.__&&v.__(e,t),r=(i=!1)?null:t.__k,n=[],o=[],Ne(t,e=t.__k=Xi(N,null,[e]),r||Zt,Zt,t.namespaceURI,r?null:t.firstChild?se.call(t.childNodes):null,n,r?r.__e:t.firstChild,i,o),di(n,e,o),e.props.children=null}se=Gt.slice,v={__e:function(e,t,s,i){for(var r,n,o;t=t.__;)if((r=t.__c)&&!r.__)try{if((n=r.constructor)&&n.getDerivedStateFromError!=null&&(r.setState(n.getDerivedStateFromError(e)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,i||{}),o=r.__d),o)return r.__E=r}catch(a){e=a}throw e}},ei=0,jt.prototype.setState=function(e,t){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=R({},this.state),typeof e=="function"&&(e=e(R({},s),this.props)),e&&R(s,e),e!=null&&this.__v&&(t&&this._sb.push(t),is(this))},jt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),is(this))},jt.prototype.render=N,I=[],si=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ii=function(e,t){return e.__v.__b-t.__v.__b},Yt.__r=0,fe=Math.random().toString(8),Ft="__d"+fe,St="__a"+fe,ri=/(PointerCapture)$|Capture$/i,Ue=0,we=ns(!1),Ae=ns(!0);var or=0;function c(e,t,s,i,r,n){t||(t={});var o,a,l=t;if("ref"in l)for(a in l={},t)a=="ref"?o=t[a]:l[a]=t[a];var h={type:e,props:l,key:s,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--or,__i:-1,__u:0,__source:r,__self:n};if(typeof e=="function"&&(o=e.defaultProps))for(a in o)l[a]===void 0&&(l[a]=o[a]);return v.vnode&&v.vnode(h),h}var Ut,E,_e,os,Mt=0,ui=[],k=v,as=k.__b,ls=k.__r,ds=k.diffed,hs=k.__c,cs=k.unmount,us=k.__;function De(e,t){k.__h&&k.__h(E,e,Mt||t),Mt=0;var s=E.__H||(E.__H={__:[],__h:[]});return e>=s.__.length&&s.__.push({}),s.__[e]}function x(e){return Mt=1,ar(fi,e)}function ar(e,t,s){var i=De(Ut++,2);if(i.t=e,!i.__c&&(i.__=[fi(void 0,t),function(a){var l=i.__N?i.__N[0]:i.__[0],h=i.t(l,a);l!==h&&(i.__N=[h,i.__[1]],i.__c.setState({}))}],i.__c=E,!E.__f)){var r=function(a,l,h){if(!i.__c.__H)return!0;var u=!1,p=i.__c.props!==a;if(i.__c.__H.__.some(function(f){if(f.__N){u=!0;var m=f.__[0];f.__=f.__N,f.__N=void 0,m!==f.__[0]&&(p=!0)}}),n){var d=n.call(this,a,l,h);return u?d||p:d}return!u||p};E.__f=!0;var n=E.shouldComponentUpdate,o=E.componentWillUpdate;E.componentWillUpdate=function(a,l,h){if(this.__e){var u=n;n=void 0,r(a,l,h),n=u}o&&o.call(this,a,l,h)},E.shouldComponentUpdate=r}return i.__N||i.__}function F(e,t){var s=De(Ut++,3);!k.__s&&pi(s.__H,t)&&(s.__=e,s.u=t,E.__H.__h.push(s))}function re(e){return Mt=5,Re(function(){return{current:e}},[])}function Re(e,t){var s=De(Ut++,7);return pi(s.__H,t)&&(s.__=e(),s.__H=t,s.__h=e),s.__}function q(e,t){return Mt=8,Re(function(){return e},t)}function lr(){for(var e;e=ui.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Vt),t.__h.some(Se),t.__h=[]}catch(s){t.__h=[],k.__e(s,e.__v)}}}k.__b=function(e){E=null,as&&as(e)},k.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),us&&us(e,t)},k.__r=function(e){ls&&ls(e),Ut=0;var t=(E=e.__c).__H;t&&(_e===E?(t.__h=[],E.__h=[],t.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(t.__h.some(Vt),t.__h.some(Se),t.__h=[],Ut=0)),_e=E},k.diffed=function(e){ds&&ds(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ui.push(t)!==1&&os===k.requestAnimationFrame||((os=k.requestAnimationFrame)||dr)(lr)),t.__H.__.some(function(s){s.u&&(s.__H=s.u,s.u=void 0)})),_e=E=null},k.__c=function(e,t){t.some(function(s){try{s.__h.some(Vt),s.__h=s.__h.filter(function(i){return!i.__||Se(i)})}catch(i){t.some(function(r){r.__h&&(r.__h=[])}),t=[],k.__e(i,s.__v)}}),hs&&hs(e,t)},k.unmount=function(e){cs&&cs(e);var t,s=e.__c;s&&s.__H&&(s.__H.__.some(function(i){try{Vt(i)}catch(r){t=r}}),s.__H=void 0,t&&k.__e(t,s.__v))};var ps=typeof requestAnimationFrame=="function";function dr(e){var t,s=function(){clearTimeout(i),ps&&cancelAnimationFrame(t),setTimeout(e)},i=setTimeout(s,35);ps&&(t=requestAnimationFrame(s))}function Vt(e){var t=E,s=e.__c;typeof s=="function"&&(e.__c=void 0,s()),E=t}function Se(e){var t=E;e.__c=e.__(),E=t}function pi(e,t){return!e||e.length!==t.length||t.some(function(s,i){return s!==e[i]})}function fi(e,t){return typeof t=="function"?t(e):t}const ne="Device returned an empty response.",_i="Could not reach the device. Check that you are connected to its network and try again.",hr={},S={mqtt:{hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63}};function mi(){return{ok:!1,message:_i}}function cr(e){try{const t=JSON.parse(e);if(t&&typeof t=="object"&&"message"in t){const s=t.message;if(typeof s=="string"&&s)return s}}catch{}}async function gi(e){let t=`Request failed (HTTP ${e.status}).`;try{const s=await e.text();s&&(t=cr(s)??t)}catch{}return{ok:!1,status:e.status,message:t}}async function oe(e,t){let s;try{s=await fetch(e,{headers:{Accept:"application/json"}})}catch{return mi()}if(!s.ok)return gi(s);let i;try{i=await s.text()}catch{return{ok:!1,status:s.status,message:_i}}if(!i.trim())return{ok:!1,status:s.status,message:t};try{return{ok:!0,data:JSON.parse(i)}}catch{return{ok:!1,status:s.status,message:t}}}async function $i(e,t){let s;try{s=await fetch(e,t)}catch{return mi()}if(!s.ok)return gi(s);try{await s.text()}catch{}return{ok:!0,data:hr}}function ur(e,t){return $i(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()})}function bi(){return oe("/api/status",ne)}function vi(){return oe("/healthcheck/healty",ne)}function pr(){return oe("/healthcheck/ready",ne)}function fr(){return $i("/api/reboot",{method:"POST"})}function _r(){return oe("/api/settings",ne)}function ht(e,t,s,i=!1){if(typeof e!="string")throw new Error(`${t} is required.`);if(!i&&e.length===0)throw new Error(`${t} must not be empty.`);if(e.length>s)throw new Error(`${t} must be at most ${s} characters.`);return e}function mr(e){const t=ht(e.host,"MQTT host",S.mqtt.hostMax);if(typeof e.port!="number"||!Number.isInteger(e.port)||e.port<1||e.port>65535)throw new Error("MQTT port must be an integer between 1 and 65535.");const s=ht(e.login,"MQTT login",S.mqtt.loginMax,!0),i=ht(e.password,"MQTT password",S.mqtt.passwordMax,!0),r=ht(e.haDiscoveryPrefix,"HA discovery prefix",S.mqtt.haDiscoveryPrefixMax);if(typeof e.mqttIsHADiscovery!="boolean")throw new Error("HA discovery flag must be true or false.");const n=ht(e.stateTopic,"State topic",S.mqtt.topicMax),o=ht(e.commandTopic,"Command topic",S.mqtt.topicMax),a=new URLSearchParams;return a.set("host",t),a.set("port",String(e.port)),a.set("login",s),a.set("password",i),a.set("haDiscoveryPrefix",r),a.set("mqttIsHADiscovery",e.mqttIsHADiscovery?"true":"false"),a.set("stateTopic",n),a.set("commandTopic",o),ur("/api/settings/mqtt",a)}function gr({tabs:e,active:t,onSelect:s}){return c("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:e.map(i=>c("button",{type:"button",role:"tab",id:`tab-${i.id}`,"aria-selected":i.id===t,"aria-controls":`panel-${i.id}`,class:i.id===t?"active":void 0,onClick:()=>s(i.id),children:i.label},i.id))})}function U({kind:e="info",message:t,onClose:s}){return c("div",{class:`banner banner-${e}`,role:"status",children:[c("span",{children:t}),s?c("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:s,children:"×"}):null]})}function $r(e){switch(e){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function W({children:e,variant:t="default",type:s="button",disabled:i,title:r,onClick:n}){return c("button",{type:s,class:$r(t),disabled:i,title:r,onClick:n,children:e})}function br(e){return c(W,{...e,variant:"danger"})}function Et({title:e,children:t,class:s}){return c("section",{class:s?`card ${s}`:"card",children:[e?c("h2",{children:e}):null,t]})}const me=2e3,vr=12e4;function yr(){const[e,t]=x("idle"),s=re(0);F(()=>{if(e!=="rebooting")return;let o=!1,a;const l=()=>{vi().then(h=>{if(!o){if(h.ok){t("ready");return}if(s.current+=1,s.current*me>=vr){t("timeout");return}a=window.setTimeout(l,me)}})};return a=window.setTimeout(l,me),()=>{o=!0,a!==void 0&&window.clearTimeout(a)}},[e]);const i=q(()=>{s.current=0,t("rebooting")},[]),r=q(()=>t("idle"),[]),n=q(()=>{s.current=0,t("rebooting")},[]);return Re(()=>({phase:e,start:i,dismiss:r,retry:n}),[e,i,r,n])}function wr({flow:e}){return e.phase==="idle"?null:c("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:c("div",{class:"reboot-dialog card",children:[c("h2",{children:"Device is rebooting"}),e.phase==="rebooting"?c(N,{children:[c("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),c("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,e.phase==="ready"?c(N,{children:[c(U,{kind:"success",message:"The device is back online."}),c("div",{class:"form-actions",children:c(W,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,e.phase==="timeout"?c(N,{children:[c(U,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),c("div",{class:"form-actions",children:[c(W,{onClick:e.retry,children:"Keep waiting"}),c(W,{onClick:e.dismiss,children:"Dismiss"})]})]}):null]})})}const Ar=1e4;function Sr(e){const t=Math.max(0,Math.floor(e)),s=Math.floor(t/86400),i=Math.floor(t%86400/3600),r=Math.floor(t%3600/60),n=t%60,o=[];return s&&o.push(`${s}d`),(s||i)&&o.push(`${i}h`),(s||i||r)&&o.push(`${r}m`),o.push(`${n}s`),o.join(" ")}function Er(e){return Number.isFinite(e)?`${Math.round(e/1024)} KB (${Math.round(e)} bytes)`:String(e)}function kr(){const[e,t]=x(null),[s,i]=x(null),[r,n]=x(!1),[o,a]=x(null),[l,h]=x(null),[u,p]=x(!0),[d,f]=x(null),[m,w]=x(!1),A=yr(),_=q(async()=>{const T=await bi();T.ok?(t(T.data),i(null)):i(T.message),n(!0)},[]),$=q(async()=>{p(!0);const[T,j]=await Promise.all([vi(),pr()]);a(T),h(j),p(!1)},[]);F(()=>{_();const T=window.setInterval(()=>{_()},Ar);return()=>window.clearInterval(T)},[_]),F(()=>{$()},[$]);const P=q(async()=>{if(!window.confirm("Reboot the device now? It will be offline for about 20-60 seconds."))return;f(null),w(!0);const j=await fr();w(!1),j.ok?A.start():f(j.message)},[A.start]),B=u&&!o?c("p",{class:"muted",children:"Checking device health…"}):o?o.ok?c(U,{kind:o.data.healty?"success":"error",message:o.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):c(U,{kind:"error",message:o.message}):null,H=l?l.ok?c(U,{kind:l.data.ready?"success":"info",message:l.data.ready?"All registered services are ready.":`Not ready: ${l.data.message}`}):l.status===500?c(U,{kind:"info",message:`Not ready: ${l.message}`}):c(U,{kind:"error",message:l.message}):null;return c("div",{class:"stack",children:[c(Et,{title:"Device",children:[r?s?c(N,{children:[c(U,{kind:"error",message:s}),c("div",{class:"form-actions",children:c(W,{onClick:()=>{_()},children:"Retry"})})]}):e?c("dl",{class:"kv",children:[c("dt",{children:"Firmware"}),c("dd",{children:e.fwVersion??"—"}),c("dt",{children:"Free heap"}),c("dd",{children:Er(e.freeHeap)}),c("dt",{children:"Uptime"}),c("dd",{children:Sr(e.uptime)}),c("dt",{children:"Last reset reason"}),c("dd",{children:e.lastResetReason})]}):null:c("p",{class:"muted",children:"Loading status…"}),c("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),c(Et,{title:"Health",children:[B,H,c("div",{class:"form-actions",children:c(W,{onClick:()=>{$()},disabled:u,children:u?"Checking…":"Refresh health"})})]}),c(Et,{title:"Maintenance",children:[c("p",{class:"muted",children:"A reboot briefly interrupts the device. Configuration changes saved on the other tabs only take effect after a reboot."}),d?c(U,{kind:"error",message:d,onClose:()=>f(null)}):null,c("div",{class:"form-actions",children:c(br,{onClick:()=>{P()},disabled:m||A.phase!=="idle",children:"Reboot device"})})]}),c(wr,{flow:A})]})}function Pr(){const e=re(null);return F(()=>{const t=document.createElement("edn-network-page");return e.current?.append(t),()=>t.remove()},[]),c("div",{ref:e})}const xr={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:""};function Cr(e){const t={};e.host.trim().length===0?t.host="Host is required.":e.host.length>S.mqtt.hostMax&&(t.host=`At most ${S.mqtt.hostMax} characters.`);const s=Number(e.port);return e.port.trim()===""?t.port="Port is required.":(!Number.isInteger(s)||s<1||s>65535)&&(t.port="Port must be an integer between 1 and 65535."),e.login.length>S.mqtt.loginMax&&(t.login=`At most ${S.mqtt.loginMax} characters.`),e.password.length>S.mqtt.passwordMax&&(t.password=`At most ${S.mqtt.passwordMax} characters.`),e.haDiscoveryPrefix.trim().length===0?t.haDiscoveryPrefix="Discovery prefix is required.":e.haDiscoveryPrefix.length>S.mqtt.haDiscoveryPrefixMax&&(t.haDiscoveryPrefix=`At most ${S.mqtt.haDiscoveryPrefixMax} characters.`),e.stateTopic.trim().length===0?t.stateTopic="Required - the device crashes if the state topic is missing.":e.stateTopic.length>S.mqtt.topicMax&&(t.stateTopic=`At most ${S.mqtt.topicMax} characters.`),e.commandTopic.trim().length===0?t.commandTopic="Required - the device crashes if the command topic is missing.":e.commandTopic.length>S.mqtt.topicMax&&(t.commandTopic=`At most ${S.mqtt.topicMax} characters.`),t}function Tr(e){return Object.keys(e).length>0}function K({label:e,value:t,onInput:s,type:i="text",min:r,max:n,maxLength:o,autoComplete:a,error:l,help:h}){return c("label",{class:"field",children:[c("span",{class:"field-label",children:e}),c("input",{type:i,value:t,min:r,max:n,maxLength:o,autoComplete:a,"aria-invalid":l?!0:void 0,onInput:u=>s(u.currentTarget.value)}),h&&!l?c("span",{class:"field-help",children:h}):null,l?c("span",{class:"field-error",children:l}):null]})}function Ur({label:e,value:t,onInput:s,maxLength:i,error:r}){const[n,o]=x(!1);return c("div",{class:"password-field",children:[c(K,{label:e,value:t,onInput:s,type:n?"text":"password",maxLength:i,autoComplete:"new-password",error:r}),c("button",{type:"button",class:"btn reveal-toggle","aria-pressed":n,onClick:()=>o(a=>!a),children:n?"Hide":"Show"})]})}function Mr({label:e,checked:t,onChange:s}){return c("div",{class:"checkbox-field",children:c("label",{class:"checkbox-label",children:[c("input",{type:"checkbox",checked:t,onChange:i=>s(i.currentTarget.checked)}),c("span",{children:e})]})})}function Nr(){const[e,t]=x(!1),[s,i]=x(null),[r,n]=x(xr),[o,a]=x({}),[l,h]=x(!1),[u,p]=x(null),[d,f]=x(null),m=q(async()=>{i(null);const _=await _r();_.ok?n({host:_.data.mqttHost,port:String(_.data.mqttPort),login:_.data.mqttLogin,password:_.data.mqttPassword,haDiscoveryPrefix:_.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:_.data.mqttIsHADiscovery,stateTopic:_.data.mqttStateTopic,commandTopic:_.data.mqttCommandTopic}):i(_.message),t(!0)},[]);F(()=>{m()},[m]);const w=_=>n($=>({...$,..._})),A=q(async _=>{_.preventDefault();const $=Cr(r);if(a($),p(null),f(null),!Tr($)){h(!0);try{const P=await mr({host:r.host,port:Number(r.port),login:r.login,password:r.password,haDiscoveryPrefix:r.haDiscoveryPrefix,mqttIsHADiscovery:r.mqttIsHADiscovery,stateTopic:r.stateTopic,commandTopic:r.commandTopic});P.ok?p("MQTT settings saved to flash."):f(P.message)}catch(P){f(P instanceof Error?P.message:String(P))}h(!1)}},[r]);return e?c("div",{class:"stack",children:[c(U,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."}),s?c(N,{children:[c(U,{kind:"error",message:s}),c("div",{class:"form-actions",children:c(W,{onClick:()=>{m()},children:"Retry"})})]}):null,c(Et,{title:"MQTT",children:c("form",{onSubmit:A,children:[c(K,{label:"Host",value:r.host,onInput:_=>w({host:_}),maxLength:S.mqtt.hostMax,autoComplete:"off",error:o.host}),c(K,{label:"Port",value:r.port,onInput:_=>w({port:_}),type:"number",min:1,max:65535,error:o.port}),c(K,{label:"Login",value:r.login,onInput:_=>w({login:_}),maxLength:S.mqtt.loginMax,autoComplete:"off",error:o.login}),c(Ur,{label:"Password",value:r.password,onInput:_=>w({password:_}),maxLength:S.mqtt.passwordMax,error:o.password}),c(K,{label:"HA discovery prefix",value:r.haDiscoveryPrefix,onInput:_=>w({haDiscoveryPrefix:_}),maxLength:S.mqtt.haDiscoveryPrefixMax,autoComplete:"off",error:o.haDiscoveryPrefix}),c(Mr,{label:"Enable Home Assistant discovery",checked:r.mqttIsHADiscovery,onChange:_=>w({mqttIsHADiscovery:_})}),c(K,{label:"State topic",value:r.stateTopic,onInput:_=>w({stateTopic:_}),maxLength:S.mqtt.topicMax,autoComplete:"off",error:o.stateTopic,help:"Must not be empty: the device crashes on a missing state topic."}),c(K,{label:"Command topic",value:r.commandTopic,onInput:_=>w({commandTopic:_}),maxLength:S.mqtt.topicMax,autoComplete:"off",error:o.commandTopic,help:"Must not be empty: the device crashes on a missing command topic."}),u?c(U,{kind:"success",message:u,onClose:()=>p(null)}):null,d?c(U,{kind:"error",message:d,onClose:()=>f(null)}):null,c("div",{class:"form-actions",children:c(W,{type:"submit",variant:"primary",disabled:l,children:l?"Saving…":"Save MQTT"})})]})})]}):c(Et,{title:"MQTT",children:c("p",{class:"muted",children:"Loading MQTT settings…"})})}const Hr="Download a zip of everything the device has stored: config.bin. It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e faraday -t uploadfs) ERASE LittleFS, so /config.bin is gone.",Dr="Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.",Rr="Uploading this archive REPLACES config.bin on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",Ir="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function Or(){const e=re(null);return F(()=>{const t=document.createElement("edc-config-backup-page");return t.setAttribute("device-name","Faraday"),t.setAttribute("archive-file-name","faraday-config.zip"),t.setAttribute("zip-notes",Hr),t.setAttribute("bin-notes",Dr),t.setAttribute("zip-confirm-text",Rr),t.setAttribute("bin-confirm-text",Ir),e.current?.append(t),()=>t.remove()},[]),c("div",{ref:e})}function Lr(){const e=re(null);return F(()=>{const t=document.createElement("edu-log-settings-page");return t.setAttribute("device-name","Faraday"),e.current?.append(t),()=>t.remove()},[]),c("div",{ref:e})}const zr=[{id:"status",label:"Status"},{id:"network",label:"Network"},{id:"mqtt",label:"MQTT"},{id:"config",label:"Config"},{id:"logger",label:"Log"}];function qr(e){switch(e){case"status":return c(kr,{});case"network":return c(Pr,{});case"mqtt":return c(Nr,{});case"config":return c(Or,{});case"logger":return c(Lr,{})}}function Wr(){const[e,t]=x("status"),[s,i]=x(null);return F(()=>{let r=!0;return bi().then(n=>{r&&n.ok&&n.data.fwVersion&&i(n.data.fwVersion)}),()=>{r=!1}},[]),c(N,{children:[c("header",{class:"app-header",children:c("div",{class:"brand",children:[c("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:c("path",{fill:"currentColor",d:"M13 2 4.5 13.2h5.2L8 22l9-12.1h-5.4z"})}),c("h1",{children:"Faraday"})]})}),c(gr,{tabs:zr,active:e,onSelect:t}),c("main",{class:"tab-content",id:`panel-${e}`,role:"tabpanel","aria-labelledby":`tab-${e}`,children:qr(e)}),c("footer",{class:"app-footer",children:c("div",{class:"versions",children:[c("span",{class:"hint",children:"offline device panel"}),c("span",{class:"hint version",children:["FW ",s??"—"]}),c("span",{class:"hint version",children:["UI ","unknown"]})]})})]})}function Fr(e){if(e&&typeof e=="object"&&"error"in e){let t=e.error;if(typeof t=="string"&&t.length>0)return t}}function yi(e={}){let t=e.baseUrl??"",s=e.headers??{};async function i(r,n){let o;try{o=await fetch(`${t}${r}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...s}})}catch(u){return n?.signal?.aborted===!0||typeof u=="object"&&u&&u.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let a=await o.text().catch(()=>""),l,h=!1;if(a.length>0)try{l=JSON.parse(a),h=!0}catch{h=!1}if(!o.ok){let u=Fr(l);return{ok:!1,status:o.status,message:u??`Request failed with HTTP ${o.status}.`}}return h?{ok:!0,data:l}:{ok:!1,status:o.status,message:`Unexpected response from server (HTTP ${o.status}).`}}return{getSettings(r){return i("/api/network/settings",{signal:r})},saveSettings(r,n){return i("/api/network/settings",{method:"POST",body:JSON.stringify(r),signal:n})},getStatus(r){return i("/api/network/status",{signal:r})},wifiList(r){return i("/api/wifi/list",{signal:r})}}}var Jt=globalThis,Ie=Jt.ShadowRoot&&(Jt.ShadyCSS===void 0||Jt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oe=Symbol(),fs=new WeakMap,wi=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==Oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o,s=this.t;if(Ie&&t===void 0){let i=s!==void 0&&s.length===1;i&&(t=fs.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&fs.set(s,t))}return t}toString(){return this.cssText}},Br=e=>new wi(typeof e=="string"?e:e+"",void 0,Oe),Le=(e,...t)=>new wi(e.length===1?e[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]),e,Oe),jr=(e,t)=>{if(Ie)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let i=document.createElement("style"),r=Jt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,e.appendChild(i)}},_s=Ie?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let i of t.cssRules)s+=i.cssText;return Br(s)})(e):e,{is:Vr,defineProperty:Jr,getOwnPropertyDescriptor:Qr,getOwnPropertyNames:Kr,getOwnPropertySymbols:Zr,getPrototypeOf:Gr}=Object,ae=globalThis,ms=ae.trustedTypes,Yr=ms?ms.emptyScript:"",Xr=ae.reactiveElementPolyfillSupport,kt=(e,t)=>e,Ee={toAttribute(e,t){switch(t){case Boolean:e=e?Yr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Ai=(e,t)=>!Vr(e,t),gs={attribute:!0,type:String,converter:Ee,reflect:!1,useDefault:!1,hasChanged:Ai};Symbol.metadata??=Symbol("metadata"),ae.litPropertyMetadata??=new WeakMap;var ct=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=gs){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(t,i,s);r!==void 0&&Jr(this.prototype,t,r)}}static getPropertyDescriptor(t,s,i){let{get:r,set:n}=Qr(this.prototype,t)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){let a=r?.call(this);n?.call(this,o),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??gs}static _$Ei(){if(this.hasOwnProperty(kt("elementProperties")))return;let t=Gr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(kt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(kt("properties"))){let s=this.properties,i=[...Kr(s),...Zr(s)];for(let r of i)this.createProperty(r,s[r])}let t=this[Symbol.metadata];if(t!==null){let s=litPropertyMetadata.get(t);if(s!==void 0)for(let[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[s,i]of this.elementProperties){let r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let s=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let r of i)s.unshift(_s(r))}else t!==void 0&&s.push(_s(t));return s}static _$Eu(t,s){let i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,s=this.constructor.elementProperties;for(let i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return jr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$ET(t,s){let i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute===void 0?Ee:i.converter).toAttribute(s,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,s){let i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Ee:n.converter;this._$Em=r;let a=o.fromAttribute(s,n.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,s,i,r=!1,n){if(t!==void 0){let o=this.constructor;if(r===!1&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??Ai)(n,s)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??s??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,n]of i){let{wrapped:o}=n,a=this[r];o!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,n,a)}}let t=!1,s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(t){}firstUpdated(t){}};ct.elementStyles=[],ct.shadowRootOptions={mode:"open"},ct[kt("elementProperties")]=new Map,ct[kt("finalized")]=new Map,Xr?.({ReactiveElement:ct}),(ae.reactiveElementVersions??=[]).push("2.1.2");var ze=globalThis,$s=e=>e,Xt=ze.trustedTypes,bs=Xt?Xt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Si="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,Ei="?"+O,tn=`<${Ei}>`,ot=document,Nt=()=>ot.createComment(""),Ht=e=>e===null||typeof e!="object"&&typeof e!="function",qe=Array.isArray,en=e=>qe(e)||typeof e?.[Symbol.iterator]=="function",ge=`[ 	
\f\r]`,vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vs=/-->/g,ys=/>/g,V=RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ws=/'/g,As=/"/g,ki=/^(?:script|style|textarea|title)$/i,g=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),ft=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Ss=new WeakMap,Z=ot.createTreeWalker(ot,129);function Pi(e,t){if(!qe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return bs===void 0?t:bs.createHTML(t)}var sn=(e,t)=>{let s=e.length-1,i=[],r,n=t===2?"<svg>":t===3?"<math>":"",o=vt;for(let a=0;a<s;a++){let l=e[a],h,u,p=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===vt?u[1]==="!--"?o=vs:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=V):(ki.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=V):o=ys:o===V?u[0]===">"?(o=r??vt,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?V:u[3]==='"'?As:ws):o===As||o===ws?o=V:o===vs||o===ys?o=vt:(o=V,r=void 0);let f=o===V&&e[a+1].startsWith("/>")?" ":"";n+=o===vt?l+tn:p>=0?(i.push(h),l.slice(0,p)+Si+l.slice(p)+O+f):l+O+(p===-2?a:f)}return[Pi(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},ke=class xi{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let n=0,o=0,a=t.length-1,l=this.parts,[h,u]=sn(t,s);if(this.el=xi.createElement(h,i),Z.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Z.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Si)){let d=u[o++],f=r.getAttribute(p).split(O),m=/([.?@])?(.*)/.exec(d);l.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?nn:m[1]==="?"?on:m[1]==="@"?an:le}),r.removeAttribute(p)}else p.startsWith(O)&&(l.push({type:6,index:n}),r.removeAttribute(p));if(ki.test(r.tagName)){let p=r.textContent.split(O),d=p.length-1;if(d>0){r.textContent=Xt?Xt.emptyScript:"";for(let f=0;f<d;f++)r.append(p[f],Nt()),Z.nextNode(),l.push({type:2,index:++n});r.append(p[d],Nt())}}}else if(r.nodeType===8)if(r.data===Ei)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(O,p+1))!==-1;)l.push({type:7,index:n}),p+=O.length-1}n++}}static createElement(t,s){let i=ot.createElement("template");return i.innerHTML=t,i}};function _t(e,t,s=e,i){if(t===ft)return t;let r=i===void 0?s._$Cl:s._$Co?.[i],n=Ht(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(e),r._$AT(e,s,i)),i===void 0?s._$Cl=r:(s._$Co??=[])[i]=r),r!==void 0&&(t=_t(e,r._$AS(e,t.values),r,i)),t}var rn=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:s},parts:i}=this._$AD,r=(t?.creationScope??ot).importNode(s,!0);Z.currentNode=r;let n=Z.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new We(n,n.nextSibling,this,t):l.type===1?h=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(h=new ln(n,this,t)),this._$AV.push(h),l=i[++a]}o!==l?.index&&(n=Z.nextNode(),o++)}return Z.currentNode=ot,r}p(t){let s=0;for(let i of this._$AV)i!==void 0&&(i.strings===void 0?i._$AI(t[s]):(i._$AI(t,i,s),s+=i.strings.length-2)),s++}},We=class Ci{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=_t(this,t,s),Ht(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==ft&&this._(t):t._$litType$===void 0?t.nodeType===void 0?en(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&Ht(this._$AH)?this._$AA.nextSibling.data=t:this.T(ot.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ke.createElement(Pi(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let n=new rn(r,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(t){let s=Ss.get(t.strings);return s===void 0&&Ss.set(t.strings,s=new ke(t)),s}k(t){qe(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let n of t)r===s.length?s.push(i=new Ci(this.O(Nt()),this.O(Nt()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let i=$s(t).nextSibling;$s(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},le=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,r,n){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(t,s=this,i,r){let n=this.strings,o=!1;if(n===void 0)t=_t(this,t,s,0),o=!Ht(t)||t!==this._$AH&&t!==ft,o&&(this._$AH=t);else{let a=t,l,h;for(t=n[0],l=0;l<n.length-1;l++)h=_t(this,a[i+l],s,l),h===ft&&(h=this._$AH[l]),o||=!Ht(h)||h!==this._$AH[l],h===b?t=b:t!==b&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!r&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},nn=class extends le{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}},on=class extends le{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}},an=class extends le{constructor(t,s,i,r,n){super(t,s,i,r,n),this.type=5}_$AI(t,s=this){if((t=_t(this,t,s,0)??b)===ft)return;let i=this._$AH,r=t===b&&i!==b||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==b&&(i===b||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ln=class{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){_t(this,t)}},dn=ze.litHtmlPolyfillSupport;dn?.(ke,We),(ze.litHtmlVersions??=[]).push("3.3.3");var hn=(e,t,s)=>{let i=s?.renderBefore??t,r=i._$litPart$;if(r===void 0){let n=s?.renderBefore??null;i._$litPart$=r=new We(t.insertBefore(Nt(),n),n,void 0,s??{})}return r._$AI(e),r},Fe=globalThis,X=class extends ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=hn(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ft}};X._$litElement$=!0,X.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:X});var cn=Fe.litElementPolyfillSupport;cn?.({LitElement:X}),(Fe.litElementVersions??=[]).push("4.2.2");var un={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function pn(e){return e===void 0||Number.isNaN(e)?"Unknown":e>=-55?"Excellent":e>=-67?"Good":e>=-75?"Fair":"Weak"}function fn(e){return e===1?"Full":e===0?"Half":`Unknown (${e})`}function _n(e){let t=s=>String(s).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}var tt,mn=(tt=class extends X{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(t){t.has("pollIntervalMs")&&this.startPolling();let s=t.get("baseUrl");t.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let t=this.status;return g`
      <div class="card">
        <header class="head">
          ${t?g`<span class="badge badge-${t.mode}">${un[t.mode]}</span>`:g`<span class="badge badge-unknown">Unknown</span>`}
          ${t?g`<span class="state ${t.connected?"state-up":"state-down"}">
                ${t.connected?"Connected":"Disconnected"}
              </span>`:b}
          ${this.loading?g`<span class="muted loading">Refreshing…</span>`:b}
        </header>

        ${t?.fallbackAP?g`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:b}
        ${this.errorMessage?g`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:b}
        ${t?this.renderSections(t):g`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?g`Updated ${_n(this.lastUpdated)}`:g`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(t){switch(t.mode){case"wifi":return this.renderWifi(t);case"wifi_ap":return this.renderAp(t);case"ethernet":return this.renderEthernet(t)}}renderWifi(t){return g`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",t.ssid)}
          ${this.row("Signal",t.rssi===void 0?void 0:`${t.rssi} dBm (${pn(t.rssi)})`)}
          ${this.row("IP address",t.ip)} ${this.row("MAC address",t.mac)}
        </dl>
      </section>
    `}renderAp(t){let s=t.ap;return g`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",s?.ssid)} ${this.row("IP address",s?.ip)}
          ${this.row("Stations",s?.stations)}
        </dl>
      </section>
    `}renderEthernet(t){let s=t.eth;return g`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",s?.ip)} ${this.row("MAC address",s?.mac)}
          ${this.row("Link",s===void 0?void 0:s.linkUp?"Up":"Down")}
          ${this.row("Speed",s===void 0?void 0:`${s.speed} Mbps`)}
          ${this.row("Duplex",s===void 0?void 0:fn(s.duplex))}
        </dl>
      </section>
    `}row(t,s){return s===void 0||s===""?b:g`<dt>${t}</dt>
          <dd>${s}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=yi({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let t=++this.refreshSeq;this.loading=!0;let s=await this.ensureClient().getStatus();if(t===this.refreshSeq){if(this.loading=!1,s.ok){this.status=s.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=s.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:s.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let t=Number(this.pollIntervalMs);!Number.isFinite(t)||t<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},t))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},tt.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},tt.styles=Le`
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
  `,tt);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",mn);var qt=32,yt=64,$e=8,gn=5e3,$n=new TextEncoder;function Wt(e){return $n.encode(e).length}function Es(e){return e.isAPMode?"ap":"station"}var et,bn=(et=class extends X{constructor(...t){super(...t),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=s=>{this.draftWifiSSID=s.target.value},this.handleWifiPasswordInput=s=>{this.draftWifiPassword=s.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=s=>{this.draftApSSID=s.target.value},this.handleApPasswordInput=s=>{this.draftApPassword=s.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=s=>{this.draftApHasPassword=s.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=s=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=s,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=s=>{s.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(t){let s=t.get("baseUrl");t.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let t=this.settings;return g`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?g`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:b}
        ${this.successMessage?g`<div class="banner banner-success" role="status">${this.successMessage}</div>`:b}
        ${t?g`${this.renderForm(t)} ${this.renderScan()}`:this.loading?g`<p class="status">Loading settings…</p>`:g`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(t){return g`
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
          ${this.dirty?g`<span class="muted">Unsaved changes</span>`:b}
        </div>
      </form>
    `}renderStation(t){return g`
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
        ${t.hasWifiPassword?g`<p class="hint">Password saved •••• (leave blank to keep)</p>`:b}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(t){return g`
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
        ${this.draftApHasPassword?g`
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
              ${t.hasWifiAPPassword?g`<p class="hint">Password saved •••• (leave blank to keep)</p>`:b}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:b}
      </section>
    `}renderScan(){return g`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?g`<div class="banner banner-error" role="alert">${this.scanError}</div>`:b}
        ${this.scanResults.length>0?g`<ul class="networks">
              ${this.scanResults.map(t=>this.renderNetwork(t))}
            </ul>`:b}
      </section>
    `}renderNetwork(t){return g`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(t.ssid)}>
          <span class="ssid">${t.ssid}</span>
          <span class="meta">
            ${t.encrypted?g`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:b}
            ${t.rssi} dBm · Ch ${t.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(t){let s=this.fieldErrors[t];return s?g`<p class="field-error" role="alert">${s}</p>`:b}renderPasswordClearWarning(t){return(t==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?g`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:b}get dirty(){let t=this.settings;return t?this.draftMode!==Es(t)||this.draftWifiSSID!==t.wifiSSID||this.draftApSSID!==t.wifiAPSSID||this.draftApHasPassword!==t.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=yi({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let t=++this.loadToken;this.loading=!0;let s=await this.ensureClient().getSettings();if(t!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,s.ok){this.applyServerSettings(s.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=s.message,this.emitError(s.message)}applyServerSettings(t){this.settings=t,this.settingsBaseUrl=this.baseUrl,this.draftMode=Es(t),this.draftWifiSSID=t.wifiSSID,this.draftApSSID=t.wifiAPSSID,this.draftApHasPassword=t.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let t=this.settings,s={};if(!t)return s;let i=this.draftMode==="ap";if(Wt(this.draftWifiSSID)>qt&&(s.wifiSSID=`Wi-Fi name must be ${qt} characters or fewer.`),Wt(this.draftApSSID)>qt&&(s.wifiAPSSID=`Access point name must be ${qt} characters or fewer.`),i?this.draftApSSID.length===0&&(s.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(s.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&Wt(this.draftWifiPassword)>yt&&(s.wifiPassword=`Wi-Fi password must be ${yt} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let r=Wt(this.draftApPassword);(r<$e||r>yt)&&(s.wifiAPPassword=`Access point password must be ${$e}–${yt} characters.`)}else t.hasWifiAPPassword||(s.wifiAPPassword=`Enter an access point password (${$e}–${yt} characters).`);return s}buildPatch(){let t=this.settings,s={};if(!t)return s;let i=this.draftMode==="ap";return i!==t.isAPMode&&(s.isAPMode=i),this.draftWifiSSID!==t.wifiSSID&&(s.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(s.wifiPassword=this.draftWifiPassword),this.draftApSSID!==t.wifiAPSSID&&(s.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==t.wifiAPHasPassword&&(s.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(s.wifiAPPassword=this.draftApPassword),s}async handleSave(){if(this.submitting||!this.settings)return;let t=this.validate();if(this.fieldErrors=t,Object.keys(t).length>0)return;let s=this.buildPatch();if(Object.keys(s).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let i=await this.ensureClient().saveSettings(s);if(this.submitting=!1,i.ok){this.applyServerSettings(i.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:i.data,bubbles:!0,composed:!0}));return}let r=i.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":i.message;this.errorMessage=r,this.emitError(r)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let t=new AbortController;this.scanController=t;let s,i=new Promise(n=>{s=setTimeout(()=>{t.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},gn)}),r=await Promise.race([this.ensureClient().wifiList(t.signal),i]);if(s!==void 0&&clearTimeout(s),this.scanController===t&&(this.scanController=void 0),this.scanning=!1,r.ok){this.scanResults=[...r.data.networks].sort((n,o)=>o.rssi-n.rssi);return}r.message!=="Request aborted."&&(this.scanError=r.message,this.emitError(r.message))}emitError(t){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:t},bubbles:!0,composed:!0}))}setMode(t){this.draftMode!==t&&(this.draftMode=t,this.fieldErrors={})}},et.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},et.styles=Le`
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
  `,et);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",bn);var vn=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],st,yn=(st=class extends X{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return g`
      <div class="tabs" role="tablist" aria-label="Network">
        ${vn.map(t=>g`
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
    `}renderActive(){return this.activeTab==="settings"?g`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:g`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(t){this.activeTab!==t&&(this.activeTab=t,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:t},bubbles:!0,composed:!0})))}},st.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},st.styles=Le`
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
  `,st);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",yn);var Ti="Network request failed. Check the device connection and try again.",wn={};function An(e){if(e&&typeof e=="object"&&"message"in e){let t=e.message;if(typeof t=="string"&&t.length>0)return t}}function Sn(e,t){return t?.aborted===!0||typeof e=="object"&&!!e&&e.name==="AbortError"}function Ui(e,t){return Sn(e,t)?{ok:!1,message:"Request aborted."}:{ok:!1,message:Ti}}async function Mi(e,t){let s=t;try{let i=await e.text();if(i.length>0)try{s=An(JSON.parse(i))??s}catch{}}catch{}return{ok:!1,status:e.status,message:s}}async function ks(e,t,s,i,r,n){let o;try{o=await fetch(e,{headers:{Accept:t,...r},signal:n})}catch(l){return Ui(l,n)}if(!o.ok)return Mi(o,o.status===404?i:`Request failed with HTTP ${o.status}.`);let a;try{a=new Uint8Array(await o.arrayBuffer())}catch{return{ok:!1,status:o.status,message:Ti}}return a.byteLength===0?{ok:!1,status:o.status,message:s}:{ok:!0,data:a}}async function Ps(e,t,s,i,r){if(t.byteLength===0)return{ok:!1,message:s};let n=new ArrayBuffer(t.byteLength);new Uint8Array(n).set(t);let o;try{o=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...i},body:n,signal:r})}catch(a){return Ui(a,r)}return o.ok?(await o.text().catch(()=>""),{ok:!0,data:wn}):Mi(o,`Upload failed with HTTP ${o.status}.`)}function En(e={}){let t=e.baseUrl??"",s=e.backupPath??"/api/config/backup",i=e.configPath??"/api/config",r=e.headers??{},n=`${t}${s}`,o=`${t}${i}`;return{downloadBackup(a){return ks(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",r,a)},downloadConfig(a){return ks(o,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",r,a)},uploadBackup(a,l){return Ps(n,a,"Cannot upload an empty archive.",r,l)},uploadConfig(a,l){return Ps(o,a,"Cannot upload an empty config file.",r,l)}}}var Qt=globalThis,Be=Qt.ShadowRoot&&(Qt.ShadyCSS===void 0||Qt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,je=Symbol(),xs=new WeakMap,Ni=class{constructor(t,s,i){if(this._$cssResult$=!0,i!==je)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o,s=this.t;if(Be&&t===void 0){let i=s!==void 0&&s.length===1;i&&(t=xs.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&xs.set(s,t))}return t}toString(){return this.cssText}},kn=e=>new Ni(typeof e=="string"?e:e+"",void 0,je),Pn=(e,...t)=>new Ni(e.length===1?e[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]),e,je),xn=(e,t)=>{if(Be)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let i=document.createElement("style"),r=Qt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,e.appendChild(i)}},Cs=Be?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let i of t.cssRules)s+=i.cssText;return kn(s)})(e):e,{is:Cn,defineProperty:Tn,getOwnPropertyDescriptor:Un,getOwnPropertyNames:Mn,getOwnPropertySymbols:Nn,getPrototypeOf:Hn}=Object,de=globalThis,Ts=de.trustedTypes,Dn=Ts?Ts.emptyScript:"",Rn=de.reactiveElementPolyfillSupport,Pt=(e,t)=>e,Pe={toAttribute(e,t){switch(t){case Boolean:e=e?Dn:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Hi=(e,t)=>!Cn(e,t),Us={attribute:!0,type:String,converter:Pe,reflect:!1,useDefault:!1,hasChanged:Hi};Symbol.metadata??=Symbol("metadata"),de.litPropertyMetadata??=new WeakMap;var ut=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Us){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(t,i,s);r!==void 0&&Tn(this.prototype,t,r)}}static getPropertyDescriptor(t,s,i){let{get:r,set:n}=Un(this.prototype,t)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){let a=r?.call(this);n?.call(this,o),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Us}static _$Ei(){if(this.hasOwnProperty(Pt("elementProperties")))return;let t=Hn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Pt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Pt("properties"))){let s=this.properties,i=[...Mn(s),...Nn(s)];for(let r of i)this.createProperty(r,s[r])}let t=this[Symbol.metadata];if(t!==null){let s=litPropertyMetadata.get(t);if(s!==void 0)for(let[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[s,i]of this.elementProperties){let r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let s=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let r of i)s.unshift(Cs(r))}else t!==void 0&&s.push(Cs(t));return s}static _$Eu(t,s){let i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,s=this.constructor.elementProperties;for(let i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xn(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$ET(t,s){let i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute===void 0?Pe:i.converter).toAttribute(s,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,s){let i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Pe:n.converter;this._$Em=r;let a=o.fromAttribute(s,n.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,s,i,r=!1,n){if(t!==void 0){let o=this.constructor;if(r===!1&&(n=this[t]),i??=o.getPropertyOptions(t),!((i.hasChanged??Hi)(n,s)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,i))))return;this.C(t,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??s??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,n]of i){let{wrapped:o}=n,a=this[r];o!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,n,a)}}let t=!1,s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(t){}firstUpdated(t){}};ut.elementStyles=[],ut.shadowRootOptions={mode:"open"},ut[Pt("elementProperties")]=new Map,ut[Pt("finalized")]=new Map,Rn?.({ReactiveElement:ut}),(de.reactiveElementVersions??=[]).push("2.1.2");var Ve=globalThis,Ms=e=>e,te=Ve.trustedTypes,Ns=te?te.createPolicy("lit-html",{createHTML:e=>e}):void 0,Di="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,Ri="?"+L,In=`<${Ri}>`,at=document,Dt=()=>at.createComment(""),Rt=e=>e===null||typeof e!="object"&&typeof e!="function",Je=Array.isArray,On=e=>Je(e)||typeof e?.[Symbol.iterator]=="function",be=`[ 	
\f\r]`,wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Hs=/-->/g,Ds=/>/g,J=RegExp(`>|${be}(?:([^\\s"'>=/]+)(${be}*=${be}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rs=/'/g,Is=/"/g,Ii=/^(?:script|style|textarea|title)$/i,D=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),mt=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Os=new WeakMap,G=at.createTreeWalker(at,129);function Oi(e,t){if(!Je(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ns===void 0?t:Ns.createHTML(t)}var Ln=(e,t)=>{let s=e.length-1,i=[],r,n=t===2?"<svg>":t===3?"<math>":"",o=wt;for(let a=0;a<s;a++){let l=e[a],h,u,p=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===wt?u[1]==="!--"?o=Hs:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=J):(Ii.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=J):o=Ds:o===J?u[0]===">"?(o=r??wt,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?J:u[3]==='"'?Is:Rs):o===Is||o===Rs?o=J:o===Hs||o===Ds?o=wt:(o=J,r=void 0);let f=o===J&&e[a+1].startsWith("/>")?" ":"";n+=o===wt?l+In:p>=0?(i.push(h),l.slice(0,p)+Di+l.slice(p)+L+f):l+L+(p===-2?a:f)}return[Oi(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},xe=class Li{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let n=0,o=0,a=t.length-1,l=this.parts,[h,u]=Ln(t,s);if(this.el=Li.createElement(h,i),G.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=G.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Di)){let d=u[o++],f=r.getAttribute(p).split(L),m=/([.?@])?(.*)/.exec(d);l.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?qn:m[1]==="?"?Wn:m[1]==="@"?Fn:he}),r.removeAttribute(p)}else p.startsWith(L)&&(l.push({type:6,index:n}),r.removeAttribute(p));if(Ii.test(r.tagName)){let p=r.textContent.split(L),d=p.length-1;if(d>0){r.textContent=te?te.emptyScript:"";for(let f=0;f<d;f++)r.append(p[f],Dt()),G.nextNode(),l.push({type:2,index:++n});r.append(p[d],Dt())}}}else if(r.nodeType===8)if(r.data===Ri)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(L,p+1))!==-1;)l.push({type:7,index:n}),p+=L.length-1}n++}}static createElement(t,s){let i=at.createElement("template");return i.innerHTML=t,i}};function gt(e,t,s=e,i){if(t===mt)return t;let r=i===void 0?s._$Cl:s._$Co?.[i],n=Rt(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(e),r._$AT(e,s,i)),i===void 0?s._$Cl=r:(s._$Co??=[])[i]=r),r!==void 0&&(t=gt(e,r._$AS(e,t.values),r,i)),t}var zn=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:s},parts:i}=this._$AD,r=(t?.creationScope??at).importNode(s,!0);G.currentNode=r;let n=G.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new Qe(n,n.nextSibling,this,t):l.type===1?h=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(h=new Bn(n,this,t)),this._$AV.push(h),l=i[++a]}o!==l?.index&&(n=G.nextNode(),o++)}return G.currentNode=at,r}p(t){let s=0;for(let i of this._$AV)i!==void 0&&(i.strings===void 0?i._$AI(t[s]):(i._$AI(t,i,s),s+=i.strings.length-2)),s++}},Qe=class zi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,r){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=gt(this,t,s),Rt(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==mt&&this._(t):t._$litType$===void 0?t.nodeType===void 0?On(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&Rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(at.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=xe.createElement(Oi(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let n=new zn(r,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(t){let s=Os.get(t.strings);return s===void 0&&Os.set(t.strings,s=new xe(t)),s}k(t){Je(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let n of t)r===s.length?s.push(i=new zi(this.O(Dt()),this.O(Dt()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let i=Ms(t).nextSibling;Ms(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},he=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,i,r,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(t,s=this,i,r){let n=this.strings,o=!1;if(n===void 0)t=gt(this,t,s,0),o=!Rt(t)||t!==this._$AH&&t!==mt,o&&(this._$AH=t);else{let a=t,l,h;for(t=n[0],l=0;l<n.length-1;l++)h=gt(this,a[i+l],s,l),h===mt&&(h=this._$AH[l]),o||=!Rt(h)||h!==this._$AH[l],h===y?t=y:t!==y&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!r&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},qn=class extends he{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}},Wn=class extends he{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}},Fn=class extends he{constructor(t,s,i,r,n){super(t,s,i,r,n),this.type=5}_$AI(t,s=this){if((t=gt(this,t,s,0)??y)===mt)return;let i=this._$AH,r=t===y&&i!==y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==y&&(i===y||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Bn=class{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){gt(this,t)}},jn=Ve.litHtmlPolyfillSupport;jn?.(xe,Qe),(Ve.litHtmlVersions??=[]).push("3.3.3");var Vn=(e,t,s)=>{let i=s?.renderBefore??t,r=i._$litPart$;if(r===void 0){let n=s?.renderBefore??null;i._$litPart$=r=new Qe(t.insertBefore(Dt(),n),n,void 0,s??{})}return r._$AI(e),r},Ke=globalThis,xt=class extends ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Vn(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return mt}};xt._$litElement$=!0,xt.finalized=!0,Ke.litElementHydrateSupport?.({LitElement:xt});var Jn=Ke.litElementPolyfillSupport;Jn?.({LitElement:xt}),(Ke.litElementVersions??=[]).push("4.2.2");var Ls=2e3,Qn=12e4,zs="Unsupported file type. Choose a .zip full backup or a .bin config file.";function ve(e){let t=e.toLowerCase();return t.endsWith(".zip")?"archive":t.endsWith(".bin")?"config":null}function Kn(e,t){if(typeof URL.createObjectURL!="function")return;let s=new ArrayBuffer(e.byteLength);new Uint8Array(s).set(e);let i=new Blob([s],{type:"application/octet-stream"}),r=URL.createObjectURL(i),n=document.createElement("a");n.href=r,n.download=t,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}var it,Zn=(it=class extends xt{constructor(...t){super(...t),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return D`
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
            ${this.fileError?D`<span class="field-error" role="alert">${this.fileError}</span>`:y}
          </label>
          ${this.selectedFile&&!this.fileError?D`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${ve(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:y}
          ${this.uploadError?D`<div class="banner banner-error" role="alert">
                ${this.uploadError}
              </div>`:y}
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
    `}renderNotice(t){return t?D`<div
      class="banner banner-${t.kind}"
      role=${t.kind==="error"?"alert":"status"}
    >
      ${t.message}
    </div>`:y}renderRebootOverlay(){return this.phase==="idle"?y:D`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?D`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:y}
          ${this.phase==="ready"?D`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:y}
          ${this.phase==="timeout"?D`
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
              `:y}
        </div>
      </div>
    `}createClient(){return En({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(t){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let s=this.createClient(),i=t==="archive"?await s.downloadBackup():await s.downloadConfig();if(!i.ok){this.downloadNotice={kind:"error",message:i.message};return}let r=t==="archive"?this.archiveFileName:this.binFileName;Kn(i.data,r),this.downloadNotice={kind:"info",message:t==="archive"?`Full backup downloaded as ${r}.`:`Config downloaded as ${r}.`}}finally{this.downloading=!1}}}handleFileChange(t){let s=t.currentTarget,i=s.files&&s.files[0]?s.files[0]:null;this.selectedFile=i,this.uploadError=null,this.fileError=i?i.size===0?"The selected file is empty.":i.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:ve(i.name)?null:zs:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let t=ve(this.selectedFile.name);if(!t)this.uploadError=zs;else if(window.confirm(t==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let s;try{s=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let i=this.createClient(),r=t==="archive"?await i.uploadBackup(s):await i.uploadConfig(s);if(!r.ok){this.uploadError=r.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:t},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let t=this.renderRoot.querySelector("#edc-restore-file");t&&(t.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},Ls)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let t=!1;try{let s=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(s.ok){let i=await s.json();t=!!i&&typeof i=="object"&&i.healty===!0}}catch{t=!1}this.isConnected&&this.phase==="rebooting"&&(t?this.phase="ready":(this._attempts+=1,this._attempts*Ls>=Qn?this.phase="timeout":this.schedulePoll()))}},it.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},it.styles=Pn`
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
  `,it);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",Zn);var qs="Invalid settings response.";function Gn(e){if(e&&typeof e=="object"&&"message"in e){let t=e.message;if(typeof t=="string"&&t.length>0)return t}}function Yn(e,t){return t?.aborted===!0||typeof e=="object"&&!!e&&e.name==="AbortError"}function qi(e,t){return Yn(e,t)?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}async function Wi(e,t){let s=t;try{let i=await e.text();if(i.length>0)try{s=Gn(JSON.parse(i))??s}catch{}}catch{}return{ok:!1,status:e.status,message:s}}function Xn(e){if(!e||typeof e!="object")return;let{host:t,uri:s,port:i,enabled:r}=e;if(typeof t=="string"&&typeof s=="string"&&typeof i=="number"&&Number.isFinite(i)&&typeof r=="boolean")return{host:t,uri:s,port:i,enabled:r}}async function Fi(e){let t;try{t=await e.json()}catch{return{ok:!1,status:e.status,message:qs}}let s=Xn(t);return s?{ok:!0,data:s}:{ok:!1,status:e.status,message:qs}}async function to(e,t,s){let i;try{i=await fetch(e,{headers:{Accept:"application/json",...t},signal:s})}catch(r){return qi(r,s)}return i.ok?Fi(i):Wi(i,"Could not load the logger settings from the device.")}async function eo(e,t,s,i){let r;try{r=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...s},body:JSON.stringify(t),signal:i})}catch(n){return qi(n,i)}return r.ok?Fi(r):Wi(r,"The device rejected the logger settings.")}function so(e={}){let t=e.baseUrl??"",s=e.settingsPath??"/api/log/settings",i=e.headers??{},r=`${t}${s}`;return{getSettings(n){return to(r,i,n)},saveSettings(n,o){return eo(r,n,i,o)}}}var Kt=globalThis,Ze=Kt.ShadowRoot&&(Kt.ShadyCSS===void 0||Kt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),Ws=new WeakMap,Bi=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Ze&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=Ws.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&Ws.set(t,e))}return e}toString(){return this.cssText}},io=e=>new Bi(typeof e=="string"?e:e+"",void 0,Ge),ro=(e,...t)=>new Bi(e.length===1?e[0]:t.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]),e,Ge),no=(e,t)=>{if(Ze)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let i=document.createElement("style"),r=Kt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,e.appendChild(i)}},Fs=Ze?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let i of t.cssRules)s+=i.cssText;return io(s)})(e):e,{is:oo,defineProperty:ao,getOwnPropertyDescriptor:lo,getOwnPropertyNames:ho,getOwnPropertySymbols:co,getPrototypeOf:uo}=Object,ce=globalThis,Bs=ce.trustedTypes,po=Bs?Bs.emptyScript:"",fo=ce.reactiveElementPolyfillSupport,Ct=(e,t)=>e,Ce={toAttribute(e,t){switch(t){case Boolean:e=e?po:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},ji=(e,t)=>!oo(e,t),js={attribute:!0,type:String,converter:Ce,reflect:!1,useDefault:!1,hasChanged:ji};Symbol.metadata??=Symbol("metadata"),ce.litPropertyMetadata??=new WeakMap;var pt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=js){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&ao(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){let{get:i,set:r}=lo(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){let o=i?.call(this);r?.call(this,n),this.requestUpdate(e,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??js}static _$Ei(){if(this.hasOwnProperty(Ct("elementProperties")))return;let e=uo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ct("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ct("properties"))){let t=this.properties,s=[...ho(t),...co(t)];for(let i of s)this.createProperty(i,t[i])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let i of s)t.unshift(Fs(i))}else e!==void 0&&t.push(Fs(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return no(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute===void 0?Ce:s.converter).toAttribute(t,s.type);this._$Em=e,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(e,t){let s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute===void 0?Ce:r.converter;this._$Em=i;let o=n.fromAttribute(t,r.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(e,t,s,i=!1,r){if(e!==void 0){let n=this.constructor;if(i===!1&&(r=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??ji)(r,t)||s.useDefault&&s.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),r!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,o=this[i];n!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,r,o)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};pt.elementStyles=[],pt.shadowRootOptions={mode:"open"},pt[Ct("elementProperties")]=new Map,pt[Ct("finalized")]=new Map,fo?.({ReactiveElement:pt}),(ce.reactiveElementVersions??=[]).push("2.1.2");var Ye=globalThis,Vs=e=>e,ee=Ye.trustedTypes,Js=ee?ee.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vi="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,Ji="?"+z,_o=`<${Ji}>`,lt=document,It=()=>lt.createComment(""),Ot=e=>e===null||typeof e!="object"&&typeof e!="function",Xe=Array.isArray,mo=e=>Xe(e)||typeof e?.[Symbol.iterator]=="function",ye=`[ 	
\f\r]`,At=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qs=/-->/g,Ks=/>/g,Q=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Zs=/'/g,Gs=/"/g,Qi=/^(?:script|style|textarea|title)$/i,Ys=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),$t=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Xs=new WeakMap,Y=lt.createTreeWalker(lt,129);function Ki(e,t){if(!Xe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Js===void 0?t:Js.createHTML(t)}var go=(e,t)=>{let s=e.length-1,i=[],r,n=t===2?"<svg>":t===3?"<math>":"",o=At;for(let a=0;a<s;a++){let l=e[a],h,u,p=-1,d=0;for(;d<l.length&&(o.lastIndex=d,u=o.exec(l),u!==null);)d=o.lastIndex,o===At?u[1]==="!--"?o=Qs:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=Q):(Qi.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=Q):o=Ks:o===Q?u[0]===">"?(o=r??At,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?Q:u[3]==='"'?Gs:Zs):o===Gs||o===Zs?o=Q:o===Qs||o===Ks?o=At:(o=Q,r=void 0);let f=o===Q&&e[a+1].startsWith("/>")?" ":"";n+=o===At?l+_o:p>=0?(i.push(h),l.slice(0,p)+Vi+l.slice(p)+z+f):l+z+(p===-2?a:f)}return[Ki(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]},Te=class Zi{constructor({strings:t,_$litType$:s},i){let r;this.parts=[];let n=0,o=0,a=t.length-1,l=this.parts,[h,u]=go(t,s);if(this.el=Zi.createElement(h,i),Y.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=Y.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Vi)){let d=u[o++],f=r.getAttribute(p).split(z),m=/([.?@])?(.*)/.exec(d);l.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?bo:m[1]==="?"?vo:m[1]==="@"?yo:ue}),r.removeAttribute(p)}else p.startsWith(z)&&(l.push({type:6,index:n}),r.removeAttribute(p));if(Qi.test(r.tagName)){let p=r.textContent.split(z),d=p.length-1;if(d>0){r.textContent=ee?ee.emptyScript:"";for(let f=0;f<d;f++)r.append(p[f],It()),Y.nextNode(),l.push({type:2,index:++n});r.append(p[d],It())}}}else if(r.nodeType===8)if(r.data===Ji)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(z,p+1))!==-1;)l.push({type:7,index:n}),p+=z.length-1}n++}}static createElement(t,s){let i=lt.createElement("template");return i.innerHTML=t,i}};function bt(e,t,s=e,i){if(t===$t)return t;let r=i===void 0?s._$Cl:s._$Co?.[i],n=Ot(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(e),r._$AT(e,s,i)),i===void 0?s._$Cl=r:(s._$Co??=[])[i]=r),r!==void 0&&(t=bt(e,r._$AS(e,t.values),r,i)),t}var $o=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??lt).importNode(t,!0);Y.currentNode=i;let r=Y.nextNode(),n=0,o=0,a=s[0];for(;a!==void 0;){if(n===a.index){let l;a.type===2?l=new ts(r,r.nextSibling,this,e):a.type===1?l=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(l=new wo(r,this,e)),this._$AV.push(l),a=s[++o]}n!==a?.index&&(r=Y.nextNode(),n++)}return Y.currentNode=lt,i}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(e[t]):(s._$AI(e,s,t),t+=s.strings.length-2)),t++}},ts=class Gi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,i,r){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=bt(this,t,s),Ot(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==$t&&this._(t):t._$litType$===void 0?t.nodeType===void 0?mo(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==C&&Ot(this._$AH)?this._$AA.nextSibling.data=t:this.T(lt.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Te.createElement(Ki(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let n=new $o(r,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(t){let s=Xs.get(t.strings);return s===void 0&&Xs.set(t.strings,s=new Te(t)),s}k(t){Xe(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let n of t)r===s.length?s.push(i=new Gi(this.O(It()),this.O(It()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let i=Vs(t).nextSibling;Vs(t).remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ue=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,r){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=C}_$AI(e,t=this,s,i){let r=this.strings,n=!1;if(r===void 0)e=bt(this,e,t,0),n=!Ot(e)||e!==this._$AH&&e!==$t,n&&(this._$AH=e);else{let o=e,a,l;for(e=r[0],a=0;a<r.length-1;a++)l=bt(this,o[s+a],t,a),l===$t&&(l=this._$AH[a]),n||=!Ot(l)||l!==this._$AH[a],l===C?e=C:e!==C&&(e+=(l??"")+r[a+1]),this._$AH[a]=l}n&&!i&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},bo=class extends ue{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},vo=class extends ue{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},yo=class extends ue{constructor(e,t,s,i,r){super(e,t,s,i,r),this.type=5}_$AI(e,t=this){if((e=bt(this,e,t,0)??C)===$t)return;let s=this._$AH,i=e===C&&s!==C||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==C&&(s===C||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},wo=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){bt(this,e)}},Ao=Ye.litHtmlPolyfillSupport;Ao?.(Te,ts),(Ye.litHtmlVersions??=[]).push("3.3.3");var So=(e,t,s)=>{let i=s?.renderBefore??t,r=i._$litPart$;if(r===void 0){let n=s?.renderBefore??null;i._$litPart$=r=new ts(t.insertBefore(It(),n),n,void 0,s??{})}return r._$AI(e),r},es=globalThis,Tt=class extends pt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=So(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return $t}};Tt._$litElement$=!0,Tt.finalized=!0,es.litElementHydrateSupport?.({LitElement:Tt});var Eo=es.litElementPolyfillSupport;Eo?.({LitElement:Tt}),(es.litElementVersions??=[]).push("4.2.2");var rt,ko=(rt=class extends Tt{constructor(...t){super(...t),this.baseUrl="",this.settingsPath="/api/log/settings",this.deviceName="logger",this.maxHostLength=63,this.formHost="",this.formUri="",this.formPort="",this.formEnabled=!1,this.loading=!1,this.saving=!1,this.notice=null,this.loaded=!1,this._loadStarted=!1}connectedCallback(){super.connectedCallback(),this.load()}firstUpdated(){this._loadStarted||this.load()}render(){return Ys`
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
    `}renderNotice(t){return t?Ys`<div
      class="banner banner-${t.kind}"
      role=${t.kind==="error"?"alert":"status"}
    >
      ${t.text}
    </div>`:C}createClient(){return so({baseUrl:this.baseUrl,settingsPath:this.settingsPath})}async load(){if(!(this.loading||this.saving)){this._loadStarted=!0,this.loading=!0,this.notice=null;try{let t=await this.createClient().getSettings();if(!t.ok){this.notice={kind:"error",text:t.message};return}this.applySettings(t.data),this.loaded=!0}finally{this.loading=!1}}}applySettings(t){this.formHost=t.host,this.formUri=t.uri,this.formPort=String(t.port),this.formEnabled=t.enabled}handleHostInput(t){this.formHost=t.currentTarget.value}handleUriInput(t){this.formUri=t.currentTarget.value}handlePortInput(t){this.formPort=t.currentTarget.value}handleEnabledChange(t){this.formEnabled=t.currentTarget.checked}validate(){let t=this.formHost.trim(),s=this.formUri.trim();if(t.length===0)return"Host is required.";if(t.length>this.maxHostLength)return`Host must be ${this.maxHostLength} characters or fewer.`;if(s.length===0)return"URI is required.";if(s.length>this.maxHostLength)return`URI must be ${this.maxHostLength} characters or fewer.`;let i=this.formPort.trim();if(!/^\d+$/.test(i))return"Port must be a whole number between 1 and 65535.";let r=Number(i);return!Number.isInteger(r)||r<1||r>65535?"Port must be a whole number between 1 and 65535.":{host:t,uri:s,port:r,enabled:this.formEnabled}}async handleSave(){if(this.loading||this.saving)return;let t=this.validate();if(typeof t=="string")this.notice={kind:"error",text:t};else{this.saving=!0,this.notice=null;try{let s=await this.createClient().saveSettings(t);if(!s.ok){this.notice={kind:"error",text:s.message};return}this.applySettings(s.data),this.loaded=!0,this.notice={kind:"info",text:"Settings saved."},this.dispatchEvent(new CustomEvent("edu-log-saved",{detail:s.data,bubbles:!0,composed:!0}))}finally{this.saving=!1}}}},rt.properties={baseUrl:{type:String,attribute:"base-url"},settingsPath:{type:String,attribute:"settings-path"},deviceName:{type:String,attribute:"device-name"},maxHostLength:{type:Number,attribute:"max-host-length"},formHost:{state:!0},formUri:{state:!0},formPort:{state:!0},formEnabled:{state:!0},loading:{state:!0},saving:{state:!0},notice:{state:!0},loaded:{state:!0}},rt.styles=ro`
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
  `,rt);typeof customElements<"u"&&!customElements.get("edu-log-settings-page")&&customElements.define("edu-log-settings-page",ko);const ti=document.getElementById("app");ti&&nr(c(Wr,{}),ti);
