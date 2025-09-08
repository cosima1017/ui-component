;((window._iconfont_svg_string_5016384 =
  '<svg><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M512 170.666667C323.477333 170.666667 170.666667 323.477333 170.666667 512s152.810667 341.333333 341.333333 341.333333 341.333333-152.810667 341.333333-341.333333h85.333334c0 235.648-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333v85.333334z"  ></path></symbol></svg>'),
  (n => {
    var t = (e = (e = document.getElementsByTagName('script'))[
        e.length - 1
      ]).getAttribute('data-injectcss'),
      e = e.getAttribute('data-disable-injectsvg')
    if (!e) {
      var o,
        i,
        d,
        c,
        s,
        a = function (t, e) {
          e.parentNode.insertBefore(t, e)
        }
      if (t && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
          )
        } catch (t) {
          console && console.log(t)
        }
      }
      ;((o = function () {
        var t,
          e = document.createElement('div')
        ;((e.innerHTML = n._iconfont_svg_string_5016384),
          (e = e.getElementsByTagName('svg')[0]) &&
            (e.setAttribute('aria-hidden', 'true'),
            (e.style.position = 'absolute'),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = 'hidden'),
            (e = e),
            (t = document.body).firstChild
              ? a(e, t.firstChild)
              : t.appendChild(e)))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                ;(document.removeEventListener('DOMContentLoaded', i, !1), o())
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((d = o),
            (c = n.document),
            (s = !1),
            r(),
            (c.onreadystatechange = function () {
              'complete' == c.readyState && ((c.onreadystatechange = null), l())
            })))
    }
    function l() {
      s || ((s = !0), d())
    }
    function r() {
      try {
        c.documentElement.doScroll('left')
      } catch (t) {
        return void setTimeout(r, 50)
      }
      l()
    }
  })(window))
