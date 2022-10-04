import Users from "./Users";

function App() {
  const users = [{
    id: 1,
    firstname: 'Oleg',
    lastname: 'Petrov',
    address: 'Moscow, Russia',
    salary: 280
  },
  {
    id: 2,
    firstname: 'Anna',
    lastname: 'Ivanova',
    address: 'Berlin, Germany',
    salary: 500
  },
  {
    id: 3,
    firstname: 'Irina',
    lastname: 'Sidorova',
    address: 'Paris, France',
    salary: 700
  }
]
  return (
    <div>
     {
      users.map(el=> <Users {...el} key={el.id}/>)
     }
    </div>
  );
}

export default App;
