// function onChange(e) {
//   console.log(e.target.value);
// }

// const debounce = (fn, ms) => {
//   let timeout;
//   return function () {
//     const fnCall = () => { fn.apply(this, arguments) };

//     clearTimeout(timeout);

//     timeout = setTimeout(fnCall, ms);
//   }
// }

// onChange = debounce(onChange, 200);

// document.querySelector('input').addEventListener('keyup', onChange);


function throttle(fn, ms) {
  let isThrottled = false;
  let saveArgs;
  let saveThis;

  function wrapper() {
    if (isThrottled) {
      saveArgs = arguments;
      saveThis = this;
      return;
    }
    fn.apply(this, arguments);
    isThrottled = true;
  }

  setTimeout(function () {
    isThrottled = false;
    if (saveArgs) {
      wrapper.apply(saveThis, saveArgs);
      saveArgs = null;
      saveThis = null;
    }
  }, ms);


  return wrapper;
}