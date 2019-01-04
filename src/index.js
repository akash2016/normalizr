function normalizer(data) {
  const obj = {};
  if (data && Array.isArray(data) && data.length && data[0].id) {
    data.forEach((value) => {
      const { id, ...rest } = value;
      if (Object.keys(rest).length) {
        obj[id] = normalizer(rest);
      }
    });
    return obj;
  } else if (data && typeof (data) === 'object' && (!Array.isArray(data)) && Object.keys(data).length) {
    Object.keys(data).forEach((value) => {
      obj[value] = normalizer(data[value]);
    });
    return obj;
  }
  return data;
}

export default normalizer;

export { normalizer };
