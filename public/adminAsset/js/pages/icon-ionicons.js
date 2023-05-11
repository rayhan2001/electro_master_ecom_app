$(function() {
	 var iconlist = ['ios-add', 'md-add', 'ios-add-circle', 'md-add-circle', 'ios-add-circle-outline', 'md-add-circle-outline', 'ios-airplane', 'md-airplane', 'ios-alarm', 'md-alarm', 'ios-albums', 'md-albums', 'ios-alert',
            'md-alert', 'ios-american-football', 'md-american-football', 'ios-analytics', 'md-analytics', 'ios-aperture', 'md-aperture', 'ios-apps', 'md-apps', 'ios-appstore', 'md-appstore', 'ios-archive', 'md-archive',
            'ios-arrow-back', 'md-arrow-back', 'ios-arrow-down', 'md-arrow-down', 'ios-arrow-dropdown', 'md-arrow-dropdown', 'ios-arrow-dropdown-circle', 'md-arrow-dropdown-circle', 'ios-arrow-dropleft', 'md-arrow-dropleft',
            'ios-arrow-dropleft-circle', 'md-arrow-dropleft-circle', 'ios-arrow-dropright', 'md-arrow-dropright', 'ios-arrow-dropright-circle', 'md-arrow-dropright-circle', 'ios-arrow-dropup', 'md-arrow-dropup',
            'ios-arrow-dropup-circle', 'md-arrow-dropup-circle', 'ios-arrow-forward', 'md-arrow-forward', 'ios-arrow-round-back', 'md-arrow-round-back', 'ios-arrow-round-down', 'md-arrow-round-down', 'ios-arrow-round-forward',
            'md-arrow-round-forward', 'ios-arrow-round-up', 'md-arrow-round-up', 'ios-arrow-up', 'md-arrow-up', 'ios-at', 'md-at', 'ios-attach', 'md-attach', 'ios-backspace', 'md-backspace', 'ios-barcode', 'md-barcode',
            'ios-baseball', 'md-baseball', 'ios-basket', 'md-basket', 'ios-basketball', 'md-basketball', 'ios-battery-charging', 'md-battery-charging', 'ios-battery-dead', 'md-battery-dead', 'ios-battery-full', 'md-battery-full',
            'ios-beaker', 'md-beaker', 'ios-bed', 'md-bed', 'ios-beer', 'md-beer', 'ios-bicycle', 'md-bicycle', 'ios-bluetooth', 'md-bluetooth', 'ios-boat', 'md-boat', 'ios-body', 'md-body', 'ios-bonfire', 'md-bonfire',
            'ios-book', 'md-book', 'ios-bookmark', 'md-bookmark', 'ios-bookmarks', 'md-bookmarks', 'ios-bowtie', 'md-bowtie', 'ios-briefcase', 'md-briefcase', 'ios-browsers', 'md-browsers', 'ios-brush', 'md-brush', 'ios-bug',
            'md-bug', 'ios-build', 'md-build', 'ios-bulb', 'md-bulb', 'ios-bus', 'md-bus', 'ios-business', 'md-business', 'ios-cafe', 'md-cafe', 'ios-calculator', 'md-calculator', 'ios-calendar', 'md-calendar', 'ios-call',
            'md-call', 'ios-camera', 'md-camera', 'ios-car', 'md-car', 'ios-card', 'md-card', 'ios-cart', 'md-cart', 'ios-cash', 'md-cash', 'ios-cellular', 'md-cellular', 'ios-chatboxes', 'md-chatboxes', 'ios-chatbubbles',
            'md-chatbubbles', 'ios-checkbox', 'md-checkbox', 'ios-checkbox-outline', 'md-checkbox-outline', 'ios-checkmark', 'md-checkmark', 'ios-checkmark-circle', 'md-checkmark-circle', 'ios-checkmark-circle-outline',
            'md-checkmark-circle-outline', 'ios-clipboard', 'md-clipboard', 'ios-clock', 'md-clock', 'ios-close', 'md-close', 'ios-close-circle', 'md-close-circle', 'ios-close-circle-outline', 'md-close-circle-outline',
            'ios-cloud', 'md-cloud', 'ios-cloud-circle', 'md-cloud-circle', 'ios-cloud-done', 'md-cloud-done', 'ios-cloud-download', 'md-cloud-download', 'ios-cloud-outline', 'md-cloud-outline', 'ios-cloud-upload',
            'md-cloud-upload', 'ios-cloudy', 'md-cloudy', 'ios-cloudy-night', 'md-cloudy-night', 'ios-code', 'md-code', 'ios-code-download', 'md-code-download', 'ios-code-working', 'md-code-working', 'ios-cog', 'md-cog',
            'ios-color-fill', 'md-color-fill', 'ios-color-filter', 'md-color-filter', 'ios-color-palette', 'md-color-palette', 'ios-color-wand', 'md-color-wand', 'ios-compass', 'md-compass', 'ios-construct', 'md-construct',
            'ios-contact', 'md-contact', 'ios-contacts', 'md-contacts', 'ios-contract', 'md-contract', 'ios-contrast', 'md-contrast', 'ios-copy', 'md-copy', 'ios-create', 'md-create', 'ios-crop', 'md-crop', 'ios-cube', 'md-cube',
            'ios-cut', 'md-cut', 'ios-desktop', 'md-desktop', 'ios-disc', 'md-disc', 'ios-document', 'md-document', 'ios-done-all', 'md-done-all', 'ios-download', 'md-download', 'ios-easel', 'md-easel', 'ios-egg', 'md-egg',
            'ios-exit', 'md-exit', 'ios-expand', 'md-expand', 'ios-eye', 'md-eye', 'ios-eye-off', 'md-eye-off', 'ios-fastforward', 'md-fastforward', 'ios-female', 'md-female', 'ios-filing', 'md-filing', 'ios-film', 'md-film',
            'ios-finger-print', 'md-finger-print', 'ios-fitness', 'md-fitness', 'ios-flag', 'md-flag', 'ios-flame', 'md-flame', 'ios-flash', 'md-flash', 'ios-flash-off', 'md-flash-off', 'ios-flashlight', 'md-flashlight',
            'ios-flask', 'md-flask', 'ios-flower', 'md-flower', 'ios-folder', 'md-folder', 'ios-folder-open', 'md-folder-open', 'ios-football', 'md-football', 'ios-funnel', 'md-funnel', 'ios-gift', 'md-gift', 'ios-git-branch',
            'md-git-branch', 'ios-git-commit', 'md-git-commit', 'ios-git-compare', 'md-git-compare', 'ios-git-merge', 'md-git-merge', 'ios-git-network', 'md-git-network', 'ios-git-pull-request', 'md-git-pull-request',
            'ios-glasses', 'md-glasses', 'ios-globe', 'md-globe', 'ios-grid', 'md-grid', 'ios-hammer', 'md-hammer', 'ios-hand', 'md-hand', 'ios-happy', 'md-happy', 'ios-headset', 'md-headset', 'ios-heart', 'md-heart',
            'ios-heart-dislike', 'md-heart-dislike', 'ios-heart-empty', 'md-heart-empty', 'ios-heart-half', 'md-heart-half', 'ios-help', 'md-help', 'ios-help-buoy', 'md-help-buoy', 'ios-help-circle', 'md-help-circle',
            'ios-help-circle-outline', 'md-help-circle-outline', 'ios-home', 'md-home', 'ios-hourglass', 'md-hourglass', 'ios-ice-cream', 'md-ice-cream', 'ios-image', 'md-image', 'ios-images', 'md-images', 'ios-infinite',
            'md-infinite', 'ios-information', 'md-information', 'ios-information-circle', 'md-information-circle', 'ios-information-circle-outline', 'md-information-circle-outline', 'ios-jet', 'md-jet', 'ios-journal',
            'md-journal', 'ios-key', 'md-key', 'ios-keypad', 'md-keypad', 'ios-laptop', 'md-laptop', 'ios-leaf', 'md-leaf', 'ios-link', 'md-link', 'ios-list', 'md-list', 'ios-list-box', 'md-list-box', 'ios-locate', 'md-locate',
            'ios-lock', 'md-lock', 'ios-log-in', 'md-log-in', 'ios-log-out', 'md-log-out', 'ios-magnet', 'md-magnet', 'ios-mail', 'md-mail', 'ios-mail-open', 'md-mail-open', 'ios-mail-unread', 'md-mail-unread', 'ios-male',
            'md-male', 'ios-man', 'md-man', 'ios-map', 'md-map', 'ios-medal', 'md-medal', 'ios-medical', 'md-medical', 'ios-medkit', 'md-medkit', 'ios-megaphone', 'md-megaphone', 'ios-menu', 'md-menu', 'ios-mic', 'md-mic',
            'ios-mic-off', 'md-mic-off', 'ios-microphone', 'md-microphone', 'ios-moon', 'md-moon', 'ios-more', 'md-more', 'ios-move', 'md-move', 'ios-musical-note', 'md-musical-note', 'ios-musical-notes', 'md-musical-notes',
            'ios-navigate', 'md-navigate', 'ios-notifications', 'md-notifications', 'ios-notifications-off', 'md-notifications-off', 'ios-notifications-outline', 'md-notifications-outline', 'ios-nuclear', 'md-nuclear',
            'ios-nutrition', 'md-nutrition', 'ios-open', 'md-open', 'ios-options', 'md-options', 'ios-outlet', 'md-outlet', 'ios-paper', 'md-paper', 'ios-paper-plane', 'md-paper-plane', 'ios-partly-sunny', 'md-partly-sunny',
            'ios-pause', 'md-pause', 'ios-paw', 'md-paw', 'ios-people', 'md-people', 'ios-person', 'md-person', 'ios-person-add', 'md-person-add', 'ios-phone-landscape', 'md-phone-landscape', 'ios-phone-portrait',
            'md-phone-portrait', 'ios-photos', 'md-photos', 'ios-pie', 'md-pie', 'ios-pin', 'md-pin', 'ios-pint', 'md-pint', 'ios-pizza', 'md-pizza', 'ios-planet', 'md-planet', 'ios-play', 'md-play', 'ios-play-circle',
            'md-play-circle', 'ios-podium', 'md-podium', 'ios-power', 'md-power', 'ios-pricetag', 'md-pricetag', 'ios-pricetags', 'md-pricetags', 'ios-print', 'md-print', 'ios-pulse', 'md-pulse', 'ios-qr-scanner', 'md-qr-scanner',
            'ios-quote', 'md-quote', 'ios-radio', 'md-radio', 'ios-radio-button-off', 'md-radio-button-off', 'ios-radio-button-on', 'md-radio-button-on', 'ios-rainy', 'md-rainy', 'ios-recording', 'md-recording', 'ios-redo',
            'md-redo', 'ios-refresh', 'md-refresh', 'ios-refresh-circle', 'md-refresh-circle', 'ios-remove', 'md-remove', 'ios-remove-circle', 'md-remove-circle', 'ios-remove-circle-outline', 'md-remove-circle-outline',
            'ios-reorder', 'md-reorder', 'ios-repeat', 'md-repeat', 'ios-resize', 'md-resize', 'ios-restaurant', 'md-restaurant', 'ios-return-left', 'md-return-left', 'ios-return-right', 'md-return-right', 'ios-reverse-camera',
            'md-reverse-camera', 'ios-rewind', 'md-rewind', 'ios-ribbon', 'md-ribbon', 'ios-rocket', 'md-rocket', 'ios-rose', 'md-rose', 'ios-sad', 'md-sad', 'ios-save', 'md-save', 'ios-school', 'md-school', 'ios-search',
            'md-search', 'ios-send', 'md-send', 'ios-settings', 'md-settings', 'ios-share', 'md-share', 'ios-share-alt', 'md-share-alt', 'ios-shirt', 'md-shirt', 'ios-shuffle', 'md-shuffle', 'ios-skip-backward',
            'md-skip-backward', 'ios-skip-forward', 'md-skip-forward', 'ios-snow', 'md-snow', 'ios-speedometer', 'md-speedometer', 'ios-square', 'md-square', 'ios-square-outline', 'md-square-outline', 'ios-star', 'md-star',
            'ios-star-half', 'md-star-half', 'ios-star-outline', 'md-star-outline', 'ios-stats', 'md-stats', 'ios-stopwatch', 'md-stopwatch', 'ios-subway', 'md-subway', 'ios-sunny', 'md-sunny', 'ios-swap', 'md-swap', 'ios-switch',
            'md-switch', 'ios-sync', 'md-sync', 'ios-tablet-landscape', 'md-tablet-landscape', 'ios-tablet-portrait', 'md-tablet-portrait', 'ios-tennisball', 'md-tennisball', 'ios-text', 'md-text', 'ios-thermometer',
            'md-thermometer', 'ios-thumbs-down', 'md-thumbs-down', 'ios-thumbs-up', 'md-thumbs-up', 'ios-thunderstorm', 'md-thunderstorm', 'ios-time', 'md-time', 'ios-timer', 'md-timer', 'ios-today', 'md-today', 'ios-train',
            'md-train', 'ios-transgender', 'md-transgender', 'ios-trash', 'md-trash', 'ios-trending-down', 'md-trending-down', 'ios-trending-up', 'md-trending-up', 'ios-trophy', 'md-trophy', 'ios-tv', 'md-tv', 'ios-umbrella',
            'md-umbrella', 'ios-undo', 'md-undo', 'ios-unlock', 'md-unlock', 'ios-videocam', 'md-videocam', 'ios-volume-high', 'md-volume-high', 'ios-volume-low', 'md-volume-low', 'ios-volume-mute', 'md-volume-mute',
            'ios-volume-off', 'md-volume-off', 'ios-walk', 'md-walk', 'ios-wallet', 'md-wallet', 'ios-warning', 'md-warning', 'ios-watch', 'md-watch', 'ios-water', 'md-water', 'ios-wifi', 'md-wifi', 'ios-wine', 'md-wine',
            'ios-woman', 'md-woman', 'logo-android', 'logo-angular', 'logo-apple', 'logo-bitbucket', 'logo-bitcoin', 'logo-buffer', 'logo-chrome', 'logo-closed-captioning', 'logo-codepen', 'logo-css3', 'logo-designernews',
            'logo-dribbble', 'logo-dropbox', 'logo-euro', 'logo-facebook', 'logo-flickr', 'logo-foursquare', 'logo-freebsd-devil', 'logo-game-controller-a', 'logo-game-controller-b', 'logo-github', 'logo-google',
            'logo-googleplus', 'logo-hackernews', 'logo-html5', 'logo-instagram', 'logo-ionic', 'logo-ionitron', 'logo-javascript', 'logo-linkedin', 'logo-markdown', 'logo-model-s', 'logo-no-smoking', 'logo-nodejs', 'logo-npm',
            'logo-octocat', 'logo-pinterest', 'logo-playstation', 'logo-polymer', 'logo-python', 'logo-reddit', 'logo-rss', 'logo-sass', 'logo-skype', 'logo-slack', 'logo-snapchat', 'logo-steam', 'logo-tumblr', 'logo-tux',
            'logo-twitch', 'logo-twitter', 'logo-usd', 'logo-vimeo', 'logo-vk', 'logo-whatsapp', 'logo-windows', 'logo-wordpress', 'logo-xbox', 'logo-xing', 'logo-yahoo', 'logo-yen', 'logo-youtube'
        ];

        for (var i = 0, l = iconlist.length; i < l; i++) {
            $('#icons-container').append(
                '<div class="i-block card" data-clipboard-text="ion ion-' + iconlist[i] + '" data-filter="' + iconlist[i] + '"  data-toggle="tooltip" title="ion ion-' + iconlist[i] + '">' +
                '<i class="ion ion-' + iconlist[i] + '"></i>' +
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
