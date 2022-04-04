const getTabValues = (condition: boolean): Record<string, number> => {
  if (condition) {
    return {
      feed: 0,
      global: 1,
      default: 2,
    }
  }
  return {
    global: 0,
    default: 1,
  }
}

export const getTabIndex = (config: string, condition: boolean) => {
  const values = getTabValues(condition)
  const index = values[config]
  return index || values.default
}
