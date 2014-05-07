var MessageModel = Backbone.Model.extend({

    defaults: {
        messageId: undefined,
        sender: undefined,
        senderUserId: undefined,
        recipient: undefined,
        subject: undefined,
        itemId: undefined,
        folderId: 0,
        read: false,
        replied: false,
        flagged: false,
        attachment: false,
        receivedDate: "now",
        attachmentArray: []
    },
    initialize: function () {
        console.log('New MessageModel created...');
    }
});

var msg1 = new MessageModel({
    messageId: 1,
    sender: 'eBay',
    recipient: 'deedlydeal',
    subject: 'Important: Continue improving to avoid selling limitations',
    read: true,
    replied: true,
    attachment: true,
    attachmentArray: [
        {
            name: "download.jpg",
            url: "http://i.ebayimg.com/00/s/MTY0WDMwOA==/z/OKsAAOxyYANTaWzu/$_1.JPG?set_id=2"
        },
        {
            name: "brain_cogs.png",
            url: "http://i.ebayimg.com/00/s/NjI1WDgwMA==/z/MvUAAOxy2CZTaW0f/$_1.JPG?set_id=2"
        }
    ],
    receivedDate: 'march 3'
});
var msg2 = new MessageModel({
    messageId: 2,
    sender: 'eBay',
    recipient: 'liorgins',
    subject: 'A case is open: Please respond now (Ref # 5055362108)',
    read: false,
    replied: false,
    receivedDate: 'march 3'
});
var msg3 = new MessageModel({
    messageId: 3,
    sender: 'nicoleloreneray',
    recipient: 'deedlydeal',
    subject: 'nicoleloreneray has sent a question about item #111107899303, ending on Mar-24-14 07:50:49 PDT - Nike Socks Dri Fit No Show Mens Womens Size M L 8 - 11 New Drifit Dri Fit ',
    read: false,
    replied: true,
    receivedDate: 'march 4'
});
var msg4 = new MessageModel({
    messageId: 4,
    sender: 'lunarbaby001',
    recipient: 'deedlydeal',
    subject: 'Returns: lunarbaby001 sent a message about FAST SHIPPING ! Cover Top Universal 15.6" Laptop Skin Bag Silicon Jacket Sleeve #111248979896',
    read: true,
    replied: false,
    flagged: true,
    receivedDate: 'march 4'
});
var msg5 = new MessageModel({
    messageId: 5,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    attachment: true,
    receivedDate: 'march 4'
});
var msg6 = new MessageModel({
    messageId: 6,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg7 = new MessageModel({
    messageId: 7,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg8 = new MessageModel({
    messageId: 8,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg9 = new MessageModel({
    messageId: 9,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    attachment: true,
    receivedDate: 'march 4'
});
var msg10 = new MessageModel({
    messageId: 10,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg11 = new MessageModel({
    messageId: 11,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg12 = new MessageModel({
    messageId: 12,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg13 = new MessageModel({
    messageId: 13,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg14 = new MessageModel({
    messageId: 14,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg15 = new MessageModel({
    messageId: 15,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg16 = new MessageModel({
    messageId: 16,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg17 = new MessageModel({
    messageId: 17,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg18 = new MessageModel({
    messageId:18,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg19 = new MessageModel({
    messageId: 19,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});
var msg20 = new MessageModel({
    messageId: 20,
    sender: 'ursus_sapiens',
    recipient: 'zega',
    subject: 'ursus_sapiens has sent a question about :shipping for item #111219620504, ending on Feb-16-14 02:32:21 PST - Cover Top Universal 15.6" Laptop Skin Shock Protection Bag Silicon Jacket Sleeve',
    read: true,
    replied: false,
    receivedDate: 'march 4'
});

var MessagesCollection = Backbone.Collection.extend({

    model: MessageModel,

    initialize: function () {
        console.log('New msg collection initialized...');
        this.on("change", this.senderChange, this);
    },
    senderChange: function (model, val, options) {
        console.log("MessagesCollection: model changed : " + val);
        this.trigger("change");

    }
});

var messages = new MessagesCollection([msg1, msg2, msg3, msg4, msg5, msg6, msg7, msg8, msg9, msg10, msg11, msg12, msg13, msg14, msg15, msg16, msg17, msg18, msg19, msg20]);

var InboxMessages = Backbone.View.extend({
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

