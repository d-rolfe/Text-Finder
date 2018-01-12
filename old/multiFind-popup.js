/*! Multi-highlight version:1.20  18-07-2017 */
!function(a) {
    chrome.runtime.getBackgroundPage(function(b) {
        !function(c) {
            function d(a) {
                clearTimeout(l),
                l = setTimeout(function() {
                    c.setKeywordsString(j.val())
                }, 1 == a ? 0 : 100)
            }
            a.bgWindow = b;
            var e = $("#highlight-words");
            e.html(c.getKeywordsString() || "");
            var f = e.height() + 50
              , g = e.width()
              , h = e.html()
              , i = 530
              , j = $('<textarea spellcheck="false"></textarea>').val(h).attr({
                placeholder: e.attr("placeholder") || ""
            }).css({
                height: f > i ? i : f,
                width: g,
                maxWidth: g
            });
            e.empty().append(j);
            var k, l, m = $("#switcher").attr("data-on", c.getActiveStatus() ? "true" : "false").on("click", function() {
                m.attr("data-on", "true" == m.attr("data-on") ? "false" : "true"),
                clearTimeout(k),
                k = setTimeout(function() {
                    c.setActiveStatus("true" == m.attr("data-on") ? !0 : !1)
                }, 100)
            });
            j.on("keyup change paste", d),
            $("#support-link").click(function() {
                chrome.tabs.create({
                    url: "https://www.patreon.com/alexius_lee"
                })
            }),
            /[\s\r\n]/.test(j.val()[j.val().length - 1]) || "" == $.trim(j.val()) || j.val(j.val() + " "),
            setTimeout(function() {
                j[0].selectionStart = j[0].selectionEnd = j[0].value.length,
                $("#support-link")[0].scrollIntoView()
            }, 200)
        }(b.background)
    })
}(this, $(this));
