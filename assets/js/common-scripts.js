$(function() {
    console.log( "ready!" );
    initResponsiveView();
});


var CounterModel = Backbone.Model.extend({

    defaults: {
        messages: 0,
        tasks: 0,
        notifications: 0
    },

    initialize: function () {
        console.log('New CounterModel created...');
    },
    save: function (attr) {
        var keys = Object.keys(attr);

        if (_.intersection(keys, Object.keys(_.clone(this.attributes))).length === keys.length) {
            var thisAttr = this.attributes;
            _.extend(thisAttr, attr);
            this.set(thisAttr);
            console.log(this.toJSON());
        } else {
            console.log("CounterModel: some attr not exist");
        }
    },
    getMessagesCount: function (counterName) {
        console.log('CounterModel: getMessagesCount(' + counterName + ')');
        if (this.get(counterName) == 0) {
            return "";
        } else if (this.get(counterName) > 0 && this.get(counterName) < 1000) {
            return this.get(counterName);
        } else {
            return "+999";
        }

    }
});

var counter = new CounterModel();

var Dashboard = Backbone.View.extend({
    el: '#container',
    initialize: function () {
        console.log("Dashboard:init");
        this.render();
    },
    render: function () {
        console.log("Dashboard:render");
        require_template('container');
        var template = _.template($('#template_container').html(), {});
        this.$el.html(template);
        //init nicescroll
        $("html").niceScroll({styler: "fb", cursorcolor: "#4ECDC4", cursorwidth: '6', cursorborderradius: '10px', background: '#404040', spacebarenabled: false, cursorborder: '', zindex: '1000'});
        unrequire_template('container');
    }
});

var Sidebar = Backbone.View.extend({
    el: '.sidebar-menu',
    initialize: function () {
        console.log("Sidebar:initialize");
        this.listenTo(counter, 'change', this.render);
        this.render();
        initSidebar();
    },
    render: function () {
        console.log("Sidebar:render");
        require_template('sidebar_menu');
        var template = _.template($('#template_sidebar_menu').html(), {counter: counter});
        this.$el.html(template);
        unrequire_template('sidebar_menu');
    }
});

var Inbox = Backbone.View.extend({
    el: '#main-content',
    initialize: function () {
        console.log("Inbox:initialize");
        this.render();
    },
    render: function () {
        console.log("Inbox:render");
        require_template('inbox');
        var template = _.template($('#template_inbox').html(), {});
        this.$el.html(template);
        unrequire_template('inbox');
    }
});

var Calendar = Backbone.View.extend({
    el: '#main-content',
    initialize: function () {
        console.log("Calendar:initialize");
        this.render();
        initCalendar();
    },
    render: function () {
        console.log("Calendar:render");
        require_template('calendar');
        var template = _.template($('#template_calendar').html(), {});
        this.$el.html(template);
        unrequire_template('calendar');
    }
});

var Tasks = Backbone.View.extend({
    el: '#main-content',
    initialize: function () {
        console.log("Tasks:initialize");
        this.render();
    },
    render: function () {
        console.log("Tasks:render");
        require_template('tasks');
        var template = _.template($('#template_tasks').html(), {});
        this.$el.html(template);
        unrequire_template('tasks');
    }
});

var Router = Backbone.Router.extend({
    routes: {
        '': 'dashboard',
        'inbox': 'inbox',
        'tasks': 'tasks',
        'calendar': 'calendar'
    }
});

var router = new Router();

router.on('route:dashboard', function () {
    console.log("route:dashboard triggered");
    new Dashboard();
    new Sidebar();
});

router.on('route:inbox', function () {
    console.log("route:inbox triggered");
    new Inbox();
});

router.on('route:tasks', function () {
    console.log("route:tasks triggered");
    new Tasks();
});

router.on('route:calendar', function () {
    console.log("route:calendar triggered");
    new Calendar();
});

Backbone.history.start();


function initSidebar() {
    $('#nav-accordion').dcAccordion({
        eventType: 'click',
        autoClose: true,
        saveState: true,
        disableLink: true,
        speed: 'slow',
        showCount: false,
        autoExpand: true,
        classExpand: 'dcjq-current-parent'
    });

    $('#sidebar .sub-menu > a').click(function () {
        var o = ($(this).offset());
        diff = 250 - o.top;
        if (diff > 0)
            $("#sidebar").scrollTo("-=" + Math.abs(diff), 500);
        else
            $("#sidebar").scrollTo("+=" + Math.abs(diff), 500);
    });

    initToggleSidebar();

    $("#sidebar").niceScroll({styler: "fb", cursorcolor: "#4ECDC4", cursorwidth: '3', cursorborderradius: '10px', background: '#404040', spacebarenabled: false, cursorborder: ''});
}

function initToggleSidebar() {
    console.log("initToggleSidebar: called");
    $('.fa-bars').click(function () {
        if ($('#sidebar > ul').is(":visible") === true) {
            $('#main-content').css({
                'margin-left': '0px'
            });
            $('#sidebar').css({
                'margin-left': '-210px'
            });
            $('#sidebar > ul').hide();
            $("#container").addClass("sidebar-closed");
        } else {
            $('#main-content').css({
                'margin-left': '210px'
            });
            $('#sidebar > ul').show();
            $('#sidebar').css({
                'margin-left': '0'
            });
            $("#container").removeClass("sidebar-closed");
        }
    });
}

function responsiveView() {
    var wSize = $(window).width();
    if (wSize <= 768) {
        $('#container').addClass('sidebar-close');
        $('#sidebar > ul').hide();
    }

    if (wSize > 768) {
        $('#container').removeClass('sidebar-close');
        $('#sidebar > ul').show();
    }

}

function initResponsiveView() {
    $(window).on('load', responsiveView);
    $(window).on('resize', responsiveView);
}



function require_template(templateName) {
    var template = $('#template_' + templateName);
    if (template.length === 0) {
        var tmpl_dir = './assets/templates';
        var tmpl_url = tmpl_dir + '/' + templateName + '.tmpl';
        var tmpl_string = '';

        $.ajax({
            url: tmpl_url,
            method: 'GET',
            async: false,
            contentType: 'text',
            success: function (data) {
                tmpl_string = data;
            }
        });

        $('head').append('<script id="template_' +
            templateName + '" type="text/template">' + tmpl_string + '<\/script>');
    }
}

function unrequire_template(templateName) {
    var templateSelector =  '#template_' + templateName;
    $(templateSelector).remove();
}
