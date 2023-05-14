import { type TypedUseSelectorHook, useDispatch } from "react-redux";
import { type AppDispatch, type RootState } from "./store";
import { useSelector } from "react-redux";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
