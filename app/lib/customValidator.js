'use strict';
var _ = require('lodash');
var customValidator = {};

function validateCustom (fileData, callback){
    var fileHtml = fileData.toString();
    var characters = "^|`|~|¢|£|¤|¥|¦|§|¨|©|ª|«|¬|®|¯|°|±|²|³|µ|¶|·|¹|º|»|¼|½|¾|¿|À|Á|Â|Ã|Ä|Å|Æ|Ç|È|É|Ê|Ë|Ì|Í|Î|Ï|Ð|Ñ|Ò|Ó|Ô|Õ|Ö|×|Ø|Ù|Ú|Û|Ü|Ý|Þ|ß|à|á|â|ã|ä|å|æ|ç|è|é|ê|ë|ì|í|î|ï|ð|ñ|ò|ó|ô|õ|ö|÷|ø|ù|ú|û|ü|ý|þ|ÿ|Ā|ā|Ă|ă|Ą|ą|Ć|ć|Ĉ|ĉ|Ċ|ċ|Č|č|Ď|Đ|đ|Ē|ē|Ĕ|ĕ|Ė|ė|Ę|ę|Ě|ě|Ĝ|ĝ|Ğ|ğ|Ġ|ġ|Ģ|ģ|Ĥ|ĥ|Ħ|ħ|Ĩ|ĩ|Ī|ī|Ĭ|ĭ|Į|į|İ|ı|Ĳ|ĳ|Ĵ|ĵ|Ķ|ķ|ĸ|Ĺ|ĺ|Ļ|ļ|Ľ|ľ|Ŀ|ŀ|Ł|ł|Ń|ń|Ņ|ņ|Ň|ň|ŉ|Ŋ|ŋ|Ō|ō|Ŏ|ŏ|Ő|ő|Œ|œ|Ŕ|ŕ|Ŗ|ŗ|Ř|ř|Ś|ś|Ŝ|ŝ|Ş|ş|Š|š|Ţ|ţ|Ť|ť|Ŧ|ŧ|Ũ|ũ|Ū|ū|Ŭ|ŭ|Ů|ů|Ű|ű|Ų|ų|Ŵ|ŵ|Ŷ|ŷ|Ÿ|Ź|ź|Ż|ż|Ž|ž|ſ|ƀ|Ɓ|Ƃ|ƃ|Ƅ|ƅ|Ɔ|Ƈ|ƈ|Ɖ|Ɗ|Ƌ|ƌ|ƍ|Ǝ|Ə|Ɛ|Ƒ|ƒ|™";
    var tracking = "&lt;DI_TRACKING_CODE\\/&gt|&lt;DI_TRACKING_CODE\\/>|<DI_TRACKING_CODE\\/&gt;|&lt;DI_MEMBER_ATTR/&gt;";


    var validateExp = [
        {
            'expression' : characters,
            'str' : fileHtml,
            'operation' : 'match',
            'value' : false,
            'result' : 'undefined',
            'msg' : ''
        },
        {
            'expression' : tracking,
            'str' : fileHtml,
            'operation' : 'match',
            'value' : false,
            'result' : 'undefined',
            'msg' : ''
        }
    ];
    var errorMsg = [];

    validateExp.forEach(function (currValue, currIndex){
        //console.log('index', currIndex)
        var regExp;
        switch (currValue.operation){
            case 'match':
                regExp = new RegExp(currValue.expression,'gi');
                console.log('aaaaaaaa', regExp)
                currValue.result = currValue.str.match(regExp);
                break;
        }
        if (typeof currValue.result !== 'undefined'){
            //console.log(currValue.result instanceof Array, typeof currValue.result)
            if (currValue.result instanceof Array && currValue.result.length - 1 > 0){
                //console.log('array', currValue.result, currValue.result.length)
                var arrRes = new Array();

                var arrUnique =  _.uniq(currValue.result);
                var message = '';
                arrUnique.forEach (function (val, index){
                    var acum = 0;
                    currValue.result.forEach( function (valor, indice){
                        if(val == valor)
                            acum++;
                    });
                    message = 'Hay '+ acum +' '+ val + ' sin codificar \n';
                    errorMsg.push(message);

                });

                currValue.msg = message;
                console.log('res', errorMsg);
            }
        }
    });

    callback (null, errorMsg);


};


customValidator.validate = validateCustom;
module.exports = customValidator;

