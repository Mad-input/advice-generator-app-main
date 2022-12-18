const getAdvice = async () => {
  const res = fetch('../advice.json')
  .then(res => res.json()).then(value => value)

  const objet = await res
  const advices = objet.advices
  


  return advices
};

export default getAdvice