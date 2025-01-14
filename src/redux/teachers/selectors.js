export const selectTeachers = state => state.teachers.teachers;
export const selectFilters = state => state.teachers.filters;
export const selectIsLoading = state => state.teachers.isLoading;
export const selectError = state => state.teachers.error;

export const selectFilteredTeachers = state => {
  const { teachers, filters } = state.teachers;
  const { language, level, price_per_hour } = filters;

  return teachers.filter(teacher => {
    const matchesLanguage = language
      ? teacher.languages.includes(language)
      : true;
    const matchesLevel = level ? teacher.levels.includes(level) : true;
    const matchesPrice = price_per_hour 
      ? price_per_hour === "0-10"
        ? teacher.price_per_hour <= 10
        : price_per_hour === "10-20"
        ? teacher.price_per_hour > 10 && teacher.price_per_hour <= 20
        : price_per_hour === "20-30"
        ? teacher.price_per_hour > 20 && teacher.price_per_hour <= 30
        : price_per_hour === "30-40"
        ? teacher.price_per_hour > 30 && teacher.price_per_hour <= 40
        : teacher.price_per_hour > 40
      : true;

    return matchesLanguage && matchesLevel && matchesPrice;
  });
};
