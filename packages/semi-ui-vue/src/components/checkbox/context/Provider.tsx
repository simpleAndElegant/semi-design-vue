import {defineComponent, ref, h, Fragment, provide, watch} from 'vue'
import {CheckboxContext} from "../context";


export const vuePropsType = {
  value: Object
}
const Provider = defineComponent<{value:CheckboxContext}>((props, {slots}) => {
  const ConfigContext = ref<CheckboxContext>(props.value);

  watch(()=>props.value, ()=>{
    ConfigContext.value = props.value
  }, { deep: true})
  provide('CheckboxContext', ConfigContext)
  return ()=>slots.default?slots.default(ConfigContext.value):null
})

Provider.props = vuePropsType

export default Provider

