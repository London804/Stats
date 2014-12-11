$(function(){
    $('#first').click(function(){
       $('#p2').fadeOut(500 ,function(){
           $('#p1').fadeIn(500);
           if($('#p1').css('display') === 'block'){
            $('#first').removeClass('highlight');
           }
           $('#second').addClass('highlight');

       });
    });
    $('#second').click(function(){
        $('#p1').fadeOut(500, function(){
            $('#p2').fadeIn(500);
            if($('#p2').css('display') === 'block'){
                $('#second').removeClass('highlight');
            }
            $('#first').addClass('highlight');
        });
    });


    var requestURL = 'assets/js/original-stats.json';
    $.ajax({
        type: 'GET',
        url: requestURL,
        dataType: 'json',
        success: Automatic,
        error: function( data ) {
            console.log( "ERROR:  " + data );
        }

    });

    //manual

     //function Manual ( data ) {
     //    $('#content1 .dynamicContent').append( "<div class='count'>" + data[0][0].count + "</div>"
     //     + '<div class="countTxt">' + data[0][0].countTxt + '</div>'
     //     + '<div class="participantsTxt">' + data[0][0].participantsTxt + '</div>'
     //     + '<div class="participantCount">' + data[0][0].participantCount + '</div>');
     //
     //    $('#content2 .dynamicContent').append("<div class='count'>" + data[0][1].count + "</div>"
     //        + '<div class="countTxt">' + data[0][1].countTxt + "</div>"
     //        + '<div class="participantsTxt">' + data[0][1].participantsTxt + "</div>"
     //        + '<div class="participantCount">' + data[0][1].participantCount);
     //
     //    $('#content3 .dynamicContent').append("<div class='count'>" + data[0][2].count + "</div>"
     //        + '<div class="countTxt">' + data[0][2].countTxt + '</div>'
     //        + '<div class="participantsTxt">' + data[0][2].participantsTxt
     //        + '<div class="participantCount">' + data[0][2].participantCount);
     //
     //    $('#content4 .dynamicContent').append("<div class='count'>" + data[1][0].count + "</div>"
     //        + '<div class="countTxt">' + data[1][0].countTxt + '</div>'
     //        + '<div class="participantsTxt">' + data[1][0].participantsTxt + '</div>'
     //        + '<div class="participantCount">' + data[1][0].participantCount + '</div>');
     //
     //    $('#content5 .dynamicContent').append("<div class='count'>" + data[1][1].count + "</div>"
     //        + '<div class="countTxt">' + data[1][1].countTxt + '</div>'
     //        + '<div class="participantsTxt">' + data[1][1].participantsTxt + '</div>'
     //        + '<div class="participantCount">' + data[1][1].participantCount + '</div>');
     //
     //    $('#content6 .dynamicContent').append("<div class='count'>" + data[1][2].count.substring(0, 4) + "<span>" + data[1][2].count.substring(5, 9) + "</span>" + "</div>"
     //        + '<div class="countTxt">' + data[1][2].countTxt + '</div>'
     //        + '<div class="participantsTxt">' + data[1][2].participantsTxt + '</div>'
     //        + '<div class="participantCount">' + data[1][2].participantCount + '</div>');
     //       console.log(data[1][2].count.substring(5, 9));
     //}

     //automatic
    function Automatic ( data ) {
        $.each(data[0], function(key, value){
            var count = value.count,
                countTxt = value.countTxt,
                participantsTxt = value.participantsTxt,
                participantCount = value.participantCount;

            $('.dynamicContent').append( "<div class='wrapper'>" + "<div class='count'>" + count + "</div>"  +
                '<div class="countTxt">' + countTxt + '</div>' +
                 '<div class="participantsTxt">' + participantsTxt + '</div>' +
                 '<div class="participantCount">' + participantCount + '</div>' + '</div>');
            console.log(participantsTxt);
        });

        $.each(data[1], function(key, value){
            var count = value.count,
                countTxt = value.countTxt,
                participantsTxt = value.participantsTxt,
                participantCount = value.participantCount;

            $('.dynamicContent2').append( "<div class='wrapper'>" + "<div class='count'>" + count + "</div>"  +
            '<div class="countTxt">' + countTxt + '</div>' +
            '<div class="participantsTxt">' + participantsTxt + '</div>' +
            '<div class="participantCount">' + participantCount + '</div>' + '</div>');
            console.log(participantsTxt);
        });

            //$.each(data[1], function(key, value){
            //    var count = value.count,
            //        countTxt = value.countTxt,
            //        participantsTxt = value.participantTxt,
            //        participantCount = value.participantCount;
            //
            //    $('.dynamicContent').append( "<div class='count'>" + count + "</div>" +
            //     '<div class="countTxt">' + countTxt + '</div>' +
            //     '<div class="participantsTxt">' + participantsTxt + '</div>' +
            //     '<div class="participantCount">' + participantCount + '</div>');
            //}));

        console.log(data[0]);
    }

//
});


 //    $(".dynamicContent").append(value.particpantsTxt);
//            $(".dynamicContent").append(value.participantCount);
//            $('.count').append(value.count[0][0]);
//                $('.countTxt').append(value.countTxt);
//                $('.participantsText').append(value.participantsTxt);
//                $('.participantCount').append(value.participantCount);
//        for(i =0; i < val.length; i++){
//                for (var propName in jsonObj) {
//                    if (jsonObj.hasOwnProperty(propName)) {
//                        return propName;    // or do something with it and break
//                    }
//                }
//                $(".dynamicContent").append(value.count[0][0]);

