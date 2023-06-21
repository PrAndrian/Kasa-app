const dataLoaderAbout = async () => {
  const res = await fetch('http://localhost:3000/data/A_propos.json');
  const listLogement = await res.json();

  return listLogement;
};

export default dataLoaderAbout;
