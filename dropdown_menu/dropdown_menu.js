$(function () {
     var MENU = [
        {
            'title': 'Item 1',
            'submenu': null
        },
        {
            'title': 'Item 2',
            'submenu': null
        },
        {
            'title': 'Item 3',
            'submenu': [
                {
                    'title': 'Sub 1',
                    'submenu': null
                },
                {
                    'title': 'Sub 2',
                    'submenu': null
                },
                {
                    'title': 'Sub 3',
                    'submenu': [
                        {
                            'title': 'SubSub 1',
                            'submenu': null
                        },
                        {
                            'title': 'SubSub 2',
                            'submenu': null
                        },
                        {
                            'title': 'SubSub 3',
                            'submenu': null
                        }
                    ]
                }
            ]
        }
    ];
    var getMenuItem = function () {
        var ul = document.createElement('ul');
        ul.setAttribute('id', 'myMenu');
        $('#menu-item').append(ul);

        $.each(MENU, function (key, value) { //iterate through each object and return and append title
            var title = value.title;
            $('#myMenu').append('<li>' + title + '</li>');

        });
        $('#myMenu li').click(function(e){ //append title to alert box
            if($('#myMenu li:last-child')) {
                var subLast = $(this).text();
                var cut = subLast.substring(0, 6);
                alert(cut + ' clicked!');
                console.log(subLast);

            } else {
                var xClick = $(this).text();
                alert(xClick + ' clicked!');
            }
            e.stopPropagation();
        });

        $('#myMenu li:last-child').append('<ul id="subMenu">'); //add ul in last li
        var subMenu = MENU[2].submenu;
        $.each(subMenu, function (key, value) { //iterate through each object and return and append title to newly created subMenu
            var title = value.title;
            $('#subMenu').append('<li>' + title + '</li>');
            $('#subMenu').append('</ul>');

        });
        $('#subMenu li').click(function(e){
            if($('#subMenu li:last-child')) {
                var subLast = $(this).text();
                var cut = subLast.substring(0, 5);
                alert(cut + ' clicked!');

            } else{
                var xClickSub = $(this).text();
                alert(xClickSub + ' clicked!');
                console.log(xClickSub);
            }
            e.stopPropagation();
        });

        $('#subMenu li:last-child').append('<ul id="nestedSubMenu">'); //same concept as above
        var nestedSubMenu = MENU[2].submenu[2].submenu;
        $.each(nestedSubMenu, function (key, value) {
            var title = value.title;
            $('#nestedSubMenu').append('<li>' + title + '</li>');
            $('#nestedSubMenu').append('</ul>');

        });
        $('#nestedSubMenu li').click(function(e){
            var xClickSubNested = $(this).text();
            alert(xClickSubNested + ' clicked!');
            e.stopPropagation();
        });
        console.log(nestedSubMenu);

    };

    getMenuItem(MENU);


});