$(document).ready(function() {

    var userListBody = $('.userList tbody');

    //@todo store and somehow update the current number of users

    var userNumber = 1;

    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        event.stopPropagation();

        if (this.checkValidity() === false) {

            $(this).addClass('was-validated');

            return false;
        }

        //@todo
        //1. get values
        var userCount = userListBody.find("tr").length;
        var userName = $(this).find("input#username").first().val();


        //2. create a new element

        $(userListBody).append("<tr><td>" + parseInt(++userCount) + "</td><td>"+ userName +"</td><td><button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"Löschen\"><i class=\"fa fa-trash\"></i></button></td></tr>");


        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here

        return false;
    });

    //@todo
    //1. remove current user from dom
    //2. update number of current users

    //your code follows here

    $(userListBody).on('click', '.deleteTrigger', function() {
        $(this).closest("tr").remove();
        updateRowCount();
    });

    function updateRowCount(){
        // recalculate user count and prints each index into the rows
        userListBody.find('tr').each(function (i) {
            $(this).find('td:first-child').text(++i);
        })
    };
        //your code follows here
    //maybe some code follows here

});