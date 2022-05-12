export type UseNamespace = {
  b: () => string
  w: (s: string) => string
  e: (el: string) => string
  m: (mo: string) => string
  em: (el: string, mo: string) => string
}

function createBem(namespace: string, element?: string, modifier?: string): string {
  let cls = namespace
  if (element) {
    cls += `__${element}`
  }
  if (modifier) {
    cls += `--${modifier}`
  }
  return cls
}

export function useNamespace(block: string): UseNamespace {
  const namespace = `z-${block}`
  const b = () => createBem(namespace)
  const w = (state: string) => (state ? 'is-' + state : '')
  const e = (element: string) => (element ? createBem(namespace, element) : '')
  const m = (modifier: string) => (modifier ? createBem(namespace, '', modifier) : '')
  const em = (element: string, modifier: string) =>
    element && modifier ? createBem(namespace, element, modifier) : ''
  return {
    b,
    w,
    e,
    m,
    em
  }
}
