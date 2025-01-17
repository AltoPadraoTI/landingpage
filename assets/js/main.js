! function (o) {
   "use strict";
   var l, n = o("body"),
      a = o(".ln-fullpage"),
      s = o(".site-navbar"),
      e = o("#navbarCollapse"),
      t = o(".site-navbar .navbar-toggler-alternative"),
      i = (o("#navigation"), s.attr("data-navbar-base") ? s.attr("data-navbar-base") : ""),
      r = s.attr("data-navbar-toggled") ? s.attr("data-navbar-toggled") : "",
      c = s.attr("data-navbar-scrolled") ? s.attr("data-navbar-scrolled") : "",
      d = o("a.backtotop");

   function u() {
      return Math.max(o(window).width(), window.innerWidth)
   }

   function v() {
      return Math.max(o(window).height(), window.innerHeight)
   }

   function f() {
      1200 <= u() && 768 <= v() ? n.removeClass("layout-mobile") : n.addClass("layout-mobile")
   }

   function p() {
      var e;
      0 < a.length ? (e = [], a.children("section").each(function () {
         var a = o(this).data("anchor");
         void 0 !== a && e.push(a)
      }), Waypoint.destroyAll(), 1200 <= u() && 768 <= v() ? a.hasClass("fullpage-wrapper") && !a.hasClass("fp-destroyed") || (o(".ln-section").each(function () {
         var a = o(this);
         parseInt(a.innerHeight(), 10) > v() && a.addClass("is-scrollable")
      }), n.addClass("ln-fullpage-active"), a.fullpage({
         menu: "#navigation",
         lockAnchors: !1,
         anchors: e,
         scrollingSpeed: 700,
         autoScrolling: !0,
         fitToSection: !0,
         fitToSectionDelay: 700,
         scrollBar: !1,
         easingcss3: "cubic-bezier(0.54, 0.18, 0.36, 0.81)",
         loopBottom: !1,
         loopTop: !1,
         scrollOverflow: !0,
         animateAnchor: !0,
         recordHistory: !1,
         controlArrows: !1,
         verticalCentered: !1,
         paddingTop: !1,
         paddingBottom: !1,
         sectionSelector: ".ln-section",
         slideSelector: ".ln-slide",
         onLeave: function (a, e, t) {
            1 === e ? (n.addClass("ln-fullpage-intro-active"), d.removeClass("active")) : (n.removeClass("ln-fullpage-intro-active"), d.addClass("active"));
            var l = o(".ln-section").eq(e - 1).attr("data-overlay-color"),
               s = parseInt(o(".ln-section").eq(e - 1).attr("data-overlay-opacity"), 10);
            l && o(".overlay-global-color").css("background-color", l), s && o(".overlay-global-color").css("opacity", s / 100), b("section", o(".ln-section").eq(e - 1)), m(o(".ln-section").eq(e - 1).attr("data-ui")), g(e)
         },
         afterLoad: function (a, e) {
            1 == e ? (n.addClass("ln-fullpage-intro-active"), d.removeClass("active")) : d.addClass("active"), o(".animated").each(function () {
               var a = o(this),
                  e = a.attr("data-animation") || "fadeInUp",
                  t = parseInt(a.attr("data-animation-delay"), 10) || 0;
               a.parents(".ln-section").hasClass("active") ? a.hasClass("visible") || (t ? setTimeout(function () {
                  a.addClass(e + " visible")
               }, t) : a.addClass(e + " visible")) : a.removeClass(e + " visible")
            })
         },
         afterRender: function () {
            var a = o(".ln-section").eq(0).attr("data-overlay-color"),
               e = parseInt(o(".ln-section").eq(0).attr("data-overlay-opacity"), 10);
            a && o(".overlay-global-color").css("background-color", a), e && o(".overlay-global-color").css("opacity", e / 100), b("section", o(".ln-section").eq(0)), m(o(".ln-section").eq(0).attr("data-ui"))
         }
      })) : (a.hasClass("fullpage-wrapper") && !a.hasClass("fp-destroyed") && (n.removeClass("ln-fullpage-active ln-fullpage-intro-active ui-light ui-dark"), o.fn.fullpage.destroy("all"), o(".ln-section").removeClass("is-scrollable")), y())) : (n.removeClass("ln-fullpage-active ln-fullpage-intro-active ui-light ui-dark"), o(".ln-section").removeClass("is-scrollable"), y())
   }

   function m(a) {
      "light" === a ? n.removeClass("ui-dark").addClass("ui-light") : "dark" === a ? n.removeClass("ui-light").addClass("ui-dark") : n.removeClass("ui-dark ui-light")
   }

   function g(a) {
      var e, t, l;
      1200 <= u() && (t = "none" !== a || n.hasClass("ln-fullpage-active") ? (e = v() * (a - 1), o(".ln-section").length * v()) : (e = o(window).scrollTop(), o(document).height()), l = e / (t - o(window).height()) * 100, o(".scroll-progress .progress").css("height", l + "%"))
   }

   function h() {
      var a = o('a.scrollto, .site-navbar a[href^="#"]');
      a.off("click"), a.on("click", function (a) {
         a.preventDefault();
         var e = o(this).attr("href");
         n.hasClass("ln-fullpage-active") ? (e = e.substr(1), o.fn.fullpage.moveTo(e)) : ((o(this).parents("li").attr("data-menuanchor") || 0 < o('[data-anchor="' + e.substr(1) + '"]').length) && (e = o('[data-anchor="' + e.substr(1) + '"]')), o.smoothScroll({
            offset: 0,
            easing: "swing",
            speed: 800,
            scrollTarget: e,
            preventDefault: !1
         }))
      }), e.on("show.bs.collapse", function () {
         s.addClass("navbar-toggled-show"), b("toggled")
      }), e.on("hidden.bs.collapse", function () {
         s.removeClass("navbar-toggled-show"), s.hasClass("scrolled") ? b("scrolled") : b()
      }), o(document).on("click touchstart", function (a) {
         o(".site-navbar").is(a.target) || 0 < o(a.target).parents(".site-navbar").length || o(".site-navbar").is(a.target) || o(a.target).hasClass("navbar-toggler") || "true" === t.attr("aria-expanded") && t.trigger("click")
      })
   }

   function b(a, e) {
      var t;
      l === a && "" != a && null != a && "section" !== a || ("toggled" === a && r ? s.removeClass("navbar-light navbar-dark", i, c).addClass(r) : "scrolled" === a && c ? s.removeClass("navbar-light navbar-dark", i, r).addClass(c) : "section" === a ? (t = e.attr("data-navbar")) ? s.removeClass("navbar-light navbar-dark", i, r, c).addClass(t) : s.removeClass("navbar-light navbar-dark", r, c).addClass(i) : i && s.removeClass("navbar-light navbar-dark", r, c).addClass(i), s.hasClass("navbar-light") ? o("[data-on-navbar-light]").each(function () {
         var a = o(this),
            e = a.attr("data-on-navbar-light") ? a.attr("data-on-navbar-light") : "",
            t = a.attr("data-on-navbar-dark") ? a.attr("data-on-navbar-dark") : "";
         a.removeClass(t).addClass(e)
      }) : s.hasClass("navbar-dark") && o("[data-on-navbar-dark]").each(function () {
         var a = o(this),
            e = a.attr("data-on-navbar-light") ? a.attr("data-on-navbar-light") : "",
            t = a.attr("data-on-navbar-dark") ? a.attr("data-on-navbar-dark") : "";
         a.removeClass(e).addClass(t)
      }), l = a)
   }

   function C() {
      var a = o(window).scrollTop();
      n.hasClass("ln-fullpage-active") || (576 <= u() && 100 < a ? d.addClass("active") : d.removeClass("active")), d.off("click"), d.on("click", function (a) {
         var e;
         a.preventDefault(), n.hasClass("ln-fullpage-active") ? o.fn.fullpage.moveTo(1) : (e = o(this).attr("href"), o.smoothScroll({
            offset: 0,
            easing: "swing",
            speed: 800,
            scrollTarget: e,
            preventDefault: !1
         }))
      })
   }

   function y() {
      o(".animated").each(function () {
         var a = o(this);
         new Waypoint({
            element: a,
            handler: function (a) {
               var e = this.element,
                  t = e.attr("data-animation"),
                  l = parseInt(e.attr("data-animation-delay"), 10);
               e.hasClass("visible") || (l ? setTimeout(function () {
                  e.addClass(t + " visible")
               }, l) : e.addClass(t + " visible")), this.destroy()
            },
            offset: "100%"
         })
      })
   }

   function w() {
      var a = o(".slider");
      0 < a.length && (992 <= u() && 768 <= v() ? a.hasClass("slick-initialized") || a.slick({
         slidesToShow: 1,
         infinite: !0,
         nextArrow: '<button type="button" class="slick-next"><i class="fas fa-angle-right"></i></button>',
         prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-angle-left"></i></button>'
      }) : a.hasClass("slick-initialized") && a.slick("unslick"))
   }
   window.addEventListener("load", function () {
      document.querySelector("body").classList.add("loaded")
   }), o(document).ready(function (a) {
      var e, t, l, s;
      a("html, body").scrollTop(0), f(), w(), p(), h(), (e = o(".bg-image-holder")).length && e.each(function () {
            var a = o(this),
               e = a.children("img").attr("src");
            a.css("background-image", "url(" + e + ")").children("img").hide()
         }), 0 < o(".overlay-global").length && o(".ln-section").each(function () {
            var a = o(this),
               e = parseInt(a.attr("data-overlay-opacity"), 10),
               t = a.attr("data-overlay-color");
            t && a.find(".overlay.has-mobile-overlay .overlay-inner").css("background-color", t), e && a.find(".overlay.has-mobile-overlay .overlay-inner").css("opacity", e / 100)
         }), n.hasClass("mobile") && o(".video-wrapper").css("display", "none"), o("[data-gradient-bg]").each(function (a, e) {
            var t = o(this),
               l = "granim-" + a,
               s = (s = (s = t.attr("data-gradient-bg")).replace(" ", "")).replace(/'/g, '"');
            s = JSON.parse(s), t.prepend('<canvas id="' + l + '"></canvas>');
            new Granim({
               element: "#" + l,
               name: "basic-gradient",
               direction: "left-right",
               opacity: [1, 1],
               isPausedWhenNotInView: !0,
               states: {
                  "default-state": {
                     gradients: s
                  }
               }
            })
         }),
         function () {
            if (0 < document.querySelectorAll(".mfp-image").length || 0 < document.querySelectorAll(".mfp-gallery").length || 0 < document.querySelectorAll(".mfp-iframe").length || 0 < document.querySelectorAll(".mfp-ajax").length || 0 < document.querySelectorAll(".open-popup-link").length) {
               if (!o().magnificPopup) return console.log("MagnificPopup: magnificPopup not defined.");
               o(".mfp-image").magnificPopup({
                  type: "image",
                  closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
                  removalDelay: 300,
                  mainClass: "mfp-fade"
               }), o(".mfp-gallery").each(function () {
                  o(this).magnificPopup({
                     delegate: "a",
                     type: "image",
                     gallery: {
                        enabled: !0
                     },
                     arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                     closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
                     removalDelay: 300,
                     mainClass: "mfp-fade"
                  })
               }), o(".mfp-iframe").magnificPopup({
                  type: "iframe",
                  iframe: {
                     patterns: {
                        youtube: {
                           index: "youtube.com/",
                           id: "v=",
                           src: "//www.youtube.com/embed/%id%?autoplay=1"
                        },
                        vimeo: {
                           index: "vimeo.com/",
                           id: "/",
                           src: "//player.vimeo.com/video/%id%?autoplay=1"
                        },
                        gmaps: {
                           index: "//maps.google.",
                           src: "%id%&output=embed"
                        }
                     },
                     srcAction: "iframe_src"
                  },
                  closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
                  removalDelay: 300,
                  mainClass: "mfp-fade"
               }), o(".mfp-ajax").magnificPopup({
                  type: "ajax",
                  ajax: {
                     settings: null,
                     cursor: "mfp-ajax-cur",
                     tError: '<a href="%url%">The content</a> could not be loaded.'
                  },
                  midClick: !0,
                  closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
                  removalDelay: 300,
                  mainClass: "mfp-fade",
                  callbacks: {
                     ajaxContentAdded: function (a) {
                        ln_Slider()
                     }
                  }
               }), o(".open-popup-link").magnificPopup({
                  type: "inline",
                  midClick: !0,
                  closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
                  removalDelay: 300,
                  mainClass: "mfp-zoom-in"
               }), o(".popup-modal-dismiss").on("click", function (a) {
                  a.preventDefault(), o.magnificPopup.close()
               })
            }
         }(), 0 < (t = o(".countdown[data-countdown]")).length && t.each(function () {
            var e = o(this),
               a = e.data("countdown");
            e.countdown(a, function (a) {
               e.html(a.strftime('<div class="countdown-container row"><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%-D</div><span class="title">Day%!d</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%H</div><span class="title">Hours</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%M</div><span class="title">Minutes</span></div></div><div class="col-6 col-sm-auto"><div class="countdown-item"><div class="number">%S</div><span class="title">Seconds</span></div></div></div>'))
            })
         }), 0 < (l = o(".subscribe-form")).length && l.each(function () {
            var a = o(this),
               t = a.find(".subscribe-form-result");
            a.find("form").validate({
               submitHandler: function (e) {
                  t.fadeOut(500), o(e).ajaxSubmit({
                     target: t,
                     dataType: "json",
                     resetForm: !0,
                     success: function (a) {
                        t.html(a.message).fadeIn(500), "error" != a.alert && (o(e).clearForm(), setTimeout(function () {
                           t.fadeOut(500)
                        }, 5e3))
                     }
                  })
               }
            })
         }), 0 < (s = o(".contact-form")).length && s.each(function () {
            var a = o(this),
               t = a.find(".contact-form-result");
            a.find("form").validate({
               submitHandler: function (e) {
                  t.fadeOut(500), o(e).ajaxSubmit({
                     target: t,
                     dataType: "json",
                     success: function (a) {
                        t.html(a.message).fadeIn(500), "error" != a.alert && (o(e).clearForm(), setTimeout(function () {
                           t.fadeOut(500)
                        }, 5e3))
                     }
                  })
               }
            })
         })
   }), o(window).on("load", function () {
      o(window).scroll()
   }), o(window).on("resize", function () {
      f(), w(), h(),
         function () {
            var a = o(window).scrollTop();
            if (1200 <= u() && "true" == t.attr("aria-expanded") && (s.removeClass("navbar-toggled-show"), e.removeClass("show").css("display", ""), t.attr("aria-expanded", "false").addClass("collapsed")), 0 < a) s.addClass("scrolled"), s.removeClass("scrolled-0"), s.hasClass("navbar-toggled-show") ? b("toggled") : b("scrolled");
            else if (s.removeClass("scrolled"), s.addClass("scrolled-0"), s.hasClass("navbar-toggled-show")) b("toggled");
            else {
               if (n.hasClass("ln-fullpage-active")) return;
               b()
            }
         }(), p(), g("none"), C()
   }), o(window).on("scroll", function () {
      g("none"), C(),
         function () {
            var a = o(window).scrollTop();
            if (!n.hasClass("ln-fullpage-active"))
               if (0 < a) {
                  if (s.hasClass("scrolled")) return;
                  s.addClass("scrolled"), s.removeClass("scrolled-0"), s.hasClass("navbar-toggled-show") ? b("toggled") : b("scrolled")
               } else s.removeClass("scrolled"), s.addClass("scrolled-0"), s.hasClass("navbar-toggled-show") ? b("toggled") : b()
         }()
   })
}(jQuery);
