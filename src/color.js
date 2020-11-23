export default {
  bind (el, bindings, vnode) {
    const args = bindings.arg
    el.style[args] = bindings.value
  }
}