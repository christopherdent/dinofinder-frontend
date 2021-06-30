(this["webpackJsonpdinofinder-frontend"]=this["webpackJsonpdinofinder-frontend"]||[]).push([[0],{81:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(18),s=n.n(i),c=n(10),o=n(23),d=n(39),l=n(34),u=n(8);var j=n(13),h=n(14),b=n(16),p=n(15),O=n(83),m=n(1),x=function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("center",{children:Object(m.jsx)(O.a,{children:Object(m.jsx)("div",{children:e.listEras})})})})};var v=n(19),f=n(89),y=function(e){return Object(m.jsx)(f.a,{variant:"top",style:{width:"200"},className:"mb-2",children:Object(m.jsxs)(v.b,{to:"./".concat(e.name,"/dino_types"),children:[Object(m.jsx)(f.a.Img,{src:e.pictureUrl,alt:"prehistoric world"}),Object(m.jsx)(f.a.Title,{children:Object(m.jsx)("h4",{className:"text-center",children:e.name})})]})},e.id)},g=n(26),C=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).listEras=function(){return e.props.eras.eras.map((function(e,t){return Object(m.jsx)(y,{id:e.id,name:e.name,pictureUrl:e.picture_url},t)}))},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){Object(g.trackPromise)(this.props.fetchEras())}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("h2",{className:"text-center",children:["Choose an Era to Begin ",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{})]}),Object(m.jsx)("div",{children:Object(m.jsx)(x,{listEras:this.listEras()})})]})}}]),n}(r.a.Component),_=Object(c.b)((function(e){return{eras:e.eras}}),{fetchEras:function(){return function(e){return fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras").then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_ERAS",payload:t})}))}}})(C),D=function(e){return Object(m.jsx)(f.a,{children:Object(m.jsxs)(v.b,{to:"/".concat(e.name,"/dinosaurs"),children:[Object(m.jsx)("img",{src:e.pictureUrl,alt:"Category of Dinosaur",className:"card-img-top"}),Object(m.jsx)("span",{className:"align-bottom",children:Object(m.jsx)("h4",{className:"text-center",children:e.name})})]})},e.id)},k=function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h2",{className:"text-center",children:"And what type of creatures are you looking for?"}),Object(m.jsx)("div",{className:"d-flex mt-5 justify-content-center",children:e.listDinoTypes})]})},w=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).listDinoTypes=function(){if(a.props.dinotypes.dinotypes)return a.props.dinotypes.dinotypes.map((function(e,t){return Object(m.jsx)(D,{id:e.id,name:e.name,pictureUrl:e.picture_url},t)}))},a.state={url:a.routeParam=e.match.params.name,dinotypes:""},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchDinoTypes(this.state.url)}},{key:"render",value:function(){return Object(m.jsx)(r.a.Fragment,{children:Object(m.jsx)("div",{className:"container",id:"centered",children:Object(m.jsx)("div",{children:Object(m.jsx)(k,{listDinoTypes:this.listDinoTypes()})})})})}}]),n}(r.a.Component),T=Object(c.b)((function(e){return{dinotypes:e.dinotypes,url:e.url}}),{fetchDinoTypes:function(e){var t="Triassic"===e?"1":"Jurassic"===e?"2":"3";return function(e){return fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/".concat(t,"/dino_types")).then((function(e){return e.json()})).then((function(t){return e({type:"FETCH_DINOTYPES",payload:t})}))}}})(w),N=n(25),E=n(22),A=function(e){return function(t){fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/".concat(e.era_id,"/dino_types/").concat(e.dino_type_id,"/dinosaurs/").concat(e.id),{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"PATCH",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return t({type:"EDIT_DINOSAUR",payload:e})}))}},S=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleOnChange=function(e){a.setState(Object(E.a)({},e.target.name,e.target.value))},a.handleOnSubmit=function(e){e.preventDefault();var t=Object(u.a)(Object(u.a)({},a.state),{},{id:a.state.id});a.props.editDinosaur(t)},a.collapse=function(){document.getElementById(a.state.id).click()},a.state={id:a.props.dinoId,name:a.props.dinoName,size:a.props.dinoSize,weight:a.props.dinoWeight,temporal_range:a.props.dinoRange,year_discovered:a.props.dinoYear,picture_url:a.props.dinoPic,summary:a.props.dinoSummary,dino_type_id:a.props.dinoTypeId,era_id:a.props.era},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("form",{onSubmit:this.handleOnSubmit,children:[Object(m.jsx)("h5",{children:"Edit a Dinosaur"}),Object(m.jsxs)("small",{children:["HINT: You can find most of the info below from ",Object(m.jsx)("a",{href:"https://en.wikipedia.org/wiki/Dinosaur",children:"Wikipedia."}),"  At a minimum, please include the category, name and picture URL. "]}),Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{}),Object(m.jsxs)("small",{children:[Object(m.jsx)("label",{children:"Category: When did it live and what kind of dinosaur was it? "}),Object(m.jsx)("br",{}),Object(m.jsxs)("select",{className:"form-control",name:"dino_type_id",id:"dino_type_id",value:this.state.dino_type_id?this.state.dino_type_id:"",onChange:this.handleOnChange,required:!0,children:[Object(m.jsx)("option",{value:""}),Object(m.jsx)("option",{value:"1",children:"Triassic Herbivore"}),Object(m.jsx)("option",{value:"2",children:"Triassic Carnivore"}),Object(m.jsx)("option",{value:"3",children:"Triassic Avian"}),Object(m.jsx)("option",{value:"4",children:"Triassic Marine"}),Object(m.jsx)("option",{value:"5",children:"Jurassic Herbivore"}),Object(m.jsx)("option",{value:"6",children:"Jurassic Carnivore"}),Object(m.jsx)("option",{value:"7",children:"Jurassic Avian"}),Object(m.jsx)("option",{value:"8",children:"Jurassic Marine"}),Object(m.jsx)("option",{value:"9",children:"Cretaceous Herbivore"}),Object(m.jsx)("option",{value:"10",children:"Cretaceous Carnivore"}),Object(m.jsx)("option",{value:"11",children:"Cretaceous Avian"}),Object(m.jsx)("option",{value:"12",children:"Cretaceous Marine"})]}),Object(m.jsx)("br",{})," ",Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"hidden",name:"dino_type",value:this.props.dinoType}),Object(m.jsxs)("div",{className:"form-row align-items-center",children:[Object(m.jsxs)("div",{className:"col-auto",children:[Object(m.jsx)("label",{children:"Dinosaur Name"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Dinosaur Name",value:this.state.name,onChange:this.handleOnChange,required:!0}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{className:"col-auto",children:[Object(m.jsx)("label",{children:"Dinosaur Size"}),Object(m.jsx)("br",{}),Object(m.jsx)("small",{children:"In feet"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"number",name:"size",placeholder:"Dinosaur Size",value:this.state.size,onChange:this.handleOnChange})]}),Object(m.jsxs)("div",{className:"col-auto",children:[Object(m.jsx)("label",{children:"Dinosaur Weight"}),Object(m.jsx)("br",{}),Object(m.jsx)("small",{children:Object(m.jsx)("a",{href:"https://www.google.com/search?q=convert+tons+to+pounds&oq=convert+tons+to+pounds",children:"Convert from tons"})}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"number",name:"weight",placeholder:"Dinosaur Weight",value:this.state.weight,onChange:this.handleOnChange})]}),Object(m.jsxs)("div",{className:"col-auto",children:[Object(m.jsx)("label",{children:"Temporal Range"}),Object(m.jsx)("small",{id:"passwordHelpBlock",className:"form-text text-muted",children:"When did it live? Example: 150-140 MYA)"}),Object(m.jsx)("input",{type:"text",name:"temporal_range",placeholder:"Temporal Range",value:this.state.temporal_range,onChange:this.handleOnChange})]}),Object(m.jsxs)("div",{className:"col-auto",children:[Object(m.jsx)("label",{children:"Year Discovered"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"number",name:"year_discovered",placeholder:"Year Discovered",value:this.state.year_discovered,onChange:this.handleOnChange})]}),Object(m.jsxs)("div",{className:"col-auto",children:[Object(m.jsx)("label",{children:"Picture URL"}),Object(m.jsx)("br",{}),Object(m.jsx)("input",{type:"url",name:"picture_url",placeholder:"Paste the URL of a picture of this dinosaur here.",value:this.state.picture_url,onChange:this.handleOnChange,required:!0}),Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{className:"col-auto",children:[Object(m.jsx)("label",{id:"description",children:"Fun Fact or Brief Description"}),Object(m.jsx)("br",{}),Object(m.jsx)("textarea",{name:"summary",id:"description",maxLength:"500",rows:"12",cols:"30",placeholder:"Description",value:this.state.summary,onChange:this.handleOnChange}),Object(m.jsx)("br",{})]})]})]}),Object(m.jsx)("input",{type:"submit",value:"Commit Changes",onClick:this.collapse})]})})}}]),n}(r.a.Component);S.defaultProps={dinosaurs:{}};var I=Object(c.b)(null,{editDinosaur:A})(S),H=function(e){return Object(m.jsx)("div",{children:Object(m.jsxs)("button",{className:"btn btn-danger",onClick:function(){return e.handleDelete(e.dinosaur)},children:["Delete ",e.name]})})},R=n(40),z=n(87),J=n(90),M=function(e){return Object(m.jsx)(r.a.Fragment,{children:Object(m.jsx)(R.a,{xs:"4",children:Object(m.jsxs)(f.a,{className:"card card-inverse card-success card-primary mb-3 text-center",children:[Object(m.jsx)("img",{src:e.pictureUrl,alt:"Artist impression of {props.name}"}),Object(m.jsx)(f.a.Header,{children:e.name}),Object(m.jsxs)("p",{children:["Size: ",e.size," ",e.size?"feet":"?"," "]}),Object(m.jsxs)("p",{children:["Weight: ",e.weight," ",e.weight?"pounds":"?","  "]}),Object(m.jsxs)("p",{children:["Year Discovered:  ",e.yearDiscovered," ",e.yearDiscovered?"":"?"," "]}),Object(m.jsxs)("p",{children:["Years Lived: ",e.temporalRange]}),Object(m.jsx)(f.a.Text,{children:e.summary}),Object(m.jsxs)(z.a,{children:[Object(m.jsxs)(f.a,{children:[Object(m.jsx)(f.a.Header,{children:Object(m.jsx)(z.a.Toggle,{as:J.a,id:e.id,eventKey:"0",children:Object(m.jsxs)("span",{children:["Edit ",e.name]})})}),Object(m.jsx)(z.a.Collapse,{eventKey:"0",children:Object(m.jsx)(f.a.Body,{children:Object(m.jsx)(I,{dinosaur:e.dinosaur,url:e.url,dinoId:e.id,dinoName:e.name,dinoSize:null!==e.size?e.size:"",dinoWeight:null!==e.weight?e.weight:"",dinoRange:null!==e.temporalRange?e.temporalRange:"",dinoYear:null!==e.yearDiscovered?e.yearDiscovered:"",dinoPic:e.pictureUrl,dinoSummary:null!==e.summary?e.summary:"",era:e.dinosaur.dino_type.era_id,dinoTypeId:e.dinotypeId})})})]}),Object(m.jsx)(f.a,{children:Object(m.jsx)(f.a.Body,{children:Object(m.jsx)(H,{dinosaur:e.dinosaur,dinosaurId:e.id,name:e.name,handleDelete:e.handleDelete})})})]})]})})})};M.defaultProps={dinoPic:"https://ecdn.teacherspayteachers.com/thumbitem/Dinosaur-with-hand-sanitizer-and-face-mask-5487390-1587563440/original-5487390-1.jpg"};var U=M,L=function(e){var t;switch(e){case"Triassic Herbivore":t="1";break;case"Triassic Carnivore":t="2";break;case"Triassic Avian":t="3";break;case"Triassic Marine":t="4";break;case"Jurassic Herbivore":t="5";break;case"Jurassic Carnivore":t="6";break;case"Jurassic Avian":t="7";break;case"Jurassic Marine":t="8";break;case"Cretaceous Herbivore":t="9";break;case"Cretaceous Carnivore":t="10";break;case"Cretaceous Avian":t="11";break;case"Cretaceous Marine":t="12";break;default:console.log("it did not match anything")}return t},P=function(e,t){return L(t),function(n){return fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/".concat(function(e){return e.includes("Triassic")?1:e.includes("Jurassic")?2:e.includes("Cretaceous")?3:void 0}(t),"/dino_types/").concat(L(t),"/dinosaurs"),{headers:{"Content-Type":"application/json",Accept:"application/json"},method:"POST",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return n({type:"ADD_DINOSAUR",payload:e})}))}},F=n(88),Y=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(j.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={name:"",size:"",weight:"",temporal_range:"",year_discovered:"",picture_url:"",summary:"",dino_type_id:e.props.dinoType},e.handleOnChange=function(t){e.setState(Object(E.a)({},t.target.name,t.target.value))},e.handleOnSubmit=function(t){t.preventDefault(),e.props.addDinosaur(e.state,e.props.url),e.setState({name:"",size:"",weight:"",temporal_range:"",year_discovered:"",picture_url:"",summary:"",dino_type_id:""}),e.collapse()},e.collapse=function(){document.getElementById("add").click()},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(m.jsxs)(r.a.Fragment,{children:[Object(m.jsx)("h5",{children:"Add a Dinosaur"}),Object(m.jsxs)("small",{className:"form-text text-muted",children:["HINT: You can find most of the info below from the ",Object(m.jsx)("a",{href:"https://en.wikipedia.org/wiki/Portal:Mesozoic",target:"_blank",rel:"noreferrer",children:"Wikipedia Mesozoic Portal."}),"  At a minimum, please include the category, name and picture URL. "]}),Object(m.jsx)("br",{}),Object(m.jsxs)(F.a,{onSubmit:this.handleOnSubmit,children:[Object(m.jsxs)(F.a.Group,{controlId:"formBasic",children:[Object(m.jsx)(F.a.Label,{children:"Category: When did it live and what kind of dinosaur was it? "}),Object(m.jsxs)(F.a.Control,{as:"select",custom:!0,size:"lg",name:"dino_type_id",id:"dino_type_id",value:this.props.dinoType,onChange:this.handleOnChange,required:!0,children:[Object(m.jsx)("option",{value:""}),Object(m.jsx)("option",{value:"1",children:"Triassic Herbivore"}),Object(m.jsx)("option",{value:"2",children:"Triassic Carnivore"}),Object(m.jsx)("option",{value:"3",children:"Triassic Avian"}),Object(m.jsx)("option",{value:"4",children:"Triassic Marine"}),Object(m.jsx)("option",{value:"5",children:"Jurassic Herbivore"}),Object(m.jsx)("option",{value:"6",children:"Jurassic Carnivore"}),Object(m.jsx)("option",{value:"7",children:"Jurassic Avian"}),Object(m.jsx)("option",{value:"8",children:"Jurassic Marine"}),Object(m.jsx)("option",{value:"9",children:"Cretaceous Herbivore"}),Object(m.jsx)("option",{value:"10",children:"Cretaceous Carnivore"}),Object(m.jsx)("option",{value:"11",children:"Cretaceous Avian"}),Object(m.jsx)("option",{value:"12",children:"Cretaceous Marine"})]})]}),Object(m.jsxs)(F.a.Row,{children:[Object(m.jsxs)(F.a.Group,{as:R.a,children:[Object(m.jsx)(F.a.Label,{children:"Dinosaur Name"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(F.a.Control,{type:"text",name:"name",placeholder:"Dinosaur Name",value:this.state.name,onChange:this.handleOnChange,required:!0})]}),Object(m.jsxs)(F.a.Group,{as:R.a,children:[Object(m.jsx)(F.a.Label,{children:"Dinosaur Size"}),Object(m.jsx)("small",{className:"form-text text-muted",children:"In feet"}),Object(m.jsx)(F.a.Control,{type:"number",name:"size",placeholder:"Dinosaur Size",value:this.state.size,onChange:this.handleOnChange})]}),Object(m.jsxs)(F.a.Group,{as:R.a,children:[Object(m.jsx)(F.a.Label,{children:"Dinosaur Weight"}),Object(m.jsx)("small",{className:"form-text text-muted",children:Object(m.jsx)("a",{href:"https://www.google.com/search?q=convert+tons+to+pounds&oq=convert+tons+to+pounds",target:"_blank",rel:"noreferrer",children:"Convert from tons"})}),Object(m.jsx)(F.a.Control,{type:"number",name:"weight",placeholder:"Dinosaur Weight",value:this.state.weight,onChange:this.handleOnChange})]})]}),Object(m.jsxs)(F.a.Row,{children:[Object(m.jsxs)(F.a.Group,{as:R.a,children:[Object(m.jsx)(F.a.Label,{children:"Temporal Range"}),Object(m.jsx)("small",{className:"form-text text-muted",children:"When did it live? Example: 150-140 MYA)"}),Object(m.jsx)(F.a.Control,{type:"text",name:"temporal_range",placeholder:"Temporal Range",value:this.state.temporal_range,onChange:this.handleOnChange})]}),Object(m.jsxs)(F.a.Group,{as:R.a,children:[Object(m.jsx)(F.a.Label,{children:"Year Discovered"}),Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),Object(m.jsx)(F.a.Control,{type:"number",name:"year_discovered",placeholder:"Year Discovered",value:this.state.year_discovered,onChange:this.handleOnChange})]}),Object(m.jsxs)(F.a.Group,{as:R.a,children:[Object(m.jsx)(F.a.Label,{children:"Picture URL"}),Object(m.jsxs)("small",{className:"form-text text-muted",children:["Google Images:  ",Object(m.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.google.com/search?tbm=isch&as_q=".concat(this.state.name,"&tbs=isz:lt,islt:4mp,sur:fmc"),children:this.state.name})]}),Object(m.jsx)(F.a.Control,{type:"url",name:"picture_url",placeholder:"Paste the URL of a picture of this dinosaur here.",value:this.state.picture_url,onChange:this.handleOnChange,required:!0})]})]}),Object(m.jsx)(F.a.Row,{children:Object(m.jsxs)(F.a.Group,{children:[Object(m.jsx)(F.a.Label,{id:"description",children:"Fun Fact or Brief Description"}),Object(m.jsx)("br",{}),Object(m.jsx)("small",{className:"form-text text-muted",children:"(500 Characters Max)"}),Object(m.jsx)(F.a.Control,{as:"textarea",name:"summary",maxLength:"500",id:"description",rows:"5",cols:"80",placeholder:"Description",value:this.state.summary,onChange:this.handleOnChange})]})}),Object(m.jsx)(J.a,{type:"submit",variant:"primary",size:"lg",block:!0,children:"Add Dinosaur!"})]})]})}}]),n}(r.a.Component),W=Object(c.b)(null,{addDinosaur:P})(Y),B=n(84),q=function(e){return Object(m.jsx)("div",{children:Object(m.jsx)("center",{children:Object(m.jsx)(B.a,{children:e.listDinos})})})};function G(e){return function(t){return fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/".concat(function(e){return e.includes("Triassic")?1:e.includes("Jurassic")?2:e.includes("Cretaceous")?3:void 0}(e),"/dino_types/").concat(function(e){var t;switch(e){case"Triassic Herbivore":t="1";break;case"Triassic Carnivore":t="2";break;case"Triassic Avian":t="3";break;case"Triassic Marine":t="4";break;case"Jurassic Herbivore":t="5";break;case"Jurassic Carnivore":t="6";break;case"Jurassic Avian":t="7";break;case"Jurassic Marine":t="8";break;case"Cretaceous Herbivore":t="9";break;case"Cretaceous Carnivore":t="10";break;case"Cretaceous Avian":t="11";break;case"Cretaceous Marine":t="12";break;default:console.log("it did not match anything")}return t}(e),"/dinosaurs")).then((function(e){return e.json()})).then((function(e){return t({type:"FETCH_DINOSAURS",payload:e})}))}}var K=n(85),X=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleDelete=function(e){a.props.deleteDinosaur(e.id,e.dino_type.id,e.dino_type.era_id)},a.listDinos=function(){if(a.props.dinosaurs.dinosaurs)return a.props.dinosaurs.dinosaurs.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)(U,{id:e.id,name:e.name,size:e.size,weight:e.weight,temporalRange:e.temporal_range,yearDiscovered:e.year_discovered,pictureUrl:e.picture_url,summary:e.summary,dinotypeId:e.dino_type_id,handleDelete:a.handleDelete,dinosaur:e})},e.id)}))},a.state={url:a.routeParam=e.match.params.name,showHide:!1,dinosaurs:[]},a.hideComponent=a.hideComponent.bind(Object(N.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchDinosaurs(this.state.url)}},{key:"hideComponent",value:function(e){"showHide"===e&&this.setState({showHide:!this.state.showHide})}},{key:"render",value:function(){var e=this,t=this.state.showHide;return Object(m.jsx)(r.a.Fragment,{children:Object(m.jsxs)(K.a,{children:[Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)(J.a,{id:"add",variant:"success",onClick:function(){return e.hideComponent("showHide")},children:!1===t?"Add Dinosaur to Collection":"Hide Form"})}),Object(m.jsxs)("div",{children:[" ",t&&Object(m.jsx)(W,{url:this.state.url,dinoType:L(this.state.url)}),Object(m.jsx)("hr",{})]}),Object(m.jsx)(q,{listDinos:this.listDinos()})]})})}}]),n}(r.a.Component);var V=Object(c.b)((function(e){return{dinosaurs:e.dinosaurs,url:e.url}}),{fetchDinosaurs:G,addDinosaur:P,editDinosaur:A,deleteDinosaur:function(e,t,n){return function(a){fetch("https://murmuring-mesa-24613.herokuapp.com/api/v1/eras/".concat(n,"/dino_types/").concat(t,"/dinosaurs/").concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return a({type:"DELETE_DINOSAUR",dinosaurId:e})}))}}})(X),Q=n(7),Z=n(86),$=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidMount",value:function(){document.getElementById("main-heading").click()}},{key:"render",value:function(){return Object(m.jsx)(v.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)(Z.a,{children:[Object(m.jsx)(v.b,{to:"/",children:Object(m.jsx)("h1",{className:"text-center",id:"main-heading",children:"DinoFinder 2020"})}),Object(m.jsx)("br",{}),Object(m.jsx)("center",{children:Object(m.jsx)("h5",{children:"The prehistoric card collection anyone can edit!!"})})]}),Object(m.jsxs)(Q.c,{children:[Object(m.jsx)(Q.a,{exact:!0,path:"/",component:_}),Object(m.jsx)(Q.a,{exact:!0,path:"/:name/dino_types",component:T}),Object(m.jsx)(Q.a,{exact:!0,path:"/:name/dinosaurs",component:V}),Object(m.jsx)(Q.a,{exact:!0,path:"/dinosaurs/new",component:W}),Object(m.jsx)(Q.a,{exact:!0,path:"/dinosaurs/:name/edit",component:I})]})]})})}}]),n}(r.a.Component),ee=Object(c.b)(null)($),te=(n(62),n(43)),ne=n.n(te),ae=Object(o.b)({eras:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{eras:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ERAS":return Object(u.a)(Object(u.a)({},e),{},{eras:t.payload});default:return e}},dinotypes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dinotypes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DINOTYPES":return Object(u.a)(Object(u.a)({},e),{},{dinotypes:t.payload});default:return e}},dinosaurs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{dinosaurs:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DINOSAURS":return Object(u.a)(Object(u.a)({},e),{},{dinosaurs:t.payload});case"ADD_DINOSAUR":return Object(u.a)(Object(u.a)({},e),{},{dinosaurs:[].concat(Object(l.a)(e.dinosaurs),[t.payload])});case"DELETE_DINOSAUR":return Object(u.a)(Object(u.a)({},e),{},{dinosaurs:Object(l.a)(e.dinosaurs.filter((function(e){return e.id!==t.dinosaurId})))});case"EDIT_DINOSAUR":var n=e.dinosaurs.map((function(e){return e.id===t.payload.id?t.payload:e})),a=e.dinosaurs[0].dino_type_id;return Object(u.a)(Object(u.a)({},e),{},{dinosaurs:n.filter((function(e){return e.dino_type_id===a}))});default:return e}}}),re=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.c,ie=Object(o.d)(ae,re(Object(o.a)(d.a))),se=function(e){return Object(g.usePromiseTracker)().promiseInProgress&&Object(m.jsx)("div",{style:{width:"100%",height:"100",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(m.jsx)(ne.a,{type:"Bars",color:"#00008b",height:"300",width:"300"})})};s.a.render(Object(m.jsxs)(c.a,{store:ie,children:[Object(m.jsx)(ee,{}),Object(m.jsx)(se,{})]}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.e2588163.chunk.js.map