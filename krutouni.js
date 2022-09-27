var copy_krutidev = document.getElementById("copy-krutidev");
copy_krutidev.onclick = function(){
  var krutidev_text = document.getElementById("krutidev-box").value;
  var inp = document.createElement("INPUT");
  document.body.appendChild(inp);
  inp.value = krutidev_text;
  inp.select();
  inp.setSelectionRange(0,99999);
  document.execCommand("COPY");
  inp.remove();
  copy_krutidev.innerHTML = "Copied";
  setTimeout(function(){copy_krutidev.innerHTML = "Copy";},5000);

}

var copy_unicode = document.getElementById("copy-unicode");
copy_unicode.onclick = function(){
  var krutidev_text = document.getElementById("unicode-box").value;
  var inp = document.createElement("INPUT");
  document.body.appendChild(inp);
  inp.value = krutidev_text;
  inp.select();
  inp.setSelectionRange(0,99999);
  document.execCommand("COPY");
  inp.remove();
  copy_unicode.innerHTML = "Copied";
  setTimeout(function(){copy_unicode.innerHTML = "Copy";},5000);

}



var check_box = document.getElementById("krutidev-switch");
check_box.onclick = function()
{
  if(check_box.checked)
  {
    document.getElementById("krutidev-box").style.fontFamily = "krutidev";
  }
  else{
    document.getElementById("krutidev-box").style.fontFamily = "inherit";
  }
}


var convert_to_unicode = document.getElementById("convert-to-unicode");
convert_to_unicode.onclick = function()
{

var array_one = new Array( 
"ñ","Q+Z","sas","aa",")Z","ZZ","‘","’","“","”",

"å",  "ƒ",  "„",   "…",   "†",   "‡",   "ˆ",   "‰",   "Š",   "‹", 

"¶+",   "d+", "[+k","[+", "x+",  "T+",  "t+", "M+", "<+", "Q+", ";+", "j+", "u+",
"Ùk", "Ù", "ä", "–", "—","é","™","=kk","f=k",  

"à",   "á",    "â",   "ã",   "ºz",  "º",   "í", "{k", "{", "=",  "«",   
"Nî",   "Vî",    "Bî",   "Mî",   "<î", "|", "K", "}",
"J",   "Vª",   "Mª",  "<ªª",  "Nª",   "Ø",  "Ý", "nzZ",  "æ", "ç", "Á", "xz", "#", ":",

"v‚","vks",  "vkS",  "vk",    "v",  "b±", "Ã",  "bZ",  "b",  "m",  "Å",  ",s",  ",",   "_",

"ô",  "d", "Dk", "D", "[k", "[", "x","Xk", "X", "Ä", "?k", "?",   "³", 
"pkS",  "p", "Pk", "P",  "N",  "t", "Tk", "T",  ">", "÷", "¥",

"ê",  "ë",   "V",  "B",   "ì",   "ï", "M+", "<+", "M",  "<", ".k", ".",    
"r",  "Rk", "R",   "Fk", "F",  ")", "n", "/k", "èk",  "/", "Ë", "è", "u", "Uk", "U",   

"i",  "Ik", "I",   "Q",    "¶",  "c", "Ck",  "C",  "Hk",  "H", "e", "Ek",  "E",
";",  "¸",   "j",    "y", "Yk",  "Y",  "G",  "o", "Ok", "O",
"'k", "'",   "\"k",  "\"",  "l", "Lk",  "L",   "g", 

"È", "z", 
"Ì", "Í", "Î",  "Ï",  "Ñ",  "Ò",  "Ó",  "Ô",   "Ö",  "Ø",  "Ù","Ük", "Ü",

"‚",    "ks",   "kS",   "k",  "h",    "q",   "w",   "`",    "s",    "S",
"a",    "¡",    "%",     "W",  "•", "·", "∙", "·", "~j",  "~", "\\","+"," ः",
"^", "*",  "Þ", "ß", "(", "¼", "½", "¿", "À", "¾", "A", "-", "&", "&", "Œ", "]","~ ","@")

var array_two = new Array(
"॰","QZ+","sa","a","र्द्ध","Z","\"","\"","'","'",

"०",  "१",  "२",  "३",     "४",   "५",  "६",   "७",   "८",   "९",   

"फ़्",  "क़",  "ख़", "ख़्",  "ग़", "ज़्", "ज़",  "ड़",  "ढ़",   "फ़",  "य़",  "ऱ",  "ऩ",   
"त्त", "त्त्", "क्त",  "दृ",  "कृ","न्न","न्न्","=k","f=",

"ह्न",  "ह्य",  "हृ",  "ह्म",  "ह्र",  "ह्",   "द्द",  "क्ष", "क्ष्", "त्र", "त्र्", 
"छ्य",  "ट्य",  "ठ्य",  "ड्य",  "ढ्य", "द्य", "ज्ञ", "द्व",
"श्र",  "ट्र",    "ड्र",    "ढ्र",    "छ्र",   "क्र",  "फ्र", "र्द्र",  "द्र",   "प्र", "प्र",  "ग्र", "रु",  "रू",

"ऑ",   "ओ",  "औ",  "आ",   "अ", "ईं", "ई",  "ई",   "इ",  "उ",   "ऊ",  "ऐ",  "ए", "ऋ",

"क्क", "क", "क", "क्", "ख", "ख्", "ग", "ग", "ग्", "घ", "घ", "घ्", "ङ",
"चै",  "च", "च", "च्", "छ", "ज", "ज", "ज्",  "झ",  "झ्", "ञ",

"ट्ट",   "ट्ठ",   "ट",   "ठ",   "ड्ड",   "ड्ढ",  "ड़", "ढ़", "ड",   "ढ", "ण", "ण्",   
"त", "त", "त्", "थ", "थ्",  "द्ध",  "द", "ध", "ध", "ध्", "ध्", "ध्", "न", "न", "न्",    

"प", "प", "प्",  "फ", "फ्",  "ब", "ब", "ब्",  "भ", "भ्",  "म",  "म", "म्",  
"य", "य्",  "र", "ल", "ल", "ल्",  "ळ",  "व", "व", "व्",   
"श", "श्",  "ष", "ष्", "स", "स", "स्", "ह", 

"ीं", "्र",    
"द्द", "ट्ट","ट्ठ","ड्ड","कृ","भ","्य","ड्ढ","झ्","क्र","त्त्","श","श्",

"ॉ",  "ो",   "ौ",   "ा",   "ी",   "ु",   "ू",   "ृ",   "े",   "ै",
"ं",   "ँ",   "ः",   "ॅ",  "ऽ", "ऽ", "ऽ", "ऽ", "्र",  "्", "?", "़",":",
"‘",   "’",   "“",   "”",  ";",  "(",    ")",   "{",    "}",   "=", "।", ".", "-",  "µ", "॰", ",","् ","/")
 


var array_one_length = array_one.length ;

var modified_substring = document.getElementById("krutidev-box").value  ;

    var text_size = document.getElementById("krutidev-box").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 6000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("krutidev-box").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("krutidev-box").value.substring ( sthiti1, sthiti2 )  ;

    Replace_Symbols( ) ;

    processed_text += modified_substring ;  

    document.getElementById("unicode-box").value = processed_text  ;
   }


