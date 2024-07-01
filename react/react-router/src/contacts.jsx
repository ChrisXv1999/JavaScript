const contacts = [{
    id:1,
    first: "Your",
    last: "Name",
    avatar: "https://robohash.org/you.png?size=200x200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  }];
export function getContacts(){
    return contacts
}
export function getContact(id){
    return contacts.find(contact => contact.id === +id)
}

export function createContact(){
    const contact = {
        id: contacts.length + 1,
        first: "Your",
        last: "Name",
        avatar: "https://robohash.org/you.png?size=200x200",
        twitter: "your_handle",
        notes: "Some notes",
        favorite: true,
      };
    contacts.push(contact);
}
export function updateContact(id,params){
    const contact = contacts.find(contact => contact.id === +id);
    Object.assign(contact,params);
}