/*var Entities = require('html-entities').AllHtmlEntities;
 var jsdom = require("jsdom");
 var customValidator = {};

 //var fs = require('fs');
 //var tagHtml =  /<HTML>|<A>|<ABBR>|<ACRONYM>|<ADDRESS>|<APPLET>|<AREA>|<ARTICLE>|<ASIDE>|<AUDIO>|<B>|<BASE>|<BASEFONT>|<BDI>|<BDO>|<BIG>|<BLOCKQUOTE>|<BODY>|<BR>|<BUTTON>|<CANVAS>|<CAPTION>|<CENTER>|<CITE>|<CODE>|<COL>|<COLGROUP>|<DATALIST>|<DD>|<DEL>|<DETAILS>|<DFN>|<DIALOG>|<DIR>|<DIV>|<DL>|<DT>|<EM>|<EMBED>|<FIELDSET>|<FIGCAPTION>|<FIGURE>|<FONT>|<FOOTER>|<FORM>|<FRAME>|<FRAMESET>|<H1>|<H2>|<H3>|<H4>|<H5>|<H6>|<HEAD>|<HEADER>|<HR>|<HTML>|<I>|<IFRAME>|<IMG>|<INPUT>|<INS>|<KBD>|<KEYGEN>|<LABEL>|<LEGEND>|<LI>|<LINK>|<MAIN>|<MAP>|<MARK>|<MENU>|<MENUITEM>|<META>|<METER>|<NAV>|<NOFRAMES>|<NOSCRIPT>|<OBJECT>|<OL>|<OPTGROUP>|<OPTION>|<OUTPUT>|<P>|<PARAM>|<PRE>|<PROGRESS>|<Q>|<RP>|<RT>|<RUBY>|<S>|<SAMP>|<SCRIPT>|<SECTION>|<SELECT>|<SMALL>|<SOURCE>|<SPAN>|<STRIKE>|<STRONG>|<STYLE>|<SUB>|<SUMMARY>|<SUP>|<TABLE>|<TBODY>|<TD>|<TEXTAREA>|<TFOOT>|<TH>|<THEAD>|<TIME>|<TITLE>|<TR>|<TRACK>|<TT>|<U>|<UL>|<VAR>|<VIDEO>|<WBR>/g;
 var tagHtml =  /<HTML|<A|<ABBR|<ACRONYM|<ADDRESS|<APPLET|<AREA|<ARTICLE|<ASIDE|<AUDIO|<B|<BASE|<BASEFONT|<BDI|<BDO|<BIG|<BLOCKQUOTE|<BODY|<BUTTON|<CANVAS|<CAPTION|<CENTER|<CITE|<CODE|<COL|<COLGROUP|<DATALIST|<DD|<DEL|<DETAILS|<DFN|<DIALOG|<DIR|<DIV|<DL|<DT|<EM|<EMBED|<FIELDSET|<FIGCAPTION|<FIGURE|<FONT|<FOOTER|<FORM|<FRAME|<FRAMESET|<H1|<H2|<H3|<H4|<H5|<H6|<HEAD|<HEADER|<HR|<HTML|<I|<IFRAME|<IMG|<INPUT|<INS|<KBD|<KEYGEN|<LABEL|<LEGEND|<LI|<LINK|<MAIN|<MAP|<MARK|<MENU|<MENUITEM|<META|<METER|<NAV|<NOFRAMES|<NOSCRIPT|<OBJECT|<OL|<OPTGROUP|<OPTION|<OUTPUT|<P|<PARAM|<PRE|<PROGRESS|<Q|<RP|<RT|<RUBY|<S|<SAMP|<SCRIPT|<SECTION|<SELECT|<SMALL|<SOURCE|<SPAN|<STRIKE|<STRONG|<STYLE|<SUB|<SUMMARY|<SUP|<TABLE|<TBODY|<TD|<TEXTAREA|<TFOOT|<TH|<THEAD|<TIME|<TITLE|<TR|<TRACK|<TT|<U|<UL|<VAR|<VIDEO|<WBR|HTML>|A>|ABBR>|ACRONYM>|ADDRESS>|APPLET>|AREA>|ARTICLE>|ASIDE>|AUDIO>|B>|BASE>|BASEFONT>|BDI>|BDO>|BIG>|BLOCKQUOTE>|BODY>|BUTTON>|CANVAS>|CAPTION>|CENTER>|CITE>|CODE>|COL>|COLGROUP>|DATALIST>|DD>|DEL>|DETAILS>|DFN>|DIALOG>|DIR>|DIV>|DL>|DT>|EM>|EMBED>|FIELDSET>|FIGCAPTION>|FIGURE>|FONT>|FOOTER>|FORM>|FRAME>|FRAMESET>|H1>|H2>|H3>|H4>|H5>|H6>|HEAD>|HEADER>|HR>|HTML>|I>|IFRAME>|IMG>|INPUT>|INS>|KBD>|KEYGEN>|LABEL>|LEGEND>|LI>|LINK>|MAIN>|MAP>|MARK>|MENU>|MENUITEM>|META>|METER>|NAV>|NOFRAMES>|NOSCRIPT>|OBJECT>|OL>|OPTGROUP>|OPTION>|OUTPUT>|P>|PARAM>|PRE>|PROGRESS>|Q>|RP>|RT>|RUBY>|S>|SAMP>|SCRIPT>|SECTION>|SELECT>|SMALL>|SOURCE>|SPAN>|STRIKE>|STRONG>|STYLE>|SUB>|SUMMARY>|SUP>|TABLE>|TBODY>|TD>|TEXTAREA>|TFOOT>|TH>|THEAD>|TIME>|TITLE>|TR>|TRACK>|TT>|U>|UL>|VAR>|VIDEO>|WBR>/g;





 (function () {
 this.htmlEntities = function (str){
 var entities = new Entities();
 var characters = /^|`|~|¢|£|¤|¥|¦|§|¨|©|ª|«|¬|®|¯|°|±|²|³|µ|¶|·|¹|º|»|¼|½|¾|¿|À|Á|Â|Ã|Ä|Å|Æ|Ç|È|É|Ê|Ë|Ì|Í|Î|Ï|Ð|Ñ|Ò|Ó|Ô|Õ|Ö|×|Ø|Ù|Ú|Û|Ü|Ý|Þ|ß|à|á|â|ã|ä|å|æ|ç|è|é|ê|ë|ì|í|î|ï|ð|ñ|ò|ó|ô|õ|ö|÷|ø|ù|ú|û|ü|ý|þ|ÿ|Ā|ā|Ă|ă|Ą|ą|Ć|ć|Ĉ|ĉ|Ċ|ċ|Č|č|Ď|Đ|đ|Ē|ē|Ĕ|ĕ|Ė|ė|Ę|ę|Ě|ě|Ĝ|ĝ|Ğ|ğ|Ġ|ġ|Ģ|ģ|Ĥ|ĥ|Ħ|ħ|Ĩ|ĩ|Ī|ī|Ĭ|ĭ|Į|į|İ|ı|Ĳ|ĳ|Ĵ|ĵ|Ķ|ķ|ĸ|Ĺ|ĺ|Ļ|ļ|Ľ|ľ|Ŀ|ŀ|Ł|ł|Ń|ń|Ņ|ņ|Ň|ň|ŉ|Ŋ|ŋ|Ō|ō|Ŏ|ŏ|Ő|ő|Œ|œ|Ŕ|ŕ|Ŗ|ŗ|Ř|ř|Ś|ś|Ŝ|ŝ|Ş|ş|Š|š|Ţ|ţ|Ť|ť|Ŧ|ŧ|Ũ|ũ|Ū|ū|Ŭ|ŭ|Ů|ů|Ű|ű|Ų|ų|Ŵ|ŵ|Ŷ|ŷ|Ÿ|Ź|ź|Ż|ż|Ž|ž|ſ|ƀ|Ɓ|Ƃ|ƃ|Ƅ|ƅ|Ɔ|Ƈ|ƈ|Ɖ|Ɗ|Ƌ|ƌ|ƍ|Ǝ|Ə|Ɛ|Ƒ|ƒ|™/g;
 var res = str.replace(characters, function(entitie){
 return entities.encode(entitie);
 });



 };

 this.validateTdImg = function(str){

 jsdom.env(
 str,
 ["http://code.jquery.com/jquery.js"],
 function (errors, window) {
 var $ = window.jQuery;
 $('td').each(function(index, value) {
 var withTd = $(this).attr("width");
 var withImg = $(this).find("img").attr("width");
 var srcImg = $(this).find("img").attr("src");

 if (withTd !== undefined && withImg !== undefined && srcImg != "spacer.gif"){
 var alignTd = $(this).attr("align");
 var valignTd = $(this).attr("valign");
 if(withTd != withImg && (alignTd === undefined || valignTd === undefined)){
 console.log('aaaa',alignTd, valignTd, withImg, withTd)
 }



 }else{
 console.log('ok')
 }

 });

 }
 )

 };

 this.tagLowercase = function (str, tag){
 tag.forEach(function (index, value){

 })
 }



 this.validate = function(fileData, callback){
 var data = fileData.toString();
 var html, html1;
 html = this.htmlEntities(data);
 html1 = this.validateTdImg(data);
 data = data.replace(/<br>|< br >|<br >|< br>/gi,"</br>");
 data = data.replace(tagHtml, function (x){return x.toLowerCase();});
 console.log('ssss', data);





 };
 }).apply(customValidator);

 module.exports = customValidator;
 */
