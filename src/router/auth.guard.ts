import {
  authModulePath,
  isBinded,
  isTourist,
  showTabs
} from '@/store/auth/auth.paths'
import store from '../store/store'
import router from './router'

export function authGuard(to, from, next) {
  const _isBinded = store.getters[authModulePath + isBinded]
  console.log('TCL: authGuard -> _isBinded', _isBinded)

  const _isTourist = store.getters[authModulePath + isTourist]
  console.log('TCL: authGuard -> _isTourist', _isTourist)

  // show tabs if binded
  if (_isBinded) {
    const _store: any = store
    _store.set(authModulePath + showTabs, true)
  }

  // go to binding page if binded and not tourist
  if (!_isBinded && !_isTourist) {
    return router.push({ name: 'binding' })
  }

  next()
}
