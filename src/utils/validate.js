export const checkValidateData = (name, email, password, isSignUp) => {
  if (isSignUp) {
    if (name.trim().length < 5) return "Name must have 5 characters";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!isEmailValid) return "Email ID is Not Vailid, Enter a Valid Email";
  if (!isPasswordValid) return "Password is Not Valid";

  return null;
};
