
var questions=[//单选题
{
    title:"Who is the current president of US?",
    options:["Obama","Bush","Trump"],
    key:"Trump"
},
{
    title:"Which is the largest economy in the world?",
    options:["US","China","European Union"],
    key:"European Union"
}
]
var multi_questions=[//多选题
{
    title:"which are Asian countries?(Multi choice)",
    options:["China","Japan","America","Korea"],
    key:["China","Japan","Korea"]
}
]
var answers=[]//选择结果数组
var panel = document.querySelector("#panel");
var addTitle=function(parent,text){//加问题
    var title = document.createElement("h3");
    title.innerHTML=text;
    parent.appendChild(title);
}
var addOptions=function(parent,index,text){//加选项
    var radio=document.createElement("input")
    radio.type="radio"
    radio.required="true"
    radio.name=index;
    radio.id=text;
    radio.onclick=function(){
        answers[index]= text;
    }
    parent.appendChild(radio)
    var label=document.createElement("label")//加标签
    label.innerHTML=text;
    label.setAttribute("for",text);
    parent.appendChild(label)
}

for(var j=0;j<questions.length;j++){
    var question=questions[j]
    addTitle(panel,question.title);
    for(var i =0;i<question.options.length;i++){
        addOptions(panel,j,question.options[i])
        }
}
var submitButton=document.querySelector("button")//提交
submitButton.onclick=function(){
        var p = 0
        do{
           var myChoice=document.querySelectorAll("input[name="+"'"+p+"'"+"]")
        if(questions[p].key==answers[p]){//正确答案
            for(k=0;k<myChoice.length;k++){
                if(myChoice[k].checked==true){//选中被点击的radio
                    var nextLabel=myChoice[k].nextSibling
                    nextLabel.style.background="lightgreen"
                    var correct=document.createElement("img")
                    correct.src="grade_correct.svg"
                    nextLabel.appendChild(correct)
                }
            } 
        }
        
    
            else{//错误答案
               for(o=0;o<myChoice.length;o++){
                if(myChoice[o].checked==true){//选中被点击的radio
                var nextLabel=myChoice[o].nextSibling
                nextLabel.style.background="pink"
                var incorrect=document.createElement("img")
                    incorrect.src="grade_incorrect.svg"
                    nextLabel.appendChild(incorrect)
                }
            }
        }
        p++;
    }   
    while(p<questions.length)
    
    var allRadio=document.querySelectorAll("input")//提交后不可再选
    for(var l=0;l<allRadio.length;l++){
        allRadio[l].disabled="true";
        allRadio[l].style.cursor="not-allowed"

    }
        //多选题提交
        var multichoice=document.querySelectorAll("input[type='checkbox']:checked")
        var multichoicearr=[]
        
        for(var z=0;z<multichoice.length;z++){
            if(multichoice[z].name="multi0"){
                multichoicearr[z]=multichoice[z]
                for(var t = 0; t<multi_questions[0].key.length;t++){

                    if(multichoicearr[z].nextSibling.innerHTML==multi_questions[0].key[t]){//选项正确
                        var nextLabelmulti=multichoicearr[z].nextSibling
                            nextLabelmulti.style.background="lightgreen"//变绿色
                            var correct=document.createElement("img")
                            correct.src="grade_correct.svg"
                            nextLabelmulti.appendChild(correct)//加勾
                    /*for(var u=0;u<multichoice.length;u++){
                        if(multichoice[u].nextSibling.innerHTML==choice[z]){//选中该选项
                            var nextLabelmulti=multichoice[u].nextSibling
                                nextLabelmulti.style.background="lightgreen"
                                var correct=document.createElement("img")
                                    correct.src="grade_correct.svg"
                                    nextLabelmulti.appendChild(correct)
                                
                        }
                    }*/
                }
            }
        }
                
                /*else{
                    for(var q=0;q<multichoice.length;q++){
                        if(multichoice[q].nextSibling.innerHTML==choice[z]){//选中该选项
                            var nextLabelmultifalse=multichoice[q].nextSibling
                                nextLabelmultifalse.style.background="pink"
                            
                        }
                    }
                }*/  
               for(var w = 0; w<multichoice.length;w++){

                   if(multichoice[w].nextSibling.style.background==""){//变红
                    var nextLabelmultifalse=multichoice[w].nextSibling
                    nextLabelmultifalse.style.background="pink"
                    
                   }
               }
               var checkopt=document.querySelectorAll("input[name='multi0']") 
               for(var e=0;e<multi_questions[0].key.length;e++){
                   for(r=0;r<checkopt.length;r++){
                        if(multi_questions[0].key[e]==checkopt[r].nextSibling.innerHTML&&checkopt[r].checked==false){
                            checkopt[r].nextSibling.style.background="yellow"
                            var correct=document.createElement("img")
                            correct.src="grade_correct.svg"
                            checkopt[r].nextSibling.appendChild(correct)
                        }  
                  }
               }
            }
        }


//多选
var title = document.createElement("h3");
    title.innerHTML=multi_questions[0].title;
    panel.appendChild(title);
    for(var x=0;x<multi_questions[0].options.length;x++){
    var checkbox=document.createElement("input")
    checkbox.type="checkbox"
    checkbox.name="multi0";
    checkbox.id="multi"+multi_questions[0].options[x];
    panel.appendChild(checkbox)
    var label=document.createElement("label")//加标签
    label.innerHTML=multi_questions[0].options[x];
    label.setAttribute("for","multi"+multi_questions[0].options[x]);
    panel.appendChild(label)
    }
    