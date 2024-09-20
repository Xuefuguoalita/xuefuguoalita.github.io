(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4158:function(e,t,a){Promise.resolve().then(a.bind(a,8212))},8212:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var i=a(7437),r=a(2265),n=a(6648),s=a(7138),o=a(8521),c=a(4446),l=a(414),d=a(1942),m=a(9675);function h(){let[e,t]=(0,r.useState)("All Works"),[a,h]=(0,r.useState)([]);(0,r.useEffect)(()=>{let e=new Set;l.forEach(t=>{t.tags.forEach(t=>e.add(t))}),h(["All Works",...Array.from(e)])},[]);let g="All Works"===e?l:l.filter(t=>t.tags.includes(e));return(0,i.jsx)("div",{className:"relative",children:(0,i.jsxs)("div",{className:"grid grid-cols-5 min-h-screen",children:[(0,i.jsx)("aside",{className:"col-span-1 p-8 text-gray-400",children:(0,i.jsxs)("div",{className:"sticky top-0",children:[(0,i.jsx)(m.default,{}),(0,i.jsx)("p",{className:"leading-relaxed mb-8",children:"Fuguo Xue is a media artist specializing in interactive installations and creative technologies. Her work blends AI, creative coding, and immersive experiences. Exhibitions include Ars Electronica and more."}),(0,i.jsx)("div",{className:"mb-8 flex flex-col space-y-2",children:a.map(a=>(0,i.jsx)("button",{onClick:()=>t(a),className:"mr-4 text-left py-2 border-b-2 transition-all duration-300 ".concat(e===a?"border-gray-300 text-gray-300":"border-b-2 border-transparent hover:border-gray-200 transition-border duration-300"),children:a},a))}),(0,i.jsxs)("div",{className:"flex items-center space-x-4",children:[" ",(0,i.jsx)(s.default,{href:"https://vimeo.com/your-profile",target:"_blank",children:(0,i.jsx)(d.H0w,{className:"w-6 h-6 hover:text-gray-300 transition"})}),(0,i.jsx)(s.default,{href:"https://linkedin.com/in/your-profile",target:"_blank",children:(0,i.jsx)(d.BUd,{className:"w-6 h-6 hover:text-gray-300 transition"})}),(0,i.jsx)(s.default,{href:"https://github.com/your-profile",target:"_blank",children:(0,i.jsx)(d.hJX,{className:"w-6 h-6 hover:text-gray-300 transition"})}),(0,i.jsx)(s.default,{href:"https://instagram.com/your-profile",target:"_blank",children:(0,i.jsx)(d.Zf_,{className:"w-6 h-6 hover:text-gray-300 transition"})})]})]})}),(0,i.jsx)("main",{className:"col-span-4",children:(0,i.jsx)(o.E.div,{layout:!0,className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0",children:(0,i.jsx)(c.M,{children:g.filter(e=>!e.hidden).map(e=>(0,i.jsxs)(o.E.div,{layout:!0,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.3},className:"relative group",children:[(0,i.jsx)("div",{className:"w-full h-64 overflow-hidden",children:(0,i.jsx)(s.default,{href:"/projects/".concat(e.name.replace(/\s+/g,"-").toLowerCase()),children:(0,i.jsx)(n.default,{src:e.imgURL,alt:e.name,width:400,height:400,objectFit:"cover",className:"w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"})})}),(0,i.jsx)(s.default,{href:"/projects/".concat(e.name.replace(/\s+/g,"-").toLowerCase()),children:(0,i.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300",children:(0,i.jsxs)("div",{className:"text-center",children:[(0,i.jsx)("h3",{className:"text-white text-xl font-bold",children:e.name}),(0,i.jsx)("p",{className:"text-gray-300",children:e.year}),(0,i.jsx)("p",{className:"text-gray-300",children:e.tags.join(", ")})]})})})]},e.name))})})})]})})}},9675:function(e,t,a){"use strict";var i=a(7437),r=a(2265);t.default=()=>{let e=(0,r.useRef)(null),[t,a]=(0,r.useState)(0),[n,s]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=e=>{a(e.clientX),s(e.clientY)};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),(0,r.useEffect)(()=>{let a;let i=r=>{if(e.current){let{innerWidth:a,innerHeight:i}=window,s=Math.floor(t/a*255),o=Math.floor(n/i*255),c=Math.floor((Math.sin(.001*r)+1)*127);e.current.style.textShadow="\n          0px 0px 8px rgba(".concat(s,", ").concat(o,", ").concat(c,", 0.8),\n          0px 0px 10px rgba(").concat(s,", ").concat(o,", ").concat(c,", 0.6),\n          0px 0px 20px rgba(").concat(s,", ").concat(o,", ").concat(c,", 0.5),\n          0px 0px 40px rgba(").concat(s,", ").concat(o,", ").concat(c,", 0.4)\n        "),e.current.style.color="rgb(".concat(s,", ").concat(o,", ").concat(c,")")}a=requestAnimationFrame(i)};return a=requestAnimationFrame(i),()=>{cancelAnimationFrame(a)}},[t,n]),(0,i.jsx)("div",{children:(0,i.jsxs)("h1",{ref:e,className:"mb-10 font-light tracking-wide title-shadow",onClick:()=>window.location.href="/",children:["Fuguo's",(0,i.jsx)("br",{}),"Media Space"]})})}},414:function(e){"use strict";e.exports=JSON.parse('[{"name":"Tree of Growth","tags":["Creative Coding","Interactive Installation"],"year":"2024","imgURL":"/imgs/Tree-of-Growth.jpg","hidden":false,"description":"Inspired by L-systems, known for their ability to generate customized recursive patterns, Tree of Growth is an interactive projection that brings the art of tree planting to life. By simply placing a red box (the “seed”) on the floor at different positions, participants can “grow” a diverse array of trees, each with unique shapes and characteristics. \\nThis project is a collaboration between Fuguo Xue and Jinyuan Liu.","time":"1 month","media":"interactive projection built with Max MSP, and a block made with woodboard and acrylic paint.","mentors":["Joshua Goldberg","Rob Ramirez"]},{"name":"The Surface City","tags":["Creative Coding","Storytelling"],"year":"2024","imgURL":"/imgs/The-Surface-City-cover.gif","hidden":false,"description":"The Surface City is a concept design and storytelling experience enhanced by creative coding. It aims to explore the patterns of cities with code and the potential of 2D tiles in creating 3D visual effects.\\nThe Surface City is a collaboration between Fuguo and Chenyi. It is part of the Visible Cities: Workshop Exhibition organized by CritLab Review.","time":"2 weeks","media":"generative landscape done by p5.js coding and Adobe Illustrator.","mentors":["Thiago Hersan","Alexandra Marraccini"]},{"name":"WildWeb","tags":["Interactive Installation","Creative Coding"],"year":"2023","imgURL":"/imgs/wildweb-cover.jpg","hidden":false,"description":"","time":"","media":"","mentors":[]},{"name":"AquaMetropolis","tags":["Animation","Storytelling","Artificial Intelligence"],"year":"2023","imgURL":"/imgs/aquametropolis-cover.gif","hidden":false,"description":"","time":"","media":"","mentors":[]},{"name":"Cometale","tags":["Interactive Installation","Museum Experience","Artificial Intelligence"],"year":"2023","imgURL":"/imgs/cometale-cover.gif","hidden":false,"description":"","time":"","media":"","mentors":[]},{"name":"Earthlings","tags":["Game"],"year":"2022","imgURL":"/imgs/earthlings-cover.gif","hidden":false,"description":"","time":"","media":"","mentors":[]},{"name":"Cat Jazz","tags":["Animation"],"year":"2020","imgURL":"/imgs/cat-jazz-cover.gif","hidden":false,"description":"","time":"","media":"","mentors":[]}]')}},function(e){e.O(0,[699,540,205,971,23,744],function(){return e(e.s=4158)}),_N_E=e.O()}]);