export async function fetchMoedas() {
    try {
      const response = await fetch(
        "https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas?$top=100&$format=json"
      );
      const data = await response.json();
      return data.value.map((moeda) => moeda.simbolo);
    } catch (error) {
      console.error("Erro ao buscar moedas:", error);
      return [];
    }
  }
  
  export async function fetchCotacao(moeda, data) {
    try {
      const url = `https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoMoedaDia(moeda=@moeda,dataCotacao=@dataCotacao)?@moeda='${moeda}'&@dataCotacao='${data}'&$top=1&$format=json`;
      const response = await fetch(url);
      const dataCotacao = await response.json();
      return dataCotacao.value.length > 0 ? dataCotacao.value[0].cotacaoVenda : null;
    } catch (error) {
      console.error("Erro ao buscar cotação:", error);
      return null;
    }
  }
  