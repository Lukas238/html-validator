var Entities = require('html-entities').AllHtmlEntities;

var customValidator = {};

//var fs = require('fs');


(function () {
    this.htmlEntities = function (str){
        var entities = new Entities();
        var characters = /^|`|~|¢|£|¤|¥|¦|§|¨|©|ª|«|¬|®|¯|°|±|²|³|µ|¶|·|¹|º|»|¼|½|¾|¿|À|Á|Â|Ã|Ä|Å|Æ|Ç|È|É|Ê|Ë|Ì|Í|Î|Ï|Ð|Ñ|Ò|Ó|Ô|Õ|Ö|×|Ø|Ù|Ú|Û|Ü|Ý|Þ|ß|à|á|â|ã|ä|å|æ|ç|è|é|ê|ë|ì|í|î|ï|ð|ñ|ò|ó|ô|õ|ö|÷|ø|ù|ú|û|ü|ý|þ|ÿ|Ā|ā|Ă|ă|Ą|ą|Ć|ć|Ĉ|ĉ|Ċ|ċ|Č|č|Ď|Đ|đ|Ē|ē|Ĕ|ĕ|Ė|ė|Ę|ę|Ě|ě|Ĝ|ĝ|Ğ|ğ|Ġ|ġ|Ģ|ģ|Ĥ|ĥ|Ħ|ħ|Ĩ|ĩ|Ī|ī|Ĭ|ĭ|Į|į|İ|ı|Ĳ|ĳ|Ĵ|ĵ|Ķ|ķ|ĸ|Ĺ|ĺ|Ļ|ļ|Ľ|ľ|Ŀ|ŀ|Ł|ł|Ń|ń|Ņ|ņ|Ň|ň|ŉ|Ŋ|ŋ|Ō|ō|Ŏ|ŏ|Ő|ő|Œ|œ|Ŕ|ŕ|Ŗ|ŗ|Ř|ř|Ś|ś|Ŝ|ŝ|Ş|ş|Š|š|Ţ|ţ|Ť|ť|Ŧ|ŧ|Ũ|ũ|Ū|ū|Ŭ|ŭ|Ů|ů|Ű|ű|Ų|ų|Ŵ|ŵ|Ŷ|ŷ|Ÿ|Ź|ź|Ż|ż|Ž|ž|ſ|ƀ|Ɓ|Ƃ|ƃ|Ƅ|ƅ|Ɔ|Ƈ|ƈ|Ɖ|Ɗ|Ƌ|ƌ|ƍ|Ǝ|Ə|Ɛ|Ƒ|ƒ|™/g;
        var res = str.replace(characters, function(entitie){
            return entities.encode(entitie);
        });

        /*var Stream = require('stream');
        var stream = new Stream();

        stream.pipe = function(dest) {
            dest.write(res);
            return dest;
        };
        var writeFile = fs.createWriteStream('output.txt');
        stream.pipe(writeFile);
        return res;*/

    };

    this.validate = function(fileData, callback){
        var data = fileData.toString();
        var html;
        html = this.htmlEntities(data);

    };
}).apply(customValidator);

module.exports = customValidator;
