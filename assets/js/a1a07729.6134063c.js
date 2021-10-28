"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4982],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,u=d["".concat(c,".").concat(k)]||d[k]||m[k]||r;return n?i.createElement(u,o(o({ref:t},s),{},{components:n})):i.createElement(u,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8364:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],l={title:"Commands",sidebar_position:3},c=void 0,p={unversionedId:"reference/commands",id:"reference/commands",isDocsHomePage:!1,title:"Commands",description:"about",source:"@site/docs/reference/commands.md",sourceDirName:"reference",slug:"/reference/commands",permalink:"/docs/reference/commands",editUrl:"https://github.com/Virtuslab/scala-cli/edit/master/website/docs/reference/commands.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Commands",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Directives",permalink:"/docs/reference/directives"},next:{title:"Dependency format",permalink:"/docs/reference/dependency"}},s=[{value:"<code>about</code>",id:"about",children:[],level:2},{value:"<code>bsp</code>",id:"bsp",children:[],level:2},{value:"<code>clean</code>",id:"clean",children:[],level:2},{value:"<code>compile</code>",id:"compile",children:[],level:2},{value:"<code>export</code>",id:"export",children:[],level:2},{value:"<code>fmt</code>",id:"fmt",children:[],level:2},{value:"<code>install completions</code>",id:"install-completions",children:[],level:2},{value:"<code>browse</code>",id:"browse",children:[],level:2},{value:"<code>console</code>",id:"console",children:[],level:2},{value:"<code>package</code>",id:"package",children:[],level:2},{value:"<code>run</code>",id:"run",children:[],level:2},{value:"<code>setup-ide</code>",id:"setup-ide",children:[],level:2},{value:"<code>test</code>",id:"test",children:[],level:2},{value:"<code>version</code>",id:"version",children:[],level:2},{value:"Hidden commands",id:"hidden-commands",children:[{value:"<code>add-path</code>",id:"add-path",children:[],level:3},{value:"<code>bloop exit</code>",id:"bloop-exit",children:[],level:3},{value:"<code>bloop start</code>",id:"bloop-start",children:[],level:3},{value:"<code>directories</code>",id:"directories",children:[],level:3},{value:"<code>install-home</code>",id:"install-home",children:[],level:3}],level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"about"},(0,r.kt)("inlineCode",{parentName:"h2"},"about")),(0,r.kt)("p",null,"Print details about this application"),(0,r.kt)("h2",{id:"bsp"},(0,r.kt)("inlineCode",{parentName:"h2"},"bsp")),(0,r.kt)("p",null,"Start BSP server"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#bsp-options"},"bsp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#dependency-options"},"dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalajs-options"},"Scala.JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scala-native-options"},"Scala Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalac-options"},"scalac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#shared-options"},"shared"))),(0,r.kt)("h2",{id:"clean"},(0,r.kt)("inlineCode",{parentName:"h2"},"clean")),(0,r.kt)("p",null,"Clean-up workspace"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging"))),(0,r.kt)("h2",{id:"compile"},(0,r.kt)("inlineCode",{parentName:"h2"},"compile")),(0,r.kt)("p",null,"Compile Scala code"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compile-options"},"compile")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#cross-options"},"cross")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#dependency-options"},"dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalajs-options"},"Scala.JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scala-native-options"},"Scala Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalac-options"},"scalac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#shared-options"},"shared")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#watch-options"},"watch"))),(0,r.kt)("h2",{id:"export"},(0,r.kt)("inlineCode",{parentName:"h2"},"export")),(0,r.kt)("p",null,"Export current project to SBT or Mill"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#dependency-options"},"dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#export-options"},"export")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#main-class-options"},"main class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalajs-options"},"Scala.JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scala-native-options"},"Scala Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalac-options"},"scalac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#shared-options"},"shared"))),(0,r.kt)("h2",{id:"fmt"},(0,r.kt)("inlineCode",{parentName:"h2"},"fmt")),(0,r.kt)("p",null,"Aliases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scalafmt"))),(0,r.kt)("p",null,"Format Scala code"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#dependency-options"},"dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#fmt-options"},"fmt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalajs-options"},"Scala.JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scala-native-options"},"Scala Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalac-options"},"scalac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#shared-options"},"shared"))),(0,r.kt)("h2",{id:"install-completions"},(0,r.kt)("inlineCode",{parentName:"h2"},"install completions")),(0,r.kt)("p",null,"Aliases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"install-completions"))),(0,r.kt)("p",null,"Installs completions into your shell"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#install-completions-options"},"install completions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging"))),(0,r.kt)("h2",{id:"browse"},(0,r.kt)("inlineCode",{parentName:"h2"},"browse")),(0,r.kt)("p",null,"Aliases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metabrowse"))),(0,r.kt)("p",null,"Browse Scala code and its dependencies in the browser"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#dependency-options"},"dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#metabrowse-options"},"metabrowse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalajs-options"},"Scala.JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scala-native-options"},"Scala Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalac-options"},"scalac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#shared-options"},"shared"))),(0,r.kt)("h2",{id:"console"},(0,r.kt)("inlineCode",{parentName:"h2"},"console")),(0,r.kt)("p",null,"Aliases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"repl"))),(0,r.kt)("p",null,"Fire-up a Scala REPL"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compile-cross-options"},"compile cross")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#dependency-options"},"dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#java-options"},"java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#repl-options"},"repl")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalajs-options"},"Scala.JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scala-native-options"},"Scala Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalac-options"},"scalac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#shared-options"},"shared")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#watch-options"},"watch"))),(0,r.kt)("h2",{id:"package"},(0,r.kt)("inlineCode",{parentName:"h2"},"package")),(0,r.kt)("p",null,"Compile and package Scala code"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compile-cross-options"},"compile cross")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#dependency-options"},"dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#main-class-options"},"main class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#package-options"},"package")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#packager-options"},"packager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalajs-options"},"Scala.JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scala-native-options"},"Scala Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalac-options"},"scalac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#shared-options"},"shared")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#watch-options"},"watch"))),(0,r.kt)("h2",{id:"run"},(0,r.kt)("inlineCode",{parentName:"h2"},"run")),(0,r.kt)("p",null,"Compile and run Scala code."),(0,r.kt)("p",null,"To pass arguments to the application, just add them after '--', like:\nscala-cli MyApp.scala -- first-arg second-arg"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#benchmarking-options"},"benchmarking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compile-cross-options"},"compile cross")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#dependency-options"},"dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#java-options"},"java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#main-class-options"},"main class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalajs-options"},"Scala.JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scala-native-options"},"Scala Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalac-options"},"scalac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#shared-options"},"shared")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#watch-options"},"watch"))),(0,r.kt)("h2",{id:"setup-ide"},(0,r.kt)("inlineCode",{parentName:"h2"},"setup-ide")),(0,r.kt)("p",null,"Generate BSP file required for successful IDE import"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#dependency-options"},"dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalajs-options"},"Scala.JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scala-native-options"},"Scala Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalac-options"},"scalac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#setup-ide-options"},"setup IDE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#shared-options"},"shared"))),(0,r.kt)("h2",{id:"test"},(0,r.kt)("inlineCode",{parentName:"h2"},"test")),(0,r.kt)("p",null,"Compile and test Scala code"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compile-cross-options"},"compile cross")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#dependency-options"},"dependency")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#java-options"},"java")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalajs-options"},"Scala.JS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scala-native-options"},"Scala Native")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#scalac-options"},"scalac")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#shared-options"},"shared")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#test-options"},"test")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#watch-options"},"watch"))),(0,r.kt)("h2",{id:"version"},(0,r.kt)("inlineCode",{parentName:"h2"},"version")),(0,r.kt)("p",null,"Print scala-cli version"),(0,r.kt)("h2",{id:"hidden-commands"},"Hidden commands"),(0,r.kt)("h3",{id:"add-path"},(0,r.kt)("inlineCode",{parentName:"h3"},"add-path")),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#add-path-options"},"add path"))),(0,r.kt)("h3",{id:"bloop-exit"},(0,r.kt)("inlineCode",{parentName:"h3"},"bloop exit")),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging"))),(0,r.kt)("h3",{id:"bloop-start"},(0,r.kt)("inlineCode",{parentName:"h3"},"bloop start")),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#bloop-start-options"},"bloop start")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#compilation-server-options"},"compilation server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#coursier-options"},"coursier")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#jvm-options"},"jvm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#logging-options"},"logging"))),(0,r.kt)("h3",{id:"directories"},(0,r.kt)("inlineCode",{parentName:"h3"},"directories")),(0,r.kt)("p",null,"Prints directories used by scala-cli"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#directories-options"},"directories"))),(0,r.kt)("h3",{id:"install-home"},(0,r.kt)("inlineCode",{parentName:"h3"},"install-home")),(0,r.kt)("p",null,"Install scala-cli in a sub-directory of the home directory"),(0,r.kt)("p",null,"Accepts options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli-options#install-home-options"},"install home"))))}d.isMDXComponent=!0}}]);