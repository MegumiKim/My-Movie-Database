

export async function filmsAPI(searchTerm){

  const URL = `https://www.omdbapi.com/?apikey=f9d54557&s=${searchTerm}`;

  const response = await fetch(URL);
  const json = await response.json();

  if(response.True){
    console.log(json);
    
return json;
  }else{
    throw new Error(json);
  }
}