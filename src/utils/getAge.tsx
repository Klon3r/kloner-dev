export const getAge = () => {
  const today = new Date();
  const birthday = new Date(1994, 2, 21); // 0 Based Index so March is 2

  let age = today.getFullYear() - birthday.getFullYear();

  // Check if I have had a birthday this year
  const hasHadBirthdayThisYear =
    today.getMonth() > birthday.getMonth() ||
    (today.getMonth() == birthday.getMonth() &&
      today.getDay() >= birthday.getDay());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age;
};
