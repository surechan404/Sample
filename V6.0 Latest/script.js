var input,text1,text2,result;

function trimmer(){
input = document.getElementById("ta1").value;
var e = document.getElementById("replacement_id");  
var value = e.value;
var text = e.options[e.selectedIndex].text;

if (value == 0){
input= input.replace(/\s/g,'')
ta2.value=input;
}
else if(value == 1){
	input= input.replace(/\s/g,'_')
ta2.value = input;
	} else {
    input= input.replace(/\s/g,',')
  ta2.value = input;
    }

}
/*
function trimmer(){
input = document.getElementById("ta1").value;
input= input.replace(/}/g,'\n}\n')
ta2.value=input;
}*/

    function ls(){
input = document.getElementById("inp_ls").value;
input= input.split(";").join("\n");
septd_ls.value=input;              }
// 1.For BlanceSpace Trimmer

function reset(){
ta1.value="";
ta2.value="";
		}

function copytocb() {

var copyText = document.getElementById("ta2");

  /* Select the text field*/
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices*/

   /* Copy the text inside the text field*/
  navigator.clipboard.writeText(copyText.value).readOnly = true;;

  /* Alert the copied text */
  alert("Done.. Copied to Clipboard !!");
}
// 2.For Comma Separator

function copytocb1() {

var copyText = document.getElementById("septd_ls");

  /* Select the text field*/
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices*/

   /* Copy the text inside the text field*/
  navigator.clipboard.writeText(copyText.value).readOnly = true;;

  /* Alert the copied text */
  alert("Done.. Copied to Clipboard !!");
}

function reset1(){
inp_ls.value="";
septd_ls.value="";
		}

		function ls(){
input = document.getElementById("inp_ls").value;
input= input.split(",").join(",\n");
septd_ls.value=input;
                  }
		
		
		

// 3.For Text Repeater
function copytocb2() {

var copyText = document.getElementById("repeated_txt");

  /* Select the text field*/
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices*/

   /* Copy the text inside the text field*/
  navigator.clipboard.writeText(copyText.value).readOnly = true;;

  /* Alert the copied text */
  alert("Done.. Copied to Clipboard !!");
}


function reset2(){
inp_tr.value="";
inp_count.value="";
repeated_txt.value="";
		}

	function repeat(){
		var repeat_input = document.getElementById("inp_tr").value;
	repeated_txt.value=repeat_input;
	var count =  document.getElementById("inp_count").value;
	var temp='' ; 
	var ip_count1 = document.getElementById('ip_count');
	var op_count1 = document.getElementById('op_count');
	
	if (count>=1){
			
		
	for(let i=1;i<=count;i++){

	//repeated_txt = repeat_input.append(append() repeat_input);
	
	temp = repeat_input+temp;
	//repeat_input = temp;
	repeated_txt.value = temp;
	
					}
	
	}	
		
		else{
			alert("Invalid count value ");
			inp_count.value="";
			repeated_txt.value="";
			//break else ;
		 	
		}
	}
		
function countChars(){
//Gettheinputtextvalue
var counter_input = document.getElementById("counter_input").value;
var totalchar = counter_input.length;
counter_output.value= totalchar;
}


function reset3(){
counter_input.value="";
counter_output.value="";
		}




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active"); 

    /* Toggle between hiding and showing the active panel */
   var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function count(){
	
	
var counter_input = document.getElementById("counter_input").value;
var numWords = 0;
for (var i = 0; i < text.length; i++) {
var currentCharacter = text[i];
	}

}


function codeFormatter(){
code_input = document.getElementById("format_input").value;
code_input= code_input.replace(/;/g,';\n');	
code_input= code_input.replace(/{/g,'   { \n');
code_input= code_input.replace(/}/g,'\n   }\n');
code_input= code_input.replace(/,/g,',\n');
// code_input= code_input.replace(' ','');
code_input= code_input.replace('<br>','<br>\n');	
format_output.value = code_input;
}
function reset4(){
format_input.value="";
format_output.value="";
}

