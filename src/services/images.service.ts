import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Image } from "src/models/image.model";
import { map } from 'rxjs/operators'
import { Result } from "src/models/search.model"

@Injectable()
export class ImagesService {

  private result : Result;
  
  pagina = 1;

  texto : string ;

  favorites = [];

  search = [];

  images = [];

  id: any;

  constructor(private httpClient: HttpClient) {
 
  }



  getImages(pagina) : Observable<Image[]> {
    let endereco = 'https://api.unsplash.com/photos?per_page=24&page=1&order_by=latest&page=';
    let clienteAPI = '&client_id=7gq1AYl7h4F_zZHQvKnRRRFsl--G2xF16WueDwb77zA';
    let url = endereco  + pagina + clienteAPI;;
    return this.httpClient.get(url)
                          .pipe(map((resp) => { return this.converterImages(resp); }));
  }

  converterImages(respostaHttp) : Image[] {
    let ImagesResposta = respostaHttp;
    let images = [] ;

    let i = 0;
    for (i=0; i<ImagesResposta.length; i++) {
      let id = ImagesResposta[i].id;
      let titulo = ImagesResposta[i].alt_description;
      let data = ImagesResposta[i].created_at;
      let imagem = ImagesResposta[i].urls.raw + "&fit=crop&w=500&h=500";
      images.push(new Image(id,titulo,data, imagem));
    }

    return images;
  }

  getImagesId(id) {
    return this.httpClient.get('https://api.unsplash.com/photos/'+id+'?client_id=7gq1AYl7h4F_zZHQvKnRRRFsl--G2xF16WueDwb77zA').pipe(map((resp) => { return (resp);}))
  }


  getImagesSerch(texto) : Observable<Image[]> {
    let endereco = 'https://api.unsplash.com/search/photos?query=';
    let page = '&per_page=24page=1&order_by=latest&page= ';
    let clienteAPI = '&client_id=7gq1AYl7h4F_zZHQvKnRRRFsl--G2xF16WueDwb77zA';
    let url = endereco  + texto + page + this.pagina +  clienteAPI;;
    return this.httpClient.get(url)
                          .pipe(map((resp) => { return this.converterImagesSearch(resp); }));
  }


  converterImagesSearch(respostaHttp) : Image[] {
    let ImagesResposta = respostaHttp;
    let images = [] ;

    let i = 0;
    for (i=0; i<ImagesResposta.results.length; i++) {
      let id = ImagesResposta.results[i].id;
      let titulo = ImagesResposta.results[i].alt_description;
      let data = ImagesResposta.results[i].created_at;
      let imagem = ImagesResposta.results[i].urls.raw + "&fit=crop&w=500&h=500";
      images.push(new Image(id,titulo,data, imagem));
    }

    return images;
  }

   addSearch(newSearch: {text: string}) {
        this.search.push(newSearch);
      }     

 
  addFavorites(newFav:{id:string,imagem: string,title: string,data:string}){
    this.favorites.push(newFav);
  }
}

