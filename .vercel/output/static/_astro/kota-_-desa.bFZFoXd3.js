import{_ as w,d as A}from"./_plugin-vue_export-helper.DSnAsZRi.js";import{d as B,o as i,c as d,a as e,n as f,F as m,r as D,b as j,e as r,f as K,w as N,t as g,g as x}from"./runtime-core.esm-bundler.DIGt3tjX.js";const E=B({__name:"kota-&-desa",setup(p,{expose:s}){s();const l=r(A.city_villages),a=r(),o=r(!0),n=r(!1),t=r(!1),h=()=>{o.value=!0,n.value=!1,t.value=!1},b=()=>{o.value=!1,n.value=!0,t.value=!1},_=()=>{o.value=!1,n.value=!1,t.value=!0};K(()=>{a.value=l.value.sort(()=>Math.random()-.5).slice(0,6)}),N([o,n,t],([v,y,k])=>{v?a.value=l.value.sort(()=>Math.random()-.5).slice(0,6):y?a.value=l.value.filter(c=>c.destination==="Kota").sort(()=>Math.random()-.5).slice(0,6):k&&(a.value=l.value.filter(c=>c.destination==="Desa").sort(()=>Math.random()-.5).slice(0,6))});const u={destinations:l,filtered:a,allBtn:o,kotaBtn:n,desaBtn:t,toggleAllBtn:h,toggleKotaBtn:b,toggleDesaBtn:_};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),S=e("div",{class:"h-[40rem] w-full bg-gradient-to-t from-black opacity-60 z-0 absolute"},null,-1),M=e("div",{class:"h-3/5 w-[85%] flex items-end justify-center z-10"},[e("h1",{class:"text-3xl md:text-5xl text-slate-50 cursor-default font-semibold text-center","data-aos":"fade-up"},[x(" BERKELANA "),e("br"),x(" DI KOTA & DESA ")])],-1),z=[S,M],C=e("section",{class:"h-fit w-[85%] flex flex-col items-center mb-10 mt-20 mx-auto","data-aos":"fade-up"},[e("h2",{class:"text-2xl md:text-3xl text-gray-950 cursor-default font-semibold my-3 text-center","data-aos":"fade-up"}," TEMUKAN KEINDAHAN DI SETIAP JALAN KOTA DAN DESA "),e("hr",{class:"h-0.5 w-full bg-gray-950","data-aos":"fade-up"}),e("p",{class:"text-base md:text-xl my-3 text-gray-950 cursor-default font-medium text-justify",style:{textAlignLast:"center"},"data-aos":"fade-up"}," Jelajahi pesona kota yang modern dan desa yang asri dalam satu perjalanan! Nikmati kehidupan perkotaan yang dinamis dan kemudian meresapi ketenangan desa yang memesona. Keindahan di setiap kota dan desa menanti untuk dijelajahi! ")],-1),I={class:"h-fit w-[85%] mt-14 mx-auto","data-aos":"fade-up"},T={class:"my-10 w-full md:w-3/4 lg:w-1/2 grid grid-cols-3 gap-4"},L={class:"h-fit w-[85%] grid place-items-center mx-auto my-6","data-aos":"fade-up"},O={key:0,class:"w-full h-fit grid items-center sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3"},V=["href"],F=e("div",{class:"min-w-full min-h-full bg-gradient-to-t from-black opacity-50 hover:opacity-80 transition-opacity duration-100 z-20"},null,-1),J={class:"absolute max-w-72 flex flex-col items-center z-20 text-slate-100 font-semibold text-center"},P={class:"text-xl lg:text-2xl my-1 mx-7"},$={class:"text-base lg:text-lg mb-6"},H=e("h4",{class:"h-fit w-full text-1xl text-center italic cursor-default font-semibold mb-4 mt-10 mx-auto","data-aos":"fade-up"}," Dan masih banyak lagi...~ ",-1);function R(p,s,l,a,o,n){return i(),d(m,null,[e("section",{class:"hero h-[40rem] w-full grid place-items-center bg-center bg-cover bg-no-repeat",style:f({backgroundImage:"url(/static/img/surabaya.jpg?url)"})},z,4),C,e("section",I,[e("div",T,[e("button",{onClick:s[0]||(s[0]=t=>a.toggleAllBtn()),class:"border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-slate-50 transition-colors text-lg focus:text-slate-50 focus:bg-slate-900"}," Semua "),e("button",{onClick:s[1]||(s[1]=t=>a.toggleKotaBtn()),class:"border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-slate-50 transition-colors text-lg focus:text-slate-50 focus:bg-slate-900"}," Kota "),e("button",{onClick:s[2]||(s[2]=t=>a.toggleDesaBtn()),class:"border border-slate-900 px-4 py-2 hover:bg-slate-900 hover:text-slate-50 transition-colors text-lg focus:text-slate-50 focus:bg-slate-900"}," Desa ")])]),e("section",L,[a.filtered!=null?(i(),d("div",O,[(i(!0),d(m,null,D(a.filtered,t=>(i(),d("a",{href:t.link,key:t.city,style:f({"background-image":"url("+t.img+")"}),class:"w-full h-64 mx-auto flex flex-col items-center justify-end object-cover object-center bg-cover cursor-pointer","data-aos":"fade-up"},[F,e("div",J,[e("h3",P,g(t.city),1),e("h4",$,g(t.destination),1)])],12,V))),128))])):j("",!0),H])],64)}const G=w(E,[["render",R]]);export{G as default};
