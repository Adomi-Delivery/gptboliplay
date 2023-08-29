import axios from "axios";

export default async function Page({ params }: { params: { id: string } }) {
    try{

    const id= params
    const response = await axios.get(`/api/orders/${id}`, {data: id});
        console.log(response.data)
    }catch (error) {
        console.error(error)
    }
    
}