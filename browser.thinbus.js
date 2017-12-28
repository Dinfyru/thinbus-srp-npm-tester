!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).thinbus=t()}}(function(){return function t(i,r,o){function s(n,h){if(!r[n]){if(!i[n]){var u="function"==typeof require&&require;if(!h&&u)return u(n,!0);if(e)return e(n,!0);var f=new Error("Cannot find module '"+n+"'");throw f.code="MODULE_NOT_FOUND",f}var a=r[n]={exports:{}};i[n][0].call(a.exports,function(t){var r=i[n][1][t];return s(r||t)},a,a.exports,t,i,r,o)}return r[n].exports}for(var e="function"==typeof require&&require,n=0;n<o.length;n++)s(o[n]);return s}({SRP6JavascriptClientSessionSHA256:[function(t,i,r){var o="21766174458617435773191008891802753781907668374255538511144643224689886235383840957210909013086056401571399717235807266581649606472148410291413364152197364477180887395655483738115072677402235101762521901569820740293149529620419333266262073471054548368736039519702486226506248861060256971802984953561121442680157668000761429988222457090413873973970171927093992114751765168063614761119615476233422096442783117971236371647333871414335895773474667308967050807005509320424799678417036867928316761272274230314067548291133582479583061439577559347101961771406173684378522703483495337037655006751328447510550299250924469288819",s="2",e="5b9e8ef059c6b32ea59fc1d322d37f04aa30bae5aa9003b8321e21ddb04e300",n=n||function(t,i){var r={},o=r.lib={},s=function(){},e=o.Base={extend:function(t){s.prototype=this;var i=new s;return t&&i.mixIn(t),i.hasOwnProperty("init")||(i.init=function(){i.$super.init.apply(this,arguments)}),i.init.prototype=i,i.$super=this,i},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var i in t)t.hasOwnProperty(i)&&(this[i]=t[i]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},n=o.WordArray=e.extend({init:function(t,i){t=this.words=t||[],this.sigBytes=void 0!=i?i:4*t.length},toString:function(t){return(t||u).stringify(this)},concat:function(t){var i=this.words,r=t.words,o=this.sigBytes;if(t=t.sigBytes,this.clamp(),o%4)for(var s=0;s<t;s++)i[o+s>>>2]|=(r[s>>>2]>>>24-s%4*8&255)<<24-(o+s)%4*8;else if(65535<r.length)for(s=0;s<t;s+=4)i[o+s>>>2]=r[s>>>2];else i.push.apply(i,r);return this.sigBytes+=t,this},clamp:function(){var i=this.words,r=this.sigBytes;i[r>>>2]&=4294967295<<32-r%4*8,i.length=t.ceil(r/4)},clone:function(){var t=e.clone.call(this);return t.words=this.words.slice(0),t},random:function(i){for(var r=[],o=0;o<i;o+=4)r.push(4294967296*t.random()|0);return new n.init(r,i)}}),h=r.enc={},u=h.Hex={stringify:function(t){var i=t.words;t=t.sigBytes;for(var r=[],o=0;o<t;o++){var s=i[o>>>2]>>>24-o%4*8&255;r.push((s>>>4).toString(16)),r.push((15&s).toString(16))}return r.join("")},parse:function(t){for(var i=t.length,r=[],o=0;o<i;o+=2)r[o>>>3]|=parseInt(t.substr(o,2),16)<<24-o%8*4;return new n.init(r,i/2)}},f=h.Latin1={stringify:function(t){var i=t.words;t=t.sigBytes;for(var r=[],o=0;o<t;o++)r.push(String.fromCharCode(i[o>>>2]>>>24-o%4*8&255));return r.join("")},parse:function(t){for(var i=t.length,r=[],o=0;o<i;o++)r[o>>>2]|=(255&t.charCodeAt(o))<<24-o%4*8;return new n.init(r,i)}},a=h.Utf8={stringify:function(t){try{return decodeURIComponent(escape(f.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return f.parse(unescape(encodeURIComponent(t)))}},p=o.BufferedBlockAlgorithm=e.extend({reset:function(){this._data=new n.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=a.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(i){var r=this._data,o=r.words,s=r.sigBytes,e=this.blockSize,h=s/(4*e);if(i=(h=i?t.ceil(h):t.max((0|h)-this._minBufferSize,0))*e,s=t.min(4*i,s),i){for(var u=0;u<i;u+=e)this._doProcessBlock(o,u);u=o.splice(0,i),r.sigBytes-=s}return new n.init(u,s)},clone:function(){var t=e.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});o.Hasher=p.extend({cfg:e.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(i,r){return new t.init(r).finalize(i)}},_createHmacHelper:function(t){return function(i,r){return new c.HMAC.init(t,r).finalize(i)}}});var c=r.algo={};return r}(Math);!function(t){for(var i=n,r=(s=i.lib).WordArray,o=s.Hasher,s=i.algo,e=[],h=[],u=function(t){return 4294967296*(t-(0|t))|0},f=2,a=0;64>a;){var p;t:{p=f;for(var c=t.sqrt(p),l=2;l<=c;l++)if(!(p%l)){p=!1;break t}p=!0}p&&(8>a&&(e[a]=u(t.pow(f,.5))),h[a]=u(t.pow(f,1/3)),a++),f++}var d=[];s=s.SHA256=o.extend({_doReset:function(){this._hash=new r.init(e.slice(0))},_doProcessBlock:function(t,i){for(var r=this._hash.words,o=r[0],s=r[1],e=r[2],n=r[3],u=r[4],f=r[5],a=r[6],p=r[7],c=0;64>c;c++){if(16>c)d[c]=0|t[i+c];else{var l=d[c-15],m=d[c-2];d[c]=((l<<25|l>>>7)^(l<<14|l>>>18)^l>>>3)+d[c-7]+((m<<15|m>>>17)^(m<<13|m>>>19)^m>>>10)+d[c-16]}l=p+((u<<26|u>>>6)^(u<<21|u>>>11)^(u<<7|u>>>25))+(u&f^~u&a)+h[c]+d[c],m=((o<<30|o>>>2)^(o<<19|o>>>13)^(o<<10|o>>>22))+(o&s^o&e^s&e),p=a,a=f,f=u,u=n+l|0,n=e,e=s,s=o,o=l+m|0}r[0]=r[0]+o|0,r[1]=r[1]+s|0,r[2]=r[2]+e|0,r[3]=r[3]+n|0,r[4]=r[4]+u|0,r[5]=r[5]+f|0,r[6]=r[6]+a|0,r[7]=r[7]+p|0},_doFinalize:function(){var i=this._data,r=i.words,o=8*this._nDataBytes,s=8*i.sigBytes;return r[s>>>5]|=128<<24-s%32,r[14+(s+64>>>9<<4)]=t.floor(o/4294967296),r[15+(s+64>>>9<<4)]=o,i.sigBytes=4*r.length,this._process(),this._hash},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});i.SHA256=o._createHelper(s),i.HmacSHA256=o._createHmacHelper(s)}(Math);function h(t,i,r){null!=t&&("number"==typeof t?this.fromNumber(t,i,r):null==i&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,i))}function u(){return new h(null)}h.prototype.am=function(t,i,r,o,s,e){for(var n=16383&i,h=i>>14;--e>=0;){var u=16383&this[t],f=this[t++]>>14,a=h*u+f*n;s=((u=n*u+((16383&a)<<14)+r[o]+s)>>28)+(a>>14)+h*f,r[o++]=268435455&u}return s},h.prototype.DB=28,h.prototype.DM=268435455,h.prototype.DV=1<<28;h.prototype.FV=Math.pow(2,52),h.prototype.F1=24,h.prototype.F2=4;var f,a,p="0123456789abcdefghijklmnopqrstuvwxyz",c=new Array;for(f="0".charCodeAt(0),a=0;a<=9;++a)c[f++]=a;for(f="a".charCodeAt(0),a=10;a<36;++a)c[f++]=a;for(f="A".charCodeAt(0),a=10;a<36;++a)c[f++]=a;function l(t){return p.charAt(t)}function d(t,i){var r=c[t.charCodeAt(i)];return null==r?-1:r}function m(t){var i=u();return i.fromInt(t),i}function y(t){var i,r=1;return 0!=(i=t>>>16)&&(t=i,r+=16),0!=(i=t>>8)&&(t=i,r+=8),0!=(i=t>>4)&&(t=i,r+=4),0!=(i=t>>2)&&(t=i,r+=2),0!=(i=t>>1)&&(t=i,r+=1),r}function v(t){this.m=t}v.prototype.convert=function(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t},v.prototype.revert=function(t){return t},v.prototype.reduce=function(t){t.divRemTo(this.m,null,t)},v.prototype.mulTo=function(t,i,r){t.multiplyTo(i,r),this.reduce(r)},v.prototype.sqrTo=function(t,i){t.squareTo(i),this.reduce(i)};function T(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}T.prototype.convert=function(t){var i=u();return t.abs().dlShiftTo(this.m.t,i),i.divRemTo(this.m,null,i),t.s<0&&i.compareTo(h.ZERO)>0&&this.m.subTo(i,i),i},T.prototype.revert=function(t){var i=u();return t.copyTo(i),this.reduce(i),i},T.prototype.reduce=function(t){for(;t.t<=this.mt2;)t[t.t++]=0;for(var i=0;i<this.m.t;++i){var r=32767&t[i],o=r*this.mpl+((r*this.mph+(t[i]>>15)*this.mpl&this.um)<<15)&t.DM;for(t[r=i+this.m.t]+=this.m.am(0,o,t,i,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)},T.prototype.mulTo=function(t,i,r){t.multiplyTo(i,r),this.reduce(r)},T.prototype.sqrTo=function(t,i){t.squareTo(i),this.reduce(i)};h.prototype.copyTo=function(t){for(var i=this.t-1;i>=0;--i)t[i]=this[i];t.t=this.t,t.s=this.s},h.prototype.fromInt=function(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+DV:this.t=0},h.prototype.fromString=function(t,i){var r;if(16==i)r=4;else if(8==i)r=3;else if(256==i)r=8;else if(2==i)r=1;else if(32==i)r=5;else{if(4!=i)return void this.fromRadix(t,i);r=2}this.t=0,this.s=0;for(var o=t.length,s=!1,e=0;--o>=0;){var n=8==r?255&t[o]:d(t,o);n<0?"-"==t.charAt(o)&&(s=!0):(s=!1,0==e?this[this.t++]=n:e+r>this.DB?(this[this.t-1]|=(n&(1<<this.DB-e)-1)<<e,this[this.t++]=n>>this.DB-e):this[this.t-1]|=n<<e,(e+=r)>=this.DB&&(e-=this.DB))}8==r&&0!=(128&t[0])&&(this.s=-1,e>0&&(this[this.t-1]|=(1<<this.DB-e)-1<<e)),this.clamp(),s&&h.ZERO.subTo(this,this)},h.prototype.clamp=function(){for(var t=this.s&this.DM;this.t>0&&this[this.t-1]==t;)--this.t},h.prototype.dlShiftTo=function(t,i){var r;for(r=this.t-1;r>=0;--r)i[r+t]=this[r];for(r=t-1;r>=0;--r)i[r]=0;i.t=this.t+t,i.s=this.s},h.prototype.drShiftTo=function(t,i){for(var r=t;r<this.t;++r)i[r-t]=this[r];i.t=Math.max(this.t-t,0),i.s=this.s},h.prototype.lShiftTo=function(t,i){var r,o=t%this.DB,s=this.DB-o,e=(1<<s)-1,n=Math.floor(t/this.DB),h=this.s<<o&this.DM;for(r=this.t-1;r>=0;--r)i[r+n+1]=this[r]>>s|h,h=(this[r]&e)<<o;for(r=n-1;r>=0;--r)i[r]=0;i[n]=h,i.t=this.t+n+1,i.s=this.s,i.clamp()},h.prototype.rShiftTo=function(t,i){i.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)i.t=0;else{var o=t%this.DB,s=this.DB-o,e=(1<<o)-1;i[0]=this[r]>>o;for(var n=r+1;n<this.t;++n)i[n-r-1]|=(this[n]&e)<<s,i[n-r]=this[n]>>o;o>0&&(i[this.t-r-1]|=(this.s&e)<<s),i.t=this.t-r,i.clamp()}},h.prototype.subTo=function(t,i){for(var r=0,o=0,s=Math.min(t.t,this.t);r<s;)o+=this[r]-t[r],i[r++]=o&this.DM,o>>=this.DB;if(t.t<this.t){for(o-=t.s;r<this.t;)o+=this[r],i[r++]=o&this.DM,o>>=this.DB;o+=this.s}else{for(o+=this.s;r<t.t;)o-=t[r],i[r++]=o&this.DM,o>>=this.DB;o-=t.s}i.s=o<0?-1:0,o<-1?i[r++]=this.DV+o:o>0&&(i[r++]=o),i.t=r,i.clamp()},h.prototype.multiplyTo=function(t,i){var r=this.abs(),o=t.abs(),s=r.t;for(i.t=s+o.t;--s>=0;)i[s]=0;for(s=0;s<o.t;++s)i[s+r.t]=r.am(0,o[s],i,s,0,r.t);i.s=0,i.clamp(),this.s!=t.s&&h.ZERO.subTo(i,i)},h.prototype.squareTo=function(t){for(var i=this.abs(),r=t.t=2*i.t;--r>=0;)t[r]=0;for(r=0;r<i.t-1;++r){var o=i.am(r,i[r],t,2*r,0,1);(t[r+i.t]+=i.am(r+1,2*i[r],t,2*r+1,o,i.t-r-1))>=i.DV&&(t[r+i.t]-=i.DV,t[r+i.t+1]=1)}t.t>0&&(t[t.t-1]+=i.am(r,i[r],t,2*r,0,1)),t.s=0,t.clamp()},h.prototype.divRemTo=function(t,i,r){var o=t.abs();if(!(o.t<=0)){var s=this.abs();if(s.t<o.t)return null!=i&&i.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=u());var e=u(),n=this.s,f=t.s,a=this.DB-y(o[o.t-1]);a>0?(o.lShiftTo(a,e),s.lShiftTo(a,r)):(o.copyTo(e),s.copyTo(r));var p=e.t,c=e[p-1];if(0!=c){var l=c*(1<<this.F1)+(p>1?e[p-2]>>this.F2:0),d=this.FV/l,m=(1<<this.F1)/l,v=1<<this.F2,T=r.t,g=T-p,w=null==i?u():i;for(e.dlShiftTo(g,w),r.compareTo(w)>=0&&(r[r.t++]=1,r.subTo(w,r)),h.ONE.dlShiftTo(p,w),w.subTo(e,e);e.t<p;)e[e.t++]=0;for(;--g>=0;){var S=r[--T]==c?this.DM:Math.floor(r[T]*d+(r[T-1]+v)*m);if((r[T]+=e.am(0,S,r,g,0,p))<S)for(e.dlShiftTo(g,w),r.subTo(w,r);r[T]<--S;)r.subTo(w,r)}null!=i&&(r.drShiftTo(p,i),n!=f&&h.ZERO.subTo(i,i)),r.t=p,r.clamp(),a>0&&r.rShiftTo(a,r),n<0&&h.ZERO.subTo(r,r)}}},h.prototype.invDigit=function(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var i=3&t;return(i=(i=(i=(i=i*(2-(15&t)*i)&15)*(2-(255&t)*i)&255)*(2-((65535&t)*i&65535))&65535)*(2-t*i%this.DV)%this.DV)>0?this.DV-i:-i},h.prototype.isEven=function(){return 0==(this.t>0?1&this[0]:this.s)},h.prototype.exp=function(t,i){if(t>4294967295||t<1)return h.ONE;var r=u(),o=u(),s=i.convert(this),e=y(t)-1;for(s.copyTo(r);--e>=0;)if(i.sqrTo(r,o),(t&1<<e)>0)i.mulTo(o,s,r);else{var n=r;r=o,o=n}return i.revert(r)},h.prototype.toString=function(t){if(this.s<0)return"-"+this.negate().toString(t);var i;if(16==t)i=4;else if(8==t)i=3;else if(2==t)i=1;else if(32==t)i=5;else{if(4!=t)return this.toRadix(t);i=2}var r,o=(1<<i)-1,s=!1,e="",n=this.t,h=this.DB-n*this.DB%i;if(n-- >0)for(h<this.DB&&(r=this[n]>>h)>0&&(s=!0,e=l(r));n>=0;)h<i?(r=(this[n]&(1<<h)-1)<<i-h,r|=this[--n]>>(h+=this.DB-i)):(r=this[n]>>(h-=i)&o,h<=0&&(h+=this.DB,--n)),r>0&&(s=!0),s&&(e+=l(r));return s?e:"0"},h.prototype.negate=function(){var t=u();return h.ZERO.subTo(this,t),t},h.prototype.abs=function(){return this.s<0?this.negate():this},h.prototype.compareTo=function(t){var i=this.s-t.s;if(0!=i)return i;var r=this.t;if(0!=(i=r-t.t))return i;for(;--r>=0;)if(0!=(i=this[r]-t[r]))return i;return 0},h.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+y(this[this.t-1]^this.s&this.DM)},h.prototype.mod=function(t){var i=u();return this.abs().divRemTo(t,null,i),this.s<0&&i.compareTo(h.ZERO)>0&&t.subTo(i,i),i},h.prototype.modPowInt=function(t,i){var r;return r=t<256||i.isEven()?new v(i):new T(i),this.exp(t,r)},h.ZERO=m(0),h.ONE=m(1);function g(t,i){return t&i}function w(t,i){return t|i}function S(t,i){return t^i}function b(t,i){return t&~i}function B(t){if(0==t)return-1;var i=0;return 0==(65535&t)&&(t>>=16,i+=16),0==(255&t)&&(t>>=8,i+=8),0==(15&t)&&(t>>=4,i+=4),0==(3&t)&&(t>>=2,i+=2),0==(1&t)&&++i,i}function D(t){for(var i=0;0!=t;)t&=t-1,++i;return i}function E(){}function x(t){return t}E.prototype.convert=x,E.prototype.revert=x,E.prototype.mulTo=function(t,i,r){t.multiplyTo(i,r)},E.prototype.sqrTo=function(t,i){t.squareTo(i)};function A(t){this.r2=u(),this.q3=u(),h.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}A.prototype.convert=function(t){if(t.s<0||t.t>2*this.m.t)return t.mod(this.m);if(t.compareTo(this.m)<0)return t;var i=u();return t.copyTo(i),this.reduce(i),i},A.prototype.revert=function(t){return t},A.prototype.reduce=function(t){for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);t.compareTo(this.r2)<0;)t.dAddOffset(1,this.m.t+1);for(t.subTo(this.r2,t);t.compareTo(this.m)>=0;)t.subTo(this.m,t)},A.prototype.mulTo=function(t,i,r){t.multiplyTo(i,r),this.reduce(r)},A.prototype.sqrTo=function(t,i){t.squareTo(i),this.reduce(i)};var M=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],_=(1<<26)/M[M.length-1];h.prototype.chunkSize=function(t){return Math.floor(Math.LN2*this.DB/Math.log(t))},h.prototype.toRadix=function(t){if(null==t&&(t=10),0==this.signum()||t<2||t>36)return"0";var i=this.chunkSize(t),r=Math.pow(t,i),o=m(r),s=u(),e=u(),n="";for(this.divRemTo(o,s,e);s.signum()>0;)n=(r+e.intValue()).toString(t).substr(1)+n,s.divRemTo(o,s,e);return e.intValue().toString(t)+n},h.prototype.fromRadix=function(t,i){this.fromInt(0),null==i&&(i=10);for(var r=this.chunkSize(i),o=Math.pow(i,r),s=!1,e=0,n=0,u=0;u<t.length;++u){var f=d(t,u);f<0?"-"==t.charAt(u)&&0==this.signum()&&(s=!0):(n=i*n+f,++e>=r&&(this.dMultiply(o),this.dAddOffset(n,0),e=0,n=0))}e>0&&(this.dMultiply(Math.pow(i,e)),this.dAddOffset(n,0)),s&&h.ZERO.subTo(this,this)},h.prototype.fromNumber=function(t,i,r){if("number"==typeof i)if(t<2)this.fromInt(1);else for(this.fromNumber(t,r),this.testBit(t-1)||this.bitwiseTo(h.ONE.shiftLeft(t-1),w,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(i);)this.dAddOffset(2,0),this.bitLength()>t&&this.subTo(h.ONE.shiftLeft(t-1),this);else{var o=new Array,s=7&t;o.length=1+(t>>3),i.nextBytes(o),s>0?o[0]&=(1<<s)-1:o[0]=0,this.fromString(o,256)}},h.prototype.bitwiseTo=function(t,i,r){var o,s,e=Math.min(t.t,this.t);for(o=0;o<e;++o)r[o]=i(this[o],t[o]);if(t.t<this.t){for(s=t.s&this.DM,o=e;o<this.t;++o)r[o]=i(this[o],s);r.t=this.t}else{for(s=this.s&this.DM,o=e;o<t.t;++o)r[o]=i(s,t[o]);r.t=t.t}r.s=i(this.s,t.s),r.clamp()},h.prototype.changeBit=function(t,i){var r=h.ONE.shiftLeft(t);return this.bitwiseTo(r,i,r),r},h.prototype.addTo=function(t,i){for(var r=0,o=0,s=Math.min(t.t,this.t);r<s;)o+=this[r]+t[r],i[r++]=o&this.DM,o>>=this.DB;if(t.t<this.t){for(o+=t.s;r<this.t;)o+=this[r],i[r++]=o&this.DM,o>>=this.DB;o+=this.s}else{for(o+=this.s;r<t.t;)o+=t[r],i[r++]=o&this.DM,o>>=this.DB;o+=t.s}i.s=o<0?-1:0,o>0?i[r++]=o:o<-1&&(i[r++]=this.DV+o),i.t=r,i.clamp()},h.prototype.dMultiply=function(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()},h.prototype.dAddOffset=function(t,i){for(;this.t<=i;)this[this.t++]=0;for(this[i]+=t;this[i]>=this.DV;)this[i]-=this.DV,++i>=this.t&&(this[this.t++]=0),++this[i]},h.prototype.multiplyLowerTo=function(t,i,r){var o=Math.min(this.t+t.t,i);for(r.s=0,r.t=o;o>0;)r[--o]=0;var s;for(s=r.t-this.t;o<s;++o)r[o+this.t]=this.am(0,t[o],r,o,0,this.t);for(s=Math.min(t.t,i);o<s;++o)this.am(0,t[o],r,o,0,i-o);r.clamp()},h.prototype.multiplyUpperTo=function(t,i,r){--i;var o=r.t=this.t+t.t-i;for(r.s=0;--o>=0;)r[o]=0;for(o=Math.max(i-this.t,0);o<t.t;++o)r[this.t+o-i]=this.am(i-o,t[o],r,0,0,this.t+o-i);r.clamp(),r.drShiftTo(1,r)},h.prototype.modInt=function(t){if(t<=0)return 0;var i=this.DV%t,r=this.s<0?t-1:0;if(this.t>0)if(0==i)r=this[0]%t;else for(var o=this.t-1;o>=0;--o)r=(i*r+this[o])%t;return r},h.prototype.millerRabin=function(t){var i=this.subtract(h.ONE),r=i.getLowestSetBit();if(r<=0)return!1;var o=i.shiftRight(r);(t=t+1>>1)>M.length&&(t=M.length);for(var s=u(),e=0;e<t;++e){s.fromInt(M[e]);var n=s.modPow(o,this);if(0!=n.compareTo(h.ONE)&&0!=n.compareTo(i)){for(var f=1;f++<r&&0!=n.compareTo(i);)if(0==(n=n.modPowInt(2,this)).compareTo(h.ONE))return!1;if(0!=n.compareTo(i))return!1}}return!0},h.prototype.clone=function(){var t=u();return this.copyTo(t),t},h.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]},h.prototype.byteValue=function(){return 0==this.t?this.s:this[0]<<24>>24},h.prototype.shortValue=function(){return 0==this.t?this.s:this[0]<<16>>16},h.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this[0]<=0?0:1},h.prototype.toByteArray=function(){var t=this.t,i=new Array;i[0]=this.s;var r,o=this.DB-t*this.DB%8,s=0;if(t-- >0)for(o<this.DB&&(r=this[t]>>o)!=(this.s&this.DM)>>o&&(i[s++]=r|this.s<<this.DB-o);t>=0;)o<8?(r=(this[t]&(1<<o)-1)<<8-o,r|=this[--t]>>(o+=this.DB-8)):(r=this[t]>>(o-=8)&255,o<=0&&(o+=this.DB,--t)),0!=(128&r)&&(r|=-256),0==s&&(128&this.s)!=(128&r)&&++s,(s>0||r!=this.s)&&(i[s++]=r);return i},h.prototype.equals=function(t){return 0==this.compareTo(t)},h.prototype.min=function(t){return this.compareTo(t)<0?this:t},h.prototype.max=function(t){return this.compareTo(t)>0?this:t},h.prototype.and=function(t){var i=u();return this.bitwiseTo(t,g,i),i},h.prototype.or=function(t){var i=u();return this.bitwiseTo(t,w,i),i},h.prototype.xor=function(t){var i=u();return this.bitwiseTo(t,S,i),i},h.prototype.andNot=function(t){var i=u();return this.bitwiseTo(t,b,i),i},h.prototype.not=function(){for(var t=u(),i=0;i<this.t;++i)t[i]=this.DM&~this[i];return t.t=this.t,t.s=~this.s,t},h.prototype.shiftLeft=function(t){var i=u();return t<0?this.rShiftTo(-t,i):this.lShiftTo(t,i),i},h.prototype.shiftRight=function(t){var i=u();return t<0?this.lShiftTo(-t,i):this.rShiftTo(t,i),i},h.prototype.getLowestSetBit=function(){for(var t=0;t<this.t;++t)if(0!=this[t])return t*this.DB+B(this[t]);return this.s<0?this.t*this.DB:-1},h.prototype.bitCount=function(){for(var t=0,i=this.s&this.DM,r=0;r<this.t;++r)t+=D(this[r]^i);return t},h.prototype.testBit=function(t){var i=Math.floor(t/this.DB);return i>=this.t?0!=this.s:0!=(this[i]&1<<t%this.DB)},h.prototype.setBit=function(t){return this.changeBit(t,w)},h.prototype.clearBit=function(t){return this.changeBit(t,b)},h.prototype.flipBit=function(t){return this.changeBit(t,S)},h.prototype.add=function(t){var i=u();return this.addTo(t,i),i},h.prototype.subtract=function(t){var i=u();return this.subTo(t,i),i},h.prototype.multiply=function(t){var i=u();return this.multiplyTo(t,i),i},h.prototype.divide=function(t){var i=u();return this.divRemTo(t,i,null),i},h.prototype.remainder=function(t){var i=u();return this.divRemTo(t,null,i),i},h.prototype.divideAndRemainder=function(t){var i=u(),r=u();return this.divRemTo(t,i,r),new Array(i,r)},h.prototype.modPow=function(t,i){var r,o,s=t.bitLength(),e=m(1);if(s<=0)return e;r=s<18?1:s<48?3:s<144?4:s<768?5:6,o=s<8?new v(i):i.isEven()?new A(i):new T(i);var n=new Array,h=3,f=r-1,a=(1<<r)-1;if(n[1]=o.convert(this),r>1){var p=u();for(o.sqrTo(n[1],p);h<=a;)n[h]=u(),o.mulTo(p,n[h-2],n[h]),h+=2}var c,l,d=t.t-1,g=!0,w=u();for(s=y(t[d])-1;d>=0;){for(s>=f?c=t[d]>>s-f&a:(c=(t[d]&(1<<s+1)-1)<<f-s,d>0&&(c|=t[d-1]>>this.DB+s-f)),h=r;0==(1&c);)c>>=1,--h;if((s-=h)<0&&(s+=this.DB,--d),g)n[c].copyTo(e),g=!1;else{for(;h>1;)o.sqrTo(e,w),o.sqrTo(w,e),h-=2;h>0?o.sqrTo(e,w):(l=e,e=w,w=l),o.mulTo(w,n[c],e)}for(;d>=0&&0==(t[d]&1<<s);)o.sqrTo(e,w),l=e,e=w,w=l,--s<0&&(s=this.DB-1,--d)}return o.revert(e)},h.prototype.modInverse=function(t){var i=t.isEven();if(this.isEven()&&i||0==t.signum())return h.ZERO;for(var r=t.clone(),o=this.clone(),s=m(1),e=m(0),n=m(0),u=m(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),i?(s.isEven()&&e.isEven()||(s.addTo(this,s),e.subTo(t,e)),s.rShiftTo(1,s)):e.isEven()||e.subTo(t,e),e.rShiftTo(1,e);for(;o.isEven();)o.rShiftTo(1,o),i?(n.isEven()&&u.isEven()||(n.addTo(this,n),u.subTo(t,u)),n.rShiftTo(1,n)):u.isEven()||u.subTo(t,u),u.rShiftTo(1,u);r.compareTo(o)>=0?(r.subTo(o,r),i&&s.subTo(n,s),e.subTo(u,e)):(o.subTo(r,o),i&&n.subTo(s,n),u.subTo(e,u))}return 0!=o.compareTo(h.ONE)?h.ZERO:u.compareTo(t)>=0?u.subtract(t):u.signum()<0?(u.addTo(t,u),u.signum()<0?u.add(t):u):u},h.prototype.pow=function(t){return this.exp(t,new E)},h.prototype.gcd=function(t){var i=this.s<0?this.negate():this.clone(),r=t.s<0?t.negate():t.clone();if(i.compareTo(r)<0){var o=i;i=r,r=o}var s=i.getLowestSetBit(),e=r.getLowestSetBit();if(e<0)return i;for(s<e&&(e=s),e>0&&(i.rShiftTo(e,i),r.rShiftTo(e,r));i.signum()>0;)(s=i.getLowestSetBit())>0&&i.rShiftTo(s,i),(s=r.getLowestSetBit())>0&&r.rShiftTo(s,r),i.compareTo(r)>=0?(i.subTo(r,i),i.rShiftTo(1,i)):(r.subTo(i,r),r.rShiftTo(1,r));return e>0&&r.lShiftTo(e,r),r},h.prototype.isProbablePrime=function(t){var i,r=this.abs();if(1==r.t&&r[0]<=M[M.length-1]){for(i=0;i<M.length;++i)if(r[0]==M[i])return!0;return!1}if(r.isEven())return!1;for(i=1;i<M.length;){for(var o=M[i],s=i+1;s<M.length&&o<_;)o*=M[s++];for(o=r.modInt(o);i<s;)if(o%M[i++]==0)return!1}return r.millerRabin(t)},String.prototype.toIntArray=function(){for(var t,i,r,o=[],s=[],e=0,n=this+"\0\0\0",h=n.length-1;e<h;)t=n.charCodeAt(e++),i=n.charCodeAt(e+1),t<128?o.push(t):t<2048?(o.push(t>>>6&31|192),o.push(t>>>0&63|128)):55296!=(63488&t)?(o.push(t>>>12&15|224),o.push(t>>>6&63|128),o.push(t>>>0&63|128)):55296==(64512&t)&&56320==(64512&i)&&(r=65536+(63&i|(63&t)<<10),o.push(r>>>18&7|240),o.push(r>>>12&63|128),o.push(r>>>6&63|128),o.push(r>>>0&63|128),e++),o.length>3&&s.push(o.shift()<<0|o.shift()<<8|o.shift()<<16|o.shift()<<24);return s};var H=function(){var t=Array(256),i=0,r=0,o=0,s=Array(256),e=0;u(4294967295*Math.random());function n(t,i){var r=(65535&t)+(65535&i);return(t>>>16)+(i>>>16)+(r>>>16)<<16|65535&r}function h(){i=r=o=0;for(var n=0;n<256;++n)t[n]=s[n]=0;e=0}function u(i){var r,o,u,a,p,c,l,d,m;if(r=o=u=a=p=c=l=d=2654435769,i&&"string"==typeof i&&(i=i.toIntArray()),i&&"number"==typeof i&&(i=[i]),i instanceof Array)for(h(),m=0;m<i.length;m++)s[255&m]+="number"==typeof i[m]?i[m]:0;function y(){a=n(a,r^=o<<11),o=n(o,u),p=n(p,o^=u>>>2),u=n(u,a),c=n(c,u^=a<<8),a=n(a,p),l=n(l,a^=p>>>16),p=n(p,c),d=n(d,p^=c<<10),c=n(c,l),r=n(r,c^=l>>>4),l=n(l,d),o=n(o,l^=d<<8),d=n(d,r),u=n(u,d^=r>>>9),r=n(r,o)}for(m=0;m<4;m++)y();for(m=0;m<256;m+=8)i&&(r=n(r,s[m+0]),o=n(o,s[m+1]),u=n(u,s[m+2]),a=n(a,s[m+3]),p=n(p,s[m+4]),c=n(c,s[m+5]),l=n(l,s[m+6]),d=n(d,s[m+7])),y(),t[m+0]=r,t[m+1]=o,t[m+2]=u,t[m+3]=a,t[m+4]=p,t[m+5]=c,t[m+6]=l,t[m+7]=d;if(i)for(m=0;m<256;m+=8)r=n(r,t[m+0]),o=n(o,t[m+1]),u=n(u,t[m+2]),a=n(a,t[m+3]),p=n(p,t[m+4]),c=n(c,t[m+5]),l=n(l,t[m+6]),d=n(d,t[m+7]),y(),t[m+0]=r,t[m+1]=o,t[m+2]=u,t[m+3]=a,t[m+4]=p,t[m+5]=c,t[m+6]=l,t[m+7]=d;f(),e=256}function f(e){var h,u,f;for(e=e&&"number"==typeof e?Math.abs(Math.floor(e)):1;e--;)for(o=n(o,1),r=n(r,o),h=0;h<256;h++){switch(3&h){case 0:i^=i<<13;break;case 1:i^=i>>>6;break;case 2:i^=i<<2;break;case 3:i^=i>>>16}i=n(t[h+128&255],i),u=t[h],t[h]=f=n(t[u>>>2&255],n(i,r)),s[h]=r=n(t[f>>>10&255],u)}}return{reset:h,seed:u,prng:f,rand:function(){return e--||(f(),e=255),s[e]},internals:function(){return{a:i,b:r,c:o,m:t,r:s}}}}();H.random=function(){return.5+2.3283064365386963e-10*this.rand()};var R=function(){var t=!("undefined"==typeof window||!window.crypto||!window.crypto.getRandomValues)||!("undefined"==typeof window||!window.msCrypto||!window.msCrypto.getRandomValues);!function(){if(t)return!1;var i=+new Date+":"+Math.random();"undefined"!=typeof window&&window.cookie&&(i+=document.cookie);var r=n.SHA256||n.SHA1;H.seed(r(i))}();return{random:function(){var i;if(t){var r=window.crypto||window.msCrypto;i=new Int32Array(4),r.getRandomValues(i)}else{var o=+new Date%50;H.prng(1+o),i=new Array;for(var s=0;s<4;s++)i.push(H.rand())}var e="";for(s=0;s<4;s++){var n=i[s];n<0&&(n*=-1),e+=n.toString(16)}return e},isWebCryptoAPI:t,advance:function(i){if(!t)for(var r=+new Date+i,o=+new Date;o<r;){var s=o%5;H.prng(1+s),o=+new Date}}}}(),I=100;"undefined"!=typeof test_random16byteHexAdvance&&(I=test_random16byteHexAdvance),R.advance(I);function k(){this.INIT=0,this.STEP_1=1,this.STEP_2=2,this.STEP_3=3,this.state=this.INIT,this.x=null,this.v=null,this.I=null,this.P=null,this.salt=null,this.B=null,this.A=null,this.a=null,this.k=null,this.u=null,this.S=null,this.K=null,this.M1str=null,this.check=function(t,i){if(void 0===t||null===t||""===t||"0"===t)throw new Error(i+" must not be null, empty or zero")},this.generateX=function(t,i,r){this.check(t,"salt"),this.check(i,"identity"),this.check(r,"password"),this.salt=t;for(var o=this.H(i+":"+r);"0"===o.substring(0,1);)o=o.substring(1);for(var s=(t+o).toUpperCase(),e=this.H(s);"0"===e.substring(0,1);)e=e.substring(1);return this.x=this.fromHex(e).mod(this.N()),this.x},this.computeSessionKey=function(t,i,r,o,s){this.check(t,"k"),this.check(i,"x"),this.check(r,"u"),this.check(o,"a"),this.check(s,"B");var e=r.multiply(i).add(o),n=this.g().modPow(i,this.N()).multiply(t);return s.subtract(n).modPow(e,this.N())}}k.prototype.toHex=function(t){return t.toString(16)},k.prototype.fromHex=function(t){return new h(""+t,16)},k.prototype.BigInteger=function(t,i){return new h(""+t,i)},k.prototype.getState=function(){return this.state},k.prototype.getSessionKey=function(t){return null===this.S?null:(this.SS=this.toHex(this.S),void 0!==t&&!1===t?this.SS:(null===this.K&&(this.K=this.H(this.SS)),this.K))},k.prototype.getUserID=function(){return this.I},k.prototype.generateRandomSalt=function(t){var i=null;i=R.random();return this.H(new Date+":"+t+":"+i)},k.prototype.generateVerifier=function(t,i,r){var o=this.generateX(t,i,r);return this.v=this.g().modPow(o,this.N()),this.toHex(this.v)},k.prototype.step1=function(t,i){if(this.check(t,"identity"),this.check(i,"password"),this.I=t,this.P=i,this.state!==this.INIT)throw new Error("IllegalStateException not in state INIT");this.state=this.STEP_1},k.prototype.computeU=function(t,i){this.check(t,"Astr"),this.check(i,"Bstr");var r=new h(""+this.H(t+i),16);if(h.ZERO.equals(r))throw new Error("SRP6Exception bad shared public value 'u' as u==0");return r},k.prototype.random16byteHex=function(){return R.random()},k.prototype.randomA=function(t){for(var i=this.toHex(t).length,r=this.BigInteger("0",10),o=this.BigInteger("1",10),s=r;r.equals(s);){for(var e=this.random16byteHex()+this.random16byteHex();e.length<i;)e+=this.random16byteHex();var n=this.BigInteger(e,16);s=this.BigInteger(this.H(this.I+":"+this.salt+":"+(new Date).getTime()),16).add(n).modPow(o,t)}return s},k.prototype.step2=function(t,i){if(this.check(t,"s"),this.check(i,"BB"),this.state!==this.STEP_1)throw new Error("IllegalStateException not in state STEP_1");this.B=this.fromHex(i);var r=null;if(r=h.ZERO,this.B.mod(this.N()).equals(r))throw new Error("SRP6Exception bad server public value 'B' as B == 0 (mod N)");var o=this.generateX(t,this.I,this.P);this.P=null,this.a=this.randomA(this.N),this.A=this.g().modPow(this.a,this.N()),this.check(this.A,"A"),this.u=this.computeU(this.A.toString(16),i),this.S=this.computeSessionKey(this.k,o,this.u,this.a,this.B),this.check(this.S,"S");var s=this.toHex(this.A);for(this.M1str=this.H(s+i+this.toHex(this.S)),this.check(this.M1str,"M1str");"0"===this.M1str.substring(0,1);)this.M1str=this.M1str.substring(1);return this.state=this.STEP_2,{A:s,M1:this.M1str}},k.prototype.step3=function(t){if(this.check(t),this.state!==this.STEP_2)throw new Error("IllegalStateException State violation: Session must be in STEP_2 state");for(var i=this.H(this.toHex(this.A)+this.M1str+this.toHex(this.S));"0"===i.substring(0,1);)i=i.substring(1);if(""+i!=""+t)throw new Error("SRP6Exception Bad server credentials");return this.state=this.STEP_3,!0};function P(){}(P.prototype=new k).N=function(){return new h(o,10)},P.prototype.g=function(){return new h(s,10)},P.prototype.H=function(t){return n.SHA256(t).toString().toLowerCase()},P.prototype.k=new h(e,16),i.exports=P},{}]},{},[])("SRP6JavascriptClientSessionSHA256")});