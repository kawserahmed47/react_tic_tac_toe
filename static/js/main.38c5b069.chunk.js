(this["webpackJsonptic-toe"]=this["webpackJsonptic-toe"]||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(2),i=t.n(s),c=(t(13),t(3)),o=t(4),d=t(6),u=t(5),l=t(7),m=(t(14),function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(d.a)(this,Object(u.a)(a).call(this))).state={turn:"X",gameEnded:!1,winner:void 0},e.gameState={board:Array(9).fill(""),totalMoves:0},e}return Object(l.a)(a,e),Object(o.a)(a,[{key:"clicked",value:function(e){""==this.gameState.board[e.target.dataset.square]&&(this.gameState.board[e.target.dataset.square]=this.state.turn,e.target.innerText=this.state.turn,this.setState({turn:"X"==this.state.turn?"O":"X"}));var a=this.checkWinner();"X"==a?this.setState({gameEnded:!0,winner:"X",winnerLine:"Match won by X"}):"O"==a?this.setState({gameEnded:!0,winner:"O",winnerLine:"Match won by O"}):"draw"==a&&this.setState({gameEnded:!0,winner:"draw",winnerLine:"Match is Drawn"})}},{key:"checkWinner",value:function(){for(var e=[[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8]],a=this.gameState.board,t=0;t<e.length;t++)if(a[e[t][0]]==a[e[t][1]]&&a[e[t][1]]==a[e[t][2]])return a[e[t][0]];if(console.log(this.gameState.totalMoves),9==this.gameState.totalMoves)return"draw"}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{id:"game"},r.a.createElement("div",{id:"status"},this.state.winnerLine),r.a.createElement("div",{id:"head"},r.a.createElement("h4",null,"This is Tic Tac Toe Game")),r.a.createElement("div",{id:"board",onClick:function(a){return e.clicked(a)}},r.a.createElement("div",{className:"square","data-square":"0"}),r.a.createElement("div",{className:"square","data-square":"1"}),r.a.createElement("div",{className:"square","data-square":"2"}),r.a.createElement("div",{className:"square","data-square":"3"}),r.a.createElement("div",{className:"square","data-square":"4"}),r.a.createElement("div",{className:"square","data-square":"5"}),r.a.createElement("div",{className:"square","data-square":"6"}),r.a.createElement("div",{className:"square","data-square":"7"}),r.a.createElement("div",{className:"square","data-square":"8"})))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.38c5b069.chunk.js.map