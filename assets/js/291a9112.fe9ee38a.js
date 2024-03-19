"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[926],{8704:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var i=n(7624),s=n(4552);const l={displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},a="Select and Interact with Elements",o={id:"askui-studio/Onboarding-Guide/select-and-interact-with-elements",title:"Select and Interact with Elements",description:"Interacting with Elements / Operating System",source:"@site/docs/askui-studio/02-Onboarding-Guide/02-select-and-interact-with-elements.md",sourceDirName:"askui-studio/02-Onboarding-Guide",slug:"/askui-studio/Onboarding-Guide/select-and-interact-with-elements",permalink:"/docs/askui-studio/Onboarding-Guide/select-and-interact-with-elements",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{displayed_sidebar:"askuiStudioSidebar",custom_edit_url:null},sidebar:"askuiStudioSidebar",previous:{title:"Learn the Basics of AI Automation",permalink:"/docs/askui-studio/Onboarding-Guide/learn-the-basics-of-ai-automation"},next:{title:"Start Working with Workflows",permalink:"/docs/askui-studio/Onboarding-Guide/start-working-with-workflows"}},c={},r=[{value:"Interacting with Elements / Operating System",id:"interacting-with-elements--operating-system",level:2},{value:"Selecting Elements",id:"selecting-elements",level:2},{value:"Text Selectors",id:"text-selectors",level:2},{value:"Exactly Matching a Text",id:"exactly-matching-a-text",level:3},{value:"Matching a Text with Regex",id:"matching-a-text-with-regex",level:3},{value:"Select Different Types of Elements like Icons",id:"select-different-types-of-elements-like-icons",level:2},{value:"Strategies for Selecting Elements",id:"strategies-for-selecting-elements",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"select-and-interact-with-elements",children:"Select and Interact with Elements"}),"\n",(0,i.jsx)(t.h2,{id:"interacting-with-elements--operating-system",children:"Interacting with Elements / Operating System"}),"\n",(0,i.jsx)(t.p,{children:"AskUI automates based on your Operating System. Thus it offers every action a real human user can do at a Graphical User Interface (GUI)."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Click on elements (Left, right and middle click)"}),"\n",(0,i.jsx)(t.li,{children:"Move mouse cursor"}),"\n",(0,i.jsx)(t.li,{children:"Scroll"}),"\n",(0,i.jsx)(t.li,{children:"Press keys on the keyboard"}),"\n",(0,i.jsx)(t.li,{children:"Typing characters"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Here are some examples of the actions and how they are entered as instructions in a step in the workflow editor. There are several variations of each command you can select from the dropdown-dialog. You might want to search for the one that is best suited for your use case:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'Click on\nMouse left click\nMove mouse to\nScroll x <number> y <number>\nPress key control\nType "<text>" in\nType "<text>"\n'})}),"\n",(0,i.jsx)(t.h2,{id:"selecting-elements",children:"Selecting Elements"}),"\n",(0,i.jsxs)(t.p,{children:["Selecting elements with AskUI is done ",(0,i.jsx)(t.em,{children:"visually"}),". This means you describe what you see with a predefined syntax that is nearly natural language."]}),"\n",(0,i.jsx)(t.h2,{id:"text-selectors",children:"Text Selectors"}),"\n",(0,i.jsxs)(t.p,{children:["Let us start with a selector you will use a lot: The ",(0,i.jsx)(t.strong,{children:"with text"})," selector."]}),"\n",(0,i.jsx)(t.p,{children:"Clicking on a specific text is done like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'Click on text with text "your text"\n'})}),"\n",(0,i.jsx)(t.p,{children:"This clicks on your text, even if it is not exactly matched because it allows some letters to not match (text recognition is sometimes hard \ud83d\ude43)."}),"\n",(0,i.jsx)(t.h3,{id:"exactly-matching-a-text",children:"Exactly Matching a Text"}),"\n",(0,i.jsx)(t.p,{children:"Sometimes you need a text to match exactly. You achieve it with this instruction:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'Click on text equals text "your exact text"\n'})}),"\n",(0,i.jsx)(t.h3,{id:"matching-a-text-with-regex",children:"Matching a Text with Regex"}),"\n",(0,i.jsx)(t.p,{children:'You can also specify the text you want to match with Regex. The next instruction matches text that starts with "YES" and can have any number of characters after "YES" such as "YESTerday.\u201d'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'Click on text match regex pattern "^YES*"\n'})}),"\n",(0,i.jsx)(t.h2,{id:"select-different-types-of-elements-like-icons",children:"Select Different Types of Elements like Icons"}),"\n",(0,i.jsx)(t.p,{children:"AskUI can detect different types of elements:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Icon"}),"\n",(0,i.jsx)(t.li,{children:"Button"}),"\n",(0,i.jsx)(t.li,{children:"Textfield"}),"\n",(0,i.jsx)(t.li,{children:"Checkbox"}),"\n",(0,i.jsx)(t.li,{children:"Image"}),"\n",(0,i.jsx)(t.li,{children:"switch"}),"\n",(0,i.jsx)(t.li,{children:"table"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"strategies-for-selecting-elements",children:"Strategies for Selecting Elements"}),"\n",(0,i.jsx)(t.p,{children:"You may wonder how to select them if there is for example more than one button detected by the inference?"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Text Inside The Element"})}),"\n",(0,i.jsx)(t.p,{children:"If there is text inside the element you can select the element by searching for the contained text:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'Move mouse to textfield contain text "Username"\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Matching an Icon with a Textual Description"})}),"\n",(0,i.jsx)(t.p,{children:"For icons you can give a description to AskUI and it will find your element:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'Move mouse to icon matching "tetris block"\n'})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Relational Selectors"})}),"\n",(0,i.jsx)(t.p,{children:"If there is an element you can target near the element you want to select you can use a relational selectors:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/api/Relations/above",children:"above"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/api/Relations/below",children:"below"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/api/Relations/leftof",children:"leftOf"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/api/Relations/rightof",children:"rightOf"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/api/Relations/nearesto",children:"nearestTo"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/api/Relations/contains",children:"contains"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://docs.askui.com/docs/api/Relations/in",children:"in"})}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Here are some examples of how that would look. For a detailed explanation check the API docs linked for each selector, where you will get an idea of how they work."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'Move mouse to checkbox above image\nMove mouse to textfield below text\nMove mouse to textfield leftOf text with text "Password"\nMove mouse to switch rightOf text with text "Username"\nMove mouse to button nearest to textfield\nMove mouse to image contains text with text "Van Gogh"\nMove mouse to textfield in image\n'})})]})}function h(e={}){const{wrapper:t}={...(0,s.M)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>a});var i=n(1504);const s={},l=i.createContext(s);function a(e){const t=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);