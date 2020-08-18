export interface Pedidos {

    pedidos: [
        {   
            user_id: String,
            estado: String,
            pedido: [{
                nombre: String,
                precio: number,
                cantidad: number,
                total: number
            }]
            total: number,
            fecha: String
        }]


}