/*function for checking the presence of a contact with the specified name*/
export const availabilityСheck = (contactsArr, name) => {
  let isAvailable = false;
  const existingСontact = contactsArr.find(
    contact => contact.name.toLowerCase() === name.toLowerCase(),
  );

  if (existingСontact) {
    alert(`${name} is already in contacts`);
    isAvailable = true;
  }
  return isAvailable;
};
