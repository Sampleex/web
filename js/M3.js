$(function() {
    function n(n) {
        var t = $(n), r = "Search", u = cookie(r), i;
        u != null && (i = parseInt(u), t.find(".radio input").removeAttr("checked").eq(i).attr("checked", "checked"), 
        t.find(".form").removeClass("block").addClass("none").eq(i).toggleClass("none block"), 
        t.find(".txt").html(t.find(".con a").eq(i).text()));
        t.on("click", function() {
            $(this).hasClass("cur") || $(this).addClass("cur");
        });
        t.find(".radio").on("mouseover", function() {
            $(this).addClass("cur");
        }).on("mouseout", function() {
            $(this).removeClass("cur");
        }).on("click", "input", function() {
            var n = t.find(".radio input").index($(this));
            t.find(".form").attr("class", "form none").eq(n).toggleClass("none block");
            t.find(".form").eq(n).find(".Sinput").val($(".form").eq(n == 0 ? 1 : 0).find(".Sinput").val());
            cookie(r, n, {
                path: "/",
                domain: "gamersky.com",
                expires: 180
            });
        }).find(".con").on("click", "a", function(n) {
            var i, u, f;
            n.preventDefault();
            i = $(this);
            u = i.parents(".con").find("a").index(i);
            t.find(".radio").removeClass("cur").find(".txt").html(i.html());
            f = t.find(".form.block").find(".Sinput").val();
            t.find(".form").removeClass("block").addClass("none").eq(u).toggleClass("none block").find(".Sinput").val(f);
            cookie(r, u, {
                path: "/",
                domain: "gamersky.com",
                expires: 180
            });
        });
        t.on("keyup", "input", function(n) {
            n.keyCode == 13 && $(this).parent().find(".Sbutton").click();
        });
        t.on("click", ".Sbutton", function(n) {
            n.preventDefault();
            var t = $(this), i = t.parent().find("input[name='s']").val(), r = t.parent().find("input[name='q']").val(), u = t.parent().find("input[name='nsid']").val(), f = t.parent().find("input[name='node']").val(), e = t.parent().attr("data-action"), o = i != undefined ? "?s=" + encodeURI(i) : e.indexOf("soso") >= 0 ? "&q=" + encodeURI(r) + (u != undefined ? "&nsid=" + u : "") + (f != undefined ? "&node=" + f : "") : "&wd=" + encodeURI(r + " site:gamersky.com"), s = t.parent().attr("data-action") + o;
            window.open().location = s;
        });
    }
    n("#search-form");
});

(function(n) {
    n.fn.scrollLoading = function(t) {
        var f = {
            attr: "data-url",
            container: n(window),
            callback: n.noop
        }, i = n.extend({}, f, t || {}), r, u;
        i.cache = [];
        n(this).each(function() {
            var t = this.nodeName.toLowerCase(), r = n(this).attr(i.attr), u = {
                obj: n(this),
                tag: t,
                url: r
            };
            i.cache.push(u);
        });
        r = function(t) {
            n.isFunction(i.callback) && i.callback.call(t.get(0));
        };
        u = function() {
            var t = i.container.height();
            contop = i.container.get(0) === window ? n(window).scrollTop() : i.container.offset().top;
            n.each(i.cache, function(n, i) {
                var u = i.obj, s = i.tag, e = i.url, f, o;
                u && (f = u.offset().top - contop, o = f + u.height(), (f >= 0 && f < t || o > 0 && o <= t) && (e ? s === "img" ? r(u.attr("src", e)) : u.load(e, {}, function() {
                    r(u);
                }) : r(u), i.obj = null));
            });
        };
        u();
        i.container.on("scroll", u);
    };
})(jQuery);

$("img[data-src]").scrollLoading({
    attr: "data-src"
});