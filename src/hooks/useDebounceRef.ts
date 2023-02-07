
export const useDebounceRef = <T>(value:T, delay:number = 200) => {
  let timer:any = null
  return customRef((track, trigger) => {
    return {
      get () {
        track()
        return value
      },
      set (val) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = val
          trigger()
        }, delay)
      }
    }
  })
}
