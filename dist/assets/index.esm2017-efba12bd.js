import{n as y,C as I,q as N,u as C,x as g,y as D,z as O,A as _}from"./index-a28a6519.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P="type.googleapis.com/google.protobuf.Int64Value",S="type.googleapis.com/google.protobuf.UInt64Value";function w(e,t){const n={};for(const r in e)e.hasOwnProperty(r)&&(n[r]=t(e[r]));return n}function h(e){if(e==null)return null;if(e instanceof Number&&(e=e.valueOf()),typeof e=="number"&&isFinite(e)||e===!0||e===!1||Object.prototype.toString.call(e)==="[object String]")return e;if(e instanceof Date)return e.toISOString();if(Array.isArray(e))return e.map(t=>h(t));if(typeof e=="function"||typeof e=="object")return w(e,t=>h(t));throw new Error("Data cannot be encoded in JSON: "+e)}function d(e){if(e==null)return e;if(e["@type"])switch(e["@type"]){case P:case S:{const t=Number(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t}default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(t=>d(t)):typeof e=="function"||typeof e=="object"?w(e,t=>d(t)):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class u extends _{constructor(t,n,r){super(`${m}/${t}`,n||""),this.details=r}}function b(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function v(e,t){let n=b(e),r=n,i;try{const o=t&&t.error;if(o){const s=o.status;if(typeof s=="string"){if(!T[s])return new u("internal","internal");n=T[s],r=s}const c=o.message;typeof c=="string"&&(r=c),i=o.details,i!==void 0&&(i=d(i))}}catch{}return n==="ok"?null:new u(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=t.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||t.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const t=await this.auth.getToken();return t==null?void 0:t.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(){if(this.appCheck){const t=await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(){const t=await this.getAuthToken(),n=await this.getMessagingToken(),r=await this.getAppCheckToken();return{authToken:t,messagingToken:n,appCheckToken:r}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p="us-central1";function R(e){let t=null;return{promise:new Promise((n,r)=>{t=setTimeout(()=>{r(new u("deadline-exceeded","deadline-exceeded"))},e)}),cancel:()=>{t&&clearTimeout(t)}}}class F{constructor(t,n,r,i,o=p,s){this.app=t,this.fetchImpl=s,this.emulatorOrigin=null,this.contextProvider=new L(n,r,i),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(o);this.customDomain=c.origin,this.region=p}catch{this.customDomain=null,this.region=o}}_delete(){return this.deleteService()}_url(t){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${t}`:this.customDomain!==null?`${this.customDomain}/${t}`:`https://${this.region}-${n}.cloudfunctions.net/${t}`}}function U(e,t,n){e.emulatorOrigin=`http://${t}:${n}`}function x(e,t,n){return r=>M(e,t,r,n||{})}async function $(e,t,n,r){n["Content-Type"]="application/json";let i;try{i=await r(e,{method:"POST",body:JSON.stringify(t),headers:n})}catch{return{status:0,json:null}}let o=null;try{o=await i.json()}catch{}return{status:i.status,json:o}}function M(e,t,n,r){const i=e._url(t);return G(e,i,n,r)}async function G(e,t,n,r){n=h(n);const i={data:n},o={},s=await e.contextProvider.getContext();s.authToken&&(o.Authorization="Bearer "+s.authToken),s.messagingToken&&(o["Firebase-Instance-ID-Token"]=s.messagingToken),s.appCheckToken!==null&&(o["X-Firebase-AppCheck"]=s.appCheckToken);const c=r.timeout||7e4,l=R(c),a=await Promise.race([$(t,i,o,e.fetchImpl),l.promise,e.cancelAllRequests]);if(l.cancel(),!a)throw new u("cancelled","Firebase Functions instance was deleted.");const E=v(a.status,a.json);if(E)throw E;if(!a.json)throw new u("internal","Response is not valid JSON object.");let f=a.json.data;if(typeof f>"u"&&(f=a.json.result),typeof f>"u")throw new u("internal","Response is missing data field.");return{data:d(f)}}const A="@firebase/functions",k="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="auth-internal",J="app-check-internal",V="messaging-internal";function B(e,t){const n=(r,{instanceIdentifier:i})=>{const o=r.getProvider("app").getImmediate(),s=r.getProvider(H),c=r.getProvider(V),l=r.getProvider(J);return new F(o,s,c,l,i,e)};y(new I(m,n,"PUBLIC").setMultipleInstances(!0)),N(A,k,t),N(A,k,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e=O(),t=p){const r=C(g(e),m).getImmediate({identifier:t}),i=D("functions");return i&&X(r,...i),r}function X(e,t,n){U(g(e),t,n)}function K(e,t,n){return x(g(e),t,n)}B(fetch.bind(self));export{q as g,K as h};
