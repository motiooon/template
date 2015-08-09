import * from '../constants/FromActionTypes';
import * from '../constants/UserActionTypes';
import _ from 'lodash';

// Place here the default state for the master template
// If we need initial images and text here is the place
// Pottentially will have a separate mobiel state or will fetch remotely

const initialState = {
  headline:{
    text: "Hello from Redux"
  },
  tabs:[
    {text: "tab1"},
    {text: "tab2"},
    {text: "tab3"},
    {text: "tab4"},
  ],
  carousels: {
    instances:[
      {asins: ["45h6g56","56jlh654", "fg8907gd"]},
      {asins: ["45h6g56","56jlh654", "fg8907gd"]},
      {asins: ["45h6g56","56jlh654", "fg8907gd"]},
      {asins: ["45h6g56","56jlh654", "fg8907gd"]}    
    ],
    linkedToTabs: false
  }
};

export default function todos(state = initialState, action) {
  switch (action.type) {
  case CHANGE_HEADLINE_TEXT:
      // pure function, dont change state in here
      // return a new state
      let _state = _.clone(state, true);
      _state.headline = action.text;
      return _state;

  default:
    return state;
  }
}
