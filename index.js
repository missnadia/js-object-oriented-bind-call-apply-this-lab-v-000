function justInvoke(fn) {
  this.fn = fn;
  return fn
}
