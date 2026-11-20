(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ra="170",Yc=0,Na=1,$c=2,Gl=1,Wl=2,Tn=3,Hn=0,Oe=1,rn=2,kn=0,Pi=1,Fa=2,Oa=3,Ba=4,Zc=5,Qn=100,Jc=101,Kc=102,jc=103,Qc=104,th=200,eh=201,nh=202,ih=203,no=204,io=205,sh=206,rh=207,oh=208,ah=209,lh=210,ch=211,hh=212,uh=213,dh=214,so=0,ro=1,oo=2,Ui=3,ao=4,lo=5,co=6,ho=7,Xl=0,fh=1,ph=2,zn=0,mh=1,gh=2,_h=3,vh=4,xh=5,yh=6,Mh=7,ql=300,Ni=301,Fi=302,uo=303,fo=304,hr=306,po=1e3,ni=1001,mo=1002,cn=1003,Sh=1004,bs=1005,fn=1006,xr=1007,ii=1008,Rn=1009,Yl=1010,$l=1011,ls=1012,oa=1013,ri=1014,bn=1015,gs=1016,aa=1017,la=1018,Oi=1020,Zl=35902,Jl=1021,Kl=1022,ln=1023,jl=1024,Ql=1025,Ii=1026,Bi=1027,tc=1028,ca=1029,ec=1030,ha=1031,ua=1033,Zs=33776,Js=33777,Ks=33778,js=33779,go=35840,_o=35841,vo=35842,xo=35843,yo=36196,Mo=37492,So=37496,Eo=37808,To=37809,bo=37810,wo=37811,Ao=37812,Co=37813,Ro=37814,Lo=37815,Po=37816,Io=37817,Do=37818,Uo=37819,No=37820,Fo=37821,Qs=36492,Oo=36494,Bo=36495,nc=36283,ko=36284,zo=36285,Ho=36286,Eh=3200,Th=3201,ic=0,bh=1,Bn="",Je="srgb",Hi="srgb-linear",ur="linear",ie="srgb",hi=7680,ka=519,wh=512,Ah=513,Ch=514,sc=515,Rh=516,Lh=517,Ph=518,Ih=519,za=35044,Ha="300 es",wn=2e3,sr=2001;class Vi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Le=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,Vo=180/Math.PI;function Gi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Le[i&255]+Le[i>>8&255]+Le[i>>16&255]+Le[i>>24&255]+"-"+Le[t&255]+Le[t>>8&255]+"-"+Le[t>>16&15|64]+Le[t>>24&255]+"-"+Le[e&63|128]+Le[e>>8&255]+"-"+Le[e>>16&255]+Le[e>>24&255]+Le[n&255]+Le[n>>8&255]+Le[n>>16&255]+Le[n>>24&255]).toLowerCase()}function Ie(i,t,e){return Math.max(t,Math.min(e,i))}function Dh(i,t){return(i%t+t)%t}function Mr(i,t,e){return(1-e)*i+e*t}function Zi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vt{constructor(t,e,n,s,r,o,a,l,h){Vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h)}set(t,e,n,s,r,o,a,l,h){const f=this.elements;return f[0]=t,f[1]=s,f[2]=a,f[3]=e,f[4]=r,f[5]=l,f[6]=n,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],h=n[1],f=n[4],m=n[7],c=n[2],u=n[5],g=n[8],_=s[0],p=s[3],d=s[6],S=s[1],y=s[4],v=s[7],P=s[2],A=s[5],w=s[8];return r[0]=o*_+a*S+l*P,r[3]=o*p+a*y+l*A,r[6]=o*d+a*v+l*w,r[1]=h*_+f*S+m*P,r[4]=h*p+f*y+m*A,r[7]=h*d+f*v+m*w,r[2]=c*_+u*S+g*P,r[5]=c*p+u*y+g*A,r[8]=c*d+u*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8];return e*o*f-e*a*h-n*r*f+n*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8],m=f*o-a*h,c=a*l-f*r,u=h*r-o*l,g=e*m+n*c+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=m*_,t[1]=(s*h-f*n)*_,t[2]=(a*n-s*o)*_,t[3]=c*_,t[4]=(f*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=u*_,t[7]=(n*l-h*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(n*l,n*h,-n*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Sr.makeScale(t,e)),this}rotate(t){return this.premultiply(Sr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Sr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Sr=new Vt;function rc(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Uh(){const i=rr("canvas");return i.style.display="block",i}const Va={};function es(i){i in Va||(Va[i]=!0,console.warn(i))}function Nh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Fh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Oh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Jt={enabled:!0,workingColorSpace:Hi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(i.r=Cn(i.r),i.g=Cn(i.g),i.b=Cn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(i.r=Di(i.r),i.g=Di(i.g),i.b=Di(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bn?ur:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Di(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Ga=[.64,.33,.3,.6,.15,.06],Wa=[.2126,.7152,.0722],Xa=[.3127,.329],qa=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ya=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Jt.define({[Hi]:{primaries:Ga,whitePoint:Xa,transfer:ur,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:Wa,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:Ga,whitePoint:Xa,transfer:ie,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:Wa,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}});let ui;class Bh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ui===void 0&&(ui=rr("canvas")),ui.width=t.width,ui.height=t.height;const n=ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Cn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Cn(e[n]/255)*255):e[n]=Cn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let kh=0;class oc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kh++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Er(s[o].image)):r.push(Er(s[o]))}else r=Er(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Er(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Bh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zh=0;class Be extends Vi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=ni,s=ni,r=fn,o=ii,a=ln,l=Rn,h=Be.DEFAULT_ANISOTROPY,f=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Gi(),this.name="",this.source=new oc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ql)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=ql;Be.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,s=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,h=l[0],f=l[4],m=l[8],c=l[1],u=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(f-c)<.01&&Math.abs(m-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+c)<.1&&Math.abs(m+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+u+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,v=(u+1)/2,P=(d+1)/2,A=(f+c)/4,w=(m+_)/4,L=(g+p)/4;return y>v&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=w/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=L/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=w/r,s=L/r),this.set(n,s,r,e),this}let S=Math.sqrt((p-g)*(p-g)+(m-_)*(m-_)+(c-f)*(c-f));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(m-_)/S,this.z=(c-f)/S,this.w=Math.acos((h+u+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hh extends Vi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new oc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends Hh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ac extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vh extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _s{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],h=n[s+1],f=n[s+2],m=n[s+3];const c=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=f,t[e+3]=m;return}if(a===1){t[e+0]=c,t[e+1]=u,t[e+2]=g,t[e+3]=_;return}if(m!==_||l!==c||h!==u||f!==g){let p=1-a;const d=l*c+h*u+f*g+m*_,S=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const P=Math.sqrt(y),A=Math.atan2(P,d*S);p=Math.sin(p*A)/P,a=Math.sin(a*A)/P}const v=a*S;if(l=l*p+c*v,h=h*p+u*v,f=f*p+g*v,m=m*p+_*v,p===1-a){const P=1/Math.sqrt(l*l+h*h+f*f+m*m);l*=P,h*=P,f*=P,m*=P}}t[e]=l,t[e+1]=h,t[e+2]=f,t[e+3]=m}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],h=n[s+2],f=n[s+3],m=r[o],c=r[o+1],u=r[o+2],g=r[o+3];return t[e]=a*g+f*m+l*u-h*c,t[e+1]=l*g+f*c+h*m-a*u,t[e+2]=h*g+f*u+a*c-l*m,t[e+3]=f*g-a*m-l*c-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(n/2),f=a(s/2),m=a(r/2),c=l(n/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=c*f*m+h*u*g,this._y=h*u*m-c*f*g,this._z=h*f*g+c*u*m,this._w=h*f*m-c*u*g;break;case"YXZ":this._x=c*f*m+h*u*g,this._y=h*u*m-c*f*g,this._z=h*f*g-c*u*m,this._w=h*f*m+c*u*g;break;case"ZXY":this._x=c*f*m-h*u*g,this._y=h*u*m+c*f*g,this._z=h*f*g+c*u*m,this._w=h*f*m-c*u*g;break;case"ZYX":this._x=c*f*m-h*u*g,this._y=h*u*m+c*f*g,this._z=h*f*g-c*u*m,this._w=h*f*m+c*u*g;break;case"YZX":this._x=c*f*m+h*u*g,this._y=h*u*m+c*f*g,this._z=h*f*g-c*u*m,this._w=h*f*m-c*u*g;break;case"XZY":this._x=c*f*m-h*u*g,this._y=h*u*m-c*f*g,this._z=h*f*g+c*u*m,this._w=h*f*m+c*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],f=e[6],m=e[10],c=n+a+m;if(c>0){const u=.5/Math.sqrt(c+1);this._w=.25/u,this._x=(f-l)*u,this._y=(r-h)*u,this._z=(o-s)*u}else if(n>a&&n>m){const u=2*Math.sqrt(1+n-a-m);this._w=(f-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+h)/u}else if(a>m){const u=2*Math.sqrt(1+a-n-m);this._w=(r-h)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+f)/u}else{const u=2*Math.sqrt(1+m-n-a);this._w=(o-s)/u,this._x=(r+h)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,f=e._w;return this._x=n*f+o*a+s*h-r*l,this._y=s*f+o*l+r*a-n*h,this._z=r*f+o*h+n*l-s*a,this._w=o*f-n*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-e;return this._w=u*o+e*this._w,this._x=u*n+e*this._x,this._y=u*s+e*this._y,this._z=u*r+e*this._z,this.normalize(),this}const h=Math.sqrt(l),f=Math.atan2(h,a),m=Math.sin((1-e)*f)/h,c=Math.sin(e*f)/h;return this._w=o*m+this._w*c,this._x=n*m+this._x*c,this._y=s*m+this._y*c,this._z=r*m+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($a.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($a.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*n),f=2*(a*e-r*s),m=2*(r*n-o*e);return this.x=e+l*h+o*m-a*f,this.y=n+l*f+a*h-r*m,this.z=s+l*m+r*f-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new I,$a=new _s;class vs{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(tn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(tn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=tn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,tn):tn.fromBufferAttribute(r,o),tn.applyMatrix4(t.matrixWorld),this.expandByPoint(tn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ws.copy(n.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,tn),tn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),As.subVectors(this.max,Ji),di.subVectors(t.a,Ji),fi.subVectors(t.b,Ji),pi.subVectors(t.c,Ji),In.subVectors(fi,di),Dn.subVectors(pi,fi),Wn.subVectors(di,pi);let e=[0,-In.z,In.y,0,-Dn.z,Dn.y,0,-Wn.z,Wn.y,In.z,0,-In.x,Dn.z,0,-Dn.x,Wn.z,0,-Wn.x,-In.y,In.x,0,-Dn.y,Dn.x,0,-Wn.y,Wn.x,0];return!br(e,di,fi,pi,As)||(e=[1,0,0,0,1,0,0,0,1],!br(e,di,fi,pi,As))?!1:(Cs.crossVectors(In,Dn),e=[Cs.x,Cs.y,Cs.z],br(e,di,fi,pi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,tn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(tn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new I,new I,new I,new I,new I,new I,new I,new I],tn=new I,ws=new vs,di=new I,fi=new I,pi=new I,In=new I,Dn=new I,Wn=new I,Ji=new I,As=new I,Cs=new I,Xn=new I;function br(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Xn.fromArray(i,r);const a=s.x*Math.abs(Xn.x)+s.y*Math.abs(Xn.y)+s.z*Math.abs(Xn.z),l=t.dot(Xn),h=e.dot(Xn),f=n.dot(Xn);if(Math.max(-Math.max(l,h,f),Math.min(l,h,f))>a)return!1}return!0}const Gh=new vs,Ki=new I,wr=new I;class da{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Gh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);const e=Ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(wr)),this.expandByPoint(Ki.copy(t.center).sub(wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new I,Ar=new I,Rs=new I,Un=new I,Cr=new I,Ls=new I,Rr=new I;class Wh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ar.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),Un.copy(this.origin).sub(Ar);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Rs),a=Un.dot(this.direction),l=-Un.dot(Rs),h=Un.lengthSq(),f=Math.abs(1-o*o);let m,c,u,g;if(f>0)if(m=o*l-a,c=o*a-l,g=r*f,m>=0)if(c>=-g)if(c<=g){const _=1/f;m*=_,c*=_,u=m*(m+o*c+2*a)+c*(o*m+c+2*l)+h}else c=r,m=Math.max(0,-(o*c+a)),u=-m*m+c*(c+2*l)+h;else c=-r,m=Math.max(0,-(o*c+a)),u=-m*m+c*(c+2*l)+h;else c<=-g?(m=Math.max(0,-(-o*r+a)),c=m>0?-r:Math.min(Math.max(-r,-l),r),u=-m*m+c*(c+2*l)+h):c<=g?(m=0,c=Math.min(Math.max(-r,-l),r),u=c*(c+2*l)+h):(m=Math.max(0,-(o*r+a)),c=m>0?r:Math.min(Math.max(-r,-l),r),u=-m*m+c*(c+2*l)+h);else c=o>0?-r:r,m=Math.max(0,-(o*c+a)),u=-m*m+c*(c+2*l)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Ar).addScaledVector(Rs,c),u}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const n=yn.dot(this.direction),s=yn.dot(yn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const h=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,c=this.origin;return h>=0?(n=(t.min.x-c.x)*h,s=(t.max.x-c.x)*h):(n=(t.max.x-c.x)*h,s=(t.min.x-c.x)*h),f>=0?(r=(t.min.y-c.y)*f,o=(t.max.y-c.y)*f):(r=(t.max.y-c.y)*f,o=(t.min.y-c.y)*f),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),m>=0?(a=(t.min.z-c.z)*m,l=(t.max.z-c.z)*m):(a=(t.max.z-c.z)*m,l=(t.min.z-c.z)*m),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,n,s,r){Cr.subVectors(e,t),Ls.subVectors(n,t),Rr.crossVectors(Cr,Ls);let o=this.direction.dot(Rr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Un.subVectors(this.origin,t);const l=a*this.direction.dot(Ls.crossVectors(Un,Ls));if(l<0)return null;const h=a*this.direction.dot(Cr.cross(Un));if(h<0||l+h>o)return null;const f=-a*Un.dot(Rr);return f<0?null:this.at(f/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,s,r,o,a,l,h,f,m,c,u,g,_,p){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,h,f,m,c,u,g,_,p)}set(t,e,n,s,r,o,a,l,h,f,m,c,u,g,_,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=h,d[6]=f,d[10]=m,d[14]=c,d[3]=u,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),o=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),h=Math.sin(s),f=Math.cos(r),m=Math.sin(r);if(t.order==="XYZ"){const c=o*f,u=o*m,g=a*f,_=a*m;e[0]=l*f,e[4]=-l*m,e[8]=h,e[1]=u+g*h,e[5]=c-_*h,e[9]=-a*l,e[2]=_-c*h,e[6]=g+u*h,e[10]=o*l}else if(t.order==="YXZ"){const c=l*f,u=l*m,g=h*f,_=h*m;e[0]=c+_*a,e[4]=g*a-u,e[8]=o*h,e[1]=o*m,e[5]=o*f,e[9]=-a,e[2]=u*a-g,e[6]=_+c*a,e[10]=o*l}else if(t.order==="ZXY"){const c=l*f,u=l*m,g=h*f,_=h*m;e[0]=c-_*a,e[4]=-o*m,e[8]=g+u*a,e[1]=u+g*a,e[5]=o*f,e[9]=_-c*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const c=o*f,u=o*m,g=a*f,_=a*m;e[0]=l*f,e[4]=g*h-u,e[8]=c*h+_,e[1]=l*m,e[5]=_*h+c,e[9]=u*h-g,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const c=o*l,u=o*h,g=a*l,_=a*h;e[0]=l*f,e[4]=_-c*m,e[8]=g*m+u,e[1]=m,e[5]=o*f,e[9]=-a*f,e[2]=-h*f,e[6]=u*m+g,e[10]=c-_*m}else if(t.order==="XZY"){const c=o*l,u=o*h,g=a*l,_=a*h;e[0]=l*f,e[4]=-m,e[8]=h*f,e[1]=c*m+_,e[5]=o*f,e[9]=u*m-g,e[2]=g*m-u,e[6]=a*f,e[10]=_*m+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xh,t,qh)}lookAt(t,e,n){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),Nn.crossVectors(n,He),Nn.lengthSq()===0&&(Math.abs(n.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),Nn.crossVectors(n,He)),Nn.normalize(),Ps.crossVectors(He,Nn),s[0]=Nn.x,s[4]=Ps.x,s[8]=He.x,s[1]=Nn.y,s[5]=Ps.y,s[9]=He.y,s[2]=Nn.z,s[6]=Ps.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],h=n[12],f=n[1],m=n[5],c=n[9],u=n[13],g=n[2],_=n[6],p=n[10],d=n[14],S=n[3],y=n[7],v=n[11],P=n[15],A=s[0],w=s[4],L=s[8],T=s[12],x=s[1],R=s[5],B=s[9],F=s[13],H=s[2],X=s[6],W=s[10],K=s[14],V=s[3],lt=s[7],mt=s[11],Mt=s[15];return r[0]=o*A+a*x+l*H+h*V,r[4]=o*w+a*R+l*X+h*lt,r[8]=o*L+a*B+l*W+h*mt,r[12]=o*T+a*F+l*K+h*Mt,r[1]=f*A+m*x+c*H+u*V,r[5]=f*w+m*R+c*X+u*lt,r[9]=f*L+m*B+c*W+u*mt,r[13]=f*T+m*F+c*K+u*Mt,r[2]=g*A+_*x+p*H+d*V,r[6]=g*w+_*R+p*X+d*lt,r[10]=g*L+_*B+p*W+d*mt,r[14]=g*T+_*F+p*K+d*Mt,r[3]=S*A+y*x+v*H+P*V,r[7]=S*w+y*R+v*X+P*lt,r[11]=S*L+y*B+v*W+P*mt,r[15]=S*T+y*F+v*K+P*Mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],f=t[2],m=t[6],c=t[10],u=t[14],g=t[3],_=t[7],p=t[11],d=t[15];return g*(+r*l*m-s*h*m-r*a*c+n*h*c+s*a*u-n*l*u)+_*(+e*l*u-e*h*c+r*o*c-s*o*u+s*h*f-r*l*f)+p*(+e*h*m-e*a*u-r*o*m+n*o*u+r*a*f-n*h*f)+d*(-s*a*f-e*l*m+e*a*c+s*o*m-n*o*c+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],f=t[8],m=t[9],c=t[10],u=t[11],g=t[12],_=t[13],p=t[14],d=t[15],S=m*p*h-_*c*h+_*l*u-a*p*u-m*l*d+a*c*d,y=g*c*h-f*p*h-g*l*u+o*p*u+f*l*d-o*c*d,v=f*_*h-g*m*h+g*a*u-o*_*u-f*a*d+o*m*d,P=g*m*l-f*_*l-g*a*c+o*_*c+f*a*p-o*m*p,A=e*S+n*y+s*v+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=S*w,t[1]=(_*c*r-m*p*r-_*s*u+n*p*u+m*s*d-n*c*d)*w,t[2]=(a*p*r-_*l*r+_*s*h-n*p*h-a*s*d+n*l*d)*w,t[3]=(m*l*r-a*c*r-m*s*h+n*c*h+a*s*u-n*l*u)*w,t[4]=y*w,t[5]=(f*p*r-g*c*r+g*s*u-e*p*u-f*s*d+e*c*d)*w,t[6]=(g*l*r-o*p*r-g*s*h+e*p*h+o*s*d-e*l*d)*w,t[7]=(o*c*r-f*l*r+f*s*h-e*c*h-o*s*u+e*l*u)*w,t[8]=v*w,t[9]=(g*m*r-f*_*r-g*n*u+e*_*u+f*n*d-e*m*d)*w,t[10]=(o*_*r-g*a*r+g*n*h-e*_*h-o*n*d+e*a*d)*w,t[11]=(f*a*r-o*m*r-f*n*h+e*m*h+o*n*u-e*a*u)*w,t[12]=P*w,t[13]=(f*_*s-g*m*s+g*n*c-e*_*c-f*n*p+e*m*p)*w,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*p-e*a*p)*w,t[15]=(o*m*s-f*a*s+f*n*l-e*m*l-o*n*c+e*a*c)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,h=r*o,f=r*a;return this.set(h*o+n,h*a-s*l,h*l+s*a,0,h*a+s*l,f*a+n,f*l-s*o,0,h*l-s*a,f*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,f=o+o,m=a+a,c=r*h,u=r*f,g=r*m,_=o*f,p=o*m,d=a*m,S=l*h,y=l*f,v=l*m,P=n.x,A=n.y,w=n.z;return s[0]=(1-(_+d))*P,s[1]=(u+v)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(u-v)*A,s[5]=(1-(c+d))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(g+y)*w,s[9]=(p-S)*w,s[10]=(1-(c+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=mi.set(s[0],s[1],s[2]).length();const o=mi.set(s[4],s[5],s[6]).length(),a=mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],en.copy(this);const h=1/r,f=1/o,m=1/a;return en.elements[0]*=h,en.elements[1]*=h,en.elements[2]*=h,en.elements[4]*=f,en.elements[5]*=f,en.elements[6]*=f,en.elements[8]*=m,en.elements[9]*=m,en.elements[10]*=m,e.setFromRotationMatrix(en),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=wn){const l=this.elements,h=2*r/(e-t),f=2*r/(n-s),m=(e+t)/(e-t),c=(n+s)/(n-s);let u,g;if(a===wn)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===sr)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=m,l[12]=0,l[1]=0,l[5]=f,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=wn){const l=this.elements,h=1/(e-t),f=1/(n-s),m=1/(o-r),c=(e+t)*h,u=(n+s)*f;let g,_;if(a===wn)g=(o+r)*m,_=-2*m;else if(a===sr)g=r*m,_=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mi=new I,en=new pe,Xh=new I(0,0,0),qh=new I(1,1,1),Nn=new I,Ps=new I,He=new I,Za=new pe,Ja=new _s;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],f=s[9],m=s[2],c=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-m,u),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ie(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(c,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class lc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Yh=0;const Ka=new I,gi=new _s,Mn=new pe,Is=new I,ji=new I,$h=new I,Zh=new _s,ja=new I(1,0,0),Qa=new I(0,1,0),tl=new I(0,0,1),el={type:"added"},Jh={type:"removed"},_i={type:"childadded",child:null},Lr={type:"childremoved",child:null};class Ce extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new I,e=new mn,n=new _s,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Vt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(ja,t)}rotateY(t){return this.rotateOnAxis(Qa,t)}rotateZ(t){return this.rotateOnAxis(tl,t)}translateOnAxis(t,e){return Ka.copy(t).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ja,t)}translateY(t){return this.translateOnAxis(Qa,t)}translateZ(t){return this.translateOnAxis(tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Is.copy(t):Is.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ji,Is,this.up):Mn.lookAt(Is,ji,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(Mn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(el),_i.child=t,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jh),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(el),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,$h),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Zh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,f=l.length;h<f;h++){const m=l[h];r(t.shapes,m)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),f=o(t.images),m=o(t.shapes),c=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),h.length>0&&(n.textures=h),f.length>0&&(n.images=f),m.length>0&&(n.shapes=m),c.length>0&&(n.skeletons=c),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const h in a){const f=a[h];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new I(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new I,Sn=new I,Pr=new I,En=new I,vi=new I,xi=new I,nl=new I,Ir=new I,Dr=new I,Ur=new I,Nr=new se,Fr=new se,Or=new se;class on{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),nn.subVectors(t,e),s.cross(nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){nn.subVectors(s,e),Sn.subVectors(n,e),Pr.subVectors(t,e);const o=nn.dot(nn),a=nn.dot(Sn),l=nn.dot(Pr),h=Sn.dot(Sn),f=Sn.dot(Pr),m=o*h-a*a;if(m===0)return r.set(0,0,0),null;const c=1/m,u=(h*l-a*f)*c,g=(o*f-a*l)*c;return r.set(1-u-g,g,u)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,En)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,En.x),l.addScaledVector(o,En.y),l.addScaledVector(a,En.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Nr.setScalar(0),Fr.setScalar(0),Or.setScalar(0),Nr.fromBufferAttribute(t,e),Fr.fromBufferAttribute(t,n),Or.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Nr,r.x),o.addScaledVector(Fr,r.y),o.addScaledVector(Or,r.z),o}static isFrontFacing(t,e,n,s){return nn.subVectors(n,e),Sn.subVectors(t,e),nn.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return nn.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),nn.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return on.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;vi.subVectors(s,n),xi.subVectors(r,n),Ir.subVectors(t,n);const l=vi.dot(Ir),h=xi.dot(Ir);if(l<=0&&h<=0)return e.copy(n);Dr.subVectors(t,s);const f=vi.dot(Dr),m=xi.dot(Dr);if(f>=0&&m<=f)return e.copy(s);const c=l*m-f*h;if(c<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(vi,o);Ur.subVectors(t,r);const u=vi.dot(Ur),g=xi.dot(Ur);if(g>=0&&u<=g)return e.copy(r);const _=u*h-l*g;if(_<=0&&h>=0&&g<=0)return a=h/(h-g),e.copy(n).addScaledVector(xi,a);const p=f*g-u*m;if(p<=0&&m-f>=0&&u-g>=0)return nl.subVectors(r,s),a=(m-f)/(m-f+(u-g)),e.copy(s).addScaledVector(nl,a);const d=1/(p+_+c);return o=_*d,a=c*d,e.copy(n).addScaledVector(vi,o).addScaledVector(xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function Br(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class $t{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=Dh(t,1),e=Ie(e,0,1),n=Ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Br(o,r,t+1/3),this.g=Br(o,r,t),this.b=Br(o,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){const n=cc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Cn(t.r),this.g=Cn(t.g),this.b=Cn(t.b),this}copyLinearToSRGB(t){return this.r=Di(t.r),this.g=Di(t.g),this.b=Di(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return Jt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Ie(Pe.r*255,0,255))*65536+Math.round(Ie(Pe.g*255,0,255))*256+Math.round(Ie(Pe.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,h;const f=(a+o)/2;if(a===o)l=0,h=0;else{const m=o-a;switch(h=f<=.5?m/(o+a):m/(2-o-a),o){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return t.h=l,t.s=h,t.l=f,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=Je){Jt.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Ds);const n=Mr(Fn.h,Ds.h,e),s=Mr(Fn.s,Ds.s,e),r=Mr(Fn.l,Ds.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new $t;$t.NAMES=cc;let Kh=0;class xs extends Vi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Gi(),this.name="",this.blending=Pi,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=Qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=Ui,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==no&&(n.blendSrc=this.blendSrc),this.blendDst!==io&&(n.blendDst=this.blendDst),this.blendEquation!==Qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ui&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ae extends xs{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Xl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ye=new I,Us=new at;class pn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=za,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Us.fromBufferAttribute(this,e),Us.applyMatrix3(t),this.setXY(e,Us.x,Us.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Zi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Zi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Zi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Zi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),s=Fe(s,this.array),r=Fe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==za&&(t.usage=this.usage),t}}class hc extends pn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class uc extends pn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class oe extends pn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let jh=0;const $e=new pe,kr=new Ce,yi=new I,Ve=new vs,Qi=new vs,Te=new I;class ke extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rc(t)?uc:hc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return $e.makeRotationFromQuaternion(t),this.applyMatrix4($e),this}rotateX(t){return $e.makeRotationX(t),this.applyMatrix4($e),this}rotateY(t){return $e.makeRotationY(t),this.applyMatrix4($e),this}rotateZ(t){return $e.makeRotationZ(t),this.applyMatrix4($e),this}translate(t,e,n){return $e.makeTranslation(t,e,n),this.applyMatrix4($e),this}scale(t,e,n){return $e.makeScale(t,e,n),this.applyMatrix4($e),this}lookAt(t){return kr.lookAt(t),kr.updateMatrix(),this.applyMatrix4(kr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new oe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(Te.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(Te),Te.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(Te)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Qi.setFromBufferAttribute(a),this.morphTargetsRelative?(Te.addVectors(Ve.min,Qi.min),Ve.expandByPoint(Te),Te.addVectors(Ve.max,Qi.max),Ve.expandByPoint(Te)):(Ve.expandByPoint(Qi.min),Ve.expandByPoint(Qi.max))}Ve.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Te.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Te));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,f=a.count;h<f;h++)Te.fromBufferAttribute(a,h),l&&(yi.fromBufferAttribute(t,h),Te.add(yi)),s=Math.max(s,n.distanceToSquared(Te))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<n.count;L++)a[L]=new I,l[L]=new I;const h=new I,f=new I,m=new I,c=new at,u=new at,g=new at,_=new I,p=new I;function d(L,T,x){h.fromBufferAttribute(n,L),f.fromBufferAttribute(n,T),m.fromBufferAttribute(n,x),c.fromBufferAttribute(r,L),u.fromBufferAttribute(r,T),g.fromBufferAttribute(r,x),f.sub(h),m.sub(h),u.sub(c),g.sub(c);const R=1/(u.x*g.y-g.x*u.y);isFinite(R)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(m,-u.y).multiplyScalar(R),p.copy(m).multiplyScalar(u.x).addScaledVector(f,-g.x).multiplyScalar(R),a[L].add(_),a[T].add(_),a[x].add(_),l[L].add(p),l[T].add(p),l[x].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let L=0,T=S.length;L<T;++L){const x=S[L],R=x.start,B=x.count;for(let F=R,H=R+B;F<H;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new I,v=new I,P=new I,A=new I;function w(L){P.fromBufferAttribute(s,L),A.copy(P);const T=a[L];y.copy(T),y.sub(P.multiplyScalar(P.dot(T))).normalize(),v.crossVectors(A,T);const R=v.dot(l[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,R)}for(let L=0,T=S.length;L<T;++L){const x=S[L],R=x.start,B=x.count;for(let F=R,H=R+B;F<H;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,u=n.count;c<u;c++)n.setXYZ(c,0,0,0);const s=new I,r=new I,o=new I,a=new I,l=new I,h=new I,f=new I,m=new I;if(t)for(let c=0,u=t.count;c<u;c+=3){const g=t.getX(c+0),_=t.getX(c+1),p=t.getX(c+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),f.subVectors(o,r),m.subVectors(s,r),f.cross(m),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,p),a.add(f),l.add(f),h.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let c=0,u=e.count;c<u;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),o.fromBufferAttribute(e,c+2),f.subVectors(o,r),m.subVectors(s,r),f.cross(m),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Te.fromBufferAttribute(t,e),Te.normalize(),t.setXYZ(e,Te.x,Te.y,Te.z)}toNonIndexed(){function t(a,l){const h=a.array,f=a.itemSize,m=a.normalized,c=new h.constructor(l.length*f);let u=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*f;for(let d=0;d<f;d++)c[g++]=h[u++]}return new pn(c,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,n);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let f=0,m=h.length;f<m;f++){const c=h[f],u=t(c,n);l.push(u)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const h=n[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],f=[];for(let m=0,c=h.length;m<c;m++){const u=h[m];f.push(u.toJSON(t.data))}f.length>0&&(s[l]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const f=s[h];this.setAttribute(h,f.clone(e))}const r=t.morphAttributes;for(const h in r){const f=[],m=r[h];for(let c=0,u=m.length;c<u;c++)f.push(m[c].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,f=o.length;h<f;h++){const m=o[h];this.addGroup(m.start,m.count,m.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new pe,qn=new Wh,Ns=new da,sl=new I,Fs=new I,Os=new I,Bs=new I,zr=new I,ks=new I,rl=new I,zs=new I;class St extends Ce{constructor(t=new ke,e=new Ae){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){ks.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const f=a[l],m=r[l];f!==0&&(zr.fromBufferAttribute(m,t),o?ks.addScaledVector(zr,f):ks.addScaledVector(zr.sub(e),f))}e.add(ks)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(r),qn.copy(t.ray).recast(t.near),!(Ns.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Ns,sl)===null||qn.origin.distanceToSquared(sl)>(t.far-t.near)**2))&&(il.copy(r).invert(),qn.copy(t.ray).applyMatrix4(il),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,m=r.attributes.normal,c=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=c.length;g<_;g++){const p=c[g],d=o[p.materialIndex],S=Math.max(p.start,u.start),y=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let v=S,P=y;v<P;v+=3){const A=a.getX(v),w=a.getX(v+1),L=a.getX(v+2);s=Hs(this,d,t,n,h,f,m,A,w,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let p=g,d=_;p<d;p+=3){const S=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);s=Hs(this,o,t,n,h,f,m,S,y,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=c.length;g<_;g++){const p=c[g],d=o[p.materialIndex],S=Math.max(p.start,u.start),y=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let v=S,P=y;v<P;v+=3){const A=v,w=v+1,L=v+2;s=Hs(this,d,t,n,h,f,m,A,w,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let p=g,d=_;p<d;p+=3){const S=p,y=p+1,v=p+2;s=Hs(this,o,t,n,h,f,m,S,y,v),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Qh(i,t,e,n,s,r,o,a){let l;if(t.side===Oe?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Hn,a),l===null)return null;zs.copy(a),zs.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(zs);return h<e.near||h>e.far?null:{distance:h,point:zs.clone(),object:i}}function Hs(i,t,e,n,s,r,o,a,l,h){i.getVertexPosition(a,Fs),i.getVertexPosition(l,Os),i.getVertexPosition(h,Bs);const f=Qh(i,t,e,n,Fs,Os,Bs,rl);if(f){const m=new I;on.getBarycoord(rl,Fs,Os,Bs,m),s&&(f.uv=on.getInterpolatedAttribute(s,a,l,h,m,new at)),r&&(f.uv1=on.getInterpolatedAttribute(r,a,l,h,m,new at)),o&&(f.normal=on.getInterpolatedAttribute(o,a,l,h,m,new I),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const c={a,b:l,c:h,normal:new I,materialIndex:0};on.getNormal(Fs,Os,Bs,c.normal),f.face=c,f.barycoord=m}return f}class qe extends ke{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],f=[],m=[];let c=0,u=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(h,3)),this.setAttribute("normal",new oe(f,3)),this.setAttribute("uv",new oe(m,2));function g(_,p,d,S,y,v,P,A,w,L,T){const x=v/w,R=P/L,B=v/2,F=P/2,H=A/2,X=w+1,W=L+1;let K=0,V=0;const lt=new I;for(let mt=0;mt<W;mt++){const Mt=mt*R-F;for(let kt=0;kt<X;kt++){const Qt=kt*x-B;lt[_]=Qt*S,lt[p]=Mt*y,lt[d]=H,h.push(lt.x,lt.y,lt.z),lt[_]=0,lt[p]=0,lt[d]=A>0?1:-1,f.push(lt.x,lt.y,lt.z),m.push(kt/w),m.push(1-mt/L),K+=1}}for(let mt=0;mt<L;mt++)for(let Mt=0;Mt<w;Mt++){const kt=c+Mt+X*mt,Qt=c+Mt+X*(mt+1),$=c+(Mt+1)+X*(mt+1),it=c+(Mt+1)+X*mt;l.push(kt,Qt,it),l.push(Qt,$,it),V+=6}a.addGroup(u,V,T),u+=V,c+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ki(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=ki(i[e]);for(const s in n)t[s]=n[s]}return t}function tu(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function dc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const eu={clone:ki,merge:De};var nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends xs{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ki(t.uniforms),this.uniformsGroups=tu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fc extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new I,ol=new at,al=new at;class We extends fc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vo*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,ol,al),e.subVectors(al,ol)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(yr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/h,s*=o.width/l,n*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,Si=1;class su extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new We(Mi,Si,t,e);s.layers=this.layers,this.add(s);const r=new We(Mi,Si,t,e);r.layers=this.layers,this.add(r);const o=new We(Mi,Si,t,e);o.layers=this.layers,this.add(o);const a=new We(Mi,Si,t,e);a.layers=this.layers,this.add(a);const l=new We(Mi,Si,t,e);l.layers=this.layers,this.add(l);const h=new We(Mi,Si,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===sr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,f]=this.children,m=t.getRenderTarget(),c=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,f),t.setRenderTarget(m,c,u),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class pc extends Be{constructor(t,e,n,s,r,o,a,l,h,f){t=t!==void 0?t:[],e=e!==void 0?e:Ni,super(t,e,n,s,r,o,a,l,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ru extends oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new qe(5,5,5),r=new Vn({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:kn});r.uniforms.tEquirect.value=e;const o=new St(s,r),a=e.minFilter;return e.minFilter===ii&&(e.minFilter=fn),new su(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const Hr=new I,ou=new I,au=new Vt;class Kn{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Hr.subVectors(n,e).cross(ou.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Hr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||au.getNormalMatrix(t),s=this.coplanarPoint(Hr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new da,Vs=new I;class fa{constructor(t=new Kn,e=new Kn,n=new Kn,s=new Kn,r=new Kn,o=new Kn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],f=s[5],m=s[6],c=s[7],u=s[8],g=s[9],_=s[10],p=s[11],d=s[12],S=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,c-h,p-u,v-d).normalize(),n[1].setComponents(l+r,c+h,p+u,v+d).normalize(),n[2].setComponents(l+o,c+f,p+g,v+S).normalize(),n[3].setComponents(l-o,c-f,p-g,v-S).normalize(),n[4].setComponents(l-a,c-m,p-_,v-y).normalize(),e===wn)n[5].setComponents(l+a,c+m,p+_,v+y).normalize();else if(e===sr)n[5].setComponents(a,m,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(t){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Vs.x=s.normal.x>0?t.max.x:t.min.x,Vs.y=s.normal.y>0?t.max.y:t.min.y,Vs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mc(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function lu(i){const t=new WeakMap;function e(a,l){const h=a.array,f=a.usage,m=h.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,h,f),a.onUploadCallback();let u;if(h instanceof Float32Array)u=i.FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=i.SHORT;else if(h instanceof Uint32Array)u=i.UNSIGNED_INT;else if(h instanceof Int32Array)u=i.INT;else if(h instanceof Int8Array)u=i.BYTE;else if(h instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:m}}function n(a,l,h){const f=l.array,m=l.updateRanges;if(i.bindBuffer(h,a),m.length===0)i.bufferSubData(h,0,f);else{m.sort((u,g)=>u.start-g.start);let c=0;for(let u=1;u<m.length;u++){const g=m[c],_=m[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++c,m[c]=_)}m.length=c+1;for(let u=0,g=m.length;u<g;u++){const _=m[u];i.bufferSubData(h,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}class ys extends ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),h=a+1,f=l+1,m=t/a,c=e/l,u=[],g=[],_=[],p=[];for(let d=0;d<f;d++){const S=d*c-o;for(let y=0;y<h;y++){const v=y*m-r;g.push(v,-S,0),_.push(0,0,1),p.push(y/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){const y=S+h*d,v=S+h*(d+1),P=S+1+h*(d+1),A=S+1+h*d;u.push(y,v,A),u.push(v,P,A)}this.setIndex(u),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.widthSegments,t.heightSegments)}}var cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_u=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Su=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Eu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Iu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Du=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Uu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ku="gl_FragColor = linearToOutputTexel( gl_FragColor );",zu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$u=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ku=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ju=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qu=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,td=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ed=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ld=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ud=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Md=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ad=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Id=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ud=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Bd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Xd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,sf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,df=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_f=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,xf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ef=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Af=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Pf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,If=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Df=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Hf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xt={alphahash_fragment:cu,alphahash_pars_fragment:hu,alphamap_fragment:uu,alphamap_pars_fragment:du,alphatest_fragment:fu,alphatest_pars_fragment:pu,aomap_fragment:mu,aomap_pars_fragment:gu,batching_pars_vertex:_u,batching_vertex:vu,begin_vertex:xu,beginnormal_vertex:yu,bsdfs:Mu,iridescence_fragment:Su,bumpmap_pars_fragment:Eu,clipping_planes_fragment:Tu,clipping_planes_pars_fragment:bu,clipping_planes_pars_vertex:wu,clipping_planes_vertex:Au,color_fragment:Cu,color_pars_fragment:Ru,color_pars_vertex:Lu,color_vertex:Pu,common:Iu,cube_uv_reflection_fragment:Du,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Nu,displacementmap_vertex:Fu,emissivemap_fragment:Ou,emissivemap_pars_fragment:Bu,colorspace_fragment:ku,colorspace_pars_fragment:zu,envmap_fragment:Hu,envmap_common_pars_fragment:Vu,envmap_pars_fragment:Gu,envmap_pars_vertex:Wu,envmap_physical_pars_fragment:ed,envmap_vertex:Xu,fog_vertex:qu,fog_pars_vertex:Yu,fog_fragment:$u,fog_pars_fragment:Zu,gradientmap_pars_fragment:Ju,lightmap_pars_fragment:Ku,lights_lambert_fragment:ju,lights_lambert_pars_fragment:Qu,lights_pars_begin:td,lights_toon_fragment:nd,lights_toon_pars_fragment:id,lights_phong_fragment:sd,lights_phong_pars_fragment:rd,lights_physical_fragment:od,lights_physical_pars_fragment:ad,lights_fragment_begin:ld,lights_fragment_maps:cd,lights_fragment_end:hd,logdepthbuf_fragment:ud,logdepthbuf_pars_fragment:dd,logdepthbuf_pars_vertex:fd,logdepthbuf_vertex:pd,map_fragment:md,map_pars_fragment:gd,map_particle_fragment:_d,map_particle_pars_fragment:vd,metalnessmap_fragment:xd,metalnessmap_pars_fragment:yd,morphinstance_vertex:Md,morphcolor_vertex:Sd,morphnormal_vertex:Ed,morphtarget_pars_vertex:Td,morphtarget_vertex:bd,normal_fragment_begin:wd,normal_fragment_maps:Ad,normal_pars_fragment:Cd,normal_pars_vertex:Rd,normal_vertex:Ld,normalmap_pars_fragment:Pd,clearcoat_normal_fragment_begin:Id,clearcoat_normal_fragment_maps:Dd,clearcoat_pars_fragment:Ud,iridescence_pars_fragment:Nd,opaque_fragment:Fd,packing:Od,premultiplied_alpha_fragment:Bd,project_vertex:kd,dithering_fragment:zd,dithering_pars_fragment:Hd,roughnessmap_fragment:Vd,roughnessmap_pars_fragment:Gd,shadowmap_pars_fragment:Wd,shadowmap_pars_vertex:Xd,shadowmap_vertex:qd,shadowmask_pars_fragment:Yd,skinbase_vertex:$d,skinning_pars_vertex:Zd,skinning_vertex:Jd,skinnormal_vertex:Kd,specularmap_fragment:jd,specularmap_pars_fragment:Qd,tonemapping_fragment:tf,tonemapping_pars_fragment:ef,transmission_fragment:nf,transmission_pars_fragment:sf,uv_pars_fragment:rf,uv_pars_vertex:of,uv_vertex:af,worldpos_vertex:lf,background_vert:cf,background_frag:hf,backgroundCube_vert:uf,backgroundCube_frag:df,cube_vert:ff,cube_frag:pf,depth_vert:mf,depth_frag:gf,distanceRGBA_vert:_f,distanceRGBA_frag:vf,equirect_vert:xf,equirect_frag:yf,linedashed_vert:Mf,linedashed_frag:Sf,meshbasic_vert:Ef,meshbasic_frag:Tf,meshlambert_vert:bf,meshlambert_frag:wf,meshmatcap_vert:Af,meshmatcap_frag:Cf,meshnormal_vert:Rf,meshnormal_frag:Lf,meshphong_vert:Pf,meshphong_frag:If,meshphysical_vert:Df,meshphysical_frag:Uf,meshtoon_vert:Nf,meshtoon_frag:Ff,points_vert:Of,points_frag:Bf,shadow_vert:kf,shadow_frag:zf,sprite_vert:Hf,sprite_frag:Vf},ct={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},dn={basic:{uniforms:De([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:De([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new $t(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:De([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:De([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:De([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new $t(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:De([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:De([ct.points,ct.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:De([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:De([ct.common,ct.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:De([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:De([ct.sprite,ct.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:De([ct.common,ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:De([ct.lights,ct.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};dn.physical={uniforms:De([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Gs={r:0,b:0,g:0},$n=new mn,Gf=new pe;function Wf(i,t,e,n,s,r,o){const a=new $t(0);let l=r===!0?0:1,h,f,m=null,c=0,u=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const v=g(S);v===null?d(a,l):v&&v.isColor&&(d(v,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(S,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===hr)?(f===void 0&&(f=new St(new qe(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:ki(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),$n.copy(y.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Gf.makeRotationFromEuler($n)),f.material.toneMapped=Jt.getTransfer(v.colorSpace)!==ie,(m!==v||c!==v.version||u!==i.toneMapping)&&(f.material.needsUpdate=!0,m=v,c=v.version,u=i.toneMapping),f.layers.enableAll(),S.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new St(new ys(2,2),new Vn({name:"BackgroundMaterial",uniforms:ki(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=Jt.getTransfer(v.colorSpace)!==ie,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(m!==v||c!==v.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,m=v,c=v.version,u=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null))}function d(S,y){S.getRGB(Gs,dc(i)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,d(a,l)},render:_,addToRenderList:p}}function Xf(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,o=!1;function a(x,R,B,F,H){let X=!1;const W=m(F,B,R);r!==W&&(r=W,h(r.object)),X=u(x,F,B,H),X&&g(x,F,B,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(x,R,B,F),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function f(x){return i.deleteVertexArray(x)}function m(x,R,B){const F=B.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let X=H[R.id];X===void 0&&(X={},H[R.id]=X);let W=X[F];return W===void 0&&(W=c(l()),X[F]=W),W}function c(x){const R=[],B=[],F=[];for(let H=0;H<e;H++)R[H]=0,B[H]=0,F[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:F,object:x,attributes:{},index:null}}function u(x,R,B,F){const H=r.attributes,X=R.attributes;let W=0;const K=B.getAttributes();for(const V in K)if(K[V].location>=0){const mt=H[V];let Mt=X[V];if(Mt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor)),mt===void 0||mt.attribute!==Mt||Mt&&mt.data!==Mt.data)return!0;W++}return r.attributesNum!==W||r.index!==F}function g(x,R,B,F){const H={},X=R.attributes;let W=0;const K=B.getAttributes();for(const V in K)if(K[V].location>=0){let mt=X[V];mt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor));const Mt={};Mt.attribute=mt,mt&&mt.data&&(Mt.data=mt.data),H[V]=Mt,W++}r.attributes=H,r.attributesNum=W,r.index=F}function _(){const x=r.newAttributes;for(let R=0,B=x.length;R<B;R++)x[R]=0}function p(x){d(x,0)}function d(x,R){const B=r.newAttributes,F=r.enabledAttributes,H=r.attributeDivisors;B[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),H[x]!==R&&(i.vertexAttribDivisor(x,R),H[x]=R)}function S(){const x=r.newAttributes,R=r.enabledAttributes;for(let B=0,F=R.length;B<F;B++)R[B]!==x[B]&&(i.disableVertexAttribArray(B),R[B]=0)}function y(x,R,B,F,H,X,W){W===!0?i.vertexAttribIPointer(x,R,B,H,X):i.vertexAttribPointer(x,R,B,F,H,X)}function v(x,R,B,F){_();const H=F.attributes,X=B.getAttributes(),W=R.defaultAttributeValues;for(const K in X){const V=X[K];if(V.location>=0){let lt=H[K];if(lt===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor)),lt!==void 0){const mt=lt.normalized,Mt=lt.itemSize,kt=t.get(lt);if(kt===void 0)continue;const Qt=kt.buffer,$=kt.type,it=kt.bytesPerElement,Et=$===i.INT||$===i.UNSIGNED_INT||lt.gpuType===oa;if(lt.isInterleavedBufferAttribute){const rt=lt.data,Lt=rt.stride,Ft=lt.offset;if(rt.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)d(V.location+Ut,rt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)p(V.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Ut=0;Ut<V.locationSize;Ut++)y(V.location+Ut,Mt/V.locationSize,$,mt,Lt*it,(Ft+Mt/V.locationSize*Ut)*it,Et)}else{if(lt.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)d(V.location+rt,lt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let rt=0;rt<V.locationSize;rt++)p(V.location+rt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let rt=0;rt<V.locationSize;rt++)y(V.location+rt,Mt/V.locationSize,$,mt,Mt*it,Mt/V.locationSize*rt*it,Et)}}else if(W!==void 0){const mt=W[K];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(V.location,mt);break;case 3:i.vertexAttrib3fv(V.location,mt);break;case 4:i.vertexAttrib4fv(V.location,mt);break;default:i.vertexAttrib1fv(V.location,mt)}}}}S()}function P(){L();for(const x in n){const R=n[x];for(const B in R){const F=R[B];for(const H in F)f(F[H].object),delete F[H];delete R[B]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const B in R){const F=R[B];for(const H in F)f(F[H].object),delete F[H];delete R[B]}delete n[x.id]}function w(x){for(const R in n){const B=n[R];if(B[x.id]===void 0)continue;const F=B[x.id];for(const H in F)f(F[H].object),delete F[H];delete B[x.id]}}function L(){T(),o=!0,r!==s&&(r=s,h(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:L,resetDefaultState:T,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:S}}function qf(i,t,e){let n;function s(h){n=h}function r(h,f){i.drawArrays(n,h,f),e.update(f,n,1)}function o(h,f,m){m!==0&&(i.drawArraysInstanced(n,h,f,m),e.update(f,n,m))}function a(h,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,f,0,m);let u=0;for(let g=0;g<m;g++)u+=f[g];e.update(u,n,1)}function l(h,f,m,c){if(m===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<h.length;g++)o(h[g],f[g],c[g]);else{u.multiDrawArraysInstancedWEBGL(n,h,0,f,0,c,0,m);let g=0;for(let _=0;_<m;_++)g+=f[_]*c[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==ln&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===gs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==bn&&!L)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const f=l(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const m=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:m,reverseDepthBuffer:c,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:A}}function $f(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new Kn,a=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,c){const u=m.length!==0||c||n!==0||s;return s=c,n=m.length,u},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,c){e=f(m,c,0)},this.setState=function(m,c,u){const g=m.clippingPlanes,_=m.clipIntersection,p=m.clipShadows,d=i.get(m);if(!s||g===null||g.length===0||r&&!p)r?f(null):h();else{const S=r?0:n,y=S*4;let v=d.clippingState||null;l.value=v,v=f(g,c,y,u);for(let P=0;P!==y;++P)v[P]=e[P];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(m,c,u,g){const _=m!==null?m.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=u+_*4,S=c.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<d)&&(p=new Float32Array(d));for(let y=0,v=u;y!==_;++y,v+=4)o.copy(m[y]).applyMatrix4(S,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Zf(i){let t=new WeakMap;function e(o,a){return a===uo?o.mapping=Ni:a===fo&&(o.mapping=Fi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===uo||a===fo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new ru(l.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class gc extends fc{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ti=4,ll=[.125,.215,.35,.446,.526,.582],ti=20,Vr=new gc,cl=new $t;let Gr=null,Wr=0,Xr=0,qr=!1;const jn=(1+Math.sqrt(5))/2,Ei=1/jn,hl=[new I(-jn,Ei,0),new I(jn,Ei,0),new I(-Ei,0,jn),new I(Ei,0,jn),new I(0,jn,-Ei),new I(0,jn,Ei),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class ul{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Gr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Gr,Wr,Xr),this._renderer.xr.enabled=qr,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gr=this._renderer.getRenderTarget(),Wr=this._renderer.getActiveCubeFace(),Xr=this._renderer.getActiveMipmapLevel(),qr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:gs,format:ln,colorSpace:Hi,depthBuffer:!1},s=dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(r)),this._blurMaterial=Kf(r,t,e)}return s}_compileMaterial(t){const e=new St(this._lodPlanes[0],t);this._renderer.compile(e,Vr)}_sceneToCubeUV(t,e,n,s){const a=new We(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,c=f.toneMapping;f.getClearColor(cl),f.toneMapping=zn,f.autoClear=!1;const u=new Ae({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new St(new qe,u);let _=!1;const p=t.background;p?p.isColor&&(u.color.copy(p),t.background=null,_=!0):(u.color.copy(cl),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(a.up.set(0,l[d],0),a.lookAt(h[d],0,0)):S===1?(a.up.set(0,0,l[d]),a.lookAt(0,h[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,h[d]));const y=this._cubeSize;Ws(s,S*y,d>2?y:0,y,y),f.setRenderTarget(s),_&&f.render(g,a),f.render(t,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=c,f.autoClear=m,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ni||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new St(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Vr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hl[(s-r-1)%hl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new St(this._lodPlanes[s],h),c=h.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ti-1),_=r/g,p=isFinite(r)?1+Math.floor(f*_):ti;p>ti&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ti}`);const d=[];let S=0;for(let w=0;w<ti;++w){const L=w/_,T=Math.exp(-L*L/2);d.push(T),w===0?S+=T:w<p&&(S+=2*T)}for(let w=0;w<d.length;w++)d[w]=d[w]/S;c.envMap.value=t.texture,c.samples.value=p,c.weights.value=d,c.latitudinal.value=o==="latitudinal",a&&(c.poleAxis.value=a);const{_lodMax:y}=this;c.dTheta.value=g,c.mipInt.value=y-n;const v=this._sizeLods[s],P=3*v*(s>y-Ti?s-y+Ti:0),A=4*(this._cubeSize-v);Ws(e,P,A,3*v,2*v),l.setRenderTarget(e),l.render(m,Vr)}}function Jf(i){const t=[],e=[],n=[];let s=i;const r=i-Ti+1+ll.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-Ti?l=ll[o-i+Ti-1]:o===0&&(l=0),n.push(l);const h=1/(a-2),f=-h,m=1+h,c=[f,f,m,f,m,m,f,f,m,m,f,m],u=6,g=6,_=3,p=2,d=1,S=new Float32Array(_*g*u),y=new Float32Array(p*g*u),v=new Float32Array(d*g*u);for(let A=0;A<u;A++){const w=A%3*2/3-1,L=A>2?0:-1,T=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];S.set(T,_*g*A),y.set(c,p*g*A);const x=[A,A,A,A,A,A];v.set(x,d*g*A)}const P=new ke;P.setAttribute("position",new pn(S,_)),P.setAttribute("uv",new pn(y,p)),P.setAttribute("faceIndex",new pn(v,d)),t.push(P),s>Ti&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dl(i,t,e){const n=new oi(i,t,e);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Kf(i,t,e){const n=new Float32Array(ti),s=new I(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function fl(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function pl(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jf(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,h=l===uo||l===fo,f=l===Ni||l===Fi;if(h||f){let m=t.get(a);const c=m!==void 0?m.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==c)return e===null&&(e=new ul(i)),m=h?e.fromEquirectangular(a,m):e.fromCubemap(a,m),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),m.texture;if(m!==void 0)return m.texture;{const u=a.image;return h&&u&&u.height>0||f&&u&&s(u)?(e===null&&(e=new ul(i)),m=h?e.fromEquirectangular(a):e.fromCubemap(a),m.texture.pmremVersion=a.pmremVersion,t.set(a,m),a.addEventListener("dispose",r),m.texture):null}}}return a}function s(a){let l=0;const h=6;for(let f=0;f<h;f++)a[f]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Qf(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&es("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tp(i,t,e,n){const s={},r=new WeakMap;function o(m){const c=m.target;c.index!==null&&t.remove(c.index);for(const g in c.attributes)t.remove(c.attributes[g]);for(const g in c.morphAttributes){const _=c.morphAttributes[g];for(let p=0,d=_.length;p<d;p++)t.remove(_[p])}c.removeEventListener("dispose",o),delete s[c.id];const u=r.get(c);u&&(t.remove(u),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function a(m,c){return s[c.id]===!0||(c.addEventListener("dispose",o),s[c.id]=!0,e.memory.geometries++),c}function l(m){const c=m.attributes;for(const g in c)t.update(c[g],i.ARRAY_BUFFER);const u=m.morphAttributes;for(const g in u){const _=u[g];for(let p=0,d=_.length;p<d;p++)t.update(_[p],i.ARRAY_BUFFER)}}function h(m){const c=[],u=m.index,g=m.attributes.position;let _=0;if(u!==null){const S=u.array;_=u.version;for(let y=0,v=S.length;y<v;y+=3){const P=S[y+0],A=S[y+1],w=S[y+2];c.push(P,A,A,w,w,P)}}else if(g!==void 0){const S=g.array;_=g.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const P=y+0,A=y+1,w=y+2;c.push(P,A,A,w,w,P)}}else return;const p=new(rc(c)?uc:hc)(c,1);p.version=_;const d=r.get(m);d&&t.remove(d),r.set(m,p)}function f(m){const c=r.get(m);if(c){const u=m.index;u!==null&&c.version<u.version&&h(m)}else h(m);return r.get(m)}return{get:a,update:l,getWireframeAttribute:f}}function ep(i,t,e){let n;function s(c){n=c}let r,o;function a(c){r=c.type,o=c.bytesPerElement}function l(c,u){i.drawElements(n,u,r,c*o),e.update(u,n,1)}function h(c,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,c*o,g),e.update(u,n,g))}function f(c,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,c,0,g);let p=0;for(let d=0;d<g;d++)p+=u[d];e.update(p,n,1)}function m(c,u,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<c.length;d++)h(c[d]/o,u[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,c,0,_,0,g);let d=0;for(let S=0;S<g;S++)d+=u[S]*_[S];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=m}function np(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function ip(i,t,e){const n=new WeakMap,s=new se;function r(o,a,l){const h=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,m=f!==void 0?f.length:0;let c=n.get(a);if(c===void 0||c.count!==m){let x=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var u=x;c!==void 0&&c.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),p===!0&&(v=3);let P=a.attributes.position.count*v,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*A*4*m),L=new ac(w,P,A,m);L.type=bn,L.needsUpdate=!0;const T=v*4;for(let R=0;R<m;R++){const B=d[R],F=S[R],H=y[R],X=P*A*4*R;for(let W=0;W<B.count;W++){const K=W*T;g===!0&&(s.fromBufferAttribute(B,W),w[X+K+0]=s.x,w[X+K+1]=s.y,w[X+K+2]=s.z,w[X+K+3]=0),_===!0&&(s.fromBufferAttribute(F,W),w[X+K+4]=s.x,w[X+K+5]=s.y,w[X+K+6]=s.z,w[X+K+7]=0),p===!0&&(s.fromBufferAttribute(H,W),w[X+K+8]=s.x,w[X+K+9]=s.y,w[X+K+10]=s.z,w[X+K+11]=H.itemSize===4?s.w:1)}}c={count:m,texture:L,size:new at(P,A)},n.set(a,c),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let p=0;p<h.length;p++)g+=h[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",h)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function sp(i,t,e,n){let s=new WeakMap;function r(l){const h=n.render.frame,f=l.geometry,m=t.get(l,f);if(s.get(m)!==h&&(t.update(m),s.set(m,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const c=l.skeleton;s.get(c)!==h&&(c.update(),s.set(c,h))}return m}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}class _c extends Be{constructor(t,e,n,s,r,o,a,l,h,f=Ii){if(f!==Ii&&f!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Ii&&(n=ri),n===void 0&&f===Bi&&(n=Oi),super(null,s,r,o,a,l,f,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const vc=new Be,ml=new _c(1,1),xc=new ac,yc=new Vh,Mc=new pc,gl=[],_l=[],vl=new Float32Array(16),xl=new Float32Array(9),yl=new Float32Array(4);function Wi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gl[s];if(r===void 0&&(r=new Float32Array(s),gl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function dr(i,t){let e=_l[t];e===void 0&&(e=new Int32Array(t),_l[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function ap(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function cp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;yl.set(n),i.uniformMatrix2fv(this.addr,!1,yl),Ee(e,n)}}function hp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;xl.set(n),i.uniformMatrix3fv(this.addr,!1,xl),Ee(e,n)}}function up(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;vl.set(n),i.uniformMatrix4fv(this.addr,!1,vl),Ee(e,n)}}function dp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function pp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function mp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function gp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function yp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ml.compareFunction=sc,r=ml):r=vc,e.setTexture2D(t||r,s)}function Mp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||yc,s)}function Sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Mc,s)}function Ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||xc,s)}function Tp(i){switch(i){case 5126:return rp;case 35664:return op;case 35665:return ap;case 35666:return lp;case 35674:return cp;case 35675:return hp;case 35676:return up;case 5124:case 35670:return dp;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return _p;case 36295:return vp;case 36296:return xp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return Sp;case 36289:case 36303:case 36311:case 36292:return Ep}}function bp(i,t){i.uniform1fv(this.addr,t)}function wp(i,t){const e=Wi(t,this.size,2);i.uniform2fv(this.addr,e)}function Ap(i,t){const e=Wi(t,this.size,3);i.uniform3fv(this.addr,e)}function Cp(i,t){const e=Wi(t,this.size,4);i.uniform4fv(this.addr,e)}function Rp(i,t){const e=Wi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Lp(i,t){const e=Wi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pp(i,t){const e=Wi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ip(i,t){i.uniform1iv(this.addr,t)}function Dp(i,t){i.uniform2iv(this.addr,t)}function Up(i,t){i.uniform3iv(this.addr,t)}function Np(i,t){i.uniform4iv(this.addr,t)}function Fp(i,t){i.uniform1uiv(this.addr,t)}function Op(i,t){i.uniform2uiv(this.addr,t)}function Bp(i,t){i.uniform3uiv(this.addr,t)}function kp(i,t){i.uniform4uiv(this.addr,t)}function zp(i,t,e){const n=this.cache,s=t.length,r=dr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||vc,r[o])}function Hp(i,t,e){const n=this.cache,s=t.length,r=dr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||yc,r[o])}function Vp(i,t,e){const n=this.cache,s=t.length,r=dr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Mc,r[o])}function Gp(i,t,e){const n=this.cache,s=t.length,r=dr(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||xc,r[o])}function Wp(i){switch(i){case 5126:return bp;case 35664:return wp;case 35665:return Ap;case 35666:return Cp;case 35674:return Rp;case 35675:return Lp;case 35676:return Pp;case 5124:case 35670:return Ip;case 35667:case 35671:return Dp;case 35668:case 35672:return Up;case 35669:case 35673:return Np;case 5125:return Fp;case 36294:return Op;case 36295:return Bp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Vp;case 36289:case 36303:case 36311:case 36292:return Gp}}class Xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Tp(e.type)}}class qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wp(e.type)}}class Yp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Yr=/(\w+)(\])?(\[|\.)?/g;function Ml(i,t){i.seq.push(t),i.map[t.id]=t}function $p(i,t,e){const n=i.name,s=n.length;for(Yr.lastIndex=0;;){const r=Yr.exec(n),o=Yr.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){Ml(e,h===void 0?new Xp(a,i,t):new qp(a,i,t));break}else{let m=e.map[a];m===void 0&&(m=new Yp(a),Ml(e,m)),e=m}}}class tr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);$p(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Sl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Zp=37297;let Jp=0;function Kp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const El=new Vt;function jp(i){Jt._getMatrix(El,Jt.workingColorSpace,i);const t=`mat3( ${El.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Kp(i.getShaderSource(t),o)}else return s}function Qp(i,t){const e=jp(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tm(i,t){let e;switch(t){case mh:e="Linear";break;case gh:e="Reinhard";break;case _h:e="Cineon";break;case vh:e="ACESFilmic";break;case yh:e="AgX";break;case Mh:e="Neutral";break;case xh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xs=new I;function em(){Jt.getLuminanceCoefficients(Xs);const i=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function im(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ns(i){return i!==""}function bl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(i){return i.replace(rm,am)}const om=new Map;function am(i,t){let e=Xt[t];if(e===void 0){const n=om.get(t);if(n!==void 0)e=Xt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Go(e)}const lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(i){return i.replace(lm,cm)}function cm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Cl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function hm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Tn&&(t="SHADOWMAP_TYPE_VSM"),t}function um(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ni:case Fi:t="ENVMAP_TYPE_CUBE";break;case hr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function fm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xl:t="ENVMAP_BLENDING_MULTIPLY";break;case fh:t="ENVMAP_BLENDING_MIX";break;case ph:t="ENVMAP_BLENDING_ADD";break}return t}function pm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function mm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=hm(e),h=um(e),f=dm(e),m=fm(e),c=pm(e),u=nm(e),g=im(r),_=s.createProgram();let p,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),d.length>0&&(d+=`
`)):(p=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),d=[Cl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+m:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==zn?"#define TONE_MAPPING":"",e.toneMapping!==zn?Xt.tonemapping_pars_fragment:"",e.toneMapping!==zn?tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,Qp("linearToOutputTexel",e.outputColorSpace),em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),o=Go(o),o=bl(o,e),o=wl(o,e),a=Go(a),a=bl(a,e),a=wl(a,e),o=Al(o),a=Al(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",e.glslVersion===Ha?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ha?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=S+p+o,v=S+d+a,P=Sl(s,s.VERTEX_SHADER,y),A=Sl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,P),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(A).trim();let X=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,A);else{const K=Tl(s,P,"vertex"),V=Tl(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+B+`
`+K+`
`+V)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||H==="")&&(W=!1);W&&(R.diagnostics={runnable:X,programLog:B,vertexShader:{log:F,prefix:p},fragmentShader:{log:H,prefix:d}})}s.deleteShader(P),s.deleteShader(A),L=new tr(s,_),T=sm(s,_)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Zp)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jp++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let gm=0;class _m{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new vm(t),e.set(t,n)),n}}class vm{constructor(t){this.id=gm++,this.code=t,this.usedTimes=0}}function xm(i,t,e,n,s,r,o){const a=new lc,l=new _m,h=new Set,f=[],m=s.logarithmicDepthBuffer,c=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return h.add(T),T===0?"uv":`uv${T}`}function p(T,x,R,B,F){const H=B.fog,X=F.geometry,W=T.isMeshStandardMaterial?B.environment:null,K=(T.isMeshStandardMaterial?e:t).get(T.envMap||W),V=K&&K.mapping===hr?K.image.height:null,lt=g[T.type];T.precision!==null&&(u=s.getMaxPrecision(T.precision),u!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",u,"instead."));const mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Mt=mt!==void 0?mt.length:0;let kt=0;X.morphAttributes.position!==void 0&&(kt=1),X.morphAttributes.normal!==void 0&&(kt=2),X.morphAttributes.color!==void 0&&(kt=3);let Qt,$,it,Et;if(lt){const ne=dn[lt];Qt=ne.vertexShader,$=ne.fragmentShader}else Qt=T.vertexShader,$=T.fragmentShader,l.update(T),it=l.getVertexShaderID(T),Et=l.getFragmentShaderID(T);const rt=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Ft=F.isInstancedMesh===!0,Ut=F.isBatchedMesh===!0,Zt=!!T.map,J=!!T.matcap,nt=!!K,C=!!T.aoMap,Ct=!!T.lightMap,Q=!!T.bumpMap,vt=!!T.normalMap,ot=!!T.displacementMap,It=!!T.emissiveMap,gt=!!T.metalnessMap,b=!!T.roughnessMap,M=T.anisotropy>0,O=T.clearcoat>0,q=T.dispersion>0,j=T.iridescence>0,Y=T.sheen>0,Tt=T.transmission>0,ht=M&&!!T.anisotropyMap,_t=O&&!!T.clearcoatMap,qt=O&&!!T.clearcoatNormalMap,et=O&&!!T.clearcoatRoughnessMap,xt=j&&!!T.iridescenceMap,Dt=j&&!!T.iridescenceThicknessMap,Nt=Y&&!!T.sheenColorMap,yt=Y&&!!T.sheenRoughnessMap,Yt=!!T.specularMap,Wt=!!T.specularColorMap,ae=!!T.specularIntensityMap,D=Tt&&!!T.transmissionMap,ut=Tt&&!!T.thicknessMap,G=!!T.gradientMap,Z=!!T.alphaMap,pt=T.alphaTest>0,dt=!!T.alphaHash,zt=!!T.extensions;let _e=zn;T.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(_e=i.toneMapping);const Re={shaderID:lt,shaderType:T.type,shaderName:T.name,vertexShader:Qt,fragmentShader:$,defines:T.defines,customVertexShaderID:it,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:u,batching:Ut,batchingColor:Ut&&F._colorsTexture!==null,instancing:Ft,instancingColor:Ft&&F.instanceColor!==null,instancingMorph:Ft&&F.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Hi,alphaToCoverage:!!T.alphaToCoverage,map:Zt,matcap:J,envMap:nt,envMapMode:nt&&K.mapping,envMapCubeUVHeight:V,aoMap:C,lightMap:Ct,bumpMap:Q,normalMap:vt,displacementMap:c&&ot,emissiveMap:It,normalMapObjectSpace:vt&&T.normalMapType===bh,normalMapTangentSpace:vt&&T.normalMapType===ic,metalnessMap:gt,roughnessMap:b,anisotropy:M,anisotropyMap:ht,clearcoat:O,clearcoatMap:_t,clearcoatNormalMap:qt,clearcoatRoughnessMap:et,dispersion:q,iridescence:j,iridescenceMap:xt,iridescenceThicknessMap:Dt,sheen:Y,sheenColorMap:Nt,sheenRoughnessMap:yt,specularMap:Yt,specularColorMap:Wt,specularIntensityMap:ae,transmission:Tt,transmissionMap:D,thicknessMap:ut,gradientMap:G,opaque:T.transparent===!1&&T.blending===Pi&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:pt,alphaHash:dt,combine:T.combine,mapUv:Zt&&_(T.map.channel),aoMapUv:C&&_(T.aoMap.channel),lightMapUv:Ct&&_(T.lightMap.channel),bumpMapUv:Q&&_(T.bumpMap.channel),normalMapUv:vt&&_(T.normalMap.channel),displacementMapUv:ot&&_(T.displacementMap.channel),emissiveMapUv:It&&_(T.emissiveMap.channel),metalnessMapUv:gt&&_(T.metalnessMap.channel),roughnessMapUv:b&&_(T.roughnessMap.channel),anisotropyMapUv:ht&&_(T.anisotropyMap.channel),clearcoatMapUv:_t&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:qt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:yt&&_(T.sheenRoughnessMap.channel),specularMapUv:Yt&&_(T.specularMap.channel),specularColorMapUv:Wt&&_(T.specularColorMap.channel),specularIntensityMapUv:ae&&_(T.specularIntensityMap.channel),transmissionMapUv:D&&_(T.transmissionMap.channel),thicknessMapUv:ut&&_(T.thicknessMap.channel),alphaMapUv:Z&&_(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(vt||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(Zt||Z),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Lt,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Mt,morphTextureStride:kt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:Zt&&T.map.isVideoTexture===!0&&Jt.getTransfer(T.map.colorSpace)===ie,decodeVideoTextureEmissive:It&&T.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(T.emissiveMap.colorSpace)===ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===rn,flipSided:T.side===Oe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:zt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&T.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Re.vertexUv1s=h.has(1),Re.vertexUv2s=h.has(2),Re.vertexUv3s=h.has(3),h.clear(),Re}function d(T){const x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)x.push(R),x.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(S(x,T),y(x,T),x.push(i.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function S(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function y(T,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const x=g[T.type];let R;if(x){const B=dn[x];R=eu.clone(B.uniforms)}else R=T.uniforms;return R}function P(T,x){let R;for(let B=0,F=f.length;B<F;B++){const H=f[B];if(H.cacheKey===x){R=H,++R.usedTimes;break}}return R===void 0&&(R=new mm(i,x,T,r),f.push(R)),R}function A(T){if(--T.usedTimes===0){const x=f.indexOf(T);f[x]=f[f.length-1],f.pop(),T.destroy()}}function w(T){l.remove(T)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:P,releaseProgram:A,releaseShaderCache:w,programs:f,dispose:L}}function ym(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Mm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Rl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ll(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(m,c,u,g,_,p){let d=i[t];return d===void 0?(d={id:m.id,object:m,geometry:c,material:u,groupOrder:g,renderOrder:m.renderOrder,z:_,group:p},i[t]=d):(d.id=m.id,d.object=m,d.geometry=c,d.material=u,d.groupOrder=g,d.renderOrder=m.renderOrder,d.z=_,d.group=p),t++,d}function a(m,c,u,g,_,p){const d=o(m,c,u,g,_,p);u.transmission>0?n.push(d):u.transparent===!0?s.push(d):e.push(d)}function l(m,c,u,g,_,p){const d=o(m,c,u,g,_,p);u.transmission>0?n.unshift(d):u.transparent===!0?s.unshift(d):e.unshift(d)}function h(m,c){e.length>1&&e.sort(m||Mm),n.length>1&&n.sort(c||Rl),s.length>1&&s.sort(c||Rl)}function f(){for(let m=t,c=i.length;m<c;m++){const u=i[m];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:f,sort:h}}function Sm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ll,i.set(n,[o])):s>=r.length?(o=new Ll,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Em(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new $t};break;case"SpotLight":e={position:new I,direction:new I,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Tm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let bm=0;function wm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Am(i){const t=new Em,e=Tm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new I);const s=new I,r=new pe,o=new pe;function a(h){let f=0,m=0,c=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let u=0,g=0,_=0,p=0,d=0,S=0,y=0,v=0,P=0,A=0,w=0;h.sort(wm);for(let T=0,x=h.length;T<x;T++){const R=h[T],B=R.color,F=R.intensity,H=R.distance,X=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=B.r*F,m+=B.g*F,c+=B.b*F;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],F);w++}else if(R.isDirectionalLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const K=R.shadow,V=e.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.directionalShadow[u]=V,n.directionalShadowMap[u]=X,n.directionalShadowMatrix[u]=R.shadow.matrix,S++}n.directional[u]=W,u++}else if(R.isSpotLight){const W=t.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(B).multiplyScalar(F),W.distance=H,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[_]=W;const K=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,K.updateMatrices(R),R.castShadow&&A++),n.spotLightMatrix[_]=K.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=X,v++}_++}else if(R.isRectAreaLight){const W=t.get(R);W.color.copy(B).multiplyScalar(F),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=W,p++}else if(R.isPointLight){const W=t.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const K=R.shadow,V=e.get(R);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=W,g++}else if(R.isHemisphereLight){const W=t.get(R);W.skyColor.copy(R.color).multiplyScalar(F),W.groundColor.copy(R.groundColor).multiplyScalar(F),n.hemi[d]=W,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=m,n.ambient[2]=c;const L=n.hash;(L.directionalLength!==u||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==p||L.hemiLength!==d||L.numDirectionalShadows!==S||L.numPointShadows!==y||L.numSpotShadows!==v||L.numSpotMaps!==P||L.numLightProbes!==w)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,L.directionalLength=u,L.pointLength=g,L.spotLength=_,L.rectAreaLength=p,L.hemiLength=d,L.numDirectionalShadows=S,L.numPointShadows=y,L.numSpotShadows=v,L.numSpotMaps=P,L.numLightProbes=w,n.version=bm++)}function l(h,f){let m=0,c=0,u=0,g=0,_=0;const p=f.matrixWorldInverse;for(let d=0,S=h.length;d<S;d++){const y=h[d];if(y.isDirectionalLight){const v=n.directional[m];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),m++}else if(y.isSpotLight){const v=n.spot[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(y.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const v=n.point[c];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(p),c++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function Pl(i){const t=new Am(i),e=[],n=[];function s(f){h.camera=f,e.length=0,n.length=0}function r(f){e.push(f)}function o(f){n.push(f)}function a(){t.setup(e)}function l(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Pl(i),t.set(s,[a])):r>=o.length?(a=new Pl(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Rm extends xs{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Lm extends xs{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Pm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Im=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dm(i,t,e){let n=new fa;const s=new at,r=new at,o=new se,a=new Rm({depthPacking:Th}),l=new Lm,h={},f=e.maxTextureSize,m={[Hn]:Oe,[Oe]:Hn,[rn]:rn},c=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:Pm,fragmentShader:Im}),u=c.clone();u.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new St(g,c),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let d=this.type;this.render=function(A,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const T=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(kn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=d!==Tn&&this.type===Tn,H=d===Tn&&this.type!==Tn;for(let X=0,W=A.length;X<W;X++){const K=A[X],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const lt=V.getFrameExtents();if(s.multiply(lt),r.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/lt.x),s.x=r.x*lt.x,V.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/lt.y),s.y=r.y*lt.y,V.mapSize.y=r.y)),V.map===null||F===!0||H===!0){const Mt=this.type!==Tn?{minFilter:cn,magFilter:cn}:{};V.map!==null&&V.map.dispose(),V.map=new oi(s.x,s.y,Mt),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const mt=V.getViewportCount();for(let Mt=0;Mt<mt;Mt++){const kt=V.getViewport(Mt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),B.viewport(o),V.updateMatrices(K,Mt),n=V.getFrustum(),v(w,L,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===Tn&&S(V,L),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(T,x,R)};function S(A,w){const L=t.update(_);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new oi(s.x,s.y)),c.uniforms.shadow_pass.value=A.map.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,L,c,_,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,L,u,_,null)}function y(A,w,L,T){let x=null;const R=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=L.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=x.uuid,F=w.uuid;let H=h[B];H===void 0&&(H={},h[B]=H);let X=H[F];X===void 0&&(X=x.clone(),H[F]=X,w.addEventListener("dispose",P)),x=X}if(x.visible=w.visible,x.wireframe=w.wireframe,T===Tn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:m[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=L}return x}function v(A,w,L,T,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Tn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const F=t.update(A),H=A.material;if(Array.isArray(H)){const X=F.groups;for(let W=0,K=X.length;W<K;W++){const V=X[W],lt=H[V.materialIndex];if(lt&&lt.visible){const mt=y(A,lt,T,x);A.onBeforeShadow(i,A,w,L,F,mt,V),i.renderBufferDirect(L,null,F,mt,A,V),A.onAfterShadow(i,A,w,L,F,mt,V)}}}else if(H.visible){const X=y(A,H,T,x);A.onBeforeShadow(i,A,w,L,F,X,null),i.renderBufferDirect(L,null,F,X,A,null),A.onAfterShadow(i,A,w,L,F,X,null)}}const B=A.children;for(let F=0,H=B.length;F<H;F++)v(B[F],w,L,T,x)}function P(A){A.target.removeEventListener("dispose",P);for(const L in h){const T=h[L],x=A.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}const Um={[so]:ro,[oo]:co,[ao]:ho,[Ui]:lo,[ro]:so,[co]:oo,[ho]:ao,[lo]:Ui};function Nm(i,t){function e(){let D=!1;const ut=new se;let G=null;const Z=new se(0,0,0,0);return{setMask:function(pt){G!==pt&&!D&&(i.colorMask(pt,pt,pt,pt),G=pt)},setLocked:function(pt){D=pt},setClear:function(pt,dt,zt,_e,Re){Re===!0&&(pt*=_e,dt*=_e,zt*=_e),ut.set(pt,dt,zt,_e),Z.equals(ut)===!1&&(i.clearColor(pt,dt,zt,_e),Z.copy(ut))},reset:function(){D=!1,G=null,Z.set(-1,0,0,0)}}}function n(){let D=!1,ut=!1,G=null,Z=null,pt=null;return{setReversed:function(dt){if(ut!==dt){const zt=t.get("EXT_clip_control");ut?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);const _e=pt;pt=null,this.setClear(_e)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?rt(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(dt){G!==dt&&!D&&(i.depthMask(dt),G=dt)},setFunc:function(dt){if(ut&&(dt=Um[dt]),Z!==dt){switch(dt){case so:i.depthFunc(i.NEVER);break;case ro:i.depthFunc(i.ALWAYS);break;case oo:i.depthFunc(i.LESS);break;case Ui:i.depthFunc(i.LEQUAL);break;case ao:i.depthFunc(i.EQUAL);break;case lo:i.depthFunc(i.GEQUAL);break;case co:i.depthFunc(i.GREATER);break;case ho:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=dt}},setLocked:function(dt){D=dt},setClear:function(dt){pt!==dt&&(ut&&(dt=1-dt),i.clearDepth(dt),pt=dt)},reset:function(){D=!1,G=null,Z=null,pt=null,ut=!1}}}function s(){let D=!1,ut=null,G=null,Z=null,pt=null,dt=null,zt=null,_e=null,Re=null;return{setTest:function(ne){D||(ne?rt(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(ne){ut!==ne&&!D&&(i.stencilMask(ne),ut=ne)},setFunc:function(ne,je,_n){(G!==ne||Z!==je||pt!==_n)&&(i.stencilFunc(ne,je,_n),G=ne,Z=je,pt=_n)},setOp:function(ne,je,_n){(dt!==ne||zt!==je||_e!==_n)&&(i.stencilOp(ne,je,_n),dt=ne,zt=je,_e=_n)},setLocked:function(ne){D=ne},setClear:function(ne){Re!==ne&&(i.clearStencil(ne),Re=ne)},reset:function(){D=!1,ut=null,G=null,Z=null,pt=null,dt=null,zt=null,_e=null,Re=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,h=new WeakMap;let f={},m={},c=new WeakMap,u=[],g=null,_=!1,p=null,d=null,S=null,y=null,v=null,P=null,A=null,w=new $t(0,0,0),L=0,T=!1,x=null,R=null,B=null,F=null,H=null;const X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,K=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(V)[1]),W=K>=1):V.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),W=K>=2);let lt=null,mt={};const Mt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Qt=new se().fromArray(Mt),$=new se().fromArray(kt);function it(D,ut,G,Z){const pt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(D,dt),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<G;zt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ut+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return dt}const Et={};Et[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(Ui),Q(!1),vt(Na),rt(i.CULL_FACE),C(kn);function rt(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function Lt(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function Ft(D,ut){return m[D]!==ut?(i.bindFramebuffer(D,ut),m[D]=ut,D===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ut),D===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ut(D,ut){let G=u,Z=!1;if(D){G=c.get(ut),G===void 0&&(G=[],c.set(ut,G));const pt=D.textures;if(G.length!==pt.length||G[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,zt=pt.length;dt<zt;dt++)G[dt]=i.COLOR_ATTACHMENT0+dt;G.length=pt.length,Z=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,Z=!0);Z&&i.drawBuffers(G)}function Zt(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const J={[Qn]:i.FUNC_ADD,[Jc]:i.FUNC_SUBTRACT,[Kc]:i.FUNC_REVERSE_SUBTRACT};J[jc]=i.MIN,J[Qc]=i.MAX;const nt={[th]:i.ZERO,[eh]:i.ONE,[nh]:i.SRC_COLOR,[no]:i.SRC_ALPHA,[lh]:i.SRC_ALPHA_SATURATE,[oh]:i.DST_COLOR,[sh]:i.DST_ALPHA,[ih]:i.ONE_MINUS_SRC_COLOR,[io]:i.ONE_MINUS_SRC_ALPHA,[ah]:i.ONE_MINUS_DST_COLOR,[rh]:i.ONE_MINUS_DST_ALPHA,[ch]:i.CONSTANT_COLOR,[hh]:i.ONE_MINUS_CONSTANT_COLOR,[uh]:i.CONSTANT_ALPHA,[dh]:i.ONE_MINUS_CONSTANT_ALPHA};function C(D,ut,G,Z,pt,dt,zt,_e,Re,ne){if(D===kn){_===!0&&(Lt(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),D!==Zc){if(D!==p||ne!==T){if((d!==Qn||v!==Qn)&&(i.blendEquation(i.FUNC_ADD),d=Qn,v=Qn),ne)switch(D){case Pi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.ONE,i.ONE);break;case Oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ba:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}S=null,y=null,P=null,A=null,w.set(0,0,0),L=0,p=D,T=ne}return}pt=pt||ut,dt=dt||G,zt=zt||Z,(ut!==d||pt!==v)&&(i.blendEquationSeparate(J[ut],J[pt]),d=ut,v=pt),(G!==S||Z!==y||dt!==P||zt!==A)&&(i.blendFuncSeparate(nt[G],nt[Z],nt[dt],nt[zt]),S=G,y=Z,P=dt,A=zt),(_e.equals(w)===!1||Re!==L)&&(i.blendColor(_e.r,_e.g,_e.b,Re),w.copy(_e),L=Re),p=D,T=!1}function Ct(D,ut){D.side===rn?Lt(i.CULL_FACE):rt(i.CULL_FACE);let G=D.side===Oe;ut&&(G=!G),Q(G),D.blending===Pi&&D.transparent===!1?C(kn):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),It(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(D){x!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),x=D)}function vt(D){D!==Yc?(rt(i.CULL_FACE),D!==R&&(D===Na?i.cullFace(i.BACK):D===$c?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),R=D}function ot(D){D!==B&&(W&&i.lineWidth(D),B=D)}function It(D,ut,G){D?(rt(i.POLYGON_OFFSET_FILL),(F!==ut||H!==G)&&(i.polygonOffset(ut,G),F=ut,H=G)):Lt(i.POLYGON_OFFSET_FILL)}function gt(D){D?rt(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function b(D){D===void 0&&(D=i.TEXTURE0+X-1),lt!==D&&(i.activeTexture(D),lt=D)}function M(D,ut,G){G===void 0&&(lt===null?G=i.TEXTURE0+X-1:G=lt);let Z=mt[G];Z===void 0&&(Z={type:void 0,texture:void 0},mt[G]=Z),(Z.type!==D||Z.texture!==ut)&&(lt!==G&&(i.activeTexture(G),lt=G),i.bindTexture(D,ut||Et[D]),Z.type=D,Z.texture=ut)}function O(){const D=mt[lt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Tt(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function qt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Dt(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Nt(D){Qt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Qt.copy(D))}function yt(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Yt(D,ut){let G=h.get(ut);G===void 0&&(G=new WeakMap,h.set(ut,G));let Z=G.get(D);Z===void 0&&(Z=i.getUniformBlockIndex(ut,D.name),G.set(D,Z))}function Wt(D,ut){const Z=h.get(ut).get(D);l.get(ut)!==Z&&(i.uniformBlockBinding(ut,Z,D.__bindingPointIndex),l.set(ut,Z))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},lt=null,mt={},m={},c=new WeakMap,u=[],g=null,_=!1,p=null,d=null,S=null,y=null,v=null,P=null,A=null,w=new $t(0,0,0),L=0,T=!1,x=null,R=null,B=null,F=null,H=null,Qt.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Lt,bindFramebuffer:Ft,drawBuffers:Ut,useProgram:Zt,setBlending:C,setMaterial:Ct,setFlipSided:Q,setCullFace:vt,setLineWidth:ot,setPolygonOffset:It,setScissorTest:gt,activeTexture:b,bindTexture:M,unbindTexture:O,compressedTexImage2D:q,compressedTexImage3D:j,texImage2D:xt,texImage3D:Dt,updateUBOMapping:Yt,uniformBlockBinding:Wt,texStorage2D:qt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:Tt,compressedTexSubImage2D:ht,compressedTexSubImage3D:_t,scissor:Nt,viewport:yt,reset:ae}}function Il(i,t,e,n){const s=Fm(n);switch(e){case Jl:return i*t;case jl:return i*t;case Ql:return i*t*2;case tc:return i*t/s.components*s.byteLength;case ca:return i*t/s.components*s.byteLength;case ec:return i*t*2/s.components*s.byteLength;case ha:return i*t*2/s.components*s.byteLength;case Kl:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case ua:return i*t*4/s.components*s.byteLength;case Zs:case Js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ks:case js:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:case xo:return Math.max(i,16)*Math.max(t,8)/4;case go:case vo:return Math.max(i,8)*Math.max(t,8)/2;case yo:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Qs:case Oo:case Bo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case nc:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*8;case zo:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fm(i){switch(i){case Rn:case Yl:return{byteLength:1,components:1};case ls:case $l:case gs:return{byteLength:2,components:1};case aa:case la:return{byteLength:2,components:4};case ri:case oa:case bn:return{byteLength:4,components:1};case Zl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Om(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new at,f=new WeakMap;let m;const c=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return u?new OffscreenCanvas(b,M):rr("canvas")}function _(b,M,O){let q=1;const j=gt(b);if((j.width>O||j.height>O)&&(q=O/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(q*j.width),Tt=Math.floor(q*j.height);m===void 0&&(m=g(Y,Tt));const ht=M?g(Y,Tt):m;return ht.width=Y,ht.height=Tt,ht.getContext("2d").drawImage(b,0,0,Y,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+Tt+")."),ht}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),b;return b}function p(b){return b.generateMipmaps}function d(b){i.generateMipmap(b)}function S(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(b,M,O,q,j=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=M;if(M===i.RED&&(O===i.FLOAT&&(Y=i.R32F),O===i.HALF_FLOAT&&(Y=i.R16F),O===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.R8UI),O===i.UNSIGNED_SHORT&&(Y=i.R16UI),O===i.UNSIGNED_INT&&(Y=i.R32UI),O===i.BYTE&&(Y=i.R8I),O===i.SHORT&&(Y=i.R16I),O===i.INT&&(Y=i.R32I)),M===i.RG&&(O===i.FLOAT&&(Y=i.RG32F),O===i.HALF_FLOAT&&(Y=i.RG16F),O===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RG8UI),O===i.UNSIGNED_SHORT&&(Y=i.RG16UI),O===i.UNSIGNED_INT&&(Y=i.RG32UI),O===i.BYTE&&(Y=i.RG8I),O===i.SHORT&&(Y=i.RG16I),O===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),O===i.UNSIGNED_INT&&(Y=i.RGB32UI),O===i.BYTE&&(Y=i.RGB8I),O===i.SHORT&&(Y=i.RGB16I),O===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),O===i.UNSIGNED_INT&&(Y=i.RGBA32UI),O===i.BYTE&&(Y=i.RGBA8I),O===i.SHORT&&(Y=i.RGBA16I),O===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&O===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){const Tt=j?ur:Jt.getTransfer(q);O===i.FLOAT&&(Y=i.RGBA32F),O===i.HALF_FLOAT&&(Y=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Y=Tt===ie?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(b,M){let O;return b?M===null||M===ri||M===Oi?O=i.DEPTH24_STENCIL8:M===bn?O=i.DEPTH32F_STENCIL8:M===ls&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ri||M===Oi?O=i.DEPTH_COMPONENT24:M===bn?O=i.DEPTH_COMPONENT32F:M===ls&&(O=i.DEPTH_COMPONENT16),O}function P(b,M){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==cn&&b.minFilter!==fn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function A(b){const M=b.target;M.removeEventListener("dispose",A),L(M),M.isVideoTexture&&f.delete(M)}function w(b){const M=b.target;M.removeEventListener("dispose",w),x(M)}function L(b){const M=n.get(b);if(M.__webglInit===void 0)return;const O=b.source,q=c.get(O);if(q){const j=q[M.__cacheKey];j.usedTimes--,j.usedTimes===0&&T(b),Object.keys(q).length===0&&c.delete(O)}n.remove(b)}function T(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const O=b.source,q=c.get(O);delete q[M.__cacheKey],o.memory.textures--}function x(b){const M=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let j=0;j<M.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(M.__webglFramebuffer[q][j]);else i.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)i.deleteFramebuffer(M.__webglFramebuffer[q]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=b.textures;for(let q=0,j=O.length;q<j;q++){const Y=n.get(O[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(O[q])}n.remove(b)}let R=0;function B(){R=0}function F(){const b=R;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),R+=1,b}function H(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function X(b,M){const O=n.get(b);if(b.isVideoTexture&&ot(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const q=b.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(O,b,M);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+M)}function W(b,M){const O=n.get(b);if(b.version>0&&O.__version!==b.version){$(O,b,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+M)}function K(b,M){const O=n.get(b);if(b.version>0&&O.__version!==b.version){$(O,b,M);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+M)}function V(b,M){const O=n.get(b);if(b.version>0&&O.__version!==b.version){it(O,b,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+M)}const lt={[po]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[mo]:i.MIRRORED_REPEAT},mt={[cn]:i.NEAREST,[Sh]:i.NEAREST_MIPMAP_NEAREST,[bs]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[ii]:i.LINEAR_MIPMAP_LINEAR},Mt={[wh]:i.NEVER,[Ih]:i.ALWAYS,[Ah]:i.LESS,[sc]:i.LEQUAL,[Ch]:i.EQUAL,[Ph]:i.GEQUAL,[Rh]:i.GREATER,[Lh]:i.NOTEQUAL};function kt(b,M){if(M.type===bn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===fn||M.magFilter===xr||M.magFilter===bs||M.magFilter===ii||M.minFilter===fn||M.minFilter===xr||M.minFilter===bs||M.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,lt[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,lt[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,lt[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,mt[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,mt[M.minFilter]),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===cn||M.minFilter!==bs&&M.minFilter!==ii||M.type===bn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Qt(b,M){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",A));const q=M.source;let j=c.get(q);j===void 0&&(j={},c.set(q,j));const Y=H(M);if(Y!==b.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[Y].usedTimes++;const Tt=j[b.__cacheKey];Tt!==void 0&&(j[b.__cacheKey].usedTimes--,Tt.usedTimes===0&&T(M)),b.__cacheKey=Y,b.__webglTexture=j[Y].texture}return O}function $(b,M,O){let q=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=i.TEXTURE_3D);const j=Qt(b,M),Y=M.source;e.bindTexture(q,b.__webglTexture,i.TEXTURE0+O);const Tt=n.get(Y);if(Y.version!==Tt.__version||j===!0){e.activeTexture(i.TEXTURE0+O);const ht=Jt.getPrimaries(Jt.workingColorSpace),_t=M.colorSpace===Bn?null:Jt.getPrimaries(M.colorSpace),qt=M.colorSpace===Bn||ht===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);let et=_(M.image,!1,s.maxTextureSize);et=It(M,et);const xt=r.convert(M.format,M.colorSpace),Dt=r.convert(M.type);let Nt=y(M.internalFormat,xt,Dt,M.colorSpace,M.isVideoTexture);kt(q,M);let yt;const Yt=M.mipmaps,Wt=M.isVideoTexture!==!0,ae=Tt.__version===void 0||j===!0,D=Y.dataReady,ut=P(M,et);if(M.isDepthTexture)Nt=v(M.format===Bi,M.type),ae&&(Wt?e.texStorage2D(i.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,xt,Dt,null));else if(M.isDataTexture)if(Yt.length>0){Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,ut,Nt,Yt[0].width,Yt[0].height);for(let G=0,Z=Yt.length;G<Z;G++)yt=Yt[G],Wt?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,yt.width,yt.height,xt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,G,Nt,yt.width,yt.height,0,xt,Dt,yt.data);M.generateMipmaps=!1}else Wt?(ae&&e.texStorage2D(i.TEXTURE_2D,ut,Nt,et.width,et.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,xt,Dt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,et.width,et.height,0,xt,Dt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Wt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Nt,Yt[0].width,Yt[0].height,et.depth);for(let G=0,Z=Yt.length;G<Z;G++)if(yt=Yt[G],M.format!==ln)if(xt!==null)if(Wt){if(D)if(M.layerUpdates.size>0){const pt=Il(yt.width,yt.height,M.format,M.type);for(const dt of M.layerUpdates){const zt=yt.data.subarray(dt*pt/yt.data.BYTES_PER_ELEMENT,(dt+1)*pt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,dt,yt.width,yt.height,1,xt,zt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,yt.width,yt.height,et.depth,xt,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,Nt,yt.width,yt.height,et.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Wt?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,yt.width,yt.height,et.depth,xt,Dt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,G,Nt,yt.width,yt.height,et.depth,0,xt,Dt,yt.data)}else{Wt&&ae&&e.texStorage2D(i.TEXTURE_2D,ut,Nt,Yt[0].width,Yt[0].height);for(let G=0,Z=Yt.length;G<Z;G++)yt=Yt[G],M.format!==ln?xt!==null?Wt?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,G,Nt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,yt.width,yt.height,xt,Dt,yt.data):e.texImage2D(i.TEXTURE_2D,G,Nt,yt.width,yt.height,0,xt,Dt,yt.data)}else if(M.isDataArrayTexture)if(Wt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,Nt,et.width,et.height,et.depth),D)if(M.layerUpdates.size>0){const G=Il(et.width,et.height,M.format,M.type);for(const Z of M.layerUpdates){const pt=et.data.subarray(Z*G/et.data.BYTES_PER_ELEMENT,(Z+1)*G/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,xt,Dt,pt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,Dt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,xt,Dt,et.data);else if(M.isData3DTexture)Wt?(ae&&e.texStorage3D(i.TEXTURE_3D,ut,Nt,et.width,et.height,et.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,Dt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,xt,Dt,et.data);else if(M.isFramebufferTexture){if(ae)if(Wt)e.texStorage2D(i.TEXTURE_2D,ut,Nt,et.width,et.height);else{let G=et.width,Z=et.height;for(let pt=0;pt<ut;pt++)e.texImage2D(i.TEXTURE_2D,pt,Nt,G,Z,0,xt,Dt,null),G>>=1,Z>>=1}}else if(Yt.length>0){if(Wt&&ae){const G=gt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,ut,Nt,G.width,G.height)}for(let G=0,Z=Yt.length;G<Z;G++)yt=Yt[G],Wt?D&&e.texSubImage2D(i.TEXTURE_2D,G,0,0,xt,Dt,yt):e.texImage2D(i.TEXTURE_2D,G,Nt,xt,Dt,yt);M.generateMipmaps=!1}else if(Wt){if(ae){const G=gt(et);e.texStorage2D(i.TEXTURE_2D,ut,Nt,G.width,G.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Dt,et)}else e.texImage2D(i.TEXTURE_2D,0,Nt,xt,Dt,et);p(M)&&d(q),Tt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function it(b,M,O){if(M.image.length!==6)return;const q=Qt(b,M),j=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const Y=n.get(j);if(j.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+O);const Tt=Jt.getPrimaries(Jt.workingColorSpace),ht=M.colorSpace===Bn?null:Jt.getPrimaries(M.colorSpace),_t=M.colorSpace===Bn||Tt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const qt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,xt=[];for(let Z=0;Z<6;Z++)!qt&&!et?xt[Z]=_(M.image[Z],!0,s.maxCubemapSize):xt[Z]=et?M.image[Z].image:M.image[Z],xt[Z]=It(M,xt[Z]);const Dt=xt[0],Nt=r.convert(M.format,M.colorSpace),yt=r.convert(M.type),Yt=y(M.internalFormat,Nt,yt,M.colorSpace),Wt=M.isVideoTexture!==!0,ae=Y.__version===void 0||q===!0,D=j.dataReady;let ut=P(M,Dt);kt(i.TEXTURE_CUBE_MAP,M);let G;if(qt){Wt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Yt,Dt.width,Dt.height);for(let Z=0;Z<6;Z++){G=xt[Z].mipmaps;for(let pt=0;pt<G.length;pt++){const dt=G[pt];M.format!==ln?Nt!==null?Wt?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,dt.width,dt.height,Nt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,0,0,dt.width,dt.height,Nt,yt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt,Yt,dt.width,dt.height,0,Nt,yt,dt.data)}}}else{if(G=M.mipmaps,Wt&&ae){G.length>0&&ut++;const Z=gt(xt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Yt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,xt[Z].width,xt[Z].height,Nt,yt,xt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,xt[Z].width,xt[Z].height,0,Nt,yt,xt[Z].data);for(let pt=0;pt<G.length;pt++){const zt=G[pt].image[Z].image;Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,zt.width,zt.height,Nt,yt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Yt,zt.width,zt.height,0,Nt,yt,zt.data)}}else{Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Nt,yt,xt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Yt,Nt,yt,xt[Z]);for(let pt=0;pt<G.length;pt++){const dt=G[pt];Wt?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,0,0,Nt,yt,dt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,pt+1,Yt,Nt,yt,dt.image[Z])}}}p(M)&&d(i.TEXTURE_CUBE_MAP),Y.__version=j.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Et(b,M,O,q,j,Y){const Tt=r.convert(O.format,O.colorSpace),ht=r.convert(O.type),_t=y(O.internalFormat,Tt,ht,O.colorSpace),qt=n.get(M),et=n.get(O);if(et.__renderTarget=M,!qt.__hasExternalTextures){const xt=Math.max(1,M.width>>Y),Dt=Math.max(1,M.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,_t,xt,Dt,M.depth,0,Tt,ht,null):e.texImage2D(j,Y,_t,xt,Dt,0,Tt,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),vt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,et.__webglTexture,0,Q(M)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,et.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(b,M,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer){const q=M.depthTexture,j=q&&q.isDepthTexture?q.type:null,Y=v(M.stencilBuffer,j),Tt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Q(M);vt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Y,M.width,M.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Tt,i.RENDERBUFFER,b)}else{const q=M.textures;for(let j=0;j<q.length;j++){const Y=q[j],Tt=r.convert(Y.format,Y.colorSpace),ht=r.convert(Y.type),_t=y(Y.internalFormat,Tt,ht,Y.colorSpace),qt=Q(M);O&&vt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,_t,M.width,M.height):vt(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,qt,_t,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,_t,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),X(M.depthTexture,0);const j=q.__webglTexture,Y=Q(M);if(M.depthTexture.format===Ii)vt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(M.depthTexture.format===Bi)vt(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ft(b){const M=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==b.depthTexture){const q=b.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const j=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),M.__depthDisposeCallback=j}M.__boundDepthTexture=q}if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Lt(M.__webglFramebuffer,b)}else if(O){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=i.createRenderbuffer(),rt(M.__webglDepthbuffer[q],b,!1);else{const j=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),rt(M.__webglDepthbuffer,b,!1);else{const q=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,j)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(b,M,O){const q=n.get(b);M!==void 0&&Et(q.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ft(b)}function Zt(b){const M=b.texture,O=n.get(b),q=n.get(M);b.addEventListener("dispose",w);const j=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Tt=j.length>1;if(Tt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=M.version,o.memory.textures++),Y){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let _t=0;_t<M.mipmaps.length;_t++)O.__webglFramebuffer[ht][_t]=i.createFramebuffer()}else O.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<M.mipmaps.length;ht++)O.__webglFramebuffer[ht]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Tt)for(let ht=0,_t=j.length;ht<_t;ht++){const qt=n.get(j[ht]);qt.__webglTexture===void 0&&(qt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&vt(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<j.length;ht++){const _t=j[ht];O.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const qt=r.convert(_t.format,_t.colorSpace),et=r.convert(_t.type),xt=y(_t.internalFormat,qt,et,_t.colorSpace,b.isXRRenderTarget===!0),Dt=Q(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Dt,xt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),kt(i.TEXTURE_CUBE_MAP,M);for(let ht=0;ht<6;ht++)if(M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Et(O.__webglFramebuffer[ht][_t],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,_t);else Et(O.__webglFramebuffer[ht],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);p(M)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let ht=0,_t=j.length;ht<_t;ht++){const qt=j[ht],et=n.get(qt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),kt(i.TEXTURE_2D,qt),Et(O.__webglFramebuffer,b,qt,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),p(qt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ht=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,q.__webglTexture),kt(ht,M),M.mipmaps&&M.mipmaps.length>0)for(let _t=0;_t<M.mipmaps.length;_t++)Et(O.__webglFramebuffer[_t],b,M,i.COLOR_ATTACHMENT0,ht,_t);else Et(O.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,ht,0);p(M)&&d(ht),e.unbindTexture()}b.depthBuffer&&Ft(b)}function J(b){const M=b.textures;for(let O=0,q=M.length;O<q;O++){const j=M[O];if(p(j)){const Y=S(b),Tt=n.get(j).__webglTexture;e.bindTexture(Y,Tt),d(Y),e.unbindTexture()}}}const nt=[],C=[];function Ct(b){if(b.samples>0){if(vt(b)===!1){const M=b.textures,O=b.width,q=b.height;let j=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=n.get(b),ht=M.length>1;if(ht)for(let _t=0;_t<M.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let _t=0;_t<M.length;_t++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const qt=n.get(M[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qt,0)}i.blitFramebuffer(0,0,O,q,0,0,O,q,j,i.NEAREST),l===!0&&(nt.length=0,C.length=0,nt.push(i.COLOR_ATTACHMENT0+_t),b.depthBuffer&&b.resolveDepthBuffer===!1&&(nt.push(Y),C.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let _t=0;_t<M.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,Tt.__webglColorRenderbuffer[_t]);const qt=n.get(M[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Tt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Q(b){return Math.min(s.maxSamples,b.samples)}function vt(b){const M=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ot(b){const M=o.render.frame;f.get(b)!==M&&(f.set(b,M),b.update())}function It(b,M){const O=b.colorSpace,q=b.format,j=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Hi&&O!==Bn&&(Jt.getTransfer(O)===ie?(q!==ln||j!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function gt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=Zt,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=vt}function Bm(i,t){function e(n,s=Bn){let r;const o=Jt.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===la)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Yl)return i.BYTE;if(n===$l)return i.SHORT;if(n===ls)return i.UNSIGNED_SHORT;if(n===oa)return i.INT;if(n===ri)return i.UNSIGNED_INT;if(n===bn)return i.FLOAT;if(n===gs)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===Kl)return i.RGB;if(n===ln)return i.RGBA;if(n===jl)return i.LUMINANCE;if(n===Ql)return i.LUMINANCE_ALPHA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Bi)return i.DEPTH_STENCIL;if(n===tc)return i.RED;if(n===ca)return i.RED_INTEGER;if(n===ec)return i.RG;if(n===ha)return i.RG_INTEGER;if(n===ua)return i.RGBA_INTEGER;if(n===Zs||n===Js||n===Ks||n===js)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ks)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===js)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===_o||n===vo||n===xo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===yo||n===Mo||n===So)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===yo||n===Mo)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eo||n===To||n===bo||n===wo||n===Ao||n===Co||n===Ro||n===Lo||n===Po||n===Io||n===Do||n===Uo||n===No||n===Fo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ao)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ro)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Io)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Do)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Uo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qs||n===Oo||n===Bo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Qs)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Oo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===ko||n===zo||n===Ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===zo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class km extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class we extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zm={type:"move"};class $r{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),d=this._getHandJoint(h,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const f=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],c=f.position.distanceTo(m.position),u=.02,g=.005;h.inputState.pinching&&c>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&c<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Gm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Vn({vertexShader:Hm,fragmentShader:Vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new St(new ys(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wm extends Vi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,f=null,m=null,c=null,u=null,g=null;const _=new Gm,p=e.getContextAttributes();let d=null,S=null;const y=[],v=[],P=new at;let A=null;const w=new We;w.viewport=new se;const L=new We;L.viewport=new se;const T=[w,L],x=new km;let R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let it=y[$];return it===void 0&&(it=new $r,y[$]=it),it.getTargetRaySpace()},this.getControllerGrip=function($){let it=y[$];return it===void 0&&(it=new $r,y[$]=it),it.getGripSpace()},this.getHand=function($){let it=y[$];return it===void 0&&(it=new $r,y[$]=it),it.getHandSpace()};function F($){const it=v.indexOf($.inputSource);if(it===-1)return;const Et=y[it];Et!==void 0&&(Et.update($.inputSource,$.frame,h||o),Et.dispatchEvent({type:$.type,data:$.inputSource}))}function H(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",X);for(let $=0;$<y.length;$++){const it=v[$];it!==null&&(v[$]=null,y[$].disconnect(it))}R=null,B=null,_.reset(),t.setRenderTarget(d),u=null,c=null,m=null,s=null,S=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return c!==null?c:u},this.getBinding=function(){return m},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",H),s.addEventListener("inputsourceschange",X),p.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const it={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new oi(u.framebufferWidth,u.framebufferHeight,{format:ln,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let it=null,Et=null,rt=null;p.depth&&(rt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=p.stencil?Bi:Ii,Et=p.stencil?Oi:ri);const Lt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};m=new XRWebGLBinding(s,e),c=m.createProjectionLayer(Lt),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),S=new oi(c.textureWidth,c.textureHeight,{format:ln,type:Rn,depthTexture:new _c(c.textureWidth,c.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X($){for(let it=0;it<$.removed.length;it++){const Et=$.removed[it],rt=v.indexOf(Et);rt>=0&&(v[rt]=null,y[rt].disconnect(Et))}for(let it=0;it<$.added.length;it++){const Et=$.added[it];let rt=v.indexOf(Et);if(rt===-1){for(let Ft=0;Ft<y.length;Ft++)if(Ft>=v.length){v.push(Et),rt=Ft;break}else if(v[Ft]===null){v[Ft]=Et,rt=Ft;break}if(rt===-1)break}const Lt=y[rt];Lt&&Lt.connect(Et)}}const W=new I,K=new I;function V($,it,Et){W.setFromMatrixPosition(it.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);const rt=W.distanceTo(K),Lt=it.projectionMatrix.elements,Ft=Et.projectionMatrix.elements,Ut=Lt[14]/(Lt[10]-1),Zt=Lt[14]/(Lt[10]+1),J=(Lt[9]+1)/Lt[5],nt=(Lt[9]-1)/Lt[5],C=(Lt[8]-1)/Lt[0],Ct=(Ft[8]+1)/Ft[0],Q=Ut*C,vt=Ut*Ct,ot=rt/(-C+Ct),It=ot*-C;if(it.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(ot),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Lt[10]===-1)$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const gt=Ut+ot,b=Zt+ot,M=Q-It,O=vt+(rt-It),q=J*Zt/b*gt,j=nt*Zt/b*gt;$.projectionMatrix.makePerspective(M,O,q,j,gt,b),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function lt($,it){it===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(it.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let it=$.near,Et=$.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),x.near=L.near=w.near=it,x.far=L.far=w.far=Et,(R!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,B=x.far),w.layers.mask=$.layers.mask|2,L.layers.mask=$.layers.mask|4,x.layers.mask=w.layers.mask|L.layers.mask;const rt=$.parent,Lt=x.cameras;lt(x,rt);for(let Ft=0;Ft<Lt.length;Ft++)lt(Lt[Ft],rt);Lt.length===2?V(x,w,L):x.projectionMatrix.copy(w.projectionMatrix),mt($,x,rt)};function mt($,it,Et){Et===null?$.matrix.copy(it.matrixWorld):($.matrix.copy(Et.matrixWorld),$.matrix.invert(),$.matrix.multiply(it.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(it.projectionMatrix),$.projectionMatrixInverse.copy(it.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Vo*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(c===null&&u===null))return l},this.setFoveation=function($){l=$,c!==null&&(c.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Mt=null;function kt($,it){if(f=it.getViewerPose(h||o),g=it,f!==null){const Et=f.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let rt=!1;Et.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let Ft=0;Ft<Et.length;Ft++){const Ut=Et[Ft];let Zt=null;if(u!==null)Zt=u.getViewport(Ut);else{const nt=m.getViewSubImage(c,Ut);Zt=nt.viewport,Ft===0&&(t.setRenderTargetTextures(S,nt.colorTexture,c.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(S))}let J=T[Ft];J===void 0&&(J=new We,J.layers.enable(Ft),J.viewport=new se,T[Ft]=J),J.matrix.fromArray(Ut.transform.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale),J.projectionMatrix.fromArray(Ut.projectionMatrix),J.projectionMatrixInverse.copy(J.projectionMatrix).invert(),J.viewport.set(Zt.x,Zt.y,Zt.width,Zt.height),Ft===0&&(x.matrix.copy(J.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(J)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ft=m.getDepthInformation(Et[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,s.renderState)}}for(let Et=0;Et<y.length;Et++){const rt=v[Et],Lt=y[Et];rt!==null&&Lt!==void 0&&Lt.update(rt,it,h||o)}Mt&&Mt($,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Qt=new mc;Qt.setAnimationLoop(kt),this.setAnimationLoop=function($){Mt=$},this.dispose=function(){}}}const Zn=new mn,Xm=new pe;function qm(i,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,dc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,S,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),m(p,d)):d.isMeshPhongMaterial?(r(p,d),f(p,d)):d.isMeshStandardMaterial?(r(p,d),c(p,d),d.isMeshPhysicalMaterial&&u(p,d,v)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,S,y):d.isSpriteMaterial?h(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Oe&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Oe&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const S=t.get(d),y=S.envMap,v=S.envMapRotation;y&&(p.envMap.value=y,Zn.copy(v),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),p.envMapRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(Zn)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,S,y){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=y*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function f(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function m(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function c(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function u(p,d,S){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Oe&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const S=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ym(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,y){const v=y.program;n.uniformBlockBinding(S,v)}function h(S,y){let v=s[S.id];v===void 0&&(g(S),v=f(S),s[S.id]=v,S.addEventListener("dispose",p));const P=y.program;n.updateUBOMapping(S,P);const A=t.render.frame;r[S.id]!==A&&(c(S),r[S.id]=A)}function f(S){const y=m();S.__bindingPointIndex=y;const v=i.createBuffer(),P=S.__size,A=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function m(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(S){const y=s[S.id],v=S.uniforms,P=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,w=v.length;A<w;A++){const L=Array.isArray(v[A])?v[A]:[v[A]];for(let T=0,x=L.length;T<x;T++){const R=L[T];if(u(R,A,T,P)===!0){const B=R.__offset,F=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let X=0;X<F.length;X++){const W=F[X],K=_(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,B+H,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,H),H+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(S,y,v,P){const A=S.value,w=y+"_"+v;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{const L=P[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return P[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(S){const y=S.uniforms;let v=0;const P=16;for(let w=0,L=y.length;w<L;w++){const T=Array.isArray(y[w])?y[w]:[y[w]];for(let x=0,R=T.length;x<R;x++){const B=T[x],F=Array.isArray(B.value)?B.value:[B.value];for(let H=0,X=F.length;H<X;H++){const W=F[H],K=_(W),V=v%P,lt=V%K.boundary,mt=V+lt;v+=lt,mt!==0&&P-mt<K.storage&&(v+=P-mt),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=K.storage}}}const A=v%P;return A>0&&(v+=P-A),S.__size=v,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:d}}class $m{constructor(t={}){const{canvas:e=Uh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:c=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this.toneMapping=zn,this.toneMappingExposure=1;const v=this;let P=!1,A=0,w=0,L=null,T=-1,x=null;const R=new se,B=new se;let F=null;const H=new $t(0);let X=0,W=e.width,K=e.height,V=1,lt=null,mt=null;const Mt=new se(0,0,W,K),kt=new se(0,0,W,K);let Qt=!1;const $=new fa;let it=!1,Et=!1;const rt=new pe,Lt=new pe,Ft=new I,Ut=new se,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let J=!1;function nt(){return L===null?V:1}let C=n;function Ct(E,U){return e.getContext(E,U)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ra}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),C===null){const U="webgl2";if(C=Ct(U,E),C===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Q,vt,ot,It,gt,b,M,O,q,j,Y,Tt,ht,_t,qt,et,xt,Dt,Nt,yt,Yt,Wt,ae,D;function ut(){Q=new Qf(C),Q.init(),Wt=new Bm(C,Q),vt=new Yf(C,Q,t,Wt),ot=new Nm(C,Q),vt.reverseDepthBuffer&&c&&ot.buffers.depth.setReversed(!0),It=new np(C),gt=new ym,b=new Om(C,Q,ot,gt,vt,Wt,It),M=new Zf(v),O=new jf(v),q=new lu(C),ae=new Xf(C,q),j=new tp(C,q,It,ae),Y=new sp(C,j,q,It),Nt=new ip(C,vt,b),et=new $f(gt),Tt=new xm(v,M,O,Q,vt,ae,et),ht=new qm(v,gt),_t=new Sm,qt=new Cm(Q),Dt=new Wf(v,M,O,ot,Y,u,l),xt=new Dm(v,Y,vt),D=new Ym(C,It,vt,ot),yt=new qf(C,Q,It),Yt=new ep(C,Q,It),It.programs=Tt.programs,v.capabilities=vt,v.extensions=Q,v.properties=gt,v.renderLists=_t,v.shadowMap=xt,v.state=ot,v.info=It}ut();const G=new Wm(v,C);this.xr=G,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=Q.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Q.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(W,K,!1))},this.getSize=function(E){return E.set(W,K)},this.setSize=function(E,U,k=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,K=U,e.width=Math.floor(E*V),e.height=Math.floor(U*V),k===!0&&(e.style.width=E+"px",e.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(W*V,K*V).floor()},this.setDrawingBufferSize=function(E,U,k){W=E,K=U,V=k,e.width=Math.floor(E*k),e.height=Math.floor(U*k),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(Mt)},this.setViewport=function(E,U,k,z){E.isVector4?Mt.set(E.x,E.y,E.z,E.w):Mt.set(E,U,k,z),ot.viewport(R.copy(Mt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(kt)},this.setScissor=function(E,U,k,z){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,U,k,z),ot.scissor(B.copy(kt).multiplyScalar(V).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(E){ot.setScissorTest(Qt=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){mt=E},this.getClearColor=function(E){return E.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(E=!0,U=!0,k=!0){let z=0;if(E){let N=!1;if(L!==null){const st=L.texture.format;N=st===ua||st===ha||st===ca}if(N){const st=L.texture.type,ft=st===Rn||st===ri||st===ls||st===Oi||st===aa||st===la,bt=Dt.getClearColor(),wt=Dt.getClearAlpha(),Ot=bt.r,Ht=bt.g,At=bt.b;ft?(g[0]=Ot,g[1]=Ht,g[2]=At,g[3]=wt,C.clearBufferuiv(C.COLOR,0,g)):(_[0]=Ot,_[1]=Ht,_[2]=At,_[3]=wt,C.clearBufferiv(C.COLOR,0,_))}else z|=C.COLOR_BUFFER_BIT}U&&(z|=C.DEPTH_BUFFER_BIT),k&&(z|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),qt.dispose(),gt.dispose(),M.dispose(),O.dispose(),Y.dispose(),ae.dispose(),D.dispose(),Tt.dispose(),G.dispose(),G.removeEventListener("sessionstart",Aa),G.removeEventListener("sessionend",Ca),Gn.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=It.autoReset,U=xt.enabled,k=xt.autoUpdate,z=xt.needsUpdate,N=xt.type;ut(),It.autoReset=E,xt.enabled=U,xt.autoUpdate=k,xt.needsUpdate=z,xt.type=N}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function zt(E){const U=E.target;U.removeEventListener("dispose",zt),_e(U)}function _e(E){Re(E),gt.remove(E)}function Re(E){const U=gt.get(E).programs;U!==void 0&&(U.forEach(function(k){Tt.releaseProgram(k)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,k,z,N,st){U===null&&(U=Zt);const ft=N.isMesh&&N.matrixWorld.determinant()<0,bt=Wc(E,U,k,z,N);ot.setMaterial(z,ft);let wt=k.index,Ot=1;if(z.wireframe===!0){if(wt=j.getWireframeAttribute(k),wt===void 0)return;Ot=2}const Ht=k.drawRange,At=k.attributes.position;let Kt=Ht.start*Ot,le=(Ht.start+Ht.count)*Ot;st!==null&&(Kt=Math.max(Kt,st.start*Ot),le=Math.min(le,(st.start+st.count)*Ot)),wt!==null?(Kt=Math.max(Kt,0),le=Math.min(le,wt.count)):At!=null&&(Kt=Math.max(Kt,0),le=Math.min(le,At.count));const ce=le-Kt;if(ce<0||ce===1/0)return;ae.setup(N,z,bt,k,wt);let Ne,te=yt;if(wt!==null&&(Ne=q.get(wt),te=Yt,te.setIndex(Ne)),N.isMesh)z.wireframe===!0?(ot.setLineWidth(z.wireframeLinewidth*nt()),te.setMode(C.LINES)):te.setMode(C.TRIANGLES);else if(N.isLine){let Rt=z.linewidth;Rt===void 0&&(Rt=1),ot.setLineWidth(Rt*nt()),N.isLineSegments?te.setMode(C.LINES):N.isLineLoop?te.setMode(C.LINE_LOOP):te.setMode(C.LINE_STRIP)}else N.isPoints?te.setMode(C.POINTS):N.isSprite&&te.setMode(C.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)te.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))te.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Rt=N._multiDrawStarts,vn=N._multiDrawCounts,ee=N._multiDrawCount,Qe=wt?q.get(wt).bytesPerElement:1,ci=gt.get(z).currentProgram.getUniforms();for(let ze=0;ze<ee;ze++)ci.setValue(C,"_gl_DrawID",ze),te.render(Rt[ze]/Qe,vn[ze])}else if(N.isInstancedMesh)te.renderInstances(Kt,ce,N.count);else if(k.isInstancedBufferGeometry){const Rt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,vn=Math.min(k.instanceCount,Rt);te.renderInstances(Kt,ce,vn)}else te.render(Kt,ce)};function ne(E,U,k){E.transparent===!0&&E.side===rn&&E.forceSinglePass===!1?(E.side=Oe,E.needsUpdate=!0,Ts(E,U,k),E.side=Hn,E.needsUpdate=!0,Ts(E,U,k),E.side=rn):Ts(E,U,k)}this.compile=function(E,U,k=null){k===null&&(k=E),d=qt.get(k),d.init(U),y.push(d),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),E!==k&&E.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const z=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const st=N.material;if(st)if(Array.isArray(st))for(let ft=0;ft<st.length;ft++){const bt=st[ft];ne(bt,k,N),z.add(bt)}else ne(st,k,N),z.add(st)}),y.pop(),d=null,z},this.compileAsync=function(E,U,k=null){const z=this.compile(E,U,k);return new Promise(N=>{function st(){if(z.forEach(function(ft){gt.get(ft).currentProgram.isReady()&&z.delete(ft)}),z.size===0){N(E);return}setTimeout(st,10)}Q.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let je=null;function _n(E){je&&je(E)}function Aa(){Gn.stop()}function Ca(){Gn.start()}const Gn=new mc;Gn.setAnimationLoop(_n),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(E){je=E,G.setAnimationLoop(E),E===null?Gn.stop():Gn.start()},G.addEventListener("sessionstart",Aa),G.addEventListener("sessionend",Ca),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,U,L),d=qt.get(E,y.length),d.init(U),y.push(d),Lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(Lt),Et=this.localClippingEnabled,it=et.init(this.clippingPlanes,Et),p=_t.get(E,S.length),p.init(),S.push(p),G.enabled===!0&&G.isPresenting===!0){const st=v.xr.getDepthSensingMesh();st!==null&&vr(st,U,-1/0,v.sortObjects)}vr(E,U,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(lt,mt),J=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,J&&Dt.addToRenderList(p,E),this.info.render.frame++,it===!0&&et.beginShadows();const k=d.state.shadowsArray;xt.render(k,E,U),it===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=p.opaque,N=p.transmissive;if(d.setupLights(),U.isArrayCamera){const st=U.cameras;if(N.length>0)for(let ft=0,bt=st.length;ft<bt;ft++){const wt=st[ft];La(z,N,E,wt)}J&&Dt.render(E);for(let ft=0,bt=st.length;ft<bt;ft++){const wt=st[ft];Ra(p,E,wt,wt.viewport)}}else N.length>0&&La(z,N,E,U),J&&Dt.render(E),Ra(p,E,U);L!==null&&(b.updateMultisampleRenderTarget(L),b.updateRenderTargetMipmap(L)),E.isScene===!0&&E.onAfterRender(v,E,U),ae.resetDefaultState(),T=-1,x=null,y.pop(),y.length>0?(d=y[y.length-1],it===!0&&et.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function vr(E,U,k,z){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){z&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const ft=Y.update(E),bt=E.material;bt.visible&&p.push(E,ft,bt,k,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const ft=Y.update(E),bt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ut.copy(ft.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(bt)){const wt=ft.groups;for(let Ot=0,Ht=wt.length;Ot<Ht;Ot++){const At=wt[Ot],Kt=bt[At.materialIndex];Kt&&Kt.visible&&p.push(E,ft,Kt,k,Ut.z,At)}}else bt.visible&&p.push(E,ft,bt,k,Ut.z,null)}}const st=E.children;for(let ft=0,bt=st.length;ft<bt;ft++)vr(st[ft],U,k,z)}function Ra(E,U,k,z){const N=E.opaque,st=E.transmissive,ft=E.transparent;d.setupLightsView(k),it===!0&&et.setGlobalState(v.clippingPlanes,k),z&&ot.viewport(R.copy(z)),N.length>0&&Es(N,U,k),st.length>0&&Es(st,U,k),ft.length>0&&Es(ft,U,k),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function La(E,U,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[z.id]===void 0&&(d.state.transmissionRenderTarget[z.id]=new oi(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?gs:Rn,minFilter:ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const st=d.state.transmissionRenderTarget[z.id],ft=z.viewport||R;st.setSize(ft.z,ft.w);const bt=v.getRenderTarget();v.setRenderTarget(st),v.getClearColor(H),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),J&&Dt.render(k);const wt=v.toneMapping;v.toneMapping=zn;const Ot=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),d.setupLightsView(z),it===!0&&et.setGlobalState(v.clippingPlanes,z),Es(E,k,z),b.updateMultisampleRenderTarget(st),b.updateRenderTargetMipmap(st),Q.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let At=0,Kt=U.length;At<Kt;At++){const le=U[At],ce=le.object,Ne=le.geometry,te=le.material,Rt=le.group;if(te.side===rn&&ce.layers.test(z.layers)){const vn=te.side;te.side=Oe,te.needsUpdate=!0,Pa(ce,k,z,Ne,te,Rt),te.side=vn,te.needsUpdate=!0,Ht=!0}}Ht===!0&&(b.updateMultisampleRenderTarget(st),b.updateRenderTargetMipmap(st))}v.setRenderTarget(bt),v.setClearColor(H,X),Ot!==void 0&&(z.viewport=Ot),v.toneMapping=wt}function Es(E,U,k){const z=U.isScene===!0?U.overrideMaterial:null;for(let N=0,st=E.length;N<st;N++){const ft=E[N],bt=ft.object,wt=ft.geometry,Ot=z===null?ft.material:z,Ht=ft.group;bt.layers.test(k.layers)&&Pa(bt,U,k,wt,Ot,Ht)}}function Pa(E,U,k,z,N,st){E.onBeforeRender(v,U,k,z,N,st),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(v,U,k,z,E,st),N.transparent===!0&&N.side===rn&&N.forceSinglePass===!1?(N.side=Oe,N.needsUpdate=!0,v.renderBufferDirect(k,U,z,N,E,st),N.side=Hn,N.needsUpdate=!0,v.renderBufferDirect(k,U,z,N,E,st),N.side=rn):v.renderBufferDirect(k,U,z,N,E,st),E.onAfterRender(v,U,k,z,N,st)}function Ts(E,U,k){U.isScene!==!0&&(U=Zt);const z=gt.get(E),N=d.state.lights,st=d.state.shadowsArray,ft=N.state.version,bt=Tt.getParameters(E,N.state,st,U,k),wt=Tt.getProgramCacheKey(bt);let Ot=z.programs;z.environment=E.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(E.isMeshStandardMaterial?O:M).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Ot===void 0&&(E.addEventListener("dispose",zt),Ot=new Map,z.programs=Ot);let Ht=Ot.get(wt);if(Ht!==void 0){if(z.currentProgram===Ht&&z.lightsStateVersion===ft)return Da(E,bt),Ht}else bt.uniforms=Tt.getUniforms(E),E.onBeforeCompile(bt,v),Ht=Tt.acquireProgram(bt,wt),Ot.set(wt,Ht),z.uniforms=bt.uniforms;const At=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(At.clippingPlanes=et.uniform),Da(E,bt),z.needsLights=qc(E),z.lightsStateVersion=ft,z.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=Ht,z.uniformsList=null,Ht}function Ia(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=tr.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Da(E,U){const k=gt.get(E);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Wc(E,U,k,z,N){U.isScene!==!0&&(U=Zt),b.resetTextureUnits();const st=U.fog,ft=z.isMeshStandardMaterial?U.environment:null,bt=L===null?v.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Hi,wt=(z.isMeshStandardMaterial?O:M).get(z.envMap||ft),Ot=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ht=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),At=!!k.morphAttributes.position,Kt=!!k.morphAttributes.normal,le=!!k.morphAttributes.color;let ce=zn;z.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ce=v.toneMapping);const Ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,te=Ne!==void 0?Ne.length:0,Rt=gt.get(z),vn=d.state.lights;if(it===!0&&(Et===!0||E!==x)){const Ye=E===x&&z.id===T;et.setState(z,E,Ye)}let ee=!1;z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==vn.state.version||Rt.outputColorSpace!==bt||N.isBatchedMesh&&Rt.batching===!1||!N.isBatchedMesh&&Rt.batching===!0||N.isBatchedMesh&&Rt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Rt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Rt.instancing===!1||!N.isInstancedMesh&&Rt.instancing===!0||N.isSkinnedMesh&&Rt.skinning===!1||!N.isSkinnedMesh&&Rt.skinning===!0||N.isInstancedMesh&&Rt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Rt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Rt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Rt.instancingMorph===!1&&N.morphTexture!==null||Rt.envMap!==wt||z.fog===!0&&Rt.fog!==st||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==et.numPlanes||Rt.numIntersection!==et.numIntersection)||Rt.vertexAlphas!==Ot||Rt.vertexTangents!==Ht||Rt.morphTargets!==At||Rt.morphNormals!==Kt||Rt.morphColors!==le||Rt.toneMapping!==ce||Rt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Rt.__version=z.version);let Qe=Rt.currentProgram;ee===!0&&(Qe=Ts(z,U,N));let ci=!1,ze=!1,Yi=!1;const he=Qe.getUniforms(),un=Rt.uniforms;if(ot.useProgram(Qe.program)&&(ci=!0,ze=!0,Yi=!0),z.id!==T&&(T=z.id,ze=!0),ci||x!==E){ot.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),Fh(rt),Oh(rt),he.setValue(C,"projectionMatrix",rt)):he.setValue(C,"projectionMatrix",E.projectionMatrix),he.setValue(C,"viewMatrix",E.matrixWorldInverse);const Ln=he.map.cameraPosition;Ln!==void 0&&Ln.setValue(C,Ft.setFromMatrixPosition(E.matrixWorld)),vt.logarithmicDepthBuffer&&he.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&he.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,ze=!0,Yi=!0)}if(N.isSkinnedMesh){he.setOptional(C,N,"bindMatrix"),he.setOptional(C,N,"bindMatrixInverse");const Ye=N.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),he.setValue(C,"boneTexture",Ye.boneTexture,b))}N.isBatchedMesh&&(he.setOptional(C,N,"batchingTexture"),he.setValue(C,"batchingTexture",N._matricesTexture,b),he.setOptional(C,N,"batchingIdTexture"),he.setValue(C,"batchingIdTexture",N._indirectTexture,b),he.setOptional(C,N,"batchingColorTexture"),N._colorsTexture!==null&&he.setValue(C,"batchingColorTexture",N._colorsTexture,b));const $i=k.morphAttributes;if(($i.position!==void 0||$i.normal!==void 0||$i.color!==void 0)&&Nt.update(N,k,Qe),(ze||Rt.receiveShadow!==N.receiveShadow)&&(Rt.receiveShadow=N.receiveShadow,he.setValue(C,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(un.envMap.value=wt,un.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(un.envMapIntensity.value=U.environmentIntensity),ze&&(he.setValue(C,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&Xc(un,Yi),st&&z.fog===!0&&ht.refreshFogUniforms(un,st),ht.refreshMaterialUniforms(un,z,V,K,d.state.transmissionRenderTarget[E.id]),tr.upload(C,Ia(Rt),un,b)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(tr.upload(C,Ia(Rt),un,b),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&he.setValue(C,"center",N.center),he.setValue(C,"modelViewMatrix",N.modelViewMatrix),he.setValue(C,"normalMatrix",N.normalMatrix),he.setValue(C,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Ye=z.uniformsGroups;for(let Ln=0,Pn=Ye.length;Ln<Pn;Ln++){const Ua=Ye[Ln];D.update(Ua,Qe),D.bind(Ua,Qe)}}return Qe}function Xc(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function qc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(E,U,k){gt.get(E.texture).__webglTexture=U,gt.get(E.depthTexture).__webglTexture=k;const z=gt.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const k=gt.get(E);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,k=0){L=E,A=U,w=k;let z=!0,N=null,st=!1,ft=!1;if(E){const wt=gt.get(E);if(wt.__useDefaultFramebuffer!==void 0)ot.bindFramebuffer(C.FRAMEBUFFER,null),z=!1;else if(wt.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(wt.__hasExternalTextures)b.rebindTextures(E,gt.get(E.texture).__webglTexture,gt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const At=E.depthTexture;if(wt.__boundDepthTexture!==At){if(At!==null&&gt.has(At)&&(E.width!==At.image.width||E.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Ot=E.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(ft=!0);const Ht=gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[U])?N=Ht[U][k]:N=Ht[U],st=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?N=gt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?N=Ht[k]:N=Ht,R.copy(E.viewport),B.copy(E.scissor),F=E.scissorTest}else R.copy(Mt).multiplyScalar(V).floor(),B.copy(kt).multiplyScalar(V).floor(),F=Qt;if(ot.bindFramebuffer(C.FRAMEBUFFER,N)&&z&&ot.drawBuffers(E,N),ot.viewport(R),ot.scissor(B),ot.setScissorTest(F),st){const wt=gt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,k)}else if(ft){const wt=gt.get(E.texture),Ot=U||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,wt.__webglTexture,k||0,Ot)}T=-1},this.readRenderTargetPixels=function(E,U,k,z,N,st,ft){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(bt=bt[ft]),bt){ot.bindFramebuffer(C.FRAMEBUFFER,bt);try{const wt=E.texture,Ot=wt.format,Ht=wt.type;if(!vt.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-z&&k>=0&&k<=E.height-N&&C.readPixels(U,k,z,N,Wt.convert(Ot),Wt.convert(Ht),st)}finally{const wt=L!==null?gt.get(L).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,U,k,z,N,st,ft){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ft!==void 0&&(bt=bt[ft]),bt){const wt=E.texture,Ot=wt.format,Ht=wt.type;if(!vt.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-z&&k>=0&&k<=E.height-N){ot.bindFramebuffer(C.FRAMEBUFFER,bt);const At=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,At),C.bufferData(C.PIXEL_PACK_BUFFER,st.byteLength,C.STREAM_READ),C.readPixels(U,k,z,N,Wt.convert(Ot),Wt.convert(Ht),0);const Kt=L!==null?gt.get(L).__webglFramebuffer:null;ot.bindFramebuffer(C.FRAMEBUFFER,Kt);const le=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Nh(C,le,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,At),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,st),C.deleteBuffer(At),C.deleteSync(le),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,k=0){E.isTexture!==!0&&(es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-k),N=Math.floor(E.image.width*z),st=Math.floor(E.image.height*z),ft=U!==null?U.x:0,bt=U!==null?U.y:0;b.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,ft,bt,N,st),ot.unbindTexture()},this.copyTextureToTexture=function(E,U,k=null,z=null,N=0){E.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let st,ft,bt,wt,Ot,Ht,At,Kt,le;const ce=E.isCompressedTexture?E.mipmaps[N]:E.image;k!==null?(st=k.max.x-k.min.x,ft=k.max.y-k.min.y,bt=k.isBox3?k.max.z-k.min.z:1,wt=k.min.x,Ot=k.min.y,Ht=k.isBox3?k.min.z:0):(st=ce.width,ft=ce.height,bt=ce.depth||1,wt=0,Ot=0,Ht=0),z!==null?(At=z.x,Kt=z.y,le=z.z):(At=0,Kt=0,le=0);const Ne=Wt.convert(U.format),te=Wt.convert(U.type);let Rt;U.isData3DTexture?(b.setTexture3D(U,0),Rt=C.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(b.setTexture2DArray(U,0),Rt=C.TEXTURE_2D_ARRAY):(b.setTexture2D(U,0),Rt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,U.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,U.unpackAlignment);const vn=C.getParameter(C.UNPACK_ROW_LENGTH),ee=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Qe=C.getParameter(C.UNPACK_SKIP_PIXELS),ci=C.getParameter(C.UNPACK_SKIP_ROWS),ze=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ce.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ce.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,wt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ot),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ht);const Yi=E.isDataArrayTexture||E.isData3DTexture,he=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const un=gt.get(E),$i=gt.get(U),Ye=gt.get(un.__renderTarget),Ln=gt.get($i.__renderTarget);ot.bindFramebuffer(C.READ_FRAMEBUFFER,Ye.__webglFramebuffer),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ln.__webglFramebuffer);for(let Pn=0;Pn<bt;Pn++)Yi&&C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(E).__webglTexture,N,Ht+Pn),E.isDepthTexture?(he&&C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(U).__webglTexture,N,le+Pn),C.blitFramebuffer(wt,Ot,st,ft,At,Kt,st,ft,C.DEPTH_BUFFER_BIT,C.NEAREST)):he?C.copyTexSubImage3D(Rt,N,At,Kt,le+Pn,wt,Ot,st,ft):C.copyTexSubImage2D(Rt,N,At,Kt,le+Pn,wt,Ot,st,ft);ot.bindFramebuffer(C.READ_FRAMEBUFFER,null),ot.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else he?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Rt,N,At,Kt,le,st,ft,bt,Ne,te,ce.data):U.isCompressedArrayTexture?C.compressedTexSubImage3D(Rt,N,At,Kt,le,st,ft,bt,Ne,ce.data):C.texSubImage3D(Rt,N,At,Kt,le,st,ft,bt,Ne,te,ce):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,N,At,Kt,st,ft,Ne,te,ce.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,N,At,Kt,ce.width,ce.height,Ne,ce.data):C.texSubImage2D(C.TEXTURE_2D,N,At,Kt,st,ft,Ne,te,ce);C.pixelStorei(C.UNPACK_ROW_LENGTH,vn),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ee),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Qe),C.pixelStorei(C.UNPACK_SKIP_ROWS,ci),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ze),N===0&&U.generateMipmaps&&C.generateMipmap(Rt),ot.unbindTexture()},this.copyTextureToTexture3D=function(E,U,k=null,z=null,N=0){return E.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,E=arguments[2],U=arguments[3],N=arguments[4]||0),es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,k,z,N)},this.initRenderTarget=function(E){gt.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),ot.unbindTexture()},this.resetState=function(){A=0,w=0,L=null,ot.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}class ma{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new $t(t),this.density=e}clone(){return new ma(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zm extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=n[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const f=n[s],c=n[s+1]-f,u=(o-f)/c;return(s+u)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new at:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,l=new pe;for(let u=0;u<=t;u++){const g=u/t;s[u]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let h=Number.MAX_VALUE;const f=Math.abs(s[0].x),m=Math.abs(s[0].y),c=Math.abs(s[0].z);f<=h&&(h=f,n.set(1,0,0)),m<=h&&(h=m,n.set(0,1,0)),c<=h&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=t;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ie(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(e===!0){let u=Math.acos(Ie(r[0].dot(r[t]),-1,1));u/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(u=-u);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ga extends gn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),m=Math.sin(this.aRotation),c=l-this.aX,u=h-this.aY;l=c*f-u*m+this.aX,h=c*m+u*f+this.aY}return n.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Jm extends ga{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _a(){let i=0,t=0,e=0,n=0;function s(r,o,a,l){i=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,f,m){let c=(o-r)/h-(a-r)/(h+f)+(a-o)/f,u=(a-o)/f-(l-o)/(f+m)+(l-a)/m;c*=f,u*=f,s(o,a,c,u)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const qs=new I,Zr=new _a,Jr=new _a,Kr=new _a;class Km extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,f;this.closed||a>0?h=s[(a-1)%r]:(qs.subVectors(s[0],s[1]).add(s[0]),h=qs);const m=s[a%r],c=s[(a+1)%r];if(this.closed||a+2<r?f=s[(a+2)%r]:(qs.subVectors(s[r-1],s[r-2]).add(s[r-1]),f=qs),this.curveType==="centripetal"||this.curveType==="chordal"){const u=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(m),u),_=Math.pow(m.distanceToSquared(c),u),p=Math.pow(c.distanceToSquared(f),u);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Zr.initNonuniformCatmullRom(h.x,m.x,c.x,f.x,g,_,p),Jr.initNonuniformCatmullRom(h.y,m.y,c.y,f.y,g,_,p),Kr.initNonuniformCatmullRom(h.z,m.z,c.z,f.z,g,_,p)}else this.curveType==="catmullrom"&&(Zr.initCatmullRom(h.x,m.x,c.x,f.x,this.tension),Jr.initCatmullRom(h.y,m.y,c.y,f.y,this.tension),Kr.initCatmullRom(h.z,m.z,c.z,f.z,this.tension));return n.set(Zr.calc(l),Jr.calc(l),Kr.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,l=i*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*i+e}function jm(i,t){const e=1-i;return e*e*t}function Qm(i,t){return 2*(1-i)*i*t}function tg(i,t){return i*i*t}function ss(i,t,e,n){return jm(i,t)+Qm(i,e)+tg(i,n)}function eg(i,t){const e=1-i;return e*e*e*t}function ng(i,t){const e=1-i;return 3*e*e*i*t}function ig(i,t){return 3*(1-i)*i*i*t}function sg(i,t){return i*i*i*t}function rs(i,t,e,n,s){return eg(i,t)+ng(i,e)+ig(i,n)+sg(i,s)}class Sc extends gn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,s.x,r.x,o.x,a.x),rs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rg extends gn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(rs(t,s.x,r.x,o.x,a.x),rs(t,s.y,r.y,o.y,a.y),rs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ec extends gn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class og extends gn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tc extends gn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(t,s.x,r.x,o.x),ss(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ag extends gn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ss(t,s.x,r.x,o.x),ss(t,s.y,r.y,o.y),ss(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bc extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],f=s[o>s.length-2?s.length-1:o+1],m=s[o>s.length-3?s.length-1:o+2];return n.set(Dl(a,l.x,h.x,f.x,m.x),Dl(a,l.y,h.y,f.y,m.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Wo=Object.freeze({__proto__:null,ArcCurve:Jm,CatmullRomCurve3:Km,CubicBezierCurve:Sc,CubicBezierCurve3:rg,EllipseCurve:ga,LineCurve:Ec,LineCurve3:og,QuadraticBezierCurve:Tc,QuadraticBezierCurve3:ag,SplineCurve:bc});class lg extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){const f=l[h];n&&n.equals(f)||(e.push(f),n=f)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Wo[s.type]().fromJSON(s))}return this}}class Ul extends lg{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ec(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Tc(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Sc(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new bc(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,l){const h=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(t+h,e+f,n,s,r,o,a,l),this}absellipse(t,e,n,s,r,o,a,l){const h=new ga(t,e,n,s,r,o,a,l);if(this.curves.length>0){const m=h.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(h);const f=h.getPoint(1);return this.currentPoint.copy(f),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class re extends ke{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const h=this;s=Math.floor(s),r=Math.floor(r);const f=[],m=[],c=[],u=[];let g=0;const _=[],p=n/2;let d=0;S(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new oe(m,3)),this.setAttribute("normal",new oe(c,3)),this.setAttribute("uv",new oe(u,2));function S(){const v=new I,P=new I;let A=0;const w=(e-t)/n;for(let L=0;L<=r;L++){const T=[],x=L/r,R=x*(e-t)+t;for(let B=0;B<=s;B++){const F=B/s,H=F*l+a,X=Math.sin(H),W=Math.cos(H);P.x=R*X,P.y=-x*n+p,P.z=R*W,m.push(P.x,P.y,P.z),v.set(X,w,W).normalize(),c.push(v.x,v.y,v.z),u.push(F,1-x),T.push(g++)}_.push(T)}for(let L=0;L<s;L++)for(let T=0;T<r;T++){const x=_[T][L],R=_[T+1][L],B=_[T+1][L+1],F=_[T][L+1];(t>0||T!==0)&&(f.push(x,R,F),A+=3),(e>0||T!==r-1)&&(f.push(R,B,F),A+=3)}h.addGroup(d,A,0),d+=A}function y(v){const P=g,A=new at,w=new I;let L=0;const T=v===!0?t:e,x=v===!0?1:-1;for(let B=1;B<=s;B++)m.push(0,p*x,0),c.push(0,x,0),u.push(.5,.5),g++;const R=g;for(let B=0;B<=s;B++){const H=B/s*l+a,X=Math.cos(H),W=Math.sin(H);w.x=T*W,w.y=p*x,w.z=T*X,m.push(w.x,w.y,w.z),c.push(0,x,0),A.x=X*.5+.5,A.y=W*.5*x+.5,u.push(A.x,A.y),g++}for(let B=0;B<s;B++){const F=P+B,H=R+B;v===!0?f.push(H,H+1,F):f.push(H+1,H,F),L+=3}h.addGroup(d,L,v===!0?1:2),d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xi extends re{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Xi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class va extends ke{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),h(n),f(),this.setAttribute("position",new oe(r,3)),this.setAttribute("normal",new oe(r.slice(),3)),this.setAttribute("uv",new oe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new I,v=new I,P=new I;for(let A=0;A<e.length;A+=3)u(e[A+0],y),u(e[A+1],v),u(e[A+2],P),l(y,v,P,S)}function l(S,y,v,P){const A=P+1,w=[];for(let L=0;L<=A;L++){w[L]=[];const T=S.clone().lerp(v,L/A),x=y.clone().lerp(v,L/A),R=A-L;for(let B=0;B<=R;B++)B===0&&L===A?w[L][B]=T:w[L][B]=T.clone().lerp(x,B/R)}for(let L=0;L<A;L++)for(let T=0;T<2*(A-L)-1;T++){const x=Math.floor(T/2);T%2===0?(c(w[L][x+1]),c(w[L+1][x]),c(w[L][x])):(c(w[L][x+1]),c(w[L+1][x+1]),c(w[L+1][x]))}}function h(S){const y=new I;for(let v=0;v<r.length;v+=3)y.x=r[v+0],y.y=r[v+1],y.z=r[v+2],y.normalize().multiplyScalar(S),r[v+0]=y.x,r[v+1]=y.y,r[v+2]=y.z}function f(){const S=new I;for(let y=0;y<r.length;y+=3){S.x=r[y+0],S.y=r[y+1],S.z=r[y+2];const v=p(S)/2/Math.PI+.5,P=d(S)/Math.PI+.5;o.push(v,1-P)}g(),m()}function m(){for(let S=0;S<o.length;S+=6){const y=o[S+0],v=o[S+2],P=o[S+4],A=Math.max(y,v,P),w=Math.min(y,v,P);A>.9&&w<.1&&(y<.2&&(o[S+0]+=1),v<.2&&(o[S+2]+=1),P<.2&&(o[S+4]+=1))}}function c(S){r.push(S.x,S.y,S.z)}function u(S,y){const v=S*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){const S=new I,y=new I,v=new I,P=new I,A=new at,w=new at,L=new at;for(let T=0,x=0;T<r.length;T+=9,x+=6){S.set(r[T+0],r[T+1],r[T+2]),y.set(r[T+3],r[T+4],r[T+5]),v.set(r[T+6],r[T+7],r[T+8]),A.set(o[x+0],o[x+1]),w.set(o[x+2],o[x+3]),L.set(o[x+4],o[x+5]),P.copy(S).add(y).add(v).divideScalar(3);const R=p(P);_(A,x+0,S,R),_(w,x+2,y,R),_(L,x+4,v,R)}}function _(S,y,v,P){P<0&&S.x===1&&(o[y]=S.x-1),v.x===0&&v.z===0&&(o[y]=P/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new va(t.vertices,t.indices,t.radius,t.details)}}class wc extends Ul{constructor(t){super(t),this.uuid=Gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ul().fromJSON(s))}return this}}const cg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Ac(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,h,f,m,c,u;if(n&&(r=pg(i,t,r,e)),i.length>80*e){a=h=i[0],l=f=i[1];for(let g=e;g<s;g+=e)m=i[g],c=i[g+1],m<a&&(a=m),c<l&&(l=c),m>h&&(h=m),c>f&&(f=c);u=Math.max(h-a,f-l),u=u!==0?32767/u:0}return cs(r,o,e,a,l,u,0),o}};function Ac(i,t,e,n,s){let r,o;if(s===bg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Nl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Nl(r,i[r],i[r+1],o);return o&&fr(o,o.next)&&(us(o),o=o.next),o}function ai(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(fr(e,e.next)||ge(e.prev,e,e.next)===0)){if(us(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function cs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&xg(i,n,s,r);let a=i,l,h;for(;i.prev!==i.next;){if(l=i.prev,h=i.next,r?ug(i,n,s,r):hg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),us(i),i=h.next,a=h.next;continue}if(i=h,i===a){o?o===1?(i=dg(ai(i),t,e),cs(i,t,e,n,s,r,2)):o===2&&fg(i,t,e,n,s,r):cs(ai(i),t,e,n,s,r,1);break}}}function hg(i){const t=i.prev,e=i,n=i.next;if(ge(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,h=n.y,f=s<r?s<o?s:o:r<o?r:o,m=a<l?a<h?a:h:l<h?l:h,c=s>r?s>o?s:o:r>o?r:o,u=a>l?a>h?a:h:l>h?l:h;let g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=c&&g.y>=m&&g.y<=u&&bi(s,a,r,l,o,h,g.x,g.y)&&ge(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ug(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ge(s,r,o)>=0)return!1;const a=s.x,l=r.x,h=o.x,f=s.y,m=r.y,c=o.y,u=a<l?a<h?a:h:l<h?l:h,g=f<m?f<c?f:c:m<c?m:c,_=a>l?a>h?a:h:l>h?l:h,p=f>m?f>c?f:c:m>c?m:c,d=Xo(u,g,t,e,n),S=Xo(_,p,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=d&&v&&v.z<=S;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&bi(a,f,l,m,h,c,y.x,y.y)&&ge(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&bi(a,f,l,m,h,c,v.x,v.y)&&ge(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=d;){if(y.x>=u&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==o&&bi(a,f,l,m,h,c,y.x,y.y)&&ge(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=u&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&bi(a,f,l,m,h,c,v.x,v.y)&&ge(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function dg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!fr(s,r)&&Cc(s,n,n.next,r)&&hs(s,r)&&hs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),us(n),us(n.next),n=i=r),n=n.next}while(n!==i);return ai(n)}function fg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sg(o,a)){let l=Rc(o,a);o=ai(o,o.next),l=ai(l,l.next),cs(o,t,e,n,s,r,0),cs(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function pg(i,t,e,n){const s=[];let r,o,a,l,h;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,h=Ac(i,a,l,n,!1),h===h.next&&(h.steiner=!0),s.push(Mg(h));for(s.sort(mg),r=0;r<s.length;r++)e=gg(s[r],e);return e}function mg(i,t){return i.x-t.x}function gg(i,t){const e=_g(i,t);if(!e)return t;const n=Rc(e,i);return ai(n,n.next),ai(e,e.next)}function _g(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const c=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(c<=r&&c>n&&(n=c,s=e.x<e.next.x?e:e.next,c===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,l=s.x,h=s.y;let f=1/0,m;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&bi(o<h?r:n,o,l,h,o<h?n:r,o,e.x,e.y)&&(m=Math.abs(o-e.y)/(r-e.x),hs(e,i)&&(m<f||m===f&&(e.x>s.x||e.x===s.x&&vg(s,e)))&&(s=e,f=m)),e=e.next;while(e!==a);return s}function vg(i,t){return ge(i.prev,i,t.prev)<0&&ge(t.next,i,i.next)<0}function xg(i,t,e,n){let s=i;do s.z===0&&(s.z=Xo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,yg(s)}function yg(i){let t,e,n,s,r,o,a,l,h=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<h&&(a++,n=n.nextZ,!!n);t++);for(l=h;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(o>1);return i}function Xo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Mg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function bi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Sg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Eg(i,t)&&(hs(i,t)&&hs(t,i)&&Tg(i,t)&&(ge(i.prev,i,t.prev)||ge(i,t.prev,t))||fr(i,t)&&ge(i.prev,i,i.next)>0&&ge(t.prev,t,t.next)>0)}function ge(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function fr(i,t){return i.x===t.x&&i.y===t.y}function Cc(i,t,e,n){const s=$s(ge(i,t,e)),r=$s(ge(i,t,n)),o=$s(ge(e,n,i)),a=$s(ge(e,n,t));return!!(s!==r&&o!==a||s===0&&Ys(i,e,t)||r===0&&Ys(i,n,t)||o===0&&Ys(e,i,n)||a===0&&Ys(e,t,n))}function Ys(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $s(i){return i>0?1:i<0?-1:0}function Eg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Cc(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function hs(i,t){return ge(i.prev,i,i.next)<0?ge(i,t,i.next)>=0&&ge(i,i.prev,t)>=0:ge(i,t,i.prev)<0||ge(i,i.next,t)<0}function Tg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Rc(i,t){const e=new qo(i.i,i.x,i.y),n=new qo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Nl(i,t,e,n){const s=new qo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function us(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function qo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function bg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class os{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return os.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Fl(t),Ol(n,t);let o=t.length;e.forEach(Fl);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Ol(n,e[l]);const a=cg.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Fl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ol(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class xa extends ke{constructor(t=new wc([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){const h=t[a];o(h)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function o(a){const l=[],h=e.curveSegments!==void 0?e.curveSegments:12,f=e.steps!==void 0?e.steps:1,m=e.depth!==void 0?e.depth:1;let c=e.bevelEnabled!==void 0?e.bevelEnabled:!0,u=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:u-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:wg;let y,v=!1,P,A,w,L;d&&(y=d.getSpacedPoints(f),v=!0,c=!1,P=d.computeFrenetFrames(f,!1),A=new I,w=new I,L=new I),c||(p=0,u=0,g=0,_=0);const T=a.extractPoints(h);let x=T.shape;const R=T.holes;if(!os.isClockWise(x)){x=x.reverse();for(let J=0,nt=R.length;J<nt;J++){const C=R[J];os.isClockWise(C)&&(R[J]=C.reverse())}}const F=os.triangulateShape(x,R),H=x;for(let J=0,nt=R.length;J<nt;J++){const C=R[J];x=x.concat(C)}function X(J,nt,C){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),J.clone().addScaledVector(nt,C)}const W=x.length,K=F.length;function V(J,nt,C){let Ct,Q,vt;const ot=J.x-nt.x,It=J.y-nt.y,gt=C.x-J.x,b=C.y-J.y,M=ot*ot+It*It,O=ot*b-It*gt;if(Math.abs(O)>Number.EPSILON){const q=Math.sqrt(M),j=Math.sqrt(gt*gt+b*b),Y=nt.x-It/q,Tt=nt.y+ot/q,ht=C.x-b/j,_t=C.y+gt/j,qt=((ht-Y)*b-(_t-Tt)*gt)/(ot*b-It*gt);Ct=Y+ot*qt-J.x,Q=Tt+It*qt-J.y;const et=Ct*Ct+Q*Q;if(et<=2)return new at(Ct,Q);vt=Math.sqrt(et/2)}else{let q=!1;ot>Number.EPSILON?gt>Number.EPSILON&&(q=!0):ot<-Number.EPSILON?gt<-Number.EPSILON&&(q=!0):Math.sign(It)===Math.sign(b)&&(q=!0),q?(Ct=-It,Q=ot,vt=Math.sqrt(M)):(Ct=ot,Q=It,vt=Math.sqrt(M/2))}return new at(Ct/vt,Q/vt)}const lt=[];for(let J=0,nt=H.length,C=nt-1,Ct=J+1;J<nt;J++,C++,Ct++)C===nt&&(C=0),Ct===nt&&(Ct=0),lt[J]=V(H[J],H[C],H[Ct]);const mt=[];let Mt,kt=lt.concat();for(let J=0,nt=R.length;J<nt;J++){const C=R[J];Mt=[];for(let Ct=0,Q=C.length,vt=Q-1,ot=Ct+1;Ct<Q;Ct++,vt++,ot++)vt===Q&&(vt=0),ot===Q&&(ot=0),Mt[Ct]=V(C[Ct],C[vt],C[ot]);mt.push(Mt),kt=kt.concat(Mt)}for(let J=0;J<p;J++){const nt=J/p,C=u*Math.cos(nt*Math.PI/2),Ct=g*Math.sin(nt*Math.PI/2)+_;for(let Q=0,vt=H.length;Q<vt;Q++){const ot=X(H[Q],lt[Q],Ct);rt(ot.x,ot.y,-C)}for(let Q=0,vt=R.length;Q<vt;Q++){const ot=R[Q];Mt=mt[Q];for(let It=0,gt=ot.length;It<gt;It++){const b=X(ot[It],Mt[It],Ct);rt(b.x,b.y,-C)}}}const Qt=g+_;for(let J=0;J<W;J++){const nt=c?X(x[J],kt[J],Qt):x[J];v?(w.copy(P.normals[0]).multiplyScalar(nt.x),A.copy(P.binormals[0]).multiplyScalar(nt.y),L.copy(y[0]).add(w).add(A),rt(L.x,L.y,L.z)):rt(nt.x,nt.y,0)}for(let J=1;J<=f;J++)for(let nt=0;nt<W;nt++){const C=c?X(x[nt],kt[nt],Qt):x[nt];v?(w.copy(P.normals[J]).multiplyScalar(C.x),A.copy(P.binormals[J]).multiplyScalar(C.y),L.copy(y[J]).add(w).add(A),rt(L.x,L.y,L.z)):rt(C.x,C.y,m/f*J)}for(let J=p-1;J>=0;J--){const nt=J/p,C=u*Math.cos(nt*Math.PI/2),Ct=g*Math.sin(nt*Math.PI/2)+_;for(let Q=0,vt=H.length;Q<vt;Q++){const ot=X(H[Q],lt[Q],Ct);rt(ot.x,ot.y,m+C)}for(let Q=0,vt=R.length;Q<vt;Q++){const ot=R[Q];Mt=mt[Q];for(let It=0,gt=ot.length;It<gt;It++){const b=X(ot[It],Mt[It],Ct);v?rt(b.x,b.y+y[f-1].y,y[f-1].x+C):rt(b.x,b.y,m+C)}}}$(),it();function $(){const J=s.length/3;if(c){let nt=0,C=W*nt;for(let Ct=0;Ct<K;Ct++){const Q=F[Ct];Lt(Q[2]+C,Q[1]+C,Q[0]+C)}nt=f+p*2,C=W*nt;for(let Ct=0;Ct<K;Ct++){const Q=F[Ct];Lt(Q[0]+C,Q[1]+C,Q[2]+C)}}else{for(let nt=0;nt<K;nt++){const C=F[nt];Lt(C[2],C[1],C[0])}for(let nt=0;nt<K;nt++){const C=F[nt];Lt(C[0]+W*f,C[1]+W*f,C[2]+W*f)}}n.addGroup(J,s.length/3-J,0)}function it(){const J=s.length/3;let nt=0;Et(H,nt),nt+=H.length;for(let C=0,Ct=R.length;C<Ct;C++){const Q=R[C];Et(Q,nt),nt+=Q.length}n.addGroup(J,s.length/3-J,1)}function Et(J,nt){let C=J.length;for(;--C>=0;){const Ct=C;let Q=C-1;Q<0&&(Q=J.length-1);for(let vt=0,ot=f+p*2;vt<ot;vt++){const It=W*vt,gt=W*(vt+1),b=nt+Ct+It,M=nt+Q+It,O=nt+Q+gt,q=nt+Ct+gt;Ft(b,M,O,q)}}}function rt(J,nt,C){l.push(J),l.push(nt),l.push(C)}function Lt(J,nt,C){Ut(J),Ut(nt),Ut(C);const Ct=s.length/3,Q=S.generateTopUV(n,s,Ct-3,Ct-2,Ct-1);Zt(Q[0]),Zt(Q[1]),Zt(Q[2])}function Ft(J,nt,C,Ct){Ut(J),Ut(nt),Ut(Ct),Ut(nt),Ut(C),Ut(Ct);const Q=s.length/3,vt=S.generateSideWallUV(n,s,Q-6,Q-3,Q-2,Q-1);Zt(vt[0]),Zt(vt[1]),Zt(vt[3]),Zt(vt[1]),Zt(vt[2]),Zt(vt[3])}function Ut(J){s.push(l[J*3+0]),s.push(l[J*3+1]),s.push(l[J*3+2])}function Zt(J){r.push(J.x),r.push(J.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ag(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Wo[s.type]().fromJSON(s)),new xa(n,t.options)}}const wg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],h=t[s*3],f=t[s*3+1];return[new at(r,o),new at(a,l),new at(h,f)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[n*3],f=t[n*3+1],m=t[n*3+2],c=t[s*3],u=t[s*3+1],g=t[s*3+2],_=t[r*3],p=t[r*3+1],d=t[r*3+2];return Math.abs(a-f)<Math.abs(o-h)?[new at(o,1-l),new at(h,1-m),new at(c,1-g),new at(_,1-d)]:[new at(a,1-l),new at(f,1-m),new at(u,1-g),new at(p,1-d)]}};function Ag(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ya extends va{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ya(t.radius,t.detail)}}class pr extends ke{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],h=[],f=[];let m=t;const c=(e-t)/s,u=new I,g=new at;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){const d=r+p/n*o;u.x=m*Math.cos(d),u.y=m*Math.sin(d),l.push(u.x,u.y,u.z),h.push(0,0,1),g.x=(u.x/e+1)/2,g.y=(u.y/e+1)/2,f.push(g.x,g.y)}m+=c}for(let _=0;_<s;_++){const p=_*(n+1);for(let d=0;d<n;d++){const S=d+p,y=S,v=S+n+1,P=S+n+2,A=S+1;a.push(y,v,A),a.push(v,P,A)}}this.setIndex(a),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class hn extends ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let h=0;const f=[],m=new I,c=new I,u=[],g=[],_=[],p=[];for(let d=0;d<=n;d++){const S=[],y=d/n;let v=0;d===0&&o===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const A=P/e;m.x=-t*Math.cos(s+A*r)*Math.sin(o+y*a),m.y=t*Math.cos(o+y*a),m.z=t*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(m.x,m.y,m.z),c.copy(m).normalize(),_.push(c.x,c.y,c.z),p.push(A+v,1-y),S.push(h++)}f.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){const y=f[d][S+1],v=f[d][S],P=f[d+1][S],A=f[d+1][S+1];(d!==0||o>0)&&u.push(y,v,A),(d!==n-1||l<Math.PI)&&u.push(v,P,A)}this.setIndex(u),this.setAttribute("position",new oe(g,3)),this.setAttribute("normal",new oe(_,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ma extends ke{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],h=[],f=new I,m=new I,c=new I;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){const _=g/s*r,p=u/n*Math.PI*2;m.x=(t+e*Math.cos(p))*Math.cos(_),m.y=(t+e*Math.cos(p))*Math.sin(_),m.z=e*Math.sin(p),a.push(m.x,m.y,m.z),f.x=t*Math.cos(_),f.y=t*Math.sin(_),c.subVectors(m,f).normalize(),l.push(c.x,c.y,c.z),h.push(g/s),h.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){const _=(s+1)*u+g-1,p=(s+1)*(u-1)+g-1,d=(s+1)*(u-1)+g,S=(s+1)*u+g;o.push(_,p,S),o.push(p,d,S)}this.setIndex(o),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Sa extends ke{constructor(t=1,e=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],l=[],h=[],f=[],m=new I,c=new I,u=new I,g=new I,_=new I,p=new I,d=new I;for(let y=0;y<=n;++y){const v=y/n*r*Math.PI*2;S(v,r,o,t,u),S(v+.01,r,o,t,g),p.subVectors(g,u),d.addVectors(g,u),_.crossVectors(p,d),d.crossVectors(_,p),_.normalize(),d.normalize();for(let P=0;P<=s;++P){const A=P/s*Math.PI*2,w=-e*Math.cos(A),L=e*Math.sin(A);m.x=u.x+(w*d.x+L*_.x),m.y=u.y+(w*d.y+L*_.y),m.z=u.z+(w*d.z+L*_.z),l.push(m.x,m.y,m.z),c.subVectors(m,u).normalize(),h.push(c.x,c.y,c.z),f.push(y/n),f.push(P/s)}}for(let y=1;y<=n;y++)for(let v=1;v<=s;v++){const P=(s+1)*(y-1)+(v-1),A=(s+1)*y+(v-1),w=(s+1)*y+v,L=(s+1)*(y-1)+v;a.push(P,A,L),a.push(A,w,L)}this.setIndex(a),this.setAttribute("position",new oe(l,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2));function S(y,v,P,A,w){const L=Math.cos(y),T=Math.sin(y),x=P/v*y,R=Math.cos(x);w.x=A*(2+R)*.5*L,w.y=A*(2+R)*T*.5,w.z=A*Math.sin(x)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class xe extends xs{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new $t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ic,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class mr extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Cg extends mr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $t(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const jr=new pe,Bl=new I,kl=new I;class Lc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fa,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bl),kl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(kl),e.updateMatrixWorld(),jr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zl=new pe,ts=new I,Qr=new I;class Rg extends Lc{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(ts),Qr.copy(n.position),Qr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Qr),n.updateMatrixWorld(),s.makeTranslation(-ts.x,-ts.y,-ts.z),zl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zl)}}class Pc extends mr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Lg extends Lc{constructor(){super(new gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pg extends mr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Lg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ig extends mr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);class Dg{constructor(t=1){this.state=(Number(t)|0)>>>0,this.state===0&&(this.state=1831565813)}next(){let t=this.state+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}range(t,e){return t+this.next()*(e-t)}int(t,e){return Math.floor(this.range(t,e+1))}}const an={tuning:{player_speed:6,dash_speed:14,dash_duration_s:.2,dash_cooldown_s:1.5,carry_capacity:10,capacity_max:20,lantern_cost:10,relight_cost:5,lantern_count_night1:5,pickup_radius:1,interact_radius:2,pulse_cost:3,pulse_radius:5,fuel_max:100,fuel_decay_per_s:1,fuel_per_mote:10,drain_per_s:5,low_fuel_threshold:30,win_ratio:.6,night1_duration_s:240,night2_duration_s:270,night3_duration_s:300,flames:3,invuln_s:1.5,hit_drop_ratio:.5,pulse_stun_s:2,pulse_push_m:4,pulse_cooldown_s:3,safe_radius:6,shade_speed:4,shade_hit_radius:1,fall_enabled:!0,score:{per_mote:5,per_lantern:100,per_stun:5,per_second_left:0,per_flame_left:50}}};function to(i){const t=Math.round((Number(i)+Number.EPSILON)*10)/10;return Object.is(t,-0)?0:t}function me(i){const t=Math.round((Number(i)+Number.EPSILON)*1e3)/1e3;return Object.is(t,-0)?0:t}function Ug(i,t,e,n,s=0){const r=n*Math.PI/180;return[me(i+e*Math.cos(r)),me(s),me(t+e*Math.sin(r))]}function Ge(i,t,e,n,s=0,r=360/n,o=0){const a=[];for(let l=0;l<n;l++)a.push(Ug(i,t,e,s+l*r,o));return a}const Ng=[{id:"L1",pos:[0,0,25],lit:!1,deposited:0},{id:"L2",pos:[23.8,0,7.7],lit:!1,deposited:0},{id:"L3",pos:[14.7,0,-20.2],lit:!1,deposited:0},{id:"L4",pos:[-14.7,0,-20.2],lit:!1,deposited:0},{id:"L5",pos:[-23.8,0,7.7],lit:!1,deposited:0}],Fg=[{id:"L1",pos:[0,0,20],lit:!1,deposited:0},{id:"L2",pos:[17,0,-10],lit:!1,deposited:0},{id:"L3",pos:[-17,0,-10],lit:!1,deposited:0},{id:"L4",pos:[70,0,20],lit:!1,deposited:0},{id:"L5",pos:[87,0,-10],lit:!1,deposited:0},{id:"L6",pos:[53,0,-10],lit:!1,deposited:0}],Og=[{id:"L1",pos:[0,6,6],lit:!1,deposited:0},{id:"L2",pos:[18,3,10],lit:!1,deposited:0},{id:"L3",pos:[-18,3,10],lit:!1,deposited:0},{id:"L4",pos:[35,0,-10],lit:!1,deposited:0},{id:"L5",pos:[-35,0,-10],lit:!1,deposited:0},{id:"L6",pos:[20,0,-35],lit:!1,deposited:0},{id:"L7",pos:[-20,0,-35],lit:!1,deposited:0}],zi={1:{night:1,name:"Đêm 1 — Đảo Bến",elderIntro:'Ông Đăng: "Đèn Lồng nay sẽ cạn dần dầu theo thời gian và bị Bóng Mực hút dầu khi yếu (< 30)! Hãy giữ ít nhất 3/5 ngọn đèn sáng cho tới lúc Bình Minh (240s) nhé Mây!"',durationKey:"night1_duration_s",shadeSpeed:4,shadeFirstSpawnTick:300,shadeIntervalTicks:480,maxShades:6,lanterns:Ng,moteSpawnPoints:[...Ge(0,0,12,8,0,45,0),...Ge(0,0,33,16,0,22.5,0)],shadeSpawnPoints:Ge(0,0,37,12,15,30,0),jumpPads:[],charms:[],hasDrifters:!1,hasWind:!1},2:{night:2,name:"Đêm 2 — Đảo Cau",elderIntro:'Ông Đăng: "Trên hai hòn Đảo Cau, cháu phải duy trì ít nhất 4/6 ngọn đèn sáng tới Bình Minh (270s). Đèn đã từng sáng nếu tắt chỉ tốn 5 đom đóm để thắp lại, và mỗi lần thắp đèn sức chứa của cháu sẽ tăng thêm 2!"',durationKey:"night2_duration_s",shadeSpeed:4,shadeFirstSpawnTick:300,shadeIntervalTicks:420,maxShades:8,lanterns:Fg,moteSpawnPoints:[...Ge(0,0,10,4,0,90,0),...Ge(0,0,22,8,0,45,0),...Ge(70,0,10,4,0,90,0),...Ge(70,0,22,8,0,45,0)],shadeSpawnPoints:[...Ge(0,0,26,8,22.5,45,0),...Ge(70,0,26,8,22.5,45,0)],jumpPads:[{id:"JP1",pos:[20,0,18],radius:1,vy:14,vh:24,target:[70,0,0]},{id:"JP2",pos:[50,0,-18],radius:1,vy:14,vh:24,target:[0,0,0]}],charms:[{id:"C1",pos:[35,0,0]}],hasDrifters:!0,hasWind:!1},3:{night:3,name:"Đêm 3 — Đảo Chuông",elderIntro:'Ông Đăng: "Đêm cuối trên Đảo Chuông kéo dài 300 giây! Hãy châm dầu kịp thời trước khi đèn giảm dưới 30, dùng Tỏa Sáng đánh bật Bóng Mực đang hút dầu (+15 điểm) và giữ ít nhất 5/7 ngọn đèn sáng đón Bình Minh!"',durationKey:"night3_duration_s",shadeSpeed:4.5,shadeFirstSpawnTick:300,shadeIntervalTicks:360,maxShades:10,lanterns:Og,moteSpawnPoints:[...Ge(0,0,34,18,0,20,0),...Ge(0,0,18,8,20,20,3),...Ge(0,0,5,4,45,90,6)],shadeSpawnPoints:Ge(0,0,43,16,0,22.5,0),jumpPads:[{id:"JP1",pos:[0,3,13],radius:1,vy:12,vh:8,dir:[0,-1]}],charms:[{id:"C1",pos:[30,0,25]},{id:"C2",pos:[-30,0,25]}],hasDrifters:!0,hasWind:!0}},Pt={nightSky:922672,fog:1778512,grass:3104080,sand:13218954,wood:7031343,cloudSea:1194058,lanternLit:16757575,lanternCore:16771504,lanternOff:5988206,moteCore:16774850,moteHalo:16770442,shadeBody:1182234,shadeRim:8011007,shadeRimColorblind:46079,shadeStunned:3814480,mayTunic:15262416,mayScarfAndCharm:13111342,goldBorderAndScore:15909198,drifter:9413560,uiDanger:16734815,uiDangerColorblind:16777215},fe=60,Me=1/fe,Bg=20,kg=7,Bt=1e-9;function Jn(i){return[me(i[0]),me(i[1]),me(i[2])]}function jt(i,t){return Math.hypot(i[0]-t[0],i[2]-t[2])}function sn(i){const t=/(\d+)$/.exec(String(i));return t?Number(t[1]):0}class zg{constructor({seed:t=1,night:e=1,scenario:n=null,tuning:s=an.tuning}={}){var a;this.seed=Number(t)||1,this.night=[1,2,3].includes(Number(e))?Number(e):1,this.nightConfig=zi[this.night]||zi[1],this.tuning=structuredClone(s),this.rng=new Dg(this.seed),this.tick=0,this.sim_tick=0,this.state="playing",this.score=0,this.maxFuelUnits=Math.round((this.tuning.fuel_max??100)*fe),this.lowFuelThresholdUnits=Math.round((this.tuning.low_fuel_threshold??30)*fe),this.fuelPerMoteUnits=Math.round((this.tuning.fuel_per_mote??10)*fe),this.fuelDecayUnitsPerTick=Math.round(this.tuning.fuel_decay_per_s??1),this.drainUnitsPerTick=Math.round(this.tuning.drain_per_s??5);const r=this.tuning[this.nightConfig.durationKey]??this.tuning.night1_duration_s??240;if(this.initialDuration=n&&n.time_left_s!==void 0?Number(n.time_left_s):r,this.time_left_s=this.initialDuration,this.player={pos:[0,0,0],vel:[0,0,0],flames:this.tuning.flames,carried:0,successfulLights:0,capacity:this.tuning.carry_capacity||10,grounded:!0,invulnTicks:0,dashCdTicks:0,pulseCdTicks:0,charmTicks:0,dashTicksLeft:0,dashDir:[0,1],facingDir:[0,1],facingYaw:0,padLaunchActive:!1,padVel:[0,0],respawnWaitTicks:0},n&&n.player){const l=n.player;Array.isArray(l.pos)&&(this.player.pos=[Number(l.pos[0]),Number(l.pos[1]),Number(l.pos[2])]),Array.isArray(l.vel)&&(this.player.vel=[Number(l.vel[0]),Number(l.vel[1]),Number(l.vel[2])]),l.carried!==void 0&&(this.player.carried=Number(l.carried)),l.flames!==void 0&&(this.player.flames=Number(l.flames)),l.successful_lights!==void 0&&(this.player.successfulLights=Number(l.successful_lights)),l.grounded!==void 0&&(this.player.grounded=!!l.grounded),l.invuln_ticks!==void 0&&(this.player.invulnTicks=Number(l.invuln_ticks)),l.dash_cd_ticks!==void 0&&(this.player.dashCdTicks=Number(l.dash_cd_ticks)),l.pulse_cd_ticks!==void 0&&(this.player.pulseCdTicks=Number(l.pulse_cd_ticks)),l.charm_ticks!==void 0&&(this.player.charmTicks=Number(l.charm_ticks))}this.updatePlayerCapacity();const o=this.getTerrainInfo(this.player.pos[0],this.player.pos[2]);if(((a=n==null?void 0:n.player)==null?void 0:a.grounded)===void 0&&(this.player.grounded=o.onIsland&&Math.abs(this.player.pos[1]-o.y)<=.15),this.lanterns=this.nightConfig.lanterns.map(l=>({id:l.id,pos:[...l.pos],lit:!1,deposited:0,fuelUnits:0,ever_lit:!1,relit_count:0})),n&&Array.isArray(n.lanterns))for(const l of n.lanterns){let h=this.lanterns.find(f=>f.id===l.id);if(h||(h={id:String(l.id),pos:[0,0,0],lit:!1,deposited:0,fuelUnits:0,ever_lit:!1,relit_count:0},this.lanterns.push(h)),Array.isArray(l.pos)&&(h.pos=[Number(l.pos[0]),Number(l.pos[1]),Number(l.pos[2])]),l.deposited!==void 0&&(h.deposited=Number(l.deposited)),l.ever_lit!==void 0&&(h.ever_lit=!!l.ever_lit),l.relit_count!==void 0&&(h.relit_count=Number(l.relit_count)),l.lit!==void 0?h.lit=!!l.lit:l.deposited!==void 0&&h.deposited>=(h.ever_lit?this.tuning.relight_cost||5:this.tuning.lantern_cost||10)&&(h.lit=!0),h.lit){const f=l.fuel!==void 0?Number(l.fuel):this.tuning.fuel_max??100;h.fuelUnits=Math.max(0,Math.min(this.maxFuelUnits,Math.round(f*fe))),l.ever_lit===void 0&&(h.ever_lit=!0),h.fuelUnits<=0&&(h.lit=!1,h.deposited=0)}else h.fuelUnits=0}if(this.randomMotes=n&&n.random_motes!==void 0?!!n.random_motes:!0,this.randomShades=n&&n.random_shades!==void 0?!!n.random_shades:!0,this.randomDrifters=n&&n.random_drifters!==void 0?!!n.random_drifters:this.nightConfig.hasDrifters,this.windEnabled=n&&n.wind_enabled!==void 0?!!n.wind_enabled:this.nightConfig.hasWind,this.wind={active:!1,dir_deg:0,ticksLeft:0,warning:!1,nextDirDeg:0},this.nextMoteSeq=1,this.nextShadeSeq=1,this.nextDrifterSeq=1,this.motes=[],n&&Array.isArray(n.motes)){for(const l of n.motes)if(Array.isArray(l))this.motes.push({id:`M${this.nextMoteSeq++}`,pos:[Number(l[0]),Number(l[1]),Number(l[2])],kind:"random",ttlTicks:null,bornTick:0});else if(l&&Array.isArray(l.pos)){const h=l.id?String(l.id):`M${this.nextMoteSeq++}`;this.nextMoteSeq=Math.max(this.nextMoteSeq,sn(h)+1);const f=l.kind==="dropped"?"dropped":"random",m=f==="dropped"?l.ttl_ticks!==void 0?Number(l.ttl_ticks):l.ttl_s!==void 0&&l.ttl_s!==null?Math.round(Number(l.ttl_s)*fe):480:null;this.motes.push({id:h,pos:[Number(l.pos[0]),Number(l.pos[1]),Number(l.pos[2])],kind:f,ttlTicks:m,bornTick:0})}}else this.randomMotes&&this.spawnInitialMotesFromMap(20);if(this.shades=[],n&&Array.isArray(n.shades)){for(const l of n.shades)if(Array.isArray(l)){const h=[Number(l[0]),Number(l[1]),Number(l[2])],f=jt(this.player.pos,h)<=12+Bt?"chase":"wander";this.shades.push({id:`S${this.nextShadeSeq++}`,pos:h,state:f,stateTicksLeft:0,pushTicksLeft:0,pushDir:[1,0],recoilDir:[1,0],targetLanternId:null,drainTicks:0,expelLanternId:null,expelTicksLeft:0,bornTick:0})}else if(l&&Array.isArray(l.pos)){const h=l.id?String(l.id):`S${this.nextShadeSeq++}`;this.nextShadeSeq=Math.max(this.nextShadeSeq,sn(h)+1);const f=[Number(l.pos[0]),Number(l.pos[1]),Number(l.pos[2])],m=jt(this.player.pos,f)<=12+Bt?"chase":"wander",c=l.state?String(l.state):m,u=c==="stunned"?120:c==="recoil"?60:c==="spawning"?15:0,g=l.state_ticks_left!==void 0?Number(l.state_ticks_left):l.stunTimer!==void 0?Math.round(Number(l.stunTimer)*fe):u,_=f[0]-this.player.pos[0],p=f[2]-this.player.pos[2],d=Math.hypot(_,p),S=d>1e-6?[_/d,p/d]:[1,0];let y=l.target_lantern_id?String(l.target_lantern_id):null;if(c==="drain"&&!y){const v=this.lanterns.find(P=>P.lit&&jt(f,P.pos)<=2+Bt);v&&(y=v.id)}this.shades.push({id:h,pos:f,state:c,stateTicksLeft:g,pushTicksLeft:l.push_ticks_left!==void 0?Number(l.push_ticks_left):0,pushDir:[...S],recoilDir:[...S],targetLanternId:y,drainTicks:0,expelLanternId:null,expelTicksLeft:0,bornTick:0})}}if(this.drifters=[],n&&Array.isArray(n.drifters)){for(const l of n.drifters)if(Array.isArray(l))this.drifters.push({id:`D${this.nextDrifterSeq++}`,pos:[Number(l[0]),Number(l[1]),Number(l[2])],state:"idle",stolen:0,stateTicksLeft:0,hasStolenOnce:!1,wanderAngle:0,bornTick:0});else if(l&&Array.isArray(l.pos)){const h=l.id?String(l.id):`D${this.nextDrifterSeq++}`;this.nextDrifterSeq=Math.max(this.nextDrifterSeq,sn(h)+1);const f=l.state?String(l.state):"idle",m=l.stolen!==void 0?Number(l.stolen):0,c=l.state_ticks_left!==void 0?Number(l.state_ticks_left):f==="flee"?240:0;this.drifters.push({id:h,pos:[Number(l.pos[0]),Number(l.pos[1]),Number(l.pos[2])],state:f,stolen:m,stateTicksLeft:c,hasStolenOnce:m>0||f==="flee",wanderAngle:0,bornTick:0})}}if(this.charms=this.nightConfig.charms.map(l=>({id:l.id,pos:[...l.pos],available:!0,respawnTicks:0})),n&&Array.isArray(n.charms)){this.charms=[];for(let l=0;l<n.charms.length;l++){const h=n.charms[l];if(Array.isArray(h))this.charms.push({id:`C${l+1}`,pos:[Number(h[0]),Number(h[1]),Number(h[2])],available:!0,respawnTicks:0});else if(h&&typeof h=="object"){const f=h.id?String(h.id):`C${l+1}`,m=this.nightConfig.charms.find(_=>_.id===f),c=Array.isArray(h.pos)?[Number(h.pos[0]),Number(h.pos[1]),Number(h.pos[2])]:m?[...m.pos]:[35,0,0],u=h.available!==void 0?!!h.available:!0,g=h.respawn_ticks!==void 0?Number(h.respawn_ticks):h.respawn_s!==void 0?Math.round(Number(h.respawn_s)*fe):u?0:2700;this.charms.push({id:f,pos:c,available:u,respawnTicks:g})}}}this.currInput={move:[0,0],cam_yaw_deg:0,jump:!1,interact:!1,pulse:!1,dash:!1,pause:!1},this.prevInput={jump:!1,interact:!1,pulse:!1,dash:!1,pause:!1}}updatePlayerCapacity(){const t=this.tuning.carry_capacity||10,e=this.tuning.capacity_max||20;this.player.capacity=Math.min(e,t+2*this.player.successfulLights)}hasSafeZone(t){return!!(t.lit&&t.fuelUnits>=this.lowFuelThresholdUnits)}spawnInitialMotesFromMap(t){const e=this.nightConfig.moteSpawnPoints.map(s=>[...s]);for(let s=e.length-1;s>0;s--){const r=this.rng.int(0,s),o=e[s];e[s]=e[r],e[r]=o}const n=Math.min(t,e.length);for(let s=0;s<n;s++)this.motes.push({id:`M${this.nextMoteSeq++}`,pos:e[s],kind:"random",ttlTicks:null,bornTick:0})}getTerrainInfo(t,e){const n=!!this.tuning.fall_enabled;if(this.night===1){const r=Math.hypot(t,e);return!n||r<=40+Bt?{onIsland:!0,y:0,isRamp:!1}:{onIsland:!1,y:-1/0,isRamp:!1}}if(this.night===2){const r=Math.hypot(t,e)<=28+Bt,o=Math.hypot(t-70,e)<=28+Bt,a=t>=26-Bt&&t<=44+Bt&&e>=-2-Bt&&e<=2+Bt;return!n||r||o||a?{onIsland:!0,y:0,isRamp:!1}:{onIsland:!1,y:-1/0,isRamp:!1}}const s=Math.hypot(t,e);if(n&&s>45+Bt)return{onIsland:!1,y:-1/0,isRamp:!1};if(s<=8+Bt)return{onIsland:!0,y:6,isRamp:!1};if(e>0&&s>=12-Bt&&s<=24+Bt)return{onIsland:!0,y:3,isRamp:!1};for(const r of[30,150]){const o=r*Math.PI/180,a=Math.cos(o),l=Math.sin(o),h=t*a+e*l;if(Math.abs(-t*l+e*a)<=1.5+Bt&&h>=24-Bt&&h<=30+Bt)return{onIsland:!0,y:3*Math.max(0,Math.min(1,(30-h)/6)),isRamp:!0}}return{onIsland:!0,y:0,isRamp:!1}}resolveHorizontalMove(t,e,n,s,r){let o=!1,a=s,l=r;if(this.night===3){const h=Math.hypot(a,l);h<2&&n>=5&&n<14&&(o=!0,h>1e-6?(a=a/h*2,l=l/h*2):(a=2,l=0));const f=this.getTerrainInfo(a,l);f.onIsland&&!f.isRamp&&f.y>n+.55&&(o=!0,a=t,l=e)}return{x:a,z:l,hitObstacle:o}}clampShadeOutsideSafeZones(t){if(!(!this.tuning.safe_radius||this.tuning.safe_radius<=0))for(const e of this.lanterns){if(!this.hasSafeZone(e)||t.expelLanternId===e.id)continue;const n=t.pos[0]-e.pos[0],s=t.pos[2]-e.pos[2],r=Math.hypot(n,s);r<this.tuning.safe_radius&&(r>1e-6?(t.pos[0]=e.pos[0]+n/r*this.tuning.safe_radius,t.pos[2]=e.pos[2]+s/r*this.tuning.safe_radius):(t.pos[0]=e.pos[0]+this.tuning.safe_radius,t.pos[2]=e.pos[2]))}}isPlayerInLitSafeZone(){if(!this.tuning.safe_radius||this.tuning.safe_radius<=0)return!1;for(const t of this.lanterns)if(this.hasSafeZone(t)&&jt(this.player.pos,t.pos)<=this.tuning.safe_radius+Bt)return!0;return!1}findNearestWeakLantern(t){let e=null,n=1/0,s=1/0;for(let r=0;r<this.lanterns.length;r++){const o=this.lanterns[r];if(!o.lit||o.fuelUnits>=this.lowFuelThresholdUnits)continue;const a=jt(t,o.pos),l=sn(o.id);(a<n-1e-6||Math.abs(a-n)<=1e-6&&l<s)&&(e=o,n=a,s=l)}return e}findNearestUnlitLantern(t){let e=null,n=1/0,s=1/0;for(let r=0;r<this.lanterns.length;r++){const o=this.lanterns[r];if(o.lit)continue;const a=jt(t,o.pos),l=sn(o.id);(a<n-1e-6||Math.abs(a-n)<=1e-6&&l<s)&&(e=o,n=a,s=l)}return e}applyInputFrame(t){t&&(t.move!==void 0&&(this.currInput.move=[Number(t.move[0]),Number(t.move[1])]),t.cam_yaw_deg!==void 0&&(this.currInput.cam_yaw_deg=Number(t.cam_yaw_deg)),t.jump!==void 0&&(this.currInput.jump=!!t.jump),t.interact!==void 0&&(this.currInput.interact=!!t.interact),t.pulse!==void 0&&(this.currInput.pulse=!!t.pulse),t.dash!==void 0&&(this.currInput.dash=!!t.dash),t.pause!==void 0&&(this.currInput.pause=!!t.pause))}step(t=null){if(this.state==="won"||this.state==="lost")return[];const e=this.tick+1;this.tick=e;const n=[],s=(c,u={})=>{n.push({type:"event",tick:e,name:c,data:u})};this.applyInputFrame(t);const r=!this.prevInput.pause&&this.currInput.pause;if(this.prevInput.pause=this.currInput.pause,r){if(this.state==="playing")return this.state="paused",s("paused",{}),n;this.state==="paused"&&(this.state="playing",s("resumed",{}))}if(this.state==="paused")return n;const o=!this.prevInput.jump&&this.currInput.jump,a=!this.prevInput.interact&&this.currInput.interact,l=!this.prevInput.pulse&&this.currInput.pulse,h=!this.prevInput.dash&&this.currInput.dash;this.prevInput.jump=this.currInput.jump,this.prevInput.interact=this.currInput.interact,this.prevInput.pulse=this.currInput.pulse,this.prevInput.dash=this.currInput.dash,this.sim_tick+=1,this.time_left_s=Math.max(0,this.initialDuration-this.sim_tick/fe),this.player.dashCdTicks>0&&this.player.dashCdTicks--,this.player.pulseCdTicks>0&&this.player.pulseCdTicks--,this.player.invulnTicks>0&&this.player.invulnTicks--,this.player.charmTicks>0&&(this.player.charmTicks--,this.player.charmTicks>0&&(this.player.dashCdTicks=0));for(const c of this.lanterns)c.lit&&(c.fuelUnits=Math.max(0,c.fuelUnits-this.fuelDecayUnitsPerTick));for(let c=0;c<this.shades.length;c++){const u=this.shades[c];if(u.bornTick>=this.sim_tick||u.state!=="drain")continue;let g=u.targetLanternId?this.lanterns.find(_=>_.id===u.targetLanternId):null;g||(g=this.lanterns.find(_=>_.lit&&jt(u.pos,_.pos)<=2+Bt),g&&(u.targetLanternId=g.id)),g&&g.lit&&(g.fuelUnits=Math.max(0,g.fuelUnits-this.drainUnitsPerTick),u.drainTicks=(u.drainTicks||0)+1,u.drainTicks%60===0&&s("fuel_drain",{lantern_id:g.id,shade_id:u.id,fuel:to(g.fuelUnits/fe)}))}for(const c of this.lanterns)if(c.lit&&c.fuelUnits<=0){c.fuelUnits=0,c.lit=!1,c.deposited=0,c.ever_lit=!0,s("lantern_out",{lantern_id:c.id});for(const u of this.shades)u.state==="drain"&&u.targetLanternId===c.id&&(u.state="wander",u.drainTicks=0)}for(let c=this.motes.length-1;c>=0;c--){const u=this.motes[c];u.kind==="dropped"&&u.ttlTicks!==null&&u.bornTick<this.sim_tick&&(u.ttlTicks--,u.ttlTicks<=0&&this.motes.splice(c,1))}for(const c of this.charms)!c.available&&c.respawnTicks>0&&(c.respawnTicks--,c.respawnTicks<=0&&(c.available=!0,c.respawnTicks=0));if(this.windEnabled){this.wind.ticksLeft>0&&(this.wind.ticksLeft--,this.wind.ticksLeft<=0&&(this.wind.active=!1,this.wind.dir_deg=0));const c=this.sim_tick%1800;c===1680?(this.wind.warning=!0,this.wind.nextDirDeg=me(this.rng.range(0,360))):this.sim_tick>=1800&&c===0&&(this.wind.warning=!1,this.wind.active=!0,this.wind.dir_deg=this.wind.nextDirDeg||me(this.rng.range(0,360)),this.wind.ticksLeft=300)}if(this.player.respawnWaitTicks>0)this.player.respawnWaitTicks--,this.player.respawnWaitTicks===0&&this.player.flames>0&&(this.player.pos=[0,0,0],this.player.vel=[0,0,0],this.player.grounded=!0,this.player.invulnTicks=Math.round(this.tuning.invuln_s*fe),this.player.dashTicksLeft=0,this.player.padLaunchActive=!1);else{let[c,u]=this.currInput.move;const g=Math.hypot(c,u);g>1&&(c/=g,u/=g);const _=this.currInput.cam_yaw_deg*Math.PI/180,p=c*Math.cos(_)+u*Math.sin(_),d=-c*Math.sin(_)+u*Math.cos(_),S=Math.hypot(p,d);S>1e-4&&(this.player.facingDir=[p/S,d/S],this.player.facingYaw=Math.atan2(p,d));const y=Math.round((this.tuning.dash_duration_s||.2)*fe),v=Math.round((this.tuning.dash_cooldown_s||1.5)*fe);h&&this.player.dashTicksLeft===0&&(this.player.dashCdTicks===0||this.player.charmTicks>0)&&(this.player.dashTicksLeft=y,this.player.dashCdTicks=this.player.charmTicks>0?0:v,this.player.dashDir=[...this.player.facingDir],this.player.padLaunchActive=!1,s("dash",{}));for(const x of this.nightConfig.jumpPads)if(!this.player.padLaunchActive&&jt(this.player.pos,x.pos)<=x.radius+Bt&&Math.abs(this.player.pos[1]-x.pos[1])<=.25){let R=0,B=-1;if(Array.isArray(x.dir)){const F=Math.hypot(x.dir[0],x.dir[1])||1;R=x.dir[0]/F,B=x.dir[1]/F}else if(Array.isArray(x.target)){const F=x.target[0]-x.pos[0],H=x.target[2]-x.pos[2],X=Math.hypot(F,H)||1;R=F/X,B=H/X}this.player.padVel=[R*x.vh,B*x.vh],this.player.vel[0]=this.player.padVel[0],this.player.vel[2]=this.player.padVel[1],this.player.vel[1]=x.vy,this.player.grounded=!1,this.player.padLaunchActive=!0,this.player.dashTicksLeft=0;break}o&&this.player.grounded&&this.player.dashTicksLeft===0&&(this.player.vel[1]=kg,this.player.grounded=!1);const P=this.player.dashTicksLeft>0;if(P){const x=this.tuning.dash_speed||14;this.player.vel[0]=this.player.dashDir[0]*x,this.player.vel[2]=this.player.dashDir[1]*x,this.player.vel[1]=0,this.player.dashTicksLeft--}else if(this.player.padLaunchActive)this.player.vel[0]=this.player.padVel[0],this.player.vel[2]=this.player.padVel[1];else{const x=this.player.charmTicks>0?this.tuning.player_speed*1.2:this.tuning.player_speed;if(this.player.vel[0]=p*x,this.player.vel[2]=d*x,this.wind.active){const R=this.wind.dir_deg*Math.PI/180;this.player.vel[0]+=2*Math.cos(R),this.player.vel[2]+=2*Math.sin(R)}}const A=this.player.pos[0]+this.player.vel[0]*Me,w=this.player.pos[2]+this.player.vel[2]*Me,L=this.resolveHorizontalMove(this.player.pos[0],this.player.pos[2],this.player.pos[1],A,w);this.player.pos[0]=L.x,this.player.pos[2]=L.z;const T=this.getTerrainInfo(this.player.pos[0],this.player.pos[2]);if(P)T.onIsland&&Math.abs(this.player.pos[1]-T.y)<=.05?(this.player.pos[1]=T.y,this.player.grounded=!0):this.player.grounded=!1;else if(this.player.grounded&&(T.onIsland&&Math.abs(this.player.pos[1]-T.y)<=.55?(this.player.pos[1]=T.y,this.player.vel[1]=0,this.player.grounded=!0):this.player.grounded=!1),!this.player.grounded){const x=this.player.pos[1];this.player.pos[1]+=this.player.vel[1]*Me,this.player.vel[1]-=Bg*Me,T.onIsland&&this.player.vel[1]<=0&&x>=T.y-.25&&this.player.pos[1]<=T.y+Bt&&(this.player.pos[1]=T.y,this.player.vel[1]=0,this.player.grounded=!0,this.player.padLaunchActive=!1)}for(const x of this.nightConfig.jumpPads)if(!this.player.padLaunchActive&&jt(this.player.pos,x.pos)<=x.radius+Bt&&Math.abs(this.player.pos[1]-x.pos[1])<=.25){let R=0,B=-1;if(Array.isArray(x.dir)){const F=Math.hypot(x.dir[0],x.dir[1])||1;R=x.dir[0]/F,B=x.dir[1]/F}else if(Array.isArray(x.target)){const F=x.target[0]-x.pos[0],H=x.target[2]-x.pos[2],X=Math.hypot(F,H)||1;R=F/X,B=H/X}this.player.padVel=[R*x.vh,B*x.vh],this.player.vel[0]=this.player.padVel[0],this.player.vel[2]=this.player.padVel[1],this.player.vel[1]=x.vy,this.player.grounded=!1,this.player.padLaunchActive=!0,this.player.dashTicksLeft=0;break}if(this.tuning.fall_enabled&&this.player.pos[1]<-10){const x=this.player.carried;this.player.flames=Math.max(0,this.player.flames-1),this.player.carried=0,this.player.vel=[0,0,0],this.player.dashTicksLeft=0,this.player.padLaunchActive=!1,s("player_hit",{by:"fall",flames:this.player.flames,dropped:0,lost:x}),this.player.flames>0&&(this.player.respawnWaitTicks=60)}}const f=this.player.respawnWaitTicks===0&&this.player.flames>0;if(f){this.updatePlayerCapacity();for(let c=0;c<this.motes.length&&!(this.player.carried>=this.player.capacity);){const u=this.motes[c];u.bornTick<this.sim_tick&&jt(this.player.pos,u.pos)<=this.tuning.pickup_radius+Bt&&Math.abs(this.player.pos[1]-u.pos[1])<=1.5+Bt?(this.motes.splice(c,1),this.player.carried+=1,s("mote_picked",{carried:this.player.carried})):c++}for(const c of this.charms)c.available&&jt(this.player.pos,c.pos)<=this.tuning.pickup_radius+Bt&&Math.abs(this.player.pos[1]-c.pos[1])<=1.5+Bt&&(c.available=!1,c.respawnTicks=2700,this.player.charmTicks=600,this.player.dashCdTicks=0,s("charm_picked",{charm_id:c.id,charm_ticks:600}))}if(f&&a&&this.player.carried>0){const c=[];for(const u of this.lanterns){if(!(!u.lit||u.fuelUnits<this.maxFuelUnits))continue;const _=jt(this.player.pos,u.pos);_<=this.tuning.interact_radius+Bt&&c.push({lantern:u,d:_})}if(c.sort((u,g)=>Math.abs(u.d-g.d)>1e-6?u.d-g.d:sn(u.lantern.id)-sn(g.lantern.id)),c.length>0){const u=c[0].lantern,g=this.tuning.score.per_mote??5;if(u.lit){const _=this.maxFuelUnits-u.fuelUnits,p=Math.ceil(_/this.fuelPerMoteUnits),d=Math.min(this.player.carried,p);if(d>0){const S=u.fuelUnits<this.lowFuelThresholdUnits;if(this.player.carried-=d,u.fuelUnits=Math.min(this.maxFuelUnits,u.fuelUnits+d*this.fuelPerMoteUnits),this.score+=d*g,s("refuel",{lantern_id:u.id,amount:d,fuel:to(u.fuelUnits/fe)}),S&&u.fuelUnits>=this.lowFuelThresholdUnits)for(const y of this.shades)y.state==="drain"&&y.targetLanternId===u.id&&(y.state="wander",y.drainTicks=0),jt(y.pos,u.pos)<this.tuning.safe_radius&&(y.expelLanternId=u.id,y.expelTicksLeft=30)}}else{const _=u.ever_lit?this.tuning.relight_cost||5:this.tuning.lantern_cost||10,p=Math.max(0,_-u.deposited),d=Math.min(this.player.carried,p);if(d>0&&(this.player.carried-=d,u.deposited+=d,this.score+=d*g,s("deposit",{lantern_id:u.id,amount:d,deposited:u.deposited}),u.deposited>=_&&!u.lit)){const S=!!u.ever_lit;u.lit=!0,u.fuelUnits=this.maxFuelUnits,u.ever_lit=!0,S?(u.relit_count=(u.relit_count||0)+1,this.score+=40):this.score+=this.tuning.score.per_lantern||100,this.player.successfulLights+=1,this.updatePlayerCapacity(),s("lantern_lit",{lantern_id:u.id,relight:S});for(const y of this.shades)y.state==="drain"&&y.targetLanternId===u.id&&(y.state="wander",y.drainTicks=0),jt(y.pos,u.pos)<this.tuning.safe_radius&&(y.expelLanternId=u.id,y.expelTicksLeft=30)}}}}for(const c of this.shades){if(c.expelLanternId){const u=this.lanterns.find(g=>g.id===c.expelLanternId);if(u&&this.hasSafeZone(u)){const g=c.pos[0]-u.pos[0],_=c.pos[2]-u.pos[2],p=Math.hypot(g,_);if(p>=this.tuning.safe_radius-Bt||c.expelTicksLeft<=1)p>1e-6?(c.pos[0]=u.pos[0]+g/p*this.tuning.safe_radius,c.pos[2]=u.pos[2]+_/p*this.tuning.safe_radius):(c.pos[0]=u.pos[0]+this.tuning.safe_radius,c.pos[2]=u.pos[2]),c.expelLanternId=null,c.expelTicksLeft=0;else{const d=(this.tuning.safe_radius-p)/c.expelTicksLeft,S=p>1e-6?g/p:1,y=p>1e-6?_/p:0;c.pos[0]+=S*d,c.pos[2]+=y*d,c.expelTicksLeft--}}else c.expelLanternId=null,c.expelTicksLeft=0}this.clampShadeOutsideSafeZones(c)}if(f&&l&&this.player.carried>=this.tuning.pulse_cost&&this.player.pulseCdTicks===0){this.player.carried-=this.tuning.pulse_cost,this.player.pulseCdTicks=Math.round(this.tuning.pulse_cooldown_s*fe);const c=[],u=Math.round(this.tuning.pulse_stun_s*fe);for(const g of this.shades){if(g.bornTick>=this.sim_tick)continue;const _=g.pos[0]-this.player.pos[0],p=g.pos[2]-this.player.pos[2],d=Math.min(Math.abs(this.player.pos[1]+.8-g.pos[1]),Math.abs(this.player.pos[1]-g.pos[1]));if(Math.hypot(_,d,p)<=this.tuning.pulse_radius+Bt){const y=g.state==="drain";g.state="stunned",g.drainTicks=0,g.stateTicksLeft=u,g.pushTicksLeft=15;const v=Math.hypot(_,p);v>1e-6?g.pushDir=[_/v,p/v]:g.pushDir=[1,0],c.push(g.id),this.score+=y?15:this.tuning.score.per_stun||5}}for(const g of this.drifters){if(g.bornTick>=this.sim_tick||g.state==="removed")continue;const _=g.pos[0]-this.player.pos[0],p=g.pos[2]-this.player.pos[2],d=Math.min(Math.abs(this.player.pos[1]+.8-g.pos[1]),Math.abs(this.player.pos[1]-g.pos[1]));if(Math.hypot(_,d,p)<=this.tuning.pulse_radius+Bt){if(g.state==="chase")g.state="flee",g.stateTicksLeft=240;else if(g.state==="flee"&&g.stolen>0){const S=g.stolen;g.stolen=0,g.stateTicksLeft=120;for(let y=0;y<S;y++){const v=y*Math.PI*2/S,P=S>1?.5:0,A=me(g.pos[0]+Math.cos(v)*P),w=me(g.pos[2]+Math.sin(v)*P),L=this.getTerrainInfo(A,w),T=L.onIsland?me(L.y):me(g.pos[1]);this.motes.push({id:`M${this.nextMoteSeq++}`,pos:[A,T,w],kind:"dropped",ttlTicks:480,bornTick:this.sim_tick})}s("drifter_drop",{drifter_id:g.id,amount:S})}}}s("pulse",{stunned_ids:c})}const m=this.night===3?4.5:this.tuning.shade_speed;for(const c of this.shades)if(!(c.bornTick>=this.sim_tick))if(c.state==="spawning")c.stateTicksLeft--,c.stateTicksLeft<=0&&(c.state="wander");else if(c.state==="stunned"){if(c.pushTicksLeft>0){const u=(this.tuning.pulse_push_m||4)/15,g=c.pos[0]+c.pushDir[0]*u,_=c.pos[2]+c.pushDir[1]*u,p=this.resolveHorizontalMove(c.pos[0],c.pos[2],c.pos[1],g,_);c.pos[0]=p.x,c.pos[2]=p.z,p.hitObstacle?c.pushTicksLeft=0:c.pushTicksLeft--,this.clampShadeOutsideSafeZones(c)}c.stateTicksLeft--,c.stateTicksLeft<=0&&(c.state="wander")}else if(c.state==="recoil"){const u=.03333333333333333,g=c.pos[0]+c.recoilDir[0]*u,_=c.pos[2]+c.recoilDir[1]*u,p=this.resolveHorizontalMove(c.pos[0],c.pos[2],c.pos[1],g,_);c.pos[0]=p.x,c.pos[2]=p.z,this.clampShadeOutsideSafeZones(c),c.stateTicksLeft--,c.stateTicksLeft<=0&&(c.state=jt(this.player.pos,c.pos)<=12+Bt?"chase":"wander")}else if(c.state==="drain"){const u=c.targetLanternId?this.lanterns.find(_=>_.id===c.targetLanternId):null,g=jt(this.player.pos,c.pos);if(g<=6+Bt){if(c.state="chase",c.drainTicks=0,g>1e-6){const _=Math.min(g,m*Me),p=c.pos[0]+(this.player.pos[0]-c.pos[0])/g*_,d=c.pos[2]+(this.player.pos[2]-c.pos[2])/g*_,S=this.resolveHorizontalMove(c.pos[0],c.pos[2],c.pos[1],p,d);c.pos[0]=S.x,c.pos[2]=S.z}this.clampShadeOutsideSafeZones(c)}else(!u||!u.lit||u.fuelUnits>=this.lowFuelThresholdUnits||jt(c.pos,u.pos)>2+Bt)&&(c.state="wander",c.drainTicks=0)}else if(c.state==="chase"){const u=jt(this.player.pos,c.pos);if(u>18+Bt)c.state="wander";else{if(u>1e-6){const g=Math.min(u,m*Me),_=c.pos[0]+(this.player.pos[0]-c.pos[0])/u*g,p=c.pos[2]+(this.player.pos[2]-c.pos[2])/u*g,d=this.resolveHorizontalMove(c.pos[0],c.pos[2],c.pos[1],_,p);c.pos[0]=d.x,c.pos[2]=d.z}this.clampShadeOutsideSafeZones(c)}}else{const u=jt(this.player.pos,c.pos),g=this.findNearestWeakLantern(c.pos);if(g)if(u<=6+Bt){c.state="chase";const _=Math.min(u,m*Me);u>1e-6&&(c.pos[0]+=(this.player.pos[0]-c.pos[0])/u*_,c.pos[2]+=(this.player.pos[2]-c.pos[2])/u*_),this.clampShadeOutsideSafeZones(c)}else{c.targetLanternId=g.id;const _=jt(c.pos,g.pos);if(_<=2+Bt)c.state="drain",c.drainTicks=0;else{const p=Math.min(_-1.9,m*Me),d=c.pos[0]+(g.pos[0]-c.pos[0])/_*p,S=c.pos[2]+(g.pos[2]-c.pos[2])/_*p,y=this.resolveHorizontalMove(c.pos[0],c.pos[2],c.pos[1],d,S);c.pos[0]=y.x,c.pos[2]=y.z,this.clampShadeOutsideSafeZones(c),jt(c.pos,g.pos)<=2+Bt&&(c.state="drain",c.drainTicks=0)}}else if(u<=12+Bt){if(c.state="chase",u>1e-6){const _=Math.min(u,m*Me),p=c.pos[0]+(this.player.pos[0]-c.pos[0])/u*_,d=c.pos[2]+(this.player.pos[2]-c.pos[2])/u*_,S=this.resolveHorizontalMove(c.pos[0],c.pos[2],c.pos[1],p,d);c.pos[0]=S.x,c.pos[2]=S.z}this.clampShadeOutsideSafeZones(c)}else{const _=this.findNearestUnlitLantern(c.pos);if(_){c.targetLanternId=_.id;const p=jt(c.pos,_.pos);if(p>2+Bt){const d=Math.min(p-2,m*.5*Me),S=c.pos[0]+(_.pos[0]-c.pos[0])/p*d,y=c.pos[2]+(_.pos[2]-c.pos[2])/p*d,v=this.resolveHorizontalMove(c.pos[0],c.pos[2],c.pos[1],S,y);c.pos[0]=v.x,c.pos[2]=v.z}}this.clampShadeOutsideSafeZones(c)}}for(let c=this.drifters.length-1;c>=0;c--){const u=this.drifters[c];if(!(u.bornTick>=this.sim_tick))if(u.state==="flee"){const g=u.pos[0]-this.player.pos[0],_=u.pos[2]-this.player.pos[2],p=Math.hypot(g,_),d=p>1e-6?g/p:1,S=p>1e-6?_/p:0;u.pos[0]+=d*7*Me,u.pos[2]+=S*7*Me,u.stateTicksLeft--,u.stateTicksLeft<=0&&(u.state="removed",this.drifters.splice(c,1))}else if(u.state==="removed")this.drifters.splice(c,1);else{const g=jt(this.player.pos,u.pos);if(!u.hasStolenOnce&&this.player.carried>=5&&g<=15+Bt?u.state="chase":u.state="idle",u.state==="chase"){if(g>1e-6){const _=Math.min(g,7*Me);u.pos[0]+=(this.player.pos[0]-u.pos[0])/g*_,u.pos[2]+=(this.player.pos[2]-u.pos[2])/g*_}}else u.wanderAngle=(u.wanderAngle||0)+.025,u.pos[0]+=Math.cos(u.wanderAngle)*2*Me,u.pos[2]+=Math.sin(u.wanderAngle)*2*Me}}if(f){this.drifters.length>1&&this.drifters.sort((u,g)=>sn(u.id)-sn(g.id));for(let u=0;u<this.drifters.length;u++){const g=this.drifters[u];if(!(g.bornTick>=this.sim_tick)&&!(g.state!=="chase"||g.hasStolenOnce)&&jt(this.player.pos,g.pos)<=1.2+Bt){const _=Math.min(3,this.player.carried);this.player.carried-=_,g.stolen=_,g.hasStolenOnce=!0,g.state="flee",g.stateTicksLeft=240,s("drifter_steal",{drifter_id:g.id,amount:_,carried:this.player.carried})}}const c=this.isPlayerInLitSafeZone();this.shades.length>1&&this.shades.sort((u,g)=>sn(u.id)-sn(g.id));for(let u=0;u<this.shades.length;u++){const g=this.shades[u];if(!(g.bornTick>=this.sim_tick)&&!(g.state==="stunned"||g.state==="spawning"||g.state==="recoil"||g.expelLanternId)&&!c&&jt(this.player.pos,g.pos)<=this.tuning.shade_hit_radius+Bt&&Math.abs(this.player.pos[1]-g.pos[1])<=1.5+Bt){if(this.player.invulnTicks>0)continue;this.player.flames=Math.max(0,this.player.flames-1);const _=Math.floor(this.player.carried*(this.tuning.hit_drop_ratio??.5));this.player.carried=Math.max(0,this.player.carried-_),this.player.invulnTicks=Math.round(this.tuning.invuln_s*fe);for(let y=0;y<_;y++){const v=y*Math.PI*2/_+this.rng.range(0,.35),P=this.rng.range(1.5,2.5),A=me(this.player.pos[0]+Math.cos(v)*P),w=me(this.player.pos[2]+Math.sin(v)*P),L=this.getTerrainInfo(A,w),T=L.onIsland?me(L.y):me(this.player.pos[1]);this.motes.push({id:`M${this.nextMoteSeq++}`,pos:[A,T,w],kind:"dropped",ttlTicks:480,bornTick:this.sim_tick})}const p=g.pos[0]-this.player.pos[0],d=g.pos[2]-this.player.pos[2],S=Math.hypot(p,d);g.recoilDir=S>1e-6?[p/S,d/S]:[1,0],g.state="recoil",g.drainTicks=0,g.stateTicksLeft=60,s("player_hit",{by:"shade",flames:this.player.flames,dropped:_});break}}}if(this.randomMotes&&this.sim_tick%240===0&&this.motes.length<30){const c=this.nightConfig.moteSpawnPoints.filter(u=>!this.motes.some(g=>jt(g.pos,u)<=.5&&Math.abs(g.pos[1]-u[1])<=.5));if(c.length>0){const u=c[this.rng.int(0,c.length-1)];this.motes.push({id:`M${this.nextMoteSeq++}`,pos:[...u],kind:"random",ttlTicks:null,bornTick:this.sim_tick})}}if(this.randomShades&&this.sim_tick>=this.nightConfig.shadeFirstSpawnTick&&(this.sim_tick-this.nightConfig.shadeFirstSpawnTick)%this.nightConfig.shadeIntervalTicks===0){const c=this.sim_tick===this.nightConfig.shadeFirstSpawnTick?2:1;for(let u=0;u<c&&!(this.shades.length>=this.nightConfig.maxShades);u++){const g=this.nightConfig.shadeSpawnPoints.filter(_=>{if(jt(_,this.player.pos)<15)return!1;for(const p of this.lanterns)if(this.hasSafeZone(p)&&jt(_,p.pos)<this.tuning.safe_radius)return!1;for(const p of this.shades)if(jt(_,p.pos)<1)return!1;return!0});if(g.length>0){const _=g[this.rng.int(0,g.length-1)],p={id:`S${this.nextShadeSeq++}`,pos:[..._],state:"spawning",stateTicksLeft:15,pushTicksLeft:0,pushDir:[1,0],recoilDir:[1,0],targetLanternId:null,drainTicks:0,expelLanternId:null,expelTicksLeft:0,bornTick:this.sim_tick};this.shades.push(p),s("shade_spawned",{id:p.id})}}}if(this.randomDrifters&&this.sim_tick>=1200&&this.sim_tick%1200===0&&this.drifters.length<2){const c=this.nightConfig.shadeSpawnPoints;if(c.length>0){const u=c[this.rng.int(0,c.length-1)];this.drifters.push({id:`D${this.nextDrifterSeq++}`,pos:[...u],state:"idle",stolen:0,stateTicksLeft:0,hasStolenOnce:!1,wanderAngle:this.rng.range(0,Math.PI*2),bornTick:this.sim_tick})}}if(this.player.flames<=0)this.state="lost",s("game_over",{result:"lost",reason:"no_flames"});else if(this.time_left_s<=Bt){this.time_left_s=0;const c=this.tuning.win_ratio??.6,u=Math.ceil(c*this.lanterns.length),g=this.lanterns.filter(_=>_.lit);if(g.length>=u){this.state="won";let _=0;for(const p of g)_+=50+Math.floor(p.fuelUnits/fe);_+=this.player.flames*(this.tuning.score.per_flame_left||50),this.score+=_,s("game_over",{result:"won",reason:"dawn_survived"})}else this.state="lost",s("game_over",{result:"lost",reason:"dawn"})}return n}getSnapshot(){return this.updatePlayerCapacity(),{type:"snapshot",tick:this.tick,sim_tick:this.sim_tick,night:this.night,state:this.state,time_left_s:me(this.time_left_s),score:this.score,wind:{active:!!this.wind.active,dir_deg:me(this.wind.active?this.wind.dir_deg:0)},player:{pos:Jn(this.player.pos),vel:Jn(this.player.vel),flames:this.player.flames,carried:this.player.carried,capacity:this.player.capacity,grounded:!!this.player.grounded,invuln:this.player.invulnTicks>0,dash_cd_s:me(this.player.dashCdTicks/fe),pulse_cd_s:me(this.player.pulseCdTicks/fe),charm_s:me(this.player.charmTicks/fe)},lanterns:this.lanterns.map(t=>({id:t.id,pos:Jn(t.pos),lit:t.lit,deposited:t.deposited,fuel:t.lit?to(t.fuelUnits/fe):0,ever_lit:!!t.ever_lit,relit_count:t.relit_count||0})),shades:this.shades.map(t=>({id:t.id,pos:Jn(t.pos),state:t.state})),motes_active:this.motes.length,motes:this.motes.map(t=>({id:t.id,pos:Jn(t.pos),kind:t.kind,ttl_s:t.kind==="dropped"&&t.ttlTicks!==null?me(t.ttlTicks/fe):null})),drifters:this.drifters.map(t=>({id:t.id,pos:Jn(t.pos),state:t.state,stolen:t.stolen})),charms:this.charms.map(t=>({id:t.id,pos:Jn(t.pos),available:t.available,respawn_s:me(t.respawnTicks/fe)}))}}getEndRecord(){return{type:"end",ticks:this.tick,state:this.state,score:this.score}}}const Hg=/^[A-Za-z0-9_\p{L}]{3,12}$/u;function Ic(i){return typeof i!="string"?!1:Hg.test(i.trim())}function Dc(i=new Date){const t=-i.getTimezoneOffset(),e=t>=0?"+":"-",n=Math.abs(t),s=String(Math.floor(n/60)).padStart(2,"0"),r=String(n%60).padStart(2,"0"),o=u=>String(u).padStart(2,"0"),a=i.getFullYear(),l=o(i.getMonth()+1),h=o(i.getDate()),f=o(i.getHours()),m=o(i.getMinutes()),c=o(i.getSeconds());return`${a}-${l}-${h}T${f}:${m}:${c}${e}${s}:${r}`}function Yo(i=[]){const t=i.filter(e=>e&&typeof e.name=="string"&&typeof e.score=="number"&&typeof e.nights_won=="number"&&typeof e.achieved_at=="string").map((e,n)=>({entry:{name:e.name.trim(),score:Math.round(e.score),nights_won:Math.max(0,Math.min(3,Math.round(e.nights_won))),achieved_at:e.achieved_at,seed:Number(e.seed)||1},idx:n,ts:Date.parse(e.achieved_at)||n}));return t.sort((e,n)=>n.entry.score!==e.entry.score?n.entry.score-e.entry.score:e.ts!==n.ts?e.ts-n.ts:e.idx-n.idx),t.slice(0,10).map(e=>e.entry)}function Vg(i,t){const e=String(t.name||"").trim();if(!Ic(e))throw new Error("Tên người chơi phải từ 3–12 ký tự (chữ cái, số hoặc dấu gạch dưới _)");const n={name:e,score:Math.max(0,Math.round(Number(t.score)||0)),nights_won:Math.max(0,Math.min(3,Math.round(Number(t.nights_won)||0))),achieved_at:t.achieved_at||Dc(new Date),seed:Number(t.seed)||1};return Yo([...i||[],n])}class Gg{constructor(){this.ctx=null,this.volume=.7,this.bgmTimer=null,this.bgmNoteIdx=0}init(){if(!this.ctx&&typeof window<"u"){const t=window.AudioContext||window.webkitAudioContext;t&&(this.ctx=new t)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(t){this.volume=Math.max(0,Math.min(1,Number(t)))}playTone(t,e=.25,n="sine",s=.14,r=0){if(this.volume<=.001||(this.init(),!this.ctx))return;const o=Math.max(5e-4,s*this.volume),a=this.ctx.currentTime+r,l=this.ctx.createOscillator(),h=this.ctx.createGain();l.type=n,l.frequency.setValueAtTime(t,a),h.gain.setValueAtTime(5e-4,a),h.gain.exponentialRampToValueAtTime(o,a+.018),h.gain.exponentialRampToValueAtTime(1e-4,a+e),l.connect(h),h.connect(this.ctx.destination),l.start(a),l.stop(a+e+.02)}startAmbientMusic(){if(this.bgmTimer)return;const t=[261.63,293.66,329.63,392,440,392,329.63,293.66];this.bgmTimer=setInterval(()=>{if(this.volume>.01&&this.ctx&&this.ctx.state==="running"){const e=t[this.bgmNoteIdx%t.length];this.bgmNoteIdx++,this.playTone(e,1.4,"sine",.028,0)}},1500)}playPickup(t=1){const e=[523.25,587.33,659.25,783.99,880,1046.5],n=e[(t-1)%e.length];this.playTone(n,.2,"sine",.14,0),this.playTone(n*1.5,.15,"triangle",.06,.03)}playCharmPickup(){this.playTone(587.33,.2,"triangle",.16,0),this.playTone(880,.25,"triangle",.16,.06),this.playTone(1174.66,.35,"sine",.14,.12)}playDeposit(){this.playTone(440,.16,"triangle",.13,0),this.playTone(587.33,.22,"sine",.13,.06)}playLanternLit(){[523.25,659.25,783.99,1046.5].forEach((e,n)=>{this.playTone(e,.7,"triangle",.15,n*.08)})}playPulse(){this.playTone(329.63,.32,"sine",.18,0),this.playTone(659.25,.42,"triangle",.16,.05)}playJump(){this.playTone(300,.12,"sine",.11,0),this.playTone(460,.15,"sine",.1,.04)}playDash(){this.playTone(620,.1,"triangle",.14,0),this.playTone(420,.14,"sine",.12,.04)}playHit(){this.playTone(130.81,.32,"sawtooth",.18,0),this.playTone(98,.38,"sawtooth",.18,.08)}playShadeSpawn(){this.playTone(146.83,.4,"triangle",.11,0),this.playTone(138.59,.45,"sine",.1,.12)}playCountdownTick(){this.playTone(880,.09,"square",.1,0)}playWindWarning(){this.playTone(220,.5,"sine",.09,0),this.playTone(246.94,.5,"sine",.09,.25)}playChimeGuide(){this.playTone(783.99,.3,"sine",.11,0),this.playTone(1046.5,.4,"sine",.1,.1)}playWin(){[523.25,659.25,783.99,1046.5,1318.5].forEach((e,n)=>this.playTone(e,.6,"triangle",.16,n*.1))}playLose(){[392,349.23,311.13,261.63].forEach((e,n)=>this.playTone(e,.5,"sine",.15,n*.14))}}const Uc="dao_den_long_settings_v13",$o="dao_den_long_leaderboard_v13",be=new Gg,Ea={moveUp:"KeyW",moveDown:"KeyS",moveLeft:"KeyA",moveRight:"KeyD",jump:"Space",dash:"ShiftLeft",interact:"KeyE",pulse:"KeyF",pause:"KeyP"},Zo={moveUp:"Tiến lên",moveDown:"Lùi lại",moveLeft:"Sang trái",moveRight:"Sang phải",jump:"Nhảy",dash:"Lướt (Dash)",interact:"Tương tác / Đèn",pulse:"Tỏa sáng (Pulse)",pause:"Tạm dừng"};function Ue(i){return i?i.replace(/^Key/,"").replace(/^Digit/,"").replace("ShiftLeft","L-Shift").replace("ShiftRight","R-Shift").replace("ArrowUp","↑").replace("ArrowDown","↓").replace("ArrowLeft","←").replace("ArrowRight","→"):"?"}let Gt={volume:.7,mouseSens:.35,colorblind:!1,reducedMotion:!1,largeText:!1,keybinds:{...Ea}};try{const i=localStorage.getItem(Uc);if(i){const t=JSON.parse(i);typeof t.volume=="number"&&(Gt.volume=t.volume),typeof t.mouseSens=="number"&&(Gt.mouseSens=t.mouseSens),typeof t.colorblind=="boolean"&&(Gt.colorblind=t.colorblind),typeof t.reducedMotion=="boolean"&&(Gt.reducedMotion=t.reducedMotion),typeof t.largeText=="boolean"&&(Gt.largeText=t.largeText),t.keybinds&&typeof t.keybinds=="object"&&(Gt.keybinds={...Ea,...t.keybinds})}}catch{}function Ta(){try{localStorage.setItem(Uc,JSON.stringify(Gt))}catch{}}function gr(){document.body.classList.toggle("colorblind",!!Gt.colorblind),document.body.classList.toggle("reduced-motion",!!Gt.reducedMotion),document.body.classList.toggle("large-text",!!Gt.largeText);const i=Gt.keybinds;document.getElementById("pill-move").textContent=`${Ue(i.moveUp)}${Ue(i.moveLeft)}${Ue(i.moveDown)}${Ue(i.moveRight)}`,document.getElementById("pill-jump").textContent=Ue(i.jump),document.getElementById("pill-dash").textContent=Ue(i.dash),document.getElementById("pill-interact").textContent=Ue(i.interact),document.getElementById("pill-pulse").textContent=Ue(i.pulse),document.getElementById("pill-pause").textContent=`Esc/${Ue(i.pause)}`,document.getElementById("cd-dash-key").textContent=Ue(i.dash).toUpperCase(),document.getElementById("cd-pulse-key").textContent=Ue(i.pulse).toUpperCase()}be.setVolume(Gt.volume);gr();const Wg=document.getElementById("hud-mote-slots"),er=[];for(let i=0;i<20;i++){const t=document.createElement("div");t.className="mote-slot",i>=10&&(t.style.display="none"),Wg.appendChild(t),er.push(t)}const Xg=document.getElementById("game-canvas"),qi=new $m({canvas:Xg,antialias:!0});qi.setSize(window.innerWidth,window.innerHeight);qi.setPixelRatio(Math.min(window.devicePixelRatio,2));qi.shadowMap.enabled=!0;qi.shadowMap.type=Wl;const de=new Zm;de.background=new $t(Pt.nightSky);de.fog=new ma(Pt.fog,.014);const si=new We(55,window.innerWidth/window.innerHeight,.1,260),Nc=new Ig(16777215,.15);de.add(Nc);const qg=new Cg(4939158,Pt.nightSky,.35);de.add(qg);const _r=new Pg(11188440,.45);_r.position.set(-30,55,-25);_r.castShadow=!0;_r.shadow.mapSize.set(1024,1024);de.add(_r);const ve=new we;de.add(ve);const wi=new we;de.add(wi);let Ai=null;function Fc(i,t=!1){for(;ve.children.length>0;)ve.remove(ve.children[0]);Ai=null;const e=new xe({color:Pt.grass,roughness:.85}),n=new xe({color:Pt.sand,roughness:.9}),s=new xe({color:Pt.wood,roughness:.85}),r=new xe({color:Pt.cloudSea,roughness:1,transparent:!0,opacity:.78}),o=new St(new ys(320,320),r);o.rotation.x=-Math.PI/2,o.position.set(25,-10,0),ve.add(o);for(let l=0;l<32;l++){const h=l/32*Math.PI*2,f=54+l%4*12,m=i===2?35+Math.cos(h)*(f+25):Math.cos(h)*f,c=Math.sin(h)*f,u=new St(new hn(8+l%3*3,12,10),r);u.position.set(m,-7.5,c),u.scale.y=.4,ve.add(u)}if(i===1){const l=new St(new re(40.4,34,6.2,48),n);l.position.y=-3.15,ve.add(l);const h=new St(new re(39.6,39.6,.4,48),e);h.position.y=-.2,h.receiveShadow=!0,ve.add(h)}else if(i===2){for(const h of[0,70]){const f=new St(new re(28.3,23,6.2,40),n);f.position.set(h,-3.15,0),ve.add(f);const m=new St(new re(27.7,27.7,.4,40),e);m.position.set(h,-.2,0),m.receiveShadow=!0,ve.add(m)}const l=new St(new qe(18,.35,4),s);l.position.set(35,-.175,0),l.receiveShadow=!0,ve.add(l)}else if(i===3){const l=new St(new re(45.3,38,6.2,56),n);l.position.y=-3.15,ve.add(l);const h=new St(new re(44.8,44.8,.4,56),e);h.position.y=-.2,h.receiveShadow=!0,ve.add(h);const f=new wc;f.absarc(0,0,24,0,Math.PI,!1),f.lineTo(-12,0),f.absarc(0,0,12,Math.PI,0,!0),f.closePath();const m=new xa(f,{depth:3,bevelEnabled:!1,curveSegments:32});m.rotateX(Math.PI/2);const c=new St(m,e);c.position.y=3,c.receiveShadow=!0,ve.add(c);const u=Math.hypot(6,3),g=Math.atan2(3,6);for(const v of[30,150]){const P=v*Math.PI/180,A=27,w=new St(new qe(u,.3,3),s);w.position.set(Math.cos(P)*A,1.5-.15,Math.sin(P)*A),w.rotation.y=-P,w.rotation.z=-g,w.receiveShadow=!0,ve.add(w)}const _=new St(new re(8,8,6,36),n);_.position.y=3,_.receiveShadow=!0,ve.add(_);const p=new St(new re(8,8,.2,36),e);p.position.y=5.95,p.receiveShadow=!0,ve.add(p);const d=new St(new re(1.9,2,8,24),s);d.position.y=10,d.castShadow=!0,ve.add(d);const S=new St(new Xi(2.8,2.2,16),new xe({color:Pt.mayScarfAndCharm,roughness:.7}));S.position.y=15,ve.add(S);const y=new St(new re(.45,.75,1.1,16),new xe({color:Pt.goldBorderAndScore,metalness:.7,roughness:.3}));y.position.set(0,12.6,2.1),ve.add(y)}const a=zi[i];for(const l of a.jumpPads){const h=new we;h.position.set(l.pos[0],l.pos[1],l.pos[2]);const f=new St(new re(1,1.15,.22,24),new xe({color:Pt.wood}));f.position.y=.11,h.add(f);const m=new St(new re(.85,.85,.26,24),new Ae({color:Pt.goldBorderAndScore}));m.position.y=.12,h.add(m),ve.add(h)}if(!t){const l=new we,h=new St(new hn(1,16,12,0,Math.PI*2,0,Math.PI*.55),new xe({color:Pt.grass,roughness:.65}));h.scale.set(1.2,.85,1),l.add(h);const f=new St(new hn(.35,12,10),new xe({color:Pt.sand}));f.position.set(-1.1,.3,0),l.add(f),Ai=new St(new ya(.22,0),new Ae({color:Pt.goldBorderAndScore})),Ai.position.set(0,1.15,0),l.add(Ai),l.position.set(3.8,i===3?6:0,3.8),ve.add(l)}}function Yg(){const i=new we,t=new xe({color:16639626,roughness:.6}),e=new xe({color:Pt.mayTunic,roughness:.65}),n=new xe({color:Pt.mayScarfAndCharm,roughness:.55}),s=new xe({color:1981066,roughness:.75}),r=new we;r.position.set(-.2,.55,0);const o=new St(new re(.14,.13,.32,12),s);o.position.y=-.12;const a=new St(new re(.1,.09,.28,12),t);a.position.y=-.38;const l=new St(new qe(.22,.07,.32),new xe({color:Pt.wood}));l.position.set(0,-.52,.04),r.add(o,a,l),i.add(r);const h=r.clone();h.position.set(.2,.55,0),i.add(h);const f=new St(new re(.32,.37,.68,16),e);f.position.y=.88,f.castShadow=!0,i.add(f);const m=new St(new re(.36,.39,.18,16),n);m.position.y=1.15,i.add(m);const c=new St(new re(.38,.38,.12,16),n);c.position.y=.58,i.add(c);const u=new we;u.position.set(-.42,1.12,0);const g=new St(new re(.12,.11,.22,10),e);g.position.y=-.06;const _=new St(new re(.09,.08,.32,10),t);_.position.y=-.26,u.add(g,_),i.add(u);const p=u.clone();p.position.set(.42,1.12,0),i.add(p);const d=new St(new hn(.31,16,16),t);d.position.y=1.46,i.add(d);const S=new we;S.position.y=1.76,S.rotation.x=-.06;const y=new St(new Xi(.82,.44,28),new xe({color:Pt.sand,roughness:.6}));S.add(y);const v=new St(new re(.42,.56,.09,24,1,!0),n);v.position.y=-.06,S.add(v),i.add(S);const P=new St(new re(.016,.016,.26,6),new Ae({color:Pt.wood}));P.position.set(0,1.45,.72),i.add(P);const A=new St(new hn(.13,12,12),new Ae({color:Pt.lanternCore}));A.position.set(0,1.3,.72),i.add(A);const w=new Pc(Pt.lanternLit,2.4,16,1.5);w.position.set(0,1.4,.72),w.castShadow=!0,i.add(w);const L=new we;return L.position.y=1.1,i.add(L),{group:i,miniLantern:A,playerLight:w,orbitGroup:L,leftArm:u,rightArm:p,leftLeg:r,rightLeg:h}}const ue=Yg();de.add(ue.group);function $g(i){const t=new we;t.position.set(i.pos[0],i.pos[1],i.pos[2]);const e=new St(new re(1.05,1.3,.6,12),new xe({color:Pt.lanternOff,roughness:.85}));e.position.y=.3,t.add(e);const n=new St(new re(.22,.28,3.2,10),new xe({color:Pt.wood,roughness:.8}));n.position.y=2.1,t.add(n);const s=new xe({color:Pt.lanternOff,emissive:Pt.lanternOff,emissiveIntensity:.2,roughness:.35}),r=new St(new re(.65,.5,1.1,8),s);r.position.y=4,t.add(r);const o=new St(new qe(.95,.12,1.12),new Ae({color:922672}));o.position.y=4,o.rotation.z=.45,t.add(o);const a=new St(new Xi(1.15,.65,8),new xe({color:Pt.wood,roughness:.7}));a.position.y=4.85,t.add(a);const l=new St(new qe(1.6,.2,.1),new Ae({color:922672}));l.position.y=5.6;const h=new Ae({color:Pt.goldBorderAndScore}),f=new St(new qe(1.52,.14,.12),h);l.add(f),l.visible=!1,t.add(l);const m=new Pc(Pt.lanternLit,0,28,1.35);m.position.y=4,t.add(m);const c=new pr(an.tuning.safe_radius-.14,an.tuning.safe_radius,48);c.rotateX(-Math.PI/2);const u=new Ae({color:Pt.lanternLit,side:rn,transparent:!0,opacity:.1}),g=new St(c,u);return g.position.y=.06,t.add(g),de.add(t),{group:t,core:r,coreMat:s,tearMark:o,fuelBarBg:l,fuelBarFill:f,fuelBarFillMat:h,light:m,safeRing:g,ringMat:u}}const or=new Map,Ci=new Map,Ri=new Map,Li=new Map,ar=new Map,nr=[],as=[];function Zg(i){be.playChimeGuide();let t=null,e=1/0;for(const s of i.lanterns){if(s.lit&&s.fuelUnits>=i.lowFuelThresholdUnits)continue;const r=jt(i.player.pos,s.pos);r<e&&(e=r,t=s)}if(!t)return;for(;wi.children.length>0;)wi.remove(wi.children[0]);as.length=0;const n=18;for(let s=1;s<=n;s++){const r=s/n,o=i.player.pos[0]+(t.pos[0]-i.player.pos[0])*r,a=i.player.pos[2]+(t.pos[2]-i.player.pos[2])*r,l=i.player.pos[1]+(t.pos[1]-i.player.pos[1])*r+.6+Math.sin(r*Math.PI)*1.6,h=new St(new hn(.14,8,8),new Ae({color:Pt.goldBorderAndScore,transparent:!0,opacity:.95}));h.position.set(o,l,a),wi.add(h),as.push({mesh:h,life:3.5,baseY:l,phase:s*.4})}}function Jg(i){if(Gt.reducedMotion)return;const t=new pr(.2,.55,36);t.rotateX(-Math.PI/2);const e=new Ae({color:Pt.lanternLit,side:rn,transparent:!0,opacity:.92}),n=new St(t,e);n.position.set(i[0],i[1]+.35,i[2]),de.add(n),nr.push({mesh:n,mat:e,elapsed:0,duration:.42})}let tt=null,Xe=1,Oc=2026,ds=0,An=0,fs=0,Ze={},Jo=!1,lr=!1,Ko=!1,cr=!1,jo=-1,ir=!1,ei=null,is=0,Ke=null;function ps(i,t=3.2){is=t;const e=document.getElementById("visual-subtitles");e.textContent=i,e.style.display="block"}function Kg(){for(const i of or.values())de.remove(i.group);or.clear();for(const i of Ci.values())de.remove(i);Ci.clear();for(const i of Ri.values())de.remove(i.group);Ri.clear();for(const i of Li.values())de.remove(i.group);Li.clear();for(const i of ar.values())de.remove(i.group);ar.clear()}function Ms(){for(const i of["screen-main-menu","screen-night-intro","screen-pause","screen-settings","screen-leaderboard","screen-result"])document.getElementById(i).classList.remove("active")}function ba(i){Xe=i,Ms();const t=zi[i];document.getElementById("intro-night-title").textContent=t.name,document.getElementById("intro-elder-quote").textContent=t.elderIntro,document.getElementById("screen-night-intro").classList.add("active"),Fc(i)}function Ss(i,t=2026+i){be.startAmbientMusic(),Ms(),Kg(),Xe=i,Oc=t,jo=-1,ir=!1,ei=null,Fc(i),tt=new zg({seed:t,night:i});for(const e of tt.lanterns)or.set(e.id,$g(e));for(const e of tt.charms){const n=new we;n.position.set(e.pos[0],e.pos[1]+.9,e.pos[2]);const s=new St(new qe(.45,.72,.08),new Ae({color:Pt.mayScarfAndCharm})),r=new St(new qe(.53,.8,.06),new Ae({color:Pt.goldBorderAndScore}));n.add(r,s),de.add(n),ar.set(e.id,{group:n})}Vc()}function Bc(){!tt||tt.state==="won"||tt.state==="lost"||(tt.step({pause:!0}),tt.step({pause:!1}),tt.state==="paused"?(document.pointerLockElement&&document.exitPointerLock(),document.getElementById("screen-pause").classList.add("active")):document.getElementById("screen-pause").classList.remove("active"))}function ms(){const i=document.getElementById("keybind-grid");i.innerHTML="";for(const[t,e]of Object.entries(Zo)){const n=document.createElement("div");n.className="keybind-item";const s=document.createElement("span");s.textContent=e;const r=document.createElement("button");r.className="keybind-btn"+(Ke===t?" listening":""),r.textContent=Ke===t?"Nhấn phím...":Ue(Gt.keybinds[t]),r.addEventListener("click",()=>{Ke=t,document.getElementById("keybind-warning").textContent=`Đang chờ nhấn phím mới cho "${e}"...`,ms()}),n.append(s,r),i.appendChild(n)}}document.getElementById("btn-reset-keys").addEventListener("click",()=>{Gt.keybinds={...Ea},Ke=null,document.getElementById("keybind-warning").textContent="Đã khôi phục bộ phím mặc định.",Ta(),gr(),ms()});window.addEventListener("keydown",i=>{const t=i.code;if(Ke){i.preventDefault();const n=Object.keys(Gt.keybinds).find(r=>r!==Ke&&Gt.keybinds[r]===t),s=document.getElementById("keybind-warning");if(n){s.textContent=`⚠ Phát hiện trùng phím! Phím [${Ue(t)}] đang dùng cho "${Zo[n]}". Hãy chọn phím khác!`,Ke=null,ms();return}Gt.keybinds[Ke]=t,s.textContent=`✓ Đã gán phím [${Ue(t)}] cho "${Zo[Ke]}".`,Ke=null,Ta(),gr(),ms();return}if(document.activeElement&&document.activeElement.id==="lb-name-input")return;Ze[t]=!0;const e=Gt.keybinds;if(t==="Escape"||t===e.pause){for(const n of["screen-settings","screen-leaderboard"]){const s=document.getElementById(n);if(s.classList.contains("active")){s.classList.remove("active");return}}Bc();return}if(t==="Digit1"){Ss(1,2027);return}if(t==="Digit2"){Ss(2,2028);return}if(t==="Digit3"){Ss(3,2029);return}!tt||tt.state!=="playing"||(t===e.interact&&(Jo=!0),(t===e.pulse||t==="KeyK")&&(lr=!0),t===e.jump&&(Ko=!0),(t===e.dash||t==="ShiftRight"||t==="KeyL")&&(cr=!0),t==="KeyG"&&Zg(tt),t==="KeyR"&&Ss(Xe,Math.floor(performance.now())%1e5))});window.addEventListener("keyup",i=>{Ze[i.code]=!1});let wa=null,Qo=0;function isModOpen(){return["screen-main-menu","screen-night-intro","screen-pause","screen-settings","screen-leaderboard","screen-result"].some(id=>document.getElementById(id).classList.contains("active"))}Xg.addEventListener("click",()=>{tt&&tt.state==="playing"&&!isModOpen()&&Xg.requestPointerLock&&Xg.requestPointerLock()});window.addEventListener("mousemove",i=>{if(!tt||tt.state!=="playing"||isModOpen()){wa=null;return}let t=0,dy=0;document.pointerLockElement===Xg?(t=i.movementX||0,dy=i.movementY||0):(wa!==null?t=i.clientX-wa:typeof i.movementX=="number"&&(t=i.movementX),wa=i.clientX),fs=(fs+t*Gt.mouseSens)%360,Qo=Math.max(-2.5,Math.min(4,Qo+dy*.015))});window.addEventListener("resize",()=>{si.aspect=window.innerWidth/window.innerHeight,si.updateProjectionMatrix(),qi.setSize(window.innerWidth,window.innerHeight)});async function kc(){let i=[];try{const t=localStorage.getItem($o);t&&(i=JSON.parse(t))}catch{i=[]}try{const t=await fetch("/api/leaderboard");if(t.ok){const e=await t.json();if(Array.isArray(e.entries)){const n=Yo([...e.entries,...i]);return localStorage.setItem($o,JSON.stringify(n)),n}}}catch{}return Yo(i)}async function jg(i){let t=await kc();const e=Vg(t,i);try{localStorage.setItem($o,JSON.stringify(e))}catch{}try{await fetch("/api/leaderboard",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})}catch{}return e}async function zc(){const i=await kc(),t=document.getElementById("lb-tbody");if(t.innerHTML="",i.length===0){const e=document.createElement("tr");e.innerHTML='<td colspan="6">Chưa có kỷ lục nào. Hãy chơi và lưu điểm nhé!</td>',t.appendChild(e)}else i.forEach((e,n)=>{const s=document.createElement("tr"),r=e.achieved_at?e.achieved_at.replace("T"," ").slice(0,19):"";s.innerHTML=`
        <td><strong>#${n+1}</strong></td>
        <td>${e.name}</td>
        <td style="color:var(--ui-gold);font-weight:800">${e.score}</td>
        <td>${e.nights_won}/3</td>
        <td>${e.seed}</td>
        <td style="font-size:0.78rem">${r}</td>
      `,t.appendChild(s)});document.getElementById("screen-leaderboard").classList.add("active")}document.getElementById("btn-open-leaderboard").addEventListener("click",zc);document.getElementById("btn-pause-leaderboard").addEventListener("click",zc);document.getElementById("btn-close-leaderboard").addEventListener("click",()=>{document.getElementById("screen-leaderboard").classList.remove("active")});document.getElementById("btn-save-score").addEventListener("click",async()=>{const i=document.getElementById("lb-name-input"),t=document.getElementById("lb-save-msg"),e=i.value.trim();if(!Ic(e)){t.style.color="var(--ui-danger)",t.textContent="⚠ Tên phải từ 3–12 ký tự (chữ cái, số hoặc dấu _)";return}const n=tt&&tt.state==="won"?An:An+(tt?tt.score:0);await jg({name:e,score:n,nights_won:ds,achieved_at:Dc(new Date),seed:Oc}),t.style.color="var(--ui-gold)",t.textContent=`✓ Đã lưu kỷ lục của "${e}" (${n} điểm)!`,document.getElementById("btn-save-score").disabled=!0});document.getElementById("btn-start-campaign").addEventListener("click",()=>{An=0,ds=0,ba(1)});document.querySelectorAll("[data-select-night]").forEach(i=>{i.addEventListener("click",()=>{const t=Number(i.getAttribute("data-select-night"));An=0,ds=t-1,ba(t)})});document.querySelectorAll("[data-quick-night]").forEach(i=>{i.addEventListener("click",e=>{e.stopPropagation();const t=Number(i.getAttribute("data-quick-night"));Ss(t,2026+t)})});document.getElementById("btn-begin-night").addEventListener("click",()=>{Ss(Xe)});document.getElementById("btn-pause-resume").addEventListener("click",()=>{tt&&tt.state==="paused"&&Bc()});document.getElementById("btn-pause-restart").addEventListener("click",()=>{Ss(Xe,Math.floor(performance.now())%1e5)});document.getElementById("btn-pause-menu").addEventListener("click",()=>{Ms(),document.getElementById("screen-main-menu").classList.add("active")});const ta=document.getElementById("input-volume"),ea=document.getElementById("input-sens"),na=document.getElementById("input-colorblind"),ia=document.getElementById("input-reduced-motion"),sa=document.getElementById("input-large-text"),Qg=document.getElementById("lbl-volume"),t0=document.getElementById("lbl-sens");function li(){ta.value=String(Math.round(Gt.volume*100)),ea.value=String(Math.round(Gt.mouseSens*100)),na.checked=!!Gt.colorblind,ia.checked=!!Gt.reducedMotion,sa.checked=!!Gt.largeText,Qg.textContent=`${Math.round(Gt.volume*100)}%`,t0.textContent=Gt.mouseSens.toFixed(2),gr(),ms()}li();ta.addEventListener("input",()=>{Gt.volume=Number(ta.value)/100,be.setVolume(Gt.volume),li()});ea.addEventListener("input",()=>{Gt.mouseSens=Number(ea.value)/100,li()});na.addEventListener("change",()=>{Gt.colorblind=!!na.checked,li()});ia.addEventListener("change",()=>{Gt.reducedMotion=!!ia.checked,li()});sa.addEventListener("change",()=>{Gt.largeText=!!sa.checked,li()});function Hc(){Ke=null,document.getElementById("keybind-warning").textContent="",li(),document.getElementById("screen-settings").classList.add("active")}document.getElementById("btn-open-settings-main").addEventListener("click",Hc);document.getElementById("btn-pause-settings").addEventListener("click",Hc);document.getElementById("btn-close-settings").addEventListener("click",()=>{Ke=null,Ta(),document.getElementById("screen-settings").classList.remove("active")});document.getElementById("cd-dash-box").addEventListener("click",()=>{tt&&tt.state==="playing"&&(cr=!0)});document.getElementById("cd-pulse-box").addEventListener("click",()=>{tt&&tt.state==="playing"&&(lr=!0)});document.getElementById("btn-result-next").addEventListener("click",()=>{Xe<3?ba(Xe+1):(Ms(),document.getElementById("screen-main-menu").classList.add("active"))});document.getElementById("btn-result-retry").addEventListener("click",()=>{Ss(Xe,Math.floor(performance.now())%1e5)});document.getElementById("btn-result-menu").addEventListener("click",()=>{Ms(),document.getElementById("screen-main-menu").classList.add("active")});function e0(){const i=Gt.keybinds;let t=0,e=0;(Ze[i.moveUp]||Ze.ArrowUp)&&(e-=1),(Ze[i.moveDown]||Ze.ArrowDown)&&(e+=1),(Ze[i.moveLeft]||Ze.ArrowLeft)&&(t-=1),(Ze[i.moveRight]||Ze.ArrowRight)&&(t+=1);const n={move:[t,e],cam_yaw_deg:fs,jump:!!(Ko||Ze[i.jump]),interact:!!Jo,pulse:!!lr,dash:!!cr};return Jo=!1,lr=!1,Ko=!1,cr=!1,n}function Hl(i,t){const n=new I(t[0],t[1]+2.5,t[2]).clone().project(si),s=n.z<1;if(s&&n.x>=-.9&&n.x<=.9&&n.y>=-.86&&n.y<=.86){i.style.display="none";return}let o=n.x,a=n.y;s||(o=-o,a=-a);const l=Math.atan2(a,o),h=58,f=window.innerWidth/2-h,m=window.innerHeight/2-h,c=window.innerWidth/2+Math.cos(l)*f,u=window.innerHeight/2-Math.sin(l)*m;i.style.display="flex",i.style.left=`${Math.max(24,Math.min(window.innerWidth-70,c-23))}px`,i.style.top=`${Math.max(24,Math.min(window.innerHeight-70,u-23))}px`,i.style.transform=`rotate(${-l}rad)`}function n0(i){const t=document.getElementById("offscreen-arrow"),e=document.getElementById("shade-spawn-arrow");if(!tt||tt.state!=="playing"){t.style.display="none",e.style.display="none";return}let n=null,s=1/0;for(const r of tt.lanterns){if(r.lit)continue;const o=jt(tt.player.pos,r.pos);o<s&&(s=o,n=r)}if(n?Hl(t,n.pos):t.style.display="none",ei){ei.timerSec-=i;const r=tt.shades.find(o=>o.id===ei.id);ei.timerSec>0&&r?Hl(e,r.pos):(ei=null,e.style.display="none")}else e.style.display="none"}function i0(i,t){if(!tt)return;is>0&&(is-=t,is<=0&&(document.getElementById("visual-subtitles").style.display="none")),ue.group.position.set(tt.player.pos[0],tt.player.pos[1],tt.player.pos[2]),ue.group.rotation.y=tt.player.facingYaw,tt.player.respawnWaitTicks>0?ue.group.visible=!1:tt.player.invulnTicks>0&&!Gt.reducedMotion?ue.group.visible=Math.floor(i*18)%2===0:ue.group.visible=!0;const e=Math.hypot(tt.currInput.move[0],tt.currInput.move[1])>.05;if(!tt.player.grounded)ue.leftArm.rotation.x=-.9,ue.rightArm.rotation.x=-.9,ue.leftLeg.rotation.x=.45,ue.rightLeg.rotation.x=-.35;else if(e){const p=Math.sin(i*14)*.65;ue.leftArm.rotation.x=p,ue.rightArm.rotation.x=-p,ue.leftLeg.rotation.x=-p,ue.rightLeg.rotation.x=p}else ue.leftArm.rotation.x=0,ue.rightArm.rotation.x=0,ue.leftLeg.rotation.x=0,ue.rightLeg.rotation.x=0;for(;ue.orbitGroup.children.length<tt.player.carried;){const p=new St(new hn(.11,8,8),new Ae({color:Pt.moteCore}));ue.orbitGroup.add(p)}for(;ue.orbitGroup.children.length>tt.player.carried;)ue.orbitGroup.remove(ue.orbitGroup.children[ue.orbitGroup.children.length-1]);ue.orbitGroup.children.forEach((p,d)=>{const S=i*3.2+d*Math.PI*2/Math.max(1,tt.player.carried);p.position.set(Math.cos(S)*.88,Math.sin(i*4+d)*.14,Math.sin(S)*.88)});let s=0,r=!1;for(const p of tt.lanterns){p.lit&&s++;const d=or.get(p.id);if(!d)continue;const S=p.lit?p.fuelUnits/60:0,y=p.lit&&S<30;y&&(r=!0);const v=y&&!Gt.reducedMotion?.35+.65*(.5+.5*Math.sin(i*Math.PI*2)):1;if(p.lit){d.core.scale.y=1,d.tearMark.visible=!1,d.fuelBarBg.visible=!0,d.fuelBarBg.lookAt(si.position);const P=Math.max(.02,Math.min(1,S/100));d.fuelBarFill.scale.x=P,d.fuelBarFill.position.x=-.76*(1-P),d.fuelBarFillMat.color.setHex(y?Gt.colorblind?Pt.uiDangerColorblind:Pt.uiDanger:Pt.goldBorderAndScore),d.fuelBarBg.visible=!y||v>.55,d.coreMat.color.setHex(Pt.lanternCore),d.coreMat.emissive.setHex(Pt.lanternLit),d.coreMat.emissiveIntensity=1.6*v,d.light.intensity=6.5*v,d.ringMat.opacity=y?.02:.42+Math.sin(i*3)*.1}else{d.core.scale.y=.8,d.tearMark.visible=!0,d.fuelBarBg.visible=!1;const P=p.ever_lit?an.tuning.relight_cost:an.tuning.lantern_cost;d.coreMat.color.setHex(Pt.lanternOff),d.coreMat.emissive.setHex(Pt.lanternOff),d.coreMat.emissiveIntensity=.2+p.deposited/P*.6,d.light.intensity=p.deposited/P*2.2,d.ringMat.opacity=.06}}r&&is<=0&&ps("🏮 [Phụ đề] Cảnh báo: Có Đèn Lồng đang cạn dầu (< 30)!",2);const o=s/Math.max(1,tt.lanterns.length);Nc.intensity=.15+.55*o,de.fog.density=.015-o*.008;const a=new Set;for(const p of tt.motes){a.add(p.id);let d=Ci.get(p.id);if(!d){const y=new we,v=new St(new hn(.2,10,10),new Ae({color:Pt.moteCore})),P=new St(new hn(.38,10,10),new Ae({color:Pt.moteHalo,transparent:!0,opacity:.38}));y.add(v,P),de.add(y),d=y,Ci.set(p.id,d)}const S=p.pos[1]+.65+Math.sin(i*3.4+p.pos[0])*.22;d.position.set(p.pos[0],S,p.pos[2])}for(const[p,d]of Ci.entries())a.has(p)||(de.remove(d),Ci.delete(p));const l=new Set,h=Gt.colorblind?Pt.shadeRimColorblind:Pt.shadeRim;for(const p of tt.shades){l.add(p.id);let d=Ri.get(p.id);if(!d){const v=new we,P=new xe({color:Pt.shadeBody,emissive:h,emissiveIntensity:.55,roughness:.4}),A=new St(new Xi(.75,1.8,12),P);A.position.y=.9,v.add(A);const w=new St(new Ma(.6,.06,8,20),new Ae({color:Pt.goldBorderAndScore}));w.rotation.x=Math.PI/2,w.position.y=2,w.visible=!1,v.add(w),de.add(v),d={group:v,bodyMat:P,stunRing:w},Ri.set(p.id,d)}const S=tt.getTerrainInfo(p.pos[0],p.pos[2]),y=S.onIsland?S.y:p.pos[1];d.group.position.set(p.pos[0],y,p.pos[2]),p.state==="stunned"?(d.bodyMat.color.setHex(Pt.shadeStunned),d.bodyMat.emissive.setHex(Pt.shadeStunned),d.stunRing.visible=!0,d.stunRing.rotation.z=i*5):(d.bodyMat.color.setHex(Pt.shadeBody),d.bodyMat.emissive.setHex(h),d.stunRing.visible=!1)}for(const[p,d]of Ri.entries())l.has(p)||(de.remove(d.group),Ri.delete(p));const f=new Set;for(const p of tt.drifters){f.add(p.id);let d=Li.get(p.id);if(!d){const S=new we,y=new St(new Sa(.45,.1,32,8),new xe({color:Pt.drifter,emissive:Pt.drifter,emissiveIntensity:.4}));y.position.y=1.2,S.add(y),de.add(S),d={group:S,ribbon:y},Li.set(p.id,d)}d.group.position.set(p.pos[0],p.pos[1],p.pos[2]),d.ribbon.rotation.y=i*4}for(const[p,d]of Li.entries())f.has(p)||(de.remove(d.group),Li.delete(p));for(const p of tt.charms){const d=ar.get(p.id);d&&(d.group.visible=p.available,d.group.rotation.y=i*2.5,d.group.position.y=p.pos[1]+.9+Math.sin(i*3)*.15)}for(let p=nr.length-1;p>=0;p--){const d=nr[p];d.elapsed+=Me;const S=d.elapsed/d.duration;if(S>=1)de.remove(d.mesh),nr.splice(p,1);else{const y=1+S*an.tuning.pulse_radius*2;d.mesh.scale.set(y,y,1),d.mat.opacity=(1-S)*.85}}Ai&&(Ai.rotation.y=i*2.2);for(let p=as.length-1;p>=0;p--){const d=as[p];d.life-=Me,d.life<=0?(wi.remove(d.mesh),as.splice(p,1)):(d.mesh.position.y=d.baseY+Math.sin(i*5+d.phase)*.16,d.mesh.material.opacity=Math.min(1,d.life*.5))}const m=fs*Math.PI/180,c=11.5,u=6.8+Qo,g=tt.player.pos[0]+Math.sin(m)*c,_=tt.player.pos[2]+Math.cos(m)*c;si.position.lerp(new I(g,Math.max(-4,tt.player.pos[1])+u,_),Gt.reducedMotion?1:.22),si.lookAt(tt.player.pos[0],Math.max(-4,tt.player.pos[1])+1.2,tt.player.pos[2]),n0(t)}function s0(i){const t=Math.max(0,Math.ceil(i)),e=String(Math.floor(t/60)).padStart(2,"0"),n=String(t%60).padStart(2,"0");return`${e}:${n}`}function Vc(){if(!tt)return;document.getElementById("hud-night-name").textContent=zi[tt.night].name;const i="🔥".repeat(tt.player.flames)+"🖤".repeat(Math.max(0,an.tuning.flames-tt.player.flames));document.getElementById("hud-flames").textContent=i;const t=document.getElementById("hud-clock"),e=s0(tt.time_left_s);tt.time_left_s<=30?(t.classList.add("danger"),t.textContent=Gt.colorblind?`⚠ ${e}`:e):(t.classList.remove("danger"),t.textContent=e);const n=Math.ceil(tt.time_left_s);n<=10&&n>0&&n!==jo&&(jo=n,be.playCountdownTick(),ps(`⏰ [Phụ đề] Còn ${n} giây cuối tới Bình Minh!`,1.2));const s=document.getElementById("charm-badge");tt.player.charmTicks>0?(s.style.display="inline-block",s.textContent=`🧧 Bùa Gió: ${(tt.player.charmTicks/60).toFixed(1)}s`):s.style.display="none";const r=document.getElementById("wind-badge");tt.wind.active?(r.style.display="inline-block",r.textContent=`🍃 Gió Mạnh (${Math.round(tt.wind.dir_deg)}°)`):tt.wind.warning?(r.style.display="inline-block",r.textContent="🍃 Gió sắp thổi (2s)...",ir||(ir=!0,be.playWindWarning(),ps("🍃 [Phụ đề] Cảnh báo: Gió mạnh sắp thổi trong 2 giây!",2.2))):(r.style.display="none",ir=!1);const o=tt.lanterns.filter(_=>_.lit).length;document.getElementById("hud-lanterns").textContent=`${o}/${tt.lanterns.length}`,document.getElementById("hud-score").textContent=String(An+tt.score);const a=tt.player.capacity||10;document.getElementById("hud-mote-count").textContent=`${tt.player.carried}/${a}`;for(let _=0;_<20;_++)er[_].style.display=_<a?"block":"none",_<tt.player.carried?er[_].classList.add("filled"):er[_].classList.remove("filled");const l=document.getElementById("cd-dash-box"),h=document.getElementById("cd-dash-text");tt.player.charmTicks>0?(l.classList.remove("on-cd"),h.textContent="0s (Bùa)"):tt.player.dashCdTicks>0?(l.classList.add("on-cd"),h.textContent=`${(tt.player.dashCdTicks/60).toFixed(1)}s`):(l.classList.remove("on-cd"),h.textContent="Sẵn sàng");const f=document.getElementById("cd-pulse-box"),m=document.getElementById("cd-pulse-text");tt.player.pulseCdTicks>0?(f.classList.add("on-cd"),m.textContent=`${(tt.player.pulseCdTicks/60).toFixed(1)}s`):tt.player.carried<an.tuning.pulse_cost?(f.classList.add("on-cd"),m.textContent=`${tt.player.carried}/3 đom đóm`):(f.classList.remove("on-cd"),m.textContent="Sẵn sàng");let c=null,u=1/0;for(const _ of tt.lanterns){if(!(!_.lit||_.fuelUnits<tt.maxFuelUnits))continue;const d=jt(tt.player.pos,_.pos);d<u&&(u=d,c=_)}const g=document.getElementById("action-prompt");if(c&&u<=an.tuning.interact_radius){g.style.opacity="1";const _=Ue(Gt.keybinds.interact);if(c.lit){const p=Math.floor(c.fuelUnits/60);g.textContent=`${_} — Châm dầu (${p}/100)`}else{const p=c.ever_lit?an.tuning.relight_cost:an.tuning.lantern_cost;g.textContent=`${_} — Nạp ánh sáng (${c.deposited}/${p})`}}else g.style.opacity="0"}function r0(i){for(const t of i)if(t.name==="mote_picked")be.playPickup(t.data.carried);else if(t.name==="charm_picked")be.playCharmPickup();else if(t.name==="deposit"||t.name==="refuel")be.playDeposit();else if(t.name==="lantern_lit")be.playLanternLit();else if(t.name==="lantern_out")be.playHit(),ps(`🏮 [Phụ đề] Đèn Lồng ${t.data.lantern_id} vừa cạn sạch dầu và tắt!`,3);else if(t.name==="pulse")be.playPulse(),Jg(tt.player.pos);else if(t.name==="dash")be.playDash();else if(t.name==="shade_spawned")be.playShadeSpawn(),ei={id:t.data.id,timerSec:4},ps(`⚠ [Phụ đề] Bóng Mực (${t.data.id}) vừa xuất hiện từ sương đen!`,3);else if(t.name==="player_hit")be.playHit();else if(t.name==="game_over"){const e=document.getElementById("screen-result"),n=document.getElementById("result-title"),s=document.getElementById("result-desc"),r=document.getElementById("result-score"),o=document.getElementById("btn-result-next"),a=document.getElementById("lb-save-box"),l=document.getElementById("btn-save-score"),h=document.getElementById("lb-save-msg");e.classList.add("active"),l.disabled=!1,h.textContent="",t.data.result==="won"?(be.playWin(),An+=tt.score,ds=Math.max(ds,Xe),Xe<3?(n.textContent=`🏮 ${zi[Xe].name.toUpperCase()} SỐNG SÓT TỚI BÌNH MINH!`,s.textContent="Mây đã giữ cho Đảo đủ ánh sáng tới lúc mặt trời mọc! Hãy tiến sang hòn đảo tiếp theo.",r.textContent=`Điểm Đêm ${Xe}: ${tt.score} · Tổng điểm: ${An}`,o.style.display="inline-block",o.textContent=`Sang Đêm ${Xe+1} →`,a.style.display="none"):(n.textContent="🌅 BÌNH MINH TRÊN ĐẢO ĐÈN LỒNG!",s.textContent="Chúc mừng Mây! Cả Ba Hòn Đảo đã giữ vững ánh sáng qua màn đêm để đón ánh Bình Minh rực rỡ!",r.textContent=`Điểm Đêm 3: ${tt.score} · TỔNG ĐIỂM HÀNH TRÌNH: ${An}`,o.style.display="inline-block",o.textContent="Về Menu Chính",a.style.display="block")):(be.playLose(),n.textContent="🌑 SƯƠNG ĐEN BAO PHỦ...",s.textContent=t.data.reason==="no_flames"?"Ngọn Lửa hộ mệnh của Mây đã tắt hết.":"Khi Bình Minh lên, số Đèn Lồng đang sáng chưa đạt ngưỡng 60%.",r.textContent=`Điểm các Đêm đã thắng: ${An} (Đêm hiện tại: ${tt.score})`,o.style.display="none",a.style.display="block")}}Ss(1,2026);let Vl=performance.now(),eo=0;function Gc(i){requestAnimationFrame(Gc);const t=Math.min(.1,(i-Vl)/1e3);if(Vl=i,tt&&tt.state==="playing"){for(eo+=t;eo>=Me;){const e=e0();e.jump&&tt.player.grounded&&tt.player.dashTicksLeft===0&&be.playJump();const n=tt.step(e);if(n.length>0&&r0(n),eo-=Me,tt.state!=="playing")break}Vc()}i0(i/1e3,t),qi.render(de,si)}requestAnimationFrame(Gc);
