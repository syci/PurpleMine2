var PurpleMine=PurpleMine||{};PurpleMine.HistoryTabs=function(){"use strict";function a(){b=this,this.$tabsContainer=null,this.$tabs=null,this.$history=$("#history"),this.lang=document.documentElement.lang,"undefined"===c[this.lang]&&(this.lang="en"),this._=c[this.lang],this.$history.length>0&&(this.buildTabs(),this.markFirstOfTypes())}var b,c={en:{all:"All",notes:"Notes",details:"Changes"},pl:{all:"Wszystko",notes:"Notatki",details:"Zmiany"}};return a.prototype.buildTabs=function(){var a="",b='<li><a href="javascript:;" class="',c='history-tab" data-tab="',d="</a></li>";a+='<div class="tabs"><ul>',a+=b+"selected "+c+'all">'+this._.all+d,a+=b+c+'notes">'+this._.notes+d,a+=b+c+'details">'+this._.details+d,a+="</ul></div>",this.$tabsContainer=$(a),$("#history > h3").after(this.$tabsContainer),this.$tabs=this.$tabsContainer.find(".history-tab"),this.$tabs.on("click",this.tabClick)},a.prototype.markFirstOfTypes=function(){this.$history.find(".has-notes:first").addClass("first-of-notes"),this.$history.find(".has-details:first").addClass("first-of-details")},a.prototype.tabClick=function(){var a=$(this),c=a.attr("data-tab");b.$tabs.removeClass("selected"),a.addClass("selected"),b.$history.removeClass("hide-details").removeClass("hide-notes"),"notes"===c?b.$history.addClass("hide-details"):"details"===c&&b.$history.addClass("hide-notes")},a}();var PurpleMine=PurpleMine||{};PurpleMine.SidebarToggler=function(){"use strict";function a(){b=this,this.sidebarVisible=!0,this.sidebarHiding=null,this.$toggler=null,this.$main=$("#main"),this.$sidebar=$("#sidebar"),"relative"===this.$main.css("position")&&$("#context-menu").appendTo("#wrapper3"),window.localStorage&&(this.sidebarVisible=null===localStorage.getItem("PurpleMine:sidebarHidden")),this.$sidebar.length>0&&!1===this.$main.hasClass("nosidebar")&&(this.buildButton(),this.bindKeyHandler(),!1===this.sidebarVisible&&this.hideSidebar(!0))}var b;return a.prototype.bindKeyHandler=function(){var a=document.getElementsByTagName("body")[0];window.onkeydown=function(c){a===c.target&&83===c.keyCode&&!1===c.ctrlKey&&!1===c.altKey&&!1===c.shiftKey&&b.toggleSidebar()}},a.prototype.buildButton=function(){var a,b="pl"===document.documentElement.lang?"Pokaż/ukryj panel boczny":"Toggle sidebar",c="sidebar-toggler";a='<a href="javascript:;" class="'+c+'" title="'+b+'"></a>',this.$toggler=$(a),this.$main.append(this.$toggler),this.$toggler.on("click",this.toggleSidebar)},a.prototype.toggleSidebar=function(){b.sidebarVisible?b.hideSidebar():b.showSidebar()},a.prototype.hideSidebar=function(a){!0===a?this.$sidebar.addClass("sidebar-hiding sidebar-hidden"):(this.$sidebar.addClass("sidebar-hiding"),this.sidebarHiding=setTimeout(function(){b.$sidebar.addClass("sidebar-hidden")},500)),this.$toggler.addClass("sidebar-hidden"),this.sidebarVisible=!1,window.localStorage&&localStorage.setItem("PurpleMine:sidebarHidden","x")},a.prototype.showSidebar=function(){clearTimeout(this.sidebarHiding),this.$sidebar.removeClass("sidebar-hidden",0).removeClass("sidebar-hiding"),this.$toggler.removeClass("sidebar-hidden"),this.sidebarVisible=!0,window.localStorage&&localStorage.removeItem("PurpleMine:sidebarHidden")},a}(),$(function(){"use strict";new PurpleMine.SidebarToggler,new PurpleMine.HistoryTabs});