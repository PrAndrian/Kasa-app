
export const dataLoaderAccomodation = async () =>{
    const res = await fetch('http://localhost:3000/data/logements.json')
    const listLogement = await res.json()
    if (res.status === 404) {
      throw new Response("Not Found", { status: 404 });
    }
    return listLogement
  }