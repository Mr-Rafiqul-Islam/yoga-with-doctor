import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

/** Explicit generics so selector callbacks always receive `RootState` (avoids implicit `any`). */
export function useAppSelector<TSelected>(
  selector: (state: RootState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean
): TSelected {
  return useSelector<RootState, TSelected>(selector, equalityFn);
}
