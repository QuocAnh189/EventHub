import{w as j,u as v,h as O,j as e,B as w,r as i,e as _,f as C,a as U,g as z,i as I,l as $,s as A}from"./index-B7v0BYK_.js";import{u as R}from"./index.esm-DrYQlF8f.js";import{o as W,s as N,t as M,b as B,c as H,a as L}from"./bg_auth-DM2QhFFz.js";import{c as y}from"./index-C0VBPpv-.js";import{m as t}from"./motion-zw3TknLN.js";import{a as V}from"./index.prod-rQVgnuLN.js";import{C as G}from"./CircularProgress-C-dJdc2w.js";const J=new RegExp("^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"),X=W({email:N().min(1,{message:"Email is not empty"}).max(50,{message:"Email must not exceed 50 characters"}).email("Email invalid"),fullName:N().min(1,"Name is not empty").max(32,{message:"Name must not exceed 32 characters"}),phoneNumber:N().min(1,"Phone is not empty").regex(J,"Phone is invalid").max(12,{message:"phone must not exceed 12 characters"})}),q=n=>{const{t:a,formDataSessionOne:u,setFormDataSessionOne:r,nextSession:h}=n,x=v(),[l,{isLoading:f}]=O(),{register:o,handleSubmit:b,formState:{errors:s}}=R({resolver:M(X),defaultValues:u}),p=async c=>{try{await l(c).unwrap()&&h()}catch(m){switch(m.data.message){case"Email already exists":w.error("Email already exists");break;case"Phone number already exists":w.error("Phone already exists");break}}};return e.jsxs("div",{className:"mt-4 flex flex-col items-center",children:[e.jsxs("form",{onSubmit:b(p),className:"mt-4 flex flex-col w-4/5 sm:w-full",children:[e.jsxs(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.3},className:"relative mb-6",children:[e.jsx("input",{...o("email"),className:y("field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]",{"field-input--error":s.email}),type:"email",name:"email",placeholder:a("session_one.email_placeholder"),onChange:r}),s.email&&e.jsx("p",{className:"mt-1 text-red",children:s.email.message})]}),e.jsxs(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.4},className:"relative mb-6",children:[e.jsx("input",{className:y("field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]",{"field-input--error":s.fullName}),...o("fullName"),type:"text",name:"fullName",placeholder:a("session_one.fullname_placeholder"),onChange:r}),s.fullName&&e.jsx("p",{className:"mt-1 text-red",children:s.fullName.message})]}),e.jsxs(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.5},className:"relative mb-6",children:[e.jsx("input",{className:y("field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]",{"field-input--error":s.phoneNumber}),...o("phoneNumber"),type:"text",name:"phoneNumber",placeholder:a("session_one.phone_placeholder"),onChange:r}),s.phoneNumber&&e.jsx("p",{className:"mt-1 text-red",children:s.phoneNumber.message})]}),e.jsx(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.6},children:e.jsx("button",{disabled:f,type:"submit",className:"flex w-full btn hover:bg-blue-light2 bg-blue-light3 text-white",children:a("session_one.submit_btn")})})]}),e.jsxs(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.7},className:"mt-3 flex w-full flex-col gap-y-2",children:[e.jsx("button",{onClick:()=>x("/signin"),className:"block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-gray-light2 text-header",children:a("session_one.option")}),e.jsx("button",{className:"block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-gray-light2 text-header",onClick:()=>{x(-1)},children:a("session_one.back_btn")})]})]})},K=j("signup")(q),Q=n=>{const{t:a,formDataSessionTwo:u,handleSubmit:r,setFormDataSessionTwo:h,backSession:x,disabled:l}=n,f=v(),[o,b]=i.useState(!1),[s,p]=i.useState(!1),[c,m]=i.useState(!1);return e.jsxs("div",{className:"mt-4 flex flex-col items-center",children:[e.jsxs("div",{className:"mt-4 flex flex-col w-4/5 sm:w-full",children:[e.jsxs(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.4},className:"relative mb-6",children:[e.jsx("input",{className:y("field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]"),type:s?"text":"password",value:u.password,name:"password",placeholder:a("session_two.password_placeholder"),onChange:h}),e.jsx("button",{className:"absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer",onClick:()=>{p(!s)},children:s?e.jsx(_,{className:" h-[20px] w-[20px]"}):e.jsx(C,{className:" h-[20px] w-[20px]"})})]}),e.jsxs(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.5},className:"relative mb-6","data-te-input-wrapper-init":!0,children:[e.jsx("input",{className:y("field-input text-header block min-h-[auto] w-full rounded-2xl border-[2px] px-3 py-6 font-semibold placeholder-gray-400 outline-none placeholder:italic focus:border-[2px]"),type:c?"text":"password",name:"confirmPassword",placeholder:a("session_two.confirm_password_placeholder")}),e.jsx("button",{className:"absolute right-4 top-[50%] translate-y-[-50%] cursor-pointer",onClick:()=>{m(!c)},children:c?e.jsx(_,{className:" h-[20px] w-[20px]"}):e.jsx(C,{className:" h-[20px] w-[20px]"})})]}),e.jsxs(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.6},className:"mb-4 flex w-full items-center justify-start text-right",children:[e.jsx(V,{onChange:()=>{b(!o)},checked:o}),e.jsxs("span",{className:"ml-[10px] mt-0 inline-block h-[30px] text-sm font-semibold leading-[30px] text-header",children:["Accept ",e.jsx("a",{className:"text-blue-light2 outline-none",children:"Terms of use "}),"and",e.jsx("a",{className:"text-blue-light2 outline-none",children:" Privacy policy"})]})]}),e.jsx(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.7},children:e.jsx("button",{className:"flex w-full btn hover:bg-blue-light2 bg-blue-light3 text-white",disabled:l,onClick:r,children:l?e.jsx(G,{size:28,color:"info"}):a("session_two.signup_btn")})})]}),e.jsxs(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.7},className:"mt-3 flex w-full flex-col gap-y-2",children:[e.jsx("button",{onClick:()=>f("/signin"),className:"block w-full py-4 text-sm font-semibold hover:rounded-[18px] hover:bg-gray-light2 text-header",children:a("session_two.option")}),e.jsx("button",{className:"block w-full py-4 text-sm font-bold hover:rounded-[18px] hover:bg-gray-light2 text-header",onClick:x,children:a("session_two.back_btn")})]})]})},Y=j("signup")(Q),Z=({t:n})=>{const a=U(),u=v(),{width:r}=z(),[h,{isLoading:x}]=I(),[l,f]=i.useState(B),[o,b]=i.useState(H),[s,p]=i.useState(!0),[c,m]=i.useState(!1),S=i.useMemo(()=>()=>{p(!1),m(!0)},[]),F=i.useMemo(()=>()=>{p(!0),m(!1)},[]),E=d=>{f({...l,[d.target.name]:d.target.value})},P=d=>{b({...o,[d.target.name]:d.target.value})},T=async()=>{const d={...l,...o};try{const g=await h(d).unwrap();if(g){localStorage.setItem("token",JSON.stringify(g));const k=await(await fetch("https://eventhubsolutionbackendserverplan.azurewebsites.net/api/auth/profile",{headers:{Authorization:`Bearer ${g.accessToken}`}})).json();k&&(a(A(k.data)),u("/organization"))}}catch(g){switch(g.data.message){case"Email already exists":w.error("Email already exists");break;case"Phone number already exists":w.error("Phone already exists");break}}};return e.jsxs("div",{className:"flex-1 grid grid-cols-1 xl:grid-cols-2 4xl:grid-cols-[minmax(0,_1030px)_minmax(0,_1fr)]",children:[r>=1280&&e.jsxs("div",{className:"flex flex-col justify-center items-center lg:p-[60px]",children:[e.jsx("a",{className:"logo",href:"/",children:e.jsx("img",{loading:"lazy",src:$,alt:"EventHub",className:"w-[200px] object-cover"})}),e.jsx("p",{className:"text-center tracking-[0.2px] font-semibold text-lg leading-6 max-w-[540px] my-7 mx-auto",children:n("slogan")}),e.jsx("img",{loading:"lazy",className:"max-w-[780px]",src:L,alt:"media"})]}),e.jsx("div",{className:"relative w-full h-screen flex justify-center items-center",children:e.jsx(t.main,{initial:{y:-10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.1},className:"mx-auto mt-auto flex min-h-screen w-full max-w-full flex-col overflow-hidden bg-pink",children:e.jsxs("div",{className:"absolute left-[50%] top-[50%] min-h-full w-[600px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[50px] bg-body px-[100px] py-[60px] mdl:min-h-[600px]",children:[e.jsx(t.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},transition:{duration:.4,delay:.2},className:"mb-[30px] flex flex-row items-center justify-center gap-x-4",children:e.jsx("h1",{className:"text-4xl font-semibold",children:n("title")})}),e.jsxs("div",{className:"block h-full",children:[s&&e.jsx(K,{nextSession:S,formDataSessionOne:l,setFormDataSessionOne:E}),c&&e.jsx(Y,{backSession:F,formDataSessionTwo:o,setFormDataSessionTwo:P,handleSubmit:T,disabled:x})]}),e.jsx("div",{className:"absolute bottom-0 left-[50%] min-h-[40px] w-full translate-x-[-50%] text-center",children:e.jsxs("p",{className:"font-semibold text-header",children:[n("footer_one")," - ",e.jsx("span",{className:"font-bold text-header",children:n("footer_two")})]})})]})})})]})},le=j("signup")(Z);export{le as default};