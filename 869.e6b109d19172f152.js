"use strict";(self.webpackChunkassets=self.webpackChunkassets||[]).push([[869],{6869:($e,k,l)=>{l.r(k),l.d(k,{PortfolioPositionsModule:()=>Ge});var h=l(6895),I=l(2761),B=l(8675),j=l(9300),Z=l(5577),Q=l(4004),u=l(5412),v=l(9521),e=l(4650),P=l(6299),g=l(4006),T=l(4859),y=l(7392),m=l(7331),x=l(9549),E=l(266),D=l(7957),p=l(3238);const G=["tagInput"];function $(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"mat-chip",12),e.NdJ("removed",function(){const r=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.remove(r))}),e._uU(1),e.TgZ(2,"button",13)(3,"mat-icon"),e._uU(4,"cancel"),e.qZA()()()}if(2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.categoryName+"::"+t.name," ")}}function V(a,o){if(1&a&&(e.TgZ(0,"mat-option",14),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("value",t),e.xp6(1),e.hij(" ",t.categoryName+"::"+t.name," ")}}const q=function(){return{openTagCategoriesDialog:!0}},U=function(a){return{selectedTags:a}};let z=(()=>{class a{constructor(t,i,n,r){this.tagCategoryService=t,this.data=i,this.cd=n,this.fb=r,this.separatorKeysCodes=[v.K5,v.OC],this.selectedTags=[],this.title=i.title,this.selectedTags=[...i.selectedTags],this.tagCtrl=this.fb.control("")}ngOnInit(){this.filteredTags$=this.tagCtrl.valueChanges.pipe((0,B.O)(""),(0,j.h)(t=>"string"==typeof t),(0,Z.z)(t=>this.tagCategoryService.findTags(t).pipe((0,Q.U)(i=>i.content))))}add(t){(t.value||"").trim(),t.chipInput.clear(),this.tagCtrl.setValue("")}remove(t){this.selectedTags=[...this.selectedTags.filter(i=>i.id!==t.id)],this.cd.detectChanges()}selected(t){this.tagInput.nativeElement.value="",this.tagCtrl.setValue(""),this.selectedTags=[...this.selectedTags,t.option.value],this.cd.detectChanges()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(P.$),e.Y36(u.WI),e.Y36(e.sBO),e.Y36(g.j3))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-position-tags-dialog"]],viewQuery:function(t,i){if(1&t&&e.Gf(G,5),2&t){let n;e.iGM(n=e.CRH())&&(i.tagInput=n.first)}},decls:22,vars:14,consts:[["mat-dialog-title",""],["mat-icon-button","","matTooltip","Configure Tag Categories",1,"conf-categories-btn",3,"mat-dialog-close"],["appearance","fill",1,"tag-chip-list"],["aria-label","Tag selection"],["chipList",""],[3,"removed",4,"ngFor","ngForOf"],["placeholder","New tag...",3,"formControl","matChipInputFor","matAutocomplete","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["tagInput",""],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],["mat-button","",3,"mat-dialog-close"],[3,"removed"],["matChipRemove",""],[3,"value"]],template:function(t,i){if(1&t&&(e.TgZ(0,"h2",0),e._uU(1),e.TgZ(2,"span")(3,"button",1)(4,"mat-icon"),e._uU(5,"settings_suggest"),e.qZA()()()(),e.TgZ(6,"mat-dialog-content")(7,"mat-form-field",2)(8,"mat-label"),e._uU(9,"Position Tags"),e.qZA(),e.TgZ(10,"mat-chip-list",3,4),e.YNc(12,$,5,1,"mat-chip",5),e.TgZ(13,"input",6,7),e.NdJ("matChipInputTokenEnd",function(r){return i.add(r)}),e.qZA()(),e.TgZ(15,"mat-autocomplete",8,9),e.NdJ("optionSelected",function(r){return i.selected(r)}),e.YNc(17,V,2,2,"mat-option",10),e.ALo(18,"async"),e.qZA()()(),e.TgZ(19,"mat-dialog-actions")(20,"button",11),e._uU(21,"Okay"),e.qZA()()),2&t){const n=e.MAs(11),r=e.MAs(16);e.xp6(1),e.hij(" ",i.title,""),e.xp6(2),e.Q6J("mat-dialog-close",e.DdM(11,q)),e.xp6(9),e.Q6J("ngForOf",i.selectedTags),e.xp6(1),e.Q6J("formControl",i.tagCtrl)("matChipInputFor",n)("matAutocomplete",r)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes),e.xp6(4),e.Q6J("ngForOf",e.lcZ(18,9,i.filteredTags$)),e.xp6(3),e.Q6J("mat-dialog-close",e.VKq(12,U,i.selectedTags))}},dependencies:[h.sg,T.lW,y.Hw,u.ZT,u.uh,u.xY,u.H8,m.qn,m.HS,m.oH,m.qH,x.KE,x.hX,g.Fj,g.JJ,g.oH,E.gM,D.XC,D.ZL,p.ey,h.Ov],styles:[".tag-chip-list[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),a})();var W=l(6131),f=l(7084),Y=l(1520),A=l(4144);function J(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"mat-chip",10),e.NdJ("removed",function(){const r=e.CHM(t).$implicit,s=e.oxw();return e.KtG(s.removeTag(s.category,r))}),e._uU(1),e.TgZ(2,"button",11)(3,"mat-icon"),e._uU(4,"cancel"),e.qZA()()()}if(2&a){const t=o.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}let K=(()=>{class a{constructor(t){this.fb=t,this.separatorKeysCodes=[v.K5,v.OC],this.categoryDeleted=new e.vpe,this.categoryChanged=new e.vpe}ngOnInit(){this.form=this.fb.group({name:[this.category.name,g.kI.required]}),this.tags=[...this.category.tags],this.form.get("name")?.valueChanges.pipe((0,B.O)(this.category.name),(0,Y.G)()).subscribe(([t,i])=>{this.categoryChanged.emit({name:t,category:{...this.latestCategoryState,name:i}})})}removeTag(t,i){this.tags=[...this.tags.filter(n=>n.id!==i.id)],this.categoryChanged.emit({name:this.form.get("name")?.value,category:this.latestCategoryState})}addTag(t,i){const n=(i.value||"").trim();n&&!this.tags.some(r=>r.name===n)&&(this.tags=[...this.tags,{name:n}],i.chipInput.clear(),this.categoryChanged.emit({name:this.form.get("name")?.value,category:this.latestCategoryState}))}deleteCategory(){this.categoryDeleted.emit(this.latestCategoryState)}get latestCategoryState(){return Object.assign({},this.category,this.form.value,{tags:this.tags})}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(g.j3))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-tag-category-control"]],inputs:{category:"category"},outputs:{categoryDeleted:"categoryDeleted",categoryChanged:"categoryChanged"},decls:16,vars:6,consts:[[1,"category-control-panel"],[3,"formGroup"],["appearance","fill",1,"category-name"],["matInput","","type","text","id","name","placeholder","Name","formControlName","name","autofocus",""],["appearance","fill",1,"category-tags-list"],["aria-label","Tag selection","multiple",""],["categoriesTags",""],[3,"removed",4,"ngFor","ngForOf"],["placeholder","New Tag...",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputAddOnBlur","matChipInputTokenEnd"],["mat-button","","color","warn",3,"click"],[3,"removed"],["matChipRemove",""]],template:function(t,i){if(1&t&&(e.TgZ(0,"mat-expansion-panel",0)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),e._uU(3),e.qZA(),e._UZ(4,"mat-panel-description"),e.qZA(),e.TgZ(5,"form",1)(6,"mat-form-field",2),e._UZ(7,"input",3),e.qZA(),e.TgZ(8,"mat-form-field",4)(9,"mat-chip-list",5,6),e.YNc(11,J,5,1,"mat-chip",7),e.TgZ(12,"input",8),e.NdJ("matChipInputTokenEnd",function(r){return i.addTag(i.category,r)}),e.qZA()()()(),e.TgZ(13,"mat-action-row")(14,"button",9),e.NdJ("click",function(){return i.deleteCategory()}),e._uU(15,"Delete"),e.qZA()()()),2&t){const n=e.MAs(10);let r;e.xp6(3),e.hij(" ",null==(r=i.form.get("name"))?null:r.value," "),e.xp6(2),e.Q6J("formGroup",i.form),e.xp6(6),e.Q6J("ngForOf",i.tags),e.xp6(1),e.Q6J("matChipInputFor",n)("matChipInputSeparatorKeyCodes",i.separatorKeysCodes)("matChipInputAddOnBlur",!0)}},dependencies:[h.sg,T.lW,y.Hw,m.qn,m.HS,m.oH,m.qH,x.KE,g._Y,g.Fj,g.JJ,g.JL,g.sg,g.u,f.ib,f.VG,f.yz,f.yK,f.u4,A.Nt],styles:[".category-name[_ngcontent-%COMP%], .category-tags-list[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .category-control-panel[_ngcontent-%COMP%]:last-of-type{border-bottom-right-radius:0;border-bottom-left-radius:0;margin-bottom:5px}[_nghost-%COMP%]   .category-control-panel[_ngcontent-%COMP%]:first-of-type{border-top-right-radius:0;border-top-left-radius:0}"],changeDetection:0}),a})();function X(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"app-tag-category-control",4),e.NdJ("categoryChanged",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.handleCategoryChanged(n))})("categoryDeleted",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.handleCategoryDeleted(n))}),e.qZA()}2&a&&e.Q6J("category",o.$implicit)}function ee(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"app-tag-category-control",4),e.NdJ("categoryChanged",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.handleCategoryChanged(n))})("categoryDeleted",function(n){e.CHM(t);const r=e.oxw();return e.KtG(r.handleCategoryDeleted(n))}),e.qZA()}2&a&&e.Q6J("category",o.$implicit)}let te=(()=>{class a{constructor(t,i,n){this.tagCategoryService=t,this.cd=i,this.dialogRef=n,this.separatorKeysCodes=[v.K5,v.OC],this.newCategoryName="New Tag Category",this.categoriesToDelete=[]}ngOnInit(){this.tagCategoryService.getTagCategories().subscribe(t=>{this.persistedCategories=t,this.newCategories=[],this.categoriesState=JSON.parse(JSON.stringify(this.persistedCategories)),this.cd.detectChanges()})}onOkayClick(){const t=this.categoriesState.filter(r=>!r.id),i=this.persistedCategories.reduce((r,s)=>({...r,[s.id]:s}),{}),n=this.categoriesState.filter(r=>!!r.id&&JSON.stringify(r)!==JSON.stringify(i[r.id]));this.dialogRef.close({add:t,update:n,delete:this.categoriesToDelete})}addCategory(){const t={id:null,name:this.generateNewCategoryName(),color:"#999",tags:[]};this.newCategories=[t,...this.newCategories],this.categoriesState=[t,...this.categoriesState],this.cd.detectChanges()}generateNewCategoryName(){const t=this.categoriesState.find(n=>n.name.startsWith(this.newCategoryName));if(!t)return this.newCategoryName;let i;return i=t.name===this.newCategoryName?" 2":" "+(+t.name[t.name.length-1]+1),this.newCategoryName+i}handleCategoryChanged({name:t,category:i}){this.categoriesState=this.categoriesState.map(n=>n.name===t?i:n)}handleCategoryDeleted(t){t.id&&(this.categoriesToDelete=[...this.categoriesToDelete,t.id]),this.newCategories=[...this.newCategories.filter(i=>i.name!==t.name)],this.persistedCategories=[...this.persistedCategories.filter(i=>i.name!==t.name)],this.categoriesState=[...this.categoriesState.filter(i=>i.name!==t.name)],this.cd.detectChanges()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(P.$),e.Y36(e.sBO),e.Y36(u.so))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-tag-categories-dialog"]],decls:13,vars:3,consts:[["mat-dialog-title","",1,"dialog-title"],["mat-button","",1,"add-category-btn",3,"click"],[3,"category","categoryChanged","categoryDeleted",4,"ngFor","ngForOf"],["mat-button","",3,"click"],[3,"category","categoryChanged","categoryDeleted"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h2"),e._uU(2),e.qZA(),e.TgZ(3,"button",1),e.NdJ("click",function(){return i.addCategory()}),e.TgZ(4,"mat-icon"),e._uU(5,"add"),e.qZA()()(),e.TgZ(6,"mat-dialog-content")(7,"mat-accordion"),e.YNc(8,X,1,1,"app-tag-category-control",2),e.YNc(9,ee,1,1,"app-tag-category-control",2),e.qZA()(),e.TgZ(10,"mat-dialog-actions")(11,"button",3),e.NdJ("click",function(){return i.onOkayClick()}),e._uU(12,"Okay"),e.qZA()()),2&t&&(e.xp6(2),e.Oqu("Tag Categories"),e.xp6(6),e.Q6J("ngForOf",i.newCategories),e.xp6(1),e.Q6J("ngForOf",i.persistedCategories))},dependencies:[h.sg,T.lW,y.Hw,u.uh,u.xY,u.H8,f.pp,K],styles:[".spinner-wrapper[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.dialog-title[_ngcontent-%COMP%]{display:inline-flex}.dialog-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}"],changeDetection:0}),a})();var ie=l(590),ae=l(4128),S=l(529);let L=(()=>{class a{constructor(t){this.http=t}getPortfolioPositions(){return this.http.get("/portfolio-positions")}getPortfolioPositionsView(t){return this.http.get(`/portfolio-positions/view?hideSold=${t}`)}updatePositionTags(t,i){return this.http.post(`/portfolio-positions/${t}/tags`,i)}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(S.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})();var ne=l(894);class oe{constructor(){this.positions=[]}}let O=(()=>{class a extends ne.y{constructor(){super(new oe)}init(t,i){const n=this.sortPositions(t,i);this.setState({...this.state,positions:n})}updatePositionTags(t,i){const n=this.state.positions.map(r=>r.id===t?{...r,tags:i}:r);this.setState({...this.state,positions:n})}sortPositions(t,i){return t.sort((n,r)=>{const s=i.active;let c=n[s],d=r[s];return"desc"===i.direction&&([c,d]=[d,c]),"string"==typeof c?c.localeCompare(d):c-d})}reorderExistingPositions(t){this.init(this.state.positions,t)}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})(),N=(()=>{class a{constructor(t){this.http=t}getPortfolioShortInfo(){return this.http.get("/portfolios/me")}}return a.\u0275fac=function(t){return new(t||a)(e.LFG(S.eN))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),a})();var C=l(2687),M=l(1281);let re=0;const se=(0,p.Id)(class{}),F="mat-badge-content";let le=(()=>{class a extends se{constructor(t,i,n,r,s){super(),this._ngZone=t,this._elementRef=i,this._ariaDescriber=n,this._renderer=r,this._animationMode=s,this._color="primary",this._overlap=!0,this.position="above after",this.size="medium",this._id=re++,this._isInitialized=!1}get color(){return this._color}set color(t){this._setColor(t),this._color=t}get overlap(){return this._overlap}set overlap(t){this._overlap=(0,M.Ig)(t)}get content(){return this._content}set content(t){this._updateRenderedContent(t)}get description(){return this._description}set description(t){this._updateHostAriaDescription(t)}get hidden(){return this._hidden}set hidden(t){this._hidden=(0,M.Ig)(t)}isAbove(){return-1===this.position.indexOf("below")}isAfter(){return-1===this.position.indexOf("before")}getBadgeElement(){return this._badgeElement}ngOnInit(){this._clearExistingBadges(),this.content&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement(),this._updateRenderedContent(this.content)),this._isInitialized=!0}ngOnDestroy(){this._renderer.destroyNode&&this._renderer.destroyNode(this._badgeElement),this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description)}_createBadgeElement(){const t=this._renderer.createElement("span"),i="mat-badge-active";return t.setAttribute("id",`mat-badge-content-${this._id}`),t.setAttribute("aria-hidden","true"),t.classList.add(F),"NoopAnimations"===this._animationMode&&t.classList.add("_mat-animation-noopable"),this._elementRef.nativeElement.appendChild(t),"function"==typeof requestAnimationFrame&&"NoopAnimations"!==this._animationMode?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>{t.classList.add(i)})}):t.classList.add(i),t}_updateRenderedContent(t){const i=`${t??""}`.trim();this._isInitialized&&i&&!this._badgeElement&&(this._badgeElement=this._createBadgeElement()),this._badgeElement&&(this._badgeElement.textContent=i),this._content=i}_updateHostAriaDescription(t){this._ariaDescriber.removeDescription(this._elementRef.nativeElement,this.description),t&&this._ariaDescriber.describe(this._elementRef.nativeElement,t),this._description=t}_setColor(t){const i=this._elementRef.nativeElement.classList;i.remove(`mat-badge-${this._color}`),t&&i.add(`mat-badge-${t}`)}_clearExistingBadges(){const t=this._elementRef.nativeElement.querySelectorAll(`:scope > .${F}`);for(const i of Array.from(t))i!==this._badgeElement&&i.remove()}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(e.R0b),e.Y36(e.SBq),e.Y36(C.$s),e.Y36(e.Qsj),e.Y36(e.QbO,8))},a.\u0275dir=e.lG2({type:a,selectors:[["","matBadge",""]],hostAttrs:[1,"mat-badge"],hostVars:20,hostBindings:function(t,i){2&t&&e.ekj("mat-badge-overlap",i.overlap)("mat-badge-above",i.isAbove())("mat-badge-below",!i.isAbove())("mat-badge-before",!i.isAfter())("mat-badge-after",i.isAfter())("mat-badge-small","small"===i.size)("mat-badge-medium","medium"===i.size)("mat-badge-large","large"===i.size)("mat-badge-hidden",i.hidden||!i.content)("mat-badge-disabled",i.disabled)},inputs:{disabled:["matBadgeDisabled","disabled"],color:["matBadgeColor","color"],overlap:["matBadgeOverlap","overlap"],position:["matBadgePosition","position"],content:["matBadge","content"],description:["matBadgeDescription","description"],size:["matBadgeSize","size"],hidden:["matBadgeHidden","hidden"]},features:[e.qOj]}),a})(),ce=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[C.rt,p.BQ,p.BQ]}),a})();var R=l(6308);function de(a,o){if(1&a&&(e.TgZ(0,"div",9)(1,"div",10),e._uU(2,"Total investment"),e.qZA(),e.TgZ(3,"div",11),e._uU(4),e.ALo(5,"currency"),e.qZA()()),2&a){const t=o.ngIf;e.xp6(4),e.Oqu(e.xi3(5,1,t.investedValue,t.currencyCode))}}function ge(a,o){if(1&a&&(e.TgZ(0,"div",14),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.Q6J("mat-sort-header",t.id),e.xp6(1),e.hij(" ",t.name," ")}}function pe(a,o){if(1&a&&(e.TgZ(0,"div",2),e._uU(1),e.qZA()),2&a){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.name)}}function be(a,o){if(1&a&&(e.ynx(0),e.YNc(1,ge,2,2,"div",12),e.YNc(2,pe,2,1,"ng-template",null,13,e.W1O),e.BQk()),2&a){const t=o.$implicit,i=e.MAs(3);e.xp6(1),e.Q6J("ngIf",t.sortable)("ngIfElse",i)}}function ue(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",2)(1,"button",21),e.NdJ("click",function(n){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.openPositionTagsDialog(n,r))}),e.TgZ(2,"mat-icon"),e._uU(3,"library_add"),e.qZA()()()}}function he(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",2)(1,"button",21),e.NdJ("click",function(n){e.CHM(t);const r=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.openPositionTagsDialog(n,r))}),e.TgZ(2,"mat-icon",22),e._uU(3,"tag"),e.qZA(),e.TgZ(4,"span",23),e._uU(5),e.qZA()()()}if(2&a){const t=e.oxw().$implicit;e.xp6(2),e.Q6J("matBadge",t.tags.length),e.xp6(3),e.Oqu(t.tags.length+" tags linked to this position")}}function me(a,o){if(1&a&&(e.TgZ(0,"div",16)(1,"div",2)(2,"a",17),e._uU(3),e.qZA(),e.TgZ(4,"div",18),e._uU(5),e.qZA()(),e.TgZ(6,"div",2),e._uU(7),e.qZA(),e.TgZ(8,"div",2),e._uU(9),e.ALo(10,"currency"),e.qZA(),e.TgZ(11,"div",2),e._uU(12),e.qZA(),e.TgZ(13,"div",2),e._uU(14),e.ALo(15,"currency"),e.qZA(),e.TgZ(16,"div",2),e._uU(17),e.qZA(),e.YNc(18,ue,4,0,"div",19),e.YNc(19,he,6,2,"ng-template",null,20,e.W1O),e.qZA()),2&a){const t=o.$implicit,i=e.MAs(20);e.xp6(2),e.Q6J("routerLink","/symbols/"+t.identifier.exchange+"-"+t.identifier.symbol),e.xp6(1),e.hij(" ",t.identifier.symbol," "),e.xp6(2),e.Oqu(t.companyName),e.xp6(2),e.Oqu(t.pctOfPortfolio+"%"),e.xp6(2),e.Oqu(e.xi3(10,10,t.price,t.currencyCode)),e.xp6(3),e.Oqu(t.yieldOnCost+"%"),e.xp6(2),e.Oqu(e.xi3(15,13,t.accumulatedDividends,t.currencyCode)),e.xp6(3),e.Oqu(t.upcomingDividendDate),e.xp6(1),e.Q6J("ngIf",0===t.tags.length)("ngIfElse",i)}}function _e(a,o){if(1&a&&(e.ynx(0),e.YNc(1,me,21,16,"div",15),e.BQk()),2&a){const t=o.ngIf;e.xp6(1),e.Q6J("ngForOf",t.positions)}}const fe=[{path:"",component:(()=>{class a{constructor(t,i,n,r,s){this.portfolioPositionService=t,this.tagCategoryService=i,this.matDialog=n,this.store=r,this.portfolioService=s,this.defaultSort={active:"pctOfPortfolio",direction:"desc"},this.displayedColumns=[{name:"Ticker",sortable:!1,id:"ticker"},{name:"% Of Portfolio",sortable:!0,id:"pctOfPortfolio"},{name:"Cost Per Share",sortable:!1,id:"price"},{name:"Yield on Cost",sortable:!0,id:"yieldOnCost"},{name:"Accumulated Dividends",sortable:!1,id:"accumulatedDividends"},{name:"Upcoming Dividend Date",sortable:!1,id:"upcomingDividendDate"},{name:"Tags",sortable:!1,id:"tags"}],this.portfolioShortInfo=this.portfolioService.getPortfolioShortInfo()}ngOnInit(){this.initPositionsStore()}initPositionsStore(){this.portfolioPositionService.getPortfolioPositionsView(!0).pipe((0,ie.P)()).subscribe(t=>this.store.init(t,this.defaultSort))}getPortfolioPositions(){return this.portfolioPositionService.getPortfolioPositionsView(!0)}openPositionTagsDialog(t,i){this.matDialog.open(z,{restoreFocus:!1,disableClose:!1,data:{title:`${(0,W.W)(i.identifier)} Position Tags`,selectedTags:i.tags}}).afterClosed().subscribe(r=>{if(!r)return;if(r.openTagCategoriesDialog)return void this.matDialog.open(te,this.getTagCategoriesDialogConfig()).afterClosed().subscribe(_=>{_&&(_.add.length>0||_.update.length>0||_.delete.length>0)&&this.propagateTagCategoriesChanges(_)});const s=r.selectedTags;if(!s||JSON.stringify(s)===JSON.stringify(i.tags))return;const c=s.map(d=>d.id);this.portfolioPositionService.updatePositionTags(i.id,c).subscribe(()=>{this.store.updatePositionTags(i.id,s)})})}getTagCategoriesDialogConfig(){return{restoreFocus:!1,disableClose:!1}}propagateTagCategoriesChanges(t){const i=t.update.map(s=>this.tagCategoryService.updateTagCategory(s)),n=t.add.map(s=>this.tagCategoryService.createTagCategory(s)),r=t.delete.map(s=>this.tagCategoryService.deleteTagCategory(s));(0,ae.D)([...i,...n,...r]).subscribe(()=>{this.initPositionsStore()})}sortPositions(t){this.store.reorderExistingPositions(t)}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(L),e.Y36(P.$),e.Y36(u.uw),e.Y36(O),e.Y36(N))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-positions-container-v2"]],decls:13,vars:9,consts:[["matSort","",1,"positions-list",3,"matSortActive","matSortDirection","matSortChange"],[1,"portfolio-header-box","row"],[1,"column"],["class","total-investment column",4,"ngIf"],[1,"column","positions-action-list"],["mat-button",""],[1,"position-header-box","row"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"total-investment","column"],[1,"row","header"],[1,"row","value"],["class","column",3,"mat-sort-header",4,"ngIf","ngIfElse"],["notSortable",""],[1,"column",3,"mat-sort-header"],["class","position-box row",4,"ngFor","ngForOf"],[1,"position-box","row"],[1,"identifier-symbol",3,"routerLink"],[1,"identifier-company"],["class","column",4,"ngIf","ngIfElse"],["tags",""],["mat-button","",3,"click"],["matBadgeColor","accent",3,"matBadge"],[1,"cdk-visually-hidden"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.NdJ("matSortChange",function(r){return i.sortPositions(r)}),e.TgZ(1,"div",1)(2,"div",2),e.YNc(3,de,6,4,"div",3),e.ALo(4,"async"),e.qZA(),e.TgZ(5,"div",4)(6,"button",5)(7,"mat-icon"),e._uU(8,"table_chart"),e.qZA()()()(),e.TgZ(9,"div",6),e.YNc(10,be,4,2,"ng-container",7),e.qZA(),e.YNc(11,_e,2,1,"ng-container",8),e.ALo(12,"async"),e.qZA()),2&t&&(e.Q6J("matSortActive",i.defaultSort.active)("matSortDirection",i.defaultSort.direction),e.xp6(3),e.Q6J("ngIf",e.lcZ(4,5,i.portfolioShortInfo)),e.xp6(7),e.Q6J("ngForOf",i.displayedColumns),e.xp6(1),e.Q6J("ngIf",e.lcZ(12,7,i.store.state$)))},dependencies:[h.sg,h.O5,I.yS,T.lW,y.Hw,le,R.YE,R.nU,h.Ov,h.H9],styles:[".positions-list[_ngcontent-%COMP%]{max-width:100%;border:solid 1px #ccc;min-height:60px;display:block;background:white;border-radius:4px;overflow:hidden;margin:0 5%}.position-header-box[_ngcontent-%COMP%]{color:#0009;align-items:center;box-sizing:border-box;background:white;font-size:12px;font-weight:700;padding:20px 0 0 10px;text-transform:uppercase}.portfolio-header-box[_ngcontent-%COMP%]{color:#000000f7;align-items:center;box-sizing:border-box;background:white;font-size:12px;font-weight:700;padding:30px 10px 10px;text-transform:uppercase}.portfolio-header-box[_ngcontent-%COMP%]   .total-investment[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{padding-bottom:5px;color:#9b9b9b;font-weight:400}.portfolio-header-box[_ngcontent-%COMP%]   .total-investment[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{line-height:28px;font-weight:500;font-size:28px;color:#444}.portfolio-header-box[_ngcontent-%COMP%]   .positions-action-list[_ngcontent-%COMP%]{align-items:end}.position-box[_ngcontent-%COMP%]{border-bottom:solid 1px #ccc;color:#000000f7;align-items:center;box-sizing:border-box;background:white;font-size:14px;font-weight:500;padding:20px 10px}.identifier-company[_ngcontent-%COMP%]{font-size:small}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;flex-wrap:wrap;width:100%}.row[_ngcontent-%COMP%]   .column[_ngcontent-%COMP%]:first-child{align-items:flex-start}.column[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex:1;align-items:center}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.position-box[_ngcontent-%COMP%]:last-child{border:none}.positions-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .position-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0}),a})()}];let ve=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[I.Bz.forChild(fe),I.Bz]}),a})();var w=l(9643),Te=l(4080);l(7340),l(3353);let Pe=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[h.ez,p.BQ,Te.eL,p.si,w.Q8,C.rt,p.BQ]}),a})();var De=l(1572),Re=l(3546);let H=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({}),a})(),Ze=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[H,p.si,p.BQ,w.Q8,H,p.BQ]}),a})();var Qe=l(2474);let Ge=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[L,O,N],imports:[h.ez,ve,T.ot,y.Ps,u.Is,Pe,m.Hi,x.lN,g.UX,E.AV,De.Cq,ce,D.Bb,Re.QW,Ze,g.u5,f.To,A.c,Qe.I,R.JX]}),a})()}}]);