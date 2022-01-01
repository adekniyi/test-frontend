export const handleErrors = (e) => {
    if (e.response) {
      console.log(e.response);
    } else {
      console.log(e.message);
    }
  };