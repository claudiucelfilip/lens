"use strict";var precacheConfig=[["/index.html","7761aea9ae0fbb14bfc5c4342c0c197a"],["/static/css/main.851891ff.css","851891ff45c64bc1017f885ba6cb778f"],["/static/media/alert-question.0c82472f.svg","0c82472f15dffe48f7d7a43c1dfc6f10"],["/static/media/cancel-card.7d055c8c.svg","7d055c8c5876ad1efe8a57407ccd1c56"],["/static/media/check-icon.42ca45ef.svg","42ca45efd383b06341c8a1faeef5c3b0"],["/static/media/close-icon.0448b84d.svg","0448b84dc57d1146c8d2cc793e1afa82"],["/static/media/copy-icon.523ca21d.svg","523ca21d3f059262d01997cdd2fdafe2"],["/static/media/datacard-earnings.57582424.svg","575824244456af2406ece4dc6963902e"],["/static/media/datacard-network.9e680443.svg","9e680443e58fd752a109dbaa99e7f8ff"],["/static/media/datacard-stake.ed444d89.svg","ed444d89e1f1d4c04833ee79159abdf1"],["/static/media/datacard-wallet.5d96f51b.svg","5d96f51bc4d5a0e5c71d93f724ac706e"],["/static/media/diff-down.3712cab1.svg","3712cab16de5283c18ad4698d692c95e"],["/static/media/diff-up.25a493e5.svg","25a493e5e4f7bbe659cec0c41b633abd"],["/static/media/discord-icon.e239387c.svg","e239387c478056d9b594b39ec9d966dc"],["/static/media/hkgrotesk-medium.1fcfefce.otf","1fcfefce27bbf40f4afbace8277a8ed3"],["/static/media/hkgrotesk-regular.eb9ec08a.otf","eb9ec08a175971d6d4bcb36bff5a6b46"],["/static/media/hkgrotesk-semibold.48fb40f9.otf","48fb40f931a51e55b7efaaf80407718f"],["/static/media/information.d1e1d27d.svg","d1e1d27d0c9e5b4f9885fadb47abdcb2"],["/static/media/lens-icon.5ac67392.svg","5ac673920ff96f17fb2127ca0e31d927"],["/static/media/main-background.c73849e2.svg","c73849e2df5ad9e83f11253fe7384390"],["/static/media/montserrat-medium.d815b0a2.otf","d815b0a29adf3450c55f56e2fb813be4"],["/static/media/montserrat-regular.92db9a07.otf","92db9a0772b3732e6d686fec3711af42"],["/static/media/montserrat-semibold.bb3740d3.otf","bb3740d350b0186ce32b5678972bf061"],["/static/media/navbar-dashboard.c574d205.svg","c574d20530803c1b3ad33985e24dd37f"],["/static/media/navbar-developer.01c5ebb3.svg","01c5ebb3f7e466f2b88717758de593c3"],["/static/media/navbar-logout.241d68ae.svg","241d68ae6027aedfb142ff044de66690"],["/static/media/navbar-settings.efe1bba1.svg","efe1bba1ee7e0d4ed679b622b1978f44"],["/static/media/navbar-validator.39e416ec.svg","39e416ecadb6885eb71930ec9d9d5534"],["/static/media/pencil-edit-button.97f916e1.svg","97f916e1613f088478a72df1cbe472a3"],["/static/media/perl-mini-icon.02517176.svg","025171763949c0c77724da47a22b0b0c"],["/static/media/perlin-logo.99d10a56.svg","99d10a564c71fcbc4037da8f93c12840"],["/static/media/qr-icon.3b9f32af.svg","3b9f32af3ab58ad2ae570f29831472fd"],["/static/media/quicksend-error.af68a4cd.svg","af68a4cd5e86cf1ce7953528546a281f"],["/static/media/quicksend-success.48d887b5.svg","48d887b5228dc23958fc71f7c3b50c79"],["/static/media/quicksend-thumbsup.9132cb7e.svg","9132cb7e616178f64fc4edc221a3363e"],["/static/media/tick.6d47ec90.svg","6d47ec9052fbeba0a27265bb972a65b5"],["/static/media/user-icon.0fa211df.svg","0fa211df404bf9b78ad893dff4220c32"],["/static/media/warning.ec9182ee.svg","ec9182ee50b3009506b319ae203ec073"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return t.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,t=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,c),e=urlsToCacheKeys.has(t));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(t=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(t)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});