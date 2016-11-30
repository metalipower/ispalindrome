var express = require('express');
var router = express.Router();

router.get('/palindrome/:word', function(req, res, next) {
    var word = req.params.word.toUpperCase();
    var wordFormatted = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,'');
    var reverseWord = wordFormatted.split('').reverse().join('');

    if(reverseWord === wordFormatted){
        res.status(200)
            .send(
                {
                    isPalindrome : true,
                    palindrome : word
                });
        return;
    }
    res.status(400)
        .send(
        {
            isPalindrome : false,
            palindrome : word
        });
});

module.exports = router;
