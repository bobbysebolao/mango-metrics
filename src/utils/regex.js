const ratioIsValid = userInput => {
  if (userInput.length === 0) {
    return true;
  } else {
    const ratioRegex = /^[1-9]\d*[:][1-9]\d*$/;
    const validInput = userInput.match(ratioRegex) !== null;
    console.log(validInput);
    return validInput ? true : false;
  }
};
export default ratioIsValid;