// --------------------------------------------------


function Replace_Symbols( )

{

if ( modified_substring != "" )  // if stringto be converted is non-blank then no need of any processing.
{
for ( input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )

{

idx = 0  ; 

while (idx != -1 ) 
{

modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
idx = modified_substring.indexOf( array_one[input_symbol_idx] )

} 
} 

   modified_substring = modified_substring.replace( /±/g , "Zं" ) ;

modified_substring = modified_substring.replace( /Æ/g , "र्f" ) ;

var position_of_i = modified_substring.indexOf( "f" )

while ( position_of_i != -1 )  //while-02
{
var charecter_next_to_i = modified_substring.charAt( position_of_i + 1 )
var charecter_to_be_replaced = "f" + charecter_next_to_i
modified_substring = modified_substring.replace( charecter_to_be_replaced , charecter_next_to_i + "ि" ) 
position_of_i = modified_substring.search( /f/ , position_of_i + 1 ) 

} 

modified_substring = modified_substring.replace( /Ç/g , "fa" ) ; 
modified_substring = modified_substring.replace( /É/g , "र्fa" ) ; 

var position_of_i = modified_substring.indexOf( "fa" )

while ( position_of_i != -1 ) 
{
var charecter_next_to_ip2 = modified_substring.charAt( position_of_i + 2 )
var charecter_to_be_replaced = "fa" + charecter_next_to_ip2
modified_substring = modified_substring.replace( charecter_to_be_replaced , charecter_next_to_ip2 + "िं" ) 
position_of_i = modified_substring.search( /fa/ , position_of_i + 2 ) 

}

modified_substring = modified_substring.replace( /Ê/g , "ीZ" ) ;

var position_of_wrong_ee = modified_substring.indexOf( "ि्" ) 

while ( position_of_wrong_ee != -1 )  //while-03

{
var consonent_next_to_wrong_ee = modified_substring.charAt( position_of_wrong_ee + 2 )
var charecter_to_be_replaced = "ि्" + consonent_next_to_wrong_ee 
modified_substring = modified_substring.replace( charecter_to_be_replaced , "्" + consonent_next_to_wrong_ee + "ि" ) 
position_of_wrong_ee = modified_substring.search( /ि्/ , position_of_wrong_ee + 2 )  

} 
set_of_matras = "अ आ इ ई उ ऊ ए ऐ ओ औ ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ" 
var position_of_R = modified_substring.indexOf( "Z" )

while ( position_of_R > 0 ) 
{
probable_position_of_half_r = position_of_R - 1 ;
var charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r )



while ( set_of_matras.match( charecter_at_probable_position_of_half_r ) != null )  // while-05

{
probable_position_of_half_r = probable_position_of_half_r - 1 ;
charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;

} 


charecter_to_be_replaced = modified_substring.substr ( probable_position_of_half_r , ( position_of_R - probable_position_of_half_r ) ) ;
new_replacement_string = "र्" + charecter_to_be_replaced ; 
charecter_to_be_replaced = charecter_to_be_replaced + "Z" ;
modified_substring = modified_substring.replace( charecter_to_be_replaced , new_replacement_string ) ;
position_of_R = modified_substring.indexOf( "Z" ) ;

} 

}


}

}






