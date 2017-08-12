'use strict';

module.exports = {
  /**
  * The elegant pairing function
  * NB: Assumes x > 0 and y > 0
  *
  * @param  {Number} x
  * @param  {Number} y
  * @return {Number}
  */
  pair: (x, y) => {
    return (x >= y) ? (x * x + x + y) : (y * y + x);
  },
  
  /**
  * Inverse of the elegant pairing function
  *
  * @param   {Number} z
  * @returns {Array}
  */
  unpair: (z) => {
    let q = Math.floor(Math.sqrt(z));
    let l = z - q * q;
    return l < q ? [l, q] : [q, l - q];
  }
};
