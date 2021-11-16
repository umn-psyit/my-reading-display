(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{84359:function(e,t,_){"use strict";_.d(t,{TH:function(){return c},cr:function(){return l},Kf:function(){return d},PX:function(){return m},Fk:function(){return u},Zv:function(){return s}});var n=_(93433),i=_(15671),r=_(4942),a=_(99447);var o=function e(t,_){(0,i.Z)(this,e),(0,r.Z)(this,"min",void 0),(0,r.Z)(this,"max",void 0),this.min=t,this.max=_};function s(e){var t=-1;if("No Preference"===e.normalize()){var _=Math.min.apply(Math,(0,n.Z)(a.yf.map((function(e){return void 0===e.xf?Number.MAX_VALUE:e.xf})))),i=Math.max.apply(Math,(0,n.Z)(a.yf.map((function(e){return void 0===e.xf?Number.MIN_VALUE:e.xf}))));return new o(_,i)}if(a.yf.forEach((function(_){var n=_.font,i=_.xf;n.normalize()===e.normalize()&&void 0!==i&&(t=i)})),-1!==t)return t;throw new Error("Could not find font: ".concat(e," result: ").concat(t))}var c=function e(t,_,n,a,o,s,c,l,u){(0,i.Z)(this,e),(0,r.Z)(this,"visualAcuityUnits",void 0),(0,r.Z)(this,"visualAcuity",void 0),(0,r.Z)(this,"criticalPrintSizeUnits",void 0),(0,r.Z)(this,"criticalPrintSize",void 0),(0,r.Z)(this,"hasCentralFieldLoss",void 0),(0,r.Z)(this,"selectedFont",void 0),(0,r.Z)(this,"selectedViewingDistance",void 0),(0,r.Z)(this,"customViewDistance",void 0),(0,r.Z)(this,"customViewDistanceUnits",void 0),this.visualAcuityUnits=t,this.visualAcuity=_,this.criticalPrintSizeUnits=n,this.criticalPrintSize=a,this.hasCentralFieldLoss=o,this.selectedFont=s,this.selectedViewingDistance=c,this.customViewDistance=l,this.customViewDistanceUnits=u},l=function e(t,_,n,a,o,s,c){(0,i.Z)(this,e),(0,r.Z)(this,"show",void 0),(0,r.Z)(this,"minWidth",void 0),(0,r.Z)(this,"minPoint",void 0),(0,r.Z)(this,"maxPoint",void 0),(0,r.Z)(this,"viewDistance",void 0),(0,r.Z)(this,"CPS",void 0),(0,r.Z)(this,"VA",void 0),this.show=t,this.minWidth=_,this.minPoint=n,this.maxPoint=a,this.viewDistance=o,this.CPS=s,this.VA=c};function u(e,t,_){if(void 0===_)throw new Error("Could not calculate minimum point size because xf is undefined");return.04*e*Math.pow(10,t)/_}function m(e,t){if(void 0===t)throw new Error("Could not calculate maximum point size because wf is undefined");return e/(.46*t)}var d=function(e){console.log(JSON.stringify(e));var t=-1;t="20/"===e.visualAcuityUnits?-Math.log10(20/parseFloat(e.visualAcuity)):"6/"===e.visualAcuityUnits?-Math.log10(6/parseFloat(e.visualAcuity)):parseFloat(e.visualAcuity),console.log("VA: ".concat(t,", raw val: ").concat(e.visualAcuity));var _=-1,i=function(e){var t=-1;if(a.Vh.forEach((function(_){var n=_.CFL,i=_.label;e.normalize()===i.normalize()&&(t=n)})),-1!==t)return t;throw new Error("Could not find CFS option:\n  ".concat(e," result: ").concat(t))}(e.hasCentralFieldLoss);""===e.criticalPrintSize?(_=t+.3+.2*i,console.log("Estimated CPS: ".concat(_,", VA: ").concat(t,", CFL: ").concat(i))):_="20/"===e.criticalPrintSizeUnits?-Math.log10(20/parseFloat(e.criticalPrintSize)):"6/"===e.criticalPrintSizeUnits?-Math.log10(6/parseFloat(e.criticalPrintSize)):parseFloat(e.criticalPrintSize),console.log("CPS: ".concat(_));var r=parseFloat(e.selectedViewingDistance);"Custom"===e.selectedViewingDistance&&(r="in"===e.customViewDistanceUnits?2.54*e.customViewDistance:e.customViewDistance);var c=s(e.selectedFont),u=function(e){if("No Preference"===e.normalize()){var t=Math.min.apply(Math,(0,n.Z)(a.yf.map((function(e){return void 0===e.wf?Number.MAX_VALUE:e.wf})))),_=Math.max.apply(Math,(0,n.Z)(a.yf.map((function(e){return void 0===e.wf?Number.MIN_VALUE:e.wf}))));return new o(t,_)}var i=-1;if(a.yf.forEach((function(t){var _=t.font,n=t.wf;_.normalize()===e.normalize()&&void 0!==n&&(i=n)})),-1!==i)return i;throw new Error("Could not find font: ".concat(e," result: ").concat(i))}(e.selectedFont),m=function(e,t){return.017*e*Math.pow(10,t)}(r,_);if(isNaN(m))throw new Error("minWidth is NaN, vd: ".concat(r,", CPS: ").concat(_));var d=-1;if(c instanceof o)d=.04*r*Math.pow(10,_)/c.max;else if(d=.04*r*Math.pow(10,_)/c,isNaN(d))throw new Error("minPoint is NaN, vd: ".concat(r,", CPS: ").concat(_,", xf: ").concat(c));var h=-1;if(u instanceof o)h=m/(.32*u.min);else if(h=m/(.32*u),isNaN(h))throw new Error("maxPoint is NaN, minWidth: ".concat(m,", wf: ").concat(u));return function(e,t,_,n,i){fetch("https://api.knack.com/v1/pages/scene_2/views/view_3/records",{method:"POST",headers:{"X-Knack-Application-Id":"60e72c1eedf8a1001e92aec1","X-Knack-REST-API-Key":"knack","content-type":"application/json"},body:JSON.stringify({field_2:e,field_3:t,field_4:_,field_5:n,field_6:i})})}(t,_,i,r,e.selectedFont),new l(!0,m,d,h,r,_,t)}},61541:function(e,t,_){"use strict";_.d(t,{G:function(){return o}});var n=_(67294),i=_(84359),r=_(44483),a={outputValues:new i.cr(!1,-1,-1,-1,-1,-1,-1),setOutputValues:function(e){},resetOutputValues:function(){},inputValues:new i.TH("20/","","20/","","","","",-1,""),setInputValues:function(e){},resetInputValues:function(){},showMinMaxTable:!1,setShowMinMaxTable:function(e){},furtherChoices:new r.RJ("",-1),setFurtherChoices:function(e){},resetFurtherChoices:function(){},showWarning:!1,setShowWarning:function(e){}},o=(0,n.createContext)(a)},1573:function(e,t,_){"use strict";var n=_(8601),i=_(5288),r=_(44483),a=_(85893),o=n.mM.create({page:{padding:"1.5cm"},section:{margin:10,padding:10},title:{textAlign:"center",marginBottom:"0.5cm",fontSize:"26pt"},date:{textAlign:"center",fontSize:"14pt"},subheader:{fontFamily:"Helvetica",fontSize:"16pt",marginBottom:"0.25cm",marginTop:"0.25cm"},content:{fontSize:"12pt",fontFamily:"Times-Roman"},option:{fontSize:"12pt",marginLeft:"0.5cm"},descText:{marginBottom:"0.35cm"},middleDescText:{marginTop:"0.35cm"}}),s=function(e){var t=e.children,_=e.style;return(0,a.jsxs)(n.xv,{style:_,children:["\u2022 ",t]})};t.Z=function(e){var t=e.input,_=e.output,c=e.furtherChoices,l=e.minWidthString;return console.log("generating report"),console.log(c.chosenDisplaySize),(0,a.jsx)(n.BB,{title:"My Reading Display Report",creator:"My Reading Display",producer:"https://myreadingdisplay.umn.edu",children:(0,a.jsxs)(n.T3,{size:"A4",style:o.page,children:[(0,a.jsx)(n.xv,{style:o.title,children:"My Reading Display Report"}),(0,a.jsx)(n.xv,{style:o.date,children:new Date(Date.now()).toDateString()}),(0,a.jsxs)(n.G7,{style:o.content,children:[(0,a.jsx)(n.xv,{style:o.subheader,children:"Input Options"}),(0,a.jsxs)(s,{style:o.option,children:["Visual Acuity: ",t.visualAcuityUnits,t.visualAcuity]}),(0,a.jsxs)(s,{style:o.option,children:["Critical Print Size: ",""!==t.criticalPrintSize?t.criticalPrintSizeUnits:"No input",t.criticalPrintSize]}),(0,a.jsxs)(s,{style:o.option,children:["Has central field loss: ",t.hasCentralFieldLoss]}),(0,a.jsxs)(s,{style:o.option,children:["Viewing Distance: ","Custom"===t.selectedViewingDistance?t.customViewDistance:t.selectedViewingDistance,"Custom"===t.selectedViewingDistance?t.customViewDistanceUnits:""]}),(0,a.jsx)(n.xv,{style:o.subheader,children:"Results"}),(0,a.jsxs)(n.xv,{style:o.descText,children:["To achieve a maximum reading speed, the reader needs a display with a width larger than ",l,"."]}),(0,r.j5)(t,_).map((function(e,t){var _=e.font,n=e.pointSize;return(0,a.jsxs)(s,{style:o.option,children:[_,": ",(0,i.x)(n),"pt"]},t)})),(0,a.jsxs)(n.xv,{style:[o.descText,o.middleDescText],children:["Based on the chosen display size of ",c.chosenDisplaySize,c.chosenDisplaySizeUnits,", the following table shows a range of point sizes for the selected font(s)."]}),(0,r.lG)(t,_,c).map((function(e,t){var _=e.font,n=e.min,r=e.max;return(0,a.jsxs)(s,{style:o.option,children:[_,": between ",(0,i.x)(n),"pt and ",(0,i.x)(r),"pt."]},t)}))]})]})})}},44483:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{j5:function(){return getPointSizeTableData},lG:function(){return getMinMaxTableData},RJ:function(){return FurtherChoice},ZP:function(){return Results}});var _home_runner_work_my_reading_display_my_reading_display_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(29439),_home_runner_work_my_reading_display_my_reading_display_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(15671),_home_runner_work_my_reading_display_my_reading_display_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__(4942),_material_ui_core__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(99956),_material_ui_core__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__(22318),_material_ui_core__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__(56847),_material_ui_core__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__(79895),_material_ui_core__WEBPACK_IMPORTED_MODULE_20__=__webpack_require__(82302),_material_ui_core__WEBPACK_IMPORTED_MODULE_21__=__webpack_require__(83750),_material_ui_core__WEBPACK_IMPORTED_MODULE_22__=__webpack_require__(57394),_material_ui_core__WEBPACK_IMPORTED_MODULE_23__=__webpack_require__(88222),_material_ui_core__WEBPACK_IMPORTED_MODULE_24__=__webpack_require__(99613),_material_ui_core__WEBPACK_IMPORTED_MODULE_26__=__webpack_require__(42123),_material_ui_core__WEBPACK_IMPORTED_MODULE_27__=__webpack_require__(7397),_material_ui_core__WEBPACK_IMPORTED_MODULE_28__=__webpack_require__(85639),_material_ui_core__WEBPACK_IMPORTED_MODULE_29__=__webpack_require__(282),formik__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(94649),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),yup__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(19501),next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(34651),_calculate__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(84359),_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(99447),_src_util__WEBPACK_IMPORTED_MODULE_25__=__webpack_require__(5288),_components_display_sizes_accordion__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(20070),_calculator_context__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(61541),_components_report_download_button__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(96473),_report__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(1573),_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(8601),_content_calculator_text__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(54325),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(85893),ResetInputValues=function(){var e=(0,formik__WEBPACK_IMPORTED_MODULE_0__.u6)().resetForm,t=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_calculator_context__WEBPACK_IMPORTED_MODULE_7__.G).furtherChoices;return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){-1!==t.chosenDisplaySize&&""!==t.chosenDisplaySize||e()}),[t,e]),null};function getPointSizeTableData(e,t){var _=[];if(t.show)if("No Preference"===e.selectedFont)for(var n=1;n<_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__.yf.length-1;n++)_.push({font:_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__.yf[n].font,pointSize:(0,_calculate__WEBPACK_IMPORTED_MODULE_4__.Fk)(t.viewDistance,t.CPS,_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__.yf[n].xf)});else{console.log(e.selectedFont);var i=(0,_calculate__WEBPACK_IMPORTED_MODULE_4__.Zv)(e.selectedFont);"number"===typeof i&&_.push({font:e.selectedFont,pointSize:(0,_calculate__WEBPACK_IMPORTED_MODULE_4__.Fk)(t.viewDistance,t.CPS,i)})}return _}function getMinMaxTableData(e,t,_){var n=[];if(t.show&&""!==_.chosenDisplaySize)if("No Preference"===e.selectedFont)for(var i=1;i<_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__.yf.length-1;i++){var r=-1;r="in"===_.chosenDisplaySizeUnits?2.54*_.chosenDisplaySize:_.chosenDisplaySize,n.push({font:_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__.yf[i].font,min:(0,_calculate__WEBPACK_IMPORTED_MODULE_4__.Fk)(t.viewDistance,t.CPS,_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__.yf[i].xf),max:(0,_calculate__WEBPACK_IMPORTED_MODULE_4__.PX)(r,_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__.yf[i].wf)})}else console.log(e.selectedFont),"number"===typeof(0,_calculate__WEBPACK_IMPORTED_MODULE_4__.Zv)(e.selectedFont)&&n.push({font:e.selectedFont,min:t.minPoint,max:t.maxPoint});return n}var validationSchema=yup__WEBPACK_IMPORTED_MODULE_2__.Ry({chosenDisplaySizeUnits:yup__WEBPACK_IMPORTED_MODULE_2__.nK().oneOf(_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__.XV.map((function(e){return e.label}))).label("Chosen Display Size Units"),chosenDisplaySize:yup__WEBPACK_IMPORTED_MODULE_2__.Rx().moreThan(0).label("Chosen Display Size").typeError("Please enter a number greater than 0")}),FurtherChoice=function e(t,_){(0,_home_runner_work_my_reading_display_my_reading_display_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_13__.Z)(this,e),(0,_home_runner_work_my_reading_display_my_reading_display_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__.Z)(this,"chosenDisplaySizeUnits",void 0),(0,_home_runner_work_my_reading_display_my_reading_display_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_14__.Z)(this,"chosenDisplaySize",void 0),this.chosenDisplaySizeUnits=t,this.chosenDisplaySize=_},initialValues=new FurtherChoice(_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__.XV[0].label,"");function shouldShowWarning(e,t){return console.log(e),console.log(t),""!==e.chosenDisplaySize&&("in"===e.chosenDisplaySizeUnits?2.54*e.chosenDisplaySize<t:e.chosenDisplaySize<t)}function Results(){var _useContext2=(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_calculator_context__WEBPACK_IMPORTED_MODULE_7__.G),outputValues=_useContext2.outputValues,inputValues=_useContext2.inputValues,showMinMaxTable=_useContext2.showMinMaxTable,setFurtherChoices=_useContext2.setFurtherChoices,setShowMinMaxTable=_useContext2.setShowMinMaxTable,setShowWarning=_useContext2.setShowWarning,showWarning=_useContext2.showWarning,furtherChoices=_useContext2.furtherChoices,minWidthString="".concat(outputValues.minWidth.toFixed(2),"cm\n  (").concat((outputValues.minWidth/2.54).toFixed(2),"in)"),router=(0,next_dist_client_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)(),_usePDF=(0,_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_10__.Eb)({document:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_report__WEBPACK_IMPORTED_MODULE_9__.Z,{input:inputValues,output:outputValues,furtherChoices:furtherChoices,minWidthString:minWidthString})}),_usePDF2=(0,_home_runner_work_my_reading_display_my_reading_display_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_15__.Z)(_usePDF,2),instance=_usePDF2[0],updateReport=_usePDF2[1];(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){updateReport()}),[furtherChoices,updateReport]);var handleSubmit=function(e){setShowMinMaxTable(!0);var t=new FurtherChoice(e.chosenDisplaySizeUnits,e.chosenDisplaySize);setFurtherChoices(t),setShowWarning(shouldShowWarning(t,outputValues.minWidth)),router.push("#chosenWidthTable")},handleReset=function(e){},highlightColor="primary",theme=localStorage.getItem("mrd-theme");return null!==theme&&(highlightColor="true"===localStorage.getItem("mrd-theme")?"secondary":"primary"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.Z,{hidden:!outputValues.show,"aria-live":"polite",style:{marginBottom:"3rem"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a",{id:"results",href:"#results"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__.Z,{variant:"h3",style:{marginTop:"2rem",marginBottom:"1rem"},children:"Results"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__.Z,{style:{marginTop:"1rem"},children:eval("`"+_content_calculator_text__WEBPACK_IMPORTED_MODULE_11__.f.maxReadingSpeed+"`")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_display_sizes_accordion__WEBPACK_IMPORTED_MODULE_6__.Z,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__.Z,{style:{marginTop:"2rem"},children:eval("`"+_content_calculator_text__WEBPACK_IMPORTED_MODULE_11__.f.firstTableDescription+"`")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__.Z,{component:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__.Z,style:{maxWidth:"25rem",margin:"1rem 0"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__.Z,{"aria-label":"point size for chosen font(s)",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__.Z,{children:"Font"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__.Z,{align:"center",children:_content_calculator_text__WEBPACK_IMPORTED_MODULE_11__.f.firstTableColumnHeader})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__.Z,{children:getPointSizeTableData(inputValues,outputValues).map((function(e){var t=e.font,_=e.pointSize;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__.Z,{component:"th",scope:"row",children:t}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__.Z,{align:"center",children:(0,_src_util__WEBPACK_IMPORTED_MODULE_25__.x)(_)})]},t)}))})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(formik__WEBPACK_IMPORTED_MODULE_0__.J9,{initialValues:initialValues,validationSchema:validationSchema,onSubmit:handleSubmit,onReset:handleReset,children:function(e){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_0__.l0,{onSubmit:e.handleSubmit,onReset:e.handleReset,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("a",{id:"chosenWidthTable",href:"#chosenWidthTable"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__.Z,{style:{marginTop:"2rem",marginBottom:"1rem"},children:"Enter a new width here to see what print size range you should have for effective reading. Once you enter the width and click \u2019Show Table\u2018 you may download a PDF report of your inputs and the results."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__.Z,{required:!0,id:"chosenDisplaySize",name:"chosenDisplaySize",label:"Display Size",value:e.values.chosenDisplaySize,onChange:e.handleChange,error:e.touched.chosenDisplaySize&&Boolean(e.errors.chosenDisplaySize),helperText:e.touched.chosenDisplaySize&&e.errors.chosenDisplaySize,InputProps:{endAdornment:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_27__.Z,{position:"end","aria-live":"polite",children:e.values.chosenDisplaySizeUnits})},style:{width:"10rem",marginLeft:"1rem"},color:highlightColor}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_26__.Z,{select:!0,required:!0,id:"chosenDisplaySizeUnits",name:"chosenDisplaySizeUnits",label:"Display Size Units",value:e.values.chosenDisplaySizeUnits,onChange:e.handleChange,style:{width:"13rem",marginLeft:"1rem"},error:e.touched.chosenDisplaySizeUnits&&Boolean(e.errors.chosenDisplaySizeUnits),helperText:e.touched.chosenDisplaySizeUnits&&e.errors.chosenDisplaySizeUnits,color:highlightColor,children:_content_options_definitions__WEBPACK_IMPORTED_MODULE_5__.XV.map((function(e,t){var _=e.label;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_28__.Z,{value:_,children:_},t)}))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_29__.Z,{variant:"contained",color:"primary",style:{marginLeft:"1rem",marginTop:"1rem"},type:"submit",children:showMinMaxTable?"Update table":"Show table"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(ResetInputValues,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_report_download_button__WEBPACK_IMPORTED_MODULE_8__.Z,{instance:instance,disabled:!showMinMaxTable})]})}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.Z,{hidden:!showWarning,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_17__.Z,{style:{marginTop:"2rem"},children:eval("`"+_content_calculator_text__WEBPACK_IMPORTED_MODULE_11__.f.chosenSizeWarning+"`")})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__.Z,{hidden:!showMinMaxTable,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__.Z,{component:_material_ui_core__WEBPACK_IMPORTED_MODULE_19__.Z,style:{maxWidth:"25rem",margin:"1rem 0"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_20__.Z,{"aria-label":"point size for chosen font(s)",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_21__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__.Z,{children:"Font"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__.Z,{align:"center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{dangerouslySetInnerHTML:{__html:_content_calculator_text__WEBPACK_IMPORTED_MODULE_11__.f.secondTableColumn1Header}})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__.Z,{align:"center",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div",{dangerouslySetInnerHTML:{__html:_content_calculator_text__WEBPACK_IMPORTED_MODULE_11__.f.secondTableColumn2Header}})})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_24__.Z,{children:getMinMaxTableData(inputValues,outputValues,furtherChoices).map((function(e){var t=e.font,_=e.min,n=e.max;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_material_ui_core__WEBPACK_IMPORTED_MODULE_22__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__.Z,{component:"th",scope:"row",children:t}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__.Z,{align:"center",children:(0,_src_util__WEBPACK_IMPORTED_MODULE_25__.x)(_)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_material_ui_core__WEBPACK_IMPORTED_MODULE_23__.Z,{align:"center",children:(0,_src_util__WEBPACK_IMPORTED_MODULE_25__.x)(n)})]},t)}))})]})})})]})}},20070:function(e,t,_){"use strict";_.d(t,{Z:function(){return l}});var n=_(15671),i=_(43144),r=_(60136),a=_(82963),o=_(61120),s=_(67294);_(78135),_(50743),_(22318),_(61201),_(56847),_(79895),_(82302),_(83750),_(57394),_(88222),_(99613),_(64566),_(85893);function c(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var _,n=(0,o.Z)(e);if(t){var i=(0,o.Z)(this).constructor;_=Reflect.construct(n,arguments,i)}else _=n.apply(this,arguments);return(0,a.Z)(this,_)}}var l=function(e){(0,r.Z)(_,e);var t=c(_);function _(){return(0,n.Z)(this,_),t.apply(this,arguments)}return(0,i.Z)(_,[{key:"render",value:function(){return null}}]),_}(s.Component)},96473:function(e,t,_){"use strict";var n=_(282),i=_(85893);t.Z=function(e){var t=e.instance,_=e.disabled,r="Create Report PDF",a="";return null!==t&&null!==t.url&&(a=t.url),null===t||_||(r="Generating Results PDF"),null===t||!1!==t.loading||_||(r="Download Results PDF"),(0,i.jsx)(n.Z,{variant:"contained",color:"primary",disabled:null===t||t.loading||_,href:a,download:"MyReadingDisplayReport.pdf",style:{marginLeft:"1em",marginTop:"1em"},children:r})}},54325:function(e,t,_){"use strict";_.d(t,{f:function(){return n}});var n={VAText:"Please enter the reader&apos;s binocular visual acuity <strong>(required)</strong>.",CPSText:"Please enter the reader&apos;s critical print size measured by reading charts <strong>(optional)</strong>.",CPSDetail:"Critical print size refers to the smallest print size that allows one to read at their maximum reading speed.",CFLText:"Does the reader have central field loss?",maxReadingSpeed:"To achieve a maximum reading speed, the reader needs a display with a width larger than ${minWidthString}.",firstTableDescription:"The table below shows the point size you will need when reading on a display with ${minWidthString} width using different fonts.",firstTableColumnHeader:"Point Size",chosenSizeWarning:"This display size is smaller than the minimum for the conditions specified. Please try a display size larger the the minimum of ${minWidthString}.",secondTableColumn1Header:"Minimum Point Size",secondTableColumn2Header:"Maximum Point Size"}},99447:function(e,t,_){"use strict";_.d(t,{N:function(){return n},XV:function(){return i},Vh:function(){return r},yf:function(){return a},cw:function(){return o}});var n=[{value:"Snellen (U.S.)",label:"20/"},{value:"Snellen (Metric)",label:"6/"},{value:"logMAR",label:" "}],i=[{value:"Imperial (in)",label:"in"},{value:"Metric (cm)",label:"cm"}],r=[{value:"yes",CFL:1,label:"Yes"},{value:"no",CFL:0,label:"No"},{value:"dontKnow",CFL:1,label:"Don't Know"}],a=[{font:"No Preference",wx:void 0,wf:void 0,xf:void 0},{font:"Times Roman",wx:.89,wf:.4,xf:.45},{font:"Times Roman Bold",wx:.93,wf:.42,xf:.46},{font:"Courier",wx:1.33,wf:.6,xf:.45},{font:"Courier Bold",wx:1.33,wf:.6,xf:.45},{font:"Helvetica",wx:.85,wf:.45,xf:.52},{font:"Helvetica Bold",wx:.89,wf:.48,xf:.53},{font:"Arial",wx:.85,wf:.44,xf:.52},{font:"Arial Bold",wx:.92,wf:.48,xf:.52},{font:"Calibri",wx:.98,wf:.46,xf:.46},{font:"Calibri Bold",wx:.88,wf:.41,xf:.46},{font:"Palatino",wx:.94,wf:.44,xf:.47},{font:"Palatino Bold",wx:.97,wf:.46,xf:.47},{font:"Lucinda Grande",wx:.92,wf:.49,xf:.53},{font:"Lucinda Grande Bold",wx:.97,wf:.52,xf:.54},{font:"Frutiger Reg",wx:.92,wf:.47,xf:.51},{font:"Frutiger Bold",wx:.93,wf:.47,xf:.51},{font:"Maxular",wx:1.54,wf:.67,xf:.44},{font:"APHont",wx:.91,wf:.5,xf:.55},{font:"Tiresias",wx:.86,wf:.46,xf:.53}],o=[{label:"40cm (16 inch)",vd:40},{label:"20cm (8 inch)",vd:20},{label:"15cm (6 inch)",vd:15},{label:"Custom",vd:void 0}]},58866:function(e,t,_){"use strict";_.r(t),_.d(t,{default:function(){return te}});var n,i,r=_(43832),a=_(9008),o=_(67294),s=_(15671),c=_(43144),l=_(97326),u=_(60136),m=_(82963),d=_(61120),h=_(4942),E=_(61541),D=_(22318),f=_(99956),P=_(42123),p=_(7397),M=_(85639),x=_(64436),O=_(96019),C=_(67162),w=_(30553),y=_(1846),T=_(12613),v=_(78135),U=_(50743),g=_(61201),A=_(282),R=_(64566),b=_(94649),L=_(11163),W=_(84359),B=_(99447),I=_(19501),j={min:-.52,max:3},K={min:-.3,max:4},S=Math.pow(10,-j.min),Z=Math.pow(10,-j.max),z={min:6/S,max:6/Z},V={min:20/S,max:20/Z},F=Math.pow(10,-K.min),k=Math.pow(10,-K.max),q={min:6/F,max:6/k},N={min:20/F,max:20/k},H=I.Ry({visualAcuityUnits:I.nK().oneOf(B.N.map((function(e){return e.label}))).required().label("Visual Acuity Units"),visualAcuity:(n="visualAcuityUnits",i="Visual Acuity",I.Rx().when(n,{is:"6/",then:I.Rx().min(z.min,"".concat(i," must be at least\n          ").concat(z.min.toFixed(2))).max(z.max,"".concat(i," must be no greater\n          than ").concat(z.max)).typeError("Please enter a number between\n          ".concat(z.min.toFixed(2)," and\n          ").concat(z.max))}).when(n,{is:"20/",then:I.Rx().min(V.min,"".concat(i," must be at\n          least ").concat(V.min.toFixed(2))).max(V.max,"".concat(i," must be\n          no greater than ").concat(V.max)).typeError("Please enter a number between\n          ".concat(V.min.toFixed(2)," and\n          ").concat(V.max))}).when(n,{is:" ",then:I.Rx().min(j.min,"".concat(i," must be at least\n            ").concat(j.min.toFixed(2))).max(j.max,"".concat(i," must be no greater\n            than ").concat(j.max)).typeError("Please enter a number between\n            ".concat(j.min.toFixed(2)," and ").concat(j.max))}).label(i)),criticalPrintSizeUnits:I.nK().oneOf(B.N.map((function(e){return e.label}))).required().label("Critical Print Size Units"),criticalPrintSize:function(e,t){return I.Rx().when(e,{is:"6/",then:I.Rx().min(q.min,"".concat(t," must be at\n          least ").concat(q.min.toFixed(2))).max(q.max,"".concat(t," must be no\n          greater than ").concat(q.max)).typeError("Please enter a number between\n          ".concat(q.min.toFixed(2)," and\n          ").concat(q.max))}).when(e,{is:"20/",then:I.Rx().min(N.min,"".concat(t," must\n          be at least ").concat(N.min.toFixed(2))).max(N.max,"".concat(t," must be\n          no greater than ").concat(N.max)).typeError("Please enter a number between\n          ".concat(N.min.toFixed(2)," and\n          ").concat(N.max))}).when(e,{is:" ",then:I.Rx().min(K.min,"".concat(t," must be at least\n          ").concat(K.min.toFixed(2))).max(K.max,"".concat(t," must be no greater\n          than ").concat(K.max)).typeError("Please enter a number between\n          ".concat(K.min.toFixed(2)," and ").concat(K.max))}).label(t)}("criticalPrintSizeUnits","Critical Print Size"),hasCentralFieldLoss:I.Z_().oneOf(B.Vh.map((function(e){return e.label}))).label("Has Central Field Loss"),selectedFont:I.Z_().oneOf(B.yf.map((function(e){return e.font}))).label("Selected Font"),selectedViewingDistance:I.Z_().oneOf(B.cw.map((function(e){return e.label}))).label("Selected Viewing Distance"),customViewDistance:I.Rx().moreThan(0).label("Custom View Distance"),customViewDistanceUnits:I.Z_().oneOf(B.XV.map((function(e){return e.label}))).label("Custom View Distance Units")}),X=_(54325),G=_(85893),J={visualAcuityUnits:B.N[0].label,visualAcuity:"20",criticalPrintSizeUnits:B.N[0].label,criticalPrintSize:"",hasCentralFieldLoss:"Don't Know",selectedFont:B.yf[0].font,selectedViewingDistance:B.cw[0].label,customViewDistance:10,customViewDistanceUnits:B.XV[0].label};function $(){var e=(0,L.useRouter)(),t=(0,o.useContext)(E.G),_=t.setInputValues,n=t.setOutputValues,i=t.resetOutputValues,r=t.resetInputValues,a=t.setShowWarning,s=t.setShowMinMaxTable,c=t.resetFurtherChoices,l="primary";return null!==localStorage.getItem("mrd-theme")&&(l="true"===localStorage.getItem("mrd-theme")?"secondary":"primary"),(0,G.jsx)(b.J9,{initialValues:J,validationSchema:H,onSubmit:function(t){_(t),n((0,W.Kf)(t)),a(!1),s(!1),c(),e.push("#results")},onReset:function(){i(),r(),a(!1),s(!1),c(),e.push("/calculator")},children:function(e){return(0,G.jsxs)(b.l0,{onSubmit:e.handleSubmit,onReset:e.handleReset,onChange:function(t){e.handleChange(t),i()},children:[(0,G.jsx)(D.Z,{variant:"body1",style:{marginBottom:"1em",marginTop:"1em"},children:(0,G.jsx)("div",{dangerouslySetInnerHTML:{__html:X.f.VAText}})}),(0,G.jsxs)(f.Z,{style:{marginTop:"1em"},children:[(0,G.jsx)(P.Z,{required:!0,id:"visualAcuity",name:"visualAcuity",label:"Visual Acuity (VA)",value:e.values.visualAcuity,onChange:e.handleChange,error:e.touched.visualAcuity&&Boolean(e.errors.visualAcuity),helperText:e.touched.visualAcuity&&e.errors.visualAcuity,InputProps:{startAdornment:(0,G.jsx)(p.Z,{position:"start","aria-live":"polite",children:e.values.visualAcuityUnits})},style:{width:"13rem",margin:"0 1rem 0 0"},color:l}),(0,G.jsx)(P.Z,{required:!0,select:!0,id:"visualAcuityUnits",name:"visualAcuityUnits",label:"VA Units",value:e.values.visualAcuityUnits,onChange:e.handleChange,error:e.touched.visualAcuityUnits&&Boolean(e.errors.visualAcuityUnits),helperText:e.touched.visualAcuityUnits&&e.errors.visualAcuityUnits,style:{width:"12rem"},color:l,children:B.N.map((function(e,t){var _=e.value,n=e.label;return(0,G.jsx)(M.Z,{value:n,children:_},t)}))})]}),(0,G.jsxs)(f.Z,{style:{marginTop:"1em",marginBottom:"1em"},children:[(0,G.jsx)(D.Z,{variant:"body1",style:{marginTop:"2em"},children:(0,G.jsx)("div",{dangerouslySetInnerHTML:{__html:X.f.CPSText}})}),(0,G.jsx)(D.Z,{variant:"body1",style:{marginBottom:"1em"},children:(0,G.jsx)("div",{dangerouslySetInnerHTML:{__html:X.f.CPSDetail}})}),(0,G.jsx)(P.Z,{id:"criticalPrintSize",name:"criticalPrintSize",label:"Critical Print Size (CPS)",value:e.values.criticalPrintSize,onChange:e.handleChange,error:e.touched.criticalPrintSize&&Boolean(e.errors.criticalPrintSize),helperText:e.touched.criticalPrintSize&&e.errors.criticalPrintSize,InputProps:{startAdornment:(0,G.jsx)(p.Z,{position:"start","aria-live":"polite",children:e.values.criticalPrintSizeUnits})},style:{width:"15rem",margin:"0 1rem 0 0"},color:l}),(0,G.jsx)(P.Z,{select:!0,id:"criticalPrintSizeUnits",name:"criticalPrintSizeUnits",label:"CPS Units",value:e.values.criticalPrintSizeUnits,onChange:e.handleChange,style:{width:"13rem"},color:l,children:B.N.map((function(e,t){var _=e.value,n=e.label;return(0,G.jsx)(M.Z,{value:n,children:_},t)}))})]}),(0,G.jsxs)(f.Z,{children:[(0,G.jsx)(D.Z,{variant:"body1",style:{marginBottom:"1em",marginTop:"2em"},children:(0,G.jsx)("div",{dangerouslySetInnerHTML:{__html:X.f.CFLText}})}),(0,G.jsxs)(x.Z,{required:!0,children:[(0,G.jsx)(O.Z,{color:l,children:"Has Central Field Loss"}),(0,G.jsx)(C.Z,{row:!0,"aria-label":"has central field loss",id:"hasCentralFieldLoss",name:"hasCentralFieldLoss",value:e.values.hasCentralFieldLoss,onChange:e.handleChange,color:l,children:B.Vh.map((function(e,t){var _=e.label;e.CFL;return(0,G.jsx)(w.Z,{control:(0,G.jsx)(y.Z,{}),color:l,value:_,label:_},t)}))})]})]}),(0,G.jsxs)(f.Z,{style:{marginTop:"1em",marginBottom:"1em",display:"flex",justifyContent:"space-between"},children:[(0,G.jsx)(P.Z,{select:!0,required:!0,style:{width:"12em"},id:"selectedFont",name:"selectedFont",label:"Selected Font",value:e.values.selectedFont,onChange:e.handleChange,onFocus:i,color:l,children:B.yf.map((function(e,t){var _=e.font;return(0,G.jsx)(M.Z,{value:_,children:_},t)}))}),(0,G.jsx)(T.Z,{smDown:!0,children:(0,G.jsxs)(v.Z,{style:{width:"70%"},children:[(0,G.jsx)(U.Z,{expandIcon:(0,G.jsx)(R.Z,{}),children:(0,G.jsx)(D.Z,{children:"Font Demos"})}),(0,G.jsx)(g.Z,{children:(0,G.jsx)("img",{src:"font-sample.png",style:{width:"100%"},alt:"Samples of the fonts available to choose from with the sentence: 'The quick brown fox jumps over a lazy dog'"})})]})})]}),(0,G.jsx)(T.Z,{mdUp:!0,children:(0,G.jsxs)(v.Z,{style:{width:"100%",maxWidth:"40em"},children:[(0,G.jsx)(U.Z,{expandIcon:(0,G.jsx)(R.Z,{}),children:(0,G.jsx)(D.Z,{children:"Font Demos"})}),(0,G.jsx)(g.Z,{children:(0,G.jsx)("img",{src:"font-sample.png",style:{width:"100%"},alt:"Samples of the fonts available to choose from with the sentence: 'The quick brown fox jumps over a lazy dog'"})})]})}),(0,G.jsxs)(f.Z,{style:{marginTop:"1em",marginBottom:"1em"},children:[(0,G.jsx)(P.Z,{select:!0,required:!0,style:{width:"12rem"},id:"selectedViewingDistance",name:"selectedViewingDistance",label:"Viewing Distance",value:e.values.selectedViewingDistance,onChange:e.handleChange,onFocus:i,color:l,children:B.cw.map((function(e,t){var _=e.label;return(0,G.jsx)(M.Z,{value:_,children:_},t)}))}),(0,G.jsxs)(f.Z,{component:"span",hidden:!("Custom"===e.values.selectedViewingDistance),children:[(0,G.jsx)(P.Z,{required:!0,id:"customViewDistance",name:"customViewDistance",label:"View Distance",value:e.values.customViewDistance,onChange:e.handleChange,error:e.touched.customViewDistance&&Boolean(e.errors.customViewDistance),helperText:e.touched.customViewDistance&&e.errors.customViewDistance,InputProps:{endAdornment:(0,G.jsx)(p.Z,{position:"end","aria-live":"polite",children:e.values.customViewDistanceUnits})},style:{width:"10rem",margin:"0 1rem"},color:l}),(0,G.jsx)(P.Z,{select:!0,required:!0,id:"customViewDistanceUnits",name:"customViewDistanceUnits",label:"View Distance Units",value:e.values.customViewDistanceUnits,onChange:e.handleChange,style:{width:"13rem"},error:e.touched.customViewDistanceUnits&&Boolean(e.errors.customViewDistanceUnits),helperText:e.touched.customViewDistanceUnits&&e.errors.customViewDistanceUnits,color:l,children:B.XV.map((function(e,t){e.value;var _=e.label;return(0,G.jsx)(M.Z,{value:_,children:_},t)}))})]})]}),(0,G.jsx)(A.Z,{color:"primary",variant:"contained",type:"submit",children:"Calculate"}),(0,G.jsx)(A.Z,{color:"secondary",variant:"contained",type:"reset",style:{marginLeft:"1rem"},children:"Reset"})]})}},"mainInput")}var Y=_(44483);function Q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var _,n=(0,d.Z)(e);if(t){var i=(0,d.Z)(this).constructor;_=Reflect.construct(n,arguments,i)}else _=n.apply(this,arguments);return(0,m.Z)(this,_)}}var ee=function(e){(0,u.Z)(_,e);var t=Q(_);function _(e){var n;return(0,s.Z)(this,_),n=t.call(this,e),(0,h.Z)((0,l.Z)(n),"state",void 0),n.state={outputValues:new W.cr(!1,-1,-1,-1,-1,-1,-1),setOutputValues:function(e){n.state.outputValues=e},resetOutputValues:function(){n.state.outputValues=new W.cr(!1,-1,-1,-1,-1,-1,-1)},inputValues:new W.TH("20/","","20/","","","","",-1,""),setInputValues:function(e){n.state.inputValues=e},resetInputValues:function(){n.state.inputValues=new W.TH("20/","","20/","","","","",-1,"")},showMinMaxTable:!1,setShowMinMaxTable:function(e){n.state.showMinMaxTable=e},furtherChoices:new Y.RJ("",-1),setFurtherChoices:function(e){n.state.furtherChoices=e},resetFurtherChoices:function(){n.state.furtherChoices=new Y.RJ(B.XV[0].label,"")},showWarning:!1,setShowWarning:function(e){n.state.showWarning=e}},n}return(0,c.Z)(_,[{key:"render",value:function(){return(0,G.jsxs)(E.G.Provider,{value:this.state,children:[(0,G.jsx)($,{}),(0,G.jsx)(Y.ZP,{})]})}}]),_}(o.Component);function te(){return(0,G.jsxs)(r.Z,{maxWidth:"md",style:{padding:0},children:[(0,G.jsx)(a.default,{children:(0,G.jsx)("title",{children:"Calculator | My Reading Display"})}),(0,G.jsx)("main",{children:(0,G.jsx)(ee,{})}),(0,G.jsx)("footer",{})]})}},5288:function(e,t,_){"use strict";_.d(t,{x:function(){return n}});function n(e){return e>=20?e.toFixed(0):(Math.round(2*e)/2).toFixed(1)}},85566:function(e,t,_){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calculator",function(){return _(58866)}])},42480:function(){},25832:function(){},52361:function(){},94616:function(){}},function(e){e.O(0,[728,186,708,306,774,888,179],(function(){return t=85566,e(e.s=t);var t}));var t=e.O();_N_E=t}]);