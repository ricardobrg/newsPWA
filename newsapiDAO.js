/**
 * Data Access Object for newsapi.org
 *  
 * @author Ricardo Gonçalves <ricardo@brgweb.com.br>
 * @since 1.0.0
 * 
 * @see https://newsapi.org/docs
 * 
 */

class NewsApiDao{

    apiKey = "70dc60f3001c4ac9be64d2e1f236fa13";

    baseUrl = "https://newsapi.org/v2/";
    
    /**
     * Retorna a lista de top-headlines do Brasil
     * 
     * @returns {Array} notícias do Brasil
     */
    getAll(callback){
        this.getHeadlines("br").then((news) => {
            callback(news)
        })
    }   
    
    /**
     * Retorna lista de top-headlines da Api
     * 
     * @returns {Array} news
     */
    async getHeadlines(countryQuery){
        let url = this.geraURL({
            type : "top-headlines",
            country: countryQuery
        })
        let json = await this.callApi(url)
        let news = json.articles
        return news
    }

    /**
     * Retorna lista de query da Api
     * 
     * @returns {Array} news
     */
    async getQuery(query){
        let url = this.geraURL({
            type : "everything",
            q : query
        })
        let json = await this.callApi(url)
        let news = json.articles
        return news
    }
    /**
     * Gerar a URL de chamada do NewsAPI
     * 
     * Gera a URL de chamda do NewsAPI utilizandos os valores 
     * passados no parâmetro options. 
     * options {
     *  type : "everything" ou "top-headlines"
     *  q : palavra-chave a ser pesquisada (obrigatório para everything)
     *  country : país ISO 3361 2 letras (obrigatório para top-headlines)
     * }
     * 
     * TODO : Acrescentar mais parâmentros conforme documentação
     * 
     * @see https://newsapi.org/docs/get-started
     * @param {Object} options parâmetros da NewsAPI
     */
    geraURL(options){
        let url;
        if(options === undefined ) throw("options undefined")
        switch(options['type']){
            case "everything" :
                url = this.baseUrl + "everything?q="+ options["q"] +"&apiKey="+this.apiKey
                break;
            case "top-headlines" :
                url = this.baseUrl + "top-headlines?country="+ options["country"] +"&apiKey="+this.apiKey
                break;
        }
        return url
    }

    /**
     * Realiza a chamada da URL
     * 
     * 
     * @param {String} url URL completa da requisição
     * @returns {Object} json
     */
    async callApi(url){
        let response = await fetch(url);
        let json = await response.json();
        return json;
    }    

 }