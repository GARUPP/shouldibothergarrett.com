(window["webpackJsonpshouldibothergarrett.com"]=window["webpackJsonpshouldibothergarrett.com"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(7),r=n.n(s),o=(n(13),n(1)),c=n(2),u=n(4),l=n(3),h=n(5),m="",p=function(e){m=e},b=function(){return"definitely"===m},d=(n(14),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).submit=function(){p(n.state.inputText);var e=n.state.attemptsRemaining-1;b()?n.props.checkLogin():n.setState({incorrectPassword:!0,attemptsRemaining:e})},n.setInputText=function(e){n.setState({inputText:e.target.value})},n.state={inputText:"",incorrectPassword:!1,attemptsRemaining:4},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"login"},i.a.createElement("input",{className:"login__input",type:"text",placeholder:"Enter password here...",value:this.state.inputText,onChange:this.setInputText}),i.a.createElement("button",{className:"login__button",onClick:function(){return e.submit()}},"Submit"),this.state.incorrectPassword?i.a.createElement("h3",null,"Incorrect password, ",this.state.attemptsRemaining," attempts remaining."):null)}}]),t}(i.a.Component)),w={fantix:{answer:"Fantix is amazing"},role:{answer:"Garrett is the Product Manager. Ask the PM."},abby:{answer:"Abby who? No."},kittens:{answer:"Kittens are Garretts only true source of happiness. Bring him some."},access:{answer:"I am not the Data Access Committee so, no."},alex:{answer:"Leave the poor man alone, no."},bob:{answer:"No idea where Bob is, so no."},buckets:{answer:"We're indexing data, please be patient, no."},dcf:{answer:"I am not the Project Manager for DCF, no."},lunch:{answer:"I have not eaten lunch yet, please bother me!"},jira:{answer:"I hate tickets, no."},pfb:{answer:"PFB will change the world, but no."},stage:{answer:"Too busy to fix that STAGE problem because of the other STAGE problems, no."}},f=function(e){e=e.toLowerCase();var t=Object.keys(w).find(function(t){return e.includes(t)});return t?w[t].answer:null},g=(n(15),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).checkLogin=function(){n.setState({loggedIn:b()})},n.setInitialQuestion=function(e){n.setState({initialQuestion:e.target.value})},n.askInitialQuestion=function(){var e=f(n.state.initialQuestion);n.setState({initialAnswer:e||"What? "})},n.state={initialQuestion:"",initialAnswer:"",loggedIn:!1},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"app"},i.a.createElement("h1",null,"Should I Bother Garrett?"),this.state.loggedIn?i.a.createElement("div",{className:"app__initial-question-area"},i.a.createElement("textarea",{className:"app__textarea",placeholder:"Please type your question for Garrett here...",value:this.state.initialQuestion,onChange:this.setInitialQuestion}),i.a.createElement("button",{className:"app__button",onClick:function(){return e.askInitialQuestion()}},"Should I?"),i.a.createElement("h2",null,this.state.initialAnswer)):i.a.createElement(d,{checkLogin:this.checkLogin}))}}]),t}(i.a.Component));r.a.render(i.a.createElement(g,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.3a6ca831.chunk.js.map