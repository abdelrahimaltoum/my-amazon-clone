export const initialState = {
    basket:[],
};
export const getBasketTotal = (basket) =>
basket?.reduce((amount , item) => item.price + amount , 0);
const reducer = (state , action) => {
    switch (action.type) {
        case "ADD-TO-BASKET":
            return{
                ...state,
                basket:[...state.basket , action.item],
            
            };
            case "REMOVE-FROM-BASKET" :
                const index = state.basket.findIndex(
                    (basketItem) => basketItem.id === action.id
                );
                let newbasket =[...state.basket];
                if(index>=0){
                    newbasket.splice(index , 1);
                }
                return{
                    ...state ,
                    basket:newbasket
    }
            
                
    
        default:
        return state;
    }
};
export default reducer;