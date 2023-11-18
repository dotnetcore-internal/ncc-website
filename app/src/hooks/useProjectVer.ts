const version = 1;

const needUpdate = (current: number = 0): boolean => {
  return current < version;
};

export {
  version,
  needUpdate
};