app.controller('ShawAndPartnersController', function(Services){
    var ctrl = this;
    ctrl.send = function(word) {
        Services.isPalindrome(word).then(function (response) {
            console.warn(response.status);
            ctrl.isPalindrome = true;
            ctrl.palindrome = response.data.palindrome;
        }, function callbackError(response){
            console.warn(response.status);
            ctrl.isPalindrome = false;
            ctrl.palindrome = response.data.palindrome;
        });
    };
});
