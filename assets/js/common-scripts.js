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

var SidebarModel = Backbone.Model.extend({

    defaults: {
       active: 'dashboard'
    },
    initialize: function () {
        console.log('New SidebarModel created...');
    },
    setActive: function(options) {
        console.log('SidebarModel: setActice created...');
    this.active = options.active;
    }

});



var counter = new CounterModel();
var sidebar = new SidebarModel();

var App = Backbone.View.extend({
    el: '#container',
    initialize: function () {
        console.log("App:initialize");
        this.render();
    },
    render: function () {
        console.log("App:render");
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
        this.listenTo(sidebar, 'change', this.render);
        this.render();
        initSidebar();
    },
    render: function () {
        console.log("Sidebar:render");
        require_template('sidebar_menu');
        var template = _.template($('#template_sidebar_menu').html(), {counter: counter, active : this.active});
        this.$el.html(template);
        this.setActive();
        unrequire_template('sidebar_menu');
    },
    setActive: function() {
        $('a[href="#' + this.active +'"]').addClass('active');
    }
});

var Dashboard = Backbone.View.extend({
    el: '#main-content',
    initialize: function () {
        console.log("Dashboard:initialize");
        this.render();
    },
    render: function () {
        console.log("Dashboard:render");
        require_template('dashboard');
        var template = _.template($('#template_dashboard').html(), {});
        this.$el.html(template);
        unrequire_template('dashboard');
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
       // require_template('inbox');
        var template = _.template($('#template_inbox').html(), {messages: messages.models});
        this.$el.html(template);
        //unrequire_template('inbox');
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
        '': 'index',
        'dashboard': 'dashboard',
        'inbox': 'inbox',
        'tasks': 'tasks',
        'calendar': 'calendar',
        'compose_new_mail': 'compose_new_mail'

    }
});

var router = new Router();
var sideBar;

router.on('route:index', function () {
    console.log("route:index triggered");
    new App();
    new Sidebar();
    $('#sidebar li a[href="#dashboard"]').addClass('active');
    new Dashboard();
});
router.on('route:dashboard', function () {
    console.log("route:dashboard triggered");
    renderAppIfNeeded("dashboard");
    $(document).attr('title', 'ebayHQ | Dashboard');
    new Dashboard();
});

router.on('route:inbox', function () {
    console.log("route:inbox triggered");
    renderAppIfNeeded("inbox");
    $(document).attr('title', 'ebayHQ | Inbox');
    new Inbox();
});

router.on('route:tasks', function () {
    console.log("route:tasks triggered");
    renderAppIfNeeded("tasks");
    new Tasks();
    $(document).attr('title', 'ebayHQ | Tasks');
});

router.on('route:calendar', function () {
    console.log("route:calendar triggered");
    renderAppIfNeeded("calendar");
    new Calendar();
    $(document).attr('title', 'ebayHQ | Calendar');
});

router.on('route:compose_new_mail', function () {
    console.log("route:compose_new_mail triggered");
});

Backbone.history.start();

function renderAppIfNeeded(active) {
    if (isEmpty($('#container'))) {
        new App();
        new Sidebar();
        $('#sidebar li a[href="#' + active + '"]').addClass('active');
    }
}

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
            $('#sidebar > ul').fadeOut('slow');
            $("#container").addClass("sidebar-closed");
        } else {
            $('#main-content').css({
                'margin-left': '210px'
            });
            $('#sidebar > ul').fadeIn('slow');
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

function isEmpty( el ){
    return !$.trim(el.html())
}
