/* http://prismjs.com/download.html?themes=prism&languages=markup+clike+javascript */
/* http://prismjs.com/download.html?themes=prism&languages=markup+clike+javascript */
self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {};var Prism = function() {
  var e = /\blang(?:uage)?-(?!\*)(\w+)\b/i, t = self.Prism = {util:{encode:function(e) {return e instanceof n ? new n(e.type, t.util.encode(e.content)) : "Array" === t.util.type(e) ? e.map(t.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")}, type:function(e) {return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]}, clone:function(e) {
    var n = t.util.type(e);switch (n){case "Object":var r = {};for (var a in e)e.hasOwnProperty(a) && (r[a] = t.util.clone(e[a]));return r;case "Array":return e.slice()}return e
  }}, languages:{extend:function(e, n) {
    var r = t.util.clone(t.languages[e]);for (var a in n)r[a] = n[a];return r
  }, insertBefore:function(e, n, r, a) {
    a = a || t.languages;var i = a[e], o = {};for (var l in i)if (i.hasOwnProperty(l)) {
      if (l == n)for (var s in r)r.hasOwnProperty(s) && (o[s] = r[s]);o[l] = i[l]
    }return a[e] = o
  }, DFS:function(e, n) {for (var r in e)n.call(e, r, e[r]), "Object" === t.util.type(e) && t.languages.DFS(e[r], n)}}, highlightAll:function(e, n) {for (var r, a = document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'), i = 0; r = a[i++];)t.highlightElement(r, e === !0, n)}, highlightElement:function(r, a, i) {
    for (var o, l, s = r; s && !e.test(s.className);)s = s.parentNode;if (s && (o = (s.className.match(e) || [, ""])[1], l = t.languages[o]), l) {
      r.className = r.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o, s = r.parentNode, /pre/i.test(s.nodeName) && (s.className = s.className.replace(e, "").replace(/\s+/g, " ") + " language-" + o);var c = r.textContent;if (c) {
        var g = {element:r, language:o, grammar:l, code:c};if (t.hooks.run("before-highlight", g), a && self.Worker) {
          var u = new Worker(t.filename);u.onmessage = function(e) {g.highlightedCode = n.stringify(JSON.parse(e.data), o), t.hooks.run("before-insert", g), g.element.innerHTML = g.highlightedCode, i && i.call(g.element), t.hooks.run("after-highlight", g)}, u.postMessage(JSON.stringify({language:g.language, code:g.code}))
        }else g.highlightedCode = t.highlight(g.code, g.grammar, g.language), t.hooks.run("before-insert", g), g.element.innerHTML = g.highlightedCode, i && i.call(r), t.hooks.run("after-highlight", g)
      }
    }
  }, highlight:function(e, r, a) {
    var i = t.tokenize(e, r);return n.stringify(t.util.encode(i), a)
  }, tokenize:function(e, n) {
    var r = t.Token, a = [e], i = n.rest;if (i) {
      for (var o in i)n[o] = i[o];delete n.rest
    }e:for (var o in n)if (n.hasOwnProperty(o) && n[o]) {
      var l = n[o];l = "Array" === t.util.type(l) ? l : [l];for (var s = 0; s < l.length; ++s) {
        var c = l[s], g = c.inside, u = !!c.lookbehind, f = 0;c = c.pattern || c;for (var h = 0; h < a.length; h++) {
          var d = a[h];if (a.length > e.length)break e;if (!(d instanceof r)) {
            c.lastIndex = 0;var p = c.exec(d);if (p) {
              u && (f = p[1].length);var m = p.index - 1 + f, p = p[0].slice(f), v = p.length, y = m + v, k = d.slice(0, m + 1), b = d.slice(y + 1), w = [h, 1];k && w.push(k);var N = new r(o, g ? t.tokenize(p, g) : p);w.push(N), b && w.push(b), Array.prototype.splice.apply(a, w)
            }
          }
        }
      }
    }return a
  }, hooks:{all:{}, add:function(e, n) {
    var r = t.hooks.all;r[e] = r[e] || [], r[e].push(n)
  }, run:function(e, n) {
    var r = t.hooks.all[e];if (r && r.length)for (var a, i = 0; a = r[i++];)a(n)
  }}}, n = t.Token = function(e, t) {this.type = e, this.content = t};if (n.stringify = function(e, r, a) {
    if ("string" == typeof e)return e;if ("[object Array]" == Object.prototype.toString.call(e))return e.map(function(t) {return n.stringify(t, r, e)}).join("");var i = {type:e.type, content:n.stringify(e.content, r, a), tag:"span", classes:["token", e.type], attributes:{}, language:r, parent:a};"comment" == i.type && (i.attributes.spellcheck = "true"), t.hooks.run("wrap", i);var o = "";for (var l in i.attributes)o += l + '="' + (i.attributes[l] || "") + '"';return "<" + i.tag + ' class="' + i.classes.join(" ") + '" ' + o + ">" + i.content + "</" + i.tag + ">"
  }, !self.document)return self.addEventListener ? (self.addEventListener("message", function(e) {
    var n = JSON.parse(e.data), r = n.language, a = n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(a, t.languages[r])))), self.close()
  }, !1), self.Prism) : self.Prism;var r = document.getElementsByTagName("script");return r = r[r.length - 1], r && (t.filename = r.src, document.addEventListener && !r.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", t.highlightAll)), self.Prism
}();"undefined" != typeof module && module.exports && (module.exports = Prism);;
Prism.languages.markup = {comment:/<!--[\w\W]*?-->/g, prolog:/<\?.+?\?>/, doctype:/<!DOCTYPE.+?>/, cdata:/<!\[CDATA\[[\w\W]*?]]>/i, tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/gi, inside:{tag:{pattern:/^<\/?[\w:-]+/i, inside:{punctuation:/^<\/?/, namespace:/^[\w-]+?:/}}, "attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi, inside:{punctuation:/=|>|"/g}}, punctuation:/\/?>/g, "attr-name":{pattern:/[\w:-]+/g, inside:{namespace:/^[\w-]+?:/}}}}, entity:/\&#?[\da-z]{1,8};/gi}, Prism.hooks.add("wrap", function(t) {"entity" === t.type && (t.attributes.title = t.content.replace(/&amp;/, "&"))});;
Prism.languages.clike = {comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//g, lookbehind:!0}, {pattern:/(^|[^\\:])\/\/.*?(\r?\n|$)/g, lookbehind:!0}], string:/("|')(\\?.)*?\1/g, "class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/gi, lookbehind:!0, inside:{punctuation:/(\.|\\)/}}, keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g, "boolean":/\b(true|false)\b/g, "function":{pattern:/[a-z0-9_]+\(/gi, inside:{punctuation:/\(/}}, number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g, operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|\~|\^|\%/g, ignore:/&(lt|gt|amp);/gi, punctuation:/[{}[\];(),.:]/g};;
Prism.languages.javascript = Prism.languages.extend("clike", {keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/g, number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g}), Prism.languages.insertBefore("javascript", "keyword", {regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g, lookbehind:!0}}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/gi, inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/gi, inside:Prism.languages.markup.tag.inside}, rest:Prism.languages.javascript}}});;
