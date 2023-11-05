export async function createUser(userDetails: User) {
  const URL = "/api/auth/create-user";

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    return await response.json();
  } catch (error) {
    return error;
  }
}
