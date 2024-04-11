"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[940],{948:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=o(7624),n=o(4552);const s={displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},r="Unlock More Flexibility with Code",a={id:"askui-studio/Onboarding-Guide/unlock-more-flexibility-with-code",title:"Unlock More Flexibility with Code",description:"Sometimes creating workflows with a No Code-Editor like the Workflow Editor of AskUI Studio is not enough to describe complex workflows \ud83e\udd14.",source:"@site/docs/askui-studio/02-Onboarding-Guide/04-unlock-more-flexibility-with-code.md",sourceDirName:"askui-studio/02-Onboarding-Guide",slug:"/askui-studio/Onboarding-Guide/unlock-more-flexibility-with-code",permalink:"/docs/askui-studio/Onboarding-Guide/unlock-more-flexibility-with-code",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},sidebar:"askuiStudioSidebar",previous:{title:"Start Working with Workflows",permalink:"/docs/askui-studio/Onboarding-Guide/start-working-with-workflows"},next:{title:"Integrations",permalink:"/docs/askui-studio/Onboarding-Guide/integrations"}},l={},c=[{value:"Switch to Code View",id:"switch-to-code-view",level:2},{value:"The Basics",id:"the-basics",level:2},{value:"What Can You Do with Code?",id:"what-can-you-do-with-code",level:3},{value:"Get a Value Out of Your Screenshot",id:"get-a-value-out-of-your-screenshot",level:3},{value:"Store Values in Variables and Reuse Them",id:"store-values-in-variables-and-reuse-them",level:3},{value:"Loops for Iteration Over Elements",id:"loops-for-iteration-over-elements",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"unlock-more-flexibility-with-code",children:"Unlock More Flexibility with Code"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes creating workflows with a No Code-Editor like the Workflow Editor of AskUI Studio is not enough to describe complex workflows \ud83e\udd14."}),"\n",(0,i.jsx)(t.p,{children:"What if you need to loop over elements or want to extract information into a variable for later use in your workflow?"}),"\n",(0,i.jsx)(t.p,{children:"This is where you need the power of a programming language!"}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsxs)(t.p,{children:["When you switch to ",(0,i.jsx)(t.em,{children:"Code View"})," you ",(0,i.jsx)(t.strong,{children:"may"})," not be able to convert your workflow back to the simple step view."]})}),"\n",(0,i.jsx)(t.h2,{id:"switch-to-code-view",children:"Switch to Code View"}),"\n",(0,i.jsxs)(t.p,{children:["To switch to Code View you have to click the ",(0,i.jsx)(t.strong,{children:"<>Code"})," icon in your Workflow Editor."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(9924).c+"",width:"326",height:"301"})}),"\n",(0,i.jsx)(t.p,{children:"This will bring up the code for your workflow which should look something like this."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:o(2692).c+"",width:"1274",height:"432"})}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.p,{children:"Please also consult our developer docs on how to write workflows with code. A good starting point might be one of our guides or a tutorial. Also, the API docs are linked below for an explanation of every feature:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/general/Element%20Selection/text-and-element-selectors",children:"Guide: Text Element Selectors"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/general/Tutorials/google-cat-search",children:"Tutorial: Cat Image Search on Google"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/api/API/table-of-contents",children:"API docs"})}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"the-basics",children:"The Basics"}),"\n",(0,i.jsx)(t.p,{children:"Let us explain real quick what you are seeing."}),"\n",(0,i.jsxs)(t.p,{children:["You may notice the first line with the ",(0,i.jsx)(t.em,{children:"import"})," and the *it-*block that contains your steps from the No Code View. Inside the ",(0,i.jsx)(t.em,{children:"it-block"})," is where you will write your code. Do not touch anything else \ud83d\ude09."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'import { aui } from "@/helper/jest.setup";\n\nit("first-workflow.ts", async () => {\n...\n});\n'})}),"\n",(0,i.jsx)(t.p,{children:"If you look at the code you might notice that it is written in TypeScript as our AskUI SDK is written in that programming language."}),"\n",(0,i.jsx)(t.h3,{id:"what-can-you-do-with-code",children:"What Can You Do with Code?"}),"\n",(0,i.jsx)(t.p,{children:"We will show you three things you can only do within the Code View:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Get a value out of your screenshot"}),"\n",(0,i.jsx)(t.li,{children:"Reuse and/or manipulate that value by storing it inside a variable"}),"\n",(0,i.jsx)(t.li,{children:"Use loops to iterate over elements"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"get-a-value-out-of-your-screenshot",children:"Get a Value Out of Your Screenshot"}),"\n",(0,i.jsxs)(t.p,{children:["Maybe you have a text-captcha that consists of just numbers on your GUI. You need to solve it for your workflow to continue. Therefore you need to ",(0,i.jsx)(t.em,{children:"get()"})," the value (",(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/api/Getters/get",children:"See API docs for get()"}),"). See the next section on how to store the value in a variable for reuse."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'await aui.get().text().above().text().withText("123456").exec();\n'})}),"\n",(0,i.jsx)(t.h3,{id:"store-values-in-variables-and-reuse-them",children:"Store Values in Variables and Reuse Them"}),"\n",(0,i.jsx)(t.p,{children:"You can define arbitrary variables like this."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'const arbi42 = "A string variable";\nconst arbi27 = 27;\n'})}),"\n",(0,i.jsx)(t.p,{children:"Or you can store the text-captcha from the section above and trim it with the power of TypeScript. You only need the numbers and not some unwanted whitespaces at the beginning, end or in the middle."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'// See the API-Docs for get()\n// for the returned type of the detected elements\nconst captchaDetectedElement = \n  await aui.get().text().above().text("123456").exec();\n\n// Get only the text-property of the element\nconst captchaDetectedElement = texts[0];\n\n// Extract the numbers with a Regex\nconst captcha = captchaRaw.text.match(/\\d{6}/)[0];\n'})}),"\n",(0,i.jsx)(t.p,{children:"Now the only thing that is left is to type the CAPTCHA back into the correct textfield"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'await aui.typeIn(captcha).textfield().contains().text().withText("123456").exec();\n'})}),"\n",(0,i.jsx)(t.h3,{id:"loops-for-iteration-over-elements",children:"Loops for Iteration Over Elements"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes you have some data you want to input into a form and don\u2019t want to write an instruction for every textfield. If you store your data in an array you can iterate over it like this."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"const data = ['Johannes', 'Dienst', 'AskUI Street', '42', 'Karlsruhe'];\n        \n// Focus the first textfield\nawait aui.clickTextfield('Firstname').exec();\n\n// Use the tab-key to navigate through the form\nfor (let entry of data) {\n  await aui.type(entry).exec();\n  await aui.pressKey('tab').exec();\n}\n"})}),"\n",(0,i.jsx)(t.p,{children:"You can also retrieve elements and iterate over this. Loops can be used in a lot of ways \ud83e\udd84."})]})}function h(e={}){const{wrapper:t}={...(0,n.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9924:(e,t,o)=>{o.d(t,{c:()=>i});const i=o.p+"assets/images/01-Switch-to-Code-Editor-e7f2e39f9dd96b95446e52474cf837f8.png"},2692:(e,t,o)=>{o.d(t,{c:()=>i});const i=o.p+"assets/images/02-Code-Editor-View-16201937d326e1bf76fe8a96a1374c4f.png"},4552:(e,t,o)=>{o.d(t,{I:()=>a,M:()=>r});var i=o(1504);const n={},s=i.createContext(n);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);