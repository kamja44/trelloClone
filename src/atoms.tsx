import { atom, selector } from "recoil";

export const minuteState = atom({
  key: "minutes",
  default: 0,
});

export const hourSelector = selector<number>({
  key: "hours",
  get: ({ get }) => {
    // selector의 get함수는 첫 번쨰 argument로 option이라는 object를 가진다.
    // 중괄호로 option을 열면 get이라는 함수를 다시 불러 state를 가져올 수 있다.
    // 개발자가 어떤 값을 return하던지 그 값은 hourSelector의 값이 된다.
    const minutes = get(minuteState);
    return minutes / 60;
  },
  set: ({ set }, newValue) => {
    const minutes = Number(newValue) * 60;
    set(minuteState, minutes);
  },
});
