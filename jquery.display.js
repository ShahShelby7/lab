jQuery.fn.display = function() {
    return this.each(function(){
        alert("element : " + $(this).prop("tagName"));
    });
};
