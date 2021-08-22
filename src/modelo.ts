export class Producto{
    title: string;
    price: number;
    thumbnail: string;
    id: number;

    constructor(title: string, price: number, thumbnail: string, id: number){
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = id;
    }

    /*Listado de Productos. Recibe un array y lo devuelve, capaz no tenga mucho sentido este método 
      pero la clase tiene la responsabilidad de devolver los datos*/
    listar(array: Producto[]){  
        
        console.log('Responsabilidad de listar');  
    return array;
    }

    /*Listado de Productos por ID. Recibe un array y un ID de producto, se recorre el array y se devuelve 
      el elemento que coincide con el ID o un objeto vacío*/
    listarItem(array: Producto[], id: number){    
        
        let item = {};
        array.forEach(element => {
            if(element.id == id){
                item = element;
            }
        });
        console.log('Responsabilidad de listarItem');
        return item;
    }

    /*Agregado de objeto en el array. Recibe un array y toma los valores del constructor e incrementa el id
      de acuerdo a la longitud total del array al finalizar retorna el array completo*/
    guardar(array: Producto[]){
        
        const vtit: string = this.title;
        const vprice: number = this.price;
        const vthumb: string = this.thumbnail
        const vid = array.length + 1;

        let nuevoProducto: Producto;
        
        /*nuevoProducto = {        
            title :vtit,
            price :vprice,
            thumbnail :vthumb,
            id : vid
        };
    
        array.push(nuevoProducto);*/
        console.log('Responsabilidad de guardar');
        return array;
    }

    /*Modificación de objeto en el array. Recibe un array y parámetros con los valores a cambiar al finalizar 
    retorna el objeto modificado*/
    actualizar(array: Producto[], nid: number, ntitle: string, nprice: number, nthumbnail: string){
        
        let actProducto = {        
            title : ntitle,
            price : nprice,
            thumbnail : nthumbnail,
            id : nid,
        };

        array.forEach(element => {
            if(element.id == nid){
               element.title = ntitle;
               element.price = nprice;
               element.thumbnail = nthumbnail; 
            }
        });

        console.log('Responsabilidad de actualizar');
        return actProducto;

    }

    /*Borra un objeto en el array. Recibe un array y el id y lo elimina del array al finalizar retorna 
    el objeto borrado*/
    borrar(array: Producto[], id: number){
        let pos: number = -1;
        array.forEach((element, i) => {
            if(element.id == id){
                pos = i;
                console.log('POS ', pos);
            }
        });

        let borrItem = array.splice(pos, 1);
        console.log('Responsabilidad de borrar');
        return borrItem;
    }
}    