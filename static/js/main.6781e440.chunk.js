(window["webpackJsonpshouldibothergarrett.com"]=window["webpackJsonpshouldibothergarrett.com"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),s=n.n(i),o=(n(13),n(1)),l=n(2),c=n(4),u=n(3),h=n(5),p="",m=function(e){p=e},b=function(){return"definitely"===p},d=(n(14),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).submit=function(){m(n.state.inputText);var e=n.state.attemptsRemaining-1;b()?n.props.checkLogin():n.setState({incorrectPassword:!0,attemptsRemaining:e})},n.setInputText=function(e){n.setState({inputText:e.target.value})},n.state={inputText:"",incorrectPassword:!1,attemptsRemaining:4},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login"},r.a.createElement("input",{className:"login__input",type:"text",placeholder:"Enter password here...",value:this.state.inputText,onChange:this.setInputText}),r.a.createElement("button",{className:"login__button",onClick:function(){return e.submit()}},"Submit"),this.state.incorrectPassword?r.a.createElement("h3",null,"Incorrect password, ",this.state.attemptsRemaining," attempts remaining."):null)}}]),t}(r.a.Component)),f={garrett:{answer:"Garrett can currently be found curled up in a ball on his office floor. Please stand by for updates."},singapore:{answer:"Garrett will return from Singapore on February 19th. Until then, bother someone elase. Actually, after then still bother someone else."},role:{answer:"Garrett is the Product Manager. Ask the PM."},interoperability:{answer:"Interoperability is overrated. send data with floppy disks. Remember floppy disks... wow, the memories."},abby:{answer:"Abby who? No."},kittens:{answer:"Kittens are Garretts only true source of happiness. Bring him some."},access:{answer:"I am not the Data Access Committee so, no."},alex:{answer:"Leave the poor man alone, no."},bob:{answer:"No idea where Bob is, so no."},buckets:{answer:"We're indexing data, please be patient, no."},dcf:{answer:"I am not the Project Manager for DCF, no."},lunch:{answer:"I have not eaten lunch yet, please bother me!"},jira:{answer:"I hate tickets, no."},pfb:{answer:"PFB will change the world, but no."},stage:{answer:"Too busy to fix that STAGE problem because of the other STAGE problems, no."}},w=function(e){e=e.toLowerCase();var t=Object.keys(f).find(function(t){return e.includes(t)});return t?f[t].answer:null},g=(n(15),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).checkLogin=function(){n.setState({loggedIn:b()})},n.setInitialQuestion=function(e){n.setState({initialQuestion:e.target.value})},n.askInitialQuestion=function(){var e=w(n.state.initialQuestion);n.setState({initialAnswer:e||"What? "})},n.state={initialQuestion:"",initialAnswer:"",loggedIn:!1},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement("h1",null,"Should I Bother Garrett?"),this.state.loggedIn?r.a.createElement("div",{className:"app__initial-question-area"},r.a.createElement("textarea",{className:"app__textarea",placeholder:"Please type your question for Garrett here...",value:this.state.initialQuestion,onChange:this.setInitialQuestion}),r.a.createElement("button",{className:"app__button",onClick:function(){return e.askInitialQuestion()}},"Should I?"),r.a.createElement("h2",null,this.state.initialAnswer)):r.a.createElement(d,{checkLogin:this.checkLogin}))}}]),t}(r.a.Component));s.a.render(r.a.createElement(g,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.6781e440.chunk.js.map