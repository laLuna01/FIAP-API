import Image from "next/image";
import Person from "./components/Person";

interface Item {
  name: string;
  address: string;
  phone: string;
  email: string;
  status: string;
}

const dataPerson: Item[] = [
  {
    name: "Maria",
    address: "Endereço da Maria",
    phone: "(11) 98765-4321",
    email: "maria@email.com.br",
    status: "success"
  },
  {
    name: "Leandro",
    address: "Endereço do Leandro",
    phone: "(12) 97462-2947",
    email: "leandro@gmail.com",
    status: "error"
  },
  {
    name: "Julia",
    address: "Endereço da Julia",
    phone: "(42) 94748-4343",
    email: "julia@hotmail.com",
    status: "success"
  }
];

export default function Home() {
  return (
    <main>
      {dataPerson.map((item: Item) => {
        return (
          <Person name={item.name} address={item.address} phone={item.phone} email={item.email} status={item.status}/>
        );
      })}
    </main>
  );
}
