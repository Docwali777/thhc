export function PLACES_TO_GO(state= {business:[]}, action){
  switch(action.type){
    case 'PLACES_TO_GO':
    let listOfPLaces = [...state.business, ...action.playload]
    return {business: listOfPLaces}
  }
  return state
}
