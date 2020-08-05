/**
 * Classe Controller 
 * 
 * @since 1.0.0
 * @author Ricardo Gonçalves <ricardo@brgweb.com.br>
 * 
 */

class Controller {

    news = [];

    routes = {
        "": "index",
        "#favoritos": "favoritos"
    }

    view;

    /**
     * Construtor do Controller
     * 
     * Define a rota, verifica a fonte de dados e renderiza a View
     * 
     */
    constructor() {
        let rota = this.routes[window.location.hash]
        this.getData(rota,(news) => {
            console.log(news)
        })
        //this.view = new View(rota)
        //view.render(this) 
    }


    /**
     * Método responsável por buscar a fonte de dados 
     * 
     * Método responsável por buscar a fonte de dados baseado
     * na rota. Carrega as notícias da API na página inicial
     * e carrega as notícias salvas no indexedDB na pag Favoritos
     * 
     * @params {String} rota
     * 
     * @returns {Array} list
     * 
     */
    getData(rota,callback) {
        let news;
        try {
            let dao = this.rota === "favoritos" ?
                new IndexedDbDao() :
                new NewsApiDao();
            dao.getAll(callback)
        } catch (e) {
            console.log(e)
        }
    }

    removeSpacesFromString(str) {
        return str.replace(/\s/g, "");
    }

}