// 3.For Text Repeater
function copytocb3() {

var copyText = document.getElementById("format_output");

  /* Select the text field*/
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices*/

   /* Copy the text inside the text field*/
  navigator.clipboard.writeText(copyText.value).readOnly = true;;

  /* Alert the copied text */
  alert("Done.. Copied to Clipboard !!");
}
function masterReset(){
ta1.value="";
ta2.value="";
inp_ls.value="";
septd_ls.value="";
inp_tr.value="";
inp_count.value="";
repeated_txt.value="";
counter_input.value="";
counter_output.value="";
format_input.value="";
format_output.value="";
inp_caseFormatter.value="";
caseFormatted_txt.value="";
col_input.value="";
col_output.value="";
}



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function caseFormatter(){
  var caseVal = document.getElementById("caseCode");  
  var value = caseVal.value;
  var text = caseVal.options[caseVal.selectedIndex].text;
  var inputString = document.getElementById("inp_caseFormatter").value;
  if (value == 0){
    var caseFormatted = (document.getElementById("inp_caseFormatter").value).toUpperCase();
    caseFormatted_txt.value = caseFormatted;
    
  }
  else if(value == 1) {
    var caseFormatted = (document.getElementById("inp_caseFormatter").value).toLowerCase();
    caseFormatted_txt.value = caseFormatted;
    }

    // else{
    //   var lenCaseFormatter = ((document.getElementById("inp_caseFormatter").value).length);
    //   //var splitted  = inp_caseFormatter.split();
    //   console.log(inp_caseFormatter.split());
    // }
    else if(value == 2) {
     
        let result = '';
        for (let i = 0; i < inputString.length; i++) {
          if (inputString[i] === inputString[i].toUpperCase()) {
            result += inputString[i].toLowerCase();
          } else {
            result += inputString[i].toUpperCase();
          }
        }
        
        caseFormatted_txt.value = result;
      

  }


}

function copytocb5() {

  var copyText = document.getElementById("caseFormatted_txt");
  
    /* Select the text field*/
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices*/
  
     /* Copy the text inside the text field*/
    navigator.clipboard.writeText(copyText.value).readOnly = true;;
  
    /* Alert the copied text */
    alert("Done.. Copied to Clipboard !!");
  }
  function reset5(){
    inp_caseFormatter.value="";
    caseFormatted_txt.value="";
    }

