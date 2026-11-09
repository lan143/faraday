(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();var At,T,Lr,ie,Ps,jr,Br,Rt,ct,qe,qr,Gt,qt,Ft,_t={},bt=[],Hi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,St=Array.isArray;function se(t,e){for(var s in e)t[s]=e[s];return t}function Yt(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Ii(t,e,s){var i,r,n,o={};for(n in e)n=="key"?i=e[n]:n=="ref"?r=e[n]:o[n]=e[n];if(arguments.length>2&&(o.children=arguments.length>3?At.call(arguments,2):s),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)o[n]===void 0&&(o[n]=t.defaultProps[n]);return ht(t,o,i,r,null)}function ht(t,e,s,i,r){var n={type:t,props:e,key:s,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Lr,__i:-1,__u:0};return r==null&&T.vnode!=null&&T.vnode(n),n}function L(t){return t.children}function ut(t,e){this.props=t,this.context=e}function we(t,e){if(e==null)return t.__?we(t.__,t.__i+1):null;for(var s;e<t.__k.length;e++)if((s=t.__k[e])!=null&&s.__e!=null)return s.__e;return typeof t.type=="function"?we(t):null}function Oi(t){if(t.__P&&t.__d){var e=t.__v,s=e.__e,i=[],r=[],n=se({},e);n.__v=e.__v+1,T.vnode&&T.vnode(n),Xt(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[s]:null,i,s??we(e),!!(32&e.__u),r),n.__v=e.__v,n.__.__k[n.__i]=n,Jr(i,n,r),e.__e=e.__=null,n.__e!=s&&Fr(n)}}function Fr(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),Fr(t)}function Ms(t){(!t.__d&&(t.__d=!0)&&ie.push(t)&&!vt.__r++||Ps!=T.debounceRendering)&&((Ps=T.debounceRendering)||jr)(vt)}function vt(){try{for(var t,e=1;ie.length;)ie.length>e&&ie.sort(Br),t=ie.shift(),e=ie.length,Oi(t)}finally{ie.length=vt.__r=0}}function zr(t,e,s,i,r,n,o,d,l,h,u){var p,c,f,v,y,_,g=i&&i.__k||bt,$=e.length;for(l=Li(s,e,g,l,$),p=0;p<$;p++)(f=s.__k[p])!=null&&(c=f.__i!=-1&&g[f.__i]||_t,f.__i=p,_=Xt(t,f,c,r,n,o,d,l,h,u),v=f.__e,f.ref&&c.ref!=f.ref&&(c.ref&&es(c.ref,null,f),u.push(f.ref,f.__c||v,f)),y==null&&v!=null&&(y=v),4&f.__u?(l=Wr(f,l,t),c.__e&&(c.__e=null)):typeof f.type=="function"&&_!==void 0?l=_:v&&(l=v.nextSibling),f.__u&=-7);return s.__e=y,l}function Li(t,e,s,i,r){var n,o,d,l,h,u=s.length,p=u,c=0;for(t.__k=new Array(r),n=0;n<r;n++)(o=e[n])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=t.__k[n]=ht(null,o,null,null,null):St(o)?o=t.__k[n]=ht(L,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=t.__k[n]=ht(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):t.__k[n]=o,l=n+c,o.__=t,o.__b=t.__b+1,d=null,(h=o.__i=ji(o,s,l,p))!=-1&&(p--,(d=s[h])&&(d.__u|=2)),d==null||d.__v==null?(h==-1&&(r>u?c--:r<u&&c++),typeof o.type!="function"&&(o.__u|=4)):h!=l&&(h==l-1?c--:h==l+1?c++:(h>l?c--:c++,o.__u|=4))):t.__k[n]=null;if(p)for(n=0;n<u;n++)(d=s[n])!=null&&(2&d.__u)==0&&(d.__e==i&&(i=we(d)),Kr(d,d));return i}function Wr(t,e,s){var i,r;if(typeof t.type=="function"){for(i=t.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=t,e=Wr(i[r],e,s));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=we(t)),e=s.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ji(t,e,s,i){var r,n,o,d=t.key,l=t.type,h=e[s],u=h!=null&&(2&h.__u)==0;if(h===null&&d==null||u&&d==h.key&&l==h.type)return s;if(i>(u?1:0)){for(r=s-1,n=s+1;r>=0||n<e.length;)if((h=e[o=r>=0?r--:n++])!=null&&(2&h.__u)==0&&d==h.key&&l==h.type)return o}return-1}function Ts(t,e,s){e[0]=="-"?t.setProperty(e,s??""):t[e]=s==null?"":typeof s!="number"||Hi.test(e)?s:s+"px"}function st(t,e,s,i,r){var n,o;e:if(e=="style")if(typeof s=="string")t.style.cssText=s;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)s&&e in s||Ts(t.style,e,"");if(s)for(e in s)i&&s[e]==i[e]||Ts(t.style,e,s[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(qr,"$1")),o=e.toLowerCase(),e=o in t||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=s,s?i?s[qe]=i[qe]:(s[qe]=Gt,t.addEventListener(e,n?Ft:qt,n)):t.removeEventListener(e,n?Ft:qt,n);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=s??"";break e}catch{}typeof s=="function"||(s==null||s===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&s==1?"":s))}}function Ns(t){return function(e){if(this.l){var s=this.l[e.type+t];if(e[ct]==null)e[ct]=Gt++;else if(e[ct]<s[qe])return;return s(T.event?T.event(e):e)}}}function Xt(t,e,s,i,r,n,o,d,l,h){var u,p,c,f,v,y,_,g,$,w,U,S,R,j,K,D,B=e.type;if(e.constructor!==void 0)return null;128&s.__u&&(l=!!(32&s.__u),n=[d=e.__e=s.__e]),(u=T.__b)&&u(e);e:if(typeof B=="function"){p=o.length;try{if($=e.props,w=B.prototype&&B.prototype.render,U=(u=B.contextType)&&i[u.__c],S=u?U?U.props.value:u.__:i,s.__c?g=(c=e.__c=s.__c).__=c.__E:(w?e.__c=c=new B($,S):(e.__c=c=new ut($,S),c.constructor=B,c.render=qi),U&&U.sub(c),c.state||(c.state={}),c.__n=i,f=c.__d=!0,c.__h=[],c._sb=[]),w&&c.__s==null&&(c.__s=c.state),w&&B.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=se({},c.__s)),se(c.__s,B.getDerivedStateFromProps($,c.__s))),v=c.props,y=c.state,c.__v=e,f)w&&B.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),w&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(w&&B.getDerivedStateFromProps==null&&$!==v&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps($,S),e.__v==s.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate($,c.__s,S)===!1){e.__v!=s.__v&&(c.props=$,c.state=c.__s,c.__d=!1),e.__e=s.__e,e.__k=s.__k,e.__k.some(function(Z){Z&&(Z.__=e)}),bt.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&o.push(c),d=we(s);break e}c.componentWillUpdate!=null&&c.componentWillUpdate($,c.__s,S),w&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(v,y,_)})}if(c.context=S,c.props=$,c.__P=t,c.__e=!1,R=T.__r,j=0,w)c.state=c.__s,c.__d=!1,R&&R(e),u=c.render(c.props,c.state,c.context),bt.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,R&&R(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++j<25);c.state=c.__s,c.getChildContext!=null&&(i=se(se({},i),c.getChildContext())),w&&!f&&c.getSnapshotBeforeUpdate!=null&&(_=c.getSnapshotBeforeUpdate(v,y)),K=u!=null&&u.type===L&&u.key==null?Qr(u.props.children):u,d=zr(t,St(K)?K:[K],e,s,i,r,n,o,d,l,h),c.base=e.__e,e.__u&=-161,c.__h.length&&o.push(c),g&&(c.__E=c.__=null)}catch(Z){if(o.length=p,e.__v=null,l||n!=null){if(Z.then){for(e.__u|=l?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;n!=null&&(n[n.indexOf(d)]=null),e.__e=d}else if(n!=null)for(D=n.length;D--;)Yt(n[D])}else e.__e=s.__e;e.__k==null&&(e.__k=s.__k||[]),Z.then||Vr(e),T.__e(Z,e,s)}}else n==null&&e.__v==s.__v?(e.__k=s.__k,e.__e=s.__e):d=e.__e=Bi(s.__e,e,s,i,r,n,o,l,h);return(u=T.diffed)&&u(e),128&e.__u?void 0:d}function Vr(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(Vr))}function Jr(t,e,s){for(var i=0;i<s.length;i++)es(s[i],s[++i],s[++i]);T.__c&&T.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(n){n.call(r)})}catch(n){T.__e(n,r.__v)}})}function Qr(t){return typeof t!="object"||t==null||t.__b>0?t:St(t)?t.map(Qr):t.constructor!==void 0?null:se({},t)}function Bi(t,e,s,i,r,n,o,d,l){var h,u,p,c,f,v,y,_=s.props||_t,g=e.props,$=e.type;if($=="svg"?r="http://www.w3.org/2000/svg":$=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((f=n[h])&&"setAttribute"in f==!!$&&($?f.localName==$:f.nodeType==3)){t=f,n[h]=null;break}}if(t==null){if($==null)return document.createTextNode(g);t=document.createElementNS(r,$,g.is&&g),d&&(T.__m&&T.__m(e,n),d=!1),n=null}if($==null)_===g||d&&t.data==g||(t.data=g);else{if(n=$=="textarea"&&g.defaultValue!=null?null:n&&At.call(t.childNodes),!d&&n!=null)for(_={},h=0;h<t.attributes.length;h++)_[(f=t.attributes[h]).name]=f.value;for(h in _)f=_[h],h=="dangerouslySetInnerHTML"?p=f:h=="children"||h in g||h=="value"&&"defaultValue"in g||h=="checked"&&"defaultChecked"in g||st(t,h,null,f,r);for(h in g)f=g[h],h=="children"?c=f:h=="dangerouslySetInnerHTML"?u=f:h=="value"?v=f:h=="checked"?y=f:d&&typeof f!="function"||_[h]===f||st(t,h,f,_[h],r);if(u)d||p&&(u.__html==p.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(p&&(t.innerHTML=""),zr(e.type=="template"?t.content:t,St(c)?c:[c],e,s,i,$=="foreignObject"?"http://www.w3.org/1999/xhtml":r,n,o,n?n[0]:s.__k&&we(s,0),d,l),n!=null)for(h=n.length;h--;)Yt(n[h]);d&&$!="textarea"||(h="value",$=="progress"&&v==null?t.removeAttribute("value"):v!=null&&(v!==t[h]||$=="progress"&&!v||$=="option"&&v!=_[h])&&st(t,h,v,_[h],r),h="checked",y!=null&&y!=t[h]&&st(t,h,y,_[h],r))}return t}function es(t,e,s){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&e==null||(t.__u=t(e))}else t.current=e}catch(r){T.__e(r,s)}}function Kr(t,e,s){var i,r;if(T.unmount&&T.unmount(t),(i=t.ref)&&(i.current&&i.current!=t.__e||es(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){T.__e(n,e)}i.base=i.__P=i.__n=null}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&Kr(i[r],e,s||typeof t.type!="function");s||Yt(t.__e),t.__c=t.__=t.__e=void 0}function qi(t,e,s){return this.constructor(t,s)}function Fi(t,e,s){var i,r,n,o;e==document&&(e=document.documentElement),T.__&&T.__(t,e),r=(i=!1)?null:e.__k,n=[],o=[],Xt(e,t=e.__k=Ii(L,null,[t]),r||_t,_t,e.namespaceURI,r?null:e.firstChild?At.call(e.childNodes):null,n,r?r.__e:e.firstChild,i,o),Jr(n,t,o),t.props.children=null}At=bt.slice,T={__e:function(t,e,s,i){for(var r,n,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((n=r.constructor)&&n.getDerivedStateFromError!=null&&(r.setState(n.getDerivedStateFromError(t)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,i||{}),o=r.__d),o)return r.__E=r}catch(d){t=d}throw t}},Lr=0,ut.prototype.setState=function(t,e){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=se({},this.state),typeof t=="function"&&(t=t(se({},s),this.props)),t&&se(s,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ms(this))},ut.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ms(this))},ut.prototype.render=L,ie=[],jr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Br=function(t,e){return t.__v.__b-e.__v.__b},vt.__r=0,Rt=Math.random().toString(8),ct="__d"+Rt,qe="__a"+Rt,qr=/(PointerCapture)$|Capture$/i,Gt=0,qt=Ns(!1),Ft=Ns(!0);var zi=0;function a(t,e,s,i,r,n){e||(e={});var o,d,l=e;if("ref"in l)for(d in l={},e)d=="ref"?o=e[d]:l[d]=e[d];var h={type:t,props:l,key:s,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--zi,__i:-1,__u:0,__source:r,__self:n};if(typeof t=="function"&&(o=t.defaultProps))for(d in o)l[d]===void 0&&(l[d]=o[d]);return T.vnode&&T.vnode(h),h}var Qe,I,Dt,Us,Ke=0,Zr=[],O=T,Rs=O.__b,Ds=O.__r,Hs=O.diffed,Is=O.__c,Os=O.unmount,Ls=O.__;function ts(t,e){O.__h&&O.__h(I,t,Ke||e),Ke=0;var s=I.__H||(I.__H={__:[],__h:[]});return t>=s.__.length&&s.__.push({}),s.__[t]}function b(t){return Ke=1,Wi(Yr,t)}function Wi(t,e,s){var i=ts(Qe++,2);if(i.t=t,!i.__c&&(i.__=[Yr(void 0,e),function(d){var l=i.__N?i.__N[0]:i.__[0],h=i.t(l,d);l!==h&&(i.__N=[h,i.__[1]],i.__c.setState({}))}],i.__c=I,!I.__f)){var r=function(d,l,h){if(!i.__c.__H)return!0;var u=!1,p=i.__c.props!==d;if(i.__c.__H.__.some(function(f){if(f.__N){u=!0;var v=f.__[0];f.__=f.__N,f.__N=void 0,v!==f.__[0]&&(p=!0)}}),n){var c=n.call(this,d,l,h);return u?c||p:c}return!u||p};I.__f=!0;var n=I.shouldComponentUpdate,o=I.componentWillUpdate;I.componentWillUpdate=function(d,l,h){if(this.__e){var u=n;n=void 0,r(d,l,h),n=u}o&&o.call(this,d,l,h)},I.shouldComponentUpdate=r}return i.__N||i.__}function J(t,e){var s=ts(Qe++,3);!O.__s&&Gr(s.__H,e)&&(s.__=t,s.u=e,I.__H.__h.push(s))}function Me(t){return Ke=5,ss(function(){return{current:t}},[])}function ss(t,e){var s=ts(Qe++,7);return Gr(s.__H,e)&&(s.__=t(),s.__H=e,s.__h=t),s.__}function M(t,e){return Ke=8,ss(function(){return t},e)}function Vi(){for(var t;t=Zr.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(pt),e.__h.some(zt),e.__h=[]}catch(s){e.__h=[],O.__e(s,t.__v)}}}O.__b=function(t){I=null,Rs&&Rs(t)},O.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Ls&&Ls(t,e)},O.__r=function(t){Ds&&Ds(t),Qe=0;var e=(I=t.__c).__H;e&&(Dt===I?(e.__h=[],I.__h=[],e.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(e.__h.some(pt),e.__h.some(zt),e.__h=[],Qe=0)),Dt=I},O.diffed=function(t){Hs&&Hs(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Zr.push(e)!==1&&Us===O.requestAnimationFrame||((Us=O.requestAnimationFrame)||Ji)(Vi)),e.__H.__.some(function(s){s.u&&(s.__H=s.u,s.u=void 0)})),Dt=I=null},O.__c=function(t,e){e.some(function(s){try{s.__h.some(pt),s.__h=s.__h.filter(function(i){return!i.__||zt(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],O.__e(i,s.__v)}}),Is&&Is(t,e)},O.unmount=function(t){Os&&Os(t);var e,s=t.__c;s&&s.__H&&(s.__H.__.some(function(i){try{pt(i)}catch(r){e=r}}),s.__H=void 0,e&&O.__e(e,s.__v))};var js=typeof requestAnimationFrame=="function";function Ji(t){var e,s=function(){clearTimeout(i),js&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(s,35);js&&(e=requestAnimationFrame(s))}function pt(t){var e=I,s=t.__c;typeof s=="function"&&(t.__c=void 0,s()),I=e}function zt(t){var e=I;t.__c=t.__(),I=e}function Gr(t,e){return!t||t.length!==e.length||e.some(function(s,i){return s!==t[i]})}function Yr(t,e){return typeof e=="function"?e(t):e}const Q="Device returned an empty response.",rs="Could not reach the device. Check that you are connected to its network and try again.",Qi={},m={mqtt:{hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[9600,19200,38400,57600,115200],addressMin:1,addressMax:247,anenjiAddressMin:0,anenjiAddressMax:247},meter:{ctRatioMin:0,ctRatioMax:65535,syncMin:0},bms:{cellCountMin:1,cellCountMax:20}};function is(){return{ok:!1,message:rs}}function Ki(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const s=e.message;if(typeof s=="string"&&s)return s}}catch{}}async function ns(t){let e=`Request failed (HTTP ${t.status}).`;try{const s=await t.text();s&&(e=Ki(s)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function ee(t,e){let s;try{s=await fetch(t,{headers:{Accept:"application/json"}})}catch{return is()}if(!s.ok)return ns(s);let i;try{i=await s.text()}catch{return{ok:!1,status:s.status,message:rs}}if(!i.trim())return{ok:!1,status:s.status,message:e};try{return{ok:!0,data:JSON.parse(i)}}catch{return{ok:!1,status:s.status,message:e}}}async function as(t,e){let s;try{s=await fetch(t,e)}catch{return is()}if(!s.ok)return ns(s);try{await s.text()}catch{}return{ok:!0,data:Qi}}function Zi(t,e){return as(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}async function kt(t,e,s){let i;try{i=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})}catch{return is()}if(!i.ok)return ns(i);let r;try{r=await i.text()}catch{return{ok:!1,status:i.status,message:rs}}if(!r.trim())return{ok:!1,status:i.status,message:s};try{return{ok:!0,data:JSON.parse(r)}}catch{return{ok:!1,status:i.status,message:s}}}function Xr(){return ee("/api/status",Q)}function ei(){return ee("/healthcheck/healty",Q)}function Gi(){return ee("/healthcheck/ready",Q)}function Yi(){return as("/api/reboot",{method:"POST"})}function Xi(){return ee("/api/settings",Q)}function de(t,e,s,i=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!i&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>s)throw new Error(`${e} must be at most ${s} characters.`);return t}function en(t){const e=de(t.host,"MQTT host",m.mqtt.hostMax);if(typeof t.port!="number"||!Number.isInteger(t.port)||t.port<1||t.port>65535)throw new Error("MQTT port must be an integer between 1 and 65535.");const s=de(t.login,"MQTT login",m.mqtt.loginMax,!0),i=de(t.password,"MQTT password",m.mqtt.passwordMax,!0),r=de(t.haDiscoveryPrefix,"HA discovery prefix",m.mqtt.haDiscoveryPrefixMax);if(typeof t.mqttIsHADiscovery!="boolean")throw new Error("HA discovery flag must be true or false.");const n=de(t.stateTopic,"State topic",m.mqtt.topicMax),o=de(t.commandTopic,"Command topic",m.mqtt.topicMax),d=de(t.statusTopic,"Status topic",m.mqtt.topicMax),l=new URLSearchParams;return l.set("host",e),l.set("port",String(t.port)),l.set("login",s),l.set("password",i),l.set("haDiscoveryPrefix",r),l.set("mqttIsHADiscovery",t.mqttIsHADiscovery?"true":"false"),l.set("stateTopic",n),l.set("commandTopic",o),l.set("statusTopic",d),Zi("/api/settings/mqtt",l)}function tn(){return ee("/api/settings/modbus",Q)}function sn(t){if(!m.modbus.speeds.includes(t.modbusSpeed))throw new Error(`Modbus speed must be one of ${m.modbus.speeds.join(", ")}.`);if(!Number.isInteger(t.map12eAddress)||t.map12eAddress<m.modbus.addressMin||t.map12eAddress>m.modbus.addressMax)throw new Error(`MAP12E address must be an integer between ${m.modbus.addressMin} and ${m.modbus.addressMax}.`);if(!Number.isInteger(t.anenjiAddress)||t.anenjiAddress<m.modbus.anenjiAddressMin||t.anenjiAddress>m.modbus.anenjiAddressMax)throw new Error(`Anenji address must be an integer between ${m.modbus.anenjiAddressMin} and ${m.modbus.anenjiAddressMax}.`);return kt("/api/settings/modbus",{modbusSpeed:t.modbusSpeed,map12eAddress:t.map12eAddress,anenjiAddress:t.anenjiAddress},Q)}function Bs(){return ee("/api/settings/anenji",Q)}function qs(){return ee("/api/settings/meter",Q)}function Fs(t){const e={};if(t.ct1Ratio!==void 0){if(!Number.isInteger(t.ct1Ratio)||t.ct1Ratio<m.meter.ctRatioMin||t.ct1Ratio>m.meter.ctRatioMax)throw new Error(`CT ratio must be an integer between ${m.meter.ctRatioMin} and ${m.meter.ctRatioMax}.`);e.ct1Ratio=t.ct1Ratio}if(t.energySyncValue!==void 0){if(!Number.isFinite(t.energySyncValue)||t.energySyncValue<m.meter.syncMin)throw new Error("Energy sync value must be a number greater than or equal to 0.");e.energySyncValue=t.energySyncValue}if(e.ct1Ratio===void 0&&e.energySyncValue===void 0)throw new Error("ct1Ratio or energySyncValue required.");return kt("/api/settings/meter",e,Q)}function zs(){return ee("/api/controls",Q)}function rn(t){const e={};if(t.ventilation!==void 0){if(typeof t.ventilation!="boolean")throw new Error("Ventilation must be true or false.");e.ventilation=t.ventilation}if(t.light!==void 0){if(typeof t.light!="boolean")throw new Error("Light must be true or false.");e.light=t.light}if(t.generator!==void 0){if(typeof t.generator!="boolean")throw new Error("Generator must be true or false.");e.generator=t.generator}if(e.ventilation===void 0&&e.light===void 0&&e.generator===void 0)throw new Error("ventilation or light or generator required.");return kt("/api/controls",e,Q)}function nn(){return ee("/api/bms",Q)}const an=/^[0-9A-Fa-f]{2}(:[0-9A-Fa-f]{2}){5}$/;function on(t){if(typeof t.mac!="string")throw new Error("MAC address is required.");const e=t.mac.trim();if(e!==""&&!an.test(e))throw new Error("MAC address must look like AA:BB:CC:DD:EE:FF.");if(!Number.isInteger(t.cellCount)||t.cellCount<m.bms.cellCountMin||t.cellCount>m.bms.cellCountMax)throw new Error(`Cell count must be an integer between ${m.bms.cellCountMin} and ${m.bms.cellCountMax}.`);return kt("/api/bms/settings",{mac:e,cellCount:t.cellCount},Q)}function ln(){return as("/api/bms/scan/start",{method:"POST"})}function dn(){return ee("/api/bms/scan/status",Q)}function cn({tabs:t,active:e,onSelect:s}){return a("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(i=>a("button",{type:"button",role:"tab",id:`tab-${i.id}`,"aria-selected":i.id===e,"aria-controls":`panel-${i.id}`,class:i.id===e?"active":void 0,onClick:()=>s(i.id),children:i.label},i.id))})}function C({kind:t="info",message:e,onClose:s}){return a("div",{class:`banner banner-${t}`,role:"status",children:[a("span",{children:e}),s?a("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:s,children:"×"}):null]})}function hn(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function H({children:t,variant:e="default",type:s="button",disabled:i,title:r,onClick:n}){return a("button",{type:s,class:hn(e),disabled:i,title:r,onClick:n,children:t})}function un(t){return a(H,{...t,variant:"danger"})}function P({title:t,children:e,class:s}){return a("section",{class:s?`card ${s}`:"card",children:[t?a("h2",{children:t}):null,e]})}const Ht=2e3,pn=12e4;function fn(){const[t,e]=b("idle"),s=Me(0);J(()=>{if(t!=="rebooting")return;let o=!1,d;const l=()=>{ei().then(h=>{if(!o){if(h.ok){e("ready");return}if(s.current+=1,s.current*Ht>=pn){e("timeout");return}d=window.setTimeout(l,Ht)}})};return d=window.setTimeout(l,Ht),()=>{o=!0,d!==void 0&&window.clearTimeout(d)}},[t]);const i=M(()=>{s.current=0,e("rebooting")},[]),r=M(()=>e("idle"),[]),n=M(()=>{s.current=0,e("rebooting")},[]);return ss(()=>({phase:t,start:i,dismiss:r,retry:n}),[t,i,r,n])}function mn({flow:t}){return t.phase==="idle"?null:a("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:a("div",{class:"reboot-dialog card",children:[a("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?a(L,{children:[a("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),a("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?a(L,{children:[a(C,{kind:"success",message:"The device is back online."}),a("div",{class:"form-actions",children:a(H,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?a(L,{children:[a(C,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),a("div",{class:"form-actions",children:[a(H,{onClick:t.retry,children:"Keep waiting"}),a(H,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const gn=1e4;function _n(t){const e=Math.max(0,Math.floor(t)),s=Math.floor(e/86400),i=Math.floor(e%86400/3600),r=Math.floor(e%3600/60),n=e%60,o=[];return s&&o.push(`${s}d`),(s||i)&&o.push(`${i}h`),(s||i||r)&&o.push(`${r}m`),o.push(`${n}s`),o.join(" ")}function bn(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function vn(){const[t,e]=b(null),[s,i]=b(null),[r,n]=b(!1),[o,d]=b(null),[l,h]=b(null),[u,p]=b(!0),[c,f]=b(null),[v,y]=b(!1),_=fn(),g=M(async()=>{const R=await Xr();R.ok?(e(R.data),i(null)):i(R.message),n(!0)},[]),$=M(async()=>{p(!0);const[R,j]=await Promise.all([ei(),Gi()]);d(R),h(j),p(!1)},[]);J(()=>{g();const R=window.setInterval(()=>{g()},gn);return()=>window.clearInterval(R)},[g]),J(()=>{$()},[$]);const w=M(async()=>{if(!window.confirm("Reboot the device now? It will be offline for about 20-60 seconds."))return;f(null),y(!0);const j=await Yi();y(!1),j.ok?_.start():f(j.message)},[_.start]),U=u&&!o?a("p",{class:"muted",children:"Checking device health…"}):o?o.ok?a(C,{kind:o.data.healty?"success":"error",message:o.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):a(C,{kind:"error",message:o.message}):null,S=l?l.ok?a(C,{kind:l.data.ready?"success":"info",message:l.data.ready?"All registered services are ready.":`Not ready: ${l.data.message}`}):l.status===500?a(C,{kind:"info",message:`Not ready: ${l.message}`}):a(C,{kind:"error",message:l.message}):null;return a("div",{class:"stack",children:[a(P,{title:"Device",children:[r?s?a(L,{children:[a(C,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(H,{onClick:()=>{g()},children:"Retry"})})]}):t?a("dl",{class:"kv",children:[a("dt",{children:"Firmware"}),a("dd",{children:t.fwVersion??"—"}),a("dt",{children:"Free heap"}),a("dd",{children:bn(t.freeHeap)}),a("dt",{children:"Uptime"}),a("dd",{children:_n(t.uptime)}),a("dt",{children:"Last reset reason"}),a("dd",{children:t.lastResetReason})]}):null:a("p",{class:"muted",children:"Loading status…"}),a("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),a(P,{title:"Health",children:[U,S,a("div",{class:"form-actions",children:a(H,{onClick:()=>{$()},disabled:u,children:u?"Checking…":"Refresh health"})})]}),a(P,{title:"Maintenance",children:[a("p",{class:"muted",children:"A reboot briefly interrupts the device. Configuration changes saved on the other tabs only take effect after a reboot."}),c?a(C,{kind:"error",message:c,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(un,{onClick:()=>{w()},disabled:v||_.phase!=="idle",children:"Reboot device"})})]}),a(mn,{flow:_})]})}function $n({label:t,hint:e,checked:s,disabled:i,pending:r,unknown:n,onChange:o}){return a("div",{class:`toggle${n?" toggle-unknown":""}${r?" toggle-pending":""}`,children:a("button",{type:"button",role:"switch","aria-checked":s,class:"toggle-control",disabled:i||r,title:n?"State unknown":void 0,onClick:()=>o(!s),children:[a("span",{class:"toggle-track","aria-hidden":"true",children:a("span",{class:"toggle-knob"})}),a("span",{class:"toggle-text",children:[a("span",{class:"toggle-label",children:t}),e?a("span",{class:"toggle-hint",children:e}):null]})]})})}const yn={ventilation:{value:!1,unknown:!0},light:{value:!1,unknown:!0},generator:{value:!1,unknown:!0}},wn=[{key:"ventilation",label:"Ventilation"},{key:"light",label:"Light"},{key:"generator",label:"Generator"}];function rt(t,e){return typeof e.enabled=="boolean"?{value:e.enabled,unknown:!1}:t}function An(){const[t,e]=b(!1),[s,i]=b(null),[r,n]=b(yn),[o,d]=b({ventilation:!1,light:!1,generator:!1}),[l,h]=b(null),[u,p]=b(!1),c=M(_=>{n(g=>({ventilation:rt(g.ventilation,_.ventilation),light:rt(g.light,_.light),generator:rt(g.generator,_.generator)}))},[]),f=M(async()=>{i(null);const _=await zs();_.ok?c(_.data):i(_.message),e(!0)},[c]);J(()=>{f()},[f]);const v=M(async()=>{p(!0),i(null);const _=await zs();_.ok?c(_.data):i(_.message),p(!1)},[c]),y=M(async(_,g)=>{if(o[_])return;const $=r[_];h(null),n(w=>({...w,[_]:{value:g,unknown:!1}})),d(w=>({...w,[_]:!0}));try{const w=await rn({[_]:g});w.ok?n(U=>({...U,[_]:rt(U[_],w.data[_])})):(n(U=>({...U,[_]:$})),h(w.message))}catch(w){n(U=>({...U,[_]:$})),h(w instanceof Error?w.message:String(w))}finally{d(w=>({...w,[_]:!1}))}},[o,r]);return t?a("div",{class:"stack",children:[s?a(L,{children:[a(C,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(H,{onClick:()=>{f()},children:"Retry"})})]}):null,a(P,{title:"Controls",children:[l?a(C,{kind:"error",message:l,onClose:()=>h(null)}):null,wn.map(({key:_,label:g})=>a($n,{label:g,checked:r[_].value,unknown:r[_].unknown,pending:o[_],onChange:$=>{y(_,$)}},_)),a("div",{class:"form-actions",children:a(H,{onClick:()=>{v()},disabled:u,children:u?"Refreshing…":"Refresh"})})]})]}):a(P,{title:"Controls",children:a("p",{class:"muted",children:"Loading controls…"})})}function Sn(){const t=Me(null);return J(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}const kn={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:"",statusTopic:""};function En(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>m.mqtt.hostMax&&(e.host=`At most ${m.mqtt.hostMax} characters.`);const s=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(s)||s<1||s>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>m.mqtt.loginMax&&(e.login=`At most ${m.mqtt.loginMax} characters.`),t.password.length>m.mqtt.passwordMax&&(e.password=`At most ${m.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>m.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${m.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>m.mqtt.topicMax&&(e.stateTopic=`At most ${m.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>m.mqtt.topicMax&&(e.commandTopic=`At most ${m.mqtt.topicMax} characters.`),t.statusTopic.trim().length===0?e.statusTopic="Status topic is required.":t.statusTopic.length>m.mqtt.topicMax&&(e.statusTopic=`At most ${m.mqtt.topicMax} characters.`),e}function Cn(t){return Object.keys(t).length>0}function re({label:t,value:e,onInput:s,type:i="text",min:r,max:n,maxLength:o,autoComplete:d,error:l,help:h}){return a("label",{class:"field",children:[a("span",{class:"field-label",children:t}),a("input",{type:i,value:e,min:r,max:n,maxLength:o,autoComplete:d,"aria-invalid":l?!0:void 0,onInput:u=>s(u.currentTarget.value)}),h&&!l?a("span",{class:"field-help",children:h}):null,l?a("span",{class:"field-error",children:l}):null]})}function xn({label:t,value:e,onInput:s,maxLength:i,error:r}){const[n,o]=b(!1);return a("div",{class:"password-field",children:[a(re,{label:t,value:e,onInput:s,type:n?"text":"password",maxLength:i,autoComplete:"new-password",error:r}),a("button",{type:"button",class:"btn reveal-toggle","aria-pressed":n,onClick:()=>o(d=>!d),children:n?"Hide":"Show"})]})}function Pn({label:t,checked:e,onChange:s}){return a("div",{class:"checkbox-field",children:a("label",{class:"checkbox-label",children:[a("input",{type:"checkbox",checked:e,onChange:i=>s(i.currentTarget.checked)}),a("span",{children:t})]})})}function Mn(){const[t,e]=b(!1),[s,i]=b(null),[r,n]=b(kn),[o,d]=b({}),[l,h]=b(!1),[u,p]=b(null),[c,f]=b(null),v=M(async()=>{i(null);const g=await Xi();g.ok?n({host:g.data.mqttHost,port:String(g.data.mqttPort),login:g.data.mqttLogin,password:g.data.mqttPassword,haDiscoveryPrefix:g.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:g.data.mqttIsHADiscovery,stateTopic:g.data.mqttStateTopic,commandTopic:g.data.mqttCommandTopic,statusTopic:g.data.mqttStatusTopic}):i(g.message),e(!0)},[]);J(()=>{v()},[v]);const y=g=>n($=>({...$,...g})),_=M(async g=>{g.preventDefault();const $=En(r);if(d($),p(null),f(null),!Cn($)){h(!0);try{const w=await en({host:r.host,port:Number(r.port),login:r.login,password:r.password,haDiscoveryPrefix:r.haDiscoveryPrefix,mqttIsHADiscovery:r.mqttIsHADiscovery,stateTopic:r.stateTopic,commandTopic:r.commandTopic,statusTopic:r.statusTopic});w.ok?p("MQTT settings saved to flash."):f(w.message)}catch(w){f(w instanceof Error?w.message:String(w))}h(!1)}},[r]);return t?a("div",{class:"stack",children:[a(C,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."}),s?a(L,{children:[a(C,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(H,{onClick:()=>{v()},children:"Retry"})})]}):null,a(P,{title:"MQTT",children:a("form",{onSubmit:_,children:[a(re,{label:"Host",value:r.host,onInput:g=>y({host:g}),maxLength:m.mqtt.hostMax,autoComplete:"off",error:o.host}),a(re,{label:"Port",value:r.port,onInput:g=>y({port:g}),type:"number",min:1,max:65535,error:o.port}),a(re,{label:"Login",value:r.login,onInput:g=>y({login:g}),maxLength:m.mqtt.loginMax,autoComplete:"off",error:o.login}),a(xn,{label:"Password",value:r.password,onInput:g=>y({password:g}),maxLength:m.mqtt.passwordMax,error:o.password}),a(re,{label:"HA discovery prefix",value:r.haDiscoveryPrefix,onInput:g=>y({haDiscoveryPrefix:g}),maxLength:m.mqtt.haDiscoveryPrefixMax,autoComplete:"off",error:o.haDiscoveryPrefix}),a(Pn,{label:"Enable Home Assistant discovery",checked:r.mqttIsHADiscovery,onChange:g=>y({mqttIsHADiscovery:g})}),a(re,{label:"State topic",value:r.stateTopic,onInput:g=>y({stateTopic:g}),maxLength:m.mqtt.topicMax,autoComplete:"off",error:o.stateTopic,help:"Must not be empty: the device crashes on a missing state topic."}),a(re,{label:"Command topic",value:r.commandTopic,onInput:g=>y({commandTopic:g}),maxLength:m.mqtt.topicMax,autoComplete:"off",error:o.commandTopic,help:"Must not be empty: the device crashes on a missing command topic."}),a(re,{label:"Топик статуса электричества",value:r.statusTopic,onInput:g=>y({statusTopic:g}),maxLength:m.mqtt.topicMax,autoComplete:"off",error:o.statusTopic,help:"По умолчанию: faraday/<chipID>/status."}),u?a(C,{kind:"success",message:u,onClose:()=>p(null)}):null,c?a(C,{kind:"error",message:c,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(H,{type:"submit",variant:"primary",disabled:l,children:l?"Saving…":"Save MQTT"})})]})})]}):a(P,{title:"MQTT",children:a("p",{class:"muted",children:"Loading MQTT settings…"})})}const Tn={modbusSpeed:String(m.modbus.speeds[0]),map12eAddress:"",anenjiAddress:""};function Nn(t){const e={};if(t.map12eAddress.trim()==="")e.map12eAddress="Address is required.";else{const s=Number(t.map12eAddress);(!Number.isInteger(s)||s<m.modbus.addressMin||s>m.modbus.addressMax)&&(e.map12eAddress=`Address must be an integer between ${m.modbus.addressMin} and ${m.modbus.addressMax}.`)}if(t.anenjiAddress.trim()==="")e.anenjiAddress="Address is required.";else{const s=Number(t.anenjiAddress);(!Number.isInteger(s)||s<m.modbus.anenjiAddressMin||s>m.modbus.anenjiAddressMax)&&(e.anenjiAddress=`Address must be an integer between ${m.modbus.anenjiAddressMin} and ${m.modbus.anenjiAddressMax}.`)}return e}function Un(t){return Object.keys(t).length>0}function Ws({label:t,value:e,onInput:s,type:i="text",min:r,max:n,error:o,help:d}){return a("label",{class:"field",children:[a("span",{class:"field-label",children:t}),a("input",{type:i,value:e,min:r,max:n,"aria-invalid":o?!0:void 0,onInput:l=>s(l.currentTarget.value)}),d&&!o?a("span",{class:"field-help",children:d}):null,o?a("span",{class:"field-error",children:o}):null]})}function Rn({label:t,value:e,options:s,onChange:i}){return a("label",{class:"field",children:[a("span",{class:"field-label",children:t}),a("select",{value:e,onChange:r=>i(r.currentTarget.value),children:s.map(r=>a("option",{value:String(r),children:[r," baud"]},r))})]})}function Dn(){const[t,e]=b(!1),[s,i]=b(null),[r,n]=b(Tn),[o,d]=b({}),[l,h]=b(null),[u,p]=b(null),[c,f]=b(!1),[v,y]=b(null),[_,g]=b(null),$=M(async()=>{i(null);const S=await tn();S.ok?(n({modbusSpeed:String(S.data.modbusSpeed),map12eAddress:String(S.data.map12eAddress),anenjiAddress:String(S.data.anenjiAddress)}),h(S.data.map12eAddress),p(S.data.anenjiAddress)):i(S.message),e(!0)},[]);J(()=>{$()},[$]);const w=S=>n(R=>({...R,...S})),U=M(async S=>{S.preventDefault();const R=Nn(r);if(d(R),y(null),g(null),Un(R))return;const j=Number(r.map12eAddress),K=Number(r.anenjiAddress);f(!0);try{const D=await sn({modbusSpeed:Number(r.modbusSpeed),map12eAddress:j,anenjiAddress:K});if(D.ok){n({modbusSpeed:String(D.data.modbusSpeed),map12eAddress:String(D.data.map12eAddress),anenjiAddress:String(D.data.anenjiAddress)});const B=j!==l||K!==u;h(D.data.map12eAddress),p(D.data.anenjiAddress),y(B?"Modbus settings saved. The new speed is applied now; the address takes effect only after a reboot.":"Modbus settings saved. The new speed is applied now.")}else g(D.message)}catch(D){g(D instanceof Error?D.message:String(D))}f(!1)},[r,l,u]);return t?a("div",{class:"stack",children:[s?a(L,{children:[a(C,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(H,{onClick:()=>{$()},children:"Retry"})})]}):null,a(P,{title:"Modbus",children:a("form",{onSubmit:U,children:[a(Rn,{label:"RS-485 speed",value:r.modbusSpeed,options:m.modbus.speeds,onChange:S=>w({modbusSpeed:S})}),a(Ws,{label:"WB-MAP12E address",value:r.map12eAddress,onInput:S=>w({map12eAddress:S}),type:"number",min:m.modbus.addressMin,max:m.modbus.addressMax,error:o.map12eAddress,help:`Modbus unit id ${m.modbus.addressMin}-${m.modbus.addressMax}.`}),a(Ws,{label:"ANENJI 4200 address",value:r.anenjiAddress,onInput:S=>w({anenjiAddress:S}),type:"number",min:m.modbus.anenjiAddressMin,max:m.modbus.anenjiAddressMax,error:o.anenjiAddress,help:`0 disables the inverter; applies after reboot. Valid ${m.modbus.anenjiAddressMin}-${m.modbus.anenjiAddressMax}.`}),v?a(C,{kind:"success",message:v,onClose:()=>y(null)}):null,_?a(C,{kind:"error",message:_,onClose:()=>g(null)}):null,a("div",{class:"form-actions",children:a(H,{type:"submit",variant:"primary",disabled:c,children:c?"Saving…":"Save Modbus"})})]})})]}):a(P,{title:"Modbus",children:a("p",{class:"muted",children:"Loading Modbus settings…"})})}const Hn="—";function Vs(t){return t===null||!Number.isFinite(t)?Hn:`${t.toFixed(2)} kWh`}function Js(t){return Object.keys(t).length>0}function Qs({label:t,value:e,onInput:s,type:i="text",min:r,max:n,step:o,error:d,help:l}){return a("label",{class:"field",children:[a("span",{class:"field-label",children:t}),a("input",{type:i,value:e,min:r,max:n,step:o,"aria-invalid":d?!0:void 0,onInput:h=>s(h.currentTarget.value)}),l&&!d?a("span",{class:"field-help",children:l}):null,d?a("span",{class:"field-error",children:d}):null]})}function In(){const[t,e]=b(!1),[s,i]=b(null),[r,n]=b(null),[o,d]=b(""),[l,h]=b({}),[u,p]=b(!1),[c,f]=b(null),[v,y]=b(null),[_,g]=b(""),[$,w]=b({}),[U,S]=b(!1),[R,j]=b(null),[K,D]=b(null),[B,Z]=b(!1),G=M(async()=>{i(null);const z=await qs();z.ok?(n(z.data),d(String(z.data.energySyncValue)),g(String(z.data.ct1Ratio))):i(z.message),e(!0)},[]);J(()=>{G()},[G]);const Nt=M(async()=>{Z(!0);const z=await qs();z.ok?(n(z.data),i(null)):i(z.message),Z(!1)},[]),Ee=M(async z=>{z.preventDefault(),f(null),y(null);const Y={},X=Number(o);if(o.trim()===""?Y.sync="Supplier reading is required.":(!Number.isFinite(X)||X<m.meter.syncMin)&&(Y.sync="Must be a number greater than or equal to 0."),h(Y),!Js(Y)){p(!0);try{const q=await Fs({energySyncValue:X});q.ok?(n(q.data),d(String(q.data.energySyncValue)),f("Sync saved. Future readings continue from the entered value; the meter counter itself is not reset.")):y(q.message)}catch(q){y(q instanceof Error?q.message:String(q))}p(!1)}},[o]),Ut=M(async z=>{z.preventDefault(),j(null),D(null);const Y={},X=Number(_);if(_.trim()===""?Y.ratio="CT ratio is required.":(!Number.isInteger(X)||X<m.meter.ctRatioMin||X>m.meter.ctRatioMax)&&(Y.ratio=`Must be an integer between ${m.meter.ctRatioMin} and ${m.meter.ctRatioMax}.`),w(Y),!Js(Y)){S(!0);try{const q=await Fs({ct1Ratio:X});q.ok?(n(q.data),g(String(q.data.ct1Ratio)),j("CT ratio written to the meter and applied immediately. Re-sync the supplier energy afterwards.")):D(q.message)}catch(q){D(q instanceof Error?q.message:String(q))}S(!1)}},[_]);return t?a("div",{class:"stack",children:[s?a(L,{children:[a(C,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(H,{onClick:()=>{G()},children:"Retry"})})]}):null,a(P,{title:"Supplier energy sync",children:[a("dl",{class:"kv",children:[a("dt",{children:"Meter energy"}),a("dd",{children:Vs(r?.meterEnergy??null)}),a("dt",{children:"Supplier energy"}),a("dd",{children:Vs(r?.supplierEnergy??null)})]}),a("p",{class:"muted mt",children:"Meter counters are read-only and cannot be reset by the firmware. A sync stores the entered supplier kWh reading together with the device counter at that moment, so Home Assistant reports the entered value plus consumption since the sync."}),a("form",{onSubmit:Ee,class:"mt",children:[a(Qs,{label:"Supplier reading, kWh",value:o,onInput:d,type:"number",min:m.meter.syncMin,step:"0.01",error:l.sync}),c?a(C,{kind:"success",message:c,onClose:()=>f(null)}):null,v?a(C,{kind:"error",message:v,onClose:()=>y(null)}):null,a("div",{class:"form-actions",children:[a(H,{type:"submit",variant:"primary",disabled:u,children:u?"Syncing…":"Sync"}),a(H,{onClick:()=>{Nt()},disabled:B,children:B?"Refreshing…":"Refresh"})]})]})]}),a(P,{title:"Current transformer",children:a("form",{onSubmit:Ut,children:[a(Qs,{label:"CT1 ratio",value:_,onInput:g,type:"number",min:m.meter.ctRatioMin,max:m.meter.ctRatioMax,error:$.ratio,help:"Integer 0-65535. 0 disables the ratio (direct measurement)."}),a("p",{class:"muted",children:"The ratio is written to the meter immediately and applied by the meter itself to current, power and energy. Re-sync the supplier energy after changing it."}),R?a(C,{kind:"success",message:R,onClose:()=>j(null)}):null,K?a(C,{kind:"error",message:K,onClose:()=>D(null)}):null,a("div",{class:"form-actions",children:a(H,{type:"submit",variant:"primary",disabled:U,children:U?"Saving…":"Save ratio"})})]})})]}):a(P,{title:"Meter",children:a("p",{class:"muted",children:"Loading meter settings…"})})}const os="—";function ls(t,e){return t===null||!Number.isFinite(t)?os:t.toFixed(e)}function it(t){return ls(t,1)}function nt(t){return ls(t,1)}function at(t){return ls(t,0)}function On(t){return t===null?os:t?"Charging":"Not charging"}function ot(t){return t??os}function Ln(){const[t,e]=b(!1),[s,i]=b(null),[r,n]=b(null),[o,d]=b(!1),l=M(async()=>{i(null);const u=await Bs();u.ok?n(u.data):i(u.message),e(!0)},[]);J(()=>{l()},[l]);const h=M(async()=>{d(!0);const u=await Bs();u.ok?(n(u.data),i(null)):i(u.message),d(!1)},[]);return t?a("div",{class:"stack",children:[s?a(L,{children:[a(C,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(H,{onClick:()=>{l()},children:"Retry"})})]}):null,r&&!r.enabled?a(C,{kind:"info",message:"The inverter is disabled. Set a non-zero ANENJI 4200 address on the Modbus tab and reboot to enable it."}):null,a(P,{title:"Mains",children:a("dl",{class:"kv",children:[a("dt",{children:"Voltage"}),a("dd",{children:[it(r?.mainsVoltage??null)," V"]}),a("dt",{children:"Current"}),a("dd",{children:[nt(r?.mainsCurrent??null)," A"]}),a("dt",{children:"Power"}),a("dd",{children:[at(r?.mainsPower??null)," W"]})]})}),a(P,{title:"Output",children:a("dl",{class:"kv",children:[a("dt",{children:"Voltage"}),a("dd",{children:[it(r?.outputVoltage??null)," V"]}),a("dt",{children:"Current"}),a("dd",{children:[nt(r?.outputCurrent??null)," A"]}),a("dt",{children:"Power"}),a("dd",{children:[at(r?.outputPower??null)," W"]})]})}),a(P,{title:"Battery",children:a("dl",{class:"kv",children:[a("dt",{children:"Voltage"}),a("dd",{children:[it(r?.batteryVoltage??null)," V"]}),a("dt",{children:"Current"}),a("dd",{children:[nt(r?.batteryCurrent??null)," A"]}),a("dt",{children:"Power"}),a("dd",{children:[at(r?.batteryPower??null)," W"]}),a("dt",{children:"Charging"}),a("dd",{children:On(r?.batteryCharging??null)})]})}),a(P,{title:"Solar",children:a("dl",{class:"kv",children:[a("dt",{children:"Voltage"}),a("dd",{children:[it(r?.pvVoltage??null)," V"]}),a("dt",{children:"Current"}),a("dd",{children:[nt(r?.pvCurrent??null)," A"]}),a("dt",{children:"Power"}),a("dd",{children:[at(r?.pvPower??null)," W"]})]})}),a(P,{title:"Modes",children:a("dl",{class:"kv",children:[a("dt",{children:"Work mode"}),a("dd",{children:ot(r?.workMode??null)}),a("dt",{children:"Output mode"}),a("dd",{children:ot(r?.outputMode??null)}),a("dt",{children:"Output priority"}),a("dd",{children:ot(r?.outputPriority??null)}),a("dt",{children:"Charge priority"}),a("dd",{children:ot(r?.chargePriority??null)})]})}),a("div",{class:"form-actions",children:a(H,{onClick:()=>{h()},disabled:o,children:o?"Refreshing…":"Refresh"})})]}):a(P,{title:"Anenji",children:a("p",{class:"muted",children:"Loading inverter readings…"})})}const le="—",jn=1e4,Bn=1500,qn=3e4,Fn=[{key:"shortCircuit",label:"Short circuit"},{key:"chargeOvercurrent",label:"Charge overcurrent"},{key:"dischargeOvercurrent",label:"Discharge overcurrent"},{key:"cellOvervoltage",label:"Cell overvoltage"},{key:"cellUndervoltage",label:"Cell undervoltage"},{key:"chargeOvertemperature",label:"Charge overtemperature"},{key:"chargeUndertemperature",label:"Charge undertemperature"},{key:"dischargeOvertemperature",label:"Discharge overtemperature"},{key:"dischargeUndertemperature",label:"Discharge undertemperature"},{key:"batteryOvervoltage",label:"Battery overvoltage"},{key:"batteryUndervoltage",label:"Battery undervoltage"}];function V(t,e){return t===null||!Number.isFinite(t)?le:t.toFixed(e)}function Ie(t){return t==null||t===""?le:t}function Ks(t){return t?"Yes":"No"}function Zs(t){return t===null?le:t?"On":"Off"}function zn(t){return t===null||!Number.isFinite(t)?le:`${(t/1e3).toFixed(1)} s`}function Wn(t){if(t===null)return[];const e=t>>>0,s=[];for(let i=0;i<m.bms.cellCountMax;i+=1)(e>>>i&1)!==0&&s.push(i+1);return s}function Gs({label:t,value:e,onInput:s,type:i="text",min:r,max:n,placeholder:o,error:d,help:l}){return a("label",{class:"field",children:[a("span",{class:"field-label",children:t}),a("input",{type:i,value:e,min:r,max:n,placeholder:o,"aria-invalid":d?!0:void 0,onInput:h=>s(h.currentTarget.value)}),l&&!d?a("span",{class:"field-help",children:l}):null,d?a("span",{class:"field-error",children:d}):null]})}function Vn(t,e){const s={},i=t.trim();if(i!==""&&!/^[0-9A-Fa-f]{2}(:[0-9A-Fa-f]{2}){5}$/.test(i)&&(s.mac="MAC address must look like AA:BB:CC:DD:EE:FF."),e.trim()==="")s.cellCount="Cell count is required.";else{const r=Number(e);(!Number.isInteger(r)||r<m.bms.cellCountMin||r>m.bms.cellCountMax)&&(s.cellCount=`Must be an integer between ${m.bms.cellCountMin} and ${m.bms.cellCountMax}.`)}return s}function Jn(){const[t,e]=b(!1),[s,i]=b(null),[r,n]=b(null),[o,d]=b(""),[l,h]=b(""),[u,p]=b({}),[c,f]=b(!1),[v,y]=b(null),[_,g]=b(null),[$,w]=b(null),[U,S]=b(!1),[R,j]=b(null),[K,D]=b(!1),B=Me(void 0),Z=Me(!1);J(()=>(Z.current=!1,()=>{Z.current=!0,B.current!==void 0&&window.clearTimeout(B.current)}),[]);const G=M(async E=>{i(null);const x=await nn();x.ok?(n(x.data),E&&(d(x.data.mac),h(String(x.data.cellCount)))):i(x.message),e(!0)},[]);J(()=>{G(!0)},[G]),J(()=>{const E=window.setInterval(()=>{G(!1)},jn);return()=>window.clearInterval(E)},[G]);const Nt=M(async()=>{D(!0),await G(!1),D(!1)},[G]),Ee=M(async(E,x)=>{f(!0),y(null),g(null);try{const W=await on({mac:E,cellCount:x});W.ok?(n(W.data),d(W.data.mac),h(String(W.data.cellCount)),p({}),await G(!1),y(W.data.mac===""?"BMS disabled. MQTT/HA entities are removed only after a reboot.":"BMS settings saved. BLE polling follows immediately; the number of MQTT/HA entities is fixed at boot, so reboot to apply discovery changes.")):g(W.message)}catch(W){g(W instanceof Error?W.message:String(W))}f(!1)},[G]),Ut=M(E=>{E.preventDefault();const x=Vn(o,l);p(x),y(null),g(null),!(Object.keys(x).length>0)&&Ee(o.trim(),Number(l))},[o,l,Ee]),z=M(async E=>{const x=await dn();if(!Z.current){if(!x.ok){j(x.message),S(!1);return}if(w(x.data),!x.data.running||Date.now()>=E){S(!1);return}B.current=window.setTimeout(()=>{z(E)},Bn)}},[]),Y=M(async()=>{if(U)return;j(null),S(!0);const E=await ln();if(!E.ok&&E.status!==422){j(E.message),S(!1);return}z(Date.now()+qn)},[U,z]),X=M(async E=>{const x=r?.cellCount??m.bms.cellCountMin,W=Number(l),Di=l.trim()!==""&&Number.isInteger(W)&&W>=m.bms.cellCountMin&&W<=m.bms.cellCountMax?W:x;await Ee(E,Di)},[l,r,Ee]);if(!t)return a(P,{title:"BMS",children:a("p",{class:"muted",children:"Loading BMS readings…"})});const q=r===null?[]:Array.from({length:r.cellCount},(E,x)=>r.cells[x]??null),xs=r===null?[]:Wn(r.balancerBitmask),Ni=r?.mosfetBitmask!=null?(r.mosfetBitmask&1)!==0:null,Ui=r?.mosfetBitmask!=null?(r.mosfetBitmask&2)!==0:null,Ri=r!==null&&r.reportedCellCount!==null&&r.reportedCellCount!==r.cellCount;return a("div",{class:"stack",children:[s?a(L,{children:[a(C,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(H,{onClick:()=>{G(!0)},children:"Retry"})})]}):null,r&&!r.enabled?a(C,{kind:"info",message:"The BMS is disabled. Set the Bluetooth MAC below (or scan and select it), then save."}):null,r?.bleUnavailable?a(C,{kind:"error",message:"Bluetooth could not be initialized on the device. BLE telemetry and scanning are unavailable."}):null,Ri?a(C,{kind:"info",message:`The BMS reports ${r?.reportedCellCount} cells but ${r?.cellCount} is configured. Consider adjusting the cell count.`}):null,a(P,{title:"Connection",children:[a("dl",{class:"kv",children:[a("dt",{children:"Enabled"}),a("dd",{children:Ks(r?.enabled??!1)}),a("dt",{children:"MAC"}),a("dd",{children:Ie(r?.mac??null)}),a("dt",{children:"Connected"}),a("dd",{children:Ks(r?.connected??!1)}),a("dt",{children:"Bluetooth"}),a("dd",{children:r?.bleUnavailable?"Unavailable":"Available"}),a("dt",{children:"Last frame"}),a("dd",{children:zn(r?.lastUpdateMs??null)}),a("dt",{children:"Reported cells"}),a("dd",{children:V(r?.reportedCellCount??null,0)})]}),a("div",{class:"form-actions",children:a(H,{onClick:()=>{Nt()},disabled:K,children:K?"Refreshing…":"Refresh"})})]}),a(P,{title:"Settings",children:a("form",{onSubmit:Ut,children:[a(Gs,{label:"Bluetooth MAC",value:o,onInput:d,placeholder:"AA:BB:CC:DD:EE:FF",error:u.mac,help:"Empty disables the BMS. Only this BLE device is polled."}),a(Gs,{label:"Cell count",value:l,onInput:h,type:"number",min:m.bms.cellCountMin,max:m.bms.cellCountMax,error:u.cellCount,help:`Real pack size ${m.bms.cellCountMin}-${m.bms.cellCountMax}; only these cells are published.`}),v?a(C,{kind:"success",message:v,onClose:()=>y(null)}):null,_?a(C,{kind:"error",message:_,onClose:()=>g(null)}):null,a("div",{class:"form-actions",children:a(H,{type:"submit",variant:"primary",disabled:c,children:c?"Saving…":"Save BMS"})})]})}),a(P,{title:"BLE scan",children:[a("p",{class:"muted",children:"A scan runs for about 10 seconds on the device and briefly disconnects the BMS. Results stay visible after it finishes."}),R?a(C,{kind:"error",message:R,onClose:()=>j(null)}):null,a("div",{class:"form-actions",children:a(H,{onClick:()=>{Y()},disabled:U||($?.running??!1),children:U?"Scanning…":"Scan"})}),$&&$.devices.length>0?a("dl",{class:"kv mt",children:$.devices.map(E=>a(L,{children:[a("dt",{children:[Ie(E.name)," (",E.rssi," dBm)"]}),a("dd",{children:[E.mac," ",a(H,{onClick:()=>{X(E.mac)},disabled:c||r?.mac===E.mac,children:r?.mac===E.mac?"Selected":"Select"})]})]},E.mac))}):a("p",{class:"muted mt",children:U?"Scanning for BLE devices…":"No scan results yet."})]}),a(P,{title:"Summary",children:a("dl",{class:"kv",children:[a("dt",{children:"Status"}),a("dd",{children:Ie(r?.status??null)}),a("dt",{children:"Errors"}),a("dd",{children:Ie(r?.errors??null)}),a("dt",{children:"Device model"}),a("dd",{children:Ie(r?.deviceModel??null)}),a("dt",{children:"State of charge"}),a("dd",{children:[V(r?.soc??null,0)," %"]}),a("dt",{children:"Total voltage"}),a("dd",{children:[V(r?.totalVoltage??null,2)," V"]}),a("dt",{children:"Current"}),a("dd",{children:[V(r?.current??null,2)," A"]}),a("dt",{children:"Power"}),a("dd",{children:[V(r?.power??null,1)," W"]}),a("dt",{children:"Capacity"}),a("dd",{children:[V(r?.capacityRemaining??null,2)," /"," ",V(r?.nominalCapacity??null,2)," Ah"]}),a("dt",{children:"Cycles"}),a("dd",{children:V(r?.cycles??null,0)}),a("dt",{children:"SW version"}),a("dd",{children:V(r?.swVersion??null,2)}),a("dt",{children:"Charging"}),a("dd",{children:Zs(Ni)}),a("dt",{children:"Discharging"}),a("dd",{children:Zs(Ui)}),a("dt",{children:"Balancing"}),a("dd",{children:r?.balancerBitmask==null?le:xs.length>0?xs.join(", "):"None"})]})}),a(P,{title:"Cell statistics",children:a("dl",{class:"kv",children:[a("dt",{children:"Min cell voltage"}),a("dd",{children:[V(r?.minCellVoltage??null,3)," V"]}),a("dt",{children:"Max cell voltage"}),a("dd",{children:[V(r?.maxCellVoltage??null,3)," V"]}),a("dt",{children:"Average cell voltage"}),a("dd",{children:[V(r?.avgCellVoltage??null,3)," V"]}),a("dt",{children:"Delta cell voltage"}),a("dd",{children:[V(r?.deltaCellVoltage??null,3)," V"]})]})}),a(P,{title:`Cell voltages (${r?.cellCount??0})`,children:a("dl",{class:"kv",children:q.map((E,x)=>a(L,{children:[a("dt",{children:`Cell ${x+1}`}),a("dd",{children:[V(E,3)," V"]})]},x))})}),a(P,{title:"Temperatures",children:a("dl",{class:"kv",children:(r?.temperatures??[]).length===0?a(L,{children:[a("dt",{children:"Temperature"}),a("dd",{children:le})]}):(r?.temperatures??[]).map((E,x)=>a(L,{children:[a("dt",{children:`Temperature ${x+1}`}),a("dd",{children:[V(E,1)," °C"]})]},x))})}),a(P,{title:"Error counters",children:r?.errorCounts?a("dl",{class:"kv",children:Fn.map(({key:E,label:x})=>a(L,{children:[a("dt",{children:x}),a("dd",{children:r?.errorCounts?r.errorCounts[E]:le})]},E))}):a("p",{class:"muted",children:le})})]})}const Qn="Download a zip of everything the device has stored: config.bin. It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e faraday -t uploadfs) ERASE LittleFS, so /config.bin is gone.",Kn="Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.",Zn="Uploading this archive REPLACES config.bin on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",Gn="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function Yn(){const t=Me(null);return J(()=>{const e=document.createElement("edc-config-backup-page");return e.setAttribute("device-name","Faraday"),e.setAttribute("archive-file-name","faraday-config.zip"),e.setAttribute("zip-notes",Qn),e.setAttribute("bin-notes",Kn),e.setAttribute("zip-confirm-text",Zn),e.setAttribute("bin-confirm-text",Gn),t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}function Xn(){const t=Me(null);return J(()=>{const e=document.createElement("edu-log-settings-page");return e.setAttribute("device-name","Faraday"),t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}const ea=[{id:"status",label:"Status"},{id:"controls",label:"Controls"},{id:"network",label:"Network"},{id:"mqtt",label:"MQTT"},{id:"modbus",label:"Modbus"},{id:"meter",label:"Meter"},{id:"anenji",label:"Anenji"},{id:"bms",label:"BMS"},{id:"config",label:"Config"},{id:"logger",label:"Log"}];function ta(t){switch(t){case"status":return a(vn,{});case"controls":return a(An,{});case"network":return a(Sn,{});case"mqtt":return a(Mn,{});case"modbus":return a(Dn,{});case"meter":return a(In,{});case"anenji":return a(Ln,{});case"bms":return a(Jn,{});case"config":return a(Yn,{});case"logger":return a(Xn,{})}}function sa(){const[t,e]=b("status"),[s,i]=b(null);return J(()=>{let r=!0;return Xr().then(n=>{r&&n.ok&&n.data.fwVersion&&i(n.data.fwVersion)}),()=>{r=!1}},[]),a(L,{children:[a("header",{class:"app-header",children:a("div",{class:"brand",children:[a("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:a("path",{fill:"currentColor",d:"M13 2 4.5 13.2h5.2L8 22l9-12.1h-5.4z"})}),a("h1",{children:"Faraday"})]})}),a(cn,{tabs:ea,active:t,onSelect:e}),a("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:ta(t)}),a("footer",{class:"app-footer",children:a("div",{class:"versions",children:[a("span",{class:"hint",children:"offline device panel"}),a("span",{class:"hint version",children:["FW ",s??"—"]}),a("span",{class:"hint version",children:["UI ","b78a7e2-dirty"]})]})})]})}function ra(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function ti(t={}){let e=t.baseUrl??"",s=t.headers??{};async function i(r,n){let o;try{o=await fetch(`${e}${r}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...s}})}catch(u){return n?.signal?.aborted===!0||typeof u=="object"&&u&&u.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let d=await o.text().catch(()=>""),l,h=!1;if(d.length>0)try{l=JSON.parse(d),h=!0}catch{h=!1}if(!o.ok){let u=ra(l);return{ok:!1,status:o.status,message:u??`Request failed with HTTP ${o.status}.`}}return h?{ok:!0,data:l}:{ok:!1,status:o.status,message:`Unexpected response from server (HTTP ${o.status}).`}}return{getSettings(r){return i("/api/network/settings",{signal:r})},saveSettings(r,n){return i("/api/network/settings",{method:"POST",body:JSON.stringify(r),signal:n})},getStatus(r){return i("/api/network/status",{signal:r})},wifiList(r){return i("/api/wifi/list",{signal:r})}}}var ft=globalThis,ds=ft.ShadowRoot&&(ft.ShadyCSS===void 0||ft.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cs=Symbol(),Ys=new WeakMap,si=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==cs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(ds&&e===void 0){let i=s!==void 0&&s.length===1;i&&(e=Ys.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&Ys.set(s,e))}return e}toString(){return this.cssText}},ia=t=>new si(typeof t=="string"?t:t+"",void 0,cs),hs=(t,...e)=>new si(t.length===1?t[0]:e.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]),t,cs),na=(t,e)=>{if(ds)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let i=document.createElement("style"),r=ft.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},Xs=ds?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let i of e.cssRules)s+=i.cssText;return ia(s)})(t):t,{is:aa,defineProperty:oa,getOwnPropertyDescriptor:la,getOwnPropertyNames:da,getOwnPropertySymbols:ca,getPrototypeOf:ha}=Object,Et=globalThis,er=Et.trustedTypes,ua=er?er.emptyScript:"",pa=Et.reactiveElementPolyfillSupport,Fe=(t,e)=>t,Wt={toAttribute(t,e){switch(e){case Boolean:t=t?ua:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ri=(t,e)=>!aa(t,e),tr={attribute:!0,type:String,converter:Wt,reflect:!1,useDefault:!1,hasChanged:ri};Symbol.metadata??=Symbol("metadata"),Et.litPropertyMetadata??=new WeakMap;var Ce=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=tr){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&oa(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){let{get:r,set:n}=la(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){let d=r?.call(this);n?.call(this,o),this.requestUpdate(e,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tr}static _$Ei(){if(this.hasOwnProperty(Fe("elementProperties")))return;let e=ha(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Fe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Fe("properties"))){let s=this.properties,i=[...da(s),...ca(s)];for(let r of i)this.createProperty(r,s[r])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[s,i]of this.elementProperties){let r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)s.unshift(Xs(r))}else e!==void 0&&s.push(Xs(e));return s}static _$Eu(e,s){let i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return na(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute===void 0?Wt:i.converter).toAttribute(s,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,s){let i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Wt:n.converter;this._$Em=r;let d=o.fromAttribute(s,n.type);this[r]=d??this._$Ej?.get(r)??d,this._$Em=null}}requestUpdate(e,s,i,r=!1,n){if(e!==void 0){let o=this.constructor;if(r===!1&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??ri)(n,s)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??s??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,n]of i){let{wrapped:o}=n,d=this[r];o!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,n,d)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};Ce.elementStyles=[],Ce.shadowRootOptions={mode:"open"},Ce[Fe("elementProperties")]=new Map,Ce[Fe("finalized")]=new Map,pa?.({ReactiveElement:Ce}),(Et.reactiveElementVersions??=[]).push("2.1.2");var us=globalThis,sr=t=>t,$t=us.trustedTypes,rr=$t?$t.createPolicy("lit-html",{createHTML:t=>t}):void 0,ii="$lit$",ne=`lit$${Math.random().toFixed(9).slice(2)}$`,ni="?"+ne,fa=`<${ni}>`,Ae=document,Ze=()=>Ae.createComment(""),Ge=t=>t===null||typeof t!="object"&&typeof t!="function",ps=Array.isArray,ma=t=>ps(t)||typeof t?.[Symbol.iterator]=="function",It=`[ 	
\f\r]`,Oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ir=/-->/g,nr=/>/g,ce=RegExp(`>|${It}(?:([^\\s"'>=/]+)(${It}*=${It}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ar=/'/g,or=/"/g,ai=/^(?:script|style|textarea|title)$/i,A=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),Te=Symbol.for("lit-noChange"),k=Symbol.for("lit-nothing"),lr=new WeakMap,pe=Ae.createTreeWalker(Ae,129);function oi(t,e){if(!ps(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return rr===void 0?e:rr.createHTML(e)}var ga=(t,e)=>{let s=t.length-1,i=[],r,n=e===2?"<svg>":e===3?"<math>":"",o=Oe;for(let d=0;d<s;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(o.lastIndex=c,u=o.exec(l),u!==null);)c=o.lastIndex,o===Oe?u[1]==="!--"?o=ir:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=ce):(ai.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=ce):o=nr:o===ce?u[0]===">"?(o=r??Oe,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?ce:u[3]==='"'?or:ar):o===or||o===ar?o=ce:o===ir||o===nr?o=Oe:(o=ce,r=void 0);let f=o===ce&&t[d+1].startsWith("/>")?" ":"";n+=o===Oe?l+fa:p>=0?(i.push(h),l.slice(0,p)+ii+l.slice(p)+ne+f):l+ne+(p===-2?d:f)}return[oi(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Vt=class li{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,o=0,d=e.length-1,l=this.parts,[h,u]=ga(e,s);if(this.el=li.createElement(h,i),pe.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=pe.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(ii)){let c=u[o++],f=r.getAttribute(p).split(ne),v=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:v[2],strings:f,ctor:v[1]==="."?ba:v[1]==="?"?va:v[1]==="@"?$a:Ct}),r.removeAttribute(p)}else p.startsWith(ne)&&(l.push({type:6,index:n}),r.removeAttribute(p));if(ai.test(r.tagName)){let p=r.textContent.split(ne),c=p.length-1;if(c>0){r.textContent=$t?$t.emptyScript:"";for(let f=0;f<c;f++)r.append(p[f],Ze()),pe.nextNode(),l.push({type:2,index:++n});r.append(p[c],Ze())}}}else if(r.nodeType===8)if(r.data===ni)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(ne,p+1))!==-1;)l.push({type:7,index:n}),p+=ne.length-1}n++}}static createElement(e,s){let i=Ae.createElement("template");return i.innerHTML=e,i}};function Ne(t,e,s=t,i){if(e===Te)return e;let r=i===void 0?s._$Cl:s._$Co?.[i],n=Ge(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,s,i)),i===void 0?s._$Cl=r:(s._$Co??=[])[i]=r),r!==void 0&&(e=Ne(t,r._$AS(t,e.values),r,i)),e}var _a=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:i}=this._$AD,r=(e?.creationScope??Ae).importNode(s,!0);pe.currentNode=r;let n=pe.nextNode(),o=0,d=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new fs(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new ya(n,this,e)),this._$AV.push(h),l=i[++d]}o!==l?.index&&(n=pe.nextNode(),o++)}return pe.currentNode=Ae,r}p(e){let s=0;for(let i of this._$AV)i!==void 0&&(i.strings===void 0?i._$AI(e[s]):(i._$AI(e,i,s),s+=i.strings.length-2)),s++}},fs=class di{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=k,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Ne(this,e,s),Ge(e)?e===k||e==null||e===""?(this._$AH!==k&&this._$AR(),this._$AH=k):e!==this._$AH&&e!==Te&&this._(e):e._$litType$===void 0?e.nodeType===void 0?ma(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==k&&Ge(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ae.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Vt.createElement(oi(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let n=new _a(r,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(e){let s=lr.get(e.strings);return s===void 0&&lr.set(e.strings,s=new Vt(e)),s}k(e){ps(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let n of e)r===s.length?s.push(i=new di(this.O(Ze()),this.O(Ze()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let i=sr(e).nextSibling;sr(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ct=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,n){this.type=1,this._$AH=k,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=k}_$AI(e,s=this,i,r){let n=this.strings,o=!1;if(n===void 0)e=Ne(this,e,s,0),o=!Ge(e)||e!==this._$AH&&e!==Te,o&&(this._$AH=e);else{let d=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Ne(this,d[i+l],s,l),h===Te&&(h=this._$AH[l]),o||=!Ge(h)||h!==this._$AH[l],h===k?e=k:e!==k&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!r&&this.j(e)}j(e){e===k?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ba=class extends Ct{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===k?void 0:e}},va=class extends Ct{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==k)}},$a=class extends Ct{constructor(e,s,i,r,n){super(e,s,i,r,n),this.type=5}_$AI(e,s=this){if((e=Ne(this,e,s,0)??k)===Te)return;let i=this._$AH,r=e===k&&i!==k||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==k&&(i===k||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ya=class{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ne(this,e)}},wa=us.litHtmlPolyfillSupport;wa?.(Vt,fs),(us.litHtmlVersions??=[]).push("3.3.3");var Aa=(t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(r===void 0){let n=s?.renderBefore??null;i._$litPart$=r=new fs(e.insertBefore(Ze(),n),n,void 0,s??{})}return r._$AI(t),r},ms=globalThis,ge=class extends Ce{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Aa(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Te}};ge._$litElement$=!0,ge.finalized=!0,ms.litElementHydrateSupport?.({LitElement:ge});var Sa=ms.litElementPolyfillSupport;Sa?.({LitElement:ge}),(ms.litElementVersions??=[]).push("4.2.2");var ka={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function Ea(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function Ca(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function xa(t){let e=s=>String(s).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var _e,Pa=(_e=class extends ge{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return A`
      <div class="card">
        <header class="head">
          ${e?A`<span class="badge badge-${e.mode}">${ka[e.mode]}</span>`:A`<span class="badge badge-unknown">Unknown</span>`}
          ${e?A`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:k}
          ${this.loading?A`<span class="muted loading">Refreshing…</span>`:k}
        </header>

        ${e?.fallbackAP?A`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:k}
        ${this.errorMessage?A`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:k}
        ${e?this.renderSections(e):A`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?A`Updated ${xa(this.lastUpdated)}`:A`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return A`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${Ea(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let s=e.ap;return A`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",s?.ssid)} ${this.row("IP address",s?.ip)}
          ${this.row("Stations",s?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let s=e.eth;return A`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",s?.ip)} ${this.row("MAC address",s?.mac)}
          ${this.row("Link",s===void 0?void 0:s.linkUp?"Up":"Down")}
          ${this.row("Speed",s===void 0?void 0:`${s.speed} Mbps`)}
          ${this.row("Duplex",s===void 0?void 0:Ca(s.duplex))}
        </dl>
      </section>
    `}row(e,s){return s===void 0||s===""?k:A`<dt>${e}</dt>
          <dd>${s}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=ti({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let s=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,s.ok){this.status=s.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=s.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:s.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},_e.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},_e.styles=hs`
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
  `,_e);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",Pa);var lt=32,Le=64,Ot=8,Ma=5e3,Ta=new TextEncoder;function dt(t){return Ta.encode(t).length}function dr(t){return t.isAPMode?"ap":"station"}var be,Na=(be=class extends ge{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=s=>{this.draftWifiSSID=s.target.value},this.handleWifiPasswordInput=s=>{this.draftWifiPassword=s.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=s=>{this.draftApSSID=s.target.value},this.handleApPasswordInput=s=>{this.draftApPassword=s.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=s=>{this.draftApHasPassword=s.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=s=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=s,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=s=>{s.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return A`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?A`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:k}
        ${this.successMessage?A`<div class="banner banner-success" role="status">${this.successMessage}</div>`:k}
        ${e?A`${this.renderForm(e)} ${this.renderScan()}`:this.loading?A`<p class="status">Loading settings…</p>`:A`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(e){return A`
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

        ${this.draftMode==="station"?this.renderStation(e):this.renderAccessPoint(e)}

        <div class="actions">
          <button class="primary" type="submit" ?disabled=${this.submitting||!this.dirty}>
            ${this.submitting?"Saving…":"Save"}
          </button>
          ${this.dirty?A`<span class="muted">Unsaved changes</span>`:k}
        </div>
      </form>
    `}renderStation(e){return A`
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
            placeholder=${e.hasWifiPassword?"Leave blank to keep saved password":"No password set"}
            .value=${this.draftWifiPassword}
            @input=${this.handleWifiPasswordInput}
          />
        </label>
        ${e.hasWifiPassword?A`<p class="hint">Password saved •••• (leave blank to keep)</p>`:k}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(e){return A`
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
        ${this.draftApHasPassword?A`
              <label>
                Access point password
                <input
                  name="wifiAPPassword"
                  type="password"
                  autocomplete="new-password"
                  placeholder=${e.hasWifiAPPassword?"Leave blank to keep saved password":"At least 8 characters"}
                  .value=${this.draftApPassword}
                  @input=${this.handleApPasswordInput}
                />
              </label>
              ${e.hasWifiAPPassword?A`<p class="hint">Password saved •••• (leave blank to keep)</p>`:k}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:k}
      </section>
    `}renderScan(){return A`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?A`<div class="banner banner-error" role="alert">${this.scanError}</div>`:k}
        ${this.scanResults.length>0?A`<ul class="networks">
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:k}
      </section>
    `}renderNetwork(e){return A`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?A`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:k}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let s=this.fieldErrors[e];return s?A`<p class="field-error" role="alert">${s}</p>`:k}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?A`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:k}get dirty(){let e=this.settings;return e?this.draftMode!==dr(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=ti({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let s=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,s.ok){this.applyServerSettings(s.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=s.message,this.emitError(s.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=dr(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,s={};if(!e)return s;let i=this.draftMode==="ap";if(dt(this.draftWifiSSID)>lt&&(s.wifiSSID=`Wi-Fi name must be ${lt} characters or fewer.`),dt(this.draftApSSID)>lt&&(s.wifiAPSSID=`Access point name must be ${lt} characters or fewer.`),i?this.draftApSSID.length===0&&(s.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(s.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&dt(this.draftWifiPassword)>Le&&(s.wifiPassword=`Wi-Fi password must be ${Le} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let r=dt(this.draftApPassword);(r<Ot||r>Le)&&(s.wifiAPPassword=`Access point password must be ${Ot}–${Le} characters.`)}else e.hasWifiAPPassword||(s.wifiAPPassword=`Enter an access point password (${Ot}–${Le} characters).`);return s}buildPatch(){let e=this.settings,s={};if(!e)return s;let i=this.draftMode==="ap";return i!==e.isAPMode&&(s.isAPMode=i),this.draftWifiSSID!==e.wifiSSID&&(s.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(s.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(s.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(s.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(s.wifiAPPassword=this.draftApPassword),s}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let s=this.buildPatch();if(Object.keys(s).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let i=await this.ensureClient().saveSettings(s);if(this.submitting=!1,i.ok){this.applyServerSettings(i.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:i.data,bubbles:!0,composed:!0}));return}let r=i.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":i.message;this.errorMessage=r,this.emitError(r)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let s,i=new Promise(n=>{s=setTimeout(()=>{e.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},Ma)}),r=await Promise.race([this.ensureClient().wifiList(e.signal),i]);if(s!==void 0&&clearTimeout(s),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,r.ok){this.scanResults=[...r.data.networks].sort((n,o)=>o.rssi-n.rssi);return}r.message!=="Request aborted."&&(this.scanError=r.message,this.emitError(r.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},be.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},be.styles=hs`
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
  `,be);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Na);var Ua=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],ve,Ra=(ve=class extends ge{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return A`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Ua.map(e=>A`
            <button
              type="button"
              role="tab"
              id="tab-${e.id}"
              aria-controls="panel-${e.id}"
              aria-selected=${this.activeTab===e.id}
              @click=${()=>this.selectTab(e.id)}
            >
              ${e.label}
            </button>
          `)}
      </div>
      <div class="panel" id="panel-${this.activeTab}" role="tabpanel">
        ${this.renderActive()}
      </div>
    `}renderActive(){return this.activeTab==="settings"?A`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:A`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},ve.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},ve.styles=hs`
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
  `,ve);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",Ra);var ci="Network request failed. Check the device connection and try again.",Da={};function Ha(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function Ia(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function hi(t,e){return Ia(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:ci}}async function ui(t,e){let s=e;try{let i=await t.text();if(i.length>0)try{s=Ha(JSON.parse(i))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}async function cr(t,e,s,i,r,n){let o;try{o=await fetch(t,{headers:{Accept:e,...r},signal:n})}catch(l){return hi(l,n)}if(!o.ok)return ui(o,o.status===404?i:`Request failed with HTTP ${o.status}.`);let d;try{d=new Uint8Array(await o.arrayBuffer())}catch{return{ok:!1,status:o.status,message:ci}}return d.byteLength===0?{ok:!1,status:o.status,message:s}:{ok:!0,data:d}}async function hr(t,e,s,i,r){if(e.byteLength===0)return{ok:!1,message:s};let n=new ArrayBuffer(e.byteLength);new Uint8Array(n).set(e);let o;try{o=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...i},body:n,signal:r})}catch(d){return hi(d,r)}return o.ok?(await o.text().catch(()=>""),{ok:!0,data:Da}):ui(o,`Upload failed with HTTP ${o.status}.`)}function Oa(t={}){let e=t.baseUrl??"",s=t.backupPath??"/api/config/backup",i=t.configPath??"/api/config",r=t.headers??{},n=`${e}${s}`,o=`${e}${i}`;return{downloadBackup(d){return cr(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",r,d)},downloadConfig(d){return cr(o,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",r,d)},uploadBackup(d,l){return hr(n,d,"Cannot upload an empty archive.",r,l)},uploadConfig(d,l){return hr(o,d,"Cannot upload an empty config file.",r,l)}}}var mt=globalThis,gs=mt.ShadowRoot&&(mt.ShadyCSS===void 0||mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_s=Symbol(),ur=new WeakMap,pi=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==_s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(gs&&e===void 0){let i=s!==void 0&&s.length===1;i&&(e=ur.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ur.set(s,e))}return e}toString(){return this.cssText}},La=t=>new pi(typeof t=="string"?t:t+"",void 0,_s),ja=(t,...e)=>new pi(t.length===1?t[0]:e.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]),t,_s),Ba=(t,e)=>{if(gs)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let i=document.createElement("style"),r=mt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},pr=gs?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let i of e.cssRules)s+=i.cssText;return La(s)})(t):t,{is:qa,defineProperty:Fa,getOwnPropertyDescriptor:za,getOwnPropertyNames:Wa,getOwnPropertySymbols:Va,getPrototypeOf:Ja}=Object,xt=globalThis,fr=xt.trustedTypes,Qa=fr?fr.emptyScript:"",Ka=xt.reactiveElementPolyfillSupport,ze=(t,e)=>t,Jt={toAttribute(t,e){switch(e){case Boolean:t=t?Qa:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},fi=(t,e)=>!qa(t,e),mr={attribute:!0,type:String,converter:Jt,reflect:!1,useDefault:!1,hasChanged:fi};Symbol.metadata??=Symbol("metadata"),xt.litPropertyMetadata??=new WeakMap;var xe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=mr){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&Fa(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){let{get:r,set:n}=za(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){let d=r?.call(this);n?.call(this,o),this.requestUpdate(e,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??mr}static _$Ei(){if(this.hasOwnProperty(ze("elementProperties")))return;let e=Ja(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ze("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ze("properties"))){let s=this.properties,i=[...Wa(s),...Va(s)];for(let r of i)this.createProperty(r,s[r])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[s,i]of this.elementProperties){let r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)s.unshift(pr(r))}else e!==void 0&&s.push(pr(e));return s}static _$Eu(e,s){let i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ba(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute===void 0?Jt:i.converter).toAttribute(s,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,s){let i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Jt:n.converter;this._$Em=r;let d=o.fromAttribute(s,n.type);this[r]=d??this._$Ej?.get(r)??d,this._$Em=null}}requestUpdate(e,s,i,r=!1,n){if(e!==void 0){let o=this.constructor;if(r===!1&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??fi)(n,s)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??s??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,n]of i){let{wrapped:o}=n,d=this[r];o!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,n,d)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};xe.elementStyles=[],xe.shadowRootOptions={mode:"open"},xe[ze("elementProperties")]=new Map,xe[ze("finalized")]=new Map,Ka?.({ReactiveElement:xe}),(xt.reactiveElementVersions??=[]).push("2.1.2");var bs=globalThis,gr=t=>t,yt=bs.trustedTypes,_r=yt?yt.createPolicy("lit-html",{createHTML:t=>t}):void 0,mi="$lit$",ae=`lit$${Math.random().toFixed(9).slice(2)}$`,gi="?"+ae,Za=`<${gi}>`,Se=document,Ye=()=>Se.createComment(""),Xe=t=>t===null||typeof t!="object"&&typeof t!="function",vs=Array.isArray,Ga=t=>vs(t)||typeof t?.[Symbol.iterator]=="function",Lt=`[ 	
\f\r]`,je=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,br=/-->/g,vr=/>/g,he=RegExp(`>|${Lt}(?:([^\\s"'>=/]+)(${Lt}*=${Lt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),$r=/'/g,yr=/"/g,_i=/^(?:script|style|textarea|title)$/i,te=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),Ue=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),wr=new WeakMap,fe=Se.createTreeWalker(Se,129);function bi(t,e){if(!vs(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return _r===void 0?e:_r.createHTML(e)}var Ya=(t,e)=>{let s=t.length-1,i=[],r,n=e===2?"<svg>":e===3?"<math>":"",o=je;for(let d=0;d<s;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(o.lastIndex=c,u=o.exec(l),u!==null);)c=o.lastIndex,o===je?u[1]==="!--"?o=br:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=he):(_i.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=he):o=vr:o===he?u[0]===">"?(o=r??je,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?he:u[3]==='"'?yr:$r):o===yr||o===$r?o=he:o===br||o===vr?o=je:(o=he,r=void 0);let f=o===he&&t[d+1].startsWith("/>")?" ":"";n+=o===je?l+Za:p>=0?(i.push(h),l.slice(0,p)+mi+l.slice(p)+ae+f):l+ae+(p===-2?d:f)}return[bi(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Qt=class vi{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,o=0,d=e.length-1,l=this.parts,[h,u]=Ya(e,s);if(this.el=vi.createElement(h,i),fe.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=fe.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(mi)){let c=u[o++],f=r.getAttribute(p).split(ae),v=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:v[2],strings:f,ctor:v[1]==="."?eo:v[1]==="?"?to:v[1]==="@"?so:Pt}),r.removeAttribute(p)}else p.startsWith(ae)&&(l.push({type:6,index:n}),r.removeAttribute(p));if(_i.test(r.tagName)){let p=r.textContent.split(ae),c=p.length-1;if(c>0){r.textContent=yt?yt.emptyScript:"";for(let f=0;f<c;f++)r.append(p[f],Ye()),fe.nextNode(),l.push({type:2,index:++n});r.append(p[c],Ye())}}}else if(r.nodeType===8)if(r.data===gi)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(ae,p+1))!==-1;)l.push({type:7,index:n}),p+=ae.length-1}n++}}static createElement(e,s){let i=Se.createElement("template");return i.innerHTML=e,i}};function Re(t,e,s=t,i){if(e===Ue)return e;let r=i===void 0?s._$Cl:s._$Co?.[i],n=Xe(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,s,i)),i===void 0?s._$Cl=r:(s._$Co??=[])[i]=r),r!==void 0&&(e=Re(t,r._$AS(t,e.values),r,i)),e}var Xa=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:i}=this._$AD,r=(e?.creationScope??Se).importNode(s,!0);fe.currentNode=r;let n=fe.nextNode(),o=0,d=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new $s(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new ro(n,this,e)),this._$AV.push(h),l=i[++d]}o!==l?.index&&(n=fe.nextNode(),o++)}return fe.currentNode=Se,r}p(e){let s=0;for(let i of this._$AV)i!==void 0&&(i.strings===void 0?i._$AI(e[s]):(i._$AI(e,i,s),s+=i.strings.length-2)),s++}},$s=class $i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Re(this,e,s),Xe(e)?e===N||e==null||e===""?(this._$AH!==N&&this._$AR(),this._$AH=N):e!==this._$AH&&e!==Ue&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ga(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==N&&Xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Se.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Qt.createElement(bi(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let n=new Xa(r,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(e){let s=wr.get(e.strings);return s===void 0&&wr.set(e.strings,s=new Qt(e)),s}k(e){vs(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let n of e)r===s.length?s.push(i=new $i(this.O(Ye()),this.O(Ye()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let i=gr(e).nextSibling;gr(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Pt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,n){this.type=1,this._$AH=N,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}_$AI(e,s=this,i,r){let n=this.strings,o=!1;if(n===void 0)e=Re(this,e,s,0),o=!Xe(e)||e!==this._$AH&&e!==Ue,o&&(this._$AH=e);else{let d=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Re(this,d[i+l],s,l),h===Ue&&(h=this._$AH[l]),o||=!Xe(h)||h!==this._$AH[l],h===N?e=N:e!==N&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!r&&this.j(e)}j(e){e===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},eo=class extends Pt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===N?void 0:e}},to=class extends Pt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==N)}},so=class extends Pt{constructor(e,s,i,r,n){super(e,s,i,r,n),this.type=5}_$AI(e,s=this){if((e=Re(this,e,s,0)??N)===Ue)return;let i=this._$AH,r=e===N&&i!==N||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==N&&(i===N||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ro=class{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Re(this,e)}},io=bs.litHtmlPolyfillSupport;io?.(Qt,$s),(bs.litHtmlVersions??=[]).push("3.3.3");var no=(t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(r===void 0){let n=s?.renderBefore??null;i._$litPart$=r=new $s(e.insertBefore(Ye(),n),n,void 0,s??{})}return r._$AI(t),r},ys=globalThis,We=class extends xe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=no(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ue}};We._$litElement$=!0,We.finalized=!0,ys.litElementHydrateSupport?.({LitElement:We});var ao=ys.litElementPolyfillSupport;ao?.({LitElement:We}),(ys.litElementVersions??=[]).push("4.2.2");var Ar=2e3,oo=12e4,Sr="Unsupported file type. Choose a .zip full backup or a .bin config file.";function jt(t){let e=t.toLowerCase();return e.endsWith(".zip")?"archive":e.endsWith(".bin")?"config":null}function lo(t,e){if(typeof URL.createObjectURL!="function")return;let s=new ArrayBuffer(t.byteLength);new Uint8Array(s).set(t);let i=new Blob([s],{type:"application/octet-stream"}),r=URL.createObjectURL(i),n=document.createElement("a");n.href=r,n.download=e,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}var $e,co=($e=class extends We{constructor(...e){super(...e),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return te`
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
              @change=${e=>this.handleFileChange(e)}
            />
            ${this.fileError?te`<span class="field-error" role="alert">${this.fileError}</span>`:N}
          </label>
          ${this.selectedFile&&!this.fileError?te`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${jt(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:N}
          ${this.uploadError?te`<div class="banner banner-error" role="alert">
                ${this.uploadError}
              </div>`:N}
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
    `}renderNotice(e){return e?te`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.message}
    </div>`:N}renderRebootOverlay(){return this.phase==="idle"?N:te`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?te`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:N}
          ${this.phase==="ready"?te`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:N}
          ${this.phase==="timeout"?te`
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
              `:N}
        </div>
      </div>
    `}createClient(){return Oa({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(e){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let s=this.createClient(),i=e==="archive"?await s.downloadBackup():await s.downloadConfig();if(!i.ok){this.downloadNotice={kind:"error",message:i.message};return}let r=e==="archive"?this.archiveFileName:this.binFileName;lo(i.data,r),this.downloadNotice={kind:"info",message:e==="archive"?`Full backup downloaded as ${r}.`:`Config downloaded as ${r}.`}}finally{this.downloading=!1}}}handleFileChange(e){let s=e.currentTarget,i=s.files&&s.files[0]?s.files[0]:null;this.selectedFile=i,this.uploadError=null,this.fileError=i?i.size===0?"The selected file is empty.":i.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:jt(i.name)?null:Sr:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let e=jt(this.selectedFile.name);if(!e)this.uploadError=Sr;else if(window.confirm(e==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let s;try{s=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let i=this.createClient(),r=e==="archive"?await i.uploadBackup(s):await i.uploadConfig(s);if(!r.ok){this.uploadError=r.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:e},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let e=this.renderRoot.querySelector("#edc-restore-file");e&&(e.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},Ar)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let e=!1;try{let s=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(s.ok){let i=await s.json();e=!!i&&typeof i=="object"&&i.healty===!0}}catch{e=!1}this.isConnected&&this.phase==="rebooting"&&(e?this.phase="ready":(this._attempts+=1,this._attempts*Ar>=oo?this.phase="timeout":this.schedulePoll()))}},$e.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},$e.styles=ja`
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
  `,$e);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",co);var kr="Invalid settings response.";function ho(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function uo(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function yi(t,e){return uo(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}async function wi(t,e){let s=e;try{let i=await t.text();if(i.length>0)try{s=ho(JSON.parse(i))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}function po(t){if(!t||typeof t!="object")return;let{host:e,uri:s,port:i,enabled:r}=t;if(typeof e=="string"&&typeof s=="string"&&typeof i=="number"&&Number.isFinite(i)&&typeof r=="boolean")return{host:e,uri:s,port:i,enabled:r}}async function Ai(t){let e;try{e=await t.json()}catch{return{ok:!1,status:t.status,message:kr}}let s=po(e);return s?{ok:!0,data:s}:{ok:!1,status:t.status,message:kr}}async function fo(t,e,s){let i;try{i=await fetch(t,{headers:{Accept:"application/json",...e},signal:s})}catch(r){return yi(r,s)}return i.ok?Ai(i):wi(i,"Could not load the logger settings from the device.")}async function mo(t,e,s,i){let r;try{r=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...s},body:JSON.stringify(e),signal:i})}catch(n){return yi(n,i)}return r.ok?Ai(r):wi(r,"The device rejected the logger settings.")}function go(t={}){let e=t.baseUrl??"",s=t.settingsPath??"/api/log/settings",i=t.headers??{},r=`${e}${s}`;return{getSettings(n){return fo(r,i,n)},saveSettings(n,o){return mo(r,n,i,o)}}}var gt=globalThis,ws=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,As=Symbol(),Er=new WeakMap,Si=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==As)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ws&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Er.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Er.set(e,t))}return t}toString(){return this.cssText}},_o=t=>new Si(typeof t=="string"?t:t+"",void 0,As),bo=(t,...e)=>new Si(t.length===1?t[0]:e.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]),t,As),vo=(t,e)=>{if(ws)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let i=document.createElement("style"),r=gt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},Cr=ws?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let i of e.cssRules)s+=i.cssText;return _o(s)})(t):t,{is:$o,defineProperty:yo,getOwnPropertyDescriptor:wo,getOwnPropertyNames:Ao,getOwnPropertySymbols:So,getPrototypeOf:ko}=Object,Mt=globalThis,xr=Mt.trustedTypes,Eo=xr?xr.emptyScript:"",Co=Mt.reactiveElementPolyfillSupport,Ve=(t,e)=>t,Kt={toAttribute(t,e){switch(e){case Boolean:t=t?Eo:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ki=(t,e)=>!$o(t,e),Pr={attribute:!0,type:String,converter:Kt,reflect:!1,useDefault:!1,hasChanged:ki};Symbol.metadata??=Symbol("metadata"),Mt.litPropertyMetadata??=new WeakMap;var Pe=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Pr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&yo(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=wo(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let o=i?.call(this);r?.call(this,n),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pr}static _$Ei(){if(this.hasOwnProperty(Ve("elementProperties")))return;let t=ko(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ve("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ve("properties"))){let e=this.properties,s=[...Ao(e),...So(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(Cr(i))}else t!==void 0&&e.push(Cr(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vo(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute===void 0?Kt:s.converter).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute===void 0?Kt:r.converter;this._$Em=i;let o=n.fromAttribute(e,r.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){let n=this.constructor;if(i===!1&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??ki)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,o=this[i];n!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,r,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Pe.elementStyles=[],Pe.shadowRootOptions={mode:"open"},Pe[Ve("elementProperties")]=new Map,Pe[Ve("finalized")]=new Map,Co?.({ReactiveElement:Pe}),(Mt.reactiveElementVersions??=[]).push("2.1.2");var Ss=globalThis,Mr=t=>t,wt=Ss.trustedTypes,Tr=wt?wt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ei="$lit$",oe=`lit$${Math.random().toFixed(9).slice(2)}$`,Ci="?"+oe,xo=`<${Ci}>`,ke=document,et=()=>ke.createComment(""),tt=t=>t===null||typeof t!="object"&&typeof t!="function",ks=Array.isArray,Po=t=>ks(t)||typeof t?.[Symbol.iterator]=="function",Bt=`[ 	
\f\r]`,Be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Nr=/-->/g,Ur=/>/g,ue=RegExp(`>|${Bt}(?:([^\\s"'>=/]+)(${Bt}*=${Bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rr=/'/g,Dr=/"/g,xi=/^(?:script|style|textarea|title)$/i,Hr=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),De=Symbol.for("lit-noChange"),F=Symbol.for("lit-nothing"),Ir=new WeakMap,me=ke.createTreeWalker(ke,129);function Pi(t,e){if(!ks(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Tr===void 0?e:Tr.createHTML(e)}var Mo=(t,e)=>{let s=t.length-1,i=[],r,n=e===2?"<svg>":e===3?"<math>":"",o=Be;for(let d=0;d<s;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(o.lastIndex=c,u=o.exec(l),u!==null);)c=o.lastIndex,o===Be?u[1]==="!--"?o=Nr:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=ue):(xi.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=ue):o=Ur:o===ue?u[0]===">"?(o=r??Be,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?ue:u[3]==='"'?Dr:Rr):o===Dr||o===Rr?o=ue:o===Nr||o===Ur?o=Be:(o=ue,r=void 0);let f=o===ue&&t[d+1].startsWith("/>")?" ":"";n+=o===Be?l+xo:p>=0?(i.push(h),l.slice(0,p)+Ei+l.slice(p)+oe+f):l+oe+(p===-2?d:f)}return[Pi(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Zt=class Mi{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,o=0,d=e.length-1,l=this.parts,[h,u]=Mo(e,s);if(this.el=Mi.createElement(h,i),me.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=me.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Ei)){let c=u[o++],f=r.getAttribute(p).split(oe),v=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:v[2],strings:f,ctor:v[1]==="."?No:v[1]==="?"?Uo:v[1]==="@"?Ro:Tt}),r.removeAttribute(p)}else p.startsWith(oe)&&(l.push({type:6,index:n}),r.removeAttribute(p));if(xi.test(r.tagName)){let p=r.textContent.split(oe),c=p.length-1;if(c>0){r.textContent=wt?wt.emptyScript:"";for(let f=0;f<c;f++)r.append(p[f],et()),me.nextNode(),l.push({type:2,index:++n});r.append(p[c],et())}}}else if(r.nodeType===8)if(r.data===Ci)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(oe,p+1))!==-1;)l.push({type:7,index:n}),p+=oe.length-1}n++}}static createElement(e,s){let i=ke.createElement("template");return i.innerHTML=e,i}};function He(t,e,s=t,i){if(e===De)return e;let r=i===void 0?s._$Cl:s._$Co?.[i],n=tt(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,s,i)),i===void 0?s._$Cl=r:(s._$Co??=[])[i]=r),r!==void 0&&(e=He(t,r._$AS(t,e.values),r,i)),e}var To=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??ke).importNode(e,!0);me.currentNode=i;let r=me.nextNode(),n=0,o=0,d=s[0];for(;d!==void 0;){if(n===d.index){let l;d.type===2?l=new Es(r,r.nextSibling,this,t):d.type===1?l=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(l=new Do(r,this,t)),this._$AV.push(l),d=s[++o]}n!==d?.index&&(r=me.nextNode(),n++)}return me.currentNode=ke,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(t[e]):(s._$AI(t,s,e),e+=s.strings.length-2)),e++}},Es=class Ti{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=F,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=He(this,e,s),tt(e)?e===F||e==null||e===""?(this._$AH!==F&&this._$AR(),this._$AH=F):e!==this._$AH&&e!==De&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Po(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==F&&tt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ke.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Zt.createElement(Pi(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let n=new To(r,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(e){let s=Ir.get(e.strings);return s===void 0&&Ir.set(e.strings,s=new Zt(e)),s}k(e){ks(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let n of e)r===s.length?s.push(i=new Ti(this.O(et()),this.O(et()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let i=Mr(e).nextSibling;Mr(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Tt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=F,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=F}_$AI(t,e=this,s,i){let r=this.strings,n=!1;if(r===void 0)t=He(this,t,e,0),n=!tt(t)||t!==this._$AH&&t!==De,n&&(this._$AH=t);else{let o=t,d,l;for(t=r[0],d=0;d<r.length-1;d++)l=He(this,o[s+d],e,d),l===De&&(l=this._$AH[d]),n||=!tt(l)||l!==this._$AH[d],l===F?t=F:t!==F&&(t+=(l??"")+r[d+1]),this._$AH[d]=l}n&&!i&&this.j(t)}j(t){t===F?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},No=class extends Tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===F?void 0:t}},Uo=class extends Tt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==F)}},Ro=class extends Tt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=He(this,t,e,0)??F)===De)return;let s=this._$AH,i=t===F&&s!==F||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==F&&(s===F||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Do=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){He(this,t)}},Ho=Ss.litHtmlPolyfillSupport;Ho?.(Zt,Es),(Ss.litHtmlVersions??=[]).push("3.3.3");var Io=(t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(r===void 0){let n=s?.renderBefore??null;i._$litPart$=r=new Es(e.insertBefore(et(),n),n,void 0,s??{})}return r._$AI(t),r},Cs=globalThis,Je=class extends Pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Io(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return De}};Je._$litElement$=!0,Je.finalized=!0,Cs.litElementHydrateSupport?.({LitElement:Je});var Oo=Cs.litElementPolyfillSupport;Oo?.({LitElement:Je}),(Cs.litElementVersions??=[]).push("4.2.2");var ye,Lo=(ye=class extends Je{constructor(...e){super(...e),this.baseUrl="",this.settingsPath="/api/log/settings",this.deviceName="logger",this.maxHostLength=63,this.formHost="",this.formUri="",this.formPort="",this.formEnabled=!1,this.loading=!1,this.saving=!1,this.notice=null,this.loaded=!1,this._loadStarted=!1}connectedCallback(){super.connectedCallback(),this.load()}firstUpdated(){this._loadStarted||this.load()}render(){return Hr`
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
              @input=${e=>this.handleHostInput(e)}
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
              @input=${e=>this.handleUriInput(e)}
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
              @input=${e=>this.handlePortInput(e)}
            />
          </label>
          <label class="checkbox-row" for="edu-log-enabled">
            <input
              id="edu-log-enabled"
              type="checkbox"
              .checked=${this.formEnabled}
              ?disabled=${this.loading||this.saving}
              @change=${e=>this.handleEnabledChange(e)}
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
    `}renderNotice(e){return e?Hr`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.text}
    </div>`:F}createClient(){return go({baseUrl:this.baseUrl,settingsPath:this.settingsPath})}async load(){if(!(this.loading||this.saving)){this._loadStarted=!0,this.loading=!0,this.notice=null;try{let e=await this.createClient().getSettings();if(!e.ok){this.notice={kind:"error",text:e.message};return}this.applySettings(e.data),this.loaded=!0}finally{this.loading=!1}}}applySettings(e){this.formHost=e.host,this.formUri=e.uri,this.formPort=String(e.port),this.formEnabled=e.enabled}handleHostInput(e){this.formHost=e.currentTarget.value}handleUriInput(e){this.formUri=e.currentTarget.value}handlePortInput(e){this.formPort=e.currentTarget.value}handleEnabledChange(e){this.formEnabled=e.currentTarget.checked}validate(){let e=this.formHost.trim(),s=this.formUri.trim();if(e.length===0)return"Host is required.";if(e.length>this.maxHostLength)return`Host must be ${this.maxHostLength} characters or fewer.`;if(s.length===0)return"URI is required.";if(s.length>this.maxHostLength)return`URI must be ${this.maxHostLength} characters or fewer.`;let i=this.formPort.trim();if(!/^\d+$/.test(i))return"Port must be a whole number between 1 and 65535.";let r=Number(i);return!Number.isInteger(r)||r<1||r>65535?"Port must be a whole number between 1 and 65535.":{host:e,uri:s,port:r,enabled:this.formEnabled}}async handleSave(){if(this.loading||this.saving)return;let e=this.validate();if(typeof e=="string")this.notice={kind:"error",text:e};else{this.saving=!0,this.notice=null;try{let s=await this.createClient().saveSettings(e);if(!s.ok){this.notice={kind:"error",text:s.message};return}this.applySettings(s.data),this.loaded=!0,this.notice={kind:"info",text:"Settings saved."},this.dispatchEvent(new CustomEvent("edu-log-saved",{detail:s.data,bubbles:!0,composed:!0}))}finally{this.saving=!1}}}},ye.properties={baseUrl:{type:String,attribute:"base-url"},settingsPath:{type:String,attribute:"settings-path"},deviceName:{type:String,attribute:"device-name"},maxHostLength:{type:Number,attribute:"max-host-length"},formHost:{state:!0},formUri:{state:!0},formPort:{state:!0},formEnabled:{state:!0},loading:{state:!0},saving:{state:!0},notice:{state:!0},loaded:{state:!0}},ye.styles=bo`
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
  `,ye);typeof customElements<"u"&&!customElements.get("edu-log-settings-page")&&customElements.define("edu-log-settings-page",Lo);const Or=document.getElementById("app");Or&&Fi(a(sa,{}),Or);
