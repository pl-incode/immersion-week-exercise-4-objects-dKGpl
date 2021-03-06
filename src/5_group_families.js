module.exports = function groupFamilies(ObjArr) {
  const families = {}
  for(const innerObj of ObjArr) {
      families[innerObj.surname] ? families[innerObj.surname].push(innerObj.name) : families[innerObj.surname] = [innerObj.name]
  }
  return families
};
