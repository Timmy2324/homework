import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (newValue: number | number[]) => {
      if(typeof newValue === 'number') {
          setValue1(newValue);
      } else {
          setValue1(newValue[0]);
          setValue2(newValue[1]);
      }
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div style={{display: "flex", alignItems: 'center'}}>
                <span>{value1}</span>
                <span style={{display: "inline-block", width: "100px"}}>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        onChangeRange={onChangeRange}
                        // сделать так чтоб value1 и value2 изменялось
                    />
                </span>

                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
