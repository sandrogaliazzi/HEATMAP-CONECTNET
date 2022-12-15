const clientsFilter = [];

async function fecthData() {
  const result = await fetch("./kml/tomodatApiRequest.json");

  const data = await result.json();

  data.forEach(data => {
    const clients = data.clients;

    clientsFilter.push(
      clients.map(client => {
        return {
          name: client,
          cto: data.name,
          coord: data.coord
        }
      })
    )
  })

  return clientsFilter.flat();
}

async function findClient(query) {
  if (query !== "") {
    const searchResult = clientsFilter.filter(client => client.name.indexOf(query) > -1 && query)
  }
}

