import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import spacesReducer from "./spaces/spaces-reducer";
import { thunk, ThunkDispatch } from "redux-thunk";
import { SpacesActionType } from "./spaces/types";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const rootReducer = combineReducers({
    spaces: spacesReducer
});

export const store = legacy_createStore(rootReducer, {}, applyMiddleware(thunk));

//types
export type AppActionType = SpacesActionType;
export type AppRootStateType = ReturnType<typeof rootReducer>;
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, any, AppActionType>;

export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector;