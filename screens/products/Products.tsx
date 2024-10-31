import { View, Text, Button } from 'react-native';
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import { getProducts, postProduts } from '../../const/utils/products';
import { Products } from '../../const/types/products';

export const ProductsScreen = () => {

  const queryClient = useQueryClient()
  const query = useQuery({ queryKey: ['produts'], queryFn: getProducts })
  console.log(query)
    const mutation = useMutation({
      mutationFn: postProduts,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['produts'] })
      },
      onError: (error) => {
        console.log(error)
      }
    })
  return (
    <View>
      <Text>Products</Text>
      <Button title="Add Produts" onPress={() => mutation.mutate({ name: 'mayonesa' })} />
      {query.data?.map((product:Products) => <Text key={product.id}>{product.name}</Text>)}
      </View>

  )
}