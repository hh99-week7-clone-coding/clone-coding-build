import apis from '../../api/main';


// initial state

const initialState = {
    bestseller: [],    
    isLoading: false,
    
}

// action
// Kids best-seller
const LOAD_BEST_REQ = "models/LOAD_BEST_REQ";
const LOAD_BEST_SUCCESS = "models/LOAD_BEST_SUCCESS";
const LOAD_BEST_ERROR = "models/LOAD_BEST_ERROR";

// action creator

// Kids BestSellor
const loadBestSellerReq = () => ({ type : LOAD_BEST_REQ });
const loadBestSellerSuccess = (payload) => ({type: LOAD_BEST_SUCCESS, payload});
const loadBestSellerError = (error) => ({type: LOAD_BEST_ERROR, error});



// 가져오기
// Kids Best Sellor
export const __loadBestSellor = (KidsID1) => async(dispatch, getState) => {
    
    try {
        dispatch(loadBestSellerReq());
        const { data } = await apis.getKidsBest(KidsID1)
        console.log(data);        
        dispatch(loadBestSellerSuccess(data));
    } catch(error){
        dispatch(loadBestSellerError(error))
        // alert("에러가 발생했습니다.")
        console.log(error);
    } 
}




// reducer

const modelslist = (state = initialState, action ) => {   
    
    switch (action.type) {
        case LOAD_BEST_REQ:
            return {
                ...state, 
                isLoading: true,
            };
        case LOAD_BEST_SUCCESS:
            return {
                ...state,
                bestseller: action.payload,
                isLoading: false,
            };
        case LOAD_BEST_ERROR:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

export default modelslist;