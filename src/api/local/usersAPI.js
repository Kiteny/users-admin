/* eslint-disable no-use-before-define */
export default {
  addUser(fio, email, phone, password, role) {
    const now = new Date().toISOString();
    const userString = `${fio};${email};${phone};${password};${role};${now};${now}`;

    let lastUserID = +localStorage.getItem('lastUserID');

    if (!lastUserID) {
      lastUserID = 1;
    } else {
      lastUserID += 1;
    }

    localStorage.setItem('lastUserID', lastUserID);
    localStorage.setItem(`user${lastUserID}`, userString);
  },
  getUser(id) {
    const userString = localStorage.getItem(`user${id}`);

    if (!userString) {
      throw new Error(`В базе нет пользователя с id ${id}`);
    }

    return userFromString(userString);
  },
  getAllUsers(filter = () => true) {
    const lastUserID = +localStorage.getItem('lastUserID');
    const users = [];

    if (!lastUserID) {
      throw new Error('В базе нет пользователей!');
    }

    for (let id = lastUserID; id > 0; id -= 1) {
      try {
        const user = this.getUser(id);
        user.id = id;

        const isFiltered = filter(user);
        if (isFiltered) {
          users.push(user);
        }
      // eslint-disable-next-line no-empty
      } catch {}
    }

    return users;
  },
};

function userFromString(userString) {
  const userArrayInfo = userString.split(';');

  return {
    fio: userArrayInfo[0],
    email: userArrayInfo[1],
    phone: userArrayInfo[2],
    password: userArrayInfo[3],
    role: userArrayInfo[4],
    dateReg: userArrayInfo[5],
    dateLastEdit: userArrayInfo[6],
  };
}
