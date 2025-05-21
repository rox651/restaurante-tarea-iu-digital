function getStorageValue<T>(key: string, defaultValue?: T) {
  const saved = localStorage.getItem(key);

  const initial = saved ? JSON.parse(saved) : null;

  return initial || defaultValue;
}

export default getStorageValue;
