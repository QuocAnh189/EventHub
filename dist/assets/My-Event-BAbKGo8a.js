var ce=Object.defineProperty;var oe=(s,e,n)=>e in s?ce(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var w=(s,e,n)=>oe(s,typeof e!="symbol"?e+"":e,n);import{b7 as p,aV as J,j as a,w as G,o as ie,r as u,ck as ue,cl as de,cm as pe,cn as fe,co as ge,cp as me,aM as he,cq as ve,bb as xe,cr as V,bU as ye,bV as be,cs as j,B as T,u as Ee}from"./index-DJCO8Dfg.js";import{P as je}from"./protected-CfuprWCo.js";import{P as Ce}from"./PageHeader-Dvd09tMC.js";import{u as ke,P as D}from"./Pagination-Bq7Xuqug.js";import{C as B}from"./CardMyEvent-C6rL8x9S.js";import{C as we}from"./Dialog-BFmqUljj.js";import{S as P}from"./index-BuNyPfgO.js";import{c as Pe,d as H}from"./event.type-DR50DJ6U.js";import{F as Ae}from"./FormGroup-bbfd8naf.js";import"./index-T3bh9t9-.js";import"./CircularProgress-JLASbDPe.js";const Se=()=>/^((?!chrome|android).)*safari/i.test(navigator.userAgent),z=s=>Array.isArray(s)&&s.every(e=>typeof e=="object"&&!(e instanceof Array)),Ne=s=>Array.isArray(s)&&s.every(e=>Array.isArray(e)),Le=s=>Array.from(s.map(e=>Object.keys(e)).reduce((e,n)=>new Set([...e,...n]),[])),Fe=(s,e)=>{e=e||Le(s);let n=e,r=e;z(e)&&(n=e.map(o=>o.label),r=e.map(o=>o.key));const c=s.map(o=>r.map(i=>Te(i,o)));return[n,...c]},Te=(s,e)=>{const n=s.replace(/\[([^\]]+)]/g,".$1").split(".").reduce(function(r,c,o,i){const d=r[c];if(d==null)i.splice(1);else return d},e);return n===void 0?s in e?e[s]:"":n},Oe=s=>typeof s>"u"||s===null?"":s,K=(s,e=",",n='"')=>s.filter(r=>r).map(r=>r.map(c=>Oe(c)).map(c=>`${n}${c}${n}`).join(e)).join(`
`),Re=(s,e,n,r)=>K(e?[e,...s]:s,n,r),Ie=(s,e,n,r)=>K(Fe(s,e),n,r),Me=(s,e,n,r)=>e?`${e.join(n)}
${s}`:s.replace(/"/g,'""'),Q=(s,e,n,r)=>{if(z(s))return Ie(s,e,n,r);if(Ne(s))return Re(s,e,n,r);if(typeof s=="string")return Me(s,e,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')},W=(s,e,n,r,c)=>{const o=Q(s,n,r,c),i=Se()?"application/csv":"text/csv",d=new Blob([e?"\uFEFF":"",o],{type:i}),v=`data:${i};charset=utf-8,${e?"\uFEFF":""}${o}`,x=window.URL||window.webkitURL;return typeof x.createObjectURL>"u"?v:x.createObjectURL(d)},X={data:p.oneOfType([p.string,p.array,p.func]).isRequired,headers:p.array,target:p.string,separator:p.string,filename:p.string,uFEFF:p.bool,onClick:p.func,asyncOnClick:p.bool,enclosingCharacter:p.string},Y={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1,enclosingCharacter:'"'},_e={target:"_blank"};class q extends J.Component{constructor(e){super(e),this.state={}}buildURI(){return W(...arguments)}componentDidMount(){const{data:e,headers:n,separator:r,enclosingCharacter:c,uFEFF:o,target:i,specs:d,replace:v}=this.props;this.state.page=window.open(this.buildURI(e,o,n,r,c),i,d,v)}getWindow(){return this.state.page}render(){return null}}w(q,"defaultProps",Object.assign(Y,_e)),w(q,"propTypes",X);var A;let Ue=(A=class extends J.Component{constructor(e){super(e),this.buildURI=this.buildURI.bind(this)}buildURI(){return W(...arguments)}handleLegacy(e,n=!1){if(window.navigator.msSaveOrOpenBlob){e.preventDefault();const{data:r,headers:c,separator:o,filename:i,enclosingCharacter:d,uFEFF:v}=this.props,x=n&&typeof r=="function"?r():r;let l=new Blob([v?"\uFEFF":"",Q(x,c,o,d)]);return window.navigator.msSaveBlob(l,i),!1}}handleAsyncClick(e){const n=r=>{if(r===!1){e.preventDefault();return}this.handleLegacy(e,!0)};this.props.onClick(e,n)}handleSyncClick(e){if(this.props.onClick(e)===!1){e.preventDefault();return}this.handleLegacy(e)}handleClick(){return e=>{if(typeof this.props.onClick=="function")return this.props.asyncOnClick?this.handleAsyncClick(e):this.handleSyncClick(e);this.handleLegacy(e)}}render(){const{data:e,headers:n,separator:r,filename:c,uFEFF:o,children:i,onClick:d,asyncOnClick:v,enclosingCharacter:x,...l}=this.props,y=typeof window>"u"?"":this.buildURI(e,o,n,r,x);return a.jsx("a",{download:c,...l,ref:S=>this.link=S,target:"_self",href:y,onClick:this.handleClick(),children:i})}},w(A,"defaultProps",Y),w(A,"propTypes",X),A);const $e=Ue,Ve=({t:s})=>{const e=ie(t=>t.persistedReducer.category.categories),[n,r]=u.useState(Pe),[c,{isLoading:o}]=ue(),[i,{isLoading:d}]=de(),[v,{isLoading:x}]=pe(),[l,O]=u.useState(),[y,S]=u.useState([]),[g,Z]=u.useState(fe.ALL),[E,R]=u.useState(!1),[I,C]=u.useState(!1),[m,M]=u.useState(H),[_,N]=u.useState(),[f,L]=u.useState([]),ee=u.useCallback(()=>{if(g==="ALL")return l==null?void 0:l.totalCount;if(g==="PUBLIC")return l==null?void 0:l.totalPublic;if(g==="PRIVATE")return l==null?void 0:l.totalPrivate},[l==null?void 0:l.totalCount,l==null?void 0:l.totalPublic,l==null?void 0:l.totalPrivate,g]);u.useEffect(()=>{S([]),O(void 0)},[g]);const b=ke(ee(),4);u.useEffect(()=>{r({...n,page:b.currentPage})},[b.currentPage]),u.useEffect(()=>{R(!1)},[g]),u.useEffect(()=>{L(E?y.map(t=>t.id):[])},[E]);const se=t=>{switch(t){case"ALL":return l==null?void 0:l.totalCount;case"PUBLIC":return l==null?void 0:l.totalPublic;case"PRIVATE":return l==null?void 0:l.totalPrivate}},F=({value:t,label:h},k)=>{M(le=>({...le,[k]:{value:t,label:h}}))},te=()=>{var t;r({...n,type:(t=m.status)==null?void 0:t.value,categoryIds:m.category.value})},ne=t=>{switch(C(!0),t.label){case"Move to Publics":N(j.PUBLIC);break;case"Move to Privates":N(j.PRIVATE);break;case"Move to Trash":N(j.TRASH);break}},U=t=>{if(f.includes(t)){const h=f.filter(k=>k!==t);L(h)}else L([...f,t])},ae=async()=>{switch(_){case j.PUBLIC:try{f.length&&await c(f).unwrap()&&(T.success("Move to public successfully"),C(!1))}catch(t){console.log(t)}break;case j.PRIVATE:try{f.length&&await i(f).unwrap()&&(T.success("Move to private successfully"),C(!1))}catch(t){console.log(t)}break;case j.TRASH:try{f.length&&await v(f).unwrap()&&(T.success("Move to trash successfully"),C(!1))}catch(t){console.log(t)}break}},re=t=>{r({...n,page:1}),b.goToPage(1),Z(t)},$=()=>{};return a.jsxs("div",{className:"flex flex-col flex-1",children:[a.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[a.jsxs("span",{className:"text-header",children:[s("management.label_event"),":"]}),a.jsx("div",{children:ge.map((t,h)=>a.jsx(me,{type:"filter",text:t.label,qty:se(t==null?void 0:t.value),value:t==null?void 0:t.value,active:g,onClick:k=>{re(k)}},`filter-${h}`))})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-x-6 xl:grid-cols-6",children:[a.jsx(P,{options:he,value:m==null?void 0:m.status,placeholder:s("management.label_status"),onChange:t=>F(t,"status")}),a.jsx(P,{options:e.map(t=>({value:t.id,label:t.name})),value:m==null?void 0:m.category,placeholder:s("management.label_category"),onChange:t=>F(t,"category")}),a.jsx(P,{options:ve,value:m.eventTicketType,placeholder:s("management.label_price"),onChange:t=>F(t,"eventTicketType")}),a.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[a.jsx("button",{className:"btn bg-primary flex text-white !gap-[5px]",onClick:te,children:s("management.filter")}),a.jsx("button",{className:"btn btn--outline blue !h-[44px]",onClick:()=>{M(H)},children:s("management.clear")})]})]}),a.jsx(xe,{wrapperClass:"lg:w-[326px]",placeholder:s("management.search_event"),onChange:t=>{r({...n,search:t})}})]}),a.jsxs("div",{className:"flex flex-col-reverse gap-4 mt-4 mb-5 md:flex-row md:justify-between md:items-end md:mt-5 md:mb-6",children:[a.jsxs("p",{className:"text-header",children:[" ",s("management.view_events"),": ",b.showingOf()]}),a.jsx("div",{className:"md:min-w-[280px]",children:a.jsx(P,{options:g==="ALL"?[V[2]]:V.filter(t=>t.value!==g),placeholder:s("management.select_action"),onChange:ne})})]}),y.length!==0&&a.jsx(Ae,{sx:{display:"flex",flexDirection:"row"},children:a.jsx(ye,{sx:{"& .MuiFormControlLabel-label":{color:"var(--header)"}},control:a.jsx(be,{sx:{color:"var(--header)"},checked:E,onChange:()=>{R(!E)}}),label:s("management.select_all")})}),y.length!==0&&a.jsxs("div",{className:"flex flex-col gap-[22px]",children:[a.jsx("div",{className:"w-full grid grid-cols-1 lgl:grid-cols-2 gap-10",children:y==null?void 0:y.map((t,h)=>a.jsx(B,{event:t,checkedAll:E,eventIds:f,onChecked:U,refect:$},`event-${h}`))}),b.maxPage>1&&a.jsx(D,{pagination:b})]}),a.jsxs("div",{className:"flex flex-col gap-[22px]",children:[a.jsx("div",{className:"w-full grid grid-cols-1 mdl:grid-cols-2 gap-10",children:Array(4).fill(1).map((t,h)=>a.jsx(B,{event:t,checkedAll:E,eventIds:f,onChecked:U,refect:$},`event-${h}`))}),b.maxPage>1&&a.jsx(D,{pagination:b})]}),I&&a.jsx(we,{title:"Action Event",description:`Are you sure want ${_} these events`,open:I,setOpen:t=>{C(t)},action:"Ok",onHandle:ae,disabled:o||d||x})]})},De=G("my_event")(Ve),Be=[["firstname","lastname","email"],["John","Doe","johndoe@domain.com"],["Jane","Doe","janedoe@domain.com"]],He=({t:s})=>{const e=Ee();return a.jsx(je,{children:a.jsxs("div",{className:"min-h-screen",children:[a.jsx(Ce,{title:s("header.title")}),a.jsx("div",{className:"flex flex-col-reverse gap-4 mb-5 md:flex-col lg:flex-row lg:justify-between",children:a.jsxs("div",{className:"flex flex-col gap-4 md:flex-row md:gap-[14px]",children:[a.jsxs("button",{onClick:()=>{e("/organization/event/create-event")},className:"btn btn--primary",children:[s("body.title")," ",a.jsx("i",{className:"icon-circle-plus-regular"})]}),a.jsxs($e,{className:"btn btn--outline blue !h-[44px]",data:Be,children:[s("body.link_csv")," ",a.jsx("i",{className:"icon-file-export-solid"})]})]})}),a.jsx(De,{})]})})},ns=G("my_event")(He);export{ns as default};