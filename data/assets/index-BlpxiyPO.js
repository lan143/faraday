(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();var kt,U,Jr,re,Rs,Qr,Kr,Ot,ut,ze,Zr,ts,Vt,Jt,vt={},$t=[],Ki=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Et=Array.isArray;function te(t,e){for(var s in e)t[s]=e[s];return t}function ss(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function Zi(t,e,s){var i,r,n,o={};for(n in e)n=="key"?i=e[n]:n=="ref"?r=e[n]:o[n]=e[n];if(arguments.length>2&&(o.children=arguments.length>3?kt.call(arguments,2):s),typeof t=="function"&&t.defaultProps!=null)for(n in t.defaultProps)o[n]===void 0&&(o[n]=t.defaultProps[n]);return pt(t,o,i,r,null)}function pt(t,e,s,i,r){var n={type:t,props:e,key:s,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:r??++Jr,__i:-1,__u:0};return r==null&&U.vnode!=null&&U.vnode(n),n}function q(t){return t.children}function ft(t,e){this.props=t,this.context=e}function Ae(t,e){if(e==null)return t.__?Ae(t.__,t.__i+1):null;for(var s;e<t.__k.length;e++)if((s=t.__k[e])!=null&&s.__e!=null)return s.__e;return typeof t.type=="function"?Ae(t):null}function Gi(t){if(t.__P&&t.__d){var e=t.__v,s=e.__e,i=[],r=[],n=te({},e);n.__v=e.__v+1,U.vnode&&U.vnode(n),rs(t.__P,n,e,t.__n,t.__P.namespaceURI,32&e.__u?[s]:null,i,s??Ae(e),!!(32&e.__u),r),n.__v=e.__v,n.__.__k[n.__i]=n,ti(i,n,r),e.__e=e.__=null,n.__e!=s&&Gr(n)}}function Gr(t){if((t=t.__)!=null&&t.__c!=null)return t.__e=t.__c.base=null,t.__k.some(function(e){if(e!=null&&e.__e!=null)return t.__e=t.__c.base=e.__e}),Gr(t)}function Ds(t){(!t.__d&&(t.__d=!0)&&re.push(t)&&!yt.__r++||Rs!=U.debounceRendering)&&((Rs=U.debounceRendering)||Qr)(yt)}function yt(){try{for(var t,e=1;re.length;)re.length>e&&re.sort(Kr),t=re.shift(),e=re.length,Gi(t)}finally{re.length=yt.__r=0}}function Yr(t,e,s,i,r,n,o,d,l,h,u){var p,c,f,$,y,b,m=i&&i.__k||$t,v=e.length;for(l=Yi(s,e,m,l,v),p=0;p<v;p++)(f=s.__k[p])!=null&&(c=f.__i!=-1&&m[f.__i]||vt,f.__i=p,b=rs(t,f,c,r,n,o,d,l,h,u),$=f.__e,f.ref&&c.ref!=f.ref&&(c.ref&&is(c.ref,null,f),u.push(f.ref,f.__c||$,f)),y==null&&$!=null&&(y=$),4&f.__u?(l=Xr(f,l,t),c.__e&&(c.__e=null)):typeof f.type=="function"&&b!==void 0?l=b:$&&(l=$.nextSibling),f.__u&=-7);return s.__e=y,l}function Yi(t,e,s,i,r){var n,o,d,l,h,u=s.length,p=u,c=0;for(t.__k=new Array(r),n=0;n<r;n++)(o=e[n])!=null&&typeof o!="boolean"&&typeof o!="function"?(typeof o=="string"||typeof o=="number"||typeof o=="bigint"||o.constructor==String?o=t.__k[n]=pt(null,o,null,null,null):Et(o)?o=t.__k[n]=pt(q,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=t.__k[n]=pt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):t.__k[n]=o,l=n+c,o.__=t,o.__b=t.__b+1,d=null,(h=o.__i=Xi(o,s,l,p))!=-1&&(p--,(d=s[h])&&(d.__u|=2)),d==null||d.__v==null?(h==-1&&(r>u?c--:r<u&&c++),typeof o.type!="function"&&(o.__u|=4)):h!=l&&(h==l-1?c--:h==l+1?c++:(h>l?c--:c++,o.__u|=4))):t.__k[n]=null;if(p)for(n=0;n<u;n++)(d=s[n])!=null&&(2&d.__u)==0&&(d.__e==i&&(i=Ae(d)),ri(d,d));return i}function Xr(t,e,s){var i,r;if(typeof t.type=="function"){for(i=t.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=t,e=Xr(i[r],e,s));return e}t.__e!=e&&(e&&t.type&&!e.parentNode&&(e=Ae(t)),e=s.insertBefore(t.__e,e||null));do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Xi(t,e,s,i){var r,n,o,d=t.key,l=t.type,h=e[s],u=h!=null&&(2&h.__u)==0;if(h===null&&d==null||u&&d==h.key&&l==h.type)return s;if(i>(u?1:0)){for(r=s-1,n=s+1;r>=0||n<e.length;)if((h=e[o=r>=0?r--:n++])!=null&&(2&h.__u)==0&&d==h.key&&l==h.type)return o}return-1}function Hs(t,e,s){e[0]=="-"?t.setProperty(e,s??""):t[e]=s==null?"":typeof s!="number"||Ki.test(e)?s:s+"px"}function it(t,e,s,i,r){var n,o;e:if(e=="style")if(typeof s=="string")t.style.cssText=s;else{if(typeof i=="string"&&(t.style.cssText=i=""),i)for(e in i)s&&e in s||Hs(t.style,e,"");if(s)for(e in s)i&&s[e]==i[e]||Hs(t.style,e,s[e])}else if(e[0]=="o"&&e[1]=="n")n=e!=(e=e.replace(Zr,"$1")),o=e.toLowerCase(),e=o in t||e=="onFocusOut"||e=="onFocusIn"?o.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+n]=s,s?i?s[ze]=i[ze]:(s[ze]=ts,t.addEventListener(e,n?Jt:Vt,n)):t.removeEventListener(e,n?Jt:Vt,n);else{if(r=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=s??"";break e}catch{}typeof s=="function"||(s==null||s===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&s==1?"":s))}}function Is(t){return function(e){if(this.l){var s=this.l[e.type+t];if(e[ut]==null)e[ut]=ts++;else if(e[ut]<s[ze])return;return s(U.event?U.event(e):e)}}}function rs(t,e,s,i,r,n,o,d,l,h){var u,p,c,f,$,y,b,m,v,w,T,k,D,F,Z,O,B=e.type;if(e.constructor!==void 0)return null;128&s.__u&&(l=!!(32&s.__u),n=[d=e.__e=s.__e]),(u=U.__b)&&u(e);e:if(typeof B=="function"){p=o.length;try{if(v=e.props,w=B.prototype&&B.prototype.render,T=(u=B.contextType)&&i[u.__c],k=u?T?T.props.value:u.__:i,s.__c?m=(c=e.__c=s.__c).__=c.__E:(w?e.__c=c=new B(v,k):(e.__c=c=new ft(v,k),c.constructor=B,c.render=tn),T&&T.sub(c),c.state||(c.state={}),c.__n=i,f=c.__d=!0,c.__h=[],c._sb=[]),w&&c.__s==null&&(c.__s=c.state),w&&B.getDerivedStateFromProps!=null&&(c.__s==c.state&&(c.__s=te({},c.__s)),te(c.__s,B.getDerivedStateFromProps(v,c.__s))),$=c.props,y=c.state,c.__v=e,f)w&&B.getDerivedStateFromProps==null&&c.componentWillMount!=null&&c.componentWillMount(),w&&c.componentDidMount!=null&&c.__h.push(c.componentDidMount);else{if(w&&B.getDerivedStateFromProps==null&&v!==$&&c.componentWillReceiveProps!=null&&c.componentWillReceiveProps(v,k),e.__v==s.__v||!c.__e&&c.shouldComponentUpdate!=null&&c.shouldComponentUpdate(v,c.__s,k)===!1){e.__v!=s.__v&&(c.props=v,c.state=c.__s,c.__d=!1),e.__e=s.__e,e.__k=s.__k,e.__k.some(function(V){V&&(V.__=e)}),$t.push.apply(c.__h,c._sb),c._sb=[],c.__h.length&&o.push(c),d=Ae(s);break e}c.componentWillUpdate!=null&&c.componentWillUpdate(v,c.__s,k),w&&c.componentDidUpdate!=null&&c.__h.push(function(){c.componentDidUpdate($,y,b)})}if(c.context=k,c.props=v,c.__P=t,c.__e=!1,D=U.__r,F=0,w)c.state=c.__s,c.__d=!1,D&&D(e),u=c.render(c.props,c.state,c.context),$t.push.apply(c.__h,c._sb),c._sb=[];else do c.__d=!1,D&&D(e),u=c.render(c.props,c.state,c.context),c.state=c.__s;while(c.__d&&++F<25);c.state=c.__s,c.getChildContext!=null&&(i=te(te({},i),c.getChildContext())),w&&!f&&c.getSnapshotBeforeUpdate!=null&&(b=c.getSnapshotBeforeUpdate($,y)),Z=u!=null&&u.type===q&&u.key==null?si(u.props.children):u,d=Yr(t,Et(Z)?Z:[Z],e,s,i,r,n,o,d,l,h),c.base=e.__e,e.__u&=-161,c.__h.length&&o.push(c),m&&(c.__E=c.__=null)}catch(V){if(o.length=p,e.__v=null,l||n!=null){if(V.then){for(e.__u|=l?160:128;d&&d.nodeType==8&&d.nextSibling;)d=d.nextSibling;n!=null&&(n[n.indexOf(d)]=null),e.__e=d}else if(n!=null)for(O=n.length;O--;)ss(n[O])}else e.__e=s.__e;e.__k==null&&(e.__k=s.__k||[]),V.then||ei(e),U.__e(V,e,s)}}else n==null&&e.__v==s.__v?(e.__k=s.__k,e.__e=s.__e):d=e.__e=en(s.__e,e,s,i,r,n,o,l,h);return(u=U.diffed)&&u(e),128&e.__u?void 0:d}function ei(t){t&&(t.__c&&(t.__c.__e=!0),t.__k&&t.__k.some(ei))}function ti(t,e,s){for(var i=0;i<s.length;i++)is(s[i],s[++i],s[++i]);U.__c&&U.__c(e,t),t.some(function(r){try{t=r.__h,r.__h=[],t.some(function(n){n.call(r)})}catch(n){U.__e(n,r.__v)}})}function si(t){return typeof t!="object"||t==null||t.__b>0?t:Et(t)?t.map(si):t.constructor!==void 0?null:te({},t)}function en(t,e,s,i,r,n,o,d,l){var h,u,p,c,f,$,y,b=s.props||vt,m=e.props,v=e.type;if(v=="svg"?r="http://www.w3.org/2000/svg":v=="math"?r="http://www.w3.org/1998/Math/MathML":r||(r="http://www.w3.org/1999/xhtml"),n!=null){for(h=0;h<n.length;h++)if((f=n[h])&&"setAttribute"in f==!!v&&(v?f.localName==v:f.nodeType==3)){t=f,n[h]=null;break}}if(t==null){if(v==null)return document.createTextNode(m);t=document.createElementNS(r,v,m.is&&m),d&&(U.__m&&U.__m(e,n),d=!1),n=null}if(v==null)b===m||d&&t.data==m||(t.data=m);else{if(n=v=="textarea"&&m.defaultValue!=null?null:n&&kt.call(t.childNodes),!d&&n!=null)for(b={},h=0;h<t.attributes.length;h++)b[(f=t.attributes[h]).name]=f.value;for(h in b)f=b[h],h=="dangerouslySetInnerHTML"?p=f:h=="children"||h in m||h=="value"&&"defaultValue"in m||h=="checked"&&"defaultChecked"in m||it(t,h,null,f,r);for(h in m)f=m[h],h=="children"?c=f:h=="dangerouslySetInnerHTML"?u=f:h=="value"?$=f:h=="checked"?y=f:d&&typeof f!="function"||b[h]===f||it(t,h,f,b[h],r);if(u)d||p&&(u.__html==p.__html||u.__html==t.innerHTML)||(t.innerHTML=u.__html),e.__k=[];else if(p&&(t.innerHTML=""),Yr(e.type=="template"?t.content:t,Et(c)?c:[c],e,s,i,v=="foreignObject"?"http://www.w3.org/1999/xhtml":r,n,o,n?n[0]:s.__k&&Ae(s,0),d,l),n!=null)for(h=n.length;h--;)ss(n[h]);d&&v!="textarea"||(h="value",v=="progress"&&$==null?t.removeAttribute("value"):$!=null&&($!==t[h]||v=="progress"&&!$||v=="option"&&$!=b[h])&&it(t,h,$,b[h],r),h="checked",y!=null&&y!=t[h]&&it(t,h,y,b[h],r))}return t}function is(t,e,s){try{if(typeof t=="function"){var i=typeof t.__u=="function";i&&t.__u(),i&&e==null||(t.__u=t(e))}else t.current=e}catch(r){U.__e(r,s)}}function ri(t,e,s){var i,r;if(U.unmount&&U.unmount(t),(i=t.ref)&&(i.current&&i.current!=t.__e||is(i,null,e)),(i=t.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(n){U.__e(n,e)}i.base=i.__P=i.__n=null}if(i=t.__k)for(r=0;r<i.length;r++)i[r]&&ri(i[r],e,s||typeof t.type!="function");s||ss(t.__e),t.__c=t.__=t.__e=void 0}function tn(t,e,s){return this.constructor(t,s)}function sn(t,e,s){var i,r,n,o;e==document&&(e=document.documentElement),U.__&&U.__(t,e),r=(i=!1)?null:e.__k,n=[],o=[],rs(e,t=e.__k=Zi(q,null,[t]),r||vt,vt,e.namespaceURI,r?null:e.firstChild?kt.call(e.childNodes):null,n,r?r.__e:e.firstChild,i,o),ti(n,t,o),t.props.children=null}kt=$t.slice,U={__e:function(t,e,s,i){for(var r,n,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((n=r.constructor)&&n.getDerivedStateFromError!=null&&(r.setState(n.getDerivedStateFromError(t)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(t,i||{}),o=r.__d),o)return r.__E=r}catch(d){t=d}throw t}},Jr=0,ft.prototype.setState=function(t,e){var s;s=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=te({},this.state),typeof t=="function"&&(t=t(te({},s),this.props)),t&&te(s,t),t!=null&&this.__v&&(e&&this._sb.push(e),Ds(this))},ft.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),Ds(this))},ft.prototype.render=q,re=[],Qr=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Kr=function(t,e){return t.__v.__b-e.__v.__b},yt.__r=0,Ot=Math.random().toString(8),ut="__d"+Ot,ze="__a"+Ot,Zr=/(PointerCapture)$|Capture$/i,ts=0,Vt=Is(!1),Jt=Is(!0);var rn=0;function a(t,e,s,i,r,n){e||(e={});var o,d,l=e;if("ref"in l)for(d in l={},e)d=="ref"?o=e[d]:l[d]=e[d];var h={type:t,props:l,key:s,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--rn,__i:-1,__u:0,__source:r,__self:n};if(typeof t=="function"&&(o=t.defaultProps))for(d in o)l[d]===void 0&&(l[d]=o[d]);return U.vnode&&U.vnode(h),h}var Ze,L,Lt,Os,Ge=0,ii=[],j=U,Ls=j.__b,Bs=j.__r,js=j.diffed,qs=j.__c,Fs=j.unmount,zs=j.__;function ns(t,e){j.__h&&j.__h(L,t,Ge||e),Ge=0;var s=L.__H||(L.__H={__:[],__h:[]});return t>=s.__.length&&s.__.push({}),s.__[t]}function _(t){return Ge=1,nn(ai,t)}function nn(t,e,s){var i=ns(Ze++,2);if(i.t=t,!i.__c&&(i.__=[ai(void 0,e),function(d){var l=i.__N?i.__N[0]:i.__[0],h=i.t(l,d);l!==h&&(i.__N=[h,i.__[1]],i.__c.setState({}))}],i.__c=L,!L.__f)){var r=function(d,l,h){if(!i.__c.__H)return!0;var u=!1,p=i.__c.props!==d;if(i.__c.__H.__.some(function(f){if(f.__N){u=!0;var $=f.__[0];f.__=f.__N,f.__N=void 0,$!==f.__[0]&&(p=!0)}}),n){var c=n.call(this,d,l,h);return u?c||p:c}return!u||p};L.__f=!0;var n=L.shouldComponentUpdate,o=L.componentWillUpdate;L.componentWillUpdate=function(d,l,h){if(this.__e){var u=n;n=void 0,r(d,l,h),n=u}o&&o.call(this,d,l,h)},L.shouldComponentUpdate=r}return i.__N||i.__}function Q(t,e){var s=ns(Ze++,3);!j.__s&&ni(s.__H,e)&&(s.__=t,s.u=e,L.__H.__h.push(s))}function oe(t){return Ge=5,as(function(){return{current:t}},[])}function as(t,e){var s=ns(Ze++,7);return ni(s.__H,e)&&(s.__=t(),s.__H=e,s.__h=t),s.__}function M(t,e){return Ge=8,as(function(){return t},e)}function an(){for(var t;t=ii.shift();){var e=t.__H;if(t.__P&&e)try{e.__h.some(mt),e.__h.some(Qt),e.__h=[]}catch(s){e.__h=[],j.__e(s,t.__v)}}}j.__b=function(t){L=null,Ls&&Ls(t)},j.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),zs&&zs(t,e)},j.__r=function(t){Bs&&Bs(t),Ze=0;var e=(L=t.__c).__H;e&&(Lt===L?(e.__h=[],L.__h=[],e.__.some(function(s){s.__N&&(s.__=s.__N),s.u=s.__N=void 0})):(e.__h.some(mt),e.__h.some(Qt),e.__h=[],Ze=0)),Lt=L},j.diffed=function(t){js&&js(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(ii.push(e)!==1&&Os===j.requestAnimationFrame||((Os=j.requestAnimationFrame)||on)(an)),e.__H.__.some(function(s){s.u&&(s.__H=s.u,s.u=void 0)})),Lt=L=null},j.__c=function(t,e){e.some(function(s){try{s.__h.some(mt),s.__h=s.__h.filter(function(i){return!i.__||Qt(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],j.__e(i,s.__v)}}),qs&&qs(t,e)},j.unmount=function(t){Fs&&Fs(t);var e,s=t.__c;s&&s.__H&&(s.__H.__.some(function(i){try{mt(i)}catch(r){e=r}}),s.__H=void 0,e&&j.__e(e,s.__v))};var Ws=typeof requestAnimationFrame=="function";function on(t){var e,s=function(){clearTimeout(i),Ws&&cancelAnimationFrame(e),setTimeout(t)},i=setTimeout(s,35);Ws&&(e=requestAnimationFrame(s))}function mt(t){var e=L,s=t.__c;typeof s=="function"&&(t.__c=void 0,s()),L=e}function Qt(t){var e=L;t.__c=t.__(),L=e}function ni(t,e){return!t||t.length!==e.length||e.some(function(s,i){return s!==t[i]})}function ai(t,e){return typeof e=="function"?e(t):e}const K="Device returned an empty response.",os="Could not reach the device. Check that you are connected to its network and try again.",ln={},g={mqtt:{hostMax:63,loginMax:31,passwordMax:31,haDiscoveryPrefixMax:63,topicMax:63},modbus:{speeds:[9600,19200,38400,57600,115200],addressMin:1,addressMax:247,anenjiAddressMin:0,anenjiAddressMax:247},meter:{ctRatioMin:0,ctRatioMax:65535,syncMin:0},bms:{cellCountMin:1,cellCountMax:20}};function ls(){return{ok:!1,message:os}}function dn(t){try{const e=JSON.parse(t);if(e&&typeof e=="object"&&"message"in e){const s=e.message;if(typeof s=="string"&&s)return s}}catch{}}async function ds(t){let e=`Request failed (HTTP ${t.status}).`;try{const s=await t.text();s&&(e=dn(s)??e)}catch{}return{ok:!1,status:t.status,message:e}}async function X(t,e){let s;try{s=await fetch(t,{headers:{Accept:"application/json"}})}catch{return ls()}if(!s.ok)return ds(s);let i;try{i=await s.text()}catch{return{ok:!1,status:s.status,message:os}}if(!i.trim())return{ok:!1,status:s.status,message:e};try{return{ok:!0,data:JSON.parse(i)}}catch{return{ok:!1,status:s.status,message:e}}}async function Ct(t,e){let s;try{s=await fetch(t,e)}catch{return ls()}if(!s.ok)return ds(s);try{await s.text()}catch{}return{ok:!0,data:ln}}function cn(t,e){return Ct(t,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:e.toString()})}async function xt(t,e,s){let i;try{i=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})}catch{return ls()}if(!i.ok)return ds(i);let r;try{r=await i.text()}catch{return{ok:!1,status:i.status,message:os}}if(!r.trim())return{ok:!1,status:i.status,message:s};try{return{ok:!0,data:JSON.parse(r)}}catch{return{ok:!1,status:i.status,message:s}}}function oi(){return X("/api/status",K)}function li(){return X("/healthcheck/healty",K)}function hn(){return X("/healthcheck/ready",K)}function un(){return Ct("/api/reboot",{method:"POST"})}function pn(){return X("/api/settings",K)}function ce(t,e,s,i=!1){if(typeof t!="string")throw new Error(`${e} is required.`);if(!i&&t.length===0)throw new Error(`${e} must not be empty.`);if(t.length>s)throw new Error(`${e} must be at most ${s} characters.`);return t}function fn(t){const e=ce(t.host,"MQTT host",g.mqtt.hostMax);if(typeof t.port!="number"||!Number.isInteger(t.port)||t.port<1||t.port>65535)throw new Error("MQTT port must be an integer between 1 and 65535.");const s=ce(t.login,"MQTT login",g.mqtt.loginMax,!0),i=ce(t.password,"MQTT password",g.mqtt.passwordMax,!0),r=ce(t.haDiscoveryPrefix,"HA discovery prefix",g.mqtt.haDiscoveryPrefixMax);if(typeof t.mqttIsHADiscovery!="boolean")throw new Error("HA discovery flag must be true or false.");const n=ce(t.stateTopic,"State topic",g.mqtt.topicMax),o=ce(t.commandTopic,"Command topic",g.mqtt.topicMax),d=ce(t.statusTopic,"Status topic",g.mqtt.topicMax),l=new URLSearchParams;return l.set("host",e),l.set("port",String(t.port)),l.set("login",s),l.set("password",i),l.set("haDiscoveryPrefix",r),l.set("mqttIsHADiscovery",t.mqttIsHADiscovery?"true":"false"),l.set("stateTopic",n),l.set("commandTopic",o),l.set("statusTopic",d),cn("/api/settings/mqtt",l)}function mn(){return X("/api/settings/modbus",K)}function gn(t){if(!g.modbus.speeds.includes(t.modbusSpeed))throw new Error(`Modbus speed must be one of ${g.modbus.speeds.join(", ")}.`);if(!Number.isInteger(t.map12eAddress)||t.map12eAddress<g.modbus.addressMin||t.map12eAddress>g.modbus.addressMax)throw new Error(`MAP12E address must be an integer between ${g.modbus.addressMin} and ${g.modbus.addressMax}.`);if(!Number.isInteger(t.anenjiAddress)||t.anenjiAddress<g.modbus.anenjiAddressMin||t.anenjiAddress>g.modbus.anenjiAddressMax)throw new Error(`Anenji address must be an integer between ${g.modbus.anenjiAddressMin} and ${g.modbus.anenjiAddressMax}.`);return xt("/api/settings/modbus",{modbusSpeed:t.modbusSpeed,map12eAddress:t.map12eAddress,anenjiAddress:t.anenjiAddress},K)}function Vs(){return X("/api/settings/anenji",K)}function Js(){return X("/api/settings/meter",K)}function Qs(t){const e={};if(t.ct1Ratio!==void 0){if(!Number.isInteger(t.ct1Ratio)||t.ct1Ratio<g.meter.ctRatioMin||t.ct1Ratio>g.meter.ctRatioMax)throw new Error(`CT ratio must be an integer between ${g.meter.ctRatioMin} and ${g.meter.ctRatioMax}.`);e.ct1Ratio=t.ct1Ratio}if(t.energySyncValue!==void 0){if(!Number.isFinite(t.energySyncValue)||t.energySyncValue<g.meter.syncMin)throw new Error("Energy sync value must be a number greater than or equal to 0.");e.energySyncValue=t.energySyncValue}if(e.ct1Ratio===void 0&&e.energySyncValue===void 0)throw new Error("ct1Ratio or energySyncValue required.");return xt("/api/settings/meter",e,K)}function Ks(){return X("/api/controls",K)}function _n(t){const e={};if(t.ventilation!==void 0){if(typeof t.ventilation!="boolean")throw new Error("Ventilation must be true or false.");e.ventilation=t.ventilation}if(t.light!==void 0){if(typeof t.light!="boolean")throw new Error("Light must be true or false.");e.light=t.light}if(t.generator!==void 0){if(typeof t.generator!="boolean")throw new Error("Generator must be true or false.");e.generator=t.generator}if(e.ventilation===void 0&&e.light===void 0&&e.generator===void 0)throw new Error("ventilation or light or generator required.");return xt("/api/controls",e,K)}function Zs(){return X("/api/bms",K)}const bn=/^[0-9A-Fa-f]{2}(:[0-9A-Fa-f]{2}){5}$/;function vn(t){if(typeof t.mac!="string")throw new Error("MAC address is required.");const e=t.mac.trim();if(e!==""&&!bn.test(e))throw new Error("MAC address must look like AA:BB:CC:DD:EE:FF.");if(!Number.isInteger(t.cellCount)||t.cellCount<g.bms.cellCountMin||t.cellCount>g.bms.cellCountMax)throw new Error(`Cell count must be an integer between ${g.bms.cellCountMin} and ${g.bms.cellCountMax}.`);return xt("/api/bms/settings",{mac:e,cellCount:t.cellCount},K)}function $n(){return Ct("/api/bms/scan/start",{method:"POST"})}async function yn(){const t=await Ct("/api/bms/clear_errors",{method:"POST"});return t.ok?{ok:!0,data:void 0}:t}function wn(){return X("/api/bms/scan/status",K)}function An({tabs:t,active:e,onSelect:s}){return a("nav",{class:"tab-bar",role:"tablist","aria-label":"Sections",children:t.map(i=>a("button",{type:"button",role:"tab",id:`tab-${i.id}`,"aria-selected":i.id===e,"aria-controls":`panel-${i.id}`,class:i.id===e?"active":void 0,onClick:()=>s(i.id),children:i.label},i.id))})}function x({kind:t="info",message:e,onClose:s}){return a("div",{class:`banner banner-${t}`,role:"status",children:[a("span",{children:e}),s?a("button",{type:"button",class:"banner-close","aria-label":"Dismiss",onClick:s,children:"×"}):null]})}function Sn(t){switch(t){case"primary":return"btn btn-primary";case"danger":return"btn btn-danger";default:return"btn"}}function I({children:t,variant:e="default",type:s="button",disabled:i,title:r,onClick:n}){return a("button",{type:s,class:Sn(e),disabled:i,title:r,onClick:n,children:t})}function kn(t){return a(I,{...t,variant:"danger"})}function N({title:t,children:e,class:s}){return a("section",{class:s?`card ${s}`:"card",children:[t?a("h2",{children:t}):null,e]})}const Bt=2e3,En=12e4;function Cn(){const[t,e]=_("idle"),s=oe(0);Q(()=>{if(t!=="rebooting")return;let o=!1,d;const l=()=>{li().then(h=>{if(!o){if(h.ok){e("ready");return}if(s.current+=1,s.current*Bt>=En){e("timeout");return}d=window.setTimeout(l,Bt)}})};return d=window.setTimeout(l,Bt),()=>{o=!0,d!==void 0&&window.clearTimeout(d)}},[t]);const i=M(()=>{s.current=0,e("rebooting")},[]),r=M(()=>e("idle"),[]),n=M(()=>{s.current=0,e("rebooting")},[]);return as(()=>({phase:t,start:i,dismiss:r,retry:n}),[t,i,r,n])}function xn({flow:t}){return t.phase==="idle"?null:a("div",{class:"reboot-overlay",role:"alertdialog","aria-modal":"true","aria-label":"Device rebooting",children:a("div",{class:"reboot-dialog card",children:[a("h2",{children:"Device is rebooting"}),t.phase==="rebooting"?a(q,{children:[a("p",{children:"Waiting for the device to come back online. This usually takes 20–60 seconds."}),a("p",{class:"muted","aria-live":"polite",children:"Polling device health…"})]}):null,t.phase==="ready"?a(q,{children:[a(x,{kind:"success",message:"The device is back online."}),a("div",{class:"form-actions",children:a(I,{variant:"primary",onClick:()=>window.location.reload(),children:"Reload panel"})})]}):null,t.phase==="timeout"?a(q,{children:[a(x,{kind:"error",message:"No response after about two minutes. Check the power and network, then reload or keep waiting."}),a("div",{class:"form-actions",children:[a(I,{onClick:t.retry,children:"Keep waiting"}),a(I,{onClick:t.dismiss,children:"Dismiss"})]})]}):null]})})}const Pn=1e4;function Mn(t){const e=Math.max(0,Math.floor(t)),s=Math.floor(e/86400),i=Math.floor(e%86400/3600),r=Math.floor(e%3600/60),n=e%60,o=[];return s&&o.push(`${s}d`),(s||i)&&o.push(`${i}h`),(s||i||r)&&o.push(`${r}m`),o.push(`${n}s`),o.join(" ")}function Tn(t){return Number.isFinite(t)?`${Math.round(t/1024)} KB (${Math.round(t)} bytes)`:String(t)}function Nn(){const[t,e]=_(null),[s,i]=_(null),[r,n]=_(!1),[o,d]=_(null),[l,h]=_(null),[u,p]=_(!0),[c,f]=_(null),[$,y]=_(!1),b=Cn(),m=M(async()=>{const D=await oi();D.ok?(e(D.data),i(null)):i(D.message),n(!0)},[]),v=M(async()=>{p(!0);const[D,F]=await Promise.all([li(),hn()]);d(D),h(F),p(!1)},[]);Q(()=>{m();const D=window.setInterval(()=>{m()},Pn);return()=>window.clearInterval(D)},[m]),Q(()=>{v()},[v]);const w=M(async()=>{if(!window.confirm("Reboot the device now? It will be offline for about 20-60 seconds."))return;f(null),y(!0);const F=await un();y(!1),F.ok?b.start():f(F.message)},[b.start]),T=u&&!o?a("p",{class:"muted",children:"Checking device health…"}):o?o.ok?a(x,{kind:o.data.healty?"success":"error",message:o.data.healty?"Healthcheck is OK.":"Healthcheck reports failure."}):a(x,{kind:"error",message:o.message}):null,k=l?l.ok?a(x,{kind:l.data.ready?"success":"info",message:l.data.ready?"All registered services are ready.":`Not ready: ${l.data.message}`}):l.status===500?a(x,{kind:"info",message:`Not ready: ${l.message}`}):a(x,{kind:"error",message:l.message}):null;return a("div",{class:"stack",children:[a(N,{title:"Device",children:[r?s?a(q,{children:[a(x,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(I,{onClick:()=>{m()},children:"Retry"})})]}):t?a("dl",{class:"kv",children:[a("dt",{children:"Firmware"}),a("dd",{children:t.fwVersion??"—"}),a("dt",{children:"Free heap"}),a("dd",{children:Tn(t.freeHeap)}),a("dt",{children:"Uptime"}),a("dd",{children:Mn(t.uptime)}),a("dt",{children:"Last reset reason"}),a("dd",{children:t.lastResetReason})]}):null:a("p",{class:"muted",children:"Loading status…"}),a("p",{class:"muted mt",children:"Status refreshes automatically every 10 seconds."})]}),a(N,{title:"Health",children:[T,k,a("div",{class:"form-actions",children:a(I,{onClick:()=>{v()},disabled:u,children:u?"Checking…":"Refresh health"})})]}),a(N,{title:"Maintenance",children:[a("p",{class:"muted",children:"A reboot briefly interrupts the device. Configuration changes saved on the other tabs only take effect after a reboot."}),c?a(x,{kind:"error",message:c,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(kn,{onClick:()=>{w()},disabled:$||b.phase!=="idle",children:"Reboot device"})})]}),a(xn,{flow:b})]})}function Un({label:t,hint:e,checked:s,disabled:i,pending:r,unknown:n,onChange:o}){return a("div",{class:`toggle${n?" toggle-unknown":""}${r?" toggle-pending":""}`,children:a("button",{type:"button",role:"switch","aria-checked":s,class:"toggle-control",disabled:i||r,title:n?"State unknown":void 0,onClick:()=>o(!s),children:[a("span",{class:"toggle-track","aria-hidden":"true",children:a("span",{class:"toggle-knob"})}),a("span",{class:"toggle-text",children:[a("span",{class:"toggle-label",children:t}),e?a("span",{class:"toggle-hint",children:e}):null]})]})})}const Rn={ventilation:{value:!1,unknown:!0},light:{value:!1,unknown:!0},generator:{value:!1,unknown:!0}},Dn=[{key:"ventilation",label:"Ventilation"},{key:"light",label:"Light"},{key:"generator",label:"Generator"}];function nt(t,e){return typeof e.enabled=="boolean"?{value:e.enabled,unknown:!1}:t}function Hn(){const[t,e]=_(!1),[s,i]=_(null),[r,n]=_(Rn),[o,d]=_({ventilation:!1,light:!1,generator:!1}),[l,h]=_(null),[u,p]=_(!1),c=M(b=>{n(m=>({ventilation:nt(m.ventilation,b.ventilation),light:nt(m.light,b.light),generator:nt(m.generator,b.generator)}))},[]),f=M(async()=>{i(null);const b=await Ks();b.ok?c(b.data):i(b.message),e(!0)},[c]);Q(()=>{f()},[f]);const $=M(async()=>{p(!0),i(null);const b=await Ks();b.ok?c(b.data):i(b.message),p(!1)},[c]),y=M(async(b,m)=>{if(o[b])return;const v=r[b];h(null),n(w=>({...w,[b]:{value:m,unknown:!1}})),d(w=>({...w,[b]:!0}));try{const w=await _n({[b]:m});w.ok?n(T=>({...T,[b]:nt(T[b],w.data[b])})):(n(T=>({...T,[b]:v})),h(w.message))}catch(w){n(T=>({...T,[b]:v})),h(w instanceof Error?w.message:String(w))}finally{d(w=>({...w,[b]:!1}))}},[o,r]);return t?a("div",{class:"stack",children:[s?a(q,{children:[a(x,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(I,{onClick:()=>{f()},children:"Retry"})})]}):null,a(N,{title:"Controls",children:[l?a(x,{kind:"error",message:l,onClose:()=>h(null)}):null,Dn.map(({key:b,label:m})=>a(Un,{label:m,checked:r[b].value,unknown:r[b].unknown,pending:o[b],onChange:v=>{y(b,v)}},b)),a("div",{class:"form-actions",children:a(I,{onClick:()=>{$()},disabled:u,children:u?"Refreshing…":"Refresh"})})]})]}):a(N,{title:"Controls",children:a("p",{class:"muted",children:"Loading controls…"})})}function In(){const t=oe(null);return Q(()=>{const e=document.createElement("edn-network-page");return t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}const On={host:"",port:"",login:"",password:"",haDiscoveryPrefix:"",mqttIsHADiscovery:!1,stateTopic:"",commandTopic:"",statusTopic:""};function Ln(t){const e={};t.host.trim().length===0?e.host="Host is required.":t.host.length>g.mqtt.hostMax&&(e.host=`At most ${g.mqtt.hostMax} characters.`);const s=Number(t.port);return t.port.trim()===""?e.port="Port is required.":(!Number.isInteger(s)||s<1||s>65535)&&(e.port="Port must be an integer between 1 and 65535."),t.login.length>g.mqtt.loginMax&&(e.login=`At most ${g.mqtt.loginMax} characters.`),t.password.length>g.mqtt.passwordMax&&(e.password=`At most ${g.mqtt.passwordMax} characters.`),t.haDiscoveryPrefix.trim().length===0?e.haDiscoveryPrefix="Discovery prefix is required.":t.haDiscoveryPrefix.length>g.mqtt.haDiscoveryPrefixMax&&(e.haDiscoveryPrefix=`At most ${g.mqtt.haDiscoveryPrefixMax} characters.`),t.stateTopic.trim().length===0?e.stateTopic="Required - the device crashes if the state topic is missing.":t.stateTopic.length>g.mqtt.topicMax&&(e.stateTopic=`At most ${g.mqtt.topicMax} characters.`),t.commandTopic.trim().length===0?e.commandTopic="Required - the device crashes if the command topic is missing.":t.commandTopic.length>g.mqtt.topicMax&&(e.commandTopic=`At most ${g.mqtt.topicMax} characters.`),t.statusTopic.trim().length===0?e.statusTopic="Status topic is required.":t.statusTopic.length>g.mqtt.topicMax&&(e.statusTopic=`At most ${g.mqtt.topicMax} characters.`),e}function Bn(t){return Object.keys(t).length>0}function se({label:t,value:e,onInput:s,type:i="text",min:r,max:n,maxLength:o,autoComplete:d,error:l,help:h}){return a("label",{class:"field",children:[a("span",{class:"field-label",children:t}),a("input",{type:i,value:e,min:r,max:n,maxLength:o,autoComplete:d,"aria-invalid":l?!0:void 0,onInput:u=>s(u.currentTarget.value)}),h&&!l?a("span",{class:"field-help",children:h}):null,l?a("span",{class:"field-error",children:l}):null]})}function jn({label:t,value:e,onInput:s,maxLength:i,error:r}){const[n,o]=_(!1);return a("div",{class:"password-field",children:[a(se,{label:t,value:e,onInput:s,type:n?"text":"password",maxLength:i,autoComplete:"new-password",error:r}),a("button",{type:"button",class:"btn reveal-toggle","aria-pressed":n,onClick:()=>o(d=>!d),children:n?"Hide":"Show"})]})}function qn({label:t,checked:e,onChange:s}){return a("div",{class:"checkbox-field",children:a("label",{class:"checkbox-label",children:[a("input",{type:"checkbox",checked:e,onChange:i=>s(i.currentTarget.checked)}),a("span",{children:t})]})})}function Fn(){const[t,e]=_(!1),[s,i]=_(null),[r,n]=_(On),[o,d]=_({}),[l,h]=_(!1),[u,p]=_(null),[c,f]=_(null),$=M(async()=>{i(null);const m=await pn();m.ok?n({host:m.data.mqttHost,port:String(m.data.mqttPort),login:m.data.mqttLogin,password:m.data.mqttPassword,haDiscoveryPrefix:m.data.mqttHADiscoveryPrefix,mqttIsHADiscovery:m.data.mqttIsHADiscovery,stateTopic:m.data.mqttStateTopic,commandTopic:m.data.mqttCommandTopic,statusTopic:m.data.mqttStatusTopic}):i(m.message),e(!0)},[]);Q(()=>{$()},[$]);const y=m=>n(v=>({...v,...m})),b=M(async m=>{m.preventDefault();const v=Ln(r);if(d(v),p(null),f(null),!Bn(v)){h(!0);try{const w=await fn({host:r.host,port:Number(r.port),login:r.login,password:r.password,haDiscoveryPrefix:r.haDiscoveryPrefix,mqttIsHADiscovery:r.mqttIsHADiscovery,stateTopic:r.stateTopic,commandTopic:r.commandTopic,statusTopic:r.statusTopic});w.ok?p("MQTT settings saved to flash."):f(w.message)}catch(w){f(w instanceof Error?w.message:String(w))}h(!1)}},[r]);return t?a("div",{class:"stack",children:[a(x,{kind:"info",message:"Changes are saved to flash and take effect only after a reboot."}),s?a(q,{children:[a(x,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(I,{onClick:()=>{$()},children:"Retry"})})]}):null,a(N,{title:"MQTT",children:a("form",{onSubmit:b,children:[a(se,{label:"Host",value:r.host,onInput:m=>y({host:m}),maxLength:g.mqtt.hostMax,autoComplete:"off",error:o.host}),a(se,{label:"Port",value:r.port,onInput:m=>y({port:m}),type:"number",min:1,max:65535,error:o.port}),a(se,{label:"Login",value:r.login,onInput:m=>y({login:m}),maxLength:g.mqtt.loginMax,autoComplete:"off",error:o.login}),a(jn,{label:"Password",value:r.password,onInput:m=>y({password:m}),maxLength:g.mqtt.passwordMax,error:o.password}),a(se,{label:"HA discovery prefix",value:r.haDiscoveryPrefix,onInput:m=>y({haDiscoveryPrefix:m}),maxLength:g.mqtt.haDiscoveryPrefixMax,autoComplete:"off",error:o.haDiscoveryPrefix}),a(qn,{label:"Enable Home Assistant discovery",checked:r.mqttIsHADiscovery,onChange:m=>y({mqttIsHADiscovery:m})}),a(se,{label:"State topic",value:r.stateTopic,onInput:m=>y({stateTopic:m}),maxLength:g.mqtt.topicMax,autoComplete:"off",error:o.stateTopic,help:"Must not be empty: the device crashes on a missing state topic."}),a(se,{label:"Command topic",value:r.commandTopic,onInput:m=>y({commandTopic:m}),maxLength:g.mqtt.topicMax,autoComplete:"off",error:o.commandTopic,help:"Must not be empty: the device crashes on a missing command topic."}),a(se,{label:"Топик статуса электричества",value:r.statusTopic,onInput:m=>y({statusTopic:m}),maxLength:g.mqtt.topicMax,autoComplete:"off",error:o.statusTopic,help:"По умолчанию: faraday/<chipID>/status."}),u?a(x,{kind:"success",message:u,onClose:()=>p(null)}):null,c?a(x,{kind:"error",message:c,onClose:()=>f(null)}):null,a("div",{class:"form-actions",children:a(I,{type:"submit",variant:"primary",disabled:l,children:l?"Saving…":"Save MQTT"})})]})})]}):a(N,{title:"MQTT",children:a("p",{class:"muted",children:"Loading MQTT settings…"})})}const zn={modbusSpeed:String(g.modbus.speeds[0]),map12eAddress:"",anenjiAddress:""};function Wn(t){const e={};if(t.map12eAddress.trim()==="")e.map12eAddress="Address is required.";else{const s=Number(t.map12eAddress);(!Number.isInteger(s)||s<g.modbus.addressMin||s>g.modbus.addressMax)&&(e.map12eAddress=`Address must be an integer between ${g.modbus.addressMin} and ${g.modbus.addressMax}.`)}if(t.anenjiAddress.trim()==="")e.anenjiAddress="Address is required.";else{const s=Number(t.anenjiAddress);(!Number.isInteger(s)||s<g.modbus.anenjiAddressMin||s>g.modbus.anenjiAddressMax)&&(e.anenjiAddress=`Address must be an integer between ${g.modbus.anenjiAddressMin} and ${g.modbus.anenjiAddressMax}.`)}return e}function Vn(t){return Object.keys(t).length>0}function Gs({label:t,value:e,onInput:s,type:i="text",min:r,max:n,error:o,help:d}){return a("label",{class:"field",children:[a("span",{class:"field-label",children:t}),a("input",{type:i,value:e,min:r,max:n,"aria-invalid":o?!0:void 0,onInput:l=>s(l.currentTarget.value)}),d&&!o?a("span",{class:"field-help",children:d}):null,o?a("span",{class:"field-error",children:o}):null]})}function Jn({label:t,value:e,options:s,onChange:i}){return a("label",{class:"field",children:[a("span",{class:"field-label",children:t}),a("select",{value:e,onChange:r=>i(r.currentTarget.value),children:s.map(r=>a("option",{value:String(r),children:[r," baud"]},r))})]})}function Qn(){const[t,e]=_(!1),[s,i]=_(null),[r,n]=_(zn),[o,d]=_({}),[l,h]=_(null),[u,p]=_(null),[c,f]=_(!1),[$,y]=_(null),[b,m]=_(null),v=M(async()=>{i(null);const k=await mn();k.ok?(n({modbusSpeed:String(k.data.modbusSpeed),map12eAddress:String(k.data.map12eAddress),anenjiAddress:String(k.data.anenjiAddress)}),h(k.data.map12eAddress),p(k.data.anenjiAddress)):i(k.message),e(!0)},[]);Q(()=>{v()},[v]);const w=k=>n(D=>({...D,...k})),T=M(async k=>{k.preventDefault();const D=Wn(r);if(d(D),y(null),m(null),Vn(D))return;const F=Number(r.map12eAddress),Z=Number(r.anenjiAddress);f(!0);try{const O=await gn({modbusSpeed:Number(r.modbusSpeed),map12eAddress:F,anenjiAddress:Z});if(O.ok){n({modbusSpeed:String(O.data.modbusSpeed),map12eAddress:String(O.data.map12eAddress),anenjiAddress:String(O.data.anenjiAddress)});const B=F!==l||Z!==u;h(O.data.map12eAddress),p(O.data.anenjiAddress),y(B?"Modbus settings saved. The new speed is applied now; the address takes effect only after a reboot.":"Modbus settings saved. The new speed is applied now.")}else m(O.message)}catch(O){m(O instanceof Error?O.message:String(O))}f(!1)},[r,l,u]);return t?a("div",{class:"stack",children:[s?a(q,{children:[a(x,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(I,{onClick:()=>{v()},children:"Retry"})})]}):null,a(N,{title:"Modbus",children:a("form",{onSubmit:T,children:[a(Jn,{label:"RS-485 speed",value:r.modbusSpeed,options:g.modbus.speeds,onChange:k=>w({modbusSpeed:k})}),a(Gs,{label:"WB-MAP12E address",value:r.map12eAddress,onInput:k=>w({map12eAddress:k}),type:"number",min:g.modbus.addressMin,max:g.modbus.addressMax,error:o.map12eAddress,help:`Modbus unit id ${g.modbus.addressMin}-${g.modbus.addressMax}.`}),a(Gs,{label:"ANENJI 4200 address",value:r.anenjiAddress,onInput:k=>w({anenjiAddress:k}),type:"number",min:g.modbus.anenjiAddressMin,max:g.modbus.anenjiAddressMax,error:o.anenjiAddress,help:`0 disables the inverter; applies after reboot. Valid ${g.modbus.anenjiAddressMin}-${g.modbus.anenjiAddressMax}.`}),$?a(x,{kind:"success",message:$,onClose:()=>y(null)}):null,b?a(x,{kind:"error",message:b,onClose:()=>m(null)}):null,a("div",{class:"form-actions",children:a(I,{type:"submit",variant:"primary",disabled:c,children:c?"Saving…":"Save Modbus"})})]})})]}):a(N,{title:"Modbus",children:a("p",{class:"muted",children:"Loading Modbus settings…"})})}const Kn="—";function Ys(t){return t===null||!Number.isFinite(t)?Kn:`${t.toFixed(2)} kWh`}function Xs(t){return Object.keys(t).length>0}function er({label:t,value:e,onInput:s,type:i="text",min:r,max:n,step:o,error:d,help:l}){return a("label",{class:"field",children:[a("span",{class:"field-label",children:t}),a("input",{type:i,value:e,min:r,max:n,step:o,"aria-invalid":d?!0:void 0,onInput:h=>s(h.currentTarget.value)}),l&&!d?a("span",{class:"field-help",children:l}):null,d?a("span",{class:"field-error",children:d}):null]})}function Zn(){const[t,e]=_(!1),[s,i]=_(null),[r,n]=_(null),[o,d]=_(""),[l,h]=_({}),[u,p]=_(!1),[c,f]=_(null),[$,y]=_(null),[b,m]=_(""),[v,w]=_({}),[T,k]=_(!1),[D,F]=_(null),[Z,O]=_(null),[B,V]=_(!1),de=M(async()=>{i(null);const H=await Js();H.ok?(n(H.data),d(String(H.data.energySyncValue)),m(String(H.data.ct1Ratio))):i(H.message),e(!0)},[]);Q(()=>{de()},[de]);const Oe=M(async()=>{V(!0);const H=await Js();H.ok?(n(H.data),i(null)):i(H.message),V(!1)},[]),Ce=M(async H=>{H.preventDefault(),f(null),y(null);const Y={},G=Number(o);if(o.trim()===""?Y.sync="Supplier reading is required.":(!Number.isFinite(G)||G<g.meter.syncMin)&&(Y.sync="Must be a number greater than or equal to 0."),h(Y),!Xs(Y)){p(!0);try{const z=await Qs({energySyncValue:G});z.ok?(n(z.data),d(String(z.data.energySyncValue)),f("Sync saved. Future readings continue from the entered value; the meter counter itself is not reset.")):y(z.message)}catch(z){y(z instanceof Error?z.message:String(z))}p(!1)}},[o]),xe=M(async H=>{H.preventDefault(),F(null),O(null);const Y={},G=Number(b);if(b.trim()===""?Y.ratio="CT ratio is required.":(!Number.isInteger(G)||G<g.meter.ctRatioMin||G>g.meter.ctRatioMax)&&(Y.ratio=`Must be an integer between ${g.meter.ctRatioMin} and ${g.meter.ctRatioMax}.`),w(Y),!Xs(Y)){k(!0);try{const z=await Qs({ct1Ratio:G});z.ok?(n(z.data),m(String(z.data.ct1Ratio)),F("CT ratio written to the meter and applied immediately. Re-sync the supplier energy afterwards.")):O(z.message)}catch(z){O(z instanceof Error?z.message:String(z))}k(!1)}},[b]);return t?a("div",{class:"stack",children:[s?a(q,{children:[a(x,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(I,{onClick:()=>{de()},children:"Retry"})})]}):null,a(N,{title:"Supplier energy sync",children:[a("dl",{class:"kv",children:[a("dt",{children:"Meter energy"}),a("dd",{children:Ys(r?.meterEnergy??null)}),a("dt",{children:"Supplier energy"}),a("dd",{children:Ys(r?.supplierEnergy??null)})]}),a("p",{class:"muted mt",children:"Meter counters are read-only and cannot be reset by the firmware. A sync stores the entered supplier kWh reading together with the device counter at that moment, so Home Assistant reports the entered value plus consumption since the sync."}),a("form",{onSubmit:Ce,class:"mt",children:[a(er,{label:"Supplier reading, kWh",value:o,onInput:d,type:"number",min:g.meter.syncMin,step:"0.01",error:l.sync}),c?a(x,{kind:"success",message:c,onClose:()=>f(null)}):null,$?a(x,{kind:"error",message:$,onClose:()=>y(null)}):null,a("div",{class:"form-actions",children:[a(I,{type:"submit",variant:"primary",disabled:u,children:u?"Syncing…":"Sync"}),a(I,{onClick:()=>{Oe()},disabled:B,children:B?"Refreshing…":"Refresh"})]})]})]}),a(N,{title:"Current transformer",children:a("form",{onSubmit:xe,children:[a(er,{label:"CT1 ratio",value:b,onInput:m,type:"number",min:g.meter.ctRatioMin,max:g.meter.ctRatioMax,error:v.ratio,help:"Integer 0-65535. 0 disables the ratio (direct measurement)."}),a("p",{class:"muted",children:"The ratio is written to the meter immediately and applied by the meter itself to current, power and energy. Re-sync the supplier energy after changing it."}),D?a(x,{kind:"success",message:D,onClose:()=>F(null)}):null,Z?a(x,{kind:"error",message:Z,onClose:()=>O(null)}):null,a("div",{class:"form-actions",children:a(I,{type:"submit",variant:"primary",disabled:T,children:T?"Saving…":"Save ratio"})})]})})]}):a(N,{title:"Meter",children:a("p",{class:"muted",children:"Loading meter settings…"})})}const cs="—";function hs(t,e){return t===null||!Number.isFinite(t)?cs:t.toFixed(e)}function at(t){return hs(t,1)}function ot(t){return hs(t,1)}function lt(t){return hs(t,0)}function Gn(t){return t===null?cs:t?"Charging":"Not charging"}function dt(t){return t??cs}function Yn(){const[t,e]=_(!1),[s,i]=_(null),[r,n]=_(null),[o,d]=_(!1),l=M(async()=>{i(null);const u=await Vs();u.ok?n(u.data):i(u.message),e(!0)},[]);Q(()=>{l()},[l]);const h=M(async()=>{d(!0);const u=await Vs();u.ok?(n(u.data),i(null)):i(u.message),d(!1)},[]);return t?a("div",{class:"stack",children:[s?a(q,{children:[a(x,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(I,{onClick:()=>{l()},children:"Retry"})})]}):null,r&&!r.enabled?a(x,{kind:"info",message:"The inverter is disabled. Set a non-zero ANENJI 4200 address on the Modbus tab and reboot to enable it."}):null,a(N,{title:"Mains",children:a("dl",{class:"kv",children:[a("dt",{children:"Voltage"}),a("dd",{children:[at(r?.mainsVoltage??null)," V"]}),a("dt",{children:"Current"}),a("dd",{children:[ot(r?.mainsCurrent??null)," A"]}),a("dt",{children:"Power"}),a("dd",{children:[lt(r?.mainsPower??null)," W"]})]})}),a(N,{title:"Output",children:a("dl",{class:"kv",children:[a("dt",{children:"Voltage"}),a("dd",{children:[at(r?.outputVoltage??null)," V"]}),a("dt",{children:"Current"}),a("dd",{children:[ot(r?.outputCurrent??null)," A"]}),a("dt",{children:"Power"}),a("dd",{children:[lt(r?.outputPower??null)," W"]})]})}),a(N,{title:"Battery",children:a("dl",{class:"kv",children:[a("dt",{children:"Voltage"}),a("dd",{children:[at(r?.batteryVoltage??null)," V"]}),a("dt",{children:"Current"}),a("dd",{children:[ot(r?.batteryCurrent??null)," A"]}),a("dt",{children:"Power"}),a("dd",{children:[lt(r?.batteryPower??null)," W"]}),a("dt",{children:"Charging"}),a("dd",{children:Gn(r?.batteryCharging??null)})]})}),a(N,{title:"Solar",children:a("dl",{class:"kv",children:[a("dt",{children:"Voltage"}),a("dd",{children:[at(r?.pvVoltage??null)," V"]}),a("dt",{children:"Current"}),a("dd",{children:[ot(r?.pvCurrent??null)," A"]}),a("dt",{children:"Power"}),a("dd",{children:[lt(r?.pvPower??null)," W"]})]})}),a(N,{title:"Modes",children:a("dl",{class:"kv",children:[a("dt",{children:"Work mode"}),a("dd",{children:dt(r?.workMode??null)}),a("dt",{children:"Output mode"}),a("dd",{children:dt(r?.outputMode??null)}),a("dt",{children:"Output priority"}),a("dd",{children:dt(r?.outputPriority??null)}),a("dt",{children:"Charge priority"}),a("dd",{children:dt(r?.chargePriority??null)})]})}),a("div",{class:"form-actions",children:a(I,{onClick:()=>{h()},disabled:o,children:o?"Refreshing…":"Refresh"})})]}):a(N,{title:"Anenji",children:a("p",{class:"muted",children:"Loading inverter readings…"})})}const le="—",Xn=1e4,ea=1500,ta=3e4,tr=1500,sa=25e3,sr=[{key:"shortCircuit",label:"Short circuit"},{key:"chargeOvercurrent",label:"Charge overcurrent"},{key:"dischargeOvercurrent",label:"Discharge overcurrent"},{key:"cellOvervoltage",label:"Cell overvoltage"},{key:"cellUndervoltage",label:"Cell undervoltage"},{key:"chargeOvertemperature",label:"Charge overtemperature"},{key:"chargeUndertemperature",label:"Charge undertemperature"},{key:"dischargeOvertemperature",label:"Discharge overtemperature"},{key:"dischargeUndertemperature",label:"Discharge undertemperature"},{key:"batteryOvervoltage",label:"Battery overvoltage"},{key:"batteryUndervoltage",label:"Battery undervoltage"}];function J(t,e){return t===null||!Number.isFinite(t)?le:t.toFixed(e)}function Le(t){return t==null||t===""?le:t}function rr(t){return t?"Yes":"No"}function ir(t){return t===null?le:t?"On":"Off"}function ra(t){return t===null||!Number.isFinite(t)?le:`${(t/1e3).toFixed(1)} s`}function ia(t){switch(t){case"authenticated":return"authenticated";case"authenticating":return"authenticating…";case"failed":return"failed";default:return"not-authenticated"}}function na(t){switch(t){case"acked":return"BMS acknowledged the clear command; counters re-read within ~10 s.";case"sent":return"Command sent (no acknowledgement); counters re-read within ~10 s.";case"failed":return"Clear command failed (BLE write or session abort).";default:return"Clear finished."}}function aa(t){if(t===null)return[];const e=t>>>0,s=[];for(let i=0;i<g.bms.cellCountMax;i+=1)(e>>>i&1)!==0&&s.push(i+1);return s}function nr({label:t,value:e,onInput:s,type:i="text",min:r,max:n,placeholder:o,error:d,help:l}){return a("label",{class:"field",children:[a("span",{class:"field-label",children:t}),a("input",{type:i,value:e,min:r,max:n,placeholder:o,"aria-invalid":d?!0:void 0,onInput:h=>s(h.currentTarget.value)}),l&&!d?a("span",{class:"field-help",children:l}):null,d?a("span",{class:"field-error",children:d}):null]})}function oa(t,e){const s={},i=t.trim();if(i!==""&&!/^[0-9A-Fa-f]{2}(:[0-9A-Fa-f]{2}){5}$/.test(i)&&(s.mac="MAC address must look like AA:BB:CC:DD:EE:FF."),e.trim()==="")s.cellCount="Cell count is required.";else{const r=Number(e);(!Number.isInteger(r)||r<g.bms.cellCountMin||r>g.bms.cellCountMax)&&(s.cellCount=`Must be an integer between ${g.bms.cellCountMin} and ${g.bms.cellCountMax}.`)}return s}function la(){const[t,e]=_(!1),[s,i]=_(null),[r,n]=_(null),[o,d]=_(""),[l,h]=_(""),[u,p]=_({}),[c,f]=_(!1),[$,y]=_(null),[b,m]=_(null),[v,w]=_(null),[T,k]=_(!1),[D,F]=_(null),[Z,O]=_(!1),[B,V]=_(!1),de=oe(void 0),Oe=oe(!1),Ce=oe(void 0),xe=oe(!1);Q(()=>(Oe.current=!1,xe.current=!1,()=>{Oe.current=!0,xe.current=!0,de.current!==void 0&&window.clearTimeout(de.current),Ce.current!==void 0&&window.clearTimeout(Ce.current)}),[]);const H=M(async A=>{i(null);const C=await Zs();C.ok?(n(C.data),A&&(d(C.data.mac),h(String(C.data.cellCount)))):i(C.message),e(!0)},[]);Q(()=>{H(!0)},[H]),Q(()=>{const A=window.setInterval(()=>{H(!1)},Xn);return()=>window.clearInterval(A)},[H]);const Y=M(async()=>{O(!0),await H(!1),O(!1)},[H]),G=M(async(A,C)=>{f(!0),y(null),m(null);try{const P=await vn({mac:A,cellCount:C});P.ok?(n(P.data),d(P.data.mac),h(String(P.data.cellCount)),p({}),await H(!1),y(P.data.mac===""?"BMS disabled. MQTT/HA entities are removed only after a reboot.":"BMS settings saved. BLE polling follows immediately; the number of MQTT/HA entities is fixed at boot, so reboot to apply discovery changes.")):m(P.message)}catch(P){m(P instanceof Error?P.message:String(P))}f(!1)},[H]),z=M(A=>{A.preventDefault();const C=oa(o,l);p(C),y(null),m(null),!(Object.keys(C).length>0)&&G(o.trim(),Number(l))},[o,l,G]),Dt=M(async A=>{const C=await wn();if(!Oe.current){if(!C.ok){F(C.message),k(!1);return}if(w(C.data),!C.data.running||Date.now()>=A){k(!1);return}de.current=window.setTimeout(()=>{Dt(A)},ea)}},[]),Bi=M(async()=>{if(T)return;F(null),k(!0);const A=await $n();if(!A.ok&&A.status!==422){F(A.message),k(!1);return}Dt(Date.now()+ta)},[T,Dt]),Ht=M(async(A,C)=>{const P=await Zs();if(xe.current)return;if(!P.ok){m(P.message),V(!1);return}n(P.data);const It=C<0||P.data.clearGeneration>=C;if(!P.data.clearPending&&It){V(!1),await H(!1),y(na(P.data.clearResult));return}if(Date.now()>=A){V(!1),y("Clear command is still pending; the tab keeps refreshing every 10 s.");return}Ce.current=window.setTimeout(()=>{Ht(A,C)},tr)},[H]),ji=M(async()=>{if(B||!r?.connected||T||(v?.running??!1)||r.clearPending||!window.confirm("Clear the BMS failed-event counters? This enters factory/EEPROM mode, writes registers 0x00/0x01 and clears the counters; the pack must have stable power throughout."))return;const C=r.clearGeneration;V(!0),y(null),m(null);try{const P=await yn();if(!P.ok){m(P.message),V(!1);return}if(y("Clear command sent…"),xe.current){V(!1);return}Ce.current=window.setTimeout(()=>{Ht(Date.now()+sa,C)},tr)}catch(P){m(P instanceof Error?P.message:String(P)),V(!1)}},[B,r,T,v,Ht]),qi=M(async A=>{const C=r?.cellCount??g.bms.cellCountMin,P=Number(l),It=l.trim()!==""&&Number.isInteger(P)&&P>=g.bms.cellCountMin&&P<=g.bms.cellCountMax?P:C;await G(A,It)},[l,r,G]);if(!t)return a(N,{title:"BMS",children:a("p",{class:"muted",children:"Loading BMS readings…"})});const Fi=r===null?[]:Array.from({length:r.cellCount},(A,C)=>r.cells[C]??null),Ts=r===null?[]:aa(r.balancerBitmask),zi=r?.mosfetBitmask!=null?(r.mosfetBitmask&1)!==0:null,Wi=r?.mosfetBitmask!=null?(r.mosfetBitmask&2)!==0:null,Vi=r!==null&&r.reportedCellCount!==null&&r.reportedCellCount!==r.cellCount,Ns=r?.errorCounts??null,Us=Ns!==null&&sr.some(({key:A})=>Ns[A]>0),Ji=Us&&r!==null&&r.clearResult!==null,Qi=r===null||!r.connected||T||(v?.running??!1)||r.clearPending||B;return a("div",{class:"stack",children:[s?a(q,{children:[a(x,{kind:"error",message:s}),a("div",{class:"form-actions",children:a(I,{onClick:()=>{H(!0)},children:"Retry"})})]}):null,r&&!r.enabled?a(x,{kind:"info",message:"The BMS is disabled. Set the Bluetooth MAC below (or scan and select it), then save."}):null,r?.bleUnavailable?a(x,{kind:"error",message:"Bluetooth could not be initialized on the device. BLE telemetry and scanning are unavailable."}):null,Vi?a(x,{kind:"info",message:`The BMS reports ${r?.reportedCellCount} cells but ${r?.cellCount} is configured. Consider adjusting the cell count.`}):null,a(N,{title:"Connection",children:[a("dl",{class:"kv",children:[a("dt",{children:"Enabled"}),a("dd",{children:rr(r?.enabled??!1)}),a("dt",{children:"MAC"}),a("dd",{children:Le(r?.mac??null)}),a("dt",{children:"Connected"}),a("dd",{children:rr(r?.connected??!1)}),a("dt",{children:"Bluetooth"}),a("dd",{children:r?.bleUnavailable?"Unavailable":"Available"}),a("dt",{children:"BLE access"}),a("dd",{children:ia(r?.authState??"not-authenticated")}),a("dt",{children:"Last frame"}),a("dd",{children:ra(r?.lastUpdateMs??null)}),a("dt",{children:"Reported cells"}),a("dd",{children:J(r?.reportedCellCount??null,0)})]}),a("div",{class:"form-actions",children:a(I,{onClick:()=>{Y()},disabled:Z,children:Z?"Refreshing…":"Refresh"})})]}),a(N,{title:"Settings",children:a("form",{onSubmit:z,children:[a(nr,{label:"Bluetooth MAC",value:o,onInput:d,placeholder:"AA:BB:CC:DD:EE:FF",error:u.mac,help:"Empty disables the BMS. Only this BLE device is polled."}),a(nr,{label:"Cell count",value:l,onInput:h,type:"number",min:g.bms.cellCountMin,max:g.bms.cellCountMax,error:u.cellCount,help:`Real pack size ${g.bms.cellCountMin}-${g.bms.cellCountMax}; only these cells are published.`}),$?a(x,{kind:"success",message:$,onClose:()=>y(null)}):null,b?a(x,{kind:"error",message:b,onClose:()=>m(null)}):null,a("div",{class:"form-actions",children:a(I,{type:"submit",variant:"primary",disabled:c,children:c?"Saving…":"Save BMS"})})]})}),a(N,{title:"BLE scan",children:[a("p",{class:"muted",children:"A scan runs for about 10 seconds on the device and briefly disconnects the BMS. Results stay visible after it finishes."}),D?a(x,{kind:"error",message:D,onClose:()=>F(null)}):null,a("div",{class:"form-actions",children:a(I,{onClick:()=>{Bi()},disabled:T||(v?.running??!1)||r?.clearPending===!0,children:T?"Scanning…":"Scan"})}),v&&v.devices.length>0?a("dl",{class:"kv mt",children:v.devices.map(A=>a(q,{children:[a("dt",{children:[Le(A.name)," (",A.rssi," dBm)"]}),a("dd",{children:[A.mac," ",a(I,{onClick:()=>{qi(A.mac)},disabled:c||r?.mac===A.mac,children:r?.mac===A.mac?"Selected":"Select"})]})]},A.mac))}):a("p",{class:"muted mt",children:T?"Scanning for BLE devices…":"No scan results yet."})]}),a(N,{title:"Summary",children:a("dl",{class:"kv",children:[a("dt",{children:"Status"}),a("dd",{children:Le(r?.status??null)}),a("dt",{children:"Errors"}),a("dd",{children:Le(r?.errors??null)}),a("dt",{children:"Device model"}),a("dd",{children:Le(r?.deviceModel??null)}),a("dt",{children:"State of charge"}),a("dd",{children:[J(r?.soc??null,0)," %"]}),a("dt",{children:"Total voltage"}),a("dd",{children:[J(r?.totalVoltage??null,2)," V"]}),a("dt",{children:"Current"}),a("dd",{children:[J(r?.current??null,2)," A"]}),a("dt",{children:"Power"}),a("dd",{children:[J(r?.power??null,1)," W"]}),a("dt",{children:"Capacity"}),a("dd",{children:[J(r?.capacityRemaining??null,2)," /"," ",J(r?.nominalCapacity??null,2)," Ah"]}),a("dt",{children:"Cycles"}),a("dd",{children:J(r?.cycles??null,0)}),a("dt",{children:"SW version"}),a("dd",{children:J(r?.swVersion??null,2)}),a("dt",{children:"Charging"}),a("dd",{children:ir(zi)}),a("dt",{children:"Discharging"}),a("dd",{children:ir(Wi)}),a("dt",{children:"Balancing"}),a("dd",{children:r?.balancerBitmask==null?le:Ts.length>0?Ts.join(", "):"None"})]})}),a(N,{title:"Cell statistics",children:a("dl",{class:"kv",children:[a("dt",{children:"Min cell voltage"}),a("dd",{children:[J(r?.minCellVoltage??null,3)," V"]}),a("dt",{children:"Max cell voltage"}),a("dd",{children:[J(r?.maxCellVoltage??null,3)," V"]}),a("dt",{children:"Average cell voltage"}),a("dd",{children:[J(r?.avgCellVoltage??null,3)," V"]}),a("dt",{children:"Delta cell voltage"}),a("dd",{children:[J(r?.deltaCellVoltage??null,3)," V"]})]})}),a(N,{title:`Cell voltages (${r?.cellCount??0})`,children:a("dl",{class:"kv",children:Fi.map((A,C)=>a(q,{children:[a("dt",{children:`Cell ${C+1}`}),a("dd",{children:[J(A,3)," V"]})]},C))})}),a(N,{title:"Temperatures",children:a("dl",{class:"kv",children:(r?.temperatures??[]).length===0?a(q,{children:[a("dt",{children:"Temperature"}),a("dd",{children:le})]}):(r?.temperatures??[]).map((A,C)=>a(q,{children:[a("dt",{children:`Temperature ${C+1}`}),a("dd",{children:[J(A,1)," °C"]})]},C))})}),a(N,{title:"Error counters",children:[r?.errorCounts?a("dl",{class:"kv",children:sr.map(({key:A,label:C})=>a(q,{children:[a("dt",{children:C}),a("dd",{children:r?.errorCounts?r.errorCounts[A]:le})]},A))}):a("p",{class:"muted",children:le}),Us?a("p",{class:"muted",children:"These counters are latched: the BMS does not self-clear them. They are reported as a warning until cleared."}):null,Ji?a("p",{class:"muted",children:"The last clear command had no effect on this BMS — these counters are latched historical events; the system treats them as a warning."}):null,a("div",{class:"form-actions",children:a(I,{variant:"danger",onClick:()=>{ji()},disabled:Qi,children:B?"Clearing…":"Clear error counters"})})]})]})}const da="Download a zip of everything the device has stored: config.bin. It contains your Wi-Fi and MQTT credentials in plaintext, so keep the archive somewhere safe. Download the FULL BACKUP zip before uploading the web UI: filesystem uploads (pio run -e faraday -t uploadfs) ERASE LittleFS, so /config.bin is gone.",ca="Download config.bin only. It contains your Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.",ha="Uploading this archive REPLACES config.bin on the device AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?",ua="Uploading REPLACES /config.bin on the device AND REBOOTS IT IMMEDIATELY. Unsaved in-RAM settings will be lost. The device will be offline 20-60 seconds. Continue?";function pa(){const t=oe(null);return Q(()=>{const e=document.createElement("edc-config-backup-page");return e.setAttribute("device-name","Faraday"),e.setAttribute("archive-file-name","faraday-config.zip"),e.setAttribute("zip-notes",da),e.setAttribute("bin-notes",ca),e.setAttribute("zip-confirm-text",ha),e.setAttribute("bin-confirm-text",ua),t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}function fa(){const t=oe(null);return Q(()=>{const e=document.createElement("edu-log-settings-page");return e.setAttribute("device-name","Faraday"),t.current?.append(e),()=>e.remove()},[]),a("div",{ref:t})}const ma=[{id:"status",label:"Status"},{id:"controls",label:"Controls"},{id:"network",label:"Network"},{id:"mqtt",label:"MQTT"},{id:"modbus",label:"Modbus"},{id:"meter",label:"Meter"},{id:"anenji",label:"Anenji"},{id:"bms",label:"BMS"},{id:"config",label:"Config"},{id:"logger",label:"Log"}];function ga(t){switch(t){case"status":return a(Nn,{});case"controls":return a(Hn,{});case"network":return a(In,{});case"mqtt":return a(Fn,{});case"modbus":return a(Qn,{});case"meter":return a(Zn,{});case"anenji":return a(Yn,{});case"bms":return a(la,{});case"config":return a(pa,{});case"logger":return a(fa,{})}}function _a(){const[t,e]=_("status"),[s,i]=_(null);return Q(()=>{let r=!0;return oi().then(n=>{r&&n.ok&&n.data.fwVersion&&i(n.data.fwVersion)}),()=>{r=!1}},[]),a(q,{children:[a("header",{class:"app-header",children:a("div",{class:"brand",children:[a("svg",{class:"brand-mark",viewBox:"0 0 24 24",width:"20",height:"20","aria-hidden":"true",focusable:"false",children:a("path",{fill:"currentColor",d:"M13 2 4.5 13.2h5.2L8 22l9-12.1h-5.4z"})}),a("h1",{children:"Faraday"})]})}),a(An,{tabs:ma,active:t,onSelect:e}),a("main",{class:"tab-content",id:`panel-${t}`,role:"tabpanel","aria-labelledby":`tab-${t}`,children:ga(t)}),a("footer",{class:"app-footer",children:a("div",{class:"versions",children:[a("span",{class:"hint",children:"offline device panel"}),a("span",{class:"hint version",children:["FW ",s??"—"]}),a("span",{class:"hint version",children:["UI ","194acd9-dirty"]})]})})]})}function ba(t){if(t&&typeof t=="object"&&"error"in t){let e=t.error;if(typeof e=="string"&&e.length>0)return e}}function di(t={}){let e=t.baseUrl??"",s=t.headers??{};async function i(r,n){let o;try{o=await fetch(`${e}${r}`,{...n,headers:{Accept:"application/json",...n?.body===void 0?{}:{"Content-Type":"application/json"},...s}})}catch(u){return n?.signal?.aborted===!0||typeof u=="object"&&u&&u.name==="AbortError"?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}let d=await o.text().catch(()=>""),l,h=!1;if(d.length>0)try{l=JSON.parse(d),h=!0}catch{h=!1}if(!o.ok){let u=ba(l);return{ok:!1,status:o.status,message:u??`Request failed with HTTP ${o.status}.`}}return h?{ok:!0,data:l}:{ok:!1,status:o.status,message:`Unexpected response from server (HTTP ${o.status}).`}}return{getSettings(r){return i("/api/network/settings",{signal:r})},saveSettings(r,n){return i("/api/network/settings",{method:"POST",body:JSON.stringify(r),signal:n})},getStatus(r){return i("/api/network/status",{signal:r})},wifiList(r){return i("/api/wifi/list",{signal:r})}}}var gt=globalThis,us=gt.ShadowRoot&&(gt.ShadyCSS===void 0||gt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ps=Symbol(),ar=new WeakMap,ci=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==ps)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(us&&e===void 0){let i=s!==void 0&&s.length===1;i&&(e=ar.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ar.set(s,e))}return e}toString(){return this.cssText}},va=t=>new ci(typeof t=="string"?t:t+"",void 0,ps),fs=(t,...e)=>new ci(t.length===1?t[0]:e.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]),t,ps),$a=(t,e)=>{if(us)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let i=document.createElement("style"),r=gt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},or=us?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let i of e.cssRules)s+=i.cssText;return va(s)})(t):t,{is:ya,defineProperty:wa,getOwnPropertyDescriptor:Aa,getOwnPropertyNames:Sa,getOwnPropertySymbols:ka,getPrototypeOf:Ea}=Object,Pt=globalThis,lr=Pt.trustedTypes,Ca=lr?lr.emptyScript:"",xa=Pt.reactiveElementPolyfillSupport,We=(t,e)=>t,Kt={toAttribute(t,e){switch(e){case Boolean:t=t?Ca:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},hi=(t,e)=>!ya(t,e),dr={attribute:!0,type:String,converter:Kt,reflect:!1,useDefault:!1,hasChanged:hi};Symbol.metadata??=Symbol("metadata"),Pt.litPropertyMetadata??=new WeakMap;var Pe=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=dr){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&wa(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){let{get:r,set:n}=Aa(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){let d=r?.call(this);n?.call(this,o),this.requestUpdate(e,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??dr}static _$Ei(){if(this.hasOwnProperty(We("elementProperties")))return;let e=Ea(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(We("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(We("properties"))){let s=this.properties,i=[...Sa(s),...ka(s)];for(let r of i)this.createProperty(r,s[r])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[s,i]of this.elementProperties){let r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)s.unshift(or(r))}else e!==void 0&&s.push(or(e));return s}static _$Eu(e,s){let i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $a(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute===void 0?Kt:i.converter).toAttribute(s,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,s){let i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Kt:n.converter;this._$Em=r;let d=o.fromAttribute(s,n.type);this[r]=d??this._$Ej?.get(r)??d,this._$Em=null}}requestUpdate(e,s,i,r=!1,n){if(e!==void 0){let o=this.constructor;if(r===!1&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??hi)(n,s)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??s??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,n]of i){let{wrapped:o}=n,d=this[r];o!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,n,d)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};Pe.elementStyles=[],Pe.shadowRootOptions={mode:"open"},Pe[We("elementProperties")]=new Map,Pe[We("finalized")]=new Map,xa?.({ReactiveElement:Pe}),(Pt.reactiveElementVersions??=[]).push("2.1.2");var ms=globalThis,cr=t=>t,wt=ms.trustedTypes,hr=wt?wt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ui="$lit$",ie=`lit$${Math.random().toFixed(9).slice(2)}$`,pi="?"+ie,Pa=`<${pi}>`,Se=document,Ye=()=>Se.createComment(""),Xe=t=>t===null||typeof t!="object"&&typeof t!="function",gs=Array.isArray,Ma=t=>gs(t)||typeof t?.[Symbol.iterator]=="function",jt=`[ 	
\f\r]`,Be=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ur=/-->/g,pr=/>/g,he=RegExp(`>|${jt}(?:([^\\s"'>=/]+)(${jt}*=${jt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fr=/'/g,mr=/"/g,fi=/^(?:script|style|textarea|title)$/i,S=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),Ne=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),gr=new WeakMap,fe=Se.createTreeWalker(Se,129);function mi(t,e){if(!gs(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return hr===void 0?e:hr.createHTML(e)}var Ta=(t,e)=>{let s=t.length-1,i=[],r,n=e===2?"<svg>":e===3?"<math>":"",o=Be;for(let d=0;d<s;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(o.lastIndex=c,u=o.exec(l),u!==null);)c=o.lastIndex,o===Be?u[1]==="!--"?o=ur:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=he):(fi.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=he):o=pr:o===he?u[0]===">"?(o=r??Be,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?he:u[3]==='"'?mr:fr):o===mr||o===fr?o=he:o===ur||o===pr?o=Be:(o=he,r=void 0);let f=o===he&&t[d+1].startsWith("/>")?" ":"";n+=o===Be?l+Pa:p>=0?(i.push(h),l.slice(0,p)+ui+l.slice(p)+ie+f):l+ie+(p===-2?d:f)}return[mi(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Zt=class gi{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,o=0,d=e.length-1,l=this.parts,[h,u]=Ta(e,s);if(this.el=gi.createElement(h,i),fe.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=fe.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(ui)){let c=u[o++],f=r.getAttribute(p).split(ie),$=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:$[2],strings:f,ctor:$[1]==="."?Ua:$[1]==="?"?Ra:$[1]==="@"?Da:Mt}),r.removeAttribute(p)}else p.startsWith(ie)&&(l.push({type:6,index:n}),r.removeAttribute(p));if(fi.test(r.tagName)){let p=r.textContent.split(ie),c=p.length-1;if(c>0){r.textContent=wt?wt.emptyScript:"";for(let f=0;f<c;f++)r.append(p[f],Ye()),fe.nextNode(),l.push({type:2,index:++n});r.append(p[c],Ye())}}}else if(r.nodeType===8)if(r.data===pi)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(ie,p+1))!==-1;)l.push({type:7,index:n}),p+=ie.length-1}n++}}static createElement(e,s){let i=Se.createElement("template");return i.innerHTML=e,i}};function Ue(t,e,s=t,i){if(e===Ne)return e;let r=i===void 0?s._$Cl:s._$Co?.[i],n=Xe(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,s,i)),i===void 0?s._$Cl=r:(s._$Co??=[])[i]=r),r!==void 0&&(e=Ue(t,r._$AS(t,e.values),r,i)),e}var Na=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:i}=this._$AD,r=(e?.creationScope??Se).importNode(s,!0);fe.currentNode=r;let n=fe.nextNode(),o=0,d=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new _s(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new Ha(n,this,e)),this._$AV.push(h),l=i[++d]}o!==l?.index&&(n=fe.nextNode(),o++)}return fe.currentNode=Se,r}p(e){let s=0;for(let i of this._$AV)i!==void 0&&(i.strings===void 0?i._$AI(e[s]):(i._$AI(e,i,s),s+=i.strings.length-2)),s++}},_s=class _i{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Ue(this,e,s),Xe(e)?e===E||e==null||e===""?(this._$AH!==E&&this._$AR(),this._$AH=E):e!==this._$AH&&e!==Ne&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ma(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==E&&Xe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Se.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Zt.createElement(mi(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let n=new Na(r,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(e){let s=gr.get(e.strings);return s===void 0&&gr.set(e.strings,s=new Zt(e)),s}k(e){gs(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let n of e)r===s.length?s.push(i=new _i(this.O(Ye()),this.O(Ye()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let i=cr(e).nextSibling;cr(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Mt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,n){this.type=1,this._$AH=E,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}_$AI(e,s=this,i,r){let n=this.strings,o=!1;if(n===void 0)e=Ue(this,e,s,0),o=!Xe(e)||e!==this._$AH&&e!==Ne,o&&(this._$AH=e);else{let d=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=Ue(this,d[i+l],s,l),h===Ne&&(h=this._$AH[l]),o||=!Xe(h)||h!==this._$AH[l],h===E?e=E:e!==E&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!r&&this.j(e)}j(e){e===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ua=class extends Mt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===E?void 0:e}},Ra=class extends Mt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==E)}},Da=class extends Mt{constructor(e,s,i,r,n){super(e,s,i,r,n),this.type=5}_$AI(e,s=this){if((e=Ue(this,e,s,0)??E)===Ne)return;let i=this._$AH,r=e===E&&i!==E||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==E&&(i===E||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Ha=class{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ue(this,e)}},Ia=ms.litHtmlPolyfillSupport;Ia?.(Zt,_s),(ms.litHtmlVersions??=[]).push("3.3.3");var Oa=(t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(r===void 0){let n=s?.renderBefore??null;i._$litPart$=r=new _s(e.insertBefore(Ye(),n),n,void 0,s??{})}return r._$AI(t),r},bs=globalThis,_e=class extends Pe{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Oa(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Ne}};_e._$litElement$=!0,_e.finalized=!0,bs.litElementHydrateSupport?.({LitElement:_e});var La=bs.litElementPolyfillSupport;La?.({LitElement:_e}),(bs.litElementVersions??=[]).push("4.2.2");var Ba={ethernet:"Ethernet",wifi:"Wi-Fi",wifi_ap:"Wi-Fi AP"};function ja(t){return t===void 0||Number.isNaN(t)?"Unknown":t>=-55?"Excellent":t>=-67?"Good":t>=-75?"Fair":"Weak"}function qa(t){return t===1?"Full":t===0?"Half":`Unknown (${t})`}function Fa(t){let e=s=>String(s).padStart(2,"0");return`${e(t.getHours())}:${e(t.getMinutes())}:${e(t.getSeconds())}`}var be,za=(be=class extends _e{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.errorMessage="",this.loading=!1,this.refreshSeq=0,this.handleRetry=()=>{this.refresh()}}connectedCallback(){super.connectedCallback(),this.refresh(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling()}updated(e){e.has("pollIntervalMs")&&this.startPolling();let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.refresh())}render(){let e=this.status;return S`
      <div class="card">
        <header class="head">
          ${e?S`<span class="badge badge-${e.mode}">${Ba[e.mode]}</span>`:S`<span class="badge badge-unknown">Unknown</span>`}
          ${e?S`<span class="state ${e.connected?"state-up":"state-down"}">
                ${e.connected?"Connected":"Disconnected"}
              </span>`:E}
          ${this.loading?S`<span class="muted loading">Refreshing…</span>`:E}
        </header>

        ${e?.fallbackAP?S`<div class="banner banner-warn" role="alert">
              Fallback AP active — the device could not reach the configured network.
            </div>`:E}
        ${this.errorMessage?S`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:E}
        ${e?this.renderSections(e):S`<p class="muted">Loading network status…</p>`}

        <footer class="muted foot">
          ${this.lastUpdated?S`Updated ${Fa(this.lastUpdated)}`:S`Waiting for data…`}
        </footer>
      </div>
    `}renderSections(e){switch(e.mode){case"wifi":return this.renderWifi(e);case"wifi_ap":return this.renderAp(e);case"ethernet":return this.renderEthernet(e)}}renderWifi(e){return S`
      <section>
        <h2>Wi-Fi</h2>
        <dl class="rows">
          ${this.row("SSID",e.ssid)}
          ${this.row("Signal",e.rssi===void 0?void 0:`${e.rssi} dBm (${ja(e.rssi)})`)}
          ${this.row("IP address",e.ip)} ${this.row("MAC address",e.mac)}
        </dl>
      </section>
    `}renderAp(e){let s=e.ap;return S`
      <section>
        <h2>Access point</h2>
        <dl class="rows">
          ${this.row("SSID",s?.ssid)} ${this.row("IP address",s?.ip)}
          ${this.row("Stations",s?.stations)}
        </dl>
      </section>
    `}renderEthernet(e){let s=e.eth;return S`
      <section>
        <h2>Ethernet</h2>
        <dl class="rows">
          ${this.row("IP address",s?.ip)} ${this.row("MAC address",s?.mac)}
          ${this.row("Link",s===void 0?void 0:s.linkUp?"Up":"Down")}
          ${this.row("Speed",s===void 0?void 0:`${s.speed} Mbps`)}
          ${this.row("Duplex",s===void 0?void 0:qa(s.duplex))}
        </dl>
      </section>
    `}row(e,s){return s===void 0||s===""?E:S`<dt>${e}</dt>
          <dd>${s}</dd>`}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=di({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async refresh(){let e=++this.refreshSeq;this.loading=!0;let s=await this.ensureClient().getStatus();if(e===this.refreshSeq){if(this.loading=!1,s.ok){this.status=s.data,this.errorMessage="",this.lastUpdated=new Date;return}this.errorMessage=s.message,this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:s.message},bubbles:!0,composed:!0}))}}startPolling(){this.stopPolling();let e=Number(this.pollIntervalMs);!Number.isFinite(e)||e<=0||(this.timerId=setInterval(()=>{typeof document<"u"&&document.hidden||this.refresh()},e))}stopPolling(){this.timerId!==void 0&&(clearInterval(this.timerId),this.timerId=void 0)}},be.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},status:{state:!0},errorMessage:{state:!0},lastUpdated:{state:!0},loading:{state:!0}},be.styles=fs`
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
  `,be);typeof customElements<"u"&&!customElements.get("edn-network-status")&&customElements.define("edn-network-status",za);var ct=32,je=64,qt=8,Wa=5e3,Va=new TextEncoder;function ht(t){return Va.encode(t).length}function _r(t){return t.isAPMode?"ap":"station"}var ve,Ja=(ve=class extends _e{constructor(...e){super(...e),this.baseUrl="",this.settings=null,this.loading=!1,this.submitting=!1,this.errorMessage="",this.successMessage="",this.draftMode="station",this.draftWifiSSID="",this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApSSID="",this.draftApHasPassword=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={},this.scanning=!1,this.scanResults=[],this.scanError="",this.loadToken=0,this.settingsBaseUrl=null,this.handleWifiSSIDInput=s=>{this.draftWifiSSID=s.target.value},this.handleWifiPasswordInput=s=>{this.draftWifiPassword=s.target.value,this.draftWifiPasswordDirty=!0},this.handleApSSIDInput=s=>{this.draftApSSID=s.target.value},this.handleApPasswordInput=s=>{this.draftApPassword=s.target.value,this.draftApPasswordDirty=!0},this.handleApHasPasswordChange=s=>{this.draftApHasPassword=s.target.checked,this.draftApHasPassword||(this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={...this.fieldErrors,wifiAPPassword:void 0})},this.handlePickSsid=s=>{this.draftMode!=="station"&&(this.draftMode="station"),this.draftWifiSSID=s,this.fieldErrors={...this.fieldErrors,wifiSSID:void 0}},this.handleSubmit=s=>{s.preventDefault(),this.handleSave()},this.handleRetry=()=>{this.load()}}connectedCallback(){super.connectedCallback(),this.load()}disconnectedCallback(){super.disconnectedCallback(),this.scanController?.abort(),this.scanController=void 0}updated(e){let s=e.get("baseUrl");e.has("baseUrl")&&s!==void 0&&s!==this.baseUrl&&(this.client=void 0,this.scanResults=[],this.scanError="",this.load())}render(){let e=this.settings;return S`
      <div class="card">
        <h1>Network settings</h1>
        ${this.errorMessage?S`<div class="banner banner-error" role="alert">
              <span>${this.errorMessage}</span>
              <button type="button" @click=${this.handleRetry}>Retry</button>
            </div>`:E}
        ${this.successMessage?S`<div class="banner banner-success" role="status">${this.successMessage}</div>`:E}
        ${e?S`${this.renderForm(e)} ${this.renderScan()}`:this.loading?S`<p class="status">Loading settings…</p>`:S`<p class="status">Settings unavailable.</p>`}
      </div>
    `}renderForm(e){return S`
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
          ${this.dirty?S`<span class="muted">Unsaved changes</span>`:E}
        </div>
      </form>
    `}renderStation(e){return S`
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
        ${e.hasWifiPassword?S`<p class="hint">Password saved •••• (leave blank to keep)</p>`:E}
        ${this.renderPasswordClearWarning("wifiPassword")}
        ${this.renderFieldError("wifiPassword")}
      </section>
    `}renderAccessPoint(e){return S`
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
        ${this.draftApHasPassword?S`
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
              ${e.hasWifiAPPassword?S`<p class="hint">Password saved •••• (leave blank to keep)</p>`:E}
              ${this.renderPasswordClearWarning("wifiAPPassword")}
              ${this.renderFieldError("wifiAPPassword")}
            `:E}
      </section>
    `}renderScan(){return S`
      <section class="group">
        <div class="scan-head">
          <h2>Wi-Fi scan</h2>
          <button type="button" @click=${this.handleScan} ?disabled=${this.scanning}>
            ${this.scanning?"Scanning…":"Scan"}
          </button>
        </div>
        ${this.scanError?S`<div class="banner banner-error" role="alert">${this.scanError}</div>`:E}
        ${this.scanResults.length>0?S`<ul class="networks">
              ${this.scanResults.map(e=>this.renderNetwork(e))}
            </ul>`:E}
      </section>
    `}renderNetwork(e){return S`
      <li>
        <button type="button" class="network" @click=${()=>this.handlePickSsid(e.ssid)}>
          <span class="ssid">${e.ssid}</span>
          <span class="meta">
            ${e.encrypted?S`<span class="lock" title="Encrypted" aria-label="Encrypted">🔒</span>`:E}
            ${e.rssi} dBm · Ch ${e.channel}
          </span>
        </button>
      </li>
    `}renderFieldError(e){let s=this.fieldErrors[e];return s?S`<p class="field-error" role="alert">${s}</p>`:E}renderPasswordClearWarning(e){return(e==="wifiPassword"?this.draftWifiPasswordDirty&&this.draftWifiPassword===""&&this.settings?.hasWifiPassword===!0:this.draftApPasswordDirty&&this.draftApPassword===""&&this.draftApHasPassword&&this.settings?.hasWifiAPPassword===!0)?S`<p class="clear-warning" role="alert">
          Warning: saving now will remove the stored password.
        </p>`:E}get dirty(){let e=this.settings;return e?this.draftMode!==_r(e)||this.draftWifiSSID!==e.wifiSSID||this.draftApSSID!==e.wifiAPSSID||this.draftApHasPassword!==e.wifiAPHasPassword||this.draftWifiPasswordDirty||this.draftApPasswordDirty:!1}ensureClient(){return(!this.client||this.clientBaseUrl!==this.baseUrl)&&(this.client=di({baseUrl:this.baseUrl}),this.clientBaseUrl=this.baseUrl),this.client}async load(){let e=++this.loadToken;this.loading=!0;let s=await this.ensureClient().getSettings();if(e!==this.loadToken){this.settingsBaseUrl!==this.baseUrl&&(this.settings=null);return}if(this.loading=!1,s.ok){this.applyServerSettings(s.data),this.errorMessage="";return}this.settingsBaseUrl!==this.baseUrl&&(this.settings=null),this.errorMessage=s.message,this.emitError(s.message)}applyServerSettings(e){this.settings=e,this.settingsBaseUrl=this.baseUrl,this.draftMode=_r(e),this.draftWifiSSID=e.wifiSSID,this.draftApSSID=e.wifiAPSSID,this.draftApHasPassword=e.wifiAPHasPassword,this.draftWifiPassword="",this.draftWifiPasswordDirty=!1,this.draftApPassword="",this.draftApPasswordDirty=!1,this.fieldErrors={}}validate(){let e=this.settings,s={};if(!e)return s;let i=this.draftMode==="ap";if(ht(this.draftWifiSSID)>ct&&(s.wifiSSID=`Wi-Fi name must be ${ct} characters or fewer.`),ht(this.draftApSSID)>ct&&(s.wifiAPSSID=`Access point name must be ${ct} characters or fewer.`),i?this.draftApSSID.length===0&&(s.wifiAPSSID="Access point name is required in AP mode."):this.draftWifiSSID.length===0&&(s.wifiSSID="Wi-Fi name is required in station mode."),this.draftWifiPasswordDirty&&ht(this.draftWifiPassword)>je&&(s.wifiPassword=`Wi-Fi password must be ${je} characters or fewer.`),this.draftApHasPassword)if(this.draftApPasswordDirty){let r=ht(this.draftApPassword);(r<qt||r>je)&&(s.wifiAPPassword=`Access point password must be ${qt}–${je} characters.`)}else e.hasWifiAPPassword||(s.wifiAPPassword=`Enter an access point password (${qt}–${je} characters).`);return s}buildPatch(){let e=this.settings,s={};if(!e)return s;let i=this.draftMode==="ap";return i!==e.isAPMode&&(s.isAPMode=i),this.draftWifiSSID!==e.wifiSSID&&(s.wifiSSID=this.draftWifiSSID),this.draftWifiPasswordDirty&&(s.wifiPassword=this.draftWifiPassword),this.draftApSSID!==e.wifiAPSSID&&(s.wifiAPSSID=this.draftApSSID),this.draftApHasPassword!==e.wifiAPHasPassword&&(s.wifiAPHasPassword=this.draftApHasPassword),this.draftApHasPassword&&this.draftApPasswordDirty&&(s.wifiAPPassword=this.draftApPassword),s}async handleSave(){if(this.submitting||!this.settings)return;let e=this.validate();if(this.fieldErrors=e,Object.keys(e).length>0)return;let s=this.buildPatch();if(Object.keys(s).length===0)return;this.submitting=!0,this.errorMessage="",this.successMessage="";let i=await this.ensureClient().saveSettings(s);if(this.submitting=!1,i.ok){this.applyServerSettings(i.data),this.successMessage="Settings saved.",this.dispatchEvent(new CustomEvent("edn-saved",{detail:i.data,bubbles:!0,composed:!0}));return}let r=i.status===void 0?"Could not confirm the save — the device may have applied the changes and reconnected. Check the status widget or retry.":i.message;this.errorMessage=r,this.emitError(r)}async handleScan(){if(this.scanning)return;this.scanning=!0,this.scanError="";let e=new AbortController;this.scanController=e;let s,i=new Promise(n=>{s=setTimeout(()=>{e.abort(),n({ok:!1,message:"Wi-Fi scan timed out after 5 seconds."})},Wa)}),r=await Promise.race([this.ensureClient().wifiList(e.signal),i]);if(s!==void 0&&clearTimeout(s),this.scanController===e&&(this.scanController=void 0),this.scanning=!1,r.ok){this.scanResults=[...r.data.networks].sort((n,o)=>o.rssi-n.rssi);return}r.message!=="Request aborted."&&(this.scanError=r.message,this.emitError(r.message))}emitError(e){this.dispatchEvent(new CustomEvent("edn-error",{detail:{message:e},bubbles:!0,composed:!0}))}setMode(e){this.draftMode!==e&&(this.draftMode=e,this.fieldErrors={})}},ve.properties={baseUrl:{type:String,attribute:"base-url"},settings:{state:!0},loading:{state:!0},submitting:{state:!0},errorMessage:{state:!0},successMessage:{state:!0},draftMode:{state:!0},draftWifiSSID:{state:!0},draftWifiPassword:{state:!0},draftWifiPasswordDirty:{state:!0},draftApSSID:{state:!0},draftApHasPassword:{state:!0},draftApPassword:{state:!0},draftApPasswordDirty:{state:!0},fieldErrors:{state:!0},scanning:{state:!0},scanResults:{state:!0},scanError:{state:!0}},ve.styles=fs`
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
  `,ve);typeof customElements<"u"&&!customElements.get("edn-network-settings")&&customElements.define("edn-network-settings",Ja);var Qa=[{id:"status",label:"Status"},{id:"settings",label:"Network settings"}],$e,Ka=($e=class extends _e{constructor(...e){super(...e),this.baseUrl="",this.pollIntervalMs=1e4,this.activeTab="status"}render(){return S`
      <div class="tabs" role="tablist" aria-label="Network">
        ${Qa.map(e=>S`
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
    `}renderActive(){return this.activeTab==="settings"?S`<edn-network-settings base-url=${this.baseUrl}></edn-network-settings>`:S`
      <edn-network-status
        base-url=${this.baseUrl}
        poll-interval-ms=${this.pollIntervalMs}
      ></edn-network-status>
    `}selectTab(e){this.activeTab!==e&&(this.activeTab=e,this.dispatchEvent(new CustomEvent("edn-tab-change",{detail:{tab:e},bubbles:!0,composed:!0})))}},$e.properties={baseUrl:{type:String,attribute:"base-url"},pollIntervalMs:{type:Number,attribute:"poll-interval-ms"},activeTab:{state:!0}},$e.styles=fs`
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
  `,$e);typeof customElements<"u"&&!customElements.get("edn-network-page")&&customElements.define("edn-network-page",Ka);var bi="Network request failed. Check the device connection and try again.",Za={};function Ga(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function Ya(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function vi(t,e){return Ya(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:bi}}async function $i(t,e){let s=e;try{let i=await t.text();if(i.length>0)try{s=Ga(JSON.parse(i))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}async function br(t,e,s,i,r,n){let o;try{o=await fetch(t,{headers:{Accept:e,...r},signal:n})}catch(l){return vi(l,n)}if(!o.ok)return $i(o,o.status===404?i:`Request failed with HTTP ${o.status}.`);let d;try{d=new Uint8Array(await o.arrayBuffer())}catch{return{ok:!1,status:o.status,message:bi}}return d.byteLength===0?{ok:!1,status:o.status,message:s}:{ok:!0,data:d}}async function vr(t,e,s,i,r){if(e.byteLength===0)return{ok:!1,message:s};let n=new ArrayBuffer(e.byteLength);new Uint8Array(n).set(e);let o;try{o=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/octet-stream",...i},body:n,signal:r})}catch(d){return vi(d,r)}return o.ok?(await o.text().catch(()=>""),{ok:!0,data:Za}):$i(o,`Upload failed with HTTP ${o.status}.`)}function Xa(t={}){let e=t.baseUrl??"",s=t.backupPath??"/api/config/backup",i=t.configPath??"/api/config",r=t.headers??{},n=`${e}${s}`,o=`${e}${i}`;return{downloadBackup(d){return br(n,"application/zip","Device returned an empty archive.","The device has no config files yet.",r,d)},downloadConfig(d){return br(o,"application/octet-stream","Device returned an empty config file.","The device has no saved config yet (no config file on flash).",r,d)},uploadBackup(d,l){return vr(n,d,"Cannot upload an empty archive.",r,l)},uploadConfig(d,l){return vr(o,d,"Cannot upload an empty config file.",r,l)}}}var _t=globalThis,vs=_t.ShadowRoot&&(_t.ShadyCSS===void 0||_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$s=Symbol(),$r=new WeakMap,yi=class{constructor(e,s,i){if(this._$cssResult$=!0,i!==$s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o,s=this.t;if(vs&&e===void 0){let i=s!==void 0&&s.length===1;i&&(e=$r.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&$r.set(s,e))}return e}toString(){return this.cssText}},eo=t=>new yi(typeof t=="string"?t:t+"",void 0,$s),to=(t,...e)=>new yi(t.length===1?t[0]:e.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]),t,$s),so=(t,e)=>{if(vs)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let i=document.createElement("style"),r=_t.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},yr=vs?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let i of e.cssRules)s+=i.cssText;return eo(s)})(t):t,{is:ro,defineProperty:io,getOwnPropertyDescriptor:no,getOwnPropertyNames:ao,getOwnPropertySymbols:oo,getPrototypeOf:lo}=Object,Tt=globalThis,wr=Tt.trustedTypes,co=wr?wr.emptyScript:"",ho=Tt.reactiveElementPolyfillSupport,Ve=(t,e)=>t,Gt={toAttribute(t,e){switch(e){case Boolean:t=t?co:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},wi=(t,e)=>!ro(t,e),Ar={attribute:!0,type:String,converter:Gt,reflect:!1,useDefault:!1,hasChanged:wi};Symbol.metadata??=Symbol("metadata"),Tt.litPropertyMetadata??=new WeakMap;var Me=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=Ar){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){let i=Symbol(),r=this.getPropertyDescriptor(e,i,s);r!==void 0&&io(this.prototype,e,r)}}static getPropertyDescriptor(e,s,i){let{get:r,set:n}=no(this.prototype,e)??{get(){return this[s]},set(o){this[s]=o}};return{get:r,set(o){let d=r?.call(this);n?.call(this,o),this.requestUpdate(e,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ar}static _$Ei(){if(this.hasOwnProperty(Ve("elementProperties")))return;let e=lo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Ve("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ve("properties"))){let s=this.properties,i=[...ao(s),...oo(s)];for(let r of i)this.createProperty(r,s[r])}let e=this[Symbol.metadata];if(e!==null){let s=litPropertyMetadata.get(e);if(s!==void 0)for(let[i,r]of s)this.elementProperties.set(i,r)}this._$Eh=new Map;for(let[s,i]of this.elementProperties){let r=this._$Eu(s,i);r!==void 0&&this._$Eh.set(r,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let s=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let r of i)s.unshift(yr(r))}else e!==void 0&&s.push(yr(e));return s}static _$Eu(e,s){let i=s.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,s=this.constructor.elementProperties;for(let i of s.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return so(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,i){this._$AK(e,i)}_$ET(e,s){let i=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,i);if(r!==void 0&&i.reflect===!0){let n=(i.converter?.toAttribute===void 0?Gt:i.converter).toAttribute(s,i.type);this._$Em=e,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(e,s){let i=this.constructor,r=i._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute===void 0?Gt:n.converter;this._$Em=r;let d=o.fromAttribute(s,n.type);this[r]=d??this._$Ej?.get(r)??d,this._$Em=null}}requestUpdate(e,s,i,r=!1,n){if(e!==void 0){let o=this.constructor;if(r===!1&&(n=this[e]),i??=o.getPropertyOptions(e),!((i.hasChanged??wi)(n,s)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,s,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:i,reflect:r,wrapped:n},o){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,o??s??this[e]),n!==!0||o!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(s=void 0),this._$AL.set(e,s)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,n]of i){let{wrapped:o}=n,d=this[r];o!==!0||this._$AL.has(r)||d===void 0||this.C(r,void 0,n,d)}}let e=!1,s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(s)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};Me.elementStyles=[],Me.shadowRootOptions={mode:"open"},Me[Ve("elementProperties")]=new Map,Me[Ve("finalized")]=new Map,ho?.({ReactiveElement:Me}),(Tt.reactiveElementVersions??=[]).push("2.1.2");var ys=globalThis,Sr=t=>t,At=ys.trustedTypes,kr=At?At.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ai="$lit$",ne=`lit$${Math.random().toFixed(9).slice(2)}$`,Si="?"+ne,uo=`<${Si}>`,ke=document,et=()=>ke.createComment(""),tt=t=>t===null||typeof t!="object"&&typeof t!="function",ws=Array.isArray,po=t=>ws(t)||typeof t?.[Symbol.iterator]=="function",Ft=`[ 	
\f\r]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Er=/-->/g,Cr=/>/g,ue=RegExp(`>|${Ft}(?:([^\\s"'>=/]+)(${Ft}*=${Ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xr=/'/g,Pr=/"/g,ki=/^(?:script|style|textarea|title)$/i,ee=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),Re=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Mr=new WeakMap,me=ke.createTreeWalker(ke,129);function Ei(t,e){if(!ws(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return kr===void 0?e:kr.createHTML(e)}var fo=(t,e)=>{let s=t.length-1,i=[],r,n=e===2?"<svg>":e===3?"<math>":"",o=qe;for(let d=0;d<s;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(o.lastIndex=c,u=o.exec(l),u!==null);)c=o.lastIndex,o===qe?u[1]==="!--"?o=Er:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=ue):(ki.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=ue):o=Cr:o===ue?u[0]===">"?(o=r??qe,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?ue:u[3]==='"'?Pr:xr):o===Pr||o===xr?o=ue:o===Er||o===Cr?o=qe:(o=ue,r=void 0);let f=o===ue&&t[d+1].startsWith("/>")?" ":"";n+=o===qe?l+uo:p>=0?(i.push(h),l.slice(0,p)+Ai+l.slice(p)+ne+f):l+ne+(p===-2?d:f)}return[Ei(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},Yt=class Ci{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,o=0,d=e.length-1,l=this.parts,[h,u]=fo(e,s);if(this.el=Ci.createElement(h,i),me.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=me.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Ai)){let c=u[o++],f=r.getAttribute(p).split(ne),$=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:$[2],strings:f,ctor:$[1]==="."?go:$[1]==="?"?_o:$[1]==="@"?bo:Nt}),r.removeAttribute(p)}else p.startsWith(ne)&&(l.push({type:6,index:n}),r.removeAttribute(p));if(ki.test(r.tagName)){let p=r.textContent.split(ne),c=p.length-1;if(c>0){r.textContent=At?At.emptyScript:"";for(let f=0;f<c;f++)r.append(p[f],et()),me.nextNode(),l.push({type:2,index:++n});r.append(p[c],et())}}}else if(r.nodeType===8)if(r.data===Si)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(ne,p+1))!==-1;)l.push({type:7,index:n}),p+=ne.length-1}n++}}static createElement(e,s){let i=ke.createElement("template");return i.innerHTML=e,i}};function De(t,e,s=t,i){if(e===Re)return e;let r=i===void 0?s._$Cl:s._$Co?.[i],n=tt(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,s,i)),i===void 0?s._$Cl=r:(s._$Co??=[])[i]=r),r!==void 0&&(e=De(t,r._$AS(t,e.values),r,i)),e}var mo=class{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:s},parts:i}=this._$AD,r=(e?.creationScope??ke).importNode(s,!0);me.currentNode=r;let n=me.nextNode(),o=0,d=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new As(n,n.nextSibling,this,e):l.type===1?h=new l.ctor(n,l.name,l.strings,this,e):l.type===6&&(h=new vo(n,this,e)),this._$AV.push(h),l=i[++d]}o!==l?.index&&(n=me.nextNode(),o++)}return me.currentNode=ke,r}p(e){let s=0;for(let i of this._$AV)i!==void 0&&(i.strings===void 0?i._$AI(e[s]):(i._$AI(e,i,s),s+=i.strings.length-2)),s++}},As=class xi{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=De(this,e,s),tt(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==Re&&this._(e):e._$litType$===void 0?e.nodeType===void 0?po(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&tt(this._$AH)?this._$AA.nextSibling.data=e:this.T(ke.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Yt.createElement(Ei(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let n=new mo(r,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(e){let s=Mr.get(e.strings);return s===void 0&&Mr.set(e.strings,s=new Yt(e)),s}k(e){ws(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let n of e)r===s.length?s.push(i=new xi(this.O(et()),this.O(et()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let i=Sr(e).nextSibling;Sr(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Nt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,i,r,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=s,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}_$AI(e,s=this,i,r){let n=this.strings,o=!1;if(n===void 0)e=De(this,e,s,0),o=!tt(e)||e!==this._$AH&&e!==Re,o&&(this._$AH=e);else{let d=e,l,h;for(e=n[0],l=0;l<n.length-1;l++)h=De(this,d[i+l],s,l),h===Re&&(h=this._$AH[l]),o||=!tt(h)||h!==this._$AH[l],h===R?e=R:e!==R&&(e+=(h??"")+n[l+1]),this._$AH[l]=h}o&&!r&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},go=class extends Nt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}},_o=class extends Nt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}},bo=class extends Nt{constructor(e,s,i,r,n){super(e,s,i,r,n),this.type=5}_$AI(e,s=this){if((e=De(this,e,s,0)??R)===Re)return;let i=this._$AH,r=e===R&&i!==R||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==R&&(i===R||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},vo=class{constructor(e,s,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){De(this,e)}},$o=ys.litHtmlPolyfillSupport;$o?.(Yt,As),(ys.litHtmlVersions??=[]).push("3.3.3");var yo=(t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(r===void 0){let n=s?.renderBefore??null;i._$litPart$=r=new As(e.insertBefore(et(),n),n,void 0,s??{})}return r._$AI(t),r},Ss=globalThis,Je=class extends Me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=yo(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Re}};Je._$litElement$=!0,Je.finalized=!0,Ss.litElementHydrateSupport?.({LitElement:Je});var wo=Ss.litElementPolyfillSupport;wo?.({LitElement:Je}),(Ss.litElementVersions??=[]).push("4.2.2");var Tr=2e3,Ao=12e4,Nr="Unsupported file type. Choose a .zip full backup or a .bin config file.";function zt(t){let e=t.toLowerCase();return e.endsWith(".zip")?"archive":e.endsWith(".bin")?"config":null}function So(t,e){if(typeof URL.createObjectURL!="function")return;let s=new ArrayBuffer(t.byteLength);new Uint8Array(s).set(t);let i=new Blob([s],{type:"application/octet-stream"}),r=URL.createObjectURL(i),n=document.createElement("a");n.href=r,n.download=e,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(r),0)}var ye,ko=(ye=class extends Je{constructor(...e){super(...e),this.baseUrl="",this.backupPath="/api/config/backup",this.configPath="/api/config",this.healthPath="/healthcheck/healty",this.deviceName="device",this.archiveFileName="config-backup.zip",this.binFileName="config.bin",this.maxUploadBytes=16384,this.zipNotes="",this.binNotes="",this.zipConfirmText="",this.binConfirmText="",this.downloading=!1,this.downloadNotice=null,this.selectedFile=null,this.fileError=null,this.uploading=!1,this.uploadError=null,this.phase="idle",this._attempts=0}disconnectedCallback(){this.clearPollTimer(),super.disconnectedCallback()}get busy(){return this.uploading||this.phase!=="idle"}get effectiveZipNotes(){return this.zipNotes||`Download a zip of everything stored on the ${this.deviceName}: ${this.binFileName} plus the device's persisted state files. Restoring this archive overwrites the stored config and state files. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveBinNotes(){return this.binNotes||`Download only ${this.binFileName}, the raw stored config. Restoring it replaces just that file. It contains Wi-Fi and MQTT credentials in plaintext, so keep it somewhere safe.`}get effectiveZipConfirmText(){return this.zipConfirmText||`Uploading this archive REPLACES ${this.binFileName} and the device's stored state files on the ${this.deviceName} AND REBOOTS IT. Validation is all-or-nothing: a rejected archive changes nothing. Continue?`}get effectiveBinConfirmText(){return this.binConfirmText||`Uploading REPLACES ${this.binFileName} on the ${this.deviceName} AND REBOOTS IT IMMEDIATELY. The device will be offline 20-60 seconds. Continue?`}render(){return ee`
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
            ${this.fileError?ee`<span class="field-error" role="alert">${this.fileError}</span>`:R}
          </label>
          ${this.selectedFile&&!this.fileError?ee`<p class="muted">
                Selected: ${this.selectedFile.name} (${this.selectedFile.size}
                bytes)${zt(this.selectedFile.name)==="archive"?" — full backup (all files)":` — ${this.binFileName} only`}
              </p>`:R}
          ${this.uploadError?ee`<div class="banner banner-error" role="alert">
                ${this.uploadError}
              </div>`:R}
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
    `}renderNotice(e){return e?ee`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.message}
    </div>`:R}renderRebootOverlay(){return this.phase==="idle"?R:ee`
      <div
        class="reboot-overlay"
        role="alertdialog"
        aria-modal="true"
        aria-label="Device rebooting"
      >
        <div class="reboot-dialog">
          <h2>Device is rebooting</h2>
          ${this.phase==="rebooting"?ee`
                <p>
                  Waiting for the ${this.deviceName} to come back online. This
                  usually takes 20–60 seconds.
                </p>
                <p class="muted" aria-live="polite">
                  Polling device health…
                </p>
                <div class="spinner" aria-hidden="true"></div>
              `:R}
          ${this.phase==="ready"?ee`
                <div class="banner banner-success" role="status">
                  The ${this.deviceName} is back online.
                </div>
                <div class="form-actions">
                  <button type="button" @click=${()=>this.dismissReboot()}>
                    Dismiss
                  </button>
                </div>
              `:R}
          ${this.phase==="timeout"?ee`
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
              `:R}
        </div>
      </div>
    `}createClient(){return Xa({baseUrl:this.baseUrl,backupPath:this.backupPath,configPath:this.configPath})}async handleDownload(e){if(!(this.downloading||this.phase!=="idle")){this.downloading=!0,this.downloadNotice=null;try{let s=this.createClient(),i=e==="archive"?await s.downloadBackup():await s.downloadConfig();if(!i.ok){this.downloadNotice={kind:"error",message:i.message};return}let r=e==="archive"?this.archiveFileName:this.binFileName;So(i.data,r),this.downloadNotice={kind:"info",message:e==="archive"?`Full backup downloaded as ${r}.`:`Config downloaded as ${r}.`}}finally{this.downloading=!1}}}handleFileChange(e){let s=e.currentTarget,i=s.files&&s.files[0]?s.files[0]:null;this.selectedFile=i,this.uploadError=null,this.fileError=i?i.size===0?"The selected file is empty.":i.size>this.maxUploadBytes?`This does not look like a ${this.deviceName} backup file (max ${this.maxUploadBytes} bytes).`:zt(i.name)?null:Nr:null}async handleUpload(){if(!this.selectedFile||this.fileError||this.busy)return;let e=zt(this.selectedFile.name);if(!e)this.uploadError=Nr;else if(window.confirm(e==="archive"?this.effectiveZipConfirmText:this.effectiveBinConfirmText)){this.uploading=!0,this.uploadError=null;try{let s;try{s=new Uint8Array(await this.selectedFile.arrayBuffer())}catch{this.uploadError="Could not read the selected backup file.";return}let i=this.createClient(),r=e==="archive"?await i.uploadBackup(s):await i.uploadConfig(s);if(!r.ok){this.uploadError=r.message;return}if(this.clearSelection(),!this.isConnected)return;this.dispatchEvent(new CustomEvent("edc-restore-committed",{detail:{kind:e},bubbles:!0,composed:!0})),this.startReboot()}finally{this.uploading=!1}}}clearSelection(){this.selectedFile=null,this.fileError=null;let e=this.renderRoot.querySelector("#edc-restore-file");e&&(e.value="")}startReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}retryReboot(){this._attempts=0,this.phase="rebooting",this.schedulePoll()}dismissReboot(){this.clearPollTimer(),this.phase="idle"}schedulePoll(){this.clearPollTimer(),this._pollTimer=window.setTimeout(()=>{this._pollTimer=void 0,this.pollHealth()},Tr)}clearPollTimer(){this._pollTimer!==void 0&&(window.clearTimeout(this._pollTimer),this._pollTimer=void 0)}async pollHealth(){if(this.phase!=="rebooting")return;let e=!1;try{let s=await fetch(`${this.baseUrl}${this.healthPath}`,{headers:{Accept:"application/json"}});if(s.ok){let i=await s.json();e=!!i&&typeof i=="object"&&i.healty===!0}}catch{e=!1}this.isConnected&&this.phase==="rebooting"&&(e?this.phase="ready":(this._attempts+=1,this._attempts*Tr>=Ao?this.phase="timeout":this.schedulePoll()))}},ye.properties={baseUrl:{type:String,attribute:"base-url"},backupPath:{type:String,attribute:"backup-path"},configPath:{type:String,attribute:"config-path"},healthPath:{type:String,attribute:"health-path"},deviceName:{type:String,attribute:"device-name"},archiveFileName:{type:String,attribute:"archive-file-name"},binFileName:{type:String,attribute:"bin-file-name"},maxUploadBytes:{type:Number,attribute:"max-upload-bytes"},zipNotes:{type:String,attribute:"zip-notes"},binNotes:{type:String,attribute:"bin-notes"},zipConfirmText:{type:String,attribute:"zip-confirm-text"},binConfirmText:{type:String,attribute:"bin-confirm-text"},downloading:{state:!0},downloadNotice:{state:!0},selectedFile:{state:!0},fileError:{state:!0},uploading:{state:!0},uploadError:{state:!0},phase:{state:!0}},ye.styles=to`
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
  `,ye);typeof customElements<"u"&&!customElements.get("edc-config-backup-page")&&customElements.define("edc-config-backup-page",ko);var Ur="Invalid settings response.";function Eo(t){if(t&&typeof t=="object"&&"message"in t){let e=t.message;if(typeof e=="string"&&e.length>0)return e}}function Co(t,e){return e?.aborted===!0||typeof t=="object"&&!!t&&t.name==="AbortError"}function Pi(t,e){return Co(t,e)?{ok:!1,message:"Request aborted."}:{ok:!1,message:"Network request failed. Check the device connection and try again."}}async function Mi(t,e){let s=e;try{let i=await t.text();if(i.length>0)try{s=Eo(JSON.parse(i))??s}catch{}}catch{}return{ok:!1,status:t.status,message:s}}function xo(t){if(!t||typeof t!="object")return;let{host:e,uri:s,port:i,enabled:r}=t;if(typeof e=="string"&&typeof s=="string"&&typeof i=="number"&&Number.isFinite(i)&&typeof r=="boolean")return{host:e,uri:s,port:i,enabled:r}}async function Ti(t){let e;try{e=await t.json()}catch{return{ok:!1,status:t.status,message:Ur}}let s=xo(e);return s?{ok:!0,data:s}:{ok:!1,status:t.status,message:Ur}}async function Po(t,e,s){let i;try{i=await fetch(t,{headers:{Accept:"application/json",...e},signal:s})}catch(r){return Pi(r,s)}return i.ok?Ti(i):Mi(i,"Could not load the logger settings from the device.")}async function Mo(t,e,s,i){let r;try{r=await fetch(t,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...s},body:JSON.stringify(e),signal:i})}catch(n){return Pi(n,i)}return r.ok?Ti(r):Mi(r,"The device rejected the logger settings.")}function To(t={}){let e=t.baseUrl??"",s=t.settingsPath??"/api/log/settings",i=t.headers??{},r=`${e}${s}`;return{getSettings(n){return Po(r,i,n)},saveSettings(n,o){return Mo(r,n,i,o)}}}var bt=globalThis,ks=bt.ShadowRoot&&(bt.ShadyCSS===void 0||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Es=Symbol(),Rr=new WeakMap,Ni=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Es)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ks&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Rr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Rr.set(e,t))}return t}toString(){return this.cssText}},No=t=>new Ni(typeof t=="string"?t:t+"",void 0,Es),Uo=(t,...e)=>new Ni(t.length===1?t[0]:e.reduce((s,i,r)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1],t[0]),t,Es),Ro=(t,e)=>{if(ks)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(let s of e){let i=document.createElement("style"),r=bt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=s.cssText,t.appendChild(i)}},Dr=ks?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(let i of e.cssRules)s+=i.cssText;return No(s)})(t):t,{is:Do,defineProperty:Ho,getOwnPropertyDescriptor:Io,getOwnPropertyNames:Oo,getOwnPropertySymbols:Lo,getPrototypeOf:Bo}=Object,Ut=globalThis,Hr=Ut.trustedTypes,jo=Hr?Hr.emptyScript:"",qo=Ut.reactiveElementPolyfillSupport,Qe=(t,e)=>t,Xt={toAttribute(t,e){switch(e){case Boolean:t=t?jo:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},Ui=(t,e)=>!Do(t,e),Ir={attribute:!0,type:String,converter:Xt,reflect:!1,useDefault:!1,hasChanged:Ui};Symbol.metadata??=Symbol("metadata"),Ut.litPropertyMetadata??=new WeakMap;var Te=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Ir){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ho(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=Io(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get:i,set(n){let o=i?.call(this);r?.call(this,n),this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ir}static _$Ei(){if(this.hasOwnProperty(Qe("elementProperties")))return;let t=Bo(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Qe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Qe("properties"))){let e=this.properties,s=[...Oo(e),...Lo(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(Dr(i))}else t!==void 0&&e.push(Dr(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ro(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let r=(s.converter?.toAttribute===void 0?Xt:s.converter).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute===void 0?Xt:r.converter;this._$Em=i;let o=n.fromAttribute(e,r.type);this[i]=o??this._$Ej?.get(i)??o,this._$Em=null}}requestUpdate(t,e,s,i=!1,r){if(t!==void 0){let n=this.constructor;if(i===!1&&(r=this[t]),s??=n.getPropertyOptions(t),!((s.hasChanged??Ui)(r,e)||s.useDefault&&s.reflect&&r===this._$Ej?.get(t)&&!this.hasAttribute(n._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:r},n){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,n??e??this[t]),r!==!0||n!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,r]of this._$Ep)this[i]=r;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,r]of s){let{wrapped:n}=r,o=this[i];n!==!0||this._$AL.has(i)||o===void 0||this.C(i,void 0,r,o)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};Te.elementStyles=[],Te.shadowRootOptions={mode:"open"},Te[Qe("elementProperties")]=new Map,Te[Qe("finalized")]=new Map,qo?.({ReactiveElement:Te}),(Ut.reactiveElementVersions??=[]).push("2.1.2");var Cs=globalThis,Or=t=>t,St=Cs.trustedTypes,Lr=St?St.createPolicy("lit-html",{createHTML:t=>t}):void 0,Ri="$lit$",ae=`lit$${Math.random().toFixed(9).slice(2)}$`,Di="?"+ae,Fo=`<${Di}>`,Ee=document,st=()=>Ee.createComment(""),rt=t=>t===null||typeof t!="object"&&typeof t!="function",xs=Array.isArray,zo=t=>xs(t)||typeof t?.[Symbol.iterator]=="function",Wt=`[ 	
\f\r]`,Fe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Br=/-->/g,jr=/>/g,pe=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qr=/'/g,Fr=/"/g,Hi=/^(?:script|style|textarea|title)$/i,zr=(t=>(e,...s)=>({_$litType$:t,strings:e,values:s}))(1),He=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),Wr=new WeakMap,ge=Ee.createTreeWalker(Ee,129);function Ii(t,e){if(!xs(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lr===void 0?e:Lr.createHTML(e)}var Wo=(t,e)=>{let s=t.length-1,i=[],r,n=e===2?"<svg>":e===3?"<math>":"",o=Fe;for(let d=0;d<s;d++){let l=t[d],h,u,p=-1,c=0;for(;c<l.length&&(o.lastIndex=c,u=o.exec(l),u!==null);)c=o.lastIndex,o===Fe?u[1]==="!--"?o=Br:u[1]===void 0?u[2]===void 0?u[3]!==void 0&&(o=pe):(Hi.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=pe):o=jr:o===pe?u[0]===">"?(o=r??Fe,p=-1):u[1]===void 0?p=-2:(p=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?pe:u[3]==='"'?Fr:qr):o===Fr||o===qr?o=pe:o===Br||o===jr?o=Fe:(o=pe,r=void 0);let f=o===pe&&t[d+1].startsWith("/>")?" ":"";n+=o===Fe?l+Fo:p>=0?(i.push(h),l.slice(0,p)+Ri+l.slice(p)+ae+f):l+ae+(p===-2?d:f)}return[Ii(t,n+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]},es=class Oi{constructor({strings:e,_$litType$:s},i){let r;this.parts=[];let n=0,o=0,d=e.length-1,l=this.parts,[h,u]=Wo(e,s);if(this.el=Oi.createElement(h,i),ge.currentNode=this.el.content,s===2||s===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(r=ge.nextNode())!==null&&l.length<d;){if(r.nodeType===1){if(r.hasAttributes())for(let p of r.getAttributeNames())if(p.endsWith(Ri)){let c=u[o++],f=r.getAttribute(p).split(ae),$=/([.?@])?(.*)/.exec(c);l.push({type:1,index:n,name:$[2],strings:f,ctor:$[1]==="."?Jo:$[1]==="?"?Qo:$[1]==="@"?Ko:Rt}),r.removeAttribute(p)}else p.startsWith(ae)&&(l.push({type:6,index:n}),r.removeAttribute(p));if(Hi.test(r.tagName)){let p=r.textContent.split(ae),c=p.length-1;if(c>0){r.textContent=St?St.emptyScript:"";for(let f=0;f<c;f++)r.append(p[f],st()),ge.nextNode(),l.push({type:2,index:++n});r.append(p[c],st())}}}else if(r.nodeType===8)if(r.data===Di)l.push({type:2,index:n});else{let p=-1;for(;(p=r.data.indexOf(ae,p+1))!==-1;)l.push({type:7,index:n}),p+=ae.length-1}n++}}static createElement(e,s){let i=Ee.createElement("template");return i.innerHTML=e,i}};function Ie(t,e,s=t,i){if(e===He)return e;let r=i===void 0?s._$Cl:s._$Co?.[i],n=rt(e)?void 0:e._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(t),r._$AT(t,s,i)),i===void 0?s._$Cl=r:(s._$Co??=[])[i]=r),r!==void 0&&(e=Ie(t,r._$AS(t,e.values),r,i)),e}var Vo=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??Ee).importNode(e,!0);ge.currentNode=i;let r=ge.nextNode(),n=0,o=0,d=s[0];for(;d!==void 0;){if(n===d.index){let l;d.type===2?l=new Ps(r,r.nextSibling,this,t):d.type===1?l=new d.ctor(r,d.name,d.strings,this,t):d.type===6&&(l=new Zo(r,this,t)),this._$AV.push(l),d=s[++o]}n!==d?.index&&(r=ge.nextNode(),n++)}return ge.currentNode=Ee,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings===void 0?s._$AI(t[e]):(s._$AI(t,s,e),e+=s.strings.length-2)),e++}},Ps=class Li{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,i,r){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=Ie(this,e,s),rt(e)?e===W||e==null||e===""?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==He&&this._(e):e._$litType$===void 0?e.nodeType===void 0?zo(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&rt(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ee.createTextNode(e)),this._$AH=e}$(e){let{values:s,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=es.createElement(Ii(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(s);else{let n=new Vo(r,this),o=n.u(this.options);n.p(s),this.T(o),this._$AH=n}}_$AC(e){let s=Wr.get(e.strings);return s===void 0&&Wr.set(e.strings,s=new es(e)),s}k(e){xs(this._$AH)||(this._$AH=[],this._$AR());let s=this._$AH,i,r=0;for(let n of e)r===s.length?s.push(i=new Li(this.O(st()),this.O(st()),this,this.options)):i=s[r],i._$AI(n),r++;r<s.length&&(this._$AR(i&&i._$AB.nextSibling,r),s.length=r)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){let i=Or(e).nextSibling;Or(e).remove(),e=i}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Rt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=W}_$AI(t,e=this,s,i){let r=this.strings,n=!1;if(r===void 0)t=Ie(this,t,e,0),n=!rt(t)||t!==this._$AH&&t!==He,n&&(this._$AH=t);else{let o=t,d,l;for(t=r[0],d=0;d<r.length-1;d++)l=Ie(this,o[s+d],e,d),l===He&&(l=this._$AH[d]),n||=!rt(l)||l!==this._$AH[d],l===W?t=W:t!==W&&(t+=(l??"")+r[d+1]),this._$AH[d]=l}n&&!i&&this.j(t)}j(t){t===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Jo=class extends Rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===W?void 0:t}},Qo=class extends Rt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==W)}},Ko=class extends Rt{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=Ie(this,t,e,0)??W)===He)return;let s=this._$AH,i=t===W&&s!==W||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==W&&(s===W||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},Zo=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){Ie(this,t)}},Go=Cs.litHtmlPolyfillSupport;Go?.(es,Ps),(Cs.litHtmlVersions??=[]).push("3.3.3");var Yo=(t,e,s)=>{let i=s?.renderBefore??e,r=i._$litPart$;if(r===void 0){let n=s?.renderBefore??null;i._$litPart$=r=new Ps(e.insertBefore(st(),n),n,void 0,s??{})}return r._$AI(t),r},Ms=globalThis,Ke=class extends Te{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Yo(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return He}};Ke._$litElement$=!0,Ke.finalized=!0,Ms.litElementHydrateSupport?.({LitElement:Ke});var Xo=Ms.litElementPolyfillSupport;Xo?.({LitElement:Ke}),(Ms.litElementVersions??=[]).push("4.2.2");var we,el=(we=class extends Ke{constructor(...e){super(...e),this.baseUrl="",this.settingsPath="/api/log/settings",this.deviceName="logger",this.maxHostLength=63,this.formHost="",this.formUri="",this.formPort="",this.formEnabled=!1,this.loading=!1,this.saving=!1,this.notice=null,this.loaded=!1,this._loadStarted=!1}connectedCallback(){super.connectedCallback(),this.load()}firstUpdated(){this._loadStarted||this.load()}render(){return zr`
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
    `}renderNotice(e){return e?zr`<div
      class="banner banner-${e.kind}"
      role=${e.kind==="error"?"alert":"status"}
    >
      ${e.text}
    </div>`:W}createClient(){return To({baseUrl:this.baseUrl,settingsPath:this.settingsPath})}async load(){if(!(this.loading||this.saving)){this._loadStarted=!0,this.loading=!0,this.notice=null;try{let e=await this.createClient().getSettings();if(!e.ok){this.notice={kind:"error",text:e.message};return}this.applySettings(e.data),this.loaded=!0}finally{this.loading=!1}}}applySettings(e){this.formHost=e.host,this.formUri=e.uri,this.formPort=String(e.port),this.formEnabled=e.enabled}handleHostInput(e){this.formHost=e.currentTarget.value}handleUriInput(e){this.formUri=e.currentTarget.value}handlePortInput(e){this.formPort=e.currentTarget.value}handleEnabledChange(e){this.formEnabled=e.currentTarget.checked}validate(){let e=this.formHost.trim(),s=this.formUri.trim();if(e.length===0)return"Host is required.";if(e.length>this.maxHostLength)return`Host must be ${this.maxHostLength} characters or fewer.`;if(s.length===0)return"URI is required.";if(s.length>this.maxHostLength)return`URI must be ${this.maxHostLength} characters or fewer.`;let i=this.formPort.trim();if(!/^\d+$/.test(i))return"Port must be a whole number between 1 and 65535.";let r=Number(i);return!Number.isInteger(r)||r<1||r>65535?"Port must be a whole number between 1 and 65535.":{host:e,uri:s,port:r,enabled:this.formEnabled}}async handleSave(){if(this.loading||this.saving)return;let e=this.validate();if(typeof e=="string")this.notice={kind:"error",text:e};else{this.saving=!0,this.notice=null;try{let s=await this.createClient().saveSettings(e);if(!s.ok){this.notice={kind:"error",text:s.message};return}this.applySettings(s.data),this.loaded=!0,this.notice={kind:"info",text:"Settings saved."},this.dispatchEvent(new CustomEvent("edu-log-saved",{detail:s.data,bubbles:!0,composed:!0}))}finally{this.saving=!1}}}},we.properties={baseUrl:{type:String,attribute:"base-url"},settingsPath:{type:String,attribute:"settings-path"},deviceName:{type:String,attribute:"device-name"},maxHostLength:{type:Number,attribute:"max-host-length"},formHost:{state:!0},formUri:{state:!0},formPort:{state:!0},formEnabled:{state:!0},loading:{state:!0},saving:{state:!0},notice:{state:!0},loaded:{state:!0}},we.styles=Uo`
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
  `,we);typeof customElements<"u"&&!customElements.get("edu-log-settings-page")&&customElements.define("edu-log-settings-page",el);const Vr=document.getElementById("app");Vr&&sn(a(_a,{}),Vr);
