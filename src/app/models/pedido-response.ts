import { UsuarioI } from './user';

export interface Pedidos{
    id: Number,
    usuario:UsuarioI;
    pizzas: [
        {
            nombre:String,
            cantidad:Number,
        }
    ]
    total:Number,
}