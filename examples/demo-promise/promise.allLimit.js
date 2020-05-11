
/* promise-limit.js */
/* jshint esversion: 6 */
/*jslint node: true */
Promise.allLimit = function(arr, wrap, limit, callback) {
    return new Promise((resolve, reject) => {
      var total = arr.length;
      var result = new Array(total);
      var rejected = false;
      var dones = 0;
      function run(n) {
        setTimeout(() => {
          wrap(n, arr.shift()).then(res => {
            return typeof callback === 'function' ? callback(n, res) : Promise.resolve(res);
          }).then(res => {
            dones++;
            result[n] = res;
            if (!rejected) {
              if (arr.length) {
                run(total - arr.length);
              } else if (dones === total) {
                resolve(result);
              }
            }
          }).catch(err => {
            rejected = true;
            reject(err);
          });
        }, 0);
      }
      arr.slice(0, limit).forEach((v, n) => {
        run(n);
      });
    });
  };


Promise.allLimit([2000, 1500, 2500, 3000, 1500], function(n, time) {
    return new Promise((resolve, reject) => {
      console.log("Start Job: ", n, time);
      // setTimeout(2500 === time ? reject : resolve, time, "Time: " + time); // 测试reject
      setTimeout(resolve, time, "Time: " + time);
    });
  }, 2, (n, res) => {
    // log Job n done
    console.log("Done Job: ", res);
    return Promise.resolve(n);
  // log Job n done
  }).then(result => {
    console.log("All Done: ", result);
  }).catch(err => {
    console.log("Error: ", err);
  });
  