function columnNmFinder(){

  var columnName = document.getElementById("col_input");
  columnName1 = columnName.value.toString().toUpperCase();
 // var columnNumber = colNum;
 var columnNm = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","AA","AB","AC","AD","AE","AF","AG","AH","AI","AJ","AK","AL","AM","AN","AO","AP","AQ","AR","AS","AT","AU","AV","AW","AX","AY","AZ","BA","BB","BC","BD","BE","BF","BG","BH","BI","BJ","BK","BL","BM","BN","BO","BP","BQ","BR","BS","BT","BU","BV","BW","BX","BY","BZ","CA","CB","CC","CD","CE","CF","CG","CH","CI","CJ","CK","CL","CM","CN","CO","CP","CQ","CR","CS","CT","CU","CV","CW","CX","CY","CZ","DA","DB","DC","DD","DE","DF","DG","DH","DI","DJ","DK","DL","DM","DN","DO","DP","DQ","DR","DS","DT","DU","DV","DW","DX","DY","DZ","EA","EB","EC","ED","EE","EF","EG","EH","EI","EJ","EK","EL","EM","EN","EO","EP","EQ","ER","ES","ET","EU","EV","EW","EX","EY","EZ","FA","FB","FC","FD","FE","FF","FG","FH","FI","FJ","FK","FL","FM","FN","FO","FP","FQ","FR","FS","FT","FU","FV","FW","FX","FY","FZ","GA","GB","GC","GD","GE","GF","GG","GH","GI","GJ","GK","GL","GM","GN","GO","GP","GQ","GR","GS","GT","GU","GV","GW","GX","GY","GZ","HA","HB","HC","HD","HE","HF","HG","HH","HI","HJ","HK","HL","HM","HN","HO","HP","HQ","HR","HS","HT","HU","HV","HW","HX","HY","HZ","IA","IB","IC","ID","IE","IF","IG","IH","II","IJ","IK","IL","IM","IN","IO","IP","IQ","IR","IS","IT","IU","IV","IW","IX","IY","IZ","JA","JB","JC","JD","JE","JF","JG","JH","JI","JJ","JK","JL","JM","JN","JO","JP","JQ","JR","JS","JT","JU","JV","JW","JX","JY","JZ","KA","KB","KC","KD","KE","KF","KG","KH","KI","KJ","KK","KL","KM","KN","KO","KP","KQ","KR","KS","KT","KU","KV","KW","KX","KY","KZ","LA","LB","LC","LD","LE","LF","LG","LH","LI","LJ","LK","LL","LM","LN","LO","LP","LQ","LR","LS","LT","LU","LV","LW","LX","LY","LZ","MA","MB","MC","MD","ME","MF","MG","MH","MI","MJ","MK","ML","MM","MN","MO","MP","MQ","MR","MS","MT","MU","MV","MW","MX","MY","MZ","NA","NB","NC","ND","NE","NF","NG","NH","NI","NJ","NK","NL","NM","NN","NO","NP","NQ","NR","NS","NT","NU","NV","NW","NX","NY","NZ","OA","OB","OC","OD","OE","OF","OG","OH","OI","OJ","OK","OL","OM","ON","OO","OP","OQ","OR","OS","OT","OU","OV","OW","OX","OY","OZ","PA","PB","PC","PD","PE","PF","PG","PH","PI","PJ","PK","PL","PM","PN","PO","PP","PQ","PR","PS","PT","PU","PV","PW","PX","PY","PZ","QA","QB","QC","QD","QE","QF","QG","QH","QI","QJ","QK","QL","QM","QN","QO","QP","QQ","QR","QS","QT","QU","QV","QW","QX","QY","QZ","RA","RB","RC","RD","RE","RF","RG","RH","RI","RJ","RK","RL","RM","RN","RO","RP","RQ","RR","RS","RT","RU","RV","RW","RX","RY","RZ","SA","SB","SC","SD","SE","SF","SG","SH","SI","SJ","SK","SL","SM","SN","SO","SP","SQ","SR","SS","ST","SU","SV","SW","SX","SY","SZ","TA","TB","TC","TD","TE","TF","TG","TH","TI","TJ","TK","TL","TM","TN","TO","TP","TQ","TR","TS","TT","TU","TV","TW","TX","TY","TZ","UA","UB","UC","UD","UE","UF","UG","UH","UI","UJ","UK","UL","UM","UN","UO","UP","UQ","UR","US","UT","UU","UV","UW","UX","UY","UZ","VA","VB","VC","VD","VE","VF","VG","VH","VI","VJ","VK","VL","VM","VN","VO","VP","VQ","VR","VS","VT","VU","VV","VW","VX","VY","VZ","WA","WB","WC","WD","WE","WF","WG","WH","WI","WJ","WK","WL","WM","WN","WO","WP","WQ","WR","WS","WT","WU","WV","WW","WX","WY","WZ","XA","XB","XC","XD","XE","XF","XG","XH","XI","XJ","XK","XL","XM","XN","XO","XP","XQ","XR","XS","XT","XU","XV","XW","XX","XY","XZ","YA","YB","YC","YD","YE","YF","YG","YH","YI","YJ","YK","YL","YM","YN","YO","YP","YQ","YR","YS","YT","YU","YV","YW","YX","YY","YZ","ZA","ZB","ZC","ZD","ZE","ZF","ZG","ZH","ZI","ZJ","ZK","ZL","ZM","ZN","ZO","ZP","ZQ","ZR","ZS","ZT","ZU","ZV","ZW","ZX","ZY","ZZ","AAA","AAB","AAC","AAD","AAE","AAF","AAG","AAH","AAI","AAJ","AAK","AAL","AAM","AAN","AAO","AAP","AAQ","AAR","AAS","AAT","AAU","AAV","AAW","AAX","AAY","AAZ","ABA","ABB","ABC","ABD","ABE","ABF","ABG","ABH","ABI","ABJ","ABK","ABL","ABM","ABN","ABO","ABP","ABQ","ABR","ABS","ABT","ABU","ABV","ABW","ABX","ABY","ABZ"];   
     for (var i=0; i<=754;i++){
     if( columnNm[i] == columnName1){
     var colNum = i+1;
     col_output.value = colNum;
     break;
     }
    
     }
     

                        }










/*
function bottomFunction() {
  document.body.scrollBotttom = 0; // For Safari
  document.documentElement.scrollBottom = 0; // For Chrome, Firefox, IE and Opera
}


// Get the button:
let mybutton1 = document.getElementById("myBtn1");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction1()};

function scrollFunction1() {
  if (document.body.scrollTop < 80 || document.documentElement.scrollTop < 80) {
    myBtn1.style.display = "block";
  } else {
    myBtn1.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


function bottomFunction() {
  document.body.scrollBotttom = 0; // For Safari
  document.documentElement.scrollBottom = 0; // For Chrome, Firefox, IE and Opera
}

*/

