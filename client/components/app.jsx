import React, { Component } from 'react';
import Faker from 'faker'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render(props) {
    return (
      <div>
        I am a Price Paid Graph, or so I shall be, one day. 
      </div>
    )
  }
}

function generateUsers() {
  let users = []
  for (let id=1; id <= 100; id++) {

    let firstName = Faker.name.firstName();
    let lastName = Faker.name.lastName();
    let email = Faker.internet.email();

    users.push({
        "id": id,
        "first_name": firstName,
        "last_name": lastName,
        "email": email
    });
  }
  return { "data": users }
}
let dataObj = generateUsers();
console.log(dataObj);
export default App