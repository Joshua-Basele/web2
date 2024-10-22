const containsOnlyExpectedKeys = (
    obj: object,
    expectedKeys: string[]
  ): boolean => {
    return Object.keys(obj).every((key) => expectedKeys.includes(key));
  };
  
  export { containsOnlyExpectedKeys };