var convert_to_krutidev = document.getElementById("convert-to-krutidev");
convert_to_krutidev.onclick = function()
{

var array_one = new Array( 
"‘",   "’",   "“",   "”",   "(",    ")",   "{",    "}",   "=", "।",  "?",  "-",  "µ", "॰", ",", ".", "् ", 
"०",  "१",  "२",  "३",     "४",   "५",  "६",   "७",   "८",   "९", "x", 

"फ़्",  "क़",  "ख़",  "ग़", "ज़्", "ज़",  "ड़",  "ढ़",   "फ़",  "य़",  "ऱ",  "ऩ",
"त्त्",   "त्त",     "क्त",  "दृ",  "कृ",

"ह्न",  "ह्य",  "हृ",  "ह्म",  "ह्र",  "ह्",   "द्द",  "क्ष्", "क्ष", "त्र्", "त्र","ज्ञ",
"छ्य",  "ट्य",  "ठ्य",  "ड्य",  "ढ्य", "द्य","द्व",
"श्र",  "ट्र",    "ड्र",    "ढ्र",    "छ्र",   "क्र",  "फ्र",  "द्र",   "प्र",   "ग्र", "रु",  "रू",
"्र",

"ओ",  "औ",  "आ",   "अ",   "ई",   "इ",  "उ",   "ऊ",  "ऐ",  "ए", "ऋ",

"क्",  "क",  "क्क",  "ख्",   "ख",    "ग्",   "ग",  "घ्",  "घ",    "ङ",
"चै",   "च्",   "च",   "छ",  "ज्", "ज",   "झ्",  "झ",   "ञ",

"ट्ट",   "ट्ठ",   "ट",   "ठ",   "ड्ड",   "ड्ढ",  "ड",   "ढ",  "ण्", "ण",  
"त्",  "त",  "थ्", "थ",  "द्ध",  "द", "ध्", "ध",  "न्",  "न",  

"प्",  "प",  "फ्", "फ",  "ब्",  "ब", "भ्",  "भ",  "म्",  "म",
"य्",  "य",  "र",  "ल्", "ल",  "ळ",  "व्",  "व", 
"श्", "श",  "ष्", "ष",  "स्",   "स",   "ह",     

"ऑ",   "ॉ",  "ो",   "ौ",   "ा",   "ी",   "ु",   "ू",   "ृ",   "े",   "ै",
"ं",   "ँ",   "ः",   "ॅ",    "ऽ",  "् ", "्" )

var array_two = new Array( 

"^", "*",  "Þ", "ß", "¼", "½", "¿", "À", "¾", "A", "\\", "&", "&", "Œ", "]","-","~ ", 
"å",  "ƒ",  "„",   "…",   "†",   "‡",   "ˆ",   "‰",   "Š",   "‹","Û",

"¶",   "d",    "[k",  "x",  "T",  "t",   "M+", "<+", "Q",  ";",    "j",   "u",
"Ù",   "Ùk",   "ä",    "–",   "—",       

"à",   "á",    "â",   "ã",   "ºz",  "º",   "í", "{", "{k",  "«", "=","K", 
"Nî",   "Vî",    "Bî",   "Mî",   "<î", "|","}",
"J",   "Vª",   "Mª",  "<ªª",  "Nª",   "Ø",  "Ý",   "æ", "ç", "xz", "#", ":",
"z",

"vks",  "vkS",  "vk",    "v",   "bZ",  "b",  "m",  "Å",  ",s",  ",",   "_",

"D",  "d",    "ô",     "[",     "[k",    "X",   "x",  "?",    "?k",   "³", 
"pkS",  "P",    "p",  "N",   "T",    "t",   "÷",  ">",   "¥",

"ê",      "ë",      "V",  "B",   "ì",       "ï",     "M",  "<",  ".", ".k",   
"R",  "r",   "F", "Fk",  ")",    "n", "/",  "/k",  "U", "u",   

"I",  "i",   "¶", "Q",   "C",  "c",  "H",  "Hk", "E",   "e",
"¸",   ";",    "j",  "Y",   "y",  "G",  "O",  "o",
"'", "'k",  "\"", "\"k", "L",   "l",   "g",      

"v‚",    "‚",    "ks",   "kS",   "k",     "h",    "q",   "w",   "`",    "s",    "S",
"a",    "¡",    "%",     "W",   "·",   "~ ", "~")   // "~j"


var array_one_length = array_one.length ;

var modified_substring = document.getElementById("unicode-box").value  ;

    var text_size = document.getElementById("unicode-box").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 6000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("unicode-box").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("unicode-box").value.substring ( sthiti1, sthiti2 )  ;

    Replace_Symbols( ) ;

    processed_text += modified_substring ;  

    document.getElementById("krutidev-box").value = processed_text  ;
   }

