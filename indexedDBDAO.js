class controller{
    constructor(){
        dao = new dao();
        let result = dao.getAll();
        console.log(result)
    
    }
}

class dao{
    async getAll(){
        let response = await fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=70dc60f3001c4ac9be64d2e1f236fa13');
        let json = await response.json();
        return json;
    }
}

new controller();