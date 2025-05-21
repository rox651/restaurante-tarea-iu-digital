function setStorageValue<T>(key: string, value: T): void {
  if (key === null || key === undefined) {
    throw new Error("Key cannot be null or undefined");
  }

  localStorage.setItem(key, JSON.stringify(value));
}

export default setStorageValue;
