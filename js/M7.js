(function(n) {
    n.fn.Slide = function(t) {
        return this.each(function() {
            var k, s = n(this), r = n.extend(t), d = r.effect, h = r.delayTime, g = r.autoPlay, rt = r.interTime, w = r.prevCell, a = r.nextCell, u = r.bigPic, c = r.smallPic, l, b;
            r = "";
            var v = s.find(w), nt = s.find(a), f = s.find(u), y = f.find("li"), p = s.find(c), o = y.outerWidth(!0), e = y.length, i = 0, tt = parseInt(v.css("left")), it = parseInt(v.width());
            for (u = 0; e > u; u++) r += "<a href='javascript:;' class='" + (0 == u ? "cur" : "") + "'></a>";
            0 == p.length ? f.after('<div class="' + c.replace(".", "") + '">' + r + "</div>") : "" == p.html() ? p.html(r) : i = p.find("a.cur").index();
            switch (d) {
              case "fold":
                for (u = 0; e > u; u++) y.eq(u).css({
                    display: 0 == u ? "list-item" : "none",
                    position: "absolute",
                    top: 0,
                    left: 0
                });
                break;

              case "leftLoop":
                f.find("li:first").hasClass("clone") || (u = f.find("li:first").clone().addClass("clone"), 
                r = f.find("li:last-child").clone().addClass("clone"), f.css({
                    width: o * e + 2 * o,
                    position: "absolute",
                    top: 0,
                    left: -(o + o * i)
                }).append(u).prepend(r));
            }
            l = function(n) {
                switch (d) {
                  case "fold":
                    y.stop(!1, !0).fadeOut(h).eq(i).fadeIn(h, function() {
                        $(this).find("img").attr("src", $(this).find("img").attr("data-src"));
                    });
                    s.find(c).find("a").removeClass("cur").eq(i).addClass("cur");
                    break;

                  case "leftLoop":
                    "" == n && f.stop(!1, !0).animate({
                        left: -(o + o * i)
                    }, h);
                    ".prev" == n && f.stop(!1, !0).animate({
                        left: -(o * (i == e - 1 ? 0 : i + 1))
                    }, h, function() {
                        i == e - 1 && f.css({
                            left: -(o * e)
                        });
                    });
                    ".next" == n && f.stop(!1, !0).animate({
                        left: -(o + o * (i == e ? e : 0 == i ? e : i))
                    }, h, function() {
                        0 == i && f.css({
                            left: -o
                        });
                    });
                    s.find(c).find("a").removeClass("cur").eq(i).addClass("cur");
                    f.find("img").each(function() {
                        $(this).attr("src", $(this).attr("data-src"));
                    });
                }
            };
            b = function() {
                k = setInterval(function() {
                    i == e - 1 ? i = 0 : i++;
                    l(a);
                }, rt);
            };
            1 == g && b();
            s.on({
                mouseenter: function() {
                    clearInterval(k);
                    0 > tt && (v.stop().animate({
                        left: 0
                    }, 200), nt.stop().animate({
                        right: 0
                    }, 200));
                },
                mouseleave: function() {
                    1 == g && b();
                    0 > tt && (v.stop().animate({
                        left: -it
                    }, 200), nt.stop().animate({
                        right: -it
                    }, 200));
                }
            }).on("click", w, function() {
                i = 0 == i ? e - 1 : i - 1;
                l(w);
            }).on("click", a, function() {
                i = i == e - 1 ? 0 : i + 1;
                l(a);
            }).find(c).on("click", "a", function() {
                0 == n(this).hasClass("cur") && (i = n(this).index(), l(""));
            });
        });
    };
})(jQuery);

$(function() {
    $("#Slide1").Slide({
        bigPic: ".Bimg",
        smallPic: ".Simg",
        autoPlay: !0,
        interTime: 5e3,
        effect: "fold",
        delayTime: 300,
        prevCell: ".prev",
        nextCell: ".next"
    });
});

