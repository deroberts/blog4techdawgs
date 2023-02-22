const helpers = {
  toLower: (str) => str.toLowerCase(),
  toUpper: (str) => str.toUpperCase(),
  filterUsers: (usersArray) => {
    return usersArray
      .filter((user) => user.posts.length)
      .map((filteredUser) => (filteredUser.active = true));
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}`;
  },
};

module.exports = helpers;
