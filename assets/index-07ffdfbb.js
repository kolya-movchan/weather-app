var lm = Object.defineProperty
var cm = (e, t, n) =>
  t in e
    ? lm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var rt = (e, t, n) => (cm(e, typeof t != 'symbol' ? t + '' : t, n), n)
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i)
  new MutationObserver(i => {
    for (const o of i)
      if (o.type === 'childList')
        for (const r of o.addedNodes)
          r.tagName === 'LINK' && r.rel === 'modulepreload' && s(r)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
        ? (o.credentials = 'omit')
        : (o.credentials = 'same-origin'),
      o
    )
  }
  function s(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
function wa(e, t) {
  const n = Object.create(null),
    s = e.split(',')
  for (let i = 0; i < s.length; i++) n[s[i]] = !0
  return t ? i => !!n[i.toLowerCase()] : i => !!n[i]
}
const Et = {},
  ss = [],
  Me = () => {},
  um = () => !1,
  dm = /^on[^a-z]/,
  Mo = e => dm.test(e),
  ya = e => e.startsWith('onUpdate:'),
  $t = Object.assign,
  _a = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  fm = Object.prototype.hasOwnProperty,
  mt = (e, t) => fm.call(e, t),
  st = Array.isArray,
  is = e => To(e) === '[object Map]',
  xd = e => To(e) === '[object Set]',
  ct = e => typeof e == 'function',
  Nt = e => typeof e == 'string',
  xa = e => typeof e == 'symbol',
  Mt = e => e !== null && typeof e == 'object',
  vd = e => Mt(e) && ct(e.then) && ct(e.catch),
  Cd = Object.prototype.toString,
  To = e => Cd.call(e),
  hm = e => To(e).slice(8, -1),
  kd = e => To(e) === '[object Object]',
  va = e => Nt(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  Xi = wa(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Lo = e => {
    const t = Object.create(null)
    return n => t[n] || (t[n] = e(n))
  },
  pm = /-(\w)/g,
  je = Lo(e => e.replace(pm, (t, n) => (n ? n.toUpperCase() : ''))),
  gm = /\B([A-Z])/g,
  ys = Lo(e => e.replace(gm, '-$1').toLowerCase()),
  Ro = Lo(e => e.charAt(0).toUpperCase() + e.slice(1)),
  pr = Lo(e => (e ? `on${Ro(e)}` : '')),
  Qs = (e, t) => !Object.is(e, t),
  Ji = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  co = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n })
  },
  Fr = e => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  },
  mm = e => {
    const t = Nt(e) ? Number(e) : NaN
    return isNaN(t) ? e : t
  }
let Jl
const Br = () =>
  Jl ||
  (Jl =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
function Ca(e) {
  if (st(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = Nt(s) ? _m(s) : Ca(s)
      if (i) for (const o in i) t[o] = i[o]
    }
    return t
  } else {
    if (Nt(e)) return e
    if (Mt(e)) return e
  }
}
const bm = /;(?![^(]*\))/g,
  wm = /:([^]+)/,
  ym = /\/\*[^]*?\*\//g
function _m(e) {
  const t = {}
  return (
    e
      .replace(ym, '')
      .split(bm)
      .forEach(n => {
        if (n) {
          const s = n.split(wm)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function fn(e) {
  let t = ''
  if (Nt(e)) t = e
  else if (st(e))
    for (let n = 0; n < e.length; n++) {
      const s = fn(e[n])
      s && (t += s + ' ')
    }
  else if (Mt(e)) for (const n in e) e[n] && (t += n + ' ')
  return t.trim()
}
const xm =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  vm = wa(xm)
function Sd(e) {
  return !!e || e === ''
}
const Ce = e =>
    Nt(e)
      ? e
      : e == null
      ? ''
      : st(e) || (Mt(e) && (e.toString === Cd || !ct(e.toString)))
      ? JSON.stringify(e, Pd, 2)
      : String(e),
  Pd = (e, t) =>
    t && t.__v_isRef
      ? Pd(e, t.value)
      : is(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, i]) => ((n[`${s} =>`] = i), n),
            {}
          )
        }
      : xd(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : Mt(t) && !st(t) && !kd(t)
      ? String(t)
      : t
let Se
class Cm {
  constructor(t = !1) {
    ;(this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Se),
      !t && Se && (this.index = (Se.scopes || (Se.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Se
      try {
        return (Se = this), t()
      } finally {
        Se = n
      }
    }
  }
  on() {
    Se = this
  }
  off() {
    Se = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop()
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index))
      }
      ;(this.parent = void 0), (this._active = !1)
    }
  }
}
function km(e, t = Se) {
  t && t.active && t.effects.push(e)
}
function Sm() {
  return Se
}
const ka = e => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  Ed = e => (e.w & yn) > 0,
  Ad = e => (e.n & yn) > 0,
  Pm = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= yn
  },
  Em = e => {
    const { deps: t } = e
    if (t.length) {
      let n = 0
      for (let s = 0; s < t.length; s++) {
        const i = t[s]
        Ed(i) && !Ad(i) ? i.delete(e) : (t[n++] = i), (i.w &= ~yn), (i.n &= ~yn)
      }
      t.length = n
    }
  },
  Nr = new WeakMap()
let Is = 0,
  yn = 1
const zr = 30
let Ee
const $n = Symbol(''),
  $r = Symbol('')
class Sa {
  constructor(t, n = null, s) {
    ;(this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      km(this, s)
  }
  run() {
    if (!this.active) return this.fn()
    let t = Ee,
      n = mn
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (
        (this.parent = Ee),
        (Ee = this),
        (mn = !0),
        (yn = 1 << ++Is),
        Is <= zr ? Pm(this) : Gl(this),
        this.fn()
      )
    } finally {
      Is <= zr && Em(this),
        (yn = 1 << --Is),
        (Ee = this.parent),
        (mn = n),
        (this.parent = void 0),
        this.deferStop && this.stop()
    }
  }
  stop() {
    Ee === this
      ? (this.deferStop = !0)
      : this.active &&
        (Gl(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function Gl(e) {
  const { deps: t } = e
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e)
    t.length = 0
  }
}
let mn = !0
const Od = []
function _s() {
  Od.push(mn), (mn = !1)
}
function xs() {
  const e = Od.pop()
  mn = e === void 0 ? !0 : e
}
function fe(e, t, n) {
  if (mn && Ee) {
    let s = Nr.get(e)
    s || Nr.set(e, (s = new Map()))
    let i = s.get(n)
    i || s.set(n, (i = ka())), Md(i)
  }
}
function Md(e, t) {
  let n = !1
  Is <= zr ? Ad(e) || ((e.n |= yn), (n = !Ed(e))) : (n = !e.has(Ee)),
    n && (e.add(Ee), Ee.deps.push(e))
}
function Ze(e, t, n, s, i, o) {
  const r = Nr.get(e)
  if (!r) return
  let a = []
  if (t === 'clear') a = [...r.values()]
  else if (n === 'length' && st(e)) {
    const c = Number(s)
    r.forEach((l, d) => {
      ;(d === 'length' || d >= c) && a.push(l)
    })
  } else
    switch ((n !== void 0 && a.push(r.get(n)), t)) {
      case 'add':
        st(e)
          ? va(n) && a.push(r.get('length'))
          : (a.push(r.get($n)), is(e) && a.push(r.get($r)))
        break
      case 'delete':
        st(e) || (a.push(r.get($n)), is(e) && a.push(r.get($r)))
        break
      case 'set':
        is(e) && a.push(r.get($n))
        break
    }
  if (a.length === 1) a[0] && Hr(a[0])
  else {
    const c = []
    for (const l of a) l && c.push(...l)
    Hr(ka(c))
  }
}
function Hr(e, t) {
  const n = st(e) ? e : [...e]
  for (const s of n) s.computed && Zl(s)
  for (const s of n) s.computed || Zl(s)
}
function Zl(e, t) {
  ;(e !== Ee || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const Am = wa('__proto__,__v_isRef,__isVue'),
  Td = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter(e => e !== 'arguments' && e !== 'caller')
      .map(e => Symbol[e])
      .filter(xa)
  ),
  Om = Pa(),
  Mm = Pa(!1, !0),
  Tm = Pa(!0),
  Ql = Lm()
function Lm() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach(t => {
      e[t] = function (...n) {
        const s = pt(this)
        for (let o = 0, r = this.length; o < r; o++) fe(s, 'get', o + '')
        const i = s[t](...n)
        return i === -1 || i === !1 ? s[t](...n.map(pt)) : i
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(t => {
      e[t] = function (...n) {
        _s()
        const s = pt(this)[t].apply(this, n)
        return xs(), s
      }
    }),
    e
  )
}
function Rm(e) {
  const t = pt(this)
  return fe(t, 'has', e), t.hasOwnProperty(e)
}
function Pa(e = !1, t = !1) {
  return function (s, i, o) {
    if (i === '__v_isReactive') return !e
    if (i === '__v_isReadonly') return e
    if (i === '__v_isShallow') return t
    if (i === '__v_raw' && o === (e ? (t ? Xm : Fd) : t ? Id : Dd).get(s))
      return s
    const r = st(s)
    if (!e) {
      if (r && mt(Ql, i)) return Reflect.get(Ql, i, o)
      if (i === 'hasOwnProperty') return Rm
    }
    const a = Reflect.get(s, i, o)
    return (xa(i) ? Td.has(i) : Am(i)) || (e || fe(s, 'get', i), t)
      ? a
      : te(a)
      ? r && va(i)
        ? a
        : a.value
      : Mt(a)
      ? e
        ? Nd(a)
        : Io(a)
      : a
  }
}
const Dm = Ld(),
  Im = Ld(!0)
function Ld(e = !1) {
  return function (n, s, i, o) {
    let r = n[s]
    if (cs(r) && te(r) && !te(i)) return !1
    if (
      !e &&
      (!uo(i) && !cs(i) && ((r = pt(r)), (i = pt(i))),
      !st(n) && te(r) && !te(i))
    )
      return (r.value = i), !0
    const a = st(n) && va(s) ? Number(s) < n.length : mt(n, s),
      c = Reflect.set(n, s, i, o)
    return (
      n === pt(o) && (a ? Qs(i, r) && Ze(n, 'set', s, i) : Ze(n, 'add', s, i)),
      c
    )
  }
}
function Fm(e, t) {
  const n = mt(e, t)
  e[t]
  const s = Reflect.deleteProperty(e, t)
  return s && n && Ze(e, 'delete', t, void 0), s
}
function Bm(e, t) {
  const n = Reflect.has(e, t)
  return (!xa(t) || !Td.has(t)) && fe(e, 'has', t), n
}
function Nm(e) {
  return fe(e, 'iterate', st(e) ? 'length' : $n), Reflect.ownKeys(e)
}
const Rd = { get: Om, set: Dm, deleteProperty: Fm, has: Bm, ownKeys: Nm },
  zm = {
    get: Tm,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    }
  },
  $m = $t({}, Rd, { get: Mm, set: Im }),
  Ea = e => e,
  Do = e => Reflect.getPrototypeOf(e)
function Pi(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const i = pt(e),
    o = pt(t)
  n || (t !== o && fe(i, 'get', t), fe(i, 'get', o))
  const { has: r } = Do(i),
    a = s ? Ea : n ? Ma : ti
  if (r.call(i, t)) return a(e.get(t))
  if (r.call(i, o)) return a(e.get(o))
  e !== i && e.get(t)
}
function Ei(e, t = !1) {
  const n = this.__v_raw,
    s = pt(n),
    i = pt(e)
  return (
    t || (e !== i && fe(s, 'has', e), fe(s, 'has', i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  )
}
function Ai(e, t = !1) {
  return (
    (e = e.__v_raw), !t && fe(pt(e), 'iterate', $n), Reflect.get(e, 'size', e)
  )
}
function tc(e) {
  e = pt(e)
  const t = pt(this)
  return Do(t).has.call(t, e) || (t.add(e), Ze(t, 'add', e, e)), this
}
function ec(e, t) {
  t = pt(t)
  const n = pt(this),
    { has: s, get: i } = Do(n)
  let o = s.call(n, e)
  o || ((e = pt(e)), (o = s.call(n, e)))
  const r = i.call(n, e)
  return (
    n.set(e, t), o ? Qs(t, r) && Ze(n, 'set', e, t) : Ze(n, 'add', e, t), this
  )
}
function nc(e) {
  const t = pt(this),
    { has: n, get: s } = Do(t)
  let i = n.call(t, e)
  i || ((e = pt(e)), (i = n.call(t, e))), s && s.call(t, e)
  const o = t.delete(e)
  return i && Ze(t, 'delete', e, void 0), o
}
function sc() {
  const e = pt(this),
    t = e.size !== 0,
    n = e.clear()
  return t && Ze(e, 'clear', void 0, void 0), n
}
function Oi(e, t) {
  return function (s, i) {
    const o = this,
      r = o.__v_raw,
      a = pt(r),
      c = t ? Ea : e ? Ma : ti
    return (
      !e && fe(a, 'iterate', $n), r.forEach((l, d) => s.call(i, c(l), c(d), o))
    )
  }
}
function Mi(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      o = pt(i),
      r = is(o),
      a = e === 'entries' || (e === Symbol.iterator && r),
      c = e === 'keys' && r,
      l = i[e](...s),
      d = n ? Ea : t ? Ma : ti
    return (
      !t && fe(o, 'iterate', c ? $r : $n),
      {
        next() {
          const { value: h, done: p } = l.next()
          return p
            ? { value: h, done: p }
            : { value: a ? [d(h[0]), d(h[1])] : d(h), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function nn(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function Hm() {
  const e = {
      get(o) {
        return Pi(this, o)
      },
      get size() {
        return Ai(this)
      },
      has: Ei,
      add: tc,
      set: ec,
      delete: nc,
      clear: sc,
      forEach: Oi(!1, !1)
    },
    t = {
      get(o) {
        return Pi(this, o, !1, !0)
      },
      get size() {
        return Ai(this)
      },
      has: Ei,
      add: tc,
      set: ec,
      delete: nc,
      clear: sc,
      forEach: Oi(!1, !0)
    },
    n = {
      get(o) {
        return Pi(this, o, !0)
      },
      get size() {
        return Ai(this, !0)
      },
      has(o) {
        return Ei.call(this, o, !0)
      },
      add: nn('add'),
      set: nn('set'),
      delete: nn('delete'),
      clear: nn('clear'),
      forEach: Oi(!0, !1)
    },
    s = {
      get(o) {
        return Pi(this, o, !0, !0)
      },
      get size() {
        return Ai(this, !0)
      },
      has(o) {
        return Ei.call(this, o, !0)
      },
      add: nn('add'),
      set: nn('set'),
      delete: nn('delete'),
      clear: nn('clear'),
      forEach: Oi(!0, !0)
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach(o => {
      ;(e[o] = Mi(o, !1, !1)),
        (n[o] = Mi(o, !0, !1)),
        (t[o] = Mi(o, !1, !0)),
        (s[o] = Mi(o, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [jm, Wm, Vm, Um] = Hm()
function Aa(e, t) {
  const n = t ? (e ? Um : Vm) : e ? Wm : jm
  return (s, i, o) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
      ? e
      : i === '__v_raw'
      ? s
      : Reflect.get(mt(n, i) && i in s ? n : s, i, o)
}
const qm = { get: Aa(!1, !1) },
  Km = { get: Aa(!1, !0) },
  Ym = { get: Aa(!0, !1) },
  Dd = new WeakMap(),
  Id = new WeakMap(),
  Fd = new WeakMap(),
  Xm = new WeakMap()
function Jm(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Gm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Jm(hm(e))
}
function Io(e) {
  return cs(e) ? e : Oa(e, !1, Rd, qm, Dd)
}
function Bd(e) {
  return Oa(e, !1, $m, Km, Id)
}
function Nd(e) {
  return Oa(e, !0, zm, Ym, Fd)
}
function Oa(e, t, n, s, i) {
  if (!Mt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = i.get(e)
  if (o) return o
  const r = Gm(e)
  if (r === 0) return e
  const a = new Proxy(e, r === 2 ? s : n)
  return i.set(e, a), a
}
function os(e) {
  return cs(e) ? os(e.__v_raw) : !!(e && e.__v_isReactive)
}
function cs(e) {
  return !!(e && e.__v_isReadonly)
}
function uo(e) {
  return !!(e && e.__v_isShallow)
}
function Fo(e) {
  return os(e) || cs(e)
}
function pt(e) {
  const t = e && e.__v_raw
  return t ? pt(t) : e
}
function zd(e) {
  return co(e, '__v_skip', !0), e
}
const ti = e => (Mt(e) ? Io(e) : e),
  Ma = e => (Mt(e) ? Nd(e) : e)
function $d(e) {
  mn && Ee && ((e = pt(e)), Md(e.dep || (e.dep = ka())))
}
function Hd(e, t) {
  e = pt(e)
  const n = e.dep
  n && Hr(n)
}
function te(e) {
  return !!(e && e.__v_isRef === !0)
}
function Rt(e) {
  return jd(e, !1)
}
function Ta(e) {
  return jd(e, !0)
}
function jd(e, t) {
  return te(e) ? e : new Zm(e, t)
}
class Zm {
  constructor(t, n) {
    ;(this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : pt(t)),
      (this._value = n ? t : ti(t))
  }
  get value() {
    return $d(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || uo(t) || cs(t)
    ;(t = n ? t : pt(t)),
      Qs(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : ti(t)), Hd(this))
  }
}
function He(e) {
  return te(e) ? e.value : e
}
const Qm = {
  get: (e, t, n) => He(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t]
    return te(i) && !te(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function Wd(e) {
  return os(e) ? e : new Proxy(e, Qm)
}
class tb {
  constructor(t, n, s, i) {
    ;(this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this._dirty = !0),
      (this.effect = new Sa(t, () => {
        this._dirty || ((this._dirty = !0), Hd(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = pt(this)
    return (
      $d(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
function eb(e, t, n = !1) {
  let s, i
  const o = ct(e)
  return (
    o ? ((s = e), (i = Me)) : ((s = e.get), (i = e.set)),
    new tb(s, i, o || !i, n)
  )
}
function bn(e, t, n, s) {
  let i
  try {
    i = s ? e(...s) : e()
  } catch (o) {
    Bo(o, t, n)
  }
  return i
}
function ye(e, t, n, s) {
  if (ct(e)) {
    const o = bn(e, t, n, s)
    return (
      o &&
        vd(o) &&
        o.catch(r => {
          Bo(r, t, n)
        }),
      o
    )
  }
  const i = []
  for (let o = 0; o < e.length; o++) i.push(ye(e[o], t, n, s))
  return i
}
function Bo(e, t, n, s = !0) {
  const i = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const r = t.proxy,
      a = n
    for (; o; ) {
      const l = o.ec
      if (l) {
        for (let d = 0; d < l.length; d++) if (l[d](e, r, a) === !1) return
      }
      o = o.parent
    }
    const c = t.appContext.config.errorHandler
    if (c) {
      bn(c, null, 10, [e, r, a])
      return
    }
  }
  nb(e, n, i, s)
}
function nb(e, t, n, s = !0) {
  console.error(e)
}
let ei = !1,
  jr = !1
const Qt = []
let ze = 0
const rs = []
let Ye = null,
  Dn = 0
const Vd = Promise.resolve()
let La = null
function Ud(e) {
  const t = La || Vd
  return e ? t.then(this ? e.bind(this) : e) : t
}
function sb(e) {
  let t = ze + 1,
    n = Qt.length
  for (; t < n; ) {
    const s = (t + n) >>> 1
    ni(Qt[s]) < e ? (t = s + 1) : (n = s)
  }
  return t
}
function Ra(e) {
  ;(!Qt.length || !Qt.includes(e, ei && e.allowRecurse ? ze + 1 : ze)) &&
    (e.id == null ? Qt.push(e) : Qt.splice(sb(e.id), 0, e), qd())
}
function qd() {
  !ei && !jr && ((jr = !0), (La = Vd.then(Yd)))
}
function ib(e) {
  const t = Qt.indexOf(e)
  t > ze && Qt.splice(t, 1)
}
function ob(e) {
  st(e)
    ? rs.push(...e)
    : (!Ye || !Ye.includes(e, e.allowRecurse ? Dn + 1 : Dn)) && rs.push(e),
    qd()
}
function ic(e, t = ei ? ze + 1 : 0) {
  for (; t < Qt.length; t++) {
    const n = Qt[t]
    n && n.pre && (Qt.splice(t, 1), t--, n())
  }
}
function Kd(e) {
  if (rs.length) {
    const t = [...new Set(rs)]
    if (((rs.length = 0), Ye)) {
      Ye.push(...t)
      return
    }
    for (Ye = t, Ye.sort((n, s) => ni(n) - ni(s)), Dn = 0; Dn < Ye.length; Dn++)
      Ye[Dn]()
    ;(Ye = null), (Dn = 0)
  }
}
const ni = e => (e.id == null ? 1 / 0 : e.id),
  rb = (e, t) => {
    const n = ni(e) - ni(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return n
  }
function Yd(e) {
  ;(jr = !1), (ei = !0), Qt.sort(rb)
  const t = Me
  try {
    for (ze = 0; ze < Qt.length; ze++) {
      const n = Qt[ze]
      n && n.active !== !1 && bn(n, null, 14)
    }
  } finally {
    ;(ze = 0),
      (Qt.length = 0),
      Kd(),
      (ei = !1),
      (La = null),
      (Qt.length || rs.length) && Yd()
  }
}
function ab(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || Et
  let i = n
  const o = t.startsWith('update:'),
    r = o && t.slice(7)
  if (r && r in s) {
    const d = `${r === 'modelValue' ? 'model' : r}Modifiers`,
      { number: h, trim: p } = s[d] || Et
    p && (i = n.map(m => (Nt(m) ? m.trim() : m))), h && (i = n.map(Fr))
  }
  let a,
    c = s[(a = pr(t))] || s[(a = pr(je(t)))]
  !c && o && (c = s[(a = pr(ys(t)))]), c && ye(c, e, 6, i)
  const l = s[a + 'Once']
  if (l) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[a]) return
    ;(e.emitted[a] = !0), ye(l, e, 6, i)
  }
}
function Xd(e, t, n = !1) {
  const s = t.emitsCache,
    i = s.get(e)
  if (i !== void 0) return i
  const o = e.emits
  let r = {},
    a = !1
  if (!ct(e)) {
    const c = l => {
      const d = Xd(l, t, !0)
      d && ((a = !0), $t(r, d))
    }
    !n && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !o && !a
    ? (Mt(e) && s.set(e, null), null)
    : (st(o) ? o.forEach(c => (r[c] = null)) : $t(r, o),
      Mt(e) && s.set(e, r),
      r)
}
function No(e, t) {
  return !e || !Mo(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      mt(e, t[0].toLowerCase() + t.slice(1)) || mt(e, ys(t)) || mt(e, t))
}
let pe = null,
  Jd = null
function fo(e) {
  const t = pe
  return (pe = e), (Jd = (e && e.type.__scopeId) || null), t
}
function us(e, t = pe, n) {
  if (!t || e._n) return e
  const s = (...i) => {
    s._d && mc(-1)
    const o = fo(t)
    let r
    try {
      r = e(...i)
    } finally {
      fo(o), s._d && mc(1)
    }
    return r
  }
  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function gr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    props: o,
    propsOptions: [r],
    slots: a,
    attrs: c,
    emit: l,
    render: d,
    renderCache: h,
    data: p,
    setupState: m,
    ctx: b,
    inheritAttrs: w
  } = e
  let x, C
  const S = fo(e)
  try {
    if (n.shapeFlag & 4) {
      const A = i || s
      ;(x = Ne(d.call(A, A, h, o, m, p, b))), (C = c)
    } else {
      const A = t
      ;(x = Ne(
        A.length > 1 ? A(o, { attrs: c, slots: a, emit: l }) : A(o, null)
      )),
        (C = t.props ? c : lb(c))
    }
  } catch (A) {
    ;(Us.length = 0), Bo(A, e, 1), (x = Ot(Le))
  }
  let D = x
  if (C && w !== !1) {
    const A = Object.keys(C),
      { shapeFlag: L } = D
    A.length && L & 7 && (r && A.some(ya) && (C = cb(C, r)), (D = _n(D, C)))
  }
  return (
    n.dirs && ((D = _n(D)), (D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (D.transition = n.transition),
    (x = D),
    fo(S),
    x
  )
}
const lb = e => {
    let t
    for (const n in e)
      (n === 'class' || n === 'style' || Mo(n)) && ((t || (t = {}))[n] = e[n])
    return t
  },
  cb = (e, t) => {
    const n = {}
    for (const s in e) (!ya(s) || !(s.slice(9) in t)) && (n[s] = e[s])
    return n
  }
function ub(e, t, n) {
  const { props: s, children: i, component: o } = e,
    { props: r, children: a, patchFlag: c } = t,
    l = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return s ? oc(s, r, l) : !!r
    if (c & 8) {
      const d = t.dynamicProps
      for (let h = 0; h < d.length; h++) {
        const p = d[h]
        if (r[p] !== s[p] && !No(l, p)) return !0
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : s === r
      ? !1
      : s
      ? r
        ? oc(s, r, l)
        : !0
      : !!r
  return !1
}
function oc(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let i = 0; i < s.length; i++) {
    const o = s[i]
    if (t[o] !== e[o] && !No(n, o)) return !0
  }
  return !1
}
function db({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent)
}
const fb = e => e.__isSuspense
function hb(e, t) {
  t && t.pendingBranch
    ? st(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : ob(e)
}
const Ti = {}
function js(e, t, n) {
  return Gd(e, t, n)
}
function Gd(
  e,
  t,
  { immediate: n, deep: s, flush: i, onTrack: o, onTrigger: r } = Et
) {
  var a
  const c = Sm() === ((a = Kt) == null ? void 0 : a.scope) ? Kt : null
  let l,
    d = !1,
    h = !1
  if (
    (te(e)
      ? ((l = () => e.value), (d = uo(e)))
      : os(e)
      ? ((l = () => e), (s = !0))
      : st(e)
      ? ((h = !0),
        (d = e.some(A => os(A) || uo(A))),
        (l = () =>
          e.map(A => {
            if (te(A)) return A.value
            if (os(A)) return Nn(A)
            if (ct(A)) return bn(A, c, 2)
          })))
      : ct(e)
      ? t
        ? (l = () => bn(e, c, 2))
        : (l = () => {
            if (!(c && c.isUnmounted)) return p && p(), ye(e, c, 3, [m])
          })
      : (l = Me),
    t && s)
  ) {
    const A = l
    l = () => Nn(A())
  }
  let p,
    m = A => {
      p = S.onStop = () => {
        bn(A, c, 4)
      }
    },
    b
  if (oi)
    if (
      ((m = Me),
      t ? n && ye(t, c, 3, [l(), h ? [] : void 0, m]) : l(),
      i === 'sync')
    ) {
      const A = c0()
      b = A.__watcherHandles || (A.__watcherHandles = [])
    } else return Me
  let w = h ? new Array(e.length).fill(Ti) : Ti
  const x = () => {
    if (S.active)
      if (t) {
        const A = S.run()
        ;(s || d || (h ? A.some((L, j) => Qs(L, w[j])) : Qs(A, w))) &&
          (p && p(),
          ye(t, c, 3, [A, w === Ti ? void 0 : h && w[0] === Ti ? [] : w, m]),
          (w = A))
      } else S.run()
  }
  x.allowRecurse = !!t
  let C
  i === 'sync'
    ? (C = x)
    : i === 'post'
    ? (C = () => ce(x, c && c.suspense))
    : ((x.pre = !0), c && (x.id = c.uid), (C = () => Ra(x)))
  const S = new Sa(l, C)
  t
    ? n
      ? x()
      : (w = S.run())
    : i === 'post'
    ? ce(S.run.bind(S), c && c.suspense)
    : S.run()
  const D = () => {
    S.stop(), c && c.scope && _a(c.scope.effects, S)
  }
  return b && b.push(D), D
}
function pb(e, t, n) {
  const s = this.proxy,
    i = Nt(e) ? (e.includes('.') ? Zd(s, e) : () => s[e]) : e.bind(s, s)
  let o
  ct(t) ? (o = t) : ((o = t.handler), (n = t))
  const r = Kt
  fs(this)
  const a = Gd(i, o.bind(s), n)
  return r ? fs(r) : Hn(), a
}
function Zd(e, t) {
  const n = t.split('.')
  return () => {
    let s = e
    for (let i = 0; i < n.length && s; i++) s = s[n[i]]
    return s
  }
}
function Nn(e, t) {
  if (!Mt(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), te(e))) Nn(e.value, t)
  else if (st(e)) for (let n = 0; n < e.length; n++) Nn(e[n], t)
  else if (xd(e) || is(e))
    e.forEach(n => {
      Nn(n, t)
    })
  else if (kd(e)) for (const n in e) Nn(e[n], t)
  return e
}
function gb(e, t) {
  const n = pe
  if (n === null) return e
  const s = Uo(n) || n.proxy,
    i = e.dirs || (e.dirs = [])
  for (let o = 0; o < t.length; o++) {
    let [r, a, c, l = Et] = t[o]
    r &&
      (ct(r) && (r = { mounted: r, updated: r }),
      r.deep && Nn(a),
      i.push({
        dir: r,
        instance: s,
        value: a,
        oldValue: void 0,
        arg: c,
        modifiers: l
      }))
  }
  return e
}
function kn(e, t, n, s) {
  const i = e.dirs,
    o = t && t.dirs
  for (let r = 0; r < i.length; r++) {
    const a = i[r]
    o && (a.oldValue = o[r].value)
    let c = a.dir[s]
    c && (_s(), ye(c, n, 8, [e.el, a, e, t]), xs())
  }
}
function mb() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map()
  }
  return (
    jo(() => {
      e.isMounted = !0
    }),
    Da(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const ge = [Function, Array],
  Qd = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: ge,
    onEnter: ge,
    onAfterEnter: ge,
    onEnterCancelled: ge,
    onBeforeLeave: ge,
    onLeave: ge,
    onAfterLeave: ge,
    onLeaveCancelled: ge,
    onBeforeAppear: ge,
    onAppear: ge,
    onAfterAppear: ge,
    onAppearCancelled: ge
  },
  bb = {
    name: 'BaseTransition',
    props: Qd,
    setup(e, { slots: t }) {
      const n = e0(),
        s = mb()
      let i
      return () => {
        const o = t.default && ef(t.default(), !0)
        if (!o || !o.length) return
        let r = o[0]
        if (o.length > 1) {
          for (const w of o)
            if (w.type !== Le) {
              r = w
              break
            }
        }
        const a = pt(e),
          { mode: c } = a
        if (s.isLeaving) return mr(r)
        const l = rc(r)
        if (!l) return mr(r)
        const d = Wr(l, a, s, n)
        Vr(l, d)
        const h = n.subTree,
          p = h && rc(h)
        let m = !1
        const { getTransitionKey: b } = l.type
        if (b) {
          const w = b()
          i === void 0 ? (i = w) : w !== i && ((i = w), (m = !0))
        }
        if (p && p.type !== Le && (!In(l, p) || m)) {
          const w = Wr(p, a, s, n)
          if ((Vr(p, w), c === 'out-in'))
            return (
              (s.isLeaving = !0),
              (w.afterLeave = () => {
                ;(s.isLeaving = !1), n.update.active !== !1 && n.update()
              }),
              mr(r)
            )
          c === 'in-out' &&
            l.type !== Le &&
            (w.delayLeave = (x, C, S) => {
              const D = tf(s, p)
              ;(D[String(p.key)] = p),
                (x._leaveCb = () => {
                  C(), (x._leaveCb = void 0), delete d.delayedLeave
                }),
                (d.delayedLeave = S)
            })
        }
        return r
      }
    }
  },
  wb = bb
function tf(e, t) {
  const { leavingVNodes: n } = e
  let s = n.get(t.type)
  return s || ((s = Object.create(null)), n.set(t.type, s)), s
}
function Wr(e, t, n, s) {
  const {
      appear: i,
      mode: o,
      persisted: r = !1,
      onBeforeEnter: a,
      onEnter: c,
      onAfterEnter: l,
      onEnterCancelled: d,
      onBeforeLeave: h,
      onLeave: p,
      onAfterLeave: m,
      onLeaveCancelled: b,
      onBeforeAppear: w,
      onAppear: x,
      onAfterAppear: C,
      onAppearCancelled: S
    } = t,
    D = String(e.key),
    A = tf(n, e),
    L = (T, W) => {
      T && ye(T, s, 9, W)
    },
    j = (T, W) => {
      const $ = W[1]
      L(T, W), st(T) ? T.every(G => G.length <= 1) && $() : T.length <= 1 && $()
    },
    z = {
      mode: o,
      persisted: r,
      beforeEnter(T) {
        let W = a
        if (!n.isMounted)
          if (i) W = w || a
          else return
        T._leaveCb && T._leaveCb(!0)
        const $ = A[D]
        $ && In(e, $) && $.el._leaveCb && $.el._leaveCb(), L(W, [T])
      },
      enter(T) {
        let W = c,
          $ = l,
          G = d
        if (!n.isMounted)
          if (i) (W = x || c), ($ = C || l), (G = S || d)
          else return
        let I = !1
        const q = (T._enterCb = Y => {
          I ||
            ((I = !0),
            Y ? L(G, [T]) : L($, [T]),
            z.delayedLeave && z.delayedLeave(),
            (T._enterCb = void 0))
        })
        W ? j(W, [T, q]) : q()
      },
      leave(T, W) {
        const $ = String(e.key)
        if ((T._enterCb && T._enterCb(!0), n.isUnmounting)) return W()
        L(h, [T])
        let G = !1
        const I = (T._leaveCb = q => {
          G ||
            ((G = !0),
            W(),
            q ? L(b, [T]) : L(m, [T]),
            (T._leaveCb = void 0),
            A[$] === e && delete A[$])
        })
        ;(A[$] = e), p ? j(p, [T, I]) : I()
      },
      clone(T) {
        return Wr(T, t, n, s)
      }
    }
  return z
}
function mr(e) {
  if ($o(e)) return (e = _n(e)), (e.children = null), e
}
function rc(e) {
  return $o(e) ? (e.children ? e.children[0] : void 0) : e
}
function Vr(e, t) {
  e.shapeFlag & 6 && e.component
    ? Vr(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function ef(e, t = !1, n) {
  let s = [],
    i = 0
  for (let o = 0; o < e.length; o++) {
    let r = e[o]
    const a = n == null ? r.key : String(n) + String(r.key != null ? r.key : o)
    r.type === Gt
      ? (r.patchFlag & 128 && i++, (s = s.concat(ef(r.children, t, a))))
      : (t || r.type !== Le) && s.push(a != null ? _n(r, { key: a }) : r)
  }
  if (i > 1) for (let o = 0; o < s.length; o++) s[o].patchFlag = -2
  return s
}
function zo(e, t) {
  return ct(e) ? (() => $t({ name: e.name }, t, { setup: e }))() : e
}
const Gi = e => !!e.type.__asyncLoader,
  $o = e => e.type.__isKeepAlive
function yb(e, t) {
  nf(e, 'a', t)
}
function _b(e, t) {
  nf(e, 'da', t)
}
function nf(e, t, n = Kt) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n
      for (; i; ) {
        if (i.isDeactivated) return
        i = i.parent
      }
      return e()
    })
  if ((Ho(t, s, n), n)) {
    let i = n.parent
    for (; i && i.parent; ) $o(i.parent.vnode) && xb(s, t, n, i), (i = i.parent)
  }
}
function xb(e, t, n, s) {
  const i = Ho(t, e, s, !0)
  sf(() => {
    _a(s[t], i)
  }, n)
}
function Ho(e, t, n = Kt, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...r) => {
          if (n.isUnmounted) return
          _s(), fs(n)
          const a = ye(t, n, e, r)
          return Hn(), xs(), a
        })
    return s ? i.unshift(o) : i.push(o), o
  }
}
const Qe =
    e =>
    (t, n = Kt) =>
      (!oi || e === 'sp') && Ho(e, (...s) => t(...s), n),
  vb = Qe('bm'),
  jo = Qe('m'),
  Cb = Qe('bu'),
  kb = Qe('u'),
  Da = Qe('bum'),
  sf = Qe('um'),
  Sb = Qe('sp'),
  Pb = Qe('rtg'),
  Eb = Qe('rtc')
function Ab(e, t = Kt) {
  Ho('ec', e, t)
}
const Ia = 'components'
function Ob(e, t) {
  return rf(Ia, e, !0, t) || e
}
const of = Symbol.for('v-ndc')
function Mb(e) {
  return Nt(e) ? rf(Ia, e, !1) || e : e || of
}
function rf(e, t, n = !0, s = !1) {
  const i = pe || Kt
  if (i) {
    const o = i.type
    if (e === Ia) {
      const a = r0(o, !1)
      if (a && (a === t || a === je(t) || a === Ro(je(t)))) return o
    }
    const r = ac(i[e] || o[e], t) || ac(i.appContext[e], t)
    return !r && s ? o : r
  }
}
function ac(e, t) {
  return e && (e[t] || e[je(t)] || e[Ro(je(t))])
}
function Ws(e, t, n, s) {
  let i
  const o = n && n[s]
  if (st(e) || Nt(e)) {
    i = new Array(e.length)
    for (let r = 0, a = e.length; r < a; r++)
      i[r] = t(e[r], r, void 0, o && o[r])
  } else if (typeof e == 'number') {
    i = new Array(e)
    for (let r = 0; r < e; r++) i[r] = t(r + 1, r, void 0, o && o[r])
  } else if (Mt(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (r, a) => t(r, a, void 0, o && o[a]))
    else {
      const r = Object.keys(e)
      i = new Array(r.length)
      for (let a = 0, c = r.length; a < c; a++) {
        const l = r[a]
        i[a] = t(e[l], l, a, o && o[a])
      }
    }
  else i = []
  return n && (n[s] = i), i
}
const Ur = e => (e ? (bf(e) ? Uo(e) || e.proxy : Ur(e.parent)) : null),
  Vs = $t(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Ur(e.parent),
    $root: e => Ur(e.root),
    $emit: e => e.emit,
    $options: e => Fa(e),
    $forceUpdate: e => e.f || (e.f = () => Ra(e.update)),
    $nextTick: e => e.n || (e.n = Ud.bind(e.proxy)),
    $watch: e => pb.bind(e)
  }),
  br = (e, t) => e !== Et && !e.__isScriptSetup && mt(e, t),
  Tb = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: o,
        accessCache: r,
        type: a,
        appContext: c
      } = e
      let l
      if (t[0] !== '$') {
        const m = r[t]
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[t]
            case 2:
              return i[t]
            case 4:
              return n[t]
            case 3:
              return o[t]
          }
        else {
          if (br(s, t)) return (r[t] = 1), s[t]
          if (i !== Et && mt(i, t)) return (r[t] = 2), i[t]
          if ((l = e.propsOptions[0]) && mt(l, t)) return (r[t] = 3), o[t]
          if (n !== Et && mt(n, t)) return (r[t] = 4), n[t]
          qr && (r[t] = 0)
        }
      }
      const d = Vs[t]
      let h, p
      if (d) return t === '$attrs' && fe(e, 'get', t), d(e)
      if ((h = a.__cssModules) && (h = h[t])) return h
      if (n !== Et && mt(n, t)) return (r[t] = 4), n[t]
      if (((p = c.config.globalProperties), mt(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: o } = e
      return br(i, t)
        ? ((i[t] = n), !0)
        : s !== Et && mt(s, t)
        ? ((s[t] = n), !0)
        : mt(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((o[t] = n), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: o
        }
      },
      r
    ) {
      let a
      return (
        !!n[r] ||
        (e !== Et && mt(e, r)) ||
        br(t, r) ||
        ((a = o[0]) && mt(a, r)) ||
        mt(s, r) ||
        mt(Vs, r) ||
        mt(i.config.globalProperties, r)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : mt(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function lc(e) {
  return st(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let qr = !0
function Lb(e) {
  const t = Fa(e),
    n = e.proxy,
    s = e.ctx
  ;(qr = !1), t.beforeCreate && cc(t.beforeCreate, e, 'bc')
  const {
    data: i,
    computed: o,
    methods: r,
    watch: a,
    provide: c,
    inject: l,
    created: d,
    beforeMount: h,
    mounted: p,
    beforeUpdate: m,
    updated: b,
    activated: w,
    deactivated: x,
    beforeDestroy: C,
    beforeUnmount: S,
    destroyed: D,
    unmounted: A,
    render: L,
    renderTracked: j,
    renderTriggered: z,
    errorCaptured: T,
    serverPrefetch: W,
    expose: $,
    inheritAttrs: G,
    components: I,
    directives: q,
    filters: Y
  } = t
  if ((l && Rb(l, s, null), r))
    for (const it in r) {
      const et = r[it]
      ct(et) && (s[it] = et.bind(n))
    }
  if (i) {
    const it = i.call(n, n)
    Mt(it) && (e.data = Io(it))
  }
  if (((qr = !0), o))
    for (const it in o) {
      const et = o[it],
        It = ct(et) ? et.bind(n, n) : ct(et.get) ? et.get.bind(n, n) : Me,
        Tt = !ct(et) && ct(et.set) ? et.set.bind(n) : Me,
        Xt = Ae({ get: It, set: Tt })
      Object.defineProperty(s, it, {
        enumerable: !0,
        configurable: !0,
        get: () => Xt.value,
        set: kt => (Xt.value = kt)
      })
    }
  if (a) for (const it in a) af(a[it], s, n, it)
  if (c) {
    const it = ct(c) ? c.call(n) : c
    Reflect.ownKeys(it).forEach(et => {
      Zi(et, it[et])
    })
  }
  d && cc(d, e, 'c')
  function at(it, et) {
    st(et) ? et.forEach(It => it(It.bind(n))) : et && it(et.bind(n))
  }
  if (
    (at(vb, h),
    at(jo, p),
    at(Cb, m),
    at(kb, b),
    at(yb, w),
    at(_b, x),
    at(Ab, T),
    at(Eb, j),
    at(Pb, z),
    at(Da, S),
    at(sf, A),
    at(Sb, W),
    st($))
  )
    if ($.length) {
      const it = e.exposed || (e.exposed = {})
      $.forEach(et => {
        Object.defineProperty(it, et, {
          get: () => n[et],
          set: It => (n[et] = It)
        })
      })
    } else e.exposed || (e.exposed = {})
  L && e.render === Me && (e.render = L),
    G != null && (e.inheritAttrs = G),
    I && (e.components = I),
    q && (e.directives = q)
}
function Rb(e, t, n = Me) {
  st(e) && (e = Kr(e))
  for (const s in e) {
    const i = e[s]
    let o
    Mt(i)
      ? 'default' in i
        ? (o = Te(i.from || s, i.default, !0))
        : (o = Te(i.from || s))
      : (o = Te(i)),
      te(o)
        ? Object.defineProperty(t, s, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: r => (o.value = r)
          })
        : (t[s] = o)
  }
}
function cc(e, t, n) {
  ye(st(e) ? e.map(s => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function af(e, t, n, s) {
  const i = s.includes('.') ? Zd(n, s) : () => n[s]
  if (Nt(e)) {
    const o = t[e]
    ct(o) && js(i, o)
  } else if (ct(e)) js(i, e.bind(n))
  else if (Mt(e))
    if (st(e)) e.forEach(o => af(o, t, n, s))
    else {
      const o = ct(e.handler) ? e.handler.bind(n) : t[e.handler]
      ct(o) && js(i, o, e)
    }
}
function Fa(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: o,
      config: { optionMergeStrategies: r }
    } = e.appContext,
    a = o.get(t)
  let c
  return (
    a
      ? (c = a)
      : !i.length && !n && !s
      ? (c = t)
      : ((c = {}), i.length && i.forEach(l => ho(c, l, r, !0)), ho(c, t, r)),
    Mt(t) && o.set(t, c),
    c
  )
}
function ho(e, t, n, s = !1) {
  const { mixins: i, extends: o } = t
  o && ho(e, o, n, !0), i && i.forEach(r => ho(e, r, n, !0))
  for (const r in t)
    if (!(s && r === 'expose')) {
      const a = Db[r] || (n && n[r])
      e[r] = a ? a(e[r], t[r]) : t[r]
    }
  return e
}
const Db = {
  data: uc,
  props: dc,
  emits: dc,
  methods: Fs,
  computed: Fs,
  beforeCreate: oe,
  created: oe,
  beforeMount: oe,
  mounted: oe,
  beforeUpdate: oe,
  updated: oe,
  beforeDestroy: oe,
  beforeUnmount: oe,
  destroyed: oe,
  unmounted: oe,
  activated: oe,
  deactivated: oe,
  errorCaptured: oe,
  serverPrefetch: oe,
  components: Fs,
  directives: Fs,
  watch: Fb,
  provide: uc,
  inject: Ib
}
function uc(e, t) {
  return t
    ? e
      ? function () {
          return $t(
            ct(e) ? e.call(this, this) : e,
            ct(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function Ib(e, t) {
  return Fs(Kr(e), Kr(t))
}
function Kr(e) {
  if (st(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]
    return t
  }
  return e
}
function oe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function Fs(e, t) {
  return e ? $t(Object.create(null), e, t) : t
}
function dc(e, t) {
  return e
    ? st(e) && st(t)
      ? [...new Set([...e, ...t])]
      : $t(Object.create(null), lc(e), lc(t ?? {}))
    : t
}
function Fb(e, t) {
  if (!e) return t
  if (!t) return e
  const n = $t(Object.create(null), e)
  for (const s in t) n[s] = oe(e[s], t[s])
  return n
}
function lf() {
  return {
    app: null,
    config: {
      isNativeTag: um,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let Bb = 0
function Nb(e, t) {
  return function (s, i = null) {
    ct(s) || (s = $t({}, s)), i != null && !Mt(i) && (i = null)
    const o = lf(),
      r = new Set()
    let a = !1
    const c = (o.app = {
      _uid: Bb++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: yf,
      get config() {
        return o.config
      },
      set config(l) {},
      use(l, ...d) {
        return (
          r.has(l) ||
            (l && ct(l.install)
              ? (r.add(l), l.install(c, ...d))
              : ct(l) && (r.add(l), l(c, ...d))),
          c
        )
      },
      mixin(l) {
        return o.mixins.includes(l) || o.mixins.push(l), c
      },
      component(l, d) {
        return d ? ((o.components[l] = d), c) : o.components[l]
      },
      directive(l, d) {
        return d ? ((o.directives[l] = d), c) : o.directives[l]
      },
      mount(l, d, h) {
        if (!a) {
          const p = Ot(s, i)
          return (
            (p.appContext = o),
            d && t ? t(p, l) : e(p, l, h),
            (a = !0),
            (c._container = l),
            (l.__vue_app__ = c),
            Uo(p.component) || p.component.proxy
          )
        }
      },
      unmount() {
        a && (e(null, c._container), delete c._container.__vue_app__)
      },
      provide(l, d) {
        return (o.provides[l] = d), c
      },
      runWithContext(l) {
        po = c
        try {
          return l()
        } finally {
          po = null
        }
      }
    })
    return c
  }
}
let po = null
function Zi(e, t) {
  if (Kt) {
    let n = Kt.provides
    const s = Kt.parent && Kt.parent.provides
    s === n && (n = Kt.provides = Object.create(s)), (n[e] = t)
  }
}
function Te(e, t, n = !1) {
  const s = Kt || pe
  if (s || po) {
    const i = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : po._context.provides
    if (i && e in i) return i[e]
    if (arguments.length > 1) return n && ct(t) ? t.call(s && s.proxy) : t
  }
}
function zb(e, t, n, s = !1) {
  const i = {},
    o = {}
  co(o, Vo, 1), (e.propsDefaults = Object.create(null)), cf(e, t, i, o)
  for (const r in e.propsOptions[0]) r in i || (i[r] = void 0)
  n ? (e.props = s ? i : Bd(i)) : e.type.props ? (e.props = i) : (e.props = o),
    (e.attrs = o)
}
function $b(e, t, n, s) {
  const {
      props: i,
      attrs: o,
      vnode: { patchFlag: r }
    } = e,
    a = pt(i),
    [c] = e.propsOptions
  let l = !1
  if ((s || r > 0) && !(r & 16)) {
    if (r & 8) {
      const d = e.vnode.dynamicProps
      for (let h = 0; h < d.length; h++) {
        let p = d[h]
        if (No(e.emitsOptions, p)) continue
        const m = t[p]
        if (c)
          if (mt(o, p)) m !== o[p] && ((o[p] = m), (l = !0))
          else {
            const b = je(p)
            i[b] = Yr(c, a, b, m, e, !1)
          }
        else m !== o[p] && ((o[p] = m), (l = !0))
      }
    }
  } else {
    cf(e, t, i, o) && (l = !0)
    let d
    for (const h in a)
      (!t || (!mt(t, h) && ((d = ys(h)) === h || !mt(t, d)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[d] !== void 0) &&
            (i[h] = Yr(c, a, h, void 0, e, !0))
          : delete i[h])
    if (o !== a) for (const h in o) (!t || !mt(t, h)) && (delete o[h], (l = !0))
  }
  l && Ze(e, 'set', '$attrs')
}
function cf(e, t, n, s) {
  const [i, o] = e.propsOptions
  let r = !1,
    a
  if (t)
    for (let c in t) {
      if (Xi(c)) continue
      const l = t[c]
      let d
      i && mt(i, (d = je(c)))
        ? !o || !o.includes(d)
          ? (n[d] = l)
          : ((a || (a = {}))[d] = l)
        : No(e.emitsOptions, c) ||
          ((!(c in s) || l !== s[c]) && ((s[c] = l), (r = !0)))
    }
  if (o) {
    const c = pt(n),
      l = a || Et
    for (let d = 0; d < o.length; d++) {
      const h = o[d]
      n[h] = Yr(i, c, h, l[h], e, !mt(l, h))
    }
  }
  return r
}
function Yr(e, t, n, s, i, o) {
  const r = e[n]
  if (r != null) {
    const a = mt(r, 'default')
    if (a && s === void 0) {
      const c = r.default
      if (r.type !== Function && !r.skipFactory && ct(c)) {
        const { propsDefaults: l } = i
        n in l ? (s = l[n]) : (fs(i), (s = l[n] = c.call(null, t)), Hn())
      } else s = c
    }
    r[0] && (o && !a ? (s = !1) : r[1] && (s === '' || s === ys(n)) && (s = !0))
  }
  return s
}
function uf(e, t, n = !1) {
  const s = t.propsCache,
    i = s.get(e)
  if (i) return i
  const o = e.props,
    r = {},
    a = []
  let c = !1
  if (!ct(e)) {
    const d = h => {
      c = !0
      const [p, m] = uf(h, t, !0)
      $t(r, p), m && a.push(...m)
    }
    !n && t.mixins.length && t.mixins.forEach(d),
      e.extends && d(e.extends),
      e.mixins && e.mixins.forEach(d)
  }
  if (!o && !c) return Mt(e) && s.set(e, ss), ss
  if (st(o))
    for (let d = 0; d < o.length; d++) {
      const h = je(o[d])
      fc(h) && (r[h] = Et)
    }
  else if (o)
    for (const d in o) {
      const h = je(d)
      if (fc(h)) {
        const p = o[d],
          m = (r[h] = st(p) || ct(p) ? { type: p } : $t({}, p))
        if (m) {
          const b = gc(Boolean, m.type),
            w = gc(String, m.type)
          ;(m[0] = b > -1),
            (m[1] = w < 0 || b < w),
            (b > -1 || mt(m, 'default')) && a.push(h)
        }
      }
    }
  const l = [r, a]
  return Mt(e) && s.set(e, l), l
}
function fc(e) {
  return e[0] !== '$'
}
function hc(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
  return t ? t[2] : e === null ? 'null' : ''
}
function pc(e, t) {
  return hc(e) === hc(t)
}
function gc(e, t) {
  return st(t) ? t.findIndex(n => pc(n, e)) : ct(t) && pc(t, e) ? 0 : -1
}
const df = e => e[0] === '_' || e === '$stable',
  Ba = e => (st(e) ? e.map(Ne) : [Ne(e)]),
  Hb = (e, t, n) => {
    if (t._n) return t
    const s = us((...i) => Ba(t(...i)), n)
    return (s._c = !1), s
  },
  ff = (e, t, n) => {
    const s = e._ctx
    for (const i in e) {
      if (df(i)) continue
      const o = e[i]
      if (ct(o)) t[i] = Hb(i, o, s)
      else if (o != null) {
        const r = Ba(o)
        t[i] = () => r
      }
    }
  },
  hf = (e, t) => {
    const n = Ba(t)
    e.slots.default = () => n
  },
  jb = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._
      n ? ((e.slots = pt(t)), co(t, '_', n)) : ff(t, (e.slots = {}))
    } else (e.slots = {}), t && hf(e, t)
    co(e.slots, Vo, 1)
  },
  Wb = (e, t, n) => {
    const { vnode: s, slots: i } = e
    let o = !0,
      r = Et
    if (s.shapeFlag & 32) {
      const a = t._
      a
        ? n && a === 1
          ? (o = !1)
          : ($t(i, t), !n && a === 1 && delete i._)
        : ((o = !t.$stable), ff(t, i)),
        (r = t)
    } else t && (hf(e, t), (r = { default: 1 }))
    if (o) for (const a in i) !df(a) && !(a in r) && delete i[a]
  }
function Xr(e, t, n, s, i = !1) {
  if (st(e)) {
    e.forEach((p, m) => Xr(p, t && (st(t) ? t[m] : t), n, s, i))
    return
  }
  if (Gi(s) && !i) return
  const o = s.shapeFlag & 4 ? Uo(s.component) || s.component.proxy : s.el,
    r = i ? null : o,
    { i: a, r: c } = e,
    l = t && t.r,
    d = a.refs === Et ? (a.refs = {}) : a.refs,
    h = a.setupState
  if (
    (l != null &&
      l !== c &&
      (Nt(l)
        ? ((d[l] = null), mt(h, l) && (h[l] = null))
        : te(l) && (l.value = null)),
    ct(c))
  )
    bn(c, a, 12, [r, d])
  else {
    const p = Nt(c),
      m = te(c)
    if (p || m) {
      const b = () => {
        if (e.f) {
          const w = p ? (mt(h, c) ? h[c] : d[c]) : c.value
          i
            ? st(w) && _a(w, o)
            : st(w)
            ? w.includes(o) || w.push(o)
            : p
            ? ((d[c] = [o]), mt(h, c) && (h[c] = d[c]))
            : ((c.value = [o]), e.k && (d[e.k] = c.value))
        } else
          p
            ? ((d[c] = r), mt(h, c) && (h[c] = r))
            : m && ((c.value = r), e.k && (d[e.k] = r))
      }
      r ? ((b.id = -1), ce(b, n)) : b()
    }
  }
}
const ce = hb
function Vb(e) {
  return Ub(e)
}
function Ub(e, t) {
  const n = Br()
  n.__VUE__ = !0
  const {
      insert: s,
      remove: i,
      patchProp: o,
      createElement: r,
      createText: a,
      createComment: c,
      setText: l,
      setElementText: d,
      parentNode: h,
      nextSibling: p,
      setScopeId: m = Me,
      insertStaticContent: b
    } = e,
    w = (
      _,
      v,
      k,
      P = null,
      F = null,
      N = null,
      K = !1,
      O = null,
      H = !!v.dynamicChildren
    ) => {
      if (_ === v) return
      _ && !In(_, v) && ((P = R(_)), kt(_, F, N, !0), (_ = null)),
        v.patchFlag === -2 && ((H = !1), (v.dynamicChildren = null))
      const { type: B, ref: Z, shapeFlag: U } = v
      switch (B) {
        case Wo:
          x(_, v, k, P)
          break
        case Le:
          C(_, v, k, P)
          break
        case Qi:
          _ == null && S(v, k, P, K)
          break
        case Gt:
          I(_, v, k, P, F, N, K, O, H)
          break
        default:
          U & 1
            ? L(_, v, k, P, F, N, K, O, H)
            : U & 6
            ? q(_, v, k, P, F, N, K, O, H)
            : (U & 64 || U & 128) && B.process(_, v, k, P, F, N, K, O, H, V)
      }
      Z != null && F && Xr(Z, _ && _.ref, N, v || _, !v)
    },
    x = (_, v, k, P) => {
      if (_ == null) s((v.el = a(v.children)), k, P)
      else {
        const F = (v.el = _.el)
        v.children !== _.children && l(F, v.children)
      }
    },
    C = (_, v, k, P) => {
      _ == null ? s((v.el = c(v.children || '')), k, P) : (v.el = _.el)
    },
    S = (_, v, k, P) => {
      ;[_.el, _.anchor] = b(_.children, v, k, P, _.el, _.anchor)
    },
    D = ({ el: _, anchor: v }, k, P) => {
      let F
      for (; _ && _ !== v; ) (F = p(_)), s(_, k, P), (_ = F)
      s(v, k, P)
    },
    A = ({ el: _, anchor: v }) => {
      let k
      for (; _ && _ !== v; ) (k = p(_)), i(_), (_ = k)
      i(v)
    },
    L = (_, v, k, P, F, N, K, O, H) => {
      ;(K = K || v.type === 'svg'),
        _ == null ? j(v, k, P, F, N, K, O, H) : W(_, v, F, N, K, O, H)
    },
    j = (_, v, k, P, F, N, K, O) => {
      let H, B
      const { type: Z, props: U, shapeFlag: X, transition: ot, dirs: lt } = _
      if (
        ((H = _.el = r(_.type, N, U && U.is, U)),
        X & 8
          ? d(H, _.children)
          : X & 16 &&
            T(_.children, H, null, P, F, N && Z !== 'foreignObject', K, O),
        lt && kn(_, null, P, 'created'),
        z(H, _, _.scopeId, K, P),
        U)
      ) {
        for (const _t in U)
          _t !== 'value' &&
            !Xi(_t) &&
            o(H, _t, null, U[_t], N, _.children, P, F, St)
        'value' in U && o(H, 'value', null, U.value),
          (B = U.onVnodeBeforeMount) && Ie(B, P, _)
      }
      lt && kn(_, null, P, 'beforeMount')
      const dt = (!F || (F && !F.pendingBranch)) && ot && !ot.persisted
      dt && ot.beforeEnter(H),
        s(H, v, k),
        ((B = U && U.onVnodeMounted) || dt || lt) &&
          ce(() => {
            B && Ie(B, P, _), dt && ot.enter(H), lt && kn(_, null, P, 'mounted')
          }, F)
    },
    z = (_, v, k, P, F) => {
      if ((k && m(_, k), P)) for (let N = 0; N < P.length; N++) m(_, P[N])
      if (F) {
        let N = F.subTree
        if (v === N) {
          const K = F.vnode
          z(_, K, K.scopeId, K.slotScopeIds, F.parent)
        }
      }
    },
    T = (_, v, k, P, F, N, K, O, H = 0) => {
      for (let B = H; B < _.length; B++) {
        const Z = (_[B] = O ? un(_[B]) : Ne(_[B]))
        w(null, Z, v, k, P, F, N, K, O)
      }
    },
    W = (_, v, k, P, F, N, K) => {
      const O = (v.el = _.el)
      let { patchFlag: H, dynamicChildren: B, dirs: Z } = v
      H |= _.patchFlag & 16
      const U = _.props || Et,
        X = v.props || Et
      let ot
      k && Sn(k, !1),
        (ot = X.onVnodeBeforeUpdate) && Ie(ot, k, v, _),
        Z && kn(v, _, k, 'beforeUpdate'),
        k && Sn(k, !0)
      const lt = F && v.type !== 'foreignObject'
      if (
        (B
          ? $(_.dynamicChildren, B, O, k, P, lt, N)
          : K || et(_, v, O, null, k, P, lt, N, !1),
        H > 0)
      ) {
        if (H & 16) G(O, v, U, X, k, P, F)
        else if (
          (H & 2 && U.class !== X.class && o(O, 'class', null, X.class, F),
          H & 4 && o(O, 'style', U.style, X.style, F),
          H & 8)
        ) {
          const dt = v.dynamicProps
          for (let _t = 0; _t < dt.length; _t++) {
            const Lt = dt[_t],
              re = U[Lt],
              De = X[Lt]
            ;(De !== re || Lt === 'value') &&
              o(O, Lt, re, De, F, _.children, k, P, St)
          }
        }
        H & 1 && _.children !== v.children && d(O, v.children)
      } else !K && B == null && G(O, v, U, X, k, P, F)
      ;((ot = X.onVnodeUpdated) || Z) &&
        ce(() => {
          ot && Ie(ot, k, v, _), Z && kn(v, _, k, 'updated')
        }, P)
    },
    $ = (_, v, k, P, F, N, K) => {
      for (let O = 0; O < v.length; O++) {
        const H = _[O],
          B = v[O],
          Z =
            H.el && (H.type === Gt || !In(H, B) || H.shapeFlag & 70)
              ? h(H.el)
              : k
        w(H, B, Z, null, P, F, N, K, !0)
      }
    },
    G = (_, v, k, P, F, N, K) => {
      if (k !== P) {
        if (k !== Et)
          for (const O in k)
            !Xi(O) && !(O in P) && o(_, O, k[O], null, K, v.children, F, N, St)
        for (const O in P) {
          if (Xi(O)) continue
          const H = P[O],
            B = k[O]
          H !== B && O !== 'value' && o(_, O, B, H, K, v.children, F, N, St)
        }
        'value' in P && o(_, 'value', k.value, P.value)
      }
    },
    I = (_, v, k, P, F, N, K, O, H) => {
      const B = (v.el = _ ? _.el : a('')),
        Z = (v.anchor = _ ? _.anchor : a(''))
      let { patchFlag: U, dynamicChildren: X, slotScopeIds: ot } = v
      ot && (O = O ? O.concat(ot) : ot),
        _ == null
          ? (s(B, k, P), s(Z, k, P), T(v.children, k, Z, F, N, K, O, H))
          : U > 0 && U & 64 && X && _.dynamicChildren
          ? ($(_.dynamicChildren, X, k, F, N, K, O),
            (v.key != null || (F && v === F.subTree)) && pf(_, v, !0))
          : et(_, v, k, Z, F, N, K, O, H)
    },
    q = (_, v, k, P, F, N, K, O, H) => {
      ;(v.slotScopeIds = O),
        _ == null
          ? v.shapeFlag & 512
            ? F.ctx.activate(v, k, P, K, H)
            : Y(v, k, P, F, N, K, H)
          : ut(_, v, H)
    },
    Y = (_, v, k, P, F, N, K) => {
      const O = (_.component = t0(_, P, F))
      if (($o(_) && (O.ctx.renderer = V), n0(O), O.asyncDep)) {
        if ((F && F.registerDep(O, at), !_.el)) {
          const H = (O.subTree = Ot(Le))
          C(null, H, v, k)
        }
        return
      }
      at(O, _, v, k, F, N, K)
    },
    ut = (_, v, k) => {
      const P = (v.component = _.component)
      if (ub(_, v, k))
        if (P.asyncDep && !P.asyncResolved) {
          it(P, v, k)
          return
        } else (P.next = v), ib(P.update), P.update()
      else (v.el = _.el), (P.vnode = v)
    },
    at = (_, v, k, P, F, N, K) => {
      const O = () => {
          if (_.isMounted) {
            let { next: Z, bu: U, u: X, parent: ot, vnode: lt } = _,
              dt = Z,
              _t
            Sn(_, !1),
              Z ? ((Z.el = lt.el), it(_, Z, K)) : (Z = lt),
              U && Ji(U),
              (_t = Z.props && Z.props.onVnodeBeforeUpdate) &&
                Ie(_t, ot, Z, lt),
              Sn(_, !0)
            const Lt = gr(_),
              re = _.subTree
            ;(_.subTree = Lt),
              w(re, Lt, h(re.el), R(re), _, F, N),
              (Z.el = Lt.el),
              dt === null && db(_, Lt.el),
              X && ce(X, F),
              (_t = Z.props && Z.props.onVnodeUpdated) &&
                ce(() => Ie(_t, ot, Z, lt), F)
          } else {
            let Z
            const { el: U, props: X } = v,
              { bm: ot, m: lt, parent: dt } = _,
              _t = Gi(v)
            if (
              (Sn(_, !1),
              ot && Ji(ot),
              !_t && (Z = X && X.onVnodeBeforeMount) && Ie(Z, dt, v),
              Sn(_, !0),
              U && wt)
            ) {
              const Lt = () => {
                ;(_.subTree = gr(_)), wt(U, _.subTree, _, F, null)
              }
              _t
                ? v.type.__asyncLoader().then(() => !_.isUnmounted && Lt())
                : Lt()
            } else {
              const Lt = (_.subTree = gr(_))
              w(null, Lt, k, P, _, F, N), (v.el = Lt.el)
            }
            if ((lt && ce(lt, F), !_t && (Z = X && X.onVnodeMounted))) {
              const Lt = v
              ce(() => Ie(Z, dt, Lt), F)
            }
            ;(v.shapeFlag & 256 ||
              (dt && Gi(dt.vnode) && dt.vnode.shapeFlag & 256)) &&
              _.a &&
              ce(_.a, F),
              (_.isMounted = !0),
              (v = k = P = null)
          }
        },
        H = (_.effect = new Sa(O, () => Ra(B), _.scope)),
        B = (_.update = () => H.run())
      ;(B.id = _.uid), Sn(_, !0), B()
    },
    it = (_, v, k) => {
      v.component = _
      const P = _.vnode.props
      ;(_.vnode = v),
        (_.next = null),
        $b(_, v.props, P, k),
        Wb(_, v.children, k),
        _s(),
        ic(),
        xs()
    },
    et = (_, v, k, P, F, N, K, O, H = !1) => {
      const B = _ && _.children,
        Z = _ ? _.shapeFlag : 0,
        U = v.children,
        { patchFlag: X, shapeFlag: ot } = v
      if (X > 0) {
        if (X & 128) {
          Tt(B, U, k, P, F, N, K, O, H)
          return
        } else if (X & 256) {
          It(B, U, k, P, F, N, K, O, H)
          return
        }
      }
      ot & 8
        ? (Z & 16 && St(B, F, N), U !== B && d(k, U))
        : Z & 16
        ? ot & 16
          ? Tt(B, U, k, P, F, N, K, O, H)
          : St(B, F, N, !0)
        : (Z & 8 && d(k, ''), ot & 16 && T(U, k, P, F, N, K, O, H))
    },
    It = (_, v, k, P, F, N, K, O, H) => {
      ;(_ = _ || ss), (v = v || ss)
      const B = _.length,
        Z = v.length,
        U = Math.min(B, Z)
      let X
      for (X = 0; X < U; X++) {
        const ot = (v[X] = H ? un(v[X]) : Ne(v[X]))
        w(_[X], ot, k, null, F, N, K, O, H)
      }
      B > Z ? St(_, F, N, !0, !1, U) : T(v, k, P, F, N, K, O, H, U)
    },
    Tt = (_, v, k, P, F, N, K, O, H) => {
      let B = 0
      const Z = v.length
      let U = _.length - 1,
        X = Z - 1
      for (; B <= U && B <= X; ) {
        const ot = _[B],
          lt = (v[B] = H ? un(v[B]) : Ne(v[B]))
        if (In(ot, lt)) w(ot, lt, k, null, F, N, K, O, H)
        else break
        B++
      }
      for (; B <= U && B <= X; ) {
        const ot = _[U],
          lt = (v[X] = H ? un(v[X]) : Ne(v[X]))
        if (In(ot, lt)) w(ot, lt, k, null, F, N, K, O, H)
        else break
        U--, X--
      }
      if (B > U) {
        if (B <= X) {
          const ot = X + 1,
            lt = ot < Z ? v[ot].el : P
          for (; B <= X; )
            w(null, (v[B] = H ? un(v[B]) : Ne(v[B])), k, lt, F, N, K, O, H), B++
        }
      } else if (B > X) for (; B <= U; ) kt(_[B], F, N, !0), B++
      else {
        const ot = B,
          lt = B,
          dt = new Map()
        for (B = lt; B <= X; B++) {
          const ie = (v[B] = H ? un(v[B]) : Ne(v[B]))
          ie.key != null && dt.set(ie.key, B)
        }
        let _t,
          Lt = 0
        const re = X - lt + 1
        let De = !1,
          yi = 0
        const tn = new Array(re)
        for (B = 0; B < re; B++) tn[B] = 0
        for (B = ot; B <= U; B++) {
          const ie = _[B]
          if (Lt >= re) {
            kt(ie, F, N, !0)
            continue
          }
          let qt
          if (ie.key != null) qt = dt.get(ie.key)
          else
            for (_t = lt; _t <= X; _t++)
              if (tn[_t - lt] === 0 && In(ie, v[_t])) {
                qt = _t
                break
              }
          qt === void 0
            ? kt(ie, F, N, !0)
            : ((tn[qt - lt] = B + 1),
              qt >= yi ? (yi = qt) : (De = !0),
              w(ie, v[qt], k, null, F, N, K, O, H),
              Lt++)
        }
        const _i = De ? qb(tn) : ss
        for (_t = _i.length - 1, B = re - 1; B >= 0; B--) {
          const ie = lt + B,
            qt = v[ie],
            xi = ie + 1 < Z ? v[ie + 1].el : P
          tn[B] === 0
            ? w(null, qt, k, xi, F, N, K, O, H)
            : De && (_t < 0 || B !== _i[_t] ? Xt(qt, k, xi, 2) : _t--)
        }
      }
    },
    Xt = (_, v, k, P, F = null) => {
      const { el: N, type: K, transition: O, children: H, shapeFlag: B } = _
      if (B & 6) {
        Xt(_.component.subTree, v, k, P)
        return
      }
      if (B & 128) {
        _.suspense.move(v, k, P)
        return
      }
      if (B & 64) {
        K.move(_, v, k, V)
        return
      }
      if (K === Gt) {
        s(N, v, k)
        for (let U = 0; U < H.length; U++) Xt(H[U], v, k, P)
        s(_.anchor, v, k)
        return
      }
      if (K === Qi) {
        D(_, v, k)
        return
      }
      if (P !== 2 && B & 1 && O)
        if (P === 0) O.beforeEnter(N), s(N, v, k), ce(() => O.enter(N), F)
        else {
          const { leave: U, delayLeave: X, afterLeave: ot } = O,
            lt = () => s(N, v, k),
            dt = () => {
              U(N, () => {
                lt(), ot && ot()
              })
            }
          X ? X(N, lt, dt) : dt()
        }
      else s(N, v, k)
    },
    kt = (_, v, k, P = !1, F = !1) => {
      const {
        type: N,
        props: K,
        ref: O,
        children: H,
        dynamicChildren: B,
        shapeFlag: Z,
        patchFlag: U,
        dirs: X
      } = _
      if ((O != null && Xr(O, null, k, _, !0), Z & 256)) {
        v.ctx.deactivate(_)
        return
      }
      const ot = Z & 1 && X,
        lt = !Gi(_)
      let dt
      if ((lt && (dt = K && K.onVnodeBeforeUnmount) && Ie(dt, v, _), Z & 6))
        se(_.component, k, P)
      else {
        if (Z & 128) {
          _.suspense.unmount(k, P)
          return
        }
        ot && kn(_, null, v, 'beforeUnmount'),
          Z & 64
            ? _.type.remove(_, v, k, F, V, P)
            : B && (N !== Gt || (U > 0 && U & 64))
            ? St(B, v, k, !1, !0)
            : ((N === Gt && U & 384) || (!F && Z & 16)) && St(H, v, k),
          P && Ut(_)
      }
      ;((lt && (dt = K && K.onVnodeUnmounted)) || ot) &&
        ce(() => {
          dt && Ie(dt, v, _), ot && kn(_, null, v, 'unmounted')
        }, k)
    },
    Ut = _ => {
      const { type: v, el: k, anchor: P, transition: F } = _
      if (v === Gt) {
        ne(k, P)
        return
      }
      if (v === Qi) {
        A(_)
        return
      }
      const N = () => {
        i(k), F && !F.persisted && F.afterLeave && F.afterLeave()
      }
      if (_.shapeFlag & 1 && F && !F.persisted) {
        const { leave: K, delayLeave: O } = F,
          H = () => K(k, N)
        O ? O(_.el, N, H) : H()
      } else N()
    },
    ne = (_, v) => {
      let k
      for (; _ !== v; ) (k = p(_)), i(_), (_ = k)
      i(v)
    },
    se = (_, v, k) => {
      const { bum: P, scope: F, update: N, subTree: K, um: O } = _
      P && Ji(P),
        F.stop(),
        N && ((N.active = !1), kt(K, _, v, k)),
        O && ce(O, v),
        ce(() => {
          _.isUnmounted = !0
        }, v),
        v &&
          v.pendingBranch &&
          !v.isUnmounted &&
          _.asyncDep &&
          !_.asyncResolved &&
          _.suspenseId === v.pendingId &&
          (v.deps--, v.deps === 0 && v.resolve())
    },
    St = (_, v, k, P = !1, F = !1, N = 0) => {
      for (let K = N; K < _.length; K++) kt(_[K], v, k, P, F)
    },
    R = _ =>
      _.shapeFlag & 6
        ? R(_.component.subTree)
        : _.shapeFlag & 128
        ? _.suspense.next()
        : p(_.anchor || _.el),
    J = (_, v, k) => {
      _ == null
        ? v._vnode && kt(v._vnode, null, null, !0)
        : w(v._vnode || null, _, v, null, null, null, k),
        ic(),
        Kd(),
        (v._vnode = _)
    },
    V = { p: w, um: kt, m: Xt, r: Ut, mt: Y, mc: T, pc: et, pbc: $, n: R, o: e }
  let Q, wt
  return t && ([Q, wt] = t(V)), { render: J, hydrate: Q, createApp: Nb(J, Q) }
}
function Sn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function pf(e, t, n = !1) {
  const s = e.children,
    i = t.children
  if (st(s) && st(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o]
      let a = i[o]
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[o] = un(i[o])), (a.el = r.el)),
        n || pf(r, a)),
        a.type === Wo && (a.el = r.el)
    }
}
function qb(e) {
  const t = e.slice(),
    n = [0]
  let s, i, o, r, a
  const c = e.length
  for (s = 0; s < c; s++) {
    const l = e[s]
    if (l !== 0) {
      if (((i = n[n.length - 1]), e[i] < l)) {
        ;(t[s] = i), n.push(s)
        continue
      }
      for (o = 0, r = n.length - 1; o < r; )
        (a = (o + r) >> 1), e[n[a]] < l ? (o = a + 1) : (r = a)
      l < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), (n[o] = s))
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; ) (n[o] = r), (r = t[r])
  return n
}
const Kb = e => e.__isTeleport,
  Gt = Symbol.for('v-fgt'),
  Wo = Symbol.for('v-txt'),
  Le = Symbol.for('v-cmt'),
  Qi = Symbol.for('v-stc'),
  Us = []
let Oe = null
function ft(e = !1) {
  Us.push((Oe = e ? null : []))
}
function Yb() {
  Us.pop(), (Oe = Us[Us.length - 1] || null)
}
let si = 1
function mc(e) {
  si += e
}
function gf(e) {
  return (
    (e.dynamicChildren = si > 0 ? Oe || ss : null),
    Yb(),
    si > 0 && Oe && Oe.push(e),
    e
  )
}
function gt(e, t, n, s, i, o) {
  return gf(nt(e, t, n, s, i, o, !0))
}
function ii(e, t, n, s, i) {
  return gf(Ot(e, t, n, s, i, !0))
}
function Jr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function In(e, t) {
  return e.type === t.type && e.key === t.key
}
const Vo = '__vInternal',
  mf = ({ key: e }) => e ?? null,
  to = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null
      ? Nt(e) || te(e) || ct(e)
        ? { i: pe, r: e, k: t, f: !!n }
        : e
      : null
  )
function nt(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  o = e === Gt ? 0 : 1,
  r = !1,
  a = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && mf(t),
    ref: t && to(t),
    scopeId: Jd,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: pe
  }
  return (
    a
      ? (za(c, n), o & 128 && e.normalize(c))
      : n && (c.shapeFlag |= Nt(n) ? 8 : 16),
    si > 0 &&
      !r &&
      Oe &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      Oe.push(c),
    c
  )
}
const Ot = Xb
function Xb(e, t = null, n = null, s = 0, i = null, o = !1) {
  if (((!e || e === of) && (e = Le), Jr(e))) {
    const a = _n(e, t, !0)
    return (
      n && za(a, n),
      si > 0 &&
        !o &&
        Oe &&
        (a.shapeFlag & 6 ? (Oe[Oe.indexOf(e)] = a) : Oe.push(a)),
      (a.patchFlag |= -2),
      a
    )
  }
  if ((a0(e) && (e = e.__vccOpts), t)) {
    t = Jb(t)
    let { class: a, style: c } = t
    a && !Nt(a) && (t.class = fn(a)),
      Mt(c) && (Fo(c) && !st(c) && (c = $t({}, c)), (t.style = Ca(c)))
  }
  const r = Nt(e) ? 1 : fb(e) ? 128 : Kb(e) ? 64 : Mt(e) ? 4 : ct(e) ? 2 : 0
  return nt(e, t, n, s, i, r, o, !0)
}
function Jb(e) {
  return e ? (Fo(e) || Vo in e ? $t({}, e) : e) : null
}
function _n(e, t, n = !1) {
  const { props: s, ref: i, patchFlag: o, children: r } = e,
    a = t ? Gb(s || {}, t) : s
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && mf(a),
    ref:
      t && t.ref
        ? n && i
          ? st(i)
            ? i.concat(to(t))
            : [i, to(t)]
          : to(t)
        : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Gt ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && _n(e.ssContent),
    ssFallback: e.ssFallback && _n(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  }
}
function ds(e = ' ', t = 0) {
  return Ot(Wo, null, e, t)
}
function Na(e, t) {
  const n = Ot(Qi, null, e)
  return (n.staticCount = t), n
}
function ke(e = '', t = !1) {
  return t ? (ft(), ii(Le, null, e)) : Ot(Le, null, e)
}
function Ne(e) {
  return e == null || typeof e == 'boolean'
    ? Ot(Le)
    : st(e)
    ? Ot(Gt, null, e.slice())
    : typeof e == 'object'
    ? un(e)
    : Ot(Wo, null, String(e))
}
function un(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : _n(e)
}
function za(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (st(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), za(e, i()), i._c && (i._d = !0))
      return
    } else {
      n = 32
      const i = t._
      !i && !(Vo in t)
        ? (t._ctx = pe)
        : i === 3 &&
          pe &&
          (pe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    ct(t)
      ? ((t = { default: t, _ctx: pe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [ds(t)])) : (n = 8))
  ;(e.children = t), (e.shapeFlag |= n)
}
function Gb(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const i in s)
      if (i === 'class')
        t.class !== s.class && (t.class = fn([t.class, s.class]))
      else if (i === 'style') t.style = Ca([t.style, s.style])
      else if (Mo(i)) {
        const o = t[i],
          r = s[i]
        r &&
          o !== r &&
          !(st(o) && o.includes(r)) &&
          (t[i] = o ? [].concat(o, r) : r)
      } else i !== '' && (t[i] = s[i])
  }
  return t
}
function Ie(e, t, n, s = null) {
  ye(e, t, 7, [n, s])
}
const Zb = lf()
let Qb = 0
function t0(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || Zb,
    o = {
      uid: Qb++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Cm(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: uf(s, i),
      emitsOptions: Xd(s, i),
      emit: null,
      emitted: null,
      propsDefaults: Et,
      inheritAttrs: s.inheritAttrs,
      ctx: Et,
      data: Et,
      props: Et,
      attrs: Et,
      slots: Et,
      refs: Et,
      setupState: Et,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = ab.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let Kt = null
const e0 = () => Kt || pe
let $a,
  Zn,
  bc = '__VUE_INSTANCE_SETTERS__'
;(Zn = Br()[bc]) || (Zn = Br()[bc] = []),
  Zn.push(e => (Kt = e)),
  ($a = e => {
    Zn.length > 1 ? Zn.forEach(t => t(e)) : Zn[0](e)
  })
const fs = e => {
    $a(e), e.scope.on()
  },
  Hn = () => {
    Kt && Kt.scope.off(), $a(null)
  }
function bf(e) {
  return e.vnode.shapeFlag & 4
}
let oi = !1
function n0(e, t = !1) {
  oi = t
  const { props: n, children: s } = e.vnode,
    i = bf(e)
  zb(e, n, i, t), jb(e, s)
  const o = i ? s0(e, t) : void 0
  return (oi = !1), o
}
function s0(e, t) {
  const n = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = zd(new Proxy(e.ctx, Tb)))
  const { setup: s } = n
  if (s) {
    const i = (e.setupContext = s.length > 1 ? o0(e) : null)
    fs(e), _s()
    const o = bn(s, e, 0, [e.props, i])
    if ((xs(), Hn(), vd(o))) {
      if ((o.then(Hn, Hn), t))
        return o
          .then(r => {
            wc(e, r, t)
          })
          .catch(r => {
            Bo(r, e, 0)
          })
      e.asyncDep = o
    } else wc(e, o, t)
  } else wf(e, t)
}
function wc(e, t, n) {
  ct(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : Mt(t) && (e.setupState = Wd(t)),
    wf(e, n)
}
let yc
function wf(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && yc && !s.render) {
      const i = s.template || Fa(e).template
      if (i) {
        const { isCustomElement: o, compilerOptions: r } = e.appContext.config,
          { delimiters: a, compilerOptions: c } = s,
          l = $t($t({ isCustomElement: o, delimiters: a }, r), c)
        s.render = yc(i, l)
      }
    }
    e.render = s.render || Me
  }
  fs(e), _s(), Lb(e), xs(), Hn()
}
function i0(e) {
  return (
    e.attrsProxy ||
    (e.attrsProxy = new Proxy(e.attrs, {
      get(t, n) {
        return fe(e, 'get', '$attrs'), t[n]
      }
    }))
  )
}
function o0(e) {
  const t = n => {
    e.exposed = n || {}
  }
  return {
    get attrs() {
      return i0(e)
    },
    slots: e.slots,
    emit: e.emit,
    expose: t
  }
}
function Uo(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(Wd(zd(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Vs) return Vs[n](e)
        },
        has(t, n) {
          return n in t || n in Vs
        }
      }))
    )
}
function r0(e, t = !0) {
  return ct(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function a0(e) {
  return ct(e) && '__vccOpts' in e
}
const Ae = (e, t) => eb(e, t, oi)
function pi(e, t, n) {
  const s = arguments.length
  return s === 2
    ? Mt(t) && !st(t)
      ? Jr(t)
        ? Ot(e, null, [t])
        : Ot(e, t)
      : Ot(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Jr(n) && (n = [n]),
      Ot(e, t, n))
}
const l0 = Symbol.for('v-scx'),
  c0 = () => Te(l0),
  yf = '3.3.4',
  u0 = 'http://www.w3.org/2000/svg',
  Fn = typeof document < 'u' ? document : null,
  _c = Fn && Fn.createElement('template'),
  d0 = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: e => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const i = t
        ? Fn.createElementNS(u0, e)
        : Fn.createElement(e, n ? { is: n } : void 0)
      return (
        e === 'select' &&
          s &&
          s.multiple != null &&
          i.setAttribute('multiple', s.multiple),
        i
      )
    },
    createText: e => Fn.createTextNode(e),
    createComment: e => Fn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: e => e.parentNode,
    nextSibling: e => e.nextSibling,
    querySelector: e => Fn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, i, o) {
      const r = n ? n.previousSibling : t.lastChild
      if (i && (i === o || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === o || !(i = i.nextSibling));

        );
      else {
        _c.innerHTML = s ? `<svg>${e}</svg>` : e
        const a = _c.content
        if (s) {
          const c = a.firstChild
          for (; c.firstChild; ) a.appendChild(c.firstChild)
          a.removeChild(c)
        }
        t.insertBefore(a, n)
      }
      return [
        r ? r.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild
      ]
    }
  }
function f0(e, t, n) {
  const s = e._vtc
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : n
      ? e.setAttribute('class', t)
      : (e.className = t)
}
function h0(e, t, n) {
  const s = e.style,
    i = Nt(n)
  if (n && !i) {
    if (t && !Nt(t)) for (const o in t) n[o] == null && Gr(s, o, '')
    for (const o in n) Gr(s, o, n[o])
  } else {
    const o = s.display
    i ? t !== n && (s.cssText = n) : t && e.removeAttribute('style'),
      '_vod' in e && (s.display = o)
  }
}
const xc = /\s*!important$/
function Gr(e, t, n) {
  if (st(n)) n.forEach(s => Gr(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = p0(e, t)
    xc.test(n)
      ? e.setProperty(ys(s), n.replace(xc, ''), 'important')
      : (e[s] = n)
  }
}
const vc = ['Webkit', 'Moz', 'ms'],
  wr = {}
function p0(e, t) {
  const n = wr[t]
  if (n) return n
  let s = je(t)
  if (s !== 'filter' && s in e) return (wr[t] = s)
  s = Ro(s)
  for (let i = 0; i < vc.length; i++) {
    const o = vc[i] + s
    if (o in e) return (wr[t] = o)
  }
  return t
}
const Cc = 'http://www.w3.org/1999/xlink'
function g0(e, t, n, s, i) {
  if (s && t.startsWith('xlink:'))
    n == null
      ? e.removeAttributeNS(Cc, t.slice(6, t.length))
      : e.setAttributeNS(Cc, t, n)
  else {
    const o = vm(t)
    n == null || (o && !Sd(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : n)
  }
}
function m0(e, t, n, s, i, o, r) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && r(s, i, o), (e[t] = n ?? '')
    return
  }
  const a = e.tagName
  if (t === 'value' && a !== 'PROGRESS' && !a.includes('-')) {
    e._value = n
    const l = a === 'OPTION' ? e.getAttribute('value') : e.value,
      d = n ?? ''
    l !== d && (e.value = d), n == null && e.removeAttribute(t)
    return
  }
  let c = !1
  if (n === '' || n == null) {
    const l = typeof e[t]
    l === 'boolean'
      ? (n = Sd(n))
      : n == null && l === 'string'
      ? ((n = ''), (c = !0))
      : l === 'number' && ((n = 0), (c = !0))
  }
  try {
    e[t] = n
  } catch {}
  c && e.removeAttribute(t)
}
function es(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function b0(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
function w0(e, t, n, s, i = null) {
  const o = e._vei || (e._vei = {}),
    r = o[t]
  if (s && r) r.value = s
  else {
    const [a, c] = y0(t)
    if (s) {
      const l = (o[t] = v0(s, i))
      es(e, a, l, c)
    } else r && (b0(e, a, r, c), (o[t] = void 0))
  }
}
const kc = /(?:Once|Passive|Capture)$/
function y0(e) {
  let t
  if (kc.test(e)) {
    t = {}
    let s
    for (; (s = e.match(kc)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : ys(e.slice(2)), t]
}
let yr = 0
const _0 = Promise.resolve(),
  x0 = () => yr || (_0.then(() => (yr = 0)), (yr = Date.now()))
function v0(e, t) {
  const n = s => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    ye(C0(s, n.value), t, 5, [s])
  }
  return (n.value = e), (n.attached = x0()), n
}
function C0(e, t) {
  if (st(t)) {
    const n = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map(s => i => !i._stopped && s && s(i))
    )
  } else return t
}
const Sc = /^on[a-z]/,
  k0 = (e, t, n, s, i = !1, o, r, a, c) => {
    t === 'class'
      ? f0(e, s, i)
      : t === 'style'
      ? h0(e, n, s)
      : Mo(t)
      ? ya(t) || w0(e, t, n, s, r)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : S0(e, t, s, i)
        )
      ? m0(e, t, s, o, r, a, c)
      : (t === 'true-value'
          ? (e._trueValue = s)
          : t === 'false-value' && (e._falseValue = s),
        g0(e, t, s, i))
  }
function S0(e, t, n, s) {
  return s
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && Sc.test(t) && ct(n))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (Sc.test(t) && Nt(n))
    ? !1
    : t in e
}
const sn = 'transition',
  Es = 'animation',
  go = (e, { slots: t }) => pi(wb, P0(e), t)
go.displayName = 'Transition'
const _f = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}
go.props = $t({}, Qd, _f)
const Pn = (e, t = []) => {
    st(e) ? e.forEach(n => n(...t)) : e && e(...t)
  },
  Pc = e => (e ? (st(e) ? e.some(t => t.length > 1) : e.length > 1) : !1)
function P0(e) {
  const t = {}
  for (const I in e) I in _f || (t[I] = e[I])
  if (e.css === !1) return t
  const {
      name: n = 'v',
      type: s,
      duration: i,
      enterFromClass: o = `${n}-enter-from`,
      enterActiveClass: r = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: l = r,
      appearToClass: d = a,
      leaveFromClass: h = `${n}-leave-from`,
      leaveActiveClass: p = `${n}-leave-active`,
      leaveToClass: m = `${n}-leave-to`
    } = e,
    b = E0(i),
    w = b && b[0],
    x = b && b[1],
    {
      onBeforeEnter: C,
      onEnter: S,
      onEnterCancelled: D,
      onLeave: A,
      onLeaveCancelled: L,
      onBeforeAppear: j = C,
      onAppear: z = S,
      onAppearCancelled: T = D
    } = t,
    W = (I, q, Y) => {
      En(I, q ? d : a), En(I, q ? l : r), Y && Y()
    },
    $ = (I, q) => {
      ;(I._isLeaving = !1), En(I, h), En(I, m), En(I, p), q && q()
    },
    G = I => (q, Y) => {
      const ut = I ? z : S,
        at = () => W(q, I, Y)
      Pn(ut, [q, at]),
        Ec(() => {
          En(q, I ? c : o), on(q, I ? d : a), Pc(ut) || Ac(q, s, w, at)
        })
    }
  return $t(t, {
    onBeforeEnter(I) {
      Pn(C, [I]), on(I, o), on(I, r)
    },
    onBeforeAppear(I) {
      Pn(j, [I]), on(I, c), on(I, l)
    },
    onEnter: G(!1),
    onAppear: G(!0),
    onLeave(I, q) {
      I._isLeaving = !0
      const Y = () => $(I, q)
      on(I, h),
        M0(),
        on(I, p),
        Ec(() => {
          I._isLeaving && (En(I, h), on(I, m), Pc(A) || Ac(I, s, x, Y))
        }),
        Pn(A, [I, Y])
    },
    onEnterCancelled(I) {
      W(I, !1), Pn(D, [I])
    },
    onAppearCancelled(I) {
      W(I, !0), Pn(T, [I])
    },
    onLeaveCancelled(I) {
      $(I), Pn(L, [I])
    }
  })
}
function E0(e) {
  if (e == null) return null
  if (Mt(e)) return [_r(e.enter), _r(e.leave)]
  {
    const t = _r(e)
    return [t, t]
  }
}
function _r(e) {
  return mm(e)
}
function on(e, t) {
  t.split(/\s+/).forEach(n => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t)
}
function En(e, t) {
  t.split(/\s+/).forEach(s => s && e.classList.remove(s))
  const { _vtc: n } = e
  n && (n.delete(t), n.size || (e._vtc = void 0))
}
function Ec(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let A0 = 0
function Ac(e, t, n, s) {
  const i = (e._endId = ++A0),
    o = () => {
      i === e._endId && s()
    }
  if (n) return setTimeout(o, n)
  const { type: r, timeout: a, propCount: c } = O0(e, t)
  if (!r) return s()
  const l = r + 'end'
  let d = 0
  const h = () => {
      e.removeEventListener(l, p), o()
    },
    p = m => {
      m.target === e && ++d >= c && h()
    }
  setTimeout(() => {
    d < c && h()
  }, a + 1),
    e.addEventListener(l, p)
}
function O0(e, t) {
  const n = window.getComputedStyle(e),
    s = b => (n[b] || '').split(', '),
    i = s(`${sn}Delay`),
    o = s(`${sn}Duration`),
    r = Oc(i, o),
    a = s(`${Es}Delay`),
    c = s(`${Es}Duration`),
    l = Oc(a, c)
  let d = null,
    h = 0,
    p = 0
  t === sn
    ? r > 0 && ((d = sn), (h = r), (p = o.length))
    : t === Es
    ? l > 0 && ((d = Es), (h = l), (p = c.length))
    : ((h = Math.max(r, l)),
      (d = h > 0 ? (r > l ? sn : Es) : null),
      (p = d ? (d === sn ? o.length : c.length) : 0))
  const m =
    d === sn && /\b(transform|all)(,|$)/.test(s(`${sn}Property`).toString())
  return { type: d, timeout: h, propCount: p, hasTransform: m }
}
function Oc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((n, s) => Mc(n) + Mc(e[s])))
}
function Mc(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function M0() {
  return document.body.offsetHeight
}
const Tc = e => {
  const t = e.props['onUpdate:modelValue'] || !1
  return st(t) ? n => Ji(t, n) : t
}
function T0(e) {
  e.target.composing = !0
}
function Lc(e) {
  const t = e.target
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
}
const L0 = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
      e._assign = Tc(i)
      const o = s || (i.props && i.props.type === 'number')
      es(e, t ? 'change' : 'input', r => {
        if (r.target.composing) return
        let a = e.value
        n && (a = a.trim()), o && (a = Fr(a)), e._assign(a)
      }),
        n &&
          es(e, 'change', () => {
            e.value = e.value.trim()
          }),
        t ||
          (es(e, 'compositionstart', T0),
          es(e, 'compositionend', Lc),
          es(e, 'change', Lc))
    },
    mounted(e, { value: t }) {
      e.value = t ?? ''
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: i } },
      o
    ) {
      if (
        ((e._assign = Tc(o)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== 'range' &&
            (n ||
              (s && e.value.trim() === t) ||
              ((i || e.type === 'number') && Fr(e.value) === t))))
      )
        return
      const r = t ?? ''
      e.value !== r && (e.value = r)
    }
  },
  R0 = $t({ patchProp: k0 }, d0)
let Rc
function D0() {
  return Rc || (Rc = Vb(R0))
}
const I0 = (...e) => {
  const t = D0().createApp(...e),
    { mount: n } = t
  return (
    (t.mount = s => {
      const i = F0(s)
      if (!i) return
      const o = t._component
      !ct(o) && !o.render && !o.template && (o.template = i.innerHTML),
        (i.innerHTML = '')
      const r = n(i, !1, i instanceof SVGElement)
      return (
        i instanceof Element &&
          (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')),
        r
      )
    }),
    t
  )
}
function F0(e) {
  return Nt(e) ? document.querySelector(e) : e
}
/*!
 * vue-router v4.2.4
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const ns = typeof window < 'u'
function B0(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const vt = Object.assign
function xr(e, t) {
  const n = {}
  for (const s in t) {
    const i = t[s]
    n[s] = Re(i) ? i.map(e) : e(i)
  }
  return n
}
const qs = () => {},
  Re = Array.isArray,
  N0 = /\/$/,
  z0 = e => e.replace(N0, '')
function vr(e, t, n = '/') {
  let s,
    i = {},
    o = '',
    r = ''
  const a = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    a < c && a >= 0 && (c = -1),
    c > -1 &&
      ((s = t.slice(0, c)),
      (o = t.slice(c + 1, a > -1 ? a : t.length)),
      (i = e(o))),
    a > -1 && ((s = s || t.slice(0, a)), (r = t.slice(a, t.length))),
    (s = W0(s ?? t, n)),
    { fullPath: s + (o && '?') + o + r, path: s, query: i, hash: r }
  )
}
function $0(e, t) {
  const n = t.query ? e(t.query) : ''
  return t.path + (n && '?') + n + (t.hash || '')
}
function Dc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function H0(e, t, n) {
  const s = t.matched.length - 1,
    i = n.matched.length - 1
  return (
    s > -1 &&
    s === i &&
    hs(t.matched[s], n.matched[i]) &&
    xf(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function hs(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function xf(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!j0(e[n], t[n])) return !1
  return !0
}
function j0(e, t) {
  return Re(e) ? Ic(e, t) : Re(t) ? Ic(t, e) : e === t
}
function Ic(e, t) {
  return Re(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function W0(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    i = s[s.length - 1]
  ;(i === '..' || i === '.') && s.push('')
  let o = n.length - 1,
    r,
    a
  for (r = 0; r < s.length; r++)
    if (((a = s[r]), a !== '.'))
      if (a === '..') o > 1 && o--
      else break
  return (
    n.slice(0, o).join('/') +
    '/' +
    s.slice(r - (r === s.length ? 1 : 0)).join('/')
  )
}
var ri
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(ri || (ri = {}))
var Ks
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Ks || (Ks = {}))
function V0(e) {
  if (!e)
    if (ns) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), z0(e)
}
const U0 = /^[^#]+#/
function q0(e, t) {
  return e.replace(U0, '#') + t
}
function K0(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  }
}
const qo = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function Y0(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      i =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!i) return
    t = K0(i, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      )
}
function Fc(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const Zr = new Map()
function X0(e, t) {
  Zr.set(e, t)
}
function J0(e) {
  const t = Zr.get(e)
  return Zr.delete(e), t
}
let G0 = () => location.protocol + '//' + location.host
function vf(e, t) {
  const { pathname: n, search: s, hash: i } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let a = i.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = i.slice(a)
    return c[0] !== '/' && (c = '/' + c), Dc(c, '')
  }
  return Dc(n, e) + s + i
}
function Z0(e, t, n, s) {
  let i = [],
    o = [],
    r = null
  const a = ({ state: p }) => {
    const m = vf(e, location),
      b = n.value,
      w = t.value
    let x = 0
    if (p) {
      if (((n.value = m), (t.value = p), r && r === b)) {
        r = null
        return
      }
      x = w ? p.position - w.position : 0
    } else s(m)
    i.forEach(C => {
      C(n.value, b, {
        delta: x,
        type: ri.pop,
        direction: x ? (x > 0 ? Ks.forward : Ks.back) : Ks.unknown
      })
    })
  }
  function c() {
    r = n.value
  }
  function l(p) {
    i.push(p)
    const m = () => {
      const b = i.indexOf(p)
      b > -1 && i.splice(b, 1)
    }
    return o.push(m), m
  }
  function d() {
    const { history: p } = window
    p.state && p.replaceState(vt({}, p.state, { scroll: qo() }), '')
  }
  function h() {
    for (const p of o) p()
    ;(o = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', d)
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', d, { passive: !0 }),
    { pauseListeners: c, listen: l, destroy: h }
  )
}
function Bc(e, t, n, s = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: i ? qo() : null
  }
}
function Q0(e) {
  const { history: t, location: n } = window,
    s = { value: vf(e, n) },
    i = { value: t.state }
  i.value ||
    o(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function o(c, l, d) {
    const h = e.indexOf('#'),
      p =
        h > -1
          ? (n.host && document.querySelector('base') ? e : e.slice(h)) + c
          : G0() + e + c
    try {
      t[d ? 'replaceState' : 'pushState'](l, '', p), (i.value = l)
    } catch (m) {
      console.error(m), n[d ? 'replace' : 'assign'](p)
    }
  }
  function r(c, l) {
    const d = vt({}, t.state, Bc(i.value.back, c, i.value.forward, !0), l, {
      position: i.value.position
    })
    o(c, d, !0), (s.value = c)
  }
  function a(c, l) {
    const d = vt({}, i.value, t.state, { forward: c, scroll: qo() })
    o(d.current, d, !0)
    const h = vt({}, Bc(s.value, c, null), { position: d.position + 1 }, l)
    o(c, h, !1), (s.value = c)
  }
  return { location: s, state: i, push: a, replace: r }
}
function tw(e) {
  e = V0(e)
  const t = Q0(e),
    n = Z0(e, t.state, t.location, t.replace)
  function s(o, r = !0) {
    r || n.pauseListeners(), history.go(o)
  }
  const i = vt(
    { location: '', base: e, go: s, createHref: q0.bind(null, e) },
    t,
    n
  )
  return (
    Object.defineProperty(i, 'location', {
      enumerable: !0,
      get: () => t.location.value
    }),
    Object.defineProperty(i, 'state', {
      enumerable: !0,
      get: () => t.state.value
    }),
    i
  )
}
function ew(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Cf(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const rn = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0
  },
  kf = Symbol('')
var Nc
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Nc || (Nc = {}))
function ps(e, t) {
  return vt(new Error(), { type: e, [kf]: !0 }, t)
}
function Ve(e, t) {
  return e instanceof Error && kf in e && (t == null || !!(e.type & t))
}
const zc = '[^/]+?',
  nw = { sensitive: !1, strict: !1, start: !0, end: !0 },
  sw = /[.+*?^${}()[\]/\\]/g
function iw(e, t) {
  const n = vt({}, nw, t),
    s = []
  let i = n.start ? '^' : ''
  const o = []
  for (const l of e) {
    const d = l.length ? [] : [90]
    n.strict && !l.length && (i += '/')
    for (let h = 0; h < l.length; h++) {
      const p = l[h]
      let m = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0)
        h || (i += '/'), (i += p.value.replace(sw, '\\$&')), (m += 40)
      else if (p.type === 1) {
        const { value: b, repeatable: w, optional: x, regexp: C } = p
        o.push({ name: b, repeatable: w, optional: x })
        const S = C || zc
        if (S !== zc) {
          m += 10
          try {
            new RegExp(`(${S})`)
          } catch (A) {
            throw new Error(
              `Invalid custom RegExp for param "${b}" (${S}): ` + A.message
            )
          }
        }
        let D = w ? `((?:${S})(?:/(?:${S}))*)` : `(${S})`
        h || (D = x && l.length < 2 ? `(?:/${D})` : '/' + D),
          x && (D += '?'),
          (i += D),
          (m += 20),
          x && (m += -8),
          w && (m += -20),
          S === '.*' && (m += -50)
      }
      d.push(m)
    }
    s.push(d)
  }
  if (n.strict && n.end) {
    const l = s.length - 1
    s[l][s[l].length - 1] += 0.7000000000000001
  }
  n.strict || (i += '/?'), n.end ? (i += '$') : n.strict && (i += '(?:/|$)')
  const r = new RegExp(i, n.sensitive ? '' : 'i')
  function a(l) {
    const d = l.match(r),
      h = {}
    if (!d) return null
    for (let p = 1; p < d.length; p++) {
      const m = d[p] || '',
        b = o[p - 1]
      h[b.name] = m && b.repeatable ? m.split('/') : m
    }
    return h
  }
  function c(l) {
    let d = '',
      h = !1
    for (const p of e) {
      ;(!h || !d.endsWith('/')) && (d += '/'), (h = !1)
      for (const m of p)
        if (m.type === 0) d += m.value
        else if (m.type === 1) {
          const { value: b, repeatable: w, optional: x } = m,
            C = b in l ? l[b] : ''
          if (Re(C) && !w)
            throw new Error(
              `Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`
            )
          const S = Re(C) ? C.join('/') : C
          if (!S)
            if (x)
              p.length < 2 &&
                (d.endsWith('/') ? (d = d.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${b}"`)
          d += S
        }
    }
    return d || '/'
  }
  return { re: r, score: s, keys: o, parse: a, stringify: c }
}
function ow(e, t) {
  let n = 0
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function rw(e, t) {
  let n = 0
  const s = e.score,
    i = t.score
  for (; n < s.length && n < i.length; ) {
    const o = ow(s[n], i[n])
    if (o) return o
    n++
  }
  if (Math.abs(i.length - s.length) === 1) {
    if ($c(s)) return 1
    if ($c(i)) return -1
  }
  return i.length - s.length
}
function $c(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const aw = { type: 0, value: '' },
  lw = /[a-zA-Z0-9_]/
function cw(e) {
  if (!e) return [[]]
  if (e === '/') return [[aw]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(m) {
    throw new Error(`ERR (${n})/"${l}": ${m}`)
  }
  let n = 0,
    s = n
  const i = []
  let o
  function r() {
    o && i.push(o), (o = [])
  }
  let a = 0,
    c,
    l = '',
    d = ''
  function h() {
    l &&
      (n === 0
        ? o.push({ type: 0, value: l })
        : n === 1 || n === 2 || n === 3
        ? (o.length > 1 &&
            (c === '*' || c === '+') &&
            t(
              `A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: l,
            regexp: d,
            repeatable: c === '*' || c === '+',
            optional: c === '*' || c === '?'
          }))
        : t('Invalid state to consume buffer'),
      (l = ''))
  }
  function p() {
    l += c
  }
  for (; a < e.length; ) {
    if (((c = e[a++]), c === '\\' && n !== 2)) {
      ;(s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        c === '/' ? (l && h(), r()) : c === ':' ? (h(), (n = 1)) : p()
        break
      case 4:
        p(), (n = s)
        break
      case 1:
        c === '('
          ? (n = 2)
          : lw.test(c)
          ? p()
          : (h(), (n = 0), c !== '*' && c !== '?' && c !== '+' && a--)
        break
      case 2:
        c === ')'
          ? d[d.length - 1] == '\\'
            ? (d = d.slice(0, -1) + c)
            : (n = 3)
          : (d += c)
        break
      case 3:
        h(), (n = 0), c !== '*' && c !== '?' && c !== '+' && a--, (d = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${l}"`), h(), r(), i
}
function uw(e, t, n) {
  const s = iw(cw(e.path), n),
    i = vt(s, { record: e, parent: t, children: [], alias: [] })
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function dw(e, t) {
  const n = [],
    s = new Map()
  t = Wc({ strict: !1, end: !0, sensitive: !1 }, t)
  function i(d) {
    return s.get(d)
  }
  function o(d, h, p) {
    const m = !p,
      b = fw(d)
    b.aliasOf = p && p.record
    const w = Wc(t, d),
      x = [b]
    if ('alias' in d) {
      const D = typeof d.alias == 'string' ? [d.alias] : d.alias
      for (const A of D)
        x.push(
          vt({}, b, {
            components: p ? p.record.components : b.components,
            path: A,
            aliasOf: p ? p.record : b
          })
        )
    }
    let C, S
    for (const D of x) {
      const { path: A } = D
      if (h && A[0] !== '/') {
        const L = h.record.path,
          j = L[L.length - 1] === '/' ? '' : '/'
        D.path = h.record.path + (A && j + A)
      }
      if (
        ((C = uw(D, h, w)),
        p
          ? p.alias.push(C)
          : ((S = S || C),
            S !== C && S.alias.push(C),
            m && d.name && !jc(C) && r(d.name)),
        b.children)
      ) {
        const L = b.children
        for (let j = 0; j < L.length; j++) o(L[j], C, p && p.children[j])
      }
      ;(p = p || C),
        ((C.record.components && Object.keys(C.record.components).length) ||
          C.record.name ||
          C.record.redirect) &&
          c(C)
    }
    return S
      ? () => {
          r(S)
        }
      : qs
  }
  function r(d) {
    if (Cf(d)) {
      const h = s.get(d)
      h &&
        (s.delete(d),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(r),
        h.alias.forEach(r))
    } else {
      const h = n.indexOf(d)
      h > -1 &&
        (n.splice(h, 1),
        d.record.name && s.delete(d.record.name),
        d.children.forEach(r),
        d.alias.forEach(r))
    }
  }
  function a() {
    return n
  }
  function c(d) {
    let h = 0
    for (
      ;
      h < n.length &&
      rw(d, n[h]) >= 0 &&
      (d.record.path !== n[h].record.path || !Sf(d, n[h]));

    )
      h++
    n.splice(h, 0, d), d.record.name && !jc(d) && s.set(d.record.name, d)
  }
  function l(d, h) {
    let p,
      m = {},
      b,
      w
    if ('name' in d && d.name) {
      if (((p = s.get(d.name)), !p)) throw ps(1, { location: d })
      ;(w = p.record.name),
        (m = vt(
          Hc(
            h.params,
            p.keys.filter(S => !S.optional).map(S => S.name)
          ),
          d.params &&
            Hc(
              d.params,
              p.keys.map(S => S.name)
            )
        )),
        (b = p.stringify(m))
    } else if ('path' in d)
      (b = d.path),
        (p = n.find(S => S.re.test(b))),
        p && ((m = p.parse(b)), (w = p.record.name))
    else {
      if (((p = h.name ? s.get(h.name) : n.find(S => S.re.test(h.path))), !p))
        throw ps(1, { location: d, currentLocation: h })
      ;(w = p.record.name),
        (m = vt({}, h.params, d.params)),
        (b = p.stringify(m))
    }
    const x = []
    let C = p
    for (; C; ) x.unshift(C.record), (C = C.parent)
    return { name: w, path: b, params: m, matched: x, meta: pw(x) }
  }
  return (
    e.forEach(d => o(d)),
    {
      addRoute: o,
      resolve: l,
      removeRoute: r,
      getRoutes: a,
      getRecordMatcher: i
    }
  )
}
function Hc(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])
  return n
}
function fw(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: hw(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component }
  }
}
function hw(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n
  return t
}
function jc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function pw(e) {
  return e.reduce((t, n) => vt(t, n.meta), {})
}
function Wc(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]
  return n
}
function Sf(e, t) {
  return t.children.some(n => n === e || Sf(e, n))
}
const Pf = /#/g,
  gw = /&/g,
  mw = /\//g,
  bw = /=/g,
  ww = /\?/g,
  Ef = /\+/g,
  yw = /%5B/g,
  _w = /%5D/g,
  Af = /%5E/g,
  xw = /%60/g,
  Of = /%7B/g,
  vw = /%7C/g,
  Mf = /%7D/g,
  Cw = /%20/g
function Ha(e) {
  return encodeURI('' + e)
    .replace(vw, '|')
    .replace(yw, '[')
    .replace(_w, ']')
}
function kw(e) {
  return Ha(e).replace(Of, '{').replace(Mf, '}').replace(Af, '^')
}
function Qr(e) {
  return Ha(e)
    .replace(Ef, '%2B')
    .replace(Cw, '+')
    .replace(Pf, '%23')
    .replace(gw, '%26')
    .replace(xw, '`')
    .replace(Of, '{')
    .replace(Mf, '}')
    .replace(Af, '^')
}
function Sw(e) {
  return Qr(e).replace(bw, '%3D')
}
function Pw(e) {
  return Ha(e).replace(Pf, '%23').replace(ww, '%3F')
}
function Ew(e) {
  return e == null ? '' : Pw(e).replace(mw, '%2F')
}
function mo(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function Aw(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let i = 0; i < s.length; ++i) {
    const o = s[i].replace(Ef, ' '),
      r = o.indexOf('='),
      a = mo(r < 0 ? o : o.slice(0, r)),
      c = r < 0 ? null : mo(o.slice(r + 1))
    if (a in t) {
      let l = t[a]
      Re(l) || (l = t[a] = [l]), l.push(c)
    } else t[a] = c
  }
  return t
}
function Vc(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = Sw(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ;(Re(s) ? s.map(o => o && Qr(o)) : [s && Qr(s)]).forEach(o => {
      o !== void 0 &&
        ((t += (t.length ? '&' : '') + n), o != null && (t += '=' + o))
    })
  }
  return t
}
function Ow(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = Re(s)
        ? s.map(i => (i == null ? null : '' + i))
        : s == null
        ? s
        : '' + s)
  }
  return t
}
const Mw = Symbol(''),
  Uc = Symbol(''),
  Ko = Symbol(''),
  ja = Symbol(''),
  ta = Symbol('')
function As() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const i = e.indexOf(s)
        i > -1 && e.splice(i, 1)
      }
    )
  }
  function n() {
    e = []
  }
  return { add: t, list: () => e.slice(), reset: n }
}
function dn(e, t, n, s, i) {
  const o = s && (s.enterCallbacks[i] = s.enterCallbacks[i] || [])
  return () =>
    new Promise((r, a) => {
      const c = h => {
          h === !1
            ? a(ps(4, { from: n, to: t }))
            : h instanceof Error
            ? a(h)
            : ew(h)
            ? a(ps(2, { from: t, to: h }))
            : (o &&
                s.enterCallbacks[i] === o &&
                typeof h == 'function' &&
                o.push(h),
              r())
        },
        l = e.call(s && s.instances[i], t, n, c)
      let d = Promise.resolve(l)
      e.length < 3 && (d = d.then(c)), d.catch(h => a(h))
    })
}
function Cr(e, t, n, s) {
  const i = []
  for (const o of e)
    for (const r in o.components) {
      let a = o.components[r]
      if (!(t !== 'beforeRouteEnter' && !o.instances[r]))
        if (Tw(a)) {
          const l = (a.__vccOpts || a)[t]
          l && i.push(dn(l, n, s, o, r))
        } else {
          let c = a()
          i.push(() =>
            c.then(l => {
              if (!l)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${r}" at "${o.path}"`)
                )
              const d = B0(l) ? l.default : l
              o.components[r] = d
              const p = (d.__vccOpts || d)[t]
              return p && dn(p, n, s, o, r)()
            })
          )
        }
    }
  return i
}
function Tw(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function qc(e) {
  const t = Te(Ko),
    n = Te(ja),
    s = Ae(() => t.resolve(He(e.to))),
    i = Ae(() => {
      const { matched: c } = s.value,
        { length: l } = c,
        d = c[l - 1],
        h = n.matched
      if (!d || !h.length) return -1
      const p = h.findIndex(hs.bind(null, d))
      if (p > -1) return p
      const m = Kc(c[l - 2])
      return l > 1 && Kc(d) === m && h[h.length - 1].path !== m
        ? h.findIndex(hs.bind(null, c[l - 2]))
        : p
    }),
    o = Ae(() => i.value > -1 && Dw(n.params, s.value.params)),
    r = Ae(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        xf(n.params, s.value.params)
    )
  function a(c = {}) {
    return Rw(c)
      ? t[He(e.replace) ? 'replace' : 'push'](He(e.to)).catch(qs)
      : Promise.resolve()
  }
  return {
    route: s,
    href: Ae(() => s.value.href),
    isActive: o,
    isExactActive: r,
    navigate: a
  }
}
const Lw = zo({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' }
    },
    useLink: qc,
    setup(e, { slots: t }) {
      const n = Io(qc(e)),
        { options: s } = Te(Ko),
        i = Ae(() => ({
          [Yc(e.activeClass, s.linkActiveClass, 'router-link-active')]:
            n.isActive,
          [Yc(
            e.exactActiveClass,
            s.linkExactActiveClass,
            'router-link-exact-active'
          )]: n.isExactActive
        }))
      return () => {
        const o = t.default && t.default(n)
        return e.custom
          ? o
          : pi(
              'a',
              {
                'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value
              },
              o
            )
      }
    }
  }),
  bo = Lw
function Rw(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Dw(e, t) {
  for (const n in t) {
    const s = t[n],
      i = e[n]
    if (typeof s == 'string') {
      if (s !== i) return !1
    } else if (!Re(i) || i.length !== s.length || s.some((o, r) => o !== i[r]))
      return !1
  }
  return !0
}
function Kc(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Yc = (e, t, n) => e ?? t ?? n,
  Iw = zo({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Te(ta),
        i = Ae(() => e.route || s.value),
        o = Te(Uc, 0),
        r = Ae(() => {
          let l = He(o)
          const { matched: d } = i.value
          let h
          for (; (h = d[l]) && !h.components; ) l++
          return l
        }),
        a = Ae(() => i.value.matched[r.value])
      Zi(
        Uc,
        Ae(() => r.value + 1)
      ),
        Zi(Mw, a),
        Zi(ta, i)
      const c = Rt()
      return (
        js(
          () => [c.value, a.value, e.name],
          ([l, d, h], [p, m, b]) => {
            d &&
              ((d.instances[h] = l),
              m &&
                m !== d &&
                l &&
                l === p &&
                (d.leaveGuards.size || (d.leaveGuards = m.leaveGuards),
                d.updateGuards.size || (d.updateGuards = m.updateGuards))),
              l &&
                d &&
                (!m || !hs(d, m) || !p) &&
                (d.enterCallbacks[h] || []).forEach(w => w(l))
          },
          { flush: 'post' }
        ),
        () => {
          const l = i.value,
            d = e.name,
            h = a.value,
            p = h && h.components[d]
          if (!p) return Xc(n.default, { Component: p, route: l })
          const m = h.props[d],
            b = m
              ? m === !0
                ? l.params
                : typeof m == 'function'
                ? m(l)
                : m
              : null,
            x = pi(
              p,
              vt({}, b, t, {
                onVnodeUnmounted: C => {
                  C.component.isUnmounted && (h.instances[d] = null)
                },
                ref: c
              })
            )
          return Xc(n.default, { Component: x, route: l }) || x
        }
      )
    }
  })
function Xc(e, t) {
  if (!e) return null
  const n = e(t)
  return n.length === 1 ? n[0] : n
}
const Tf = Iw
function Fw(e) {
  const t = dw(e.routes, e),
    n = e.parseQuery || Aw,
    s = e.stringifyQuery || Vc,
    i = e.history,
    o = As(),
    r = As(),
    a = As(),
    c = Ta(rn)
  let l = rn
  ns &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const d = xr.bind(null, R => '' + R),
    h = xr.bind(null, Ew),
    p = xr.bind(null, mo)
  function m(R, J) {
    let V, Q
    return (
      Cf(R) ? ((V = t.getRecordMatcher(R)), (Q = J)) : (Q = R), t.addRoute(Q, V)
    )
  }
  function b(R) {
    const J = t.getRecordMatcher(R)
    J && t.removeRoute(J)
  }
  function w() {
    return t.getRoutes().map(R => R.record)
  }
  function x(R) {
    return !!t.getRecordMatcher(R)
  }
  function C(R, J) {
    if (((J = vt({}, J || c.value)), typeof R == 'string')) {
      const k = vr(n, R, J.path),
        P = t.resolve({ path: k.path }, J),
        F = i.createHref(k.fullPath)
      return vt(k, P, {
        params: p(P.params),
        hash: mo(k.hash),
        redirectedFrom: void 0,
        href: F
      })
    }
    let V
    if ('path' in R) V = vt({}, R, { path: vr(n, R.path, J.path).path })
    else {
      const k = vt({}, R.params)
      for (const P in k) k[P] == null && delete k[P]
      ;(V = vt({}, R, { params: h(k) })), (J.params = h(J.params))
    }
    const Q = t.resolve(V, J),
      wt = R.hash || ''
    Q.params = d(p(Q.params))
    const _ = $0(s, vt({}, R, { hash: kw(wt), path: Q.path })),
      v = i.createHref(_)
    return vt(
      { fullPath: _, hash: wt, query: s === Vc ? Ow(R.query) : R.query || {} },
      Q,
      { redirectedFrom: void 0, href: v }
    )
  }
  function S(R) {
    return typeof R == 'string' ? vr(n, R, c.value.path) : vt({}, R)
  }
  function D(R, J) {
    if (l !== R) return ps(8, { from: J, to: R })
  }
  function A(R) {
    return z(R)
  }
  function L(R) {
    return A(vt(S(R), { replace: !0 }))
  }
  function j(R) {
    const J = R.matched[R.matched.length - 1]
    if (J && J.redirect) {
      const { redirect: V } = J
      let Q = typeof V == 'function' ? V(R) : V
      return (
        typeof Q == 'string' &&
          ((Q = Q.includes('?') || Q.includes('#') ? (Q = S(Q)) : { path: Q }),
          (Q.params = {})),
        vt(
          { query: R.query, hash: R.hash, params: 'path' in Q ? {} : R.params },
          Q
        )
      )
    }
  }
  function z(R, J) {
    const V = (l = C(R)),
      Q = c.value,
      wt = R.state,
      _ = R.force,
      v = R.replace === !0,
      k = j(V)
    if (k)
      return z(
        vt(S(k), {
          state: typeof k == 'object' ? vt({}, wt, k.state) : wt,
          force: _,
          replace: v
        }),
        J || V
      )
    const P = V
    P.redirectedFrom = J
    let F
    return (
      !_ && H0(s, Q, V) && ((F = ps(16, { to: P, from: Q })), Xt(Q, Q, !0, !1)),
      (F ? Promise.resolve(F) : $(P, Q))
        .catch(N => (Ve(N) ? (Ve(N, 2) ? N : Tt(N)) : et(N, P, Q)))
        .then(N => {
          if (N) {
            if (Ve(N, 2))
              return z(
                vt({ replace: v }, S(N.to), {
                  state: typeof N.to == 'object' ? vt({}, wt, N.to.state) : wt,
                  force: _
                }),
                J || P
              )
          } else N = I(P, Q, !0, v, wt)
          return G(P, Q, N), N
        })
    )
  }
  function T(R, J) {
    const V = D(R, J)
    return V ? Promise.reject(V) : Promise.resolve()
  }
  function W(R) {
    const J = ne.values().next().value
    return J && typeof J.runWithContext == 'function'
      ? J.runWithContext(R)
      : R()
  }
  function $(R, J) {
    let V
    const [Q, wt, _] = Bw(R, J)
    V = Cr(Q.reverse(), 'beforeRouteLeave', R, J)
    for (const k of Q)
      k.leaveGuards.forEach(P => {
        V.push(dn(P, R, J))
      })
    const v = T.bind(null, R, J)
    return (
      V.push(v),
      St(V)
        .then(() => {
          V = []
          for (const k of o.list()) V.push(dn(k, R, J))
          return V.push(v), St(V)
        })
        .then(() => {
          V = Cr(wt, 'beforeRouteUpdate', R, J)
          for (const k of wt)
            k.updateGuards.forEach(P => {
              V.push(dn(P, R, J))
            })
          return V.push(v), St(V)
        })
        .then(() => {
          V = []
          for (const k of _)
            if (k.beforeEnter)
              if (Re(k.beforeEnter))
                for (const P of k.beforeEnter) V.push(dn(P, R, J))
              else V.push(dn(k.beforeEnter, R, J))
          return V.push(v), St(V)
        })
        .then(
          () => (
            R.matched.forEach(k => (k.enterCallbacks = {})),
            (V = Cr(_, 'beforeRouteEnter', R, J)),
            V.push(v),
            St(V)
          )
        )
        .then(() => {
          V = []
          for (const k of r.list()) V.push(dn(k, R, J))
          return V.push(v), St(V)
        })
        .catch(k => (Ve(k, 8) ? k : Promise.reject(k)))
    )
  }
  function G(R, J, V) {
    a.list().forEach(Q => W(() => Q(R, J, V)))
  }
  function I(R, J, V, Q, wt) {
    const _ = D(R, J)
    if (_) return _
    const v = J === rn,
      k = ns ? history.state : {}
    V &&
      (Q || v
        ? i.replace(R.fullPath, vt({ scroll: v && k && k.scroll }, wt))
        : i.push(R.fullPath, wt)),
      (c.value = R),
      Xt(R, J, V, v),
      Tt()
  }
  let q
  function Y() {
    q ||
      (q = i.listen((R, J, V) => {
        if (!se.listening) return
        const Q = C(R),
          wt = j(Q)
        if (wt) {
          z(vt(wt, { replace: !0 }), Q).catch(qs)
          return
        }
        l = Q
        const _ = c.value
        ns && X0(Fc(_.fullPath, V.delta), qo()),
          $(Q, _)
            .catch(v =>
              Ve(v, 12)
                ? v
                : Ve(v, 2)
                ? (z(v.to, Q)
                    .then(k => {
                      Ve(k, 20) && !V.delta && V.type === ri.pop && i.go(-1, !1)
                    })
                    .catch(qs),
                  Promise.reject())
                : (V.delta && i.go(-V.delta, !1), et(v, Q, _))
            )
            .then(v => {
              ;(v = v || I(Q, _, !1)),
                v &&
                  (V.delta && !Ve(v, 8)
                    ? i.go(-V.delta, !1)
                    : V.type === ri.pop && Ve(v, 20) && i.go(-1, !1)),
                G(Q, _, v)
            })
            .catch(qs)
      }))
  }
  let ut = As(),
    at = As(),
    it
  function et(R, J, V) {
    Tt(R)
    const Q = at.list()
    return (
      Q.length ? Q.forEach(wt => wt(R, J, V)) : console.error(R),
      Promise.reject(R)
    )
  }
  function It() {
    return it && c.value !== rn
      ? Promise.resolve()
      : new Promise((R, J) => {
          ut.add([R, J])
        })
  }
  function Tt(R) {
    return (
      it ||
        ((it = !R),
        Y(),
        ut.list().forEach(([J, V]) => (R ? V(R) : J())),
        ut.reset()),
      R
    )
  }
  function Xt(R, J, V, Q) {
    const { scrollBehavior: wt } = e
    if (!ns || !wt) return Promise.resolve()
    const _ =
      (!V && J0(Fc(R.fullPath, 0))) ||
      ((Q || !V) && history.state && history.state.scroll) ||
      null
    return Ud()
      .then(() => wt(R, J, _))
      .then(v => v && Y0(v))
      .catch(v => et(v, R, J))
  }
  const kt = R => i.go(R)
  let Ut
  const ne = new Set(),
    se = {
      currentRoute: c,
      listening: !0,
      addRoute: m,
      removeRoute: b,
      hasRoute: x,
      getRoutes: w,
      resolve: C,
      options: e,
      push: A,
      replace: L,
      go: kt,
      back: () => kt(-1),
      forward: () => kt(1),
      beforeEach: o.add,
      beforeResolve: r.add,
      afterEach: a.add,
      onError: at.add,
      isReady: It,
      install(R) {
        const J = this
        R.component('RouterLink', bo),
          R.component('RouterView', Tf),
          (R.config.globalProperties.$router = J),
          Object.defineProperty(R.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => He(c)
          }),
          ns &&
            !Ut &&
            c.value === rn &&
            ((Ut = !0), A(i.location).catch(wt => {}))
        const V = {}
        for (const wt in rn)
          Object.defineProperty(V, wt, {
            get: () => c.value[wt],
            enumerable: !0
          })
        R.provide(Ko, J), R.provide(ja, Bd(V)), R.provide(ta, c)
        const Q = R.unmount
        ne.add(R),
          (R.unmount = function () {
            ne.delete(R),
              ne.size < 1 &&
                ((l = rn),
                q && q(),
                (q = null),
                (c.value = rn),
                (Ut = !1),
                (it = !1)),
              Q()
          })
      }
    }
  function St(R) {
    return R.reduce((J, V) => J.then(() => W(V)), Promise.resolve())
  }
  return se
}
function Bw(e, t) {
  const n = [],
    s = [],
    i = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let r = 0; r < o; r++) {
    const a = t.matched[r]
    a && (e.matched.find(l => hs(l, a)) ? s.push(a) : n.push(a))
    const c = e.matched[r]
    c && (t.matched.find(l => hs(l, c)) || i.push(c))
  }
  return [n, s, i]
}
function Lf() {
  return Te(Ko)
}
function Rf() {
  return Te(ja)
}
const Nw = '/weather-app/assets/logo-738946a9.avif',
  zw = nt(
    'div',
    { class: 'logo' },
    [nt('img', { src: Nw, alt: 'logo', class: 'logo__image' }), ds(' SkyVue ')],
    -1
  ),
  Df = {
    __name: 'Logo',
    setup(e) {
      return (t, n) => (
        ft(),
        ii(
          He(bo),
          { to: { name: 'home' }, class: 'logo-container' },
          { default: us(() => [zw]), _: 1 }
        )
      )
    }
  },
  If = {
    __name: 'Navigation',
    setup(e) {
      return (t, n) => (
        ft(),
        gt('div', null, [
          Ot(
            He(bo),
            { to: { name: 'home' }, class: 'navigation__link' },
            { default: us(() => [ds(' Home ')]), _: 1 }
          ),
          Ot(
            He(bo),
            { to: { name: 'Favourites' }, class: 'navigation__link' },
            { default: us(() => [ds(' Favourites ')]), _: 1 }
          )
        ])
      )
    }
  },
  Ff = '/weather-app/assets/favorite-72c0af0f.png'
function Bf(e, t) {
  return function () {
    return e.apply(t, arguments)
  }
}
const { toString: $w } = Object.prototype,
  { getPrototypeOf: Wa } = Object,
  Yo = (e => t => {
    const n = $w.call(t)
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase())
  })(Object.create(null)),
  We = e => ((e = e.toLowerCase()), t => Yo(t) === e),
  Xo = e => t => typeof t === e,
  { isArray: vs } = Array,
  ai = Xo('undefined')
function Hw(e) {
  return (
    e !== null &&
    !ai(e) &&
    e.constructor !== null &&
    !ai(e.constructor) &&
    _e(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  )
}
const Nf = We('ArrayBuffer')
function jw(e) {
  let t
  return (
    typeof ArrayBuffer < 'u' && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Nf(e.buffer)),
    t
  )
}
const Ww = Xo('string'),
  _e = Xo('function'),
  zf = Xo('number'),
  Jo = e => e !== null && typeof e == 'object',
  Vw = e => e === !0 || e === !1,
  eo = e => {
    if (Yo(e) !== 'object') return !1
    const t = Wa(e)
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    )
  },
  Uw = We('Date'),
  qw = We('File'),
  Kw = We('Blob'),
  Yw = We('FileList'),
  Xw = e => Jo(e) && _e(e.pipe),
  Jw = e => {
    let t
    return (
      e &&
      ((typeof FormData == 'function' && e instanceof FormData) ||
        (_e(e.append) &&
          ((t = Yo(e)) === 'formdata' ||
            (t === 'object' &&
              _e(e.toString) &&
              e.toString() === '[object FormData]'))))
    )
  },
  Gw = We('URLSearchParams'),
  Zw = e =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
function gi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > 'u') return
  let s, i
  if ((typeof e != 'object' && (e = [e]), vs(e)))
    for (s = 0, i = e.length; s < i; s++) t.call(null, e[s], s, e)
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      r = o.length
    let a
    for (s = 0; s < r; s++) (a = o[s]), t.call(null, e[a], a, e)
  }
}
function $f(e, t) {
  t = t.toLowerCase()
  const n = Object.keys(e)
  let s = n.length,
    i
  for (; s-- > 0; ) if (((i = n[s]), t === i.toLowerCase())) return i
  return null
}
const Hf = (() =>
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : global)(),
  jf = e => !ai(e) && e !== Hf
function ea() {
  const { caseless: e } = (jf(this) && this) || {},
    t = {},
    n = (s, i) => {
      const o = (e && $f(t, i)) || i
      eo(t[o]) && eo(s)
        ? (t[o] = ea(t[o], s))
        : eo(s)
        ? (t[o] = ea({}, s))
        : vs(s)
        ? (t[o] = s.slice())
        : (t[o] = s)
    }
  for (let s = 0, i = arguments.length; s < i; s++)
    arguments[s] && gi(arguments[s], n)
  return t
}
const Qw = (e, t, n, { allOwnKeys: s } = {}) => (
    gi(
      t,
      (i, o) => {
        n && _e(i) ? (e[o] = Bf(i, n)) : (e[o] = i)
      },
      { allOwnKeys: s }
    ),
    e
  ),
  ty = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  ey = (e, t, n, s) => {
    ;(e.prototype = Object.create(t.prototype, s)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, 'super', { value: t.prototype }),
      n && Object.assign(e.prototype, n)
  },
  ny = (e, t, n, s) => {
    let i, o, r
    const a = {}
    if (((t = t || {}), e == null)) return t
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (r = i[o]), (!s || s(r, e, t)) && !a[r] && ((t[r] = e[r]), (a[r] = !0))
      e = n !== !1 && Wa(e)
    } while (e && (!n || n(e, t)) && e !== Object.prototype)
    return t
  },
  sy = (e, t, n) => {
    ;(e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length)
    const s = e.indexOf(t, n)
    return s !== -1 && s === n
  },
  iy = e => {
    if (!e) return null
    if (vs(e)) return e
    let t = e.length
    if (!zf(t)) return null
    const n = new Array(t)
    for (; t-- > 0; ) n[t] = e[t]
    return n
  },
  oy = (
    e => t =>
      e && t instanceof e
  )(typeof Uint8Array < 'u' && Wa(Uint8Array)),
  ry = (e, t) => {
    const s = (e && e[Symbol.iterator]).call(e)
    let i
    for (; (i = s.next()) && !i.done; ) {
      const o = i.value
      t.call(e, o[0], o[1])
    }
  },
  ay = (e, t) => {
    let n
    const s = []
    for (; (n = e.exec(t)) !== null; ) s.push(n)
    return s
  },
  ly = We('HTMLFormElement'),
  cy = e =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, s, i) {
      return s.toUpperCase() + i
    }),
  Jc = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  uy = We('RegExp'),
  Wf = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      s = {}
    gi(n, (i, o) => {
      t(i, o, e) !== !1 && (s[o] = i)
    }),
      Object.defineProperties(e, s)
  },
  dy = e => {
    Wf(e, (t, n) => {
      if (_e(e) && ['arguments', 'caller', 'callee'].indexOf(n) !== -1)
        return !1
      const s = e[n]
      if (_e(s)) {
        if (((t.enumerable = !1), 'writable' in t)) {
          t.writable = !1
          return
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'")
          })
      }
    })
  },
  fy = (e, t) => {
    const n = {},
      s = i => {
        i.forEach(o => {
          n[o] = !0
        })
      }
    return vs(e) ? s(e) : s(String(e).split(t)), n
  },
  hy = () => {},
  py = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  kr = 'abcdefghijklmnopqrstuvwxyz',
  Gc = '0123456789',
  Vf = { DIGIT: Gc, ALPHA: kr, ALPHA_DIGIT: kr + kr.toUpperCase() + Gc },
  gy = (e = 16, t = Vf.ALPHA_DIGIT) => {
    let n = ''
    const { length: s } = t
    for (; e--; ) n += t[(Math.random() * s) | 0]
    return n
  }
function my(e) {
  return !!(
    e &&
    _e(e.append) &&
    e[Symbol.toStringTag] === 'FormData' &&
    e[Symbol.iterator]
  )
}
const by = e => {
    const t = new Array(10),
      n = (s, i) => {
        if (Jo(s)) {
          if (t.indexOf(s) >= 0) return
          if (!('toJSON' in s)) {
            t[i] = s
            const o = vs(s) ? [] : {}
            return (
              gi(s, (r, a) => {
                const c = n(r, i + 1)
                !ai(c) && (o[a] = c)
              }),
              (t[i] = void 0),
              o
            )
          }
        }
        return s
      }
    return n(e, 0)
  },
  wy = We('AsyncFunction'),
  yy = e => e && (Jo(e) || _e(e)) && _e(e.then) && _e(e.catch),
  M = {
    isArray: vs,
    isArrayBuffer: Nf,
    isBuffer: Hw,
    isFormData: Jw,
    isArrayBufferView: jw,
    isString: Ww,
    isNumber: zf,
    isBoolean: Vw,
    isObject: Jo,
    isPlainObject: eo,
    isUndefined: ai,
    isDate: Uw,
    isFile: qw,
    isBlob: Kw,
    isRegExp: uy,
    isFunction: _e,
    isStream: Xw,
    isURLSearchParams: Gw,
    isTypedArray: oy,
    isFileList: Yw,
    forEach: gi,
    merge: ea,
    extend: Qw,
    trim: Zw,
    stripBOM: ty,
    inherits: ey,
    toFlatObject: ny,
    kindOf: Yo,
    kindOfTest: We,
    endsWith: sy,
    toArray: iy,
    forEachEntry: ry,
    matchAll: ay,
    isHTMLForm: ly,
    hasOwnProperty: Jc,
    hasOwnProp: Jc,
    reduceDescriptors: Wf,
    freezeMethods: dy,
    toObjectSet: fy,
    toCamelCase: cy,
    noop: hy,
    toFiniteNumber: py,
    findKey: $f,
    global: Hf,
    isContextDefined: jf,
    ALPHABET: Vf,
    generateString: gy,
    isSpecCompliantForm: my,
    toJSONObject: by,
    isAsyncFn: wy,
    isThenable: yy
  }
function bt(e, t, n, s, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = 'AxiosError'),
    t && (this.code = t),
    n && (this.config = n),
    s && (this.request = s),
    i && (this.response = i)
}
M.inherits(bt, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: M.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null
    }
  }
})
const Uf = bt.prototype,
  qf = {}
;[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED',
  'ERR_NOT_SUPPORT',
  'ERR_INVALID_URL'
].forEach(e => {
  qf[e] = { value: e }
})
Object.defineProperties(bt, qf)
Object.defineProperty(Uf, 'isAxiosError', { value: !0 })
bt.from = (e, t, n, s, i, o) => {
  const r = Object.create(Uf)
  return (
    M.toFlatObject(
      e,
      r,
      function (c) {
        return c !== Error.prototype
      },
      a => a !== 'isAxiosError'
    ),
    bt.call(r, e.message, t, n, s, i),
    (r.cause = e),
    (r.name = e.name),
    o && Object.assign(r, o),
    r
  )
}
const _y = null
function na(e) {
  return M.isPlainObject(e) || M.isArray(e)
}
function Kf(e) {
  return M.endsWith(e, '[]') ? e.slice(0, -2) : e
}
function Zc(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Kf(i)), !n && o ? '[' + i + ']' : i
        })
        .join(n ? '.' : '')
    : t
}
function xy(e) {
  return M.isArray(e) && !e.some(na)
}
const vy = M.toFlatObject(M, {}, null, function (t) {
  return /^is[A-Z]/.test(t)
})
function Go(e, t, n) {
  if (!M.isObject(e)) throw new TypeError('target must be an object')
  ;(t = t || new FormData()),
    (n = M.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (w, x) {
        return !M.isUndefined(x[w])
      }
    ))
  const s = n.metaTokens,
    i = n.visitor || d,
    o = n.dots,
    r = n.indexes,
    c = (n.Blob || (typeof Blob < 'u' && Blob)) && M.isSpecCompliantForm(t)
  if (!M.isFunction(i)) throw new TypeError('visitor must be a function')
  function l(b) {
    if (b === null) return ''
    if (M.isDate(b)) return b.toISOString()
    if (!c && M.isBlob(b))
      throw new bt('Blob is not supported. Use a Buffer instead.')
    return M.isArrayBuffer(b) || M.isTypedArray(b)
      ? c && typeof Blob == 'function'
        ? new Blob([b])
        : Buffer.from(b)
      : b
  }
  function d(b, w, x) {
    let C = b
    if (b && !x && typeof b == 'object') {
      if (M.endsWith(w, '{}'))
        (w = s ? w : w.slice(0, -2)), (b = JSON.stringify(b))
      else if (
        (M.isArray(b) && xy(b)) ||
        ((M.isFileList(b) || M.endsWith(w, '[]')) && (C = M.toArray(b)))
      )
        return (
          (w = Kf(w)),
          C.forEach(function (D, A) {
            !(M.isUndefined(D) || D === null) &&
              t.append(
                r === !0 ? Zc([w], A, o) : r === null ? w : w + '[]',
                l(D)
              )
          }),
          !1
        )
    }
    return na(b) ? !0 : (t.append(Zc(x, w, o), l(b)), !1)
  }
  const h = [],
    p = Object.assign(vy, {
      defaultVisitor: d,
      convertValue: l,
      isVisitable: na
    })
  function m(b, w) {
    if (!M.isUndefined(b)) {
      if (h.indexOf(b) !== -1)
        throw Error('Circular reference detected in ' + w.join('.'))
      h.push(b),
        M.forEach(b, function (C, S) {
          ;(!(M.isUndefined(C) || C === null) &&
            i.call(t, C, M.isString(S) ? S.trim() : S, w, p)) === !0 &&
            m(C, w ? w.concat(S) : [S])
        }),
        h.pop()
    }
  }
  if (!M.isObject(e)) throw new TypeError('data must be an object')
  return m(e), t
}
function Qc(e) {
  const t = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+',
    '%00': '\0'
  }
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (s) {
    return t[s]
  })
}
function Va(e, t) {
  ;(this._pairs = []), e && Go(e, this, t)
}
const Yf = Va.prototype
Yf.append = function (t, n) {
  this._pairs.push([t, n])
}
Yf.toString = function (t) {
  const n = t
    ? function (s) {
        return t.call(this, s, Qc)
      }
    : Qc
  return this._pairs
    .map(function (i) {
      return n(i[0]) + '=' + n(i[1])
    }, '')
    .join('&')
}
function Cy(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}
function Xf(e, t, n) {
  if (!t) return e
  const s = (n && n.encode) || Cy,
    i = n && n.serialize
  let o
  if (
    (i
      ? (o = i(t, n))
      : (o = M.isURLSearchParams(t) ? t.toString() : new Va(t, n).toString(s)),
    o)
  ) {
    const r = e.indexOf('#')
    r !== -1 && (e = e.slice(0, r)),
      (e += (e.indexOf('?') === -1 ? '?' : '&') + o)
  }
  return e
}
class ky {
  constructor() {
    this.handlers = []
  }
  use(t, n, s) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null
      }),
      this.handlers.length - 1
    )
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null)
  }
  clear() {
    this.handlers && (this.handlers = [])
  }
  forEach(t) {
    M.forEach(this.handlers, function (s) {
      s !== null && t(s)
    })
  }
}
const tu = ky,
  Jf = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1
  },
  Sy = typeof URLSearchParams < 'u' ? URLSearchParams : Va,
  Py = typeof FormData < 'u' ? FormData : null,
  Ey = typeof Blob < 'u' ? Blob : null,
  Ay = (() => {
    let e
    return typeof navigator < 'u' &&
      ((e = navigator.product) === 'ReactNative' ||
        e === 'NativeScript' ||
        e === 'NS')
      ? !1
      : typeof window < 'u' && typeof document < 'u'
  })(),
  Oy = (() =>
    typeof WorkerGlobalScope < 'u' &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == 'function')(),
  $e = {
    isBrowser: !0,
    classes: { URLSearchParams: Sy, FormData: Py, Blob: Ey },
    isStandardBrowserEnv: Ay,
    isStandardBrowserWebWorkerEnv: Oy,
    protocols: ['http', 'https', 'file', 'blob', 'url', 'data']
  }
function My(e, t) {
  return Go(
    e,
    new $e.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, s, i, o) {
          return $e.isNode && M.isBuffer(n)
            ? (this.append(s, n.toString('base64')), !1)
            : o.defaultVisitor.apply(this, arguments)
        }
      },
      t
    )
  )
}
function Ty(e) {
  return M.matchAll(/\w+|\[(\w*)]/g, e).map(t =>
    t[0] === '[]' ? '' : t[1] || t[0]
  )
}
function Ly(e) {
  const t = {},
    n = Object.keys(e)
  let s
  const i = n.length
  let o
  for (s = 0; s < i; s++) (o = n[s]), (t[o] = e[o])
  return t
}
function Gf(e) {
  function t(n, s, i, o) {
    let r = n[o++]
    const a = Number.isFinite(+r),
      c = o >= n.length
    return (
      (r = !r && M.isArray(i) ? i.length : r),
      c
        ? (M.hasOwnProp(i, r) ? (i[r] = [i[r], s]) : (i[r] = s), !a)
        : ((!i[r] || !M.isObject(i[r])) && (i[r] = []),
          t(n, s, i[r], o) && M.isArray(i[r]) && (i[r] = Ly(i[r])),
          !a)
    )
  }
  if (M.isFormData(e) && M.isFunction(e.entries)) {
    const n = {}
    return (
      M.forEachEntry(e, (s, i) => {
        t(Ty(s), i, n, 0)
      }),
      n
    )
  }
  return null
}
const Ry = { 'Content-Type': void 0 }
function Dy(e, t, n) {
  if (M.isString(e))
    try {
      return (t || JSON.parse)(e), M.trim(e)
    } catch (s) {
      if (s.name !== 'SyntaxError') throw s
    }
  return (n || JSON.stringify)(e)
}
const Zo = {
  transitional: Jf,
  adapter: ['xhr', 'http'],
  transformRequest: [
    function (t, n) {
      const s = n.getContentType() || '',
        i = s.indexOf('application/json') > -1,
        o = M.isObject(t)
      if ((o && M.isHTMLForm(t) && (t = new FormData(t)), M.isFormData(t)))
        return i && i ? JSON.stringify(Gf(t)) : t
      if (
        M.isArrayBuffer(t) ||
        M.isBuffer(t) ||
        M.isStream(t) ||
        M.isFile(t) ||
        M.isBlob(t)
      )
        return t
      if (M.isArrayBufferView(t)) return t.buffer
      if (M.isURLSearchParams(t))
        return (
          n.setContentType(
            'application/x-www-form-urlencoded;charset=utf-8',
            !1
          ),
          t.toString()
        )
      let a
      if (o) {
        if (s.indexOf('application/x-www-form-urlencoded') > -1)
          return My(t, this.formSerializer).toString()
        if ((a = M.isFileList(t)) || s.indexOf('multipart/form-data') > -1) {
          const c = this.env && this.env.FormData
          return Go(a ? { 'files[]': t } : t, c && new c(), this.formSerializer)
        }
      }
      return o || i ? (n.setContentType('application/json', !1), Dy(t)) : t
    }
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Zo.transitional,
        s = n && n.forcedJSONParsing,
        i = this.responseType === 'json'
      if (t && M.isString(t) && ((s && !this.responseType) || i)) {
        const r = !(n && n.silentJSONParsing) && i
        try {
          return JSON.parse(t)
        } catch (a) {
          if (r)
            throw a.name === 'SyntaxError'
              ? bt.from(a, bt.ERR_BAD_RESPONSE, this, null, this.response)
              : a
        }
      }
      return t
    }
  ],
  timeout: 0,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: $e.classes.FormData, Blob: $e.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300
  },
  headers: { common: { Accept: 'application/json, text/plain, */*' } }
}
M.forEach(['delete', 'get', 'head'], function (t) {
  Zo.headers[t] = {}
})
M.forEach(['post', 'put', 'patch'], function (t) {
  Zo.headers[t] = M.merge(Ry)
})
const Ua = Zo,
  Iy = M.toObjectSet([
    'age',
    'authorization',
    'content-length',
    'content-type',
    'etag',
    'expires',
    'from',
    'host',
    'if-modified-since',
    'if-unmodified-since',
    'last-modified',
    'location',
    'max-forwards',
    'proxy-authorization',
    'referer',
    'retry-after',
    'user-agent'
  ]),
  Fy = e => {
    const t = {}
    let n, s, i
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (r) {
            ;(i = r.indexOf(':')),
              (n = r.substring(0, i).trim().toLowerCase()),
              (s = r.substring(i + 1).trim()),
              !(!n || (t[n] && Iy[n])) &&
                (n === 'set-cookie'
                  ? t[n]
                    ? t[n].push(s)
                    : (t[n] = [s])
                  : (t[n] = t[n] ? t[n] + ', ' + s : s))
          }),
      t
    )
  },
  eu = Symbol('internals')
function Os(e) {
  return e && String(e).trim().toLowerCase()
}
function no(e) {
  return e === !1 || e == null ? e : M.isArray(e) ? e.map(no) : String(e)
}
function By(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g
  let s
  for (; (s = n.exec(e)); ) t[s[1]] = s[2]
  return t
}
const Ny = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
function Sr(e, t, n, s, i) {
  if (M.isFunction(s)) return s.call(this, t, n)
  if ((i && (t = n), !!M.isString(t))) {
    if (M.isString(s)) return t.indexOf(s) !== -1
    if (M.isRegExp(s)) return s.test(t)
  }
}
function zy(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, s) => n.toUpperCase() + s)
}
function $y(e, t) {
  const n = M.toCamelCase(' ' + t)
  ;['get', 'set', 'has'].forEach(s => {
    Object.defineProperty(e, s + n, {
      value: function (i, o, r) {
        return this[s].call(this, t, i, o, r)
      },
      configurable: !0
    })
  })
}
class Qo {
  constructor(t) {
    t && this.set(t)
  }
  set(t, n, s) {
    const i = this
    function o(a, c, l) {
      const d = Os(c)
      if (!d) throw new Error('header name must be a non-empty string')
      const h = M.findKey(i, d)
      ;(!h || i[h] === void 0 || l === !0 || (l === void 0 && i[h] !== !1)) &&
        (i[h || c] = no(a))
    }
    const r = (a, c) => M.forEach(a, (l, d) => o(l, d, c))
    return (
      M.isPlainObject(t) || t instanceof this.constructor
        ? r(t, n)
        : M.isString(t) && (t = t.trim()) && !Ny(t)
        ? r(Fy(t), n)
        : t != null && o(n, t, s),
      this
    )
  }
  get(t, n) {
    if (((t = Os(t)), t)) {
      const s = M.findKey(this, t)
      if (s) {
        const i = this[s]
        if (!n) return i
        if (n === !0) return By(i)
        if (M.isFunction(n)) return n.call(this, i, s)
        if (M.isRegExp(n)) return n.exec(i)
        throw new TypeError('parser must be boolean|regexp|function')
      }
    }
  }
  has(t, n) {
    if (((t = Os(t)), t)) {
      const s = M.findKey(this, t)
      return !!(s && this[s] !== void 0 && (!n || Sr(this, this[s], s, n)))
    }
    return !1
  }
  delete(t, n) {
    const s = this
    let i = !1
    function o(r) {
      if (((r = Os(r)), r)) {
        const a = M.findKey(s, r)
        a && (!n || Sr(s, s[a], a, n)) && (delete s[a], (i = !0))
      }
    }
    return M.isArray(t) ? t.forEach(o) : o(t), i
  }
  clear(t) {
    const n = Object.keys(this)
    let s = n.length,
      i = !1
    for (; s--; ) {
      const o = n[s]
      ;(!t || Sr(this, this[o], o, t, !0)) && (delete this[o], (i = !0))
    }
    return i
  }
  normalize(t) {
    const n = this,
      s = {}
    return (
      M.forEach(this, (i, o) => {
        const r = M.findKey(s, o)
        if (r) {
          ;(n[r] = no(i)), delete n[o]
          return
        }
        const a = t ? zy(o) : String(o).trim()
        a !== o && delete n[o], (n[a] = no(i)), (s[a] = !0)
      }),
      this
    )
  }
  concat(...t) {
    return this.constructor.concat(this, ...t)
  }
  toJSON(t) {
    const n = Object.create(null)
    return (
      M.forEach(this, (s, i) => {
        s != null && s !== !1 && (n[i] = t && M.isArray(s) ? s.join(', ') : s)
      }),
      n
    )
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]()
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ': ' + n).join(`
`)
  }
  get [Symbol.toStringTag]() {
    return 'AxiosHeaders'
  }
  static from(t) {
    return t instanceof this ? t : new this(t)
  }
  static concat(t, ...n) {
    const s = new this(t)
    return n.forEach(i => s.set(i)), s
  }
  static accessor(t) {
    const s = (this[eu] = this[eu] = { accessors: {} }).accessors,
      i = this.prototype
    function o(r) {
      const a = Os(r)
      s[a] || ($y(i, r), (s[a] = !0))
    }
    return M.isArray(t) ? t.forEach(o) : o(t), this
  }
}
Qo.accessor([
  'Content-Type',
  'Content-Length',
  'Accept',
  'Accept-Encoding',
  'User-Agent',
  'Authorization'
])
M.freezeMethods(Qo.prototype)
M.freezeMethods(Qo)
const Ge = Qo
function Pr(e, t) {
  const n = this || Ua,
    s = t || n,
    i = Ge.from(s.headers)
  let o = s.data
  return (
    M.forEach(e, function (a) {
      o = a.call(n, o, i.normalize(), t ? t.status : void 0)
    }),
    i.normalize(),
    o
  )
}
function Zf(e) {
  return !!(e && e.__CANCEL__)
}
function mi(e, t, n) {
  bt.call(this, e ?? 'canceled', bt.ERR_CANCELED, t, n),
    (this.name = 'CanceledError')
}
M.inherits(mi, bt, { __CANCEL__: !0 })
function Hy(e, t, n) {
  const s = n.config.validateStatus
  !n.status || !s || s(n.status)
    ? e(n)
    : t(
        new bt(
          'Request failed with status code ' + n.status,
          [bt.ERR_BAD_REQUEST, bt.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      )
}
const jy = $e.isStandardBrowserEnv
  ? (function () {
      return {
        write: function (n, s, i, o, r, a) {
          const c = []
          c.push(n + '=' + encodeURIComponent(s)),
            M.isNumber(i) && c.push('expires=' + new Date(i).toGMTString()),
            M.isString(o) && c.push('path=' + o),
            M.isString(r) && c.push('domain=' + r),
            a === !0 && c.push('secure'),
            (document.cookie = c.join('; '))
        },
        read: function (n) {
          const s = document.cookie.match(
            new RegExp('(^|;\\s*)(' + n + ')=([^;]*)')
          )
          return s ? decodeURIComponent(s[3]) : null
        },
        remove: function (n) {
          this.write(n, '', Date.now() - 864e5)
        }
      }
    })()
  : (function () {
      return {
        write: function () {},
        read: function () {
          return null
        },
        remove: function () {}
      }
    })()
function Wy(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}
function Vy(e, t) {
  return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
}
function Qf(e, t) {
  return e && !Wy(t) ? Vy(e, t) : t
}
const Uy = $e.isStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement('a')
      let s
      function i(o) {
        let r = o
        return (
          t && (n.setAttribute('href', r), (r = n.href)),
          n.setAttribute('href', r),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, '') : '',
            hash: n.hash ? n.hash.replace(/^#/, '') : '',
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === '/' ? n.pathname : '/' + n.pathname
          }
        )
      }
      return (
        (s = i(window.location.href)),
        function (r) {
          const a = M.isString(r) ? i(r) : r
          return a.protocol === s.protocol && a.host === s.host
        }
      )
    })()
  : (function () {
      return function () {
        return !0
      }
    })()
function qy(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
  return (t && t[1]) || ''
}
function Ky(e, t) {
  e = e || 10
  const n = new Array(e),
    s = new Array(e)
  let i = 0,
    o = 0,
    r
  return (
    (t = t !== void 0 ? t : 1e3),
    function (c) {
      const l = Date.now(),
        d = s[o]
      r || (r = l), (n[i] = c), (s[i] = l)
      let h = o,
        p = 0
      for (; h !== i; ) (p += n[h++]), (h = h % e)
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), l - r < t)) return
      const m = d && l - d
      return m ? Math.round((p * 1e3) / m) : void 0
    }
  )
}
function nu(e, t) {
  let n = 0
  const s = Ky(50, 250)
  return i => {
    const o = i.loaded,
      r = i.lengthComputable ? i.total : void 0,
      a = o - n,
      c = s(a),
      l = o <= r
    n = o
    const d = {
      loaded: o,
      total: r,
      progress: r ? o / r : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && r && l ? (r - o) / c : void 0,
      event: i
    }
    ;(d[t ? 'download' : 'upload'] = !0), e(d)
  }
}
const Yy = typeof XMLHttpRequest < 'u',
  Xy =
    Yy &&
    function (e) {
      return new Promise(function (n, s) {
        let i = e.data
        const o = Ge.from(e.headers).normalize(),
          r = e.responseType
        let a
        function c() {
          e.cancelToken && e.cancelToken.unsubscribe(a),
            e.signal && e.signal.removeEventListener('abort', a)
        }
        M.isFormData(i) &&
          ($e.isStandardBrowserEnv || $e.isStandardBrowserWebWorkerEnv
            ? o.setContentType(!1)
            : o.setContentType('multipart/form-data;', !1))
        let l = new XMLHttpRequest()
        if (e.auth) {
          const m = e.auth.username || '',
            b = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          o.set('Authorization', 'Basic ' + btoa(m + ':' + b))
        }
        const d = Qf(e.baseURL, e.url)
        l.open(e.method.toUpperCase(), Xf(d, e.params, e.paramsSerializer), !0),
          (l.timeout = e.timeout)
        function h() {
          if (!l) return
          const m = Ge.from(
              'getAllResponseHeaders' in l && l.getAllResponseHeaders()
            ),
            w = {
              data:
                !r || r === 'text' || r === 'json'
                  ? l.responseText
                  : l.response,
              status: l.status,
              statusText: l.statusText,
              headers: m,
              config: e,
              request: l
            }
          Hy(
            function (C) {
              n(C), c()
            },
            function (C) {
              s(C), c()
            },
            w
          ),
            (l = null)
        }
        if (
          ('onloadend' in l
            ? (l.onloadend = h)
            : (l.onreadystatechange = function () {
                !l ||
                  l.readyState !== 4 ||
                  (l.status === 0 &&
                    !(l.responseURL && l.responseURL.indexOf('file:') === 0)) ||
                  setTimeout(h)
              }),
          (l.onabort = function () {
            l &&
              (s(new bt('Request aborted', bt.ECONNABORTED, e, l)), (l = null))
          }),
          (l.onerror = function () {
            s(new bt('Network Error', bt.ERR_NETWORK, e, l)), (l = null)
          }),
          (l.ontimeout = function () {
            let b = e.timeout
              ? 'timeout of ' + e.timeout + 'ms exceeded'
              : 'timeout exceeded'
            const w = e.transitional || Jf
            e.timeoutErrorMessage && (b = e.timeoutErrorMessage),
              s(
                new bt(
                  b,
                  w.clarifyTimeoutError ? bt.ETIMEDOUT : bt.ECONNABORTED,
                  e,
                  l
                )
              ),
              (l = null)
          }),
          $e.isStandardBrowserEnv)
        ) {
          const m =
            (e.withCredentials || Uy(d)) &&
            e.xsrfCookieName &&
            jy.read(e.xsrfCookieName)
          m && o.set(e.xsrfHeaderName, m)
        }
        i === void 0 && o.setContentType(null),
          'setRequestHeader' in l &&
            M.forEach(o.toJSON(), function (b, w) {
              l.setRequestHeader(w, b)
            }),
          M.isUndefined(e.withCredentials) ||
            (l.withCredentials = !!e.withCredentials),
          r && r !== 'json' && (l.responseType = e.responseType),
          typeof e.onDownloadProgress == 'function' &&
            l.addEventListener('progress', nu(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == 'function' &&
            l.upload &&
            l.upload.addEventListener('progress', nu(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((a = m => {
              l &&
                (s(!m || m.type ? new mi(null, e, l) : m),
                l.abort(),
                (l = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(a),
            e.signal &&
              (e.signal.aborted ? a() : e.signal.addEventListener('abort', a)))
        const p = qy(d)
        if (p && $e.protocols.indexOf(p) === -1) {
          s(new bt('Unsupported protocol ' + p + ':', bt.ERR_BAD_REQUEST, e))
          return
        }
        l.send(i || null)
      })
    },
  so = { http: _y, xhr: Xy }
M.forEach(so, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, 'name', { value: t })
    } catch {}
    Object.defineProperty(e, 'adapterName', { value: t })
  }
})
const Jy = {
  getAdapter: e => {
    e = M.isArray(e) ? e : [e]
    const { length: t } = e
    let n, s
    for (
      let i = 0;
      i < t && ((n = e[i]), !(s = M.isString(n) ? so[n.toLowerCase()] : n));
      i++
    );
    if (!s)
      throw s === !1
        ? new bt(
            `Adapter ${n} is not supported by the environment`,
            'ERR_NOT_SUPPORT'
          )
        : new Error(
            M.hasOwnProp(so, n)
              ? `Adapter '${n}' is not available in the build`
              : `Unknown adapter '${n}'`
          )
    if (!M.isFunction(s)) throw new TypeError('adapter is not a function')
    return s
  },
  adapters: so
}
function Er(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new mi(null, e)
}
function su(e) {
  return (
    Er(e),
    (e.headers = Ge.from(e.headers)),
    (e.data = Pr.call(e, e.transformRequest)),
    ['post', 'put', 'patch'].indexOf(e.method) !== -1 &&
      e.headers.setContentType('application/x-www-form-urlencoded', !1),
    Jy.getAdapter(e.adapter || Ua.adapter)(e).then(
      function (s) {
        return (
          Er(e),
          (s.data = Pr.call(e, e.transformResponse, s)),
          (s.headers = Ge.from(s.headers)),
          s
        )
      },
      function (s) {
        return (
          Zf(s) ||
            (Er(e),
            s &&
              s.response &&
              ((s.response.data = Pr.call(e, e.transformResponse, s.response)),
              (s.response.headers = Ge.from(s.response.headers)))),
          Promise.reject(s)
        )
      }
    )
  )
}
const iu = e => (e instanceof Ge ? e.toJSON() : e)
function gs(e, t) {
  t = t || {}
  const n = {}
  function s(l, d, h) {
    return M.isPlainObject(l) && M.isPlainObject(d)
      ? M.merge.call({ caseless: h }, l, d)
      : M.isPlainObject(d)
      ? M.merge({}, d)
      : M.isArray(d)
      ? d.slice()
      : d
  }
  function i(l, d, h) {
    if (M.isUndefined(d)) {
      if (!M.isUndefined(l)) return s(void 0, l, h)
    } else return s(l, d, h)
  }
  function o(l, d) {
    if (!M.isUndefined(d)) return s(void 0, d)
  }
  function r(l, d) {
    if (M.isUndefined(d)) {
      if (!M.isUndefined(l)) return s(void 0, l)
    } else return s(void 0, d)
  }
  function a(l, d, h) {
    if (h in t) return s(l, d)
    if (h in e) return s(void 0, l)
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: r,
    transformRequest: r,
    transformResponse: r,
    paramsSerializer: r,
    timeout: r,
    timeoutMessage: r,
    withCredentials: r,
    adapter: r,
    responseType: r,
    xsrfCookieName: r,
    xsrfHeaderName: r,
    onUploadProgress: r,
    onDownloadProgress: r,
    decompress: r,
    maxContentLength: r,
    maxBodyLength: r,
    beforeRedirect: r,
    transport: r,
    httpAgent: r,
    httpsAgent: r,
    cancelToken: r,
    socketPath: r,
    responseEncoding: r,
    validateStatus: a,
    headers: (l, d) => i(iu(l), iu(d), !0)
  }
  return (
    M.forEach(Object.keys(Object.assign({}, e, t)), function (d) {
      const h = c[d] || i,
        p = h(e[d], t[d], d)
      ;(M.isUndefined(p) && h !== a) || (n[d] = p)
    }),
    n
  )
}
const th = '1.4.0',
  qa = {}
;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
  (e, t) => {
    qa[e] = function (s) {
      return typeof s === e || 'a' + (t < 1 ? 'n ' : ' ') + e
    }
  }
)
const ou = {}
qa.transitional = function (t, n, s) {
  function i(o, r) {
    return (
      '[Axios v' +
      th +
      "] Transitional option '" +
      o +
      "'" +
      r +
      (s ? '. ' + s : '')
    )
  }
  return (o, r, a) => {
    if (t === !1)
      throw new bt(
        i(r, ' has been removed' + (n ? ' in ' + n : '')),
        bt.ERR_DEPRECATED
      )
    return (
      n &&
        !ou[r] &&
        ((ou[r] = !0),
        console.warn(
          i(
            r,
            ' has been deprecated since v' +
              n +
              ' and will be removed in the near future'
          )
        )),
      t ? t(o, r, a) : !0
    )
  }
}
function Gy(e, t, n) {
  if (typeof e != 'object')
    throw new bt('options must be an object', bt.ERR_BAD_OPTION_VALUE)
  const s = Object.keys(e)
  let i = s.length
  for (; i-- > 0; ) {
    const o = s[i],
      r = t[o]
    if (r) {
      const a = e[o],
        c = a === void 0 || r(a, o, e)
      if (c !== !0)
        throw new bt('option ' + o + ' must be ' + c, bt.ERR_BAD_OPTION_VALUE)
      continue
    }
    if (n !== !0) throw new bt('Unknown option ' + o, bt.ERR_BAD_OPTION)
  }
}
const sa = { assertOptions: Gy, validators: qa },
  an = sa.validators
class wo {
  constructor(t) {
    ;(this.defaults = t),
      (this.interceptors = { request: new tu(), response: new tu() })
  }
  request(t, n) {
    typeof t == 'string' ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = gs(this.defaults, n))
    const { transitional: s, paramsSerializer: i, headers: o } = n
    s !== void 0 &&
      sa.assertOptions(
        s,
        {
          silentJSONParsing: an.transitional(an.boolean),
          forcedJSONParsing: an.transitional(an.boolean),
          clarifyTimeoutError: an.transitional(an.boolean)
        },
        !1
      ),
      i != null &&
        (M.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : sa.assertOptions(
              i,
              { encode: an.function, serialize: an.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || 'get').toLowerCase())
    let r
    ;(r = o && M.merge(o.common, o[n.method])),
      r &&
        M.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          b => {
            delete o[b]
          }
        ),
      (n.headers = Ge.concat(r, o))
    const a = []
    let c = !0
    this.interceptors.request.forEach(function (w) {
      ;(typeof w.runWhen == 'function' && w.runWhen(n) === !1) ||
        ((c = c && w.synchronous), a.unshift(w.fulfilled, w.rejected))
    })
    const l = []
    this.interceptors.response.forEach(function (w) {
      l.push(w.fulfilled, w.rejected)
    })
    let d,
      h = 0,
      p
    if (!c) {
      const b = [su.bind(this), void 0]
      for (
        b.unshift.apply(b, a),
          b.push.apply(b, l),
          p = b.length,
          d = Promise.resolve(n);
        h < p;

      )
        d = d.then(b[h++], b[h++])
      return d
    }
    p = a.length
    let m = n
    for (h = 0; h < p; ) {
      const b = a[h++],
        w = a[h++]
      try {
        m = b(m)
      } catch (x) {
        w.call(this, x)
        break
      }
    }
    try {
      d = su.call(this, m)
    } catch (b) {
      return Promise.reject(b)
    }
    for (h = 0, p = l.length; h < p; ) d = d.then(l[h++], l[h++])
    return d
  }
  getUri(t) {
    t = gs(this.defaults, t)
    const n = Qf(t.baseURL, t.url)
    return Xf(n, t.params, t.paramsSerializer)
  }
}
M.forEach(['delete', 'get', 'head', 'options'], function (t) {
  wo.prototype[t] = function (n, s) {
    return this.request(
      gs(s || {}, { method: t, url: n, data: (s || {}).data })
    )
  }
})
M.forEach(['post', 'put', 'patch'], function (t) {
  function n(s) {
    return function (o, r, a) {
      return this.request(
        gs(a || {}, {
          method: t,
          headers: s ? { 'Content-Type': 'multipart/form-data' } : {},
          url: o,
          data: r
        })
      )
    }
  }
  ;(wo.prototype[t] = n()), (wo.prototype[t + 'Form'] = n(!0))
})
const io = wo
class Ka {
  constructor(t) {
    if (typeof t != 'function')
      throw new TypeError('executor must be a function.')
    let n
    this.promise = new Promise(function (o) {
      n = o
    })
    const s = this
    this.promise.then(i => {
      if (!s._listeners) return
      let o = s._listeners.length
      for (; o-- > 0; ) s._listeners[o](i)
      s._listeners = null
    }),
      (this.promise.then = i => {
        let o
        const r = new Promise(a => {
          s.subscribe(a), (o = a)
        }).then(i)
        return (
          (r.cancel = function () {
            s.unsubscribe(o)
          }),
          r
        )
      }),
      t(function (o, r, a) {
        s.reason || ((s.reason = new mi(o, r, a)), n(s.reason))
      })
  }
  throwIfRequested() {
    if (this.reason) throw this.reason
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason)
      return
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t])
  }
  unsubscribe(t) {
    if (!this._listeners) return
    const n = this._listeners.indexOf(t)
    n !== -1 && this._listeners.splice(n, 1)
  }
  static source() {
    let t
    return {
      token: new Ka(function (i) {
        t = i
      }),
      cancel: t
    }
  }
}
const Zy = Ka
function Qy(e) {
  return function (n) {
    return e.apply(null, n)
  }
}
function t_(e) {
  return M.isObject(e) && e.isAxiosError === !0
}
const ia = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
}
Object.entries(ia).forEach(([e, t]) => {
  ia[t] = e
})
const e_ = ia
function eh(e) {
  const t = new io(e),
    n = Bf(io.prototype.request, t)
  return (
    M.extend(n, io.prototype, t, { allOwnKeys: !0 }),
    M.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return eh(gs(e, i))
    }),
    n
  )
}
const Wt = eh(Ua)
Wt.Axios = io
Wt.CanceledError = mi
Wt.CancelToken = Zy
Wt.isCancel = Zf
Wt.VERSION = th
Wt.toFormData = Go
Wt.AxiosError = bt
Wt.Cancel = Wt.CanceledError
Wt.all = function (t) {
  return Promise.all(t)
}
Wt.spread = Qy
Wt.isAxiosError = t_
Wt.mergeConfig = gs
Wt.AxiosHeaders = Ge
Wt.formToJSON = e => Gf(M.isHTMLForm(e) ? new FormData(e) : e)
Wt.HttpStatusCode = e_
Wt.default = Wt
const Li = Wt
/*!
 * @kurkle/color v0.3.2
 * https://github.com/kurkle/color#readme
 * (c) 2023 Jukka Kurkela
 * Released under the MIT License
 */ function bi(e) {
  return (e + 0.5) | 0
}
const hn = (e, t, n) => Math.max(Math.min(e, n), t)
function Bs(e) {
  return hn(bi(e * 2.55), 0, 255)
}
function wn(e) {
  return hn(bi(e * 255), 0, 255)
}
function Xe(e) {
  return hn(bi(e / 2.55) / 100, 0, 1)
}
function ru(e) {
  return hn(bi(e * 100), 0, 100)
}
const me = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15
  },
  oa = [...'0123456789ABCDEF'],
  n_ = e => oa[e & 15],
  s_ = e => oa[(e & 240) >> 4] + oa[e & 15],
  Ri = e => (e & 240) >> 4 === (e & 15),
  i_ = e => Ri(e.r) && Ri(e.g) && Ri(e.b) && Ri(e.a)
function o_(e) {
  var t = e.length,
    n
  return (
    e[0] === '#' &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (me[e[1]] * 17),
            g: 255 & (me[e[2]] * 17),
            b: 255 & (me[e[3]] * 17),
            a: t === 5 ? me[e[4]] * 17 : 255
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (me[e[1]] << 4) | me[e[2]],
            g: (me[e[3]] << 4) | me[e[4]],
            b: (me[e[5]] << 4) | me[e[6]],
            a: t === 9 ? (me[e[7]] << 4) | me[e[8]] : 255
          })),
    n
  )
}
const r_ = (e, t) => (e < 255 ? t(e) : '')
function a_(e) {
  var t = i_(e) ? n_ : s_
  return e ? '#' + t(e.r) + t(e.g) + t(e.b) + r_(e.a, t) : void 0
}
const l_ =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/
function nh(e, t, n) {
  const s = t * Math.min(n, 1 - n),
    i = (o, r = (o + e / 30) % 12) =>
      n - s * Math.max(Math.min(r - 3, 9 - r, 1), -1)
  return [i(0), i(8), i(4)]
}
function c_(e, t, n) {
  const s = (i, o = (i + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(o, 4 - o, 1), 0)
  return [s(5), s(3), s(1)]
}
function u_(e, t, n) {
  const s = nh(e, 1, 0.5)
  let i
  for (t + n > 1 && ((i = 1 / (t + n)), (t *= i), (n *= i)), i = 0; i < 3; i++)
    (s[i] *= 1 - t - n), (s[i] += t)
  return s
}
function d_(e, t, n, s, i) {
  return e === i
    ? (t - n) / s + (t < n ? 6 : 0)
    : t === i
    ? (n - e) / s + 2
    : (e - t) / s + 4
}
function Ya(e) {
  const n = e.r / 255,
    s = e.g / 255,
    i = e.b / 255,
    o = Math.max(n, s, i),
    r = Math.min(n, s, i),
    a = (o + r) / 2
  let c, l, d
  return (
    o !== r &&
      ((d = o - r),
      (l = a > 0.5 ? d / (2 - o - r) : d / (o + r)),
      (c = d_(n, s, i, d, o)),
      (c = c * 60 + 0.5)),
    [c | 0, l || 0, a]
  )
}
function Xa(e, t, n, s) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, s)).map(wn)
}
function Ja(e, t, n) {
  return Xa(nh, e, t, n)
}
function f_(e, t, n) {
  return Xa(u_, e, t, n)
}
function h_(e, t, n) {
  return Xa(c_, e, t, n)
}
function sh(e) {
  return ((e % 360) + 360) % 360
}
function p_(e) {
  const t = l_.exec(e)
  let n = 255,
    s
  if (!t) return
  t[5] !== s && (n = t[6] ? Bs(+t[5]) : wn(+t[5]))
  const i = sh(+t[2]),
    o = +t[3] / 100,
    r = +t[4] / 100
  return (
    t[1] === 'hwb'
      ? (s = f_(i, o, r))
      : t[1] === 'hsv'
      ? (s = h_(i, o, r))
      : (s = Ja(i, o, r)),
    { r: s[0], g: s[1], b: s[2], a: n }
  )
}
function g_(e, t) {
  var n = Ya(e)
  ;(n[0] = sh(n[0] + t)), (n = Ja(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2])
}
function m_(e) {
  if (!e) return
  const t = Ya(e),
    n = t[0],
    s = ru(t[1]),
    i = ru(t[2])
  return e.a < 255
    ? `hsla(${n}, ${s}%, ${i}%, ${Xe(e.a)})`
    : `hsl(${n}, ${s}%, ${i}%)`
}
const au = {
    x: 'dark',
    Z: 'light',
    Y: 're',
    X: 'blu',
    W: 'gr',
    V: 'medium',
    U: 'slate',
    A: 'ee',
    T: 'ol',
    S: 'or',
    B: 'ra',
    C: 'lateg',
    D: 'ights',
    R: 'in',
    Q: 'turquois',
    E: 'hi',
    P: 'ro',
    O: 'al',
    N: 'le',
    M: 'de',
    L: 'yello',
    F: 'en',
    K: 'ch',
    G: 'arks',
    H: 'ea',
    I: 'ightg',
    J: 'wh'
  },
  lu = {
    OiceXe: 'f0f8ff',
    antiquewEte: 'faebd7',
    aqua: 'ffff',
    aquamarRe: '7fffd4',
    azuY: 'f0ffff',
    beige: 'f5f5dc',
    bisque: 'ffe4c4',
    black: '0',
    blanKedOmond: 'ffebcd',
    Xe: 'ff',
    XeviTet: '8a2be2',
    bPwn: 'a52a2a',
    burlywood: 'deb887',
    caMtXe: '5f9ea0',
    KartYuse: '7fff00',
    KocTate: 'd2691e',
    cSO: 'ff7f50',
    cSnflowerXe: '6495ed',
    cSnsilk: 'fff8dc',
    crimson: 'dc143c',
    cyan: 'ffff',
    xXe: '8b',
    xcyan: '8b8b',
    xgTMnPd: 'b8860b',
    xWay: 'a9a9a9',
    xgYF: '6400',
    xgYy: 'a9a9a9',
    xkhaki: 'bdb76b',
    xmagFta: '8b008b',
    xTivegYF: '556b2f',
    xSange: 'ff8c00',
    xScEd: '9932cc',
    xYd: '8b0000',
    xsOmon: 'e9967a',
    xsHgYF: '8fbc8f',
    xUXe: '483d8b',
    xUWay: '2f4f4f',
    xUgYy: '2f4f4f',
    xQe: 'ced1',
    xviTet: '9400d3',
    dAppRk: 'ff1493',
    dApskyXe: 'bfff',
    dimWay: '696969',
    dimgYy: '696969',
    dodgerXe: '1e90ff',
    fiYbrick: 'b22222',
    flSOwEte: 'fffaf0',
    foYstWAn: '228b22',
    fuKsia: 'ff00ff',
    gaRsbSo: 'dcdcdc',
    ghostwEte: 'f8f8ff',
    gTd: 'ffd700',
    gTMnPd: 'daa520',
    Way: '808080',
    gYF: '8000',
    gYFLw: 'adff2f',
    gYy: '808080',
    honeyMw: 'f0fff0',
    hotpRk: 'ff69b4',
    RdianYd: 'cd5c5c',
    Rdigo: '4b0082',
    ivSy: 'fffff0',
    khaki: 'f0e68c',
    lavFMr: 'e6e6fa',
    lavFMrXsh: 'fff0f5',
    lawngYF: '7cfc00',
    NmoncEffon: 'fffacd',
    ZXe: 'add8e6',
    ZcSO: 'f08080',
    Zcyan: 'e0ffff',
    ZgTMnPdLw: 'fafad2',
    ZWay: 'd3d3d3',
    ZgYF: '90ee90',
    ZgYy: 'd3d3d3',
    ZpRk: 'ffb6c1',
    ZsOmon: 'ffa07a',
    ZsHgYF: '20b2aa',
    ZskyXe: '87cefa',
    ZUWay: '778899',
    ZUgYy: '778899',
    ZstAlXe: 'b0c4de',
    ZLw: 'ffffe0',
    lime: 'ff00',
    limegYF: '32cd32',
    lRF: 'faf0e6',
    magFta: 'ff00ff',
    maPon: '800000',
    VaquamarRe: '66cdaa',
    VXe: 'cd',
    VScEd: 'ba55d3',
    VpurpN: '9370db',
    VsHgYF: '3cb371',
    VUXe: '7b68ee',
    VsprRggYF: 'fa9a',
    VQe: '48d1cc',
    VviTetYd: 'c71585',
    midnightXe: '191970',
    mRtcYam: 'f5fffa',
    mistyPse: 'ffe4e1',
    moccasR: 'ffe4b5',
    navajowEte: 'ffdead',
    navy: '80',
    Tdlace: 'fdf5e6',
    Tive: '808000',
    TivedBb: '6b8e23',
    Sange: 'ffa500',
    SangeYd: 'ff4500',
    ScEd: 'da70d6',
    pOegTMnPd: 'eee8aa',
    pOegYF: '98fb98',
    pOeQe: 'afeeee',
    pOeviTetYd: 'db7093',
    papayawEp: 'ffefd5',
    pHKpuff: 'ffdab9',
    peru: 'cd853f',
    pRk: 'ffc0cb',
    plum: 'dda0dd',
    powMrXe: 'b0e0e6',
    purpN: '800080',
    YbeccapurpN: '663399',
    Yd: 'ff0000',
    Psybrown: 'bc8f8f',
    PyOXe: '4169e1',
    saddNbPwn: '8b4513',
    sOmon: 'fa8072',
    sandybPwn: 'f4a460',
    sHgYF: '2e8b57',
    sHshell: 'fff5ee',
    siFna: 'a0522d',
    silver: 'c0c0c0',
    skyXe: '87ceeb',
    UXe: '6a5acd',
    UWay: '708090',
    UgYy: '708090',
    snow: 'fffafa',
    sprRggYF: 'ff7f',
    stAlXe: '4682b4',
    tan: 'd2b48c',
    teO: '8080',
    tEstN: 'd8bfd8',
    tomato: 'ff6347',
    Qe: '40e0d0',
    viTet: 'ee82ee',
    JHt: 'f5deb3',
    wEte: 'ffffff',
    wEtesmoke: 'f5f5f5',
    Lw: 'ffff00',
    LwgYF: '9acd32'
  }
function b_() {
  const e = {},
    t = Object.keys(lu),
    n = Object.keys(au)
  let s, i, o, r, a
  for (s = 0; s < t.length; s++) {
    for (r = a = t[s], i = 0; i < n.length; i++)
      (o = n[i]), (a = a.replace(o, au[o]))
    ;(o = parseInt(lu[r], 16)),
      (e[a] = [(o >> 16) & 255, (o >> 8) & 255, o & 255])
  }
  return e
}
let Di
function w_(e) {
  Di || ((Di = b_()), (Di.transparent = [0, 0, 0, 0]))
  const t = Di[e.toLowerCase()]
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 }
}
const y_ =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/
function __(e) {
  const t = y_.exec(e)
  let n = 255,
    s,
    i,
    o
  if (t) {
    if (t[7] !== s) {
      const r = +t[7]
      n = t[8] ? Bs(r) : hn(r * 255, 0, 255)
    }
    return (
      (s = +t[1]),
      (i = +t[3]),
      (o = +t[5]),
      (s = 255 & (t[2] ? Bs(s) : hn(s, 0, 255))),
      (i = 255 & (t[4] ? Bs(i) : hn(i, 0, 255))),
      (o = 255 & (t[6] ? Bs(o) : hn(o, 0, 255))),
      { r: s, g: i, b: o, a: n }
    )
  }
}
function x_(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Xe(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  )
}
const Ar = e =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  Qn = e => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4))
function v_(e, t, n) {
  const s = Qn(Xe(e.r)),
    i = Qn(Xe(e.g)),
    o = Qn(Xe(e.b))
  return {
    r: wn(Ar(s + n * (Qn(Xe(t.r)) - s))),
    g: wn(Ar(i + n * (Qn(Xe(t.g)) - i))),
    b: wn(Ar(o + n * (Qn(Xe(t.b)) - o))),
    a: e.a + n * (t.a - e.a)
  }
}
function Ii(e, t, n) {
  if (e) {
    let s = Ya(e)
    ;(s[t] = Math.max(0, Math.min(s[t] + s[t] * n, t === 0 ? 360 : 1))),
      (s = Ja(s)),
      (e.r = s[0]),
      (e.g = s[1]),
      (e.b = s[2])
  }
}
function ih(e, t) {
  return e && Object.assign(t || {}, e)
}
function cu(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 }
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = wn(e[3])))
      : ((t = ih(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = wn(t.a))),
    t
  )
}
function C_(e) {
  return e.charAt(0) === 'r' ? __(e) : p_(e)
}
class li {
  constructor(t) {
    if (t instanceof li) return t
    const n = typeof t
    let s
    n === 'object'
      ? (s = cu(t))
      : n === 'string' && (s = o_(t) || w_(t) || C_(t)),
      (this._rgb = s),
      (this._valid = !!s)
  }
  get valid() {
    return this._valid
  }
  get rgb() {
    var t = ih(this._rgb)
    return t && (t.a = Xe(t.a)), t
  }
  set rgb(t) {
    this._rgb = cu(t)
  }
  rgbString() {
    return this._valid ? x_(this._rgb) : void 0
  }
  hexString() {
    return this._valid ? a_(this._rgb) : void 0
  }
  hslString() {
    return this._valid ? m_(this._rgb) : void 0
  }
  mix(t, n) {
    if (t) {
      const s = this.rgb,
        i = t.rgb
      let o
      const r = n === o ? 0.5 : n,
        a = 2 * r - 1,
        c = s.a - i.a,
        l = ((a * c === -1 ? a : (a + c) / (1 + a * c)) + 1) / 2
      ;(o = 1 - l),
        (s.r = 255 & (l * s.r + o * i.r + 0.5)),
        (s.g = 255 & (l * s.g + o * i.g + 0.5)),
        (s.b = 255 & (l * s.b + o * i.b + 0.5)),
        (s.a = r * s.a + (1 - r) * i.a),
        (this.rgb = s)
    }
    return this
  }
  interpolate(t, n) {
    return t && (this._rgb = v_(this._rgb, t._rgb, n)), this
  }
  clone() {
    return new li(this.rgb)
  }
  alpha(t) {
    return (this._rgb.a = wn(t)), this
  }
  clearer(t) {
    const n = this._rgb
    return (n.a *= 1 - t), this
  }
  greyscale() {
    const t = this._rgb,
      n = bi(t.r * 0.3 + t.g * 0.59 + t.b * 0.11)
    return (t.r = t.g = t.b = n), this
  }
  opaquer(t) {
    const n = this._rgb
    return (n.a *= 1 + t), this
  }
  negate() {
    const t = this._rgb
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this
  }
  lighten(t) {
    return Ii(this._rgb, 2, t), this
  }
  darken(t) {
    return Ii(this._rgb, 2, -t), this
  }
  saturate(t) {
    return Ii(this._rgb, 1, t), this
  }
  desaturate(t) {
    return Ii(this._rgb, 1, -t), this
  }
  rotate(t) {
    return g_(this._rgb, t), this
  }
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ function Ue() {}
const k_ = (() => {
  let e = 0
  return () => e++
})()
function At(e) {
  return e === null || typeof e > 'u'
}
function Dt(e) {
  if (Array.isArray && Array.isArray(e)) return !0
  const t = Object.prototype.toString.call(e)
  return t.slice(0, 7) === '[object' && t.slice(-6) === 'Array]'
}
function yt(e) {
  return e !== null && Object.prototype.toString.call(e) === '[object Object]'
}
function Yt(e) {
  return (typeof e == 'number' || e instanceof Number) && isFinite(+e)
}
function he(e, t) {
  return Yt(e) ? e : t
}
function ht(e, t) {
  return typeof e > 'u' ? t : e
}
const S_ = (e, t) =>
  typeof e == 'string' && e.endsWith('%') ? (parseFloat(e) / 100) * t : +e
function Pt(e, t, n) {
  if (e && typeof e.call == 'function') return e.apply(n, t)
}
function Ct(e, t, n, s) {
  let i, o, r
  if (Dt(e))
    if (((o = e.length), s)) for (i = o - 1; i >= 0; i--) t.call(n, e[i], i)
    else for (i = 0; i < o; i++) t.call(n, e[i], i)
  else if (yt(e))
    for (r = Object.keys(e), o = r.length, i = 0; i < o; i++)
      t.call(n, e[r[i]], r[i])
}
function yo(e, t) {
  let n, s, i, o
  if (!e || !t || e.length !== t.length) return !1
  for (n = 0, s = e.length; n < s; ++n)
    if (
      ((i = e[n]),
      (o = t[n]),
      i.datasetIndex !== o.datasetIndex || i.index !== o.index)
    )
      return !1
  return !0
}
function _o(e) {
  if (Dt(e)) return e.map(_o)
  if (yt(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      s = n.length
    let i = 0
    for (; i < s; ++i) t[n[i]] = _o(e[n[i]])
    return t
  }
  return e
}
function oh(e) {
  return ['__proto__', 'prototype', 'constructor'].indexOf(e) === -1
}
function P_(e, t, n, s) {
  if (!oh(e)) return
  const i = t[e],
    o = n[e]
  yt(i) && yt(o) ? ci(i, o, s) : (t[e] = _o(o))
}
function ci(e, t, n) {
  const s = Dt(t) ? t : [t],
    i = s.length
  if (!yt(e)) return e
  n = n || {}
  const o = n.merger || P_
  let r
  for (let a = 0; a < i; ++a) {
    if (((r = s[a]), !yt(r))) continue
    const c = Object.keys(r)
    for (let l = 0, d = c.length; l < d; ++l) o(c[l], e, r, n)
  }
  return e
}
function Ys(e, t) {
  return ci(e, t, { merger: E_ })
}
function E_(e, t, n) {
  if (!oh(e)) return
  const s = t[e],
    i = n[e]
  yt(s) && yt(i)
    ? Ys(s, i)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = _o(i))
}
const uu = { '': e => e, x: e => e.x, y: e => e.y }
function A_(e) {
  const t = e.split('.'),
    n = []
  let s = ''
  for (const i of t)
    (s += i),
      s.endsWith('\\') ? (s = s.slice(0, -1) + '.') : (n.push(s), (s = ''))
  return n
}
function O_(e) {
  const t = A_(e)
  return n => {
    for (const s of t) {
      if (s === '') break
      n = n && n[s]
    }
    return n
  }
}
function xo(e, t) {
  return (uu[t] || (uu[t] = O_(t)))(e)
}
function Ga(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
const vo = e => typeof e < 'u',
  xn = e => typeof e == 'function',
  du = (e, t) => {
    if (e.size !== t.size) return !1
    for (const n of e) if (!t.has(n)) return !1
    return !0
  }
function M_(e) {
  return e.type === 'mouseup' || e.type === 'click' || e.type === 'contextmenu'
}
const Vt = Math.PI,
  xe = 2 * Vt,
  T_ = xe + Vt,
  Co = Number.POSITIVE_INFINITY,
  L_ = Vt / 180,
  de = Vt / 2,
  An = Vt / 4,
  fu = (Vt * 2) / 3,
  pn = Math.log10,
  ms = Math.sign
function Xs(e, t, n) {
  return Math.abs(e - t) < n
}
function hu(e) {
  const t = Math.round(e)
  e = Xs(e, t, e / 1e3) ? t : e
  const n = Math.pow(10, Math.floor(pn(e))),
    s = e / n
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * n
}
function R_(e) {
  const t = [],
    n = Math.sqrt(e)
  let s
  for (s = 1; s < n; s++) e % s === 0 && (t.push(s), t.push(e / s))
  return n === (n | 0) && t.push(n), t.sort((i, o) => i - o).pop(), t
}
function ui(e) {
  return !isNaN(parseFloat(e)) && isFinite(e)
}
function D_(e, t) {
  const n = Math.round(e)
  return n - t <= e && n + t >= e
}
function rh(e, t, n) {
  let s, i, o
  for (s = 0, i = e.length; s < i; s++)
    (o = e[s][n]),
      isNaN(o) || ((t.min = Math.min(t.min, o)), (t.max = Math.max(t.max, o)))
}
function gn(e) {
  return e * (Vt / 180)
}
function Za(e) {
  return e * (180 / Vt)
}
function pu(e) {
  if (!Yt(e)) return
  let t = 1,
    n = 0
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++
  return n
}
function I_(e, t) {
  const n = t.x - e.x,
    s = t.y - e.y,
    i = Math.sqrt(n * n + s * s)
  let o = Math.atan2(s, n)
  return o < -0.5 * Vt && (o += xe), { angle: o, distance: i }
}
function ra(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
}
function F_(e, t) {
  return ((e - t + T_) % xe) - Vt
}
function Pe(e) {
  return ((e % xe) + xe) % xe
}
function ah(e, t, n, s) {
  const i = Pe(e),
    o = Pe(t),
    r = Pe(n),
    a = Pe(o - i),
    c = Pe(r - i),
    l = Pe(i - o),
    d = Pe(i - r)
  return i === o || i === r || (s && o === r) || (a > c && l < d)
}
function be(e, t, n) {
  return Math.max(t, Math.min(n, e))
}
function B_(e) {
  return be(e, -32768, 32767)
}
function Ns(e, t, n, s = 1e-6) {
  return e >= Math.min(t, n) - s && e <= Math.max(t, n) + s
}
function Qa(e, t, n) {
  n = n || (r => e[r] < t)
  let s = e.length - 1,
    i = 0,
    o
  for (; s - i > 1; ) (o = (i + s) >> 1), n(o) ? (i = o) : (s = o)
  return { lo: i, hi: s }
}
const zn = (e, t, n, s) =>
    Qa(
      e,
      n,
      s
        ? i => {
            const o = e[i][t]
            return o < n || (o === n && e[i + 1][t] === n)
          }
        : i => e[i][t] < n
    ),
  N_ = (e, t, n) => Qa(e, n, s => e[s][t] >= n)
function z_(e, t, n) {
  let s = 0,
    i = e.length
  for (; s < i && e[s] < t; ) s++
  for (; i > s && e[i - 1] > n; ) i--
  return s > 0 || i < e.length ? e.slice(s, i) : e
}
const lh = ['push', 'pop', 'shift', 'splice', 'unshift']
function $_(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t)
    return
  }
  Object.defineProperty(e, '_chartjs', {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] }
  }),
    lh.forEach(n => {
      const s = '_onData' + Ga(n),
        i = e[n]
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...o) {
          const r = i.apply(this, o)
          return (
            e._chartjs.listeners.forEach(a => {
              typeof a[s] == 'function' && a[s](...o)
            }),
            r
          )
        }
      })
    })
}
function gu(e, t) {
  const n = e._chartjs
  if (!n) return
  const s = n.listeners,
    i = s.indexOf(t)
  i !== -1 && s.splice(i, 1),
    !(s.length > 0) &&
      (lh.forEach(o => {
        delete e[o]
      }),
      delete e._chartjs)
}
function H_(e) {
  const t = new Set(e)
  return t.size === e.length ? e : Array.from(t)
}
const ch = (function () {
  return typeof window > 'u'
    ? function (e) {
        return e()
      }
    : window.requestAnimationFrame
})()
function uh(e, t) {
  let n = [],
    s = !1
  return function (...i) {
    ;(n = i),
      s ||
        ((s = !0),
        ch.call(window, () => {
          ;(s = !1), e.apply(t, n)
        }))
  }
}
function j_(e, t) {
  let n
  return function (...s) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, s))) : e.apply(this, s), t
    )
  }
}
const tl = e => (e === 'start' ? 'left' : e === 'end' ? 'right' : 'center'),
  Zt = (e, t, n) => (e === 'start' ? t : e === 'end' ? n : (t + n) / 2),
  W_ = (e, t, n, s) =>
    e === (s ? 'left' : 'right') ? n : e === 'center' ? (t + n) / 2 : t
function V_(e, t, n) {
  const s = t.length
  let i = 0,
    o = s
  if (e._sorted) {
    const { iScale: r, _parsed: a } = e,
      c = r.axis,
      { min: l, max: d, minDefined: h, maxDefined: p } = r.getUserBounds()
    h &&
      (i = be(
        Math.min(
          zn(a, r.axis, l).lo,
          n ? s : zn(t, c, r.getPixelForValue(l)).lo
        ),
        0,
        s - 1
      )),
      p
        ? (o =
            be(
              Math.max(
                zn(a, r.axis, d, !0).hi + 1,
                n ? 0 : zn(t, c, r.getPixelForValue(d), !0).hi + 1
              ),
              i,
              s
            ) - i)
        : (o = s - i)
  }
  return { start: i, count: o }
}
function U_(e) {
  const { xScale: t, yScale: n, _scaleRanges: s } = e,
    i = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max }
  if (!s) return (e._scaleRanges = i), !0
  const o =
    s.xmin !== t.min || s.xmax !== t.max || s.ymin !== n.min || s.ymax !== n.max
  return Object.assign(s, i), o
}
const Fi = e => e === 0 || e === 1,
  mu = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * xe) / n)),
  bu = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * xe) / n) + 1,
  Js = {
    linear: e => e,
    easeInQuad: e => e * e,
    easeOutQuad: e => -e * (e - 2),
    easeInOutQuad: e =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: e => e * e * e,
    easeOutCubic: e => (e -= 1) * e * e + 1,
    easeInOutCubic: e =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: e => e * e * e * e,
    easeOutQuart: e => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: e =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: e => e * e * e * e * e,
    easeOutQuint: e => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: e =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: e => -Math.cos(e * de) + 1,
    easeOutSine: e => Math.sin(e * de),
    easeInOutSine: e => -0.5 * (Math.cos(Vt * e) - 1),
    easeInExpo: e => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: e => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: e =>
      Fi(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: e => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: e => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: e =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: e => (Fi(e) ? e : mu(e, 0.075, 0.3)),
    easeOutElastic: e => (Fi(e) ? e : bu(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return Fi(e)
        ? e
        : e < 0.5
        ? 0.5 * mu(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * bu(e * 2 - 1, 0.1125, 0.45)
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158)
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1
    },
    easeInOutBack(e) {
      let t = 1.70158
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    },
    easeInBounce: e => 1 - Js.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
    },
    easeInOutBounce: e =>
      e < 0.5
        ? Js.easeInBounce(e * 2) * 0.5
        : Js.easeOutBounce(e * 2 - 1) * 0.5 + 0.5
  }
function el(e) {
  if (e && typeof e == 'object') {
    const t = e.toString()
    return t === '[object CanvasPattern]' || t === '[object CanvasGradient]'
  }
  return !1
}
function wu(e) {
  return el(e) ? e : new li(e)
}
function Or(e) {
  return el(e) ? e : new li(e).saturate(0.5).darken(0.1).hexString()
}
const q_ = ['x', 'y', 'borderWidth', 'radius', 'tension'],
  K_ = ['color', 'borderColor', 'backgroundColor']
function Y_(e) {
  e.set('animation', {
    delay: void 0,
    duration: 1e3,
    easing: 'easeOutQuart',
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }),
    e.describe('animation', {
      _fallback: !1,
      _indexable: !1,
      _scriptable: t => t !== 'onProgress' && t !== 'onComplete' && t !== 'fn'
    }),
    e.set('animations', {
      colors: { type: 'color', properties: K_ },
      numbers: { type: 'number', properties: q_ }
    }),
    e.describe('animations', { _fallback: 'animation' }),
    e.set('transitions', {
      active: { animation: { duration: 400 } },
      resize: { animation: { duration: 0 } },
      show: {
        animations: {
          colors: { from: 'transparent' },
          visible: { type: 'boolean', duration: 0 }
        }
      },
      hide: {
        animations: {
          colors: { to: 'transparent' },
          visible: { type: 'boolean', easing: 'linear', fn: t => t | 0 }
        }
      }
    })
}
function X_(e) {
  e.set('layout', {
    autoPadding: !0,
    padding: { top: 0, right: 0, bottom: 0, left: 0 }
  })
}
const yu = new Map()
function J_(e, t) {
  t = t || {}
  const n = e + JSON.stringify(t)
  let s = yu.get(n)
  return s || ((s = new Intl.NumberFormat(e, t)), yu.set(n, s)), s
}
function nl(e, t, n) {
  return J_(t, n).format(e)
}
const dh = {
  values(e) {
    return Dt(e) ? e : '' + e
  },
  numeric(e, t, n) {
    if (e === 0) return '0'
    const s = this.chart.options.locale
    let i,
      o = e
    if (n.length > 1) {
      const l = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value))
      ;(l < 1e-4 || l > 1e15) && (i = 'scientific'), (o = G_(e, n))
    }
    const r = pn(Math.abs(o)),
      a = isNaN(r) ? 1 : Math.max(Math.min(-1 * Math.floor(r), 20), 0),
      c = { notation: i, minimumFractionDigits: a, maximumFractionDigits: a }
    return Object.assign(c, this.options.ticks.format), nl(e, s, c)
  },
  logarithmic(e, t, n) {
    if (e === 0) return '0'
    const s = n[t].significand || e / Math.pow(10, Math.floor(pn(e)))
    return [1, 2, 3, 5, 10, 15].includes(s) || t > 0.8 * n.length
      ? dh.numeric.call(this, e, t, n)
      : ''
  }
}
function G_(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n
}
var tr = { formatters: dh }
function Z_(e) {
  e.set('scale', {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: 'ticks',
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, n) => n.lineWidth,
      tickColor: (t, n) => n.color,
      offset: !1
    },
    border: { display: !0, dash: [], dashOffset: 0, width: 1 },
    title: { display: !1, text: '', padding: { top: 4, bottom: 4 } },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: '',
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: tr.formatters.values,
      minor: {},
      major: {},
      align: 'center',
      crossAlign: 'near',
      showLabelBackdrop: !1,
      backdropColor: 'rgba(255, 255, 255, 0.75)',
      backdropPadding: 2
    }
  }),
    e.route('scale.ticks', 'color', '', 'color'),
    e.route('scale.grid', 'color', '', 'borderColor'),
    e.route('scale.border', 'color', '', 'borderColor'),
    e.route('scale.title', 'color', '', 'color'),
    e.describe('scale', {
      _fallback: !1,
      _scriptable: t =>
        !t.startsWith('before') &&
        !t.startsWith('after') &&
        t !== 'callback' &&
        t !== 'parser',
      _indexable: t =>
        t !== 'borderDash' && t !== 'tickBorderDash' && t !== 'dash'
    }),
    e.describe('scales', { _fallback: 'scale' }),
    e.describe('scale.ticks', {
      _scriptable: t => t !== 'backdropPadding' && t !== 'callback',
      _indexable: t => t !== 'backdropPadding'
    })
}
const Wn = Object.create(null),
  aa = Object.create(null)
function Gs(e, t) {
  if (!t) return e
  const n = t.split('.')
  for (let s = 0, i = n.length; s < i; ++s) {
    const o = n[s]
    e = e[o] || (e[o] = Object.create(null))
  }
  return e
}
function Mr(e, t, n) {
  return typeof t == 'string' ? ci(Gs(e, t), n) : ci(Gs(e, ''), t)
}
class Q_ {
  constructor(t, n) {
    ;(this.animation = void 0),
      (this.backgroundColor = 'rgba(0,0,0,0.1)'),
      (this.borderColor = 'rgba(0,0,0,0.1)'),
      (this.color = '#666'),
      (this.datasets = {}),
      (this.devicePixelRatio = s => s.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        'mousemove',
        'mouseout',
        'click',
        'touchstart',
        'touchmove'
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: 'normal',
        lineHeight: 1.2,
        weight: null
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (s, i) => Or(i.backgroundColor)),
      (this.hoverBorderColor = (s, i) => Or(i.borderColor)),
      (this.hoverColor = (s, i) => Or(i.color)),
      (this.indexAxis = 'x'),
      (this.interaction = {
        mode: 'nearest',
        intersect: !0,
        includeInvisible: !1
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t),
      this.apply(n)
  }
  set(t, n) {
    return Mr(this, t, n)
  }
  get(t) {
    return Gs(this, t)
  }
  describe(t, n) {
    return Mr(aa, t, n)
  }
  override(t, n) {
    return Mr(Wn, t, n)
  }
  route(t, n, s, i) {
    const o = Gs(this, t),
      r = Gs(this, s),
      a = '_' + n
    Object.defineProperties(o, {
      [a]: { value: o[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const c = this[a],
            l = r[i]
          return yt(c) ? Object.assign({}, l, c) : ht(c, l)
        },
        set(c) {
          this[a] = c
        }
      }
    })
  }
  apply(t) {
    t.forEach(n => n(this))
  }
}
var Ft = new Q_(
  {
    _scriptable: e => !e.startsWith('on'),
    _indexable: e => e !== 'events',
    hover: { _fallback: 'interaction' },
    interaction: { _scriptable: !1, _indexable: !1 }
  },
  [Y_, X_, Z_]
)
function tx(e) {
  return !e || At(e.size) || At(e.family)
    ? null
    : (e.style ? e.style + ' ' : '') +
        (e.weight ? e.weight + ' ' : '') +
        e.size +
        'px ' +
        e.family
}
function ko(e, t, n, s, i) {
  let o = t[i]
  return (
    o || ((o = t[i] = e.measureText(i).width), n.push(i)), o > s && (s = o), s
  )
}
function ex(e, t, n, s) {
  s = s || {}
  let i = (s.data = s.data || {}),
    o = (s.garbageCollect = s.garbageCollect || [])
  s.font !== t &&
    ((i = s.data = {}), (o = s.garbageCollect = []), (s.font = t)),
    e.save(),
    (e.font = t)
  let r = 0
  const a = n.length
  let c, l, d, h, p
  for (c = 0; c < a; c++)
    if (((h = n[c]), h != null && !Dt(h))) r = ko(e, i, o, r, h)
    else if (Dt(h))
      for (l = 0, d = h.length; l < d; l++)
        (p = h[l]), p != null && !Dt(p) && (r = ko(e, i, o, r, p))
  e.restore()
  const m = o.length / 2
  if (m > n.length) {
    for (c = 0; c < m; c++) delete i[o[c]]
    o.splice(0, m)
  }
  return r
}
function On(e, t, n) {
  const s = e.currentDevicePixelRatio,
    i = n !== 0 ? Math.max(n / 2, 0.5) : 0
  return Math.round((t - i) * s) / s + i
}
function _u(e, t) {
  ;(t = t || e.getContext('2d')),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore()
}
function la(e, t, n, s) {
  fh(e, t, n, s, null)
}
function fh(e, t, n, s, i) {
  let o, r, a, c, l, d, h, p
  const m = t.pointStyle,
    b = t.rotation,
    w = t.radius
  let x = (b || 0) * L_
  if (
    m &&
    typeof m == 'object' &&
    ((o = m.toString()),
    o === '[object HTMLImageElement]' || o === '[object HTMLCanvasElement]')
  ) {
    e.save(),
      e.translate(n, s),
      e.rotate(x),
      e.drawImage(m, -m.width / 2, -m.height / 2, m.width, m.height),
      e.restore()
    return
  }
  if (!(isNaN(w) || w <= 0)) {
    switch ((e.beginPath(), m)) {
      default:
        i ? e.ellipse(n, s, i / 2, w, 0, 0, xe) : e.arc(n, s, w, 0, xe),
          e.closePath()
        break
      case 'triangle':
        ;(d = i ? i / 2 : w),
          e.moveTo(n + Math.sin(x) * d, s - Math.cos(x) * w),
          (x += fu),
          e.lineTo(n + Math.sin(x) * d, s - Math.cos(x) * w),
          (x += fu),
          e.lineTo(n + Math.sin(x) * d, s - Math.cos(x) * w),
          e.closePath()
        break
      case 'rectRounded':
        ;(l = w * 0.516),
          (c = w - l),
          (r = Math.cos(x + An) * c),
          (h = Math.cos(x + An) * (i ? i / 2 - l : c)),
          (a = Math.sin(x + An) * c),
          (p = Math.sin(x + An) * (i ? i / 2 - l : c)),
          e.arc(n - h, s - a, l, x - Vt, x - de),
          e.arc(n + p, s - r, l, x - de, x),
          e.arc(n + h, s + a, l, x, x + de),
          e.arc(n - p, s + r, l, x + de, x + Vt),
          e.closePath()
        break
      case 'rect':
        if (!b) {
          ;(c = Math.SQRT1_2 * w),
            (d = i ? i / 2 : c),
            e.rect(n - d, s - c, 2 * d, 2 * c)
          break
        }
        x += An
      case 'rectRot':
        ;(h = Math.cos(x) * (i ? i / 2 : w)),
          (r = Math.cos(x) * w),
          (a = Math.sin(x) * w),
          (p = Math.sin(x) * (i ? i / 2 : w)),
          e.moveTo(n - h, s - a),
          e.lineTo(n + p, s - r),
          e.lineTo(n + h, s + a),
          e.lineTo(n - p, s + r),
          e.closePath()
        break
      case 'crossRot':
        x += An
      case 'cross':
        ;(h = Math.cos(x) * (i ? i / 2 : w)),
          (r = Math.cos(x) * w),
          (a = Math.sin(x) * w),
          (p = Math.sin(x) * (i ? i / 2 : w)),
          e.moveTo(n - h, s - a),
          e.lineTo(n + h, s + a),
          e.moveTo(n + p, s - r),
          e.lineTo(n - p, s + r)
        break
      case 'star':
        ;(h = Math.cos(x) * (i ? i / 2 : w)),
          (r = Math.cos(x) * w),
          (a = Math.sin(x) * w),
          (p = Math.sin(x) * (i ? i / 2 : w)),
          e.moveTo(n - h, s - a),
          e.lineTo(n + h, s + a),
          e.moveTo(n + p, s - r),
          e.lineTo(n - p, s + r),
          (x += An),
          (h = Math.cos(x) * (i ? i / 2 : w)),
          (r = Math.cos(x) * w),
          (a = Math.sin(x) * w),
          (p = Math.sin(x) * (i ? i / 2 : w)),
          e.moveTo(n - h, s - a),
          e.lineTo(n + h, s + a),
          e.moveTo(n + p, s - r),
          e.lineTo(n - p, s + r)
        break
      case 'line':
        ;(r = i ? i / 2 : Math.cos(x) * w),
          (a = Math.sin(x) * w),
          e.moveTo(n - r, s - a),
          e.lineTo(n + r, s + a)
        break
      case 'dash':
        e.moveTo(n, s),
          e.lineTo(n + Math.cos(x) * (i ? i / 2 : w), s + Math.sin(x) * w)
        break
      case !1:
        e.closePath()
        break
    }
    e.fill(), t.borderWidth > 0 && e.stroke()
  }
}
function Je(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  )
}
function sl(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip()
}
function il(e) {
  e.restore()
}
function nx(e, t, n, s, i) {
  if (!t) return e.lineTo(n.x, n.y)
  if (i === 'middle') {
    const o = (t.x + n.x) / 2
    e.lineTo(o, t.y), e.lineTo(o, n.y)
  } else (i === 'after') != !!s ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y)
  e.lineTo(n.x, n.y)
}
function sx(e, t, n, s) {
  if (!t) return e.lineTo(n.x, n.y)
  e.bezierCurveTo(
    s ? t.cp1x : t.cp2x,
    s ? t.cp1y : t.cp2y,
    s ? n.cp2x : n.cp1x,
    s ? n.cp2y : n.cp1y,
    n.x,
    n.y
  )
}
function ix(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    At(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline)
}
function ox(e, t, n, s, i) {
  if (i.strikethrough || i.underline) {
    const o = e.measureText(s),
      r = t - o.actualBoundingBoxLeft,
      a = t + o.actualBoundingBoxRight,
      c = n - o.actualBoundingBoxAscent,
      l = n + o.actualBoundingBoxDescent,
      d = i.strikethrough ? (c + l) / 2 : l
    ;(e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = i.decorationWidth || 2),
      e.moveTo(r, d),
      e.lineTo(a, d),
      e.stroke()
  }
}
function rx(e, t) {
  const n = e.fillStyle
  ;(e.fillStyle = t.color),
    e.fillRect(t.left, t.top, t.width, t.height),
    (e.fillStyle = n)
}
function Vn(e, t, n, s, i, o = {}) {
  const r = Dt(t) ? t : [t],
    a = o.strokeWidth > 0 && o.strokeColor !== ''
  let c, l
  for (e.save(), e.font = i.string, ix(e, o), c = 0; c < r.length; ++c)
    (l = r[c]),
      o.backdrop && rx(e, o.backdrop),
      a &&
        (o.strokeColor && (e.strokeStyle = o.strokeColor),
        At(o.strokeWidth) || (e.lineWidth = o.strokeWidth),
        e.strokeText(l, n, s, o.maxWidth)),
      e.fillText(l, n, s, o.maxWidth),
      ox(e, n, s, l, o),
      (s += Number(i.lineHeight))
  e.restore()
}
function So(e, t) {
  const { x: n, y: s, w: i, h: o, radius: r } = t
  e.arc(n + r.topLeft, s + r.topLeft, r.topLeft, -de, Vt, !0),
    e.lineTo(n, s + o - r.bottomLeft),
    e.arc(n + r.bottomLeft, s + o - r.bottomLeft, r.bottomLeft, Vt, de, !0),
    e.lineTo(n + i - r.bottomRight, s + o),
    e.arc(
      n + i - r.bottomRight,
      s + o - r.bottomRight,
      r.bottomRight,
      de,
      0,
      !0
    ),
    e.lineTo(n + i, s + r.topRight),
    e.arc(n + i - r.topRight, s + r.topRight, r.topRight, 0, -de, !0),
    e.lineTo(n + r.topLeft, s)
}
const ax = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,
  lx = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
function cx(e, t) {
  const n = ('' + e).match(ax)
  if (!n || n[1] === 'normal') return t * 1.2
  switch (((e = +n[2]), n[3])) {
    case 'px':
      return e
    case '%':
      e /= 100
      break
  }
  return t * e
}
const ux = e => +e || 0
function hh(e, t) {
  const n = {},
    s = yt(t),
    i = s ? Object.keys(t) : t,
    o = yt(e) ? (s ? r => ht(e[r], e[t[r]]) : r => e[r]) : () => e
  for (const r of i) n[r] = ux(o(r))
  return n
}
function dx(e) {
  return hh(e, { top: 'y', right: 'x', bottom: 'y', left: 'x' })
}
function as(e) {
  return hh(e, ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'])
}
function ee(e) {
  const t = dx(e)
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t
}
function jt(e, t) {
  ;(e = e || {}), (t = t || Ft.font)
  let n = ht(e.size, t.size)
  typeof n == 'string' && (n = parseInt(n, 10))
  let s = ht(e.style, t.style)
  s &&
    !('' + s).match(lx) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = void 0))
  const i = {
    family: ht(e.family, t.family),
    lineHeight: cx(ht(e.lineHeight, t.lineHeight), n),
    size: n,
    style: s,
    weight: ht(e.weight, t.weight),
    string: ''
  }
  return (i.string = tx(i)), i
}
function Bi(e, t, n, s) {
  let i = !0,
    o,
    r,
    a
  for (o = 0, r = e.length; o < r; ++o)
    if (
      ((a = e[o]),
      a !== void 0 &&
        (t !== void 0 && typeof a == 'function' && ((a = a(t)), (i = !1)),
        n !== void 0 && Dt(a) && ((a = a[n % a.length]), (i = !1)),
        a !== void 0))
    )
      return s && !i && (s.cacheable = !1), a
}
function fx(e, t, n) {
  const { min: s, max: i } = e,
    o = S_(t, (i - s) / 2),
    r = (a, c) => (n && a === 0 ? 0 : a + c)
  return { min: r(s, -Math.abs(o)), max: r(i, o) }
}
function vn(e, t) {
  return Object.assign(Object.create(e), t)
}
function ol(e, t = [''], n, s, i = () => e[0]) {
  const o = n || e
  typeof s > 'u' && (s = bh('_fallback', e))
  const r = {
    [Symbol.toStringTag]: 'Object',
    _cacheable: !0,
    _scopes: e,
    _rootScopes: o,
    _fallback: s,
    _getTarget: i,
    override: a => ol([a, ...e], t, o, s)
  }
  return new Proxy(r, {
    deleteProperty(a, c) {
      return delete a[c], delete a._keys, delete e[0][c], !0
    },
    get(a, c) {
      return gh(a, c, () => _x(c, t, e, a))
    },
    getOwnPropertyDescriptor(a, c) {
      return Reflect.getOwnPropertyDescriptor(a._scopes[0], c)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0])
    },
    has(a, c) {
      return vu(a).includes(c)
    },
    ownKeys(a) {
      return vu(a)
    },
    set(a, c, l) {
      const d = a._storage || (a._storage = i())
      return (a[c] = d[c] = l), delete a._keys, !0
    }
  })
}
function bs(e, t, n, s) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: ph(e, s),
    setContext: o => bs(e, o, n, s),
    override: o => bs(e.override(o), t, n, s)
  }
  return new Proxy(i, {
    deleteProperty(o, r) {
      return delete o[r], delete e[r], !0
    },
    get(o, r, a) {
      return gh(o, r, () => px(o, r, a))
    },
    getOwnPropertyDescriptor(o, r) {
      return o._descriptors.allKeys
        ? Reflect.has(e, r)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, r)
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e)
    },
    has(o, r) {
      return Reflect.has(e, r)
    },
    ownKeys() {
      return Reflect.ownKeys(e)
    },
    set(o, r, a) {
      return (e[r] = a), delete o[r], !0
    }
  })
}
function ph(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: s = t.indexable,
    _allKeys: i = t.allKeys
  } = e
  return {
    allKeys: i,
    scriptable: n,
    indexable: s,
    isScriptable: xn(n) ? n : () => n,
    isIndexable: xn(s) ? s : () => s
  }
}
const hx = (e, t) => (e ? e + Ga(t) : t),
  rl = (e, t) =>
    yt(t) &&
    e !== 'adapters' &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object)
function gh(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t]
  const s = n()
  return (e[t] = s), s
}
function px(e, t, n) {
  const { _proxy: s, _context: i, _subProxy: o, _descriptors: r } = e
  let a = s[t]
  return (
    xn(a) && r.isScriptable(t) && (a = gx(t, a, e, n)),
    Dt(a) && a.length && (a = mx(t, a, e, r.isIndexable)),
    rl(t, a) && (a = bs(a, i, o && o[t], r)),
    a
  )
}
function gx(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _stack: a } = n
  if (a.has(e))
    throw new Error(
      'Recursion detected: ' + Array.from(a).join('->') + '->' + e
    )
  a.add(e)
  let c = t(o, r || s)
  return a.delete(e), rl(e, c) && (c = al(i._scopes, i, e, c)), c
}
function mx(e, t, n, s) {
  const { _proxy: i, _context: o, _subProxy: r, _descriptors: a } = n
  if (typeof o.index < 'u' && s(e)) return t[o.index % t.length]
  if (yt(t[0])) {
    const c = t,
      l = i._scopes.filter(d => d !== c)
    t = []
    for (const d of c) {
      const h = al(l, i, e, d)
      t.push(bs(h, o, r && r[e], a))
    }
  }
  return t
}
function mh(e, t, n) {
  return xn(e) ? e(t, n) : e
}
const bx = (e, t) => (e === !0 ? t : typeof e == 'string' ? xo(t, e) : void 0)
function wx(e, t, n, s, i) {
  for (const o of t) {
    const r = bx(n, o)
    if (r) {
      e.add(r)
      const a = mh(r._fallback, n, i)
      if (typeof a < 'u' && a !== n && a !== s) return a
    } else if (r === !1 && typeof s < 'u' && n !== s) return null
  }
  return !1
}
function al(e, t, n, s) {
  const i = t._rootScopes,
    o = mh(t._fallback, n, s),
    r = [...e, ...i],
    a = new Set()
  a.add(s)
  let c = xu(a, r, n, o || n, s)
  return c === null ||
    (typeof o < 'u' && o !== n && ((c = xu(a, r, o, c, s)), c === null))
    ? !1
    : ol(Array.from(a), [''], i, o, () => yx(t, n, s))
}
function xu(e, t, n, s, i) {
  for (; n; ) n = wx(e, t, n, s, i)
  return n
}
function yx(e, t, n) {
  const s = e._getTarget()
  t in s || (s[t] = {})
  const i = s[t]
  return Dt(i) && yt(n) ? n : i || {}
}
function _x(e, t, n, s) {
  let i
  for (const o of t)
    if (((i = bh(hx(o, e), n)), typeof i < 'u'))
      return rl(e, i) ? al(n, s, e, i) : i
}
function bh(e, t) {
  for (const n of t) {
    if (!n) continue
    const s = n[e]
    if (typeof s < 'u') return s
  }
}
function vu(e) {
  let t = e._keys
  return t || (t = e._keys = xx(e._scopes)), t
}
function xx(e) {
  const t = new Set()
  for (const n of e)
    for (const s of Object.keys(n).filter(i => !i.startsWith('_'))) t.add(s)
  return Array.from(t)
}
const vx = Number.EPSILON || 1e-14,
  ws = (e, t) => t < e.length && !e[t].skip && e[t],
  wh = e => (e === 'x' ? 'y' : 'x')
function Cx(e, t, n, s) {
  const i = e.skip ? t : e,
    o = t,
    r = n.skip ? t : n,
    a = ra(o, i),
    c = ra(r, o)
  let l = a / (a + c),
    d = c / (a + c)
  ;(l = isNaN(l) ? 0 : l), (d = isNaN(d) ? 0 : d)
  const h = s * l,
    p = s * d
  return {
    previous: { x: o.x - h * (r.x - i.x), y: o.y - h * (r.y - i.y) },
    next: { x: o.x + p * (r.x - i.x), y: o.y + p * (r.y - i.y) }
  }
}
function kx(e, t, n) {
  const s = e.length
  let i,
    o,
    r,
    a,
    c,
    l = ws(e, 0)
  for (let d = 0; d < s - 1; ++d)
    if (((c = l), (l = ws(e, d + 1)), !(!c || !l))) {
      if (Xs(t[d], 0, vx)) {
        n[d] = n[d + 1] = 0
        continue
      }
      ;(i = n[d] / t[d]),
        (o = n[d + 1] / t[d]),
        (a = Math.pow(i, 2) + Math.pow(o, 2)),
        !(a <= 9) &&
          ((r = 3 / Math.sqrt(a)),
          (n[d] = i * r * t[d]),
          (n[d + 1] = o * r * t[d]))
    }
}
function Sx(e, t, n = 'x') {
  const s = wh(n),
    i = e.length
  let o,
    r,
    a,
    c = ws(e, 0)
  for (let l = 0; l < i; ++l) {
    if (((r = a), (a = c), (c = ws(e, l + 1)), !a)) continue
    const d = a[n],
      h = a[s]
    r &&
      ((o = (d - r[n]) / 3),
      (a[`cp1${n}`] = d - o),
      (a[`cp1${s}`] = h - o * t[l])),
      c &&
        ((o = (c[n] - d) / 3),
        (a[`cp2${n}`] = d + o),
        (a[`cp2${s}`] = h + o * t[l]))
  }
}
function Px(e, t = 'x') {
  const n = wh(t),
    s = e.length,
    i = Array(s).fill(0),
    o = Array(s)
  let r,
    a,
    c,
    l = ws(e, 0)
  for (r = 0; r < s; ++r)
    if (((a = c), (c = l), (l = ws(e, r + 1)), !!c)) {
      if (l) {
        const d = l[t] - c[t]
        i[r] = d !== 0 ? (l[n] - c[n]) / d : 0
      }
      o[r] = a
        ? l
          ? ms(i[r - 1]) !== ms(i[r])
            ? 0
            : (i[r - 1] + i[r]) / 2
          : i[r - 1]
        : i[r]
    }
  kx(e, i, o), Sx(e, o, t)
}
function Ni(e, t, n) {
  return Math.max(Math.min(e, n), t)
}
function Ex(e, t) {
  let n,
    s,
    i,
    o,
    r,
    a = Je(e[0], t)
  for (n = 0, s = e.length; n < s; ++n)
    (r = o),
      (o = a),
      (a = n < s - 1 && Je(e[n + 1], t)),
      o &&
        ((i = e[n]),
        r &&
          ((i.cp1x = Ni(i.cp1x, t.left, t.right)),
          (i.cp1y = Ni(i.cp1y, t.top, t.bottom))),
        a &&
          ((i.cp2x = Ni(i.cp2x, t.left, t.right)),
          (i.cp2y = Ni(i.cp2y, t.top, t.bottom))))
}
function Ax(e, t, n, s, i) {
  let o, r, a, c
  if (
    (t.spanGaps && (e = e.filter(l => !l.skip)),
    t.cubicInterpolationMode === 'monotone')
  )
    Px(e, i)
  else {
    let l = s ? e[e.length - 1] : e[0]
    for (o = 0, r = e.length; o < r; ++o)
      (a = e[o]),
        (c = Cx(l, a, e[Math.min(o + 1, r - (s ? 0 : 1)) % r], t.tension)),
        (a.cp1x = c.previous.x),
        (a.cp1y = c.previous.y),
        (a.cp2x = c.next.x),
        (a.cp2y = c.next.y),
        (l = a)
  }
  t.capBezierPoints && Ex(e, n)
}
function yh() {
  return typeof window < 'u' && typeof document < 'u'
}
function ll(e) {
  let t = e.parentNode
  return t && t.toString() === '[object ShadowRoot]' && (t = t.host), t
}
function Po(e, t, n) {
  let s
  return (
    typeof e == 'string'
      ? ((s = parseInt(e, 10)),
        e.indexOf('%') !== -1 && (s = (s / 100) * t.parentNode[n]))
      : (s = e),
    s
  )
}
const er = e => e.ownerDocument.defaultView.getComputedStyle(e, null)
function Ox(e, t) {
  return er(e).getPropertyValue(t)
}
const Mx = ['top', 'right', 'bottom', 'left']
function jn(e, t, n) {
  const s = {}
  n = n ? '-' + n : ''
  for (let i = 0; i < 4; i++) {
    const o = Mx[i]
    s[o] = parseFloat(e[t + '-' + o + n]) || 0
  }
  return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s
}
const Tx = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot)
function Lx(e, t) {
  const n = e.touches,
    s = n && n.length ? n[0] : e,
    { offsetX: i, offsetY: o } = s
  let r = !1,
    a,
    c
  if (Tx(i, o, e.target)) (a = i), (c = o)
  else {
    const l = t.getBoundingClientRect()
    ;(a = s.clientX - l.left), (c = s.clientY - l.top), (r = !0)
  }
  return { x: a, y: c, box: r }
}
function Ln(e, t) {
  if ('native' in e) return e
  const { canvas: n, currentDevicePixelRatio: s } = t,
    i = er(n),
    o = i.boxSizing === 'border-box',
    r = jn(i, 'padding'),
    a = jn(i, 'border', 'width'),
    { x: c, y: l, box: d } = Lx(e, n),
    h = r.left + (d && a.left),
    p = r.top + (d && a.top)
  let { width: m, height: b } = t
  return (
    o && ((m -= r.width + a.width), (b -= r.height + a.height)),
    {
      x: Math.round((((c - h) / m) * n.width) / s),
      y: Math.round((((l - p) / b) * n.height) / s)
    }
  )
}
function Rx(e, t, n) {
  let s, i
  if (t === void 0 || n === void 0) {
    const o = ll(e)
    if (!o) (t = e.clientWidth), (n = e.clientHeight)
    else {
      const r = o.getBoundingClientRect(),
        a = er(o),
        c = jn(a, 'border', 'width'),
        l = jn(a, 'padding')
      ;(t = r.width - l.width - c.width),
        (n = r.height - l.height - c.height),
        (s = Po(a.maxWidth, o, 'clientWidth')),
        (i = Po(a.maxHeight, o, 'clientHeight'))
    }
  }
  return { width: t, height: n, maxWidth: s || Co, maxHeight: i || Co }
}
const zi = e => Math.round(e * 10) / 10
function Dx(e, t, n, s) {
  const i = er(e),
    o = jn(i, 'margin'),
    r = Po(i.maxWidth, e, 'clientWidth') || Co,
    a = Po(i.maxHeight, e, 'clientHeight') || Co,
    c = Rx(e, t, n)
  let { width: l, height: d } = c
  if (i.boxSizing === 'content-box') {
    const p = jn(i, 'border', 'width'),
      m = jn(i, 'padding')
    ;(l -= m.width + p.width), (d -= m.height + p.height)
  }
  return (
    (l = Math.max(0, l - o.width)),
    (d = Math.max(0, s ? l / s : d - o.height)),
    (l = zi(Math.min(l, r, c.maxWidth))),
    (d = zi(Math.min(d, a, c.maxHeight))),
    l && !d && (d = zi(l / 2)),
    (t !== void 0 || n !== void 0) &&
      s &&
      c.height &&
      d > c.height &&
      ((d = c.height), (l = zi(Math.floor(d * s)))),
    { width: l, height: d }
  )
}
function Cu(e, t, n) {
  const s = t || 1,
    i = Math.floor(e.height * s),
    o = Math.floor(e.width * s)
  ;(e.height = Math.floor(e.height)), (e.width = Math.floor(e.width))
  const r = e.canvas
  return (
    r.style &&
      (n || (!r.style.height && !r.style.width)) &&
      ((r.style.height = `${e.height}px`), (r.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== s || r.height !== i || r.width !== o
      ? ((e.currentDevicePixelRatio = s),
        (r.height = i),
        (r.width = o),
        e.ctx.setTransform(s, 0, 0, s, 0, 0),
        !0)
      : !1
  )
}
const Ix = (function () {
  let e = !1
  try {
    const t = {
      get passive() {
        return (e = !0), !1
      }
    }
    window.addEventListener('test', null, t),
      window.removeEventListener('test', null, t)
  } catch {}
  return e
})()
function ku(e, t) {
  const n = Ox(e, t),
    s = n && n.match(/^(\d+)(\.\d+)?px$/)
  return s ? +s[1] : void 0
}
function Rn(e, t, n, s) {
  return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) }
}
function Fx(e, t, n, s) {
  return {
    x: e.x + n * (t.x - e.x),
    y:
      s === 'middle'
        ? n < 0.5
          ? e.y
          : t.y
        : s === 'after'
        ? n < 1
          ? e.y
          : t.y
        : n > 0
        ? t.y
        : e.y
  }
}
function Bx(e, t, n, s) {
  const i = { x: e.cp2x, y: e.cp2y },
    o = { x: t.cp1x, y: t.cp1y },
    r = Rn(e, i, n),
    a = Rn(i, o, n),
    c = Rn(o, t, n),
    l = Rn(r, a, n),
    d = Rn(a, c, n)
  return Rn(l, d, n)
}
const Nx = function (e, t) {
    return {
      x(n) {
        return e + e + t - n
      },
      setWidth(n) {
        t = n
      },
      textAlign(n) {
        return n === 'center' ? n : n === 'right' ? 'left' : 'right'
      },
      xPlus(n, s) {
        return n - s
      },
      leftForLtr(n, s) {
        return n - s
      }
    }
  },
  zx = function () {
    return {
      x(e) {
        return e
      },
      setWidth(e) {},
      textAlign(e) {
        return e
      },
      xPlus(e, t) {
        return e + t
      },
      leftForLtr(e, t) {
        return e
      }
    }
  }
function ls(e, t, n) {
  return e ? Nx(t, n) : zx()
}
function _h(e, t) {
  let n, s
  ;(t === 'ltr' || t === 'rtl') &&
    ((n = e.canvas.style),
    (s = [n.getPropertyValue('direction'), n.getPropertyPriority('direction')]),
    n.setProperty('direction', t, 'important'),
    (e.prevTextDirection = s))
}
function xh(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty('direction', t[0], t[1]))
}
function vh(e) {
  return e === 'angle'
    ? { between: ah, compare: F_, normalize: Pe }
    : { between: Ns, compare: (t, n) => t - n, normalize: t => t }
}
function Su({ start: e, end: t, count: n, loop: s, style: i }) {
  return {
    start: e % n,
    end: t % n,
    loop: s && (t - e + 1) % n === 0,
    style: i
  }
}
function $x(e, t, n) {
  const { property: s, start: i, end: o } = n,
    { between: r, normalize: a } = vh(s),
    c = t.length
  let { start: l, end: d, loop: h } = e,
    p,
    m
  if (h) {
    for (l += c, d += c, p = 0, m = c; p < m && r(a(t[l % c][s]), i, o); ++p)
      l--, d--
    ;(l %= c), (d %= c)
  }
  return d < l && (d += c), { start: l, end: d, loop: h, style: e.style }
}
function Hx(e, t, n) {
  if (!n) return [e]
  const { property: s, start: i, end: o } = n,
    r = t.length,
    { compare: a, between: c, normalize: l } = vh(s),
    { start: d, end: h, loop: p, style: m } = $x(e, t, n),
    b = []
  let w = !1,
    x = null,
    C,
    S,
    D
  const A = () => c(i, D, C) && a(i, D) !== 0,
    L = () => a(o, C) === 0 || c(o, D, C),
    j = () => w || A(),
    z = () => !w || L()
  for (let T = d, W = d; T <= h; ++T)
    (S = t[T % r]),
      !S.skip &&
        ((C = l(S[s])),
        C !== D &&
          ((w = c(C, i, o)),
          x === null && j() && (x = a(C, i) === 0 ? T : W),
          x !== null &&
            z() &&
            (b.push(Su({ start: x, end: T, loop: p, count: r, style: m })),
            (x = null)),
          (W = T),
          (D = C)))
  return (
    x !== null && b.push(Su({ start: x, end: h, loop: p, count: r, style: m })),
    b
  )
}
function jx(e, t) {
  const n = [],
    s = e.segments
  for (let i = 0; i < s.length; i++) {
    const o = Hx(s[i], e.points, t)
    o.length && n.push(...o)
  }
  return n
}
function Wx(e, t, n, s) {
  let i = 0,
    o = t - 1
  if (n && !s) for (; i < t && !e[i].skip; ) i++
  for (; i < t && e[i].skip; ) i++
  for (i %= t, n && (o += i); o > i && e[o % t].skip; ) o--
  return (o %= t), { start: i, end: o }
}
function Vx(e, t, n, s) {
  const i = e.length,
    o = []
  let r = t,
    a = e[t],
    c
  for (c = t + 1; c <= n; ++c) {
    const l = e[c % i]
    l.skip || l.stop
      ? a.skip ||
        ((s = !1),
        o.push({ start: t % i, end: (c - 1) % i, loop: s }),
        (t = r = l.stop ? c : null))
      : ((r = c), a.skip && (t = c)),
      (a = l)
  }
  return r !== null && o.push({ start: t % i, end: r % i, loop: s }), o
}
function Ux(e, t) {
  const n = e.points,
    s = e.options.spanGaps,
    i = n.length
  if (!i) return []
  const o = !!e._loop,
    { start: r, end: a } = Wx(n, i, o, s)
  if (s === !0) return Pu(e, [{ start: r, end: a, loop: o }], n, t)
  const c = a < r ? a + i : a,
    l = !!e._fullLoop && r === 0 && a === i - 1
  return Pu(e, Vx(n, r, c, l), n, t)
}
function Pu(e, t, n, s) {
  return !s || !s.setContext || !n ? t : qx(e, t, n, s)
}
function qx(e, t, n, s) {
  const i = e._chart.getContext(),
    o = Eu(e.options),
    {
      _datasetIndex: r,
      options: { spanGaps: a }
    } = e,
    c = n.length,
    l = []
  let d = o,
    h = t[0].start,
    p = h
  function m(b, w, x, C) {
    const S = a ? -1 : 1
    if (b !== w) {
      for (b += c; n[b % c].skip; ) b -= S
      for (; n[w % c].skip; ) w += S
      b % c !== w % c &&
        (l.push({ start: b % c, end: w % c, loop: x, style: C }),
        (d = C),
        (h = w % c))
    }
  }
  for (const b of t) {
    h = a ? h : b.start
    let w = n[h % c],
      x
    for (p = h + 1; p <= b.end; p++) {
      const C = n[p % c]
      ;(x = Eu(
        s.setContext(
          vn(i, {
            type: 'segment',
            p0: w,
            p1: C,
            p0DataIndex: (p - 1) % c,
            p1DataIndex: p % c,
            datasetIndex: r
          })
        )
      )),
        Kx(x, d) && m(h, p - 1, b.loop, d),
        (w = C),
        (d = x)
    }
    h < p - 1 && m(h, p - 1, b.loop, d)
  }
  return l
}
function Eu(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor
  }
}
function Kx(e, t) {
  if (!t) return !1
  const n = [],
    s = function (i, o) {
      return el(o) ? (n.includes(o) || n.push(o), n.indexOf(o)) : o
    }
  return JSON.stringify(e, s) !== JSON.stringify(t, s)
}
/*!
 * Chart.js v4.3.0
 * https://www.chartjs.org
 * (c) 2023 Chart.js Contributors
 * Released under the MIT License
 */ class Yx {
  constructor() {
    ;(this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0)
  }
  _notify(t, n, s, i) {
    const o = n.listeners[i],
      r = n.duration
    o.forEach(a =>
      a({
        chart: t,
        initial: n.initial,
        numSteps: r,
        currentStep: Math.min(s - n.start, r)
      })
    )
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = ch.call(window, () => {
        this._update(), (this._request = null), this._running && this._refresh()
      })))
  }
  _update(t = Date.now()) {
    let n = 0
    this._charts.forEach((s, i) => {
      if (!s.running || !s.items.length) return
      const o = s.items
      let r = o.length - 1,
        a = !1,
        c
      for (; r >= 0; --r)
        (c = o[r]),
          c._active
            ? (c._total > s.duration && (s.duration = c._total),
              c.tick(t),
              (a = !0))
            : ((o[r] = o[o.length - 1]), o.pop())
      a && (i.draw(), this._notify(i, s, t, 'progress')),
        o.length ||
          ((s.running = !1),
          this._notify(i, s, t, 'complete'),
          (s.initial = !1)),
        (n += o.length)
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1)
  }
  _getAnims(t) {
    const n = this._charts
    let s = n.get(t)
    return (
      s ||
        ((s = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] }
        }),
        n.set(t, s)),
      s
    )
  }
  listen(t, n, s) {
    this._getAnims(t).listeners[n].push(s)
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n)
  }
  has(t) {
    return this._getAnims(t).items.length > 0
  }
  start(t) {
    const n = this._charts.get(t)
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((s, i) => Math.max(s, i._duration), 0)),
      this._refresh())
  }
  running(t) {
    if (!this._running) return !1
    const n = this._charts.get(t)
    return !(!n || !n.running || !n.items.length)
  }
  stop(t) {
    const n = this._charts.get(t)
    if (!n || !n.items.length) return
    const s = n.items
    let i = s.length - 1
    for (; i >= 0; --i) s[i].cancel()
    ;(n.items = []), this._notify(t, n, Date.now(), 'complete')
  }
  remove(t) {
    return this._charts.delete(t)
  }
}
var qe = new Yx()
const Au = 'transparent',
  Xx = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e
    },
    color(e, t, n) {
      const s = wu(e || Au),
        i = s.valid && wu(t || Au)
      return i && i.valid ? i.mix(s, n).hexString() : t
    },
    number(e, t, n) {
      return e + (t - e) * n
    }
  }
class Jx {
  constructor(t, n, s, i) {
    const o = n[s]
    i = Bi([t.to, i, o, t.from])
    const r = Bi([t.from, o, i])
    ;(this._active = !0),
      (this._fn = t.fn || Xx[t.type || typeof r]),
      (this._easing = Js[t.easing] || Js.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = s),
      (this._from = r),
      (this._to = i),
      (this._promises = void 0)
  }
  active() {
    return this._active
  }
  update(t, n, s) {
    if (this._active) {
      this._notify(!1)
      const i = this._target[this._prop],
        o = s - this._start,
        r = this._duration - o
      ;(this._start = s),
        (this._duration = Math.floor(Math.max(r, t.duration))),
        (this._total += o),
        (this._loop = !!t.loop),
        (this._to = Bi([t.to, n, i, t.from])),
        (this._from = Bi([t.from, i, n]))
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1))
  }
  tick(t) {
    const n = t - this._start,
      s = this._duration,
      i = this._prop,
      o = this._from,
      r = this._loop,
      a = this._to
    let c
    if (((this._active = o !== a && (r || n < s)), !this._active)) {
      ;(this._target[i] = a), this._notify(!0)
      return
    }
    if (n < 0) {
      this._target[i] = o
      return
    }
    ;(c = (n / s) % 2),
      (c = r && c > 1 ? 2 - c : c),
      (c = this._easing(Math.min(1, Math.max(0, c)))),
      (this._target[i] = this._fn(o, a, c))
  }
  wait() {
    const t = this._promises || (this._promises = [])
    return new Promise((n, s) => {
      t.push({ res: n, rej: s })
    })
  }
  _notify(t) {
    const n = t ? 'res' : 'rej',
      s = this._promises || []
    for (let i = 0; i < s.length; i++) s[i][n]()
  }
}
class Ch {
  constructor(t, n) {
    ;(this._chart = t), (this._properties = new Map()), this.configure(n)
  }
  configure(t) {
    if (!yt(t)) return
    const n = Object.keys(Ft.animation),
      s = this._properties
    Object.getOwnPropertyNames(t).forEach(i => {
      const o = t[i]
      if (!yt(o)) return
      const r = {}
      for (const a of n) r[a] = o[a]
      ;((Dt(o.properties) && o.properties) || [i]).forEach(a => {
        ;(a === i || !s.has(a)) && s.set(a, r)
      })
    })
  }
  _animateOptions(t, n) {
    const s = n.options,
      i = Zx(t, s)
    if (!i) return []
    const o = this._createAnimations(i, s)
    return (
      s.$shared &&
        Gx(t.options.$animations, s).then(
          () => {
            t.options = s
          },
          () => {}
        ),
      o
    )
  }
  _createAnimations(t, n) {
    const s = this._properties,
      i = [],
      o = t.$animations || (t.$animations = {}),
      r = Object.keys(n),
      a = Date.now()
    let c
    for (c = r.length - 1; c >= 0; --c) {
      const l = r[c]
      if (l.charAt(0) === '$') continue
      if (l === 'options') {
        i.push(...this._animateOptions(t, n))
        continue
      }
      const d = n[l]
      let h = o[l]
      const p = s.get(l)
      if (h)
        if (p && h.active()) {
          h.update(p, d, a)
          continue
        } else h.cancel()
      if (!p || !p.duration) {
        t[l] = d
        continue
      }
      ;(o[l] = h = new Jx(p, t, l, d)), i.push(h)
    }
    return i
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n)
      return
    }
    const s = this._createAnimations(t, n)
    if (s.length) return qe.add(this._chart, s), !0
  }
}
function Gx(e, t) {
  const n = [],
    s = Object.keys(t)
  for (let i = 0; i < s.length; i++) {
    const o = e[s[i]]
    o && o.active() && n.push(o.wait())
  }
  return Promise.all(n)
}
function Zx(e, t) {
  if (!t) return
  let n = e.options
  if (!n) {
    e.options = t
    return
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  )
}
function Ou(e, t) {
  const n = (e && e.options) || {},
    s = n.reverse,
    i = n.min === void 0 ? t : 0,
    o = n.max === void 0 ? t : 0
  return { start: s ? o : i, end: s ? i : o }
}
function Qx(e, t, n) {
  if (n === !1) return !1
  const s = Ou(e, n),
    i = Ou(t, n)
  return { top: i.end, right: s.end, bottom: i.start, left: s.start }
}
function tv(e) {
  let t, n, s, i
  return (
    yt(e)
      ? ((t = e.top), (n = e.right), (s = e.bottom), (i = e.left))
      : (t = n = s = i = e),
    { top: t, right: n, bottom: s, left: i, disabled: e === !1 }
  )
}
function kh(e, t) {
  const n = [],
    s = e._getSortedDatasetMetas(t)
  let i, o
  for (i = 0, o = s.length; i < o; ++i) n.push(s[i].index)
  return n
}
function Mu(e, t, n, s = {}) {
  const i = e.keys,
    o = s.mode === 'single'
  let r, a, c, l
  if (t !== null) {
    for (r = 0, a = i.length; r < a; ++r) {
      if (((c = +i[r]), c === n)) {
        if (s.all) continue
        break
      }
      ;(l = e.values[c]), Yt(l) && (o || t === 0 || ms(t) === ms(l)) && (t += l)
    }
    return t
  }
}
function ev(e) {
  const t = Object.keys(e),
    n = new Array(t.length)
  let s, i, o
  for (s = 0, i = t.length; s < i; ++s) (o = t[s]), (n[s] = { x: o, y: e[o] })
  return n
}
function Tu(e, t) {
  const n = e && e.options.stacked
  return n || (n === void 0 && t.stack !== void 0)
}
function nv(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`
}
function sv(e) {
  const { min: t, max: n, minDefined: s, maxDefined: i } = e.getUserBounds()
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY
  }
}
function iv(e, t, n) {
  const s = e[t] || (e[t] = {})
  return s[n] || (s[n] = {})
}
function Lu(e, t, n, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const o = e[i.index]
    if ((n && o > 0) || (!n && o < 0)) return i.index
  }
  return null
}
function Ru(e, t) {
  const { chart: n, _cachedMeta: s } = e,
    i = n._stacks || (n._stacks = {}),
    { iScale: o, vScale: r, index: a } = s,
    c = o.axis,
    l = r.axis,
    d = nv(o, r, s),
    h = t.length
  let p
  for (let m = 0; m < h; ++m) {
    const b = t[m],
      { [c]: w, [l]: x } = b,
      C = b._stacks || (b._stacks = {})
    ;(p = C[l] = iv(i, d, w)),
      (p[a] = x),
      (p._top = Lu(p, r, !0, s.type)),
      (p._bottom = Lu(p, r, !1, s.type))
    const S = p._visualValues || (p._visualValues = {})
    S[a] = x
  }
}
function Tr(e, t) {
  const n = e.scales
  return Object.keys(n)
    .filter(s => n[s].axis === t)
    .shift()
}
function ov(e, t) {
  return vn(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: 'default',
    type: 'dataset'
  })
}
function rv(e, t, n) {
  return vn(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: 'default',
    type: 'data'
  })
}
function Ms(e, t) {
  const n = e.controller.index,
    s = e.vScale && e.vScale.axis
  if (s) {
    t = t || e._parsed
    for (const i of t) {
      const o = i._stacks
      if (!o || o[s] === void 0 || o[s][n] === void 0) return
      delete o[s][n],
        o[s]._visualValues !== void 0 &&
          o[s]._visualValues[n] !== void 0 &&
          delete o[s]._visualValues[n]
    }
  }
}
const Lr = e => e === 'reset' || e === 'none',
  Du = (e, t) => (t ? e : Object.assign({}, e)),
  av = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: kh(n, !0), values: null }
class Zs {
  constructor(t, n) {
    ;(this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      (this.datasetElementType = new.target.datasetElementType),
      (this.dataElementType = new.target.dataElementType),
      this.initialize()
  }
  initialize() {
    const t = this._cachedMeta
    this.configure(),
      this.linkScales(),
      (t._stacked = Tu(t.vScale, t)),
      this.addElements(),
      this.options.fill &&
        !this.chart.isPluginEnabled('filler') &&
        console.warn(
          "Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options"
        )
  }
  updateIndex(t) {
    this.index !== t && Ms(this._cachedMeta), (this.index = t)
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      s = this.getDataset(),
      i = (h, p, m, b) => (h === 'x' ? p : h === 'r' ? b : m),
      o = (n.xAxisID = ht(s.xAxisID, Tr(t, 'x'))),
      r = (n.yAxisID = ht(s.yAxisID, Tr(t, 'y'))),
      a = (n.rAxisID = ht(s.rAxisID, Tr(t, 'r'))),
      c = n.indexAxis,
      l = (n.iAxisID = i(c, o, r, a)),
      d = (n.vAxisID = i(c, r, o, a))
    ;(n.xScale = this.getScaleForId(o)),
      (n.yScale = this.getScaleForId(r)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(l)),
      (n.vScale = this.getScaleForId(d))
  }
  getDataset() {
    return this.chart.data.datasets[this.index]
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index)
  }
  getScaleForId(t) {
    return this.chart.scales[t]
  }
  _getOtherScale(t) {
    const n = this._cachedMeta
    return t === n.iScale ? n.vScale : n.iScale
  }
  reset() {
    this._update('reset')
  }
  _destroy() {
    const t = this._cachedMeta
    this._data && gu(this._data, this), t._stacked && Ms(t)
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      s = this._data
    if (yt(n)) this._data = ev(n)
    else if (s !== n) {
      if (s) {
        gu(s, this)
        const i = this._cachedMeta
        Ms(i), (i._parsed = [])
      }
      n && Object.isExtensible(n) && $_(n, this),
        (this._syncList = []),
        (this._data = n)
    }
  }
  addElements() {
    const t = this._cachedMeta
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType())
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      s = this.getDataset()
    let i = !1
    this._dataCheck()
    const o = n._stacked
    ;(n._stacked = Tu(n.vScale, n)),
      n.stack !== s.stack && ((i = !0), Ms(n), (n.stack = s.stack)),
      this._resyncElements(t),
      (i || o !== n._stacked) && Ru(this, n._parsed)
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      s = t.getOptionScopes(this.getDataset(), n, !0)
    ;(this.options = t.createResolver(s, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {})
  }
  parse(t, n) {
    const { _cachedMeta: s, _data: i } = this,
      { iScale: o, _stacked: r } = s,
      a = o.axis
    let c = t === 0 && n === i.length ? !0 : s._sorted,
      l = t > 0 && s._parsed[t - 1],
      d,
      h,
      p
    if (this._parsing === !1) (s._parsed = i), (s._sorted = !0), (p = i)
    else {
      Dt(i[t])
        ? (p = this.parseArrayData(s, i, t, n))
        : yt(i[t])
        ? (p = this.parseObjectData(s, i, t, n))
        : (p = this.parsePrimitiveData(s, i, t, n))
      const m = () => h[a] === null || (l && h[a] < l[a])
      for (d = 0; d < n; ++d)
        (s._parsed[d + t] = h = p[d]), c && (m() && (c = !1), (l = h))
      s._sorted = c
    }
    r && Ru(this, p)
  }
  parsePrimitiveData(t, n, s, i) {
    const { iScale: o, vScale: r } = t,
      a = o.axis,
      c = r.axis,
      l = o.getLabels(),
      d = o === r,
      h = new Array(i)
    let p, m, b
    for (p = 0, m = i; p < m; ++p)
      (b = p + s),
        (h[p] = { [a]: d || o.parse(l[b], b), [c]: r.parse(n[b], b) })
    return h
  }
  parseArrayData(t, n, s, i) {
    const { xScale: o, yScale: r } = t,
      a = new Array(i)
    let c, l, d, h
    for (c = 0, l = i; c < l; ++c)
      (d = c + s),
        (h = n[d]),
        (a[c] = { x: o.parse(h[0], d), y: r.parse(h[1], d) })
    return a
  }
  parseObjectData(t, n, s, i) {
    const { xScale: o, yScale: r } = t,
      { xAxisKey: a = 'x', yAxisKey: c = 'y' } = this._parsing,
      l = new Array(i)
    let d, h, p, m
    for (d = 0, h = i; d < h; ++d)
      (p = d + s),
        (m = n[p]),
        (l[d] = { x: o.parse(xo(m, a), p), y: r.parse(xo(m, c), p) })
    return l
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t]
  }
  getDataElement(t) {
    return this._cachedMeta.data[t]
  }
  applyStack(t, n, s) {
    const i = this.chart,
      o = this._cachedMeta,
      r = n[t.axis],
      a = { keys: kh(i, !0), values: n._stacks[t.axis]._visualValues }
    return Mu(a, r, o.index, { mode: s })
  }
  updateRangeFromParsed(t, n, s, i) {
    const o = s[n.axis]
    let r = o === null ? NaN : o
    const a = i && s._stacks[n.axis]
    i && a && ((i.values = a), (r = Mu(i, o, this._cachedMeta.index))),
      (t.min = Math.min(t.min, r)),
      (t.max = Math.max(t.max, r))
  }
  getMinMax(t, n) {
    const s = this._cachedMeta,
      i = s._parsed,
      o = s._sorted && t === s.iScale,
      r = i.length,
      a = this._getOtherScale(t),
      c = av(n, s, this.chart),
      l = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: d, max: h } = sv(a)
    let p, m
    function b() {
      m = i[p]
      const w = m[a.axis]
      return !Yt(m[t.axis]) || d > w || h < w
    }
    for (
      p = 0;
      p < r && !(!b() && (this.updateRangeFromParsed(l, t, m, c), o));
      ++p
    );
    if (o) {
      for (p = r - 1; p >= 0; --p)
        if (!b()) {
          this.updateRangeFromParsed(l, t, m, c)
          break
        }
    }
    return l
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      s = []
    let i, o, r
    for (i = 0, o = n.length; i < o; ++i) (r = n[i][t.axis]), Yt(r) && s.push(r)
    return s
  }
  getMaxOverflow() {
    return !1
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      s = n.iScale,
      i = n.vScale,
      o = this.getParsed(t)
    return {
      label: s ? '' + s.getLabelForValue(o[s.axis]) : '',
      value: i ? '' + i.getLabelForValue(o[i.axis]) : ''
    }
  }
  _update(t) {
    const n = this._cachedMeta
    this.update(t || 'default'),
      (n._clip = tv(
        ht(this.options.clip, Qx(n.xScale, n.yScale, this.getMaxOverflow()))
      ))
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      s = this._cachedMeta,
      i = s.data || [],
      o = n.chartArea,
      r = [],
      a = this._drawStart || 0,
      c = this._drawCount || i.length - a,
      l = this.options.drawActiveElementsOnTop
    let d
    for (s.dataset && s.dataset.draw(t, o, a, c), d = a; d < a + c; ++d) {
      const h = i[d]
      h.hidden || (h.active && l ? r.push(h) : h.draw(t, o))
    }
    for (d = 0; d < r.length; ++d) r[d].draw(t, o)
  }
  getStyle(t, n) {
    const s = n ? 'active' : 'default'
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(s)
      : this.resolveDataElementOptions(t || 0, s)
  }
  getContext(t, n, s) {
    const i = this.getDataset()
    let o
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const r = this._cachedMeta.data[t]
      ;(o = r.$context || (r.$context = rv(this.getContext(), t, r))),
        (o.parsed = this.getParsed(t)),
        (o.raw = i.data[t]),
        (o.index = o.dataIndex = t)
    } else
      (o =
        this.$context ||
        (this.$context = ov(this.chart.getContext(), this.index))),
        (o.dataset = i),
        (o.index = o.datasetIndex = this.index)
    return (o.active = !!n), (o.mode = s), o
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t)
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t)
  }
  _resolveElementOptions(t, n = 'default', s) {
    const i = n === 'active',
      o = this._cachedDataOpts,
      r = t + '-' + n,
      a = o[r],
      c = this.enableOptionSharing && vo(s)
    if (a) return Du(a, c)
    const l = this.chart.config,
      d = l.datasetElementScopeKeys(this._type, t),
      h = i ? [`${t}Hover`, 'hover', t, ''] : [t, ''],
      p = l.getOptionScopes(this.getDataset(), d),
      m = Object.keys(Ft.elements[t]),
      b = () => this.getContext(s, i, n),
      w = l.resolveNamedOptions(p, m, b, h)
    return w.$shared && ((w.$shared = c), (o[r] = Object.freeze(Du(w, c)))), w
  }
  _resolveAnimations(t, n, s) {
    const i = this.chart,
      o = this._cachedDataOpts,
      r = `animation-${n}`,
      a = o[r]
    if (a) return a
    let c
    if (i.options.animation !== !1) {
      const d = this.chart.config,
        h = d.datasetAnimationScopeKeys(this._type, n),
        p = d.getOptionScopes(this.getDataset(), h)
      c = d.createResolver(p, this.getContext(t, s, n))
    }
    const l = new Ch(i, c && c.animations)
    return c && c._cacheable && (o[r] = Object.freeze(l)), l
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
  }
  includeOptions(t, n) {
    return !n || Lr(t) || this.chart._animationsDisabled
  }
  _getSharedOptions(t, n) {
    const s = this.resolveDataElementOptions(t, n),
      i = this._sharedOptions,
      o = this.getSharedOptions(s),
      r = this.includeOptions(n, o) || o !== i
    return (
      this.updateSharedOptions(o, n, s), { sharedOptions: o, includeOptions: r }
    )
  }
  updateElement(t, n, s, i) {
    Lr(i) ? Object.assign(t, s) : this._resolveAnimations(n, i).update(t, s)
  }
  updateSharedOptions(t, n, s) {
    t && !Lr(n) && this._resolveAnimations(void 0, n).update(t, s)
  }
  _setStyle(t, n, s, i) {
    t.active = i
    const o = this.getStyle(n, i)
    this._resolveAnimations(n, s, i).update(t, {
      options: (!i && this.getSharedOptions(o)) || o
    })
  }
  removeHoverStyle(t, n, s) {
    this._setStyle(t, s, 'active', !1)
  }
  setHoverStyle(t, n, s) {
    this._setStyle(t, s, 'active', !0)
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, 'active', !1)
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset
    t && this._setStyle(t, void 0, 'active', !0)
  }
  _resyncElements(t) {
    const n = this._data,
      s = this._cachedMeta.data
    for (const [a, c, l] of this._syncList) this[a](c, l)
    this._syncList = []
    const i = s.length,
      o = n.length,
      r = Math.min(o, i)
    r && this.parse(0, r),
      o > i
        ? this._insertElements(i, o - i, t)
        : o < i && this._removeElements(o, i - o)
  }
  _insertElements(t, n, s = !0) {
    const i = this._cachedMeta,
      o = i.data,
      r = t + n
    let a
    const c = l => {
      for (l.length += n, a = l.length - 1; a >= r; a--) l[a] = l[a - n]
    }
    for (c(o), a = t; a < r; ++a) o[a] = new this.dataElementType()
    this._parsing && c(i._parsed),
      this.parse(t, n),
      s && this.updateElements(o, t, n, 'reset')
  }
  updateElements(t, n, s, i) {}
  _removeElements(t, n) {
    const s = this._cachedMeta
    if (this._parsing) {
      const i = s._parsed.splice(t, n)
      s._stacked && Ms(s, i)
    }
    s.data.splice(t, n)
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t)
    else {
      const [n, s, i] = t
      this[n](s, i)
    }
    this.chart._dataChanges.push([this.index, ...t])
  }
  _onDataPush() {
    const t = arguments.length
    this._sync(['_insertElements', this.getDataset().data.length - t, t])
  }
  _onDataPop() {
    this._sync(['_removeElements', this._cachedMeta.data.length - 1, 1])
  }
  _onDataShift() {
    this._sync(['_removeElements', 0, 1])
  }
  _onDataSplice(t, n) {
    n && this._sync(['_removeElements', t, n])
    const s = arguments.length - 2
    s && this._sync(['_insertElements', t, s])
  }
  _onDataUnshift() {
    this._sync(['_insertElements', 0, arguments.length])
  }
}
rt(Zs, 'defaults', {}),
  rt(Zs, 'datasetElementType', null),
  rt(Zs, 'dataElementType', null)
class oo extends Zs {
  initialize() {
    ;(this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize()
  }
  update(t) {
    const n = this._cachedMeta,
      { dataset: s, data: i = [], _dataset: o } = n,
      r = this.chart._animationsDisabled
    let { start: a, count: c } = V_(n, i, r)
    ;(this._drawStart = a),
      (this._drawCount = c),
      U_(n) && ((a = 0), (c = i.length)),
      (s._chart = this.chart),
      (s._datasetIndex = this.index),
      (s._decimated = !!o._decimated),
      (s.points = i)
    const l = this.resolveDatasetElementOptions(t)
    this.options.showLine || (l.borderWidth = 0),
      (l.segment = this.options.segment),
      this.updateElement(s, void 0, { animated: !r, options: l }, t),
      this.updateElements(i, a, c, t)
  }
  updateElements(t, n, s, i) {
    const o = i === 'reset',
      { iScale: r, vScale: a, _stacked: c, _dataset: l } = this._cachedMeta,
      { sharedOptions: d, includeOptions: h } = this._getSharedOptions(n, i),
      p = r.axis,
      m = a.axis,
      { spanGaps: b, segment: w } = this.options,
      x = ui(b) ? b : Number.POSITIVE_INFINITY,
      C = this.chart._animationsDisabled || o || i === 'none',
      S = n + s,
      D = t.length
    let A = n > 0 && this.getParsed(n - 1)
    for (let L = 0; L < D; ++L) {
      const j = t[L],
        z = C ? j : {}
      if (L < n || L >= S) {
        z.skip = !0
        continue
      }
      const T = this.getParsed(L),
        W = At(T[m]),
        $ = (z[p] = r.getPixelForValue(T[p], L)),
        G = (z[m] =
          o || W
            ? a.getBasePixel()
            : a.getPixelForValue(c ? this.applyStack(a, T, c) : T[m], L))
      ;(z.skip = isNaN($) || isNaN(G) || W),
        (z.stop = L > 0 && Math.abs(T[p] - A[p]) > x),
        w && ((z.parsed = T), (z.raw = l.data[L])),
        h &&
          (z.options =
            d || this.resolveDataElementOptions(L, j.active ? 'active' : i)),
        C || this.updateElement(j, L, z, i),
        (A = T)
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.dataset,
      s = (n.options && n.options.borderWidth) || 0,
      i = t.data || []
    if (!i.length) return s
    const o = i[0].size(this.resolveDataElementOptions(0)),
      r = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1))
    return Math.max(s, o, r) / 2
  }
  draw() {
    const t = this._cachedMeta
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw()
  }
}
rt(oo, 'id', 'line'),
  rt(oo, 'defaults', {
    datasetElementType: 'line',
    dataElementType: 'point',
    showLine: !0,
    spanGaps: !1
  }),
  rt(oo, 'overrides', {
    scales: { _index_: { type: 'category' }, _value_: { type: 'linear' } }
  })
function Mn() {
  throw new Error(
    'This method is not implemented: Check that a complete date adapter is provided.'
  )
}
class cl {
  constructor(t) {
    rt(this, 'options')
    this.options = t || {}
  }
  static override(t) {
    Object.assign(cl.prototype, t)
  }
  init() {}
  formats() {
    return Mn()
  }
  parse() {
    return Mn()
  }
  format() {
    return Mn()
  }
  add() {
    return Mn()
  }
  diff() {
    return Mn()
  }
  startOf() {
    return Mn()
  }
  endOf() {
    return Mn()
  }
}
var lv = { _date: cl }
function cv(e, t, n, s) {
  const { controller: i, data: o, _sorted: r } = e,
    a = i._cachedMeta.iScale
  if (a && t === a.axis && t !== 'r' && r && o.length) {
    const c = a._reversePixels ? N_ : zn
    if (s) {
      if (i._sharedOptions) {
        const l = o[0],
          d = typeof l.getRange == 'function' && l.getRange(t)
        if (d) {
          const h = c(o, t, n - d),
            p = c(o, t, n + d)
          return { lo: h.lo, hi: p.hi }
        }
      }
    } else return c(o, t, n)
  }
  return { lo: 0, hi: o.length - 1 }
}
function wi(e, t, n, s, i) {
  const o = e.getSortedVisibleDatasetMetas(),
    r = n[t]
  for (let a = 0, c = o.length; a < c; ++a) {
    const { index: l, data: d } = o[a],
      { lo: h, hi: p } = cv(o[a], t, r, i)
    for (let m = h; m <= p; ++m) {
      const b = d[m]
      b.skip || s(b, l, m)
    }
  }
}
function uv(e) {
  const t = e.indexOf('x') !== -1,
    n = e.indexOf('y') !== -1
  return function (s, i) {
    const o = t ? Math.abs(s.x - i.x) : 0,
      r = n ? Math.abs(s.y - i.y) : 0
    return Math.sqrt(Math.pow(o, 2) + Math.pow(r, 2))
  }
}
function Rr(e, t, n, s, i) {
  const o = []
  return (
    (!i && !e.isPointInArea(t)) ||
      wi(
        e,
        n,
        t,
        function (a, c, l) {
          ;(!i && !Je(a, e.chartArea, 0)) ||
            (a.inRange(t.x, t.y, s) &&
              o.push({ element: a, datasetIndex: c, index: l }))
        },
        !0
      ),
    o
  )
}
function dv(e, t, n, s) {
  let i = []
  function o(r, a, c) {
    const { startAngle: l, endAngle: d } = r.getProps(
        ['startAngle', 'endAngle'],
        s
      ),
      { angle: h } = I_(r, { x: t.x, y: t.y })
    ah(h, l, d) && i.push({ element: r, datasetIndex: a, index: c })
  }
  return wi(e, n, t, o), i
}
function fv(e, t, n, s, i, o) {
  let r = []
  const a = uv(n)
  let c = Number.POSITIVE_INFINITY
  function l(d, h, p) {
    const m = d.inRange(t.x, t.y, i)
    if (s && !m) return
    const b = d.getCenterPoint(i)
    if (!(!!o || e.isPointInArea(b)) && !m) return
    const x = a(t, b)
    x < c
      ? ((r = [{ element: d, datasetIndex: h, index: p }]), (c = x))
      : x === c && r.push({ element: d, datasetIndex: h, index: p })
  }
  return wi(e, n, t, l), r
}
function Dr(e, t, n, s, i, o) {
  return !o && !e.isPointInArea(t)
    ? []
    : n === 'r' && !s
    ? dv(e, t, n, i)
    : fv(e, t, n, s, i, o)
}
function Iu(e, t, n, s, i) {
  const o = [],
    r = n === 'x' ? 'inXRange' : 'inYRange'
  let a = !1
  return (
    wi(e, n, t, (c, l, d) => {
      c[r](t[n], i) &&
        (o.push({ element: c, datasetIndex: l, index: d }),
        (a = a || c.inRange(t.x, t.y, i)))
    }),
    s && !a ? [] : o
  )
}
var hv = {
  evaluateInteractionItems: wi,
  modes: {
    index(e, t, n, s) {
      const i = Ln(t, e),
        o = n.axis || 'x',
        r = n.includeInvisible || !1,
        a = n.intersect ? Rr(e, i, o, s, r) : Dr(e, i, o, !1, s, r),
        c = []
      return a.length
        ? (e.getSortedVisibleDatasetMetas().forEach(l => {
            const d = a[0].index,
              h = l.data[d]
            h &&
              !h.skip &&
              c.push({ element: h, datasetIndex: l.index, index: d })
          }),
          c)
        : []
    },
    dataset(e, t, n, s) {
      const i = Ln(t, e),
        o = n.axis || 'xy',
        r = n.includeInvisible || !1
      let a = n.intersect ? Rr(e, i, o, s, r) : Dr(e, i, o, !1, s, r)
      if (a.length > 0) {
        const c = a[0].datasetIndex,
          l = e.getDatasetMeta(c).data
        a = []
        for (let d = 0; d < l.length; ++d)
          a.push({ element: l[d], datasetIndex: c, index: d })
      }
      return a
    },
    point(e, t, n, s) {
      const i = Ln(t, e),
        o = n.axis || 'xy',
        r = n.includeInvisible || !1
      return Rr(e, i, o, s, r)
    },
    nearest(e, t, n, s) {
      const i = Ln(t, e),
        o = n.axis || 'xy',
        r = n.includeInvisible || !1
      return Dr(e, i, o, n.intersect, s, r)
    },
    x(e, t, n, s) {
      const i = Ln(t, e)
      return Iu(e, i, 'x', n.intersect, s)
    },
    y(e, t, n, s) {
      const i = Ln(t, e)
      return Iu(e, i, 'y', n.intersect, s)
    }
  }
}
const Sh = ['left', 'top', 'right', 'bottom']
function Ts(e, t) {
  return e.filter(n => n.pos === t)
}
function Fu(e, t) {
  return e.filter(n => Sh.indexOf(n.pos) === -1 && n.box.axis === t)
}
function Ls(e, t) {
  return e.sort((n, s) => {
    const i = t ? s : n,
      o = t ? n : s
    return i.weight === o.weight ? i.index - o.index : i.weight - o.weight
  })
}
function pv(e) {
  const t = []
  let n, s, i, o, r, a
  for (n = 0, s = (e || []).length; n < s; ++n)
    (i = e[n]),
      ({
        position: o,
        options: { stack: r, stackWeight: a = 1 }
      } = i),
      t.push({
        index: n,
        box: i,
        pos: o,
        horizontal: i.isHorizontal(),
        weight: i.weight,
        stack: r && o + r,
        stackWeight: a
      })
  return t
}
function gv(e) {
  const t = {}
  for (const n of e) {
    const { stack: s, pos: i, stackWeight: o } = n
    if (!s || !Sh.includes(i)) continue
    const r = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 })
    r.count++, (r.weight += o)
  }
  return t
}
function mv(e, t) {
  const n = gv(e),
    { vBoxMaxWidth: s, hBoxMaxHeight: i } = t
  let o, r, a
  for (o = 0, r = e.length; o < r; ++o) {
    a = e[o]
    const { fullSize: c } = a.box,
      l = n[a.stack],
      d = l && a.stackWeight / l.weight
    a.horizontal
      ? ((a.width = d ? d * s : c && t.availableWidth), (a.height = i))
      : ((a.width = s), (a.height = d ? d * i : c && t.availableHeight))
  }
  return n
}
function bv(e) {
  const t = pv(e),
    n = Ls(
      t.filter(l => l.box.fullSize),
      !0
    ),
    s = Ls(Ts(t, 'left'), !0),
    i = Ls(Ts(t, 'right')),
    o = Ls(Ts(t, 'top'), !0),
    r = Ls(Ts(t, 'bottom')),
    a = Fu(t, 'x'),
    c = Fu(t, 'y')
  return {
    fullSize: n,
    leftAndTop: s.concat(o),
    rightAndBottom: i.concat(c).concat(r).concat(a),
    chartArea: Ts(t, 'chartArea'),
    vertical: s.concat(i).concat(c),
    horizontal: o.concat(r).concat(a)
  }
}
function Bu(e, t, n, s) {
  return Math.max(e[n], t[n]) + Math.max(e[s], t[s])
}
function Ph(e, t) {
  ;(e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right))
}
function wv(e, t, n, s) {
  const { pos: i, box: o } = n,
    r = e.maxPadding
  if (!yt(i)) {
    n.size && (e[i] -= n.size)
    const h = s[n.stack] || { size: 0, count: 1 }
    ;(h.size = Math.max(h.size, n.horizontal ? o.height : o.width)),
      (n.size = h.size / h.count),
      (e[i] += n.size)
  }
  o.getPadding && Ph(r, o.getPadding())
  const a = Math.max(0, t.outerWidth - Bu(r, e, 'left', 'right')),
    c = Math.max(0, t.outerHeight - Bu(r, e, 'top', 'bottom')),
    l = a !== e.w,
    d = c !== e.h
  return (
    (e.w = a),
    (e.h = c),
    n.horizontal ? { same: l, other: d } : { same: d, other: l }
  )
}
function yv(e) {
  const t = e.maxPadding
  function n(s) {
    const i = Math.max(t[s] - e[s], 0)
    return (e[s] += i), i
  }
  ;(e.y += n('top')), (e.x += n('left')), n('right'), n('bottom')
}
function _v(e, t) {
  const n = t.maxPadding
  function s(i) {
    const o = { left: 0, top: 0, right: 0, bottom: 0 }
    return (
      i.forEach(r => {
        o[r] = Math.max(t[r], n[r])
      }),
      o
    )
  }
  return s(e ? ['left', 'right'] : ['top', 'bottom'])
}
function zs(e, t, n, s) {
  const i = []
  let o, r, a, c, l, d
  for (o = 0, r = e.length, l = 0; o < r; ++o) {
    ;(a = e[o]),
      (c = a.box),
      c.update(a.width || t.w, a.height || t.h, _v(a.horizontal, t))
    const { same: h, other: p } = wv(t, n, a, s)
    ;(l |= h && i.length), (d = d || p), c.fullSize || i.push(a)
  }
  return (l && zs(i, t, n, s)) || d
}
function $i(e, t, n, s, i) {
  ;(e.top = n),
    (e.left = t),
    (e.right = t + s),
    (e.bottom = n + i),
    (e.width = s),
    (e.height = i)
}
function Nu(e, t, n, s) {
  const i = n.padding
  let { x: o, y: r } = t
  for (const a of e) {
    const c = a.box,
      l = s[a.stack] || { count: 1, placed: 0, weight: 1 },
      d = a.stackWeight / l.weight || 1
    if (a.horizontal) {
      const h = t.w * d,
        p = l.size || c.height
      vo(l.start) && (r = l.start),
        c.fullSize
          ? $i(c, i.left, r, n.outerWidth - i.right - i.left, p)
          : $i(c, t.left + l.placed, r, h, p),
        (l.start = r),
        (l.placed += h),
        (r = c.bottom)
    } else {
      const h = t.h * d,
        p = l.size || c.width
      vo(l.start) && (o = l.start),
        c.fullSize
          ? $i(c, o, i.top, p, n.outerHeight - i.bottom - i.top)
          : $i(c, o, t.top + l.placed, p, h),
        (l.start = o),
        (l.placed += h),
        (o = c.right)
    }
  }
  ;(t.x = o), (t.y = r)
}
var we = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || 'top'),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n)
              }
            }
          ]
        }),
      e.boxes.push(t)
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1
    n !== -1 && e.boxes.splice(n, 1)
  },
  configure(e, t, n) {
    ;(t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight)
  },
  update(e, t, n, s) {
    if (!e) return
    const i = ee(e.options.layout.padding),
      o = Math.max(t - i.width, 0),
      r = Math.max(n - i.height, 0),
      a = bv(e.boxes),
      c = a.vertical,
      l = a.horizontal
    Ct(e.boxes, w => {
      typeof w.beforeLayout == 'function' && w.beforeLayout()
    })
    const d =
        c.reduce(
          (w, x) => (x.box.options && x.box.options.display === !1 ? w : w + 1),
          0
        ) || 1,
      h = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: i,
        availableWidth: o,
        availableHeight: r,
        vBoxMaxWidth: o / 2 / d,
        hBoxMaxHeight: r / 2
      }),
      p = Object.assign({}, i)
    Ph(p, ee(s))
    const m = Object.assign(
        { maxPadding: p, w: o, h: r, x: i.left, y: i.top },
        i
      ),
      b = mv(c.concat(l), h)
    zs(a.fullSize, m, h, b),
      zs(c, m, h, b),
      zs(l, m, h, b) && zs(c, m, h, b),
      yv(m),
      Nu(a.leftAndTop, m, h, b),
      (m.x += m.w),
      (m.y += m.h),
      Nu(a.rightAndBottom, m, h, b),
      (e.chartArea = {
        left: m.left,
        top: m.top,
        right: m.left + m.w,
        bottom: m.top + m.h,
        height: m.h,
        width: m.w
      }),
      Ct(a.chartArea, w => {
        const x = w.box
        Object.assign(x, e.chartArea),
          x.update(m.w, m.h, { left: 0, top: 0, right: 0, bottom: 0 })
      })
  }
}
class Eh {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1
  }
  addEventListener(t, n, s) {}
  removeEventListener(t, n, s) {}
  getDevicePixelRatio() {
    return 1
  }
  getMaximumSize(t, n, s, i) {
    return (
      (n = Math.max(0, n || t.width)),
      (s = s || t.height),
      { width: n, height: Math.max(0, i ? Math.floor(n / i) : s) }
    )
  }
  isAttached(t) {
    return !0
  }
  updateConfig(t) {}
}
class xv extends Eh {
  acquireContext(t) {
    return (t && t.getContext && t.getContext('2d')) || null
  }
  updateConfig(t) {
    t.options.animation = !1
  }
}
const ro = '$chartjs',
  vv = {
    touchstart: 'mousedown',
    touchmove: 'mousemove',
    touchend: 'mouseup',
    pointerenter: 'mouseenter',
    pointerdown: 'mousedown',
    pointermove: 'mousemove',
    pointerup: 'mouseup',
    pointerleave: 'mouseout',
    pointerout: 'mouseout'
  },
  zu = e => e === null || e === ''
function Cv(e, t) {
  const n = e.style,
    s = e.getAttribute('height'),
    i = e.getAttribute('width')
  if (
    ((e[ro] = {
      initial: {
        height: s,
        width: i,
        style: { display: n.display, height: n.height, width: n.width }
      }
    }),
    (n.display = n.display || 'block'),
    (n.boxSizing = n.boxSizing || 'border-box'),
    zu(i))
  ) {
    const o = ku(e, 'width')
    o !== void 0 && (e.width = o)
  }
  if (zu(s))
    if (e.style.height === '') e.height = e.width / (t || 2)
    else {
      const o = ku(e, 'height')
      o !== void 0 && (e.height = o)
    }
  return e
}
const Ah = Ix ? { passive: !0 } : !1
function kv(e, t, n) {
  e.addEventListener(t, n, Ah)
}
function Sv(e, t, n) {
  e.canvas.removeEventListener(t, n, Ah)
}
function Pv(e, t) {
  const n = vv[e.type] || e.type,
    { x: s, y: i } = Ln(e, t)
  return {
    type: n,
    chart: t,
    native: e,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null
  }
}
function Eo(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0
}
function Ev(e, t, n) {
  const s = e.canvas,
    i = new MutationObserver(o => {
      let r = !1
      for (const a of o)
        (r = r || Eo(a.addedNodes, s)), (r = r && !Eo(a.removedNodes, s))
      r && n()
    })
  return i.observe(document, { childList: !0, subtree: !0 }), i
}
function Av(e, t, n) {
  const s = e.canvas,
    i = new MutationObserver(o => {
      let r = !1
      for (const a of o)
        (r = r || Eo(a.removedNodes, s)), (r = r && !Eo(a.addedNodes, s))
      r && n()
    })
  return i.observe(document, { childList: !0, subtree: !0 }), i
}
const di = new Map()
let $u = 0
function Oh() {
  const e = window.devicePixelRatio
  e !== $u &&
    (($u = e),
    di.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t()
    }))
}
function Ov(e, t) {
  di.size || window.addEventListener('resize', Oh), di.set(e, t)
}
function Mv(e) {
  di.delete(e), di.size || window.removeEventListener('resize', Oh)
}
function Tv(e, t, n) {
  const s = e.canvas,
    i = s && ll(s)
  if (!i) return
  const o = uh((a, c) => {
      const l = i.clientWidth
      n(a, c), l < i.clientWidth && n()
    }, window),
    r = new ResizeObserver(a => {
      const c = a[0],
        l = c.contentRect.width,
        d = c.contentRect.height
      ;(l === 0 && d === 0) || o(l, d)
    })
  return r.observe(i), Ov(e, o), r
}
function Ir(e, t, n) {
  n && n.disconnect(), t === 'resize' && Mv(e)
}
function Lv(e, t, n) {
  const s = e.canvas,
    i = uh(o => {
      e.ctx !== null && n(Pv(o, e))
    }, e)
  return kv(s, t, i), i
}
class Rv extends Eh {
  acquireContext(t, n) {
    const s = t && t.getContext && t.getContext('2d')
    return s && s.canvas === t ? (Cv(t, n), s) : null
  }
  releaseContext(t) {
    const n = t.canvas
    if (!n[ro]) return !1
    const s = n[ro].initial
    ;['height', 'width'].forEach(o => {
      const r = s[o]
      At(r) ? n.removeAttribute(o) : n.setAttribute(o, r)
    })
    const i = s.style || {}
    return (
      Object.keys(i).forEach(o => {
        n.style[o] = i[o]
      }),
      (n.width = n.width),
      delete n[ro],
      !0
    )
  }
  addEventListener(t, n, s) {
    this.removeEventListener(t, n)
    const i = t.$proxies || (t.$proxies = {}),
      r = { attach: Ev, detach: Av, resize: Tv }[n] || Lv
    i[n] = r(t, n, s)
  }
  removeEventListener(t, n) {
    const s = t.$proxies || (t.$proxies = {}),
      i = s[n]
    if (!i) return
    ;(({ attach: Ir, detach: Ir, resize: Ir })[n] || Sv)(t, n, i),
      (s[n] = void 0)
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio
  }
  getMaximumSize(t, n, s, i) {
    return Dx(t, n, s, i)
  }
  isAttached(t) {
    const n = ll(t)
    return !!(n && n.isConnected)
  }
}
function Dv(e) {
  return !yh() || (typeof OffscreenCanvas < 'u' && e instanceof OffscreenCanvas)
    ? xv
    : Rv
}
var Yi
let Un =
  ((Yi = class {
    constructor() {
      rt(this, 'x')
      rt(this, 'y')
      rt(this, 'active', !1)
      rt(this, 'options')
      rt(this, '$animations')
    }
    tooltipPosition(t) {
      const { x: n, y: s } = this.getProps(['x', 'y'], t)
      return { x: n, y: s }
    }
    hasValue() {
      return ui(this.x) && ui(this.y)
    }
    getProps(t, n) {
      const s = this.$animations
      if (!n || !s) return this
      const i = {}
      return (
        t.forEach(o => {
          i[o] = s[o] && s[o].active() ? s[o]._to : this[o]
        }),
        i
      )
    }
  }),
  rt(Yi, 'defaults', {}),
  rt(Yi, 'defaultRoutes'),
  Yi)
function Iv(e, t) {
  const n = e.options.ticks,
    s = Fv(e),
    i = Math.min(n.maxTicksLimit || s, s),
    o = n.major.enabled ? Nv(t) : [],
    r = o.length,
    a = o[0],
    c = o[r - 1],
    l = []
  if (r > i) return zv(t, l, o, r / i), l
  const d = Bv(o, t, i)
  if (r > 0) {
    let h, p
    const m = r > 1 ? Math.round((c - a) / (r - 1)) : null
    for (Hi(t, l, d, At(m) ? 0 : a - m, a), h = 0, p = r - 1; h < p; h++)
      Hi(t, l, d, o[h], o[h + 1])
    return Hi(t, l, d, c, At(m) ? t.length : c + m), l
  }
  return Hi(t, l, d), l
}
function Fv(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    s = e._length / n + (t ? 0 : 1),
    i = e._maxLength / n
  return Math.floor(Math.min(s, i))
}
function Bv(e, t, n) {
  const s = $v(e),
    i = t.length / n
  if (!s) return Math.max(i, 1)
  const o = R_(s)
  for (let r = 0, a = o.length - 1; r < a; r++) {
    const c = o[r]
    if (c > i) return c
  }
  return Math.max(i, 1)
}
function Nv(e) {
  const t = []
  let n, s
  for (n = 0, s = e.length; n < s; n++) e[n].major && t.push(n)
  return t
}
function zv(e, t, n, s) {
  let i = 0,
    o = n[0],
    r
  for (s = Math.ceil(s), r = 0; r < e.length; r++)
    r === o && (t.push(e[r]), i++, (o = n[i * s]))
}
function Hi(e, t, n, s, i) {
  const o = ht(s, 0),
    r = Math.min(ht(i, e.length), e.length)
  let a = 0,
    c,
    l,
    d
  for (
    n = Math.ceil(n), i && ((c = i - s), (n = c / Math.floor(c / n))), d = o;
    d < 0;

  )
    a++, (d = Math.round(o + a * n))
  for (l = Math.max(o, 0); l < r; l++)
    l === d && (t.push(e[l]), a++, (d = Math.round(o + a * n)))
}
function $v(e) {
  const t = e.length
  let n, s
  if (t < 2) return !1
  for (s = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== s) return !1
  return s
}
const Hv = e => (e === 'left' ? 'right' : e === 'right' ? 'left' : e),
  Hu = (e, t, n) => (t === 'top' || t === 'left' ? e[t] + n : e[t] - n),
  ju = (e, t) => Math.min(t || e, e)
function Wu(e, t) {
  const n = [],
    s = e.length / t,
    i = e.length
  let o = 0
  for (; o < i; o += s) n.push(e[Math.floor(o)])
  return n
}
function jv(e, t, n) {
  const s = e.ticks.length,
    i = Math.min(t, s - 1),
    o = e._startPixel,
    r = e._endPixel,
    a = 1e-6
  let c = e.getPixelForTick(i),
    l
  if (
    !(
      n &&
      (s === 1
        ? (l = Math.max(c - o, r - c))
        : t === 0
        ? (l = (e.getPixelForTick(1) - c) / 2)
        : (l = (c - e.getPixelForTick(i - 1)) / 2),
      (c += i < t ? l : -l),
      c < o - a || c > r + a)
    )
  )
    return c
}
function Wv(e, t) {
  Ct(e, n => {
    const s = n.gc,
      i = s.length / 2
    let o
    if (i > t) {
      for (o = 0; o < i; ++o) delete n.data[s[o]]
      s.splice(0, i)
    }
  })
}
function Rs(e) {
  return e.drawTicks ? e.tickLength : 0
}
function Vu(e, t) {
  if (!e.display) return 0
  const n = jt(e.font, t),
    s = ee(e.padding)
  return (Dt(e.text) ? e.text.length : 1) * n.lineHeight + s.height
}
function Vv(e, t) {
  return vn(e, { scale: t, type: 'scale' })
}
function Uv(e, t, n) {
  return vn(e, { tick: n, index: t, type: 'tick' })
}
function qv(e, t, n) {
  let s = tl(e)
  return ((n && t !== 'right') || (!n && t === 'right')) && (s = Hv(s)), s
}
function Kv(e, t, n, s) {
  const { top: i, left: o, bottom: r, right: a, chart: c } = e,
    { chartArea: l, scales: d } = c
  let h = 0,
    p,
    m,
    b
  const w = r - i,
    x = a - o
  if (e.isHorizontal()) {
    if (((m = Zt(s, o, a)), yt(n))) {
      const C = Object.keys(n)[0],
        S = n[C]
      b = d[C].getPixelForValue(S) + w - t
    } else
      n === 'center' ? (b = (l.bottom + l.top) / 2 + w - t) : (b = Hu(e, n, t))
    p = a - o
  } else {
    if (yt(n)) {
      const C = Object.keys(n)[0],
        S = n[C]
      m = d[C].getPixelForValue(S) - x + t
    } else
      n === 'center' ? (m = (l.left + l.right) / 2 - x + t) : (m = Hu(e, n, t))
    ;(b = Zt(s, r, i)), (h = n === 'left' ? -de : de)
  }
  return { titleX: m, titleY: b, maxWidth: p, rotation: h }
}
class qn extends Un {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0)
  }
  init(t) {
    ;(this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax))
  }
  parse(t, n) {
    return t
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: s, _suggestedMax: i } = this
    return (
      (t = he(t, Number.POSITIVE_INFINITY)),
      (n = he(n, Number.NEGATIVE_INFINITY)),
      (s = he(s, Number.POSITIVE_INFINITY)),
      (i = he(i, Number.NEGATIVE_INFINITY)),
      { min: he(t, s), max: he(n, i), minDefined: Yt(t), maxDefined: Yt(n) }
    )
  }
  getMinMax(t) {
    let { min: n, max: s, minDefined: i, maxDefined: o } = this.getUserBounds(),
      r
    if (i && o) return { min: n, max: s }
    const a = this.getMatchingVisibleMetas()
    for (let c = 0, l = a.length; c < l; ++c)
      (r = a[c].controller.getMinMax(this, t)),
        i || (n = Math.min(n, r.min)),
        o || (s = Math.max(s, r.max))
    return (
      (n = o && n > s ? s : n),
      (s = i && n > s ? n : s),
      { min: he(n, he(s, n)), max: he(s, he(n, s)) }
    )
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    }
  }
  getTicks() {
    return this.ticks
  }
  getLabels() {
    const t = this.chart.data
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    )
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t))
  }
  beforeLayout() {
    ;(this._cache = {}), (this._dataLimitsCached = !1)
  }
  beforeUpdate() {
    Pt(this.options.beforeUpdate, [this])
  }
  update(t, n, s) {
    const { beginAtZero: i, grace: o, ticks: r } = this.options,
      a = r.sampleSize
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = s =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + s.left + s.right
        : this.height + s.top + s.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = fx(this, o, i)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks()
    const c = a < this.ticks.length
    this._convertTicksToLabels(c ? Wu(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      r.display &&
        (r.autoSkip || r.source === 'auto') &&
        ((this.ticks = Iv(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      c && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate()
  }
  configure() {
    let t = this.options.reverse,
      n,
      s
    this.isHorizontal()
      ? ((n = this.left), (s = this.right))
      : ((n = this.top), (s = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = s),
      (this._reversePixels = t),
      (this._length = s - n),
      (this._alignToPixels = this.options.alignToPixels)
  }
  afterUpdate() {
    Pt(this.options.afterUpdate, [this])
  }
  beforeSetDimensions() {
    Pt(this.options.beforeSetDimensions, [this])
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0)
  }
  afterSetDimensions() {
    Pt(this.options.afterSetDimensions, [this])
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), Pt(this.options[t], [this])
  }
  beforeDataLimits() {
    this._callHooks('beforeDataLimits')
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks('afterDataLimits')
  }
  beforeBuildTicks() {
    this._callHooks('beforeBuildTicks')
  }
  buildTicks() {
    return []
  }
  afterBuildTicks() {
    this._callHooks('afterBuildTicks')
  }
  beforeTickToLabelConversion() {
    Pt(this.options.beforeTickToLabelConversion, [this])
  }
  generateTickLabels(t) {
    const n = this.options.ticks
    let s, i, o
    for (s = 0, i = t.length; s < i; s++)
      (o = t[s]), (o.label = Pt(n.callback, [o.value, s, t], this))
  }
  afterTickToLabelConversion() {
    Pt(this.options.afterTickToLabelConversion, [this])
  }
  beforeCalculateLabelRotation() {
    Pt(this.options.beforeCalculateLabelRotation, [this])
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      s = ju(this.ticks.length, t.ticks.maxTicksLimit),
      i = n.minRotation || 0,
      o = n.maxRotation
    let r = i,
      a,
      c,
      l
    if (
      !this._isVisible() ||
      !n.display ||
      i >= o ||
      s <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = i
      return
    }
    const d = this._getLabelSizes(),
      h = d.widest.width,
      p = d.highest.height,
      m = be(this.chart.width - h, 0, this.maxWidth)
    ;(a = t.offset ? this.maxWidth / s : m / (s - 1)),
      h + 6 > a &&
        ((a = m / (s - (t.offset ? 0.5 : 1))),
        (c =
          this.maxHeight -
          Rs(t.grid) -
          n.padding -
          Vu(t.title, this.chart.options.font)),
        (l = Math.sqrt(h * h + p * p)),
        (r = Za(
          Math.min(
            Math.asin(be((d.highest.height + 6) / a, -1, 1)),
            Math.asin(be(c / l, -1, 1)) - Math.asin(be(p / l, -1, 1))
          )
        )),
        (r = Math.max(i, Math.min(o, r)))),
      (this.labelRotation = r)
  }
  afterCalculateLabelRotation() {
    Pt(this.options.afterCalculateLabelRotation, [this])
  }
  afterAutoSkip() {}
  beforeFit() {
    Pt(this.options.beforeFit, [this])
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: s, title: i, grid: o }
      } = this,
      r = this._isVisible(),
      a = this.isHorizontal()
    if (r) {
      const c = Vu(i, n.options.font)
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = Rs(o) + c))
          : ((t.height = this.maxHeight), (t.width = Rs(o) + c)),
        s.display && this.ticks.length)
      ) {
        const {
            first: l,
            last: d,
            widest: h,
            highest: p
          } = this._getLabelSizes(),
          m = s.padding * 2,
          b = gn(this.labelRotation),
          w = Math.cos(b),
          x = Math.sin(b)
        if (a) {
          const C = s.mirror ? 0 : x * h.width + w * p.height
          t.height = Math.min(this.maxHeight, t.height + C + m)
        } else {
          const C = s.mirror ? 0 : w * h.width + x * p.height
          t.width = Math.min(this.maxWidth, t.width + C + m)
        }
        this._calculatePadding(l, d, x, w)
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom))
  }
  _calculatePadding(t, n, s, i) {
    const {
        ticks: { align: o, padding: r },
        position: a
      } = this.options,
      c = this.labelRotation !== 0,
      l = a !== 'top' && this.axis === 'x'
    if (this.isHorizontal()) {
      const d = this.getPixelForTick(0) - this.left,
        h = this.right - this.getPixelForTick(this.ticks.length - 1)
      let p = 0,
        m = 0
      c
        ? l
          ? ((p = i * t.width), (m = s * n.height))
          : ((p = s * t.height), (m = i * n.width))
        : o === 'start'
        ? (m = n.width)
        : o === 'end'
        ? (p = t.width)
        : o !== 'inner' && ((p = t.width / 2), (m = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((p - d + r) * this.width) / (this.width - d),
          0
        )),
        (this.paddingRight = Math.max(
          ((m - h + r) * this.width) / (this.width - h),
          0
        ))
    } else {
      let d = n.height / 2,
        h = t.height / 2
      o === 'start'
        ? ((d = 0), (h = t.height))
        : o === 'end' && ((d = n.height), (h = 0)),
        (this.paddingTop = d + r),
        (this.paddingBottom = h + r)
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )))
  }
  afterFit() {
    Pt(this.options.afterFit, [this])
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options
    return n === 'top' || n === 'bottom' || t === 'x'
  }
  isFullSize() {
    return this.options.fullSize
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t)
    let n, s
    for (n = 0, s = t.length; n < s; n++)
      At(t[n].label) && (t.splice(n, 1), s--, n--)
    this.afterTickToLabelConversion()
  }
  _getLabelSizes() {
    let t = this._labelSizes
    if (!t) {
      const n = this.options.ticks.sampleSize
      let s = this.ticks
      n < s.length && (s = Wu(s, n)),
        (this._labelSizes = t =
          this._computeLabelSizes(
            s,
            s.length,
            this.options.ticks.maxTicksLimit
          ))
    }
    return t
  }
  _computeLabelSizes(t, n, s) {
    const { ctx: i, _longestTextCache: o } = this,
      r = [],
      a = [],
      c = Math.floor(n / ju(n, s))
    let l = 0,
      d = 0,
      h,
      p,
      m,
      b,
      w,
      x,
      C,
      S,
      D,
      A,
      L
    for (h = 0; h < n; h += c) {
      if (
        ((b = t[h].label),
        (w = this._resolveTickFontOptions(h)),
        (i.font = x = w.string),
        (C = o[x] = o[x] || { data: {}, gc: [] }),
        (S = w.lineHeight),
        (D = A = 0),
        !At(b) && !Dt(b))
      )
        (D = ko(i, C.data, C.gc, D, b)), (A = S)
      else if (Dt(b))
        for (p = 0, m = b.length; p < m; ++p)
          (L = b[p]),
            !At(L) && !Dt(L) && ((D = ko(i, C.data, C.gc, D, L)), (A += S))
      r.push(D), a.push(A), (l = Math.max(D, l)), (d = Math.max(A, d))
    }
    Wv(o, n)
    const j = r.indexOf(l),
      z = a.indexOf(d),
      T = W => ({ width: r[W] || 0, height: a[W] || 0 })
    return {
      first: T(0),
      last: T(n - 1),
      widest: T(j),
      highest: T(z),
      widths: r,
      heights: a
    }
  }
  getLabelForValue(t) {
    return t
  }
  getPixelForValue(t, n) {
    return NaN
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value)
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t)
    const n = this._startPixel + t * this._length
    return B_(this._alignToPixels ? On(this.chart, n, 0) : n)
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length
    return this._reversePixels ? 1 - n : n
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue())
  }
  getBaseValue() {
    const { min: t, max: n } = this
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0
  }
  getContext(t) {
    const n = this.ticks || []
    if (t >= 0 && t < n.length) {
      const s = n[t]
      return s.$context || (s.$context = Uv(this.getContext(), t, s))
    }
    return this.$context || (this.$context = Vv(this.chart.getContext(), this))
  }
  _tickSize() {
    const t = this.options.ticks,
      n = gn(this.labelRotation),
      s = Math.abs(Math.cos(n)),
      i = Math.abs(Math.sin(n)),
      o = this._getLabelSizes(),
      r = t.autoSkipPadding || 0,
      a = o ? o.widest.width + r : 0,
      c = o ? o.highest.height + r : 0
    return this.isHorizontal()
      ? c * s > a * i
        ? a / s
        : c / i
      : c * i < a * s
      ? c / s
      : a / i
  }
  _isVisible() {
    const t = this.options.display
    return t !== 'auto' ? !!t : this.getMatchingVisibleMetas().length > 0
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      s = this.chart,
      i = this.options,
      { grid: o, position: r, border: a } = i,
      c = o.offset,
      l = this.isHorizontal(),
      h = this.ticks.length + (c ? 1 : 0),
      p = Rs(o),
      m = [],
      b = a.setContext(this.getContext()),
      w = b.display ? b.width : 0,
      x = w / 2,
      C = function (at) {
        return On(s, at, w)
      }
    let S, D, A, L, j, z, T, W, $, G, I, q
    if (r === 'top')
      (S = C(this.bottom)),
        (z = this.bottom - p),
        (W = S - x),
        (G = C(t.top) + x),
        (q = t.bottom)
    else if (r === 'bottom')
      (S = C(this.top)),
        (G = t.top),
        (q = C(t.bottom) - x),
        (z = S + x),
        (W = this.top + p)
    else if (r === 'left')
      (S = C(this.right)),
        (j = this.right - p),
        (T = S - x),
        ($ = C(t.left) + x),
        (I = t.right)
    else if (r === 'right')
      (S = C(this.left)),
        ($ = t.left),
        (I = C(t.right) - x),
        (j = S + x),
        (T = this.left + p)
    else if (n === 'x') {
      if (r === 'center') S = C((t.top + t.bottom) / 2 + 0.5)
      else if (yt(r)) {
        const at = Object.keys(r)[0],
          it = r[at]
        S = C(this.chart.scales[at].getPixelForValue(it))
      }
      ;(G = t.top), (q = t.bottom), (z = S + x), (W = z + p)
    } else if (n === 'y') {
      if (r === 'center') S = C((t.left + t.right) / 2)
      else if (yt(r)) {
        const at = Object.keys(r)[0],
          it = r[at]
        S = C(this.chart.scales[at].getPixelForValue(it))
      }
      ;(j = S - x), (T = j - p), ($ = t.left), (I = t.right)
    }
    const Y = ht(i.ticks.maxTicksLimit, h),
      ut = Math.max(1, Math.ceil(h / Y))
    for (D = 0; D < h; D += ut) {
      const at = this.getContext(D),
        it = o.setContext(at),
        et = a.setContext(at),
        It = it.lineWidth,
        Tt = it.color,
        Xt = et.dash || [],
        kt = et.dashOffset,
        Ut = it.tickWidth,
        ne = it.tickColor,
        se = it.tickBorderDash || [],
        St = it.tickBorderDashOffset
      ;(A = jv(this, D, c)),
        A !== void 0 &&
          ((L = On(s, A, It)),
          l ? (j = T = $ = I = L) : (z = W = G = q = L),
          m.push({
            tx1: j,
            ty1: z,
            tx2: T,
            ty2: W,
            x1: $,
            y1: G,
            x2: I,
            y2: q,
            width: It,
            color: Tt,
            borderDash: Xt,
            borderDashOffset: kt,
            tickWidth: Ut,
            tickColor: ne,
            tickBorderDash: se,
            tickBorderDashOffset: St
          }))
    }
    return (this._ticksLength = h), (this._borderValue = S), m
  }
  _computeLabelItems(t) {
    const n = this.axis,
      s = this.options,
      { position: i, ticks: o } = s,
      r = this.isHorizontal(),
      a = this.ticks,
      { align: c, crossAlign: l, padding: d, mirror: h } = o,
      p = Rs(s.grid),
      m = p + d,
      b = h ? -d : m,
      w = -gn(this.labelRotation),
      x = []
    let C,
      S,
      D,
      A,
      L,
      j,
      z,
      T,
      W,
      $,
      G,
      I,
      q = 'middle'
    if (i === 'top') (j = this.bottom - b), (z = this._getXAxisLabelAlignment())
    else if (i === 'bottom')
      (j = this.top + b), (z = this._getXAxisLabelAlignment())
    else if (i === 'left') {
      const ut = this._getYAxisLabelAlignment(p)
      ;(z = ut.textAlign), (L = ut.x)
    } else if (i === 'right') {
      const ut = this._getYAxisLabelAlignment(p)
      ;(z = ut.textAlign), (L = ut.x)
    } else if (n === 'x') {
      if (i === 'center') j = (t.top + t.bottom) / 2 + m
      else if (yt(i)) {
        const ut = Object.keys(i)[0],
          at = i[ut]
        j = this.chart.scales[ut].getPixelForValue(at) + m
      }
      z = this._getXAxisLabelAlignment()
    } else if (n === 'y') {
      if (i === 'center') L = (t.left + t.right) / 2 - m
      else if (yt(i)) {
        const ut = Object.keys(i)[0],
          at = i[ut]
        L = this.chart.scales[ut].getPixelForValue(at)
      }
      z = this._getYAxisLabelAlignment(p).textAlign
    }
    n === 'y' && (c === 'start' ? (q = 'top') : c === 'end' && (q = 'bottom'))
    const Y = this._getLabelSizes()
    for (C = 0, S = a.length; C < S; ++C) {
      ;(D = a[C]), (A = D.label)
      const ut = o.setContext(this.getContext(C))
      ;(T = this.getPixelForTick(C) + o.labelOffset),
        (W = this._resolveTickFontOptions(C)),
        ($ = W.lineHeight),
        (G = Dt(A) ? A.length : 1)
      const at = G / 2,
        it = ut.color,
        et = ut.textStrokeColor,
        It = ut.textStrokeWidth
      let Tt = z
      r
        ? ((L = T),
          z === 'inner' &&
            (C === S - 1
              ? (Tt = this.options.reverse ? 'left' : 'right')
              : C === 0
              ? (Tt = this.options.reverse ? 'right' : 'left')
              : (Tt = 'center')),
          i === 'top'
            ? l === 'near' || w !== 0
              ? (I = -G * $ + $ / 2)
              : l === 'center'
              ? (I = -Y.highest.height / 2 - at * $ + $)
              : (I = -Y.highest.height + $ / 2)
            : l === 'near' || w !== 0
            ? (I = $ / 2)
            : l === 'center'
            ? (I = Y.highest.height / 2 - at * $)
            : (I = Y.highest.height - G * $),
          h && (I *= -1),
          w !== 0 && !ut.showLabelBackdrop && (L += ($ / 2) * Math.sin(w)))
        : ((j = T), (I = ((1 - G) * $) / 2))
      let Xt
      if (ut.showLabelBackdrop) {
        const kt = ee(ut.backdropPadding),
          Ut = Y.heights[C],
          ne = Y.widths[C]
        let se = I - kt.top,
          St = 0 - kt.left
        switch (q) {
          case 'middle':
            se -= Ut / 2
            break
          case 'bottom':
            se -= Ut
            break
        }
        switch (z) {
          case 'center':
            St -= ne / 2
            break
          case 'right':
            St -= ne
            break
        }
        Xt = {
          left: St,
          top: se,
          width: ne + kt.width,
          height: Ut + kt.height,
          color: ut.backdropColor
        }
      }
      x.push({
        label: A,
        font: W,
        textOffset: I,
        options: {
          rotation: w,
          color: it,
          strokeColor: et,
          strokeWidth: It,
          textAlign: Tt,
          textBaseline: q,
          translation: [L, j],
          backdrop: Xt
        }
      })
    }
    return x
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options
    if (-gn(this.labelRotation)) return t === 'top' ? 'left' : 'right'
    let i = 'center'
    return (
      n.align === 'start'
        ? (i = 'left')
        : n.align === 'end'
        ? (i = 'right')
        : n.align === 'inner' && (i = 'inner'),
      i
    )
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: s, mirror: i, padding: o }
      } = this.options,
      r = this._getLabelSizes(),
      a = t + o,
      c = r.widest.width
    let l, d
    return (
      n === 'left'
        ? i
          ? ((d = this.right + o),
            s === 'near'
              ? (l = 'left')
              : s === 'center'
              ? ((l = 'center'), (d += c / 2))
              : ((l = 'right'), (d += c)))
          : ((d = this.right - a),
            s === 'near'
              ? (l = 'right')
              : s === 'center'
              ? ((l = 'center'), (d -= c / 2))
              : ((l = 'left'), (d = this.left)))
        : n === 'right'
        ? i
          ? ((d = this.left + o),
            s === 'near'
              ? (l = 'right')
              : s === 'center'
              ? ((l = 'center'), (d -= c / 2))
              : ((l = 'left'), (d -= c)))
          : ((d = this.left + a),
            s === 'near'
              ? (l = 'left')
              : s === 'center'
              ? ((l = 'center'), (d += c / 2))
              : ((l = 'right'), (d = this.right)))
        : (l = 'right'),
      { textAlign: l, x: d }
    )
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return
    const t = this.chart,
      n = this.options.position
    if (n === 'left' || n === 'right')
      return { top: 0, left: this.left, bottom: t.height, right: this.right }
    if (n === 'top' || n === 'bottom')
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width }
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: s,
      top: i,
      width: o,
      height: r
    } = this
    n && (t.save(), (t.fillStyle = n), t.fillRect(s, i, o, r), t.restore())
  }
  getLineWidthForValue(t) {
    const n = this.options.grid
    if (!this._isVisible() || !n.display) return 0
    const i = this.ticks.findIndex(o => o.value === t)
    return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0
  }
  drawGrid(t) {
    const n = this.options.grid,
      s = this.ctx,
      i =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t))
    let o, r
    const a = (c, l, d) => {
      !d.width ||
        !d.color ||
        (s.save(),
        (s.lineWidth = d.width),
        (s.strokeStyle = d.color),
        s.setLineDash(d.borderDash || []),
        (s.lineDashOffset = d.borderDashOffset),
        s.beginPath(),
        s.moveTo(c.x, c.y),
        s.lineTo(l.x, l.y),
        s.stroke(),
        s.restore())
    }
    if (n.display)
      for (o = 0, r = i.length; o < r; ++o) {
        const c = i[o]
        n.drawOnChartArea && a({ x: c.x1, y: c.y1 }, { x: c.x2, y: c.y2 }, c),
          n.drawTicks &&
            a(
              { x: c.tx1, y: c.ty1 },
              { x: c.tx2, y: c.ty2 },
              {
                color: c.tickColor,
                width: c.tickWidth,
                borderDash: c.tickBorderDash,
                borderDashOffset: c.tickBorderDashOffset
              }
            )
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { border: s, grid: i }
      } = this,
      o = s.setContext(this.getContext()),
      r = s.display ? o.width : 0
    if (!r) return
    const a = i.setContext(this.getContext(0)).lineWidth,
      c = this._borderValue
    let l, d, h, p
    this.isHorizontal()
      ? ((l = On(t, this.left, r) - r / 2),
        (d = On(t, this.right, a) + a / 2),
        (h = p = c))
      : ((h = On(t, this.top, r) - r / 2),
        (p = On(t, this.bottom, a) + a / 2),
        (l = d = c)),
      n.save(),
      (n.lineWidth = o.width),
      (n.strokeStyle = o.color),
      n.beginPath(),
      n.moveTo(l, h),
      n.lineTo(d, p),
      n.stroke(),
      n.restore()
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return
    const s = this.ctx,
      i = this._computeLabelArea()
    i && sl(s, i)
    const o = this.getLabelItems(t)
    for (const r of o) {
      const a = r.options,
        c = r.font,
        l = r.label,
        d = r.textOffset
      Vn(s, l, 0, d, c, a)
    }
    i && il(s)
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: s, reverse: i }
    } = this
    if (!s.display) return
    const o = jt(s.font),
      r = ee(s.padding),
      a = s.align
    let c = o.lineHeight / 2
    n === 'bottom' || n === 'center' || yt(n)
      ? ((c += r.bottom),
        Dt(s.text) && (c += o.lineHeight * (s.text.length - 1)))
      : (c += r.top)
    const { titleX: l, titleY: d, maxWidth: h, rotation: p } = Kv(this, c, n, a)
    Vn(t, s.text, 0, 0, o, {
      color: s.color,
      maxWidth: h,
      rotation: p,
      textAlign: qv(a, n, i),
      textBaseline: 'middle',
      translation: [l, d]
    })
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t))
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      s = ht(t.grid && t.grid.z, -1),
      i = ht(t.border && t.border.z, 0)
    return !this._isVisible() || this.draw !== qn.prototype.draw
      ? [
          {
            z: n,
            draw: o => {
              this.draw(o)
            }
          }
        ]
      : [
          {
            z: s,
            draw: o => {
              this.drawBackground(), this.drawGrid(o), this.drawTitle()
            }
          },
          {
            z: i,
            draw: () => {
              this.drawBorder()
            }
          },
          {
            z: n,
            draw: o => {
              this.drawLabels(o)
            }
          }
        ]
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      s = this.axis + 'AxisID',
      i = []
    let o, r
    for (o = 0, r = n.length; o < r; ++o) {
      const a = n[o]
      a[s] === this.id && (!t || a.type === t) && i.push(a)
    }
    return i
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t))
    return jt(n.font)
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight
    return (this.isHorizontal() ? this.width : this.height) / t
  }
}
class ji {
  constructor(t, n, s) {
    ;(this.type = t),
      (this.scope = n),
      (this.override = s),
      (this.items = Object.create(null))
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype)
  }
  register(t) {
    const n = Object.getPrototypeOf(t)
    let s
    Jv(n) && (s = this.register(n))
    const i = this.items,
      o = t.id,
      r = this.scope + '.' + o
    if (!o) throw new Error('class does not have id: ' + t)
    return (
      o in i ||
        ((i[o] = t),
        Yv(t, r, s),
        this.override && Ft.override(t.id, t.overrides)),
      r
    )
  }
  get(t) {
    return this.items[t]
  }
  unregister(t) {
    const n = this.items,
      s = t.id,
      i = this.scope
    s in n && delete n[s],
      i && s in Ft[i] && (delete Ft[i][s], this.override && delete Wn[s])
  }
}
function Yv(e, t, n) {
  const s = ci(Object.create(null), [n ? Ft.get(n) : {}, Ft.get(t), e.defaults])
  Ft.set(t, s),
    e.defaultRoutes && Xv(t, e.defaultRoutes),
    e.descriptors && Ft.describe(t, e.descriptors)
}
function Xv(e, t) {
  Object.keys(t).forEach(n => {
    const s = n.split('.'),
      i = s.pop(),
      o = [e].concat(s).join('.'),
      r = t[n].split('.'),
      a = r.pop(),
      c = r.join('.')
    Ft.route(o, i, c, a)
  })
}
function Jv(e) {
  return 'id' in e && 'defaults' in e
}
class Gv {
  constructor() {
    ;(this.controllers = new ji(Zs, 'datasets', !0)),
      (this.elements = new ji(Un, 'elements')),
      (this.plugins = new ji(Object, 'plugins')),
      (this.scales = new ji(qn, 'scales')),
      (this._typedRegistries = [this.controllers, this.scales, this.elements])
  }
  add(...t) {
    this._each('register', t)
  }
  remove(...t) {
    this._each('unregister', t)
  }
  addControllers(...t) {
    this._each('register', t, this.controllers)
  }
  addElements(...t) {
    this._each('register', t, this.elements)
  }
  addPlugins(...t) {
    this._each('register', t, this.plugins)
  }
  addScales(...t) {
    this._each('register', t, this.scales)
  }
  getController(t) {
    return this._get(t, this.controllers, 'controller')
  }
  getElement(t) {
    return this._get(t, this.elements, 'element')
  }
  getPlugin(t) {
    return this._get(t, this.plugins, 'plugin')
  }
  getScale(t) {
    return this._get(t, this.scales, 'scale')
  }
  removeControllers(...t) {
    this._each('unregister', t, this.controllers)
  }
  removeElements(...t) {
    this._each('unregister', t, this.elements)
  }
  removePlugins(...t) {
    this._each('unregister', t, this.plugins)
  }
  removeScales(...t) {
    this._each('unregister', t, this.scales)
  }
  _each(t, n, s) {
    ;[...n].forEach(i => {
      const o = s || this._getRegistryForType(i)
      s || o.isForType(i) || (o === this.plugins && i.id)
        ? this._exec(t, o, i)
        : Ct(i, r => {
            const a = s || this._getRegistryForType(r)
            this._exec(t, a, r)
          })
    })
  }
  _exec(t, n, s) {
    const i = Ga(t)
    Pt(s['before' + i], [], s), n[t](s), Pt(s['after' + i], [], s)
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const s = this._typedRegistries[n]
      if (s.isForType(t)) return s
    }
    return this.plugins
  }
  _get(t, n, s) {
    const i = n.get(t)
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + '.')
    return i
  }
}
var Be = new Gv()
class Zv {
  constructor() {
    this._init = []
  }
  notify(t, n, s, i) {
    n === 'beforeInit' &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, 'install'))
    const o = i ? this._descriptors(t).filter(i) : this._descriptors(t),
      r = this._notify(o, t, n, s)
    return (
      n === 'afterDestroy' &&
        (this._notify(o, t, 'stop'), this._notify(this._init, t, 'uninstall')),
      r
    )
  }
  _notify(t, n, s, i) {
    i = i || {}
    for (const o of t) {
      const r = o.plugin,
        a = r[s],
        c = [n, i, o.options]
      if (Pt(a, c, r) === !1 && i.cancelable) return !1
    }
    return !0
  }
  invalidate() {
    At(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0))
  }
  _descriptors(t) {
    if (this._cache) return this._cache
    const n = (this._cache = this._createDescriptors(t))
    return this._notifyStateChanges(t), n
  }
  _createDescriptors(t, n) {
    const s = t && t.config,
      i = ht(s.options && s.options.plugins, {}),
      o = Qv(s)
    return i === !1 && !n ? [] : e2(t, o, i, n)
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      s = this._cache,
      i = (o, r) => o.filter(a => !r.some(c => a.plugin.id === c.plugin.id))
    this._notify(i(n, s), t, 'stop'), this._notify(i(s, n), t, 'start')
  }
}
function Qv(e) {
  const t = {},
    n = [],
    s = Object.keys(Be.plugins.items)
  for (let o = 0; o < s.length; o++) n.push(Be.getPlugin(s[o]))
  const i = e.plugins || []
  for (let o = 0; o < i.length; o++) {
    const r = i[o]
    n.indexOf(r) === -1 && (n.push(r), (t[r.id] = !0))
  }
  return { plugins: n, localIds: t }
}
function t2(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e
}
function e2(e, { plugins: t, localIds: n }, s, i) {
  const o = [],
    r = e.getContext()
  for (const a of t) {
    const c = a.id,
      l = t2(s[c], i)
    l !== null &&
      o.push({
        plugin: a,
        options: n2(e.config, { plugin: a, local: n[c] }, l, r)
      })
  }
  return o
}
function n2(e, { plugin: t, local: n }, s, i) {
  const o = e.pluginScopeKeys(t),
    r = e.getOptionScopes(s, o)
  return (
    n && t.defaults && r.push(t.defaults),
    e.createResolver(r, i, [''], { scriptable: !1, indexable: !1, allKeys: !0 })
  )
}
function ca(e, t) {
  const n = Ft.datasets[e] || {}
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || 'x'
  )
}
function s2(e, t) {
  let n = e
  return (
    e === '_index_' ? (n = t) : e === '_value_' && (n = t === 'x' ? 'y' : 'x'),
    n
  )
}
function i2(e, t) {
  return e === t ? '_index_' : '_value_'
}
function Uu(e) {
  if (e === 'x' || e === 'y' || e === 'r') return e
}
function o2(e) {
  if (e === 'top' || e === 'bottom') return 'x'
  if (e === 'left' || e === 'right') return 'y'
}
function ua(e, ...t) {
  if (Uu(e)) return e
  for (const n of t) {
    const s =
      n.axis || o2(n.position) || (e.length > 1 && Uu(e[0].toLowerCase()))
    if (s) return s
  }
  throw new Error(
    `Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`
  )
}
function qu(e, t, n) {
  if (n[t + 'AxisID'] === e) return { axis: t }
}
function r2(e, t) {
  if (t.data && t.data.datasets) {
    const n = t.data.datasets.filter(s => s.xAxisID === e || s.yAxisID === e)
    if (n.length) return qu(e, 'x', n[0]) || qu(e, 'y', n[0])
  }
  return {}
}
function a2(e, t) {
  const n = Wn[e.type] || { scales: {} },
    s = t.scales || {},
    i = ca(e.type, t),
    o = Object.create(null)
  return (
    Object.keys(s).forEach(r => {
      const a = s[r]
      if (!yt(a))
        return console.error(`Invalid scale configuration for scale: ${r}`)
      if (a._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${r}`
        )
      const c = ua(r, a, r2(r, e), Ft.scales[a.type]),
        l = i2(c, i),
        d = n.scales || {}
      o[r] = Ys(Object.create(null), [{ axis: c }, a, d[c], d[l]])
    }),
    e.data.datasets.forEach(r => {
      const a = r.type || e.type,
        c = r.indexAxis || ca(a, t),
        d = (Wn[a] || {}).scales || {}
      Object.keys(d).forEach(h => {
        const p = s2(h, c),
          m = r[p + 'AxisID'] || p
        ;(o[m] = o[m] || Object.create(null)),
          Ys(o[m], [{ axis: p }, s[m], d[h]])
      })
    }),
    Object.keys(o).forEach(r => {
      const a = o[r]
      Ys(a, [Ft.scales[a.type], Ft.scale])
    }),
    o
  )
}
function Mh(e) {
  const t = e.options || (e.options = {})
  ;(t.plugins = ht(t.plugins, {})), (t.scales = a2(e, t))
}
function Th(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  )
}
function l2(e) {
  return (e = e || {}), (e.data = Th(e.data)), Mh(e), e
}
const Ku = new Map(),
  Lh = new Set()
function Wi(e, t) {
  let n = Ku.get(e)
  return n || ((n = t()), Ku.set(e, n), Lh.add(n)), n
}
const Ds = (e, t, n) => {
  const s = xo(t, n)
  s !== void 0 && e.add(s)
}
class c2 {
  constructor(t) {
    ;(this._config = l2(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map())
  }
  get platform() {
    return this._config.platform
  }
  get type() {
    return this._config.type
  }
  set type(t) {
    this._config.type = t
  }
  get data() {
    return this._config.data
  }
  set data(t) {
    this._config.data = Th(t)
  }
  get options() {
    return this._config.options
  }
  set options(t) {
    this._config.options = t
  }
  get plugins() {
    return this._config.plugins
  }
  update() {
    const t = this._config
    this.clearCache(), Mh(t)
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear()
  }
  datasetScopeKeys(t) {
    return Wi(t, () => [[`datasets.${t}`, '']])
  }
  datasetAnimationScopeKeys(t, n) {
    return Wi(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, '']
    ])
  }
  datasetElementScopeKeys(t, n) {
    return Wi(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, '']
    ])
  }
  pluginScopeKeys(t) {
    const n = t.id,
      s = this.type
    return Wi(`${s}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])]
    ])
  }
  _cachedScopes(t, n) {
    const s = this._scopeCache
    let i = s.get(t)
    return (!i || n) && ((i = new Map()), s.set(t, i)), i
  }
  getOptionScopes(t, n, s) {
    const { options: i, type: o } = this,
      r = this._cachedScopes(t, s),
      a = r.get(n)
    if (a) return a
    const c = new Set()
    n.forEach(d => {
      t && (c.add(t), d.forEach(h => Ds(c, t, h))),
        d.forEach(h => Ds(c, i, h)),
        d.forEach(h => Ds(c, Wn[o] || {}, h)),
        d.forEach(h => Ds(c, Ft, h)),
        d.forEach(h => Ds(c, aa, h))
    })
    const l = Array.from(c)
    return (
      l.length === 0 && l.push(Object.create(null)), Lh.has(n) && r.set(n, l), l
    )
  }
  chartOptionScopes() {
    const { options: t, type: n } = this
    return [t, Wn[n] || {}, Ft.datasets[n] || {}, { type: n }, Ft, aa]
  }
  resolveNamedOptions(t, n, s, i = ['']) {
    const o = { $shared: !0 },
      { resolver: r, subPrefixes: a } = Yu(this._resolverCache, t, i)
    let c = r
    if (d2(r, n)) {
      ;(o.$shared = !1), (s = xn(s) ? s() : s)
      const l = this.createResolver(t, s, a)
      c = bs(r, s, l)
    }
    for (const l of n) o[l] = c[l]
    return o
  }
  createResolver(t, n, s = [''], i) {
    const { resolver: o } = Yu(this._resolverCache, t, s)
    return yt(n) ? bs(o, n, void 0, i) : o
  }
}
function Yu(e, t, n) {
  let s = e.get(t)
  s || ((s = new Map()), e.set(t, s))
  const i = n.join()
  let o = s.get(i)
  return (
    o ||
      ((o = {
        resolver: ol(t, n),
        subPrefixes: n.filter(a => !a.toLowerCase().includes('hover'))
      }),
      s.set(i, o)),
    o
  )
}
const u2 = e =>
  yt(e) && Object.getOwnPropertyNames(e).reduce((t, n) => t || xn(e[n]), !1)
function d2(e, t) {
  const { isScriptable: n, isIndexable: s } = ph(e)
  for (const i of t) {
    const o = n(i),
      r = s(i),
      a = (r || o) && e[i]
    if ((o && (xn(a) || u2(a))) || (r && Dt(a))) return !0
  }
  return !1
}
var f2 = '4.3.0'
const h2 = ['top', 'bottom', 'left', 'right', 'chartArea']
function Xu(e, t) {
  return e === 'top' || e === 'bottom' || (h2.indexOf(e) === -1 && t === 'x')
}
function Ju(e, t) {
  return function (n, s) {
    return n[e] === s[e] ? n[t] - s[t] : n[e] - s[e]
  }
}
function Gu(e) {
  const t = e.chart,
    n = t.options.animation
  t.notifyPlugins('afterRender'), Pt(n && n.onComplete, [e], t)
}
function p2(e) {
  const t = e.chart,
    n = t.options.animation
  Pt(n && n.onProgress, [e], t)
}
function Rh(e) {
  return (
    yh() && typeof e == 'string'
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  )
}
const ao = {},
  Zu = e => {
    const t = Rh(e)
    return Object.values(ao)
      .filter(n => n.canvas === t)
      .pop()
  }
function g2(e, t, n) {
  const s = Object.keys(e)
  for (const i of s) {
    const o = +i
    if (o >= t) {
      const r = e[i]
      delete e[i], (n > 0 || o > t) && (e[o + n] = r)
    }
  }
}
function m2(e, t, n, s) {
  return !n || e.type === 'mouseout' ? null : s ? t : e
}
function b2(e) {
  const { xScale: t, yScale: n } = e
  if (t && n)
    return { left: t.left, right: t.right, top: n.top, bottom: n.bottom }
}
var cn
let nr =
  ((cn = class {
    static register(...t) {
      Be.add(...t), Qu()
    }
    static unregister(...t) {
      Be.remove(...t), Qu()
    }
    constructor(t, n) {
      const s = (this.config = new c2(n)),
        i = Rh(t),
        o = Zu(i)
      if (o)
        throw new Error(
          "Canvas is already in use. Chart with ID '" +
            o.id +
            "' must be destroyed before the canvas with ID '" +
            o.canvas.id +
            "' can be reused."
        )
      const r = s.createResolver(s.chartOptionScopes(), this.getContext())
      ;(this.platform = new (s.platform || Dv(i))()),
        this.platform.updateConfig(s)
      const a = this.platform.acquireContext(i, r.aspectRatio),
        c = a && a.canvas,
        l = c && c.height,
        d = c && c.width
      if (
        ((this.id = k_()),
        (this.ctx = a),
        (this.canvas = c),
        (this.width = d),
        (this.height = l),
        (this._options = r),
        (this._aspectRatio = this.aspectRatio),
        (this._layers = []),
        (this._metasets = []),
        (this._stacks = void 0),
        (this.boxes = []),
        (this.currentDevicePixelRatio = void 0),
        (this.chartArea = void 0),
        (this._active = []),
        (this._lastEvent = void 0),
        (this._listeners = {}),
        (this._responsiveListeners = void 0),
        (this._sortedMetasets = []),
        (this.scales = {}),
        (this._plugins = new Zv()),
        (this.$proxies = {}),
        (this._hiddenIndices = {}),
        (this.attached = !1),
        (this._animationsDisabled = void 0),
        (this.$context = void 0),
        (this._doResize = j_(h => this.update(h), r.resizeDelay || 0)),
        (this._dataChanges = []),
        (ao[this.id] = this),
        !a || !c)
      ) {
        console.error(
          "Failed to create chart: can't acquire context from the given item"
        )
        return
      }
      qe.listen(this, 'complete', Gu),
        qe.listen(this, 'progress', p2),
        this._initialize(),
        this.attached && this.update()
    }
    get aspectRatio() {
      const {
        options: { aspectRatio: t, maintainAspectRatio: n },
        width: s,
        height: i,
        _aspectRatio: o
      } = this
      return At(t) ? (n && o ? o : i ? s / i : null) : t
    }
    get data() {
      return this.config.data
    }
    set data(t) {
      this.config.data = t
    }
    get options() {
      return this._options
    }
    set options(t) {
      this.config.options = t
    }
    get registry() {
      return Be
    }
    _initialize() {
      return (
        this.notifyPlugins('beforeInit'),
        this.options.responsive
          ? this.resize()
          : Cu(this, this.options.devicePixelRatio),
        this.bindEvents(),
        this.notifyPlugins('afterInit'),
        this
      )
    }
    clear() {
      return _u(this.canvas, this.ctx), this
    }
    stop() {
      return qe.stop(this), this
    }
    resize(t, n) {
      qe.running(this)
        ? (this._resizeBeforeDraw = { width: t, height: n })
        : this._resize(t, n)
    }
    _resize(t, n) {
      const s = this.options,
        i = this.canvas,
        o = s.maintainAspectRatio && this.aspectRatio,
        r = this.platform.getMaximumSize(i, t, n, o),
        a = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
        c = this.width ? 'resize' : 'attach'
      ;(this.width = r.width),
        (this.height = r.height),
        (this._aspectRatio = this.aspectRatio),
        Cu(this, a, !0) &&
          (this.notifyPlugins('resize', { size: r }),
          Pt(s.onResize, [this, r], this),
          this.attached && this._doResize(c) && this.render())
    }
    ensureScalesHaveIDs() {
      const n = this.options.scales || {}
      Ct(n, (s, i) => {
        s.id = i
      })
    }
    buildOrUpdateScales() {
      const t = this.options,
        n = t.scales,
        s = this.scales,
        i = Object.keys(s).reduce((r, a) => ((r[a] = !1), r), {})
      let o = []
      n &&
        (o = o.concat(
          Object.keys(n).map(r => {
            const a = n[r],
              c = ua(r, a),
              l = c === 'r',
              d = c === 'x'
            return {
              options: a,
              dposition: l ? 'chartArea' : d ? 'bottom' : 'left',
              dtype: l ? 'radialLinear' : d ? 'category' : 'linear'
            }
          })
        )),
        Ct(o, r => {
          const a = r.options,
            c = a.id,
            l = ua(c, a),
            d = ht(a.type, r.dtype)
          ;(a.position === void 0 || Xu(a.position, l) !== Xu(r.dposition)) &&
            (a.position = r.dposition),
            (i[c] = !0)
          let h = null
          if (c in s && s[c].type === d) h = s[c]
          else {
            const p = Be.getScale(d)
            ;(h = new p({ id: c, type: d, ctx: this.ctx, chart: this })),
              (s[h.id] = h)
          }
          h.init(a, t)
        }),
        Ct(i, (r, a) => {
          r || delete s[a]
        }),
        Ct(s, r => {
          we.configure(this, r, r.options), we.addBox(this, r)
        })
    }
    _updateMetasets() {
      const t = this._metasets,
        n = this.data.datasets.length,
        s = t.length
      if ((t.sort((i, o) => i.index - o.index), s > n)) {
        for (let i = n; i < s; ++i) this._destroyDatasetMeta(i)
        t.splice(n, s - n)
      }
      this._sortedMetasets = t.slice(0).sort(Ju('order', 'index'))
    }
    _removeUnreferencedMetasets() {
      const {
        _metasets: t,
        data: { datasets: n }
      } = this
      t.length > n.length && delete this._stacks,
        t.forEach((s, i) => {
          n.filter(o => o === s._dataset).length === 0 &&
            this._destroyDatasetMeta(i)
        })
    }
    buildOrUpdateControllers() {
      const t = [],
        n = this.data.datasets
      let s, i
      for (
        this._removeUnreferencedMetasets(), s = 0, i = n.length;
        s < i;
        s++
      ) {
        const o = n[s]
        let r = this.getDatasetMeta(s)
        const a = o.type || this.config.type
        if (
          (r.type &&
            r.type !== a &&
            (this._destroyDatasetMeta(s), (r = this.getDatasetMeta(s))),
          (r.type = a),
          (r.indexAxis = o.indexAxis || ca(a, this.options)),
          (r.order = o.order || 0),
          (r.index = s),
          (r.label = '' + o.label),
          (r.visible = this.isDatasetVisible(s)),
          r.controller)
        )
          r.controller.updateIndex(s), r.controller.linkScales()
        else {
          const c = Be.getController(a),
            { datasetElementType: l, dataElementType: d } = Ft.datasets[a]
          Object.assign(c, {
            dataElementType: Be.getElement(d),
            datasetElementType: l && Be.getElement(l)
          }),
            (r.controller = new c(this, s)),
            t.push(r.controller)
        }
      }
      return this._updateMetasets(), t
    }
    _resetElements() {
      Ct(
        this.data.datasets,
        (t, n) => {
          this.getDatasetMeta(n).controller.reset()
        },
        this
      )
    }
    reset() {
      this._resetElements(), this.notifyPlugins('reset')
    }
    update(t) {
      const n = this.config
      n.update()
      const s = (this._options = n.createResolver(
          n.chartOptionScopes(),
          this.getContext()
        )),
        i = (this._animationsDisabled = !s.animation)
      if (
        (this._updateScales(),
        this._checkEventBindings(),
        this._updateHiddenIndices(),
        this._plugins.invalidate(),
        this.notifyPlugins('beforeUpdate', { mode: t, cancelable: !0 }) === !1)
      )
        return
      const o = this.buildOrUpdateControllers()
      this.notifyPlugins('beforeElementsUpdate')
      let r = 0
      for (let l = 0, d = this.data.datasets.length; l < d; l++) {
        const { controller: h } = this.getDatasetMeta(l),
          p = !i && o.indexOf(h) === -1
        h.buildOrUpdateElements(p), (r = Math.max(+h.getMaxOverflow(), r))
      }
      ;(r = this._minPadding = s.layout.autoPadding ? r : 0),
        this._updateLayout(r),
        i ||
          Ct(o, l => {
            l.reset()
          }),
        this._updateDatasets(t),
        this.notifyPlugins('afterUpdate', { mode: t }),
        this._layers.sort(Ju('z', '_idx'))
      const { _active: a, _lastEvent: c } = this
      c
        ? this._eventHandler(c, !0)
        : a.length && this._updateHoverStyles(a, a, !0),
        this.render()
    }
    _updateScales() {
      Ct(this.scales, t => {
        we.removeBox(this, t)
      }),
        this.ensureScalesHaveIDs(),
        this.buildOrUpdateScales()
    }
    _checkEventBindings() {
      const t = this.options,
        n = new Set(Object.keys(this._listeners)),
        s = new Set(t.events)
      ;(!du(n, s) || !!this._responsiveListeners !== t.responsive) &&
        (this.unbindEvents(), this.bindEvents())
    }
    _updateHiddenIndices() {
      const { _hiddenIndices: t } = this,
        n = this._getUniformDataChanges() || []
      for (const { method: s, start: i, count: o } of n) {
        const r = s === '_removeElements' ? -o : o
        g2(t, i, r)
      }
    }
    _getUniformDataChanges() {
      const t = this._dataChanges
      if (!t || !t.length) return
      this._dataChanges = []
      const n = this.data.datasets.length,
        s = o =>
          new Set(
            t
              .filter(r => r[0] === o)
              .map((r, a) => a + ',' + r.splice(1).join(','))
          ),
        i = s(0)
      for (let o = 1; o < n; o++) if (!du(i, s(o))) return
      return Array.from(i)
        .map(o => o.split(','))
        .map(o => ({ method: o[1], start: +o[2], count: +o[3] }))
    }
    _updateLayout(t) {
      if (this.notifyPlugins('beforeLayout', { cancelable: !0 }) === !1) return
      we.update(this, this.width, this.height, t)
      const n = this.chartArea,
        s = n.width <= 0 || n.height <= 0
      ;(this._layers = []),
        Ct(
          this.boxes,
          i => {
            ;(s && i.position === 'chartArea') ||
              (i.configure && i.configure(), this._layers.push(...i._layers()))
          },
          this
        ),
        this._layers.forEach((i, o) => {
          i._idx = o
        }),
        this.notifyPlugins('afterLayout')
    }
    _updateDatasets(t) {
      if (
        this.notifyPlugins('beforeDatasetsUpdate', {
          mode: t,
          cancelable: !0
        }) !== !1
      ) {
        for (let n = 0, s = this.data.datasets.length; n < s; ++n)
          this.getDatasetMeta(n).controller.configure()
        for (let n = 0, s = this.data.datasets.length; n < s; ++n)
          this._updateDataset(n, xn(t) ? t({ datasetIndex: n }) : t)
        this.notifyPlugins('afterDatasetsUpdate', { mode: t })
      }
    }
    _updateDataset(t, n) {
      const s = this.getDatasetMeta(t),
        i = { meta: s, index: t, mode: n, cancelable: !0 }
      this.notifyPlugins('beforeDatasetUpdate', i) !== !1 &&
        (s.controller._update(n),
        (i.cancelable = !1),
        this.notifyPlugins('afterDatasetUpdate', i))
    }
    render() {
      this.notifyPlugins('beforeRender', { cancelable: !0 }) !== !1 &&
        (qe.has(this)
          ? this.attached && !qe.running(this) && qe.start(this)
          : (this.draw(), Gu({ chart: this })))
    }
    draw() {
      let t
      if (this._resizeBeforeDraw) {
        const { width: s, height: i } = this._resizeBeforeDraw
        this._resize(s, i), (this._resizeBeforeDraw = null)
      }
      if (
        (this.clear(),
        this.width <= 0 ||
          this.height <= 0 ||
          this.notifyPlugins('beforeDraw', { cancelable: !0 }) === !1)
      )
        return
      const n = this._layers
      for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea)
      for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea)
      this.notifyPlugins('afterDraw')
    }
    _getSortedDatasetMetas(t) {
      const n = this._sortedMetasets,
        s = []
      let i, o
      for (i = 0, o = n.length; i < o; ++i) {
        const r = n[i]
        ;(!t || r.visible) && s.push(r)
      }
      return s
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(!0)
    }
    _drawDatasets() {
      if (this.notifyPlugins('beforeDatasetsDraw', { cancelable: !0 }) === !1)
        return
      const t = this.getSortedVisibleDatasetMetas()
      for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n])
      this.notifyPlugins('afterDatasetsDraw')
    }
    _drawDataset(t) {
      const n = this.ctx,
        s = t._clip,
        i = !s.disabled,
        o = b2(t) || this.chartArea,
        r = { meta: t, index: t.index, cancelable: !0 }
      this.notifyPlugins('beforeDatasetDraw', r) !== !1 &&
        (i &&
          sl(n, {
            left: s.left === !1 ? 0 : o.left - s.left,
            right: s.right === !1 ? this.width : o.right + s.right,
            top: s.top === !1 ? 0 : o.top - s.top,
            bottom: s.bottom === !1 ? this.height : o.bottom + s.bottom
          }),
        t.controller.draw(),
        i && il(n),
        (r.cancelable = !1),
        this.notifyPlugins('afterDatasetDraw', r))
    }
    isPointInArea(t) {
      return Je(t, this.chartArea, this._minPadding)
    }
    getElementsAtEventForMode(t, n, s, i) {
      const o = hv.modes[n]
      return typeof o == 'function' ? o(this, t, s, i) : []
    }
    getDatasetMeta(t) {
      const n = this.data.datasets[t],
        s = this._metasets
      let i = s.filter(o => o && o._dataset === n).pop()
      return (
        i ||
          ((i = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null,
            xAxisID: null,
            yAxisID: null,
            order: (n && n.order) || 0,
            index: t,
            _dataset: n,
            _parsed: [],
            _sorted: !1
          }),
          s.push(i)),
        i
      )
    }
    getContext() {
      return (
        this.$context ||
        (this.$context = vn(null, { chart: this, type: 'chart' }))
      )
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length
    }
    isDatasetVisible(t) {
      const n = this.data.datasets[t]
      if (!n) return !1
      const s = this.getDatasetMeta(t)
      return typeof s.hidden == 'boolean' ? !s.hidden : !n.hidden
    }
    setDatasetVisibility(t, n) {
      const s = this.getDatasetMeta(t)
      s.hidden = !n
    }
    toggleDataVisibility(t) {
      this._hiddenIndices[t] = !this._hiddenIndices[t]
    }
    getDataVisibility(t) {
      return !this._hiddenIndices[t]
    }
    _updateVisibility(t, n, s) {
      const i = s ? 'show' : 'hide',
        o = this.getDatasetMeta(t),
        r = o.controller._resolveAnimations(void 0, i)
      vo(n)
        ? ((o.data[n].hidden = !s), this.update())
        : (this.setDatasetVisibility(t, s),
          r.update(o, { visible: s }),
          this.update(a => (a.datasetIndex === t ? i : void 0)))
    }
    hide(t, n) {
      this._updateVisibility(t, n, !1)
    }
    show(t, n) {
      this._updateVisibility(t, n, !0)
    }
    _destroyDatasetMeta(t) {
      const n = this._metasets[t]
      n && n.controller && n.controller._destroy(), delete this._metasets[t]
    }
    _stop() {
      let t, n
      for (
        this.stop(), qe.remove(this), t = 0, n = this.data.datasets.length;
        t < n;
        ++t
      )
        this._destroyDatasetMeta(t)
    }
    destroy() {
      this.notifyPlugins('beforeDestroy')
      const { canvas: t, ctx: n } = this
      this._stop(),
        this.config.clearCache(),
        t &&
          (this.unbindEvents(),
          _u(t, n),
          this.platform.releaseContext(n),
          (this.canvas = null),
          (this.ctx = null)),
        delete ao[this.id],
        this.notifyPlugins('afterDestroy')
    }
    toBase64Image(...t) {
      return this.canvas.toDataURL(...t)
    }
    bindEvents() {
      this.bindUserEvents(),
        this.options.responsive
          ? this.bindResponsiveEvents()
          : (this.attached = !0)
    }
    bindUserEvents() {
      const t = this._listeners,
        n = this.platform,
        s = (o, r) => {
          n.addEventListener(this, o, r), (t[o] = r)
        },
        i = (o, r, a) => {
          ;(o.offsetX = r), (o.offsetY = a), this._eventHandler(o)
        }
      Ct(this.options.events, o => s(o, i))
    }
    bindResponsiveEvents() {
      this._responsiveListeners || (this._responsiveListeners = {})
      const t = this._responsiveListeners,
        n = this.platform,
        s = (c, l) => {
          n.addEventListener(this, c, l), (t[c] = l)
        },
        i = (c, l) => {
          t[c] && (n.removeEventListener(this, c, l), delete t[c])
        },
        o = (c, l) => {
          this.canvas && this.resize(c, l)
        }
      let r
      const a = () => {
        i('attach', a),
          (this.attached = !0),
          this.resize(),
          s('resize', o),
          s('detach', r)
      }
      ;(r = () => {
        ;(this.attached = !1),
          i('resize', o),
          this._stop(),
          this._resize(0, 0),
          s('attach', a)
      }),
        n.isAttached(this.canvas) ? a() : r()
    }
    unbindEvents() {
      Ct(this._listeners, (t, n) => {
        this.platform.removeEventListener(this, n, t)
      }),
        (this._listeners = {}),
        Ct(this._responsiveListeners, (t, n) => {
          this.platform.removeEventListener(this, n, t)
        }),
        (this._responsiveListeners = void 0)
    }
    updateHoverStyle(t, n, s) {
      const i = s ? 'set' : 'remove'
      let o, r, a, c
      for (
        n === 'dataset' &&
          ((o = this.getDatasetMeta(t[0].datasetIndex)),
          o.controller['_' + i + 'DatasetHoverStyle']()),
          a = 0,
          c = t.length;
        a < c;
        ++a
      ) {
        r = t[a]
        const l = r && this.getDatasetMeta(r.datasetIndex).controller
        l && l[i + 'HoverStyle'](r.element, r.datasetIndex, r.index)
      }
    }
    getActiveElements() {
      return this._active || []
    }
    setActiveElements(t) {
      const n = this._active || [],
        s = t.map(({ datasetIndex: o, index: r }) => {
          const a = this.getDatasetMeta(o)
          if (!a) throw new Error('No dataset found at index ' + o)
          return { datasetIndex: o, element: a.data[r], index: r }
        })
      !yo(s, n) &&
        ((this._active = s),
        (this._lastEvent = null),
        this._updateHoverStyles(s, n))
    }
    notifyPlugins(t, n, s) {
      return this._plugins.notify(this, t, n, s)
    }
    isPluginEnabled(t) {
      return this._plugins._cache.filter(n => n.plugin.id === t).length === 1
    }
    _updateHoverStyles(t, n, s) {
      const i = this.options.hover,
        o = (c, l) =>
          c.filter(
            d =>
              !l.some(
                h => d.datasetIndex === h.datasetIndex && d.index === h.index
              )
          ),
        r = o(n, t),
        a = s ? t : o(t, n)
      r.length && this.updateHoverStyle(r, i.mode, !1),
        a.length && i.mode && this.updateHoverStyle(a, i.mode, !0)
    }
    _eventHandler(t, n) {
      const s = {
          event: t,
          replay: n,
          cancelable: !0,
          inChartArea: this.isPointInArea(t)
        },
        i = r =>
          (r.options.events || this.options.events).includes(t.native.type)
      if (this.notifyPlugins('beforeEvent', s, i) === !1) return
      const o = this._handleEvent(t, n, s.inChartArea)
      return (
        (s.cancelable = !1),
        this.notifyPlugins('afterEvent', s, i),
        (o || s.changed) && this.render(),
        this
      )
    }
    _handleEvent(t, n, s) {
      const { _active: i = [], options: o } = this,
        r = n,
        a = this._getActiveElements(t, i, s, r),
        c = M_(t),
        l = m2(t, this._lastEvent, s, c)
      s &&
        ((this._lastEvent = null),
        Pt(o.onHover, [t, a, this], this),
        c && Pt(o.onClick, [t, a, this], this))
      const d = !yo(a, i)
      return (
        (d || n) && ((this._active = a), this._updateHoverStyles(a, i, n)),
        (this._lastEvent = l),
        d
      )
    }
    _getActiveElements(t, n, s, i) {
      if (t.type === 'mouseout') return []
      if (!s) return n
      const o = this.options.hover
      return this.getElementsAtEventForMode(t, o.mode, o, i)
    }
  }),
  rt(cn, 'defaults', Ft),
  rt(cn, 'instances', ao),
  rt(cn, 'overrides', Wn),
  rt(cn, 'registry', Be),
  rt(cn, 'version', f2),
  rt(cn, 'getChart', Zu),
  cn)
function Qu() {
  return Ct(nr.instances, e => e._plugins.invalidate())
}
function Dh(e, t, n = t) {
  ;(e.lineCap = ht(n.borderCapStyle, t.borderCapStyle)),
    e.setLineDash(ht(n.borderDash, t.borderDash)),
    (e.lineDashOffset = ht(n.borderDashOffset, t.borderDashOffset)),
    (e.lineJoin = ht(n.borderJoinStyle, t.borderJoinStyle)),
    (e.lineWidth = ht(n.borderWidth, t.borderWidth)),
    (e.strokeStyle = ht(n.borderColor, t.borderColor))
}
function w2(e, t, n) {
  e.lineTo(n.x, n.y)
}
function y2(e) {
  return e.stepped
    ? nx
    : e.tension || e.cubicInterpolationMode === 'monotone'
    ? sx
    : w2
}
function Ih(e, t, n = {}) {
  const s = e.length,
    { start: i = 0, end: o = s - 1 } = n,
    { start: r, end: a } = t,
    c = Math.max(i, r),
    l = Math.min(o, a),
    d = (i < r && o < r) || (i > a && o > a)
  return {
    count: s,
    start: c,
    loop: t.loop,
    ilen: l < c && !d ? s + l - c : l - c
  }
}
function _2(e, t, n, s) {
  const { points: i, options: o } = t,
    { count: r, start: a, loop: c, ilen: l } = Ih(i, n, s),
    d = y2(o)
  let { move: h = !0, reverse: p } = s || {},
    m,
    b,
    w
  for (m = 0; m <= l; ++m)
    (b = i[(a + (p ? l - m : m)) % r]),
      !b.skip &&
        (h ? (e.moveTo(b.x, b.y), (h = !1)) : d(e, w, b, p, o.stepped), (w = b))
  return c && ((b = i[(a + (p ? l : 0)) % r]), d(e, w, b, p, o.stepped)), !!c
}
function x2(e, t, n, s) {
  const i = t.points,
    { count: o, start: r, ilen: a } = Ih(i, n, s),
    { move: c = !0, reverse: l } = s || {}
  let d = 0,
    h = 0,
    p,
    m,
    b,
    w,
    x,
    C
  const S = A => (r + (l ? a - A : A)) % o,
    D = () => {
      w !== x && (e.lineTo(d, x), e.lineTo(d, w), e.lineTo(d, C))
    }
  for (c && ((m = i[S(0)]), e.moveTo(m.x, m.y)), p = 0; p <= a; ++p) {
    if (((m = i[S(p)]), m.skip)) continue
    const A = m.x,
      L = m.y,
      j = A | 0
    j === b
      ? (L < w ? (w = L) : L > x && (x = L), (d = (h * d + A) / ++h))
      : (D(), e.lineTo(A, L), (b = j), (h = 0), (w = x = L)),
      (C = L)
  }
  D()
}
function da(e) {
  const t = e.options,
    n = t.borderDash && t.borderDash.length
  return !e._decimated &&
    !e._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== 'monotone' &&
    !t.stepped &&
    !n
    ? x2
    : _2
}
function v2(e) {
  return e.stepped
    ? Fx
    : e.tension || e.cubicInterpolationMode === 'monotone'
    ? Bx
    : Rn
}
function C2(e, t, n, s) {
  let i = t._path
  i || ((i = t._path = new Path2D()), t.path(i, n, s) && i.closePath()),
    Dh(e, t.options),
    e.stroke(i)
}
function k2(e, t, n, s) {
  const { segments: i, options: o } = t,
    r = da(t)
  for (const a of i)
    Dh(e, o, a.style),
      e.beginPath(),
      r(e, t, a, { start: n, end: n + s - 1 }) && e.closePath(),
      e.stroke()
}
const S2 = typeof Path2D == 'function'
function P2(e, t, n, s) {
  S2 && !t.options.segment ? C2(e, t, n, s) : k2(e, t, n, s)
}
class $s extends Un {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t)
  }
  updateControlPoints(t, n) {
    const s = this.options
    if (
      (s.tension || s.cubicInterpolationMode === 'monotone') &&
      !s.stepped &&
      !this._pointsUpdated
    ) {
      const i = s.spanGaps ? this._loop : this._fullLoop
      Ax(this._points, s, t, i, n), (this._pointsUpdated = !0)
    }
  }
  set points(t) {
    ;(this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1)
  }
  get points() {
    return this._points
  }
  get segments() {
    return this._segments || (this._segments = Ux(this, this.options.segment))
  }
  first() {
    const t = this.segments,
      n = this.points
    return t.length && n[t[0].start]
  }
  last() {
    const t = this.segments,
      n = this.points,
      s = t.length
    return s && n[t[s - 1].end]
  }
  interpolate(t, n) {
    const s = this.options,
      i = t[n],
      o = this.points,
      r = jx(this, { property: n, start: i, end: i })
    if (!r.length) return
    const a = [],
      c = v2(s)
    let l, d
    for (l = 0, d = r.length; l < d; ++l) {
      const { start: h, end: p } = r[l],
        m = o[h],
        b = o[p]
      if (m === b) {
        a.push(m)
        continue
      }
      const w = Math.abs((i - m[n]) / (b[n] - m[n])),
        x = c(m, b, w, s.stepped)
      ;(x[n] = t[n]), a.push(x)
    }
    return a.length === 1 ? a[0] : a
  }
  pathSegment(t, n, s) {
    return da(this)(t, this, n, s)
  }
  path(t, n, s) {
    const i = this.segments,
      o = da(this)
    let r = this._loop
    ;(n = n || 0), (s = s || this.points.length - n)
    for (const a of i) r &= o(t, this, a, { start: n, end: n + s - 1 })
    return !!r
  }
  draw(t, n, s, i) {
    const o = this.options || {}
    ;(this.points || []).length &&
      o.borderWidth &&
      (t.save(), P2(t, this, s, i), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0))
  }
}
rt($s, 'id', 'line'),
  rt($s, 'defaults', {
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: 'miter',
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: 'default',
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
  }),
  rt($s, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor'
  }),
  rt($s, 'descriptors', {
    _scriptable: !0,
    _indexable: t => t !== 'borderDash' && t !== 'fill'
  })
function td(e, t, n, s) {
  const i = e.options,
    { [n]: o } = e.getProps([n], s)
  return Math.abs(t - o) < i.radius + i.hitRadius
}
class lo extends Un {
  constructor(n) {
    super()
    rt(this, 'parsed')
    rt(this, 'skip')
    rt(this, 'stop')
    ;(this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      n && Object.assign(this, n)
  }
  inRange(n, s, i) {
    const o = this.options,
      { x: r, y: a } = this.getProps(['x', 'y'], i)
    return (
      Math.pow(n - r, 2) + Math.pow(s - a, 2) <
      Math.pow(o.hitRadius + o.radius, 2)
    )
  }
  inXRange(n, s) {
    return td(this, n, 'x', s)
  }
  inYRange(n, s) {
    return td(this, n, 'y', s)
  }
  getCenterPoint(n) {
    const { x: s, y: i } = this.getProps(['x', 'y'], n)
    return { x: s, y: i }
  }
  size(n) {
    n = n || this.options || {}
    let s = n.radius || 0
    s = Math.max(s, (s && n.hoverRadius) || 0)
    const i = (s && n.borderWidth) || 0
    return (s + i) * 2
  }
  draw(n, s) {
    const i = this.options
    this.skip ||
      i.radius < 0.1 ||
      !Je(this, s, this.size(i) / 2) ||
      ((n.strokeStyle = i.borderColor),
      (n.lineWidth = i.borderWidth),
      (n.fillStyle = i.backgroundColor),
      la(n, i, this.x, this.y))
  }
  getRange() {
    const n = this.options || {}
    return n.radius + n.hitRadius
  }
}
rt(lo, 'id', 'point'),
  rt(lo, 'defaults', {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: 'circle',
    radius: 3,
    rotation: 0
  }),
  rt(lo, 'defaultRoutes', {
    backgroundColor: 'backgroundColor',
    borderColor: 'borderColor'
  })
const ed = (e, t) => {
    let { boxHeight: n = t, boxWidth: s = t } = e
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (s = e.pointStyleWidth || Math.min(s, t))),
      { boxWidth: s, boxHeight: n, itemHeight: Math.max(t, n) }
    )
  },
  E2 = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index
class nd extends Un {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0)
  }
  update(t, n, s) {
    ;(this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = s),
      this.setDimensions(),
      this.buildLabels(),
      this.fit()
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height))
  }
  buildLabels() {
    const t = this.options.labels || {}
    let n = Pt(t.generateLabels, [this.chart], this) || []
    t.filter && (n = n.filter(s => t.filter(s, this.chart.data))),
      t.sort && (n = n.sort((s, i) => t.sort(s, i, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n)
  }
  fit() {
    const { options: t, ctx: n } = this
    if (!t.display) {
      this.width = this.height = 0
      return
    }
    const s = t.labels,
      i = jt(s.font),
      o = i.size,
      r = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: c } = ed(s, o)
    let l, d
    ;(n.font = i.string),
      this.isHorizontal()
        ? ((l = this.maxWidth), (d = this._fitRows(r, o, a, c) + 10))
        : ((d = this.maxHeight), (l = this._fitCols(r, i, a, c) + 10)),
      (this.width = Math.min(l, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(d, t.maxHeight || this.maxHeight))
  }
  _fitRows(t, n, s, i) {
    const {
        ctx: o,
        maxWidth: r,
        options: {
          labels: { padding: a }
        }
      } = this,
      c = (this.legendHitBoxes = []),
      l = (this.lineWidths = [0]),
      d = i + a
    let h = t
    ;(o.textAlign = 'left'), (o.textBaseline = 'middle')
    let p = -1,
      m = -d
    return (
      this.legendItems.forEach((b, w) => {
        const x = s + n / 2 + o.measureText(b.text).width
        ;(w === 0 || l[l.length - 1] + x + 2 * a > r) &&
          ((h += d), (l[l.length - (w > 0 ? 0 : 1)] = 0), (m += d), p++),
          (c[w] = { left: 0, top: m, row: p, width: x, height: i }),
          (l[l.length - 1] += x + a)
      }),
      h
    )
  }
  _fitCols(t, n, s, i) {
    const {
        ctx: o,
        maxHeight: r,
        options: {
          labels: { padding: a }
        }
      } = this,
      c = (this.legendHitBoxes = []),
      l = (this.columnSizes = []),
      d = r - t
    let h = a,
      p = 0,
      m = 0,
      b = 0,
      w = 0
    return (
      this.legendItems.forEach((x, C) => {
        const { itemWidth: S, itemHeight: D } = A2(s, n, o, x, i)
        C > 0 &&
          m + D + 2 * a > d &&
          ((h += p + a),
          l.push({ width: p, height: m }),
          (b += p + a),
          w++,
          (p = m = 0)),
          (c[C] = { left: b, top: m, col: w, width: S, height: D }),
          (p = Math.max(p, S)),
          (m += D + a)
      }),
      (h += p),
      l.push({ width: p, height: m }),
      h
    )
  }
  adjustHitBoxes() {
    if (!this.options.display) return
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: s,
          labels: { padding: i },
          rtl: o
        }
      } = this,
      r = ls(o, this.left, this.width)
    if (this.isHorizontal()) {
      let a = 0,
        c = Zt(s, this.left + i, this.right - this.lineWidths[a])
      for (const l of n)
        a !== l.row &&
          ((a = l.row),
          (c = Zt(s, this.left + i, this.right - this.lineWidths[a]))),
          (l.top += this.top + t + i),
          (l.left = r.leftForLtr(r.x(c), l.width)),
          (c += l.width + i)
    } else {
      let a = 0,
        c = Zt(s, this.top + t + i, this.bottom - this.columnSizes[a].height)
      for (const l of n)
        l.col !== a &&
          ((a = l.col),
          (c = Zt(
            s,
            this.top + t + i,
            this.bottom - this.columnSizes[a].height
          ))),
          (l.top = c),
          (l.left += this.left + i),
          (l.left = r.leftForLtr(r.x(l.left), l.width)),
          (c += l.height + i)
    }
  }
  isHorizontal() {
    return this.options.position === 'top' || this.options.position === 'bottom'
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx
      sl(t, this), this._draw(), il(t)
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: s, ctx: i } = this,
      { align: o, labels: r } = t,
      a = Ft.color,
      c = ls(t.rtl, this.left, this.width),
      l = jt(r.font),
      { padding: d } = r,
      h = l.size,
      p = h / 2
    let m
    this.drawTitle(),
      (i.textAlign = c.textAlign('left')),
      (i.textBaseline = 'middle'),
      (i.lineWidth = 0.5),
      (i.font = l.string)
    const { boxWidth: b, boxHeight: w, itemHeight: x } = ed(r, h),
      C = function (j, z, T) {
        if (isNaN(b) || b <= 0 || isNaN(w) || w < 0) return
        i.save()
        const W = ht(T.lineWidth, 1)
        if (
          ((i.fillStyle = ht(T.fillStyle, a)),
          (i.lineCap = ht(T.lineCap, 'butt')),
          (i.lineDashOffset = ht(T.lineDashOffset, 0)),
          (i.lineJoin = ht(T.lineJoin, 'miter')),
          (i.lineWidth = W),
          (i.strokeStyle = ht(T.strokeStyle, a)),
          i.setLineDash(ht(T.lineDash, [])),
          r.usePointStyle)
        ) {
          const $ = {
              radius: (w * Math.SQRT2) / 2,
              pointStyle: T.pointStyle,
              rotation: T.rotation,
              borderWidth: W
            },
            G = c.xPlus(j, b / 2),
            I = z + p
          fh(i, $, G, I, r.pointStyleWidth && b)
        } else {
          const $ = z + Math.max((h - w) / 2, 0),
            G = c.leftForLtr(j, b),
            I = as(T.borderRadius)
          i.beginPath(),
            Object.values(I).some(q => q !== 0)
              ? So(i, { x: G, y: $, w: b, h: w, radius: I })
              : i.rect(G, $, b, w),
            i.fill(),
            W !== 0 && i.stroke()
        }
        i.restore()
      },
      S = function (j, z, T) {
        Vn(i, T.text, j, z + x / 2, l, {
          strikethrough: T.hidden,
          textAlign: c.textAlign(T.textAlign)
        })
      },
      D = this.isHorizontal(),
      A = this._computeTitleHeight()
    D
      ? (m = {
          x: Zt(o, this.left + d, this.right - s[0]),
          y: this.top + d + A,
          line: 0
        })
      : (m = {
          x: this.left + d,
          y: Zt(o, this.top + A + d, this.bottom - n[0].height),
          line: 0
        }),
      _h(this.ctx, t.textDirection)
    const L = x + d
    this.legendItems.forEach((j, z) => {
      ;(i.strokeStyle = j.fontColor), (i.fillStyle = j.fontColor)
      const T = i.measureText(j.text).width,
        W = c.textAlign(j.textAlign || (j.textAlign = r.textAlign)),
        $ = b + p + T
      let G = m.x,
        I = m.y
      c.setWidth(this.width),
        D
          ? z > 0 &&
            G + $ + d > this.right &&
            ((I = m.y += L),
            m.line++,
            (G = m.x = Zt(o, this.left + d, this.right - s[m.line])))
          : z > 0 &&
            I + L > this.bottom &&
            ((G = m.x = G + n[m.line].width + d),
            m.line++,
            (I = m.y = Zt(o, this.top + A + d, this.bottom - n[m.line].height)))
      const q = c.x(G)
      if (
        (C(q, I, j),
        (G = W_(W, G + b + p, D ? G + $ : this.right, t.rtl)),
        S(c.x(G), I, j),
        D)
      )
        m.x += $ + d
      else if (typeof j.text != 'string') {
        const Y = l.lineHeight
        m.y += Fh(j, Y)
      } else m.y += L
    }),
      xh(this.ctx, t.textDirection)
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      s = jt(n.font),
      i = ee(n.padding)
    if (!n.display) return
    const o = ls(t.rtl, this.left, this.width),
      r = this.ctx,
      a = n.position,
      c = s.size / 2,
      l = i.top + c
    let d,
      h = this.left,
      p = this.width
    if (this.isHorizontal())
      (p = Math.max(...this.lineWidths)),
        (d = this.top + l),
        (h = Zt(t.align, h, this.right - p))
    else {
      const b = this.columnSizes.reduce((w, x) => Math.max(w, x.height), 0)
      d =
        l +
        Zt(
          t.align,
          this.top,
          this.bottom - b - t.labels.padding - this._computeTitleHeight()
        )
    }
    const m = Zt(a, h, h + p)
    ;(r.textAlign = o.textAlign(tl(a))),
      (r.textBaseline = 'middle'),
      (r.strokeStyle = n.color),
      (r.fillStyle = n.color),
      (r.font = s.string),
      Vn(r, n.text, m, d, s)
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = jt(t.font),
      s = ee(t.padding)
    return t.display ? n.lineHeight + s.height : 0
  }
  _getLegendItemAt(t, n) {
    let s, i, o
    if (Ns(t, this.left, this.right) && Ns(n, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, s = 0; s < o.length; ++s)
        if (
          ((i = o[s]),
          Ns(t, i.left, i.left + i.width) && Ns(n, i.top, i.top + i.height))
        )
          return this.legendItems[s]
    }
    return null
  }
  handleEvent(t) {
    const n = this.options
    if (!T2(t.type, n)) return
    const s = this._getLegendItemAt(t.x, t.y)
    if (t.type === 'mousemove' || t.type === 'mouseout') {
      const i = this._hoveredItem,
        o = E2(i, s)
      i && !o && Pt(n.onLeave, [t, i, this], this),
        (this._hoveredItem = s),
        s && !o && Pt(n.onHover, [t, s, this], this)
    } else s && Pt(n.onClick, [t, s, this], this)
  }
}
function A2(e, t, n, s, i) {
  const o = O2(s, e, t, n),
    r = M2(i, s, t.lineHeight)
  return { itemWidth: o, itemHeight: r }
}
function O2(e, t, n, s) {
  let i = e.text
  return (
    i &&
      typeof i != 'string' &&
      (i = i.reduce((o, r) => (o.length > r.length ? o : r))),
    t + n.size / 2 + s.measureText(i).width
  )
}
function M2(e, t, n) {
  let s = e
  return typeof t.text != 'string' && (s = Fh(t, n)), s
}
function Fh(e, t) {
  const n = e.text ? e.text.length + 0.5 : 0
  return t * n
}
function T2(e, t) {
  return !!(
    ((e === 'mousemove' || e === 'mouseout') && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === 'click' || e === 'mouseup'))
  )
}
var L2 = {
  id: 'legend',
  _element: nd,
  start(e, t, n) {
    const s = (e.legend = new nd({ ctx: e.ctx, options: n, chart: e }))
    we.configure(e, s, n), we.addBox(e, s)
  },
  stop(e) {
    we.removeBox(e, e.legend), delete e.legend
  },
  beforeUpdate(e, t, n) {
    const s = e.legend
    we.configure(e, s, n), (s.options = n)
  },
  afterUpdate(e) {
    const t = e.legend
    t.buildLabels(), t.adjustHitBoxes()
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event)
  },
  defaults: {
    display: !0,
    position: 'top',
    align: 'center',
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const s = t.datasetIndex,
        i = n.chart
      i.isDatasetVisible(s)
        ? (i.hide(s), (t.hidden = !0))
        : (i.show(s), (t.hidden = !1))
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: e => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: {
              usePointStyle: n,
              pointStyle: s,
              textAlign: i,
              color: o,
              useBorderRadius: r,
              borderRadius: a
            }
          } = e.legend.options
        return e._getSortedDatasetMetas().map(c => {
          const l = c.controller.getStyle(n ? 0 : void 0),
            d = ee(l.borderWidth)
          return {
            text: t[c.index].label,
            fillStyle: l.backgroundColor,
            fontColor: o,
            hidden: !c.visible,
            lineCap: l.borderCapStyle,
            lineDash: l.borderDash,
            lineDashOffset: l.borderDashOffset,
            lineJoin: l.borderJoinStyle,
            lineWidth: (d.width + d.height) / 4,
            strokeStyle: l.borderColor,
            pointStyle: s || l.pointStyle,
            rotation: l.rotation,
            textAlign: i || l.textAlign,
            borderRadius: r && (a || l.borderRadius),
            datasetIndex: c.index
          }
        }, this)
      }
    },
    title: {
      color: e => e.chart.options.color,
      display: !1,
      position: 'center',
      text: ''
    }
  },
  descriptors: {
    _scriptable: e => !e.startsWith('on'),
    labels: {
      _scriptable: e => !['generateLabels', 'filter', 'sort'].includes(e)
    }
  }
}
class Bh extends Un {
  constructor(t) {
    super(),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this._padding = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0)
  }
  update(t, n) {
    const s = this.options
    if (((this.left = 0), (this.top = 0), !s.display)) {
      this.width = this.height = this.right = this.bottom = 0
      return
    }
    ;(this.width = this.right = t), (this.height = this.bottom = n)
    const i = Dt(s.text) ? s.text.length : 1
    this._padding = ee(s.padding)
    const o = i * jt(s.font).lineHeight + this._padding.height
    this.isHorizontal() ? (this.height = o) : (this.width = o)
  }
  isHorizontal() {
    const t = this.options.position
    return t === 'top' || t === 'bottom'
  }
  _drawArgs(t) {
    const { top: n, left: s, bottom: i, right: o, options: r } = this,
      a = r.align
    let c = 0,
      l,
      d,
      h
    return (
      this.isHorizontal()
        ? ((d = Zt(a, s, o)), (h = n + t), (l = o - s))
        : (r.position === 'left'
            ? ((d = s + t), (h = Zt(a, i, n)), (c = Vt * -0.5))
            : ((d = o - t), (h = Zt(a, n, i)), (c = Vt * 0.5)),
          (l = i - n)),
      { titleX: d, titleY: h, maxWidth: l, rotation: c }
    )
  }
  draw() {
    const t = this.ctx,
      n = this.options
    if (!n.display) return
    const s = jt(n.font),
      o = s.lineHeight / 2 + this._padding.top,
      { titleX: r, titleY: a, maxWidth: c, rotation: l } = this._drawArgs(o)
    Vn(t, n.text, 0, 0, s, {
      color: n.color,
      maxWidth: c,
      rotation: l,
      textAlign: tl(n.align),
      textBaseline: 'middle',
      translation: [r, a]
    })
  }
}
function R2(e, t) {
  const n = new Bh({ ctx: e.ctx, options: t, chart: e })
  we.configure(e, n, t), we.addBox(e, n), (e.titleBlock = n)
}
var D2 = {
  id: 'title',
  _element: Bh,
  start(e, t, n) {
    R2(e, n)
  },
  stop(e) {
    const t = e.titleBlock
    we.removeBox(e, t), delete e.titleBlock
  },
  beforeUpdate(e, t, n) {
    const s = e.titleBlock
    we.configure(e, s, n), (s.options = n)
  },
  defaults: {
    align: 'center',
    display: !1,
    font: { weight: 'bold' },
    fullSize: !0,
    padding: 10,
    position: 'top',
    text: '',
    weight: 2e3
  },
  defaultRoutes: { color: 'color' },
  descriptors: { _scriptable: !0, _indexable: !1 }
}
const Hs = {
  average(e) {
    if (!e.length) return !1
    let t,
      n,
      s = 0,
      i = 0,
      o = 0
    for (t = 0, n = e.length; t < n; ++t) {
      const r = e[t].element
      if (r && r.hasValue()) {
        const a = r.tooltipPosition()
        ;(s += a.x), (i += a.y), ++o
      }
    }
    return { x: s / o, y: i / o }
  },
  nearest(e, t) {
    if (!e.length) return !1
    let n = t.x,
      s = t.y,
      i = Number.POSITIVE_INFINITY,
      o,
      r,
      a
    for (o = 0, r = e.length; o < r; ++o) {
      const c = e[o].element
      if (c && c.hasValue()) {
        const l = c.getCenterPoint(),
          d = ra(t, l)
        d < i && ((i = d), (a = c))
      }
    }
    if (a) {
      const c = a.tooltipPosition()
      ;(n = c.x), (s = c.y)
    }
    return { x: n, y: s }
  }
}
function Fe(e, t) {
  return t && (Dt(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e
}
function Ke(e) {
  return (typeof e == 'string' || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e
}
function I2(e, t) {
  const { element: n, datasetIndex: s, index: i } = t,
    o = e.getDatasetMeta(s).controller,
    { label: r, value: a } = o.getLabelAndValue(i)
  return {
    chart: e,
    label: r,
    parsed: o.getParsed(i),
    raw: e.data.datasets[s].data[i],
    formattedValue: a,
    dataset: o.getDataset(),
    dataIndex: i,
    datasetIndex: s,
    element: n
  }
}
function sd(e, t) {
  const n = e.chart.ctx,
    { body: s, footer: i, title: o } = e,
    { boxWidth: r, boxHeight: a } = t,
    c = jt(t.bodyFont),
    l = jt(t.titleFont),
    d = jt(t.footerFont),
    h = o.length,
    p = i.length,
    m = s.length,
    b = ee(t.padding)
  let w = b.height,
    x = 0,
    C = s.reduce(
      (A, L) => A + L.before.length + L.lines.length + L.after.length,
      0
    )
  if (
    ((C += e.beforeBody.length + e.afterBody.length),
    h &&
      (w += h * l.lineHeight + (h - 1) * t.titleSpacing + t.titleMarginBottom),
    C)
  ) {
    const A = t.displayColors ? Math.max(a, c.lineHeight) : c.lineHeight
    w += m * A + (C - m) * c.lineHeight + (C - 1) * t.bodySpacing
  }
  p && (w += t.footerMarginTop + p * d.lineHeight + (p - 1) * t.footerSpacing)
  let S = 0
  const D = function (A) {
    x = Math.max(x, n.measureText(A).width + S)
  }
  return (
    n.save(),
    (n.font = l.string),
    Ct(e.title, D),
    (n.font = c.string),
    Ct(e.beforeBody.concat(e.afterBody), D),
    (S = t.displayColors ? r + 2 + t.boxPadding : 0),
    Ct(s, A => {
      Ct(A.before, D), Ct(A.lines, D), Ct(A.after, D)
    }),
    (S = 0),
    (n.font = d.string),
    Ct(e.footer, D),
    n.restore(),
    (x += b.width),
    { width: x, height: w }
  )
}
function F2(e, t) {
  const { y: n, height: s } = t
  return n < s / 2 ? 'top' : n > e.height - s / 2 ? 'bottom' : 'center'
}
function B2(e, t, n, s) {
  const { x: i, width: o } = s,
    r = n.caretSize + n.caretPadding
  if ((e === 'left' && i + o + r > t.width) || (e === 'right' && i - o - r < 0))
    return !0
}
function N2(e, t, n, s) {
  const { x: i, width: o } = n,
    {
      width: r,
      chartArea: { left: a, right: c }
    } = e
  let l = 'center'
  return (
    s === 'center'
      ? (l = i <= (a + c) / 2 ? 'left' : 'right')
      : i <= o / 2
      ? (l = 'left')
      : i >= r - o / 2 && (l = 'right'),
    B2(l, e, t, n) && (l = 'center'),
    l
  )
}
function id(e, t, n) {
  const s = n.yAlign || t.yAlign || F2(e, n)
  return { xAlign: n.xAlign || t.xAlign || N2(e, t, n, s), yAlign: s }
}
function z2(e, t) {
  let { x: n, width: s } = e
  return t === 'right' ? (n -= s) : t === 'center' && (n -= s / 2), n
}
function $2(e, t, n) {
  let { y: s, height: i } = e
  return (
    t === 'top' ? (s += n) : t === 'bottom' ? (s -= i + n) : (s -= i / 2), s
  )
}
function od(e, t, n, s) {
  const { caretSize: i, caretPadding: o, cornerRadius: r } = e,
    { xAlign: a, yAlign: c } = n,
    l = i + o,
    { topLeft: d, topRight: h, bottomLeft: p, bottomRight: m } = as(r)
  let b = z2(t, a)
  const w = $2(t, c, l)
  return (
    c === 'center'
      ? a === 'left'
        ? (b += l)
        : a === 'right' && (b -= l)
      : a === 'left'
      ? (b -= Math.max(d, p) + i)
      : a === 'right' && (b += Math.max(h, m) + i),
    { x: be(b, 0, s.width - t.width), y: be(w, 0, s.height - t.height) }
  )
}
function Vi(e, t, n) {
  const s = ee(n.padding)
  return t === 'center'
    ? e.x + e.width / 2
    : t === 'right'
    ? e.x + e.width - s.right
    : e.x + s.left
}
function rd(e) {
  return Fe([], Ke(e))
}
function H2(e, t, n) {
  return vn(e, { tooltip: t, tooltipItems: n, type: 'tooltip' })
}
function ad(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks
  return n ? e.override(n) : e
}
const Nh = {
  beforeTitle: Ue,
  title(e) {
    if (e.length > 0) {
      const t = e[0],
        n = t.chart.data.labels,
        s = n ? n.length : 0
      if (this && this.options && this.options.mode === 'dataset')
        return t.dataset.label || ''
      if (t.label) return t.label
      if (s > 0 && t.dataIndex < s) return n[t.dataIndex]
    }
    return ''
  },
  afterTitle: Ue,
  beforeBody: Ue,
  beforeLabel: Ue,
  label(e) {
    if (this && this.options && this.options.mode === 'dataset')
      return e.label + ': ' + e.formattedValue || e.formattedValue
    let t = e.dataset.label || ''
    t && (t += ': ')
    const n = e.formattedValue
    return At(n) || (t += n), t
  },
  labelColor(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex)
    return {
      borderColor: n.borderColor,
      backgroundColor: n.backgroundColor,
      borderWidth: n.borderWidth,
      borderDash: n.borderDash,
      borderDashOffset: n.borderDashOffset,
      borderRadius: 0
    }
  },
  labelTextColor() {
    return this.options.bodyColor
  },
  labelPointStyle(e) {
    const n = e.chart
      .getDatasetMeta(e.datasetIndex)
      .controller.getStyle(e.dataIndex)
    return { pointStyle: n.pointStyle, rotation: n.rotation }
  },
  afterLabel: Ue,
  afterBody: Ue,
  beforeFooter: Ue,
  footer: Ue,
  afterFooter: Ue
}
function le(e, t, n, s) {
  const i = e[t].call(n, s)
  return typeof i > 'u' ? Nh[t].call(n, s) : i
}
class fa extends Un {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0)
  }
  initialize(t) {
    ;(this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0)
  }
  _resolveAnimations() {
    const t = this._cachedAnimations
    if (t) return t
    const n = this.chart,
      s = this.options.setContext(this.getContext()),
      i = s.enabled && n.options.animation && s.animations,
      o = new Ch(this.chart, i)
    return i._cacheable && (this._cachedAnimations = Object.freeze(o)), o
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = H2(this.chart.getContext(), this, this._tooltipItems))
    )
  }
  getTitle(t, n) {
    const { callbacks: s } = n,
      i = le(s, 'beforeTitle', this, t),
      o = le(s, 'title', this, t),
      r = le(s, 'afterTitle', this, t)
    let a = []
    return (a = Fe(a, Ke(i))), (a = Fe(a, Ke(o))), (a = Fe(a, Ke(r))), a
  }
  getBeforeBody(t, n) {
    return rd(le(n.callbacks, 'beforeBody', this, t))
  }
  getBody(t, n) {
    const { callbacks: s } = n,
      i = []
    return (
      Ct(t, o => {
        const r = { before: [], lines: [], after: [] },
          a = ad(s, o)
        Fe(r.before, Ke(le(a, 'beforeLabel', this, o))),
          Fe(r.lines, le(a, 'label', this, o)),
          Fe(r.after, Ke(le(a, 'afterLabel', this, o))),
          i.push(r)
      }),
      i
    )
  }
  getAfterBody(t, n) {
    return rd(le(n.callbacks, 'afterBody', this, t))
  }
  getFooter(t, n) {
    const { callbacks: s } = n,
      i = le(s, 'beforeFooter', this, t),
      o = le(s, 'footer', this, t),
      r = le(s, 'afterFooter', this, t)
    let a = []
    return (a = Fe(a, Ke(i))), (a = Fe(a, Ke(o))), (a = Fe(a, Ke(r))), a
  }
  _createItems(t) {
    const n = this._active,
      s = this.chart.data,
      i = [],
      o = [],
      r = []
    let a = [],
      c,
      l
    for (c = 0, l = n.length; c < l; ++c) a.push(I2(this.chart, n[c]))
    return (
      t.filter && (a = a.filter((d, h, p) => t.filter(d, h, p, s))),
      t.itemSort && (a = a.sort((d, h) => t.itemSort(d, h, s))),
      Ct(a, d => {
        const h = ad(t.callbacks, d)
        i.push(le(h, 'labelColor', this, d)),
          o.push(le(h, 'labelPointStyle', this, d)),
          r.push(le(h, 'labelTextColor', this, d))
      }),
      (this.labelColors = i),
      (this.labelPointStyles = o),
      (this.labelTextColors = r),
      (this.dataPoints = a),
      a
    )
  }
  update(t, n) {
    const s = this.options.setContext(this.getContext()),
      i = this._active
    let o,
      r = []
    if (!i.length) this.opacity !== 0 && (o = { opacity: 0 })
    else {
      const a = Hs[s.position].call(this, i, this._eventPosition)
      ;(r = this._createItems(s)),
        (this.title = this.getTitle(r, s)),
        (this.beforeBody = this.getBeforeBody(r, s)),
        (this.body = this.getBody(r, s)),
        (this.afterBody = this.getAfterBody(r, s)),
        (this.footer = this.getFooter(r, s))
      const c = (this._size = sd(this, s)),
        l = Object.assign({}, a, c),
        d = id(this.chart, s, l),
        h = od(s, l, d, this.chart)
      ;(this.xAlign = d.xAlign),
        (this.yAlign = d.yAlign),
        (o = {
          opacity: 1,
          x: h.x,
          y: h.y,
          width: c.width,
          height: c.height,
          caretX: a.x,
          caretY: a.y
        })
    }
    ;(this._tooltipItems = r),
      (this.$context = void 0),
      o && this._resolveAnimations().update(this, o),
      t &&
        s.external &&
        s.external.call(this, { chart: this.chart, tooltip: this, replay: n })
  }
  drawCaret(t, n, s, i) {
    const o = this.getCaretPosition(t, s, i)
    n.lineTo(o.x1, o.y1), n.lineTo(o.x2, o.y2), n.lineTo(o.x3, o.y3)
  }
  getCaretPosition(t, n, s) {
    const { xAlign: i, yAlign: o } = this,
      { caretSize: r, cornerRadius: a } = s,
      { topLeft: c, topRight: l, bottomLeft: d, bottomRight: h } = as(a),
      { x: p, y: m } = t,
      { width: b, height: w } = n
    let x, C, S, D, A, L
    return (
      o === 'center'
        ? ((A = m + w / 2),
          i === 'left'
            ? ((x = p), (C = x - r), (D = A + r), (L = A - r))
            : ((x = p + b), (C = x + r), (D = A - r), (L = A + r)),
          (S = x))
        : (i === 'left'
            ? (C = p + Math.max(c, d) + r)
            : i === 'right'
            ? (C = p + b - Math.max(l, h) - r)
            : (C = this.caretX),
          o === 'top'
            ? ((D = m), (A = D - r), (x = C - r), (S = C + r))
            : ((D = m + w), (A = D + r), (x = C + r), (S = C - r)),
          (L = D)),
      { x1: x, x2: C, x3: S, y1: D, y2: A, y3: L }
    )
  }
  drawTitle(t, n, s) {
    const i = this.title,
      o = i.length
    let r, a, c
    if (o) {
      const l = ls(s.rtl, this.x, this.width)
      for (
        t.x = Vi(this, s.titleAlign, s),
          n.textAlign = l.textAlign(s.titleAlign),
          n.textBaseline = 'middle',
          r = jt(s.titleFont),
          a = s.titleSpacing,
          n.fillStyle = s.titleColor,
          n.font = r.string,
          c = 0;
        c < o;
        ++c
      )
        n.fillText(i[c], l.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + a),
          c + 1 === o && (t.y += s.titleMarginBottom - a)
    }
  }
  _drawColorBox(t, n, s, i, o) {
    const r = this.labelColors[s],
      a = this.labelPointStyles[s],
      { boxHeight: c, boxWidth: l } = o,
      d = jt(o.bodyFont),
      h = Vi(this, 'left', o),
      p = i.x(h),
      m = c < d.lineHeight ? (d.lineHeight - c) / 2 : 0,
      b = n.y + m
    if (o.usePointStyle) {
      const w = {
          radius: Math.min(l, c) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1
        },
        x = i.leftForLtr(p, l) + l / 2,
        C = b + c / 2
      ;(t.strokeStyle = o.multiKeyBackground),
        (t.fillStyle = o.multiKeyBackground),
        la(t, w, x, C),
        (t.strokeStyle = r.borderColor),
        (t.fillStyle = r.backgroundColor),
        la(t, w, x, C)
    } else {
      ;(t.lineWidth = yt(r.borderWidth)
        ? Math.max(...Object.values(r.borderWidth))
        : r.borderWidth || 1),
        (t.strokeStyle = r.borderColor),
        t.setLineDash(r.borderDash || []),
        (t.lineDashOffset = r.borderDashOffset || 0)
      const w = i.leftForLtr(p, l),
        x = i.leftForLtr(i.xPlus(p, 1), l - 2),
        C = as(r.borderRadius)
      Object.values(C).some(S => S !== 0)
        ? (t.beginPath(),
          (t.fillStyle = o.multiKeyBackground),
          So(t, { x: w, y: b, w: l, h: c, radius: C }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = r.backgroundColor),
          t.beginPath(),
          So(t, { x, y: b + 1, w: l - 2, h: c - 2, radius: C }),
          t.fill())
        : ((t.fillStyle = o.multiKeyBackground),
          t.fillRect(w, b, l, c),
          t.strokeRect(w, b, l, c),
          (t.fillStyle = r.backgroundColor),
          t.fillRect(x, b + 1, l - 2, c - 2))
    }
    t.fillStyle = this.labelTextColors[s]
  }
  drawBody(t, n, s) {
    const { body: i } = this,
      {
        bodySpacing: o,
        bodyAlign: r,
        displayColors: a,
        boxHeight: c,
        boxWidth: l,
        boxPadding: d
      } = s,
      h = jt(s.bodyFont)
    let p = h.lineHeight,
      m = 0
    const b = ls(s.rtl, this.x, this.width),
      w = function (T) {
        n.fillText(T, b.x(t.x + m), t.y + p / 2), (t.y += p + o)
      },
      x = b.textAlign(r)
    let C, S, D, A, L, j, z
    for (
      n.textAlign = r,
        n.textBaseline = 'middle',
        n.font = h.string,
        t.x = Vi(this, x, s),
        n.fillStyle = s.bodyColor,
        Ct(this.beforeBody, w),
        m = a && x !== 'right' ? (r === 'center' ? l / 2 + d : l + 2 + d) : 0,
        A = 0,
        j = i.length;
      A < j;
      ++A
    ) {
      for (
        C = i[A],
          S = this.labelTextColors[A],
          n.fillStyle = S,
          Ct(C.before, w),
          D = C.lines,
          a &&
            D.length &&
            (this._drawColorBox(n, t, A, b, s),
            (p = Math.max(h.lineHeight, c))),
          L = 0,
          z = D.length;
        L < z;
        ++L
      )
        w(D[L]), (p = h.lineHeight)
      Ct(C.after, w)
    }
    ;(m = 0), (p = h.lineHeight), Ct(this.afterBody, w), (t.y -= o)
  }
  drawFooter(t, n, s) {
    const i = this.footer,
      o = i.length
    let r, a
    if (o) {
      const c = ls(s.rtl, this.x, this.width)
      for (
        t.x = Vi(this, s.footerAlign, s),
          t.y += s.footerMarginTop,
          n.textAlign = c.textAlign(s.footerAlign),
          n.textBaseline = 'middle',
          r = jt(s.footerFont),
          n.fillStyle = s.footerColor,
          n.font = r.string,
          a = 0;
        a < o;
        ++a
      )
        n.fillText(i[a], c.x(t.x), t.y + r.lineHeight / 2),
          (t.y += r.lineHeight + s.footerSpacing)
    }
  }
  drawBackground(t, n, s, i) {
    const { xAlign: o, yAlign: r } = this,
      { x: a, y: c } = t,
      { width: l, height: d } = s,
      {
        topLeft: h,
        topRight: p,
        bottomLeft: m,
        bottomRight: b
      } = as(i.cornerRadius)
    ;(n.fillStyle = i.backgroundColor),
      (n.strokeStyle = i.borderColor),
      (n.lineWidth = i.borderWidth),
      n.beginPath(),
      n.moveTo(a + h, c),
      r === 'top' && this.drawCaret(t, n, s, i),
      n.lineTo(a + l - p, c),
      n.quadraticCurveTo(a + l, c, a + l, c + p),
      r === 'center' && o === 'right' && this.drawCaret(t, n, s, i),
      n.lineTo(a + l, c + d - b),
      n.quadraticCurveTo(a + l, c + d, a + l - b, c + d),
      r === 'bottom' && this.drawCaret(t, n, s, i),
      n.lineTo(a + m, c + d),
      n.quadraticCurveTo(a, c + d, a, c + d - m),
      r === 'center' && o === 'left' && this.drawCaret(t, n, s, i),
      n.lineTo(a, c + h),
      n.quadraticCurveTo(a, c, a + h, c),
      n.closePath(),
      n.fill(),
      i.borderWidth > 0 && n.stroke()
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      s = this.$animations,
      i = s && s.x,
      o = s && s.y
    if (i || o) {
      const r = Hs[t.position].call(this, this._active, this._eventPosition)
      if (!r) return
      const a = (this._size = sd(this, t)),
        c = Object.assign({}, r, this._size),
        l = id(n, t, c),
        d = od(t, c, l, n)
      ;(i._to !== d.x || o._to !== d.y) &&
        ((this.xAlign = l.xAlign),
        (this.yAlign = l.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = r.x),
        (this.caretY = r.y),
        this._resolveAnimations().update(this, d))
    }
  }
  _willRender() {
    return !!this.opacity
  }
  draw(t) {
    const n = this.options.setContext(this.getContext())
    let s = this.opacity
    if (!s) return
    this._updateAnimationTarget(n)
    const i = { width: this.width, height: this.height },
      o = { x: this.x, y: this.y }
    s = Math.abs(s) < 0.001 ? 0 : s
    const r = ee(n.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length
    n.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = s),
      this.drawBackground(o, t, i, n),
      _h(t, n.textDirection),
      (o.y += r.top),
      this.drawTitle(o, t, n),
      this.drawBody(o, t, n),
      this.drawFooter(o, t, n),
      xh(t, n.textDirection),
      t.restore())
  }
  getActiveElements() {
    return this._active || []
  }
  setActiveElements(t, n) {
    const s = this._active,
      i = t.map(({ datasetIndex: a, index: c }) => {
        const l = this.chart.getDatasetMeta(a)
        if (!l) throw new Error('Cannot find a dataset at index ' + a)
        return { datasetIndex: a, element: l.data[c], index: c }
      }),
      o = !yo(s, i),
      r = this._positionChanged(i, n)
    ;(o || r) &&
      ((this._active = i),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0))
  }
  handleEvent(t, n, s = !0) {
    if (n && this._ignoreReplayEvents) return !1
    this._ignoreReplayEvents = !1
    const i = this.options,
      o = this._active || [],
      r = this._getActiveElements(t, o, n, s),
      a = this._positionChanged(r, t),
      c = n || !yo(r, o) || a
    return (
      c &&
        ((this._active = r),
        (i.enabled || i.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      c
    )
  }
  _getActiveElements(t, n, s, i) {
    const o = this.options
    if (t.type === 'mouseout') return []
    if (!i) return n
    const r = this.chart.getElementsAtEventForMode(t, o.mode, o, s)
    return o.reverse && r.reverse(), r
  }
  _positionChanged(t, n) {
    const { caretX: s, caretY: i, options: o } = this,
      r = Hs[o.position].call(this, t, n)
    return r !== !1 && (s !== r.x || i !== r.y)
  }
}
rt(fa, 'positioners', Hs)
var j2 = {
  id: 'tooltip',
  _element: fa,
  positioners: Hs,
  afterInit(e, t, n) {
    n && (e.tooltip = new fa({ chart: e, options: n }))
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n)
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n)
  },
  afterDraw(e) {
    const t = e.tooltip
    if (t && t._willRender()) {
      const n = { tooltip: t }
      if (e.notifyPlugins('beforeTooltipDraw', { ...n, cancelable: !0 }) === !1)
        return
      t.draw(e.ctx), e.notifyPlugins('afterTooltipDraw', n)
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0)
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: 'average',
    backgroundColor: 'rgba(0,0,0,0.8)',
    titleColor: '#fff',
    titleFont: { weight: 'bold' },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: 'left',
    bodyColor: '#fff',
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: 'left',
    footerColor: '#fff',
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: 'bold' },
    footerAlign: 'left',
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: '#fff',
    displayColors: !0,
    boxPadding: 0,
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 0,
    animation: { duration: 400, easing: 'easeOutQuart' },
    animations: {
      numbers: {
        type: 'number',
        properties: ['x', 'y', 'width', 'height', 'caretX', 'caretY']
      },
      opacity: { easing: 'linear', duration: 200 }
    },
    callbacks: Nh
  },
  defaultRoutes: { bodyFont: 'font', footerFont: 'font', titleFont: 'font' },
  descriptors: {
    _scriptable: e => e !== 'filter' && e !== 'itemSort' && e !== 'external',
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: 'animation' }
  },
  additionalOptionScopes: ['interaction']
}
const W2 = (e, t, n, s) => (
  typeof t == 'string'
    ? ((n = e.push(t) - 1), s.unshift({ index: n, label: t }))
    : isNaN(t) && (n = null),
  n
)
function V2(e, t, n, s) {
  const i = e.indexOf(t)
  if (i === -1) return W2(e, t, n, s)
  const o = e.lastIndexOf(t)
  return i !== o ? n : i
}
const U2 = (e, t) => (e === null ? null : be(Math.round(e), 0, t))
function ld(e) {
  const t = this.getLabels()
  return e >= 0 && e < t.length ? t[e] : e
}
class ha extends qn {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = [])
  }
  init(t) {
    const n = this._addedLabels
    if (n.length) {
      const s = this.getLabels()
      for (const { index: i, label: o } of n) s[i] === o && s.splice(i, 1)
      this._addedLabels = []
    }
    super.init(t)
  }
  parse(t, n) {
    if (At(t)) return null
    const s = this.getLabels()
    return (
      (n =
        isFinite(n) && s[n] === t ? n : V2(s, t, ht(n, t), this._addedLabels)),
      U2(n, s.length - 1)
    )
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds()
    let { min: s, max: i } = this.getMinMax(!0)
    this.options.bounds === 'ticks' &&
      (t || (s = 0), n || (i = this.getLabels().length - 1)),
      (this.min = s),
      (this.max = i)
  }
  buildTicks() {
    const t = this.min,
      n = this.max,
      s = this.options.offset,
      i = []
    let o = this.getLabels()
    ;(o = t === 0 && n === o.length - 1 ? o : o.slice(t, n + 1)),
      (this._valueRange = Math.max(o.length - (s ? 0 : 1), 1)),
      (this._startValue = this.min - (s ? 0.5 : 0))
    for (let r = t; r <= n; r++) i.push({ value: r })
    return i
  }
  getLabelForValue(t) {
    return ld.call(this, t)
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels)
  }
  getPixelForValue(t) {
    return (
      typeof t != 'number' && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    )
  }
  getPixelForTick(t) {
    const n = this.ticks
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value)
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    )
  }
  getBasePixel() {
    return this.bottom
  }
}
rt(ha, 'id', 'category'), rt(ha, 'defaults', { ticks: { callback: ld } })
function q2(e, t) {
  const n = [],
    {
      bounds: i,
      step: o,
      min: r,
      max: a,
      precision: c,
      count: l,
      maxTicks: d,
      maxDigits: h,
      includeBounds: p
    } = e,
    m = o || 1,
    b = d - 1,
    { min: w, max: x } = t,
    C = !At(r),
    S = !At(a),
    D = !At(l),
    A = (x - w) / (h + 1)
  let L = hu((x - w) / b / m) * m,
    j,
    z,
    T,
    W
  if (L < 1e-14 && !C && !S) return [{ value: w }, { value: x }]
  ;(W = Math.ceil(x / L) - Math.floor(w / L)),
    W > b && (L = hu((W * L) / b / m) * m),
    At(c) || ((j = Math.pow(10, c)), (L = Math.ceil(L * j) / j)),
    i === 'ticks'
      ? ((z = Math.floor(w / L) * L), (T = Math.ceil(x / L) * L))
      : ((z = w), (T = x)),
    C && S && o && D_((a - r) / o, L / 1e3)
      ? ((W = Math.round(Math.min((a - r) / L, d))),
        (L = (a - r) / W),
        (z = r),
        (T = a))
      : D
      ? ((z = C ? r : z), (T = S ? a : T), (W = l - 1), (L = (T - z) / W))
      : ((W = (T - z) / L),
        Xs(W, Math.round(W), L / 1e3)
          ? (W = Math.round(W))
          : (W = Math.ceil(W)))
  const $ = Math.max(pu(L), pu(z))
  ;(j = Math.pow(10, At(c) ? $ : c)),
    (z = Math.round(z * j) / j),
    (T = Math.round(T * j) / j)
  let G = 0
  for (
    C &&
    (p && z !== r
      ? (n.push({ value: r }),
        z < r && G++,
        Xs(Math.round((z + G * L) * j) / j, r, cd(r, A, e)) && G++)
      : z < r && G++);
    G < W;
    ++G
  ) {
    const I = Math.round((z + G * L) * j) / j
    if (S && I > a) break
    n.push({ value: I })
  }
  return (
    S && p && T !== a
      ? n.length && Xs(n[n.length - 1].value, a, cd(a, A, e))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!S || T === a) && n.push({ value: T }),
    n
  )
}
function cd(e, t, { horizontal: n, minRotation: s }) {
  const i = gn(s),
    o = (n ? Math.sin(i) : Math.cos(i)) || 0.001,
    r = 0.75 * t * ('' + e).length
  return Math.min(t / o, r)
}
class Ao extends qn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0)
  }
  parse(t, n) {
    return At(t) ||
      ((typeof t == 'number' || t instanceof Number) && !isFinite(+t))
      ? null
      : +t
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: s } = this.getUserBounds()
    let { min: i, max: o } = this
    const r = c => (i = n ? i : c),
      a = c => (o = s ? o : c)
    if (t) {
      const c = ms(i),
        l = ms(o)
      c < 0 && l < 0 ? a(0) : c > 0 && l > 0 && r(0)
    }
    if (i === o) {
      let c = o === 0 ? 1 : Math.abs(o * 0.05)
      a(o + c), t || r(i - c)
    }
    ;(this.min = i), (this.max = o)
  }
  getTickLimit() {
    const t = this.options.ticks
    let { maxTicksLimit: n, stepSize: s } = t,
      i
    return (
      s
        ? ((i = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
          i > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`
            ),
            (i = 1e3)))
        : ((i = this.computeTickLimit()), (n = n || 11)),
      n && (i = Math.min(n, i)),
      i
    )
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks
    let s = this.getTickLimit()
    s = Math.max(2, s)
    const i = {
        maxTicks: s,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1
      },
      o = this._range || this,
      r = q2(i, o)
    return (
      t.bounds === 'ticks' && rh(r, this, 'value'),
      t.reverse
        ? (r.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      r
    )
  }
  configure() {
    const t = this.ticks
    let n = this.min,
      s = this.max
    if ((super.configure(), this.options.offset && t.length)) {
      const i = (s - n) / Math.max(t.length - 1, 1) / 2
      ;(n -= i), (s += i)
    }
    ;(this._startValue = n), (this._endValue = s), (this._valueRange = s - n)
  }
  getLabelForValue(t) {
    return nl(t, this.chart.options.locale, this.options.ticks.format)
  }
}
class pa extends Ao {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0)
    ;(this.min = Yt(t) ? t : 0),
      (this.max = Yt(n) ? n : 1),
      this.handleTickRangeOptions()
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      s = gn(this.options.ticks.minRotation),
      i = (t ? Math.sin(s) : Math.cos(s)) || 0.001,
      o = this._resolveTickFontOptions(0)
    return Math.ceil(n / Math.min(40, o.lineHeight / i))
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange
  }
}
rt(pa, 'id', 'linear'),
  rt(pa, 'defaults', { ticks: { callback: tr.formatters.numeric } })
const fi = e => Math.floor(pn(e)),
  Tn = (e, t) => Math.pow(10, fi(e) + t)
function ud(e) {
  return e / Math.pow(10, fi(e)) === 1
}
function dd(e, t, n) {
  const s = Math.pow(10, n),
    i = Math.floor(e / s)
  return Math.ceil(t / s) - i
}
function K2(e, t) {
  const n = t - e
  let s = fi(n)
  for (; dd(e, t, s) > 10; ) s++
  for (; dd(e, t, s) < 10; ) s--
  return Math.min(s, fi(e))
}
function Y2(e, { min: t, max: n }) {
  t = he(e.min, t)
  const s = [],
    i = fi(t)
  let o = K2(t, n),
    r = o < 0 ? Math.pow(10, Math.abs(o)) : 1
  const a = Math.pow(10, o),
    c = i > o ? Math.pow(10, i) : 0,
    l = Math.round((t - c) * r) / r,
    d = Math.floor((t - c) / a / 10) * a * 10
  let h = Math.floor((l - d) / Math.pow(10, o)),
    p = he(e.min, Math.round((c + d + h * Math.pow(10, o)) * r) / r)
  for (; p < n; )
    s.push({ value: p, major: ud(p), significand: h }),
      h >= 10 ? (h = h < 15 ? 15 : 20) : h++,
      h >= 20 && (o++, (h = 2), (r = o >= 0 ? 1 : r)),
      (p = Math.round((c + d + h * Math.pow(10, o)) * r) / r)
  const m = he(e.max, p)
  return s.push({ value: m, major: ud(m), significand: h }), s
}
class fd extends qn {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0)
  }
  parse(t, n) {
    const s = Ao.prototype.parse.apply(this, [t, n])
    if (s === 0) {
      this._zero = !0
      return
    }
    return Yt(s) && s > 0 ? s : null
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0)
    ;(this.min = Yt(t) ? Math.max(0, t) : null),
      (this.max = Yt(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this._zero &&
        this.min !== this._suggestedMin &&
        !Yt(this._userMin) &&
        (this.min = t === Tn(this.min, 0) ? Tn(this.min, -1) : Tn(this.min, 0)),
      this.handleTickRangeOptions()
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds()
    let s = this.min,
      i = this.max
    const o = a => (s = t ? s : a),
      r = a => (i = n ? i : a)
    s === i && (s <= 0 ? (o(1), r(10)) : (o(Tn(s, -1)), r(Tn(i, 1)))),
      s <= 0 && o(Tn(i, -1)),
      i <= 0 && r(Tn(s, 1)),
      (this.min = s),
      (this.max = i)
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      s = Y2(n, this)
    return (
      t.bounds === 'ticks' && rh(s, this, 'value'),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    )
  }
  getLabelForValue(t) {
    return t === void 0
      ? '0'
      : nl(t, this.chart.options.locale, this.options.ticks.format)
  }
  configure() {
    const t = this.min
    super.configure(),
      (this._startValue = pn(t)),
      (this._valueRange = pn(this.max) - pn(t))
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (pn(t) - this._startValue) / this._valueRange
          )
    )
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t)
    return Math.pow(10, this._startValue + n * this._valueRange)
  }
}
rt(fd, 'id', 'logarithmic'),
  rt(fd, 'defaults', {
    ticks: { callback: tr.formatters.logarithmic, major: { enabled: !0 } }
  })
function ga(e) {
  const t = e.ticks
  if (t.display && e.display) {
    const n = ee(t.backdropPadding)
    return ht(t.font && t.font.size, Ft.font.size) + n.height
  }
  return 0
}
function X2(e, t, n) {
  return (
    (n = Dt(n) ? n : [n]), { w: ex(e, t.string, n), h: n.length * t.lineHeight }
  )
}
function hd(e, t, n, s, i) {
  return e === s || e === i
    ? { start: t - n / 2, end: t + n / 2 }
    : e < s || e > i
    ? { start: t - n, end: t }
    : { start: t, end: t + n }
}
function J2(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom
    },
    n = Object.assign({}, t),
    s = [],
    i = [],
    o = e._pointLabels.length,
    r = e.options.pointLabels,
    a = r.centerPointLabels ? Vt / o : 0
  for (let c = 0; c < o; c++) {
    const l = r.setContext(e.getPointLabelContext(c))
    i[c] = l.padding
    const d = e.getPointPosition(c, e.drawingArea + i[c], a),
      h = jt(l.font),
      p = X2(e.ctx, h, e._pointLabels[c])
    s[c] = p
    const m = Pe(e.getIndexAngle(c) + a),
      b = Math.round(Za(m)),
      w = hd(b, d.x, p.w, 0, 180),
      x = hd(b, d.y, p.h, 90, 270)
    G2(n, t, m, w, x)
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    (e._pointLabelItems = t1(e, s, i))
}
function G2(e, t, n, s, i) {
  const o = Math.abs(Math.sin(n)),
    r = Math.abs(Math.cos(n))
  let a = 0,
    c = 0
  s.start < t.l
    ? ((a = (t.l - s.start) / o), (e.l = Math.min(e.l, t.l - a)))
    : s.end > t.r && ((a = (s.end - t.r) / o), (e.r = Math.max(e.r, t.r + a))),
    i.start < t.t
      ? ((c = (t.t - i.start) / r), (e.t = Math.min(e.t, t.t - c)))
      : i.end > t.b && ((c = (i.end - t.b) / r), (e.b = Math.max(e.b, t.b + c)))
}
function Z2(e, t, n) {
  const s = e.drawingArea,
    { extra: i, additionalAngle: o, padding: r, size: a } = n,
    c = e.getPointPosition(t, s + i + r, o),
    l = Math.round(Za(Pe(c.angle + de))),
    d = s1(c.y, a.h, l),
    h = e1(l),
    p = n1(c.x, a.w, h)
  return {
    visible: !0,
    x: c.x,
    y: d,
    textAlign: h,
    left: p,
    top: d,
    right: p + a.w,
    bottom: d + a.h
  }
}
function Q2(e, t) {
  if (!t) return !0
  const { left: n, top: s, right: i, bottom: o } = e
  return !(
    Je({ x: n, y: s }, t) ||
    Je({ x: n, y: o }, t) ||
    Je({ x: i, y: s }, t) ||
    Je({ x: i, y: o }, t)
  )
}
function t1(e, t, n) {
  const s = [],
    i = e._pointLabels.length,
    o = e.options,
    { centerPointLabels: r, display: a } = o.pointLabels,
    c = { extra: ga(o) / 2, additionalAngle: r ? Vt / i : 0 }
  let l
  for (let d = 0; d < i; d++) {
    ;(c.padding = n[d]), (c.size = t[d])
    const h = Z2(e, d, c)
    s.push(h), a === 'auto' && ((h.visible = Q2(h, l)), h.visible && (l = h))
  }
  return s
}
function e1(e) {
  return e === 0 || e === 180 ? 'center' : e < 180 ? 'left' : 'right'
}
function n1(e, t, n) {
  return n === 'right' ? (e -= t) : n === 'center' && (e -= t / 2), e
}
function s1(e, t, n) {
  return (
    n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
  )
}
function i1(e, t, n) {
  const { left: s, top: i, right: o, bottom: r } = n,
    { backdropColor: a } = t
  if (!At(a)) {
    const c = as(t.borderRadius),
      l = ee(t.backdropPadding)
    e.fillStyle = a
    const d = s - l.left,
      h = i - l.top,
      p = o - s + l.width,
      m = r - i + l.height
    Object.values(c).some(b => b !== 0)
      ? (e.beginPath(), So(e, { x: d, y: h, w: p, h: m, radius: c }), e.fill())
      : e.fillRect(d, h, p, m)
  }
}
function o1(e, t) {
  const {
    ctx: n,
    options: { pointLabels: s }
  } = e
  for (let i = t - 1; i >= 0; i--) {
    const o = e._pointLabelItems[i]
    if (!o.visible) continue
    const r = s.setContext(e.getPointLabelContext(i))
    i1(n, r, o)
    const a = jt(r.font),
      { x: c, y: l, textAlign: d } = o
    Vn(n, e._pointLabels[i], c, l + a.lineHeight / 2, a, {
      color: r.color,
      textAlign: d,
      textBaseline: 'middle'
    })
  }
}
function zh(e, t, n, s) {
  const { ctx: i } = e
  if (n) i.arc(e.xCenter, e.yCenter, t, 0, xe)
  else {
    let o = e.getPointPosition(0, t)
    i.moveTo(o.x, o.y)
    for (let r = 1; r < s; r++)
      (o = e.getPointPosition(r, t)), i.lineTo(o.x, o.y)
  }
}
function r1(e, t, n, s, i) {
  const o = e.ctx,
    r = t.circular,
    { color: a, lineWidth: c } = t
  ;(!r && !s) ||
    !a ||
    !c ||
    n < 0 ||
    (o.save(),
    (o.strokeStyle = a),
    (o.lineWidth = c),
    o.setLineDash(i.dash),
    (o.lineDashOffset = i.dashOffset),
    o.beginPath(),
    zh(e, n, r, s),
    o.closePath(),
    o.stroke(),
    o.restore())
}
function a1(e, t, n) {
  return vn(e, { label: n, index: t, type: 'pointLabel' })
}
class Ui extends Ao {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = [])
  }
  setDimensions() {
    const t = (this._padding = ee(ga(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      s = (this.height = this.maxHeight - t.height)
    ;(this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + s / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, s) / 2))
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1)
    ;(this.min = Yt(t) && !isNaN(t) ? t : 0),
      (this.max = Yt(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions()
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / ga(this.options))
  }
  generateTickLabels(t) {
    Ao.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, s) => {
          const i = Pt(this.options.pointLabels.callback, [n, s], this)
          return i || i === 0 ? i : ''
        })
        .filter((n, s) => this.chart.getDataVisibility(s)))
  }
  fit() {
    const t = this.options
    t.display && t.pointLabels.display
      ? J2(this)
      : this.setCenterPoint(0, 0, 0, 0)
  }
  setCenterPoint(t, n, s, i) {
    ;(this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((s - i) / 2)),
      (this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, n, s, i)))
  }
  getIndexAngle(t) {
    const n = xe / (this._pointLabels.length || 1),
      s = this.options.startAngle || 0
    return Pe(t * n + gn(s))
  }
  getDistanceFromCenterForValue(t) {
    if (At(t)) return NaN
    const n = this.drawingArea / (this.max - this.min)
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n
  }
  getValueForDistanceFromCenter(t) {
    if (At(t)) return NaN
    const n = t / (this.drawingArea / (this.max - this.min))
    return this.options.reverse ? this.max - n : this.min + n
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || []
    if (t >= 0 && t < n.length) {
      const s = n[t]
      return a1(this.getContext(), t, s)
    }
  }
  getPointPosition(t, n, s = 0) {
    const i = this.getIndexAngle(t) - de + s
    return {
      x: Math.cos(i) * n + this.xCenter,
      y: Math.sin(i) * n + this.yCenter,
      angle: i
    }
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n))
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue())
  }
  getPointLabelPosition(t) {
    const { left: n, top: s, right: i, bottom: o } = this._pointLabelItems[t]
    return { left: n, top: s, right: i, bottom: o }
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n }
    } = this.options
    if (t) {
      const s = this.ctx
      s.save(),
        s.beginPath(),
        zh(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          n,
          this._pointLabels.length
        ),
        s.closePath(),
        (s.fillStyle = t),
        s.fill(),
        s.restore()
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: s, grid: i, border: o } = n,
      r = this._pointLabels.length
    let a, c, l
    if (
      (n.pointLabels.display && o1(this, r),
      i.display &&
        this.ticks.forEach((d, h) => {
          if (h !== 0) {
            c = this.getDistanceFromCenterForValue(d.value)
            const p = this.getContext(h),
              m = i.setContext(p),
              b = o.setContext(p)
            r1(this, m, c, r, b)
          }
        }),
      s.display)
    ) {
      for (t.save(), a = r - 1; a >= 0; a--) {
        const d = s.setContext(this.getPointLabelContext(a)),
          { color: h, lineWidth: p } = d
        !p ||
          !h ||
          ((t.lineWidth = p),
          (t.strokeStyle = h),
          t.setLineDash(d.borderDash),
          (t.lineDashOffset = d.borderDashOffset),
          (c = this.getDistanceFromCenterForValue(
            n.ticks.reverse ? this.min : this.max
          )),
          (l = this.getPointPosition(a, c)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(l.x, l.y),
          t.stroke())
      }
      t.restore()
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      s = n.ticks
    if (!s.display) return
    const i = this.getIndexAngle(0)
    let o, r
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(i),
      (t.textAlign = 'center'),
      (t.textBaseline = 'middle'),
      this.ticks.forEach((a, c) => {
        if (c === 0 && !n.reverse) return
        const l = s.setContext(this.getContext(c)),
          d = jt(l.font)
        if (
          ((o = this.getDistanceFromCenterForValue(this.ticks[c].value)),
          l.showLabelBackdrop)
        ) {
          ;(t.font = d.string),
            (r = t.measureText(a.label).width),
            (t.fillStyle = l.backdropColor)
          const h = ee(l.backdropPadding)
          t.fillRect(
            -r / 2 - h.left,
            -o - d.size / 2 - h.top,
            r + h.width,
            d.size + h.height
          )
        }
        Vn(t, a.label, 0, -o, d, { color: l.color })
      }),
      t.restore()
  }
  drawTitle() {}
}
rt(Ui, 'id', 'radialLinear'),
  rt(Ui, 'defaults', {
    display: !0,
    animate: !0,
    position: 'chartArea',
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: { circular: !1 },
    startAngle: 0,
    ticks: { showLabelBackdrop: !0, callback: tr.formatters.numeric },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: { size: 10 },
      callback(t) {
        return t
      },
      padding: 5,
      centerPointLabels: !1
    }
  }),
  rt(Ui, 'defaultRoutes', {
    'angleLines.color': 'borderColor',
    'pointLabels.color': 'color',
    'ticks.color': 'color'
  }),
  rt(Ui, 'descriptors', { angleLines: { _fallback: 'grid' } })
const sr = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 }
  },
  ue = Object.keys(sr)
function l1(e, t) {
  return e - t
}
function pd(e, t) {
  if (At(t)) return null
  const n = e._adapter,
    { parser: s, round: i, isoWeekday: o } = e._parseOpts
  let r = t
  return (
    typeof s == 'function' && (r = s(r)),
    Yt(r) || (r = typeof s == 'string' ? n.parse(r, s) : n.parse(r)),
    r === null
      ? null
      : (i &&
          (r =
            i === 'week' && (ui(o) || o === !0)
              ? n.startOf(r, 'isoWeek', o)
              : n.startOf(r, i)),
        +r)
  )
}
function gd(e, t, n, s) {
  const i = ue.length
  for (let o = ue.indexOf(e); o < i - 1; ++o) {
    const r = sr[ue[o]],
      a = r.steps ? r.steps : Number.MAX_SAFE_INTEGER
    if (r.common && Math.ceil((n - t) / (a * r.size)) <= s) return ue[o]
  }
  return ue[i - 1]
}
function c1(e, t, n, s, i) {
  for (let o = ue.length - 1; o >= ue.indexOf(n); o--) {
    const r = ue[o]
    if (sr[r].common && e._adapter.diff(i, s, r) >= t - 1) return r
  }
  return ue[n ? ue.indexOf(n) : 0]
}
function u1(e) {
  for (let t = ue.indexOf(e) + 1, n = ue.length; t < n; ++t)
    if (sr[ue[t]].common) return ue[t]
}
function md(e, t, n) {
  if (!n) e[t] = !0
  else if (n.length) {
    const { lo: s, hi: i } = Qa(n, t),
      o = n[s] >= t ? n[s] : n[i]
    e[o] = !0
  }
}
function d1(e, t, n, s) {
  const i = e._adapter,
    o = +i.startOf(t[0].value, s),
    r = t[t.length - 1].value
  let a, c
  for (a = o; a <= r; a = +i.add(a, 1, s))
    (c = n[a]), c >= 0 && (t[c].major = !0)
  return t
}
function bd(e, t, n) {
  const s = [],
    i = {},
    o = t.length
  let r, a
  for (r = 0; r < o; ++r)
    (a = t[r]), (i[a] = r), s.push({ value: a, major: !1 })
  return o === 0 || !n ? s : d1(e, s, i, n)
}
class Oo extends qn {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = 'day'),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0)
  }
  init(t, n = {}) {
    const s = t.time || (t.time = {}),
      i = (this._adapter = new lv._date(t.adapters.date))
    i.init(n),
      Ys(s.displayFormats, i.formats()),
      (this._parseOpts = {
        parser: s.parser,
        round: s.round,
        isoWeekday: s.isoWeekday
      }),
      super.init(t),
      (this._normalized = n.normalized)
  }
  parse(t, n) {
    return t === void 0 ? null : pd(this, t)
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] })
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      s = t.time.unit || 'day'
    let { min: i, max: o, minDefined: r, maxDefined: a } = this.getUserBounds()
    function c(l) {
      !r && !isNaN(l.min) && (i = Math.min(i, l.min)),
        !a && !isNaN(l.max) && (o = Math.max(o, l.max))
    }
    ;(!r || !a) &&
      (c(this._getLabelBounds()),
      (t.bounds !== 'ticks' || t.ticks.source !== 'labels') &&
        c(this.getMinMax(!1))),
      (i = Yt(i) && !isNaN(i) ? i : +n.startOf(Date.now(), s)),
      (o = Yt(o) && !isNaN(o) ? o : +n.endOf(Date.now(), s) + 1),
      (this.min = Math.min(i, o - 1)),
      (this.max = Math.max(i + 1, o))
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps()
    let n = Number.POSITIVE_INFINITY,
      s = Number.NEGATIVE_INFINITY
    return t.length && ((n = t[0]), (s = t[t.length - 1])), { min: n, max: s }
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      s = t.ticks,
      i = s.source === 'labels' ? this.getLabelTimestamps() : this._generate()
    t.bounds === 'ticks' &&
      i.length &&
      ((this.min = this._userMin || i[0]),
      (this.max = this._userMax || i[i.length - 1]))
    const o = this.min,
      r = this.max,
      a = z_(i, o, r)
    return (
      (this._unit =
        n.unit ||
        (s.autoSkip
          ? gd(n.minUnit, this.min, this.max, this._getLabelCapacity(o))
          : c1(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !s.major.enabled || this._unit === 'year' ? void 0 : u1(this._unit)),
      this.initOffsets(i),
      t.reverse && a.reverse(),
      bd(this, a, this._majorUnit)
    )
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map(t => +t.value))
  }
  initOffsets(t = []) {
    let n = 0,
      s = 0,
      i,
      o
    this.options.offset &&
      t.length &&
      ((i = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - i)
        : (n = (this.getDecimalForValue(t[1]) - i) / 2),
      (o = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (s = o)
        : (s = (o - this.getDecimalForValue(t[t.length - 2])) / 2))
    const r = t.length < 3 ? 0.5 : 0.25
    ;(n = be(n, 0, r)),
      (s = be(s, 0, r)),
      (this._offsets = { start: n, end: s, factor: 1 / (n + 1 + s) })
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      s = this.max,
      i = this.options,
      o = i.time,
      r = o.unit || gd(o.minUnit, n, s, this._getLabelCapacity(n)),
      a = ht(i.ticks.stepSize, 1),
      c = r === 'week' ? o.isoWeekday : !1,
      l = ui(c) || c === !0,
      d = {}
    let h = n,
      p,
      m
    if (
      (l && (h = +t.startOf(h, 'isoWeek', c)),
      (h = +t.startOf(h, l ? 'day' : r)),
      t.diff(s, n, r) > 1e5 * a)
    )
      throw new Error(
        n + ' and ' + s + ' are too far apart with stepSize of ' + a + ' ' + r
      )
    const b = i.ticks.source === 'data' && this.getDataTimestamps()
    for (p = h, m = 0; p < s; p = +t.add(p, a, r), m++) md(d, p, b)
    return (
      (p === s || i.bounds === 'ticks' || m === 1) && md(d, p, b),
      Object.keys(d)
        .sort((w, x) => w - x)
        .map(w => +w)
    )
  }
  getLabelForValue(t) {
    const n = this._adapter,
      s = this.options.time
    return s.tooltipFormat
      ? n.format(t, s.tooltipFormat)
      : n.format(t, s.displayFormats.datetime)
  }
  format(t, n) {
    const i = this.options.time.displayFormats,
      o = this._unit,
      r = n || i[o]
    return this._adapter.format(t, r)
  }
  _tickFormatFunction(t, n, s, i) {
    const o = this.options,
      r = o.ticks.callback
    if (r) return Pt(r, [t, n, s], this)
    const a = o.time.displayFormats,
      c = this._unit,
      l = this._majorUnit,
      d = c && a[c],
      h = l && a[l],
      p = s[n],
      m = l && h && p && p.major
    return this._adapter.format(t, i || (m ? h : d))
  }
  generateTickLabels(t) {
    let n, s, i
    for (n = 0, s = t.length; n < s; ++n)
      (i = t[n]), (i.label = this._tickFormatFunction(i.value, n, t))
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min)
  }
  getPixelForValue(t) {
    const n = this._offsets,
      s = this.getDecimalForValue(t)
    return this.getPixelForDecimal((n.start + s) * n.factor)
  }
  getValueForPixel(t) {
    const n = this._offsets,
      s = this.getDecimalForPixel(t) / n.factor - n.end
    return this.min + s * (this.max - this.min)
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      s = this.ctx.measureText(t).width,
      i = gn(this.isHorizontal() ? n.maxRotation : n.minRotation),
      o = Math.cos(i),
      r = Math.sin(i),
      a = this._resolveTickFontOptions(0).size
    return { w: s * o + a * r, h: s * r + a * o }
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      s = n.displayFormats,
      i = s[n.unit] || s.millisecond,
      o = this._tickFormatFunction(t, 0, bd(this, [t], this._majorUnit), i),
      r = this._getLabelSize(o),
      a =
        Math.floor(this.isHorizontal() ? this.width / r.w : this.height / r.h) -
        1
    return a > 0 ? a : 1
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      s
    if (t.length) return t
    const i = this.getMatchingVisibleMetas()
    if (this._normalized && i.length)
      return (this._cache.data = i[0].controller.getAllParsedValues(this))
    for (n = 0, s = i.length; n < s; ++n)
      t = t.concat(i[n].controller.getAllParsedValues(this))
    return (this._cache.data = this.normalize(t))
  }
  getLabelTimestamps() {
    const t = this._cache.labels || []
    let n, s
    if (t.length) return t
    const i = this.getLabels()
    for (n = 0, s = i.length; n < s; ++n) t.push(pd(this, i[n]))
    return (this._cache.labels = this._normalized ? t : this.normalize(t))
  }
  normalize(t) {
    return H_(t.sort(l1))
  }
}
rt(Oo, 'id', 'time'),
  rt(Oo, 'defaults', {
    bounds: 'data',
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: 'millisecond',
      displayFormats: {}
    },
    ticks: { source: 'auto', callback: !1, major: { enabled: !1 } }
  })
function qi(e, t, n) {
  let s = 0,
    i = e.length - 1,
    o,
    r,
    a,
    c
  n
    ? (t >= e[s].pos && t <= e[i].pos && ({ lo: s, hi: i } = zn(e, 'pos', t)),
      ({ pos: o, time: a } = e[s]),
      ({ pos: r, time: c } = e[i]))
    : (t >= e[s].time &&
        t <= e[i].time &&
        ({ lo: s, hi: i } = zn(e, 'time', t)),
      ({ time: o, pos: a } = e[s]),
      ({ time: r, pos: c } = e[i]))
  const l = r - o
  return l ? a + ((c - a) * (t - o)) / l : a
}
class wd extends Oo {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0)
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t))
    ;(this._minPos = qi(n, this.min)),
      (this._tableRange = qi(n, this.max) - this._minPos),
      super.initOffsets(t)
  }
  buildLookupTable(t) {
    const { min: n, max: s } = this,
      i = [],
      o = []
    let r, a, c, l, d
    for (r = 0, a = t.length; r < a; ++r)
      (l = t[r]), l >= n && l <= s && i.push(l)
    if (i.length < 2)
      return [
        { time: n, pos: 0 },
        { time: s, pos: 1 }
      ]
    for (r = 0, a = i.length; r < a; ++r)
      (d = i[r + 1]),
        (c = i[r - 1]),
        (l = i[r]),
        Math.round((d + c) / 2) !== l && o.push({ time: l, pos: r / (a - 1) })
    return o
  }
  _getTimestampsForTable() {
    let t = this._cache.all || []
    if (t.length) return t
    const n = this.getDataTimestamps(),
      s = this.getLabelTimestamps()
    return (
      n.length && s.length
        ? (t = this.normalize(n.concat(s)))
        : (t = n.length ? n : s),
      (t = this._cache.all = t),
      t
    )
  }
  getDecimalForValue(t) {
    return (qi(this._table, t) - this._minPos) / this._tableRange
  }
  getValueForPixel(t) {
    const n = this._offsets,
      s = this.getDecimalForPixel(t) / n.factor - n.end
    return qi(this._table, s * this._tableRange + this._minPos, !0)
  }
}
rt(wd, 'id', 'timeseries'), rt(wd, 'defaults', Oo.defaults)
const $h = {
    data: { type: Object, required: !0 },
    options: { type: Object, default: () => ({}) },
    plugins: { type: Array, default: () => [] },
    datasetIdKey: { type: String, default: 'label' },
    updateMode: { type: String, default: void 0 }
  },
  f1 = { type: { type: String, required: !0 }, ...$h },
  h1 =
    yf[0] === '2'
      ? (e, t) => Object.assign(e, { attrs: t })
      : (e, t) => Object.assign(e, t)
function ts(e) {
  return Fo(e) ? pt(e) : e
}
function p1(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e
  return Fo(t) ? new Proxy(e, {}) : e
}
function g1(e, t) {
  const n = e.options
  n && t && Object.assign(n, t)
}
function Hh(e, t) {
  e.labels = t
}
function jh(e, t, n) {
  const s = []
  e.datasets = t.map(i => {
    const o = e.datasets.find(r => r[n] === i[n])
    return !o || !i.data || s.includes(o)
      ? { ...i }
      : (s.push(o), Object.assign(o, i), o)
  })
}
function m1(e, t) {
  const n = { labels: [], datasets: [] }
  return Hh(n, e.labels), jh(n, e.datasets, t), n
}
const b1 = zo({
  props: f1,
  setup(e, t) {
    let { expose: n } = t
    const s = Rt(null),
      i = Ta(null)
    n({ chart: i })
    const o = () => {
        if (!s.value) return
        const { type: c, data: l, options: d, plugins: h, datasetIdKey: p } = e,
          m = m1(l, p),
          b = p1(m, l)
        i.value = new nr(s.value, {
          type: c,
          data: b,
          options: { ...d },
          plugins: h
        })
      },
      r = () => {
        const c = pt(i.value)
        c && (c.destroy(), (i.value = null))
      },
      a = c => {
        c.update(e.updateMode)
      }
    return (
      jo(o),
      Da(r),
      js(
        [() => e.options, () => e.data],
        (c, l) => {
          let [d, h] = c,
            [p, m] = l
          const b = pt(i.value)
          if (!b) return
          let w = !1
          if (d) {
            const x = ts(d),
              C = ts(p)
            x && x !== C && (g1(b, x), (w = !0))
          }
          if (h) {
            const x = ts(h.labels),
              C = ts(m.labels),
              S = ts(h.datasets),
              D = ts(m.datasets)
            x !== C && (Hh(b.config.data, x), (w = !0)),
              S && S !== D && (jh(b.config.data, S, e.datasetIdKey), (w = !0))
          }
          w && a(b)
        },
        { deep: !0 }
      ),
      () => pi('canvas', { ref: s })
    )
  }
})
function w1(e, t) {
  return (
    nr.register(t),
    zo({
      props: $h,
      setup(n, s) {
        let { expose: i } = s
        const o = Ta(null),
          r = a => {
            o.value = a == null ? void 0 : a.chart
          }
        return i({ chart: o }), () => pi(b1, h1({ ref: r }, { type: e, ...n }))
      }
    })
  )
}
const y1 = w1('line', oo)
nr.register(ha, pa, lo, $s, D2, j2, L2)
const _1 = {
    name: 'Chart',
    components: { Line: y1 },
    props: { dataForChart: { type: Object, required: !0 } },
    data() {
      return {
        chartId: 'my-chart-id',
        type: 'line',
        chartData: {
          labels: this.dataForChart.labels,
          datasets: [
            {
              label:
                this.dataForChart.labels.length > 8
                  ? 'Daily Temperature (°F)'
                  : 'Weekly Temperature (°F)',
              borderColor: 'lightBlue',
              backgroundColor: 'lightBlue',
              data: this.dataForChart.datasets[0].data
            }
          ]
        },
        chartOptions: { responsive: !0, maintainAspectRatio: !1 }
      }
    }
  },
  Wh = (e, t) => {
    const n = e.__vccOpts || e
    for (const [s, i] of t) n[s] = i
    return n
  },
  x1 = { class: 'chart-container' }
function v1(e, t, n, s, i, o) {
  const r = Ob('Line')
  return (
    ft(),
    gt('div', x1, [
      Ot(r, { data: i.chartData, options: i.chartOptions }, null, 8, [
        'data',
        'options'
      ])
    ])
  )
}
const C1 = Wh(_1, [['render', v1]]),
  k1 = {},
  S1 = { class: 'preloader', style: { opacity: '1' } },
  P1 = {
    version: '1.1',
    id: 'sun',
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    x: '0px',
    y: '0px',
    width: '10px',
    height: '10px',
    viewBox: '0 0 10 10',
    'enable-background': 'new 0 0 10 10',
    'xml:space': 'preserve',
    style: { opacity: '1', 'margin-left': '0px', 'margin-top': '0px' }
  },
  E1 = Na(
    '<g><path fill="none" d="M6.942,3.876c-0.4-0.692-1.146-1.123-1.946-1.123c-0.392,0-0.779,0.104-1.121,0.301c-1.072,0.619-1.44,1.994-0.821,3.067C3.454,6.815,4.2,7.245,5,7.245c0.392,0,0.779-0.104,1.121-0.301C6.64,6.644,7.013,6.159,7.167,5.581C7.321,5,7.243,4.396,6.942,3.876z M6.88,5.505C6.745,6.007,6.423,6.427,5.973,6.688C5.676,6.858,5.34,6.948,5,6.948c-0.695,0-1.343-0.373-1.69-0.975C2.774,5.043,3.093,3.849,4.024,3.312C4.32,3.14,4.656,3.05,4.996,3.05c0.695,0,1.342,0.374,1.69,0.975C6.946,4.476,7.015,5,6.88,5.505z"></path><path fill="none" d="M8.759,2.828C8.718,2.757,8.626,2.732,8.556,2.774L7.345,3.473c-0.07,0.041-0.094,0.132-0.053,0.202C7.319,3.723,7.368,3.75,7.419,3.75c0.025,0,0.053-0.007,0.074-0.02l1.211-0.699C8.774,2.989,8.8,2.899,8.759,2.828z"></path><path fill="none" d="M1.238,7.171c0.027,0.047,0.077,0.074,0.128,0.074c0.025,0,0.051-0.008,0.074-0.02l1.211-0.699c0.071-0.041,0.095-0.133,0.054-0.203S2.574,6.228,2.503,6.269l-1.21,0.699C1.221,7.009,1.197,7.101,1.238,7.171z"></path><path fill="none" d="M6.396,2.726c0.052,0,0.102-0.026,0.13-0.075l0.349-0.605C6.915,1.976,6.89,1.885,6.819,1.844c-0.07-0.042-0.162-0.017-0.202,0.054L6.269,2.503C6.228,2.574,6.251,2.666,6.322,2.706C6.346,2.719,6.371,2.726,6.396,2.726z"></path><path fill="none" d="M3.472,7.347L3.123,7.952c-0.041,0.07-0.017,0.162,0.054,0.203C3.2,8.169,3.226,8.175,3.25,8.175c0.052,0,0.102-0.027,0.129-0.074l0.349-0.605c0.041-0.07,0.017-0.16-0.054-0.203C3.603,7.251,3.513,7.276,3.472,7.347z"></path><path fill="none" d="M3.601,2.726c0.025,0,0.051-0.007,0.074-0.02C3.746,2.666,3.77,2.574,3.729,2.503l-0.35-0.604C3.338,1.828,3.248,1.804,3.177,1.844C3.106,1.886,3.082,1.976,3.123,2.047l0.35,0.604C3.5,2.7,3.549,2.726,3.601,2.726z"></path><path fill="none" d="M6.321,7.292c-0.07,0.043-0.094,0.133-0.054,0.203l0.351,0.605c0.026,0.047,0.076,0.074,0.127,0.074c0.025,0,0.051-0.006,0.074-0.02c0.072-0.041,0.096-0.133,0.055-0.203l-0.35-0.605C6.483,7.276,6.393,7.253,6.321,7.292z"></path><path fill="none" d="M2.202,5.146c0.082,0,0.149-0.065,0.149-0.147S2.284,4.851,2.202,4.851H1.503c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147H2.202z"></path><path fill="none" d="M8.493,4.851H7.794c-0.082,0-0.148,0.066-0.148,0.148s0.066,0.147,0.148,0.147l0,0h0.699c0.082,0,0.148-0.065,0.148-0.147S8.575,4.851,8.493,4.851L8.493,4.851z"></path><path fill="none" d="M5.146,2.203V0.805c0-0.082-0.066-0.148-0.148-0.148c-0.082,0-0.148,0.066-0.148,0.148v1.398c0,0.082,0.066,0.149,0.148,0.149C5.08,2.352,5.146,2.285,5.146,2.203z"></path><path fill="none" d="M4.85,7.796v1.396c0,0.082,0.066,0.15,0.148,0.15c0.082,0,0.148-0.068,0.148-0.15V7.796c0-0.082-0.066-0.148-0.148-0.148C4.917,7.647,4.85,7.714,4.85,7.796z"></path><path fill="none" d="M2.651,3.473L1.44,2.774C1.369,2.732,1.279,2.757,1.238,2.828C1.197,2.899,1.221,2.989,1.292,3.031l1.21,0.699c0.023,0.013,0.049,0.02,0.074,0.02c0.051,0,0.101-0.026,0.129-0.075C2.747,3.604,2.722,3.514,2.651,3.473z"></path><path fill="none" d="M8.704,6.968L7.493,6.269c-0.07-0.041-0.162-0.016-0.201,0.055c-0.041,0.07-0.018,0.162,0.053,0.203l1.211,0.699c0.023,0.012,0.049,0.02,0.074,0.02c0.051,0,0.102-0.027,0.129-0.074C8.8,7.101,8.776,7.009,8.704,6.968z"></path></g>',
    1
  ),
  A1 = [E1],
  O1 = nt(
    'svg',
    {
      version: '1.1',
      id: 'cloud',
      xmlns: 'http://www.w3.org/2000/svg',
      'xmlns:xlink': 'http://www.w3.org/1999/xlink',
      x: '0px',
      y: '0px',
      width: '10px',
      height: '10px',
      viewBox: '0 0 10 10',
      'enable-background': 'new 0 0 10 10',
      'xml:space': 'preserve'
    },
    [
      nt('path', {
        fill: 'none',
        d: 'M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23c-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z'
      })
    ],
    -1
  ),
  M1 = Na(
    '<div class="rain"><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span><span class="drop"></span></div>',
    1
  ),
  T1 = nt(
    'div',
    { class: 'preloader__text' },
    [ds(' LOADING DATA FOR YOU... '), nt('br'), ds(' ONE SEC ')],
    -1
  )
function L1(e, t) {
  return (
    ft(),
    gt('div', S1, [nt('div', null, [(ft(), gt('svg', P1, A1)), O1, M1]), T1])
  )
}
const yd = Wh(k1, [['render', L1]])
var ln =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
    ? window
    : typeof global < 'u'
    ? global
    : typeof self < 'u'
    ? self
    : {}
function R1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var Vh = { exports: {} }
/*!
 * sweetalert2 v11.7.18
 * Released under the MIT License.
 */ ;(function (e, t) {
  ;(function (n, s) {
    e.exports = s()
  })(ln, function () {
    const s = {},
      i = () => {
        s.previousActiveElement instanceof HTMLElement
          ? (s.previousActiveElement.focus(), (s.previousActiveElement = null))
          : document.body && document.body.focus()
      },
      o = u =>
        new Promise(f => {
          if (!u) return f()
          const g = window.scrollX,
            y = window.scrollY
          ;(s.restoreFocusTimeout = setTimeout(() => {
            i(), f()
          }, 100)),
            window.scrollTo(g, y)
        })
    var r = {
      promise: new WeakMap(),
      innerParams: new WeakMap(),
      domCache: new WeakMap()
    }
    const a = 'swal2-',
      l = [
        'container',
        'shown',
        'height-auto',
        'iosfix',
        'popup',
        'modal',
        'no-backdrop',
        'no-transition',
        'toast',
        'toast-shown',
        'show',
        'hide',
        'close',
        'title',
        'html-container',
        'actions',
        'confirm',
        'deny',
        'cancel',
        'default-outline',
        'footer',
        'icon',
        'icon-content',
        'image',
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'label',
        'textarea',
        'inputerror',
        'input-label',
        'validation-message',
        'progress-steps',
        'active-progress-step',
        'progress-step',
        'progress-step-line',
        'loader',
        'loading',
        'styled',
        'top',
        'top-start',
        'top-end',
        'top-left',
        'top-right',
        'center',
        'center-start',
        'center-end',
        'center-left',
        'center-right',
        'bottom',
        'bottom-start',
        'bottom-end',
        'bottom-left',
        'bottom-right',
        'grow-row',
        'grow-column',
        'grow-fullscreen',
        'rtl',
        'timer-progress-bar',
        'timer-progress-bar-container',
        'scrollbar-measure',
        'icon-success',
        'icon-warning',
        'icon-info',
        'icon-question',
        'icon-error'
      ].reduce((u, f) => ((u[f] = a + f), u), {}),
      h = ['success', 'warning', 'info', 'question', 'error'].reduce(
        (u, f) => ((u[f] = a + f), u),
        {}
      ),
      p = 'SweetAlert2:',
      m = u => u.charAt(0).toUpperCase() + u.slice(1),
      b = u => {
        console.warn(`${p} ${typeof u == 'object' ? u.join(' ') : u}`)
      },
      w = u => {
        console.error(`${p} ${u}`)
      },
      x = [],
      C = u => {
        x.includes(u) || (x.push(u), b(u))
      },
      S = (u, f) => {
        C(
          `"${u}" is deprecated and will be removed in the next major release. Please use "${f}" instead.`
        )
      },
      D = u => (typeof u == 'function' ? u() : u),
      A = u => u && typeof u.toPromise == 'function',
      L = u => (A(u) ? u.toPromise() : Promise.resolve(u)),
      j = u => u && Promise.resolve(u) === u,
      z = () => document.body.querySelector(`.${l.container}`),
      T = u => {
        const f = z()
        return f ? f.querySelector(u) : null
      },
      W = u => T(`.${u}`),
      $ = () => W(l.popup),
      G = () => W(l.icon),
      I = () => W(l['icon-content']),
      q = () => W(l.title),
      Y = () => W(l['html-container']),
      ut = () => W(l.image),
      at = () => W(l['progress-steps']),
      it = () => W(l['validation-message']),
      et = () => T(`.${l.actions} .${l.confirm}`),
      It = () => T(`.${l.actions} .${l.cancel}`),
      Tt = () => T(`.${l.actions} .${l.deny}`),
      Xt = () => W(l['input-label']),
      kt = () => T(`.${l.loader}`),
      Ut = () => W(l.actions),
      ne = () => W(l.footer),
      se = () => W(l['timer-progress-bar']),
      St = () => W(l.close),
      R = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,
      J = () => {
        const u = $()
        if (!u) return []
        const f = u.querySelectorAll(
            '[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'
          ),
          g = Array.from(f).sort((tt, xt) => {
            const Ht = parseInt(tt.getAttribute('tabindex') || '0'),
              zt = parseInt(xt.getAttribute('tabindex') || '0')
            return Ht > zt ? 1 : Ht < zt ? -1 : 0
          }),
          y = u.querySelectorAll(R),
          E = Array.from(y).filter(tt => tt.getAttribute('tabindex') !== '-1')
        return [...new Set(g.concat(E))].filter(tt => dt(tt))
      },
      V = () =>
        v(document.body, l.shown) &&
        !v(document.body, l['toast-shown']) &&
        !v(document.body, l['no-backdrop']),
      Q = () => {
        const u = $()
        return u ? v(u, l.toast) : !1
      },
      wt = () => {
        const u = $()
        return u ? u.hasAttribute('data-loading') : !1
      },
      _ = (u, f) => {
        if (((u.textContent = ''), f)) {
          const y = new DOMParser().parseFromString(f, 'text/html')
          Array.from(y.querySelector('head').childNodes).forEach(E => {
            u.appendChild(E)
          }),
            Array.from(y.querySelector('body').childNodes).forEach(E => {
              E instanceof HTMLVideoElement || E instanceof HTMLAudioElement
                ? u.appendChild(E.cloneNode(!0))
                : u.appendChild(E)
            })
        }
      },
      v = (u, f) => {
        if (!f) return !1
        const g = f.split(/\s+/)
        for (let y = 0; y < g.length; y++)
          if (!u.classList.contains(g[y])) return !1
        return !0
      },
      k = (u, f) => {
        Array.from(u.classList).forEach(g => {
          !Object.values(l).includes(g) &&
            !Object.values(h).includes(g) &&
            !Object.values(f.showClass).includes(g) &&
            u.classList.remove(g)
        })
      },
      P = (u, f, g) => {
        if ((k(u, f), f.customClass && f.customClass[g])) {
          if (
            typeof f.customClass[g] != 'string' &&
            !f.customClass[g].forEach
          ) {
            b(
              `Invalid type of customClass.${g}! Expected string or iterable object, got "${typeof f
                .customClass[g]}"`
            )
            return
          }
          O(u, f.customClass[g])
        }
      },
      F = (u, f) => {
        if (!f) return null
        switch (f) {
          case 'select':
          case 'textarea':
          case 'file':
            return u.querySelector(`.${l.popup} > .${l[f]}`)
          case 'checkbox':
            return u.querySelector(`.${l.popup} > .${l.checkbox} input`)
          case 'radio':
            return (
              u.querySelector(`.${l.popup} > .${l.radio} input:checked`) ||
              u.querySelector(`.${l.popup} > .${l.radio} input:first-child`)
            )
          case 'range':
            return u.querySelector(`.${l.popup} > .${l.range} input`)
          default:
            return u.querySelector(`.${l.popup} > .${l.input}`)
        }
      },
      N = u => {
        if ((u.focus(), u.type !== 'file')) {
          const f = u.value
          ;(u.value = ''), (u.value = f)
        }
      },
      K = (u, f, g) => {
        !u ||
          !f ||
          (typeof f == 'string' && (f = f.split(/\s+/).filter(Boolean)),
          f.forEach(y => {
            Array.isArray(u)
              ? u.forEach(E => {
                  g ? E.classList.add(y) : E.classList.remove(y)
                })
              : g
              ? u.classList.add(y)
              : u.classList.remove(y)
          }))
      },
      O = (u, f) => {
        K(u, f, !0)
      },
      H = (u, f) => {
        K(u, f, !1)
      },
      B = (u, f) => {
        const g = Array.from(u.children)
        for (let y = 0; y < g.length; y++) {
          const E = g[y]
          if (E instanceof HTMLElement && v(E, f)) return E
        }
      },
      Z = (u, f, g) => {
        g === `${parseInt(g)}` && (g = parseInt(g)),
          g || parseInt(g) === 0
            ? (u.style[f] = typeof g == 'number' ? `${g}px` : g)
            : u.style.removeProperty(f)
      },
      U = function (u) {
        let f =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'flex'
        u && (u.style.display = f)
      },
      X = u => {
        u && (u.style.display = 'none')
      },
      ot = (u, f, g, y) => {
        const E = u.querySelector(f)
        E && (E.style[g] = y)
      },
      lt = function (u, f) {
        let g =
          arguments.length > 2 && arguments[2] !== void 0
            ? arguments[2]
            : 'flex'
        f ? U(u, g) : X(u)
      },
      dt = u =>
        !!(u && (u.offsetWidth || u.offsetHeight || u.getClientRects().length)),
      _t = () => !dt(et()) && !dt(Tt()) && !dt(It()),
      Lt = u => u.scrollHeight > u.clientHeight,
      re = u => {
        const f = window.getComputedStyle(u),
          g = parseFloat(f.getPropertyValue('animation-duration') || '0'),
          y = parseFloat(f.getPropertyValue('transition-duration') || '0')
        return g > 0 || y > 0
      },
      De = function (u) {
        let f =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
        const g = se()
        dt(g) &&
          (f && ((g.style.transition = 'none'), (g.style.width = '100%')),
          setTimeout(() => {
            ;(g.style.transition = `width ${u / 1e3}s linear`),
              (g.style.width = '0%')
          }, 10))
      },
      yi = () => {
        const u = se(),
          f = parseInt(window.getComputedStyle(u).width)
        u.style.removeProperty('transition'), (u.style.width = '100%')
        const g = parseInt(window.getComputedStyle(u).width),
          y = (f / g) * 100
        u.style.width = `${y}%`
      },
      tn = () => typeof window > 'u' || typeof document > 'u',
      _i = `
 <div aria-labelledby="${l.title}" aria-describedby="${l['html-container']}" class="${l.popup}" tabindex="-1">
   <button type="button" class="${l.close}"></button>
   <ul class="${l['progress-steps']}"></ul>
   <div class="${l.icon}"></div>
   <img class="${l.image}" />
   <h2 class="${l.title}" id="${l.title}"></h2>
   <div class="${l['html-container']}" id="${l['html-container']}"></div>
   <input class="${l.input}" id="${l.input}" />
   <input type="file" class="${l.file}" />
   <div class="${l.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${l.select}" id="${l.select}"></select>
   <div class="${l.radio}"></div>
   <label class="${l.checkbox}">
     <input type="checkbox" id="${l.checkbox}" />
     <span class="${l.label}"></span>
   </label>
   <textarea class="${l.textarea}" id="${l.textarea}"></textarea>
   <div class="${l['validation-message']}" id="${l['validation-message']}"></div>
   <div class="${l.actions}">
     <div class="${l.loader}"></div>
     <button type="button" class="${l.confirm}"></button>
     <button type="button" class="${l.deny}"></button>
     <button type="button" class="${l.cancel}"></button>
   </div>
   <div class="${l.footer}"></div>
   <div class="${l['timer-progress-bar-container']}">
     <div class="${l['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, ''),
      ie = () => {
        const u = z()
        return u
          ? (u.remove(),
            H(
              [document.documentElement, document.body],
              [l['no-backdrop'], l['toast-shown'], l['has-column']]
            ),
            !0)
          : !1
      },
      qt = () => {
        s.currentInstance.resetValidationMessage()
      },
      xi = () => {
        const u = $(),
          f = B(u, l.input),
          g = B(u, l.file),
          y = u.querySelector(`.${l.range} input`),
          E = u.querySelector(`.${l.range} output`),
          tt = B(u, l.select),
          xt = u.querySelector(`.${l.checkbox} input`),
          Ht = B(u, l.textarea)
        ;(f.oninput = qt),
          (g.onchange = qt),
          (tt.onchange = qt),
          (xt.onchange = qt),
          (Ht.oninput = qt),
          (y.oninput = () => {
            qt(), (E.value = y.value)
          }),
          (y.onchange = () => {
            qt(), (E.value = y.value)
          })
      },
      qh = u => (typeof u == 'string' ? document.querySelector(u) : u),
      Kh = u => {
        const f = $()
        f.setAttribute('role', u.toast ? 'alert' : 'dialog'),
          f.setAttribute('aria-live', u.toast ? 'polite' : 'assertive'),
          u.toast || f.setAttribute('aria-modal', 'true')
      },
      Yh = u => {
        window.getComputedStyle(u).direction === 'rtl' && O(z(), l.rtl)
      },
      Xh = u => {
        const f = ie()
        if (tn()) {
          w('SweetAlert2 requires document to initialize')
          return
        }
        const g = document.createElement('div')
        ;(g.className = l.container), f && O(g, l['no-transition']), _(g, _i)
        const y = qh(u.target)
        y.appendChild(g), Kh(u), Yh(y), xi()
      },
      ir = (u, f) => {
        u instanceof HTMLElement
          ? f.appendChild(u)
          : typeof u == 'object'
          ? Jh(u, f)
          : u && _(f, u)
      },
      Jh = (u, f) => {
        u.jquery ? Gh(f, u) : _(f, u.toString())
      },
      Gh = (u, f) => {
        if (((u.textContent = ''), 0 in f))
          for (let g = 0; g in f; g++) u.appendChild(f[g].cloneNode(!0))
        else u.appendChild(f.cloneNode(!0))
      },
      Cs = (() => {
        if (tn()) return !1
        const u = document.createElement('div'),
          f = {
            WebkitAnimation: 'webkitAnimationEnd',
            animation: 'animationend'
          }
        for (const g in f)
          if (
            Object.prototype.hasOwnProperty.call(f, g) &&
            typeof u.style[g] < 'u'
          )
            return f[g]
        return !1
      })(),
      Zh = (u, f) => {
        const g = Ut(),
          y = kt()
        !g ||
          !y ||
          (!f.showConfirmButton && !f.showDenyButton && !f.showCancelButton
            ? X(g)
            : U(g),
          P(g, f, 'actions'),
          Qh(g, y, f),
          _(y, f.loaderHtml || ''),
          P(y, f, 'loader'))
      }
    function Qh(u, f, g) {
      const y = et(),
        E = Tt(),
        tt = It()
      !y ||
        !E ||
        !tt ||
        (or(y, 'confirm', g),
        or(E, 'deny', g),
        or(tt, 'cancel', g),
        tp(y, E, tt, g),
        g.reverseButtons &&
          (g.toast
            ? (u.insertBefore(tt, y), u.insertBefore(E, y))
            : (u.insertBefore(tt, f),
              u.insertBefore(E, f),
              u.insertBefore(y, f))))
    }
    function tp(u, f, g, y) {
      if (!y.buttonsStyling) {
        H([u, f, g], l.styled)
        return
      }
      O([u, f, g], l.styled),
        y.confirmButtonColor &&
          ((u.style.backgroundColor = y.confirmButtonColor),
          O(u, l['default-outline'])),
        y.denyButtonColor &&
          ((f.style.backgroundColor = y.denyButtonColor),
          O(f, l['default-outline'])),
        y.cancelButtonColor &&
          ((g.style.backgroundColor = y.cancelButtonColor),
          O(g, l['default-outline']))
    }
    function or(u, f, g) {
      const y = m(f)
      lt(u, g[`show${y}Button`], 'inline-block'),
        _(u, g[`${f}ButtonText`] || ''),
        u.setAttribute('aria-label', g[`${f}ButtonAriaLabel`] || ''),
        (u.className = l[f]),
        P(u, g, `${f}Button`)
    }
    const ep = (u, f) => {
        const g = St()
        g &&
          (_(g, f.closeButtonHtml || ''),
          P(g, f, 'closeButton'),
          lt(g, f.showCloseButton),
          g.setAttribute('aria-label', f.closeButtonAriaLabel || ''))
      },
      np = (u, f) => {
        const g = z()
        g &&
          (sp(g, f.backdrop),
          ip(g, f.position),
          op(g, f.grow),
          P(g, f, 'container'))
      }
    function sp(u, f) {
      typeof f == 'string'
        ? (u.style.background = f)
        : f || O([document.documentElement, document.body], l['no-backdrop'])
    }
    function ip(u, f) {
      f &&
        (f in l
          ? O(u, l[f])
          : (b('The "position" parameter is not valid, defaulting to "center"'),
            O(u, l.center)))
    }
    function op(u, f) {
      f && O(u, l[`grow-${f}`])
    }
    const rp = [
        'input',
        'file',
        'range',
        'select',
        'radio',
        'checkbox',
        'textarea'
      ],
      ap = (u, f) => {
        const g = $(),
          y = r.innerParams.get(u),
          E = !y || f.input !== y.input
        rp.forEach(tt => {
          const xt = B(g, l[tt])
          up(tt, f.inputAttributes), (xt.className = l[tt]), E && X(xt)
        }),
          f.input && (E && lp(f), dp(f))
      },
      lp = u => {
        if (!ae[u.input]) {
          w(
            `Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${u.input}"`
          )
          return
        }
        const f = ul(u.input),
          g = ae[u.input](f, u)
        U(f),
          u.inputAutoFocus &&
            setTimeout(() => {
              N(g)
            })
      },
      cp = u => {
        for (let f = 0; f < u.attributes.length; f++) {
          const g = u.attributes[f].name
          ;['id', 'type', 'value', 'style'].includes(g) || u.removeAttribute(g)
        }
      },
      up = (u, f) => {
        const g = F($(), u)
        if (g) {
          cp(g)
          for (const y in f) g.setAttribute(y, f[y])
        }
      },
      dp = u => {
        const f = ul(u.input)
        typeof u.customClass == 'object' && O(f, u.customClass.input)
      },
      rr = (u, f) => {
        ;(!u.placeholder || f.inputPlaceholder) &&
          (u.placeholder = f.inputPlaceholder)
      },
      ks = (u, f, g) => {
        if (g.inputLabel) {
          const y = document.createElement('label'),
            E = l['input-label']
          y.setAttribute('for', u.id),
            (y.className = E),
            typeof g.customClass == 'object' && O(y, g.customClass.inputLabel),
            (y.innerText = g.inputLabel),
            f.insertAdjacentElement('beforebegin', y)
        }
      },
      ul = u => B($(), l[u] || l.input),
      vi = (u, f) => {
        ;['string', 'number'].includes(typeof f)
          ? (u.value = `${f}`)
          : j(f) ||
            b(
              `Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof f}"`
            )
      },
      ae = {}
    ;(ae.text =
      ae.email =
      ae.password =
      ae.number =
      ae.tel =
      ae.url =
        (u, f) => (
          vi(u, f.inputValue), ks(u, u, f), rr(u, f), (u.type = f.input), u
        )),
      (ae.file = (u, f) => (ks(u, u, f), rr(u, f), u)),
      (ae.range = (u, f) => {
        const g = u.querySelector('input'),
          y = u.querySelector('output')
        return (
          vi(g, f.inputValue),
          (g.type = f.input),
          vi(y, f.inputValue),
          ks(g, u, f),
          u
        )
      }),
      (ae.select = (u, f) => {
        if (((u.textContent = ''), f.inputPlaceholder)) {
          const g = document.createElement('option')
          _(g, f.inputPlaceholder),
            (g.value = ''),
            (g.disabled = !0),
            (g.selected = !0),
            u.appendChild(g)
        }
        return ks(u, u, f), u
      }),
      (ae.radio = u => ((u.textContent = ''), u)),
      (ae.checkbox = (u, f) => {
        const g = F($(), 'checkbox')
        ;(g.value = '1'), (g.checked = !!f.inputValue)
        const y = u.querySelector('span')
        return _(y, f.inputPlaceholder), g
      }),
      (ae.textarea = (u, f) => {
        vi(u, f.inputValue), rr(u, f), ks(u, u, f)
        const g = y =>
          parseInt(window.getComputedStyle(y).marginLeft) +
          parseInt(window.getComputedStyle(y).marginRight)
        return (
          setTimeout(() => {
            if ('MutationObserver' in window) {
              const y = parseInt(window.getComputedStyle($()).width),
                E = () => {
                  if (!document.body.contains(u)) return
                  const tt = u.offsetWidth + g(u)
                  tt > y
                    ? ($().style.width = `${tt}px`)
                    : Z($(), 'width', f.width)
                }
              new MutationObserver(E).observe(u, {
                attributes: !0,
                attributeFilter: ['style']
              })
            }
          }),
          u
        )
      })
    const fp = (u, f) => {
        const g = Y()
        g &&
          (P(g, f, 'htmlContainer'),
          f.html
            ? (ir(f.html, g), U(g, 'block'))
            : f.text
            ? ((g.textContent = f.text), U(g, 'block'))
            : X(g),
          ap(u, f))
      },
      hp = (u, f) => {
        const g = ne()
        g && (lt(g, f.footer), f.footer && ir(f.footer, g), P(g, f, 'footer'))
      },
      pp = (u, f) => {
        const g = r.innerParams.get(u),
          y = G()
        if (y) {
          if (g && f.icon === g.icon) {
            fl(y, f), dl(y, f)
            return
          }
          if (!f.icon && !f.iconHtml) {
            X(y)
            return
          }
          if (f.icon && Object.keys(h).indexOf(f.icon) === -1) {
            w(
              `Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${f.icon}"`
            ),
              X(y)
            return
          }
          U(y), fl(y, f), dl(y, f), O(y, f.showClass && f.showClass.icon)
        }
      },
      dl = (u, f) => {
        for (const [g, y] of Object.entries(h)) f.icon !== g && H(u, y)
        O(u, f.icon && h[f.icon]), wp(u, f), gp(), P(u, f, 'icon')
      },
      gp = () => {
        const u = $()
        if (!u) return
        const f = window
            .getComputedStyle(u)
            .getPropertyValue('background-color'),
          g = u.querySelectorAll(
            '[class^=swal2-success-circular-line], .swal2-success-fix'
          )
        for (let y = 0; y < g.length; y++) g[y].style.backgroundColor = f
      },
      mp = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,
      bp = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,
      fl = (u, f) => {
        if (!f.icon) return
        let g = u.innerHTML,
          y
        f.iconHtml
          ? (y = hl(f.iconHtml))
          : f.icon === 'success'
          ? ((y = mp), (g = g.replace(/ style=".*?"/g, '')))
          : f.icon === 'error'
          ? (y = bp)
          : (y = hl({ question: '?', warning: '!', info: 'i' }[f.icon])),
          g.trim() !== y.trim() && _(u, y)
      },
      wp = (u, f) => {
        if (f.iconColor) {
          ;(u.style.color = f.iconColor), (u.style.borderColor = f.iconColor)
          for (const g of [
            '.swal2-success-line-tip',
            '.swal2-success-line-long',
            '.swal2-x-mark-line-left',
            '.swal2-x-mark-line-right'
          ])
            ot(u, g, 'backgroundColor', f.iconColor)
          ot(u, '.swal2-success-ring', 'borderColor', f.iconColor)
        }
      },
      hl = u => `<div class="${l['icon-content']}">${u}</div>`,
      yp = (u, f) => {
        const g = ut()
        if (g) {
          if (!f.imageUrl) {
            X(g)
            return
          }
          U(g, ''),
            g.setAttribute('src', f.imageUrl),
            g.setAttribute('alt', f.imageAlt || ''),
            Z(g, 'width', f.imageWidth),
            Z(g, 'height', f.imageHeight),
            (g.className = l.image),
            P(g, f, 'image')
        }
      },
      _p = (u, f) => {
        const g = z(),
          y = $()
        if (!(!g || !y)) {
          if (f.toast) {
            Z(g, 'width', f.width), (y.style.width = '100%')
            const E = kt()
            E && y.insertBefore(E, G())
          } else Z(y, 'width', f.width)
          Z(y, 'padding', f.padding),
            f.color && (y.style.color = f.color),
            f.background && (y.style.background = f.background),
            X(it()),
            xp(y, f)
        }
      },
      xp = (u, f) => {
        const g = f.showClass || {}
        ;(u.className = `${l.popup} ${dt(u) ? g.popup : ''}`),
          f.toast
            ? (O([document.documentElement, document.body], l['toast-shown']),
              O(u, l.toast))
            : O(u, l.modal),
          P(u, f, 'popup'),
          typeof f.customClass == 'string' && O(u, f.customClass),
          f.icon && O(u, l[`icon-${f.icon}`])
      },
      vp = (u, f) => {
        const g = at()
        if (!g) return
        const { progressSteps: y, currentProgressStep: E } = f
        if (!y || y.length === 0 || E === void 0) {
          X(g)
          return
        }
        U(g),
          (g.textContent = ''),
          E >= y.length &&
            b(
              'Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)'
            ),
          y.forEach((tt, xt) => {
            const Ht = Cp(tt)
            if (
              (g.appendChild(Ht),
              xt === E && O(Ht, l['active-progress-step']),
              xt !== y.length - 1)
            ) {
              const zt = kp(f)
              g.appendChild(zt)
            }
          })
      },
      Cp = u => {
        const f = document.createElement('li')
        return O(f, l['progress-step']), _(f, u), f
      },
      kp = u => {
        const f = document.createElement('li')
        return (
          O(f, l['progress-step-line']),
          u.progressStepsDistance && Z(f, 'width', u.progressStepsDistance),
          f
        )
      },
      Sp = (u, f) => {
        const g = q()
        g &&
          (lt(g, f.title || f.titleText, 'block'),
          f.title && ir(f.title, g),
          f.titleText && (g.innerText = f.titleText),
          P(g, f, 'title'))
      },
      pl = (u, f) => {
        _p(u, f),
          np(u, f),
          vp(u, f),
          pp(u, f),
          yp(u, f),
          Sp(u, f),
          ep(u, f),
          fp(u, f),
          Zh(u, f),
          hp(u, f)
        const g = $()
        typeof f.didRender == 'function' && g && f.didRender(g)
      },
      Pp = () => dt($()),
      gl = () => et() && et().click(),
      Ep = () => Tt() && Tt().click(),
      Ap = () => It() && It().click(),
      Kn = Object.freeze({
        cancel: 'cancel',
        backdrop: 'backdrop',
        close: 'close',
        esc: 'esc',
        timer: 'timer'
      }),
      ml = u => {
        u.keydownTarget &&
          u.keydownHandlerAdded &&
          (u.keydownTarget.removeEventListener('keydown', u.keydownHandler, {
            capture: u.keydownListenerCapture
          }),
          (u.keydownHandlerAdded = !1))
      },
      Op = (u, f, g, y) => {
        ml(f),
          g.toast ||
            ((f.keydownHandler = E => Tp(u, E, y)),
            (f.keydownTarget = g.keydownListenerCapture ? window : $()),
            (f.keydownListenerCapture = g.keydownListenerCapture),
            f.keydownTarget.addEventListener('keydown', f.keydownHandler, {
              capture: f.keydownListenerCapture
            }),
            (f.keydownHandlerAdded = !0))
      },
      ar = (u, f) => {
        const g = J()
        if (g.length) {
          ;(u = u + f),
            u === g.length ? (u = 0) : u === -1 && (u = g.length - 1),
            g[u].focus()
          return
        }
        $().focus()
      },
      bl = ['ArrowRight', 'ArrowDown'],
      Mp = ['ArrowLeft', 'ArrowUp'],
      Tp = (u, f, g) => {
        const y = r.innerParams.get(u)
        y &&
          (f.isComposing ||
            f.keyCode === 229 ||
            (y.stopKeydownPropagation && f.stopPropagation(),
            f.key === 'Enter'
              ? Lp(u, f, y)
              : f.key === 'Tab'
              ? Rp(f)
              : [...bl, ...Mp].includes(f.key)
              ? Dp(f.key)
              : f.key === 'Escape' && Ip(f, y, g)))
      },
      Lp = (u, f, g) => {
        if (
          D(g.allowEnterKey) &&
          f.target &&
          u.getInput() &&
          f.target instanceof HTMLElement &&
          f.target.outerHTML === u.getInput().outerHTML
        ) {
          if (['textarea', 'file'].includes(g.input)) return
          gl(), f.preventDefault()
        }
      },
      Rp = u => {
        const f = u.target,
          g = J()
        let y = -1
        for (let E = 0; E < g.length; E++)
          if (f === g[E]) {
            y = E
            break
          }
        u.shiftKey ? ar(y, -1) : ar(y, 1),
          u.stopPropagation(),
          u.preventDefault()
      },
      Dp = u => {
        const f = et(),
          g = Tt(),
          y = It(),
          E = [f, g, y]
        if (
          document.activeElement instanceof HTMLElement &&
          !E.includes(document.activeElement)
        )
          return
        const tt = bl.includes(u)
          ? 'nextElementSibling'
          : 'previousElementSibling'
        let xt = document.activeElement
        for (let Ht = 0; Ht < Ut().children.length; Ht++) {
          if (((xt = xt[tt]), !xt)) return
          if (xt instanceof HTMLButtonElement && dt(xt)) break
        }
        xt instanceof HTMLButtonElement && xt.focus()
      },
      Ip = (u, f, g) => {
        D(f.allowEscapeKey) && (u.preventDefault(), g(Kn.esc))
      }
    var Ss = {
      swalPromiseResolve: new WeakMap(),
      swalPromiseReject: new WeakMap()
    }
    const Fp = () => {
        Array.from(document.body.children).forEach(f => {
          f === z() ||
            f.contains(z()) ||
            (f.hasAttribute('aria-hidden') &&
              f.setAttribute(
                'data-previous-aria-hidden',
                f.getAttribute('aria-hidden') || ''
              ),
            f.setAttribute('aria-hidden', 'true'))
        })
      },
      wl = () => {
        Array.from(document.body.children).forEach(f => {
          f.hasAttribute('data-previous-aria-hidden')
            ? (f.setAttribute(
                'aria-hidden',
                f.getAttribute('data-previous-aria-hidden') || ''
              ),
              f.removeAttribute('data-previous-aria-hidden'))
            : f.removeAttribute('aria-hidden')
        })
      },
      yl = typeof window < 'u' && !!window.GestureEvent,
      Bp = () => {
        if (yl && !v(document.body, l.iosfix)) {
          const u = document.body.scrollTop
          ;(document.body.style.top = `${u * -1}px`),
            O(document.body, l.iosfix),
            Np()
        }
      },
      Np = () => {
        const u = z()
        let f
        ;(u.ontouchstart = g => {
          f = zp(g)
        }),
          (u.ontouchmove = g => {
            f && (g.preventDefault(), g.stopPropagation())
          })
      },
      zp = u => {
        const f = u.target,
          g = z()
        return $p(u) || Hp(u)
          ? !1
          : f === g ||
              (!Lt(g) &&
                f instanceof HTMLElement &&
                f.tagName !== 'INPUT' &&
                f.tagName !== 'TEXTAREA' &&
                !(Lt(Y()) && Y().contains(f)))
      },
      $p = u =>
        u.touches && u.touches.length && u.touches[0].touchType === 'stylus',
      Hp = u => u.touches && u.touches.length > 1,
      jp = () => {
        if (v(document.body, l.iosfix)) {
          const u = parseInt(document.body.style.top, 10)
          H(document.body, l.iosfix),
            (document.body.style.top = ''),
            (document.body.scrollTop = u * -1)
        }
      },
      Wp = () => {
        const u = document.createElement('div')
        ;(u.className = l['scrollbar-measure']), document.body.appendChild(u)
        const f = u.getBoundingClientRect().width - u.clientWidth
        return document.body.removeChild(u), f
      }
    let Yn = null
    const Vp = () => {
        Yn === null &&
          document.body.scrollHeight > window.innerHeight &&
          ((Yn = parseInt(
            window
              .getComputedStyle(document.body)
              .getPropertyValue('padding-right')
          )),
          (document.body.style.paddingRight = `${Yn + Wp()}px`))
      },
      Up = () => {
        Yn !== null &&
          ((document.body.style.paddingRight = `${Yn}px`), (Yn = null))
      }
    function _l(u, f, g, y) {
      Q() ? vl(u, y) : (o(g).then(() => vl(u, y)), ml(s)),
        yl
          ? (f.setAttribute('style', 'display:none !important'),
            f.removeAttribute('class'),
            (f.innerHTML = ''))
          : f.remove(),
        V() && (Up(), jp(), wl()),
        qp()
    }
    function qp() {
      H(
        [document.documentElement, document.body],
        [l.shown, l['height-auto'], l['no-backdrop'], l['toast-shown']]
      )
    }
    function en(u) {
      u = Yp(u)
      const f = Ss.swalPromiseResolve.get(this),
        g = Kp(this)
      this.isAwaitingPromise ? u.isDismissed || (Ps(this), f(u)) : g && f(u)
    }
    const Kp = u => {
      const f = $()
      if (!f) return !1
      const g = r.innerParams.get(u)
      if (!g || v(f, g.hideClass.popup)) return !1
      H(f, g.showClass.popup), O(f, g.hideClass.popup)
      const y = z()
      return (
        H(y, g.showClass.backdrop), O(y, g.hideClass.backdrop), Xp(u, f, g), !0
      )
    }
    function xl(u) {
      const f = Ss.swalPromiseReject.get(this)
      Ps(this), f && f(u)
    }
    const Ps = u => {
        u.isAwaitingPromise &&
          (delete u.isAwaitingPromise, r.innerParams.get(u) || u._destroy())
      },
      Yp = u =>
        typeof u > 'u'
          ? { isConfirmed: !1, isDenied: !1, isDismissed: !0 }
          : Object.assign(
              { isConfirmed: !1, isDenied: !1, isDismissed: !1 },
              u
            ),
      Xp = (u, f, g) => {
        const y = z(),
          E = Cs && re(f)
        typeof g.willClose == 'function' && g.willClose(f),
          E
            ? Jp(u, f, y, g.returnFocus, g.didClose)
            : _l(u, y, g.returnFocus, g.didClose)
      },
      Jp = (u, f, g, y, E) => {
        ;(s.swalCloseEventFinishedCallback = _l.bind(null, u, g, y, E)),
          f.addEventListener(Cs, function (tt) {
            tt.target === f &&
              (s.swalCloseEventFinishedCallback(),
              delete s.swalCloseEventFinishedCallback)
          })
      },
      vl = (u, f) => {
        setTimeout(() => {
          typeof f == 'function' && f.bind(u.params)(),
            u._destroy && u._destroy()
        })
      },
      Xn = u => {
        let f = $()
        f || new Si(), (f = $())
        const g = kt()
        Q() ? X(G()) : Gp(f, u),
          U(g),
          f.setAttribute('data-loading', 'true'),
          f.setAttribute('aria-busy', 'true'),
          f.focus()
      },
      Gp = (u, f) => {
        const g = Ut(),
          y = kt()
        !f && dt(et()) && (f = et()),
          U(g),
          f && (X(f), y.setAttribute('data-button-to-replace', f.className)),
          y.parentNode.insertBefore(y, f),
          O([u, g], l.loading)
      },
      Zp = (u, f) => {
        f.input === 'select' || f.input === 'radio'
          ? sg(u, f)
          : ['text', 'email', 'number', 'tel', 'textarea'].includes(f.input) &&
            (A(f.inputValue) || j(f.inputValue)) &&
            (Xn(et()), ig(u, f))
      },
      Qp = (u, f) => {
        const g = u.getInput()
        if (!g) return null
        switch (f.input) {
          case 'checkbox':
            return tg(g)
          case 'radio':
            return eg(g)
          case 'file':
            return ng(g)
          default:
            return f.inputAutoTrim ? g.value.trim() : g.value
        }
      },
      tg = u => (u.checked ? 1 : 0),
      eg = u => (u.checked ? u.value : null),
      ng = u =>
        u.files.length
          ? u.getAttribute('multiple') !== null
            ? u.files
            : u.files[0]
          : null,
      sg = (u, f) => {
        const g = $(),
          y = E => {
            og[f.input](g, lr(E), f)
          }
        A(f.inputOptions) || j(f.inputOptions)
          ? (Xn(et()),
            L(f.inputOptions).then(E => {
              u.hideLoading(), y(E)
            }))
          : typeof f.inputOptions == 'object'
          ? y(f.inputOptions)
          : w(
              `Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof f.inputOptions}`
            )
      },
      ig = (u, f) => {
        const g = u.getInput()
        X(g),
          L(f.inputValue)
            .then(y => {
              ;(g.value =
                f.input === 'number' ? `${parseFloat(y) || 0}` : `${y}`),
                U(g),
                g.focus(),
                u.hideLoading()
            })
            .catch(y => {
              w(`Error in inputValue promise: ${y}`),
                (g.value = ''),
                U(g),
                g.focus(),
                u.hideLoading()
            })
      },
      og = {
        select: (u, f, g) => {
          const y = B(u, l.select),
            E = (tt, xt, Ht) => {
              const zt = document.createElement('option')
              ;(zt.value = Ht),
                _(zt, xt),
                (zt.selected = Cl(Ht, g.inputValue)),
                tt.appendChild(zt)
            }
          f.forEach(tt => {
            const xt = tt[0],
              Ht = tt[1]
            if (Array.isArray(Ht)) {
              const zt = document.createElement('optgroup')
              ;(zt.label = xt),
                (zt.disabled = !1),
                y.appendChild(zt),
                Ht.forEach(Gn => E(zt, Gn[1], Gn[0]))
            } else E(y, Ht, xt)
          }),
            y.focus()
        },
        radio: (u, f, g) => {
          const y = B(u, l.radio)
          f.forEach(tt => {
            const xt = tt[0],
              Ht = tt[1],
              zt = document.createElement('input'),
              Gn = document.createElement('label')
            ;(zt.type = 'radio'),
              (zt.name = l.radio),
              (zt.value = xt),
              Cl(xt, g.inputValue) && (zt.checked = !0)
            const hr = document.createElement('span')
            _(hr, Ht),
              (hr.className = l.label),
              Gn.appendChild(zt),
              Gn.appendChild(hr),
              y.appendChild(Gn)
          })
          const E = y.querySelectorAll('input')
          E.length && E[0].focus()
        }
      },
      lr = u => {
        const f = []
        return (
          typeof Map < 'u' && u instanceof Map
            ? u.forEach((g, y) => {
                let E = g
                typeof E == 'object' && (E = lr(E)), f.push([y, E])
              })
            : Object.keys(u).forEach(g => {
                let y = u[g]
                typeof y == 'object' && (y = lr(y)), f.push([g, y])
              }),
          f
        )
      },
      Cl = (u, f) => f && f.toString() === u.toString(),
      rg = u => {
        const f = r.innerParams.get(u)
        u.disableButtons(), f.input ? kl(u, 'confirm') : ur(u, !0)
      },
      ag = u => {
        const f = r.innerParams.get(u)
        u.disableButtons(), f.returnInputValueOnDeny ? kl(u, 'deny') : cr(u, !1)
      },
      lg = (u, f) => {
        u.disableButtons(), f(Kn.cancel)
      },
      kl = (u, f) => {
        const g = r.innerParams.get(u)
        if (!g.input) {
          w(
            `The "input" parameter is needed to be set when using returnInputValueOn${m(
              f
            )}`
          )
          return
        }
        const y = Qp(u, g)
        g.inputValidator
          ? cg(u, y, f)
          : u.getInput().checkValidity()
          ? f === 'deny'
            ? cr(u, y)
            : ur(u, y)
          : (u.enableButtons(), u.showValidationMessage(g.validationMessage))
      },
      cg = (u, f, g) => {
        const y = r.innerParams.get(u)
        u.disableInput(),
          Promise.resolve()
            .then(() => L(y.inputValidator(f, y.validationMessage)))
            .then(tt => {
              u.enableButtons(),
                u.enableInput(),
                tt
                  ? u.showValidationMessage(tt)
                  : g === 'deny'
                  ? cr(u, f)
                  : ur(u, f)
            })
      },
      cr = (u, f) => {
        const g = r.innerParams.get(u || void 0)
        g.showLoaderOnDeny && Xn(Tt()),
          g.preDeny
            ? ((u.isAwaitingPromise = !0),
              Promise.resolve()
                .then(() => L(g.preDeny(f, g.validationMessage)))
                .then(E => {
                  E === !1
                    ? (u.hideLoading(), Ps(u))
                    : u.close({ isDenied: !0, value: typeof E > 'u' ? f : E })
                })
                .catch(E => Pl(u || void 0, E)))
            : u.close({ isDenied: !0, value: f })
      },
      Sl = (u, f) => {
        u.close({ isConfirmed: !0, value: f })
      },
      Pl = (u, f) => {
        u.rejectPromise(f)
      },
      ur = (u, f) => {
        const g = r.innerParams.get(u || void 0)
        g.showLoaderOnConfirm && Xn(),
          g.preConfirm
            ? (u.resetValidationMessage(),
              (u.isAwaitingPromise = !0),
              Promise.resolve()
                .then(() => L(g.preConfirm(f, g.validationMessage)))
                .then(E => {
                  dt(it()) || E === !1
                    ? (u.hideLoading(), Ps(u))
                    : Sl(u, typeof E > 'u' ? f : E)
                })
                .catch(E => Pl(u || void 0, E)))
            : Sl(u, f)
      }
    function Ci() {
      const u = r.innerParams.get(this)
      if (!u) return
      const f = r.domCache.get(this)
      X(f.loader),
        Q() ? u.icon && U(G()) : ug(f),
        H([f.popup, f.actions], l.loading),
        f.popup.removeAttribute('aria-busy'),
        f.popup.removeAttribute('data-loading'),
        (f.confirmButton.disabled = !1),
        (f.denyButton.disabled = !1),
        (f.cancelButton.disabled = !1)
    }
    const ug = u => {
      const f = u.popup.getElementsByClassName(
        u.loader.getAttribute('data-button-to-replace')
      )
      f.length ? U(f[0], 'inline-block') : _t() && X(u.actions)
    }
    function El() {
      const u = r.innerParams.get(this),
        f = r.domCache.get(this)
      return f ? F(f.popup, u.input) : null
    }
    function Al(u, f, g) {
      const y = r.domCache.get(u)
      f.forEach(E => {
        y[E].disabled = g
      })
    }
    function Ol(u, f) {
      if (u)
        if (u.type === 'radio') {
          const y = u.parentNode.parentNode.querySelectorAll('input')
          for (let E = 0; E < y.length; E++) y[E].disabled = f
        } else u.disabled = f
    }
    function Ml() {
      Al(this, ['confirmButton', 'denyButton', 'cancelButton'], !1)
    }
    function Tl() {
      Al(this, ['confirmButton', 'denyButton', 'cancelButton'], !0)
    }
    function Ll() {
      Ol(this.getInput(), !1)
    }
    function Rl() {
      Ol(this.getInput(), !0)
    }
    function Dl(u) {
      const f = r.domCache.get(this),
        g = r.innerParams.get(this)
      _(f.validationMessage, u),
        (f.validationMessage.className = l['validation-message']),
        g.customClass &&
          g.customClass.validationMessage &&
          O(f.validationMessage, g.customClass.validationMessage),
        U(f.validationMessage)
      const y = this.getInput()
      y &&
        (y.setAttribute('aria-invalid', !0),
        y.setAttribute('aria-describedby', l['validation-message']),
        N(y),
        O(y, l.inputerror))
    }
    function Il() {
      const u = r.domCache.get(this)
      u.validationMessage && X(u.validationMessage)
      const f = this.getInput()
      f &&
        (f.removeAttribute('aria-invalid'),
        f.removeAttribute('aria-describedby'),
        H(f, l.inputerror))
    }
    const Jn = {
        title: '',
        titleText: '',
        text: '',
        html: '',
        footer: '',
        icon: void 0,
        iconColor: void 0,
        iconHtml: void 0,
        template: void 0,
        toast: !1,
        showClass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'swal2-icon-show'
        },
        hideClass: {
          popup: 'swal2-hide',
          backdrop: 'swal2-backdrop-hide',
          icon: 'swal2-icon-hide'
        },
        customClass: {},
        target: 'body',
        color: void 0,
        backdrop: !0,
        heightAuto: !0,
        allowOutsideClick: !0,
        allowEscapeKey: !0,
        allowEnterKey: !0,
        stopKeydownPropagation: !0,
        keydownListenerCapture: !1,
        showConfirmButton: !0,
        showDenyButton: !1,
        showCancelButton: !1,
        preConfirm: void 0,
        preDeny: void 0,
        confirmButtonText: 'OK',
        confirmButtonAriaLabel: '',
        confirmButtonColor: void 0,
        denyButtonText: 'No',
        denyButtonAriaLabel: '',
        denyButtonColor: void 0,
        cancelButtonText: 'Cancel',
        cancelButtonAriaLabel: '',
        cancelButtonColor: void 0,
        buttonsStyling: !0,
        reverseButtons: !1,
        focusConfirm: !0,
        focusDeny: !1,
        focusCancel: !1,
        returnFocus: !0,
        showCloseButton: !1,
        closeButtonHtml: '&times;',
        closeButtonAriaLabel: 'Close this dialog',
        loaderHtml: '',
        showLoaderOnConfirm: !1,
        showLoaderOnDeny: !1,
        imageUrl: void 0,
        imageWidth: void 0,
        imageHeight: void 0,
        imageAlt: '',
        timer: void 0,
        timerProgressBar: !1,
        width: void 0,
        padding: void 0,
        background: void 0,
        input: void 0,
        inputPlaceholder: '',
        inputLabel: '',
        inputValue: '',
        inputOptions: {},
        inputAutoFocus: !0,
        inputAutoTrim: !0,
        inputAttributes: {},
        inputValidator: void 0,
        returnInputValueOnDeny: !1,
        validationMessage: void 0,
        grow: !1,
        position: 'center',
        progressSteps: [],
        currentProgressStep: void 0,
        progressStepsDistance: void 0,
        willOpen: void 0,
        didOpen: void 0,
        didRender: void 0,
        willClose: void 0,
        didClose: void 0,
        didDestroy: void 0,
        scrollbarPadding: !0
      },
      dg = [
        'allowEscapeKey',
        'allowOutsideClick',
        'background',
        'buttonsStyling',
        'cancelButtonAriaLabel',
        'cancelButtonColor',
        'cancelButtonText',
        'closeButtonAriaLabel',
        'closeButtonHtml',
        'color',
        'confirmButtonAriaLabel',
        'confirmButtonColor',
        'confirmButtonText',
        'currentProgressStep',
        'customClass',
        'denyButtonAriaLabel',
        'denyButtonColor',
        'denyButtonText',
        'didClose',
        'didDestroy',
        'footer',
        'hideClass',
        'html',
        'icon',
        'iconColor',
        'iconHtml',
        'imageAlt',
        'imageHeight',
        'imageUrl',
        'imageWidth',
        'preConfirm',
        'preDeny',
        'progressSteps',
        'returnFocus',
        'reverseButtons',
        'showCancelButton',
        'showCloseButton',
        'showConfirmButton',
        'showDenyButton',
        'text',
        'title',
        'titleText',
        'willClose'
      ],
      fg = {},
      hg = [
        'allowOutsideClick',
        'allowEnterKey',
        'backdrop',
        'focusConfirm',
        'focusDeny',
        'focusCancel',
        'returnFocus',
        'heightAuto',
        'keydownListenerCapture'
      ],
      Fl = u => Object.prototype.hasOwnProperty.call(Jn, u),
      Bl = u => dg.indexOf(u) !== -1,
      Nl = u => fg[u],
      pg = u => {
        Fl(u) || b(`Unknown parameter "${u}"`)
      },
      gg = u => {
        hg.includes(u) && b(`The parameter "${u}" is incompatible with toasts`)
      },
      mg = u => {
        const f = Nl(u)
        f && S(u, f)
      },
      bg = u => {
        u.backdrop === !1 &&
          u.allowOutsideClick &&
          b(
            '"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'
          )
        for (const f in u) pg(f), u.toast && gg(f), mg(f)
      }
    function zl(u) {
      const f = $(),
        g = r.innerParams.get(this)
      if (!f || v(f, g.hideClass.popup)) {
        b(
          "You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup."
        )
        return
      }
      const y = wg(u),
        E = Object.assign({}, g, y)
      pl(this, E),
        r.innerParams.set(this, E),
        Object.defineProperties(this, {
          params: {
            value: Object.assign({}, this.params, u),
            writable: !1,
            enumerable: !0
          }
        })
    }
    const wg = u => {
      const f = {}
      return (
        Object.keys(u).forEach(g => {
          Bl(g) ? (f[g] = u[g]) : b(`Invalid parameter to update: ${g}`)
        }),
        f
      )
    }
    function $l() {
      const u = r.domCache.get(this),
        f = r.innerParams.get(this)
      if (!f) {
        Hl(this)
        return
      }
      u.popup &&
        s.swalCloseEventFinishedCallback &&
        (s.swalCloseEventFinishedCallback(),
        delete s.swalCloseEventFinishedCallback),
        typeof f.didDestroy == 'function' && f.didDestroy(),
        yg(this)
    }
    const yg = u => {
        Hl(u),
          delete u.params,
          delete s.keydownHandler,
          delete s.keydownTarget,
          delete s.currentInstance
      },
      Hl = u => {
        u.isAwaitingPromise
          ? (dr(r, u), (u.isAwaitingPromise = !0))
          : (dr(Ss, u),
            dr(r, u),
            delete u.isAwaitingPromise,
            delete u.disableButtons,
            delete u.enableButtons,
            delete u.getInput,
            delete u.disableInput,
            delete u.enableInput,
            delete u.hideLoading,
            delete u.disableLoading,
            delete u.showValidationMessage,
            delete u.resetValidationMessage,
            delete u.close,
            delete u.closePopup,
            delete u.closeModal,
            delete u.closeToast,
            delete u.rejectPromise,
            delete u.update,
            delete u._destroy)
      },
      dr = (u, f) => {
        for (const g in u) u[g].delete(f)
      }
    var _g = Object.freeze({
      __proto__: null,
      _destroy: $l,
      close: en,
      closeModal: en,
      closePopup: en,
      closeToast: en,
      disableButtons: Tl,
      disableInput: Rl,
      disableLoading: Ci,
      enableButtons: Ml,
      enableInput: Ll,
      getInput: El,
      handleAwaitingPromise: Ps,
      hideLoading: Ci,
      rejectPromise: xl,
      resetValidationMessage: Il,
      showValidationMessage: Dl,
      update: zl
    })
    const xg = (u, f, g) => {
        r.innerParams.get(u).toast ? vg(u, f, g) : (kg(f), Sg(f), Pg(u, f, g))
      },
      vg = (u, f, g) => {
        f.popup.onclick = () => {
          const y = r.innerParams.get(u)
          ;(y && (Cg(y) || y.timer || y.input)) || g(Kn.close)
        }
      },
      Cg = u =>
        u.showConfirmButton ||
        u.showDenyButton ||
        u.showCancelButton ||
        u.showCloseButton
    let ki = !1
    const kg = u => {
        u.popup.onmousedown = () => {
          u.container.onmouseup = function (f) {
            ;(u.container.onmouseup = void 0),
              f.target === u.container && (ki = !0)
          }
        }
      },
      Sg = u => {
        u.container.onmousedown = () => {
          u.popup.onmouseup = function (f) {
            ;(u.popup.onmouseup = void 0),
              (f.target === u.popup || u.popup.contains(f.target)) && (ki = !0)
          }
        }
      },
      Pg = (u, f, g) => {
        f.container.onclick = y => {
          const E = r.innerParams.get(u)
          if (ki) {
            ki = !1
            return
          }
          y.target === f.container && D(E.allowOutsideClick) && g(Kn.backdrop)
        }
      },
      Eg = u => typeof u == 'object' && u.jquery,
      jl = u => u instanceof Element || Eg(u),
      Ag = u => {
        const f = {}
        return (
          typeof u[0] == 'object' && !jl(u[0])
            ? Object.assign(f, u[0])
            : ['title', 'html', 'icon'].forEach((g, y) => {
                const E = u[y]
                typeof E == 'string' || jl(E)
                  ? (f[g] = E)
                  : E !== void 0 &&
                    w(
                      `Unexpected type of ${g}! Expected "string" or "Element", got ${typeof E}`
                    )
              }),
          f
        )
      }
    function Og() {
      const u = this
      for (var f = arguments.length, g = new Array(f), y = 0; y < f; y++)
        g[y] = arguments[y]
      return new u(...g)
    }
    function Mg(u) {
      class f extends this {
        _main(y, E) {
          return super._main(y, Object.assign({}, u, E))
        }
      }
      return f
    }
    const Tg = () => s.timeout && s.timeout.getTimerLeft(),
      Wl = () => {
        if (s.timeout) return yi(), s.timeout.stop()
      },
      Vl = () => {
        if (s.timeout) {
          const u = s.timeout.start()
          return De(u), u
        }
      },
      Lg = () => {
        const u = s.timeout
        return u && (u.running ? Wl() : Vl())
      },
      Rg = u => {
        if (s.timeout) {
          const f = s.timeout.increase(u)
          return De(f, !0), f
        }
      },
      Dg = () => !!(s.timeout && s.timeout.isRunning())
    let Ul = !1
    const fr = {}
    function Ig() {
      let u =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : 'data-swal-template'
      ;(fr[u] = this),
        Ul || (document.body.addEventListener('click', Fg), (Ul = !0))
    }
    const Fg = u => {
      for (let f = u.target; f && f !== document; f = f.parentNode)
        for (const g in fr) {
          const y = f.getAttribute(g)
          if (y) {
            fr[g].fire({ template: y })
            return
          }
        }
    }
    var Bg = Object.freeze({
      __proto__: null,
      argsToParams: Ag,
      bindClickHandler: Ig,
      clickCancel: Ap,
      clickConfirm: gl,
      clickDeny: Ep,
      enableLoading: Xn,
      fire: Og,
      getActions: Ut,
      getCancelButton: It,
      getCloseButton: St,
      getConfirmButton: et,
      getContainer: z,
      getDenyButton: Tt,
      getFocusableElements: J,
      getFooter: ne,
      getHtmlContainer: Y,
      getIcon: G,
      getIconContent: I,
      getImage: ut,
      getInputLabel: Xt,
      getLoader: kt,
      getPopup: $,
      getProgressSteps: at,
      getTimerLeft: Tg,
      getTimerProgressBar: se,
      getTitle: q,
      getValidationMessage: it,
      increaseTimer: Rg,
      isDeprecatedParameter: Nl,
      isLoading: wt,
      isTimerRunning: Dg,
      isUpdatableParameter: Bl,
      isValidParameter: Fl,
      isVisible: Pp,
      mixin: Mg,
      resumeTimer: Vl,
      showLoading: Xn,
      stopTimer: Wl,
      toggleTimer: Lg
    })
    class Ng {
      constructor(f, g) {
        ;(this.callback = f),
          (this.remaining = g),
          (this.running = !1),
          this.start()
      }
      start() {
        return (
          this.running ||
            ((this.running = !0),
            (this.started = new Date()),
            (this.id = setTimeout(this.callback, this.remaining))),
          this.remaining
        )
      }
      stop() {
        return (
          this.started &&
            this.running &&
            ((this.running = !1),
            clearTimeout(this.id),
            (this.remaining -= new Date().getTime() - this.started.getTime())),
          this.remaining
        )
      }
      increase(f) {
        const g = this.running
        return (
          g && this.stop(),
          (this.remaining += f),
          g && this.start(),
          this.remaining
        )
      }
      getTimerLeft() {
        return this.running && (this.stop(), this.start()), this.remaining
      }
      isRunning() {
        return this.running
      }
    }
    const ql = ['swal-title', 'swal-html', 'swal-footer'],
      zg = u => {
        const f =
          typeof u.template == 'string'
            ? document.querySelector(u.template)
            : u.template
        if (!f) return {}
        const g = f.content
        return (
          Kg(g),
          Object.assign($g(g), Hg(g), jg(g), Wg(g), Vg(g), Ug(g), qg(g, ql))
        )
      },
      $g = u => {
        const f = {}
        return (
          Array.from(u.querySelectorAll('swal-param')).forEach(y => {
            Cn(y, ['name', 'value'])
            const E = y.getAttribute('name'),
              tt = y.getAttribute('value')
            typeof Jn[E] == 'boolean'
              ? (f[E] = tt !== 'false')
              : typeof Jn[E] == 'object'
              ? (f[E] = JSON.parse(tt))
              : (f[E] = tt)
          }),
          f
        )
      },
      Hg = u => {
        const f = {}
        return (
          Array.from(u.querySelectorAll('swal-function-param')).forEach(y => {
            const E = y.getAttribute('name'),
              tt = y.getAttribute('value')
            f[E] = new Function(`return ${tt}`)()
          }),
          f
        )
      },
      jg = u => {
        const f = {}
        return (
          Array.from(u.querySelectorAll('swal-button')).forEach(y => {
            Cn(y, ['type', 'color', 'aria-label'])
            const E = y.getAttribute('type')
            ;(f[`${E}ButtonText`] = y.innerHTML),
              (f[`show${m(E)}Button`] = !0),
              y.hasAttribute('color') &&
                (f[`${E}ButtonColor`] = y.getAttribute('color')),
              y.hasAttribute('aria-label') &&
                (f[`${E}ButtonAriaLabel`] = y.getAttribute('aria-label'))
          }),
          f
        )
      },
      Wg = u => {
        const f = {},
          g = u.querySelector('swal-image')
        return (
          g &&
            (Cn(g, ['src', 'width', 'height', 'alt']),
            g.hasAttribute('src') && (f.imageUrl = g.getAttribute('src')),
            g.hasAttribute('width') && (f.imageWidth = g.getAttribute('width')),
            g.hasAttribute('height') &&
              (f.imageHeight = g.getAttribute('height')),
            g.hasAttribute('alt') && (f.imageAlt = g.getAttribute('alt'))),
          f
        )
      },
      Vg = u => {
        const f = {},
          g = u.querySelector('swal-icon')
        return (
          g &&
            (Cn(g, ['type', 'color']),
            g.hasAttribute('type') && (f.icon = g.getAttribute('type')),
            g.hasAttribute('color') && (f.iconColor = g.getAttribute('color')),
            (f.iconHtml = g.innerHTML)),
          f
        )
      },
      Ug = u => {
        const f = {},
          g = u.querySelector('swal-input')
        g &&
          (Cn(g, ['type', 'label', 'placeholder', 'value']),
          (f.input = g.getAttribute('type') || 'text'),
          g.hasAttribute('label') && (f.inputLabel = g.getAttribute('label')),
          g.hasAttribute('placeholder') &&
            (f.inputPlaceholder = g.getAttribute('placeholder')),
          g.hasAttribute('value') && (f.inputValue = g.getAttribute('value')))
        const y = Array.from(u.querySelectorAll('swal-input-option'))
        return (
          y.length &&
            ((f.inputOptions = {}),
            y.forEach(E => {
              Cn(E, ['value'])
              const tt = E.getAttribute('value'),
                xt = E.innerHTML
              f.inputOptions[tt] = xt
            })),
          f
        )
      },
      qg = (u, f) => {
        const g = {}
        for (const y in f) {
          const E = f[y],
            tt = u.querySelector(E)
          tt && (Cn(tt, []), (g[E.replace(/^swal-/, '')] = tt.innerHTML.trim()))
        }
        return g
      },
      Kg = u => {
        const f = ql.concat([
          'swal-param',
          'swal-function-param',
          'swal-button',
          'swal-image',
          'swal-icon',
          'swal-input',
          'swal-input-option'
        ])
        Array.from(u.children).forEach(g => {
          const y = g.tagName.toLowerCase()
          f.includes(y) || b(`Unrecognized element <${y}>`)
        })
      },
      Cn = (u, f) => {
        Array.from(u.attributes).forEach(g => {
          f.indexOf(g.name) === -1 &&
            b([
              `Unrecognized attribute "${
                g.name
              }" on <${u.tagName.toLowerCase()}>.`,
              `${
                f.length
                  ? `Allowed attributes are: ${f.join(', ')}`
                  : 'To set the value, use HTML within the element.'
              }`
            ])
        })
      },
      Kl = 10,
      Yg = u => {
        const f = z(),
          g = $()
        typeof u.willOpen == 'function' && u.willOpen(g)
        const E = window.getComputedStyle(document.body).overflowY
        Gg(f, g, u),
          setTimeout(() => {
            Xg(f, g)
          }, Kl),
          V() && (Jg(f, u.scrollbarPadding, E), Fp()),
          !Q() &&
            !s.previousActiveElement &&
            (s.previousActiveElement = document.activeElement),
          typeof u.didOpen == 'function' && setTimeout(() => u.didOpen(g)),
          H(f, l['no-transition'])
      },
      Yl = u => {
        const f = $()
        if (u.target !== f) return
        const g = z()
        f.removeEventListener(Cs, Yl), (g.style.overflowY = 'auto')
      },
      Xg = (u, f) => {
        Cs && re(f)
          ? ((u.style.overflowY = 'hidden'), f.addEventListener(Cs, Yl))
          : (u.style.overflowY = 'auto')
      },
      Jg = (u, f, g) => {
        Bp(),
          f && g !== 'hidden' && Vp(),
          setTimeout(() => {
            u.scrollTop = 0
          })
      },
      Gg = (u, f, g) => {
        O(u, g.showClass.backdrop),
          f.style.setProperty('opacity', '0', 'important'),
          U(f, 'grid'),
          setTimeout(() => {
            O(f, g.showClass.popup), f.style.removeProperty('opacity')
          }, Kl),
          O([document.documentElement, document.body], l.shown),
          g.heightAuto &&
            g.backdrop &&
            !g.toast &&
            O([document.documentElement, document.body], l['height-auto'])
      }
    var Xl = {
      email: (u, f) =>
        /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(u)
          ? Promise.resolve()
          : Promise.resolve(f || 'Invalid email address'),
      url: (u, f) =>
        /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(
          u
        )
          ? Promise.resolve()
          : Promise.resolve(f || 'Invalid URL')
    }
    function Zg(u) {
      u.inputValidator ||
        Object.keys(Xl).forEach(f => {
          u.input === f && (u.inputValidator = Xl[f])
        })
    }
    function Qg(u) {
      ;(!u.target ||
        (typeof u.target == 'string' && !document.querySelector(u.target)) ||
        (typeof u.target != 'string' && !u.target.appendChild)) &&
        (b('Target parameter is not valid, defaulting to "body"'),
        (u.target = 'body'))
    }
    function tm(u) {
      Zg(u),
        u.showLoaderOnConfirm &&
          !u.preConfirm &&
          b(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),
        Qg(u),
        typeof u.title == 'string' &&
          (u.title = u.title
            .split(
              `
`
            )
            .join('<br />')),
        Xh(u)
    }
    let ve
    class Bt {
      constructor() {
        if (typeof window > 'u') return
        ve = this
        for (var f = arguments.length, g = new Array(f), y = 0; y < f; y++)
          g[y] = arguments[y]
        const E = Object.freeze(this.constructor.argsToParams(g))
        ;(this.params = E), (this.isAwaitingPromise = !1)
        const tt = ve._main(ve.params)
        r.promise.set(this, tt)
      }
      _main(f) {
        let g =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
        bg(Object.assign({}, g, f)),
          s.currentInstance && (s.currentInstance._destroy(), V() && wl()),
          (s.currentInstance = ve)
        const y = nm(f, g)
        tm(y),
          Object.freeze(y),
          s.timeout && (s.timeout.stop(), delete s.timeout),
          clearTimeout(s.restoreFocusTimeout)
        const E = sm(ve)
        return pl(ve, y), r.innerParams.set(ve, y), em(ve, E, y)
      }
      then(f) {
        return r.promise.get(this).then(f)
      }
      finally(f) {
        return r.promise.get(this).finally(f)
      }
    }
    const em = (u, f, g) =>
        new Promise((y, E) => {
          const tt = xt => {
            u.close({ isDismissed: !0, dismiss: xt })
          }
          Ss.swalPromiseResolve.set(u, y),
            Ss.swalPromiseReject.set(u, E),
            (f.confirmButton.onclick = () => {
              rg(u)
            }),
            (f.denyButton.onclick = () => {
              ag(u)
            }),
            (f.cancelButton.onclick = () => {
              lg(u, tt)
            }),
            (f.closeButton.onclick = () => {
              tt(Kn.close)
            }),
            xg(u, f, tt),
            Op(u, s, g, tt),
            Zp(u, g),
            Yg(g),
            im(s, g, tt),
            om(f, g),
            setTimeout(() => {
              f.container.scrollTop = 0
            })
        }),
      nm = (u, f) => {
        const g = zg(u),
          y = Object.assign({}, Jn, f, g, u)
        return (
          (y.showClass = Object.assign({}, Jn.showClass, y.showClass)),
          (y.hideClass = Object.assign({}, Jn.hideClass, y.hideClass)),
          y
        )
      },
      sm = u => {
        const f = {
          popup: $(),
          container: z(),
          actions: Ut(),
          confirmButton: et(),
          denyButton: Tt(),
          cancelButton: It(),
          loader: kt(),
          closeButton: St(),
          validationMessage: it(),
          progressSteps: at()
        }
        return r.domCache.set(u, f), f
      },
      im = (u, f, g) => {
        const y = se()
        X(y),
          f.timer &&
            ((u.timeout = new Ng(() => {
              g('timer'), delete u.timeout
            }, f.timer)),
            f.timerProgressBar &&
              (U(y),
              P(y, f, 'timerProgressBar'),
              setTimeout(() => {
                u.timeout && u.timeout.running && De(f.timer)
              })))
      },
      om = (u, f) => {
        if (!f.toast) {
          if (!D(f.allowEnterKey)) {
            am()
            return
          }
          rm(u, f) || ar(-1, 1)
        }
      },
      rm = (u, f) =>
        f.focusDeny && dt(u.denyButton)
          ? (u.denyButton.focus(), !0)
          : f.focusCancel && dt(u.cancelButton)
          ? (u.cancelButton.focus(), !0)
          : f.focusConfirm && dt(u.confirmButton)
          ? (u.confirmButton.focus(), !0)
          : !1,
      am = () => {
        document.activeElement instanceof HTMLElement &&
          typeof document.activeElement.blur == 'function' &&
          document.activeElement.blur()
      }
    if (
      typeof window < 'u' &&
      /^ru\b/.test(navigator.language) &&
      location.host.match(/\.(ru|su|by|xn--p1ai)$/)
    ) {
      const u = new Date(),
        f = localStorage.getItem('swal-initiation')
      f
        ? (u.getTime() - Date.parse(f)) / (1e3 * 60 * 60 * 24) > 3 &&
          setTimeout(() => {
            document.body.style.pointerEvents = 'none'
            const g = document.createElement('audio')
            ;(g.src =
              'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3'),
              (g.loop = !0),
              document.body.appendChild(g),
              setTimeout(() => {
                g.play().catch(() => {})
              }, 2500)
          }, 500)
        : localStorage.setItem('swal-initiation', `${u}`)
    }
    ;(Bt.prototype.disableButtons = Tl),
      (Bt.prototype.enableButtons = Ml),
      (Bt.prototype.getInput = El),
      (Bt.prototype.disableInput = Rl),
      (Bt.prototype.enableInput = Ll),
      (Bt.prototype.hideLoading = Ci),
      (Bt.prototype.disableLoading = Ci),
      (Bt.prototype.showValidationMessage = Dl),
      (Bt.prototype.resetValidationMessage = Il),
      (Bt.prototype.close = en),
      (Bt.prototype.closePopup = en),
      (Bt.prototype.closeModal = en),
      (Bt.prototype.closeToast = en),
      (Bt.prototype.rejectPromise = xl),
      (Bt.prototype.update = zl),
      (Bt.prototype._destroy = $l),
      Object.assign(Bt, Bg),
      Object.keys(_g).forEach(u => {
        Bt[u] = function () {
          return ve && ve[u] ? ve[u](...arguments) : null
        }
      }),
      (Bt.DismissReason = Kn),
      (Bt.version = '11.7.18')
    const Si = Bt
    return (Si.default = Si), Si
  }),
    typeof ln < 'u' &&
      ln.Sweetalert2 &&
      (ln.swal = ln.sweetAlert = ln.Swal = ln.SweetAlert = ln.Sweetalert2),
    typeof document < 'u' &&
      (function (n, s) {
        var i = n.createElement('style')
        if ((n.getElementsByTagName('head')[0].appendChild(i), i.styleSheet))
          i.styleSheet.disabled || (i.styleSheet.cssText = s)
        else
          try {
            i.innerHTML = s
          } catch {
            i.innerText = s
          }
      })(
        document,
        '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}'
      )
})(Vh)
var D1 = Vh.exports
const Bn = R1(D1)
let Ki
const I1 = new Uint8Array(16)
function F1() {
  if (
    !Ki &&
    ((Ki =
      typeof crypto < 'u' &&
      crypto.getRandomValues &&
      crypto.getRandomValues.bind(crypto)),
    !Ki)
  )
    throw new Error(
      'crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported'
    )
  return Ki(I1)
}
const Jt = []
for (let e = 0; e < 256; ++e) Jt.push((e + 256).toString(16).slice(1))
function B1(e, t = 0) {
  return (
    Jt[e[t + 0]] +
    Jt[e[t + 1]] +
    Jt[e[t + 2]] +
    Jt[e[t + 3]] +
    '-' +
    Jt[e[t + 4]] +
    Jt[e[t + 5]] +
    '-' +
    Jt[e[t + 6]] +
    Jt[e[t + 7]] +
    '-' +
    Jt[e[t + 8]] +
    Jt[e[t + 9]] +
    '-' +
    Jt[e[t + 10]] +
    Jt[e[t + 11]] +
    Jt[e[t + 12]] +
    Jt[e[t + 13]] +
    Jt[e[t + 14]] +
    Jt[e[t + 15]]
  ).toLowerCase()
}
const N1 =
    typeof crypto < 'u' && crypto.randomUUID && crypto.randomUUID.bind(crypto),
  _d = { randomUUID: N1 }
function ma(e, t, n) {
  if (_d.randomUUID && !t && !e) return _d.randomUUID()
  e = e || {}
  const s = e.random || (e.rng || F1)()
  if (((s[6] = (s[6] & 15) | 64), (s[8] = (s[8] & 63) | 128), t)) {
    n = n || 0
    for (let i = 0; i < 16; ++i) t[n + i] = s[i]
    return t
  }
  return B1(s)
}
const z1 = Na(
    '<span class="text"> Add to Favourites </span><span class="icon icon--favorite"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><rect x="16" y="0" width="10" height="45" fill="white"></rect><rect x="-7" y="18" width="50" height="10" fill="white"></rect></svg></span>',
    2
  ),
  $1 = [z1],
  H1 = { key: 1, src: Ff, alt: 'favorite icon', class: 'favorite-added' },
  j1 = { name: 'FavoriteControls' },
  W1 = Object.assign(j1, {
    setup(e) {
      const t = Rf(),
        n = Lf(),
        s = Rt([]),
        i = Rt(!1),
        o = () => {
          if (localStorage.getItem('savedCities')) {
            if (JSON.parse(localStorage.getItem('savedCities')).length === 5) {
              console.log('limit'),
                Bn.fire(
                  'Failure!',
                  'Maximum number of saved cards are 5. Please, delete some to save new cards',
                  'error'
                )
              return
            }
            s.value = JSON.parse(localStorage.getItem('savedCities'))
          }
          if (((i.value = !0), !t.query.preview)) return
          const r = {
            id: ma(),
            state: t.params.state,
            city: t.params.city,
            coords: { lat: t.query.lat, lng: t.query.lng }
          }
          s.value.push(r),
            localStorage.setItem('savedCities', JSON.stringify(s.value))
          let a = Object.assign({}, t.query)
          delete a.preview,
            (a.id = r.id),
            n.replace({ query: a }),
            Bn.fire({
              icon: 'success',
              title: 'Congrats!',
              text: 'Added to Favourites'
            })
        }
      return (r, a) =>
        i.value
          ? (ft(), gt('img', H1))
          : (ft(),
            gt(
              'button',
              {
                key: 0,
                class: 'button-control button-control--favorite',
                onClick: a[0] || (a[0] = c => o())
              },
              $1
            ))
    }
  }),
  V1 = { key: 0, class: 'city-container' },
  U1 = { class: 'input-container' },
  q1 = nt('label', { for: 'input', class: 'label' }, 'Search for a city', -1),
  K1 = nt('div', { class: 'underline' }, null, -1),
  Y1 = { key: 0, class: 'city-list' },
  X1 = { key: 0, class: 'city-list__item' },
  J1 = { key: 1, class: 'city-list__item' },
  G1 = ['onClick'],
  Z1 = { class: 'controls' },
  Q1 = nt('span', { class: 'text' }, ' Delete ', -1),
  tC = nt(
    'span',
    { class: 'icon' },
    [
      nt(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24'
        },
        [
          nt('path', {
            d: 'M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z'
          })
        ]
      )
    ],
    -1
  ),
  eC = [Q1, tC],
  nC = { key: 1, src: Ff, alt: 'favorite icon', class: 'favorite-added' },
  sC = { class: 'info-window__title' },
  iC = { class: 'info-window__row' },
  oC = { key: 0, class: '' },
  rC = { key: 1, class: 'info-window__row info-window__row--capitalize' },
  aC = ['src'],
  lC = { key: 0, class: 'forecast__period' },
  cC = nt('span', null, 'Day', -1),
  uC = nt('span', null, null, -1),
  dC = [cC, uC],
  fC = nt('span', null, 'Week', -1),
  hC = nt('span', null, null, -1),
  pC = [fC, hC],
  gC = { class: 'forecast__container' },
  mC = { key: 0, class: 'hours' },
  bC = { class: 'hours__container' },
  wC = { class: 'hours__box' },
  yC = { class: 'hours__item-text' },
  _C = ['src'],
  xC = { key: 0, class: 'hours' },
  vC = { class: 'hours__container' },
  CC = { class: 'hours__box hours__box--weekly' },
  kC = { class: 'hours__item-text' },
  SC = ['src'],
  PC = { key: 0 },
  EC = { key: 3, class: 'diagram' },
  AC = {
    props: {
      k: null,
      onDelete: null,
      id: null,
      favMode: null,
      coordinates: null
    },
    methods: {
      deleteCard() {
        this.$emit('onDelete', this.id)
      }
    },
    created() {
      console.log('PROPS:', this.favMode)
    }
  },
  hi = Object.assign(AC, {
    __name: 'Layout',
    props: ['favMode', 'coordinates', 'k', 'id', 'onDelete'],
    setup(e) {
      const t = e,
        n = Lf(),
        s = Rf(),
        i = Rt(!1),
        o = Rt(null),
        r = Rt(null),
        a = Rt(null),
        c = Rt(null),
        l = Rt(null),
        d = Rt(''),
        h = Rt({ labels: [], datasets: [{ data: [] }] }),
        p = Rt(0),
        m = Rt(null),
        b = async (I, q) => {
          try {
            const Y = await Li.get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${I}&lon=${q}&exclude={part}&appid=f4bff0686f0ff9a57e4f9d2bc578d9e9&units=imperial`
              ),
              ut = new Date().getTimezoneOffset() * 6e4,
              at = Y.data.current.dt * 1e3 + ut
            return (
              (Y.data.currentTime = at + 1e3 * Y.data.timezone_offset),
              Y.data.hourly.forEach(it => {
                const et = it.dt * 1e3 + ut
                it.currentTime = et + 1e3 * Y.data.timezone_offset
              }),
              Y.data
            )
          } catch (Y) {
            console.log(Y)
          }
        },
        w = (I = !1) => {
          ;(i.value && !I && !m.value) ||
            (i.value && I && m.value) ||
            (I
              ? ((h.value = {
                  labels: c.value.map(q =>
                    new Date(q.dt * 1e3).toLocaleDateString('en-us', {
                      weekday: 'long'
                    })
                  ),
                  datasets: [{ data: c.value.map(q => q.temp.day) }]
                }),
                (m.value = !0))
              : ((h.value = {
                  labels: a.value.map(q =>
                    new Date(q.currentTime).toLocaleTimeString('en-us', {
                      hour: 'numeric'
                    })
                  ),
                  datasets: [{ data: a.value.map(q => q.temp) }]
                }),
                (m.value = !1)),
            p.value++)
        }
      Rt(!0)
      const x = async (I, q) => {
          const Y = await b(I, q)
          Y &&
            ((o.value = Y.currentTime),
            (r.value = Y.current),
            (a.value = Y.hourly.slice(0, 24)),
            (c.value = Y.daily),
            (j.value = '')),
            (l.value = !1),
            w(),
            (i.value = !0)
        },
        C = I => {
          const [q, Y] = I.place_name.split(',')
          ;(d.value = q),
            n.push({
              name: 'cityView',
              params: { state: Y.replaceAll(' ', ''), city: q },
              query: {
                lat: I.geometry.coordinates[1],
                lng: I.geometry.coordinates[0],
                preview: !0
              }
            }),
            (l.value = !0),
            (T.value = null),
            setTimeout(() => {
              x(s.query.lat, s.query.lng)
            }, 300)
        },
        S = Rt(null)
      S.value = () =>
        JSON.parse(localStorage.getItem('savedCities'))
          ? JSON.parse(localStorage.getItem('savedCities')).some(
              I => I.city === d.value
            )
          : !1
      const D = '72da4f70eb0348ec9c3c8b2d9cbaef25',
        A = async () => {
          try {
            const I = await Li.get('https://api.ipify.org?format=json'),
              q = await Li.get(
                `https://api.ipgeolocation.io/ipgeo?apiKey=${D}&ip=${I.data.ip}`
              ),
              Y = q.data.city,
              ut = q.data.country_name
            ;(d.value = Y),
              n.push({
                name: 'cityView',
                params: { state: ut, city: Y },
                query: {
                  lat: q.data.latitude,
                  lng: q.data.longitude,
                  preview: !0
                }
              }),
              setTimeout(() => {
                x(s.query.lat, s.query.lng)
              }, 300)
          } catch (I) {
            console.error(I)
          }
        },
        L =
          'pk.eyJ1Ijoia21vY2hhbmMiLCJhIjoiY2xrOGNvNXhwMGh3YjNzcm9jeDI1NWVxZiJ9.0P8k9GkO2fhNI-juyaOkDg',
        j = Rt(''),
        z = Rt(null),
        T = Rt(null),
        W = Rt(null),
        $ = () => {
          clearTimeout(z.value),
            (z.value = setTimeout(async () => {
              if (j.value !== '') {
                try {
                  const I = await Li.get(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${j.value}.json?access_token=${L}&types=place`
                  )
                  T.value = I.data.features
                } catch {
                  W.value = !0
                }
                return
              }
              T.value = null
            }, 300))
        }
      return (
        jo(() => {
          t.favMode
            ? (x(t.coordinates.lat, t.coordinates.lng),
              (d.value = t.coordinates.city))
            : A()
        }),
        (I, q) => (
          ft(),
          gt(
            Gt,
            null,
            [
              e.favMode
                ? ke('', !0)
                : (ft(),
                  gt('div', V1, [
                    nt('div', U1, [
                      gb(
                        nt(
                          'input',
                          {
                            type: 'text',
                            id: 'input',
                            required: '',
                            'onUpdate:modelValue':
                              q[0] || (q[0] = Y => (j.value = Y)),
                            onInput: $
                          },
                          null,
                          544
                        ),
                        [[L0, j.value]]
                      ),
                      q1,
                      K1,
                      T.value
                        ? (ft(),
                          gt('ul', Y1, [
                            W.value
                              ? (ft(),
                                gt(
                                  'p',
                                  X1,
                                  ' Sorry, something went wrong, please try again. '
                                ))
                              : ke('', !0),
                            !W.value && T.value.length === 0
                              ? (ft(),
                                gt(
                                  'p',
                                  J1,
                                  ' No results match your query, try a different term. '
                                ))
                              : (ft(!0),
                                gt(
                                  Gt,
                                  { key: 2 },
                                  Ws(
                                    T.value,
                                    Y => (
                                      ft(),
                                      gt(
                                        'li',
                                        {
                                          key: Y.id,
                                          class:
                                            'city-list__item city-list__item--success',
                                          onClick: ut => C(Y)
                                        },
                                        Ce(Y.place_name),
                                        9,
                                        G1
                                      )
                                    )
                                  ),
                                  128
                                ))
                          ]))
                        : ke('', !0)
                    ]),
                    nt('div', Z1, [
                      nt(
                        'button',
                        {
                          class: 'button-control',
                          onClick: q[1] || (q[1] = Y => I.deleteCard())
                        },
                        eC
                      ),
                      S.value()
                        ? (ft(), gt('img', nC))
                        : (ft(), ii(W1, { key: 0 }))
                    ])
                  ])),
              i.value
                ? (ft(),
                  gt(
                    'div',
                    {
                      key: 1,
                      class: fn([
                        'info-window',
                        {
                          loading: l.value,
                          'info-window--fav': S.value() && e.favMode
                        }
                      ])
                    },
                    [
                      nt('h1', sC, Ce(d.value), 1),
                      nt(
                        'p',
                        iC,
                        Ce(
                          new Date(o.value).toLocaleDateString('en-us', {
                            weekday: 'short',
                            day: '2-digit',
                            month: 'long'
                          })
                        ) +
                          ' ' +
                          Ce(
                            new Date(o.value).toLocaleTimeString('en-us', {
                              timeStyle: 'short'
                            })
                          ),
                        1
                      ),
                      l.value
                        ? ke('', !0)
                        : (ft(),
                          gt('p', oC, Ce(Math.round(r.value.temp)) + '° ', 1)),
                      l.value
                        ? ke('', !0)
                        : (ft(),
                          gt('p', rC, Ce(r.value.weather[0].description), 1)),
                      l.value
                        ? ke('', !0)
                        : (ft(),
                          gt(
                            'img',
                            {
                              key: 2,
                              class: 'info-window__picture',
                              src: `http://openweathermap.org/img/wn/${r.value.weather[0].icon}@2x.png`,
                              alt: 'current weather icon'
                            },
                            null,
                            8,
                            aC
                          ))
                    ],
                    2
                  ))
                : (ft(),
                  gt(
                    'div',
                    {
                      key: 2,
                      class: fn(['info-window', { loading: l.value }])
                    },
                    [Ot(yd)],
                    2
                  )),
              nt(
                'div',
                {
                  class: fn([
                    'forecast',
                    {
                      loading: l.value,
                      'forecast--loading': !i.value,
                      'forecast--weekly': m.value
                    }
                  ])
                },
                [
                  i.value
                    ? (ft(),
                      gt('div', lC, [
                        nt(
                          'button',
                          {
                            class: fn([
                              'animated-button',
                              { 'animated-button--active': !m.value }
                            ]),
                            onClick: q[2] || (q[2] = Y => w())
                          },
                          dC,
                          2
                        ),
                        nt(
                          'button',
                          {
                            class: fn([
                              'animated-button',
                              { 'animated-button--active': m.value }
                            ]),
                            onClick: q[3] || (q[3] = Y => w(!0))
                          },
                          pC,
                          2
                        )
                      ]))
                    : ke('', !0),
                  nt('div', gC, [
                    Ot(
                      go,
                      { name: 'fade-hours' },
                      {
                        default: us(() => [
                          i.value && !m.value
                            ? (ft(),
                              gt('div', mC, [
                                nt('div', bC, [
                                  nt('div', wC, [
                                    (ft(!0),
                                    gt(
                                      Gt,
                                      null,
                                      Ws(
                                        a.value,
                                        Y => (
                                          ft(),
                                          gt(
                                            'div',
                                            { key: Y.dt, class: 'hours__item' },
                                            [
                                              nt(
                                                'p',
                                                yC,
                                                Ce(
                                                  new Date(
                                                    Y.currentTime
                                                  ).toLocaleTimeString(
                                                    'en-us',
                                                    { hour: 'numeric' }
                                                  )
                                                ),
                                                1
                                              ),
                                              nt(
                                                'img',
                                                {
                                                  class: 'hours__item-image',
                                                  src: `http://openweathermap.org/img/wn/${Y.weather[0].icon}@2x.png`,
                                                  alt: 'image of the weather'
                                                },
                                                null,
                                                8,
                                                _C
                                              ),
                                              nt(
                                                'p',
                                                null,
                                                Ce(Math.round(Y.temp)) + '° ',
                                                1
                                              )
                                            ]
                                          )
                                        )
                                      ),
                                      128
                                    ))
                                  ])
                                ])
                              ]))
                            : ke('', !0)
                        ]),
                        _: 1
                      }
                    ),
                    Ot(
                      go,
                      { name: 'fade-hours-weekly' },
                      {
                        default: us(() => [
                          i.value && m.value
                            ? (ft(),
                              gt('div', xC, [
                                nt('div', vC, [
                                  nt('div', CC, [
                                    (ft(!0),
                                    gt(
                                      Gt,
                                      null,
                                      Ws(
                                        c.value,
                                        Y => (
                                          ft(),
                                          gt(
                                            'div',
                                            { key: Y.dt, class: 'hours__item' },
                                            [
                                              nt(
                                                'p',
                                                kC,
                                                Ce(
                                                  new Date(
                                                    Y.dt * 1e3
                                                  ).toLocaleDateString(
                                                    'en-us',
                                                    { weekday: 'long' }
                                                  )
                                                ),
                                                1
                                              ),
                                              nt(
                                                'img',
                                                {
                                                  class: 'hours__item-image',
                                                  src: `http://openweathermap.org/img/wn/${Y.weather[0].icon}@2x.png`,
                                                  alt: 'image of the weather'
                                                },
                                                null,
                                                8,
                                                SC
                                              ),
                                              nt('div', null, [
                                                nt(
                                                  'p',
                                                  null,
                                                  'H: ' +
                                                    Ce(Math.round(Y.temp.max)),
                                                  1
                                                ),
                                                nt(
                                                  'p',
                                                  null,
                                                  'L: ' +
                                                    Ce(Math.round(Y.temp.min)),
                                                  1
                                                )
                                              ])
                                            ]
                                          )
                                        )
                                      ),
                                      128
                                    ))
                                  ])
                                ])
                              ]))
                            : ke('', !0)
                        ]),
                        _: 1
                      }
                    ),
                    i.value ? ke('', !0) : (ft(), gt('div', PC, [Ot(yd)]))
                  ])
                ],
                2
              ),
              i.value
                ? (ft(),
                  gt('div', EC, [
                    (ft(),
                    ii(C1, { key: p.value, dataForChart: h.value }, null, 8, [
                      'dataForChart'
                    ]))
                  ]))
                : ke('', !0)
            ],
            64
          )
        )
      )
    }
  }),
  OC = {
    __name: 'CityView',
    setup(e) {
      return (t, n) => null
    }
  },
  MC = { class: 'animated-button-container' },
  TC = ['title'],
  LC = nt('span', null, 'Add', -1),
  RC = nt('span', null, null, -1),
  DC = [LC, RC],
  IC = { components: { Layout: hi } },
  ba = Object.assign(IC, {
    __name: 'LayoutSkeleton',
    setup(e) {
      const t = Rt(!1),
        n = Rt([{ data: [hi], id: ma() }]),
        s = o => {
          if ((console.log('id', o), n.value.length === 1)) {
            Bn.fire(
              'Failure!',
              'There should be at least 1 weather card',
              'error'
            )
            return
          }
          Bn.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: !0,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
          }).then(r => {
            r.isConfirmed &&
              ((n.value = n.value.filter(a => a.id !== o)),
              Bn.fire('Deleted!', 'Your file has been deleted.', 'success'))
          })
        },
        i = () => {
          if (n.value.length === 5) {
            Bn.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'You can only add up to 5 weather cards! Delete some if you want to add new ones'
            })
            return
          }
          Bn.fire({
            icon: 'success',
            title: 'Congrats!',
            text: 'New weather card has been added!'
          }),
            n.value.push({ data: [hi], id: ma() })
        }
      return (o, r) => (
        ft(),
        gt(
          Gt,
          null,
          [
            nt('div', MC, [
              nt(
                'button',
                {
                  class: 'animated-button',
                  onClick: i,
                  title: t.value
                    ? 'Add a new card'
                    : 'Choose at least one city from the search to add a new card'
                },
                DC,
                8,
                TC
              )
            ]),
            (ft(!0),
            gt(
              Gt,
              null,
              Ws(
                n.value,
                a => (
                  ft(),
                  gt('div', { class: 'wrapper', key: a.id }, [
                    (ft(),
                    ii(
                      Mb(a.data[0]),
                      {
                        k: !0,
                        id: a.id,
                        onOnDelete: r[0] || (r[0] = c => s(c))
                      },
                      null,
                      40,
                      ['id']
                    ))
                  ])
                )
              ),
              128
            ))
          ],
          64
        )
      )
    }
  }),
  FC = { class: 'app' },
  BC = { class: 'container' },
  NC = { class: 'navigation' },
  zC = { class: 'main' },
  $C = {
    components: {
      Logo: Df,
      LayoutSkeleton: ba,
      Navigation: If,
      Layout: hi,
      CityView: OC
    }
  },
  HC = Object.assign($C, {
    __name: 'App',
    setup(e) {
      return (t, n) => (
        ft(),
        gt('div', FC, [
          Ot(Df),
          nt('div', BC, [nt('div', NC, [Ot(If)]), nt('main', zC, [Ot(He(Tf))])])
        ])
      )
    }
  }),
  jC = { class: 'wrapper wrapper--fav' },
  WC = {
    __name: 'FavouritesView',
    setup(e) {
      const t = Rt(null)
      return (
        JSON.parse(localStorage.getItem('savedCities')) &&
          (t.value = JSON.parse(localStorage.getItem('savedCities'))),
        (n, s) => (
          ft(!0),
          gt(
            Gt,
            null,
            Ws(
              t.value,
              i => (
                ft(),
                gt('div', { key: i.id }, [
                  nt('div', jC, [
                    Ot(
                      hi,
                      {
                        favMode: !0,
                        coordinates: {
                          lat: i.coords.lat,
                          lng: i.coords.lng,
                          city: i.city
                        }
                      },
                      null,
                      8,
                      ['coordinates']
                    )
                  ])
                ])
              )
            ),
            128
          )
        )
      )
    }
  },
  VC = Fw({
    history: tw('/weather-app/'),
    routes: [
      { path: '/', name: 'home', component: ba },
      { path: '/weather:state/:city', name: 'cityView', component: ba },
      { path: '/Favourites', name: 'Favourites', component: WC }
    ]
  })
const Uh = I0(HC)
Uh.use(VC)
Uh.mount('#app')
