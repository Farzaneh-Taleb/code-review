export function formatUserList(users: any[]) {
  const formatted = [];

  for (let i = 0; i < users.length; i++) {
    const u = users[i];
    const fullName = u.firstName + " " + u.lastName;

    let status = "inactive";
    if (
      u.active === true &&
      u.lastLogin &&
      new Date(u.lastLogin) > new Date(Date.now() - 30 * 86400000)
    ) {
      status = "active";
    }

    formatted.push({
      id: u.id,
      name: fullName,
      email: u.email,
      status: status,
      signupDate: u.signupDate.split("T")[0],
    });
  }

  return formatted;
}
