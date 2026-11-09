(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();var ft,k,Er,Y,bs,kr,xr,St,tt,Ne,Pr,qt,Ut,Nt,lt={},dt=[],wi=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,mt=Array.isArray;function Q(t,e){for(var s in e)t[s]=e[s];return t}function zt(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Ai(t,e,s){var r,i,n,a={};for(n in e)n=="key"?r=e[n]:n=="ref"?i=e[n]:a[n]=e[n];if(arguments.length>2&&(a.children=arguments.length>3?ft.call(arguments,2):s),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)a[n]===void 0&&(a[n]=t.defaultProps[n]);return st(t,a,r,i,null)}function st(t,e,s,r,i){var n={type:t,props:e,key:s,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Er,__i:-1,__u:0};return i==null&&k.vnode!=null&&k.vnode(n),n}function q(t){return t.children}function rt(t,e){this.props=t,this.context=e}function ge(t,e){if(e==null)return t.__?ge(t.__,t.__i+1):null;for(var s;e<t.__k.length;e++)if((s=t.__k[e])!=null&&s.__e!=null)return s.__e;return typeof t.type=="function"?ge(t):null}function Si(t){if(t.__P&&t.__d){var e=t.__v,s=e.__e,r=[],i=[],n=Q({},e);n.__v=e.__v+1,k.vnode&&k.vnode(n),Wt(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[s]:null,r,s??ge(e),!!(32&e.__u),i),n.__v=e.__v,n.__.__k[n.__i]=n,Nr(r,n,i),e.__e=e.__=null,n.__e!=s&&Cr(n)}}function Cr(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),Cr(t)}function $s(t){(!t.__d&&(t.__d=!0)&&Y.push(t)&&!ct.__r++||bs!=k.debounceRendering)&&((bs=k.debounceRendering)||kr)(ct)}function ct(){try{for(var t,e=1;Y.length;)Y.length>e&&Y.sort(xr),t=Y.shift(),e=Y.length,Si(t)}finally{Y.length=ct.__r=0}}function Mr(t,e,s,r,i,n,a,d,l,h,u){var p,c,f,$,A,_,m=r&&r.__k||dt,v=e.length;for(l=Ei(s,e,m,l,v),p=0;p<v;p++)(f=s.__k[p])!=null&&(c=f.__i!=-1&&m[f.__i]||lt,f.__i=p,_=Wt(t,f,c,i,n,a,d,l,h,u),$=f.__e,f.ref&&c.ref!=f.ref&&(c.ref&&Ft(c.ref,null,f),u.push(f.ref,f.__c||$,f)),A==null&&$!=null&&(A=$),4&f.__u?(l=Tr(f,l,t),c.__e&&(c.__e=null)):typeof f.type=="function"&&_!==void 0?l=_:$&&(l=$.nextSibling),f.__u&=-7);return s.__e=A,l}function Ei(t,e,s,r,i){var n,a,d,l,h,u=s.length,p=u,c=0;for(t.__k=new Array(i),n=0;n<i;n++)(a=e[n])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=t.__k[n]=st(null,a,null,null,null):mt(a)?a=t.__k[n]=st(q,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=t.__k[n]=st(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):t.__k[n]=a,l=n+c,a.__=t,a.__b=t.__b+1,d=null,(h=a.__i=ki(a,s,l,p))!=-1&&(p--,(d=s[h])&&(d.__u|=2)),d==null||d.__v==null?(h==-1&&(i>u?c--:i<u&&c++),typeof a.type!="function"&&(a.__u|=4)):h!=l&&(h==l-1?c--:h==l+1?c++:(h>l?c--:c++,a.__u|=4))):t.__k[n]=null;if(p)for(n=0;n<u;n++)(d=s[n])!=null&&(2&d.__u)==0&&(d.__e==r&&(r=ge(d)),Hr(d,d));return r}function Tr(t,e,s){var r,i;if(typeof t.type=="function"){for(r=t.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=t,e=Tr(r[i],e,s));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=ge(t)),e=s.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function ki(t,e,s,r){var i,n,a,d=t.key,l=t.type,h=e[s],u=h!=null&&(2&h.__u)==0;if(h===null&&d==null||u&&d==h.key&&l==h.type)return s;if(r>(u?1:0)){for(i=s-1,n=s+1;i>=0||n<e.length;)if((h=e[a=i>=0?i--:n++])!=null&&(2&h.__u)==0&&d==h.key&&l==h.type)return a}return-1}function vs(t,e,s){e[0]=="-"?t.setProperty(e,s??""):t[e]=s==null?"":typeof s!="number"||wi.test(e)?s:s+"px"}function Je(t,e,s,r,i){var n,a;e:if(e=="style")if(typeof s=="string")t.style.cssText=s;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)s&&e in s||vs(t.style,e,"");if(s)for(e in s)r&&s[e]==r[e]||vs(t.style,e,s[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(Pr,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=s,s?r?s[Ne]=r[Ne]:(s[Ne]=qt,t.addEventListener(e,n?Nt:Ut,n)):t.removeEventListener(e,n?Nt:Ut,n);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=s??"";break e}catch{}typeof s=="function"||(s==null||s===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&s==1?"":s))}}function ys(t){return function(e){if(this.l){var s=this.l[e.type+t];if(e[tt]==null)e[tt]=qt++;else if(e[tt]<s[Ne])return;return s(k.event?k.event(e):e)}}}function Wt(t,e,s,r,i,n,a,d,l,h){var u,p,c,f,$,A,_,m,v,y,R,E,C,j,B,T,L=e.type;if(e.constructor!==void 0)return null;128&s.__u&&(l=!!(32&s.__u),n=[d=e.__e=s.__e]),(u=k.__b)&&u(e);e:if(typeof L=="function"){p=a.length;try{if(v=e.props,y=L.prototype&&L.prototype.render,R=(u=L.contextType)&&r[u.__c],E=u?R?R.props.value:u.__:r,s.__c?m=(c=e.__c=s.__c).__=c.__E:(y?e.__c=c=new L(v,E):(e.__c=c=new rt(v,E),c.constructor=L,c.render=Pi),R&&R.sub(c),c.state||(c.state={}),c.__n=r,f=c.__d=!0,c.__h=[],c._sb=[]),y&&c.__s==null&&(c.__s=c.state),y&&L.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=Q({},c.__s)),Q(c.__s,L.getDerivedStateFromProps(v,c.__s))),$=c.props,A=c.state,c.__v=e,f)y&&L.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),y&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(y&&L.getDerivedStateFromProps==null&&v!==$&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(v,E),e.__v==s.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(v,c.__s,E)===!1){e.__v!=s.__v&&(c.props=v,c.state=c.__s,c.__d=!1),e.__e=s.__e,e.__k=s.__k,e.__k.some(function(V){V&&(V.__=e)}),dt.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&a.push(c),d=ge(s);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(v,c.__s,E),y&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate($,A,_)})}if(c.context=E,c.props=v,c.__P=t,c.__e=!1,C=k.__r,j=0,y)c.state=c.__s,c.__d=!1,C&&C(e),u=c.render(c.props,c.state,c.context),dt.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,C&&C(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++j<25);c.state=c.__s,c.getChildContext!=null&&(r=Q(Q({},r),c.getChildContext())),y&&!f&&c.getSnapshotBeforeUpdate!=null&&(_=c.getSnapshotBeforeUpdate($,A)),B=u!=null&&u.type===q&&u.key==null?Rr(u.props.children):u,d=Mr(t,mt(B)?B:[B],e,s,r,i,n,a,d,l,h),c.base=e.__e,e.__u&=-161,c.__h.length&&a.push(c),m&&(c.__E=c.__=null)}catch(V){if(a.length=p,e.__v=null,l||n!=null){if(V.then){for(e.__u|=l?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;n!=null&&(n[n.indexOf(d)]=null),e.__e=d}else if(n!=null)for(T=n.length;T--;)zt(n[T])}else e.__e=s.__e;e.__k==null&&(e.__k=s.__k||[]),V.then||Ur(e),k.__e(V,e,s)}}else n==null&&e.__v==s.__v?(e.__k=s.__k,e.__e=s.__e):d=e.__e=xi(s.__e,e,s,r,i,n,a,l,h);return(u=k.diffed)&&u(e),128&e.__u?void 0:d}function Ur(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(Ur))}function Nr(t,e,s){for(var r=0;r<s.length;r++)Ft(s[r],s[++r],s[++r]);k.__c&&k.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(n){n.call(i)})}catch(n){k.__e(n,i.__v)}})}function Rr(t){return typeof t!="object"||t==null||t.__b>0?t:mt(t)?t.map(Rr):t.constructor!==void 0?null:Q({},t)}function xi(t,e,s,r,i,n,a,d,l){var h,u,p,c,f,$,A,_=s.props||lt,m=e.props,v=e.type;if(v=="svg"?i="http://www.w3.org/2000/svg":v=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((f=n[h])&&"setAttribute"in f==!!v&&(v?f.localName==v:f.nodeType==3)){t=f,n[h]=null;break}}if(t==null){if(v==null)return document.createTextNode(m);t=document.createElementNS(i,v,m.is&&m),d&&(k.__m&&k.__m(e,n),d=!1),n=null}if(v==null)_===m||d&&t.data==m||(t.data=m);else{if(n=v=="textarea"&&m.defaultValue!=null?null:n&&ft.call(t.childNodes),!d&&n!=null)for(_={},h=0;h<t.attributes.length;h++)_[(f=t.attributes[h]).name]=f.value;for(h in _)f=_[h],h=="dangerouslySetInnerHTML"?p=f:h=="children"||h in m||h=="value"&&"defaultValue"in m||h=="checked"&&"defaultChecked"in m||Je(t,h,null,f,i);for(h in m)f=m[h],h=="children"?c=f:h=="dangerouslySetInnerHTML"?u=f:h=="value"?$=f:h=="checked"?A=f:d&&typeof f!="function"||_[h]===f||Je(t,h,f,_[h],i);if(u)d||p&&(u.__html==p.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(p&&(t.innerHTML=""),Mr(e.type=="template"?t.content:t,mt(c)?c:[c],e,s,r,v=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,a,n?n[0]:s.__k&&ge(s,0),d,l),n!=null)for(h=n.length;h--;)zt(n[h]);d&&v!="textarea"||(h="value",v=="progress"&&$==null?t.removeAttribute("value"):$!=null&&($!==t[h]||v=="progress"&&!$||v=="option"&&$!=_[h])&&Je(t,h,$,_[h],i),h="checked",A!=null&&A!=t[h]&&Je(t,h,A,_[h],i))}return t}function Ft(t,e,s){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(i){k.__e(i,s)}}function Hr(t,e,s){var r,i;if(k.unmount&&k.unmount(t),(r=t.ref)&&(r.current&&r.current!=t.__e||Ft(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){k.__e(n,e)}r.base=r.__P=r.__n=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Hr(r[i],e,s||typeof t.type!="function");s||zt(t.__e),t.__c=t.__=t.__e=void 0}function Pi(t,e,s){return this.constructor(t,s)}function Ci(t,e,s){var r,i,n,a;e==document&&(e=document.documentElement),k.__&&k.__(t,e),i=(r=!1)?null:e.__k,n=[],a=[],Wt(e,t=e.__k=Ai(q,null,[t]),i||lt,lt,e.namespaceURI,i?null:e.firstChild?ft.call(e.childNodes):null,n,i?i.__e:e.firstChild,r,a),Nr(n,t,a),t.props.children=null}ft=dt.slice,k={__e:function(t,e,s,r){for(var i,n,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(t)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),a=i.__d),a)return i.__E=i}catch(d){t=d}throw t}},Er=0,rt.prototype.setState=function(t,e){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Q({},this.state),typeof t=="function"&&(t=t(Q({},s),this.props)),t&&Q(s,t),t!=null&&this.__v&&(e&&this._sb.push(e),$s(this))},rt.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),$s(this))},rt.prototype.render=q,Y=[],kr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,xr=function(t,e){return t.__v.__b-e.__v.__b},ct.__r=0,St=Math.random().toString(8),tt="__d"+St,Ne="__a"+St,Pr=/(PointerCapture)$|Capture$/i,qt=0,Ut=ys(!1),Nt=ys(!0);var Mi=0;function o(t,e,s,r,i,n){e||(e={});var a,d,l=e;if("ref"in l)for(d in l={},e)d=="ref"?a=e[d]:l[d]=e[d];var h={type:t,props:l,key:s,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Mi,__i:-1,__u:0,__source:i,__self:n};if(typeof t=="function"&&(a=t.defaultProps))for(d in a)l[d]===void 0&&(l[d]=a[d]);return k.vnode&&k.vnode(h),h}var Le,M,Et,ws,je=0,Dr=[],U=k,As=U.__b,Ss=U.__r,Es=U.diffed,ks=U.__c,xs=U.unmount,Ps=U.__;function Bt(t,e){U.__h&&U.__h(M,t,je||e),je=0;var s=M.__H||(M.__H={__:[],__h:[]});return t>=s.__.length&&s.__.push({}),s.__[t]}function b(t){return je=1,Ti(Or,t)}function Ti(t,e,s){var r=Bt(Le++,2);if(r.t=t,!r.__c&&(r.__=[Or(void 0,e),function(d){var l=r.__N?r.__N[0]:r.__[0],h=r.t(l,d);l!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=M,!M.__f)){var i=function(d,l,h){if(!r.__c.__H)return!0;var u=!1,p=r.__c.props!==d;if(r.__c.__H.__.some(function(f){if(f.__N){u=!0;var $=f.__[0];f.__=f.__N,f.__N=void 0,$!==f.__[0]&&(p=!0)}}),n){var c=n.call(this,d,l,h);return u?c||p:c}return!u||p};M.__f=!0;var n=M.shouldComponentUpdate,a=M.componentWillUpdate;M.componentWillUpdate=function(d,l,h){if(this.__e){var u=n;n=void 0,i(d,l,h),n=u}a&&a.call(this,d,l,h)},M.shouldComponentUpdate=i}return r.__N||r.__}function W(t,e){var s=Bt(Le++,3);!U.__s&&Ir(s.__H,e)&&(s.__=t,s.u=e,M.__H.__h.push(s))}function gt(t){return je=5,Vt(function(){return{current:t}},[])}function Vt(t,e){var s=Bt(Le++,7);return Ir(s.__H,e)&&(s.__=t(),s.__H=e,s.__h=t),s.__}function N(t,e){return je=8,Vt(function(){return t},e)}function Ui(){for(var t;t=Dr.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(it),e.__h.some(Rt),e.__h=[]}catch(s){e.__h=[],U.__e(s,t.__v)}}}U.__b=function(t){M=null,As&&As(t)},U.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Ps&&Ps(t,e)},U.__r=function(t){Ss&&Ss(t),Le=0;var e=(M=t.__c).__H;e&&(Et===M?(e.__h=[],M.__h=[],e.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(e.__h.some(it),e.__h.some(Rt),e.__h=[],Le=0)),Et=M},U.diffed=function(t){Es&&Es(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Dr.push(e)!==1&&ws===U.requestAnimationFrame||((ws=U.requestAnimationFrame)||Ni)(Ui)),e.__H.__.some(function(s){s.u&&(s.__H=s.u,s.u=void 0)})),Et=M=null},U.__c=function(t,e){e.some(function(s){try{s.__h.some(it),s.__h=s.__h.filter(function(r){return!r.__||Rt(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],U.__e(r,s.__v)}}),ks&&ks(t,e)},U.unmount=function(t){xs&&xs(t);var e,s=t.__c;s&&s.__H&&(s.__H.__.some(function(r){try{it(r)}catch(i){e=i}}),s.__H=void 0,e&&U.__e(e,s.__v))};var Cs=typeof requestAnimationFrame=="function";function Ni(t){var e,s=function(){clearTimeout(r),Cs&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(s,35);Cs&&(e=requestAnimationFrame(s))}function it(t){var e=M,s=t.__c;typeof s=="function"&&(t.__c=void 0,s()),M=e}function Rt(t){var e=M;t.__c=t.__(),M=e}function Ir(t,e){return!t||t.length!==e.length||e.some(function(s,r){return s!==t[r]})}function Or(t,e){return typeof e=="function"?e(t):e}const F="Device returned an empty response.",Jt="Could not reach the device. Check that you are connected to its network and try again.",Ri={},g={mqtt:{hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[9600,19200,38400,57600,115200],addressMin:1,addressMax:247,anenjiAddressMin:0,anenjiAddressMax:247},meter:{ctRatioMin:0,ctRatioMax:65535,syncMin:0}};function Kt(){return{ok:!1,message:Jt}}function Hi(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const s=e.message;if(typeof s=="string"&&s)return s}}catch{}}async function Qt(t){let e=`Request failed (HTTP ${t.status}).`;try{const s=await t.text();s&&(e=Hi(s)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function se(t,e){let s;try{s=await fetch(t,{headers:{Accept:"application/json"}})}catch{return Kt()}if(!s.ok)return Qt(s);let r;try{r=await s.text()}catch{return{ok:!1,status:s.status,message:Jt}}if(!r.trim())return{ok:!1,status:s.status,message:e};try{return{ok:!0,data:JSON.parse(r)}}catch{return{ok:!1,status:s.status,message:e}}}async function Lr(t,e){let s;try{s=await fetch(t,e)}catch{return Kt()}if(!s.ok)return Qt(s);try{await s.text()}catch{}return{ok:!0,data:Ri}}function Di(t,e){return Lr(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}async function Zt(t,e,s){let r;try{r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})}catch{return Kt()}if(!r.ok)return Qt(r);let i;try{i=await r.text()}catch{return{ok:!1,status:r.status,message:Jt}}if(!i.trim())return{ok:!1,status:r.status,message:s};try{return{ok:!0,data:JSON.parse(i)}}catch{return{ok:!1,status:r.status,message:s}}}function jr(){return se("/api/status",F)}function qr(){return se("/healthcheck/healty",F)}function Ii(){return se("/healthcheck/ready",F)}function Oi(){return Lr("/api/reboot",{method:"POST"})}function Li(){return se("/api/settings",F)}function re(t,e,s,r=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!r&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>s)throw new Error(`${e} must be at most ${s} characters.`);return t}function ji(t){const e=re(t.host,"MQTT host",g.mqtt.hostMax);if(typeof t.port!="number"||!Number.isInteger(t.port)||t.port<1||t.port>65535)throw new Error("MQTT port must be an integer between 1 and 65535.");const s=re(t.login,"MQTT login",g.mqtt.loginMax,!0),r=re(t.password,"MQTT password",g.mqtt.passwordMax,!0),i=re(t.haDiscoveryPrefix,"HA discovery prefix",g.mqtt.haDiscoveryPrefixMax);if(typeof t.mqttIsHADiscovery!="boolean")throw new Error("HA discovery flag must be true or false.");const n=re(t.stateTopic,"State topic",g.mqtt.topicMax),a=re(t.commandTopic,"Command topic",g.mqtt.topicMax),d=re(t.statusTopic,"Status topic",g.mqtt.topicMax),l=new URLSearchParams;return l.set("host",e),l.set("port",String(t.port)),l.set("login",s),l.set("password",r),l.set("haDiscoveryPrefix",i),l.set("mqttIsHADiscovery",t.mqttIsHADiscovery?"true":"false"),l.set("stateTopic",n),l.set("commandTopic",a),l.set("statusTopic",d),Di("/api/settings/mqtt",l)}function qi(){return se("/api/settings/modbus",F)}function zi(t){if(!g.modbus.speeds.includes(t.modbusSpeed))throw new Error(`Modbus speed must be one of ${g.modbus.speeds.join(", ")}.`);if(!Number.isInteger(t.map12eAddress)||t.map12eAddress<g.modbus.addressMin||t.map12eAddress>g.modbus.addressMax)throw new Error(`MAP12E address must be an integer between ${g.modbus.addressMin} and ${g.modbus.addressMax}.`);if(!Number.isInteger(t.anenjiAddress)||t.anenjiAddress<g.modbus.anenjiAddressMin||t.anenjiAddress>g.modbus.anenjiAddressMax)throw new Error(`Anenji address must be an integer between ${g.modbus.anenjiAddressMin} and ${g.modbus.anenjiAddressMax}.`);return Zt("/api/settings/modbus",{modbusSpeed:t.modbusSpeed,map12eAddress:t.map12eAddress,anenjiAddress:t.anenjiAddress},F)}function Ms(){return se("/api/settings/anenji",F)}function Ts(){return se("/api/settings/meter",F)}function Us(t){const e={};if(t.ct1Ratio!==void 0){if(!Number.isInteger(t.ct1Ratio)||t.ct1Ratio<g.meter.ctRatioMin||t.ct1Ratio>g.meter.ctRatioMax)throw new Error(`CT ratio must be an integer between ${g.meter.ctRatioMin} and ${g.meter.ctRatioMax}.`);e.ct1Ratio=t.ct1Ratio}if(t.energySyncValue!==void 0){if(!Number.isFinite(t.energySyncValue)||t.energySyncValue<g.meter.syncMin)throw new Error("Energy sync value must be a number greater than or equal to 0.");e.energySyncValue=t.energySyncValue}if(e.ct1Ratio===void 0&&e.energySyncValue===void 0)throw new Error("ct1Ratio or energySyncValue required.");return Zt("/api/settings/meter",e,F)}function Ns(){return se("/api/controls",F)}function Wi(t){const e={};if(t.ventilation!==void 0){if(typeof t.ventilation!="boolean")throw new Error("Ventilation must be true or false.");e.ventilation=t.ventilation}if(t.light!==void 0){if(typeof t.light!="boolean")throw new Error("Light must be true or false.");e.light=t.light}if(t.generator!==void 0){if(typeof t.generator!="boolean")throw new Error("Generator must be true or false.");e.generator=t.generator}if(e.ventilation===void 0&&e.light===void 0&&e.generator===void 0)throw new Error("ventilation or light or generator required.");return Zt("/api/controls",e,F)}function Fi({tabs:t,active:e,onSelect:s}){return o("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(r=>o("button",{type:"button",role:"tab",id:`tab-${r.id}`,"aria-selected":r.id===e,"aria-controls":`panel-${r.id}`,class:r.id===e?"active":void 0,onClick:()=>s(r.id),children:r.label},r.id))})}function P({kind:t="info",message:e,onClose:s}){return o("div",{class:`banner banner-${t}`,role:"status",children:[o("span",{children:e}),s?o("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:s,children:"×"}):null]})}function Bi(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function I({children:t,variant:e="default",type:s="button",disabled:r,title:i,onClick:n}){return o("button",{type:s,class:Bi(e),disabled:r,title:i,onClick:n,children:t})}function Vi(t){return o(I,{...t,variant:"danger"})}function D({title:t,children:e,class:s}){return o("section",{class:s?`card ${s}`:"card",children:[t?o("h2",{children:t}):null,e]})}const kt=2e3,Ji=12e4;function Ki(){const[t,e]=b("idle"),s=gt(0);W(()=>{if(t!=="rebooting")return;let a=!1,d;const l=()=>{qr().then(h=>{if(!a){if(h.ok){e("ready");return}if(s.current+=1,s.current*kt>=Ji){e("timeout");return}d=window.setTimeout(l,kt)}})};return d=window.setTimeout(l,kt),()=>{a=!0,d!==void 0&&window.clearTimeout(d)}},[t]);const r=N(()=>{s.current=0,e("rebooting")},[]),i=N(()=>e("idle"),[]),n=N(()=>{s.current=0,e("rebooting")},[]);return Vt(()=>({phase:t,start:r,dismiss:i,retry:n}),[t,r,i,n])}function Qi({flow:t}){return t.phase==="idle"?null:o("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:o("div",{class:"reboot-dialog card",children:[o("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?o(q,{children:[o("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),o("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?o(q,{children:[o(P,{kind:"success",message:"The device is back online."}),o("div",{class:"form-actions",children:o(I,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?o(q,{children:[o(P,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),o("div",{class:"form-actions",children:[o(I,{onClick:t.retry,children:"Keep waiting"}),o(I,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const Zi=1e4;function Gi(t){const e=Math.max(0,Math.floor(t)),s=Math.floor(e/86400),r=Math.floor(e%86400/3600),i=Math.floor(e%3600/60),n=e%60,a=[];return s&&a.push(`${s}d`),(s||r)&&a.push(`${r}h`),(s||r||i)&&a.push(`${i}m`),a.push(`${n}s`),a.join(" ")}function Yi(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function Xi(){const[t,e]=b(null),[s,r]=b(null),[i,n]=b(!1),[a,d]=b(null),[l,h]=b(null),[u,p]=b(!0),[c,f]=b(null),[$,A]=b(!1),_=Ki(),m=N(async()=>{const C=await jr();C.ok?(e(C.data),r(null)):r(C.message),n(!0)},[]),v=N(async()=>{p(!0);const[C,j]=await Promise.all([qr(),Ii()]);d(C),h(j),p(!1)},[]);W(()=>{m();const C=window.setInterval(()=>{m()},Zi);return()=>window.clearInterval(C)},[m]),W(()=>{v()},[v]);const y=N(async()=>{if(!window.confirm("Reboot the device now? It will be offline for about 20-60 seconds."))return;f(null),A(!0);const j=await Oi();A(!1),j.ok?_.start():f(j.message)},[_.start]),R=u&&!a?o("p",{class:"muted",children:"Checking device health…"}):a?a.ok?o(P,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):o(P,{kind:"error",message:a.message}):null,E=l?l.ok?o(P,{kind:l.data.ready?"success":"info",message:l.data.ready?"All registered services are ready.":`Not ready: ${l.data.message}`}):l.status===500?o(P,{kind:"info",message:`Not ready: ${l.message}`}):o(P,{kind:"error",message:l.message}):null;return o("div",{class:"stack",children:[o(D,{title:"Device",children:[i?s?o(q,{children:[o(P,{kind:"error",message:s}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{m()},children:"Retry"})})]}):t?o("dl",{class:"kv",children:[o("dt",{children:"Firmware"}),o("dd",{children:t.fwVersion??"—"}),o("dt",{children:"Free heap"}),o("dd",{children:Yi(t.freeHeap)}),o("dt",{children:"Uptime"}),o("dd",{children:Gi(t.uptime)}),o("dt",{children:"Last reset reason"}),o("dd",{children:t.lastResetReason})]}):null:o("p",{class:"muted",children:"Loading status…"}),o("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),o(D,{title:"Health",children:[R,E,o("div",{class:"form-actions",children:o(I,{onClick:()=>{v()},disabled:u,children:u?"Checking…":"Refresh health"})})]}),o(D,{title:"Maintenance",children:[o("p",{class:"muted",children:"A reboot briefly interrupts the device. Configuration changes saved on the other tabs only take effect after a reboot."}),c?o(P,{kind:"error",message:c,onClose:()=>f(null)}):null,o("div",{class:"form-actions",children:o(Vi,{onClick:()=>{y()},disabled:$||_.phase!=="idle",children:"Reboot device"})})]}),o(Qi,{flow:_})]})}function en({label:t,hint:e,checked:s,disabled:r,pending:i,unknown:n,onChange:a}){return o("div",{class:`toggle${n?" toggle-unknown":""}${i?" toggle-pending":""}`,children:o("button",{type:"button",role:"switch","aria-checked":s,class:"toggle-control",disabled:r||i,title:n?"State unknown":void 0,onClick:()=>a(!s),children:[o("span",{class:"toggle-track","aria-hidden":"true",children:o("span",{class:"toggle-knob"})}),o("span",{class:"toggle-text",children:[o("span",{class:"toggle-label",children:t}),e?o("span",{class:"toggle-hint",children:e}):null]})]})})}const tn={ventilation:{value:!1,unknown:!0},light:{value:!1,unknown:!0},generator:{value:!1,unknown:!0}},sn=[{key:"ventilation",label:"Ventilation"},{key:"light",label:"Light"},{key:"generator",label:"Generator"}];function Ke(t,e){return typeof e.enabled=="boolean"?{value:e.enabled,unknown:!1}:t}function rn(){const[t,e]=b(!1),[s,r]=b(null),[i,n]=b(tn),[a,d]=b({ventilation:!1,light:!1,generator:!1}),[l,h]=b(null),[u,p]=b(!1),c=N(_=>{n(m=>({ventilation:Ke(m.ventilation,_.ventilation),light:Ke(m.light,_.light),generator:Ke(m.generator,_.generator)}))},[]),f=N(async()=>{r(null);const _=await Ns();_.ok?c(_.data):r(_.message),e(!0)},[c]);W(()=>{f()},[f]);const $=N(async()=>{p(!0),r(null);const _=await Ns();_.ok?c(_.data):r(_.message),p(!1)},[c]),A=N(async(_,m)=>{if(a[_])return;const v=i[_];h(null),n(y=>({...y,[_]:{value:m,unknown:!1}})),d(y=>({...y,[_]:!0}));try{const y=await Wi({[_]:m});y.ok?n(R=>({...R,[_]:Ke(R[_],y.data[_])})):(n(R=>({...R,[_]:v})),h(y.message))}catch(y){n(R=>({...R,[_]:v})),h(y instanceof Error?y.message:String(y))}finally{d(y=>({...y,[_]:!1}))}},[a,i]);return t?o("div",{class:"stack",children:[s?o(q,{children:[o(P,{kind:"error",message:s}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{f()},children:"Retry"})})]}):null,o(D,{title:"Controls",children:[l?o(P,{kind:"error",message:l,onClose:()=>h(null)}):null,sn.map(({key:_,label:m})=>o(en,{label:m,checked:i[_].value,unknown:i[_].unknown,pending:a[_],onChange:v=>{A(_,v)}},_)),o("div",{class:"form-actions",children:o(I,{onClick:()=>{$()},disabled:u,children:u?"Refreshing…":"Refresh"})})]})]}):o(D,{title:"Controls",children:o("p",{class:"muted",children:"Loading controls…"})})}function nn(){const t=gt(null);return W(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),o("div",{ref:t})}const an={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:"",statusTopic:""};function on(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>g.mqtt.hostMax&&(e.host=`At most ${g.mqtt.hostMax} characters.`);const s=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(s)||s<1||s>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>g.mqtt.loginMax&&(e.login=`At most ${g.mqtt.loginMax} characters.`),t.password.length>g.mqtt.passwordMax&&(e.password=`At most ${g.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>g.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${g.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>g.mqtt.topicMax&&(e.stateTopic=`At most ${g.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>g.mqtt.topicMax&&(e.commandTopic=`At most ${g.mqtt.topicMax} characters.`),t.statusTopic.trim().length===0?e.statusTopic="Status topic is required.":t.statusTopic.length>g.mqtt.topicMax&&(e.statusTopic=`At most ${g.mqtt.topicMax} characters.`),e}function ln(t){return Object.keys(t).length>0}function G({label:t,value:e,onInput:s,type:r="text",min:i,max:n,maxLength:a,autoComplete:d,error:l,help:h}){return o("label",{class:"field",children:[o("span",{class:"field-label",children:t}),o("input",{type:r,value:e,min:i,max:n,maxLength:a,autoComplete:d,"aria-invalid":l?!0:void 0,onInput:u=>s(u.currentTarget.value)}),h&&!l?o("span",{class:"field-help",children:h}):null,l?o("span",{class:"field-error",children:l}):null]})}function dn({label:t,value:e,onInput:s,maxLength:r,error:i}){const[n,a]=b(!1);return o("div",{class:"password-field",children:[o(G,{label:t,value:e,onInput:s,type:n?"text":"password",maxLength:r,autoComplete:"new-password",error:i}),o("button",{type:"button",class:"btn reveal-toggle","aria-pressed":n,onClick:()=>a(d=>!d),children:n?"Hide":"Show"})]})}function cn({label:t,checked:e,onChange:s}){return o("div",{class:"checkbox-field",children:o("label",{class:"checkbox-label",children:[o("input",{type:"checkbox",checked:e,onChange:r=>s(r.currentTarget.checked)}),o("span",{children:t})]})})}function hn(){const[t,e]=b(!1),[s,r]=b(null),[i,n]=b(an),[a,d]=b({}),[l,h]=b(!1),[u,p]=b(null),[c,f]=b(null),$=N(async()=>{r(null);const m=await Li();m.ok?n({host:m.data.mqttHost,port:String(m.data.mqttPort),login:m.data.mqttLogin,password:m.data.mqttPassword,haDiscoveryPrefix:m.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:m.data.mqttIsHADiscovery,stateTopic:m.data.mqttStateTopic,commandTopic:m.data.mqttCommandTopic,statusTopic:m.data.mqttStatusTopic}):r(m.message),e(!0)},[]);W(()=>{$()},[$]);const A=m=>n(v=>({...v,...m})),_=N(async m=>{m.preventDefault();const v=on(i);if(d(v),p(null),f(null),!ln(v)){h(!0);try{const y=await ji({host:i.host,port:Number(i.port),login:i.login,password:i.password,haDiscoveryPrefix:i.haDiscoveryPrefix,mqttIsHADiscovery:i.mqttIsHADiscovery,stateTopic:i.stateTopic,commandTopic:i.commandTopic,statusTopic:i.statusTopic});y.ok?p("MQTT settings saved to flash."):f(y.message)}catch(y){f(y instanceof Error?y.message:String(y))}h(!1)}},[i]);return t?o("div",{class:"stack",children:[o(P,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."}),s?o(q,{children:[o(P,{kind:"error",message:s}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{$()},children:"Retry"})})]}):null,o(D,{title:"MQTT",children:o("form",{onSubmit:_,children:[o(G,{label:"Host",value:i.host,onInput:m=>A({host:m}),maxLength:g.mqtt.hostMax,autoComplete:"off",error:a.host}),o(G,{label:"Port",value:i.port,onInput:m=>A({port:m}),type:"number",min:1,max:65535,error:a.port}),o(G,{label:"Login",value:i.login,onInput:m=>A({login:m}),maxLength:g.mqtt.loginMax,autoComplete:"off",error:a.login}),o(dn,{label:"Password",value:i.password,onInput:m=>A({password:m}),maxLength:g.mqtt.passwordMax,error:a.password}),o(G,{label:"HA discovery prefix",value:i.haDiscoveryPrefix,onInput:m=>A({haDiscoveryPrefix:m}),maxLength:g.mqtt.haDiscoveryPrefixMax,autoComplete:"off",error:a.haDiscoveryPrefix}),o(cn,{label:"Enable Home Assistant discovery",checked:i.mqttIsHADiscovery,onChange:m=>A({mqttIsHADiscovery:m})}),o(G,{label:"State topic",value:i.stateTopic,onInput:m=>A({stateTopic:m}),maxLength:g.mqtt.topicMax,autoComplete:"off",error:a.stateTopic,help:"Must not be empty: the device crashes on a missing state topic."}),o(G,{label:"Command topic",value:i.commandTopic,onInput:m=>A({commandTopic:m}),maxLength:g.mqtt.topicMax,autoComplete:"off",error:a.commandTopic,help:"Must not be empty: the device crashes on a missing command topic."}),o(G,{label:"Топик статуса электричества",value:i.statusTopic,onInput:m=>A({statusTopic:m}),maxLength:g.mqtt.topicMax,autoComplete:"off",error:a.statusTopic,help:"По умолчанию: faraday/<chipID>/status."}),u?o(P,{kind:"success",message:u,onClose:()=>p(null)}):null,c?o(P,{kind:"error",message:c,onClose:()=>f(null)}):null,o("div",{class:"form-actions",children:o(I,{type:"submit",variant:"primary",disabled:l,children:l?"Saving…":"Save MQTT"})})]})})]}):o(D,{title:"MQTT",children:o("p",{class:"muted",children:"Loading MQTT settings…"})})}const un={modbusSpeed:String(g.modbus.speeds[0]),map12eAddress:"",anenjiAddress:""};function pn(t){const e={};if(t.map12eAddress.trim()==="")e.map12eAddress="Address is required.";else{const s=Number(t.map12eAddress);(!Number.isInteger(s)||s<g.modbus.addressMin||s>g.modbus.addressMax)&&(e.map12eAddress=`Address must be an integer between ${g.modbus.addressMin} and ${g.modbus.addressMax}.`)}if(t.anenjiAddress.trim()==="")e.anenjiAddress="Address is required.";else{const s=Number(t.anenjiAddress);(!Number.isInteger(s)||s<g.modbus.anenjiAddressMin||s>g.modbus.anenjiAddressMax)&&(e.anenjiAddress=`Address must be an integer between ${g.modbus.anenjiAddressMin} and ${g.modbus.anenjiAddressMax}.`)}return e}function fn(t){return Object.keys(t).length>0}function Rs({label:t,value:e,onInput:s,type:r="text",min:i,max:n,error:a,help:d}){return o("label",{class:"field",children:[o("span",{class:"field-label",children:t}),o("input",{type:r,value:e,min:i,max:n,"aria-invalid":a?!0:void 0,onInput:l=>s(l.currentTarget.value)}),d&&!a?o("span",{class:"field-help",children:d}):null,a?o("span",{class:"field-error",children:a}):null]})}function mn({label:t,value:e,options:s,onChange:r}){return o("label",{class:"field",children:[o("span",{class:"field-label",children:t}),o("select",{value:e,onChange:i=>r(i.currentTarget.value),children:s.map(i=>o("option",{value:String(i),children:[i," baud"]},i))})]})}function gn(){const[t,e]=b(!1),[s,r]=b(null),[i,n]=b(un),[a,d]=b({}),[l,h]=b(null),[u,p]=b(null),[c,f]=b(!1),[$,A]=b(null),[_,m]=b(null),v=N(async()=>{r(null);const E=await qi();E.ok?(n({modbusSpeed:String(E.data.modbusSpeed),map12eAddress:String(E.data.map12eAddress),anenjiAddress:String(E.data.anenjiAddress)}),h(E.data.map12eAddress),p(E.data.anenjiAddress)):r(E.message),e(!0)},[]);W(()=>{v()},[v]);const y=E=>n(C=>({...C,...E})),R=N(async E=>{E.preventDefault();const C=pn(i);if(d(C),A(null),m(null),fn(C))return;const j=Number(i.map12eAddress),B=Number(i.anenjiAddress);f(!0);try{const T=await zi({modbusSpeed:Number(i.modbusSpeed),map12eAddress:j,anenjiAddress:B});if(T.ok){n({modbusSpeed:String(T.data.modbusSpeed),map12eAddress:String(T.data.map12eAddress),anenjiAddress:String(T.data.anenjiAddress)});const L=j!==l||B!==u;h(T.data.map12eAddress),p(T.data.anenjiAddress),A(L?"Modbus settings saved. The new speed is applied now; the address takes effect only after a reboot.":"Modbus settings saved. The new speed is applied now.")}else m(T.message)}catch(T){m(T instanceof Error?T.message:String(T))}f(!1)},[i,l,u]);return t?o("div",{class:"stack",children:[s?o(q,{children:[o(P,{kind:"error",message:s}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{v()},children:"Retry"})})]}):null,o(D,{title:"Modbus",children:o("form",{onSubmit:R,children:[o(mn,{label:"RS-485 speed",value:i.modbusSpeed,options:g.modbus.speeds,onChange:E=>y({modbusSpeed:E})}),o(Rs,{label:"WB-MAP12E address",value:i.map12eAddress,onInput:E=>y({map12eAddress:E}),type:"number",min:g.modbus.addressMin,max:g.modbus.addressMax,error:a.map12eAddress,help:`Modbus unit id ${g.modbus.addressMin}-${g.modbus.addressMax}.`}),o(Rs,{label:"ANENJI 4200 address",value:i.anenjiAddress,onInput:E=>y({anenjiAddress:E}),type:"number",min:g.modbus.anenjiAddressMin,max:g.modbus.anenjiAddressMax,error:a.anenjiAddress,help:`0 disables the inverter; applies after reboot. Valid ${g.modbus.anenjiAddressMin}-${g.modbus.anenjiAddressMax}.`}),$?o(P,{kind:"success",message:$,onClose:()=>A(null)}):null,_?o(P,{kind:"error",message:_,onClose:()=>m(null)}):null,o("div",{class:"form-actions",children:o(I,{type:"submit",variant:"primary",disabled:c,children:c?"Saving…":"Save Modbus"})})]})})]}):o(D,{title:"Modbus",children:o("p",{class:"muted",children:"Loading Modbus settings…"})})}const _n="—";function Hs(t){return t===null||!Number.isFinite(t)?_n:`${t.toFixed(2)} kWh`}function Ds(t){return Object.keys(t).length>0}function Is({label:t,value:e,onInput:s,type:r="text",min:i,max:n,step:a,error:d,help:l}){return o("label",{class:"field",children:[o("span",{class:"field-label",children:t}),o("input",{type:r,value:e,min:i,max:n,step:a,"aria-invalid":d?!0:void 0,onInput:h=>s(h.currentTarget.value)}),l&&!d?o("span",{class:"field-help",children:l}):null,d?o("span",{class:"field-error",children:d}):null]})}function bn(){const[t,e]=b(!1),[s,r]=b(null),[i,n]=b(null),[a,d]=b(""),[l,h]=b({}),[u,p]=b(!1),[c,f]=b(null),[$,A]=b(null),[_,m]=b(""),[v,y]=b({}),[R,E]=b(!1),[C,j]=b(null),[B,T]=b(null),[L,V]=b(!1),At=N(async()=>{r(null);const z=await Ts();z.ok?(n(z.data),d(String(z.data.energySyncValue)),m(String(z.data.ct1Ratio))):r(z.message),e(!0)},[]);W(()=>{At()},[At]);const $i=N(async()=>{V(!0);const z=await Ts();z.ok?(n(z.data),r(null)):r(z.message),V(!1)},[]),vi=N(async z=>{z.preventDefault(),f(null),A(null);const J={},Z=Number(a);if(a.trim()===""?J.sync="Supplier reading is required.":(!Number.isFinite(Z)||Z<g.meter.syncMin)&&(J.sync="Must be a number greater than or equal to 0."),h(J),!Ds(J)){p(!0);try{const O=await Us({energySyncValue:Z});O.ok?(n(O.data),d(String(O.data.energySyncValue)),f("Sync saved. Future readings continue from the entered value; the meter counter itself is not reset.")):A(O.message)}catch(O){A(O instanceof Error?O.message:String(O))}p(!1)}},[a]),yi=N(async z=>{z.preventDefault(),j(null),T(null);const J={},Z=Number(_);if(_.trim()===""?J.ratio="CT ratio is required.":(!Number.isInteger(Z)||Z<g.meter.ctRatioMin||Z>g.meter.ctRatioMax)&&(J.ratio=`Must be an integer between ${g.meter.ctRatioMin} and ${g.meter.ctRatioMax}.`),y(J),!Ds(J)){E(!0);try{const O=await Us({ct1Ratio:Z});O.ok?(n(O.data),m(String(O.data.ct1Ratio)),j("CT ratio written to the meter and applied immediately. Re-sync the supplier energy afterwards.")):T(O.message)}catch(O){T(O instanceof Error?O.message:String(O))}E(!1)}},[_]);return t?o("div",{class:"stack",children:[s?o(q,{children:[o(P,{kind:"error",message:s}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{At()},children:"Retry"})})]}):null,o(D,{title:"Supplier energy sync",children:[o("dl",{class:"kv",children:[o("dt",{children:"Meter energy"}),o("dd",{children:Hs(i?.meterEnergy??null)}),o("dt",{children:"Supplier energy"}),o("dd",{children:Hs(i?.supplierEnergy??null)})]}),o("p",{class:"muted mt",children:"Meter counters are read-only and cannot be reset by the firmware. A sync stores the entered supplier kWh reading together with the device counter at that moment, so Home Assistant reports the entered value plus consumption since the sync."}),o("form",{onSubmit:vi,class:"mt",children:[o(Is,{label:"Supplier reading, kWh",value:a,onInput:d,type:"number",min:g.meter.syncMin,step:"0.01",error:l.sync}),c?o(P,{kind:"success",message:c,onClose:()=>f(null)}):null,$?o(P,{kind:"error",message:$,onClose:()=>A(null)}):null,o("div",{class:"form-actions",children:[o(I,{type:"submit",variant:"primary",disabled:u,children:u?"Syncing…":"Sync"}),o(I,{onClick:()=>{$i()},disabled:L,children:L?"Refreshing…":"Refresh"})]})]})]}),o(D,{title:"Current transformer",children:o("form",{onSubmit:yi,children:[o(Is,{label:"CT1 ratio",value:_,onInput:m,type:"number",min:g.meter.ctRatioMin,max:g.meter.ctRatioMax,error:v.ratio,help:"Integer 0-65535. 0 disables the ratio (direct measurement)."}),o("p",{class:"muted",children:"The ratio is written to the meter immediately and applied by the meter itself to current, power and energy. Re-sync the supplier energy after changing it."}),C?o(P,{kind:"success",message:C,onClose:()=>j(null)}):null,B?o(P,{kind:"error",message:B,onClose:()=>T(null)}):null,o("div",{class:"form-actions",children:o(I,{type:"submit",variant:"primary",disabled:R,children:R?"Saving…":"Save ratio"})})]})})]}):o(D,{title:"Meter",children:o("p",{class:"muted",children:"Loading meter settings…"})})}const Gt="—";function Yt(t,e){return t===null||!Number.isFinite(t)?Gt:t.toFixed(e)}function Qe(t){return Yt(t,1)}function Ze(t){return Yt(t,1)}function Ge(t){return Yt(t,0)}function $n(t){return t===null?Gt:t?"Charging":"Not charging"}function Ye(t){return t??Gt}function vn(){const[t,e]=b(!1),[s,r]=b(null),[i,n]=b(null),[a,d]=b(!1),l=N(async()=>{r(null);const u=await Ms();u.ok?n(u.data):r(u.message),e(!0)},[]);W(()=>{l()},[l]);const h=N(async()=>{d(!0);const u=await Ms();u.ok?(n(u.data),r(null)):r(u.message),d(!1)},[]);return t?o("div",{class:"stack",children:[s?o(q,{children:[o(P,{kind:"error",message:s}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{l()},children:"Retry"})})]}):null,i&&!i.enabled?o(P,{kind:"info",message:"The inverter is disabled. Set a non-zero ANENJI 4200 address on the Modbus tab and reboot to enable it."}):null,o(D,{title:"Mains",children:o("dl",{class:"kv",children:[o("dt",{children:"Voltage"}),o("dd",{children:[Qe(i?.mainsVoltage??null)," V"]}),o("dt",{children:"Current"}),o("dd",{children:[Ze(i?.mainsCurrent??null)," A"]}),o("dt",{children:"Power"}),o("dd",{children:[Ge(i?.mainsPower??null)," W"]})]})}),o(D,{title:"Output",children:o("dl",{class:"kv",children:[o("dt",{children:"Voltage"}),o("dd",{children:[Qe(i?.outputVoltage??null)," V"]}),o("dt",{children:"Current"}),o("dd",{children:[Ze(i?.outputCurrent??null)," A"]}),o("dt",{children:"Power"}),o("dd",{children:[Ge(i?.outputPower??null)," W"]})]})}),o(D,{title:"Battery",children:o("dl",{class:"kv",children:[o("dt",{children:"Voltage"}),o("dd",{children:[Qe(i?.batteryVoltage??null)," V"]}),o("dt",{children:"Current"}),o("dd",{children:[Ze(i?.batteryCurrent??null)," A"]}),o("dt",{children:"Power"}),o("dd",{children:[Ge(i?.batteryPower??null)," W"]}),o("dt",{children:"Charging"}),o("dd",{children:$n(i?.batteryCharging??null)})]})}),o(D,{title:"Solar",children:o("dl",{class:"kv",children:[o("dt",{children:"Voltage"}),o("dd",{children:[Qe(i?.pvVoltage??null)," V"]}),o("dt",{children:"Current"}),o("dd",{children:[Ze(i?.pvCurrent??null)," A"]}),o("dt",{children:"Power"}),o("dd",{children:[Ge(i?.pvPower??null)," W"]})]})}),o(D,{title:"Modes",children:o("dl",{class:"kv",children:[o("dt",{children:"Work mode"}),o("dd",{children:Ye(i?.workMode??null)}),o("dt",{children:"Output mode"}),o("dd",{children:Ye(i?.outputMode??null)}),o("dt",{children:"Output priority"}),o("dd",{children:Ye(i?.outputPriority??null)}),o("dt",{children:"Charge priority"}),o("dd",{children:Ye(i?.chargePriority??null)})]})}),o("div",{class:"form-actions",children:o(I,{onClick:()=>{h()},disabled:a,children:a?"Refreshing…":"Refresh"})})]}):o(D,{title:"Anenji",children:o("p",{class:"muted",children:"Loading inverter readings…"})})}const yn="Download a zip of everything the device has stored: config.bin. It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e faraday -t uploadfs) ERASE LittleFS, so /config.bin is gone.",wn="Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.",An="Uploading this archive REPLACES config.bin on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",Sn="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function En(){const t=gt(null);return W(()=>{const e=document.createElement("edc-config-backup-page");return e.setAttribute("device-name","Faraday"),e.setAttribute("archive-file-name","faraday-config.zip"),e.setAttribute("zip-notes",yn),e.setAttribute("bin-notes",wn),e.setAttribute("zip-confirm-text",An),e.setAttribute("bin-confirm-text",Sn),t.current?.append(e),()=>e.remove()},[]),o("div",{ref:t})}function kn(){const t=gt(null);return W(()=>{const e=document.createElement("edu-log-settings-page");return e.setAttribute("device-name","Faraday"),t.current?.append(e),()=>e.remove()},[]),o("div",{ref:t})}const xn=[{id:"status",label:"Status"},{id:"controls",label:"Controls"},{id:"network",label:"Network"},{id:"mqtt",label:"MQTT"},{id:"modbus",label:"Modbus"},{id:"meter",label:"Meter"},{id:"anenji",label:"Anenji"},{id:"config",label:"Config"},{id:"logger",label:"Log"}];function Pn(t){switch(t){case"status":return o(Xi,{});case"controls":return o(rn,{});case"network":return o(nn,{});case"mqtt":return o(hn,{});case"modbus":return o(gn,{});case"meter":return o(bn,{});case"anenji":return o(vn,{});case"config":return o(En,{});case"logger":return o(kn,{})}}function Cn(){const[t,e]=b("status"),[s,r]=b(null);return W(()=>{let i=!0;return jr().then(n=>{i&&n.ok&&n.data.fwVersion&&r(n.data.fwVersion)}),()=>{i=!1}},[]),o(q,{children:[o("header",{class:"app-header",children:o("div",{class:"brand",children:[o("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:o("path",{fill:"currentColor",d:"M13 2 4.5 13.2h5.2L8 22l9-12.1h-5.4z"})}),o("h1",{children:"Faraday"})]})}),o(Fi,{tabs:xn,active:t,onSelect:e}),o("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:Pn(t)}),o("footer",{class:"app-footer",children:o("div",{class:"versions",children:[o("span",{class:"hint",children:"offline device panel"}),o("span",{class:"hint version",children:["FW ",s??"—"]}),o("span",{class:"hint version",children:["UI ","b4a5de9-dirty"]})]})})]})}function Mn(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function zr(t={}){let e=t.baseUrl??"",s=t.headers??{};async function r(i,n){let a;try{a=await fetch(`${e}${i}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...s}})}catch(u){return n?.signal?.aborted===!0||typeof u=="object"&&u&&u.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let d=await a.text().catch(()=>""),l,h=!1;if(d.length>0)try{l=JSON.parse(d),h=!0}catch{h=!1}if(!a.ok){let u=Mn(l);return{ok:!1,status:a.status,message:u??`Request failed with HTTP ${a.status}.`}}return h?{ok:!0,data:l}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(i){return r("/api/network/settings",{signal:i})},saveSettings(i,n){return r("/api/network/settings",{method:"POST",body:JSON.stringify(i),signal:n})},getStatus(i){return r("/api/network/status",{signal:i})},wifiList(i){return r("/api/wifi/list",{signal:i})}}}var nt=globalThis,Xt=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,es=Symbol(),Os=new WeakMap,Wr=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==es)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(Xt&&e===void 0){let r=s!==void 0&&s.length===1;r&&(e=Os.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Os.set(s,e))}return e}toString(){return this.cssText}},Tn=t=>new Wr(typeof t=="string"?t:t+"",void 0,es),ts=(t,...e)=>new Wr(t.length===1?t[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,es),Un=(t,e)=>{if(Xt)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=nt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},Ls=Xt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return Tn(s)})(t):t,{is:Nn,defineProperty:Rn,getOwnPropertyDescriptor:Hn,getOwnPropertyNames:Dn,getOwnPropertySymbols:In,getPrototypeOf:On}=Object,_t=globalThis,js=_t.trustedTypes,Ln=js?js.emptyScript:"",jn=_t.reactiveElementPolyfillSupport,Re=(t,e)=>t,Ht={toAttribute(t,e){switch(e){case Boolean:t=t?Ln:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Fr=(t,e)=>!Nn(t,e),qs={attribute:!0,type:String,converter:Ht,reflect:!1,useDefault:!1,hasChanged:Fr};Symbol.metadata??=Symbol("metadata"),_t.litPropertyMetadata??=new WeakMap;var ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=qs){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,s);i!==void 0&&Rn(this.prototype,e,i)}}static getPropertyDescriptor(e,s,r){let{get:i,set:n}=Hn(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){let d=i?.call(this);n?.call(this,a),this.requestUpdate(e,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??qs}static _$Ei(){if(this.hasOwnProperty(Re("elementProperties")))return;let e=On(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Re("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Re("properties"))){let s=this.properties,r=[...Dn(s),...In(s)];for(let i of r)this.createProperty(i,s[i])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)s.unshift(Ls(i))}else e!==void 0&&s.push(Ls(e));return s}static _$Eu(e,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Un(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$ET(e,s){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute===void 0?Ht:r.converter).toAttribute(s,r.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,s){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Ht:n.converter;this._$Em=i;let d=a.fromAttribute(s,n.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(e,s,r,i=!1,n){if(e!==void 0){let a=this.constructor;if(i===!1&&(n=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??Fr)(n,s)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??s??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(s=void 0),this._$AL.set(e,s)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:a}=n,d=this[i];a!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,n,d)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};ve.elementStyles=[],ve.shadowRootOptions={mode:"open"},ve[Re("elementProperties")]=new Map,ve[Re("finalized")]=new Map,jn?.({ReactiveElement:ve}),(_t.reactiveElementVersions??=[]).push("2.1.2");var ss=globalThis,zs=t=>t,ht=ss.trustedTypes,Ws=ht?ht.createPolicy("lit-html",{createHTML:t=>t}):void 0,Br="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,Vr="?"+X,qn=`<${Vr}>`,_e=document,qe=()=>_e.createComment(""),ze=t=>t===null||typeof t!="object"&&typeof t!="function",rs=Array.isArray,zn=t=>rs(t)||typeof t?.[Symbol.iterator]=="function",xt=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Fs=/-->/g,Bs=/>/g,ie=RegExp(`>|${xt}(?:([^\\s"'>=/]+)(${xt}*=${xt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vs=/'/g,Js=/"/g,Jr=/^(?:script|style|textarea|title)$/i,w=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),Ae=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Ks=new WeakMap,oe=_e.createTreeWalker(_e,129);function Kr(t,e){if(!rs(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ws===void 0?e:Ws.createHTML(e)}var Wn=(t,e)=>{let s=t.length-1,r=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Ce;for(let d=0;d<s;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(a.lastIndex=c,u=a.exec(l),u!==null);)c=a.lastIndex,a===Ce?u[1]==="!--"?a=Fs:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=ie):(Jr.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=ie):a=Bs:a===ie?u[0]===">"?(a=i??Ce,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?ie:u[3]==='"'?Js:Vs):a===Js||a===Vs?a=ie:a===Fs||a===Bs?a=Ce:(a=ie,i=void 0);let f=a===ie&&t[d+1].startsWith("/>")?" ":"";n+=a===Ce?l+qn:p>=0?(r.push(h),l.slice(0,p)+Br+l.slice(p)+X+f):l+X+(p===-2?d:f)}return[Kr(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Dt=class Qr{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,d=e.length-1,l=this.parts,[h,u]=Wn(e,s);if(this.el=Qr.createElement(h,r),oe.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=oe.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Br)){let c=u[a++],f=i.getAttribute(p).split(X),$=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:$[2],strings:f,ctor:$[1]==="."?Bn:$[1]==="?"?Vn:$[1]==="@"?Jn:bt}),i.removeAttribute(p)}else p.startsWith(X)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(Jr.test(i.tagName)){let p=i.textContent.split(X),c=p.length-1;if(c>0){i.textContent=ht?ht.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],qe()),oe.nextNode(),l.push({type:2,index:++n});i.append(p[c],qe())}}}else if(i.nodeType===8)if(i.data===Vr)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(X,p+1))!==-1;)l.push({type:7,index:n}),p+=X.length-1}n++}}static createElement(e,s){let r=_e.createElement("template");return r.innerHTML=e,r}};function Se(t,e,s=t,r){if(e===Ae)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],n=ze(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=Se(t,i._$AS(t,e.values),i,r)),e}var Fn=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:r}=this._$AD,i=(e?.creationScope??_e).importNode(s,!0);oe.currentNode=i;let n=oe.nextNode(),a=0,d=0,l=r[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new is(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Kn(n,this,e)),this._$AV.push(h),l=r[++d]}a!==l?.index&&(n=oe.nextNode(),a++)}return oe.currentNode=_e,i}p(e){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(e[s]):(r._$AI(e,r,s),s+=r.strings.length-2)),s++}},is=class Zr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Se(this,e,s),ze(e)?e===S||e==null||e===""?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==Ae&&this._(e):e._$litType$===void 0?e.nodeType===void 0?zn(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==S&&ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(_e.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Dt.createElement(Kr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new Fn(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(e){let s=Ks.get(e.strings);return s===void 0&&Ks.set(e.strings,s=new Dt(e)),s}k(e){rs(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of e)i===s.length?s.push(r=new Zr(this.O(qe()),this.O(qe()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=zs(e).nextSibling;zs(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},bt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,i,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(e,s=this,r,i){let n=this.strings,a=!1;if(n===void 0)e=Se(this,e,s,0),a=!ze(e)||e!==this._$AH&&e!==Ae,a&&(this._$AH=e);else{let d=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Se(this,d[r+l],s,l),h===Ae&&(h=this._$AH[l]),a||=!ze(h)||h!==this._$AH[l],h===S?e=S:e!==S&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!i&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Bn=class extends bt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},Vn=class extends bt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}},Jn=class extends bt{constructor(e,s,r,i,n){super(e,s,r,i,n),this.type=5}_$AI(e,s=this){if((e=Se(this,e,s,0)??S)===Ae)return;let r=this._$AH,i=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==S&&(r===S||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Kn=class{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Se(this,e)}},Qn=ss.litHtmlPolyfillSupport;Qn?.(Dt,is),(ss.litHtmlVersions??=[]).push("3.3.3");var Zn=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new is(e.insertBefore(qe(),n),n,void 0,s??{})}return i._$AI(t),i},ns=globalThis,ce=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zn(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ae}};ce._$litElement$=!0,ce.finalized=!0,ns.litElementHydrateSupport?.({LitElement:ce});var Gn=ns.litElementPolyfillSupport;Gn?.({LitElement:ce}),(ns.litElementVersions??=[]).push("4.2.2");var Yn={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function Xn(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function ea(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function ta(t){let e=s=>String(s).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var he,sa=(he=class extends ce{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return w`
      <div class="card">
        <header class="head">
          ${e?w`<span class="badge badge-${e.mode}">${Yn[e.mode]}</span>`:w`<span class="badge badge-unknown">Unknown</span>`}
          ${e?w`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:S}
          ${this.loading?w`<span class="muted loading">Refreshing…</span>`:S}
        </header>

        ${e?.fallbackAP?w`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:S}
        ${this.errorMessage?w`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:S}
        ${e?this.renderSections(e):w`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?w`Updated ${ta(this.lastUpdated)}`:w`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return w`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${Xn(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let s=e.ap;return w`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",s?.ssid)} ${this.row("IP address",s?.ip)}
          ${this.row("Stations",s?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let s=e.eth;return w`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",s?.ip)} ${this.row("MAC address",s?.mac)}
          ${this.row("Link",s===void 0?void 0:s.linkUp?"Up":"Down")}
          ${this.row("Speed",s===void 0?void 0:`${s.speed} Mbps`)}
          ${this.row("Duplex",s===void 0?void 0:ea(s.duplex))}
        </dl>
      </section>
    `}row(e,s){return s===void 0||s===""?S:w`<dt>${e}</dt>
          <dd>${s}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=zr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let s=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,s.ok){this.status=s.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=s.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:s.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},he.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},he.styles=ts`
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
  `,he);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",sa);var Xe=32,Me=64,Pt=8,ra=5e3,ia=new TextEncoder;function et(t){return ia.encode(t).length}function Qs(t){return t.isAPMode?"ap":"station"}var ue,na=(ue=class extends ce{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=s=>{this.draftWifiSSID=s.target.value},this.handleWifiPasswordInput=s=>{this.draftWifiPassword=s.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=s=>{this.draftApSSID=s.target.value},this.handleApPasswordInput=s=>{this.draftApPassword=s.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=s=>{this.draftApHasPassword=s.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=s=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=s,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=s=>{s.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return w`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?w`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:S}
        ${this.successMessage?w`<div class="banner banner-success" role="status">${this.successMessage}</div>`:S}
        ${e?w`${this.renderForm(e)} ${this.renderScan()}`:this.loading?w`<p class="status">Loading settings…</p>`:w`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(e){return w`
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
          ${this.dirty?w`<span class="muted">Unsaved changes</span>`:S}
        </div>
      </form>
    `}renderStation(e){return w`
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
        ${e.hasWifiPassword?w`<p class="hint">Password saved •••• (leave blank to keep)</p>`:S}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(e){return w`
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
                  placeholder=${e.hasWifiAPPassword?"Leave blank to keep saved password":"At least 8 characters"}
                  .value=${this.draftApPassword}
                  @input=${this.handleApPasswordInput}
                />
              </label>
              ${e.hasWifiAPPassword?w`<p class="hint">Password saved •••• (leave blank to keep)</p>`:S}
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
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:S}
      </section>
    `}renderNetwork(e){return w`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?w`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:S}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let s=this.fieldErrors[e];return s?w`<p class="field-error" role="alert">${s}</p>`:S}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?w`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:S}get dirty(){let e=this.settings;return e?this.draftMode!==Qs(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=zr({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let s=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,s.ok){this.applyServerSettings(s.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=s.message,this.emitError(s.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=Qs(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,s={};if(!e)return s;let r=this.draftMode==="ap";if(et(this.draftWifiSSID)>Xe&&(s.wifiSSID=`Wi-Fi name must be ${Xe} characters or fewer.`),et(this.draftApSSID)>Xe&&(s.wifiAPSSID=`Access point name must be ${Xe} characters or fewer.`),r?this.draftApSSID.length===0&&(s.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(s.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&et(this.draftWifiPassword)>Me&&(s.wifiPassword=`Wi-Fi password must be ${Me} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let i=et(this.draftApPassword);(i<Pt||i>Me)&&(s.wifiAPPassword=`Access point password must be ${Pt}–${Me} characters.`)}else e.hasWifiAPPassword||(s.wifiAPPassword=`Enter an access point password (${Pt}–${Me} characters).`);return s}buildPatch(){let e=this.settings,s={};if(!e)return s;let r=this.draftMode==="ap";return r!==e.isAPMode&&(s.isAPMode=r),this.draftWifiSSID!==e.wifiSSID&&(s.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(s.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(s.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(s.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(s.wifiAPPassword=this.draftApPassword),s}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let s=this.buildPatch();if(Object.keys(s).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let r=await this.ensureClient().saveSettings(s);if(this.submitting=!1,r.ok){this.applyServerSettings(r.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:r.data,bubbles:!0,composed:!0}));return}let i=r.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":r.message;this.errorMessage=i,this.emitError(i)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let s,r=new Promise(n=>{s=setTimeout(()=>{e.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},ra)}),i=await Promise.race([this.ensureClient().wifiList(e.signal),r]);if(s!==void 0&&clearTimeout(s),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,i.ok){this.scanResults=[...i.data.networks].sort((n,a)=>a.rssi-n.rssi);return}i.message!=="Request aborted."&&(this.scanError=i.message,this.emitError(i.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},ue.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},ue.styles=ts`
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
  `,ue);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",na);var aa=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],pe,oa=(pe=class extends ce{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return w`
      <div class="tabs" role="tablist" aria-label="Network">
        ${aa.map(e=>w`
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
    `}renderActive(){return this.activeTab==="settings"?w`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:w`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},pe.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},pe.styles=ts`
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
  `,pe);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",oa);var Gr="Network request failed. Check the device connection and try again.",la={};function da(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function ca(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function Yr(t,e){return ca(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:Gr}}async function Xr(t,e){let s=e;try{let r=await t.text();if(r.length>0)try{s=da(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}async function Zs(t,e,s,r,i,n){let a;try{a=await fetch(t,{headers:{Accept:e,...i},signal:n})}catch(l){return Yr(l,n)}if(!a.ok)return Xr(a,a.status===404?r:`Request failed with HTTP ${a.status}.`);let d;try{d=new Uint8Array(await a.arrayBuffer())}catch{return{ok:!1,status:a.status,message:Gr}}return d.byteLength===0?{ok:!1,status:a.status,message:s}:{ok:!0,data:d}}async function Gs(t,e,s,r,i){if(e.byteLength===0)return{ok:!1,message:s};let n=new ArrayBuffer(e.byteLength);new Uint8Array(n).set(e);let a;try{a=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...r},body:n,signal:i})}catch(d){return Yr(d,i)}return a.ok?(await a.text().catch(()=>""),{ok:!0,data:la}):Xr(a,`Upload failed with HTTP ${a.status}.`)}function ha(t={}){let e=t.baseUrl??"",s=t.backupPath??"/api/config/backup",r=t.configPath??"/api/config",i=t.headers??{},n=`${e}${s}`,a=`${e}${r}`;return{downloadBackup(d){return Zs(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",i,d)},downloadConfig(d){return Zs(a,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",i,d)},uploadBackup(d,l){return Gs(n,d,"Cannot upload an empty archive.",i,l)},uploadConfig(d,l){return Gs(a,d,"Cannot upload an empty config file.",i,l)}}}var at=globalThis,as=at.ShadowRoot&&(at.ShadyCSS===void 0||at.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,os=Symbol(),Ys=new WeakMap,ei=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==os)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(as&&e===void 0){let r=s!==void 0&&s.length===1;r&&(e=Ys.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Ys.set(s,e))}return e}toString(){return this.cssText}},ua=t=>new ei(typeof t=="string"?t:t+"",void 0,os),pa=(t,...e)=>new ei(t.length===1?t[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,os),fa=(t,e)=>{if(as)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=at.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},Xs=as?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return ua(s)})(t):t,{is:ma,defineProperty:ga,getOwnPropertyDescriptor:_a,getOwnPropertyNames:ba,getOwnPropertySymbols:$a,getPrototypeOf:va}=Object,$t=globalThis,er=$t.trustedTypes,ya=er?er.emptyScript:"",wa=$t.reactiveElementPolyfillSupport,He=(t,e)=>t,It={toAttribute(t,e){switch(e){case Boolean:t=t?ya:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ti=(t,e)=>!ma(t,e),tr={attribute:!0,type:String,converter:It,reflect:!1,useDefault:!1,hasChanged:ti};Symbol.metadata??=Symbol("metadata"),$t.litPropertyMetadata??=new WeakMap;var ye=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=tr){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,s);i!==void 0&&ga(this.prototype,e,i)}}static getPropertyDescriptor(e,s,r){let{get:i,set:n}=_a(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){let d=i?.call(this);n?.call(this,a),this.requestUpdate(e,d,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??tr}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;let e=va(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){let s=this.properties,r=[...ba(s),...$a(s)];for(let i of r)this.createProperty(i,s[i])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)s.unshift(Xs(i))}else e!==void 0&&s.push(Xs(e));return s}static _$Eu(e,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fa(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$ET(e,s){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute===void 0?It:r.converter).toAttribute(s,r.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,s){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?It:n.converter;this._$Em=i;let d=a.fromAttribute(s,n.type);this[i]=d??this._$Ej?.get(i)??d,this._$Em=null}}requestUpdate(e,s,r,i=!1,n){if(e!==void 0){let a=this.constructor;if(i===!1&&(n=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??ti)(n,s)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??s??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(s=void 0),this._$AL.set(e,s)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:a}=n,d=this[i];a!==!0||this._$AL.has(i)||d===void 0||this.C(i,void 0,n,d)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};ye.elementStyles=[],ye.shadowRootOptions={mode:"open"},ye[He("elementProperties")]=new Map,ye[He("finalized")]=new Map,wa?.({ReactiveElement:ye}),($t.reactiveElementVersions??=[]).push("2.1.2");var ls=globalThis,sr=t=>t,ut=ls.trustedTypes,rr=ut?ut.createPolicy("lit-html",{createHTML:t=>t}):void 0,si="$lit$",ee=`lit$${Math.random().toFixed(9).slice(2)}$`,ri="?"+ee,Aa=`<${ri}>`,be=document,We=()=>be.createComment(""),Fe=t=>t===null||typeof t!="object"&&typeof t!="function",ds=Array.isArray,Sa=t=>ds(t)||typeof t?.[Symbol.iterator]=="function",Ct=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ir=/-->/g,nr=/>/g,ne=RegExp(`>|${Ct}(?:([^\\s"'>=/]+)(${Ct}*=${Ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ar=/'/g,or=/"/g,ii=/^(?:script|style|textarea|title)$/i,K=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),Ee=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),lr=new WeakMap,le=be.createTreeWalker(be,129);function ni(t,e){if(!ds(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return rr===void 0?e:rr.createHTML(e)}var Ea=(t,e)=>{let s=t.length-1,r=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Te;for(let d=0;d<s;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(a.lastIndex=c,u=a.exec(l),u!==null);)c=a.lastIndex,a===Te?u[1]==="!--"?a=ir:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=ne):(ii.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=ne):a=nr:a===ne?u[0]===">"?(a=i??Te,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?ne:u[3]==='"'?or:ar):a===or||a===ar?a=ne:a===ir||a===nr?a=Te:(a=ne,i=void 0);let f=a===ne&&t[d+1].startsWith("/>")?" ":"";n+=a===Te?l+Aa:p>=0?(r.push(h),l.slice(0,p)+si+l.slice(p)+ee+f):l+ee+(p===-2?d:f)}return[ni(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Ot=class ai{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,d=e.length-1,l=this.parts,[h,u]=Ea(e,s);if(this.el=ai.createElement(h,r),le.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=le.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(si)){let c=u[a++],f=i.getAttribute(p).split(ee),$=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:$[2],strings:f,ctor:$[1]==="."?xa:$[1]==="?"?Pa:$[1]==="@"?Ca:vt}),i.removeAttribute(p)}else p.startsWith(ee)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(ii.test(i.tagName)){let p=i.textContent.split(ee),c=p.length-1;if(c>0){i.textContent=ut?ut.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],We()),le.nextNode(),l.push({type:2,index:++n});i.append(p[c],We())}}}else if(i.nodeType===8)if(i.data===ri)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(ee,p+1))!==-1;)l.push({type:7,index:n}),p+=ee.length-1}n++}}static createElement(e,s){let r=be.createElement("template");return r.innerHTML=e,r}};function ke(t,e,s=t,r){if(e===Ee)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Fe(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=ke(t,i._$AS(t,e.values),i,r)),e}var ka=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:r}=this._$AD,i=(e?.creationScope??be).importNode(s,!0);le.currentNode=i;let n=le.nextNode(),a=0,d=0,l=r[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new cs(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Ma(n,this,e)),this._$AV.push(h),l=r[++d]}a!==l?.index&&(n=le.nextNode(),a++)}return le.currentNode=be,i}p(e){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(e[s]):(r._$AI(e,r,s),s+=r.strings.length-2)),s++}},cs=class oi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=ke(this,e,s),Fe(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Ee&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Sa(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(be.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ot.createElement(ni(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new ka(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(e){let s=lr.get(e.strings);return s===void 0&&lr.set(e.strings,s=new Ot(e)),s}k(e){ds(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of e)i===s.length?s.push(r=new oi(this.O(We()),this.O(We()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=sr(e).nextSibling;sr(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},vt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(e,s=this,r,i){let n=this.strings,a=!1;if(n===void 0)e=ke(this,e,s,0),a=!Fe(e)||e!==this._$AH&&e!==Ee,a&&(this._$AH=e);else{let d=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=ke(this,d[r+l],s,l),h===Ee&&(h=this._$AH[l]),a||=!Fe(h)||h!==this._$AH[l],h===x?e=x:e!==x&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!i&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xa=class extends vt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},Pa=class extends vt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},Ca=class extends vt{constructor(e,s,r,i,n){super(e,s,r,i,n),this.type=5}_$AI(e,s=this){if((e=ke(this,e,s,0)??x)===Ee)return;let r=this._$AH,i=e===x&&r!==x||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==x&&(r===x||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ma=class{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){ke(this,e)}},Ta=ls.litHtmlPolyfillSupport;Ta?.(Ot,cs),(ls.litHtmlVersions??=[]).push("3.3.3");var Ua=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new cs(e.insertBefore(We(),n),n,void 0,s??{})}return i._$AI(t),i},hs=globalThis,De=class extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ua(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ee}};De._$litElement$=!0,De.finalized=!0,hs.litElementHydrateSupport?.({LitElement:De});var Na=hs.litElementPolyfillSupport;Na?.({LitElement:De}),(hs.litElementVersions??=[]).push("4.2.2");var dr=2e3,Ra=12e4,cr="Unsupported file type. Choose a .zip full backup or a .bin config file.";function Mt(t){let e=t.toLowerCase();return e.endsWith(".zip")?"archive":e.endsWith(".bin")?"config":null}function Ha(t,e){if(typeof URL.createObjectURL!="function")return;let s=new ArrayBuffer(t.byteLength);new Uint8Array(s).set(t);let r=new Blob([s],{type:"application/octet-stream"}),i=URL.createObjectURL(r),n=document.createElement("a");n.href=i,n.download=e,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),0)}var fe,Da=(fe=class extends De{constructor(...e){super(...e),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return K`
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
            ${this.fileError?K`<span class="field-error" role="alert">${this.fileError}</span>`:x}
          </label>
          ${this.selectedFile&&!this.fileError?K`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${Mt(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:x}
          ${this.uploadError?K`<div class="banner banner-error" role="alert">
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
    `}renderNotice(e){return e?K`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.message}
    </div>`:x}renderRebootOverlay(){return this.phase==="idle"?x:K`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?K`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:x}
          ${this.phase==="ready"?K`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:x}
          ${this.phase==="timeout"?K`
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
    `}createClient(){return ha({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(e){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let s=this.createClient(),r=e==="archive"?await s.downloadBackup():await s.downloadConfig();if(!r.ok){this.downloadNotice={kind:"error",message:r.message};return}let i=e==="archive"?this.archiveFileName:this.binFileName;Ha(r.data,i),this.downloadNotice={kind:"info",message:e==="archive"?`Full backup downloaded as ${i}.`:`Config downloaded as ${i}.`}}finally{this.downloading=!1}}}handleFileChange(e){let s=e.currentTarget,r=s.files&&s.files[0]?s.files[0]:null;this.selectedFile=r,this.uploadError=null,this.fileError=r?r.size===0?"The selected file is empty.":r.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:Mt(r.name)?null:cr:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let e=Mt(this.selectedFile.name);if(!e)this.uploadError=cr;else if(window.confirm(e==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let s;try{s=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let r=this.createClient(),i=e==="archive"?await r.uploadBackup(s):await r.uploadConfig(s);if(!i.ok){this.uploadError=i.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:e},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let e=this.renderRoot.querySelector("#edc-restore-file");e&&(e.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},dr)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let e=!1;try{let s=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(s.ok){let r=await s.json();e=!!r&&typeof r=="object"&&r.healty===!0}}catch{e=!1}this.isConnected&&this.phase==="rebooting"&&(e?this.phase="ready":(this._attempts+=1,this._attempts*dr>=Ra?this.phase="timeout":this.schedulePoll()))}},fe.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},fe.styles=pa`
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
  `,fe);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",Da);var hr="Invalid settings response.";function Ia(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function Oa(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function li(t,e){return Oa(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}async function di(t,e){let s=e;try{let r=await t.text();if(r.length>0)try{s=Ia(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}function La(t){if(!t||typeof t!="object")return;let{host:e,uri:s,port:r,enabled:i}=t;if(typeof e=="string"&&typeof s=="string"&&typeof r=="number"&&Number.isFinite(r)&&typeof i=="boolean")return{host:e,uri:s,port:r,enabled:i}}async function ci(t){let e;try{e=await t.json()}catch{return{ok:!1,status:t.status,message:hr}}let s=La(e);return s?{ok:!0,data:s}:{ok:!1,status:t.status,message:hr}}async function ja(t,e,s){let r;try{r=await fetch(t,{headers:{Accept:"application/json",...e},signal:s})}catch(i){return li(i,s)}return r.ok?ci(r):di(r,"Could not load the logger settings from the device.")}async function qa(t,e,s,r){let i;try{i=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...s},body:JSON.stringify(e),signal:r})}catch(n){return li(n,r)}return i.ok?ci(i):di(i,"The device rejected the logger settings.")}function za(t={}){let e=t.baseUrl??"",s=t.settingsPath??"/api/log/settings",r=t.headers??{},i=`${e}${s}`;return{getSettings(n){return ja(i,r,n)},saveSettings(n,a){return qa(i,n,r,a)}}}var ot=globalThis,us=ot.ShadowRoot&&(ot.ShadyCSS===void 0||ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ps=Symbol(),ur=new WeakMap,hi=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ps)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(us&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=ur.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ur.set(e,t))}return t}toString(){return this.cssText}},Wa=t=>new hi(typeof t=="string"?t:t+"",void 0,ps),Fa=(t,...e)=>new hi(t.length===1?t[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,ps),Ba=(t,e)=>{if(us)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=ot.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},pr=us?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return Wa(s)})(t):t,{is:Va,defineProperty:Ja,getOwnPropertyDescriptor:Ka,getOwnPropertyNames:Qa,getOwnPropertySymbols:Za,getPrototypeOf:Ga}=Object,yt=globalThis,fr=yt.trustedTypes,Ya=fr?fr.emptyScript:"",Xa=yt.reactiveElementPolyfillSupport,Ie=(t,e)=>t,Lt={toAttribute(t,e){switch(e){case Boolean:t=t?Ya:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},ui=(t,e)=>!Va(t,e),mr={attribute:!0,type:String,converter:Lt,reflect:!1,useDefault:!1,hasChanged:ui};Symbol.metadata??=Symbol("metadata"),yt.litPropertyMetadata??=new WeakMap;var we=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=mr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Ja(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:i}=Ka(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let a=r?.call(this);i?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??mr}static _$Ei(){if(this.hasOwnProperty(Ie("elementProperties")))return;let t=Ga(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ie("properties"))){let e=this.properties,s=[...Qa(e),...Za(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(pr(r))}else t!==void 0&&e.push(pr(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ba(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute===void 0?Lt:s.converter).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute===void 0?Lt:i.converter;this._$Em=r;let a=n.fromAttribute(e,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,s,r=!1,i){if(t!==void 0){let n=this.constructor;if(r===!1&&(i=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??ui)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:n}=i,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};we.elementStyles=[],we.shadowRootOptions={mode:"open"},we[Ie("elementProperties")]=new Map,we[Ie("finalized")]=new Map,Xa?.({ReactiveElement:we}),(yt.reactiveElementVersions??=[]).push("2.1.2");var fs=globalThis,gr=t=>t,pt=fs.trustedTypes,_r=pt?pt.createPolicy("lit-html",{createHTML:t=>t}):void 0,pi="$lit$",te=`lit$${Math.random().toFixed(9).slice(2)}$`,fi="?"+te,eo=`<${fi}>`,$e=document,Be=()=>$e.createComment(""),Ve=t=>t===null||typeof t!="object"&&typeof t!="function",ms=Array.isArray,to=t=>ms(t)||typeof t?.[Symbol.iterator]=="function",Tt=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,br=/-->/g,$r=/>/g,ae=RegExp(`>|${Tt}(?:([^\\s"'>=/]+)(${Tt}*=${Tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vr=/'/g,yr=/"/g,mi=/^(?:script|style|textarea|title)$/i,wr=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),xe=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),Ar=new WeakMap,de=$e.createTreeWalker($e,129);function gi(t,e){if(!ms(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return _r===void 0?e:_r.createHTML(e)}var so=(t,e)=>{let s=t.length-1,r=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Ue;for(let d=0;d<s;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(a.lastIndex=c,u=a.exec(l),u!==null);)c=a.lastIndex,a===Ue?u[1]==="!--"?a=br:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=ae):(mi.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=ae):a=$r:a===ae?u[0]===">"?(a=i??Ue,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?ae:u[3]==='"'?yr:vr):a===yr||a===vr?a=ae:a===br||a===$r?a=Ue:(a=ae,i=void 0);let f=a===ae&&t[d+1].startsWith("/>")?" ":"";n+=a===Ue?l+eo:p>=0?(r.push(h),l.slice(0,p)+pi+l.slice(p)+te+f):l+te+(p===-2?d:f)}return[gi(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},jt=class _i{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,d=e.length-1,l=this.parts,[h,u]=so(e,s);if(this.el=_i.createElement(h,r),de.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=de.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(pi)){let c=u[a++],f=i.getAttribute(p).split(te),$=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:$[2],strings:f,ctor:$[1]==="."?io:$[1]==="?"?no:$[1]==="@"?ao:wt}),i.removeAttribute(p)}else p.startsWith(te)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(mi.test(i.tagName)){let p=i.textContent.split(te),c=p.length-1;if(c>0){i.textContent=pt?pt.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],Be()),de.nextNode(),l.push({type:2,index:++n});i.append(p[c],Be())}}}else if(i.nodeType===8)if(i.data===fi)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(te,p+1))!==-1;)l.push({type:7,index:n}),p+=te.length-1}n++}}static createElement(e,s){let r=$e.createElement("template");return r.innerHTML=e,r}};function Pe(t,e,s=t,r){if(e===xe)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Ve(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=Pe(t,i._$AS(t,e.values),i,r)),e}var ro=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??$e).importNode(e,!0);de.currentNode=r;let i=de.nextNode(),n=0,a=0,d=s[0];for(;d!==void 0;){if(n===d.index){let l;d.type===2?l=new gs(i,i.nextSibling,this,t):d.type===1?l=new d.ctor(i,d.name,d.strings,this,t):d.type===6&&(l=new oo(i,this,t)),this._$AV.push(l),d=s[++a]}n!==d?.index&&(i=de.nextNode(),n++)}return de.currentNode=$e,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(t[e]):(s._$AI(t,s,e),e+=s.strings.length-2)),e++}},gs=class bi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Pe(this,e,s),Ve(e)?e===H||e==null||e===""?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==xe&&this._(e):e._$litType$===void 0?e.nodeType===void 0?to(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==H&&Ve(this._$AH)?this._$AA.nextSibling.data=e:this.T($e.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=jt.createElement(gi(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new ro(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(e){let s=Ar.get(e.strings);return s===void 0&&Ar.set(e.strings,s=new jt(e)),s}k(e){ms(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of e)i===s.length?s.push(r=new bi(this.O(Be()),this.O(Be()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=gr(e).nextSibling;gr(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},wt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=H}_$AI(t,e=this,s,r){let i=this.strings,n=!1;if(i===void 0)t=Pe(this,t,e,0),n=!Ve(t)||t!==this._$AH&&t!==xe,n&&(this._$AH=t);else{let a=t,d,l;for(t=i[0],d=0;d<i.length-1;d++)l=Pe(this,a[s+d],e,d),l===xe&&(l=this._$AH[d]),n||=!Ve(l)||l!==this._$AH[d],l===H?t=H:t!==H&&(t+=(l??"")+i[d+1]),this._$AH[d]=l}n&&!r&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},io=class extends wt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}},no=class extends wt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==H)}},ao=class extends wt{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=Pe(this,t,e,0)??H)===xe)return;let s=this._$AH,r=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==H&&(s===H||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},oo=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Pe(this,t)}},lo=fs.litHtmlPolyfillSupport;lo?.(jt,gs),(fs.litHtmlVersions??=[]).push("3.3.3");var co=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new gs(e.insertBefore(Be(),n),n,void 0,s??{})}return i._$AI(t),i},_s=globalThis,Oe=class extends we{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=co(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return xe}};Oe._$litElement$=!0,Oe.finalized=!0,_s.litElementHydrateSupport?.({LitElement:Oe});var ho=_s.litElementPolyfillSupport;ho?.({LitElement:Oe}),(_s.litElementVersions??=[]).push("4.2.2");var me,uo=(me=class extends Oe{constructor(...e){super(...e),this.baseUrl="",this.settingsPath="/api/log/settings",this.deviceName="logger",this.maxHostLength=63,this.formHost="",this.formUri="",this.formPort="",this.formEnabled=!1,this.loading=!1,this.saving=!1,this.notice=null,this.loaded=!1,this._loadStarted=!1}connectedCallback(){super.connectedCallback(),this.load()}firstUpdated(){this._loadStarted||this.load()}render(){return wr`
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
    `}renderNotice(e){return e?wr`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.text}
    </div>`:H}createClient(){return za({baseUrl:this.baseUrl,settingsPath:this.settingsPath})}async load(){if(!(this.loading||this.saving)){this._loadStarted=!0,this.loading=!0,this.notice=null;try{let e=await this.createClient().getSettings();if(!e.ok){this.notice={kind:"error",text:e.message};return}this.applySettings(e.data),this.loaded=!0}finally{this.loading=!1}}}applySettings(e){this.formHost=e.host,this.formUri=e.uri,this.formPort=String(e.port),this.formEnabled=e.enabled}handleHostInput(e){this.formHost=e.currentTarget.value}handleUriInput(e){this.formUri=e.currentTarget.value}handlePortInput(e){this.formPort=e.currentTarget.value}handleEnabledChange(e){this.formEnabled=e.currentTarget.checked}validate(){let e=this.formHost.trim(),s=this.formUri.trim();if(e.length===0)return"Host is required.";if(e.length>this.maxHostLength)return`Host must be ${this.maxHostLength} characters or fewer.`;if(s.length===0)return"URI is required.";if(s.length>this.maxHostLength)return`URI must be ${this.maxHostLength} characters or fewer.`;let r=this.formPort.trim();if(!/^\d+$/.test(r))return"Port must be a whole number between 1 and 65535.";let i=Number(r);return!Number.isInteger(i)||i<1||i>65535?"Port must be a whole number between 1 and 65535.":{host:e,uri:s,port:i,enabled:this.formEnabled}}async handleSave(){if(this.loading||this.saving)return;let e=this.validate();if(typeof e=="string")this.notice={kind:"error",text:e};else{this.saving=!0,this.notice=null;try{let s=await this.createClient().saveSettings(e);if(!s.ok){this.notice={kind:"error",text:s.message};return}this.applySettings(s.data),this.loaded=!0,this.notice={kind:"info",text:"Settings saved."},this.dispatchEvent(new CustomEvent("edu-log-saved",{detail:s.data,bubbles:!0,composed:!0}))}finally{this.saving=!1}}}},me.properties={baseUrl:{type:String,attribute:"base-url"},settingsPath:{type:String,attribute:"settings-path"},deviceName:{type:String,attribute:"device-name"},maxHostLength:{type:Number,attribute:"max-host-length"},formHost:{state:!0},formUri:{state:!0},formPort:{state:!0},formEnabled:{state:!0},loading:{state:!0},saving:{state:!0},notice:{state:!0},loaded:{state:!0}},me.styles=Fa`
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
  `,me);typeof customElements<"u"&&!customElements.get("edu-log-settings-page")&&customElements.define("edu-log-settings-page",uo);const Sr=document.getElementById("app");Sr&&Ci(o(Cn,{}),Sr);
