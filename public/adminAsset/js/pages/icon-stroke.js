$(function() {
	var iconlist = ['album', 'arc', 'back-2', 'bandaid', 'car', 'diamond', 'door-lock', 'eyedropper', 'female', 'gym', 'hammer', 'headphones', 'helm', 'hourglass', 'leaf', 'magic-wand', 'male', 'map-2', 'next-2', 'paint-bucket',
            'pendrive', 'photo', 'piggy', 'plugin', 'refresh-2', 'rocket', 'settings', 'shield', 'smile', 'usb', 'vector', 'wine', 'cloud-upload', 'cash', 'close', 'bluetooth', 'cloud-download', 'way', 'close-circle', 'id',
            'angle-up', 'wristwatch', 'angle-up-circle', 'world', 'angle-right', 'volume', 'angle-right-circle', 'users', 'angle-left', 'user-female', 'angle-left-circle', 'up-arrow', 'angle-down', 'switch', 'angle-down-circle',
            'scissors', 'wallet', 'safe', 'volume2', 'volume1', 'voicemail', 'video', 'user', 'upload', 'unlock', 'umbrella', 'trash', 'tools', 'timer', 'ticket', 'target', 'sun', 'study', 'stopwatch', 'star', 'speaker', 'signal',
            'shuffle', 'shopbag', 'share', 'server', 'search', 'film', 'science', 'disk', 'ribbon', 'repeat', 'refresh', 'add-user', 'refresh-cloud', 'paperclip', 'radio', 'note2', 'print', 'network', 'prev', 'mute', 'power',
            'medal', 'portfolio', 'like2', 'plus', 'left-arrow', 'play', 'key', 'plane', 'joy', 'photo-gallery', 'pin', 'phone', 'plug', 'pen', 'right-arrow', 'paper-plane', 'delete-user', 'paint', 'bottom-arrow', 'notebook',
            'note', 'next', 'news-paper', 'musiclist', 'music', 'mouse', 'more', 'moon', 'monitor', 'micro', 'menu', 'map', 'map-marker', 'mail', 'mail-open', 'mail-open-file', 'magnet', 'loop', 'look', 'lock', 'lintern', 'link',
            'like', 'light', 'less', 'keypad', 'junk', 'info', 'home', 'help2', 'help1', 'graph3', 'graph2', 'graph1', 'graph', 'global', 'gleam', 'glasses', 'gift', 'folder', 'flag', 'filter', 'file', 'expand1', 'exapnd2',
            'edit', 'drop', 'drawer', 'download', 'display2', 'display1', 'diskette', 'date', 'cup', 'culture', 'crop', 'credit', 'copy-file', 'config', 'compass', 'comment', 'coffee', 'cloud', 'clock', 'check', 'chat', 'cart',
            'camera', 'call', 'calculator', 'browser', 'box2', 'box1', 'bookmarks', 'bicycle', 'bell', 'battery', 'ball', 'back', 'attention', 'anchor', 'albums', 'alarm', 'airplay'
        ];

        for (var i = 0, l = iconlist.length; i < l; i++) {
            $('#icons-container').append(
                '<div class="i-block card" data-clipboard-text="pe-7s-' + iconlist[i] + '" data-filter="' + iconlist[i] + '"  data-toggle="tooltip" title="pe-7s-' + iconlist[i] + '">' +
                '<i class="pe-7s-' + iconlist[i] + '"></i>' +
                '</div>');
        }
        $(window).on('load', function() {
            var iclp = new Clipboard('.i-block');
            $('[data-toggle="tooltip"]').tooltip();
            iclp.on('success', function(e) {
                $(e.trigger).append("<span class='icon-badge badge badge-success'>copied</span>");
                setTimeout(function() {
                    $('.i-block').children('.icon-badge').remove();
                }, 3000);
            });

            iclp.on('error', function(e) {
                $(e.trigger).append("<span class='icon-badge badge badge-danger'>Error</span>");
                setTimeout(function() {
                    $('.i-block').children('.icon-badge').remove();
                }, 3000);
            });

            $("#icons-search").on("keyup", function() {
                var g = $(this).val().toLowerCase();
                $(".icons-container .i-block").each(function() {
                    var t = $(this).attr('data-filter');
                    if (t) {
                        var s = t.toLowerCase();
                    }
                    if (s) {
                        var n = s.indexOf(g);
                        if (n !== -1) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    }
                });
            });
        });
});
