(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();var dt,k,fr,Q,cs,mr,_r,$t,Ze,Ne,gr,Dt,xt,Pt,rt={},it=[],ui=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ct=Array.isArray;function V(t,e){for(var s in e)t[s]=e[s];return t}function It(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function pi(t,e,s){var r,i,n,a={};for(n in e)n=="key"?r=e[n]:n=="ref"?i=e[n]:a[n]=e[n];if(arguments.length>2&&(a.children=arguments.length>3?dt.call(arguments,2):s),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)a[n]===void 0&&(a[n]=t.defaultProps[n]);return Ye(t,a,r,i,null)}function Ye(t,e,s,r,i){var n={type:t,props:e,key:s,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++fr,__i:-1,__u:0};return i==null&&k.vnode!=null&&k.vnode(n),n}function q(t){return t.children}function Ge(t,e){this.props=t,this.context=e}function fe(t,e){if(e==null)return t.__?fe(t.__,t.__i+1):null;for(var s;e<t.__k.length;e++)if((s=t.__k[e])!=null&&s.__e!=null)return s.__e;return typeof t.type=="function"?fe(t):null}function fi(t){if(t.__P&&t.__d){var e=t.__v,s=e.__e,r=[],i=[],n=V({},e);n.__v=e.__v+1,k.vnode&&k.vnode(n),Ot(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[s]:null,r,s??fe(e),!!(32&e.__u),i),n.__v=e.__v,n.__.__k[n.__i]=n,wr(r,n,i),e.__e=e.__=null,n.__e!=s&&br(n)}}function br(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),br(t)}function hs(t){(!t.__d&&(t.__d=!0)&&Q.push(t)&&!nt.__r++||cs!=k.debounceRendering)&&((cs=k.debounceRendering)||mr)(nt)}function nt(){try{for(var t,e=1;Q.length;)Q.length>e&&Q.sort(_r),t=Q.shift(),e=Q.length,fi(t)}finally{Q.length=nt.__r=0}}function $r(t,e,s,r,i,n,a,o,l,h,u){var p,c,f,g,w,S,m=r&&r.__k||it,b=e.length;for(l=mi(s,e,m,l,b),p=0;p<b;p++)(f=s.__k[p])!=null&&(c=f.__i!=-1&&m[f.__i]||rt,f.__i=p,S=Ot(t,f,c,i,n,a,o,l,h,u),g=f.__e,f.ref&&c.ref!=f.ref&&(c.ref&&Lt(c.ref,null,f),u.push(f.ref,f.__c||g,f)),w==null&&g!=null&&(w=g),4&f.__u?(l=vr(f,l,t),c.__e&&(c.__e=null)):typeof f.type=="function"&&S!==void 0?l=S:g&&(l=g.nextSibling),f.__u&=-7);return s.__e=w,l}function mi(t,e,s,r,i){var n,a,o,l,h,u=s.length,p=u,c=0;for(t.__k=new Array(i),n=0;n<i;n++)(a=e[n])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=t.__k[n]=Ye(null,a,null,null,null):ct(a)?a=t.__k[n]=Ye(q,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=t.__k[n]=Ye(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):t.__k[n]=a,l=n+c,a.__=t,a.__b=t.__b+1,o=null,(h=a.__i=_i(a,s,l,p))!=-1&&(p--,(o=s[h])&&(o.__u|=2)),o==null||o.__v==null?(h==-1&&(i>u?c--:i<u&&c++),typeof a.type!="function"&&(a.__u|=4)):h!=l&&(h==l-1?c--:h==l+1?c++:(h>l?c--:c++,a.__u|=4))):t.__k[n]=null;if(p)for(n=0;n<u;n++)(o=s[n])!=null&&(2&o.__u)==0&&(o.__e==r&&(r=fe(o)),Sr(o,o));return r}function vr(t,e,s){var r,i;if(typeof t.type=="function"){for(r=t.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=t,e=vr(r[i],e,s));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=fe(t)),e=s.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function _i(t,e,s,r){var i,n,a,o=t.key,l=t.type,h=e[s],u=h!=null&&(2&h.__u)==0;if(h===null&&o==null||u&&o==h.key&&l==h.type)return s;if(r>(u?1:0)){for(i=s-1,n=s+1;i>=0||n<e.length;)if((h=e[a=i>=0?i--:n++])!=null&&(2&h.__u)==0&&o==h.key&&l==h.type)return a}return-1}function us(t,e,s){e[0]=="-"?t.setProperty(e,s??""):t[e]=s==null?"":typeof s!="number"||ui.test(e)?s:s+"px"}function Je(t,e,s,r,i){var n,a;e:if(e=="style")if(typeof s=="string")t.style.cssText=s;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)s&&e in s||us(t.style,e,"");if(s)for(e in s)r&&s[e]==r[e]||us(t.style,e,s[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(gr,"$1")),a=e.toLowerCase(),e=a in t||e=="onFocusOut"||e=="onFocusIn"?a.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=s,s?r?s[Ne]=r[Ne]:(s[Ne]=Dt,t.addEventListener(e,n?Pt:xt,n)):t.removeEventListener(e,n?Pt:xt,n);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=s??"";break e}catch{}typeof s=="function"||(s==null||s===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&s==1?"":s))}}function ps(t){return function(e){if(this.l){var s=this.l[e.type+t];if(e[Ze]==null)e[Ze]=Dt++;else if(e[Ze]<s[Ne])return;return s(k.event?k.event(e):e)}}}function Ot(t,e,s,r,i,n,a,o,l,h){var u,p,c,f,g,w,S,m,b,y,N,R,E,I,ee,J,O=e.type;if(e.constructor!==void 0)return null;128&s.__u&&(l=!!(32&s.__u),n=[o=e.__e=s.__e]),(u=k.__b)&&u(e);e:if(typeof O=="function"){p=a.length;try{if(b=e.props,y=O.prototype&&O.prototype.render,N=(u=O.contextType)&&r[u.__c],R=u?N?N.props.value:u.__:r,s.__c?m=(c=e.__c=s.__c).__=c.__E:(y?e.__c=c=new O(b,R):(e.__c=c=new Ge(b,R),c.constructor=O,c.render=bi),N&&N.sub(c),c.state||(c.state={}),c.__n=r,f=c.__d=!0,c.__h=[],c._sb=[]),y&&c.__s==null&&(c.__s=c.state),y&&O.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=V({},c.__s)),V(c.__s,O.getDerivedStateFromProps(b,c.__s))),g=c.props,w=c.state,c.__v=e,f)y&&O.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),y&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(y&&O.getDerivedStateFromProps==null&&b!==g&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(b,R),e.__v==s.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(b,c.__s,R)===!1){e.__v!=s.__v&&(c.props=b,c.state=c.__s,c.__d=!1),e.__e=s.__e,e.__k=s.__k,e.__k.some(function(W){W&&(W.__=e)}),it.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&a.push(c),o=fe(s);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(b,c.__s,R),y&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(g,w,S)})}if(c.context=R,c.props=b,c.__P=t,c.__e=!1,E=k.__r,I=0,y)c.state=c.__s,c.__d=!1,E&&E(e),u=c.render(c.props,c.state,c.context),it.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,E&&E(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++I<25);c.state=c.__s,c.getChildContext!=null&&(r=V(V({},r),c.getChildContext())),y&&!f&&c.getSnapshotBeforeUpdate!=null&&(S=c.getSnapshotBeforeUpdate(g,w)),ee=u!=null&&u.type===q&&u.key==null?Ar(u.props.children):u,o=$r(t,ct(ee)?ee:[ee],e,s,r,i,n,a,o,l,h),c.base=e.__e,e.__u&=-161,c.__h.length&&a.push(c),m&&(c.__E=c.__=null)}catch(W){if(a.length=p,e.__v=null,l||n!=null){if(W.then){for(e.__u|=l?160:128;o&&o.nodeType==8&&o.nextSibling;)o=o.nextSibling;n!=null&&(n[n.indexOf(o)]=null),e.__e=o}else if(n!=null)for(J=n.length;J--;)It(n[J])}else e.__e=s.__e;e.__k==null&&(e.__k=s.__k||[]),W.then||yr(e),k.__e(W,e,s)}}else n==null&&e.__v==s.__v?(e.__k=s.__k,e.__e=s.__e):o=e.__e=gi(s.__e,e,s,r,i,n,a,l,h);return(u=k.diffed)&&u(e),128&e.__u?void 0:o}function yr(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(yr))}function wr(t,e,s){for(var r=0;r<s.length;r++)Lt(s[r],s[++r],s[++r]);k.__c&&k.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(n){n.call(i)})}catch(n){k.__e(n,i.__v)}})}function Ar(t){return typeof t!="object"||t==null||t.__b>0?t:ct(t)?t.map(Ar):t.constructor!==void 0?null:V({},t)}function gi(t,e,s,r,i,n,a,o,l){var h,u,p,c,f,g,w,S=s.props||rt,m=e.props,b=e.type;if(b=="svg"?i="http://www.w3.org/2000/svg":b=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((f=n[h])&&"setAttribute"in f==!!b&&(b?f.localName==b:f.nodeType==3)){t=f,n[h]=null;break}}if(t==null){if(b==null)return document.createTextNode(m);t=document.createElementNS(i,b,m.is&&m),o&&(k.__m&&k.__m(e,n),o=!1),n=null}if(b==null)S===m||o&&t.data==m||(t.data=m);else{if(n=b=="textarea"&&m.defaultValue!=null?null:n&&dt.call(t.childNodes),!o&&n!=null)for(S={},h=0;h<t.attributes.length;h++)S[(f=t.attributes[h]).name]=f.value;for(h in S)f=S[h],h=="dangerouslySetInnerHTML"?p=f:h=="children"||h in m||h=="value"&&"defaultValue"in m||h=="checked"&&"defaultChecked"in m||Je(t,h,null,f,i);for(h in m)f=m[h],h=="children"?c=f:h=="dangerouslySetInnerHTML"?u=f:h=="value"?g=f:h=="checked"?w=f:o&&typeof f!="function"||S[h]===f||Je(t,h,f,S[h],i);if(u)o||p&&(u.__html==p.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(p&&(t.innerHTML=""),$r(e.type=="template"?t.content:t,ct(c)?c:[c],e,s,r,b=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,a,n?n[0]:s.__k&&fe(s,0),o,l),n!=null)for(h=n.length;h--;)It(n[h]);o&&b!="textarea"||(h="value",b=="progress"&&g==null?t.removeAttribute("value"):g!=null&&(g!==t[h]||b=="progress"&&!g||b=="option"&&g!=S[h])&&Je(t,h,g,S[h],i),h="checked",w!=null&&w!=t[h]&&Je(t,h,w,S[h],i))}return t}function Lt(t,e,s){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(i){k.__e(i,s)}}function Sr(t,e,s){var r,i;if(k.unmount&&k.unmount(t),(r=t.ref)&&(r.current&&r.current!=t.__e||Lt(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){k.__e(n,e)}r.base=r.__P=r.__n=null}if(r=t.__k)for(i=0;i<r.length;i++)r[i]&&Sr(r[i],e,s||typeof t.type!="function");s||It(t.__e),t.__c=t.__=t.__e=void 0}function bi(t,e,s){return this.constructor(t,s)}function $i(t,e,s){var r,i,n,a;e==document&&(e=document.documentElement),k.__&&k.__(t,e),i=(r=!1)?null:e.__k,n=[],a=[],Ot(e,t=e.__k=pi(q,null,[t]),i||rt,rt,e.namespaceURI,i?null:e.firstChild?dt.call(e.childNodes):null,n,i?i.__e:e.firstChild,r,a),wr(n,t,a),t.props.children=null}dt=it.slice,k={__e:function(t,e,s,r){for(var i,n,a;e=e.__;)if((i=e.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(t)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,r||{}),a=i.__d),a)return i.__E=i}catch(o){t=o}throw t}},fr=0,Ge.prototype.setState=function(t,e){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=V({},this.state),typeof t=="function"&&(t=t(V({},s),this.props)),t&&V(s,t),t!=null&&this.__v&&(e&&this._sb.push(e),hs(this))},Ge.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),hs(this))},Ge.prototype.render=q,Q=[],mr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_r=function(t,e){return t.__v.__b-e.__v.__b},nt.__r=0,$t=Math.random().toString(8),Ze="__d"+$t,Ne="__a"+$t,gr=/(PointerCapture)$|Capture$/i,Dt=0,xt=ps(!1),Pt=ps(!0);var vi=0;function d(t,e,s,r,i,n){e||(e={});var a,o,l=e;if("ref"in l)for(o in l={},e)o=="ref"?a=e[o]:l[o]=e[o];var h={type:t,props:l,key:s,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--vi,__i:-1,__u:0,__source:i,__self:n};if(typeof t=="function"&&(a=t.defaultProps))for(o in a)l[o]===void 0&&(l[o]=a[o]);return k.vnode&&k.vnode(h),h}var Le,P,vt,fs,qe=0,Er=[],M=k,ms=M.__b,_s=M.__r,gs=M.diffed,bs=M.__c,$s=M.unmount,vs=M.__;function qt(t,e){M.__h&&M.__h(P,t,qe||e),qe=0;var s=P.__H||(P.__H={__:[],__h:[]});return t>=s.__.length&&s.__.push({}),s.__[t]}function $(t){return qe=1,yi(xr,t)}function yi(t,e,s){var r=qt(Le++,2);if(r.t=t,!r.__c&&(r.__=[xr(void 0,e),function(o){var l=r.__N?r.__N[0]:r.__[0],h=r.t(l,o);l!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=P,!P.__f)){var i=function(o,l,h){if(!r.__c.__H)return!0;var u=!1,p=r.__c.props!==o;if(r.__c.__H.__.some(function(f){if(f.__N){u=!0;var g=f.__[0];f.__=f.__N,f.__N=void 0,g!==f.__[0]&&(p=!0)}}),n){var c=n.call(this,o,l,h);return u?c||p:c}return!u||p};P.__f=!0;var n=P.shouldComponentUpdate,a=P.componentWillUpdate;P.componentWillUpdate=function(o,l,h){if(this.__e){var u=n;n=void 0,i(o,l,h),n=u}a&&a.call(this,o,l,h)},P.shouldComponentUpdate=i}return r.__N||r.__}function F(t,e){var s=qt(Le++,3);!M.__s&&kr(s.__H,e)&&(s.__=t,s.u=e,P.__H.__h.push(s))}function ht(t){return qe=5,zt(function(){return{current:t}},[])}function zt(t,e){var s=qt(Le++,7);return kr(s.__H,e)&&(s.__=t(),s.__H=e,s.__h=t),s.__}function H(t,e){return qe=8,zt(function(){return t},e)}function wi(){for(var t;t=Er.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(Xe),e.__h.some(Ct),e.__h=[]}catch(s){e.__h=[],M.__e(s,t.__v)}}}M.__b=function(t){P=null,ms&&ms(t)},M.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),vs&&vs(t,e)},M.__r=function(t){_s&&_s(t),Le=0;var e=(P=t.__c).__H;e&&(vt===P?(e.__h=[],P.__h=[],e.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(e.__h.some(Xe),e.__h.some(Ct),e.__h=[],Le=0)),vt=P},M.diffed=function(t){gs&&gs(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Er.push(e)!==1&&fs===M.requestAnimationFrame||((fs=M.requestAnimationFrame)||Ai)(wi)),e.__H.__.some(function(s){s.u&&(s.__H=s.u,s.u=void 0)})),vt=P=null},M.__c=function(t,e){e.some(function(s){try{s.__h.some(Xe),s.__h=s.__h.filter(function(r){return!r.__||Ct(r)})}catch(r){e.some(function(i){i.__h&&(i.__h=[])}),e=[],M.__e(r,s.__v)}}),bs&&bs(t,e)},M.unmount=function(t){$s&&$s(t);var e,s=t.__c;s&&s.__H&&(s.__H.__.some(function(r){try{Xe(r)}catch(i){e=i}}),s.__H=void 0,e&&M.__e(e,s.__v))};var ys=typeof requestAnimationFrame=="function";function Ai(t){var e,s=function(){clearTimeout(r),ys&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(s,35);ys&&(e=requestAnimationFrame(s))}function Xe(t){var e=P,s=t.__c;typeof s=="function"&&(t.__c=void 0,s()),P=e}function Ct(t){var e=P;t.__c=t.__(),P=e}function kr(t,e){return!t||t.length!==e.length||e.some(function(s,r){return s!==t[r]})}function xr(t,e){return typeof e=="function"?e(t):e}const X="Device returned an empty response.",Ft="Could not reach the device. Check that you are connected to its network and try again.",Si={},_={mqtt:{hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[9600,19200,38400,57600,115200],addressMin:1,addressMax:247},meter:{ctRatioMin:0,ctRatioMax:65535,syncMin:0}};function Wt(){return{ok:!1,message:Ft}}function Ei(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const s=e.message;if(typeof s=="string"&&s)return s}}catch{}}async function Bt(t){let e=`Request failed (HTTP ${t.status}).`;try{const s=await t.text();s&&(e=Ei(s)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function Pe(t,e){let s;try{s=await fetch(t,{headers:{Accept:"application/json"}})}catch{return Wt()}if(!s.ok)return Bt(s);let r;try{r=await s.text()}catch{return{ok:!1,status:s.status,message:Ft}}if(!r.trim())return{ok:!1,status:s.status,message:e};try{return{ok:!0,data:JSON.parse(r)}}catch{return{ok:!1,status:s.status,message:e}}}async function Pr(t,e){let s;try{s=await fetch(t,e)}catch{return Wt()}if(!s.ok)return Bt(s);try{await s.text()}catch{}return{ok:!0,data:Si}}function ki(t,e){return Pr(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}async function Cr(t,e,s){let r;try{r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})}catch{return Wt()}if(!r.ok)return Bt(r);let i;try{i=await r.text()}catch{return{ok:!1,status:r.status,message:Ft}}if(!i.trim())return{ok:!1,status:r.status,message:s};try{return{ok:!0,data:JSON.parse(i)}}catch{return{ok:!1,status:r.status,message:s}}}function Mr(){return Pe("/api/status",X)}function Tr(){return Pe("/healthcheck/healty",X)}function xi(){return Pe("/healthcheck/ready",X)}function Pi(){return Pr("/api/reboot",{method:"POST"})}function Ci(){return Pe("/api/settings",X)}function be(t,e,s,r=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!r&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>s)throw new Error(`${e} must be at most ${s} characters.`);return t}function Mi(t){const e=be(t.host,"MQTT host",_.mqtt.hostMax);if(typeof t.port!="number"||!Number.isInteger(t.port)||t.port<1||t.port>65535)throw new Error("MQTT port must be an integer between 1 and 65535.");const s=be(t.login,"MQTT login",_.mqtt.loginMax,!0),r=be(t.password,"MQTT password",_.mqtt.passwordMax,!0),i=be(t.haDiscoveryPrefix,"HA discovery prefix",_.mqtt.haDiscoveryPrefixMax);if(typeof t.mqttIsHADiscovery!="boolean")throw new Error("HA discovery flag must be true or false.");const n=be(t.stateTopic,"State topic",_.mqtt.topicMax),a=be(t.commandTopic,"Command topic",_.mqtt.topicMax),o=new URLSearchParams;return o.set("host",e),o.set("port",String(t.port)),o.set("login",s),o.set("password",r),o.set("haDiscoveryPrefix",i),o.set("mqttIsHADiscovery",t.mqttIsHADiscovery?"true":"false"),o.set("stateTopic",n),o.set("commandTopic",a),ki("/api/settings/mqtt",o)}function Ti(){return Pe("/api/settings/modbus",X)}function Ui(t){if(!_.modbus.speeds.includes(t.modbusSpeed))throw new Error(`Modbus speed must be one of ${_.modbus.speeds.join(", ")}.`);if(!Number.isInteger(t.map12eAddress)||t.map12eAddress<_.modbus.addressMin||t.map12eAddress>_.modbus.addressMax)throw new Error(`MAP12E address must be an integer between ${_.modbus.addressMin} and ${_.modbus.addressMax}.`);return Cr("/api/settings/modbus",{modbusSpeed:t.modbusSpeed,map12eAddress:t.map12eAddress},X)}function ws(){return Pe("/api/settings/meter",X)}function As(t){const e={};if(t.ct1Ratio!==void 0){if(!Number.isInteger(t.ct1Ratio)||t.ct1Ratio<_.meter.ctRatioMin||t.ct1Ratio>_.meter.ctRatioMax)throw new Error(`CT ratio must be an integer between ${_.meter.ctRatioMin} and ${_.meter.ctRatioMax}.`);e.ct1Ratio=t.ct1Ratio}if(t.energySyncValue!==void 0){if(!Number.isFinite(t.energySyncValue)||t.energySyncValue<_.meter.syncMin)throw new Error("Energy sync value must be a number greater than or equal to 0.");e.energySyncValue=t.energySyncValue}if(e.ct1Ratio===void 0&&e.energySyncValue===void 0)throw new Error("ct1Ratio or energySyncValue required.");return Cr("/api/settings/meter",e,X)}function Ni({tabs:t,active:e,onSelect:s}){return d("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(r=>d("button",{type:"button",role:"tab",id:`tab-${r.id}`,"aria-selected":r.id===e,"aria-controls":`panel-${r.id}`,class:r.id===e?"active":void 0,onClick:()=>s(r.id),children:r.label},r.id))})}function C({kind:t="info",message:e,onClose:s}){return d("div",{class:`banner banner-${t}`,role:"status",children:[d("span",{children:e}),s?d("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:s,children:"×"}):null]})}function Ri(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function D({children:t,variant:e="default",type:s="button",disabled:r,title:i,onClick:n}){return d("button",{type:s,class:Ri(e),disabled:r,title:i,onClick:n,children:t})}function Hi(t){return d(D,{...t,variant:"danger"})}function z({title:t,children:e,class:s}){return d("section",{class:s?`card ${s}`:"card",children:[t?d("h2",{children:t}):null,e]})}const yt=2e3,Di=12e4;function Ii(){const[t,e]=$("idle"),s=ht(0);F(()=>{if(t!=="rebooting")return;let a=!1,o;const l=()=>{Tr().then(h=>{if(!a){if(h.ok){e("ready");return}if(s.current+=1,s.current*yt>=Di){e("timeout");return}o=window.setTimeout(l,yt)}})};return o=window.setTimeout(l,yt),()=>{a=!0,o!==void 0&&window.clearTimeout(o)}},[t]);const r=H(()=>{s.current=0,e("rebooting")},[]),i=H(()=>e("idle"),[]),n=H(()=>{s.current=0,e("rebooting")},[]);return zt(()=>({phase:t,start:r,dismiss:i,retry:n}),[t,r,i,n])}function Oi({flow:t}){return t.phase==="idle"?null:d("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:d("div",{class:"reboot-dialog card",children:[d("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?d(q,{children:[d("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),d("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?d(q,{children:[d(C,{kind:"success",message:"The device is back online."}),d("div",{class:"form-actions",children:d(D,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?d(q,{children:[d(C,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),d("div",{class:"form-actions",children:[d(D,{onClick:t.retry,children:"Keep waiting"}),d(D,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const Li=1e4;function qi(t){const e=Math.max(0,Math.floor(t)),s=Math.floor(e/86400),r=Math.floor(e%86400/3600),i=Math.floor(e%3600/60),n=e%60,a=[];return s&&a.push(`${s}d`),(s||r)&&a.push(`${r}h`),(s||r||i)&&a.push(`${i}m`),a.push(`${n}s`),a.join(" ")}function zi(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function Fi(){const[t,e]=$(null),[s,r]=$(null),[i,n]=$(!1),[a,o]=$(null),[l,h]=$(null),[u,p]=$(!0),[c,f]=$(null),[g,w]=$(!1),S=Ii(),m=H(async()=>{const E=await Mr();E.ok?(e(E.data),r(null)):r(E.message),n(!0)},[]),b=H(async()=>{p(!0);const[E,I]=await Promise.all([Tr(),xi()]);o(E),h(I),p(!1)},[]);F(()=>{m();const E=window.setInterval(()=>{m()},Li);return()=>window.clearInterval(E)},[m]),F(()=>{b()},[b]);const y=H(async()=>{if(!window.confirm("Reboot the device now? It will be offline for about 20-60 seconds."))return;f(null),w(!0);const I=await Pi();w(!1),I.ok?S.start():f(I.message)},[S.start]),N=u&&!a?d("p",{class:"muted",children:"Checking device health…"}):a?a.ok?d(C,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):d(C,{kind:"error",message:a.message}):null,R=l?l.ok?d(C,{kind:l.data.ready?"success":"info",message:l.data.ready?"All registered services are ready.":`Not ready: ${l.data.message}`}):l.status===500?d(C,{kind:"info",message:`Not ready: ${l.message}`}):d(C,{kind:"error",message:l.message}):null;return d("div",{class:"stack",children:[d(z,{title:"Device",children:[i?s?d(q,{children:[d(C,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(D,{onClick:()=>{m()},children:"Retry"})})]}):t?d("dl",{class:"kv",children:[d("dt",{children:"Firmware"}),d("dd",{children:t.fwVersion??"—"}),d("dt",{children:"Free heap"}),d("dd",{children:zi(t.freeHeap)}),d("dt",{children:"Uptime"}),d("dd",{children:qi(t.uptime)}),d("dt",{children:"Last reset reason"}),d("dd",{children:t.lastResetReason})]}):null:d("p",{class:"muted",children:"Loading status…"}),d("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),d(z,{title:"Health",children:[N,R,d("div",{class:"form-actions",children:d(D,{onClick:()=>{b()},disabled:u,children:u?"Checking…":"Refresh health"})})]}),d(z,{title:"Maintenance",children:[d("p",{class:"muted",children:"A reboot briefly interrupts the device. Configuration changes saved on the other tabs only take effect after a reboot."}),c?d(C,{kind:"error",message:c,onClose:()=>f(null)}):null,d("div",{class:"form-actions",children:d(Hi,{onClick:()=>{y()},disabled:g||S.phase!=="idle",children:"Reboot device"})})]}),d(Oi,{flow:S})]})}function Wi(){const t=ht(null);return F(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),d("div",{ref:t})}const Bi={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:""};function ji(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>_.mqtt.hostMax&&(e.host=`At most ${_.mqtt.hostMax} characters.`);const s=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(s)||s<1||s>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>_.mqtt.loginMax&&(e.login=`At most ${_.mqtt.loginMax} characters.`),t.password.length>_.mqtt.passwordMax&&(e.password=`At most ${_.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>_.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${_.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>_.mqtt.topicMax&&(e.stateTopic=`At most ${_.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>_.mqtt.topicMax&&(e.commandTopic=`At most ${_.mqtt.topicMax} characters.`),e}function Vi(t){return Object.keys(t).length>0}function ie({label:t,value:e,onInput:s,type:r="text",min:i,max:n,maxLength:a,autoComplete:o,error:l,help:h}){return d("label",{class:"field",children:[d("span",{class:"field-label",children:t}),d("input",{type:r,value:e,min:i,max:n,maxLength:a,autoComplete:o,"aria-invalid":l?!0:void 0,onInput:u=>s(u.currentTarget.value)}),h&&!l?d("span",{class:"field-help",children:h}):null,l?d("span",{class:"field-error",children:l}):null]})}function Ji({label:t,value:e,onInput:s,maxLength:r,error:i}){const[n,a]=$(!1);return d("div",{class:"password-field",children:[d(ie,{label:t,value:e,onInput:s,type:n?"text":"password",maxLength:r,autoComplete:"new-password",error:i}),d("button",{type:"button",class:"btn reveal-toggle","aria-pressed":n,onClick:()=>a(o=>!o),children:n?"Hide":"Show"})]})}function Ki({label:t,checked:e,onChange:s}){return d("div",{class:"checkbox-field",children:d("label",{class:"checkbox-label",children:[d("input",{type:"checkbox",checked:e,onChange:r=>s(r.currentTarget.checked)}),d("span",{children:t})]})})}function Qi(){const[t,e]=$(!1),[s,r]=$(null),[i,n]=$(Bi),[a,o]=$({}),[l,h]=$(!1),[u,p]=$(null),[c,f]=$(null),g=H(async()=>{r(null);const m=await Ci();m.ok?n({host:m.data.mqttHost,port:String(m.data.mqttPort),login:m.data.mqttLogin,password:m.data.mqttPassword,haDiscoveryPrefix:m.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:m.data.mqttIsHADiscovery,stateTopic:m.data.mqttStateTopic,commandTopic:m.data.mqttCommandTopic}):r(m.message),e(!0)},[]);F(()=>{g()},[g]);const w=m=>n(b=>({...b,...m})),S=H(async m=>{m.preventDefault();const b=ji(i);if(o(b),p(null),f(null),!Vi(b)){h(!0);try{const y=await Mi({host:i.host,port:Number(i.port),login:i.login,password:i.password,haDiscoveryPrefix:i.haDiscoveryPrefix,mqttIsHADiscovery:i.mqttIsHADiscovery,stateTopic:i.stateTopic,commandTopic:i.commandTopic});y.ok?p("MQTT settings saved to flash."):f(y.message)}catch(y){f(y instanceof Error?y.message:String(y))}h(!1)}},[i]);return t?d("div",{class:"stack",children:[d(C,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."}),s?d(q,{children:[d(C,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(D,{onClick:()=>{g()},children:"Retry"})})]}):null,d(z,{title:"MQTT",children:d("form",{onSubmit:S,children:[d(ie,{label:"Host",value:i.host,onInput:m=>w({host:m}),maxLength:_.mqtt.hostMax,autoComplete:"off",error:a.host}),d(ie,{label:"Port",value:i.port,onInput:m=>w({port:m}),type:"number",min:1,max:65535,error:a.port}),d(ie,{label:"Login",value:i.login,onInput:m=>w({login:m}),maxLength:_.mqtt.loginMax,autoComplete:"off",error:a.login}),d(Ji,{label:"Password",value:i.password,onInput:m=>w({password:m}),maxLength:_.mqtt.passwordMax,error:a.password}),d(ie,{label:"HA discovery prefix",value:i.haDiscoveryPrefix,onInput:m=>w({haDiscoveryPrefix:m}),maxLength:_.mqtt.haDiscoveryPrefixMax,autoComplete:"off",error:a.haDiscoveryPrefix}),d(Ki,{label:"Enable Home Assistant discovery",checked:i.mqttIsHADiscovery,onChange:m=>w({mqttIsHADiscovery:m})}),d(ie,{label:"State topic",value:i.stateTopic,onInput:m=>w({stateTopic:m}),maxLength:_.mqtt.topicMax,autoComplete:"off",error:a.stateTopic,help:"Must not be empty: the device crashes on a missing state topic."}),d(ie,{label:"Command topic",value:i.commandTopic,onInput:m=>w({commandTopic:m}),maxLength:_.mqtt.topicMax,autoComplete:"off",error:a.commandTopic,help:"Must not be empty: the device crashes on a missing command topic."}),u?d(C,{kind:"success",message:u,onClose:()=>p(null)}):null,c?d(C,{kind:"error",message:c,onClose:()=>f(null)}):null,d("div",{class:"form-actions",children:d(D,{type:"submit",variant:"primary",disabled:l,children:l?"Saving…":"Save MQTT"})})]})})]}):d(z,{title:"MQTT",children:d("p",{class:"muted",children:"Loading MQTT settings…"})})}const Zi={modbusSpeed:String(_.modbus.speeds[0]),map12eAddress:""};function Yi(t){const e={};if(t.map12eAddress.trim()==="")e.map12eAddress="Address is required.";else{const s=Number(t.map12eAddress);(!Number.isInteger(s)||s<_.modbus.addressMin||s>_.modbus.addressMax)&&(e.map12eAddress=`Address must be an integer between ${_.modbus.addressMin} and ${_.modbus.addressMax}.`)}return e}function Gi(t){return Object.keys(t).length>0}function Xi({label:t,value:e,onInput:s,type:r="text",min:i,max:n,error:a,help:o}){return d("label",{class:"field",children:[d("span",{class:"field-label",children:t}),d("input",{type:r,value:e,min:i,max:n,"aria-invalid":a?!0:void 0,onInput:l=>s(l.currentTarget.value)}),o&&!a?d("span",{class:"field-help",children:o}):null,a?d("span",{class:"field-error",children:a}):null]})}function en({label:t,value:e,options:s,onChange:r}){return d("label",{class:"field",children:[d("span",{class:"field-label",children:t}),d("select",{value:e,onChange:i=>r(i.currentTarget.value),children:s.map(i=>d("option",{value:String(i),children:[i," baud"]},i))})]})}function tn(){const[t,e]=$(!1),[s,r]=$(null),[i,n]=$(Zi),[a,o]=$({}),[l,h]=$(null),[u,p]=$(!1),[c,f]=$(null),[g,w]=$(null),S=H(async()=>{r(null);const y=await Ti();y.ok?(n({modbusSpeed:String(y.data.modbusSpeed),map12eAddress:String(y.data.map12eAddress)}),h(y.data.map12eAddress)):r(y.message),e(!0)},[]);F(()=>{S()},[S]);const m=y=>n(N=>({...N,...y})),b=H(async y=>{y.preventDefault();const N=Yi(i);if(o(N),f(null),w(null),Gi(N))return;const R=Number(i.map12eAddress);p(!0);try{const E=await Ui({modbusSpeed:Number(i.modbusSpeed),map12eAddress:R});if(E.ok){n({modbusSpeed:String(E.data.modbusSpeed),map12eAddress:String(E.data.map12eAddress)});const I=R!==l;h(E.data.map12eAddress),f(I?"Modbus settings saved. The new speed is applied now; the address takes effect only after a reboot.":"Modbus settings saved. The new speed is applied now.")}else w(E.message)}catch(E){w(E instanceof Error?E.message:String(E))}p(!1)},[i,l]);return t?d("div",{class:"stack",children:[s?d(q,{children:[d(C,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(D,{onClick:()=>{S()},children:"Retry"})})]}):null,d(z,{title:"Modbus",children:d("form",{onSubmit:b,children:[d(en,{label:"RS-485 speed",value:i.modbusSpeed,options:_.modbus.speeds,onChange:y=>m({modbusSpeed:y})}),d(Xi,{label:"WB-MAP12E address",value:i.map12eAddress,onInput:y=>m({map12eAddress:y}),type:"number",min:_.modbus.addressMin,max:_.modbus.addressMax,error:a.map12eAddress,help:`Modbus unit id ${_.modbus.addressMin}-${_.modbus.addressMax}.`}),c?d(C,{kind:"success",message:c,onClose:()=>f(null)}):null,g?d(C,{kind:"error",message:g,onClose:()=>w(null)}):null,d("div",{class:"form-actions",children:d(D,{type:"submit",variant:"primary",disabled:u,children:u?"Saving…":"Save Modbus"})})]})})]}):d(z,{title:"Modbus",children:d("p",{class:"muted",children:"Loading Modbus settings…"})})}const sn="—";function Ss(t){return t===null||!Number.isFinite(t)?sn:`${t.toFixed(2)} kWh`}function Es(t){return Object.keys(t).length>0}function ks({label:t,value:e,onInput:s,type:r="text",min:i,max:n,step:a,error:o,help:l}){return d("label",{class:"field",children:[d("span",{class:"field-label",children:t}),d("input",{type:r,value:e,min:i,max:n,step:a,"aria-invalid":o?!0:void 0,onInput:h=>s(h.currentTarget.value)}),l&&!o?d("span",{class:"field-help",children:l}):null,o?d("span",{class:"field-error",children:o}):null]})}function rn(){const[t,e]=$(!1),[s,r]=$(null),[i,n]=$(null),[a,o]=$(""),[l,h]=$({}),[u,p]=$(!1),[c,f]=$(null),[g,w]=$(null),[S,m]=$(""),[b,y]=$({}),[N,R]=$(!1),[E,I]=$(null),[ee,J]=$(null),[O,W]=$(!1),bt=H(async()=>{r(null);const L=await ws();L.ok?(n(L.data),o(String(L.data.energySyncValue)),m(String(L.data.ct1Ratio))):r(L.message),e(!0)},[]);F(()=>{bt()},[bt]);const di=H(async()=>{W(!0);const L=await ws();L.ok?(n(L.data),r(null)):r(L.message),W(!1)},[]),ci=H(async L=>{L.preventDefault(),f(null),w(null);const B={},K=Number(a);if(a.trim()===""?B.sync="Supplier reading is required.":(!Number.isFinite(K)||K<_.meter.syncMin)&&(B.sync="Must be a number greater than or equal to 0."),h(B),!Es(B)){p(!0);try{const U=await As({energySyncValue:K});U.ok?(n(U.data),o(String(U.data.energySyncValue)),f("Sync saved. Future readings continue from the entered value; the meter counter itself is not reset.")):w(U.message)}catch(U){w(U instanceof Error?U.message:String(U))}p(!1)}},[a]),hi=H(async L=>{L.preventDefault(),I(null),J(null);const B={},K=Number(S);if(S.trim()===""?B.ratio="CT ratio is required.":(!Number.isInteger(K)||K<_.meter.ctRatioMin||K>_.meter.ctRatioMax)&&(B.ratio=`Must be an integer between ${_.meter.ctRatioMin} and ${_.meter.ctRatioMax}.`),y(B),!Es(B)){R(!0);try{const U=await As({ct1Ratio:K});U.ok?(n(U.data),m(String(U.data.ct1Ratio)),I("CT ratio written to the meter and applied immediately. Re-sync the supplier energy afterwards.")):J(U.message)}catch(U){J(U instanceof Error?U.message:String(U))}R(!1)}},[S]);return t?d("div",{class:"stack",children:[s?d(q,{children:[d(C,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(D,{onClick:()=>{bt()},children:"Retry"})})]}):null,d(z,{title:"Supplier energy sync",children:[d("dl",{class:"kv",children:[d("dt",{children:"Meter energy"}),d("dd",{children:Ss(i?.meterEnergy??null)}),d("dt",{children:"Supplier energy"}),d("dd",{children:Ss(i?.supplierEnergy??null)})]}),d("p",{class:"muted mt",children:"Meter counters are read-only and cannot be reset by the firmware. A sync stores the entered supplier kWh reading together with the device counter at that moment, so Home Assistant reports the entered value plus consumption since the sync."}),d("form",{onSubmit:ci,class:"mt",children:[d(ks,{label:"Supplier reading, kWh",value:a,onInput:o,type:"number",min:_.meter.syncMin,step:"0.01",error:l.sync}),c?d(C,{kind:"success",message:c,onClose:()=>f(null)}):null,g?d(C,{kind:"error",message:g,onClose:()=>w(null)}):null,d("div",{class:"form-actions",children:[d(D,{type:"submit",variant:"primary",disabled:u,children:u?"Syncing…":"Sync"}),d(D,{onClick:()=>{di()},disabled:O,children:O?"Refreshing…":"Refresh"})]})]})]}),d(z,{title:"Current transformer",children:d("form",{onSubmit:hi,children:[d(ks,{label:"CT1 ratio",value:S,onInput:m,type:"number",min:_.meter.ctRatioMin,max:_.meter.ctRatioMax,error:b.ratio,help:"Integer 0-65535. 0 disables the ratio (direct measurement)."}),d("p",{class:"muted",children:"The ratio is written to the meter immediately and applied by the meter itself to current, power and energy. Re-sync the supplier energy after changing it."}),E?d(C,{kind:"success",message:E,onClose:()=>I(null)}):null,ee?d(C,{kind:"error",message:ee,onClose:()=>J(null)}):null,d("div",{class:"form-actions",children:d(D,{type:"submit",variant:"primary",disabled:N,children:N?"Saving…":"Save ratio"})})]})})]}):d(z,{title:"Meter",children:d("p",{class:"muted",children:"Loading meter settings…"})})}const nn="Download a zip of everything the device has stored: config.bin. It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e faraday -t uploadfs) ERASE LittleFS, so /config.bin is gone.",an="Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.",on="Uploading this archive REPLACES config.bin on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",ln="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function dn(){const t=ht(null);return F(()=>{const e=document.createElement("edc-config-backup-page");return e.setAttribute("device-name","Faraday"),e.setAttribute("archive-file-name","faraday-config.zip"),e.setAttribute("zip-notes",nn),e.setAttribute("bin-notes",an),e.setAttribute("zip-confirm-text",on),e.setAttribute("bin-confirm-text",ln),t.current?.append(e),()=>e.remove()},[]),d("div",{ref:t})}function cn(){const t=ht(null);return F(()=>{const e=document.createElement("edu-log-settings-page");return e.setAttribute("device-name","Faraday"),t.current?.append(e),()=>e.remove()},[]),d("div",{ref:t})}const hn=[{id:"status",label:"Status"},{id:"network",label:"Network"},{id:"mqtt",label:"MQTT"},{id:"modbus",label:"Modbus"},{id:"meter",label:"Meter"},{id:"config",label:"Config"},{id:"logger",label:"Log"}];function un(t){switch(t){case"status":return d(Fi,{});case"network":return d(Wi,{});case"mqtt":return d(Qi,{});case"modbus":return d(tn,{});case"meter":return d(rn,{});case"config":return d(dn,{});case"logger":return d(cn,{})}}function pn(){const[t,e]=$("status"),[s,r]=$(null);return F(()=>{let i=!0;return Mr().then(n=>{i&&n.ok&&n.data.fwVersion&&r(n.data.fwVersion)}),()=>{i=!1}},[]),d(q,{children:[d("header",{class:"app-header",children:d("div",{class:"brand",children:[d("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:d("path",{fill:"currentColor",d:"M13 2 4.5 13.2h5.2L8 22l9-12.1h-5.4z"})}),d("h1",{children:"Faraday"})]})}),d(Ni,{tabs:hn,active:t,onSelect:e}),d("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:un(t)}),d("footer",{class:"app-footer",children:d("div",{class:"versions",children:[d("span",{class:"hint",children:"offline device panel"}),d("span",{class:"hint version",children:["FW ",s??"—"]}),d("span",{class:"hint version",children:["UI ","c2d3ded-dirty"]})]})})]})}function fn(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function Ur(t={}){let e=t.baseUrl??"",s=t.headers??{};async function r(i,n){let a;try{a=await fetch(`${e}${i}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...s}})}catch(u){return n?.signal?.aborted===!0||typeof u=="object"&&u&&u.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let o=await a.text().catch(()=>""),l,h=!1;if(o.length>0)try{l=JSON.parse(o),h=!0}catch{h=!1}if(!a.ok){let u=fn(l);return{ok:!1,status:a.status,message:u??`Request failed with HTTP ${a.status}.`}}return h?{ok:!0,data:l}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(i){return r("/api/network/settings",{signal:i})},saveSettings(i,n){return r("/api/network/settings",{method:"POST",body:JSON.stringify(i),signal:n})},getStatus(i){return r("/api/network/status",{signal:i})},wifiList(i){return r("/api/wifi/list",{signal:i})}}}var et=globalThis,jt=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vt=Symbol(),xs=new WeakMap,Nr=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==Vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(jt&&e===void 0){let r=s!==void 0&&s.length===1;r&&(e=xs.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&xs.set(s,e))}return e}toString(){return this.cssText}},mn=t=>new Nr(typeof t=="string"?t:t+"",void 0,Vt),Jt=(t,...e)=>new Nr(t.length===1?t[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,Vt),_n=(t,e)=>{if(jt)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=et.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},Ps=jt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return mn(s)})(t):t,{is:gn,defineProperty:bn,getOwnPropertyDescriptor:$n,getOwnPropertyNames:vn,getOwnPropertySymbols:yn,getPrototypeOf:wn}=Object,ut=globalThis,Cs=ut.trustedTypes,An=Cs?Cs.emptyScript:"",Sn=ut.reactiveElementPolyfillSupport,Re=(t,e)=>t,Mt={toAttribute(t,e){switch(e){case Boolean:t=t?An:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Rr=(t,e)=>!gn(t,e),Ms={attribute:!0,type:String,converter:Mt,reflect:!1,useDefault:!1,hasChanged:Rr};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;var $e=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Ms){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,s);i!==void 0&&bn(this.prototype,e,i)}}static getPropertyDescriptor(e,s,r){let{get:i,set:n}=$n(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){let o=i?.call(this);n?.call(this,a),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ms}static _$Ei(){if(this.hasOwnProperty(Re("elementProperties")))return;let e=wn(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Re("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Re("properties"))){let s=this.properties,r=[...vn(s),...yn(s)];for(let i of r)this.createProperty(i,s[i])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)s.unshift(Ps(i))}else e!==void 0&&s.push(Ps(e));return s}static _$Eu(e,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _n(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$ET(e,s){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute===void 0?Mt:r.converter).toAttribute(s,r.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,s){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Mt:n.converter;this._$Em=i;let o=a.fromAttribute(s,n.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(e,s,r,i=!1,n){if(e!==void 0){let a=this.constructor;if(i===!1&&(n=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??Rr)(n,s)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??s??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(s=void 0),this._$AL.set(e,s)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:a}=n,o=this[i];a!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,n,o)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};$e.elementStyles=[],$e.shadowRootOptions={mode:"open"},$e[Re("elementProperties")]=new Map,$e[Re("finalized")]=new Map,Sn?.({ReactiveElement:$e}),(ut.reactiveElementVersions??=[]).push("2.1.2");var Kt=globalThis,Ts=t=>t,at=Kt.trustedTypes,Us=at?at.createPolicy("lit-html",{createHTML:t=>t}):void 0,Hr="$lit$",Z=`lit$${Math.random().toFixed(9).slice(2)}$`,Dr="?"+Z,En=`<${Dr}>`,me=document,ze=()=>me.createComment(""),Fe=t=>t===null||typeof t!="object"&&typeof t!="function",Qt=Array.isArray,kn=t=>Qt(t)||typeof t?.[Symbol.iterator]=="function",wt=`[ 	
\f\r]`,Ce=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ns=/-->/g,Rs=/>/g,te=RegExp(`>|${wt}(?:([^\\s"'>=/]+)(${wt}*=${wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hs=/'/g,Ds=/"/g,Ir=/^(?:script|style|textarea|title)$/i,v=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),we=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Is=new WeakMap,ne=me.createTreeWalker(me,129);function Or(t,e){if(!Qt(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Us===void 0?e:Us.createHTML(e)}var xn=(t,e)=>{let s=t.length-1,r=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Ce;for(let o=0;o<s;o++){let l=t[o],h,u,p=-1,c=0;for(;c<l.length&&(a.lastIndex=c,u=a.exec(l),u!==null);)c=a.lastIndex,a===Ce?u[1]==="!--"?a=Ns:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=te):(Ir.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=te):a=Rs:a===te?u[0]===">"?(a=i??Ce,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?te:u[3]==='"'?Ds:Hs):a===Ds||a===Hs?a=te:a===Ns||a===Rs?a=Ce:(a=te,i=void 0);let f=a===te&&t[o+1].startsWith("/>")?" ":"";n+=a===Ce?l+En:p>=0?(r.push(h),l.slice(0,p)+Hr+l.slice(p)+Z+f):l+Z+(p===-2?o:f)}return[Or(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Tt=class Lr{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,o=e.length-1,l=this.parts,[h,u]=xn(e,s);if(this.el=Lr.createElement(h,r),ne.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=ne.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Hr)){let c=u[a++],f=i.getAttribute(p).split(Z),g=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:g[2],strings:f,ctor:g[1]==="."?Cn:g[1]==="?"?Mn:g[1]==="@"?Tn:pt}),i.removeAttribute(p)}else p.startsWith(Z)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(Ir.test(i.tagName)){let p=i.textContent.split(Z),c=p.length-1;if(c>0){i.textContent=at?at.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],ze()),ne.nextNode(),l.push({type:2,index:++n});i.append(p[c],ze())}}}else if(i.nodeType===8)if(i.data===Dr)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(Z,p+1))!==-1;)l.push({type:7,index:n}),p+=Z.length-1}n++}}static createElement(e,s){let r=me.createElement("template");return r.innerHTML=e,r}};function Ae(t,e,s=t,r){if(e===we)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Fe(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=Ae(t,i._$AS(t,e.values),i,r)),e}var Pn=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:r}=this._$AD,i=(e?.creationScope??me).importNode(s,!0);ne.currentNode=i;let n=ne.nextNode(),a=0,o=0,l=r[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new Zt(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Un(n,this,e)),this._$AV.push(h),l=r[++o]}a!==l?.index&&(n=ne.nextNode(),a++)}return ne.currentNode=me,i}p(e){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(e[s]):(r._$AI(e,r,s),s+=r.strings.length-2)),s++}},Zt=class qr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Ae(this,e,s),Fe(e)?e===A||e==null||e===""?(this._$AH!==A&&this._$AR(),this._$AH=A):e!==this._$AH&&e!==we&&this._(e):e._$litType$===void 0?e.nodeType===void 0?kn(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==A&&Fe(this._$AH)?this._$AA.nextSibling.data=e:this.T(me.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Tt.createElement(Or(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new Pn(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(e){let s=Is.get(e.strings);return s===void 0&&Is.set(e.strings,s=new Tt(e)),s}k(e){Qt(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of e)i===s.length?s.push(r=new qr(this.O(ze()),this.O(ze()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=Ts(e).nextSibling;Ts(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},pt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,i,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}_$AI(e,s=this,r,i){let n=this.strings,a=!1;if(n===void 0)e=Ae(this,e,s,0),a=!Fe(e)||e!==this._$AH&&e!==we,a&&(this._$AH=e);else{let o=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Ae(this,o[r+l],s,l),h===we&&(h=this._$AH[l]),a||=!Fe(h)||h!==this._$AH[l],h===A?e=A:e!==A&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!i&&this.j(e)}j(e){e===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Cn=class extends pt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===A?void 0:e}},Mn=class extends pt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==A)}},Tn=class extends pt{constructor(e,s,r,i,n){super(e,s,r,i,n),this.type=5}_$AI(e,s=this){if((e=Ae(this,e,s,0)??A)===we)return;let r=this._$AH,i=e===A&&r!==A||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==A&&(r===A||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Un=class{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ae(this,e)}},Nn=Kt.litHtmlPolyfillSupport;Nn?.(Tt,Zt),(Kt.litHtmlVersions??=[]).push("3.3.3");var Rn=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new Zt(e.insertBefore(ze(),n),n,void 0,s??{})}return i._$AI(t),i},Yt=globalThis,le=class extends $e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Rn(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return we}};le._$litElement$=!0,le.finalized=!0,Yt.litElementHydrateSupport?.({LitElement:le});var Hn=Yt.litElementPolyfillSupport;Hn?.({LitElement:le}),(Yt.litElementVersions??=[]).push("4.2.2");var Dn={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function In(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function On(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function Ln(t){let e=s=>String(s).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var de,qn=(de=class extends le{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return v`
      <div class="card">
        <header class="head">
          ${e?v`<span class="badge badge-${e.mode}">${Dn[e.mode]}</span>`:v`<span class="badge badge-unknown">Unknown</span>`}
          ${e?v`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:A}
          ${this.loading?v`<span class="muted loading">Refreshing…</span>`:A}
        </header>

        ${e?.fallbackAP?v`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:A}
        ${this.errorMessage?v`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:A}
        ${e?this.renderSections(e):v`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?v`Updated ${Ln(this.lastUpdated)}`:v`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return v`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${In(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let s=e.ap;return v`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",s?.ssid)} ${this.row("IP address",s?.ip)}
          ${this.row("Stations",s?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let s=e.eth;return v`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",s?.ip)} ${this.row("MAC address",s?.mac)}
          ${this.row("Link",s===void 0?void 0:s.linkUp?"Up":"Down")}
          ${this.row("Speed",s===void 0?void 0:`${s.speed} Mbps`)}
          ${this.row("Duplex",s===void 0?void 0:On(s.duplex))}
        </dl>
      </section>
    `}row(e,s){return s===void 0||s===""?A:v`<dt>${e}</dt>
          <dd>${s}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Ur({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let s=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,s.ok){this.status=s.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=s.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:s.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},de.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},de.styles=Jt`
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
  `,de);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",qn);var Ke=32,Me=64,At=8,zn=5e3,Fn=new TextEncoder;function Qe(t){return Fn.encode(t).length}function Os(t){return t.isAPMode?"ap":"station"}var ce,Wn=(ce=class extends le{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=s=>{this.draftWifiSSID=s.target.value},this.handleWifiPasswordInput=s=>{this.draftWifiPassword=s.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=s=>{this.draftApSSID=s.target.value},this.handleApPasswordInput=s=>{this.draftApPassword=s.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=s=>{this.draftApHasPassword=s.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=s=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=s,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=s=>{s.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return v`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?v`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:A}
        ${this.successMessage?v`<div class="banner banner-success" role="status">${this.successMessage}</div>`:A}
        ${e?v`${this.renderForm(e)} ${this.renderScan()}`:this.loading?v`<p class="status">Loading settings…</p>`:v`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(e){return v`
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
          ${this.dirty?v`<span class="muted">Unsaved changes</span>`:A}
        </div>
      </form>
    `}renderStation(e){return v`
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
        ${e.hasWifiPassword?v`<p class="hint">Password saved •••• (leave blank to keep)</p>`:A}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(e){return v`
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
        ${this.draftApHasPassword?v`
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
              ${e.hasWifiAPPassword?v`<p class="hint">Password saved •••• (leave blank to keep)</p>`:A}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:A}
      </section>
    `}renderScan(){return v`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?v`<div class="banner banner-error" role="alert">${this.scanError}</div>`:A}
        ${this.scanResults.length>0?v`<ul class="networks">
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:A}
      </section>
    `}renderNetwork(e){return v`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?v`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:A}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let s=this.fieldErrors[e];return s?v`<p class="field-error" role="alert">${s}</p>`:A}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?v`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:A}get dirty(){let e=this.settings;return e?this.draftMode!==Os(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Ur({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let s=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,s.ok){this.applyServerSettings(s.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=s.message,this.emitError(s.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=Os(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,s={};if(!e)return s;let r=this.draftMode==="ap";if(Qe(this.draftWifiSSID)>Ke&&(s.wifiSSID=`Wi-Fi name must be ${Ke} characters or fewer.`),Qe(this.draftApSSID)>Ke&&(s.wifiAPSSID=`Access point name must be ${Ke} characters or fewer.`),r?this.draftApSSID.length===0&&(s.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(s.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&Qe(this.draftWifiPassword)>Me&&(s.wifiPassword=`Wi-Fi password must be ${Me} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let i=Qe(this.draftApPassword);(i<At||i>Me)&&(s.wifiAPPassword=`Access point password must be ${At}–${Me} characters.`)}else e.hasWifiAPPassword||(s.wifiAPPassword=`Enter an access point password (${At}–${Me} characters).`);return s}buildPatch(){let e=this.settings,s={};if(!e)return s;let r=this.draftMode==="ap";return r!==e.isAPMode&&(s.isAPMode=r),this.draftWifiSSID!==e.wifiSSID&&(s.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(s.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(s.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(s.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(s.wifiAPPassword=this.draftApPassword),s}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let s=this.buildPatch();if(Object.keys(s).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let r=await this.ensureClient().saveSettings(s);if(this.submitting=!1,r.ok){this.applyServerSettings(r.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:r.data,bubbles:!0,composed:!0}));return}let i=r.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":r.message;this.errorMessage=i,this.emitError(i)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let s,r=new Promise(n=>{s=setTimeout(()=>{e.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},zn)}),i=await Promise.race([this.ensureClient().wifiList(e.signal),r]);if(s!==void 0&&clearTimeout(s),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,i.ok){this.scanResults=[...i.data.networks].sort((n,a)=>a.rssi-n.rssi);return}i.message!=="Request aborted."&&(this.scanError=i.message,this.emitError(i.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},ce.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},ce.styles=Jt`
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
  `,ce);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Wn);var Bn=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],he,jn=(he=class extends le{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return v`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Bn.map(e=>v`
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
    `}renderActive(){return this.activeTab==="settings"?v`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:v`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},he.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},he.styles=Jt`
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
  `,he);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",jn);var zr="Network request failed. Check the device connection and try again.",Vn={};function Jn(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function Kn(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function Fr(t,e){return Kn(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:zr}}async function Wr(t,e){let s=e;try{let r=await t.text();if(r.length>0)try{s=Jn(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}async function Ls(t,e,s,r,i,n){let a;try{a=await fetch(t,{headers:{Accept:e,...i},signal:n})}catch(l){return Fr(l,n)}if(!a.ok)return Wr(a,a.status===404?r:`Request failed with HTTP ${a.status}.`);let o;try{o=new Uint8Array(await a.arrayBuffer())}catch{return{ok:!1,status:a.status,message:zr}}return o.byteLength===0?{ok:!1,status:a.status,message:s}:{ok:!0,data:o}}async function qs(t,e,s,r,i){if(e.byteLength===0)return{ok:!1,message:s};let n=new ArrayBuffer(e.byteLength);new Uint8Array(n).set(e);let a;try{a=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...r},body:n,signal:i})}catch(o){return Fr(o,i)}return a.ok?(await a.text().catch(()=>""),{ok:!0,data:Vn}):Wr(a,`Upload failed with HTTP ${a.status}.`)}function Qn(t={}){let e=t.baseUrl??"",s=t.backupPath??"/api/config/backup",r=t.configPath??"/api/config",i=t.headers??{},n=`${e}${s}`,a=`${e}${r}`;return{downloadBackup(o){return Ls(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",i,o)},downloadConfig(o){return Ls(a,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",i,o)},uploadBackup(o,l){return qs(n,o,"Cannot upload an empty archive.",i,l)},uploadConfig(o,l){return qs(a,o,"Cannot upload an empty config file.",i,l)}}}var tt=globalThis,Gt=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xt=Symbol(),zs=new WeakMap,Br=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==Xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(Gt&&e===void 0){let r=s!==void 0&&s.length===1;r&&(e=zs.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&zs.set(s,e))}return e}toString(){return this.cssText}},Zn=t=>new Br(typeof t=="string"?t:t+"",void 0,Xt),Yn=(t,...e)=>new Br(t.length===1?t[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,Xt),Gn=(t,e)=>{if(Gt)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=tt.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},Fs=Gt?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return Zn(s)})(t):t,{is:Xn,defineProperty:ea,getOwnPropertyDescriptor:ta,getOwnPropertyNames:sa,getOwnPropertySymbols:ra,getPrototypeOf:ia}=Object,ft=globalThis,Ws=ft.trustedTypes,na=Ws?Ws.emptyScript:"",aa=ft.reactiveElementPolyfillSupport,He=(t,e)=>t,Ut={toAttribute(t,e){switch(e){case Boolean:t=t?na:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},jr=(t,e)=>!Xn(t,e),Bs={attribute:!0,type:String,converter:Ut,reflect:!1,useDefault:!1,hasChanged:jr};Symbol.metadata??=Symbol("metadata"),ft.litPropertyMetadata??=new WeakMap;var ve=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Bs){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(e,r,s);i!==void 0&&ea(this.prototype,e,i)}}static getPropertyDescriptor(e,s,r){let{get:i,set:n}=ta(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){let o=i?.call(this);n?.call(this,a),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Bs}static _$Ei(){if(this.hasOwnProperty(He("elementProperties")))return;let e=ia(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(He("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(He("properties"))){let s=this.properties,r=[...sa(s),...ra(s)];for(let i of r)this.createProperty(i,s[i])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let i of r)s.unshift(Fs(i))}else e!==void 0&&s.push(Fs(e));return s}static _$Eu(e,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$ET(e,s){let r=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute===void 0?Ut:r.converter).toAttribute(s,r.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,s){let r=this.constructor,i=r._$Eh.get(e);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Ut:n.converter;this._$Em=i;let o=a.fromAttribute(s,n.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(e,s,r,i=!1,n){if(e!==void 0){let a=this.constructor;if(i===!1&&(n=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??jr)(n,s)||r.useDefault&&r.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??s??this[e]),n!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(s=void 0),this._$AL.set(e,s)),i===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:a}=n,o=this[i];a!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,n,o)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};ve.elementStyles=[],ve.shadowRootOptions={mode:"open"},ve[He("elementProperties")]=new Map,ve[He("finalized")]=new Map,aa?.({ReactiveElement:ve}),(ft.reactiveElementVersions??=[]).push("2.1.2");var es=globalThis,js=t=>t,ot=es.trustedTypes,Vs=ot?ot.createPolicy("lit-html",{createHTML:t=>t}):void 0,Vr="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,Jr="?"+Y,oa=`<${Jr}>`,_e=document,We=()=>_e.createComment(""),Be=t=>t===null||typeof t!="object"&&typeof t!="function",ts=Array.isArray,la=t=>ts(t)||typeof t?.[Symbol.iterator]=="function",St=`[ 	
\f\r]`,Te=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Js=/-->/g,Ks=/>/g,se=RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qs=/'/g,Zs=/"/g,Kr=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),Se=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ys=new WeakMap,ae=_e.createTreeWalker(_e,129);function Qr(t,e){if(!ts(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vs===void 0?e:Vs.createHTML(e)}var da=(t,e)=>{let s=t.length-1,r=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Te;for(let o=0;o<s;o++){let l=t[o],h,u,p=-1,c=0;for(;c<l.length&&(a.lastIndex=c,u=a.exec(l),u!==null);)c=a.lastIndex,a===Te?u[1]==="!--"?a=Js:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=se):(Kr.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=se):a=Ks:a===se?u[0]===">"?(a=i??Te,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?se:u[3]==='"'?Zs:Qs):a===Zs||a===Qs?a=se:a===Js||a===Ks?a=Te:(a=se,i=void 0);let f=a===se&&t[o+1].startsWith("/>")?" ":"";n+=a===Te?l+oa:p>=0?(r.push(h),l.slice(0,p)+Vr+l.slice(p)+Y+f):l+Y+(p===-2?o:f)}return[Qr(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Nt=class Zr{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,o=e.length-1,l=this.parts,[h,u]=da(e,s);if(this.el=Zr.createElement(h,r),ae.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=ae.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Vr)){let c=u[a++],f=i.getAttribute(p).split(Y),g=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:g[2],strings:f,ctor:g[1]==="."?ha:g[1]==="?"?ua:g[1]==="@"?pa:mt}),i.removeAttribute(p)}else p.startsWith(Y)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(Kr.test(i.tagName)){let p=i.textContent.split(Y),c=p.length-1;if(c>0){i.textContent=ot?ot.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],We()),ae.nextNode(),l.push({type:2,index:++n});i.append(p[c],We())}}}else if(i.nodeType===8)if(i.data===Jr)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(Y,p+1))!==-1;)l.push({type:7,index:n}),p+=Y.length-1}n++}}static createElement(e,s){let r=_e.createElement("template");return r.innerHTML=e,r}};function Ee(t,e,s=t,r){if(e===Se)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Be(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=Ee(t,i._$AS(t,e.values),i,r)),e}var ca=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:r}=this._$AD,i=(e?.creationScope??_e).importNode(s,!0);ae.currentNode=i;let n=ae.nextNode(),a=0,o=0,l=r[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new ss(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new fa(n,this,e)),this._$AV.push(h),l=r[++o]}a!==l?.index&&(n=ae.nextNode(),a++)}return ae.currentNode=_e,i}p(e){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(e[s]):(r._$AI(e,r,s),s+=r.strings.length-2)),s++}},ss=class Yr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Ee(this,e,s),Be(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==Se&&this._(e):e._$litType$===void 0?e.nodeType===void 0?la(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&Be(this._$AH)?this._$AA.nextSibling.data=e:this.T(_e.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Nt.createElement(Qr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new ca(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(e){let s=Ys.get(e.strings);return s===void 0&&Ys.set(e.strings,s=new Nt(e)),s}k(e){ts(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of e)i===s.length?s.push(r=new Yr(this.O(We()),this.O(We()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=js(e).nextSibling;js(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},mt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(e,s=this,r,i){let n=this.strings,a=!1;if(n===void 0)e=Ee(this,e,s,0),a=!Be(e)||e!==this._$AH&&e!==Se,a&&(this._$AH=e);else{let o=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Ee(this,o[r+l],s,l),h===Se&&(h=this._$AH[l]),a||=!Be(h)||h!==this._$AH[l],h===x?e=x:e!==x&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!i&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ha=class extends mt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},ua=class extends mt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},pa=class extends mt{constructor(e,s,r,i,n){super(e,s,r,i,n),this.type=5}_$AI(e,s=this){if((e=Ee(this,e,s,0)??x)===Se)return;let r=this._$AH,i=e===x&&r!==x||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,n=e!==x&&(r===x||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},fa=class{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}},ma=es.litHtmlPolyfillSupport;ma?.(Nt,ss),(es.litHtmlVersions??=[]).push("3.3.3");var _a=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new ss(e.insertBefore(We(),n),n,void 0,s??{})}return i._$AI(t),i},rs=globalThis,De=class extends ve{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_a(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Se}};De._$litElement$=!0,De.finalized=!0,rs.litElementHydrateSupport?.({LitElement:De});var ga=rs.litElementPolyfillSupport;ga?.({LitElement:De}),(rs.litElementVersions??=[]).push("4.2.2");var Gs=2e3,ba=12e4,Xs="Unsupported file type. Choose a .zip full backup or a .bin config file.";function Et(t){let e=t.toLowerCase();return e.endsWith(".zip")?"archive":e.endsWith(".bin")?"config":null}function $a(t,e){if(typeof URL.createObjectURL!="function")return;let s=new ArrayBuffer(t.byteLength);new Uint8Array(s).set(t);let r=new Blob([s],{type:"application/octet-stream"}),i=URL.createObjectURL(r),n=document.createElement("a");n.href=i,n.download=e,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),0)}var ue,va=(ue=class extends De{constructor(...e){super(...e),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return j`
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
            ${this.fileError?j`<span class="field-error" role="alert">${this.fileError}</span>`:x}
          </label>
          ${this.selectedFile&&!this.fileError?j`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${Et(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:x}
          ${this.uploadError?j`<div class="banner banner-error" role="alert">
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
    `}renderNotice(e){return e?j`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.message}
    </div>`:x}renderRebootOverlay(){return this.phase==="idle"?x:j`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?j`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:x}
          ${this.phase==="ready"?j`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:x}
          ${this.phase==="timeout"?j`
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
    `}createClient(){return Qn({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(e){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let s=this.createClient(),r=e==="archive"?await s.downloadBackup():await s.downloadConfig();if(!r.ok){this.downloadNotice={kind:"error",message:r.message};return}let i=e==="archive"?this.archiveFileName:this.binFileName;$a(r.data,i),this.downloadNotice={kind:"info",message:e==="archive"?`Full backup downloaded as ${i}.`:`Config downloaded as ${i}.`}}finally{this.downloading=!1}}}handleFileChange(e){let s=e.currentTarget,r=s.files&&s.files[0]?s.files[0]:null;this.selectedFile=r,this.uploadError=null,this.fileError=r?r.size===0?"The selected file is empty.":r.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:Et(r.name)?null:Xs:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let e=Et(this.selectedFile.name);if(!e)this.uploadError=Xs;else if(window.confirm(e==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let s;try{s=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let r=this.createClient(),i=e==="archive"?await r.uploadBackup(s):await r.uploadConfig(s);if(!i.ok){this.uploadError=i.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:e},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let e=this.renderRoot.querySelector("#edc-restore-file");e&&(e.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},Gs)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let e=!1;try{let s=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(s.ok){let r=await s.json();e=!!r&&typeof r=="object"&&r.healty===!0}}catch{e=!1}this.isConnected&&this.phase==="rebooting"&&(e?this.phase="ready":(this._attempts+=1,this._attempts*Gs>=ba?this.phase="timeout":this.schedulePoll()))}},ue.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},ue.styles=Yn`
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
  `,ue);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",va);var er="Invalid settings response.";function ya(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function wa(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function Gr(t,e){return wa(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}async function Xr(t,e){let s=e;try{let r=await t.text();if(r.length>0)try{s=ya(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}function Aa(t){if(!t||typeof t!="object")return;let{host:e,uri:s,port:r,enabled:i}=t;if(typeof e=="string"&&typeof s=="string"&&typeof r=="number"&&Number.isFinite(r)&&typeof i=="boolean")return{host:e,uri:s,port:r,enabled:i}}async function ei(t){let e;try{e=await t.json()}catch{return{ok:!1,status:t.status,message:er}}let s=Aa(e);return s?{ok:!0,data:s}:{ok:!1,status:t.status,message:er}}async function Sa(t,e,s){let r;try{r=await fetch(t,{headers:{Accept:"application/json",...e},signal:s})}catch(i){return Gr(i,s)}return r.ok?ei(r):Xr(r,"Could not load the logger settings from the device.")}async function Ea(t,e,s,r){let i;try{i=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...s},body:JSON.stringify(e),signal:r})}catch(n){return Gr(n,r)}return i.ok?ei(i):Xr(i,"The device rejected the logger settings.")}function ka(t={}){let e=t.baseUrl??"",s=t.settingsPath??"/api/log/settings",r=t.headers??{},i=`${e}${s}`;return{getSettings(n){return Sa(i,r,n)},saveSettings(n,a){return Ea(i,n,r,a)}}}var st=globalThis,is=st.ShadowRoot&&(st.ShadyCSS===void 0||st.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ns=Symbol(),tr=new WeakMap,ti=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==ns)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(is&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=tr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&tr.set(e,t))}return t}toString(){return this.cssText}},xa=t=>new ti(typeof t=="string"?t:t+"",void 0,ns),Pa=(t,...e)=>new ti(t.length===1?t[0]:e.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[i+1],t[0]),t,ns),Ca=(t,e)=>{if(is)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let r=document.createElement("style"),i=st.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,t.appendChild(r)}},sr=is?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let r of e.cssRules)s+=r.cssText;return xa(s)})(t):t,{is:Ma,defineProperty:Ta,getOwnPropertyDescriptor:Ua,getOwnPropertyNames:Na,getOwnPropertySymbols:Ra,getPrototypeOf:Ha}=Object,_t=globalThis,rr=_t.trustedTypes,Da=rr?rr.emptyScript:"",Ia=_t.reactiveElementPolyfillSupport,Ie=(t,e)=>t,Rt={toAttribute(t,e){switch(e){case Boolean:t=t?Da:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},si=(t,e)=>!Ma(t,e),ir={attribute:!0,type:String,converter:Rt,reflect:!1,useDefault:!1,hasChanged:si};Symbol.metadata??=Symbol("metadata"),_t.litPropertyMetadata??=new WeakMap;var ye=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ir){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Ta(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:i}=Ua(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:r,set(n){let a=r?.call(this);i?.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ir}static _$Ei(){if(this.hasOwnProperty(Ie("elementProperties")))return;let t=Ha(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ie("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ie("properties"))){let e=this.properties,s=[...Na(e),...Ra(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(sr(r))}else t!==void 0&&e.push(sr(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ca(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute===void 0?Rt:s.converter).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute===void 0?Rt:i.converter;this._$Em=r;let a=n.fromAttribute(e,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(t,e,s,r=!1,i){if(t!==void 0){let n=this.constructor;if(r===!1&&(i=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??si)(i,e)||s.useDefault&&s.reflect&&i===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:r,wrapped:i},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),i!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),r===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:n}=i,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};ye.elementStyles=[],ye.shadowRootOptions={mode:"open"},ye[Ie("elementProperties")]=new Map,ye[Ie("finalized")]=new Map,Ia?.({ReactiveElement:ye}),(_t.reactiveElementVersions??=[]).push("2.1.2");var as=globalThis,nr=t=>t,lt=as.trustedTypes,ar=lt?lt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ri="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,ii="?"+G,Oa=`<${ii}>`,ge=document,je=()=>ge.createComment(""),Ve=t=>t===null||typeof t!="object"&&typeof t!="function",os=Array.isArray,La=t=>os(t)||typeof t?.[Symbol.iterator]=="function",kt=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,or=/-->/g,lr=/>/g,re=RegExp(`>|${kt}(?:([^\\s"'>=/]+)(${kt}*=${kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dr=/'/g,cr=/"/g,ni=/^(?:script|style|textarea|title)$/i,hr=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),ke=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),ur=new WeakMap,oe=ge.createTreeWalker(ge,129);function ai(t,e){if(!os(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return ar===void 0?e:ar.createHTML(e)}var qa=(t,e)=>{let s=t.length-1,r=[],i,n=e===2?"<svg>":e===3?"<math>":"",a=Ue;for(let o=0;o<s;o++){let l=t[o],h,u,p=-1,c=0;for(;c<l.length&&(a.lastIndex=c,u=a.exec(l),u!==null);)c=a.lastIndex,a===Ue?u[1]==="!--"?a=or:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=re):(ni.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=re):a=lr:a===re?u[0]===">"?(a=i??Ue,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?re:u[3]==='"'?cr:dr):a===cr||a===dr?a=re:a===or||a===lr?a=Ue:(a=re,i=void 0);let f=a===re&&t[o+1].startsWith("/>")?" ":"";n+=a===Ue?l+Oa:p>=0?(r.push(h),l.slice(0,p)+ri+l.slice(p)+G+f):l+G+(p===-2?o:f)}return[ai(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]},Ht=class oi{constructor({strings:e,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,o=e.length-1,l=this.parts,[h,u]=qa(e,s);if(this.el=oi.createElement(h,r),oe.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=oe.nextNode())!==null&&l.length<o;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(ri)){let c=u[a++],f=i.getAttribute(p).split(G),g=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:g[2],strings:f,ctor:g[1]==="."?Fa:g[1]==="?"?Wa:g[1]==="@"?Ba:gt}),i.removeAttribute(p)}else p.startsWith(G)&&(l.push({type:6,index:n}),i.removeAttribute(p));if(ni.test(i.tagName)){let p=i.textContent.split(G),c=p.length-1;if(c>0){i.textContent=lt?lt.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],je()),oe.nextNode(),l.push({type:2,index:++n});i.append(p[c],je())}}}else if(i.nodeType===8)if(i.data===ii)l.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(G,p+1))!==-1;)l.push({type:7,index:n}),p+=G.length-1}n++}}static createElement(e,s){let r=ge.createElement("template");return r.innerHTML=e,r}};function xe(t,e,s=t,r){if(e===ke)return e;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Ve(e)?void 0:e._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(t),i._$AT(t,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(e=xe(t,i._$AS(t,e.values),i,r)),e}var za=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=(t?.creationScope??ge).importNode(e,!0);oe.currentNode=r;let i=oe.nextNode(),n=0,a=0,o=s[0];for(;o!==void 0;){if(n===o.index){let l;o.type===2?l=new ls(i,i.nextSibling,this,t):o.type===1?l=new o.ctor(i,o.name,o.strings,this,t):o.type===6&&(l=new ja(i,this,t)),this._$AV.push(l),o=s[++a]}n!==o?.index&&(i=oe.nextNode(),n++)}return oe.currentNode=ge,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(t[e]):(s._$AI(t,s,e),e+=s.strings.length-2)),e++}},ls=class li{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,i){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=xe(this,e,s),Ve(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==ke&&this._(e):e._$litType$===void 0?e.nodeType===void 0?La(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==T&&Ve(this._$AH)?this._$AA.nextSibling.data=e:this.T(ge.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:r}=e,i=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=Ht.createElement(ai(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new za(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(e){let s=ur.get(e.strings);return s===void 0&&ur.set(e.strings,s=new Ht(e)),s}k(e){os(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of e)i===s.length?s.push(r=new li(this.O(je()),this.O(je()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let r=nr(e).nextSibling;nr(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},gt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T}_$AI(t,e=this,s,r){let i=this.strings,n=!1;if(i===void 0)t=xe(this,t,e,0),n=!Ve(t)||t!==this._$AH&&t!==ke,n&&(this._$AH=t);else{let a=t,o,l;for(t=i[0],o=0;o<i.length-1;o++)l=xe(this,a[s+o],e,o),l===ke&&(l=this._$AH[o]),n||=!Ve(l)||l!==this._$AH[o],l===T?t=T:t!==T&&(t+=(l??"")+i[o+1]),this._$AH[o]=l}n&&!r&&this.j(t)}j(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Fa=class extends gt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===T?void 0:t}},Wa=class extends gt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==T)}},Ba=class extends gt{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=xe(this,t,e,0)??T)===ke)return;let s=this._$AH,r=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==T&&(s===T||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},ja=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){xe(this,t)}},Va=as.litHtmlPolyfillSupport;Va?.(Ht,ls),(as.litHtmlVersions??=[]).push("3.3.3");var Ja=(t,e,s)=>{let r=s?.renderBefore??e,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new ls(e.insertBefore(je(),n),n,void 0,s??{})}return i._$AI(t),i},ds=globalThis,Oe=class extends ye{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ja(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ke}};Oe._$litElement$=!0,Oe.finalized=!0,ds.litElementHydrateSupport?.({LitElement:Oe});var Ka=ds.litElementPolyfillSupport;Ka?.({LitElement:Oe}),(ds.litElementVersions??=[]).push("4.2.2");var pe,Qa=(pe=class extends Oe{constructor(...e){super(...e),this.baseUrl="",this.settingsPath="/api/log/settings",this.deviceName="logger",this.maxHostLength=63,this.formHost="",this.formUri="",this.formPort="",this.formEnabled=!1,this.loading=!1,this.saving=!1,this.notice=null,this.loaded=!1,this._loadStarted=!1}connectedCallback(){super.connectedCallback(),this.load()}firstUpdated(){this._loadStarted||this.load()}render(){return hr`
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
    `}renderNotice(e){return e?hr`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.text}
    </div>`:T}createClient(){return ka({baseUrl:this.baseUrl,settingsPath:this.settingsPath})}async load(){if(!(this.loading||this.saving)){this._loadStarted=!0,this.loading=!0,this.notice=null;try{let e=await this.createClient().getSettings();if(!e.ok){this.notice={kind:"error",text:e.message};return}this.applySettings(e.data),this.loaded=!0}finally{this.loading=!1}}}applySettings(e){this.formHost=e.host,this.formUri=e.uri,this.formPort=String(e.port),this.formEnabled=e.enabled}handleHostInput(e){this.formHost=e.currentTarget.value}handleUriInput(e){this.formUri=e.currentTarget.value}handlePortInput(e){this.formPort=e.currentTarget.value}handleEnabledChange(e){this.formEnabled=e.currentTarget.checked}validate(){let e=this.formHost.trim(),s=this.formUri.trim();if(e.length===0)return"Host is required.";if(e.length>this.maxHostLength)return`Host must be ${this.maxHostLength} characters or fewer.`;if(s.length===0)return"URI is required.";if(s.length>this.maxHostLength)return`URI must be ${this.maxHostLength} characters or fewer.`;let r=this.formPort.trim();if(!/^\d+$/.test(r))return"Port must be a whole number between 1 and 65535.";let i=Number(r);return!Number.isInteger(i)||i<1||i>65535?"Port must be a whole number between 1 and 65535.":{host:e,uri:s,port:i,enabled:this.formEnabled}}async handleSave(){if(this.loading||this.saving)return;let e=this.validate();if(typeof e=="string")this.notice={kind:"error",text:e};else{this.saving=!0,this.notice=null;try{let s=await this.createClient().saveSettings(e);if(!s.ok){this.notice={kind:"error",text:s.message};return}this.applySettings(s.data),this.loaded=!0,this.notice={kind:"info",text:"Settings saved."},this.dispatchEvent(new CustomEvent("edu-log-saved",{detail:s.data,bubbles:!0,composed:!0}))}finally{this.saving=!1}}}},pe.properties={baseUrl:{type:String,attribute:"base-url"},settingsPath:{type:String,attribute:"settings-path"},deviceName:{type:String,attribute:"device-name"},maxHostLength:{type:Number,attribute:"max-host-length"},formHost:{state:!0},formUri:{state:!0},formPort:{state:!0},formEnabled:{state:!0},loading:{state:!0},saving:{state:!0},notice:{state:!0},loaded:{state:!0}},pe.styles=Pa`
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
  `,pe);typeof customElements<"u"&&!customElements.get("edu-log-settings-page")&&customElements.define("edu-log-settings-page",Qa);const pr=document.getElementById("app");pr&&$i(d(pn,{}),pr);
