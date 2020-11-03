const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

class News {
    
    getNoticias(req,res){
        let url = `${apiUrl}/everything?`;
        let key;
        console.log(req.query);
        for (key in req.query) {
            url += `${key}=${req.query[key]}&`
        }
        url += `apiKey=${apiKey}`;
        console.log(url);

        axios.get(url).then(response => {
            console.log(response.data.articles.length)
            res.send(response.data.articles);
        }).catch(err => {
            res.send('Failure!')
            res.end();
        });
        
    }
    
    getHeadlines(req,res){
        let url = `${apiUrl}/top-headlines?`;
        let key;
        for (key in req.query) {
            url += `${key}=${req.query[key]}&`
        }
        url += `apiKey=${apiKey}`;
        console.log(url);

        axios.get(url).then(response => {
            res.send(response.data.articles);
        }).catch(err => {
            res.send('Failure!')
            res.end();
        });
        
    }
    
    getSources(req,res){
        let url = `${apiUrl}/sources?`;
        let key;
        for (key in req.query) {
            url += `${key}=${req.query[key]}&`
        }
        url += `apiKey=${apiKey}`;
        console.log(url);

        axios.get(url).then(response => {
            console.log(response.data.sources.length)
            res.send(response.data.sources);
        }).catch(err => {
            res.send('Failure!')
            res.end();
        });
        
    }
    
    getSourcesName(req,res){
        let url = `${apiUrl}/sources?apiKey=${apiKey}`;
        console.log(url);

        axios.get(url).then(response => {
            let sources = [];
            for (let source in response.data.sources) {
              sources.push(response.data.sources[source].id)
            }
            res.send(sources);
        }).catch(err => {
            res.send('Failure!')
            res.end();
        });
        
    }

    getById(req,res){
        res.send('Traer noticia ' + req.params.noticiaID);
    }
}
module.exports = new News();