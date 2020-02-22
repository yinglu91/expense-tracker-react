const AppReducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(x => x.id !== action.id)
      };
    default:
      return state;
  }
};

export default AppReducer;
