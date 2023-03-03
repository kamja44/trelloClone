import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hourSelector, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState); // minutes = 데이터 저장, setMinutes = 데이터 수정
  const hours = useRecoilValue(hourSelector); // useRecoilValue를 이용하여 hourSelector 값 불러오기
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value); // +를 사용함으로써 string데이터를 number형 데이터로 변환
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input value={hours} type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
