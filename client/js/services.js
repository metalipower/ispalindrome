app.factory("Services", function($http){
    var _isPalindrome = function(word){
        return $http({
            method: 'GET',
            url: '/palindrome/'+word
        });
    };
    return {
        isPalindrome : _isPalindrome
    }
});
