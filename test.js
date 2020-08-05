/**
 * Classe de testes unitários
 * 
 * @since 1.0.0
 * @author Ricardo Gonçalves <ricardo@brgweb.com.br>
 * 
 */

 class UnitTests{
    constructor(){
        console.log('Testes Iniciados')
        this.testConstrutorController()
        this.testGetDataReturnArray()
        this.testNewsApiDaoCallApiReturnJson()
        this.testNewsApiGeraURLAll()
        this.testNewsApiGeraURLQuery()
        this.testNewsApiGeraURLQueryErrado()
        this.testNewsApiGetHeadlinesRetornaArray()
        this.testNewsApiGetQueryRetornaArray()
        console.log('Testes Concluídos')
    }

    testConstrutorController(){
        console.log('Teste Construtor Controller')
        try{
            this.controller = new Controller();
            console.log("Construtor Controller passou")
        }catch (e){
            console.log("Construtor Controller não passou")
            throw(e)
        }
        
    }

    testGetDataReturnArray(){
        this.controller.getData('index',(news) => {
            try{
                if(news instanceof Array){
                    console.log("Controller.getData() retornou array")
                }else{
                    console.log("testGetDataReturnArray não passou")
                }
                    
            }catch (e){
                console.log("testGetDataReturnArray não passou")
                throw(e)
            }
        });        
    }

    testConstrutorNewsApiDao(){

    }

    testConstrutorView(){

    }

    testConstrutorIndexedDbDao(){

    }

     testNewsApiDaoCallApiReturnJson() {
        try{
            let newsApiDao = new NewsApiDao();
            let url = "http://newsapi.org/v2/top-headlines?country=us&apiKey=70dc60f3001c4ac9be64d2e1f236fa13"
            newsApiDao.callApi(url).then((json)=>{
                console.log(json)
                if(json instanceof Promise){
                    console.log("testNewsApiDaoCallApiReturnJson não passou")
                }else{
                    console.log("testNewsApiDaoCallApiReturnJson passou")
                }   
            })
        }catch (e){
            console.log("testNewsApiDaoCallApiReturnJson não passou")
            throw(e)
        }
    }
    

    testNewsApiGeraURLAll(){
        let finalURL = "https://newsapi.org/v2/top-headlines?country=br&apiKey=70dc60f3001c4ac9be64d2e1f236fa13"
        try{
            let newsApiDao = new NewsApiDao();
            let url = newsApiDao.geraURL({
                "type"  : "top-headlines",
                "country" : "br"
            });
            if(url === finalURL){
                console.log("testNewsApiGeraURLAll passou")
               
            }else{
                console.log("testNewsApiGeraURLAll não passou") 

            }            
        }catch (e){
            console.log("testNewsApiGeraURLAll não passou")
            throw(e)
        }
    }

    testNewsApiGeraURLQuery(){
        let finalURL = "https://newsapi.org/v2/everything?q=Apple&apiKey=70dc60f3001c4ac9be64d2e1f236fa13"
        try{
            let newsApiDao = new NewsApiDao();
            let url = newsApiDao.geraURL({
                type  : "everything",
                q : "Apple"
            });
            if(url === finalURL){
                console.log("testNewsApiGeraURLQuery passou")
            }else{
                console.log("testNewsApiGeraURLQuery não passou")
                console.log("esperado " + finalURL)
                console.log("gerado " + url)
            }            
        }catch (e){
            console.log("testNewsApiGeraURLQuery não passou")
            throw(e)
        }
    }

    testNewsApiGeraURLQueryErrado(){
        let finalURL = "https://newsapi.org/v2/everything?q=Apple&apiKey=70dc60f3001c4ac9be64d2e1f236fa13"
        try{
            let newsApiDao = new NewsApiDao();
            let url = newsApiDao.geraURL({
                type  : "dsadas",
                q : "Apple"
            });
            if(url !== finalURL){
                console.log("testNewsApiGeraURLQuery passou")
            }else{
                console.log("testNewsApiGeraURLQuery não passou")
                console.log("esperado " + finalURL)
                console.log("gerado " + url)
            }            
        }catch (e){
            console.log("testNewsApiGeraURLQuery não passou")
            throw(e)
        }
    }

     testNewsApiGetHeadlinesRetornaArray(){
        try{
            let newsApiDao = new NewsApiDao();
            newsApiDao.getHeadlines("br",() =>{
                if(news instanceof Array){
                    console.log("testNewsApiGetHeadlinesRetornaArray passou")
                }else{
                    console.log("testNewsApiGetHeadlinesRetornaArray não passou")
                    console.log(news)
                }            
            })
        }catch (e){
            console.log("testNewsApiGetHeadlinesRetornaArray não passou")
            throw(e)
        }
    }

     testNewsApiGetQueryRetornaArray(){
        try{
            let newsApiDao = new NewsApiDao();
            newsApiDao.getQuery("Apple",() => {
                if(news instanceof Array){
                    console.log("testNewsApiGetQueryRetornaArray passou")
                }else{
                    console.log("testNewsApiGetQueryRetornaArray não passou")
                    console.log(news)
                }            
            })
        }catch (e){
            console.log("testNewsApiGetQueryRetornaArray não passou")
            throw(e)
        }
    }
 }

 new UnitTests();