function Replace_Symbols( )
   {


    if (modified_substring != "" )  
       {

modified_substring = modified_substring.replace ( /क़/ , "क़" )  ; 
modified_substring = modified_substring.replace ( /ख़‌/g , "ख़" )  ;
modified_substring = modified_substring.replace ( /ग़/g , "ग़" )  ;
modified_substring = modified_substring.replace ( /ज़/g , "ज़" )  ;
modified_substring = modified_substring.replace ( /ड़/g , "ड़" )  ;
modified_substring = modified_substring.replace ( /ढ़/g , "ढ़" )  ;
modified_substring = modified_substring.replace ( /ऩ/g , "ऩ" )  ;
modified_substring = modified_substring.replace ( /फ़/g , "फ़" )  ;
modified_substring = modified_substring.replace ( /य़/g , "य़" )  ;
modified_substring = modified_substring.replace ( /ऱ/g , "ऱ" )  ;

        
        var position_of_f = modified_substring.indexOf( "ि" )  ;
         while ( position_of_f != -1 )  
           {
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "ि" ,  "f" + character_left_to_f )  ;

            position_of_f = position_of_f - 1  ;

            while (( modified_substring.charAt( position_of_f - 1 ) == "्" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "्"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "f", "f" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
               }
            position_of_f = modified_substring.search( /ि/ , position_of_f + 1 ) ;

           } 

       set_of_matras = "ािीुूृेैोौं:ँॅ" 

modified_substring += '  '    ;

       var position_of_half_R = modified_substring.indexOf( "र्" ) ;
        while ( position_of_half_R > 0  ) 
           {
            // "र्"  is two bytes long
            var probable_position_of_Z = position_of_half_R + 2   ;  

            var character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 1 )


            while ( set_of_matras.indexOf( character_right_to_probable_position_of_Z ) != -1 )  
               {
                probable_position_of_Z = probable_position_of_Z + 1 ;
                character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 1 ) ;
               }

            string_to_be_replaced = modified_substring.substr ( position_of_half_R + 2 , ( probable_position_of_Z - position_of_half_R - 1 ))  ;
            modified_substring = modified_substring.replace( "र्" + string_to_be_replaced  ,  string_to_be_replaced + "Z" ) ;
            position_of_half_R = modified_substring.indexOf( "र्" ) ;
           } // end of while-04


