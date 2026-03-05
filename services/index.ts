export const getRequest = async (URL: string) => {
  try {
    const data = await fetch(`http://localhost:3000${URL}`);
    const res = await data.json();
    return res;
  } catch (err) {
    console.log(err);
  }
};
