class Punto{
    constructor(x,y){
        this.x=0;
        this.y=0;
        this.distancia=0;
    }
    
    calcularDistancia(x,y){
        if (this.x==0 && this.y==0) {
            return this.distancia;
        }
        else{
            var punto1=(x-this.x);
            var punto2=(y-this.y);
            this.distancia+=Math.sqrt(Math.pow(punto1, 2) + Math.pow(punto2, 2));
            this.x=x;
            this.y=y;
            return this.distancia;
        }
    }
}
