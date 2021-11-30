(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[1],{153:function(t,e,n){t.exports={wrapper:"Contacts_wrapper__VrHoT",contacts__list:"Contacts_contacts__list__1SBxt",contacts__item:"Contacts_contacts__item__QwykZ",text:"Contacts_text__3bm4x",del__btn:"Contacts_del__btn__35HWS"}},194:function(t,e,n){t.exports={section:"Section_section__i86A0",section__title:"Section_section__title__1bUz-"}},195:function(t,e,n){t.exports={form:"Form_form__1Hlrn",form__btn:"Form_form__btn__16R2V"}},221:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return k}));var c=n(0),a=n(27),r=n(194),s=n.n(r),o=n(1);function i(t){var e=t.title,n=t.children;return Object(o.jsxs)("div",{className:s.a.section,children:[Object(o.jsx)("h2",{className:s.a.section__title,children:e}),n]})}var l=n(11),b=n(195),u=n.n(b),j=n(22),_=n(54),d=function(t){return t.contacts.entities},m=function(t){return t.contacts.filter},O=function(t){return t.contacts.isLoading},f=Object(_.a)([d,m],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e)}))}));function h(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],r=e[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),b=i[0],_=i[1],m=Object(a.c)(d),O=Object(a.b)(),f=function(t){var e=t.currentTarget,n=e.name,c=e.value;switch(n){case"name":r(c);break;case"number":_(c);break;default:return}},h=function(){r(""),_("")};return Object(o.jsxs)("form",{className:u.a.form,onSubmit:function(t){t.preventDefault(),0===m.filter((function(t){return t.name.toLowerCase()===n.toLowerCase()})).length?(console.log(n,b),O(j.a({name:n,number:b}))):alert("".concat(n," is already in contacts.")),h()},children:[Object(o.jsx)("label",{children:Object(o.jsx)("input",{type:"text",name:"name",placeholder:"Name",value:n,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})}),Object(o.jsx)("br",{}),Object(o.jsx)("label",{children:Object(o.jsx)("input",{type:"tel",name:"number",placeholder:"Number",value:b,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})}),Object(o.jsx)("button",{className:u.a.form__btn,type:"submit",children:"Add contact"})]})}var x=n(153),p=n.n(x);function v(t){var e=t.id,n=t.name,c=t.number,r=Object(a.b)();return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("p",{children:[n,": ",c]}),Object(o.jsx)("button",{className:p.a.del__btn,type:"button",onClick:function(){return r(j.b(e))},children:"Delete"})]})}function g(){var t=Object(a.c)(f);return Object(o.jsx)("ul",{className:p.a.contacts__list,children:t.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(o.jsx)("li",{className:p.a.contacts__item,children:Object(o.jsx)(v,{id:e,name:n,number:c})},e)}))})}var C=n(41);function w(){var t=Object(a.c)(m),e=Object(a.b)();return Object(o.jsx)("label",{className:p.a.wrapper,children:Object(o.jsx)("input",{placeholder:"Find contacts by name",type:"text",value:t,onChange:function(t){return e(C.b(t.target.value.toLowerCase()))}})})}var N=n(81);function k(){var t=Object(a.c)(d),e=Object(a.c)(O),n=Object(a.b)();return Object(c.useEffect)((function(){return n(j.c())}),[n]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"Phonebook",children:Object(o.jsx)(h,{})}),Object(o.jsx)(i,{title:"Contacts",children:e?Object(o.jsx)(N.a,{}):t.length>0?Object(o.jsxs)(o.Fragment,{children:[t.length>1&&Object(o.jsx)(w,{}),Object(o.jsx)(g,{})]}):Object(o.jsx)("div",{className:p.a.wrapper,children:Object(o.jsx)("p",{className:p.a.text,children:"No contacts yet"})})})]})}}}]);
//# sourceMappingURL=contacts-page.5bae2b46.chunk.js.map