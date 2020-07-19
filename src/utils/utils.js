export default {
  formatDOB: function (dob) {
    const newDOB = dob.substring(0, 10);
    return newDOB;
  },
  ascOrderName: function (a, b) {
    var a = a.name.first,
      b = b.name.first;
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  },
  descOrderName: function (a, b) {
    var a = a.name.first,
      b = b.name.first;
    if (a > b) return -1;
    if (a < b) return 1;
    return 0;
  },
};
