import { View, Text, Button } from "react-native";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { postClients, getClients } from "../../const/utils/clients";
import { Client } from "../../const/types/clients";

export const Clients = () => {
  const queryClient = useQueryClient()
  const query = useQuery({ queryKey: ['clients'], queryFn: getClients })
  console.log(query)
    const mutation = useMutation({
      mutationFn: postClients,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['clients'] })
      },
      onError: (error) => {
        console.log(error)
      }
    })
  return (
    <View>
      <Text>Clients</Text>
      <Button title="Add Client" onPress={() => mutation.mutate({ name: 'Jonathan2' })} />
      {query.data?.map((client:Client) => <Text key={client.id}>{client.name}</Text>)}
    </View>
  );
};