var mid3data = {
    nav: [ {
        tit: "人物信息"
    }, {
        tit: "地图介绍"
    } ],
    con: {
        "人物信息": {
            nav1: [ {
                img: "n0/ren1.png",
                tit: "莫泽"
            }, {
                img: "n0/ren2.png",
                tit: "赞恩"
            }, {
                img: "n0/ren3.png",
                tit: "阿玛拉"
            }, {
                img: "n0/ren4.png",
                tit: "FL4K"
            } ],
            con1: [ {
                tit: "角色类型 ：枪手",
                txt: "莫泽曾经是一个Valdof军队的士兵，她擅长机械战斗。她通常使用她的技能钻进她的机甲-铁熊。在铁熊身上装备着超速轨道炮，快速射机枪，以及半自动的榴弹发射器，火焰喷射器，充气弹和火箭发射器。"
            }, {
                tit: "角色类型 ：特工",
                txt: "赞恩出生在潘多拉星球上臭名昭著的弗莱特家族，他同时还是一个半退休的杀手。在他的袖子上全是杀人小工具。他的技能包括一架SNTNL无人机，上面驾着一个机枪，可以在空中不断盘旋射杀敌人。除此以外，他还拥有障碍护盾，以及分身术。这个分身术可以立即分散敌人的注意力，从而在额外的分身处打击敌人。"
            }, {
                tit: "角色类型 ：魔女",
                txt: "阿玛拉天生拥有魔女能力，并且还是人民中的声名赫赫的人物。使用她的技能，她可以震伤地面附近的敌人，然后把他们震飞到空中，使用超凡的拳头痛击他们，或者甚至使用她的必杀技干掉挡在她面前的所有敌人。"
            }, {
                tit: "角色类型 ：兽王",
                txt: "FL4K是一个漫步的机器人，他总是带着他的三个宠物的其中一个参与到战斗中。他们的技能可以让他们释放出潜伏爆破物，辐射伤害，甚至可以在行进迅速和回复血条的时候短暂消失"
            } ],
            slide: [ [ {
                tit: "毁灭之女",
                bg: "bg0 blue",
                btn: [ {
                    pageX: "line1 row3",
                    datam: "m1",
                    datasrc: "n0/0/blue/01.png",
                    datacur: "n0/0/blue/01cur.png"
                }, {
                    pageX: "line2 row2",
                    datam: "m4",
                    datasrc: "n0/0/blue/02.png",
                    datacur: "n0/0/blue/02cur.png"
                }, {
                    pageX: "line2 row3",
                    datam: "m4",
                    datasrc: "n0/0/blue/03.png",
                    datacur: "n0/0/blue/03cur.png"
                }, {
                    pageX: "line2 row4",
                    datam: "m4",
                    datasrc: "n0/0/blue/04.png",
                    datacur: "n0/0/blue/04cur.png"
                }, {
                    pageX: "line3 row1",
                    datam: "m3",
                    datasrc: "n0/0/blue/05.png",
                    datacur: "n0/0/blue/05cur.png"
                }, {
                    pageX: "line3 row2",
                    datam: "m4",
                    datasrc: "n0/0/blue/06.png",
                    datacur: "n0/0/blue/06cur.png"
                }, {
                    pageX: "line3 row3",
                    datam: "m4",
                    datasrc: "n0/0/blue/07.png",
                    datacur: "n0/0/blue/07cur.png"
                }, {
                    pageX: "line3 row4",
                    datam: "m4",
                    datasrc: "n0/0/blue/08.png",
                    datacur: "n0/0/blue/08cur.png"
                }, {
                    pageX: "line3 row5",
                    datam: "m1",
                    datasrc: "n0/0/blue/09.png",
                    datacur: "n0/0/blue/09cur.png"
                }, {
                    pageX: "line4 row1",
                    datam: "m3",
                    datasrc: "n0/0/blue/10.png",
                    datacur: "n0/0/blue/10cur.png"
                }, {
                    pageX: "line4 row2",
                    datam: "m4",
                    datasrc: "n0/0/blue/11.png",
                    datacur: "n0/0/blue/11cur.png"
                }, {
                    pageX: "line4 row3",
                    datam: "m4",
                    datasrc: "n0/0/blue/12.png",
                    datacur: "n0/0/blue/12cur.png"
                }, {
                    pageX: "line4 row5",
                    datam: "m3",
                    datasrc: "n0/0/blue/13.png",
                    datacur: "n0/0/blue/13cur.png"
                }, {
                    pageX: "line5 row1",
                    datam: "m3",
                    datasrc: "n0/0/blue/14.png",
                    datacur: "n0/0/blue/14cur.png"
                }, {
                    pageX: "line5 row2",
                    datam: "m4",
                    datasrc: "n0/0/blue/15.png",
                    datacur: "n0/0/blue/15cur.png"
                }, {
                    pageX: "line5 row4",
                    datam: "m4",
                    datasrc: "n0/0/blue/16.png",
                    datacur: "n0/0/blue/16cur.png"
                }, {
                    pageX: "line5 row5",
                    datam: "m3",
                    datasrc: "n0/0/blue/17.png",
                    datacur: "n0/0/blue/17cur.png"
                }, {
                    pageX: "line6 row2",
                    datam: "m4",
                    datasrc: "n0/0/blue/18.png",
                    datacur: "n0/0/blue/18cur.png"
                }, {
                    pageX: "line6 row3",
                    datam: "m4",
                    datasrc: "n0/0/blue/19.png",
                    datacur: "n0/0/blue/19cur.png"
                }, {
                    pageX: "line6 row5",
                    datam: "m3",
                    datasrc: "n0/0/blue/20.png",
                    datacur: "n0/0/blue/20cur.png"
                }, {
                    pageX: "line7 row3",
                    datam: "m4",
                    datasrc: "n0/0/blue/21.png",
                    datacur: "n0/0/blue/21cur.png"
                } ],
                con: [ {
                    tit: "V-35手雷发射器",
                    txt: "<p class='p1'>V-35是一把半自动手雷发射器。其发射的手雷不受到莫泽已装备的手雷模组的影响。</p>"
                }, {
                    tit: "狂轰滥炸",
                    txt: "<p class='p1'>每当莫泽造成溅射伤害时,她都会造成额外燃烧伤害。</p>"
                }, {
                    tit: "最后期限",
                    txt: "<p class='p1'>发射铁甲巨能武器消耗的燃料减少。铁甲巨能激活时击杀敌人将增加燃料。该技能的收益递减。</p>"
                }, {
                    tit: "越杀越勇",
                    txt: "<p class='p1'>杀戮技能。杀死一个敌人将缩短莫泽剩余的主动技能冷却时间。这项技能有收益递减。</p>"
                }, {
                    tit: "聚能",
                    txt: "<p class='p1'>使用V-35直接命中可提高伤害输出。</p>"
                }, {
                    tit: "毁灭方式",
                    txt: "<p class='p1'>每当莫泽造成溅射伤害时,当前装备的武器弹夹都有一定几率增加弹药,并有较小几率返还一枚手雷。</p>"
                }, {
                    tit: "托格交叉推广",
                    txt: "<p class='p1'>莫泽造成的所有溅射伤害都有一定几率在范围上翻倍。</p>"
                }, {
                    tit: "不锈钢巨熊",
                    txt: "<p class='p1'>铁甲巨熊获得额外装甲并提升最大燃料。</p>"
                }, {
                    tit: "征服者火箭发射器",
                    txt: "<p class='p1'>征服者火箭发射器是一种能够快速发射连串非制导爆炸火箭的发射器</p>"
                }, {
                    tit: "抢椅游戏",
                    txt: "<p class='p1'>V-35偶尔会发射一枚在爆炸前会将附近敌人拉入范围内的奇点手雷。</p><p class='p0'></p><p class='p1'>奇点:每第7个手雷</p>"
                }, {
                    tit: "拔掉拉环",
                    txt: "<p class='p1'>莫泽的手雷有一定几率造成暴击,伤害效果将大幅提升。暴击伤害不会影响手雷的暴击。</p>"
                }, {
                    tit: "自动熊",
                    txt: "<p class='p1'>当莫泽退出铁甲巨熊状态后,铁甲巨熊仍会短暂停留在原地。</p><p class='p0'></p><p class='p1'>当自动能激活时,其将瞄准并攻击附近敌人,当持续时间结束,其将冲向名敌人并自爆。</p>"
                }, {
                    tit: "启动追踪",
                    txt: "<p class='p1'>征服者火箭发射器现可发射自导火箭并提升装填速度。按住F,并瞄准至多6个敌方目标。松开射击按键即可朝指定目标发射一连串自导火箭。</p>"
                }, {
                    tit: "快装上阵",
                    txt: "<p class='p1'>V-35的装填速度大幅提升,并且现在发射五连发子弹。</p>"
                }, {
                    tit: "吸血鬼",
                    txt: "<p class='p1'>当莫泽用手雷对一名敌人造成伤害时,每伤害到一名敌人,她都能回复部分生命值。</p>"
                }, {
                    tit: "手雷狂热",
                    txt: "<p class='p1'>增加莫泽携带手雷的数量。</p>"
                }, {
                    tit: "软化目标",
                    txt: "<p class='p1'>征服者火箭发射器每枚火箭造成的伤害将大大降低,但能同时6箭齐发。另外,被征服者火箭发射器的火箭击中的敌人所受到的所有伤害都会提升</p>"
                }, {
                    tit: "抗争到底",
                    txt: "<p class='p1'>莫泽能在殊死一搏期间扔手雷。如果她在殊死一搏期间扔出过一枚手雷,就能在触发卷土重来之后重新获得一枚手雷。</p>"
                }, {
                    tit: "爆炸加成",
                    txt: "<p class='p1'>当莫泽造成溅射伤害时,她的主动技能冷却速度将会短暂提升。</p>"
                }, {
                    tit: "落锤协议",
                    txt: "<p class='p1'>莫泽能在殊死一搏期间扔手雷。如果她在殊死一搏期间扔出过一枚手雷,就能在触发卷土重来之后重新获得一枚手雷。</p>"
                }, {
                    tit: "火爆脾气",
                    txt: "<p class='p1'>每当莫泽造成枪械伤害时,都有一定几率对目标造成次爆炸。</p>"
                } ]
            }, {
                tit: "无限弹匣",
                bg: "bg0 green",
                btn: [ {
                    pageX: "line1 row3",
                    datam: "m1",
                    datasrc: "n0/0/green/01.png",
                    datacur: "n0/0/green/01cur.png"
                }, {
                    pageX: "line2 row2",
                    datam: "m4",
                    datasrc: "n0/0/green/02.png",
                    datacur: "n0/0/green/02cur.png"
                }, {
                    pageX: "line2 row3",
                    datam: "m4",
                    datasrc: "n0/0/green/03.png",
                    datacur: "n0/0/green/03cur.png"
                }, {
                    pageX: "line2 row4",
                    datam: "m4",
                    datasrc: "n0/0/green/04.png",
                    datacur: "n0/0/green/04cur.png"
                }, {
                    pageX: "line3 row1",
                    datam: "m3",
                    datasrc: "n0/0/green/05.png",
                    datacur: "n0/0/green/05cur.png"
                }, {
                    pageX: "line3 row2",
                    datam: "m4",
                    datasrc: "n0/0/green/06.png",
                    datacur: "n0/0/green/06cur.png"
                }, {
                    pageX: "line3 row3",
                    datam: "m4",
                    datasrc: "n0/0/green/07.png",
                    datacur: "n0/0/green/07cur.png"
                }, {
                    pageX: "line3 row4",
                    datam: "m4",
                    datasrc: "n0/0/green/08.png",
                    datacur: "n0/0/green/08cur.png"
                }, {
                    pageX: "line3 row5",
                    datam: "m1",
                    datasrc: "n0/0/green/09.png",
                    datacur: "n0/0/green/09cur.png"
                }, {
                    pageX: "line4 row1",
                    datam: "m3",
                    datasrc: "n0/0/green/10.png",
                    datacur: "n0/0/green/10cur.png"
                }, {
                    pageX: "line4 row2",
                    datam: "m4",
                    datasrc: "n0/0/green/11.png",
                    datacur: "n0/0/green/11cur.png"
                }, {
                    pageX: "line4 row3",
                    datam: "m4",
                    datasrc: "n0/0/green/12.png",
                    datacur: "n0/0/green/12cur.png"
                }, {
                    pageX: "line4 row5",
                    datam: "m3",
                    datasrc: "n0/0/green/13.png",
                    datacur: "n0/0/green/13cur.png"
                }, {
                    pageX: "line5 row1",
                    datam: "m3",
                    datasrc: "n0/0/green/14.png",
                    datacur: "n0/0/green/14cur.png"
                }, {
                    pageX: "line5 row3",
                    datam: "m4",
                    datasrc: "n0/0/green/15.png",
                    datacur: "n0/0/green/15cur.png"
                }, {
                    pageX: "line5 row4",
                    datam: "m4",
                    datasrc: "n0/0/green/16.png",
                    datacur: "n0/0/green/16cur.png"
                }, {
                    pageX: "line5 row5",
                    datam: "m3",
                    datasrc: "n0/0/green/17.png",
                    datacur: "n0/0/green/17cur.png"
                }, {
                    pageX: "line6 row2",
                    datam: "m4",
                    datasrc: "n0/0/green/18.png",
                    datacur: "n0/0/green/18cur.png"
                }, {
                    pageX: "line6 row3",
                    datam: "m4",
                    datasrc: "n0/0/green/19.png",
                    datacur: "n0/0/green/19cur.png"
                }, {
                    pageX: "line6 row5",
                    datam: "m3",
                    datasrc: "n0/0/green/20.png",
                    datacur: "n0/0/green/20cur.png"
                }, {
                    pageX: "line7 row3",
                    datam: "m4",
                    datasrc: "n0/0/green/21.png",
                    datacur: "n0/0/green/21cur.png"
                } ],
                con: [ {
                    tit: "转轮机枪",
                    txt: "<p class='p1'>当莫泽造成溅射伤害时,她的主动技能冷却速度将会短暂提升。</p>"
                }, {
                    tit: "枪林弹雨",
                    txt: "<p class='p1'>有时候,莫泽和铁甲巨能的射击会造成额外燃烧伤害而且不消耗弹药。</p>"
                }, {
                    tit: "火力熊",
                    txt: "<p class='p1'>有时候,莫泽和铁甲巨能的射击会造成额外燃烧伤害而且不消耗弹药。</p>"
                }, {
                    tit: "珠联璧合",
                    txt: "<p class='p1'>每装备一件相同制造商制造的装备,莫泽当前装备的武器都将增加弹夹容量并获得每枪减热的加成。</p>"
                }, {
                    tit: "泄压",
                    txt: "<p class='p1'>当热度提升,转轮机枪造成伤害将提升,在过热之前能射击更长时间。</p>"
                }, {
                    tit: "燃烧余烬",
                    txt: "<p class='p1'>提升莫泽和铁甲巨熊的燃烧伤害。</p>"
                }, {
                    tit: "重新分配",
                    txt: "<p class='p1'>莫泽造成一次暴击后,会获得弹药恢复,持续数秒时间。</p>"
                }, {
                    tit: "暴跳如雷",
                    txt: "<p class='p1'>移动时提升莫泽的操控性,武器切换以及模式切换速度。</p>"
                }, {
                    tit: "火蜥蜴",
                    txt: "<p class='p1'>火蜥蜴是一把可以对近距离内敌人造成燃烧伤害的燃烧喷射器。</p><p class='p0'></p><p class='p1'>虽然火蜥蜴拥有无限弹药,但使用时其燃料会耗尽。</p>"
                }, {
                    tit: "凛冬将军",
                    txt: "<p class='p1'>转轮机枪射出冰冻子弹,可降低热增量及燃料排放,但造成的伤害降低。</p>"
                }, {
                    tit: "横冲直撞",
                    txt: "<p class='p1'>莫泽能够边冲刺边射击。</p>"
                }, {
                    tit: "火力全开",
                    txt: "<p class='p1'>莫泽提升射速和暴击伤害。</p>"
                }, {
                    tit: "节约燃料",
                    txt: "<p class='p1'>减少火蜥蜴的燃料排放。另外,在使用火蜥蜴攻击名敌人后,铁甲巨能的移动速度将会提升。</p>"
                }, {
                    tit: "爆裂子弹",
                    txt: "<p class='p1'>转轮机枪发射可造成额外溅射伤害的爆炸弹,但其射击速度将降低。</p>"
                }, {
                    tit: "钢铁银行",
                    txt: "<p class='p1'>提升莫泽的弹夹容量。</p>"
                }, {
                    tit: "专家熊",
                    txt: "<p class='p1'>为铁甲巨熊装备两把相同武器可提升其伤害。</p>"
                }, {
                    tit: "化学战争",
                    txt: "<p class='p1'>火蜥蜴现可造成腐蚀性伤害。另外,火蜥蜴的熔解伤害将提升。</p>"
                }, {
                    tit: "饯别礼",
                    txt: "<p class='p1'>离开铁甲巨熊后,莫泽将获得无限弹药,持续数秒时间。</p>"
                }, {
                    tit: "“嗒嗒嗒，嗒嗒，嗒...”",
                    txt: "<p class='p1'>莫泽的枪械伤害将在弹匣消耗时逐渐提升。弹夹中剩余的弹药越少,伤害提升越大。</p>"
                }, {
                    tit: "熔岩咆哮",
                    txt: "<p class='p1'>火蜴转换成三连发模式,燃料消耗增加,第一枚射弹会引燃大片区域。</p>"
                }, {
                    tit: "铸造术",
                    txt: "<p class='p1'>还需要技能树中加25点积分才能购买莫泽当前装备的武器会恢复弹药。</p>"
                } ]
            }, {
                tit: "惩罚之盾",
                bg: "bg0 red",
                btn: [ {
                    pageX: "line1 row3",
                    datam: "m1",
                    datasrc: "n0/0/red/01.png",
                    datacur: "n0/0/red/01cur.png"
                }, {
                    pageX: "line2 row2",
                    datam: "m4",
                    datasrc: "n0/0/red/02.png",
                    datacur: "n0/0/red/02cur.png"
                }, {
                    pageX: "line2 row3",
                    datam: "m4",
                    datasrc: "n0/0/red/03.png",
                    datacur: "n0/0/red/03cur.png"
                }, {
                    pageX: "line2 row4",
                    datam: "m4",
                    datasrc: "n0/0/red/04.png",
                    datacur: "n0/0/red/04cur.png"
                }, {
                    pageX: "line3 row1",
                    datam: "m3",
                    datasrc: "n0/0/red/05.png",
                    datacur: "n0/0/red/05cur.png"
                }, {
                    pageX: "line3 row2",
                    datam: "m4",
                    datasrc: "n0/0/red/06.png",
                    datacur: "n0/0/red/06cur.png"
                }, {
                    pageX: "line3 row3",
                    datam: "m4",
                    datasrc: "n0/0/red/07.png",
                    datacur: "n0/0/red/07cur.png"
                }, {
                    pageX: "line3 row4",
                    datam: "m4",
                    datasrc: "n0/0/red/08.png",
                    datacur: "n0/0/red/08cur.png"
                }, {
                    pageX: "line3 row5",
                    datam: "m1",
                    datasrc: "n0/0/red/09.png",
                    datacur: "n0/0/red/09cur.png"
                }, {
                    pageX: "line4 row1",
                    datam: "m3",
                    datasrc: "n0/0/red/10.png",
                    datacur: "n0/0/red/10cur.png"
                }, {
                    pageX: "line4 row2",
                    datam: "m4",
                    datasrc: "n0/0/red/11.png",
                    datacur: "n0/0/red/11cur.png"
                }, {
                    pageX: "line4 row3",
                    datam: "m4",
                    datasrc: "n0/0/red/12.png",
                    datacur: "n0/0/red/12cur.png"
                }, {
                    pageX: "line4 row5",
                    datam: "m3",
                    datasrc: "n0/0/red/13.png",
                    datacur: "n0/0/red/13cur.png"
                }, {
                    pageX: "line5 row1",
                    datam: "m3",
                    datasrc: "n0/0/red/14.png",
                    datacur: "n0/0/red/14cur.png"
                }, {
                    pageX: "line5 row2",
                    datam: "m4",
                    datasrc: "n0/0/red/15.png",
                    datacur: "n0/0/red/15cur.png"
                }, {
                    pageX: "line5 row4",
                    datam: "m4",
                    datasrc: "n0/0/red/16.png",
                    datacur: "n0/0/red/16cur.png"
                }, {
                    pageX: "line5 row5",
                    datam: "m3",
                    datasrc: "n0/0/red/17.png",
                    datacur: "n0/0/red/17cur.png"
                }, {
                    pageX: "line6 row2",
                    datam: "m4",
                    datasrc: "n0/0/red/18.png",
                    datacur: "n0/0/red/18cur.png"
                }, {
                    pageX: "line6 row3",
                    datam: "m4",
                    datasrc: "n0/0/red/19.png",
                    datacur: "n0/0/red/19cur.png"
                }, {
                    pageX: "line6 row5",
                    datam: "m3",
                    datasrc: "n0/0/red/20.png",
                    datacur: "n0/0/red/20cur.png"
                }, {
                    pageX: "line7 row3",
                    datam: "m4",
                    datasrc: "n0/0/red/21.png",
                    datacur: "n0/0/red/21cur.png"
                } ],
                con: [ {
                    tit: "磁轨炮",
                    txt: "<p class='p1'>磁轨炮能发射造成电击伤害的电气化高速射弹。它就像颗子弹,只不过样子大了些,速度快了些,而且还被电光包裹着。</p>"
                }, {
                    tit: "无私复仇",
                    txt: "<p class='p1'>每当莫泽换弹时,她将牺牲自己少部分生命值并提升自己和同伴子弹的燃烧伤害,效果持续数秒时间。</p>"
                }, {
                    tit: "安全熊",
                    txt: "<p class='p1'>铁甲巨熊获得一个可降低所受伤害的泡泡护盾。护盾若承受过多伤害将会失效,并在短暂冷却时间之后重新激活。</p>"
                }, {
                    tit: "重装步兵",
                    txt: "<p class='p1'>莫泽的护盾启动时,她将获得伤害减免且提升枪械伤害。</p>"
                }, {
                    tit: "地狱之轨",
                    txt: "<p class='p1'>磁轨炮现可发射能造成燃烧伤害的超高温子弹,但每次射击会增加消耗的燃料。</p>"
                }, {
                    tit: "弹壳沉溺",
                    txt: "<p class='p1'>杀戮技能。击杀一名敌人赋予莫泽一层弹壳沉溺状态每一层弹壳沉溺都会降低莫泽的射速,但会提升她与其友军的枪械伤害。</p>"
                }, {
                    tit: "命悬一线",
                    txt: "<p class='p1'>莫泽的部分生命值将被移除并且无法复原,但她的最大护盾会获得等量提升。</p>"
                }, {
                    tit: "弗拉多夫精品",
                    txt: "<p class='p1'>提升莫泽的最大护盾,并且使其对电击伤害产生抗性。</p>"
                }, {
                    tit: "熊拳",
                    txt: "<p class='p1'>熊拳是一种气动拳,可对近距离单一目标造成大量伤害。</p><p class='p0'></p><p class='p1'>弗拉多夫武器可支持铁甲巨熊武装到熊臂。</p>"
                }, {
                    tit: "电容式电枢",
                    txt: "<p class='p1'>当磁轨炮击中一名敌人,可对周围敌人造成连锁伤害,并对更多目标造成减弱的电击伤害。</p>"
                }, {
                    tit: "秣马厉兵",
                    txt: "<p class='p1'>进入铁甲巨熊将让莫泽和她的同伴的护盾以更快的充能速度迅速开始充能。</p>"
                }, {
                    tit: "实验军火",
                    txt: "<p class='p1'>莫泽每次暴击都将造成额外燃烧伤害。</p>"
                }, {
                    tit: "乱拳猛击",
                    txt: "<p class='p1'>当熊拳击中一名敌人时,将会对该名敌人及周围所有敌人造成随机的额外元素伤害。</p>"
                }, {
                    tit: "腐蚀性脱壳弹",
                    txt: "<p class='p1'>磁轨炮现可发射一枚能造成少量伤害,但在短暂延迟后会爆炸的特殊子弹。磁轨炮射击将降低燃料排放且提升弹匣容量。</p>"
                }, {
                    tit: "铁幕背后",
                    txt: "<p class='p1'>还需要技能树中加15点积分才能购买莫泽的护盾充能延迟缩短,而且她的护盾充能速度加快。</p>"
                }, {
                    tit: "孤注一掷",
                    txt: "<p class='p1'>莫泽的枪械伤害会随其生命值降低而提高。生命值越低,枪械伤害越高。</p>"
                }, {
                    tit: "缩短距离",
                    txt: "<p class='p1'>能拳现在取代拳击,发射拳头抓住极大范围内的敌人,对其造成电击伤害并将其拉往铁甲巨熊处。</p>"
                }, {
                    tit: "方阵教义",
                    txt: "<p class='p1'>杀戮技能。杀死一名敌人后,莫泽会获得一层方阵教义。每层方阵教义将提高莫泽的最大护盾上限和枪械伤害。每一层持续30秒。</p><p class='p0'></p><p class='p1'>没有加层数限制。</p>"
                }, {
                    tit: "力量反馈",
                    txt: "<p class='p1'>每当莫泽造成一次暴击,她的护盾都会迅速开始充能。</p><p class='p0'></p><p class='p1'>当V-34远远不够用时。</p>"
                }, {
                    tit: "点击锤",
                    txt: "<p class='p1'>每当莫泽造成一次暴击,她的护盾都会迅速开始充能。</p>"
                }, {
                    tit: "顽强抵抗",
                    txt: "<p class='p1'>每当莫泽的护盾彻底耗尽时,她将会迅速恢复部分护盾,并且短时间内提升她的枪械伤害。</p><p class='p0'></p><p class='p1'>这项技能只能在莫泽的护盾完全充能后触发。</p>"
                } ]
            } ], [ {
                tit: "职业杀手",
                bg: "bg1 blue",
                btn: [ {
                    pageX: "line1 row3",
                    datam: "m1",
                    datasrc: "n0/1/blue/01.png",
                    datacur: "n0/1/blue/01cur.png"
                }, {
                    pageX: "line2 row2",
                    datam: "m4",
                    datasrc: "n0/1/blue/02.png",
                    datacur: "n0/1/blue/02cur.png"
                }, {
                    pageX: "line2 row3",
                    datam: "m4",
                    datasrc: "n0/1/blue/03.png",
                    datacur: "n0/1/blue/03cur.png"
                }, {
                    pageX: "line2 row4",
                    datam: "m4",
                    datasrc: "n0/1/blue/04.png",
                    datacur: "n0/1/blue/04cur.png"
                }, {
                    pageX: "line3 row1",
                    datam: "m3",
                    datasrc: "n0/1/blue/05.png",
                    datacur: "n0/1/blue/05cur.png"
                }, {
                    pageX: "line3 row2",
                    datam: "m4",
                    datasrc: "n0/1/blue/06.png",
                    datacur: "n0/1/blue/06cur.png"
                }, {
                    pageX: "line3 row3",
                    datam: "m4",
                    datasrc: "n0/1/blue/07.png",
                    datacur: "n0/1/blue/07cur.png"
                }, {
                    pageX: "line3 row4",
                    datam: "m4",
                    datasrc: "n0/1/blue/08.png",
                    datacur: "n0/1/blue/08cur.png"
                }, {
                    pageX: "line4 row1",
                    datam: "m3",
                    datasrc: "n0/1/blue/09.png",
                    datacur: "n0/1/blue/09cur.png"
                }, {
                    pageX: "line4 row3",
                    datam: "m4",
                    datasrc: "n0/1/blue/10.png",
                    datacur: "n0/1/blue/10cur.png"
                }, {
                    pageX: "line4 row5",
                    datam: "m3",
                    datasrc: "n0/1/blue/11.png",
                    datacur: "n0/1/blue/11cur.png"
                }, {
                    pageX: "line5 row1",
                    datam: "m3",
                    datasrc: "n0/1/blue/12.png",
                    datacur: "n0/1/blue/12cur.png"
                }, {
                    pageX: "line5 row2",
                    datam: "m4",
                    datasrc: "n0/1/blue/13.png",
                    datacur: "n0/1/blue/13cur.png"
                }, {
                    pageX: "line5 row4",
                    datam: "m4",
                    datasrc: "n0/1/blue/14.png",
                    datacur: "n0/1/blue/14cur.png"
                }, {
                    pageX: "line5 row5",
                    datam: "m3",
                    datasrc: "n0/1/blue/15.png",
                    datacur: "n0/1/blue/15cur.png"
                }, {
                    pageX: "line6 row3",
                    datam: "m4",
                    datasrc: "n0/1/blue/16.png",
                    datacur: "n0/1/blue/16cur.png"
                }, {
                    pageX: "line7 row3",
                    datam: "m4",
                    datasrc: "n0/1/blue/17.png",
                    datacur: "n0/1/blue/17cur.png"
                } ],
                con: [ {
                    tit: "SNTNL无人机",
                    txt: "<p class='p1'>将一架自动化的SNTNL 无人机送入战场,它将持续在场上四处飞行并使用自带的机枪射击敌人。部署SNTNL 后,可让无人机向赞恩瞄准的敌人射击。</p>"
                }, {
                    tit: "狂暴速度",
                    txt: "<p class='p1'>死一名敌人后,赞恩会提升移动速度,持续数秒时间。</p>"
                }, {
                    tit: "冷枪",
                    txt: "<p class='p1'>赞恩提升武器切换速度并且他切换武器后打出的第一枪将造成额外冰冻伤害。</p>"
                }, {
                    tit: "狂暴力量",
                    txt: "<p class='p1'>V-35是一把半自动手雷发射器。其发射的手雷不受到莫泽已装备的手雷模组的影响。</p><p class='p0'></p><p class='p1'>当V-34远远不够用时。</p>"
                }, {
                    tit: "冬日无人机",
                    txt: "<p class='p1'>将SNTNL 的主武器伤害转换为冰冻伤害。</p>"
                }, {
                    tit: "眼疾手快",
                    txt: "<p class='p1'>赞恩提升装填速度。</p><p class='p0'></p><p class='p1'>击杀一名敌人后,赞恩提升装填速度,持续数秒时间。</p>"
                }, {
                    tit: "无人机快递",
                    txt: "<p class='p1'>根据赞恩攻击敌人时的手雷模组,SNTNL 偶尔会掉落一枚手雷。</p>"
                }, {
                    tit: "救赎",
                    txt: "<p class='p1'>杀死一名敌人后,赞恩的武器将获得生命汲取技能,持续数秒时间。</p>"
                }, {
                    tit: "坏坏药剂",
                    txt: "<p class='p1'>SNTNL 不时会射出一道辐射光线以削弱敌人,并为赞恩提供增益。</p><p class='p0'></p><p class='p1'>SNTNL 不时会射出一道辐射光线以削弱敌人,并为赞恩提供增益。</p><p class='p1'>被削弱敌人的移动速度及攻击速度将降低。</p>"
                }, {
                    tit: "死神将至",
                    txt: "<p class='p1'>提升赞恩的所有杀戮技能效果和持续时间。</p>"
                }, {
                    tit: "静电场",
                    txt: "<p class='p1'>SNTNL 放射出一个静电场以对周围敌人发射电击光线,吸取其护盾的同时为赞恩的护盾充能。</p>"
                }, {
                    tit: "好日子",
                    txt: "<p class='p1'>为主武器添加一架火箭发射器,其主武器既可发射火箭也能进行机枪射击。</p>"
                }, {
                    tit: "暴力加成",
                    txt: "<p class='p1'>杀戮技能。杀死一名敌人后,赞恩将提升射速,持续数秒时间。</p>"
                }, {
                    tit: "暗箭难防",
                    txt: "<p class='p1'>杀死一名敌人后,赞恩接下来的五次射击都有一定几率发射一枚额外弹药。</p>"
                }, {
                    tit: "全能炮",
                    txt: "<p class='p1'>部署SNTNL 后,按住F或G可绘制目标区域将朝该区域发射导弹弹幕,一旦有敌人死亡,SNTNL 持续时间将重置。</p><p class='p0'></p><p class='p1'>该效果一次主动技能仅能使用一次。</p>"
                }, {
                    tit: "好运连连",
                    txt: "<p class='p1'>杀死一名敌人后,赞恩的主动技能持续时间将延长。这项技能有收益递减。</p>"
                }, {
                    tit: "杀红眼",
                    txt: "<p class='p1'>发动一项主动技能将会自动发动赞恩所有的杀戮技能。</p>"
                } ]
            }, {
                tit: "超级“卧底”",
                bg: "bg1 green",
                btn: [ {
                    pageX: "line1 row3",
                    datam: "m1",
                    datasrc: "n0/1/green/01.png",
                    datacur: "n0/1/green/01cur.png"
                }, {
                    pageX: "line2 row2",
                    datam: "m4",
                    datasrc: "n0/1/green/02.png",
                    datacur: "n0/1/green/02cur.png"
                }, {
                    pageX: "line2 row3",
                    datam: "m4",
                    datasrc: "n0/1/green/03.png",
                    datacur: "n0/1/green/03cur.png"
                }, {
                    pageX: "line2 row4",
                    datam: "m4",
                    datasrc: "n0/1/green/04.png",
                    datacur: "n0/1/green/04cur.png"
                }, {
                    pageX: "line3 row1",
                    datam: "m3",
                    datasrc: "n0/1/green/05.png",
                    datacur: "n0/1/green/05cur.png"
                }, {
                    pageX: "line3 row2",
                    datam: "m4",
                    datasrc: "n0/1/green/06.png",
                    datacur: "n0/1/green/06cur.png"
                }, {
                    pageX: "line3 row3",
                    datam: "m4",
                    datasrc: "n0/1/green/07.png",
                    datacur: "n0/1/green/07cur.png"
                }, {
                    pageX: "line3 row4",
                    datam: "m4",
                    datasrc: "n0/1/green/08.png",
                    datacur: "n0/1/green/08cur.png"
                }, {
                    pageX: "line4 row1",
                    datam: "m3",
                    datasrc: "n0/1/green/09.png",
                    datacur: "n0/1/green/09cur.png"
                }, {
                    pageX: "line4 row3",
                    datam: "m4",
                    datasrc: "n0/1/green/10.png",
                    datacur: "n0/1/green/10cur.png"
                }, {
                    pageX: "line4 row5",
                    datam: "m3",
                    datasrc: "n0/1/green/11.png",
                    datacur: "n0/1/green/11cur.png"
                }, {
                    pageX: "line5 row1",
                    datam: "m3",
                    datasrc: "n0/1/green/12.png",
                    datacur: "n0/1/green/12cur.png"
                }, {
                    pageX: "line5 row2",
                    datam: "m4",
                    datasrc: "n0/1/green/13.png",
                    datacur: "n0/1/green/13cur.png"
                }, {
                    pageX: "line5 row3",
                    datam: "m4",
                    datasrc: "n0/1/green/14.png",
                    datacur: "n0/1/green/14cur.png"
                }, {
                    pageX: "line5 row4",
                    datam: "m4",
                    datasrc: "n0/1/green/15.png",
                    datacur: "n0/1/green/15cur.png"
                }, {
                    pageX: "line5 row5",
                    datam: "m3",
                    datasrc: "n0/1/green/16.png",
                    datacur: "n0/1/green/16cur.png"
                }, {
                    pageX: "line6 row2",
                    datam: "m4",
                    datasrc: "n0/1/green/17.png",
                    datacur: "n0/1/green/17cur.png"
                }, {
                    pageX: "line6 row3",
                    datam: "m4",
                    datasrc: "n0/1/green/18.png",
                    datacur: "n0/1/green/18cur.png"
                }, {
                    pageX: "line6 row4",
                    datam: "m4",
                    datasrc: "n0/1/green/19.png",
                    datacur: "n0/1/green/19cur.png"
                }, {
                    pageX: "line7 row3",
                    datam: "m4",
                    datasrc: "n0/1/green/20.png",
                    datacur: "n0/1/green/20cur.png"
                } ],
                con: [ {
                    tit: "屏障",
                    txt: "<p class='p1'>设置一个可部署的屏障以抵挡射弹。赞恩及同伴可穿透屏障进行射击,造成更高的枪械伤害。部署屏障后,按下OkpO _actionskill 或G可捡起并手持屏障,但屏障面积会变小,效果会减弱。</p>"
                }, {
                    tit: "肾上腺素",
                    txt: "<p class='p1'>赞恩提升主动技能冷却速度。此提升取决于他拥有的护盾容量。并且护盾数值越高,冷却速度越快。</p>"
                }, {
                    tit: "实用存货",
                    txt: "<p class='p1'>赞恩获得最大护盾容量提升。</p>"
                }, {
                    tit: "准备出击",
                    txt: "<p class='p1'>赞恩加快护盾充能速度,减少护盾充能延迟。</p>"
                }, {
                    tit: "充能接力",
                    txt: "<p class='p1'>当赞恩或一名同伴碰触屏障后,他们将获得持续几秒的移动速度及射击速度提升。</p>"
                }, {
                    tit: "冻弹不得",
                    txt: "<p class='p1'>每当赞恩对名敌人造成暴击时,都有一定几率使敌人陷入迟缓状态。该效果可以持续叠加,直至目标被冰冻。</p>"
                }, {
                    tit: "处变不惊",
                    txt: "<p class='p1'>每当赞恩遭受伤害时,他都会获得针对该伤害类型的伤害抗性。</p>"
                }, {
                    tit: "挺身而出",
                    txt: "<p class='p1'>赞恩获得生命值恢复。护盾越少,加成越多。</p>"
                }, {
                    tit: "纳米科技好棒棒",
                    txt: "<p class='p1'>在屏障附近时,赞恩及其同伴获得生命恢复,装填速度得到提升,并极大程度改善护盾充能延迟。生命值越低,生命恢复值越高。</p>"
                }, {
                    tit: "自信加持",
                    txt: "<p class='p1'>当赞恩的护盾启动时,提升枪械伤害和精准度。这取决于赞恩拥有的护盾量。护盾数值越高,提升越大。</p>"
                }, {
                    tit: "全面保护",
                    txt: "<p class='p1'>赞恩的屏障变为一个笼罩四周的穹顶。</p>"
                }, {
                    tit: "反击",
                    txt: "<p class='p1'>当屏障承受伤害后,位于屏障附近的赞恩及其同伴可提升枪械伤害,持续几秒钟的时间。</p>"
                }, {
                    tit: "衣服很贵",
                    txt: "<p class='p1'>减少施加在赞恩身上的元素伤害的持续时间。</p>"
                }, {
                    tit: "冷食最佳",
                    txt: "<p class='p1'>赞恩每击杀名敌人,就会创造出一个冰冻星爆,对所有附近的敌人造成伤害。这项技能冷却时间较短。</p>"
                }, {
                    tit: "转危为安",
                    txt: "<p class='p1'>赞恩获得对非元素伤害的抗性。</p><p class='p0'></p><p class='p1'>杀死一个敌人后,赞恩遭受的所有元素伤害都会转化为非元素伤害。</p>"
                }, {
                    tit: "威慑领域",
                    txt: "<p class='p1'>碰触屏障的敌人会受到电击伤害,并进入麻痹状态。</p>"
                }, {
                    tit: "冰镇饮料",
                    txt: "<p class='p1'>每当赞恩用武器对一名被冰冻的敌人造成伤害,伤害的一部分将会转化为他的生命值。</p>"
                }, {
                    tit: "冷静收集",
                    txt: "<p class='p1'>每当赞恩冰冻一名敌人,他的护盾就会迅速开始充能。</p><p class='p0'></p><p class='p1'>如果赞恩的护盾已经充满,则开始恢复生命值,持续数秒时间。如果赞恩的生命值已经全满,则立刻重置主动技能冷却时间并恢复正在生效的主动技能持续时间。</p>"
                }, {
                    tit: "钢铁意志",
                    txt: "<p class='p1'>赞恩提升精准度和操控性。护盾全满时间越长,加成越高。</p>"
                }, {
                    tit: "防火墙",
                    txt: "<p class='p1'>赞恩的屏障获得其当前装备的护盾模块效果。另外,护盾效果同时作用于屏障附近的所有同伴。赞恩的加成减少。</p>"
                } ]
            }, {
                tit: "双重间谍",
                bg: "bg1 red",
                btn: [ {
                    pageX: "line1 row3",
                    datam: "m1",
                    datasrc: "n0/1/red/01.png",
                    datacur: "n0/1/red/01cur.png"
                }, {
                    pageX: "line2 row2",
                    datam: "m4",
                    datasrc: "n0/1/red/02.png",
                    datacur: "n0/1/red/02cur.png"
                }, {
                    pageX: "line2 row3",
                    datam: "m4",
                    datasrc: "n0/1/red/03.png",
                    datacur: "n0/1/red/03cur.png"
                }, {
                    pageX: "line2 row4",
                    datam: "m4",
                    datasrc: "n0/1/red/04.png",
                    datacur: "n0/1/red/04cur.png"
                }, {
                    pageX: "line3 row1",
                    datam: "m3",
                    datasrc: "n0/1/red/05.png",
                    datacur: "n0/1/red/05cur.png"
                }, {
                    pageX: "line3 row2",
                    datam: "m4",
                    datasrc: "n0/1/red/06.png",
                    datacur: "n0/1/red/06cur.png"
                }, {
                    pageX: "line3 row3",
                    datam: "m4",
                    datasrc: "n0/1/red/07.png",
                    datacur: "n0/1/red/07cur.png"
                }, {
                    pageX: "line3 row4",
                    datam: "m4",
                    datasrc: "n0/1/red/08.png",
                    datacur: "n0/1/red/08cur.png"
                }, {
                    pageX: "line4 row1",
                    datam: "m3",
                    datasrc: "n0/1/red/09.png",
                    datacur: "n0/1/red/09cur.png"
                }, {
                    pageX: "line4 row3",
                    datam: "m4",
                    datasrc: "n0/1/red/10.png",
                    datacur: "n0/1/red/10cur.png"
                }, {
                    pageX: "line4 row5",
                    datam: "m3",
                    datasrc: "n0/1/red/11.png",
                    datacur: "n0/1/red/11cur.png"
                }, {
                    pageX: "line5 row1",
                    datam: "m3",
                    datasrc: "n0/1/red/12.png",
                    datacur: "n0/1/red/12cur.png"
                }, {
                    pageX: "line5 row2",
                    datam: "m4",
                    datasrc: "n0/1/red/13.png",
                    datacur: "n0/1/red/13cur.png"
                }, {
                    pageX: "line5 row3",
                    datam: "m4",
                    datasrc: "n0/1/red/14.png",
                    datacur: "n0/1/red/14cur.png"
                }, {
                    pageX: "line5 row4",
                    datam: "m4",
                    datasrc: "n0/1/red/15.png",
                    datacur: "n0/1/red/15cur.png"
                }, {
                    pageX: "line5 row5",
                    datam: "m3",
                    datasrc: "n0/1/red/16.png",
                    datacur: "n0/1/red/16cur.png"
                }, {
                    pageX: "line6 row2",
                    datam: "m4",
                    datasrc: "n0/1/red/17.png",
                    datacur: "n0/1/red/17cur.png"
                }, {
                    pageX: "line6 row3",
                    datam: "m4",
                    datasrc: "n0/1/red/18.png",
                    datacur: "n0/1/red/18cur.png"
                }, {
                    pageX: "line6 row4",
                    datam: "m4",
                    datasrc: "n0/1/red/19.png",
                    datacur: "n0/1/red/19cur.png"
                }, {
                    pageX: "line7 row3",
                    datam: "m4",
                    datasrc: "n0/1/red/20.png",
                    datacur: "n0/1/red/20cur.png"
                } ],
                con: [ {
                    tit: "数码克隆体",
                    txt: "<p class='p1'>生成一个赞恩的数码克隆体。数码克隆体无法移动,但可以分散敌人注意力并向他们开火。部署数码克隆体后,可使赞恩与数码克隆体交换位置。</p>"
                }, {
                    tit: "同步性",
                    txt: "<p class='p1'>赞恩每使用一个主动技能,都将增加他的枪械伤害。</p>"
                }, {
                    tit: "有备无患",
                    txt: "<p class='p1'>生成一个赞恩的数码克隆体。数码克隆体无法移动,但可以分散敌人注意力并向他们开火。部署数码克隆体后,可使赞恩与数码克隆体交换位置。</p>"
                }, {
                    tit: "争分夺秒",
                    txt: "<p class='p1'>每激活一项主动技能,都会延长赞恩的主动技能持续时间。</p>"
                }, {
                    tit: "二进制",
                    txt: "<p class='p1'>赞恩与数码克隆体交换位置,会在赞恩及其数码克隆体附近引爆颗冰冻星爆。</p>"
                }, {
                    tit: "大混乱",
                    txt: "<p class='p1'>每当赞恩杀死一名敌人时,他和他的数码克隆体将会提升枪械伤害,并且获得生命值恢复,持续数秒时间。</p>"
                }, {
                    tit: "分形杀敌",
                    txt: "<p class='p1'>数码克隆体在首次被启动时将扔出赞恩当前手雷模组的一份复制品。如果数码克隆体被击杀,它将会掉落一枚手雷。</p><p class='p0'></p><p class='p1'>赞恩在数码克隆体激活状态下杀死一名敌人,数码克隆体会有一定几率扔出一枚手雷。</p>"
                }, {
                    tit: "胶带模组",
                    txt: "<p class='p1'>赞恩打出的第一枪有一定几率发射一枚榴弹。该技能的冷却时间较短。</p>"
                }, {
                    tit: "幸灾乐祸",
                    txt: "<p class='p1'>当数码克隆体承受伤害时,部分伤害值会转化为赞恩的护盾值。</p>"
                }, {
                    tit: "稍事休息",
                    txt: "<p class='p1'>当赞恩与数码克隆体互换位置时,其护盾会立即开始充能。</p>"
                }, {
                    tit: "真假难辨",
                    txt: "<p class='p1'>在召唤出数码克隆体及与之交换位置后,敌人会在几秒之内优先攻击数码克隆体。</p>"
                }, {
                    tit: "二重身",
                    txt: "<p class='p1'>赞恩的主动技能结束时,克隆体将会爆炸,并对周围所有敌人造成溅射伤害。主动技能技能剩余时间越长,伤害越高。</p>"
                }, {
                    tit: "满身手雷",
                    txt: "<p class='p1'>杀死一名敌人后,赞恩将恢复手雷,持续数秒时间。</p>"
                }, {
                    tit: "曾经的你",
                    txt: "<p class='p1'>殊死一搏期间,如果数码克隆体处于激活状态,可摧毁数码克隆体并立即以生命值全满的状态卷土重来。</p>"
                }, {
                    tit: "超音速人",
                    txt: "<p class='p1'>每当赞恩激活一个或多个主动技能,每一个主动技能都将让他的移动速度提升。</p>"
                }, {
                    tit: "数字分销",
                    txt: "<p class='p1'>当数码克隆体激活时,若赞恩受到伤害,则数码克隆体将为他分担部分伤害。</p>"
                }, {
                    tit: "宛如鬼魂",
                    txt: "<p class='p1'>赞恩和他的数码克隆体会有一定几率无视子弹。在启动一项主动技能后,这个几率会获得提升。此效果可以堆叠。</p>"
                }, {
                    tit: "爆炸升级",
                    txt: "<p class='p1'>赞恩召唤数码克隆体时将消耗至多3枚手雷。消耗的每一枚手雷都将提升数码克隆体的枪械伤害、最大生命值、射速、装弹速度以及数码克隆体持续时间。</p>"
                }, {
                    tit: "电光魔术",
                    txt: "<p class='p1'>赞恩对目标不是他的敌人造成额外电击伤害。</p>"
                }, {
                    tit: "双管枪",
                    txt: "<p class='p1'>与数码克隆体交换位置后,可提升赞恩与其数码克隆体的枪械伤害。</p>"
                } ]
            } ], [ {
                tit: "秘术攻击",
                bg: "bg2 blue",
                btn: [ {
                    pageX: "line1 row3",
                    datam: "m1",
                    datasrc: "n0/2/blue/01.png",
                    datacur: "n0/2/blue/01cur.png"
                }, {
                    pageX: "line2 row2",
                    datam: "m4",
                    datasrc: "n0/2/blue/02.png",
                    datacur: "n0/2/blue/02cur.png"
                }, {
                    pageX: "line2 row3",
                    datam: "m4",
                    datasrc: "n0/2/blue/03.png",
                    datacur: "n0/2/blue/03cur.png"
                }, {
                    pageX: "line2 row4",
                    datam: "m4",
                    datasrc: "n0/2/blue/04.png",
                    datacur: "n0/2/blue/04cur.png"
                }, {
                    pageX: "line3 row2",
                    datam: "m4",
                    datasrc: "n0/2/blue/05.png",
                    datacur: "n0/2/blue/05cur.png"
                }, {
                    pageX: "line3 row3",
                    datam: "m4",
                    datasrc: "n0/2/blue/06.png",
                    datacur: "n0/2/blue/06cur.png"
                }, {
                    pageX: "line3 row4",
                    datam: "m4",
                    datasrc: "n0/2/blue/07.png",
                    datacur: "n0/2/blue/07cur.png"
                }, {
                    pageX: "line3 row5",
                    datam: "m3",
                    datasrc: "n0/2/blue/08.png",
                    datacur: "n0/2/blue/08cur.png"
                }, {
                    pageX: "line4 row1",
                    datam: "m1",
                    datasrc: "n0/2/blue/09.png",
                    datacur: "n0/2/blue/09cur.png"
                }, {
                    pageX: "line4 row3",
                    datam: "m4",
                    datasrc: "n0/2/blue/10.png",
                    datacur: "n0/2/blue/10cur.png"
                }, {
                    pageX: "line4 row5",
                    datam: "m3",
                    datasrc: "n0/2/blue/11.png",
                    datacur: "n0/2/blue/11cur.png"
                }, {
                    pageX: "line5 row1",
                    datam: "m1",
                    datasrc: "n0/2/blue/12.png",
                    datacur: "n0/2/blue/12cur.png"
                }, {
                    pageX: "line5 row2",
                    datam: "m4",
                    datasrc: "n0/2/blue/13.png",
                    datacur: "n0/2/blue/13cur.png"
                }, {
                    pageX: "line5 row3",
                    datam: "m4",
                    datasrc: "n0/2/blue/14.png",
                    datacur: "n0/2/blue/14cur.png"
                }, {
                    pageX: "line5 row4",
                    datam: "m4",
                    datasrc: "n0/2/blue/15.png",
                    datacur: "n0/2/blue/15cur.png"
                }, {
                    pageX: "line6 row2",
                    datam: "m4",
                    datasrc: "n0/2/blue/16.png",
                    datacur: "n0/2/blue/16cur.png"
                }, {
                    pageX: "line6 row4",
                    datam: "m4",
                    datasrc: "n0/2/blue/17.png",
                    datacur: "n0/2/blue/17cur.png"
                }, {
                    pageX: "line6 row5",
                    datam: "m1",
                    datasrc: "n0/2/blue/18.png",
                    datacur: "n0/2/blue/18cur.png"
                }, {
                    pageX: "line7 row3",
                    datam: "m4",
                    datasrc: "n0/2/blue/19.png",
                    datacur: "n0/2/blue/19cur.png"
                } ],
                con: [ {
                    tit: "相位投掷",
                    txt: "<p class='p1'>阿玛拉向前发射出自己的幻像投影,对路径上的一切造成伤害。</p>"
                }, {
                    tit: "施害",
                    txt: "<p class='p1'>杀死一名敌人后,阿玛拉会获得一层狂涌。发动她的主动技能会消耗所有的狂涌层数。</p><p class='p0'></p><p class='p1'>每消耗一层狂涌,都会短暂提升阿玛拉的主动技能伤害。</p>"
                }, {
                    tit: "手速达人",
                    txt: "<p class='p1'>阿玛拉提升装填速度、武器切换速度和模式切换速度。</p>"
                }, {
                    tit: "华丽织锦",
                    txt: "<p class='p1'>施加状态效果后,阿玛拉将获得一层狂涌效果。使用主动技能将消耗所有的狂涌层数。</p><p class='p0'></p><p class='p1'>每消耗一层狂涌,就会暂时提升阿玛拉的状态效果施加几率。</p>"
                }, {
                    tit: "欣然同意",
                    txt: "<p class='p1'>阿玛拉的每层狂涌都将提升装填速度。消耗狂涌层数之后此加成将会在数秒内获得额外提升。</p>"
                }, {
                    tit: "超凡",
                    txt: "<p class='p1'>激活主动技能后,阿玛拉的精准度和暴击伤害提升,可持续数秒时间。</p>"
                }, {
                    tit: "分秒必争",
                    txt: "<p class='p1'>还需要技能树中加5点积分才能购买阿玛拉减少主动技能冷却速度。</p>"
                }, {
                    tit: "魔女补药",
                    txt: "<p class='p1'>阿玛拉主动技能所造成伤害的部分将会为她及附近同伴恢复等量生命值。</p>"
                }, {
                    tit: "救赎",
                    txt: "<p class='p1'>阿玛拉向前发射出自己的幻像投影,对路径上的一切造成伤害。当阿玛拉的幻像投影对一名敌人或目标造成伤害,其将发射一枚自导元素射弹,并触发她的主动技能元素效果打击敌人。</p>"
                }, {
                    tit: "胜人一筹",
                    txt: "<p class='p1'>所有的主动技能强化都获得效果提升。</p>"
                }, {
                    tit: "心绪宁静",
                    txt: "<p class='p1'>被阿玛拉主动技能伤害的敌人将会进入相位锁定状态,直到其再次受到伤害,或状态持续时间结束。但阿玛拉的主动技能能冷却时间将会被延长。</p><p class='p0'></p><p class='p1'>若阿玛拉使用相位擒拿瞄准敌人,位于擒拿目标附近的敌人也会被相位锁定。</p>"
                }, {
                    tit: "回响",
                    txt: "<p class='p1'>阿玛拉向前发射出自己的幻像投影,对路径上的一切造成伤害。幻像投影每命中一名敌人伤害增加。</p>"
                }, {
                    tit: "休息完毕",
                    txt: "<p class='p1'>阿玛拉提升射速和充能时间。</p>"
                }, {
                    tit: "防御尽失",
                    txt: "<p class='p1'>受阿玛拉的主动技能伤害后,敌人获得受到伤害提升状态,持续数秒时间。</p>"
                }, {
                    tit: "狂怒",
                    txt: "<p class='p1'>还需要技能树中加15点积分才能购买阿玛拉增加枪械伤害。在她使用主动技能后,这项效果会提升,持续数秒时间。</p>"
                }, {
                    tit: "元素追踪",
                    txt: "<p class='p1'>当阿玛拉使用枪械或者主动技能杀死一名敌人时,她会创造出一个自动追踪的元素球寻找新的敌人并造成主动技能元素伤害。</p><p class='p0'></p><p class='p1'>所有主动技能的溢出伤害都会提升该元素球的伤害。</p>"
                }, {
                    tit: "觉醒",
                    txt: "<p class='p1'>还需要技能树中加20点积分才能购买阿玛拉的每层狂涌造成的效果加强。</p>"
                }, {
                    tit: "坦达瓦舞",
                    txt: "<p class='p1'>阿玛拉向前发射出自己的幻像投影。当击中一个目标,幻像投影便爆炸,对周围所有敌人造成伤害。</p>"
                }, {
                    tit: "化身",
                    txt: "<p class='p1'>阿玛拉可以在主动技能冷却期间再次使用主动技能。这项技能每次主动技能冷却期间只能使用一次。</p><p class='p0'></p><p class='p1'>另外,也会提升阿玛拉的最高狂涌层数。</p><p class='p0'></p><p class='p1'>另外,也会提升阿玛拉的最高狂涌层数。</p>"
                } ]
            }, {
                tit: "缠斗",
                bg: "bg2 green",
                btn: [ {
                    pageX: "line1 row3",
                    datam: "m1",
                    datasrc: "n0/2/green/01.png",
                    datacur: "n0/2/green/01cur.png"
                }, {
                    pageX: "line2 row2",
                    datam: "m4",
                    datasrc: "n0/2/green/02.png",
                    datacur: "n0/2/green/02cur.png"
                }, {
                    pageX: "line2 row3",
                    datam: "m4",
                    datasrc: "n0/2/green/03.png",
                    datacur: "n0/2/green/03cur.png"
                }, {
                    pageX: "line2 row4",
                    datam: "m4",
                    datasrc: "n0/2/green/04.png",
                    datacur: "n0/2/green/04cur.png"
                }, {
                    pageX: "line3 row2",
                    datam: "m4",
                    datasrc: "n0/2/green/05.png",
                    datacur: "n0/2/green/05cur.png"
                }, {
                    pageX: "line3 row3",
                    datam: "m4",
                    datasrc: "n0/2/green/06.png",
                    datacur: "n0/2/green/06cur.png"
                }, {
                    pageX: "line3 row4",
                    datam: "m4",
                    datasrc: "n0/2/green/07.png",
                    datacur: "n0/2/green/07cur.png"
                }, {
                    pageX: "line3 row5",
                    datam: "m3",
                    datasrc: "n0/2/green/08.png",
                    datacur: "n0/2/green/08cur.png"
                }, {
                    pageX: "line4 row1",
                    datam: "m1",
                    datasrc: "n0/2/green/09.png",
                    datacur: "n0/2/green/09cur.png"
                }, {
                    pageX: "line4 row2",
                    datam: "m4",
                    datasrc: "n0/2/green/10.png",
                    datacur: "n0/2/green/10cur.png"
                }, {
                    pageX: "line4 row3",
                    datam: "m4",
                    datasrc: "n0/2/green/11.png",
                    datacur: "n0/2/green/11cur.png"
                }, {
                    pageX: "line4 row4",
                    datam: "m4",
                    datasrc: "n0/2/green/12.png",
                    datacur: "n0/2/green/12cur.png"
                }, {
                    pageX: "line4 row5",
                    datam: "m3",
                    datasrc: "n0/2/green/13.png",
                    datacur: "n0/2/green/13cur.png"
                }, {
                    pageX: "line5 row1",
                    datam: "m1",
                    datasrc: "n0/2/green/11.png",
                    datacur: "n0/2/green/14cur.png"
                }, {
                    pageX: "line5 row3",
                    datam: "m4",
                    datasrc: "n0/2/green/15.png",
                    datacur: "n0/2/green/15cur.png"
                }, {
                    pageX: "line6 row2",
                    datam: "m4",
                    datasrc: "n0/2/green/16.png",
                    datacur: "n0/2/green/16cur.png"
                }, {
                    pageX: "line6 row3",
                    datam: "m4",
                    datasrc: "n0/2/green/17.png",
                    datacur: "n0/2/green/17cur.png"
                }, {
                    pageX: "line6 row4",
                    datam: "m4",
                    datasrc: "n0/2/green/18.png",
                    datacur: "n0/2/green/18cur.png"
                }, {
                    pageX: "line6 row5",
                    datam: "m3",
                    datasrc: "n0/2/green/19.png",
                    datacur: "n0/2/green/19cur.png"
                }, {
                    pageX: "line7 row3",
                    datam: "m4",
                    datasrc: "n0/2/green/20.png",
                    datacur: "n0/2/green/20cur.png"
                } ],
                con: [ {
                    tit: "相位猛击",
                    txt: "<p class='p1'>阿玛拉腾空而起,猛击地面,对所有附近的敌人造成伤害,并将他们打至浮空。</p>"
                }, {
                    tit: "立志崛起",
                    txt: "<p class='p1'>阿玛拉提升最大生命值。</p>"
                }, {
                    tit: "私人空间",
                    txt: "<p class='p1'>视目标距离远近,阿玛拉的武器射击将会造成额外伤害。离目标越近,加成越高。</p>"
                }, {
                    tit: "沉着冷静",
                    txt: "<p class='p1'>阿玛拉会不断回复生命值。生命值越低,回复效果越明显。</p><p class='p0'></p><p class='p1'>在使用一项主动技能后,生命回复速度将会翻倍,持续数秒时间。</p>"
                }, {
                    tit: "武器协议",
                    txt: "<p class='p1'>阿玛拉造成的溅射伤害提升,并减少遭受的溅射伤害。</p>"
                }, {
                    tit: "轮回",
                    txt: "<p class='p1'>每当阿玛拉用主动技能对一名敌人造成伤害时,都会增加一层轮回。每一层轮回都将提升阿玛拉的枪械伤害和生命值恢复,持续数秒时间。层数会在数秒钟后消失。</p>"
                }, {
                    tit: "神来之手",
                    txt: "<p class='p1'>使用主动技能几秒种后,阿玛拉的手臂依然保持活跃状态,并且获得伤害减免。</p>"
                }, {
                    tit: "疫病之虎",
                    txt: "<p class='p1'>将阿玛拉的主动技能转换为腐蚀伤害。</p>"
                }, {
                    tit: "破裂",
                    txt: "<p class='p1'>阿玛拉从地底召唤出一排拳头,对其前方的敌人造成伤害。</p>"
                }, {
                    tit: "正念",
                    txt: "<p class='p1'>每当阿玛拉受到伤害时,她都会获得一层正念。每一层正念都会让阿玛拉减少护盾回复延迟和增加移动速度。层数会在几秒种后消失。</p>"
                }, {
                    tit: "寻找中心",
                    txt: "<p class='p1'>阿玛拉提升近战伤害。</p><p class='p0'></p><p class='p1'>另外,在使用主动技能之后的数秒钟内,阿玛拉将提升近战范围。</p>"
                }, {
                    tit: "元气满满",
                    txt: "<p class='p1'>杀戮技能。阿玛拉使用主动技能杀死名敌人后,将赋予所有同伴移动速度提升,效果持续数秒时间。</p>"
                }, {
                    tit: "启示",
                    txt: "<p class='p1'>阿玛拉的主动技能现可创造出一颗新星。新星攻击敌人时,会对周围所有敌人造成伤害。</p>"
                }, {
                    tit: "坠落",
                    txt: "<p class='p1'>阿玛拉腾空而起,向下射出元素光线,随后发动猛击。</p>"
                }, {
                    tit: "天人合一",
                    txt: "<p class='p1'>阿玛拉获得最大生命值提升,同时主动技能所携带元素的元素抗性也会提升。</p>"
                }, {
                    tit: "以牙还牙",
                    txt: "<p class='p1'>每当一名敌人对阿玛拉造成伤害时,她都会自动向敌人扔出一个元素球,并造成主动技能元素伤害。这项技能冷却时间较短。</p>"
                }, {
                    tit: "组合拳",
                    txt: "<p class='p1'>每当阿玛拉对敌人造成近战伤害时,就会提升主动技能伤害和枪械伤害,持续数秒时间。</p>"
                }, {
                    tit: "守护天使",
                    txt: "<p class='p1'>当阿玛拉进入殊死一搏状态时,她将立即触发卷土重来,恢复生命值,并且创造出一个主动技能元素星爆将附近的敌人击退。该技能冷却时间较长。</p>"
                }, {
                    tit: "魅惑",
                    txt: "<p class='p1'>敌人受到阿玛拉主动技能的伤害将会进入混乱状态并在短时间内攻击其同伴。但阿玛拉的主动技能冷却时间将会延长。</p><p class='p0'></p><p class='p1'>若阿玛拉使用相位擒拿瞄准敌人,位于擒拿目标附近的敌人也会混乱。</p>"
                }, {
                    tit: "闪电突击",
                    txt: "<p class='p1'>近战攻击升级。瞄准敌人时按下让阿玛拉向前冲刺并发动特殊近战攻击,造成元素近战伤害。如果通过闪电突击近战击杀了一名敌人,闪电突击的冷却时间将会迅速重置。</p>"
                } ]
            }, {
                tit: "元素之拳",
                bg: "bg2 red",
                btn: [ {
                    pageX: "line1 row3",
                    datam: "m1",
                    datasrc: "n0/2/red/01.png",
                    datacur: "n0/2/red/01cur.png"
                }, {
                    pageX: "line2 row2",
                    datam: "m4",
                    datasrc: "n0/2/red/02.png",
                    datacur: "n0/2/red/02cur.png"
                }, {
                    pageX: "line2 row3",
                    datam: "m4",
                    datasrc: "n0/2/red/03.png",
                    datacur: "n0/2/red/03cur.png"
                }, {
                    pageX: "line2 row4",
                    datam: "m4",
                    datasrc: "n0/2/red/04.png",
                    datacur: "n0/2/red/04cur.png"
                }, {
                    pageX: "line3 row2",
                    datam: "m4",
                    datasrc: "n0/2/red/05.png",
                    datacur: "n0/2/red/05cur.png"
                }, {
                    pageX: "line3 row3",
                    datam: "m4",
                    datasrc: "n0/2/red/06.png",
                    datacur: "n0/2/red/06cur.png"
                }, {
                    pageX: "line3 row4",
                    datam: "m4",
                    datasrc: "n0/2/red/07.png",
                    datacur: "n0/2/red/07cur.png"
                }, {
                    pageX: "line3 row5",
                    datam: "m2",
                    datasrc: "n0/2/red/08.png",
                    datacur: "n0/2/red/08cur.png"
                }, {
                    pageX: "line4 row1",
                    datam: "m1",
                    datasrc: "n0/2/red/09.png",
                    datacur: "n0/2/red/09cur.png"
                }, {
                    pageX: "line4 row3",
                    datam: "m4",
                    datasrc: "n0/2/red/10.png",
                    datacur: "n0/2/red/10cur.png"
                }, {
                    pageX: "line4 row5",
                    datam: "m3",
                    datasrc: "n0/2/red/11.png",
                    datacur: "n0/2/red/11cur.png"
                }, {
                    pageX: "line5 row2",
                    datam: "m4",
                    datasrc: "n0/2/red/12.png",
                    datacur: "n0/2/red/12cur.png"
                }, {
                    pageX: "line5 row3",
                    datam: "m4",
                    datasrc: "n0/2/red/13.png",
                    datacur: "n0/2/red/13cur.png"
                }, {
                    pageX: "line5 row4",
                    datam: "m4",
                    datasrc: "n0/2/red/14.png",
                    datacur: "n0/2/red/14cur.png"
                }, {
                    pageX: "line5 row5",
                    datam: "m1",
                    datasrc: "n0/2/red/15.png",
                    datacur: "n0/2/red/15cur.png"
                }, {
                    pageX: "line6 row1",
                    datam: "m1",
                    datasrc: "n0/2/red/16.png",
                    datacur: "n0/2/red/16cur.png"
                }, {
                    pageX: "line6 row2",
                    datam: "m4",
                    datasrc: "n0/2/red/17.png",
                    datacur: "n0/2/red/17cur.png"
                }, {
                    pageX: "line6 row4",
                    datam: "m4",
                    datasrc: "n0/2/red/18.png",
                    datacur: "n0/2/red/18cur.png"
                }, {
                    pageX: "line7 row3",
                    datam: "m4",
                    datasrc: "n0/2/red/19.png",
                    datacur: "n0/2/red/19cur.png"
                } ],
                con: [ {
                    tit: "相位擒拿",
                    txt: "<p class='p1'>阿玛拉召唤出一个自地面爆裂而出的巨大拳头,并在几秒内将目标敌人困在原地。一些对擒拿免疫的敌人会立即承受伤害。</p>"
                }, {
                    tit: "灵气",
                    txt: "<p class='p1'>阿玛拉的元素效果造成的伤害和持续时间获得提升。她的主动技能元素效果造成的伤害会进一步提升。</p>"
                }, {
                    tit: "稳健之手",
                    txt: "<p class='p1'>阿玛拉获得武器操控性和精准度提升。</p>"
                }, {
                    tit: "元素注入",
                    txt: "<p class='p1'>将阿玛拉的武器造成的部分伤害转化为她的主动技能元素伤害。</p>"
                }, {
                    tit: "暴风骤雨",
                    txt: "<p class='p1'>阿玛拉提升元素伤害。大幅提升电击伤害。</p>"
                }, {
                    tit: "双拳放光",
                    txt: "<p class='p1'>阿玛拉提升近战伤害,并且她的近战伤害会附带她的主动技能元素。</p>"
                }, {
                    tit: "野火燎原",
                    txt: "<p class='p1'>当阿玛拉对一名敌人施加状态效果时,状态效果将有一定几率传播给一名附近的敌人。</p>"
                }, {
                    tit: "灵魂之火",
                    txt: "<p class='p1'>将阿玛拉的主动技能转换为燃烧伤害。</p>"
                }, {
                    tit: "无尽之拳",
                    txt: "<p class='p1'>阿玛拉召唤出一个自地面爆裂而出的巨大拳头,并在几秒内将目标敌人困在原地。</p><p class='p0'></p><p class='p1'>当擒拿住的敌人死亡,随即会生成一个新的拳头擒拿住一个新目标。</p>"
                }, {
                    tit: "恐惧效应",
                    txt: "<p class='p1'>在一名敌人被抓取后,阿玛拉会提升枪械伤害,持续数秒时间。</p><p class='p0'></p><p class='p1'>每当一位玩家杀死一名被抓取的敌人时,其当前的武器就会立即换弹完成。</p>"
                }, {
                    tit: "引诱",
                    txt: "<p class='p1'>阿玛拉的主动技能能创造出一个可将敌人拉入其中的奇点。</p>"
                }, {
                    tit: "一视同仁",
                    txt: "<p class='p1'>阿玛拉对敌人造成伤害的子弹有一定几率发生跳弹并对周围敌人造成较小伤害。如果目标当前受到相位擒拿或者心绪宁静影响,反弹几率和伤害将会提升。</p>"
                }, {
                    tit: "深井",
                    txt: "<p class='p1'>增加阿玛拉的元素武器的弹夹容量。</p>"
                }, {
                    tit: "宣泄",
                    txt: "<p class='p1'>每当阿玛拉对一名敌人发动一项元素效果,该敌人死亡时将会爆炸,并根据当前施加在该敌人身上的元素造成相应的元素伤害。这项技能的冷却时间较短。</p>"
                }, {
                    tit: "连带束缚",
                    txt: "<p class='p1'>阿玛拉召唤出一个自地面爆裂而出的巨大拳头,并在几秒内将目标敌人困在原地。</p><p class='p0'></p><p class='p1'>位于被擒拿目标的附近敌人进入联结状态,其受到的任何伤害都将与全部其他联结目标一同承受。</p>"
                }, {
                    tit: "拳头至上",
                    txt: "<p class='p1'>阿玛拉召唤出一个自地面爆裂而出的巨大拳头,并在几秒内将目标敌人困在原地。</p><p class='p0'></p><p class='p1'>在擒拿目标敌人后,巨拳出现并持续击打该区域,对附近敌人造成伤害。</p>"
                }, {
                    tit: "生生不息",
                    txt: "<p class='p1'>每当阿玛拉使用武器造成元素伤害,她都将获得生命汲取。</p>"
                }, {
                    tit: "合流",
                    txt: "<p class='p1'>每当阿玛拉对敌人施加元素效果成功时,都会有一定几率对该敌人随机造成电击、燃烧或者腐蚀伤害。</p>"
                }, {
                    tit: "强行表达",
                    txt: "<p class='p1'>根据阿玛拉的主动技能元素伤害,阿玛拉的枪械会造成额外元素伤害。</p>"
                } ]
            } ], [ {
                tit: "大师",
                bg: "bg3 blue",
                btn: [ {
                    pageX: "line1 row3",
                    datam: "m1",
                    datasrc: "n0/3/blue/01.png",
                    datacur: "n0/3/blue/01cur.png"
                }, {
                    pageX: "line1 row2",
                    datam: "m2",
                    datasrc: "n0/3/blue/02.png",
                    datacur: "n0/3/blue/02cur.png"
                }, {
                    pageX: "line2 row2",
                    datam: "m4",
                    datasrc: "n0/3/blue/03.png",
                    datacur: "n0/3/blue/03cur.png"
                }, {
                    pageX: "line2 row3",
                    datam: "m4",
                    datasrc: "n0/3/blue/04.png",
                    datacur: "n0/3/blue/04cur.png"
                }, {
                    pageX: "line2 row4",
                    datam: "m4",
                    datasrc: "n0/3/blue/05.png",
                    datacur: "n0/3/blue/05cur.png"
                }, {
                    pageX: "line3 row1",
                    datam: "m3",
                    datasrc: "n0/3/blue/06.png",
                    datacur: "n0/3/blue/06cur.png"
                }, {
                    pageX: "line3 row2",
                    datam: "m4",
                    datasrc: "n0/3/blue/07.png",
                    datacur: "n0/3/blue/07cur.png"
                }, {
                    pageX: "line3 row3",
                    datam: "m4",
                    datasrc: "n0/3/blue/08.png",
                    datacur: "n0/3/blue/08cur.png"
                }, {
                    pageX: "line3 row4",
                    datam: "m4",
                    datasrc: "n0/3/blue/09.png",
                    datacur: "n0/3/blue/09cur.png"
                }, {
                    pageX: "line4 row1",
                    datam: "m3",
                    datasrc: "n0/3/blue/10.png",
                    datacur: "n0/3/blue/10cur.png"
                }, {
                    pageX: "line4 row3",
                    datam: "m4",
                    datasrc: "n0/3/blue/11.png",
                    datacur: "n0/3/blue/11cur.png"
                }, {
                    pageX: "line4 row4",
                    datam: "m4",
                    datasrc: "n0/3/blue/12.png",
                    datacur: "n0/3/blue/12cur.png"
                }, {
                    pageX: "line4 row5",
                    datam: "m2",
                    datasrc: "n0/3/blue/13.png",
                    datacur: "n0/3/blue/13cur.png"
                }, {
                    pageX: "line5 row1",
                    datam: "m3",
                    datasrc: "n0/3/blue/14.png",
                    datacur: "n0/3/blue/14cur.png"
                }, {
                    pageX: "line5 row3",
                    datam: "m4",
                    datasrc: "n0/3/blue/15.png",
                    datacur: "n0/3/blue/15cur.png"
                }, {
                    pageX: "line5 row4",
                    datam: "m4",
                    datasrc: "n0/3/blue/16.png",
                    datacur: "n0/3/blue/16cur.png"
                }, {
                    pageX