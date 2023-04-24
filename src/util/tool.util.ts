import { LDebounceOpt, LFakeProgressOpt } from './type'

class FakeProgress {
  progress:number = 0
  timeStand:number = 10000
  time:number = 0
  interTime = 100
  timeInterVal:null | NodeJS.Timer = null
  constructor (opt = {} as LFakeProgressOpt) {
    const { autoStart, timeStand } = opt
    this.timeStand = timeStand || 1000
    if (autoStart) {
      this._star()
    }
  }

  _star () {
    this.timeInterVal = setInterval(this._interval.bind(this), this.interTime)
  }

  _interval () {
    const progress = 1 - Math.exp(-1 * this.time / this.timeStand)
    this.time += this.interTime
    this._setProgress(progress)
  }

  _stop (isCur = false) {
    /**
     * @param isCur 是否要停止在当前值
     */

    if (this.timeInterVal) {
      clearInterval(this.timeInterVal)
      this.timeInterVal = null
    }
    if (!isCur) {
      this._setProgress(1)
    }
  }

  _end () {
    this._stop()
    this._setProgress(1)
  }

  _setProgress (progress:number) {
    this.progress = progress
  }
}

const lDebounce = (fn:Function, delay:number = 300, opt:LDebounceOpt = {}) => {
  let timer:null| NodeJS.Timeout = null
  let { isImmediate } = opt
  return function (this:any, ...arg:any[]) {
    if (timer) clearTimeout(timer)
    if (isImmediate) {
      fn.apply(this, arg)
      timer = null
      isImmediate = false
      return
    }
    timer = setTimeout(() => {
      fn.apply(this, arg)
      timer = null
    }, delay)
  }
}

export {
  FakeProgress,
  lDebounce
}