modified_substring = modified_substring.substr ( 0 , modified_substring.length - 2 )  ;




        for( input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++ )
           {
            idx = 0  ;

            while (idx != -1 )
               {
                modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
                idx = modified_substring.indexOf( array_one[input_symbol_idx] )
               }
           }

        }

    }

  }


  /*features code*/

  var reset_above = document.getElementById("reset-above");
reset_above.onclick = function(){
  document.getElementById("krutidev-box").value = "";
}

var reset_below = document.getElementById("reset-below");
reset_below.onclick = function(){
  document.getElementById("unicode-box").value = "";
}

var savef_above = document.getElementById("savef-above");
savef_above.onclick = function(){
  var krutidev_box = document.getElementById("krutidev-box").value;
  var file_type_above = document.getElementById("filetypeabove").value;
  var filename_above = document.getElementById("filename-above").value;
  var file = new Blob([krutidev_box],{type:file_type_above});
  var a = document.createElement("A");
  a.href = URL.createObjectURL(file);
  a.download = filename_above;
  a.click();
}


var savef_below = document.getElementById("savef-below");
savef_below.onclick = function(){
  var unicode_box = document.getElementById("unicode-box").value;
  var file_type_below = document.getElementById("filetypebelow").value;
  var filename_below = document.getElementById("filename-below").value;
  var file = new Blob([unicode_box],{type:file_type_below});
  var a = document.createElement("A");
  a.href = URL.createObjectURL(file);
  a.download = filename_below;
  a.click();

}

  var go_to_top = document.getElementById("go-to-top");
  go_to_top.onclick = function()
  {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  var whatsapp_share_above = document.getElementById("whatsapp-share-above");
  whatsapp_share_above.onclick = function()
  {
    var krutidev_value = document.getElementById("krutidev-box").value;
    whatsapp_share_above.href = "https://wa.me?text="+krutidev_value;
  }

  var gmail_share_above = document.getElementById("gmail-share-above");
  gmail_share_above.onclick = function()
  {
    var krutidev_value = document.getElementById("krutidev-box").value;
    gmail_share_above.href = "mailto:?subject=Krutidev Text - Jaifont.com&body="+krutidev_value;
  }

  var sms_share_above = document.getElementById("sms-share-above");
  sms_share_above.onclick = function()
  {
    var krutidev_value = document.getElementById("krutidev-box").value;
    sms_share_above.href = "sms:?body="+krutidev_value;
  }

  var twitter_share_above = document.getElementById("twitter-share-above");
  twitter_share_above.onclick = function()
  {
    var krutidev_value = document.getElementById("krutidev-box").value;
    twitter_share_above.href = "https://twitter.com/intent/tweet?text="+krutidev_value;
  }

  var telegram_share_above = document.getElementById("telegram-share-above");
  telegram_share_above.onclick = function()
  {
    var krutidev_value = document.getElementById("krutidev-box").value;
    telegram_share_above.href = "tg://msg?text="+krutidev_value;
  }


  //unicode text share buttons

  var whatsapp_share_below = document.getElementById("whatsapp-share-below");
  whatsapp_share_below.onclick = function()
  {
    var unicode_value = document.getElementById("unicode-box").value;
    whatsapp_share_below.href = "https://wa.me?text="+unicode_value;
  }

  var gmail_share_below = document.getElementById("gmail-share-below");
  gmail_share_below.onclick = function()
  {
    var unicode_value = document.getElementById("unicode-box").value;
    gmail_share_below.href = "mailto:?subject=unicode Text - Jaifont.com&body="+unicode_value;
  }

  var sms_share_below = document.getElementById("sms-share-below");
  whatsapp_share_below.onclick = function()
  {
    var unicode_value = document.getElementById("unicode-box").value;
    sms_share_below.href = "sms:?body="+unicode_value;
  }

  var twitter_share_below = document.getElementById("twitter-share-below");
  twitter_share_below.onclick = function()
  {
    var unicode_value = document.getElementById("unicode-box").value;
    twitter_share_below.href = "https://twitter.com/intent/tweet?text="+unicode_value;
  }

  var telegram_share_below = document.getElementById("telegram-share-below");
  telegram_share_below.onclick = function()
  {
    var unicode_value = document.getElementById("unicode-box").value;
    telegram_share_below.href = "tg://msg?text="+unicode_value;
  }

/* end features code */