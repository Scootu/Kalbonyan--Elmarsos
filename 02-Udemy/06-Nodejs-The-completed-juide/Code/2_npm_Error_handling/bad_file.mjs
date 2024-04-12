const udf_double = (num, callback) => {
    if (typeof callback !== 'function') {
      throw new TypeError(`Expected the function. Got: ${typeof callback}`);
    }
  
    // simulate the async operation
    setTimeout(() => {
      if (typeof num !== 'number') {
        callback(new TypeError(`Expected number, got: ${typeof num}`));
        return;
      }
  
      const result = num * 2;
      // callback invoked after the operation completes.
      callback(null, result);
    }, 100);
  }
  
  // function call
  udf_double('2', (err, result) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(result);
  });
