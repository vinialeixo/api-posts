import { useState } from "react";
import axios from "axios";
import { User } from "../../models/user";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

interface GetUsersResponse {
  data: User[];
}

const People = () => {
  const [users, setUsers] = useState<User[]>([]);

  async function getUsers() {
    try {
      //const data:GetUsersResponse
      const { data, status } = await axios.get<User[]>(baseURL, {
        //a chamada da API é realizada utilizando o método axios.get
        headers: {
          Accept: "aplication/json",
        },
      });
      console.log(JSON.stringify(data, null, 4));

      //response status is:200
      console.log("response status is: ", status);

      setUsers(data); // update the state variable with the data
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }
  getUsers();

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
    >
      <Card>
        {users.map((user) => (
          <div key={user.id}>
            {user.id}-<strong>{user.title}</strong>
            ----{user.body}
          </div>
        ))}
        <CardHeader>
          <Heading size="md"> Customer dashboard</Heading>
        </CardHeader>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
        <CardFooter>
          <Button>View here</Button>
        </CardFooter>
      </Card>
    </SimpleGrid>
  );
};
export default People;
