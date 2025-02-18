import {defineComponent, ref, h, Fragment, useSlots} from 'vue'
import InputNumber from "../index";

interface InputNumberDemoProps {
  name?: string
}

export const vuePropsType = {
  name: String
}
const InputNumberDemo = defineComponent<InputNumberDemoProps>((props, {}) => {
  const slots = useSlots()


  return () => (
    <div>
      <div style={{ width: 280 }}>
        <label>简单数字输入框</label>
        <InputNumber />
        <br/><br/>

        <label>设置了步长 step=2 </label>
        <InputNumber step={2} />
        <br/><br/>

        <label>设置 shiftStep=100， 按住 shift 同时点击按钮，可以一次增加/减少100 </label>
        <InputNumber shiftStep={100} />
        <br/><br/>

        <label>设置了上下界 min=1,max=10</label>
        <InputNumber min={1} max={10} defaultValue={1} />
        <br/><br/>
      </div>
    </div>
  )
})

InputNumberDemo.props = vuePropsType
InputNumberDemo.name = 'InputNumberDemo'

export default InputNumberDemo

