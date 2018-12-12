import { combineReducers, Reducer } from 'redux';
import { counterReducer } from './counter/index';
import graphReducer from './graph/reducers';
import intersectionReducer from './intersection/reducers'
import appReducer from './app/reducers';
import { State as CounterState } from './counter/index';
import { IGraphView} from '../models/graph';
import { IIntersectionView } from '../models/intersection';
import {reducer as notifierReducer, INotifierStore } from 'graphlabs.core.notifier';
import {App} from "./app";

export interface RootState {
    readonly graph: IGraphView;
    intersection : IIntersectionView;
    counterState: CounterState;
    notifier: INotifierStore;
    app: App;
}

const rootReducer: Reducer<RootState> = combineReducers<RootState>({
    counter: counterReducer,
    graph: graphReducer,
    intersection: intersectionReducer,
    app: appReducer,
    notifier: notifierReducer
});

export default rootReducer;