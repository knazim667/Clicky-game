(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(33)},21:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),i=a.n(r),l=a(8),o=a(9),s=a(13),m=a(10),u=a(14),d=(a(21),function(e){return c.a.createElement("div",{className:"wrapper"},e.children)}),g=a(35),p=a(34),h=(a(23),function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light fixed-top"},c.a.createElement(p.a,{className:"navbar-brand",to:"/"},"Clicky Game"),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navabrNav"},c.a.createElement("ul",{className:"navbar-nav ml-auto"},c.a.createElement("li",{className:"nav-item"},e.rightWrong)),c.a.createElement("span",{className:"navbar-text ml-auto"},"Score:",e.score,"  | Top Score:",e.topScore)))}),f=(a(27),function(){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"display-4"},"Clicky Game"),c.a.createElement("p",{className:"lead"},"Click on Image to earn points, but don't click on any more than once!")))}),w=(a(29),function(e){return c.a.createElement("div",{value:e.id,onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col"},c.a.createElement("img",{alt:e.name,src:e.image,className:"img-thumbnail"})))))}),v=a(5),k=(a(31),function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("span",{className:"text"},"Clicky-Game!")))});var y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={Cards:v,currentScore:0,topScore:0,rightWrong:"Click on Image to Begin !",clicked:[]},a.handleClick=function(e){-1===a.state.clicked.indexOf(e)?(a.handleIncrement(),a.setState({clicked:a.state.clicked.concat(e)})):a.handleReset()},a.handleIncrement=function(){var e=a.state.currentScore+1;a.setState({currentScore:e,rightWrong:"You Guessed Correctly"}),e>=a.state.topScore?a.setState({topScore:e}):12===e&&a.state({rightWrong:"You win!"}),a.handleShuffle()},a.handleReset=function(){a.setState({currentScore:0,topScore:a.state.topScore,rightWrong:"You Guessed Wrong Try Again !",clicked:[]}),a.handleShuffle()},a.handleShuffle=function(){var e=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e}(v);a.setState({Cards:e})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(g.a,null,c.a.createElement("div",null,c.a.createElement(h,{score:this.state.currentScore,topScore:this.state.topScore,rightWrong:this.state.rightWrong}),c.a.createElement(f,null),c.a.createElement(d,null,this.state.Cards.map(function(t){return c.a.createElement(w,{key:t.id,handleClick:e.handleClick,handleIncrement:e.handleIncrement,handleReset:e.handleReset,handleShuffle:e.handleShuffle,id:t.id,image:t.image})})),c.a.createElement(k,null)))}}]),t}(n.Component);i.a.render(c.a.createElement(y,null),document.getElementById("root"))},5:function(e){e.exports=[{id:1,image:"http://www.simpsoncrazy.com/content/pictures/regulars/ComicBookGuy2.gif",clicked:!1},{id:2,image:"http://www.simpsoncrazy.com/content/pictures/regulars/BarneyBikini.gif",clicked:!1},{id:3,image:"http://www.simpsoncrazy.com/content/pictures/regulars/Apu1.gif",clicked:!1},{id:4,image:"http://www.simpsoncrazy.com/content/pictures/regulars/MrBurns4.gif",clicked:!1},{id:5,image:"http://www.simpsoncrazy.com/content/pictures/regulars/Cletus1.gif",clicked:!1},{id:6,image:"http://www.simpsoncrazy.com/content/pictures/regulars/Duffman.gif",clicked:!1},{id:7,image:"http://www.simpsoncrazy.com/content/pictures/regulars/NedFlanders2.gif",clicked:!1},{id:8,image:"http://www.simpsoncrazy.com/content/pictures/regulars/Krusty8.gif",clicked:!1},{id:9,image:"http://www.simpsoncrazy.com/content/pictures/regulars/Milhouse2.gif",clicked:!1},{id:10,image:"http://www.simpsoncrazy.com/content/pictures/regulars/GroundskeeperWilly1.gif",clicked:!1},{id:11,image:"http://www.simpsoncrazy.com/content/pictures/regulars/RalphWiggum4.gif",clicked:!1},{id:12,image:"http://www.simpsoncrazy.com/content/pictures/regulars/MoeSzyslak1.gif",clicked:!1}]}},[[16,2,1]]]);
//# sourceMappingURL=main.33333d43.chunk.js.map