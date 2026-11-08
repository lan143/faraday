(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();var de,k,fr,Z,cs,mr,_r,$e,Zt,Nt,gr,De,xe,Pe,re={},ie=[],ui=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,ce=Array.isArray;function V(e,t){for(var s in t)e[s]=t[s];return e}function Ie(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function pi(e,t,s){var r,i,n,a={};for(n in t)n=="key"?r=t[n]:n=="ref"?i=t[n]:a[n]=t[n];if(arguments.length>2&&(a.children=arguments.length>3?de.call(arguments,2):s),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)a[n]===void 0&&(a[n]=e.defaultProps[n]);return Yt(e,a,r,i,null)}function Yt(e,t,s,r,i){var n={type:e,props:t,key:s,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++fr,__i:-1,__u:0};return i==null&&k.vnode!=null&&k.vnode(n),n}function q(e){return e.children}function Gt(e,t){this.props=e,this.context=t}function mt(e,t){if(t==null)return e.__?mt(e.__,e.__i+1):null;for(var s;t<e.__k.length;t++)if((s=e.__k[t])!=null&&s.__e!=null)return s.__e;return typeof e.type=="function"?mt(e):null}function fi(e){if(e.__P&&e.__d){var t=e.__v,s=t.__e,r=[],i=[],n=V({},t);n.__v=t.__v+1,k.vnode&&k.vnode(n),Oe(e.__P,n,t,e.__n,e.__P.namespaceURI,32&t.__u?[s]:null,r,s??mt(t),!!(32&t.__u),i),n.__v=t.__v,n.__.__k[n.__i]=n,wr(r,n,i),t.__e=t.__=null,n.__e!=s&&br(n)}}function br(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),br(e)}function hs(e){(!e.__d&&(e.__d=!0)&&Z.push(e)&&!ne.__r++||cs!=k.debounceRendering)&&((cs=k.debounceRendering)||mr)(ne)}function ne(){try{for(var e,t=1;Z.length;)Z.length>t&&Z.sort(_r),e=Z.shift(),t=Z.length,fi(e)}finally{Z.length=ne.__r=0}}function $r(e,t,s,r,i,n,a,l,o,h,u){var p,c,f,g,y,S,m=r&&r.__k||ie,b=t.length;for(o=mi(s,t,m,o,b),p=0;p<b;p++)(f=s.__k[p])!=null&&(c=f.__i!=-1&&m[f.__i]||re,f.__i=p,S=Oe(e,f,c,i,n,a,l,o,h,u),g=f.__e,f.ref&&c.ref!=f.ref&&(c.ref&&Le(c.ref,null,f),u.push(f.ref,f.__c||g,f)),y==null&&g!=null&&(y=g),4&f.__u?(o=vr(f,o,e),c.__e&&(c.__e=null)):typeof f.type=="function"&&S!==void 0?o=S:g&&(o=g.nextSibling),f.__u&=-7);return s.__e=y,o}function mi(e,t,s,r,i){var n,a,l,o,h,u=s.length,p=u,c=0;for(e.__k=new Array(i),n=0;n<i;n++)(a=t[n])!=null&&typeof a!="boolean"&&typeof a!="function"?(typeof a=="string"||typeof a=="number"||typeof a=="bigint"||a.constructor==String?a=e.__k[n]=Yt(null,a,null,null,null):ce(a)?a=e.__k[n]=Yt(q,{children:a},null,null,null):a.constructor===void 0&&a.__b>0?a=e.__k[n]=Yt(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):e.__k[n]=a,o=n+c,a.__=e,a.__b=e.__b+1,l=null,(h=a.__i=_i(a,s,o,p))!=-1&&(p--,(l=s[h])&&(l.__u|=2)),l==null||l.__v==null?(h==-1&&(i>u?c--:i<u&&c++),typeof a.type!="function"&&(a.__u|=4)):h!=o&&(h==o-1?c--:h==o+1?c++:(h>o?c--:c++,a.__u|=4))):e.__k[n]=null;if(p)for(n=0;n<u;n++)(l=s[n])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=mt(l)),Sr(l,l));return r}function vr(e,t,s){var r,i;if(typeof e.type=="function"){for(r=e.__k,i=0;r&&i<r.length;i++)r[i]&&(r[i].__=e,t=vr(r[i],t,s));return t}e.__e!=t&&(t&&e.type&&!t.parentNode&&(t=mt(e)),t=s.insertBefore(e.__e,t||null));do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function _i(e,t,s,r){var i,n,a,l=e.key,o=e.type,h=t[s],u=h!=null&&(2&h.__u)==0;if(h===null&&l==null||u&&l==h.key&&o==h.type)return s;if(r>(u?1:0)){for(i=s-1,n=s+1;i>=0||n<t.length;)if((h=t[a=i>=0?i--:n++])!=null&&(2&h.__u)==0&&l==h.key&&o==h.type)return a}return-1}function us(e,t,s){t[0]=="-"?e.setProperty(t,s??""):e[t]=s==null?"":typeof s!="number"||ui.test(t)?s:s+"px"}function Jt(e,t,s,r,i){var n,a;t:if(t=="style")if(typeof s=="string")e.style.cssText=s;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)s&&t in s||us(e.style,t,"");if(s)for(t in s)r&&s[t]==r[t]||us(e.style,t,s[t])}else if(t[0]=="o"&&t[1]=="n")n=t!=(t=t.replace(gr,"$1")),a=t.toLowerCase(),t=a in e||t=="onFocusOut"||t=="onFocusIn"?a.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=s,s?r?s[Nt]=r[Nt]:(s[Nt]=De,e.addEventListener(t,n?Pe:xe,n)):e.removeEventListener(t,n?Pe:xe,n);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=s??"";break t}catch{}typeof s=="function"||(s==null||s===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&s==1?"":s))}}function ps(e){return function(t){if(this.l){var s=this.l[t.type+e];if(t[Zt]==null)t[Zt]=De++;else if(t[Zt]<s[Nt])return;return s(k.event?k.event(t):t)}}}function Oe(e,t,s,r,i,n,a,l,o,h){var u,p,c,f,g,y,S,m,b,w,N,R,E,I,et,J,O=t.type;if(t.constructor!==void 0)return null;128&s.__u&&(o=!!(32&s.__u),n=[l=t.__e=s.__e]),(u=k.__b)&&u(t);t:if(typeof O=="function"){p=a.length;try{if(b=t.props,w=O.prototype&&O.prototype.render,N=(u=O.contextType)&&r[u.__c],R=u?N?N.props.value:u.__:r,s.__c?m=(c=t.__c=s.__c).__=c.__E:(w?t.__c=c=new O(b,R):(t.__c=c=new Gt(b,R),c.constructor=O,c.render=bi),N&&N.sub(c),c.state||(c.state={}),c.__n=r,f=c.__d=!0,c.__h=[],c._sb=[]),w&&c.__s==null&&(c.__s=c.state),w&&O.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=V({},c.__s)),V(c.__s,O.getDerivedStateFromProps(b,c.__s))),g=c.props,y=c.state,c.__v=t,f)w&&O.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),w&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(w&&O.getDerivedStateFromProps==null&&b!==g&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(b,R),t.__v==s.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(b,c.__s,R)===!1){t.__v!=s.__v&&(c.props=b,c.state=c.__s,c.__d=!1),t.__e=s.__e,t.__k=s.__k,t.__k.some(function(W){W&&(W.__=t)}),ie.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&a.push(c),l=mt(s);break t}c.componentWillUpdate!=null&&c.componentWillUpdate(b,c.__s,R),w&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate(g,y,S)})}if(c.context=R,c.props=b,c.__P=e,c.__e=!1,E=k.__r,I=0,w)c.state=c.__s,c.__d=!1,E&&E(t),u=c.render(c.props,c.state,c.context),ie.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,E&&E(t),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++I<25);c.state=c.__s,c.getChildContext!=null&&(r=V(V({},r),c.getChildContext())),w&&!f&&c.getSnapshotBeforeUpdate!=null&&(S=c.getSnapshotBeforeUpdate(g,y)),et=u!=null&&u.type===q&&u.key==null?Ar(u.props.children):u,l=$r(e,ce(et)?et:[et],t,s,r,i,n,a,l,o,h),c.base=t.__e,t.__u&=-161,c.__h.length&&a.push(c),m&&(c.__E=c.__=null)}catch(W){if(a.length=p,t.__v=null,o||n!=null){if(W.then){for(t.__u|=o?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;n!=null&&(n[n.indexOf(l)]=null),t.__e=l}else if(n!=null)for(J=n.length;J--;)Ie(n[J])}else t.__e=s.__e;t.__k==null&&(t.__k=s.__k||[]),W.then||yr(t),k.__e(W,t,s)}}else n==null&&t.__v==s.__v?(t.__k=s.__k,t.__e=s.__e):l=t.__e=gi(s.__e,t,s,r,i,n,a,o,h);return(u=k.diffed)&&u(t),128&t.__u?void 0:l}function yr(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(yr))}function wr(e,t,s){for(var r=0;r<s.length;r++)Le(s[r],s[++r],s[++r]);k.__c&&k.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(n){n.call(i)})}catch(n){k.__e(n,i.__v)}})}function Ar(e){return typeof e!="object"||e==null||e.__b>0?e:ce(e)?e.map(Ar):e.constructor!==void 0?null:V({},e)}function gi(e,t,s,r,i,n,a,l,o){var h,u,p,c,f,g,y,S=s.props||re,m=t.props,b=t.type;if(b=="svg"?i="http://www.w3.org/2000/svg":b=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((f=n[h])&&"setAttribute"in f==!!b&&(b?f.localName==b:f.nodeType==3)){e=f,n[h]=null;break}}if(e==null){if(b==null)return document.createTextNode(m);e=document.createElementNS(i,b,m.is&&m),l&&(k.__m&&k.__m(t,n),l=!1),n=null}if(b==null)S===m||l&&e.data==m||(e.data=m);else{if(n=b=="textarea"&&m.defaultValue!=null?null:n&&de.call(e.childNodes),!l&&n!=null)for(S={},h=0;h<e.attributes.length;h++)S[(f=e.attributes[h]).name]=f.value;for(h in S)f=S[h],h=="dangerouslySetInnerHTML"?p=f:h=="children"||h in m||h=="value"&&"defaultValue"in m||h=="checked"&&"defaultChecked"in m||Jt(e,h,null,f,i);for(h in m)f=m[h],h=="children"?c=f:h=="dangerouslySetInnerHTML"?u=f:h=="value"?g=f:h=="checked"?y=f:l&&typeof f!="function"||S[h]===f||Jt(e,h,f,S[h],i);if(u)l||p&&(u.__html==p.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(p&&(e.innerHTML=""),$r(t.type=="template"?e.content:e,ce(c)?c:[c],t,s,r,b=="foreignObject"?"http://www.w3.org/1999/xhtml":i,n,a,n?n[0]:s.__k&&mt(s,0),l,o),n!=null)for(h=n.length;h--;)Ie(n[h]);l&&b!="textarea"||(h="value",b=="progress"&&g==null?e.removeAttribute("value"):g!=null&&(g!==e[h]||b=="progress"&&!g||b=="option"&&g!=S[h])&&Jt(e,h,g,S[h],i),h="checked",y!=null&&y!=e[h]&&Jt(e,h,y,S[h],i))}return e}function Le(e,t,s){try{if(typeof e=="function"){var r=typeof e.__u=="function";r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(i){k.__e(i,s)}}function Sr(e,t,s){var r,i;if(k.unmount&&k.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Le(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(n){k.__e(n,t)}r.base=r.__P=r.__n=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Sr(r[i],t,s||typeof e.type!="function");s||Ie(e.__e),e.__c=e.__=e.__e=void 0}function bi(e,t,s){return this.constructor(e,s)}function $i(e,t,s){var r,i,n,a;t==document&&(t=document.documentElement),k.__&&k.__(e,t),i=(r=!1)?null:t.__k,n=[],a=[],Oe(t,e=t.__k=pi(q,null,[e]),i||re,re,t.namespaceURI,i?null:t.firstChild?de.call(t.childNodes):null,n,i?i.__e:t.firstChild,r,a),wr(n,e,a),e.props.children=null}de=ie.slice,k={__e:function(e,t,s,r){for(var i,n,a;t=t.__;)if((i=t.__c)&&!i.__)try{if((n=i.constructor)&&n.getDerivedStateFromError!=null&&(i.setState(n.getDerivedStateFromError(e)),a=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),a=i.__d),a)return i.__E=i}catch(l){e=l}throw e}},fr=0,Gt.prototype.setState=function(e,t){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=V({},this.state),typeof e=="function"&&(e=e(V({},s),this.props)),e&&V(s,e),e!=null&&this.__v&&(t&&this._sb.push(t),hs(this))},Gt.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),hs(this))},Gt.prototype.render=q,Z=[],mr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,_r=function(e,t){return e.__v.__b-t.__v.__b},ne.__r=0,$e=Math.random().toString(8),Zt="__d"+$e,Nt="__a"+$e,gr=/(PointerCapture)$|Capture$/i,De=0,xe=ps(!1),Pe=ps(!0);var vi=0;function d(e,t,s,r,i,n){t||(t={});var a,l,o=t;if("ref"in o)for(l in o={},t)l=="ref"?a=t[l]:o[l]=t[l];var h={type:e,props:o,key:s,ref:a,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--vi,__i:-1,__u:0,__source:i,__self:n};if(typeof e=="function"&&(a=e.defaultProps))for(l in a)o[l]===void 0&&(o[l]=a[l]);return k.vnode&&k.vnode(h),h}var Lt,P,ve,fs,qt=0,Er=[],T=k,ms=T.__b,_s=T.__r,gs=T.diffed,bs=T.__c,$s=T.unmount,vs=T.__;function qe(e,t){T.__h&&T.__h(P,e,qt||t),qt=0;var s=P.__H||(P.__H={__:[],__h:[]});return e>=s.__.length&&s.__.push({}),s.__[e]}function $(e){return qt=1,yi(xr,e)}function yi(e,t,s){var r=qe(Lt++,2);if(r.t=e,!r.__c&&(r.__=[xr(void 0,t),function(l){var o=r.__N?r.__N[0]:r.__[0],h=r.t(o,l);o!==h&&(r.__N=[h,r.__[1]],r.__c.setState({}))}],r.__c=P,!P.__f)){var i=function(l,o,h){if(!r.__c.__H)return!0;var u=!1,p=r.__c.props!==l;if(r.__c.__H.__.some(function(f){if(f.__N){u=!0;var g=f.__[0];f.__=f.__N,f.__N=void 0,g!==f.__[0]&&(p=!0)}}),n){var c=n.call(this,l,o,h);return u?c||p:c}return!u||p};P.__f=!0;var n=P.shouldComponentUpdate,a=P.componentWillUpdate;P.componentWillUpdate=function(l,o,h){if(this.__e){var u=n;n=void 0,i(l,o,h),n=u}a&&a.call(this,l,o,h)},P.shouldComponentUpdate=i}return r.__N||r.__}function F(e,t){var s=qe(Lt++,3);!T.__s&&kr(s.__H,t)&&(s.__=e,s.u=t,P.__H.__h.push(s))}function he(e){return qt=5,ze(function(){return{current:e}},[])}function ze(e,t){var s=qe(Lt++,7);return kr(s.__H,t)&&(s.__=e(),s.__H=t,s.__h=e),s.__}function H(e,t){return qt=8,ze(function(){return e},t)}function wi(){for(var e;e=Er.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Xt),t.__h.some(Ce),t.__h=[]}catch(s){t.__h=[],T.__e(s,e.__v)}}}T.__b=function(e){P=null,ms&&ms(e)},T.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),vs&&vs(e,t)},T.__r=function(e){_s&&_s(e),Lt=0;var t=(P=e.__c).__H;t&&(ve===P?(t.__h=[],P.__h=[],t.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(t.__h.some(Xt),t.__h.some(Ce),t.__h=[],Lt=0)),ve=P},T.diffed=function(e){gs&&gs(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Er.push(t)!==1&&fs===T.requestAnimationFrame||((fs=T.requestAnimationFrame)||Ai)(wi)),t.__H.__.some(function(s){s.u&&(s.__H=s.u,s.u=void 0)})),ve=P=null},T.__c=function(e,t){t.some(function(s){try{s.__h.some(Xt),s.__h=s.__h.filter(function(r){return!r.__||Ce(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],T.__e(r,s.__v)}}),bs&&bs(e,t)},T.unmount=function(e){$s&&$s(e);var t,s=e.__c;s&&s.__H&&(s.__H.__.some(function(r){try{Xt(r)}catch(i){t=i}}),s.__H=void 0,t&&T.__e(t,s.__v))};var ys=typeof requestAnimationFrame=="function";function Ai(e){var t,s=function(){clearTimeout(r),ys&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(s,35);ys&&(t=requestAnimationFrame(s))}function Xt(e){var t=P,s=e.__c;typeof s=="function"&&(e.__c=void 0,s()),P=t}function Ce(e){var t=P;e.__c=e.__(),P=t}function kr(e,t){return!e||e.length!==t.length||t.some(function(s,r){return s!==e[r]})}function xr(e,t){return typeof t=="function"?t(e):t}const tt="Device returned an empty response.",Fe="Could not reach the device. Check that you are connected to its network and try again.",Si={},_={mqtt:{hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[9600,19200,38400,57600,115200],addressMin:1,addressMax:247},meter:{ctRatioMin:0,ctRatioMax:65535,syncMin:0}};function We(){return{ok:!1,message:Fe}}function Ei(e){try{const t=JSON.parse(e);if(t&&typeof t=="object"&&"message"in t){const s=t.message;if(typeof s=="string"&&s)return s}}catch{}}async function Be(e){let t=`Request failed (HTTP ${e.status}).`;try{const s=await e.text();s&&(t=Ei(s)??t)}catch{}return{ok:!1,status:e.status,message:t}}async function Pt(e,t){let s;try{s=await fetch(e,{headers:{Accept:"application/json"}})}catch{return We()}if(!s.ok)return Be(s);let r;try{r=await s.text()}catch{return{ok:!1,status:s.status,message:Fe}}if(!r.trim())return{ok:!1,status:s.status,message:t};try{return{ok:!0,data:JSON.parse(r)}}catch{return{ok:!1,status:s.status,message:t}}}async function Pr(e,t){let s;try{s=await fetch(e,t)}catch{return We()}if(!s.ok)return Be(s);try{await s.text()}catch{}return{ok:!0,data:Si}}function ki(e,t){return Pr(e,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:t.toString()})}async function Cr(e,t,s){let r;try{r=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)})}catch{return We()}if(!r.ok)return Be(r);let i;try{i=await r.text()}catch{return{ok:!1,status:r.status,message:Fe}}if(!i.trim())return{ok:!1,status:r.status,message:s};try{return{ok:!0,data:JSON.parse(i)}}catch{return{ok:!1,status:r.status,message:s}}}function Tr(){return Pt("/api/status",tt)}function Mr(){return Pt("/healthcheck/healty",tt)}function xi(){return Pt("/healthcheck/ready",tt)}function Pi(){return Pr("/api/reboot",{method:"POST"})}function Ci(){return Pt("/api/settings",tt)}function st(e,t,s,r=!1){if(typeof e!="string")throw new Error(`${t} is required.`);if(!r&&e.length===0)throw new Error(`${t} must not be empty.`);if(e.length>s)throw new Error(`${t} must be at most ${s} characters.`);return e}function Ti(e){const t=st(e.host,"MQTT host",_.mqtt.hostMax);if(typeof e.port!="number"||!Number.isInteger(e.port)||e.port<1||e.port>65535)throw new Error("MQTT port must be an integer between 1 and 65535.");const s=st(e.login,"MQTT login",_.mqtt.loginMax,!0),r=st(e.password,"MQTT password",_.mqtt.passwordMax,!0),i=st(e.haDiscoveryPrefix,"HA discovery prefix",_.mqtt.haDiscoveryPrefixMax);if(typeof e.mqttIsHADiscovery!="boolean")throw new Error("HA discovery flag must be true or false.");const n=st(e.stateTopic,"State topic",_.mqtt.topicMax),a=st(e.commandTopic,"Command topic",_.mqtt.topicMax),l=st(e.statusTopic,"Status topic",_.mqtt.topicMax),o=new URLSearchParams;return o.set("host",t),o.set("port",String(e.port)),o.set("login",s),o.set("password",r),o.set("haDiscoveryPrefix",i),o.set("mqttIsHADiscovery",e.mqttIsHADiscovery?"true":"false"),o.set("stateTopic",n),o.set("commandTopic",a),o.set("statusTopic",l),ki("/api/settings/mqtt",o)}function Mi(){return Pt("/api/settings/modbus",tt)}function Ui(e){if(!_.modbus.speeds.includes(e.modbusSpeed))throw new Error(`Modbus speed must be one of ${_.modbus.speeds.join(", ")}.`);if(!Number.isInteger(e.map12eAddress)||e.map12eAddress<_.modbus.addressMin||e.map12eAddress>_.modbus.addressMax)throw new Error(`MAP12E address must be an integer between ${_.modbus.addressMin} and ${_.modbus.addressMax}.`);return Cr("/api/settings/modbus",{modbusSpeed:e.modbusSpeed,map12eAddress:e.map12eAddress},tt)}function ws(){return Pt("/api/settings/meter",tt)}function As(e){const t={};if(e.ct1Ratio!==void 0){if(!Number.isInteger(e.ct1Ratio)||e.ct1Ratio<_.meter.ctRatioMin||e.ct1Ratio>_.meter.ctRatioMax)throw new Error(`CT ratio must be an integer between ${_.meter.ctRatioMin} and ${_.meter.ctRatioMax}.`);t.ct1Ratio=e.ct1Ratio}if(e.energySyncValue!==void 0){if(!Number.isFinite(e.energySyncValue)||e.energySyncValue<_.meter.syncMin)throw new Error("Energy sync value must be a number greater than or equal to 0.");t.energySyncValue=e.energySyncValue}if(t.ct1Ratio===void 0&&t.energySyncValue===void 0)throw new Error("ct1Ratio or energySyncValue required.");return Cr("/api/settings/meter",t,tt)}function Ni({tabs:e,active:t,onSelect:s}){return d("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:e.map(r=>d("button",{type:"button",role:"tab",id:`tab-${r.id}`,"aria-selected":r.id===t,"aria-controls":`panel-${r.id}`,class:r.id===t?"active":void 0,onClick:()=>s(r.id),children:r.label},r.id))})}function C({kind:e="info",message:t,onClose:s}){return d("div",{class:`banner banner-${e}`,role:"status",children:[d("span",{children:t}),s?d("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:s,children:"×"}):null]})}function Ri(e){switch(e){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function D({children:e,variant:t="default",type:s="button",disabled:r,title:i,onClick:n}){return d("button",{type:s,class:Ri(t),disabled:r,title:i,onClick:n,children:e})}function Hi(e){return d(D,{...e,variant:"danger"})}function z({title:e,children:t,class:s}){return d("section",{class:s?`card ${s}`:"card",children:[e?d("h2",{children:e}):null,t]})}const ye=2e3,Di=12e4;function Ii(){const[e,t]=$("idle"),s=he(0);F(()=>{if(e!=="rebooting")return;let a=!1,l;const o=()=>{Mr().then(h=>{if(!a){if(h.ok){t("ready");return}if(s.current+=1,s.current*ye>=Di){t("timeout");return}l=window.setTimeout(o,ye)}})};return l=window.setTimeout(o,ye),()=>{a=!0,l!==void 0&&window.clearTimeout(l)}},[e]);const r=H(()=>{s.current=0,t("rebooting")},[]),i=H(()=>t("idle"),[]),n=H(()=>{s.current=0,t("rebooting")},[]);return ze(()=>({phase:e,start:r,dismiss:i,retry:n}),[e,r,i,n])}function Oi({flow:e}){return e.phase==="idle"?null:d("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:d("div",{class:"reboot-dialog card",children:[d("h2",{children:"Device is rebooting"}),e.phase==="rebooting"?d(q,{children:[d("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),d("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,e.phase==="ready"?d(q,{children:[d(C,{kind:"success",message:"The device is back online."}),d("div",{class:"form-actions",children:d(D,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,e.phase==="timeout"?d(q,{children:[d(C,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),d("div",{class:"form-actions",children:[d(D,{onClick:e.retry,children:"Keep waiting"}),d(D,{onClick:e.dismiss,children:"Dismiss"})]})]}):null]})})}const Li=1e4;function qi(e){const t=Math.max(0,Math.floor(e)),s=Math.floor(t/86400),r=Math.floor(t%86400/3600),i=Math.floor(t%3600/60),n=t%60,a=[];return s&&a.push(`${s}d`),(s||r)&&a.push(`${r}h`),(s||r||i)&&a.push(`${i}m`),a.push(`${n}s`),a.join(" ")}function zi(e){return Number.isFinite(e)?`${Math.round(e/1024)} KB (${Math.round(e)} bytes)`:String(e)}function Fi(){const[e,t]=$(null),[s,r]=$(null),[i,n]=$(!1),[a,l]=$(null),[o,h]=$(null),[u,p]=$(!0),[c,f]=$(null),[g,y]=$(!1),S=Ii(),m=H(async()=>{const E=await Tr();E.ok?(t(E.data),r(null)):r(E.message),n(!0)},[]),b=H(async()=>{p(!0);const[E,I]=await Promise.all([Mr(),xi()]);l(E),h(I),p(!1)},[]);F(()=>{m();const E=window.setInterval(()=>{m()},Li);return()=>window.clearInterval(E)},[m]),F(()=>{b()},[b]);const w=H(async()=>{if(!window.confirm("Reboot the device now? It will be offline for about 20-60 seconds."))return;f(null),y(!0);const I=await Pi();y(!1),I.ok?S.start():f(I.message)},[S.start]),N=u&&!a?d("p",{class:"muted",children:"Checking device health…"}):a?a.ok?d(C,{kind:a.data.healty?"success":"error",message:a.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):d(C,{kind:"error",message:a.message}):null,R=o?o.ok?d(C,{kind:o.data.ready?"success":"info",message:o.data.ready?"All registered services are ready.":`Not ready: ${o.data.message}`}):o.status===500?d(C,{kind:"info",message:`Not ready: ${o.message}`}):d(C,{kind:"error",message:o.message}):null;return d("div",{class:"stack",children:[d(z,{title:"Device",children:[i?s?d(q,{children:[d(C,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(D,{onClick:()=>{m()},children:"Retry"})})]}):e?d("dl",{class:"kv",children:[d("dt",{children:"Firmware"}),d("dd",{children:e.fwVersion??"—"}),d("dt",{children:"Free heap"}),d("dd",{children:zi(e.freeHeap)}),d("dt",{children:"Uptime"}),d("dd",{children:qi(e.uptime)}),d("dt",{children:"Last reset reason"}),d("dd",{children:e.lastResetReason})]}):null:d("p",{class:"muted",children:"Loading status…"}),d("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),d(z,{title:"Health",children:[N,R,d("div",{class:"form-actions",children:d(D,{onClick:()=>{b()},disabled:u,children:u?"Checking…":"Refresh health"})})]}),d(z,{title:"Maintenance",children:[d("p",{class:"muted",children:"A reboot briefly interrupts the device. Configuration changes saved on the other tabs only take effect after a reboot."}),c?d(C,{kind:"error",message:c,onClose:()=>f(null)}):null,d("div",{class:"form-actions",children:d(Hi,{onClick:()=>{w()},disabled:g||S.phase!=="idle",children:"Reboot device"})})]}),d(Oi,{flow:S})]})}function Wi(){const e=he(null);return F(()=>{const t=document.createElement("edn-network-page");return e.current?.append(t),()=>t.remove()},[]),d("div",{ref:e})}const Bi={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:"",statusTopic:""};function ji(e){const t={};e.host.trim().length===0?t.host="Host is required.":e.host.length>_.mqtt.hostMax&&(t.host=`At most ${_.mqtt.hostMax} characters.`);const s=Number(e.port);return e.port.trim()===""?t.port="Port is required.":(!Number.isInteger(s)||s<1||s>65535)&&(t.port="Port must be an integer between 1 and 65535."),e.login.length>_.mqtt.loginMax&&(t.login=`At most ${_.mqtt.loginMax} characters.`),e.password.length>_.mqtt.passwordMax&&(t.password=`At most ${_.mqtt.passwordMax} characters.`),e.haDiscoveryPrefix.trim().length===0?t.haDiscoveryPrefix="Discovery prefix is required.":e.haDiscoveryPrefix.length>_.mqtt.haDiscoveryPrefixMax&&(t.haDiscoveryPrefix=`At most ${_.mqtt.haDiscoveryPrefixMax} characters.`),e.stateTopic.trim().length===0?t.stateTopic="Required - the device crashes if the state topic is missing.":e.stateTopic.length>_.mqtt.topicMax&&(t.stateTopic=`At most ${_.mqtt.topicMax} characters.`),e.commandTopic.trim().length===0?t.commandTopic="Required - the device crashes if the command topic is missing.":e.commandTopic.length>_.mqtt.topicMax&&(t.commandTopic=`At most ${_.mqtt.topicMax} characters.`),e.statusTopic.trim().length===0?t.statusTopic="Status topic is required.":e.statusTopic.length>_.mqtt.topicMax&&(t.statusTopic=`At most ${_.mqtt.topicMax} characters.`),t}function Vi(e){return Object.keys(e).length>0}function Q({label:e,value:t,onInput:s,type:r="text",min:i,max:n,maxLength:a,autoComplete:l,error:o,help:h}){return d("label",{class:"field",children:[d("span",{class:"field-label",children:e}),d("input",{type:r,value:t,min:i,max:n,maxLength:a,autoComplete:l,"aria-invalid":o?!0:void 0,onInput:u=>s(u.currentTarget.value)}),h&&!o?d("span",{class:"field-help",children:h}):null,o?d("span",{class:"field-error",children:o}):null]})}function Ji({label:e,value:t,onInput:s,maxLength:r,error:i}){const[n,a]=$(!1);return d("div",{class:"password-field",children:[d(Q,{label:e,value:t,onInput:s,type:n?"text":"password",maxLength:r,autoComplete:"new-password",error:i}),d("button",{type:"button",class:"btn reveal-toggle","aria-pressed":n,onClick:()=>a(l=>!l),children:n?"Hide":"Show"})]})}function Ki({label:e,checked:t,onChange:s}){return d("div",{class:"checkbox-field",children:d("label",{class:"checkbox-label",children:[d("input",{type:"checkbox",checked:t,onChange:r=>s(r.currentTarget.checked)}),d("span",{children:e})]})})}function Qi(){const[e,t]=$(!1),[s,r]=$(null),[i,n]=$(Bi),[a,l]=$({}),[o,h]=$(!1),[u,p]=$(null),[c,f]=$(null),g=H(async()=>{r(null);const m=await Ci();m.ok?n({host:m.data.mqttHost,port:String(m.data.mqttPort),login:m.data.mqttLogin,password:m.data.mqttPassword,haDiscoveryPrefix:m.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:m.data.mqttIsHADiscovery,stateTopic:m.data.mqttStateTopic,commandTopic:m.data.mqttCommandTopic,statusTopic:m.data.mqttStatusTopic}):r(m.message),t(!0)},[]);F(()=>{g()},[g]);const y=m=>n(b=>({...b,...m})),S=H(async m=>{m.preventDefault();const b=ji(i);if(l(b),p(null),f(null),!Vi(b)){h(!0);try{const w=await Ti({host:i.host,port:Number(i.port),login:i.login,password:i.password,haDiscoveryPrefix:i.haDiscoveryPrefix,mqttIsHADiscovery:i.mqttIsHADiscovery,stateTopic:i.stateTopic,commandTopic:i.commandTopic,statusTopic:i.statusTopic});w.ok?p("MQTT settings saved to flash."):f(w.message)}catch(w){f(w instanceof Error?w.message:String(w))}h(!1)}},[i]);return e?d("div",{class:"stack",children:[d(C,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."}),s?d(q,{children:[d(C,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(D,{onClick:()=>{g()},children:"Retry"})})]}):null,d(z,{title:"MQTT",children:d("form",{onSubmit:S,children:[d(Q,{label:"Host",value:i.host,onInput:m=>y({host:m}),maxLength:_.mqtt.hostMax,autoComplete:"off",error:a.host}),d(Q,{label:"Port",value:i.port,onInput:m=>y({port:m}),type:"number",min:1,max:65535,error:a.port}),d(Q,{label:"Login",value:i.login,onInput:m=>y({login:m}),maxLength:_.mqtt.loginMax,autoComplete:"off",error:a.login}),d(Ji,{label:"Password",value:i.password,onInput:m=>y({password:m}),maxLength:_.mqtt.passwordMax,error:a.password}),d(Q,{label:"HA discovery prefix",value:i.haDiscoveryPrefix,onInput:m=>y({haDiscoveryPrefix:m}),maxLength:_.mqtt.haDiscoveryPrefixMax,autoComplete:"off",error:a.haDiscoveryPrefix}),d(Ki,{label:"Enable Home Assistant discovery",checked:i.mqttIsHADiscovery,onChange:m=>y({mqttIsHADiscovery:m})}),d(Q,{label:"State topic",value:i.stateTopic,onInput:m=>y({stateTopic:m}),maxLength:_.mqtt.topicMax,autoComplete:"off",error:a.stateTopic,help:"Must not be empty: the device crashes on a missing state topic."}),d(Q,{label:"Command topic",value:i.commandTopic,onInput:m=>y({commandTopic:m}),maxLength:_.mqtt.topicMax,autoComplete:"off",error:a.commandTopic,help:"Must not be empty: the device crashes on a missing command topic."}),d(Q,{label:"Топик статуса электричества",value:i.statusTopic,onInput:m=>y({statusTopic:m}),maxLength:_.mqtt.topicMax,autoComplete:"off",error:a.statusTopic,help:"По умолчанию: faraday/<chipID>/status."}),u?d(C,{kind:"success",message:u,onClose:()=>p(null)}):null,c?d(C,{kind:"error",message:c,onClose:()=>f(null)}):null,d("div",{class:"form-actions",children:d(D,{type:"submit",variant:"primary",disabled:o,children:o?"Saving…":"Save MQTT"})})]})})]}):d(z,{title:"MQTT",children:d("p",{class:"muted",children:"Loading MQTT settings…"})})}const Zi={modbusSpeed:String(_.modbus.speeds[0]),map12eAddress:""};function Yi(e){const t={};if(e.map12eAddress.trim()==="")t.map12eAddress="Address is required.";else{const s=Number(e.map12eAddress);(!Number.isInteger(s)||s<_.modbus.addressMin||s>_.modbus.addressMax)&&(t.map12eAddress=`Address must be an integer between ${_.modbus.addressMin} and ${_.modbus.addressMax}.`)}return t}function Gi(e){return Object.keys(e).length>0}function Xi({label:e,value:t,onInput:s,type:r="text",min:i,max:n,error:a,help:l}){return d("label",{class:"field",children:[d("span",{class:"field-label",children:e}),d("input",{type:r,value:t,min:i,max:n,"aria-invalid":a?!0:void 0,onInput:o=>s(o.currentTarget.value)}),l&&!a?d("span",{class:"field-help",children:l}):null,a?d("span",{class:"field-error",children:a}):null]})}function tn({label:e,value:t,options:s,onChange:r}){return d("label",{class:"field",children:[d("span",{class:"field-label",children:e}),d("select",{value:t,onChange:i=>r(i.currentTarget.value),children:s.map(i=>d("option",{value:String(i),children:[i," baud"]},i))})]})}function en(){const[e,t]=$(!1),[s,r]=$(null),[i,n]=$(Zi),[a,l]=$({}),[o,h]=$(null),[u,p]=$(!1),[c,f]=$(null),[g,y]=$(null),S=H(async()=>{r(null);const w=await Mi();w.ok?(n({modbusSpeed:String(w.data.modbusSpeed),map12eAddress:String(w.data.map12eAddress)}),h(w.data.map12eAddress)):r(w.message),t(!0)},[]);F(()=>{S()},[S]);const m=w=>n(N=>({...N,...w})),b=H(async w=>{w.preventDefault();const N=Yi(i);if(l(N),f(null),y(null),Gi(N))return;const R=Number(i.map12eAddress);p(!0);try{const E=await Ui({modbusSpeed:Number(i.modbusSpeed),map12eAddress:R});if(E.ok){n({modbusSpeed:String(E.data.modbusSpeed),map12eAddress:String(E.data.map12eAddress)});const I=R!==o;h(E.data.map12eAddress),f(I?"Modbus settings saved. The new speed is applied now; the address takes effect only after a reboot.":"Modbus settings saved. The new speed is applied now.")}else y(E.message)}catch(E){y(E instanceof Error?E.message:String(E))}p(!1)},[i,o]);return e?d("div",{class:"stack",children:[s?d(q,{children:[d(C,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(D,{onClick:()=>{S()},children:"Retry"})})]}):null,d(z,{title:"Modbus",children:d("form",{onSubmit:b,children:[d(tn,{label:"RS-485 speed",value:i.modbusSpeed,options:_.modbus.speeds,onChange:w=>m({modbusSpeed:w})}),d(Xi,{label:"WB-MAP12E address",value:i.map12eAddress,onInput:w=>m({map12eAddress:w}),type:"number",min:_.modbus.addressMin,max:_.modbus.addressMax,error:a.map12eAddress,help:`Modbus unit id ${_.modbus.addressMin}-${_.modbus.addressMax}.`}),c?d(C,{kind:"success",message:c,onClose:()=>f(null)}):null,g?d(C,{kind:"error",message:g,onClose:()=>y(null)}):null,d("div",{class:"form-actions",children:d(D,{type:"submit",variant:"primary",disabled:u,children:u?"Saving…":"Save Modbus"})})]})})]}):d(z,{title:"Modbus",children:d("p",{class:"muted",children:"Loading Modbus settings…"})})}const sn="—";function Ss(e){return e===null||!Number.isFinite(e)?sn:`${e.toFixed(2)} kWh`}function Es(e){return Object.keys(e).length>0}function ks({label:e,value:t,onInput:s,type:r="text",min:i,max:n,step:a,error:l,help:o}){return d("label",{class:"field",children:[d("span",{class:"field-label",children:e}),d("input",{type:r,value:t,min:i,max:n,step:a,"aria-invalid":l?!0:void 0,onInput:h=>s(h.currentTarget.value)}),o&&!l?d("span",{class:"field-help",children:o}):null,l?d("span",{class:"field-error",children:l}):null]})}function rn(){const[e,t]=$(!1),[s,r]=$(null),[i,n]=$(null),[a,l]=$(""),[o,h]=$({}),[u,p]=$(!1),[c,f]=$(null),[g,y]=$(null),[S,m]=$(""),[b,w]=$({}),[N,R]=$(!1),[E,I]=$(null),[et,J]=$(null),[O,W]=$(!1),be=H(async()=>{r(null);const L=await ws();L.ok?(n(L.data),l(String(L.data.energySyncValue)),m(String(L.data.ct1Ratio))):r(L.message),t(!0)},[]);F(()=>{be()},[be]);const di=H(async()=>{W(!0);const L=await ws();L.ok?(n(L.data),r(null)):r(L.message),W(!1)},[]),ci=H(async L=>{L.preventDefault(),f(null),y(null);const B={},K=Number(a);if(a.trim()===""?B.sync="Supplier reading is required.":(!Number.isFinite(K)||K<_.meter.syncMin)&&(B.sync="Must be a number greater than or equal to 0."),h(B),!Es(B)){p(!0);try{const U=await As({energySyncValue:K});U.ok?(n(U.data),l(String(U.data.energySyncValue)),f("Sync saved. Future readings continue from the entered value; the meter counter itself is not reset.")):y(U.message)}catch(U){y(U instanceof Error?U.message:String(U))}p(!1)}},[a]),hi=H(async L=>{L.preventDefault(),I(null),J(null);const B={},K=Number(S);if(S.trim()===""?B.ratio="CT ratio is required.":(!Number.isInteger(K)||K<_.meter.ctRatioMin||K>_.meter.ctRatioMax)&&(B.ratio=`Must be an integer between ${_.meter.ctRatioMin} and ${_.meter.ctRatioMax}.`),w(B),!Es(B)){R(!0);try{const U=await As({ct1Ratio:K});U.ok?(n(U.data),m(String(U.data.ct1Ratio)),I("CT ratio written to the meter and applied immediately. Re-sync the supplier energy afterwards.")):J(U.message)}catch(U){J(U instanceof Error?U.message:String(U))}R(!1)}},[S]);return e?d("div",{class:"stack",children:[s?d(q,{children:[d(C,{kind:"error",message:s}),d("div",{class:"form-actions",children:d(D,{onClick:()=>{be()},children:"Retry"})})]}):null,d(z,{title:"Supplier energy sync",children:[d("dl",{class:"kv",children:[d("dt",{children:"Meter energy"}),d("dd",{children:Ss(i?.meterEnergy??null)}),d("dt",{children:"Supplier energy"}),d("dd",{children:Ss(i?.supplierEnergy??null)})]}),d("p",{class:"muted mt",children:"Meter counters are read-only and cannot be reset by the firmware. A sync stores the entered supplier kWh reading together with the device counter at that moment, so Home Assistant reports the entered value plus consumption since the sync."}),d("form",{onSubmit:ci,class:"mt",children:[d(ks,{label:"Supplier reading, kWh",value:a,onInput:l,type:"number",min:_.meter.syncMin,step:"0.01",error:o.sync}),c?d(C,{kind:"success",message:c,onClose:()=>f(null)}):null,g?d(C,{kind:"error",message:g,onClose:()=>y(null)}):null,d("div",{class:"form-actions",children:[d(D,{type:"submit",variant:"primary",disabled:u,children:u?"Syncing…":"Sync"}),d(D,{onClick:()=>{di()},disabled:O,children:O?"Refreshing…":"Refresh"})]})]})]}),d(z,{title:"Current transformer",children:d("form",{onSubmit:hi,children:[d(ks,{label:"CT1 ratio",value:S,onInput:m,type:"number",min:_.meter.ctRatioMin,max:_.meter.ctRatioMax,error:b.ratio,help:"Integer 0-65535. 0 disables the ratio (direct measurement)."}),d("p",{class:"muted",children:"The ratio is written to the meter immediately and applied by the meter itself to current, power and energy. Re-sync the supplier energy after changing it."}),E?d(C,{kind:"success",message:E,onClose:()=>I(null)}):null,et?d(C,{kind:"error",message:et,onClose:()=>J(null)}):null,d("div",{class:"form-actions",children:d(D,{type:"submit",variant:"primary",disabled:N,children:N?"Saving…":"Save ratio"})})]})})]}):d(z,{title:"Meter",children:d("p",{class:"muted",children:"Loading meter settings…"})})}const nn="Download a zip of everything the device has stored: config.bin. It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e faraday -t uploadfs) ERASE LittleFS, so /config.bin is gone.",an="Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.",on="Uploading this archive REPLACES config.bin on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",ln="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function dn(){const e=he(null);return F(()=>{const t=document.createElement("edc-config-backup-page");return t.setAttribute("device-name","Faraday"),t.setAttribute("archive-file-name","faraday-config.zip"),t.setAttribute("zip-notes",nn),t.setAttribute("bin-notes",an),t.setAttribute("zip-confirm-text",on),t.setAttribute("bin-confirm-text",ln),e.current?.append(t),()=>t.remove()},[]),d("div",{ref:e})}function cn(){const e=he(null);return F(()=>{const t=document.createElement("edu-log-settings-page");return t.setAttribute("device-name","Faraday"),e.current?.append(t),()=>t.remove()},[]),d("div",{ref:e})}const hn=[{id:"status",label:"Status"},{id:"network",label:"Network"},{id:"mqtt",label:"MQTT"},{id:"modbus",label:"Modbus"},{id:"meter",label:"Meter"},{id:"config",label:"Config"},{id:"logger",label:"Log"}];function un(e){switch(e){case"status":return d(Fi,{});case"network":return d(Wi,{});case"mqtt":return d(Qi,{});case"modbus":return d(en,{});case"meter":return d(rn,{});case"config":return d(dn,{});case"logger":return d(cn,{})}}function pn(){const[e,t]=$("status"),[s,r]=$(null);return F(()=>{let i=!0;return Tr().then(n=>{i&&n.ok&&n.data.fwVersion&&r(n.data.fwVersion)}),()=>{i=!1}},[]),d(q,{children:[d("header",{class:"app-header",children:d("div",{class:"brand",children:[d("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:d("path",{fill:"currentColor",d:"M13 2 4.5 13.2h5.2L8 22l9-12.1h-5.4z"})}),d("h1",{children:"Faraday"})]})}),d(Ni,{tabs:hn,active:e,onSelect:t}),d("main",{class:"tab-content",id:`panel-${e}`,role:"tabpanel","aria-labelledby":`tab-${e}`,children:un(e)}),d("footer",{class:"app-footer",children:d("div",{class:"versions",children:[d("span",{class:"hint",children:"offline device panel"}),d("span",{class:"hint version",children:["FW ",s??"—"]}),d("span",{class:"hint version",children:["UI ","f0dc108-dirty"]})]})})]})}function fn(e){if(e&&typeof e=="object"&&"error"in e){let t=e.error;if(typeof t=="string"&&t.length>0)return t}}function Ur(e={}){let t=e.baseUrl??"",s=e.headers??{};async function r(i,n){let a;try{a=await fetch(`${t}${i}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...s}})}catch(u){return n?.signal?.aborted===!0||typeof u=="object"&&u&&u.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let l=await a.text().catch(()=>""),o,h=!1;if(l.length>0)try{o=JSON.parse(l),h=!0}catch{h=!1}if(!a.ok){let u=fn(o);return{ok:!1,status:a.status,message:u??`Request failed with HTTP ${a.status}.`}}return h?{ok:!0,data:o}:{ok:!1,status:a.status,message:`Unexpected response from server (HTTP ${a.status}).`}}return{getSettings(i){return r("/api/network/settings",{signal:i})},saveSettings(i,n){return r("/api/network/settings",{method:"POST",body:JSON.stringify(i),signal:n})},getStatus(i){return r("/api/network/status",{signal:i})},wifiList(i){return r("/api/wifi/list",{signal:i})}}}var te=globalThis,je=te.ShadowRoot&&(te.ShadyCSS===void 0||te.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ve=Symbol(),xs=new WeakMap,Nr=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==Ve)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o,s=this.t;if(je&&t===void 0){let r=s!==void 0&&s.length===1;r&&(t=xs.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&xs.set(s,t))}return t}toString(){return this.cssText}},mn=e=>new Nr(typeof e=="string"?e:e+"",void 0,Ve),Je=(e,...t)=>new Nr(e.length===1?e[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,Ve),_n=(e,t)=>{if(je)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let r=document.createElement("style"),i=te.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},Ps=je?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let r of t.cssRules)s+=r.cssText;return mn(s)})(e):e,{is:gn,defineProperty:bn,getOwnPropertyDescriptor:$n,getOwnPropertyNames:vn,getOwnPropertySymbols:yn,getPrototypeOf:wn}=Object,ue=globalThis,Cs=ue.trustedTypes,An=Cs?Cs.emptyScript:"",Sn=ue.reactiveElementPolyfillSupport,Rt=(e,t)=>e,Te={toAttribute(e,t){switch(t){case Boolean:e=e?An:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Rr=(e,t)=>!gn(e,t),Ts={attribute:!0,type:String,converter:Te,reflect:!1,useDefault:!1,hasChanged:Rr};Symbol.metadata??=Symbol("metadata"),ue.litPropertyMetadata??=new WeakMap;var $t=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Ts){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,s);i!==void 0&&bn(this.prototype,t,i)}}static getPropertyDescriptor(t,s,r){let{get:i,set:n}=$n(this.prototype,t)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){let l=i?.call(this);n?.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ts}static _$Ei(){if(this.hasOwnProperty(Rt("elementProperties")))return;let t=wn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Rt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Rt("properties"))){let s=this.properties,r=[...vn(s),...yn(s)];for(let i of r)this.createProperty(i,s[i])}let t=this[Symbol.metadata];if(t!==null){let s=litPropertyMetadata.get(t);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let s=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)s.unshift(Ps(i))}else t!==void 0&&s.push(Ps(t));return s}static _$Eu(t,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _n(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute===void 0?Te:r.converter).toAttribute(s,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,s){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Te:n.converter;this._$Em=i;let l=a.fromAttribute(s,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,s,r,i=!1,n){if(t!==void 0){let a=this.constructor;if(i===!1&&(n=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??Rr)(n,s)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??s??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:a}=n,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let t=!1,s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(t){}firstUpdated(t){}};$t.elementStyles=[],$t.shadowRootOptions={mode:"open"},$t[Rt("elementProperties")]=new Map,$t[Rt("finalized")]=new Map,Sn?.({ReactiveElement:$t}),(ue.reactiveElementVersions??=[]).push("2.1.2");var Ke=globalThis,Ms=e=>e,ae=Ke.trustedTypes,Us=ae?ae.createPolicy("lit-html",{createHTML:e=>e}):void 0,Hr="$lit$",Y=`lit$${Math.random().toFixed(9).slice(2)}$`,Dr="?"+Y,En=`<${Dr}>`,_t=document,zt=()=>_t.createComment(""),Ft=e=>e===null||typeof e!="object"&&typeof e!="function",Qe=Array.isArray,kn=e=>Qe(e)||typeof e?.[Symbol.iterator]=="function",we=`[ 	
\f\r]`,Ct=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ns=/-->/g,Rs=/>/g,rt=RegExp(`>|${we}(?:([^\\s"'>=/]+)(${we}*=${we}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Hs=/'/g,Ds=/"/g,Ir=/^(?:script|style|textarea|title)$/i,v=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),wt=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),Is=new WeakMap,at=_t.createTreeWalker(_t,129);function Or(e,t){if(!Qe(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Us===void 0?t:Us.createHTML(t)}var xn=(e,t)=>{let s=e.length-1,r=[],i,n=t===2?"<svg>":t===3?"<math>":"",a=Ct;for(let l=0;l<s;l++){let o=e[l],h,u,p=-1,c=0;for(;c<o.length&&(a.lastIndex=c,u=a.exec(o),u!==null);)c=a.lastIndex,a===Ct?u[1]==="!--"?a=Ns:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=rt):(Ir.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=rt):a=Rs:a===rt?u[0]===">"?(a=i??Ct,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?rt:u[3]==='"'?Ds:Hs):a===Ds||a===Hs?a=rt:a===Ns||a===Rs?a=Ct:(a=rt,i=void 0);let f=a===rt&&e[l+1].startsWith("/>")?" ":"";n+=a===Ct?o+En:p>=0?(r.push(h),o.slice(0,p)+Hr+o.slice(p)+Y+f):o+Y+(p===-2?l:f)}return[Or(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},Me=class Lr{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,l=t.length-1,o=this.parts,[h,u]=xn(t,s);if(this.el=Lr.createElement(h,r),at.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=at.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Hr)){let c=u[a++],f=i.getAttribute(p).split(Y),g=/([.?@])?(.*)/.exec(c);o.push({type:1,index:n,name:g[2],strings:f,ctor:g[1]==="."?Cn:g[1]==="?"?Tn:g[1]==="@"?Mn:pe}),i.removeAttribute(p)}else p.startsWith(Y)&&(o.push({type:6,index:n}),i.removeAttribute(p));if(Ir.test(i.tagName)){let p=i.textContent.split(Y),c=p.length-1;if(c>0){i.textContent=ae?ae.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],zt()),at.nextNode(),o.push({type:2,index:++n});i.append(p[c],zt())}}}else if(i.nodeType===8)if(i.data===Dr)o.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(Y,p+1))!==-1;)o.push({type:7,index:n}),p+=Y.length-1}n++}}static createElement(t,s){let r=_t.createElement("template");return r.innerHTML=t,r}};function At(e,t,s=e,r){if(t===wt)return t;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Ft(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(t=At(e,i._$AS(e,t.values),i,r)),t}var Pn=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:s},parts:r}=this._$AD,i=(t?.creationScope??_t).importNode(s,!0);at.currentNode=i;let n=at.nextNode(),a=0,l=0,o=r[0];for(;o!==void 0;){if(a===o.index){let h;o.type===2?h=new Ze(n,n.nextSibling,this,t):o.type===1?h=new o.ctor(n,o.name,o.strings,this,t):o.type===6&&(h=new Un(n,this,t)),this._$AV.push(h),o=r[++l]}a!==o?.index&&(n=at.nextNode(),a++)}return at.currentNode=_t,i}p(t){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(t[s]):(r._$AI(t,r,s),s+=r.strings.length-2)),s++}},Ze=class qr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=At(this,t,s),Ft(t)?t===A||t==null||t===""?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==wt&&this._(t):t._$litType$===void 0?t.nodeType===void 0?kn(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==A&&Ft(this._$AH)?this._$AA.nextSibling.data=t:this.T(_t.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Me.createElement(Or(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new Pn(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(t){let s=Is.get(t.strings);return s===void 0&&Is.set(t.strings,s=new Me(t)),s}k(t){Qe(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of t)i===s.length?s.push(r=new qr(this.O(zt()),this.O(zt()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let r=Ms(t).nextSibling;Ms(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},pe=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,i,n){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=A}_$AI(t,s=this,r,i){let n=this.strings,a=!1;if(n===void 0)t=At(this,t,s,0),a=!Ft(t)||t!==this._$AH&&t!==wt,a&&(this._$AH=t);else{let l=t,o,h;for(t=n[0],o=0;o<n.length-1;o++)h=At(this,l[r+o],s,o),h===wt&&(h=this._$AH[o]),a||=!Ft(h)||h!==this._$AH[o],h===A?t=A:t!==A&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}a&&!i&&this.j(t)}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Cn=class extends pe{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===A?void 0:t}},Tn=class extends pe{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A)}},Mn=class extends pe{constructor(t,s,r,i,n){super(t,s,r,i,n),this.type=5}_$AI(t,s=this){if((t=At(this,t,s,0)??A)===wt)return;let r=this._$AH,i=t===A&&r!==A||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==A&&(r===A||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Un=class{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){At(this,t)}},Nn=Ke.litHtmlPolyfillSupport;Nn?.(Me,Ze),(Ke.litHtmlVersions??=[]).push("3.3.3");var Rn=(e,t,s)=>{let r=s?.renderBefore??t,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new Ze(t.insertBefore(zt(),n),n,void 0,s??{})}return i._$AI(e),i},Ye=globalThis,dt=class extends $t{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rn(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return wt}};dt._$litElement$=!0,dt.finalized=!0,Ye.litElementHydrateSupport?.({LitElement:dt});var Hn=Ye.litElementPolyfillSupport;Hn?.({LitElement:dt}),(Ye.litElementVersions??=[]).push("4.2.2");var Dn={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function In(e){return e===void 0||Number.isNaN(e)?"Unknown":e>=-55?"Excellent":e>=-67?"Good":e>=-75?"Fair":"Weak"}function On(e){return e===1?"Full":e===0?"Half":`Unknown (${e})`}function Ln(e){let t=s=>String(s).padStart(2,"0");return`${t(e.getHours())}:${t(e.getMinutes())}:${t(e.getSeconds())}`}var ct,qn=(ct=class extends dt{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(t){t.has("pollIntervalMs")&&this.startPolling();let s=t.get("baseUrl");t.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let t=this.status;return v`
      <div class="card">
        <header class="head">
          ${t?v`<span class="badge badge-${t.mode}">${Dn[t.mode]}</span>`:v`<span class="badge badge-unknown">Unknown</span>`}
          ${t?v`<span class="state ${t.connected?"state-up":"state-down"}">
                ${t.connected?"Connected":"Disconnected"}
              </span>`:A}
          ${this.loading?v`<span class="muted loading">Refreshing…</span>`:A}
        </header>

        ${t?.fallbackAP?v`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:A}
        ${this.errorMessage?v`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:A}
        ${t?this.renderSections(t):v`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?v`Updated ${Ln(this.lastUpdated)}`:v`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(t){switch(t.mode){case"wifi":return this.renderWifi(t);case"wifi_ap":return this.renderAp(t);case"ethernet":return this.renderEthernet(t)}}renderWifi(t){return v`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",t.ssid)}
          ${this.row("Signal",t.rssi===void 0?void 0:`${t.rssi} dBm (${In(t.rssi)})`)}
          ${this.row("IP address",t.ip)} ${this.row("MAC address",t.mac)}
        </dl>
      </section>
    `}renderAp(t){let s=t.ap;return v`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",s?.ssid)} ${this.row("IP address",s?.ip)}
          ${this.row("Stations",s?.stations)}
        </dl>
      </section>
    `}renderEthernet(t){let s=t.eth;return v`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",s?.ip)} ${this.row("MAC address",s?.mac)}
          ${this.row("Link",s===void 0?void 0:s.linkUp?"Up":"Down")}
          ${this.row("Speed",s===void 0?void 0:`${s.speed} Mbps`)}
          ${this.row("Duplex",s===void 0?void 0:On(s.duplex))}
        </dl>
      </section>
    `}row(t,s){return s===void 0||s===""?A:v`<dt>${t}</dt>
          <dd>${s}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Ur({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let t=++this.refreshSeq;this.loading=!0;let s=await this.ensureClient().getStatus();if(t===this.refreshSeq){if(this.loading=!1,s.ok){this.status=s.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=s.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:s.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let t=Number(this.pollIntervalMs);!Number.isFinite(t)||t<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},t))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},ct.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},ct.styles=Je`
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
  `,ct);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",qn);var Kt=32,Tt=64,Ae=8,zn=5e3,Fn=new TextEncoder;function Qt(e){return Fn.encode(e).length}function Os(e){return e.isAPMode?"ap":"station"}var ht,Wn=(ht=class extends dt{constructor(...t){super(...t),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=s=>{this.draftWifiSSID=s.target.value},this.handleWifiPasswordInput=s=>{this.draftWifiPassword=s.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=s=>{this.draftApSSID=s.target.value},this.handleApPasswordInput=s=>{this.draftApPassword=s.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=s=>{this.draftApHasPassword=s.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=s=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=s,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=s=>{s.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(t){let s=t.get("baseUrl");t.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let t=this.settings;return v`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?v`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:A}
        ${this.successMessage?v`<div class="banner banner-success" role="status">${this.successMessage}</div>`:A}
        ${t?v`${this.renderForm(t)} ${this.renderScan()}`:this.loading?v`<p class="status">Loading settings…</p>`:v`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(t){return v`
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
          ${this.dirty?v`<span class="muted">Unsaved changes</span>`:A}
        </div>
      </form>
    `}renderStation(t){return v`
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
        ${t.hasWifiPassword?v`<p class="hint">Password saved •••• (leave blank to keep)</p>`:A}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(t){return v`
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
                  placeholder=${t.hasWifiAPPassword?"Leave blank to keep saved password":"At least 8 characters"}
                  .value=${this.draftApPassword}
                  @input=${this.handleApPasswordInput}
                />
              </label>
              ${t.hasWifiAPPassword?v`<p class="hint">Password saved •••• (leave blank to keep)</p>`:A}
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
              ${this.scanResults.map(t=>this.renderNetwork(t))}
            </ul>`:A}
      </section>
    `}renderNetwork(t){return v`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(t.ssid)}>
          <span class="ssid">${t.ssid}</span>
          <span class="meta">
            ${t.encrypted?v`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:A}
            ${t.rssi} dBm · Ch ${t.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(t){let s=this.fieldErrors[t];return s?v`<p class="field-error" role="alert">${s}</p>`:A}renderPasswordClearWarning(t){return(t==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?v`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:A}get dirty(){let t=this.settings;return t?this.draftMode!==Os(t)||this.draftWifiSSID!==t.wifiSSID||this.draftApSSID!==t.wifiAPSSID||this.draftApHasPassword!==t.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=Ur({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let t=++this.loadToken;this.loading=!0;let s=await this.ensureClient().getSettings();if(t!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,s.ok){this.applyServerSettings(s.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=s.message,this.emitError(s.message)}applyServerSettings(t){this.settings=t,this.settingsBaseUrl=this.baseUrl,this.draftMode=Os(t),this.draftWifiSSID=t.wifiSSID,this.draftApSSID=t.wifiAPSSID,this.draftApHasPassword=t.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let t=this.settings,s={};if(!t)return s;let r=this.draftMode==="ap";if(Qt(this.draftWifiSSID)>Kt&&(s.wifiSSID=`Wi-Fi name must be ${Kt} characters or fewer.`),Qt(this.draftApSSID)>Kt&&(s.wifiAPSSID=`Access point name must be ${Kt} characters or fewer.`),r?this.draftApSSID.length===0&&(s.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(s.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&Qt(this.draftWifiPassword)>Tt&&(s.wifiPassword=`Wi-Fi password must be ${Tt} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let i=Qt(this.draftApPassword);(i<Ae||i>Tt)&&(s.wifiAPPassword=`Access point password must be ${Ae}–${Tt} characters.`)}else t.hasWifiAPPassword||(s.wifiAPPassword=`Enter an access point password (${Ae}–${Tt} characters).`);return s}buildPatch(){let t=this.settings,s={};if(!t)return s;let r=this.draftMode==="ap";return r!==t.isAPMode&&(s.isAPMode=r),this.draftWifiSSID!==t.wifiSSID&&(s.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(s.wifiPassword=this.draftWifiPassword),this.draftApSSID!==t.wifiAPSSID&&(s.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==t.wifiAPHasPassword&&(s.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(s.wifiAPPassword=this.draftApPassword),s}async handleSave(){if(this.submitting||!this.settings)return;let t=this.validate();if(this.fieldErrors=t,Object.keys(t).length>0)return;let s=this.buildPatch();if(Object.keys(s).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let r=await this.ensureClient().saveSettings(s);if(this.submitting=!1,r.ok){this.applyServerSettings(r.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:r.data,bubbles:!0,composed:!0}));return}let i=r.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":r.message;this.errorMessage=i,this.emitError(i)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let t=new AbortController;this.scanController=t;let s,r=new Promise(n=>{s=setTimeout(()=>{t.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},zn)}),i=await Promise.race([this.ensureClient().wifiList(t.signal),r]);if(s!==void 0&&clearTimeout(s),this.scanController===t&&(this.scanController=void 0),this.scanning=!1,i.ok){this.scanResults=[...i.data.networks].sort((n,a)=>a.rssi-n.rssi);return}i.message!=="Request aborted."&&(this.scanError=i.message,this.emitError(i.message))}emitError(t){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:t},bubbles:!0,composed:!0}))}setMode(t){this.draftMode!==t&&(this.draftMode=t,this.fieldErrors={})}},ht.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},ht.styles=Je`
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
  `,ht);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Wn);var Bn=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],ut,jn=(ut=class extends dt{constructor(...t){super(...t),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return v`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Bn.map(t=>v`
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
    `}renderActive(){return this.activeTab==="settings"?v`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:v`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(t){this.activeTab!==t&&(this.activeTab=t,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:t},bubbles:!0,composed:!0})))}},ut.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},ut.styles=Je`
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
  `,ut);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",jn);var zr="Network request failed. Check the device connection and try again.",Vn={};function Jn(e){if(e&&typeof e=="object"&&"message"in e){let t=e.message;if(typeof t=="string"&&t.length>0)return t}}function Kn(e,t){return t?.aborted===!0||typeof e=="object"&&!!e&&e.name==="AbortError"}function Fr(e,t){return Kn(e,t)?{ok:!1,message:"Request aborted."}:{ok:!1,message:zr}}async function Wr(e,t){let s=t;try{let r=await e.text();if(r.length>0)try{s=Jn(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:e.status,message:s}}async function Ls(e,t,s,r,i,n){let a;try{a=await fetch(e,{headers:{Accept:t,...i},signal:n})}catch(o){return Fr(o,n)}if(!a.ok)return Wr(a,a.status===404?r:`Request failed with HTTP ${a.status}.`);let l;try{l=new Uint8Array(await a.arrayBuffer())}catch{return{ok:!1,status:a.status,message:zr}}return l.byteLength===0?{ok:!1,status:a.status,message:s}:{ok:!0,data:l}}async function qs(e,t,s,r,i){if(t.byteLength===0)return{ok:!1,message:s};let n=new ArrayBuffer(t.byteLength);new Uint8Array(n).set(t);let a;try{a=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...r},body:n,signal:i})}catch(l){return Fr(l,i)}return a.ok?(await a.text().catch(()=>""),{ok:!0,data:Vn}):Wr(a,`Upload failed with HTTP ${a.status}.`)}function Qn(e={}){let t=e.baseUrl??"",s=e.backupPath??"/api/config/backup",r=e.configPath??"/api/config",i=e.headers??{},n=`${t}${s}`,a=`${t}${r}`;return{downloadBackup(l){return Ls(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",i,l)},downloadConfig(l){return Ls(a,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",i,l)},uploadBackup(l,o){return qs(n,l,"Cannot upload an empty archive.",i,o)},uploadConfig(l,o){return qs(a,l,"Cannot upload an empty config file.",i,o)}}}var ee=globalThis,Ge=ee.ShadowRoot&&(ee.ShadyCSS===void 0||ee.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xe=Symbol(),zs=new WeakMap,Br=class{constructor(t,s,r){if(this._$cssResult$=!0,r!==Xe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o,s=this.t;if(Ge&&t===void 0){let r=s!==void 0&&s.length===1;r&&(t=zs.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&zs.set(s,t))}return t}toString(){return this.cssText}},Zn=e=>new Br(typeof e=="string"?e:e+"",void 0,Xe),Yn=(e,...t)=>new Br(e.length===1?e[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,Xe),Gn=(e,t)=>{if(Ge)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let r=document.createElement("style"),i=ee.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},Fs=Ge?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let r of t.cssRules)s+=r.cssText;return Zn(s)})(e):e,{is:Xn,defineProperty:ta,getOwnPropertyDescriptor:ea,getOwnPropertyNames:sa,getOwnPropertySymbols:ra,getPrototypeOf:ia}=Object,fe=globalThis,Ws=fe.trustedTypes,na=Ws?Ws.emptyScript:"",aa=fe.reactiveElementPolyfillSupport,Ht=(e,t)=>e,Ue={toAttribute(e,t){switch(t){case Boolean:e=e?na:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},jr=(e,t)=>!Xn(e,t),Bs={attribute:!0,type:String,converter:Ue,reflect:!1,useDefault:!1,hasChanged:jr};Symbol.metadata??=Symbol("metadata"),fe.litPropertyMetadata??=new WeakMap;var vt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=Bs){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(t,s),!s.noAccessor){let r=Symbol(),i=this.getPropertyDescriptor(t,r,s);i!==void 0&&ta(this.prototype,t,i)}}static getPropertyDescriptor(t,s,r){let{get:i,set:n}=ea(this.prototype,t)??{get(){return this[s]},set(a){this[s]=a}};return{get:i,set(a){let l=i?.call(this);n?.call(this,a),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Bs}static _$Ei(){if(this.hasOwnProperty(Ht("elementProperties")))return;let t=ia(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ht("properties"))){let s=this.properties,r=[...sa(s),...ra(s)];for(let i of r)this.createProperty(i,s[i])}let t=this[Symbol.metadata];if(t!==null){let s=litPropertyMetadata.get(t);if(s!==void 0)for(let[r,i]of s)this.elementProperties.set(r,i)}this._$Eh=new Map;for(let[s,r]of this.elementProperties){let i=this._$Eu(s,r);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let s=[];if(Array.isArray(t)){let r=new Set(t.flat(1/0).reverse());for(let i of r)s.unshift(Fs(i))}else t!==void 0&&s.push(Fs(t));return s}static _$Eu(t,s){let r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,s=this.constructor.elementProperties;for(let r of s.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gn(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,s,r){this._$AK(t,r)}_$ET(t,s){let r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){let n=(r.converter?.toAttribute===void 0?Ue:r.converter).toAttribute(s,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,s){let r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=r.getPropertyOptions(i),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Ue:n.converter;this._$Em=i;let l=a.fromAttribute(s,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,s,r,i=!1,n){if(t!==void 0){let a=this.constructor;if(i===!1&&(n=this[t]),r??=a.getPropertyOptions(t),!((r.hasChanged??jr)(n,s)||r.useDefault&&r.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(a._$Eu(t,r))))return;this.C(t,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,s,{useDefault:r,reflect:i,wrapped:n},a){r&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??s??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||r||(s=void 0),this._$AL.set(t,s)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,n]of r){let{wrapped:a}=n,l=this[i];a!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let t=!1,s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw t=!1,this._$EM(),r}t&&this._$AE(s)}willUpdate(t){}_$AE(t){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(t){}firstUpdated(t){}};vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},vt[Ht("elementProperties")]=new Map,vt[Ht("finalized")]=new Map,aa?.({ReactiveElement:vt}),(fe.reactiveElementVersions??=[]).push("2.1.2");var ts=globalThis,js=e=>e,oe=ts.trustedTypes,Vs=oe?oe.createPolicy("lit-html",{createHTML:e=>e}):void 0,Vr="$lit$",G=`lit$${Math.random().toFixed(9).slice(2)}$`,Jr="?"+G,oa=`<${Jr}>`,gt=document,Wt=()=>gt.createComment(""),Bt=e=>e===null||typeof e!="object"&&typeof e!="function",es=Array.isArray,la=e=>es(e)||typeof e?.[Symbol.iterator]=="function",Se=`[ 	
\f\r]`,Mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Js=/-->/g,Ks=/>/g,it=RegExp(`>|${Se}(?:([^\\s"'>=/]+)(${Se}*=${Se}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Qs=/'/g,Zs=/"/g,Kr=/^(?:script|style|textarea|title)$/i,j=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),St=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ys=new WeakMap,ot=gt.createTreeWalker(gt,129);function Qr(e,t){if(!es(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vs===void 0?t:Vs.createHTML(t)}var da=(e,t)=>{let s=e.length-1,r=[],i,n=t===2?"<svg>":t===3?"<math>":"",a=Mt;for(let l=0;l<s;l++){let o=e[l],h,u,p=-1,c=0;for(;c<o.length&&(a.lastIndex=c,u=a.exec(o),u!==null);)c=a.lastIndex,a===Mt?u[1]==="!--"?a=Js:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=it):(Kr.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=it):a=Ks:a===it?u[0]===">"?(a=i??Mt,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?it:u[3]==='"'?Zs:Qs):a===Zs||a===Qs?a=it:a===Js||a===Ks?a=Mt:(a=it,i=void 0);let f=a===it&&e[l+1].startsWith("/>")?" ":"";n+=a===Mt?o+oa:p>=0?(r.push(h),o.slice(0,p)+Vr+o.slice(p)+G+f):o+G+(p===-2?l:f)}return[Qr(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},Ne=class Zr{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,l=t.length-1,o=this.parts,[h,u]=da(t,s);if(this.el=Zr.createElement(h,r),ot.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=ot.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(Vr)){let c=u[a++],f=i.getAttribute(p).split(G),g=/([.?@])?(.*)/.exec(c);o.push({type:1,index:n,name:g[2],strings:f,ctor:g[1]==="."?ha:g[1]==="?"?ua:g[1]==="@"?pa:me}),i.removeAttribute(p)}else p.startsWith(G)&&(o.push({type:6,index:n}),i.removeAttribute(p));if(Kr.test(i.tagName)){let p=i.textContent.split(G),c=p.length-1;if(c>0){i.textContent=oe?oe.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],Wt()),ot.nextNode(),o.push({type:2,index:++n});i.append(p[c],Wt())}}}else if(i.nodeType===8)if(i.data===Jr)o.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(G,p+1))!==-1;)o.push({type:7,index:n}),p+=G.length-1}n++}}static createElement(t,s){let r=gt.createElement("template");return r.innerHTML=t,r}};function Et(e,t,s=e,r){if(t===St)return t;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Bt(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(t=Et(e,i._$AS(e,t.values),i,r)),t}var ca=class{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:s},parts:r}=this._$AD,i=(t?.creationScope??gt).importNode(s,!0);ot.currentNode=i;let n=ot.nextNode(),a=0,l=0,o=r[0];for(;o!==void 0;){if(a===o.index){let h;o.type===2?h=new ss(n,n.nextSibling,this,t):o.type===1?h=new o.ctor(n,o.name,o.strings,this,t):o.type===6&&(h=new fa(n,this,t)),this._$AV.push(h),o=r[++l]}a!==o?.index&&(n=ot.nextNode(),a++)}return ot.currentNode=gt,i}p(t){let s=0;for(let r of this._$AV)r!==void 0&&(r.strings===void 0?r._$AI(t[s]):(r._$AI(t,r,s),s+=r.strings.length-2)),s++}},ss=class Yr{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Et(this,t,s),Bt(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==St&&this._(t):t._$litType$===void 0?t.nodeType===void 0?la(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==x&&Bt(this._$AH)?this._$AA.nextSibling.data=t:this.T(gt.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Ne.createElement(Qr(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new ca(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(t){let s=Ys.get(t.strings);return s===void 0&&Ys.set(t.strings,s=new Ne(t)),s}k(t){es(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of t)i===s.length?s.push(r=new Yr(this.O(Wt()),this.O(Wt()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let r=js(t).nextSibling;js(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},me=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,r,i,n){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=x}_$AI(t,s=this,r,i){let n=this.strings,a=!1;if(n===void 0)t=Et(this,t,s,0),a=!Bt(t)||t!==this._$AH&&t!==St,a&&(this._$AH=t);else{let l=t,o,h;for(t=n[0],o=0;o<n.length-1;o++)h=Et(this,l[r+o],s,o),h===St&&(h=this._$AH[o]),a||=!Bt(h)||h!==this._$AH[o],h===x?t=x:t!==x&&(t+=(h??"")+n[o+1]),this._$AH[o]=h}a&&!i&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ha=class extends me{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}},ua=class extends me{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}},pa=class extends me{constructor(t,s,r,i,n){super(t,s,r,i,n),this.type=5}_$AI(t,s=this){if((t=Et(this,t,s,0)??x)===St)return;let r=this._$AH,i=t===x&&r!==x||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==x&&(r===x||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},fa=class{constructor(t,s,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Et(this,t)}},ma=ts.litHtmlPolyfillSupport;ma?.(Ne,ss),(ts.litHtmlVersions??=[]).push("3.3.3");var _a=(e,t,s)=>{let r=s?.renderBefore??t,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new ss(t.insertBefore(Wt(),n),n,void 0,s??{})}return i._$AI(e),i},rs=globalThis,Dt=class extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=_a(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return St}};Dt._$litElement$=!0,Dt.finalized=!0,rs.litElementHydrateSupport?.({LitElement:Dt});var ga=rs.litElementPolyfillSupport;ga?.({LitElement:Dt}),(rs.litElementVersions??=[]).push("4.2.2");var Gs=2e3,ba=12e4,Xs="Unsupported file type. Choose a .zip full backup or a .bin config file.";function Ee(e){let t=e.toLowerCase();return t.endsWith(".zip")?"archive":t.endsWith(".bin")?"config":null}function $a(e,t){if(typeof URL.createObjectURL!="function")return;let s=new ArrayBuffer(e.byteLength);new Uint8Array(s).set(e);let r=new Blob([s],{type:"application/octet-stream"}),i=URL.createObjectURL(r),n=document.createElement("a");n.href=i,n.download=t,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(i),0)}var pt,va=(pt=class extends Dt{constructor(...t){super(...t),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return j`
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
            ${this.fileError?j`<span class="field-error" role="alert">${this.fileError}</span>`:x}
          </label>
          ${this.selectedFile&&!this.fileError?j`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${Ee(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
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
    `}renderNotice(t){return t?j`<div
      class="banner banner-${t.kind}"
      role=${t.kind==="error"?"alert":"status"}
    >
      ${t.message}
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
    `}createClient(){return Qn({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(t){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let s=this.createClient(),r=t==="archive"?await s.downloadBackup():await s.downloadConfig();if(!r.ok){this.downloadNotice={kind:"error",message:r.message};return}let i=t==="archive"?this.archiveFileName:this.binFileName;$a(r.data,i),this.downloadNotice={kind:"info",message:t==="archive"?`Full backup downloaded as ${i}.`:`Config downloaded as ${i}.`}}finally{this.downloading=!1}}}handleFileChange(t){let s=t.currentTarget,r=s.files&&s.files[0]?s.files[0]:null;this.selectedFile=r,this.uploadError=null,this.fileError=r?r.size===0?"The selected file is empty.":r.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:Ee(r.name)?null:Xs:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let t=Ee(this.selectedFile.name);if(!t)this.uploadError=Xs;else if(window.confirm(t==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let s;try{s=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let r=this.createClient(),i=t==="archive"?await r.uploadBackup(s):await r.uploadConfig(s);if(!i.ok){this.uploadError=i.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:t},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let t=this.renderRoot.querySelector("#edc-restore-file");t&&(t.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},Gs)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let t=!1;try{let s=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(s.ok){let r=await s.json();t=!!r&&typeof r=="object"&&r.healty===!0}}catch{t=!1}this.isConnected&&this.phase==="rebooting"&&(t?this.phase="ready":(this._attempts+=1,this._attempts*Gs>=ba?this.phase="timeout":this.schedulePoll()))}},pt.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},pt.styles=Yn`
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
  `,pt);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",va);var tr="Invalid settings response.";function ya(e){if(e&&typeof e=="object"&&"message"in e){let t=e.message;if(typeof t=="string"&&t.length>0)return t}}function wa(e,t){return t?.aborted===!0||typeof e=="object"&&!!e&&e.name==="AbortError"}function Gr(e,t){return wa(e,t)?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}async function Xr(e,t){let s=t;try{let r=await e.text();if(r.length>0)try{s=ya(JSON.parse(r))??s}catch{}}catch{}return{ok:!1,status:e.status,message:s}}function Aa(e){if(!e||typeof e!="object")return;let{host:t,uri:s,port:r,enabled:i}=e;if(typeof t=="string"&&typeof s=="string"&&typeof r=="number"&&Number.isFinite(r)&&typeof i=="boolean")return{host:t,uri:s,port:r,enabled:i}}async function ti(e){let t;try{t=await e.json()}catch{return{ok:!1,status:e.status,message:tr}}let s=Aa(t);return s?{ok:!0,data:s}:{ok:!1,status:e.status,message:tr}}async function Sa(e,t,s){let r;try{r=await fetch(e,{headers:{Accept:"application/json",...t},signal:s})}catch(i){return Gr(i,s)}return r.ok?ti(r):Xr(r,"Could not load the logger settings from the device.")}async function Ea(e,t,s,r){let i;try{i=await fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...s},body:JSON.stringify(t),signal:r})}catch(n){return Gr(n,r)}return i.ok?ti(i):Xr(i,"The device rejected the logger settings.")}function ka(e={}){let t=e.baseUrl??"",s=e.settingsPath??"/api/log/settings",r=e.headers??{},i=`${t}${s}`;return{getSettings(n){return Sa(i,r,n)},saveSettings(n,a){return Ea(i,n,r,a)}}}var se=globalThis,is=se.ShadowRoot&&(se.ShadyCSS===void 0||se.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ns=Symbol(),er=new WeakMap,ei=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==ns)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(is&&e===void 0){let s=t!==void 0&&t.length===1;s&&(e=er.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&er.set(t,e))}return e}toString(){return this.cssText}},xa=e=>new ei(typeof e=="string"?e:e+"",void 0,ns),Pa=(e,...t)=>new ei(e.length===1?e[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]),e,ns),Ca=(e,t)=>{if(is)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of t){let r=document.createElement("style"),i=se.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=s.cssText,e.appendChild(r)}},sr=is?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(let r of t.cssRules)s+=r.cssText;return xa(s)})(e):e,{is:Ta,defineProperty:Ma,getOwnPropertyDescriptor:Ua,getOwnPropertyNames:Na,getOwnPropertySymbols:Ra,getPrototypeOf:Ha}=Object,_e=globalThis,rr=_e.trustedTypes,Da=rr?rr.emptyScript:"",Ia=_e.reactiveElementPolyfillSupport,It=(e,t)=>e,Re={toAttribute(e,t){switch(t){case Boolean:e=e?Da:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},si=(e,t)=>!Ta(e,t),ir={attribute:!0,type:String,converter:Re,reflect:!1,useDefault:!1,hasChanged:si};Symbol.metadata??=Symbol("metadata"),_e.litPropertyMetadata??=new WeakMap;var yt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ir){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(e,s,t);r!==void 0&&Ma(this.prototype,e,r)}}static getPropertyDescriptor(e,t,s){let{get:r,set:i}=Ua(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:r,set(n){let a=r?.call(this);i?.call(this,n),this.requestUpdate(e,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ir}static _$Ei(){if(this.hasOwnProperty(It("elementProperties")))return;let e=Ha(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(It("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(It("properties"))){let t=this.properties,s=[...Na(t),...Ra(t)];for(let r of s)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[s,r]of t)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[t,s]of this.elementProperties){let r=this._$Eu(t,s);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let s=new Set(e.flat(1/0).reverse());for(let r of s)t.unshift(sr(r))}else e!==void 0&&t.push(sr(e));return t}static _$Eu(e,t){let s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ca(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){let s=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,s);if(r!==void 0&&s.reflect===!0){let i=(s.converter?.toAttribute===void 0?Re:s.converter).toAttribute(t,s.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let s=this.constructor,r=s._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),n=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute===void 0?Re:i.converter;this._$Em=r;let a=n.fromAttribute(t,i.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,s,r=!1,i){if(e!==void 0){let n=this.constructor;if(r===!1&&(i=this[e]),s??=n.getPropertyOptions(e),!((s.hasChanged??si)(i,t)||s.useDefault&&s.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:r,wrapped:i},n){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),i!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,i]of s){let{wrapped:n}=i,a=this[r];n!==!0||this._$AL.has(r)||a===void 0||this.C(r,void 0,i,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};yt.elementStyles=[],yt.shadowRootOptions={mode:"open"},yt[It("elementProperties")]=new Map,yt[It("finalized")]=new Map,Ia?.({ReactiveElement:yt}),(_e.reactiveElementVersions??=[]).push("2.1.2");var as=globalThis,nr=e=>e,le=as.trustedTypes,ar=le?le.createPolicy("lit-html",{createHTML:e=>e}):void 0,ri="$lit$",X=`lit$${Math.random().toFixed(9).slice(2)}$`,ii="?"+X,Oa=`<${ii}>`,bt=document,jt=()=>bt.createComment(""),Vt=e=>e===null||typeof e!="object"&&typeof e!="function",os=Array.isArray,La=e=>os(e)||typeof e?.[Symbol.iterator]=="function",ke=`[ 	
\f\r]`,Ut=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,or=/-->/g,lr=/>/g,nt=RegExp(`>|${ke}(?:([^\\s"'>=/]+)(${ke}*=${ke}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dr=/'/g,cr=/"/g,ni=/^(?:script|style|textarea|title)$/i,hr=(e=>(t,...s)=>({_$litType$:e,strings:t,values:s}))(1),kt=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),ur=new WeakMap,lt=bt.createTreeWalker(bt,129);function ai(e,t){if(!os(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ar===void 0?t:ar.createHTML(t)}var qa=(e,t)=>{let s=e.length-1,r=[],i,n=t===2?"<svg>":t===3?"<math>":"",a=Ut;for(let l=0;l<s;l++){let o=e[l],h,u,p=-1,c=0;for(;c<o.length&&(a.lastIndex=c,u=a.exec(o),u!==null);)c=a.lastIndex,a===Ut?u[1]==="!--"?a=or:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(a=nt):(ni.test(u[2])&&(i=RegExp("</"+u[2],"g")),a=nt):a=lr:a===nt?u[0]===">"?(a=i??Ut,p=-1):u[1]===void 0?p=-2:(p=a.lastIndex-u[2].length,h=u[1],a=u[3]===void 0?nt:u[3]==='"'?cr:dr):a===cr||a===dr?a=nt:a===or||a===lr?a=Ut:(a=nt,i=void 0);let f=a===nt&&e[l+1].startsWith("/>")?" ":"";n+=a===Ut?o+Oa:p>=0?(r.push(h),o.slice(0,p)+ri+o.slice(p)+X+f):o+X+(p===-2?l:f)}return[ai(e,n+(e[s]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]},He=class oi{constructor({strings:t,_$litType$:s},r){let i;this.parts=[];let n=0,a=0,l=t.length-1,o=this.parts,[h,u]=qa(t,s);if(this.el=oi.createElement(h,r),lt.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=lt.nextNode())!==null&&o.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let p of i.getAttributeNames())if(p.endsWith(ri)){let c=u[a++],f=i.getAttribute(p).split(X),g=/([.?@])?(.*)/.exec(c);o.push({type:1,index:n,name:g[2],strings:f,ctor:g[1]==="."?Fa:g[1]==="?"?Wa:g[1]==="@"?Ba:ge}),i.removeAttribute(p)}else p.startsWith(X)&&(o.push({type:6,index:n}),i.removeAttribute(p));if(ni.test(i.tagName)){let p=i.textContent.split(X),c=p.length-1;if(c>0){i.textContent=le?le.emptyScript:"";for(let f=0;f<c;f++)i.append(p[f],jt()),lt.nextNode(),o.push({type:2,index:++n});i.append(p[c],jt())}}}else if(i.nodeType===8)if(i.data===ii)o.push({type:2,index:n});else{let p=-1;for(;(p=i.data.indexOf(X,p+1))!==-1;)o.push({type:7,index:n}),p+=X.length-1}n++}}static createElement(t,s){let r=bt.createElement("template");return r.innerHTML=t,r}};function xt(e,t,s=e,r){if(t===kt)return t;let i=r===void 0?s._$Cl:s._$Co?.[r],n=Vt(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,s,r)),r===void 0?s._$Cl=i:(s._$Co??=[])[r]=i),i!==void 0&&(t=xt(e,i._$AS(e,t.values),i,r)),t}var za=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:s}=this._$AD,r=(e?.creationScope??bt).importNode(t,!0);lt.currentNode=r;let i=lt.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let o;l.type===2?o=new ls(i,i.nextSibling,this,e):l.type===1?o=new l.ctor(i,l.name,l.strings,this,e):l.type===6&&(o=new ja(i,this,e)),this._$AV.push(o),l=s[++a]}n!==l?.index&&(i=lt.nextNode(),n++)}return lt.currentNode=bt,r}p(e){let t=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(e[t]):(s._$AI(e,s,t),t+=s.strings.length-2)),t++}},ls=class li{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,s,r,i){this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,s=this._$AM;return s!==void 0&&t?.nodeType===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=xt(this,t,s),Vt(t)?t===M||t==null||t===""?(this._$AH!==M&&this._$AR(),this._$AH=M):t!==this._$AH&&t!==kt&&this._(t):t._$litType$===void 0?t.nodeType===void 0?La(t)?this.k(t):this._(t):this.T(t):this.$(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==M&&Vt(this._$AH)?this._$AA.nextSibling.data=t:this.T(bt.createTextNode(t)),this._$AH=t}$(t){let{values:s,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=He.createElement(ai(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(s);else{let n=new za(i,this),a=n.u(this.options);n.p(s),this.T(a),this._$AH=n}}_$AC(t){let s=ur.get(t.strings);return s===void 0&&ur.set(t.strings,s=new He(t)),s}k(t){os(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,r,i=0;for(let n of t)i===s.length?s.push(r=new li(this.O(jt()),this.O(jt()),this,this.options)):r=s[i],r._$AI(n),i++;i<s.length&&(this._$AR(r&&r._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);t!==this._$AB;){let r=nr(t).nextSibling;nr(t).remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},ge=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,r,i){this.type=1,this._$AH=M,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=M}_$AI(e,t=this,s,r){let i=this.strings,n=!1;if(i===void 0)e=xt(this,e,t,0),n=!Vt(e)||e!==this._$AH&&e!==kt,n&&(this._$AH=e);else{let a=e,l,o;for(e=i[0],l=0;l<i.length-1;l++)o=xt(this,a[s+l],t,l),o===kt&&(o=this._$AH[l]),n||=!Vt(o)||o!==this._$AH[l],o===M?e=M:e!==M&&(e+=(o??"")+i[l+1]),this._$AH[l]=o}n&&!r&&this.j(e)}j(e){e===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Fa=class extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===M?void 0:e}},Wa=class extends ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==M)}},Ba=class extends ge{constructor(e,t,s,r,i){super(e,t,s,r,i),this.type=5}_$AI(e,t=this){if((e=xt(this,e,t,0)??M)===kt)return;let s=this._$AH,r=e===M&&s!==M||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,i=e!==M&&(s===M||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},ja=class{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){xt(this,e)}},Va=as.litHtmlPolyfillSupport;Va?.(He,ls),(as.litHtmlVersions??=[]).push("3.3.3");var Ja=(e,t,s)=>{let r=s?.renderBefore??t,i=r._$litPart$;if(i===void 0){let n=s?.renderBefore??null;r._$litPart$=i=new ls(t.insertBefore(jt(),n),n,void 0,s??{})}return i._$AI(e),i},ds=globalThis,Ot=class extends yt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ja(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return kt}};Ot._$litElement$=!0,Ot.finalized=!0,ds.litElementHydrateSupport?.({LitElement:Ot});var Ka=ds.litElementPolyfillSupport;Ka?.({LitElement:Ot}),(ds.litElementVersions??=[]).push("4.2.2");var ft,Qa=(ft=class extends Ot{constructor(...t){super(...t),this.baseUrl="",this.settingsPath="/api/log/settings",this.deviceName="logger",this.maxHostLength=63,this.formHost="",this.formUri="",this.formPort="",this.formEnabled=!1,this.loading=!1,this.saving=!1,this.notice=null,this.loaded=!1,this._loadStarted=!1}connectedCallback(){super.connectedCallback(),this.load()}firstUpdated(){this._loadStarted||this.load()}render(){return hr`
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
    `}renderNotice(t){return t?hr`<div
      class="banner banner-${t.kind}"
      role=${t.kind==="error"?"alert":"status"}
    >
      ${t.text}
    </div>`:M}createClient(){return ka({baseUrl:this.baseUrl,settingsPath:this.settingsPath})}async load(){if(!(this.loading||this.saving)){this._loadStarted=!0,this.loading=!0,this.notice=null;try{let t=await this.createClient().getSettings();if(!t.ok){this.notice={kind:"error",text:t.message};return}this.applySettings(t.data),this.loaded=!0}finally{this.loading=!1}}}applySettings(t){this.formHost=t.host,this.formUri=t.uri,this.formPort=String(t.port),this.formEnabled=t.enabled}handleHostInput(t){this.formHost=t.currentTarget.value}handleUriInput(t){this.formUri=t.currentTarget.value}handlePortInput(t){this.formPort=t.currentTarget.value}handleEnabledChange(t){this.formEnabled=t.currentTarget.checked}validate(){let t=this.formHost.trim(),s=this.formUri.trim();if(t.length===0)return"Host is required.";if(t.length>this.maxHostLength)return`Host must be ${this.maxHostLength} characters or fewer.`;if(s.length===0)return"URI is required.";if(s.length>this.maxHostLength)return`URI must be ${this.maxHostLength} characters or fewer.`;let r=this.formPort.trim();if(!/^\d+$/.test(r))return"Port must be a whole number between 1 and 65535.";let i=Number(r);return!Number.isInteger(i)||i<1||i>65535?"Port must be a whole number between 1 and 65535.":{host:t,uri:s,port:i,enabled:this.formEnabled}}async handleSave(){if(this.loading||this.saving)return;let t=this.validate();if(typeof t=="string")this.notice={kind:"error",text:t};else{this.saving=!0,this.notice=null;try{let s=await this.createClient().saveSettings(t);if(!s.ok){this.notice={kind:"error",text:s.message};return}this.applySettings(s.data),this.loaded=!0,this.notice={kind:"info",text:"Settings saved."},this.dispatchEvent(new CustomEvent("edu-log-saved",{detail:s.data,bubbles:!0,composed:!0}))}finally{this.saving=!1}}}},ft.properties={baseUrl:{type:String,attribute:"base-url"},settingsPath:{type:String,attribute:"settings-path"},deviceName:{type:String,attribute:"device-name"},maxHostLength:{type:Number,attribute:"max-host-length"},formHost:{state:!0},formUri:{state:!0},formPort:{state:!0},formEnabled:{state:!0},loading:{state:!0},saving:{state:!0},notice:{state:!0},loaded:{state:!0}},ft.styles=Pa`
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
  `,ft);typeof customElements<"u"&&!customElements.get("edu-log-settings-page")&&customElements.define("edu-log-settings-page",Qa);const pr=document.getElementById("app");pr&&$i(d(pn,{}),pr);
